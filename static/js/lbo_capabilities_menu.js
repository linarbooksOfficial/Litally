/**
 * =============================================================================
 * LBO CAPABILITIES MENU ENGINE
 * File: static/js/lbo_capabilities_menu.js
 * Description: Sovereign dropdown mega-menu for the plans portal navigation.
 *              Shows a TaxScout-style product capabilities grid with LBO features.
 * =============================================================================
 */

/* ─────────────────────────────────────────────
   1. CAPABILITIES DATA (English + Russian)
   ───────────────────────────────────────────── */

var LBO_CAPABILITIES_DATA = {
    kk: {
        sections: [
            {
                id: "create",
                icon: "✍️",
                title: "Жасау",
                description: "Оқиғалар, ғаламдар мен кейіпкерлер жасақтау",
                items: [
                    { icon: "📝", name: "ЖИ-жазушы",          desc: "ЖИ-мен бірлескен проза" },
                    { icon: "🎭", name: "Кейіпкерлер Студиясы", desc: "Терең көркем бейнелер" },
                    { icon: "🗺️", name: "Әлем Картографы",      desc: "Ғаламыңызды картаға түсіріңіз" },
                    { icon: "📜", name: "Лор Сәулетшісі",       desc: "Әлем тарихы мен шежіресі" },
                    { icon: "✍️", name: "Мәтінді Түзету",       desc: "Айына 20 ЖИ түзетуі" },
                    { icon: "🧠", name: "ЖИ-кейіпкерлер",       desc: "Өз кейіпкерлеріңізбен сұхбат" }
                ]
            },
            {
                id: "generate",
                icon: "🤖",
                title: "Генерация",
                description: "ЖИ-генерация және автоматтандыру",
                items: [
                    { icon: "🪙", name: "Линар Токендері",      desc: "Барлық ЖИ-ді қуаттайды" },
                    { icon: "⏳", name: "Уақыт Капсулалары",   desc: "Сақтау және қалпына келтіру" },
                    { icon: "🏷️", name: "Атау Генераторы",      desc: "7+ бірегей атаулар" },
                    { icon: "🎙️", name: "ЖИ-дауыс",            desc: "Нарраторды таңдаңыз" },
                    { icon: "🕵️", name: "Тренд Шпионы",         desc: "3 ЖИ нарықтық есебі" },
                    { icon: "🎁", name: "Құпия Сыйлық",         desc: "Тосын сыйлар мен марапаттар" }
                ]
            },
            {
                id: "publish",
                icon: "📚",
                title: "Жариялау",
                description: "Шығармаңызды әлеммен бөлісіңіз",
                items: [
                    { icon: "🎬", name: "Бейне-Көріністер",     desc: "Кинематографиялық клиптер" },
                    { icon: "📖", name: "Қолжазба Экспорты",    desc: "Баспаға дайын құжаттар" },
                    { icon: "🏆", name: "Автор Мәртебесі",      desc: "Қауымдастықтағы бедел" },
                    { icon: "🎖️", name: "Пайдаланушы Белгісі",   desc: "Егеменді сандық бедел" },
                    { icon: "🏛️", name: "ЖИ-сәулетші",          desc: "Айына 40 хабарлама" },
                    { icon: "📊", name: "Аналитика",            desc: "Оқырмандарды талдау" }
                ]
            },
            {
                id: "analyze",
                icon: "🔍",
                title: "Талдау",
                description: "Шығармашылық жұмысқа арналған терең инсайттар",
                items: [
                    { icon: "📜", name: "Лор Сарапшысы",        desc: "Консистенттілікті тексеру" },
                    { icon: "🎭", name: "Лор Психологы",        desc: "Кейіпкерлер мотивациясы" },
                    { icon: "🔞", name: "Жас Шектеулі ЖИ",      desc: "Ересектерге арналған контентті басқару" },
                    { icon: "📈", name: "Оқырман Аналитикасы",  desc: "Аудитория деректері" },
                    { icon: "🔎", name: "Сюжет Детекторы",      desc: "ЖИ-нарратив ревьюі" },
                    { icon: "🧬", name: "Кейіпкер ДНҚ-сы",      desc: "Тұлғаны терең талдау" }
                ]
            }
        ],
        footer_text: "Барлық мүмкіндіктерді зерттеу",
        see_all_plans: "Барлық жоспарларды көру →"
    },
    pt: {
        sections: [
            {
                id: "create",
                icon: "✍️",
                title: "Criar",
                description: "Crie histórias, mundos e personagens",
                items: [
                    { icon: "📝", name: "Assistente de Escrita IA", desc: "Prosa colaborativa com IA" },
                    { icon: "🎭", name: "Estúdio de Personagens",   desc: "Personas profundas e ricas" },
                    { icon: "🗺️", name: "Cartógrafo do Mundo",     desc: "Mapeie seu universo fictício" },
                    { icon: "📜", name: "Arquiteto de Lore",        desc: "História e cronologia do mundo" },
                    { icon: "✍️", name: "Correções de Texto",       desc: "20 edições de IA por mês" },
                    { icon: "🧠", name: "Personagens de IA",        desc: "Converse com suas criações" }
                ]
            },
            {
                id: "generate",
                icon: "🤖",
                title: "Gerar",
                description: "Criação e automação com inteligência artificial",
                items: [
                    { icon: "🪙", name: "Tokens Linar",      desc: "Alimentam todos os recursos IA" },
                    { icon: "⏳", name: "Cápsulas do Tempo", desc: "Salve e restaure estados narrativos" },
                    { icon: "🏷️", name: "Gerador de Nomes",  desc: "7+ nomes únicos por sessão" },
                    { icon: "🎙️", name: "Voz de IA",          desc: "Escolha seu narrador IA" },
                    { icon: "🕵️", name: "Espião de Tendências", desc: "3 relatórios de mercado IA" },
                    { icon: "🎁", name: "Presente Secreto",  desc: "Recompensas misteriosas" }
                ]
            },
            {
                id: "publish",
                icon: "📚",
                title: "Publicar",
                description: "Compartilhe seu trabalho com o mundo",
                items: [
                    { icon: "🎬", name: "Cenas em Vídeo",        desc: "Clipes cinematográficos" },
                    { icon: "📖", name: "Exportação de Manuscrito", desc: "Documentos prontos para publicação" },
                    { icon: "🏆", name: "Status de Autor",       desc: "Reconhecimento na comunidade" },
                    { icon: "🎖️", name: "Distintivo de Identidade", desc: "Identidade soberana" },
                    { icon: "🏛️", name: "Arquiteto IA",          desc: "40 mensagens por mês" },
                    { icon: "📊", name: "Métricas",              desc: "Compreenda seus leitores" }
                ]
            },
            {
                id: "analyze",
                icon: "🔍",
                title: "Analisar",
                description: "Insights profundos para sua obra criativa",
                items: [
                    { icon: "📜", name: "Especialista em Lore",   desc: "Verificador de consistência" },
                    { icon: "🎭", name: "Psicólogo de Lore",      desc: "Motivação de personagens" },
                    { icon: "🔞", name: "IA para Maiores",        desc: "Controle de conteúdo adulto" },
                    { icon: "📈", name: "Métricas de Leitores",   desc: "Dados detalhados de audiência" },
                    { icon: "🔎", name: "Detector de Furos",      desc: "Revisão narrativa por IA" },
                    { icon: "🧬", name: "DNA do Personagem",      desc: "Análise profunda de personalidade" }
                ]
            }
        ],
        footer_text: "Explorar todas as funcionalidades",
        see_all_plans: "Ver todos os planos →"
    },
    en: {
        sections: [
            {
                id: "create",
                icon: "✍️",
                title: "Create",
                description: "Craft stories, worlds, and characters",
                items: [
                    { icon: "📝", name: "AI Writing Assistant", desc: "Collaborative AI prose" },
                    { icon: "🎭", name: "Character Studio",     desc: "Deep fictional personas" },
                    { icon: "🗺️", name: "World Cartographer",  desc: "Map your universe" },
                    { icon: "📜", name: "Lore Architect",       desc: "World history & lore" },
                    { icon: "✍️", name: "Text Corrections",     desc: "20 AI edits per month" },
                    { icon: "🧠", name: "AI Characters",        desc: "Talk to your creations" }
                ]
            },
            {
                id: "generate",
                icon: "🤖",
                title: "Generate",
                description: "AI-powered creation and automation",
                items: [
                    { icon: "🪙", name: "Linar Tokens",    desc: "Power all AI features" },
                    { icon: "⏳", name: "Time Capsules",   desc: "Save & restore states" },
                    { icon: "🏷️", name: "Name Generator",  desc: "7+ unique names" },
                    { icon: "🎙️", name: "AI Voice",        desc: "Choose your narrator" },
                    { icon: "🕵️", name: "Trend Spy",       desc: "3 AI trend reports" },
                    { icon: "🎁", name: "Secret Gift",     desc: "Mystery rewards" }
                ]
            },
            {
                id: "publish",
                icon: "📚",
                title: "Publish",
                description: "Share your work with the world",
                items: [
                    { icon: "🎬", name: "Video Scenes",        desc: "Cinematic clips" },
                    { icon: "📖", name: "Manuscript Export",   desc: "Publication-ready docs" },
                    { icon: "🏆", name: "Author Status",       desc: "Community recognition" },
                    { icon: "🎖️", name: "User Status Badge",   desc: "Sovereign identity" },
                    { icon: "🏛️", name: "AI Architect",        desc: "40 messages/month" },
                    { icon: "📊", name: "Analytics",           desc: "Understand your readers" }
                ]
            },
            {
                id: "analyze",
                icon: "🔍",
                title: "Analyze",
                description: "Deep insights for your creative work",
                items: [
                    { icon: "📜", name: "Lore Expert",         desc: "Consistency checker" },
                    { icon: "🎭", name: "Lore Psychologist",   desc: "Character motivation" },
                    { icon: "🔞", name: "Age-Gated AI",        desc: "Mature content control" },
                    { icon: "📈", name: "Reader Analytics",    desc: "Audience data" },
                    { icon: "🔎", name: "Plot Hole Detector",  desc: "AI narrative review" },
                    { icon: "🧬", name: "Character DNA",       desc: "Deep personality analysis" }
                ]
            }
        ],
        footer_text: "Explore all capabilities",
        see_all_plans: "See all plans →"
    },
    ru: {
        sections: [
            {
                id: "create",
                icon: "✍️",
                title: "Создавать",
                description: "Создавайте истории, миры и персонажей",
                items: [
                    { icon: "📝", name: "ИИ-писатель",          desc: "Совместная проза с ИИ" },
                    { icon: "🎭", name: "Студия персонажей",     desc: "Глубокие вымышленные персонажи" },
                    { icon: "🗺️", name: "Картограф Мира",       desc: "Нанесите вашу вселенную" },
                    { icon: "📜", name: "Архитектор Лора",       desc: "История и легенды мира" },
                    { icon: "✍️", name: "Исправления текста",    desc: "20 правок ИИ в месяц" },
                    { icon: "🧠", name: "ИИ-персонажи",          desc: "Общайтесь с вашими созданиями" }
                ]
            },
            {
                id: "generate",
                icon: "🤖",
                title: "Генерировать",
                description: "ИИ-генерация и автоматизация",
                items: [
                    { icon: "🪙", name: "Линар Токены",         desc: "Питают все ИИ-функции" },
                    { icon: "⏳", name: "Капсулы Времени",      desc: "Сохраняйте и восстанавливайте" },
                    { icon: "🏷️", name: "Генератор Имён",       desc: "7+ уникальных имён" },
                    { icon: "🎙️", name: "ИИ-голос",             desc: "Выберите нарратора" },
                    { icon: "🕵️", name: "Шпион трендов",        desc: "3 отчёта ИИ о трендах" },
                    { icon: "🎁", name: "Секретный Подарок",    desc: "Загадочные награды" }
                ]
            },
            {
                id: "publish",
                icon: "📚",
                title: "Публиковать",
                description: "Делитесь работой с миром",
                items: [
                    { icon: "🎬", name: "Видео-сцены",          desc: "Кинематографические клипы" },
                    { icon: "📖", name: "Экспорт рукописи",     desc: "Готово к публикации" },
                    { icon: "🏆", name: "Статус Автора",        desc: "Признание в сообществе" },
                    { icon: "🎖️", name: "Статус Пользователя",  desc: "Суверенная идентичность" },
                    { icon: "🏛️", name: "ИИ-архитектор",        desc: "40 сообщений в месяц" },
                    { icon: "📊", name: "Аналитика",            desc: "Понимание читателей" }
                ]
            },
            {
                id: "analyze",
                icon: "🔍",
                title: "Анализировать",
                description: "Глубокие инсайты для творческой работы",
                items: [
                    { icon: "📜", name: "Эксперт Лора",         desc: "Проверка консистентности" },
                    { icon: "🎭", name: "Психолог Лора",        desc: "Мотивация персонажей" },
                    { icon: "🔞", name: "ИИ Возрастной",        desc: "Контроль взрослого контента" },
                    { icon: "📈", name: "Аналитика читателей",  desc: "Данные об аудитории" },
                    { icon: "🔎", name: "Детектор сюжетных дыр","desc": "ИИ-ревью нарратива" },
                    { icon: "🧬", name: "ДНК персонажа",        desc: "Анализ личности" }
                ]
            }
        ],
        footer_text: "Все возможности",
        see_all_plans: "Все планы →"
    }
};

