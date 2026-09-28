/**
 * =============================================================================
 * LBO PRICING HERO ENGINE — Part 1
 * File: static/js/lbo_pricing_hero_engine.js
 * =============================================================================
 */

/* SECTION 1: HERO CONTENT DEFINITIONS */

const LBO_HERO_CONTENT = {
    kk: {
        eyebrow: "LBO ЕГЕМЕНДІ ЖАРАТУШЫ ДӘРЕЖЕЛЕРІ",
        headline_part1: "LBO — Баға",
        headline_gold: "оқиғаларға,",
        headline_part2: "сөз санына емес",
        subtitle: "Ғаламыңызға сәйкес келетін дәрежені таңдаңыз. Тегін зерттеуден шексіз аңызға айналған мифтік әлемдерге дейін — әрбір жасаушы өз орнын табады.",
        cta_primary: "Ерте Қолжетімділік Алу",
        cta_secondary: "Барлық деңгейлерді салыстыру",
        stats: [
            { num: "10", label: "Егеменді Деңгей" },
            { num: "100", label: "Әлем Тілі" },
            { num: "0", label: "Бастау Үшін" }
        ],
        scroll_hint: "ЗЕРТТЕУ ҮШІН АЙНАЛДЫРЫҢЫЗ",
        compare_bar_text: "Қай жоспар сәйкес келетінін білмейсіз бе?",
        compare_bar_btn: "Барлық жоспарларды салыстыру",
        topbar_pill_1: "LBO ШЫҒАРМАШЫЛЫҚ ДӘРЕЖЕЛЕРІ",
        topbar_pill_2: "ӨЗ ЖОСПАРЫҢДЫ ТАП",
        topbar_cta: "Ерте Қолжетімділік",
        cat_pills: [
            { id: "all",      label: "Барлық деңгейлер" },
            { id: "create",   label: "Жасау"            },
            { id: "generate", label: "Генерация"        },
            { id: "publish",  label: "Жариялау"         },
            { id: "analyze",  label: "Талдау"           },
            { id: "elite",    label: "Элита"            }
        ],
        explore_link: "Барлық мүмкіндіктер",
        trust_items: [
            { icon: "lock", text: "Қауіпсіз төлемдер"       },
            { icon: "inf",  text: "Кез келген уақытта бас тарту" },
            { icon: "glob", text: "100 әлем тілі"          },
            { icon: "bolt", text: "Лезде қолжетімділік"     }
        ],
        faq: [
            { q: "Линар Токен деген не?", a: "Линар Токендері — кейіпкерлерді генерациялау, уақыт капсулалары, ЖИ дауысын таңдау және т.б. ЖИ мүмкіндіктерін қуаттайтын ішкі валюта. Әр деңгей ай сайынғы лимитке ие." },
            { q: "Жоғарырақ деңгейге өтуге бола ма?", a: "Иә. Кез келген сәтте жоғарырақ деңгейге өтуге болады. Пайдаланылмаған токендер пропорционалды түрде сақталады." },
            { q: "Токендер бітіп қалса не болады?", a: "Сіздің есептік жазбаңыз белсенді болып қалады. Токенсіз функциялар қолжетімді және қосымша токен сатып алуға болады." }
        ],
        marquee: [
            "Линар Токендері","Уақыт Капсулалары","ЖИ Тренд Шпионы","Атау Генераторы",
            "ЖИ Дауысы","ЖИ Кейіпкерлері","Мәтін Түзетулері","ЖИ Сәулетшісі",
            "ЖИ Картографы","Бейнегенерация","Лор Психологы","Лор Сарапшысы",
            "Құпия Сыйлық","Жас Шектеулі ЖИ"
        ],
        menu_sections: [
            { title: "Жасау",     items: [["ЖИ-жазушы","ЖИ-мен бірлескен проза"],["Кейіпкерлер Студиясы","Терең кейіпкерлер сомдау"],["Әлем Картографы","Ғаламыңызды картаға түсіріңіз"],["Лор Сәулетшісі","Әлем тарихын жүйелеу"]] },
            { title: "Генерация", items: [["Линар Токендері","Барлық ЖИ мүмкіндіктері"],["Уақыт Капсулалары","Сақтау және қалпына келтіру"],["Атау Генераторы","Бір сессияда 7+ атау"],["ЖИ Дауысы","Нарраторды таңдаңыз"]] },
            { title: "Жариялау",  items: [["Бейне-Көріністер","Кинематографиялық клиптер"],["Қолжазба Экспорты","Баспаға дайын құжат"],["Құпия Сыйлықтар","Әр циклде тосын сыйлар"],["Автор Мәртебесі","Қауымдастықтағы бедел"]] },
            { title: "Талдау",    items: [["Тренд Шпионы","3 нарықтық есеп"],["Консистенттілік","Сюжеттік олқылықтарды табу"],["ЖИ Психология","Мотивацияны талдау"],["Аналитика","Оқырмандарды түсіну"]] }
        ]
    },
    pt: {
        eyebrow: "NÍVEIS DE CRIADOR SOBERANO LBO",
        headline_part1: "LBO — Precificado por",
        headline_gold: "histórias,",
        headline_part2: "não por contagem de palavras",
        subtitle: "Escolha o nível ideal para o seu universo. De explorações gratuitas a reinos míticos infinitos — cada criador encontra seu santuário.",
        cta_primary: "Solicitar Acesso Antecipado",
        cta_secondary: "Comparar todos os níveis",
        stats: [
            { num: "10", label: "Níveis Soberanos" },
            { num: "100", label: "Idiomas Globais" },
            { num: "0", label: "para Começar" }
        ],
        scroll_hint: "ROLE PARA EXPLORAR",
        compare_bar_text: "Em dúvida sobre qual plano escolher?",
        compare_bar_btn: "Comparar Todos os Planos",
        topbar_pill_1: "NÍVEIS CRIATIVOS LBO",
        topbar_pill_2: "ENCONTRE SEU PLANO",
        topbar_cta: "Acesso Antecipado",
        cat_pills: [
            { id: "all",      label: "Todos os Níveis" },
            { id: "create",   label: "Criar"           },
            { id: "generate", label: "Gerar"           },
            { id: "publish",  label: "Publicar"        },
            { id: "analyze",  label: "Analisar"        },
            { id: "elite",    label: "Elite"           }
        ],
        explore_link: "Explorar todos os recursos",
        trust_items: [
            { icon: "lock", text: "Pagamentos seguros"   },
            { icon: "inf",  text: "Cancele a qualquer momento" },
            { icon: "glob", text: "100 idiomas"          },
            { icon: "bolt", text: "Acesso instantâneo"   }
        ],
        faq: [
            { q: "O que é um Token Linar?", a: "Tokens Linar são a moeda interna que alimenta recursos de IA: geração de personagens, cápsulas de tempo, seleção de voz por IA e muito mais. Cada nível tem uma cota mensal." },
            { q: "Posso fazer upgrade a qualquer momento?", a: "Sim. Você pode migrar para um nível superior a qualquer momento. Tokens não utilizados são transferidos proporcionalmente." },
            { q: "O que acontece se meus tokens acabarem?", a: "Sua conta permanece ativa. Você mantém acesso aos recursos que não exigem tokens e pode adquirir pacotes avulsos ou fazer upgrade." }
        ],
        marquee: [
            "Tokens Linar","Cápsulas do Tempo","Espião de Tendências IA","Gerador de Nomes",
            "Voz de IA","Personagens de IA","Correções de Texto","Arquiteto IA",
            "Cartógrafo IA","Geração de Vídeo","Psicólogo de Lore","Especialista em Lore",
            "Presente Secreto","IA para Maiores"
        ],
        menu_sections: [
            { title: "Criar",     items: [["Escrita com IA","Prosa colaborativa com IA"],["Estúdio de Personagens","Construa personas profundas"],["Cartógrafo do Mundo","Mapeie seu universo fictício"],["Arquiteto de Lore","Estruture a história do mundo"]] },
            { title: "Gerar",     items: [["Tokens Linar","Alimentam todos os recursos IA"],["Cápsulas do Tempo","Salve e restaure estados narrativos"],["Gerador de Nomes","7+ nomes únicos por sessão"],["Voz de IA","Escolha seu narrador IA"]] },
            { title: "Publicar",  items: [["Cenas em Vídeo","Gere clipes cinematográficos"],["Exportação de Manuscrito","Documentos prontos para publicação"],["Presentes Secretos","Recompensas misteriosas a cada ciclo"],["Status de Autor","Reconhecimento na comunidade"]] },
            { title: "Analisar",  items: [["Espião de Tendências","3 relatórios de tendências"],["Consistência de Lore","Detecte furos de roteiro automaticamente"],["Psicologia IA","Análise de motivação de personagens"],["Métricas de Leitores","Compreenda seu público"]] }
        ]
    },
    en: {
        eyebrow: "LBO SOVEREIGN CREATOR TIERS",
        headline_part1: "LBO — Priced by",
        headline_gold: "stories,",
        headline_part2: "not by word count",
        subtitle: "Choose the tier that fits your universe. From free explorations to infinite mythic realms — every creator finds their place in the Sanctuary.",
        cta_primary: "Request Early Access",
        cta_secondary: "Compare all tiers",
        stats: [
            { num: "10", label: "Sovereign Tiers" },
            { num: "100", label: "Languages" },
            { num: "0", label: "to Start" }
        ],
        scroll_hint: "SCROLL TO EXPLORE",
        compare_bar_text: "Not sure which plan fits you?",
        compare_bar_btn: "Compare All Plans",
        topbar_pill_1: "LBO CREATIVE TIERS",
        topbar_pill_2: "FIND YOUR PLAN",
        topbar_cta: "Get Early Access",
        cat_pills: [
            { id: "all",      label: "All Tiers"  },
            { id: "create",   label: "Create"     },
            { id: "generate", label: "Generate"   },
            { id: "publish",  label: "Publish"    },
            { id: "analyze",  label: "Analyze"    },
            { id: "elite",    label: "Elite"      }
        ],
        explore_link: "Explore all features",
        trust_items: [
            { icon: "lock", text: "Secure payments"  },
            { icon: "inf",  text: "Cancel anytime"   },
            { icon: "glob", text: "100 languages"    },
            { icon: "bolt", text: "Instant access"   }
        ],
        faq: [
            { q: "What is a Linar Token?", a: "Linar Tokens are the in-universe currency powering AI features: character generation, scenario capsules, AI voice selection, and more. Each tier comes with a monthly allocation." },
            { q: "Can I upgrade at any time?", a: "Yes. You can upgrade from any tier to any higher tier at any moment. Unused tokens carry over proportionally when upgrading." },
            { q: "What happens if I run out of tokens?", a: "Your account stays active. You retain access to non-token features and can purchase token top-ups or upgrade your tier." }
        ],
        marquee: [
            "Linar Tokens","Time Capsules","AI Trend Spy","Name Generator",
            "AI Voice","AI Characters","Text Corrections","AI Architect",
            "AI Cartographer","Video Generation","Lore Psychologist","Lore Expert",
            "Secret Gift","Age-Gated AI"
        ],
        menu_sections: [
            { title: "Create",   items: [["AI Writing","Collaborative prose with AI"],["Character Studio","Build deep fictional personas"],["World Cartographer","Map your fictional universe"],["Lore Architect","Structure world history"]] },
            { title: "Generate", items: [["Linar Tokens","Power all AI features"],["Time Capsules","Save & restore story states"],["Name Generator","7+ unique names per session"],["AI Voice","Choose your AI narrator"]] },
            { title: "Publish",  items: [["Video Scenes","Generate cinematic clips"],["Manuscript Export","Publication-ready docs"],["Secret Gifts","Mystery rewards each cycle"],["Author Status","Unlock community recognition"]] },
            { title: "Analyze",  items: [["Trend Spy","3 AI market trend reports"],["Lore Consistency","Spot plot holes automatically"],["AI Psychology","Character motivation analysis"],["Reader Analytics","Understand your audience"]] }
        ]
    },
    ru: {
        eyebrow: "LBO СУВЕРЕННЫЕ УРОВНИ СОЗДАТЕЛЯ",
        headline_part1: "LBO — Цена по",
        headline_gold: "историям,",
        headline_part2: "не по количеству слов",
        subtitle: "Выберите уровень, который соответствует вашей вселенной. От бесплатного исследования до бесконечных мифических миров — каждый создатель найдёт своё место.",
        cta_primary: "Получить ранний доступ",
        cta_secondary: "Сравнить все уровни",
        stats: [
            { num: "10", label: "Уровней" },
            { num: "100", label: "Языков" },
            { num: "0", label: "Начать" }
        ],
        scroll_hint: "ПРОКРУТИТЬ ДЛЯ ИЗУЧЕНИЯ",
        compare_bar_text: "Не знаете, какой план подходит?",
        compare_bar_btn: "Сравнить все планы",
        topbar_pill_1: "УРОВНИ СОЗДАТЕЛЯ LBO",
        topbar_pill_2: "НАЙДИ СВОЙ ПЛАН",
        topbar_cta: "Ранний доступ",
        cat_pills: [
            { id: "all",      label: "Все уровни"     },
            { id: "create",   label: "Создавать"      },
            { id: "generate", label: "Генерировать"   },
            { id: "publish",  label: "Публиковать"    },
            { id: "analyze",  label: "Анализировать"  },
            { id: "elite",    label: "Элита"          }
        ],
        explore_link: "Все возможности",
        trust_items: [
            { icon: "lock", text: "Безопасные платежи"      },
            { icon: "inf",  text: "Отмена в любое время"    },
            { icon: "glob", text: "100 языков"              },
            { icon: "bolt", text: "Мгновенный доступ"       }
        ],
        faq: [
            { q: "Что такое Линар Токен?", a: "Линар Токены — внутренняя валюта для ИИ-функций: генерация персонажей, капсулы, выбор голоса ИИ и многое другое. Каждый уровень имеет ежемесячный лимит." },
            { q: "Можно ли перейти на более высокий уровень?", a: "Да. Вы можете перейти на более высокий уровень в любой момент. Неиспользованные токены пересчитываются пропорционально." },
            { q: "Что происходит, если закончатся токены?", a: "Ваш аккаунт остаётся активным. Вы сохраняете доступ к функциям без токенов и можете докупить токены." }
        ],
        marquee: [
            "Линар Токены","Капсулы Времени","ИИ Шпион Трендов","Генератор Имён",
            "ИИ Голос","ИИ Персонажи","Исправления Текста","ИИ Архитектор",
            "ИИ Картограф","Генерация Видео","Психолог Лора","Эксперт Лора",
            "Секретный Подарок","ИИ Возрастной"
        ],
        menu_sections: [
            { title: "Создавать",    items: [["ИИ-писатель","Совместная проза с ИИ"],["Студия Персонажей","Создавайте глубоких персонажей"],["Картограф Мира","Нанесите вашу вселенную на карту"],["Архитектор Лора","Структурируйте историю мира"]] },
            { title: "Генерировать", items: [["Линар Токены","Питают все ИИ-функции"],["Капсулы Времени","Сохраняйте и восстанавливайте"],["Генератор Имён","7+ уникальных имён за сессию"],["ИИ Голос","Выберите нарратора"]] },
            { title: "Публиковать",  items: [["Видео-Сцены","Кинематографические клипы"],["Экспорт Рукописи","Готовый к публикации документ"],["Секретные Подарки","Загадочные награды каждый цикл"],["Статус Автора","Признание в сообществе"]] },
            { title: "Анализировать",items: [["Шпион Трендов","3 отчёта о трендах рынка"],["Консистентность","Автоматически найти сюжетные дыры"],["ИИ Психология","Анализ мотивации персонажей"],["Аналитика","Понимание вашей аудитории"]] }
        ]
    }
};

