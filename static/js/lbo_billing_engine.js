// =============================================================================
// LBO BILLING PERIOD ENGINE — lbo_billing_engine.js
// =============================================================================

const LBO_BILLING_PRICES = {
    tier_1_basic         : { m1:0,      m3:null,  m6:null,   m10:null,  m12:null  },
    tier_2_standard      : { m1:14.99,  m3:34.99, m6:null,   m10:null,  m12:null  },
    tier_3_biz_standard  : { m1:24.99,  m3:45,    m6:55,     m10:60,    m12:null  },
    tier_4_biz_enterprise: { m1:30,     m3:55,    m6:80,     m10:100,   m12:null  },
    tier_5_advanced      : { m1:39.99,  m3:64,    m6:114.99, m10:130,   m12:150   },
    tier_6_pro           : { m1:49.99,  m3:89.99, m6:150,    m10:180,   m12:230   },
    tier_7_ultra         : { m1:69.99,  m3:125,   m6:1600,   m10:180,   m12:null  },
    tier_8_unlimited     : { m1:999,    m3:3500,  m6:null,   m10:null,  m12:null  }
};

const LBO_PERIOD_KEYS = ['m1','m3','m6','m10','m12'];

const LBO_PERIOD_LABELS = {
    en: { m1:'Monthly',    m3:'3 Months',  m6:'6 Months',  m10:'10 Months', m12:'Annual',  onetime:'One time',      na:'N/A'          },
    ru: { m1:'В месяц',   m3:'3 месяца',  m6:'6 месяцев', m10:'10 месяцев',m12:'Год',     onetime:'Единоразово',   na:'Недоступно'   },
    kk: { m1:'Айлық',     m3:'3 ай',      m6:'6 ай',      m10:'10 ай',     m12:'Жылдық',  onetime:'Бір рет',       na:'Жоқ'          },
    zh: { m1:'月付',       m3:'3个月',     m6:'6个月',     m10:'10个月',    m12:'年付',    onetime:'一次性',        na:'不可用'        },
    es: { m1:'Mensual',   m3:'3 meses',   m6:'6 meses',   m10:'10 meses',  m12:'Anual',   onetime:'Pago único',    na:'No disponible'},
    de: { m1:'Monatlich', m3:'3 Monate',  m6:'6 Monate',  m10:'10 Monate', m12:'Jährlich',onetime:'Einmalig',      na:'Nicht verfügbar'},
    fr: { m1:'Mensuel',   m3:'3 mois',    m6:'6 mois',    m10:'10 mois',   m12:'Annuel',  onetime:'Unique',        na:'Non disponible'},
    ar: { m1:'شهري',      m3:'3 أشهر',   m6:'6 أشهر',   m10:'10 أشهر',  m12:'سنوي',   onetime:'مرة واحدة',     na:'غير متاح'     },
    ja: { m1:'月払い',    m3:'3ヶ月',     m6:'6ヶ月',     m10:'10ヶ月',    m12:'年払い',  onetime:'1回払い',       na:'利用不可'      },
    pt: { m1:'Mensal',    m3:'3 meses',   m6:'6 meses',   m10:'10 meses',  m12:'Anual',   onetime:'Pagamento único',na:'Indisponível' }
};

function lboGetPeriodLabel(key, lang) {
    var map = LBO_PERIOD_LABELS[lang] || LBO_PERIOD_LABELS.en;
    return map[key] || LBO_PERIOD_LABELS.en[key] || key;
}

function lboGetPeriodPrice(tierId, key, lang) {
    var row = LBO_BILLING_PRICES[tierId];
    if (!row || row[key] === undefined) return null;
    return row[key];
}

function lboFmtPrice(usd, lang) {
    if (usd === null) return null;
    if (typeof formatLocalizedTierPrice === 'function') {
        return formatLocalizedTierPrice(usd, lang, 'symbolOnly');
    }
    return (usd === 0) ? '$0' : ('$' + usd);
}

function buildBillingTabs(tier, lang) {
    var isBasic = (tier.usdPrice === 0);
    var id = tier.id;

    if (isBasic) {
        return '<div class="lbo-bill-onetime">' +
            '<span class="lbo-bill-ot-label">' + lboGetPeriodLabel('onetime', lang) + '</span>' +
            '<span class="lbo-bill-ot-price">' + lboFmtPrice(0, lang) + '</span>' +
        '</div>';
    }

    var tabs = '', panels = '';
    LBO_PERIOD_KEYS.forEach(function(key, i) {
        var usd   = lboGetPeriodPrice(id, key, lang);
        var avail = (usd !== null);
        var label = lboGetPeriodLabel(key, lang);
        var isM1  = (key === 'm1');
        var tabCls = 'lbo-bill-tab' + (isM1 ? ' active' : '') + (avail ? '' : ' lbo-bill-tab-na');
        var disAttr = avail ? '' : ' disabled';

        tabs += '<button class="' + tabCls + '" data-k="' + key + '" data-tid="' + id + '"' +
            ' onclick="lboSwitchBilling(\'' + id + '\',\'' + key + '\',this,event)"' + disAttr + '>' +
            label + '</button>';

        var priceStr = avail ? lboFmtPrice(usd, lang) : lboGetPeriodLabel('na', lang);
        var panCls = 'lbo-bill-panel' + (isM1 ? ' active' : '') + (isM1 ? ' lbo-bill-panel-m1' : '');
        panels += '<div class="' + panCls + '" id="bp-' + id + '-' + key + '">' +
            '<div class="lbo-bill-price-wrap' + (isM1 ? ' lbo-bill-gold-ring' : '') + '">' +
                '<span class="lbo-bill-pnum' + (avail ? '' : ' lbo-bill-na') + '">' + priceStr + '</span>' +
                (isM1 ? '<span class="lbo-bill-mo">/mo</span>' : '') +
                (!isM1 && avail ? '<span class="lbo-bill-period-note">' + label + '</span>' : '') +
            '</div></div>';
    });

    return '<div class="lbo-billing-wrap" id="billing-' + id + '">' +
        '<div class="lbo-bill-tabs">' + tabs + '</div>' +
        '<div class="lbo-bill-panels">' + panels + '</div>' +
    '</div>';
}

function lboSwitchBilling(tierId, key, btn, ev) {
    if (ev) { ev.stopPropagation(); }
    var wrap = document.getElementById('billing-' + tierId);
    if (!wrap) return;
    wrap.querySelectorAll('.lbo-bill-tab').forEach(function(t) { t.classList.remove('active'); });
    wrap.querySelectorAll('.lbo-bill-panel').forEach(function(p) { p.classList.remove('active'); });
    btn.classList.add('active');
    var panel = document.getElementById('bp-' + tierId + '-' + key);
    if (panel) { panel.classList.add('active'); }
    if (typeof playChime === 'function') { playChime(432); }
}