/* ─────────────────────────────────────────────
   2. CAPABILITIES NAVBAR RENDERER
   ───────────────────────────────────────────── */

function renderLBOCapabilitiesNavbar(containerId, lang) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var isRu = (lang === 'ru');
    var D = LBO_CAPABILITIES_DATA[lang] || (isRu ? LBO_CAPABILITIES_DATA.ru : LBO_CAPABILITIES_DATA.en);

    var tabsHTML = D.sections.map(function(sec, i) {
        return '<button class="lbo-navbar-tab' + (i===0?' lbo-tab-active':'') + '" ' +
            'data-section="' + sec.id + '" ' +
            'onclick="lboCapNavSelect(\'' + sec.id + '\')" ' +
            'aria-label="' + sec.title + '">' +
            sec.icon + ' ' + sec.title +
            '<span class="lbo-navbar-tab-arrow">▾</span>' +
        '</button>';
    }).join('');

    var dropdownHTML = _buildNavbarDropdown(D, isRu);

    container.innerHTML = '<div class="lbo-portal-navbar" id="lboPortalNavbar">' +
        '<div class="lbo-navbar-inner">' +
            '<div class="lbo-navbar-logo-zone" onclick="lboScrollToPricing && lboScrollToPricing()">' +
                '<div class="lbo-navbar-logo-icon">⚔️</div>' +
                '<div><div class="lbo-navbar-logo-text">LBO</div>' +
                '<div class="lbo-navbar-logo-sub">' + (isRu ? 'Sanctuary' : 'Sanctuary') + '</div></div>' +
            '</div>' +
            '<div class="lbo-navbar-center">' + tabsHTML + '</div>' +
            '<div class="lbo-navbar-right">' +
                '<button class="lbo-navbar-action-btn">' + (isRu ? 'Войти' : 'Sign In') + '</button>' +
                '<button class="lbo-navbar-cta" onclick="lboScrollToPricing && lboScrollToPricing()">✦ ' + (isRu ? 'Ранний доступ' : 'Early Access') + '</button>' +
            '</div>' +
        '</div>' +
        dropdownHTML +
    '</div>';

    _bindNavbarEvents(container);
}