/* SECTION 2: HERO RENDERER */

function renderLBOPricingHero(containerId, lang) {
    var container = document.getElementById(containerId);
    if (!container) return;
    lang = lang || 'en';
    var dict = (window.LITALLY_TRANSLATIONS_100 && window.LITALLY_TRANSLATIONS_100[lang]) ? window.LITALLY_TRANSLATIONS_100[lang] : {};
    var C = LBO_HERO_CONTENT[lang] || _synthesizeHeroContent(lang, dict);
    var isRu = (lang === 'ru');
    container.innerHTML = _buildHeroHTML(C, isRu, lang, dict);
    _bindHeroEvents(container);
    _initMarquee(container);
    initLBOScrollAnimations();
}

function _buildHeroHTML(C, isRu) {
    var topbarPills = C.cat_pills.map(function(p, i) {
        return '<button class="lbo-topbar-pill' + (i===0?' active':'') + '" onclick="lboFilterCat(\'' + p.id + '\')">' + p.label + '</button>';
    }).join('');

    var eyebrow = '<div class="lbo-hero-eyebrow">⚔️ ' + C.eyebrow + '</div>';

    var headline = '<h1 class="lbo-hero-headline">' + C.headline_part1 + ' <span class="lbo-grad-word">' + C.headline_gold + '</span><br>' + C.headline_part2 + '</h1>';

    var stats = C.stats.map(function(s) {
        return '<div class="lbo-hero-stat-item"><div class="lbo-hero-stat-num">' + s.num + '</div><div class="lbo-hero-stat-label">' + s.label + '</div></div>';
    }).join('<div class="lbo-hero-stat-sep"></div>');

    var catPills = C.cat_pills.map(function(p, i) {
        return '<button class="lbo-cat-pill' + (i===0?' lbo-cat-active':'') + '" data-cat="' + p.id + '" onclick="lboFilterCat(\'' + p.id + '\')">' + p.label + '</button>';
    }).join('');

    var menuSections = C.menu_sections.map(function(sec) {
        var items = sec.items.map(function(it) {
            return '<div class="lbo-menu-item"><div class="lbo-menu-item-text"><span class="lbo-menu-item-name">' + it[0] + '</span><span class="lbo-menu-item-desc">' + it[1] + '</span></div></div>';
        }).join('');
        return '<div class="lbo-menu-section"><div class="lbo-menu-section-title">' + sec.title + '</div>' + items + '</div>';
    }).join('');

    var marqueeItems = C.marquee.map(function(t) {
        return '<div class="lbo-fhs-item"><span>' + t + '</span><span class="lbo-fhs-dot"></span></div>';
    }).join('');

    var faqItems = C.faq.map(function(f) {
        return '<div class="lbo-faq-item" onclick="lboToggleFaq(this)"><div class="lbo-faq-q">' + f.q + '</div><div class="lbo-faq-a">' + f.a + '</div></div>';
    }).join('');

    var trustItems = C.trust_items.map(function(t) {
        var icons = { lock: '🔒', inf: '♾️', glob: '🌍', bolt: '⚡' };
        return '<div class="lbo-trust-item"><span class="lbo-trust-item-icon">' + (icons[t.icon]||'•') + '</span><span>' + t.text + '</span></div>';
    }).join('');

    return '<div class="lbo-plans-sovereign-canvas">' +
        '<div class="lbo-hero-float-particles" aria-hidden="true"><div class="lbo-hero-fp"></div><div class="lbo-hero-fp"></div><div class="lbo-hero-fp"></div><div class="lbo-hero-fp"></div><div class="lbo-hero-fp"></div><div class="lbo-hero-fp"></div><div class="lbo-hero-fp"></div><div class="lbo-hero-fp"></div></div>' +
        '<div class="lbo-topbar-pill-nav">' +
            '<div class="lbo-topbar-pill-group">' + topbarPills + '</div>' +
            '<button class="lbo-topbar-cta-btn" onclick="lboScrollToPricing()">✦ ' + C.topbar_cta + '</button>' +
        '</div>' +
        '<div class="lbo-pricing-hero">' +
            eyebrow + headline +
            '<p class="lbo-hero-subtitle">' + C.subtitle + '</p>' +
            '<div class="lbo-hero-cta-row">' +
                '<button class="lbo-hero-primary-btn" onclick="lboScrollToPricing()">✦ ' + C.cta_primary + '</button>' +
                '<button class="lbo-hero-secondary-btn" onclick="lboScrollToPricing()">' + C.cta_secondary + ' →</button>' +
            '</div>' +
            '<div class="lbo-hero-stats-row">' + stats + '</div>' +
            '<div class="lbo-hero-scroll-hint" aria-hidden="true"><div class="lbo-hero-scroll-line"></div><div class="lbo-hero-scroll-label">' + C.scroll_hint + '</div></div>' +
        '</div>' +
        '<div class="lbo-hero-divider" aria-hidden="true"></div>' +
        '<div class="lbo-category-nav" id="lboCategoryNav">' +
            catPills +
            '<button class="lbo-cat-explore-link" onclick="lboToggleMenu()">' + C.explore_link + ' <span class="lbo-arrow">→</span></button>' +
            '<div class="lbo-capabilities-menu" id="lboCapMenu"><div class="lbo-menu-grid">' + menuSections + '</div>' +
                '<div class="lbo-menu-footer"><button class="lbo-menu-footer-link" onclick="lboToggleMenu()">' + C.explore_link + ' →</button></div>' +
            '</div>' +
        '</div>' +
        '<div class="lbo-feature-highlight-strip" aria-hidden="true"><div class="lbo-fhs-track" id="lboFhsTrack">' + marqueeItems + '</div></div>' +
        '<div class="lbo-compare-prompt-bar"><span class="lbo-compare-prompt-text">' + C.compare_bar_text + '</span><button class="lbo-compare-prompt-btn" onclick="lboScrollToPricing()">' + C.compare_bar_btn + '</button></div>' +
        '<div class="lbo-pricing-grid-wrapper" id="lboPricingGridWrapper">' +
            '<div class="lbo-cards-section-header">' +
                '<div class="lbo-cards-section-eyebrow">' + (isRu ? 'Наши уровни' : 'Our Tiers') + '</div>' +
                '<h2 class="lbo-cards-section-title">' + (isRu ? 'Выберите свой путь' : 'Choose Your Path') + '</h2>' +
                '<p class="lbo-cards-section-sub">' + (isRu ? 'Каждый уровень разблокирует новые способности' : 'Every tier unlocks new creator abilities') + '</p>' +
            '</div>' +
            '<div class="lbo-view-toggle-row">' +
                '<span class="lbo-view-toggle-label">' + (isRu ? 'Вид:' : 'View:') + '</span>' +
                '<button class="lbo-view-toggle-btn active" id="lboDetailBtn" onclick="lboSetView(\'detailed\')">☰ ' + (isRu ? 'Подробно' : 'Detailed') + '</button>' +
                '<button class="lbo-view-toggle-btn" id="lboPanBtn" onclick="lboSetView(\'panorama\')">👁 ' + (isRu ? 'Обзор' : 'Panorama') + '</button>' +
            '</div>' +
            '<div class="lbo-cards-v2-grid" id="lboPlanCardsGrid"></div>' +
        '</div>' +
        '<div class="lbo-trust-strip">' + trustItems + '</div>' +
        '<div class="lbo-faq-row">' + faqItems + '</div>' +
    '</div>';
}