function _buildNavbarDropdown(D, isRu) {
    var sectionsHTML = D.sections.map(function(sec) {
        var items = sec.items.map(function(item) {
            return '<div class="lbo-dd-item">' +
                '<div class="lbo-dd-item-icon">' + item.icon + '</div>' +
                '<div class="lbo-dd-item-content">' +
                    '<span class="lbo-dd-item-title">' + item.name + '</span>' +
                    '<span class="lbo-dd-item-desc">' + item.desc + '</span>' +
                '</div>' +
            '</div>';
        }).join('');
        return '<div class="lbo-dd-section" data-section="' + sec.id + '">' +
            '<div class="lbo-dd-section-label">' + sec.icon + ' ' + sec.title + '</div>' +
            '<div class="lbo-dd-items">' + items + '</div>' +
        '</div>';
    }).join('');

    return '<div class="lbo-navbar-dropdown" id="lboNavDropdown">' +
        '<div class="lbo-navbar-dropdown-inner">' + sectionsHTML +
            '<div class="lbo-dd-footer">' +
                '<button class="lbo-dd-footer-link" onclick="lboScrollToPricing && lboScrollToPricing()">' + D.footer_text + ' →</button>' +
                '<button class="lbo-dd-footer-link" onclick="lboScrollToPricing && lboScrollToPricing()">' + D.see_all_plans + '</button>' +
            '</div>' +
        '</div>' +
    '</div>';
}

function _bindNavbarEvents(container) {
    var tabs = container.querySelectorAll('.lbo-navbar-tab');
    var dropdown = document.getElementById('lboNavDropdown');
    if (!dropdown) return;

    tabs.forEach(function(tab) {
        tab.addEventListener('mouseenter', function() {
            dropdown.classList.add('lbo-dd-open');
            var secId = tab.dataset.section;
            _showDropdownSection(dropdown, secId);
        });
    });

    var navInner = container.querySelector('.lbo-navbar-inner');
    if (navInner) {
        navInner.addEventListener('mouseleave', function() {
            dropdown.classList.remove('lbo-dd-open');
        });
    }

    dropdown.addEventListener('mouseleave', function() {
        dropdown.classList.remove('lbo-dd-open');
    });
}

function _showDropdownSection(dropdown, sectionId) {
    var sections = dropdown.querySelectorAll('.lbo-dd-section');
    sections.forEach(function(sec) {
        sec.style.display = (!sectionId || sec.dataset.section === sectionId) ? '' : 'none';
    });
}

function lboCapNavSelect(sectionId) {
    var dropdown = document.getElementById('lboNavDropdown');
    if (dropdown) {
        dropdown.classList.toggle('lbo-dd-open');
        _showDropdownSection(dropdown, sectionId);
    }
    document.querySelectorAll('.lbo-navbar-tab').forEach(function(tab) {
        tab.classList.toggle('lbo-tab-active', tab.dataset.section === sectionId);
    });
}