/* SECTION 3: EVENTS & INTERACTIONS */

function _bindHeroEvents(container) {
    document.addEventListener('click', function(e) {
        var menu = document.getElementById('lboCapMenu');
        if (!menu) return;
        if (!menu.contains(e.target) && !e.target.closest('.lbo-cat-explore-link')) {
            menu.classList.remove('lbo-menu-open');
        }
    });
}

function _initMarquee(container) {
    var track = document.getElementById('lboFhsTrack');
    if (track) { track.innerHTML += track.innerHTML; }
}

function lboToggleMenu() {
    var m = document.getElementById('lboCapMenu');
    if (m) m.classList.toggle('lbo-menu-open');
}

function lboScrollToPricing() {
    var t = document.getElementById('lboPricingGridWrapper');
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function lboFilterCat(catId) {
    document.querySelectorAll('.lbo-cat-pill').forEach(function(p) {
        p.classList.toggle('lbo-cat-active', p.dataset.cat === catId);
    });
    document.querySelectorAll('.lbo-topbar-pill').forEach(function(p, i) {
        p.classList.toggle('active', i === 0);
    });
    document.querySelectorAll('.lbo-plan-card-v2').forEach(function(card) {
        if (catId === 'all') { card.style.display = ''; return; }
        var cats = (card.dataset.categories || '').split(',');
        card.style.display = (cats.indexOf(catId) >= 0 || cats.indexOf('all') >= 0) ? '' : 'none';
    });
}

function lboSetView(mode) {
    var grid = document.getElementById('lboPlanCardsGrid');
    var db = document.getElementById('lboDetailBtn');
    var pb = document.getElementById('lboPanBtn');
    if (!grid) return;
    if (mode === 'panorama') {
        grid.classList.add('lbo-grid-panorama');
        if (db) db.classList.remove('active');
        if (pb) pb.classList.add('active');
    } else {
        grid.classList.remove('lbo-grid-panorama');
        if (db) db.classList.add('active');
        if (pb) pb.classList.remove('active');
    }
}

function lboToggleFaq(el) {
    var a = el.querySelector('.lbo-faq-a');
    if (!a) return;
    var open = el.classList.contains('lbo-faq-open');
    document.querySelectorAll('.lbo-faq-item').forEach(function(i) { i.classList.remove('lbo-faq-open'); });
    document.querySelectorAll('.lbo-faq-a').forEach(function(x) { x.style.maxHeight = '0'; x.style.overflow = 'hidden'; });
    if (!open) {
        a.style.maxHeight = a.scrollHeight + 'px';
        a.style.overflow = 'visible';
        el.classList.add('lbo-faq-open');
    }
}

/* SECTION 4: PLAN CARDS V2 RENDERER */

function renderLBOPlanCardsV2(gridId, tiersData, lang) {
    var grid = document.getElementById(gridId);
    if (!grid || !tiersData || !tiersData.length) return;
    var isRu = (lang === 'ru');
    grid.classList.add('lbo-anim-stagger');
    grid.innerHTML = tiersData.map(function(tier, idx) {
        return _buildCardV2(tier, idx, lang, isRu);
    }).join('');
    grid.querySelectorAll('.lbo-card-cta-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var ti = parseInt(btn.dataset.tierIndex || '0');
            if (typeof selectSubscriptionTier === 'function') selectSubscriptionTier(ti);
        });
    });
}

function _buildCardV2(tier, idx, lang, isRu) {
    lang = lang || 'en';
    var langUpper = lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase();
    var name = tier['name' + langUpper] || (lang === 'ru' ? tier.nameRu : (lang === 'kk' ? tier.nameKk : (lang === 'pt' ? tier.namePt : tier.nameEn))) || tier.nameEn || 'Plan';
    var tagline = tier['tagline' + langUpper] || (lang === 'ru' ? tier.taglineRu : (lang === 'kk' ? tier.taglineKk : (lang === 'pt' ? tier.taglinePt : tier.taglineEn))) || tier.taglineEn || '';
    var badge = tier.badge || ('TIER ' + (idx < 9 ? '0' : '') + (idx + 1));
    var isPopular = !!tier.isPopular;
    var isFree = (tier.usdPrice === 0);
    var isElite = (idx >= 8);

    var priceNum = '0';
    var priceCurr = '$';
    if (tier.usdPrice > 0) {
        if (typeof formatLocalizedTierPrice === 'function') {
            var pd = formatLocalizedTierPrice(tier.usdPrice, lang, 'symbol');
            priceNum = pd.replace(/[^0-9.,]/g, '') || String(tier.usdPrice);
            priceCurr = pd.replace(/[0-9.,\s]/g, '') || '$';
        } else {
            priceNum = String(tier.usdPrice);
        }
    }

    var cats = ['all'];
    if (idx < 3) cats.push('create');
    else if (idx < 6) cats.push('generate');
    else cats.push('publish');
    if (isElite) cats.push('elite');

    var featuresHTML = (tier.features || []).map(function(f) {
        var text = f['short' + langUpper] || f[lang] || f.shortEn || f.en || '';
        var icon = f.icon || 'o';
        var qty = f.qty || '';
        return '<li class="lbo-card-feature-item">' +
            '<span class="lbo-card-feat-icon">' + icon + '</span>' +
            '<span class="lbo-card-feat-text">' + text + '</span>' +
            (qty ? '<span class="lbo-feat-qty-pill">' + qty + '</span>' : '') +
            '</li>';
    }).join('');

    var classes = 'lbo-plan-card-v2' + (isPopular ? ' lbo-card-popular' : '') + (isFree ? ' lbo-card-free' : '') + (isElite ? ' lbo-card-elite' : '');
    
    var ctaText = 'Select Tier';
    var period = isFree ? 'Free forever' : '/month';
    var popularLabel = 'MOST POPULAR';
    var basicRibbon = 'BASIC';
    var freePill = '🎁 FREE FOREVER';
    var noCardNote = 'No credit card required';
    var featLabel = "What's included:";
    var footerIcon = isElite ? 'crown' : isFree ? 'gift' : 'bolt';
    var footerMap = { crown: '👑', gift: '🎁', bolt: '⚡' };
    var footerNote = isElite ? 'Sovereign access' : isFree ? 'Perfect to start' : 'Instant activation';

    if (lang === 'ru') {
        ctaText = isFree ? 'Начать бесплатно' : isPopular ? 'Получить сейчас' : 'Выбрать уровень';
        period = isFree ? 'Навсегда бесплатно' : 'в месяц';
        popularLabel = 'ПОПУЛЯРНЫЙ';
        basicRibbon = 'БАЗОВЫЙ';
        freePill = '🎁 БЕСПЛАТНО';
        noCardNote = 'Карта не нужна';
        featLabel = 'Что включено:';
        footerNote = isElite ? 'Суверенный доступ' : isFree ? 'Идеально для начала' : 'Мгновенная активация';
    } else if (lang === 'kk') {
        ctaText = isFree ? 'Тегін бастау' : isPopular ? 'Қазір қосылу' : 'Таңдау';
        period = isFree ? 'Мәңгілікке тегін' : '/айына';
        popularLabel = 'ЕҢ ТАНЫМАЛ';
        basicRibbon = 'НЕГІЗГІ';
        freePill = '🎁 МӘҢГІЛІККЕ ТЕГІН';
        noCardNote = 'Карта талап етілмейді';
        featLabel = 'Қосылған мүмкіндіктер:';
        footerNote = isElite ? 'Егеменді қолжетімділік' : isFree ? 'Бастау үшін мінсіз' : 'Лезде іске қосу';
    } else if (lang === 'pt') {
        ctaText = isFree ? 'Começar Grátis' : isPopular ? 'Obter Agora' : 'Selecionar Plano';
        period = isFree ? 'Grátis para sempre' : '/mês';
        popularLabel = 'MAIS POPULAR';
        basicRibbon = 'BÁSICO';
        freePill = '🎁 GRÁTIS PARA SEMPRE';
        noCardNote = 'Não requer cartão';
        featLabel = 'O que está incluído:';
        footerNote = isElite ? 'Acesso soberano' : isFree ? 'Perfeito para começar' : 'Ativação instantânea';
    }

    return '<div class="' + classes + '" data-tier-id="' + (tier.id || '') + '" data-categories="' + cats.join(',') + '" style="animation-delay:' + (idx * 0.04).toFixed(2) + 's">' +
        (isPopular ? '<div class="lbo-popular-label">' + (isRu ? 'ПОПУЛЯРНЫЙ' : 'MOST POPULAR') + '</div>' : '') +
        (isFree ? '<div class="lbo-basic-ribbon"><div class="lbo-basic-ribbon-text">' + (isRu ? 'БАЗОВЫЙ' : 'BASIC') + '</div></div>' : '') +
        '<div class="lbo-card-tier-badge"><span class="lbo-tier-dot"></span>' + badge + '</div>' +
        (isFree ? '<div class="lbo-card-highlight-pill">🎁 ' + (isRu ? 'БЕСПЛАТНО' : 'FREE FOREVER') + '</div>' : '') +
        '<div class="lbo-card-plan-name">' + name + '</div>' +
        '<div class="lbo-card-tagline">' + tagline + '</div>' +
        '<div class="lbo-card-price-block">' +
            (isFree ? '' : '<span class="lbo-card-currency">' + priceCurr + '</span>') +
            '<span class="lbo-card-price-num">' + (isFree ? '0' : priceNum) + '</span>' +
            '<span class="lbo-card-price-period">' + period + '</span>' +
        '</div>' +
        '<div class="lbo-card-price-note">' + (isFree ? (isRu ? 'Карта не нужна' : 'No credit card required') : '') + '</div>' +
        '<button class="lbo-card-cta-btn" data-tier-index="' + idx + '">' + ctaText + '</button>' +
        '<div class="lbo-card-feature-divider"></div>' +
        '<div class="lbo-card-features-label">' + (isRu ? 'Что включено:' : "What's included:") + '</div>' +
        '<ul class="lbo-card-features-list lbo-card-features-scroll">' + featuresHTML + '</ul>' +
        '<div class="lbo-card-footer"><span class="lbo-card-footer-icon">' + footerMap[footerIcon] + '</span><span class="lbo-card-footer-note">' + footerNote + '</span></div>' +
    '</div>';
}