/* ─────────────────────────────────────────────
   3. STANDALONE CAPABILITIES MENU WIDGET
   ───────────────────────────────────────────── */

function renderStandaloneCapabilitiesMenu(containerId, lang) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var isRu = (lang === 'ru');
    var D = LBO_CAPABILITIES_DATA[lang] || (isRu ? LBO_CAPABILITIES_DATA.ru : LBO_CAPABILITIES_DATA.en);

    var html = '<div class="lbo-caps-standalone">';
    D.sections.forEach(function(sec) {
        html += '<div class="lbo-caps-section">' +
            '<div class="lbo-caps-section-header">' + sec.icon + ' <strong>' + sec.title + '</strong></div>' +
            '<p class="lbo-caps-section-desc">' + sec.description + '</p>' +
            '<div class="lbo-caps-items-grid">';
        sec.items.forEach(function(item) {
            html += '<div class="lbo-caps-item">' +
                '<span class="lbo-caps-item-icon">' + item.icon + '</span>' +
                '<div><strong class="lbo-caps-item-name">' + item.name + '</strong>' +
                '<p class="lbo-caps-item-desc">' + item.desc + '</p></div>' +
            '</div>';
        });
        html += '</div></div>';
    });
    html += '</div>';

    container.innerHTML = html;
}

/* ─────────────────────────────────────────────
   4. CSS FOR STANDALONE WIDGET (injected)
   ───────────────────────────────────────────── */