/* SECTION 5: ANIMATIONS & UTILITIES */

function initLBOScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('lbo-in-view');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.lbo-plan-card-v2, .lbo-faq-item, .lbo-trust-item').forEach(function(el) { obs.observe(el); });
}

function initLBONavbarScroll() {
    var navbar = document.querySelector('.lbo-portal-navbar');
    if (!navbar) return;
    window.addEventListener('scroll', function() {
        navbar.classList.toggle('lbo-navbar-scrolled', window.scrollY > 50);
    }, { passive: true });
}

function renderLBOComparisonTable(containerId, tiersData, lang) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var isRu = (lang === 'ru');
    var cols = tiersData.slice(0, 5);
    var headers = [''].concat(cols.map(function(t) { return isRu ? (t.nameRu || t.nameEn) : (t.nameEn || ''); }));
    var features = [
        isRu ? 'Токены' : 'Tokens',
        isRu ? 'Капсулы' : 'Capsules',
        isRu ? 'Видео' : 'Video',
        isRu ? 'Голос ИИ' : 'AI Voice',
        isRu ? 'Статус' : 'Status'
    ];
    var rows = features.map(function(feat) {
        var cells = cols.map(function(t) {
            var has = (t.features || []).some(function(f) {
                return (f.en || '').toLowerCase().indexOf(feat.toLowerCase().split(' ')[0].toLowerCase()) >= 0
                    || (f.ru || '').toLowerCase().indexOf(feat.toLowerCase()) >= 0;
            });
            return has ? '<td class="lbo-check-cell">✓</td>' : '<td class="lbo-cross-cell">—</td>';
        }).join('');
        return '<tr><td>' + feat + '</td>' + cells + '</tr>';
    }).join('');
    container.innerHTML = '<div class="lbo-comparison-table-wrap"><table class="lbo-comparison-table">' +
        '<thead><tr>' + headers.map(function(h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead>' +
        '<tbody>' + rows + '</tbody></table></div>';
}

(function() {
    function init() {
        initLBOScrollAnimations();
        initLBONavbarScroll();
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