(function injectCapsCss() {
    var id = 'lbo-caps-standalone-style';
    if (document.getElementById(id)) return;
    var style = document.createElement('style');
    style.id = id;
    style.textContent = [
        '.lbo-caps-standalone{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;padding:24px;}',
        '.lbo-caps-section{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:16px;padding:20px;}',
        '.lbo-caps-section-header{font-family:var(--font-decorative,inherit);font-size:1rem;font-weight:800;color:#d4af37;margin-bottom:6px;}',
        '.lbo-caps-section-desc{font-family:var(--font-sans,inherit);font-size:0.8rem;color:rgba(255,255,255,0.4);margin-bottom:16px;line-height:1.5;}',
        '.lbo-caps-items-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;}',
        '.lbo-caps-item{display:flex;align-items:flex-start;gap:8px;padding:8px;border-radius:10px;transition:background 0.2s;cursor:pointer;}',
        '.lbo-caps-item:hover{background:rgba(212,175,55,0.07);}',
        '.lbo-caps-item-icon{font-size:1.2rem;flex-shrink:0;}',
        '.lbo-caps-item-name{font-family:var(--font-sans,inherit);font-size:0.82rem;font-weight:700;color:rgba(255,255,255,0.82);display:block;}',
        '.lbo-caps-item-desc{font-family:var(--font-sans,inherit);font-size:0.72rem;color:rgba(255,255,255,0.35);display:block;line-height:1.4;margin-top:1px;}',
        '@media(max-width:640px){.lbo-caps-standalone{grid-template-columns:1fr;}.lbo-caps-items-grid{grid-template-columns:1fr;}}'
    ].join('');
    document.head.appendChild(style);
})();

/* ─────────────────────────────────────────────
   5. SEARCH / FILTER FOR CAPABILITIES
   ───────────────────────────────────────────── */

function lboSearchCapabilities(query, lang) {
    var isRu = (lang === 'ru');
    var D = LBO_CAPABILITIES_DATA[lang] || (isRu ? LBO_CAPABILITIES_DATA.ru : LBO_CAPABILITIES_DATA.en);
    var q = (query || '').toLowerCase().trim();

    var results = [];
    D.sections.forEach(function(sec) {
        sec.items.forEach(function(item) {
            var match = item.name.toLowerCase().indexOf(q) >= 0 ||
                        item.desc.toLowerCase().indexOf(q) >= 0 ||
                        sec.title.toLowerCase().indexOf(q) >= 0;
            if (match) {
                results.push({
                    section: sec.title,
                    icon: item.icon,
                    name: item.name,
                    desc: item.desc
                });
            }
        });
    });
    return results;
}

/* ─────────────────────────────────────────────
   6. ANIMATED FEATURE CARD HOVER EFFECT
   ───────────────────────────────────────────── */

function initLBOCapabilitiesHover() {
    document.addEventListener('mousemove', function(e) {
        var card = e.target.closest('.lbo-plan-card-v2');
        if (!card) return;
        var rect = card.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
        var y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
        card.style.transform = 'perspective(800px) rotateX(' + (-y * 3).toFixed(1) + 'deg) rotateY(' + (x * 3).toFixed(1) + 'deg) translateY(-4px)';
    });

    document.addEventListener('mouseleave', function(e) {
        var card = e.target.closest('.lbo-plan-card-v2');
        if (!card) return;
        card.style.transform = '';
    }, true);
}

/* ─────────────────────────────────────────────
   7. KEYBOARD NAVIGATION FOR MENU
   ───────────────────────────────────────────── */

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        var dropdown = document.getElementById('lboNavDropdown');
        var capMenu = document.getElementById('lboCapMenu');
        if (dropdown) dropdown.classList.remove('lbo-dd-open');
        if (capMenu) capMenu.classList.remove('lbo-menu-open');
    }
});

/* ─────────────────────────────────────────────
   8. AUTO-INIT
   ───────────────────────────────────────────── */

(function lboCapAutoInit() {
    function init() {
        initLBOCapabilitiesHover();
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        setTimeout(init, 0);
    }
})();
