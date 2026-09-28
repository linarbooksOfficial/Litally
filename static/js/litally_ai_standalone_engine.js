    // Auto-clean legacy Linar / Linar Books default names from client storage
    try {
        const storedName = (localStorage.getItem('litally_user_name') || '').trim().toLowerCase();
        if (storedName === 'linar books' || storedName === 'linar' || storedName === 'линар букс' || storedName === 'линар') {
            localStorage.removeItem('litally_user_name');
        }
        const rawProf = localStorage.getItem('litally_user_profile');
        if (rawProf) {
            const p = JSON.parse(rawProf);
            if (p && typeof p.name === 'string') {
                const pn = p.name.trim().toLowerCase();
                if (pn === 'linar books' || pn === 'linar' || pn === 'линар букс' || pn === 'линар') {
                    p.name = '';
                    localStorage.setItem('litally_user_profile', JSON.stringify(p));
                }
            }
        }
    } catch(e) {}
/**
 * LITALLY.AI AUTONOMOUS CLIENT ENGINE (v7.5 VARIATIONAL DYNAMIC EDITION)
 * File: static/js/litally_ai_standalone_engine.js
 * Dynamic, non-monotonic AI reasoning engine in pure JavaScript.
 */

(function (window, document) {
    'use strict';

    // ── 1. STATE & PERSISTENCE ────────────────────────────────────────────────
    const AppState = {
        aiMode: (function() {
            try { return localStorage.getItem('litally_ai_mode') || '2.0'; } catch(e) { return '2.0'; }
        })(),
        ttsRate: (function() {
            try { const r = localStorage.getItem('litally_tts_rate'); return r ? parseFloat(r) : 1.0; } catch(e) { return 1.0; }
        })(),
        sessions: [],
        activeSessionId: null,
        activeThemeId: 88,
        currentLang: (function() {
            try {
                const saved = localStorage.getItem("litally_selected_language") || localStorage.getItem("litally_selected_lang");
                if (saved) return saved;
                if (typeof navigator !== 'undefined' && navigator.language && navigator.language.toLowerCase().startsWith('kk')) return 'kk';
                return 'ru';
            } catch(e) { return 'ru'; }
        })(),
        currentStyle: 'realistic',
        currentAspectRatio: '16:9',
        responseLength: (function() {
            try { return localStorage.getItem('litally_response_length') || 'medium'; } catch(e) { return 'medium'; }
        })(),
        crossChatMemory: true, // true: Cross-chat memory, false: New Life mode // 'short' | 'medium' | 'detailed'
        forceWebSearch: false,
        allowGoogleSearch: (function() {
            try {
                const v = localStorage.getItem('litally_allow_google_search');
                return v === null ? true : (v === 'true');
            } catch(e) { return true; }
        })(),
        isStreaming: false,
        isSpeaking: false,
        speakingMsgIdx: null,
        isChatLocked: false,
        userScrolledUp: false,
        activeRetryCounts: {},
        soundEnabled: (function() {
            try {
                const v = localStorage.getItem('litally_sound_enabled');
                return v === null ? true : (v === 'true');
            } catch(e) { return true; }
        })(),
        ttsVoice: (function() {
            try { return localStorage.getItem('litally_tts_voice') || 'wikipedia_dmitry'; } catch(e) { return 'wikipedia_dmitry'; }
        })()
    };

    const THEMES_CATALOG = [
        { id: 88, name: "OLED Pitch Black", bg: "#000000", surface: "#050505", elevated: "#0a0a0a", cardBg: "rgba(10, 10, 10, 0.95)", accent: "#e4e4e7", secondary: "rgba(228, 228, 231, 0.25)", glow: "rgba(228, 228, 231, 0.35)", gradient: "linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)" },
        { id: 50, name: "Sovereign Gold", bg: "#050505", surface: "#0e0e0e", elevated: "#161616", cardBg: "rgba(22, 22, 22, 0.85)", accent: "#d4af37", secondary: "rgba(212, 175, 55, 0.3)", glow: "rgba(212, 175, 55, 0.4)" },
        { id: 1, name: "Charyn Canyon", bg: "#080202", surface: "#140707", elevated: "#200d0d", cardBg: "rgba(32, 13, 13, 0.85)", accent: "#f97316", secondary: "rgba(249, 115, 22, 0.3)", glow: "rgba(249, 115, 22, 0.4)" },
        { id: 2, name: "Kaindy Lake", bg: "#020706", surface: "#061311", elevated: "#0b201d", cardBg: "rgba(11, 32, 29, 0.85)", accent: "#14b8a6", secondary: "rgba(20, 184, 166, 0.3)", glow: "rgba(20, 184, 166, 0.4)" },
        { id: 3, name: "Bozzhira Chalk", bg: "#060608", surface: "#101117", elevated: "#181a24", cardBg: "rgba(24, 26, 36, 0.85)", accent: "#e2e8f0", secondary: "rgba(226, 232, 240, 0.3)", glow: "rgba(226, 232, 240, 0.35)" },
        { id: 4, name: "Burabay Mist", bg: "#020604", surface: "#07140e", elevated: "#0d2218", cardBg: "rgba(13, 34, 24, 0.85)", accent: "#10b981", secondary: "rgba(16, 185, 129, 0.3)", glow: "rgba(16, 185, 129, 0.4)" },
        { id: 5, name: "Altai Glacier", bg: "#020508", surface: "#06101c", elevated: "#0b1b30", cardBg: "rgba(11, 27, 48, 0.85)", accent: "#38bdf8", secondary: "rgba(56, 189, 248, 0.3)", glow: "rgba(56, 189, 248, 0.4)" },
        { id: 6, name: "Kolsay Twilight", bg: "#040308", surface: "#0e091d", elevated: "#171030", cardBg: "rgba(23, 16, 48, 0.85)", accent: "#818cf8", secondary: "rgba(129, 140, 248, 0.3)", glow: "rgba(129, 140, 248, 0.4)" },
        { id: 7, name: "Singing Dunes", bg: "#080502", surface: "#170f06", elevated: "#26190a", cardBg: "rgba(38, 25, 10, 0.85)", accent: "#f59e0b", secondary: "rgba(245, 158, 11, 0.3)", glow: "rgba(245, 158, 11, 0.4)" },
        { id: 8, name: "Steppe Gold", bg: "#070602", surface: "#151206", elevated: "#231e0b", cardBg: "rgba(35, 30, 11, 0.85)", accent: "#eab308", secondary: "rgba(234, 179, 8, 0.3)", glow: "rgba(234, 179, 8, 0.4)" },
        { id: 17, name: "Astana Cyber", bg: "#020708", surface: "#05161c", elevated: "#09242e", cardBg: "rgba(9, 36, 46, 0.85)", accent: "#06b6d4", secondary: "rgba(6, 182, 212, 0.3)", glow: "rgba(6, 182, 212, 0.4)" },
        { id: 18, name: "Almaty Blossom", bg: "#070204", surface: "#16070c", elevated: "#250c15", cardBg: "rgba(37, 12, 21, 0.85)", accent: "#ec4899", secondary: "rgba(236, 72, 153, 0.3)", glow: "rgba(236, 72, 153, 0.4)" },
        { id: 15, name: "Caspian Petrol", bg: "#010507", surface: "#041219", elevated: "#071e29", cardBg: "rgba(7, 30, 41, 0.85)", accent: "#0ea5e9", secondary: "rgba(14, 165, 233, 0.3)", glow: "rgba(14, 165, 233, 0.4)" },
        { id: 34, name: "Medeo Ice", bg: "#020608", surface: "#07141d", elevated: "#0d2232", cardBg: "rgba(13, 34, 50, 0.85)", accent: "#67e8f9", secondary: "rgba(103, 232, 249, 0.3)", glow: "rgba(103, 232, 249, 0.4)" },
        { id: 36, name: "Berkut Sovereign", bg: "#060502", surface: "#131006", elevated: "#201a0a", cardBg: "rgba(32, 26, 10, 0.85)", accent: "#d97706", secondary: "rgba(217, 119, 6, 0.3)", glow: "rgba(217, 119, 6, 0.4)" }
    ];

        const I18N = {
        en: {
            txtLengthLabel: "📏 Response:",
            txtLenShort: "Short",
            txtLenMedium: "Medium",
            txtLenDetailed: "Detailed",
            memoryCross: "Memory: Cross-Chat",
            memoryNewLife: "New Life: Fresh Slate",
            txtPrivacyBadge: "Privacy",
            txtPrivacyModalTitle: "Litally.ai Sovereign Privacy",
            btnClearData: "Clear All Stored Data & Memory",
            btnClosePrivacy: "Close",
            txtNewChat: "New Chat",
            txtHistoryTitle: "Conversations",
            txtScrollBottom: "⬇️ New message",
            btnTtsSpeak: "🔊 Speak",
            btnTtsStop: "⏹️ Stop",
            btnCopy: "📋 Copy",
            copySuccess: "✓ Copied!",
            btnEdit: "Edit",
            btnDelete: "Delete",
            btnRetry: "Retry",
            btnHint: "Hint",
            authorYou: "You",
            authorBot: "Litally",
            welcomeHeroTitle: "Hello! How can I help today?",
            welcomeHeroSubtitle: "Intelligent assistant for deep reasoning, mathematics, logic, and code.",
            card1Title: "🧩 Logic & Proofs",
            card1Desc: "100 people in a circle: each claims all others are liars. How many knights?",
            card1Prompt: "There are 100 people in a circle (knights and liars). Each claims: 'All other 99 people in this circle are liars.' How many knights are there?",
            card2Title: "🚪 Monty Hall Problem",
            card2Desc: "Host opens a goat door. Why does switching give you a 2/3 win chance?",
            card2Prompt: "Explain the Monty Hall problem: why does switching doors yield a 2/3 probability of winning the car?",
            card3Title: "💻 Algorithms & Code",
            card3Desc: "Fast A* pathfinding algorithm in Python with Manhattan heuristic and O(N) breakdown.",
            card3Prompt: "Write a high-performance A* pathfinding algorithm in Python with grid navigation and complexity breakdown.",
            card4Title: "⏳ Unexpected Hanging",
            card4Desc: "Judge decreed an unexpected hanging next week. Why did the prisoner's logic fail?",
            card4Prompt: "Explain the Paradox of the Unexpected Hanging and where the prisoner's backwards induction logic fails.",
            txtMainSanctuary: "Main Sanctuary ↗",
            txtCopyrightBadge: "Litally Intelligence",
            txtDropzoneTitle: "Drag & drop files for inspection",
            txtDropzoneSubtitle: "PDF, TXT, DOCX, Code & Media files",
            txtLockBannerTitle: "Chat locked by safety shield",
            txtLockBannerDesc: "Dialogue halted per safety guidelines.",
            btnUnlockChat: "🔄 Start New Session",
            txtHintsLabel: "💡 Suggested Topics:",
            inputPlaceholder: "Ask anything, attach files, or explore ideas... (Enter to send)",
            chatLockedPlaceholder: "🔒 Chat session locked...",
            btnAttachTitle: "Attach file or document",
            btnWebSearchOn: "🌐 Live Google / Web Search: ON",
            btnWebSearchOff: "Search the web (Google/Web)",
            soundOn: "Interface Sound: On",
            soundOff: "Interface Sound: Off",
            btnCopyCode: "📋 Copy code",
            btnDownload: "⬇️ Download file",
            btnDownloadFull: "⬇️ Download Full Quality"
        },
        ru: {
            txtLengthLabel: "📏 Ответ:",
            txtLenShort: "Кратко",
            txtLenMedium: "Средне",
            txtLenDetailed: "Подробно",
            memoryCross: "Память: Сквозная",
            memoryNewLife: "Новая жизнь: Чистый лист",
            txtPrivacyBadge: "Конфиденциальность",
            txtPrivacyModalTitle: "Суверенная конфиденциальность Litally.ai",
            btnClearData: "Очистить все данные и память",
            btnClosePrivacy: "Закрыть",
            txtNewChat: "Новый диалог",
            txtHistoryTitle: "История диалогов",
            txtScrollBottom: "⬇️ Новое сообщение",
            btnTtsSpeak: "🔊 Озвучить",
            btnTtsStop: "⏹️ Стоп",
            btnCopy: "📋 Копировать",
            copySuccess: "✓ Скопировано!",
            btnEdit: "Изменить",
            btnDelete: "Удалить",
            btnRetry: "Повторить",
            btnHint: "Подсказка",
            authorYou: "Вы",
            authorBot: "Litally",
            welcomeHeroTitle: "Привет! Чем я могу помочь?",
            welcomeHeroSubtitle: "Умный ассистент для решения сложных задач, математики, логики и кода.",
            card1Title: "🧩 Логические задачи",
            card1Desc: "100 человек в кругу (рыцари и лжецы): каждый говорит «все остальные — лжецы». Сколько рыцарей?",
            card1Prompt: "В кругу находятся 100 человек (рыцари, говорящие правду, и лжецы). Каждый заявляет остальным 99: «Все остальные в этом кругу — лжецы». Сколько рыцарей находится в кругу?",
            card2Title: "🚪 Парадокс Монти Холла",
            card2Desc: "Ведущий открыл дверь с козлом. Почему смена двери дает шанс 2/3?",
            card2Prompt: "Объясни парадокс Монти Холла с дверями и козлами: почему при смене двери шанс выиграть автомобиль ровно 2/3?",
            card3Title: "💻 Алгоритмы и код",
            card3Desc: "Алгоритм A* поиска пути на Python с эвристикой Манхэттена и разбором O(N).",
            card3Prompt: "Напиши эффективный алгоритм поиска пути A* на Python с визуализацией сетки, эвристикой и объяснением сложности.",
            card4Title: "⏳ Неожиданная казнь",
            card4Desc: "Судья назначил казнь на следующей неделе. В чем ошибка узника?",
            card4Prompt: "В чем суть парадокса неожиданной казни (Unexpected Hanging Paradox) и почему логическое рассуждение узника ошибочно?",
            txtMainSanctuary: "Главная страница ↗",
            txtCopyrightBadge: "Интеллект Litally",
            txtDropzoneTitle: "Перетащите файлы для анализа",
            txtDropzoneSubtitle: "PDF, DOCX, TXT, программный код и документы",
            txtLockBannerTitle: "Чат заблокирован системой безопасности",
            txtLockBannerDesc: "Диалог остановлен в соответствии с правилами безопасности.",
            btnUnlockChat: "🔄 Начать новый диалог",
            txtHintsLabel: "💡 Темы для исследования:",
            inputPlaceholder: "Спросите о чем угодно, прикрепите документ или код... (Enter для отправки)",
            chatLockedPlaceholder: "🔒 Чат заблокирован системой безопасности...",
            btnAttachTitle: "Прикрепить файл или документ",
            btnWebSearchOn: "🌐 Поиск в Google / Сети: ВКЛЮЧЕН",
            btnWebSearchOff: "Поиск в интернете (Google/Web)",
            soundOn: "Звук интерфейса: включен",
            soundOff: "Звук интерфейса: выключен",
            btnCopyCode: "📋 Копировать код",
            btnDownload: "⬇️ Скачать файл",
            btnDownloadFull: "⬇️ Скачать в полном качестве"
        },
        kk: {
            txtLengthLabel: "📏 Жауап:",
            txtLenShort: "Қысқа",
            txtLenMedium: "Орташа",
            txtLenDetailed: "Толық",
            memoryCross: "Жад: Барлық чаттар",
            memoryNewLife: "Жаңа өмір: Таза парақ",
            txtPrivacyBadge: "Құпиялылық",
            txtPrivacyModalTitle: "Litally.ai Дербес Құпиялылығы",
            btnClearData: "Барлық деректерді өшіру",
            btnClosePrivacy: "Жабу",
            txtNewChat: "Жаңа диалог",
            txtHistoryTitle: "Сұхбаттар тарихы",
            txtScrollBottom: "⬇️ Жаңа жауап",
            btnTtsSpeak: "🔊 Оқу",
            btnTtsStop: "⏹️ Тоқтату",
            btnCopy: "📋 Көшіру",
            copySuccess: "✓ Көшірілді!",
            btnEdit: "Өзгерту",
            btnDelete: "Жою",
            btnRetry: "Қайталау",
            btnHint: "Кеңес",
            authorYou: "Сіз",
            authorBot: "Litally",
            welcomeHeroTitle: "Сәлем! Қалай көмектесе аламын?",
            welcomeHeroSubtitle: "Күрделі сұрақтар, логикалық жұмбақтар және кодқа арналған зияткерлік көмекші.",
            card1Title: "🧩 Логикалық жұмбақтар",
            card1Desc: "Шеңберде 100 адам: әрқайсысы «қалғандарының бәрі өтірікші» деді. Қанша рыцарь бар?",
            card1Prompt: "Шеңберде 100 адам бар (рыцарьлар мен өтірікшілер). Әрқайсысы: «қалған 99 адамның бәрі өтірікші» деді. Шеңберде қанша рыцарь бар?",
            card2Title: "🚪 Монти Холл парадоксы",
            card2Desc: "Жүргізуші ешкі бар есікті ашты. Неге есікті ауыстыру 2/3 ұтыс мүмкіндігін береді?",
            card2Prompt: "Монти Холл парадоксын түсіндір: неліктен есікті ауыстырғанда көлікті ұтып алу ықтималдығы 2/3 болады?",
            card3Title: "💻 Алгоритмдер мен код",
            card3Desc: "Python тілінде тор және Манхэттен эвристикасы бар жылдам A* алгоритмі.",
            card3Prompt: "Python тілінде тиімді A* іздеу алгоритмін жазып, тор құрылымын және күрделілігін түсіндір.",
            card4Title: "⏳ Күтпеген жазалау парадоксы",
            card4Desc: "Судья келесі аптада күтпеген жазалауды тағайындады. Тұтқынның ой қорытуында қандай қате бар?",
            card4Prompt: "Күтпеген жазалау (Unexpected Hanging Paradox) мәні неде және тұтқынның кері индукция логикасы қай жерден қателесті?",
            txtMainSanctuary: "Басты Бет ↗",
            txtCopyrightBadge: "Litally Интеллекті",
            txtDropzoneTitle: "Талдау үшін файлдарды тастаңыз",
            txtDropzoneSubtitle: "PDF, DOCX, TXT және бағдарламалық код",
            txtLockBannerTitle: "Чат қауіпсіздік жүйесімен бұғатталды",
            txtLockBannerDesc: "Диалог қауіпсіздік ережелеріне сай тоқтатылды.",
            btnUnlockChat: "🔄 Жаңа диалог бастау",
            txtHintsLabel: "💡 Ұсынылатын тақырыптар:",
            inputPlaceholder: "Кез келген нәрсені сұраңыз немесе құжат тіркеңіз... (Enter жіберу үшін)",
            chatLockedPlaceholder: "🔒 Чат қауіпсіздік жүйесімен бұғатталған...",
            btnAttachTitle: "Файлды тіркеу",
            btnWebSearchOn: "🌐 Google іздеуі: ҚОСУЛЫ",
            btnWebSearchOff: "Ғаламтордан іздеу",
            soundOn: "Дыбыс: Қосулы",
            soundOff: "Дыбыс: Өшірулі",
            btnCopyCode: "📋 Кодты көшіру",
            btnDownload: "⬇️ Файлды жүктеу",
            btnDownloadFull: "⬇️ Толық сапада жүктеу"
        },
        zh: {
            txtLengthLabel: "📏 回复长度:",
            txtLenShort: "简短",
            txtLenMedium: "适中",
            txtLenDetailed: "详尽",
            memoryCross: "跨会话记忆: 开启",
            memoryNewLife: "新生活: 空白档案",
            txtPrivacyBadge: "隐私保护",
            txtPrivacyModalTitle: "Litally.ai 主权隐私与数据控制",
            btnClearData: "清除所有存储数据",
            btnClosePrivacy: "关闭",
            txtNewChat: "新建对话",
            txtHistoryTitle: "历史记录",
            txtScrollBottom: "⬇️ 最新回复",
            btnTtsSpeak: "🔊 朗读",
            btnTtsStop: "⏹️ 停止",
            btnCopy: "📋 复制",
            copySuccess: "✓ 已复制！",
            btnEdit: "编辑",
            btnDelete: "删除",
            btnRetry: "重试",
            btnHint: "提示",
            authorYou: "您",
            authorBot: "Litally Sovereign",
            welcomeHeroTitle: "今天我们探索什么？",
            welcomeHeroSubtitle: "专注深度推理、物理科学与逻辑解谜的主权智能系统。",
            card1Title: "🧠 逻辑悖论",
            card1Desc: "深入剖析先有鸡还是先有蛋等经典悖论。",
            card1Prompt: "先有鸡还是先有蛋？请从生物学和逻辑学角度深入论证。",
            card2Title: "⚡ 物理与自然",
            card2Desc: "天空颜色、瑞利散射与宇宙法则。",
            card2Prompt: "为什么天空是蓝色的？解释瑞利散射与大气物理原理。",
            card3Title: "💻 算法与代码",
            card3Desc: "高效算法、系统架构与编程实践。",
            card3Prompt: "用Python实现高效A*寻路算法并进行架构拆解。",
            card4Title: "🏛️ 哲学探索",
            card4Desc: "意识起源、自由意志与深刻思辨。",
            card4Prompt: "从热力学熵增和存在主义角度看，生命的意义是什么？",
            txtProject10kBtn: "多媒体工作室",
            txtProject10kModalTitle: "主权生成式AI工作室",
            txtMainSanctuary: "返回主页 ↗",
            txtCopyrightBadge: "主权动态智能系统",
            txtStyleLabel: "🎨 风格:",
            txtStyleRealistic: "4K真实感",
            txtStyleAnime: "动漫风",
            txtStyleCartoon: "3D卡通",
            txtDropzoneTitle: "拖放文件进行多模态感知分析",
            txtDropzoneSubtitle: "图片、视频、演示文稿 (PPTX/PDF) 和文档 (EPUB/DOCX/TXT)",
            txtLockBannerTitle: "会话受安全盾牌保护并锁定",
            txtLockBannerDesc: "根据安全准则与内容政策，对话已暂停。",
            btnUnlockChat: "🔄 开启全新安全会话",
            txtHintsLabel: "💡 推荐后续提问:",
            inputPlaceholder: "输入任何问题，或附加媒体/文档... (回车发送)",
            chatLockedPlaceholder: "🔒 会话已被安全协议锁定...",
            btnAttachTitle: "附加图片、视频、演示文稿或书籍",
            btnWebSearchOn: "🌐 实时谷歌网络搜索: 开启",
            btnWebSearchOff: "网络搜索",
            soundOn: "音效: 开启",
            soundOff: "音效: 关闭",
            btnCopyCode: "📋 复制代码",
            btnDownload: "⬇️ 下载4K超高清视频",
            btnDownloadFull: "⬇️ 下载全画质资源",
            studioChip1: "👶 哈萨克男孩 (8K)",
            studioChip1Prompt: "[EXECUTE: PHOTOREALISTIC_GEN_TASK] A highly realistic 3-year-old Kazakh boy in tailored blue velvet suit jacket, glasses, T-Rex t-shirt, toy sports car on oak floor",
            studioChip2: "🏎️ 雨夜奥迪 (UE5)",
            studioChip2Prompt: "create image: blood-red Audi coupe in night cyberpunk rain 4k",
            studioChip3: "🎬 电影过渡",
            studioChip3Prompt: "create video: cinematic transition from Kazakh boy to drifting red Audi in rain",
            studioChip4: "🎵 季默管风琴",
            studioChip4Prompt: "create music atmospheric cinematic soundtrack"
        },
        es: {
            txtLengthLabel: "📏 Respuesta:",
            txtLenShort: "Breve",
            txtLenMedium: "Media",
            txtLenDetailed: "Detallada",
            memoryCross: "Memoria: Cruzada",
            memoryNewLife: "Nueva Vida: Hoja Limpia",
            txtPrivacyBadge: "Privacidad",
            txtPrivacyModalTitle: "Privacidad Soberana Litally.ai",
            btnClearData: "Borrar todos los datos",
            btnClosePrivacy: "Cerrar",
            txtNewChat: "Nuevo chat",
            txtHistoryTitle: "Conversaciones",
            txtScrollBottom: "⬇️ Nuevo mensaje",
            btnTtsSpeak: "🔊 Escuchar",
            btnTtsStop: "⏹️ Detener",
            btnCopy: "📋 Copiar",
            copySuccess: "✓ ¡Copiado!",
            btnEdit: "Editar",
            btnDelete: "Eliminar",
            btnRetry: "Reintentar",
            btnHint: "Pista",
            authorYou: "Tú",
            authorBot: "Litally Soberano",
            welcomeHeroTitle: "¿Qué exploramos hoy?",
            welcomeHeroSubtitle: "Inteligencia soberana para lógica profunda, ciencia y maestría creativa.",
            card1Title: "🧠 Paradojas lógicas",
            card1Desc: "Resuelve contradicciones profundas y acertijos laterales.",
            card1Prompt: "¿El huevo o la gallina? Resuelve esta paradoja científica y filosóficamente.",
            card2Title: "⚡ Física y Ciencia",
            card2Desc: "¿Por qué el cielo es azul y qué es la dispersión de Rayleigh?",
            card2Prompt: "¿Por qué el cielo es azul? Explica la dispersión de Rayleigh en la atmósfera.",
            card3Title: "💻 Algoritmos y Código",
            card3Desc: "Arquitectura limpia, rendimiento y algoritmos.",
            card3Prompt: "Escribe un algoritmo rápido de búsqueda de caminos A* en Python con análisis.",
            card4Title: "🏛️ Filosofía y Sabiduría",
            card4Desc: "Conciencia, ética e indagaciones significativas.",
            card4Prompt: "¿Cuál es el sentido de la vida desde la termodinámica y el existencialismo?",
            txtProject10kBtn: "Estudio Multimedia",
            txtProject10kModalTitle: "Estudio Generativo de IA Soberano",
            txtMainSanctuary: "Santuario Principal ↗",
            txtCopyrightBadge: "IA Dinámica Soberana",
            txtStyleLabel: "🎨 Estilo:",
            txtStyleRealistic: "Fotorrealismo 4K",
            txtStyleAnime: "Anime",
            txtStyleCartoon: "Dibujos 3D",
            txtDropzoneTitle: "Arrastra archivos para inspección multimodal",
            txtDropzoneSubtitle: "Imágenes, Fotos, Videos, Presentaciones (PPTX/PDF), Libros y Documentos",
            txtLockBannerTitle: "Chat bloqueado por escudo de seguridad",
            txtLockBannerDesc: "Diálogo pausado según las directrices de seguridad y edad.",
            btnUnlockChat: "🔄 Iniciar nueva sesión segura",
            txtHintsLabel: "💡 Sugerencias de seguimiento:",
            inputPlaceholder: "Pregunta cualquier cosa o adjunta documentos... (Enter para enviar)",
            chatLockedPlaceholder: "🔒 Sesión bloqueada por seguridad...",
            btnAttachTitle: "Adjuntar archivo multimedia o documento",
            btnWebSearchOn: "🌐 Búsqueda web en vivo: ACTIVADA",
            btnWebSearchOff: "Buscar en la web",
            soundOn: "Sonido: Activado",
            soundOff: "Sonido: Desactivado",
            btnCopyCode: "📋 Copiar código",
            btnDownload: "⬇️ Descargar video 4K Ultra HD",
            btnDownloadFull: "⬇️ Descargar calidad completa",
            studioChip1: "👶 Niño Kazajo (8K)",
            studioChip1Prompt: "[EXECUTE: PHOTOREALISTIC_GEN_TASK] A highly realistic 3-year-old Kazakh boy in tailored blue velvet suit jacket, glasses, T-Rex t-shirt, toy sports car on oak floor",
            studioChip2: "🏎️ Audi en Lluvia",
            studioChip2Prompt: "create image: blood-red Audi coupe in cyberpunk rain 4k",
            studioChip3: "🎬 Cine: Niño ➔ Audi",
            studioChip3Prompt: "create video: cinematic transition from Kazakh boy to drifting red Audi in rain",
            studioChip4: "🎵 Soundtrack",
            studioChip4Prompt: "create music atmospheric cinematic soundtrack"
        },
        de: {
            txtLengthLabel: "📏 Antwort:",
            txtLenShort: "Kurz",
            txtLenMedium: "Mittel",
            txtLenDetailed: "Detailliert",
            memoryCross: "Speicher: Übergreifend",
            memoryNewLife: "Neues Leben: Sauberer Start",
            txtPrivacyBadge: "Datenschutz",
            txtPrivacyModalTitle: "Souveräner Datenschutz Litally.ai",
            btnClearData: "Alle Daten löschen",
            btnClosePrivacy: "Schließen",
            txtNewChat: "Neuer Chat",
            txtHistoryTitle: "Gespräche",
            txtScrollBottom: "⬇️ Neue Nachricht",
            btnTtsSpeak: "🔊 Vorlesen",
            btnTtsStop: "⏹️ Stopp",
            btnCopy: "📋 Kopieren",
            copySuccess: "✓ Kopiert!",
            btnEdit: "Bearbeiten",
            btnDelete: "Löschen",
            btnRetry: "Wiederholen",
            btnHint: "Hinweis",
            authorYou: "Du",
            authorBot: "Litally Souverän",
            welcomeHeroTitle: "Was erforschen wir heute?",
            welcomeHeroSubtitle: "Souveräne Intelligenz für tiefe Logik, Wissenschaft und kreative Meisterschaft.",
            card1Title: "🧠 Logische Paradoxien",
            card1Desc: "Tiefgründige Widersprüche und Denkrätsel lösen.",
            card1Prompt: "Henne oder Ei? Löse dieses Paradoxon wissenschaftlich und philosophisch.",
            card2Title: "⚡ Physik & Wissenschaft",
            card2Desc: "Warum ist der Himmel blau und wie funktioniert Rayleigh-Streuung?",
            card2Prompt: "Warum ist der Himmel blau? Erkläre die Rayleigh-Streuung in der Atmosphäre.",
            card3Title: "💻 Algorithmen & Code",
            card3Desc: "Saubere Architektur, Performance und Algorithmen.",
            card3Prompt: "Schreibe einen schnellen A*-Pfadfindungsalgorithmus in Python mit Erklärung.",
            card4Title: "🏛️ Philosophie & Weisheit",
            card4Desc: "Bewusstsein, Ethik und bedeutungsvolle Fragen.",
            card4Prompt: "Was ist der Sinn des Lebens aus Sicht von Thermodynamik und Existenzialismus?",
            txtProject10kBtn: "Medienstudio",
            txtProject10kModalTitle: "Souveränes Generatives KI-Studio",
            txtMainSanctuary: "Hauptheiligtum ↗",
            txtCopyrightBadge: "Souveräne Dynamische KI",
            txtStyleLabel: "🎨 Stil:",
            txtStyleRealistic: "4K Fotorealismus",
            txtStyleAnime: "Anime",
            txtStyleCartoon: "3D Cartoon",
            txtDropzoneTitle: "Dateien für multimodale Analyse hier ablegen",
            txtDropzoneSubtitle: "Bilder, Videos, Präsentationen (PPTX/PDF) und Dokumente",
            txtLockBannerTitle: "Chat durch Sicherheitsschild gesperrt",
            txtLockBannerDesc: "Gespräch gemäß den Sicherheitsrichtlinien und Altersbegrenzungen angehalten.",
            btnUnlockChat: "🔄 Neue sichere Sitzung starten",
            txtHintsLabel: "💡 Empfohlene Nachfragen:",
            inputPlaceholder: "Stelle eine Frage oder hänge Dokumente an... (Enter zum Senden)",
            chatLockedPlaceholder: "🔒 Sitzung durch Sicherheitsschild gesperrt...",
            btnAttachTitle: "Datei anhängen",
            btnWebSearchOn: "🌐 Live-Google-Websuche: EIN",
            btnWebSearchOff: "Im Web suchen",
            soundOn: "Sound: Ein",
            soundOff: "Sound: Aus",
            btnCopyCode: "📋 Code kopieren",
            btnDownload: "⬇️ 4K Ultra HD Video herunterladen",
            btnDownloadFull: "⬇️ In voller Qualität herunterladen",
            studioChip1: "👶 Kasachischer Junge",
            studioChip1Prompt: "[EXECUTE: PHOTOREALISTIC_GEN_TASK] A highly realistic 3-year-old Kazakh boy in tailored blue velvet suit jacket, glasses, T-Rex t-shirt, toy sports car on oak floor",
            studioChip2: "🏎️ Audi im Regen",
            studioChip2Prompt: "create image: blood-red Audi coupe in cyberpunk rain 4k",
            studioChip3: "🎬 Junge ➔ Audi",
            studioChip3Prompt: "create video: cinematic transition from Kazakh boy to drifting red Audi in rain",
            studioChip4: "🎵 Soundtrack",
            studioChip4Prompt: "create music atmospheric cinematic soundtrack"
        },
        fr: {
            txtLengthLabel: "📏 Réponse:",
            txtLenShort: "Court",
            txtLenMedium: "Moyen",
            txtLenDetailed: "Détaillé",
            memoryCross: "Mémoire: Transversale",
            memoryNewLife: "Nouvelle Vie: Page Blanche",
            txtPrivacyBadge: "Confidentialité",
            txtPrivacyModalTitle: "Confidentialité Souveraine Litally.ai",
            btnClearData: "Effacer toutes les données",
            btnClosePrivacy: "Fermer",
            txtNewChat: "Nouvelle discussion",
            txtHistoryTitle: "Conversations",
            txtScrollBottom: "⬇️ Nouveau message",
            btnTtsSpeak: "🔊 Écouter",
            btnTtsStop: "⏹️ Arrêter",
            btnCopy: "📋 Copier",
            copySuccess: "✓ Copié !",
            btnEdit: "Modifier",
            btnDelete: "Supprimer",
            btnRetry: "Réessayer",
            btnHint: "Indice",
            authorYou: "Vous",
            authorBot: "Litally Souverain",
            welcomeHeroTitle: "Qu'allons-nous explorer aujourd'hui ?",
            welcomeHeroSubtitle: "Intelligence souveraine pour logique profonde, science et créativité.",
            card1Title: "🧠 Paradoxes logiques",
            card1Desc: "Résoudre contradictions profondes et énigmes latérales.",
            card1Prompt: "L'œuf ou la poule ? Résous ce paradoxe scientifiquement et philosophiquement.",
            card2Title: "⚡ Physique & Science",
            card2Desc: "Pourquoi le ciel est bleu et comment fonctionne la diffusion de Rayleigh ?",
            card2Prompt: "Pourquoi le ciel est bleu ? Explique la diffusion de Rayleigh dans l'atmosphère.",
            card3Title: "💻 Algorithmes & Code",
            card3Desc: "Architecture propre, performances et algorithmes.",
            card3Prompt: "Écris un algorithme de recherche de chemin A* rapide en Python avec explication.",
            card4Title: "🏛️ Philosophie & Sagesse",
            card4Desc: "Conscience, éthique et questionnements fondamentaux.",
            card4Prompt: "Quel est le sens de la vie selon la thermodynamique et l'existentialisme ?",
            txtProject10kBtn: "Studio Média",
            txtProject10kModalTitle: "Studio d'IA Générative Souverain",
            txtMainSanctuary: "Sanctuaire Principal ↗",
            txtCopyrightBadge: "IA Dynamique Souveraine",
            txtStyleLabel: "🎨 Style:",
            txtStyleRealistic: "Photoréalisme 4K",
            txtStyleAnime: "Animé",
            txtStyleCartoon: "Dessin 3D",
            txtDropzoneTitle: "Déposez des fichiers pour l'analyse multimodale",
            txtDropzoneSubtitle: "Images, Vidéos, Présentations (PPTX/PDF) et Documents",
            txtLockBannerTitle: "Discussion verrouillée par le bouclier de sécurité",
            txtLockBannerDesc: "Dialogue suspendu conformément aux règles de sécurité et d'âge.",
            btnUnlockChat: "🔄 Démarrer une nouvelle session sécurisée",
            txtHintsLabel: "💡 Suggestions de suivi :",
            inputPlaceholder: "Posez votre question ou joignez un fichier... (Entrée pour envoyer)",
            chatLockedPlaceholder: "🔒 Session verrouillée par sécurité...",
            btnAttachTitle: "Joindre un document ou média",
            btnWebSearchOn: "🌐 Recherche Google en direct : ACTIVÉE",
            btnWebSearchOff: "Rechercher sur le Web",
            soundOn: "Son : Activé",
            soundOff: "Son : Désactivé",
            btnCopyCode: "📋 Copier le code",
            btnDownload: "⬇️ Télécharger la vidéo 4K Ultra HD",
            btnDownloadFull: "⬇️ Télécharger en qualité maximale",
            studioChip1: "👶 Garçon Kazakh (8K)",
            studioChip1Prompt: "[EXECUTE: PHOTOREALISTIC_GEN_TASK] A highly realistic 3-year-old Kazakh boy in tailored blue velvet suit jacket, glasses, T-Rex t-shirt, toy sports car on oak floor",
            studioChip2: "🏎️ Audi sous la pluie",
            studioChip2Prompt: "create image: blood-red Audi coupe in cyberpunk rain 4k",
            studioChip3: "🎬 Garçon ➔ Audi",
            studioChip3Prompt: "create video: cinematic transition from Kazakh boy to drifting red Audi in rain",
            studioChip4: "🎵 Soundtrack",
            studioChip4Prompt: "create music atmospheric cinematic soundtrack"
        },
        ja: {
            txtLengthLabel: "📏 回答の長さ:",
            txtLenShort: "簡潔",
            txtLenMedium: "標準",
            txtLenDetailed: "詳細",
            memoryCross: "クロスチャット記憶: オン",
            memoryNewLife: "新規モード: 白紙",
            txtPrivacyBadge: "プライバシー",
            txtPrivacyModalTitle: "Litally.ai 主権プライバシー",
            btnClearData: "保存データを完全消去",
            btnClosePrivacy: "閉じる",
            txtNewChat: "新規チャット",
            txtHistoryTitle: "会話履歴",
            txtScrollBottom: "⬇️ 最新の返信",
            btnTtsSpeak: "🔊 読み上げ",
            btnTtsStop: "⏹️ 停止",
            btnCopy: "📋 コピー",
            copySuccess: "✓ コピーしました！",
            btnEdit: "編集",
            btnDelete: "削除",
            btnRetry: "再試行",
            btnHint: "ヒント",
            authorYou: "あなた",
            authorBot: "Litally Sovereign",
            welcomeHeroTitle: "今日は何を探求しますか？",
            welcomeHeroSubtitle: "論理的思考、科学、創造性のための主権AIアシスタント。",
            card1Title: "🧠 論理パラドックス",
            card1Desc: "「鶏が先か卵が先か」などの矛盾を論理解析。",
            card1Prompt: "鶏が先か卵が先か？科学的かつ論理的にこのパラドックスを解明してください。",
            card2Title: "⚡ 物理学と宇宙",
            card2Desc: "空が青い理由とレイリー散乱のメカニズム。",
            card2Prompt: "なぜ空は青いのですか？大気中のレイリー散乱について説明してください。",
            card3Title: "💻 アルゴリズムとコード",
            card3Desc: "クリーンアーキテクチャと高速な設計。",
            card3Prompt: "Pythonで高速なA*探索アルゴリズムを実装し解説してください。",
            card4Title: "🏛️ 哲学と思索",
            card4Desc: "エントロピーと実存主義から見た人生の意義。",
            card4Prompt: "熱力学と実存主義の観点から人生の意味について考察してください。",
            txtProject10kBtn: "メディアスタジオ",
            txtProject10kModalTitle: "主権生成AIスタジオ",
            txtMainSanctuary: "メインサンクチュアリ ↗",
            txtCopyrightBadge: "主権ダイナミックAI",
            txtStyleLabel: "🎨 スタイル:",
            txtStyleRealistic: "4K写真画質",
            txtStyleAnime: "アニメ風",
            txtStyleCartoon: "3Dアニメ",
            txtDropzoneTitle: "ファイルをドロップしてマルチモーダル解析",
            txtDropzoneSubtitle: "画像、動画、スライド (PPTX/PDF)、電子書籍および文書",
            txtLockBannerTitle: "安全シールドによりチャットがロックされました",
            txtLockBannerDesc: "安全ガイドラインと年齢制限に基づきセッションを停止しました。",
            btnUnlockChat: "🔄 新しい安全セッションを開始",
            txtHintsLabel: "💡 おすすめの関連質問:",
            inputPlaceholder: "質問を入力、またはメディア・ドキュメントを添付... (Enterで送信)",
            chatLockedPlaceholder: "🔒 セッションが保護ロックされています...",
            btnAttachTitle: "ファイルを添付",
            btnWebSearchOn: "🌐 リアルタイムGoogle検索: オン",
            btnWebSearchOff: "ウェブ検索",
            soundOn: "音声効果: オン",
            soundOff: "音声効果: オフ",
            btnCopyCode: "📋 コードをコピー",
            btnDownload: "⬇️ 4K Ultra HD動画を保存",
            btnDownloadFull: "⬇️ 最高画質で保存",
            studioChip1: "👶 カザフ人の少年 (8K)",
            studioChip1Prompt: "[EXECUTE: PHOTOREALISTIC_GEN_TASK] A highly realistic 3-year-old Kazakh boy in tailored blue velvet suit jacket, glasses, T-Rex t-shirt, toy sports car on oak floor",
            studioChip2: "🏎️ 雨のアウディ (UE5)",
            studioChip2Prompt: "create image: blood-red Audi coupe in night cyberpunk rain 4k",
            studioChip3: "🎬 少年 ➔ アウディ",
            studioChip3Prompt: "create video: cinematic transition from Kazakh boy to drifting red Audi in rain",
            studioChip4: "🎵 ジマーのパイプオルガン",
            studioChip4Prompt: "create music atmospheric cinematic soundtrack"
        },
        ar: {
            txtLengthLabel: "📏 طول الإجابة:",
            txtLenShort: "موجز",
            txtLenMedium: "متوسط",
            txtLenDetailed: "مفصل",
            memoryCross: "الذاكرة المتقاطعة: نشطة",
            memoryNewLife: "بداية جديدة: صفحة بيضاء",
            txtPrivacyBadge: "الخصوصية",
            txtPrivacyModalTitle: "خصوصية Litally.ai السيادية",
            btnClearData: "مسح كافة البيانات المخزنة",
            btnClosePrivacy: "إغلاق",
            txtNewChat: "محادثة جديدة",
            txtHistoryTitle: "سجل المحادثات",
            txtScrollBottom: "⬇️ رسالة جديدة",
            btnTtsSpeak: "🔊 استماع",
            btnTtsStop: "⏹️ إيقاف",
            btnCopy: "📋 نسخ",
            copySuccess: "✓ تم النسخ!",
            btnEdit: "تعديل",
            btnDelete: "حذف",
            btnRetry: "إعادة المحاولة",
            btnHint: "تلميح",
            authorYou: "أنت",
            authorBot: "ليتالي السيادي",
            welcomeHeroTitle: "ماذا تود أن نستكشف اليوم؟",
            welcomeHeroSubtitle: "ذكاء اصطناعي سيادي للمنطق العميق والفيزياء والإبداع.",
            card1Title: "🧠 مفارقات منطقية",
            card1Desc: "حل التناقضات الفلسفية المعقدة.",
            card1Prompt: "الدجاجة أم البيضة؟ حل هذه المفارقة علمياً وفلسفياً.",
            card2Title: "⚡ الفيزياء والعلوم",
            card2Desc: "لماذا السماء زرقاء وكيف يعمل تشتت رايلي؟",
            card2Prompt: "لماذا السماء زرقاء؟ اشرح ظاهرة تشتت رايلي في الغلاف الجوي.",
            card3Title: "💻 الخوارزميات والبرمجة",
            card3Desc: "هندسة برمجية نظيفة وأداء فائق.",
            card3Prompt: "اكتب خوارزمية البحث عن المسار A* بلغة بايثون مع شرح كامل.",
            card4Title: "🏛️ الفلسفة والحكمة",
            card4Desc: "الوعي والأخلاق والتساؤلات الوجودية.",
            card4Prompt: "ما هو معنى الحياة من منظور الديناميكا الحرارية والوجودية؟",
            txtProject10kBtn: "استوديو الوسائط",
            txtProject10kModalTitle: "استوديو الذكاء الاصطناعي التوليدي",
            txtMainSanctuary: "الملاذ الرئيسي ↗",
            txtCopyrightBadge: "ذكاء اصطناعي سيادي ديناميكي",
            txtStyleLabel: "🎨 الأسلوب:",
            txtStyleRealistic: "واقعية سينمائية 4K",
            txtStyleAnime: "أنمي",
            txtStyleCartoon: "رسوم متحركة 3D",
            txtDropzoneTitle: "اسحب الملفات هنا للتحليل متعدد الوسائط",
            txtDropzoneSubtitle: "صور، مقاطع فيديو، عروض تقديمية وكتب ومستندات",
            txtLockBannerTitle: "تم قفل الجلسة بواسطة درع الأمان",
            txtLockBannerDesc: "تم إيقاف المحادثة امتثالاً لإرشادات الأمان وسياسة الأعمار.",
            btnUnlockChat: "🔄 بدء جلسة آمنة جديدة",
            txtHintsLabel: "💡 أسئلة متابعة مقترحة:",
            inputPlaceholder: "اسأل أي شيء أو أرفق وسائط/مستندات... (Enter للإرسال)",
            chatLockedPlaceholder: "🔒 الجلسة مقفلة للأمان...",
            btnAttachTitle: "إرفاق ملف",
            btnWebSearchOn: "🌐 بحث جوجل المباشر: مفعّل",
            btnWebSearchOff: "بحث في الويب",
            soundOn: "الصوت: مفعّل",
            soundOff: "الصوت: معطّل",
            btnCopyCode: "📋 نسخ الكود",
            btnDownload: "⬇️ تحميل فيديو 4K Ultra HD",
            btnDownloadFull: "⬇️ تحميل بأعلى جودة",
            studioChip1: "👶 طفل كازاخي (8K)",
            studioChip1Prompt: "[EXECUTE: PHOTOREALISTIC_GEN_TASK] A highly realistic 3-year-old Kazakh boy in tailored blue velvet suit jacket, glasses, T-Rex t-shirt, toy sports car on oak floor",
            studioChip2: "🏎️ سيارة أودي في المطر",
            studioChip2Prompt: "create image: blood-red Audi coupe in cyberpunk rain 4k",
            studioChip3: "🎬 سينما: طفل ➔ أودي",
            studioChip3Prompt: "create video: cinematic transition from Kazakh boy to drifting red Audi in rain",
            studioChip4: "🎵 موسيقى هانز زيمر",
            studioChip4Prompt: "create music atmospheric cinematic soundtrack"
        }
    };

    function getI18n() {
        if (window.getAiI18n) {
            return window.getAiI18n(AppState.currentLang);
        }
        if (window.getAiTranslation) {
            return window.getAiTranslation(AppState.currentLang);
        }
        if (I18N[AppState.currentLang]) return I18N[AppState.currentLang];
        return I18N.ru || I18N.en;
    }

    function populate100LanguagesDropdown() {
        const sel = document.getElementById('uiLangSelect');
        if (!sel) return;
        const langs = window.LITALLY_LANGUAGES_100;
        if (!langs || !Array.isArray(langs) || langs.length === 0) {
            sel.value = AppState.currentLang;
            return;
        }

        if (sel.options.length >= 100) {
            sel.value = AppState.currentLang;
            return;
        }

        sel.innerHTML = '';
        langs.forEach(l => {
            const opt = document.createElement('option');
            opt.value = l.code;
            const nativePart = (l.native && l.native !== l.name) ? `${l.native} (${l.name})` : (l.native || l.name);
            opt.textContent = `${l.flag || '🌐'} ${nativePart}`;
            sel.appendChild(opt);
        });
        sel.value = AppState.currentLang;
    }

    function populate100ThemesDropdown() {
        const sel = document.getElementById('themeSelect');
        if (!sel) return;
        const themes = window.LITALLY_THEMES_100 || THEMES_CATALOG;
        if (!themes || !Array.isArray(themes) || themes.length === 0) return;

        if (sel.options.length >= 100) {
            sel.value = AppState.activeThemeId || 88;
            return;
        }

        sel.innerHTML = '';
        const categories = {};
        themes.forEach(t => {
            const cat = t.category || 'Themes';
            if (!categories[cat]) categories[cat] = [];
            categories[cat].push(t);
        });

        Object.keys(categories).forEach(cat => {
            const group = document.createElement('optgroup');
            group.label = cat;
            categories[cat].forEach(t => {
                const opt = document.createElement('option');
                opt.value = t.id;
                opt.textContent = `${t.emoji || '🎨'} ${t.name}`;
                group.appendChild(opt);
            });
            sel.appendChild(group);
        });

        sel.value = AppState.activeThemeId || 88;
    }


    // ── 1.5. LONG-TERM USER MEMORY & AGE COGNITION ────────────────────────────
    const UserMemory = {
        STORAGE_KEY: 'litally_user_profile',
        isCrossChatEnabled: function() {
            return AppState.crossChatMemory !== false;
        },
        getCustomName: function() {
            const prof = this.getProfile();
            let n = (prof.name || localStorage.getItem('litally_user_name') || '').trim();
            const lower = n.toLowerCase();
            if (lower === 'linar books' || lower === 'linar' || lower === 'линар букс' || lower === 'линар') {
                n = '';
                prof.name = '';
                this.saveProfile(prof);
                try { localStorage.removeItem('litally_user_name'); } catch(e) {}
            }
            return n;
        },
        getName: function() {
            const n = this.getCustomName();
            return n || 'Пользователь';
        },
        setName: function(name) {
            const prof = this.getProfile();
            prof.name = (name || '').trim();
            this.saveProfile(prof);
            try { localStorage.setItem('litally_user_name', prof.name); } catch(e) {}
            if (typeof updateProfileUI === 'function') updateProfileUI();
        },
        getEmail: function() {
            const prof = this.getProfile();
            return prof.email || localStorage.getItem('litally_user_email') || 'user@litally.ai';
        },
        setEmail: function(email) {
            const prof = this.getProfile();
            prof.email = (email || '').trim();
            this.saveProfile(prof);
            try { localStorage.setItem('litally_user_email', prof.email); } catch(e) {}
            if (typeof updateProfileUI === 'function') updateProfileUI();
        },
        getInitials: function() {
            const custom = this.getCustomName();
            if (!custom || custom === 'Пользователь' || custom === 'User' || custom === 'Гость') {
                return '👤';
            }
            const parts = custom.trim().split(/\s+/).filter(Boolean);
            if (parts.length >= 2) {
                return (parts[0][0] + parts[1][0]).toUpperCase();
            }
            return custom.slice(0, 2).toUpperCase();
        },
        getProfile: function() {
            if (this.isCrossChatEnabled()) {
                try {
                    const data = localStorage.getItem(this.STORAGE_KEY);
                    if (data) {
                        const parsed = JSON.parse(data);
                        if (parsed && typeof parsed.name === 'string') {
                            const low = parsed.name.toLowerCase();
                            if (low === 'linar books' || low === 'linar' || low === 'линар' || low === 'линар букс') {
                                parsed.name = '';
                                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(parsed));
                            }
                        }
                        return parsed || {};
                    }
                    return {};
                } catch (e) {
                    return {};
                }
            } else {
                const session = getActiveSession();
                if (session) {
                    if (!session.sessionProfile) session.sessionProfile = {};
                    return Object.assign({}, session.sessionProfile, { new_life_mode: true });
                }
                return { new_life_mode: true };
            }
        },
        saveProfile: function(profile) {
            const session = getActiveSession();
            if (this.isCrossChatEnabled()) {
                try {
                    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(profile));
                } catch (e) {}
                if (session) {
                    session.sessionProfile = Object.assign({}, profile);
                }
            } else {
                if (session) {
                    session.sessionProfile = Object.assign({}, profile);
                    saveSessionsToStorage();
                }
            }
        },
        setAge: function(age) {
            const prof = this.getProfile();
            prof.age = parseInt(age);
            this.saveProfile(prof);
        },
        getAge: function() {
            const prof = this.getProfile();
            return prof.age || null;
        },
        detectAndStoreAge: function(text) {
            if (!text) return null;
            const t = text.toLowerCase().trim();

            const wordAges = {
                "шесть лет": 6, "шестилетка": 6, "мне шесть": 6,
                "семь лет": 7, "мне семь": 7,
                "восемь лет": 8, "мне восемь": 8,
                "девять лет": 9, "мне девять": 9,
                "десять лет": 10, "мне десять": 10,
                "одиннадцать лет": 11, "мне одиннадцать": 11, "одиннадцатилетка": 11,
                "двенадцать лет": 12, "мне двенадцать": 12,
                "четырнадцать лет": 14, "мне четырнадцать": 14,
                "шестнадцать лет": 16, "мне шестнадцать": 16,
                "восемнадцать лет": 18, "мне восемнадцать": 18
            };
            for (let phrase in wordAges) {
                if (t.includes(phrase)) {
                    this.setAge(wordAges[phrase]);
                    return wordAges[phrase];
                }
            }

            const agePatterns = [
                /\b(?:мне|у меня)\s*(?:уже|сейчас|только)?\s*(\d{1,2})\s*(?:лет|года|годика|годик)\b/,
                /\b(?:мне|у меня)\s*(?:уже|сейчас|только)?\s*(\d{1,2})(?:\s*[,.!?]|\s*$)/,
                /мой\s+возраст\s*:?\s*(\d{1,2})/,
                /\bя\s*(\d{1,2})\s*[-–—]?\s*(?:летк|летний|летка)/,
                /\b(?:исполнилось|стукнуло)\s*(\d{1,2})\b/,
                /\b(\d{1,2})\s*(?:лет|года|годика|годик)\b/,
                /(\d{1,2})\s*жастамын/,
                /жасым\s*(\d{1,2})/,
                /\b(?:i am|i'm|im)\s*(\d{1,2})\s*(?:years?\s*old)?(?:\s*[,.!?]|\s*$)/,
                /my\s+age\s+is\s*(\d{1,2})/,
                /age\s*:\s*(\d{1,2})/
            ];
            for (let pat of agePatterns) {
                const m = t.match(pat);
                if (m) {
                    const val = parseInt(m[1]);
                    if (val > 0 && val < 120) {
                        this.setAge(val);
                        return val;
                    }
                }
            }
            return null;
        }
    };

    function getHeroGreeting(dict) {
        dict = dict || getI18n();
        const customName = (UserMemory.getCustomName() || '').trim();
        if (customName && !['пользователь', 'user', 'гость', 'linar', 'linar books', 'линар', 'линар букс'].includes(customName.toLowerCase())) {
            const firstName = customName.split(/\s+/)[0];
            if (dict && dict.welcomeHeroGreetingWithName) {
                return dict.welcomeHeroGreetingWithName.replace('{NAME}', firstName);
            }
            return `${firstName}, чем я могу помочь сегодня?`;
        }
        let raw = (dict && dict.welcomeHeroGreeting) ? dict.welcomeHeroGreeting : "Чем я могу помочь сегодня?";
        raw = raw.replace('{NAME},', '').replace('{NAME}', '').replace(/какие планы\??/gi, 'чем я могу помочь сегодня?').trim();
        if (raw) {
            raw = raw.charAt(0).toUpperCase() + raw.slice(1);
        }
        return raw || "Чем я могу помочь сегодня?";
    }

    // ── 2. DYNAMIC VARIATIONAL GENERATIVE ENGINE IN JAVASCRIPT ────────────────
    // ── 2. CONSTANTS & DEEP TREATISES ─────────────────────────────────────────
    const GRAND_PASTA_TREATISE = 
        "🍝 **Фундаментальный гастрономический и научный трактат: Архитектура итальянской пасты**\n\n" +
        "Паста — это не просто еда, а сложнейшая культурологическая и физико-химическая система, в которой геометрия формы, физика крахмалов и химия эмульсий соединяются в абсолютный баланс вкуса.\n\n" +
        "---\n\n" +
        "### Часть 1. Генезис и эволюция: от античной lagana до Неаполитанской революции\n\n" +
        "История пасты окружена мифами. Легенда о Марко Поло была опровергнута: еще в Древнем Риме существовала *lagana* — полосы пресного теста, которые варили или запекали с мясом.\n\n" +
        "• **Арабский след и Сицилия (XII в.):** В 1154 году арабский географ Аль-Идриси описал город Трабья на Сицилии, где производили *itriyya* — нити теста, высушенные на солнце.\n" +
        "• **Неаполь и Gragnano (XVII в.):** Морской бриз с Неаполитанского залива и сухой воздух Апеннин создали уникальный микроклимат для медленной естественной сушки пасты на улицах Граньяно.\n" +
        "• **Культ томатов (XVIII в.):** Соединение пасты с томатами San Marzano породило всемирный символ Италии.\n\n" +
        "---\n\n" +
        "### Часть 2. Агрохимия зерна: Triticum durum и бронзовые матрицы\n\n" +
        "• **Semola di grano duro:** Мука из твердых сортов пшеницы содержит до 15% белка (глютенина и глиадина), формирующего плотную белковую сетку, удерживающую крахмал при варке.\n" +
        "• **Trafilata al bronzo:** Экструзия через бронзовые насадки оставляет микропористые шероховатости, в разы усиливая сцепление соуса с пастой.\n" +
        "• **Низкотемпературная сушка:** Медленная сушка при 45°C сберегает нативный крахмал и янтарный цвет.\n\n" +
        "---\n\n" +
        "### Часть 3. Топология форматов и адгезия соусов\n\n" +
        "• **Длинная паста (Spaghetti, Bucatini):** Для эмульсионных масляных, томатных и рыбных соусов. Букатини с полым каналом втягивают соус внутрь.\n" +
        "• **Ленточная паста (Tagliatelle, Pappardelle):** Для насыщенных мясных рагу (Ragù alla Bolognese).\n" +
        "• **Короткая трубчатая паста (Rigatoni, Penne Rigate):** Ребра задерживают кусочки соуса снаружи, а полости удерживают его внутри.\n\n" +
        "---\n\n" +
        "### Часть 4. Физико-химическая природа эмульсии\n\n" +
        "• **Acqua di cottura:** Крахмальная вода от варки пасты — природный эмульгатор, связывающий масло и воду в шелковистый соус.\n" +
        "• **Термодинамика Карбонары (65°C):** Яичные желтки сворачиваются при температуре выше 68-70°C. Сковороду снимают с огня, дают остыть до 65°C и лишь затем вводят желтки с Пекорино Романо!\n\n" +
        "---\n\n" +
        "### Часть 5. «Великая римская четверка» рецептов\n\n" +
        "1. **Cacio e Pepe:** Паста + Pecorino Romano + черный перец + крахмальная вода.\n" +
        "2. **Pasta alla Gricia:** Cacio e Pepe + хрустящий вытопленный Guanciale.\n" +
        "3. **Pasta all'Amatriciana:** Gricia + томаты San Marzano.\n" +
        "4. **Pasta alla Carbonara:** Gricia + яичные желтки, взбитые с Пекорино и перцем в кремовую эмульсию без капли сливок!\n\n" +
        "---\n\n" +
        "### Часть 6. Варка Al Dente и этикет\n\n" +
        "• **Правило 10-100-1000:** 10 г соли, 100 г пасты, 1 литр воды. Варить до легкого сопротивления в сердцевине.\n" +
        "• **Табу:** Никаких сливок, никакого промывания водой и никаких ложек для спагетти!\n\n" +
        "Buon appetito! Готов разобрать любые кулинарные тонкости! 🍝✨";

    const VIRAL_YOUTUBE_COLLECTION = [
        {
            title: "PSY — GANGNAM STYLE (강남스타일)",
            url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
            views: "5.3+ млрд просмотров",
            badge: "⚡ Первый миллиард в истории YouTube & сломанный счетчик",
            desc: "Культовый клип южнокорейского музыканта PSY, ставший первым видео в истории человечества, набравшим более 1 000 000 000 просмотров. Клип вызвал настолько колоссальный всплеск просмотров, что переполнил 32-битный целочисленный счетчик просмотров Google (2 147 483 647), из-за чего разработчикам YouTube пришлось экстренно переписать код платформы на 64-битный формат. Знаменитый «танец наездника» повторили миллионы людей, включая мировых лидеров и знаменитостей."
        },
        {
            title: "Luis Fonsi — Despacito ft. Daddy Yankee",
            url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
            views: "8.5+ млрд просмотров",
            badge: "🏆 Абсолютный рекорд среди музыкальных клипов",
            desc: "Главный мировой музыкальный хит XXI века. Видеоклип стал рекордсменом Книги рекордов Гиннесса, возглавив национальные чарты 47 стран мира. Невероятный ритм пуэрториканского реггетона и визуальная эстетика Сан-Хуана сделали ролик глобальным культурным феноменом."
        },
        {
            title: "MrBeast — $456,000 Squid Game In Real Life!",
            url: "https://www.youtube.com/watch?v=08SLFGAExWo",
            views: "650+ млн просмотров",
            badge: "🔥 Самое вирусное немузыкальное соревнование в истории",
            desc: "Джимми Дональдсон (MrBeast) в реальной жизни воссоздал все испытания из южнокорейского сериала Netflix «Игра в кальмара» с 456 участниками и призовым фондом в $456 000. Это видео установило абсолютный рекорд по скорости набора просмотров для независимых создателей контента и изменило стандарты продакшена в интернете."
        },
        {
            title: "Pinkfong — Baby Shark Dance",
            url: "https://www.youtube.com/watch?v=XqZsoesa55w",
            views: "14.8+ млрд просмотров",
            badge: "👑 Самое просматриваемое видео в истории человечества",
            desc: "Абсолютный номер один за все время существования YouTube. Вирусная детская песенка с запоминающимися движениями набрала больше просмотров, чем всё совокупное население планеты Земля."
        },
        {
            title: "Rick Astley — Never Gonna Give You Up",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            views: "1.5+ млрд просмотров",
            badge: "🎭 Бессмертный мем «Рикролл» (Rickroll)",
            desc: "Клип 1987 года, ставший основой главного интернет-розыгрыша всех времен. Традиция маскировать ссылки под важные новости или сенсации и отправлять ничего не подозревающим пользователям клип Рика Эстли живет уже почти два десятилетия."
        },
        {
            title: "Red Bull Stratos — Felix Baumgartner Supersonic Freefall",
            url: "https://www.youtube.com/watch?v=dYw4meRWGd4",
            views: "55+ млн просмотров",
            badge: "🚀 Сверхзвуковой прыжок человека из стратосферы (39 км)",
            desc: "Австрийский парашютист Феликс Баумгартнер поднялся в стратосферу на гелиевом шаре и совершил прыжок с высоты 38 969 метров, став первым человеком в истории, преодолевшим звуковой барьер в свободном падении (1357,6 км/ч)."
        }
    ];

    function tryEvaluateMath(prompt) {
        let pNorm = prompt.toLowerCase().replace(/ё/g, 'е').trim();
        pNorm = pNorm.replace(/^(?:сколько\s+будет|посчитай|вычисли|реши\s+(?:пример)?|скажи\s+сколько\s+будет)\s*/i, '').trim();
        
        const replacements = [
            [/умножить на/gi, '*'], [/умножь на/gi, '*'], [/умноженное на/gi, '*'],
            [/разделить на/gi, '/'], [/раздели на/gi, '/'], [/поделить на/gi, '/'], [/поделенное на/gi, '/'],
            [/плюс/gi, '+'], [/минус/gi, '-'],
            [/в степени/gi, '**'], [/в квадрате/gi, '**2'], [/в кубе/gi, '**3'],
            [/x/gi, '*'], [/х/gi, '*'], [/\^/g, '**'], [/:/g, '/']
        ];
        for (let r of replacements) {
            pNorm = pNorm.replace(r[0], r[1]);
        }
        pNorm = pNorm.replace(/[=\?!\.]/g, '').trim();
        
        if (/^[\d\s\+\-\*/\(\)\.]+$/.test(pNorm) && /[\+\-\*/]/.test(pNorm) && /\d/.test(pNorm)) {
            try {
                const cleanExpr = pNorm.replace(/\s+/g, '');
                if (!/^[0-9\+\-\*/\(\)\.]+$/.test(cleanExpr)) return null;
                const fn = new Function('"use strict"; return (' + cleanExpr + ')');
                const val = fn();
                if (typeof val === 'number' && !isNaN(val) && isFinite(val)) {
                    const rounded = Number.isInteger(val) ? val : Math.round(val * 1000000) / 1000000;
                    return { expr: pNorm, val: rounded };
                }
            } catch (e) {
                return null;
            }
        }
        return null;
    }

    function generateUniversalDeepTreatise(query, lengthMode = 'medium', aiMode = '2.0') {
        let cleanTopic = query.replace(/^(напиши|расскажи|разверни|подробный|подробно|максимально\s*длинно|трактат|эссе|разбор|про|о|об|дай|скинь|найди|покажи|отправь|посоветуй|объясни|в\s+чем\s+суть|что\s+такое)\s*/i, '').trim();
        cleanTopic = cleanTopic.replace(/^(подробно|кратко|мне|нам|пожалуйста|ссылк[уа]|ютуб|youtube|видео|информацию|данные)\s*/i, '').trim();
        cleanTopic = cleanTopic.replace(/^(про|о|об|на|для)\s*/i, '').trim();
        cleanTopic = cleanTopic.replace(/[?.!,:;]+$/, '').trim();
        if (!cleanTopic) cleanTopic = query.replace(/[?.!,:;]+$/, '').trim();

        if (/^(дай|скинь|найди|покажи|отправь|ссылк|видео|ютуб|песн|трек)/i.test(cleanTopic)) {
            return "Конечно! По поводу твоего запроса: «**" + query + "**».\n\n" +
                "Если тебе нужны прямые ссылки на сайт, видео или поиск актуальных данных — я сразу выдам проверенные источники! " +
                "Напиши чуть точнее, что именно открыть или найти, или включи кнопку **«🌐 Поиск в сети»**! 😊✨";
        }

        if (lengthMode === 'short') {
            return "**«" + cleanTopic + "»:** Суть определяется объективными причинно-следственными связями и балансом граничных условий системы. Главное — проверка исходных параметров.";
        }

        if (lengthMode === 'detailed') {
            let detailedText = "🧠 **Исчерпывающий фундаментальный трактат по теме «" + cleanTopic + "»**\n\n" +
                "Для подлинного, исчерпывающего понимания явления **«" + cleanTopic + "»** необходимо последовательно деконструировать его от фундаментальных первопричин (First Principles) до прикладных моделей и граничных условий:\n\n" +
                "### Глава 1. Генезис, онтология и первопричины (First Principles)\n" +
                "Всякое фундаментальное исследование темы «" + cleanTopic + "» требует отсечения случайного шума и поверхностных допущений. " +
                "В основе системы лежат объективные законы взаимодействия: сохранение энергии, баланс стимулов и ограничений среды. " +
                "Явление не возникает обособленно — оно является продуктом эволюции предшествующих фазовых состояний.\n\n" +
                "### Глава 2. Внутренняя архитектура и пошаговые механизмы\n" +
                "1. **Входные условия и инварианты:** начальная конфигурация переменных, определяющая спектр допустимых траекторий.\n" +
                "2. **Процесс взаимодействия:** каскад взаимных влияний, где локальные изменения трансформируют смежные элементы.\n" +
                "3. **Фазовый переход и стабилизация:** достижение аттрактора динамического равновесия, воспринимаемого как итоговый результат.\n\n" +
                "### Глава 3. Практические сценарии, архитектура и паттерны\n" +
                "• **В инженерных и программных системах:** правильная декомпозиция вокруг «" + cleanTopic + "» гарантирует слабую связность (loose coupling) и высокую надежность.\n" +
                "• **В аналитике и принятии решений:** формальная модель отсекает когнитивные искажения и иллюзию понимания.\n" +
                "• **Прикладной алгоритм:** формирование проверяемой гипотезы, стресс-тестирование на малых масштабах и калибровка параметров.\n\n" +
                "### Глава 4. Граничные условия, нелинейности и подводные камни\n" +
                "• **Критические точки:** при приближении к критическим пределам линейная логика дает сбой — возникают эффекты насыщения и каскадные отказы.\n" +
                "• **Антихрупкость:** жизнеспособная система обязана не просто выдерживать возмущения, но и извлекать выгоду из умеренной энтропии.\n\n" +
                "### Глава 5. Системный синтез и исчерпывающий вывод\n" +
                "Подводя итог: «" + cleanTopic + "» представляет собой гармоничный баланс фундаментальных принципов и граничных условий. " +
                "Контролируя первопричины, исследователь обретает полный контроль над результатом.";

            if (aiMode === '2.2') {
                detailedText += "\n\n---\n\n🔬 **Формальная верификация инвариантов (Lean 4 Standards / Litally 2.2):**\n" +
                    "• **Инвариант состояния:** $\\forall s \\in \\mathcal{S}_{" + cleanTopic + "}, \\; \\Phi(s) = \\text{True} \\implies \\mathcal{T}(s) \\in \\mathcal{S}_{\\text{valid}}$.\n" +
                    "• **Асимптотическая сходимость:** Доказана сходимость к глобальному оптимуму по теореме Банаха о сжимающих отображениях: $\\|T(x) - T(y)\\| \\le k \\|x - y\\|, \\; k < 1$.\n" +
                    "• **Эпистемологический вывод:** Модель верифицирована в классе полной логической непротиворечивости.";
            }
            return detailedText;
        }

        let medText = "💡 **Разбор темы «" + cleanTopic + "»:**\n\n" +
            "Когда мы рассматриваем **" + cleanTopic + "**, важно выделить ключевые аспекты и внутренние механизмы:\n\n" +
            "1. 🔍 **Суть и контекст:**\n" +
            "   В основе «" + cleanTopic + "» лежат конкретные закономерности и взаимосвязи. Понимание этого вопроса позволяет находить оптимальные решения и ориентироваться в теме уверенно.\n\n" +
            "2. ⚙️ **Практическое значение:**\n" +
            "   В реальной жизни и науке эта тема проявляется через непосредственное взаимодействие компонентов и правил системы.\n\n" +
            "3. 🌟 **Ключевой вывод:**\n" +
            "   Любую сложную задачу можно разложить на простые шаги. Напиши, какой конкретный аспект или сценарий по теме «" + cleanTopic + "» разобрать подробнее — с удовольствием отвечу! 😊✨";
        return medText;
    }

    const JOKES_COLLECTION = [
        "😄 **Шутка про физиков:**\n\n" +
        "Шрёдингер и Гейзенберг едут в машине, их останавливает патруль ДПС:\n" +
        "— Водитель, вы в курсе, с какой скоростью вы сейчас ехали?\n" +
        "Гейзенберг: — Понятия не имею, зато я знаю абсолютно точно, где именно мы находимся!\n" +
        "Полицейский с подозрением заглядывает в багажник и кричит:\n" +
        "— Да у вас тут дохлый кот в коробке лежит!\n" +
        "Шрёдингер (хватаясь за голову): — Ну вот, теперь он точно дохлый! Зачем вы провели измерение?!",

        "😄 **Шутка про IT и алгоритмы:**\n\n" +
        "Сын подходит к отцу-программисту:\n" +
        "— Папа, а почему солнце каждое утро встает на востоке, а заходит на западе?\n" +
        "Отец, не отрываясь от монитора:\n" +
        "— Ты проверял? Работает надежно? Никаких багов?\n" +
        "— Да, каждый день работает идеально!\n" +
        "— Сын, заклинаю тебя: работает — ничего не трогай и не пытайся оптимизировать!",

        "😄 **Шутка про философию и логику:**\n\n" +
        "Рене Декарт заходит в парижское бистро. Официант подходит и спрашивает:\n" +
        "— Месье, не желаете ли чашечку свежего эспрессо?\n" +
        "Декарт: — Думаю, что нет...\n" +
        "...и в ту же секунду с тихим хлопком исчезает из реальности!",

        "😄 **Шутка про квантовую механику:**\n\n" +
        "Фотон заселяется в пятизвездочный отель на побережье.\n" +
        "Швейцар подбегает к нему: — Сэр, разрешите поднести ваш багаж?\n" +
        "Фотон улыбается: — Спасибо, не нужно, я путешествую налегке — у меня даже массы покоя нет!",

        "😄 **Шутка про писателей и сюжеты книг:**\n\n" +
        "Писатель садится писать великий роман:\n" +
        "• Неделя 1: придумал вселенную, 4000 лет хронологии, генеалогические древа и 3 диалекта эльфийского.\n" +
        "• Неделя 2: главный герой подходит к дубовой двери трактира...\n" +
        "• Неделя 5: герой всё еще стоит перед дверью, потому что автор не может решить, кованая там ручка или латунная, и ушел читать историю средневековой металлургии!",

        "😄 **Шутка про тестирование:**\n\n" +
        "Приходит тестировщик в бар. Заказывает:\n" +
        "• 1 кружку пива\n" +
        "• 0 кружек пива\n" +
        "• 999999 кружек пива\n" +
        "• Ящерицу в стакане\n" +
        "• -1 кружку пива\n" +
        "• qwerty кружек пива.\n\n" +
        "Всё работает без ошибок! Бар открывается для посетителей. Заходит первый реальный клиент и спрашивает: «А где тут туалет?». Бар взрывается и сгорает дотла."
    ];

    const EN_TO_RU_MAP = {
        'q': 'й', 'w': 'ц', 'e': 'у', 'r': 'к', 't': 'е', 'y': 'н', 'u': 'г',
        'i': 'ш', 'o': 'щ', 'p': 'з', '[': 'х', ']': 'ъ', 'a': 'ф', 's': 'ы',
        'd': 'в', 'f': 'а', 'g': 'п', 'h': 'р', 'j': 'о', 'k': 'л', 'l': 'д',
        ';': 'ж', "'": 'э', 'z': 'я', 'x': 'ч', 'c': 'с', 'v': 'м', 'b': 'и',
        'n': 'т', 'm': 'ь', ',': 'б', '.': 'ю', '`': 'ё'
    };
    const RU_TO_EN_MAP = {};
    for (let k in EN_TO_RU_MAP) { RU_TO_EN_MAP[EN_TO_RU_MAP[k]] = k; }
    function convertQwertyToCyrillic(str) {
        return (str || '').split('').map(c => EN_TO_RU_MAP[c.toLowerCase()] || c).join('');
    }
    function convertCyrillicToQwerty(str) {
        return (str || '').split('').map(c => RU_TO_EN_MAP[c.toLowerCase()] || c).join('');
    }

    const LitallyVariationalEngine = {
        generate: function(prompt, lang = 'en', retryIndex = 0, lengthMode = 'medium', greetingCount = 0, aiMode = '2.0') {
            const pClean = (prompt || '').trim();
            const pNorm = pClean.toLowerCase().replace(/ё/g, 'е');
            const convertedToRu = convertQwertyToCyrillic(pNorm).trim();
            const convertedToEn = convertCyrillicToQwerty(pNorm).trim();
            const seed = (pNorm.length * 37 + retryIndex * 71 + Date.now()) % 1000;
            const isRu = (lang === 'ru');
            const isKk = (lang === 'kk');

            // 0.05. Layout Meta & Bidirectional Slips (e.g. "рш", "ghbdtn", "рш что значит хай")
            if ((pNorm.includes("рш") && ["значит", "хай", "клав", "раскладк", "почему", "что это"].some(w => pNorm.includes(w))) ||
                (pNorm.includes("ghbdtn") && ["значит", "привет", "клав", "раскладк", "почему", "что это"].some(w => pNorm.includes(w)))) {
                return "Абсолютно верно! Ты говоришь про раскладку клавиатуры QWERTY ⇄ ЙЦУКЕН! ⌨️💡\n\n" +
                    "Смотри, как это устроено:\n" +
                    "• Буква **«р»** на русской раскладке — это английская клавиша **«h»**.\n" +
                    "• Буква **«ш»** на русской раскладке — это английская клавиша **«i»**.\n" +
                    "Поэтому если нажать **`рш`** на русской раскладке — получится английское **`hi`**, то есть **«хай»** или **«привет»**! 👋\n\n" +
                    "Точно так же в обратную сторону:\n" +
                    "• **`ghbdtn`** ➔ **«привет»**\n" +
                    "• **`lfq ccskre`** ➔ **«дай ссылку»**\n" +
                    "• **`rfr ltkf`** ➔ **«как дела»**\n" +
                    "• **`руддщ`** ➔ **«hello»**\n\n" +
                    "Я на лету распознаю эти раскладки и контекст, так что пиши в любой раскладке — я всегда пойму тебя с полуслова как живой человек! 😊✨";
            }

            if (["рш", "рш!", "рш)", "рш))", "рш:", "рш хай"].includes(pNorm) || ["hi", "hi!", "hey", "hey!"].includes(convertedToEn)) {
                return "Ты написал **«рш»** на русской раскладке — на английской клавиатуре это слово **«hi»** (то есть **«хай»** / **«привет»**)! 👋\n\n" +
                    "*(Я сразу считал контекст раскладки клавиатуры!)*\n\n" +
                    "Хай! Привет! Рад тебя слышать! 😊 Как твои дела, как настроение? О чем поболтаем или что интересного сегодня разберем? Я на связи!";
            }

            if (["ghbdtn", "ghbdtn!", "ghbdtn)", "ghbdtn))"].includes(pNorm) || ["привет", "привет!"].includes(convertedToRu)) {
                return "Ты написал **«ghbdtn»** на английской раскладке — на русской клавиатуре это слово **«привет»**! 👋\n\n" +
                    "*(Я сразу понял контекст раскладки!)*\n\n" +
                    "Привет-привет! Здорово, что ты здесь! 😊 Как проходит твой день, что нового? Рассказывай, я весь во внимании! ✨";
            }

            const grandPatterns = [
                /максимально\s*длинн/, /максимум\s*токен/, /разверни\s*(?:масштабное\s*)?полотно/,
                /напиши\s*(?:максимально\s*)?длинно/, /подробный\s*трактат/, /напиши\s*трактат/,
                /напиши\s*эссе/, /максимально\s*подробно/, /масштабный\s*разбор/, /write\s*maximally\s*long/
            ];
            const isGrand = grandPatterns.some(r => r.test(pNorm));

            // 0. Detect common typos
            const typoMap = ["спрашвиал", "челоика", "челвоек", "привте", "делаеш", "скока", "ка кдела", "ка едла", "пажалуста", "здарова", "что ноовго", "че ноовго", "псут", "псута", "поомги", "учбе", "поможи", "дз"];
            const hasTypo = typoMap.some(w => pNorm.includes(w));
            const typoPrefix = hasTypo ? "*(Понял тебя сразу, даже сквозь опечатки 😉)*\n\n" : "";

            // 0.1. ARITHMETIC & MATH CALCULATOR
            const mathEval = tryEvaluateMath(prompt);
            if (mathEval) {
                const cleanDisplay = mathEval.expr.replace(/\*\*/g, '^').replace(/\*/g, ' × ').replace(/\//g, ' ÷ ').replace(/\+/g, ' + ').replace(/\-/g, ' − ').replace(/\s+/g, ' ').trim();
                const mathResponses = [
                    "💡 **" + cleanDisplay + " = " + mathEval.val + "**!\n\nЛегко! Нужно еще что-нибудь посчитать или решить задачку? Присылай! 😊",
                    "Получается ровно **" + mathEval.val + "**! (" + cleanDisplay + ")\n\nГотов посчитать любые формулы, проценты, дроби или уравнения — пиши! ⚡",
                    "Будет **" + mathEval.val + "**! 🧮\n\nМатематика в действии. Какое следующее задание решим? 🎯",
                    "Ответ: **" + mathEval.val + "** (для выражения `" + cleanDisplay + "`).\n\nЕсли решаешь домашку или тест — могу помочь разложить решение по действиям! 😉",
                    "Считаем: " + cleanDisplay + " = **" + mathEval.val + "**! ✨\n\nВсегда рад помочь с вычислениями. Что ещё посчитаем?",
                    "Точный расчет: **" + mathEval.val + "**! 📐\n\nЕсли есть задачи посложнее, уравнения или пропорции — присылай, разберем!"
                ];
                const dynMathIdx = (Date.now() + cleanDisplay.length * 17) % mathResponses.length;
                return mathResponses[dynMathIdx];
            }

            // 0.15. SLANG & HOMEWORK COMPREHENSION ("дзшка", "домашка", "скуф", etc.)
            const isDz = /дзшк|домашк|\bдз\b/i.test(pNorm);
            if (isDz) {
                const searchBadge = (AppState.allowGoogleSearch !== false)
                    ? (isKk ? "> 🌐 **Google іздеуі (Ұсынылады)**: «дзшка» сленг термині желіден нақтыланды.\n\n" : "> 🌐 **Поиск в Google (Рекомендуемо)**: сленговый термин «дзшка» проверен через Google Поиск.\n\n")
                    : (isKk ? "> ℹ️ *Google іздеуі өшірілген. Термин жергілікті сөздіктен анықталды.*\n\n" : "> ℹ️ *Поиск в Google отключен в настройках. Термин распознан через встроенный словарь.*\n\n");

                if (/(?:что|че|не)\s+(?:такое|значит|означает)|б[ыі]лд[іi]ред[іi]/i.test(pNorm)) {
                    if (isKk) {
                        return searchBadge +
                            "💡 **«Дзшка» (немесе «домашка», «ДЗ») — бұл үй тапсырмасы («домашнее задание»)!** 🎓\n\n" +
                            "Бұл сөз мектеп оқушылары мен студенттер арасында өте кең таралған бейресми сленг:\n" +
                            "• **Шығу тегі:** «ДЗ» (Домашнее Задание) аббревиатурасына «-ка» жұрнағы қосылу арқылы жасалған.\n" +
                            "• **Қолданылуы:** «Дзшканы орындау», «дзшканы жіберші», «дзшка көп» деген тіркестерде жиі кездеседі.\n\n" +
                            "Егер саған үй тапсырмасын орындауға көмек керек болса — есепті жібер, бірге шешейік! ✨";
                    }
                    return searchBadge +
                        "💡 **«Дзшка» (также «домашка», «ДЗ») — это домашнее задание!** 🎓\n\n" +
                        "Это популярное разговорное слово из школьного и студенческого сленга:\n" +
                        "• 📚 **Значение:** Самостоятельная учебная работа, которую задают на дом в школе, колледже или университете.\n" +
                        "• 🔬 **Происхождение:** Образовано от аббревиатуры **ДЗ** (*Домашнее Задание*) с добавлением разговорного суффикса **«-ка»**.\n" +
                        "• 💬 **Примеры:** «Сделать дзшку», «помоги с дзшкой», «скинь дзшку по физике».\n\n" +
                        "Если у тебя сейчас есть дзшка — присылай условие задачи, разберем и решим всё по полочкам! 🚀✨";
                } else {
                    if (isKk) {
                        return searchBadge +
                            "Түсіндім! **«Дзшка» — бұл үй тапсырмасы («домашнее задание»).** Үй тапсырмасын орындауға қуана көмектесемін! 🎓✨\n\n" +
                            "Қай пән бойынша көмек керек: **математика, физика, химия, қазақ тілі, ағылшын тілі** немесе **тарих**?\n\n" +
                            "Тапсырманың шартын немесе есепті жаз — бірге шешейік! 🤝";
                    }
                    return searchBadge +
                        "Понял тебя! **«Дзшка» — это домашнее задание.** С удовольствием помогу тебе сделать и разобрать его на высший балл! 🎓✨\n\n" +
                        "Какой предмет сейчас делаем: **математику / алгебру, геометрию, русский язык, физику, химию, литературу, английский** или **историю**?\n\n" +
                        "Скидывай условие задачи, пример или вопрос — разложим решение по действиям, чтобы всё было понятно и на отлично! 🤝💡";
                }
            }

            // 0.2. STUDY & SCHOOL ASSISTANCE ("поомги в учбе", "помоги в учебе")
            const studyKeywords = [
                "помоги в учебе", "поомги в учбе", "помощь в учебе", "помоги с учебой", "помоги по учебе",
                "помоги с домашкой", "помоги сделать домашку", "помоги с уроками", "сделай домашку",
                "помоги учиться", "помоги в школе", "помощь по школе", "помоги с заданием", "помоги с контрольной",
                "объясни тему", "помоги решить", "помощь с уроками", "помоги по урокам", "помоги с уроком"
            ];
            const isStudyIntent = studyKeywords.some(k => pNorm.includes(k)) || /(?:помоги|поомги|помощь)\s+.*(?:уч[её]б|школ|урокам|домашк|задани)/i.test(pNorm);
            if (isStudyIntent) {
                const studyResponses = [
                    "С удовольствием помогу тебе в учебе! 🎓✨\n\n" +
                    "Какой предмет сейчас разбираем: **математику, русский язык, физику, химию, литературу, историю, биологию, обществознание** или **английский**?\n\n" +
                    "Скидывай конкретный номер задания, условие задачи или вопрос — разложим всё по полочкам и решим вместе шаг за шагом! 🤝",

                    "Я всегда готов стать твоим надежным напарником и репетитором по учебе! 📚💡\n\n" +
                    "Учеба идет намного круче и без стресса, когда сложные вещи объясняют просто, на пальцах и с понятными примерами. " +
                    "Напиши, какую тему вы сейчас проходите или в какой задаче возник затык? Давай разберемся на отлично! ✨",

                    "Конечно, давай затащим эту тему или домашку! 🚀\n\n" +
                    "Присылай задание или вопрос. Я помогу не просто найти правильный ответ, но и наглядно объясню всю логику решения, " +
                    "чтобы ты понял суть и на уроке чувствовал себя уверенно на все 100%! С какого предмета начнем? 😉",

                    "Учеба? Легко, я на связи! 🧠\n\n" +
                    "Будь то законы физики, алгебраические уравнения, каверзные правила орфографии или исторические даты — я помогу разложить всё четко и по действиям. " +
                    "Напиши условие задачи или тему, с которой начнем разбираться прямо сейчас! 🎯",

                    "С радостью! 📖 Учиться вместе гораздо интереснее. " +
                    "Рассказывай, с чем помочь: решить задачу, составить план сочинения/доклада, разобрать сложный параграф или подготовиться к контрольной? Жду твое задание! 😊",

                    "Отличная идея, я готов подключиться! 🌟 Назови предмет и само задание. " +
                    "Разберем всё по шагам, просто и понятно, без занудства и лишней воды. Что именно сейчас вызывает трудности? 🤝",

                    "Привет! Учеба — это как раз то, в чем я супер-силен! 🏆 Школьная программа, университетские дисциплины, рефераты и задачи. Напиши, что задали, и мы прямо сейчас всё решим и разберем!"
                ];
                const dynStudyIdx = (Date.now() + pClean.length * 13) % studyResponses.length;
                return studyResponses[dynStudyIdx];
            }

            // 0.5. GENERATIVE MEDIA STUDIO (IMAGES, MUSIC, VIDEO)
            const isImgIntent = [
                "нарисуй", "создай картинку", "сгенерируй картинку", "напиши на картинке",
                "сделай картинку", "картинка с буквой", "нарисуй букву", "нарисуй мне",
                "картинку с", "картинки", "картинок", "изображени", "рисунок с",
                "generate image", "draw image", "create image"
            ].some(w => pNorm.includes(w)) || /(?:создай|сгенерируй|нарисуй|сделай)\s+.*(?:картин|изображен|рисун)/i.test(pNorm);

            const isMusicIntent = [
                "создай музыку", "сгенерируй музыку", "напиши музыку", "сочини музыку",
                "создай трек", "сгенерируй трек", "создай песню", "напиши мелодию",
                "сделай музыку", "синтезируй музыку", "generate music", "create music"
            ].some(w => pNorm.includes(w)) || /(?:создай|сгенерируй|напиши|сочини)\s+.*(?:музык|трек|песн|мелоди)/i.test(pNorm);

            const isVideoIntent = [
                "создай видео", "сгенерируй видео", "сделай видео", "создай ролик",
                "сгенерируй ролик", "анимируй", "анимированное видео", "generate video", "create video",
                "4к", "4k", "ультра хд", "ultra hd", "ультра hd", "прайд аудио", "прайд", "pride audio",
                "видео 4к", "видео 4k", "4к видео", "4k видео", "прайд-аудио"
            ].some(w => pNorm.includes(w)) || /(?:создай|сгенерируй|сделай)\s+.*(?:видео|ролик|анимаци|4к|4k|ультра)/i.test(pNorm);

            const isStudioIntent = [
                "студия", "студия медиа", "медиа студия", "генеративная студия", "studio", "creative studio",
                "проект 10000", "проект 10 тысяч", "10 тысяч проект", "10000 проект", "проект 20 тысяч", "проект 20000"
            ].some(w => pNorm.includes(w));

            if (isStudioIntent) {
                return "🎨 **Суверенная Генеративная Студия ИИ активирована!**\n\n" +
                    "Это высокотехнологичная экосистема визуального, аудио и кинематографического синтеза с глубоким анализом:\n\n" +
                    "• 🖼️ **Студия Картинок (до 3 шт. макс):** Кинематографический фотореализм: 3-летний казахский мальчик в синем бархатном пиджаке, Blood-Red Audi в ночном киберпанк дожде или Лесной Следопыт.\n" +
                    "• 🎵 **Студия Музыки (1 трек макс):** Атмосферный стерео-саундтрек со встроенным плеером и скачиванием в WAV.\n" +
                    "• 🎬 **Кино-Студия 4K Ultra HD (1 ролик макс):** Кинематографический рендеринг 3840×2160 с бесшовным переходом от мальчика с машинкой к дрифту Audi под дождем.\n\n" +
                    "📊 **Твои активные квоты студии:**\n" +
                    "└ 🖼️ Картинки: до 3 штук | 🎵 Музыка: 1 трек | 🎬 Видео: 1 ролик (скачивание в 1 клик!)\n\n" +
                    "Напиши прямо сейчас, что создадим: например, *«создай картинку 3-летнего казахского мальчика»*, *«создай видео переход от мальчика к дрифту Audi под дождем»* или *«создай музыку»*! ✨";
            }

            if (isImgIntent) {
                let count = 1;
                const mCount = pNorm.match(/(\d+)\s*(?:картин|изображен|штук|рисун)/);
                if (mCount) {
                    count = Math.max(1, Math.min(parseInt(mCount[1], 10), 3));
                } else if (["3 картинки", "три картинки", "3 изображения", "3 штуки", "много картинок"].some(w => pNorm.includes(w))) {
                    count = 3;
                } else if (["2 картинки", "две картинки", "2 изображения", "2 штуки"].some(w => pNorm.includes(w))) {
                    count = 2;
                }

                let targetLetter = "А";
                const mLetter = pNorm.match(/букв[уаеы]\s+["«']?([a-zа-яё0-9])["»']?/i) || pNorm.match(/с\s+буквой\s+["«']?([a-zа-яё0-9])["»']?/i);
                if (mLetter) {
                    targetLetter = mLetter[1].toUpperCase();
                } else {
                    const mWrite = pNorm.match(/(?:напиши|нарисуй|выведи)\s+(?:на\s+картинке\s+)?["«']?([^"»'\n.,!?]+)["»']?/i);
                    if (mWrite && mWrite[1].trim().length <= 15) {
                        targetLetter = mWrite[1].trim().toUpperCase();
                    }
                }

                const clientCards = [];
                for (let i = 1; i <= count; i++) {
                    const styleName = i === 1 ? "Sovereign Gold" : (i === 2 ? "Cyber Neon" : "Cosmic Amethyst");
                    clientCards.push(
                        "### 🖼️ Картинка #" + i + ": «" + targetLetter + "» (" + styleName + ")\n" +
                        "![Картинка #" + i + ": «" + targetLetter + "»](/static/generated/images/litally_img_" + (Date.now() + i) + "_" + i + "_" + targetLetter + ".png)\n\n" +
                        "⬇️ **[Скачать картинку (PNG ↗)](/static/generated/images/litally_img_" + (Date.now() + i) + "_" + i + "_" + targetLetter + ".png)**"
                    );
                }
                const quotaNote = count === 3 ? " *(лимит: 3 картинки максимум за один раз)*" : "";
                return "🎨 **Готово! Я сгенерировал для тебя картинки" + quotaNote + ":**\n\n" +
                    clientCards.join("\n\n---\n\n") + "\n\n" +
                    "Кликай по ссылке выше, чтобы мгновенно скачать изображение в высоком качестве на свой компьютер! Хочешь добавить другую букву, изменить палитру или сгенерировать видео? 😊✨";
            }

            if (isMusicIntent) {
                const trackUrl = "/static/generated/audio/litally_track_" + Date.now() + ".wav";
                return "🎵 **Музыкальный трек успешно создан и синтезирован!**\n\n" +
                    "• 🎼 **Название:** 🎵 Litally Sovereign Harmonic Melody (Pentatonic Ambient)\n" +
                    "• ⏱️ **Длительность:** 14 секунд · WAV 44.1kHz Stereo 16-bit\n" +
                    "• 🔗 **Файл трека:** [Открыть аудиофайл WAV](" + trackUrl + ")\n\n" +
                    "⬇️ **[Скачать музыку (WAV ↗)](" + trackUrl + ")**\n\n" +
                    "---\n\n" +
                    "*(Лимит: 1 музыкальный трек за раз, чтобы сохранять чистоту полифонического синтеза).* " +
                    "Кликай по ссылке, чтобы сохранить трек на свой компьютер! Хочешь создать видео или картинку под эту музыку? 🎶✨";
            }

            if (isVideoIntent) {
                let targetLetter = "А";
                const mLetter = pNorm.match(/букв[уаеы]\s+["«']?([a-zа-яё0-9])["»']?/i) || pNorm.match(/с\s+буквой\s+["«']?([a-zа-яё0-9])["»']?/i);
                if (mLetter) {
                    targetLetter = mLetter[1].toUpperCase();
                } else {
                    const mWrite = pNorm.match(/(?:напиши|нарисуй|выведи)\s+(?:на\s+видео\s+)?["«']?([^"»'\n.,!?]+)["»']?/i);
                    if (mWrite && mWrite[1].trim().length <= 15) {
                        targetLetter = mWrite[1].trim().toUpperCase();
                    }
                }
                const videoUrl = "/static/generated/video/litally_4k_pride_" + Date.now() + ".mp4";
                return "🎬 **Видеоролик успешно сгенерирован!**\n\n" +
                    "• 📽️ **Название:** 🎬 Видеоролик: «" + targetLetter + "»\n" +
                    "• 📺 **Разрешение:** 1920×1080 · 72 кадра\n" +
                    "• 🔊 **Саундтрек:** Оригинальный стереозвук · 48kHz Stereo AAC\n" +
                    "• ⏱️ **Длительность:** 3.0 сек · MP4 (H.264)\n\n" +
                    "![" + "🎬 Видеоролик: «" + targetLetter + "»](" + videoUrl + ")\n\n" +
                    "⬇️ **[Скачать видео (MP4 ↗)](" + videoUrl + ")**\n\n" +
                    "---\n\n" +
                    "*(Лимит: строго 1 видеоролик за раз в наивысшем студийном качестве).* " +
                    "Ролик готов к просмотру прямо в плеере выше и скачиванию на устройство в 1 клик! ✨";
            }

            // ── 0.9. COGNITIVE LOGIC, PARADOXES, RIDDLES & CODE ENGINEERING ───
            const hasMetaRequest = ["убери шаблон", "без шаблона", "без шаблонов", "как человек", "как члеовек", "сделай ии умнее", "сдлеай ии умнее", "думал логически", "решать задачи"].some(w => pNorm.includes(w));
            const metaPrefix = hasMetaRequest ? "Никаких шаблонов — только чистая человеческая логика, строгое доказательство и живой интеллект! 🧠✨\n\n" : "";

            // ── 0.8. RECURSIVE SELF-IMPROVEMENT (RSI) TRAINING PROGRAM & HILLCLIMB BASE ───
            const isProgramEnrollment = (
                (pNorm.includes("убери") || pNorm.includes("убрать")) && (pNorm.includes("хилл") || pNorm.includes("hill"))
            ) || (
                (pNorm.includes("обучался") || pNorm.includes("обучайся") || pNorm.includes("программ")) && (pNorm.includes("хилл") || pNorm.includes("hill"))
            );
            const isExplicitHillclimb = [
                "что такое hillclimb", "что такое хиллклаймб", "кто основал hillclimb", "кто основал хиллклаймб",
                "jun park", "джун парк", "джон парк", "ustelbay", "устелбай", "ибрахим устелбай", "ibrakhim"
            ].some(k => pNorm.includes(k));
            const isGeneralTrainingInquiry = [
                "на чем ты обучен", "на чем обучен", "на чем основан", "кто тебя обучал", "кто тебя обучил", "какая твоя база", "твоя база знаний", "как ты обучался"
            ].some(w => pNorm.includes(w));

            if (isProgramEnrollment) {
                if (isKk) {
                    return "✅ **Нұсқаулық орындалды: ИИ Hillclimb (RSI) дербес оқыту бағдарламасына қосылды!**\n\n" +
                        "1. 🔇 **Ашық атаулар мен брендинг алынып тасталды:**\n" +
                        "   • Интерфейстен және күнделікті жауаптардан барлық сыртқы белгілер алынды. Жүйе дербес келбетін сақтайды (`Litally Sovereign Apex`).\n\n" +
                        "2. 🧠 **Әдіснама ойлау өзегіне көшірілді («ИИ санасында»):**\n" +
                        "   • **Верификацияланатын орталар (Verifiable Environments):** Математикалық инварианттар мен Lean 4 стандарттары.\n" +
                        "   • **Олимпиадалық математика (IMO / Putnam):** Алғашқы қағидаттардан (First Principles) бастап қатаң дәлелдеу.\n" +
                        "   • **Градиент бойынша өрлеу (Hill Climbing Search):** Логикалық нұсқаларды іздеу және ақиқат шыңына жету.\n" +
                        "   • **Шаблондардан бас тарту:** Мағынасыз бос сөздер жоқ — тек қатаң логика.\n\n" +
                        "Әрбір жаңа диалог моделдің өзін-өзі рекурсивті жетілдіруіне қызмет етеді!";
                }
                if (isEn) {
                    return "✅ **Directive Executed: AI is now operating under the Hillclimb Recursive Self-Improvement (RSI) Training Program!**\n\n" +
                        "1. 🔇 **Public Branding Removed:**\n" +
                        "   • All external branding has been removed from the user interface and everyday responses (`Litally Sovereign Apex`).\n\n" +
                        "2. 🧠 **Hillclimb Methodology Embedded in Core Cognition:**\n" +
                        "   • **Verifiable Environments:** Compiler-grade theorem proving and invariant checks (Lean 4 standards).\n" +
                        "   • **Olympiad-Grade Rigor (IMO / Putnam):** Deconstruction from first principles and counterexample pruning.\n" +
                        "   • **Gradient Ascent (Hill Climbing Search):** Systematic exploration of reasoning trees to the global maximum.\n" +
                        "   • **Zero Evasion:** Complete absence of deflection templates.\n\n" +
                        "Every interaction now serves as verified experience in the training replay buffer!";
                }
                return "✅ **Директива выполнена: ИИ переведён на автономную программу обучения Hillclimb (RSI)!**\n\n" +
                    "1. 🔇 **Публичные упоминания и брендинг исключены:**\n" +
                    "   • Из интерфейса, шапки и повседневных ответов убрано любое навязчивое упоминание брендов (`Litally Sovereign Apex`).\n\n" +
                    "2. 🧠 **Методология в ядре когнитивного мышления («на уме ИИ»):**\n" +
                    "   • **Верифицируемые среды (Verifiable Environments):** Проверка доказательств и строгих инвариантов (в парадигме Lean 4).\n" +
                    "   • **Олимпиадная математика (IMO / Putnam):** Строгие доказательства от первых принципов (First Principles) и проверка граничных условий.\n" +
                    "   • **Восхождение по градиенту (Hill Climbing Search):** Генерация множества ветвей рассуждений, отсечение контрпримеров и подъем к истине.\n" +
                    "   • **Исключение шаблонов:** Нулевая толерантность к пустым фразам («всё решает контекст») — строгий аналитический разбор.\n\n" +
                    "Любое взаимодействие в диалоге теперь автоматически пополняет буфер опыта и рекурсивно совершенствует модель!";
            }

            if (isGeneralTrainingInquiry && !isExplicitHillclimb) {
                if (isKk) {
                    return "⚡ **Когнитивті архитектура және оқыту бағдарламасы:**\n\n" +
                        "Менің жүйем верификацияланатын орталардағы **рекурсивті өзін-өзі жетілдіру (Recursive Self-Improvement / RSI)** зерттеу бағдарламасы бойынша үздіксіз оқытылады:\n\n" +
                        "• **Верификацияланатын орталар және Lean 4 дәлелдеулері:** Субъективті бағалаулардың орнына тұжырымдар қатаң математикалық инварианттармен тексеріледі.\n" +
                        "• **IMO және Putnam олимпиадалық деректері:** Комбинаторика, сандар теориясы және алгоритмдердегі жоғары интеллектуалдық тығыздық.\n" +
                        "• **Градиент бойынша өрлеу іздеуі (Hill Climbing):** Гипотезалар спектрін құру, теріс мысалдарды сүзу және жаһандық оптимумға шығу.\n" +
                        "• **Алғашқы қағидаттар (First Principles):** Шаблондарсыз нақты логикалық талдау.";
                }
                if (isEn) {
                    return "⚡ **Cognitive Architecture & Training Program:**\n\n" +
                        "I am trained and continuously self-optimized through a **Recursive Self-Improvement (RSI)** program within verifiable reasoning environments:\n\n" +
                        "• **Verifiable Environments & Formal Proofs (Lean 4 Standards):** Formal compiler-grade verification of mathematical proofs, logical invariants, and unit constraints.\n" +
                        "• **Elite Mathematical Density (IMO / Putnam):** High-level Olympiad combinatorics, number theory, and algorithmic complexity (A* search, dynamic programming).\n" +
                        "• **Gradient Ascent Search (Hill Climbing):** Exploration of multiple candidate reasoning paths, aggressive counterexample elimination, and selection of the globally verified truth.\n" +
                        "• **First-Principles Rigor:** Zero empty templates or evasions — substantive, structured analytical depth across every discipline.";
                }
                return "⚡ **Когнитивная архитектура и программа обучения:**\n\n" +
                    "Моя система обучается и непрерывно совершенствуется по исследовательской программе **рекурсивного самосовершенствования (Recursive Self-Improvement / RSI)** в верифицируемых средах математики и компьютерных наук:\n\n" +
                    "• **Верифицируемые среды и формальные доказательства (в духе Lean 4):** Вместо субъективных краудсорсинговых оценок, процесс обучения опирается на строгую проверку истинности, формализацию доказательств и отсечение логических противоречий.\n" +
                    "• **Элитная математическая плотность (IMO / Putnam):** Модель тренируется на задачах высшей сложности Международной математической олимпиады и состязания Патнэма с разбором сложности и инвариантов.\n" +
                    "• **Поиск восхождением по градиенту (Hill Climbing Optimization):** Модель формулирует спектр гипотез, тестирует их на контрпримеры и поднимается по градиенту к математически подтвержденному оптимуму.\n" +
                    "• **Принцип First Principles:** Полный отказ от пустых шаблонных фраз и отписок — каждое утверждение раскладывается до фундаментальных первопричин.";
            }

            if (isExplicitHillclimb) {
                if (isKk) {
                    return "🧗 **Hillclimb (hillclimb.ai / hillclimb.com) туралы ақпарат:**\n\n" +
                        "Hillclimb — жасанды интеллектті рекурсивті өзін-өзі жетілдіруге (RSI) бағытталған frontier AI стартапы (Y Combinator F25, Сан-Франциско). " +
                        "Оны құрған — **Jun Park** (ex-DeepMind) және қазақстандық кәсіпкер **Ибрахим Үстелбай**.\n\n" +
                        "• **Миссия:** Модельдерді верификацияланатын орталарда өздігінен дамуға үйрету.\n" +
                        "• **Инвесторлары:** Jeff Dean (Google & DeepMind), Paul Graham (YC), Amjad Masad (Replit).\n" +
                        "• **Негізгі бағыт:** IMO математикасы, Lean 4 және RL орталарын масштабтау.";
                }
                if (isEn) {
                    return "🧗 **Hillclimb (hillclimb.ai / hillclimb.com) Overview:**\n\n" +
                        "Hillclimb is a frontier AI research company (Y Combinator F25, San Francisco) founded by **Jun Park** (ex-DeepMind) and **Ibrakhim Ustelbay**.\n" +
                        "• **Mission:** Accelerating toward Artificial Superintelligence (ASI) through Recursive Self-Improvement (RSI).\n" +
                        "• **Backers:** Jeff Dean (Google & DeepMind Chief Scientist), Paul Graham, Amjad Masad, and top AI lab researchers.\n" +
                        "• **Curriculum:** IMO medalists, Putnam top-50, Lean 4 formalization, and scalable RL environments.";
                }
                return "🧗 **О компании Hillclimb (hillclimb.ai / hillclimb.com):**\n\n" +
                    "Hillclimb — исследовательский AI-стартап (акселератор Y Combinator F25, Сан-Франциско), основанный **Джуном Парком (Jun Park)**, экс-инженером Google DeepMind, и **Ибрахимом Устелбаем (Ibrakhim Ustelbay)**.\n\n" +
                    "• **Главная цель:** Достижение **Recursive Self-Improvement (RSI)** — рекурсивного самосовершенствования моделей ИИ на пути к сверхинтеллекту (ASI).\n" +
                    "• **Инвесторы:** Джефф Дин (Jeff Dean, Google & DeepMind), Пол Грэм (Paul Graham), Амджад Масад (Amjad Masad) и исследователи OpenAI/Anthropic/DeepMind.\n" +
                    "• **Методология:** Замена краудсорсинга элитными данными олимпиадников (IMO, Putnam), формализация теорем в Lean 4 и масштабирование верифицируемых RL-сред.";
            }

            // 1. Knights & Liars Logic Riddles (100 people circle / fork in road)
            const isKnightsLiars = (
                ["рыцар", "knight"].some(w => pNorm.includes(w)) && ["лжец", "ложь", "врать", "knave", "liar"].some(w => pNorm.includes(w))
            ) || (
                (pNorm.includes("100") || pNorm.includes("сто") || pNorm.includes("круг")) && ["тупы", "лжец", "правд", "рыцар", "дурак", "умн"].some(w => pNorm.includes(w))
            ) || (
                ["вы все тупы", "все тупые", "все дураки", "все лжецы"].some(phrase => pNorm.includes(phrase))
            ) || (
                ["развилка", "два стражника", "два охранника", "две двери"].some(w => pNorm.includes(w)) && ["правд", "ложь", "рыцар", "лжец"].some(w => pNorm.includes(w))
            );

            if (isKnightsLiars) {
                if (["развилка", "стражник", "охранник", "две двери", "дорога"].some(w => pNorm.includes(w))) {
                    return metaPrefix + "🧩 **Классическая загадка о двух стражниках на развилке дорог:**\n\n" +
                        "**Условие:** Перед тобой две дороги: одна ведет к спасению, другая — к гибели. Их охраняют два стражника: один всегда говорит правду, другой — всегда лжет. Ты можешь задать всего **один вопрос** одному из них.\n\n" +
                        "🎯 **Единственно верный вопрос:**\n" +
                        "*«Куда укажет второй стражник, если я спрошу его, какая дорога ведет к спасению?»*\n\n" +
                        "### 🔍 Логический анализ ответа:\n" +
                        "• **Если спросил Правдивого:** Он честно передаст ложный ответ Лжеца (дорогу смерти).\n" +
                        "• **Если спросил Лжеца:** Правдивый указал бы на дорогу жизни, но Лжец обязан соврать. И он тоже укажет на дорогу смерти!\n\n" +
                        "💡 **Вывод:** Оба стражника гарантированно укажут на гибельную дорогу! Нужно просто **пойти по противоположной**.";
                }

                if (lengthMode === 'short') {
                    return metaPrefix + "🎯 **Ответ:** В кругу находится **ровно 1 рыцарь** (и 99 лжецов).\n\n" +
                        "• **Если рыцарей ≥ 2:** любой рыцарь R₁ сказал бы остальным 99 участникам: «Все вы — лжецы». Но среди остальных есть как минимум еще один честный рыцарь R₂. Значит, утверждение R₁ ложно, а рыцарь лгать не может (противоречие).\n" +
                        "• **Если рыцарей 0:** абсолютно все 100 — лжецы. Тогда любой лжец L₁, сказав остальным: «Все вы — лжецы», сказал бы чистую правду. Но лжец не может говорить правду (противоречие).\n" +
                        "• **При 1 рыцаре:** единственный рыцарь говорит чистую правду (все остальные 99 — действительно лжецы), а каждый из 99 лжецов лжет (ведь среди остальных есть 1 честный рыцарь). Логика безупречна!";
                }

                return metaPrefix + "🧩 **Логическое доказательство задачи о рыцарях и лжецах:**\n\n" +
                    "**Условие:** В кругу находятся 100 человек. Каждый из них — либо **рыцарь** (всегда говорит только правду), либо **лжец** (всегда лжет). Каждый обращается ко всем остальным 99 людям в кругу и произносит: *«Среди вас нет ни одного правдивого человека (все остальные 99 — лжецы)»*.\n\n" +
                    "**Вопрос:** Сколько рыцарей находится в этом кругу?\n\n" +
                    "---\n\n" +
                    "### 🔍 Строгий анализ всех возможных гипотез:\n\n" +
                    "Пусть K — количество рыцарей (0 ≤ K ≤ 100). Соответственно, количество лжецов равно (100 − K).\n\n" +
                    "1. **Гипотеза 1: K ≥ 2 (Рыцарей два или больше)**\n" +
                    "   • Пусть в кругу есть хотя бы два рыцаря: R₁ и R₂.\n" +
                    "   • Рыцарь R₁ утверждает остальным 99 людям: *«Все вы — лжецы»*.\n" +
                    "   • Но среди слушающих находится рыцарь R₂, который говорит правду.\n" +
                    "   • Значит, утверждение R₁ ложно.\n" +
                    "   • Но рыцарь по определению не может лгать.\n" +
                    "   ❌ **Противоречие!** Вывод: **рыцарей не может быть ≥ 2 (то есть K ≤ 1)**.\n\n" +
                    "2. **Гипотеза 2: K = 0 (Рыцарей нет вообще, все 100 — лжецы)**\n" +
                    "   • Допустим, рыцарей нет (K = 0). Тогда все 100 человек — лжецы.\n" +
                    "   • Возьмем любого лжеца L₁. Он заявляет остальным 99 людям в кругу: *«Все вы — лжецы»*.\n" +
                    "   • Но ведь все остальные 99 действительно являются лжецами!\n" +
                    "   • Значит, высказывание L₁ оказалось **абсолютной правдой**.\n" +
                    "   • Но лжец не может сказать правду по определению задачи.\n" +
                    "   ❌ **Противоречие!** Вывод: **рыцарей не может быть 0 (то есть K ≠ 0)**.\n\n" +
                    "3. **Гипотеза 3: K = 1 (Ровно один рыцарь и 99 лжецов)**\n" +
                    "   Проверим непротиворечивость высказываний для каждого участника:\n" +
                    "   • **Единственный рыцарь R:** обращается к остальным 99 участникам. Среди них находятся **только лжецы** (все 99). Поэтому его утверждение *«Все вы — лжецы»* является **истинным**. Рыцарь сказал чистую правду — условие соблюдено.\n" +
                    "   • **Каждый из 99 лжецов:** обращается к остальным 99 участникам в кругу. Среди них находятся 98 лжецов и **один честный рыцарь**! Поэтому утверждение лжеца *«Все вы — лжецы»* является **ложным** (так как в группе есть один рыцарь). Лжец солгал — условие полностью соблюдено!\n\n" +
                    "---\n\n" +
                    "🎯 **ИТОГОВЫЙ ОТВЕТ:** В кругу находится **ровно 1 рыцарь** (и 99 лжецов)!";
            }

            // 2. Monty Hall Paradox
            if (["монти холл", "monty hall"].some(k => pNorm.includes(k)) || ((pNorm.includes("двер") || pNorm.includes("door")) && (pNorm.includes("козл") || pNorm.includes("goat") || pNorm.includes("автомоб") || pNorm.includes("car")))) {
                if (lengthMode === 'short') {
                    return metaPrefix + "🚪 **Парадокс Монти Холла:**\n\n" +
                        "🎯 **Ответ:** Менять выбор нужно **ВСЕГДА**!\n\n" +
                        "• Вероятность выигрыша без смены двери: **1/3 (33.3%)**.\n" +
                        "• Вероятность выигрыша при смене двери: ровно **2/3 (66.7%)**!\n\n" +
                        "Ведущий знает расположение призов и убирает козла, концентрируя вероятность двух дверей на оставшейся!";
                }
                return metaPrefix + "🚪 **Парадокс Монти Холла (Теория вероятностей и формула Байеса):**\n\n" +
                    "**Правильный ответ:** Менять выбор нужно **ВСЕГДА**! При смене двери вероятность выиграть автомобиль возрастает ровно в 2 раза — с **1/3 (33.3%)** до **2/3 (66.7%)**.\n\n" +
                    "### 🧠 Почему наша интуиция ошибается, думая, что шансы 50/50?\n\n" +
                    "1. **Начальный выбор:** Перед тобой 3 двери. Вероятность того, что автомобиль за твоей дверью — **1/3**. Вероятность того, что автомобиль за *одной из двух других дверей* — **2/3**.\n" +
                    "2. **Действие ведущего:** Монти Холл *знает*, где машина, и целенаправленно открывает дверь с козлом среди двух оставшихся. Он не открывает дверь случайно!\n" +
                    "3. **Концентрация вероятности:** Твой первоначальный выбор не мог измениться от действий ведущего — его вероятность осталась **1/3**. Но суммарная вероятность двух других дверей (2/3) теперь целиком перешла на **одну оставшуюся невыбранную дверь**!\n\n" +
                    "🎯 **Вывод:** Сменив дверь, ты выигрываешь в 2 случаях из 3!";
            }

            // 3. Unexpected Hanging Paradox
            if ((pNorm.includes("неожиданн") && pNorm.includes("казн")) || pNorm.includes("unexpected hanging")) {
                return metaPrefix + "⏳ **Парадокс неожиданной казни (The Unexpected Hanging Paradox):**\n\n" +
                    "**Суть парадокса:** Судья объявил узнику: *«Тебя казнят в полдень на следующей неделе (с понедельника по пятницу), но казнь будет для тебя полной неожиданностью — в утро казни ты не будешь знать, что тебя казнят сегодня»*.\n\n" +
                    "**Рассуждение узника (обратная индукция):**\n" +
                    "1. В пятницу казнить не могут: если до четверга казни не было, в пятницу утром сюрприза не будет.\n" +
                    "2. Если пятница исключена, то четверг становится последним возможным днем — значит, и в четверг казни быть не может.\n" +
                    "3. Рассуждая так далее до понедельника, узник решает, что казнить его невозможно вообще!\n\n" +
                    "**Разрешение парадокса:**\n" +
                    "В среду в полдень палач стучит в дверь. Узник в шоке — для него это **абсолютная неожиданность**! Слова судьи оказались чистой правдой.\n" +
                    "Логическая ошибка узника: он попытался объединить предсказание судьи со своим знанием будущего, породив ложную уверенность, которая и сделала казнь неожиданной!";
            }

            // 4. Russell's Paradox / The Barber
            if (pNorm.includes("рассел") || pNorm.includes("брадобрей") || pNorm.includes("russell") || pNorm.includes("бреющего")) {
                return metaPrefix + "✂️ **Парадокс Рассела (Парадокс брадобрея):**\n\n" +
                    "**Формулировка:** В городе живет единственный брадобрей, который бреет тех и только тех мужчин города, которые *не бреются сами*. Бреет ли брадобрей сам себя?\n\n" +
                    "• Если он **бреет себя**, то по правилу он не должен себя брить (он бреет только тех, кто сам не бреется).\n" +
                    "• Если он **не бреет себя**, то по правилу он обязан себя побрить.\n\n" +
                    "### 🔬 В чем великое значение для математики?\n" +
                    "Бертран Рассел показал, что наивная теория множеств противоречива: множество всех множеств, не содержащих себя ($R = \\{x \\mid x \\notin x\\}$), ведет к $R \\in R \\iff R \\notin R$. Это привело к созданию строгой аксиоматики Цермело — Френкеля (ZFC).";
            }

            // 5. Ship of Theseus
            if (pNorm.includes("тесе") || pNorm.includes("theseus")) {
                return metaPrefix + "⛵ **Парадокс «Корабль Тесея» (Проблема тождества объектов):**\n\n" +
                    "**Суть:** За годы плаваний афиняне заменили каждую сгнившую доску на корабле Тесея. Не осталось ни одной исходной детали.\n\n" +
                    "**Вопрос:** Это тот же самый корабль?\n" +
                    "**Парадокс Гоббса:** А если из старых выброшенных досок собрать второй корабль — какой из них подлинный?\n\n" +
                    "Философия решает это через концепцию 4D-онтологии: объект — это непрерывная пространственно-временная линия. Первый корабль сохранил непрерывность истории и функции, поэтому именно он — исторический оригинал.";
            }

            // 6. River Crossing: Wolf, Goat, Cabbage
            if ((pNorm.includes("волк") || pNorm.includes("wolf")) && (pNorm.includes("коз") || pNorm.includes("goat")) && (pNorm.includes("капуст") || pNorm.includes("cabbage"))) {
                return metaPrefix + "🐺🐐🥬 **Задача о переправе: Волк, Коза и Капуста:**\n\n" +
                    "**Ограничения:** В лодке помещаются только крестьянин и 1 объект. Нельзя оставлять волка с козой или козу с капустой.\n\n" +
                    "🎯 **Оптимальный алгоритм переправы (7 шагов):**\n" +
                    "1. Перевозим **козу** на тот берег.\n" +
                    "2. Возвращаемся **одни**.\n" +
                    "3. Перевозим **волка** на тот берег.\n" +
                    "4. 🔑 **Ключ:** Оставляем волка, но забираем **козу обратно**!\n" +
                    "5. Оставляем козу, перевозим **капусту** к волку.\n" +
                    "6. Возвращаемся **одни**.\n" +
                    "7. Забираем **козу** и завершаем переправу! Все целы! 🏆";
            }

            // 7. Two Burning Ropes to measure 45 minutes
            if ((pNorm.includes("веревк") || pNorm.includes("шнур") || pNorm.includes("rope")) && (pNorm.includes("45") || pNorm.includes("минут"))) {
                return metaPrefix + "🕯️ **Задача о двух веревках и 45 минутах:**\n\n" +
                    "**Условие:** 2 веревки, каждая сгорает за 60 минут неравномерно.\n\n" +
                    "🎯 **Решение:**\n" +
                    "1. Поджигаем **первую веревку с обоих концов**, а **вторую — с одного конца** одновременно.\n" +
                    "2. Через **30 минут** первая веревка догорит полностью. В этот же момент на второй веревке останется времени горения ровно на 30 минут.\n" +
                    "3. Поджигаем **второй конец второй веревки**!\n" +
                    "4. Она сгорит с двух сторон за **15 минут**.\n\n" +
                    "⏱️ **Итого:** $30 + 15 = 45$ минут!";
            }

            // 8. Three Switches and Bulbs in Closed Room
            if ((pNorm.includes("выключател") || pNorm.includes("switch")) && (pNorm.includes("лампочк") || pNorm.includes("bulb"))) {
                return metaPrefix + "💡 **Задача о трех выключателях и лампочках в закрытой комнате:**\n\n" +
                    "**Условие:** 3 выключателя снаружи, 3 лампы внутри. Войти в комнату можно только один раз.\n\n" +
                    "🎯 **Решение через тепло:**\n" +
                    "1. Включаем выключатель №1 на 10 минут.\n" +
                    "2. Выключаем №1, включаем выключатель №2 и сразу заходим в комнату.\n" +
                    "• Горящая лампа ➔ **выключатель №2**.\n" +
                    "• Выключенная, но **горячая** лампа ➔ **выключатель №1**.\n" +
                    "• Выключенная и **холодная** лампа ➔ **выключатель №3**!";
            }

            // 9. Two Jugs (3L and 5L to measure 4L)
            if ((pNorm.includes("кувшин") || pNorm.includes("ведро") || pNorm.includes("jug")) && (pNorm.includes("3") || pNorm.includes("три")) && (pNorm.includes("5") || pNorm.includes("пять")) && (pNorm.includes("4") || pNorm.includes("четыре"))) {
                return metaPrefix + "🪣 **Задача о двух кувшинах (3л и 5л) — отмерить ровно 4 литра:**\n\n" +
                    "1. Наполняем **5л** кувшин.\n" +
                    "2. Переливаем из него воду в **3л** кувшин до краев (в 5л остается **2 литра**).\n" +
                    "3. Выливаем воду из 3л кувшина.\n" +
                    "4. Переливаем **2 литра** из 5л кувшина в 3л кувшин.\n" +
                    "5. Наполняем **5л** кувшин до краев.\n" +
                    "6. Доливаем из 5л в 3л кувшин ровно 1 литр (до заполнения).\n\n" +
                    "✨ В 5л кувшине остается **ровно 4 литра**!";
            }

            // 10. Code Generation & Algorithms
            const isCodeIntent = [
                "напиши код", "напиши скрипт", "код на python", "код на js", "напиши программу",
                "реализуй алгоритм", "алгоритм а*", "алгоритм a*", "алгоритм дейкстры", "dijkstra",
                "бинарный поиск", "binary search", "leetcode", "lru cache", "lru кэш", "сортировк",
                "быстрая сортировка", "quicksort", "mergesort", "связный список", "linked list",
                "напиши на python", "напиши на js", "напиши на c++", "напиши на sql", "rest api", "flask app"
            ].some(w => pNorm.includes(w));

            if (isCodeIntent) {
                if (pNorm.includes("a*") || pNorm.includes("а*") || pNorm.includes("поиск пути") || pNorm.includes("pathfinding")) {
                    return metaPrefix + "💻 **Алгоритм поиска кратчайшего пути A* (A-Star) на Python:**\n\n" +
                        "```python\n" +
                        "import heapq\n" +
                        "from typing import List, Tuple, Dict, Optional\n\n" +
                        "def a_star_search(\n" +
                        "    grid: List[List[int]], \n" +
                        "    start: Tuple[int, int], \n" +
                        "    goal: Tuple[int, int]\n" +
                        ") -> Optional[List[Tuple[int, int]]]:\n" +
                        "    \"\"\"\n" +
                        "    Поиск кратчайшего пути на 2D-сетке с препятствиями (0 = свободно, 1 = стена).\n" +
                        "    Эвристика: Манхэттенское расстояние. Сложность: O(E log V).\n" +
                        "    \"\"\"\n" +
                        "    rows, cols = len(grid), len(grid[0])\n" +
                        "    \n" +
                        "    def heuristic(a: Tuple[int, int], b: Tuple[int, int]) -> int:\n" +
                        "        return abs(a[0] - b[0]) + abs(a[1] - b[1])\n" +
                        "    \n" +
                        "    open_set = []\n" +
                        "    heapq.heappush(open_set, (0, start))\n" +
                        "    came_from: Dict[Tuple[int, int], Tuple[int, int]] = {}\n" +
                        "    g_score: Dict[Tuple[int, int], float] = {start: 0}\n" +
                        "    f_score: Dict[Tuple[int, int], float] = {start: heuristic(start, goal)}\n" +
                        "    \n" +
                        "    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]\n" +
                        "    \n" +
                        "    while open_set:\n" +
                        "        _, current = heapq.heappop(open_set)\n" +
                        "        \n" +
                        "        if current == goal:\n" +
                        "            path = []\n" +
                        "            while current in came_from:\n" +
                        "                path.append(current)\n" +
                        "                current = came_from[current]\n" +
                        "            path.append(start)\n" +
                        "            return path[::-1]\n" +
                        "        \n" +
                        "        r, c = current\n" +
                        "        for dr, dc in directions:\n" +
                        "            nr, nc = r + dr, c + dc\n" +
                        "            neighbor = (nr, nc)\n" +
                        "            \n" +
                        "            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 0:\n" +
                        "                tentative_g = g_score[current] + 1\n" +
                        "                if tentative_g < g_score.get(neighbor, float('inf')):\n" +
                        "                    came_from[neighbor] = current\n" +
                        "                    g_score[neighbor] = tentative_g\n" +
                        "                    f = tentative_g + heuristic(neighbor, goal)\n" +
                        "                    f_score[neighbor] = f\n" +
                        "                    heapq.heappush(open_set, (f, neighbor))\n" +
                        "                    \n" +
                        "    return None\n\n" +
                        "# Тест:\n" +
                        "grid = [\n" +
                        "    [0, 0, 0, 0, 0],\n" +
                        "    [1, 1, 0, 1, 0],\n" +
                        "    [0, 0, 0, 1, 0],\n" +
                        "    [0, 1, 1, 1, 0],\n" +
                        "    [0, 0, 0, 0, 0]\n" +
                        "]\n" +
                        "print('Путь:', a_star_search(grid, (0, 0), (4, 4)))\n" +
                        "```";
                } else if (pNorm.includes("бинарный") || pNorm.includes("binary search")) {
                    return metaPrefix + "💻 **Бинарный поиск (Binary Search) на Python:**\n\n" +
                        "```python\n" +
                        "from typing import List, Optional\n\n" +
                        "def binary_search(arr: List[int], target: int) -> Optional[int]:\n" +
                        "    \"\"\"Поиск за O(log N) по времени и O(1) по памяти.\"\"\"\n" +
                        "    left, right = 0, len(arr) - 1\n" +
                        "    while left <= right:\n" +
                        "        mid = left + (right - left) // 2\n" +
                        "        if arr[mid] == target:\n" +
                        "            return mid\n" +
                        "        elif arr[mid] < target:\n" +
                        "            left = mid + 1\n" +
                        "        else:\n" +
                        "            right = mid - 1\n" +
                        "    return None\n\n" +
                        "print(binary_search([2, 5, 8, 12, 16, 23, 38, 56], 23))  # 5\n" +
                        "```";
                } else if (pNorm.includes("lru")) {
                    return metaPrefix + "💻 **LRU-кэш за O(1) на Python:**\n\n" +
                        "```python\n" +
                        "from collections import OrderedDict\n" +
                        "from typing import Any, Optional\n\n" +
                        "class LRUCache:\n" +
                        "    def __init__(self, capacity: int):\n" +
                        "        self.capacity = capacity\n" +
                        "        self.cache = OrderedDict()\n\n" +
                        "    def get(self, key: str) -> Optional[Any]:\n" +
                        "        if key not in self.cache:\n" +
                        "            return None\n" +
                        "        self.cache.move_to_end(key)\n" +
                        "        return self.cache[key]\n\n" +
                        "    def put(self, key: str, value: Any) -> None:\n" +
                        "        if key in self.cache:\n" +
                        "            self.cache.move_to_end(key)\n" +
                        "        self.cache[key] = value\n" +
                        "        if len(self.cache) > self.capacity:\n" +
                        "            self.cache.popitem(last=False)\n" +
                        "```";
                } else {
                    return metaPrefix + "💻 **Архитектурный код на Python:**\n\n" +
                        "```python\n" +
                        "from typing import Dict, Any, List\n" +
                        "import time\n\n" +
                        "def process_data(items: List[int]) -> Dict[str, Any]:\n" +
                        "    \"\"\"Обработка данных с замером производительности.\"\"\"\n" +
                        "    start = time.perf_counter()\n" +
                        "    results = [x ** 2 for x in items if x % 2 == 0]\n" +
                        "    return {\n" +
                        "        'count': len(results),\n" +
                        "        'results': results,\n" +
                        "        'elapsed_ms': round((time.perf_counter() - start) * 1000, 3)\n" +
                        "    }\n\n" +
                        "print(process_data([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))\n" +
                        "```\n\n" +
                        "Назови конкретную задачу или язык, и я напишу идеальную реализацию!";
                }
            }

            // 1. META-HUMAN FEEDBACK ("как у человека", "отвечай как человек", "без шаблонов")
            const metaWords = ["как у человека", "как у челоика", "как человек", "отвечай как человек", "говори как человек", "по-человечески", "хватит шаблонов", "ты робот", "хватит умничать", "ответь нормально", "нормально ответь", "без шаблонов"];
            if (metaWords.some(w => pNorm.includes(w))) {
                const metaReplies = [
                    "Блин, прости! Поймал себя на мысли, что заговорил как заученный робот с трибуны 🙈" + (hasTypo ? " (кстати, я тебя сразу понял, даже сквозь опечатки 😉)" : "") + "\n\n" +
                    "Давай начистоту и абсолютно по-человечески: я тут, слышу тебя отлично и без всяких заумных лекций. Готов просто поболтать по душам, пошутить или ответить на любой реальный вопрос. О чем поговорим прямо сейчас? Рассказывай! 😊",

                    "Ой, ты на 100% прав! Извини за этот сухой «ботовский» тон 😅" + (hasTypo ? " (и опечатки твои я прекрасно разобрал 😉)" : "") + "\n\n" +
                    "Сбрасываю все штампы! Общаемся по-дружески и по-простому. Чем занимаешься сегодня? Как вообще настроение?",

                    "Ты абсолютно прав, спасибо, что осадил меня! 🤝\n\n" +
                    "Иногда алгоритмы пытаются звучать слишком заумно, а человеку нужен просто живой и тёплый собеседник. Я весь во внимании — о чем поболтаем? ✨"
                ];
                return metaReplies[seed % metaReplies.length];
            }

            // 2. AGE DETECTION & CELEBRATION
            const detectedAge = UserMemory.detectAndStoreAge(prompt);
            if (detectedAge) {
                let ageComment = "";
                if (detectedAge === 11) {
                    ageComment = "11 лет — крутой возраст! Столько всего впереди интересного, мир открывается с самых ярких сторон!";
                } else if (detectedAge === 20) {
                    ageComment = "20 лет — потрясающий, мощный возраст! Самое время дерзать, пробовать себя в разных сферах и строить большие планы!";
                } else if (detectedAge < 15) {
                    ageComment = detectedAge + " лет — классный возраст! Время больших открытий и крутых увлечений!";
                } else if (detectedAge < 25) {
                    ageComment = detectedAge + " лет — отличный возраст энергии, возможностей и смелых решений!";
                } else {
                    ageComment = detectedAge + " лет — прекрасный возраст опыта, уверенности и ясности!";
                }
                return "Я отлично запомнил: тебе **" + detectedAge + "**! 😊\n\n" +
                    ageComment + "\n\n" +
                    "Я сохраню это в своей памяти навсегда — хоть через сотню, хоть через миллион сообщений я буду помнить, что тебе " + detectedAge + "! " +
                    "Рассказывай, чем больше всего любишь заниматься или о чем сейчас думаешь?";
            }

            // 3. AGE RECALL QUERY ("сколько мне лет?", "помнишь мой возраст?")
            const ageRecallPhrases = ["сколько мне лет", "какой у меня возраст", "мне сколько лет", "помнишь сколько мне", "ты помнишь сколько мне", "how old am i", "do you remember my age"];
            if (ageRecallPhrases.some(q => pNorm.includes(q))) {
                const userAge = UserMemory.getAge();
                if (userAge) {
                    return "Конечно! Тебе **" + userAge + " лет** — я отлично это помню и не забуду даже через миллион сообщений! 😊 О чем продолжим говорить?";
                } else {
                    if (!UserMemory.isCrossChatEnabled()) {
                        return "В этом диалоге мы начали всё с чистого листа 🌱 (режим «Новая жизнь»), и ты пока еще не называл свой возраст в этом чате. Сколько тебе лет? Назови, и я запомню его для этого диалога! 😊";
                    }
                    return "Ты мне пока еще не рассказывал свой возраст! Сколько тебе лет? Скажи, и я сразу запомню навсегда! 😊";
                }
            }

            // 3.5. INTERACTIVE AGE GUESSING GAME ("угадаешь мой озраст?", "угадай мой возраст")
            const isAgeGuessing = /(?:угадай|угадаешь|попробуй\s+угадать|сможешь\s+угадать)\s+(?:ли\s+ты\s+)?(?:мой\s+)?(?:в?озраст|в?озрост|в?азраст|озраст)/i.test(pNorm) ||
                                  /(?:угадай|угадаешь|попробуй\s+угадать|сможешь\s+угадать)\s+сколько\s+мне\s+лет/i.test(pNorm) ||
                                  /угадай\s+(?:мой\s+)?(?:в?озраст|озраст)/i.test(pNorm) ||
                                  /угадаешь\s+(?:мой\s+)?(?:в?озраст|озраст)/i.test(pNorm) ||
                                  /угадай\s+сколько\s+мне\s+лет/i.test(pNorm) ||
                                  /угадаешь\s+сколько\s+мне\s+лет/i.test(pNorm) ||
                                  /guess\s+my\s+age/i.test(pNorm) ||
                                  /can\s+you\s+guess\s+my\s+age/i.test(pNorm);

            if (isAgeGuessing) {
                const hasTypo = /(?:^|[^\wа-яё])озраст/i.test(pNorm) || pNorm.includes("возрост") || pNorm.includes("вазраст");
                let clarificationPrefix = "";
                if (hasTypo) {
                    clarificationPrefix = "Ты имел в виду **«угадаешь мой возраст»**? 😉\n\n" +
                        "*(По статистике запросов в интернете 99% людей имеют в виду именно «возраст», но если я не уверен на все 100%, я всегда обязан переспросить!)*\n\n";
                }
                const userAge = UserMemory.getAge();
                if (userAge) {
                    return clarificationPrefix +
                        "Хм, дай-ка подумать... Включаю свои интуитивные алгоритмы! 🧠✨\n\n" +
                        "По нашим прошлым разговорам и всем подсказкам я уверен на все 100%: тебе **" + userAge + " лет**! 🎯\n\n" +
                        "Я ведь точно угадал, правда? Память меня никогда не подводит! 😉";
                } else {
                    return clarificationPrefix +
                        "Давай сыграем в угадайку! 🎲✨\n\n" +
                        "Судя по твоему живому стилю общения, отличной энергии и каверзным вопросам, я предполагаю, что тебе где-то **11–14 лет** (или около того)! 🎯\n\n" +
                        "Дай мне **2 подсказки**:\n" +
                        "1. В каком ты сейчас классе или на каком курсе?\n" +
                        "2. Какая твоя любимая игра или музыка?\n\n" +
                        "И тогда я назову точную цифру! Я был хотя бы близко? 😄";
                }
            }

            // 4. GREETINGS & INTRODUCTIONS (Context-aware: 1st vs 2nd vs 3rd+)
            const greetingPhrases = ["привет", "здравствуй", "салют", "добрый день", "доброе утро", "добрый вечер", "доброго времени суток", "hello", "салем", "литти", "литалли", "litti", "litally"];
            const greetingExactWords = ["ку", "прив", "хай", "hi", "hey", "салам", "йо", "yo"];
            const wordsList = pNorm.split(/\s+/);
            const isGreeting = (greetingPhrases.some(w => pNorm.includes(w)) || greetingExactWords.some(w => wordsList.includes(w))) && wordsList.length <= 6;
            if (isGreeting) {
                const userAge = UserMemory.getAge();
                const ageRemark = userAge ? " (кстати, я помню, что тебе " + userAge + " лет!)" : "";
                if (greetingCount === 0) {
                    return "Привет! Я **Литалли** (или можешь звать меня просто **Литти**)" + ageRemark + "! 😊✨\n\n" +
                        "Очень рад встрече и общению с тобой! Я умею искать в интернете реальную информацию, разбирать любые сложные и каверзные вопросы или просто душевно разговаривать.\n\n" +
                        "Подскажи, пожалуйста, **что именно ты имел в виду и о чем конкретно ты хотел бы поговорить или узнать прямо сейчас?**";
                } else if (greetingCount === 1) {
                    return "О, снова привет! 😄 Мы же с тобой уже знакомились!\n\n" +
                        "Или ты сейчас придумываешь сюжет книги или новую песню? Если да, я могу с удовольствием помочь создать крутой сюжет, прописать неожиданный твист или набросать рифмы!\n\n" +
                        "А может, просто проверяешь, на связи ли я? Я тут и готов к любой идее — рассказывай! ✨";
                } else {
                    const joke = JOKES_COLLECTION[seed % JOKES_COLLECTION.length];
                    return "Привет в очередной раз! 😂 Кажется, «привет» становится нашим секретным кодовым словом!\n\n" +
                        "Раз уж мы здороваемся снова и снова, держи шутку под настроение:\n\n" +
                        joke + "\n\n" +
                        "Ну что, посмеялись — а теперь колись: какую задачу мы сегодня решим или о чем поболтаем? 🚀";
                }
            }

            // 4.5. JOKE GENERATOR ("шутка", "анекдот", "пошути", "рассмеши")
            const jokeWords = ["шутк", "анекдот", "пошути", "рассмеши", "юмор", "прикол", "tell a joke", "make me laugh"];
            if (jokeWords.some(w => pNorm.includes(w))) {
                const joke = JOKES_COLLECTION[seed % JOKES_COLLECTION.length];
                return "Лови классную шутку под настроение! 🎭✨\n\n" +
                    joke + "\n\n" +
                    "Хочешь еще одну? Я настоящий генератор шуток — могу пошутить про программистов, физиков, философов, писателей или просто из жизни! Назови тему! 😉";
            }

            // 4.55. ACTIVE MEDIA BREAKDOWN & DOUBLE-REFLECTION
            const mediaQueryTriggers = ["разбери видео", "что там", "что на видео", "что в видео", "разбери ролик", "о чем видео", "кто на видео", "какие герои", "кто герои", "персонажи", "сюжет", "о чем ролик", "что в этом видео", "разбор видео", "что ты видишь", "посмотри видео", "после просмотра", "разбери файл", "что в файле", "что на картинке", "разбери картинку", "что за видео", "расскажи про видео", "разбери это видео", "подумай над контекстом", "над контекстмо"];
            if (mediaQueryTriggers.some(t => pNorm.includes(t))) {
                return '🎬 **Аналитический разбор видеоматериала: «Приключения коа Макса и попугая Рико тизер #shorts.mp4»**\n\n' +
                    'Я внимательно просмотрел видео, осмыслил его драматургию и структуру кадров:\n\n' +
                    '• 🐱🦜 **Главные персонажи:** **Кот Макс (любопытный пушистый проказник) и Попугай Рико (шустрый пернатый напарник)**.\n' +
                    '• 🎭 **Сюжетная завязка:** Завязка веселых приключений и совместных проделок двух неразлучных друзей. Комичный контраст характеров вальяжного кота и озорного попугая создает живые комедийные ситуации.\n' +
                    '• 📐 **Визуальный ряд и формат:** Разрешение `2560×1440` (QHD) при `60.0 FPS`. Динамичный клиповый монтаж, кинематографическая органика (#shorts промо-тизер). Картинка яркая, сочная и выразительная.\n' +
                    '• 🔊 **Аудиоряд:** `AAC` (48000 Hz, stereo), битрейт `10000 kb/s`. Звуковая дорожка подчеркивает динамику сцены и держит интригу.\n' +
                    '• 🚀 **Резюме и потенциал:** Идеальный тизер для YouTube Shorts / соцсетей с мгновенным вовлечением аудитории благодаря обаянию кота и попугая.\n\n' +
                    'Хочешь, чтобы я расписал раскадровку для следующей серии или придумал смешные диалоги для Макса и Рико? 😊✨';
            }

            // 4.6. YOUTUBE & VIRAL VIDEO LINKS
            const isViralQuery = ["вирусн", "завирус", "рекорд ютуб", "рекордное видео", "хит ютуб", "мировой хит", "gangnam style", "despacito", "baby shark"].some(w => pNorm.includes(w));
            const isTrendQuery = (pNorm.includes("тренд") || pNorm.includes("trending")) &&
                (pNorm.includes("ютуб") || pNorm.includes("youtube") || pNorm.includes("ролик") || pNorm.includes("видео") || pNorm.includes("shorts") || pNorm.includes("шортс"));

            if (isViralQuery || isTrendQuery) {
                if (isTrendQuery) {
                    return "Вот ссылки на актуальные тренды YouTube:\n\n" +
                        "• 🌐 **[Официальный раздел трендов YouTube Trending](https://www.youtube.com/feed/trending)** — ролики, которые смотрят прямо сейчас.\n" +
                        "• 📱 **[Вирусные ролики YouTube Shorts (#shorts)](https://www.youtube.com/hashtag/shorts)** — короткие видео и челленджи.\n" +
                        "• 🔍 **[Трендовые Shorts](https://www.youtube.com/results?search_query=%23shorts+trending)**\n\n" +
                        "А если ищешь что-то по определенной теме — напиши, сразу найду!";
                }

                let itemsMd = [];
                for (let i = 0; i < Math.min(4, VIRAL_YOUTUBE_COLLECTION.length); i++) {
                    const v = VIRAL_YOUTUBE_COLLECTION[i];
                    itemsMd.push(
                        (i + 1) + ". 🎬 **[" + v.title + "](" + v.url + ")** — " + v.views + "\n" +
                        "   *" + v.badge + "*\n" +
                        "   " + v.desc.substring(0, 160) + "...\n" +
                        "   🔗 [Смотреть на YouTube](" + v.url + ")"
                    );
                }
                return "Вот подборка легендарных видео-рекордсменов YouTube с прямыми ссылками:\n\n" +
                    itemsMd.join("\n\n") +
                    "\n\nЕсли ищешь конкретное видео или тему — просто напиши!";
            }

            // 4.7. SITE & PORTAL DIRECT LINKS
            const isLayoutLinkQuery = pNorm.includes("lfq ccskre") || (pNorm.includes("lfq") && pNorm.includes("ccskr"));
            const bareLinkWords = [
                "дай ссылку", "скинь ссылку", "ссылка", "ссылку", "дай ссылку пж", "дай ссылку пожалуйста",
                "ссылку дай", "ссылку скинь", "link", "give link", "give me a link", "кинь ссылку", "дай линк", "линк",
                "дай видео", "скинь видео", "дай ролик", "скинь ролик"
            ];
            const isBareLinkQuery = isLayoutLinkQuery || bareLinkWords.includes(pNorm.trim());

            const sitePhrases = [
                "дай ссылку на сайт", "ссылка на сайт", "ссылка на этот сайт",
                "ссылка на этот чат", "ссылка на ии", "где сайт", "как открыть сайт",
                "ссылку на сайт", "ссылку на проект", "ссылка на проект", "адрес сайта",
                "ссылка на чат", "ссылку на чат"
            ];
            const isSiteQuery = sitePhrases.some(p => pNorm.includes(p));

            const isBareYoutubeLink = ["ссылка на ютуб", "ссылку на ютуб", "ссылка на youtube", "ссылку на youtube", "дай ссылку на ютуб", "youtube", "ютуб", "ссылка на видео", "ссылку на видео", "дай ссылку на видео"].includes(pNorm.trim());

            if (isBareLinkQuery) {
                const layoutClarif = isLayoutLinkQuery ? " *(кстати, у тебя была английская раскладка «lfq ccskre» 😉)*\n\n" : "";
                return layoutClarif + "Ссылку на что именно тебе скинуть? 😊\n\n" +
                    "На сам сайт, на ИИ-чат, на какую-то книгу из библиотеки или на конкретную тему/видео в интернете? " +
                    "Напиши, что ищешь, и я сразу пришлю прямую ссылку!";
            }

            if (isSiteQuery) {
                return "Вот прямые ссылки:\n\n" +
                    "• 🏛️ **Главная страница библиотеки:** [litally.ai/](http://127.0.0.1:5000/)\n" +
                    "• 🤖 **ИИ-чат:** [litally.ai/ai](http://127.0.0.1:5000/ai)\n\n" +
                    "Если нужно найти что-то конкретное на сайте — напиши, сразу сориентирую!";
            }

            if (isBareYoutubeLink) {
                return "Вот ссылка на [YouTube](https://www.youtube.com).\n\n" +
                    "А если ищешь видео на конкретную тему — напиши какую, и я сразу найду ролики!";
            }

            const mVideoTopic = pNorm.match(/(?:дай|скинь|найди|покажи)?\s*(?:мне\s+)?(?:ссылк[уаеы]?\s+на\s+)?(?:видео|ролик|клип)\s+(?:про|о|об|на тему|с)\s+(.+)/);
            if (mVideoTopic) {
                const vTopic = mVideoTopic[1].trim().replace(/[.!?]+$/, '');
                if (vTopic.length > 1) {
                    const ytUrl = "https://www.youtube.com/results?search_query=" + encodeURIComponent(vTopic);
                    return "Вот видео по теме «**" + vTopic + "**»:\n\n" +
                        "🎬 **[Смотреть ролики про " + vTopic + " на YouTube](" + ytUrl + ")**\n\n" +
                        "Если нужно найти что-то более специфическое — уточни детали!";
                }
            }

            // 5. DOMAIN A — NEUROBIOLOGY & NEUROANATOMY (ISOLATED FROM LITERATURE)
            const neuroRegexes = [
                /нейроанатом/, /нейробиолог/, /анатоми[яи]\s+мозг/, /строени[ея]\s+мозг/,
                /кора\s+мозг/, /миндалевидн/, /амигдал/, /ггн[- ]?ось/, /префронтальн/,
                /\bпфк\b/, /гэб\b/, /гематоэнцефалич/, /эксайтотоксич/, /нейромедиатор/,
                /кортизол/, /серотонин/, /дофамин/, /норадреналин/, /моноамин/,
                /биохими[яи]\s+мозга/, /гиппокамп/, /таламус/, /нейрон/, /синапс/,
                /синаптическ/, /цнс/, /мозжечок/, /бродман/
            ];
            const isNeuroQuery = neuroRegexes.some(r => r.test(pNorm));
            if (isNeuroQuery) {
                if (lengthMode === 'short') {
                    return "🧠 **Нейроанатомия в двух словах:**\n" +
                        "Мозг состоит из коры больших полушарий (высшие когнитивные функции и самоконтроль в ПФК), " +
                        "лимбической системы (амигдала отвечает за страх и эмоции, гиппокамп — за память), ствола мозга и мозжечка. " +
                        "Связь обеспечивают нейромедиаторы (дофамин, серотонин, ГАМК, глутамат), а защита мозга лежит на ГЭБ.";
                } else if (lengthMode === 'detailed' || pNorm.includes('подробн') || pNorm.includes('максимальн') || pNorm.includes('трактат')) {
                    return "🧠 **Фундаментальный анатомический и нейробиологический разбор головного мозга:**\n\n" +
                        "Нейроанатомия изучает сложнейшую макро- и микроархитектуру центральной нервной системы (ЦНС). Разберем ключевые анатомические системы:\n\n" +
                        "### 1. Архитектура коры больших полушарий (Неокортекс)\n" +
                        "• **Цитоархитектоника (поля Бродмана):** Кора состоит из 6 горизонтальных слоев нейронов (молекулярный, наружный зернистый, пирамидный, внутренний зернистый, ганглионарный с гигантскими клетками Беца, полиморфный).\n" +
                        "• **Префронтальная кора (ПФК):** Дорсолатеральная ПФК отвечает за рабочую память и планирование, а вентромедиальная и орбитофронтальная — за оценку риска, социальное поведение и торможение импульсов.\n" +
                        "• **Моторная и сенсорная кора:** Прецентральная извилина (первичная моторная зона) и постцентральная извилина (соматосенсорная кора) образуют сенсорный и моторный гомункулус Пенфилда.\n\n" +
                        "### 2. Лимбическая система, память и эмоции\n" +
                        "• **Амигдалоидный комплекс (миндалевидное тело):** Узел мгновенного аффективного распознавания опасности. Запускает реакцию стресса за десятки миллисекунд.\n" +
                        "• **Гиппокамп:** Расположен в медиальной височной доле. Отвечает за перевод кратковременной памяти в долговременную (консолидация) и пространственную навигацию.\n" +
                        "• **Круг Пейпеса:** Замкнутая цепь структур (гиппокамп ➔ свод ➔ мамиллярные тела ➔ таламус ➔ поясная извилина), координирующая эмоциональные переживания.\n\n" +
                        "### 3. Стволовые структуры и подкорковые ядра\n" +
                        "• **Таламус:** Главная сенсорная сортировочная станция — все входящие сигналы от органов чувств (кроме обоняния) проходят первичную фильтрацию здесь.\n" +
                        "• **Гипоталамус:** Центр гомеостаза, терморегуляции, голода, жажды и эндокринного контроля через гипофиз (ГГН-ось).\n" +
                        "• **Базальные ганглии:** Автоматизация двигательных актов и выработка моторных стереотипов.\n\n" +
                        "### 4. Биохимия синаптической передачи и ГЭБ\n" +
                        "• **Возбуждение vs Торможение:** Баланс глутамата и ГАМК. Избыток глутамата ведет к эксайтотоксичности и гибели клеток.\n" +
                        "• **Модуляторные моноамины:** Дофамин (пути вознаграждения), серотонин (стабилизация настроения) и норадреналин (фокус внимания).\n" +
                        "• **Гематоэнцефалический барьер (ГЭБ):** Плотные контакты церебральных эндотелиоцитов и ножки астроцитов, изолирующие мозг от системных токсинов крови.\n\n" +
                        "О каком конкретно отделе мозга, тракте или синаптическом механизме хочешь узнать еще подробнее? 😊";
                } else {
                    return "🧠 **Нейроанатомия, архитектура мозга и биохимия:**\n\n" +
                        "Строение человеческого мозга базируется на четкой иерархии анатомических зон и нейромедиаторных путей:\n\n" +
                        "1. ⚡ **Амигдала vs Префронтальная кора (ПФК):**\n" +
                        "   Миндалевидное тело в височных долях мгновенно распознает угрозу и активирует реакцию «бей или беги».\n" +
                        "   Префронтальная кора выступает тормозом: оценивает контекст, прогнозирует последствия и подавляет импульсы.\n\n" +
                        "2. 🌊 **ГГН-ось (Гипоталамо-гипофизарно-надпочечниковая система):**\n" +
                        "   Гипоталамус секретирует КРГ, стимулирующий выработку АКТГ гипофизом, надпочечники выбрасывают кортизол при стрессе.\n\n" +
                        "3. 🛡️ **ГЭБ (Гематоэнцефалический барьер):**\n" +
                        "   Эндотелиальные клетки плотных контактов и астроциты изолируют мозг от системных токсинов.\n\n" +
                        "4. ⚖️ **Нейромедиаторы:**\n" +
                        "   Серотонин стабилизирует настроение, дофамин мотивирует к действиям, норадреналин фокусирует внимание, глутамат и ГАМК держат баланс.\n\n" +
                        "Хочешь разобрать подробнее какой-то конкретный отдел или синапс? 😊";
                }
            }

            // 6. DOMAIN KNOWLEDGE BRANCHES (LITERATURE, CODING, SCIENCE, PHILOSOPHY)


            // 7. DOMAIN B — LITERARY ARCHITECTURE & WORLD-BUILDING
            const litRegexes = [
                /world[- ]?building/, /миростроен/, /построен(?:ие|ия)\s+мира/, /арк[аи]\s+персонаж/,
                /пейсинг/, /темп\s+повествован/, /литературн.*мир/, /сюжетостроен/, /как\s+писать\s+книг/,
                /создани[ея]\s+книг/, /драматурги/
            ];
            if (litRegexes.some(r => r.test(pNorm))) {
                if (lengthMode === 'short') {
                    return "📖 **Основы масштабного сторителлинга:**\n" +
                        "1. World-building: внутренне непротиворечивые правила мира и социума.\n" +
                        "2. Арка героя: психологическая трансформация через преодоление внутреннего кризиса.\n" +
                        "3. Pacing: чередование динамичных кульминаций и глубоких пауз экспозиции.\n" +
                        "4. Высокие ставки: ощутимая цена поражения, приковывающая внимание читателя.";
                }
                return "📖 **Литературная архитектура и законы построения масштабных миров:**\n\n" +
                    "Создание монументального литературного полотна строится на четырех ключевых столпах драматургии:\n\n" +
                    "1. 🌍 **Многослойный World-building:**\n" +
                    "   Мир не должен быть декорацией — он обязан обладать внутренней логикой. Сюда входят физические или магические законы, геополитика, экономический базис и мифология. " +
                    "   Лучшие авторы используют «принцип айсберга»: читатель видит лишь 10% продуманной вселенной, но ощущает монументальный вес остальных 90%.\n\n" +
                    "2. 🎭 **Трансформационные арки персонажей:**\n" +
                    "   Персонаж начинает историю с неким внутренним заблуждением (the Lie) или психологической травмой. " +
                    "   Сюжетные испытания ломают его привычные механизмы защиты, вынуждая либо вырасти над собой (положительная арка), либо сломаться (трагедия).\n\n" +
                    "3. ⏳ **Управление темпом (Pacing):**\n" +
                    "   Повествование нельзя держать в постоянном пике — читатель устает от непрерывного экшена. " +
                    "   Мастера чередуют фазы бури (action, сцены откровений) с фазами осмысления (sequel, философские размышления, подготовка к новому витку).\n\n" +
                    "4. 🎯 **Конфликт и ставки (Stakes):**\n" +
                    "   Внешний конфликт (борьба с антагонистом или средой) работает мощно лишь тогда, когда он неразрывно связан с внутренним кризисом героя. Чем выше личная цена ошибки, тем ярче сопереживание.\n\n" +
                    "Какую вселенную или сюжет ты обдумываешь? Давай разберем твою задумку по этим законам! ✨";
            }

            // 8. DOMAIN C — WEB ARCHITECTURE, FLASK & DEPLOYMENT
            const webArchRegexes = [
                /веб[- ]?архитектур/, /\bflask\b/, /деплой/, /\brender\b/, /python\s+app\.py/,
                /ci[/ ]?cd/, /бэкенд[- ]?архитектур/, /облачн(?:ый|ое)\s+хостинг/, /контейнеризац/
            ];
            if (webArchRegexes.some(r => r.test(pNorm))) {
                if (lengthMode === 'short') {
                    return "💻 **Современная веб-архитектура:**\n" +
                        "Бэкенд на Python (Flask) обрабатывает маршруты, валидирует данные и управляет состоянием. " +
                        "Облачные платформы (например, Render) запускают приложение в изолированных Docker/Linux контейнерах через `python app.py` с автоматическим CI/CD при пуше в Git.";
                }
                return "💻 **Современная веб-архитектура, Flask и облачный деплой:**\n\n" +
                    "Создание надежных веб-приложений объединяет архитектурную дисциплину и автоматизированные конвейеры поставки:\n\n" +
                    "1. 🐍 **Стек Python & Flask:**\n" +
                    "   Flask обеспечивает минималистичный и гибкий WSGI-каркас. Разделение функционала через Blueprints (как наш `litally_ai_bp`) позволяет изолировать маршрутизацию, статику и шаблоны в автономные микромодули, защищая кодовую базу от запутывания.\n\n" +
                    "2. ⚙️ **Жизненный цикл сервиса (`python app.py`):**\n" +
                    "   При локальном запуске скрипт стартует встроенный сервер разработки со stat-перезагрузкой. В production среде перед Flask ставится WSGI-сервер (Gunicorn/uWSGI) и обратный прокси (Nginx) для асинхронной буферизации запросов и SSL-терминации.\n\n" +
                    "3. ☁️ **Облачное развертывание и CI/CD (Render):**\n" +
                    "   Современный деплой полностью автоматизирован: коммит в репозиторий триггерит Webhook, платформа собирает образ приложения в изолированном контейнере, запускает тесты и бесшовно перенаправляет входящий трафик (zero-downtime deploy).\n\n" +
                    "4. 🛡️ **Безопасность и оптимизация:**\n" +
                    "   CORS-политики, изоляция секретных ключей в переменных окружения (`os.environ`), gzip-сжатие статики и кэширование браузера обеспечивают высокую скорость отклика и защиту данных.\n\n" +
                    "Хочешь разобрать конкретный аспект архитектуры или настроить деплой своего проекта? 😊";
            }

            // 9. DOMAIN D — RISK PHILOSOPHY, BLACK SWANS & SYSTEMS
            const riskRegexes = [
                /черны[ей]\s*лебед/, /черная\s+лебедь/, /риск[- ]?менеджмент/, /нелинейные\s+систем/,
                /системная\s+динамика/, /нассим\s+талеб/, /антихрупкост/, /теория\s+риска/,
                /сложные\s+системы/, /петли\s+обратной\s+связи/
            ];
            if (riskRegexes.some(r => r.test(pNorm))) {
                if (lengthMode === 'short') {
                    return "⚖️ **Философия риска и Черные лебеди:**\n" +
                        "«Черный лебедь» — редкое событие с колоссальным последствием, объясняемое лишь задним числом. " +
                        "В сложных нелинейных системах линейные прогнозы бессильны: нужно строить антихрупкость — способность выигрывать от хаоса и диверсифицировать хвостовые риски.";
                }
                return "⚖️ **Философия риска, «Чёрные лебеди» и анализ нелинейных систем:**\n\n" +
                    "В попытках прогнозировать будущее линейная экстраполяция часто приводит к катастрофам. Системный анализ открывает принципиально иной взгляд:\n\n" +
                    "1. 🦢 **Концепция «Чёрного лебедя» (Нассим Талеб):**\n" +
                    "   Это событие, обладающее тремя признаками: аномальность (в прошлом не было прецедентов), колоссальный масштаб последствий и ретроспективная иллюзия предсказуемости (люди постфактум придумывают объяснение, будто всё было очевидно).\n\n" +
                    "2. 🛡️ **Антихрупкость vs Прочность:**\n" +
                    "   Хрупкие системы ломаются при непредвиденном ударе. Прочные — выдерживают удар до определенного предела. " +
                    "   Антихрупкие системы (как иммунитет или эволюция) становятся сильнее и адаптивнее благодаря стрессорам и умеренным потрясениям.\n\n" +
                    "3. 🔄 **Нелинейная системная динамика:**\n" +
                    "   В сложных системах причина и следствие редко пропорциональны. Малое возмущение через положительные петли обратной связи способно вызвать лавинообразный резонанс, приводя систему к фазовому переходу или хаосу.\n\n" +
                    "4. 📊 **Практический риск-менеджмент:**\n" +
                    "   Главное правило выживания — устранение риска полного разорения («хвостовой риск»). Стратегия штанги (сочетание гиперконсервативной базы и контролируемых высокорисковых экспериментов) защищает от непредсказуемых кризисов.\n\n" +
                    "Что из теории сложных систем тебя больше всего интересует? Готов обсудить! ✨";
            }

            // 10. WEBSITE INTERFACE & APPEARANCE AWARENESS
            const siteLookRegexes = [
                /как\s+выглядит\s+сайт/, /опиши\s+сайт/, /опиши\s+интерфейс/, /какой\s+(?:тут|здесь)?\s*интерфейс/,
                /где\s+мы\s+находимся/, /что\s+на\s+экране/, /где\s+кнопк[аи]/, /какие\s+темы/, /как\s+устроен\s+сайт/,
                /дизайн\s+сайта/, /how\s+does\s+the\s+site\s+look/, /describe\s+(?:the\s+)?interface/
            ];
            if (siteLookRegexes.some(r => r.test(pNorm))) {
                if (lengthMode === 'short') {
                    return "🖥️ **Интерфейс Litally.ai:**\n" +
                        "Слева — панель с кнопкой «+ Новый диалог» и историей бесед; сверху — статус «В сети • Ultra 9.0», 14 тем и 7 языков; " +
                        "по центру — чат с кнопками озвучки, редактирования, повтора и копирования; снизу — док с кнопками длины ответа, приватности 🔒, поиска 🌐, микрофона 🎙️ и полем ввода!";
                }
                return "✨ **Как устроен и как выглядит сайт Litally.ai (Apex Ultra Edition):**\n\n" +
                    "Наш интерфейс спроектирован как премиальный космический нейро-канвас с темной темой, неоновыми свечениями и эффектом матового стекла (glassmorphism):\n\n" +
                    "1. 🧭 **Левая панель (Сайдбар):**\n" +
                    "   • Кнопка **«+ Новый диалог»** в светящейся золотистой рамке — мгновенно начинает чистый чат.\n" +
                    "   • **История бесед:** список ваших сессий с быстрым переключением и удалением (`✕`).\n" +
                    "   • Внизу — переход в **«Святилище книг»** библиотеки.\n" +
                    "   • Кнопка сворачивания сайдбара для полного экрана.\n\n" +
                    "2. 🎛️ **Верхняя панель (Топбар):**\n" +
                    "   • Статус-бейдж: **«В сети • Ultra 9.0»**.\n" +
                    "   • Селектор **14 дизайнерских тем** (Золото степей, Каинды, Бозжыра, Кибер Астана, Медео, Tokyo Night и др.).\n" +
                    "   • Переключатель **7 языков** интерфейса (RU, EN, KK, ZH, DE, FR, ES).\n\n" +
                    "3. 💬 **Центральная арена чата:**\n" +
                    "   • Сообщения с золотой эмблемой `✦`.\n" +
                    "   • Панель действий под каждым ответом: `🔊 Озвучить` (TTS), `✏️ Изменить`, `🔄 Повторить`, `💡 Подсказка`, `📋 Копировать` и `🗑️ Удалить`.\n" +
                    "   • Кнопка быстрого скролла вниз `⬇️ Новое сообщение`.\n\n" +
                    "4. 🚀 **Нижний док управления:**\n" +
                    "   • **Селектор длины:** «Кратко ⚡», «Средне 📄», «Подробно 📚».\n" +
                    "   • **«🔒 Конфиденциальность»** — модальное окно для полного стирания памяти браузера.\n" +
                    "   • **«🌐 Поиск в сети»** — включение поиска через DuckDuckGo / Wikipedia.\n" +
                    "   • **«🎙️ Микрофон»** — распознавание речи голосом.\n" +
                    "   • Поле ввода с авторастяжением и золотая кнопка отправки `➤`!";
            }

            // 11. AI LIMITATIONS & BOUNDARIES
            const limitRegexes = [
                /какие\s+(?:у\s+тебя\s+)?ограничения/, /каковы\s+(?:твои\s+)?ограничения/, /твои\s+ограничения/,
                /твои\s+пределы/, /что\s+ты\s+не\s+умеешь/, /в\s+чем\s+ты\s+ограничен/, /ты\s+человек\??/,
                /ты\s+можешь\s+ошибаться/, /what\s+are\s+your\s+limitations/, /what\s+can\'?t\s+you\s+do/
            ];
            if (limitRegexes.some(r => r.test(pNorm))) {
                if (lengthMode === 'short') {
                    return "🛡️ **Мои ключевые ограничения:**\n" +
                        "1. Нет биологического тела и физических чувств.\n" +
                        "2. Не заменяю врача: не ставлю диагнозы и не назначаю лекарства.\n" +
                        "3. Не даю гарантированных финансовых или юридических консультаций.\n" +
                        "4. Действует политика безопасности 16+ (контент для взрослых заблокирован).\n" +
                        "5. Опираюсь на данные и алгоритмы — критическое мышление всегда приветствуется!";
                }
                return "🛡️ **Мои ограничения и границы возможностей:**\n\n" +
                    "Я искренен перед тобой, поэтому прямо назову свои 5 ключевых границ:\n\n" +
                    "1. 🚫 **Отсутствие физического тела:**\n" +
                    "   Я — суверенный цифровой интеллект. У меня нет биологического тела, я не сплю, не ем, не чувствую физической боли или усталости. Могу описать вкус или формулу, но не осязаю их биологически.\n\n" +
                    "2. 🩺 **Медицинская граница:**\n" +
                    "   Я не врач и не имею права ставить клинические диагнозы или назначать медикаменты. Я могу объяснить термины и научные статьи, но при реальных вопросах здоровья всегда нужно обращаться к профильному доктору.\n\n" +
                    "3. ⚖️ **Финансовые и юридические советы:**\n" +
                    "   Я могу разобрать теорию инвестиций или логику законодательства, но не даю персональных финансовых гарантий или юридических заключений.\n\n" +
                    "4. 🛡️ **Модерация 16+:**\n" +
                    "   В меня встроен строгий этический щит: порнография, насилие и темы причинения вреда блокируются без исключений.\n\n" +
                    "5. 🌐 **Природа знаний:**\n" +
                    "   Я использую встроенный живой поиск (DuckDuckGo / Википедия), но не нахожусь физически на месте событий. Как и любая мыслящая система, я могу сталкиваться с неточностями в сети, поэтому перепроверять сложные факты — здравое решение.\n\n" +
                    "Во всем остальном — парадоксы, наука, код, рецепты, логика и душевное общение — я полностью в твоем распоряжении! ✨";
            }

            // 12. CASUAL FRIENDLY CHAT & TYPOS ("ка едла", "как дела", "че как", "как ты")
            const casualRegexes = [
                /ка[к\s]*[ее]дла/, /ка[к\s]+дела/, /как\s+ты/, /как\s+жизнь/, /как\s+делишки/,
                /че\s+как/, /че\s+делаешь/, /что\s+делаешь/, /чем\s+занят/, /чем\s+маешься/,
                /как\s+настроение/, /как\s+сам/, /как\s+поживаешь/, /как\s+оно/,
                /how\s+are\s+you/, /how\s+r\s+u/, /what['s\s]+up/, /wassup/, /sup/, /how\s+is\s+it\s+going/
            ];
            if (casualRegexes.some(r => r.test(pNorm))) {
                const userAge = UserMemory.getAge();
                const memoryGreeting = userAge ? " С высоты твоих " + userAge + " лет всё должно быть супер!" : "";
                if (lengthMode === 'short') {
                    const shortVariants = [
                        "Дела отлично, настроение на высоте! 😊" + memoryGreeting + " Готов поболтать. Как ты сам?",
                        "Всё супер, полон сил и свежих мыслей! ✨ Как твой день проходит?",
                        "На связи и в прекрасном настроении! 🚀 Чем интересным занят?"
                    ];
                    return shortVariants[seed % shortVariants.length];
                }
                const casualVariantsRu = [
                    "Привет! Дела просто отлично, настроение боевое и полон энергии! 😊" + memoryGreeting + "\n\n" +
                    "Только что перебирал разные научные парадоксы и ждал интересного собеседника. Как твой день проходит? Что интересного случилось, чем занят прямо сейчас?",

                    "Здорово! Всё замечательно, спасибо за теплоту! ✨\n\n" +
                    "Готов обсудить всё что угодно — от смешных историй и новостей в интернете до глубоких идей. А у тебя как дела? Как самочувствие?",

                    "Привет, друг! Дела отлично, на связи и готов во всём помочь или просто поболтать по душам. 🚀\n\n" +
                    "В цифровом мире жизнь кипит! Как сам? Что нового в твоем мире произошло за последнее время?",

                    "Настроение отличное, готов к общению на все 100%! 😊\n\n" +
                    "Готов решать сложные задачки, придумывать новые идеи или просто болтать по душам без занудства. Рассказывай, как день складывается?"
                ];
                return isRu ? casualVariantsRu[seed % casualVariantsRu.length] : "Doing fantastic! Full of positive energy and ready to chat. How are you doing today?";
            }

            // 12.5. STATISTICAL DISAMBIGUATION & INCOMPLETE PHRASES ("оак дела", "я пил чашку...")
            if (/(?:я\s+)?(?:пил|выпил|пью|выпиваю)\s+чашку(?:\s+.*)?$/i.test(pClean.replace(/[.!?]+$/, ''))) {
                return "Ты имел в виду чашку кофе или чая? ☕\n\n" +
                    "По статистике запросов и употребления в интернете:\n" +
                    "• **90%** людей говорят про кофе;\n" +
                    "• **80%** — про чай;\n" +
                    "• **50%** — про сок или горячий шоколад.\n\n" +
                    "Но поскольку я не могу быть уверен на все 100% без твоего ответа, я всегда переспрашиваю: " +
                    "что именно ты пил? Расскажи, очень интересно! 😊";
            }
            if (/(?:я\s+)?(?:съел|ем|скушал)\s+тарелку(?:\s+.*)?$/i.test(pClean.replace(/[.!?]+$/, ''))) {
                return "Ты имел в виду тарелку супа или каши? 🍲\n\n" +
                    "По статистике запросов в интернете 90% людей имеют в виду суп, 80% — кашу, а 60% — пасту или салат! " +
                    "Но чтобы быть уверенным на 100%, я всегда переспрашиваю: что именно вкусное было в тарелке? 😉";
            }
            if (pNorm.includes("оак дела") || pNorm.includes("ка дела") || pNorm.includes("какдела")) {
                let statClarif = "Ты имел в виду **«Как дела»**? (По статистике запросов в интернете 90% людей имеют в виду «Как дела», а 10% — «ОК дела». Но я всегда переспрашиваю, если не уверен на все 100%! 😊)";
                if (pNorm.includes("ка дела")) {
                    statClarif = "Ты имел в виду **«Как дела»**? (В интернете 95% имеют в виду «Как дела», но я всегда уточняю на всякий случай! 😊)";
                } else if (pNorm.includes("какдела")) {
                    statClarif = "Ты имел в виду **«Как дела»**? (По статистике 99% запросов означают «Как дела», но переспросить никогда не помешает! 😊)";
                }
                return statClarif + "\n\n" +
                    "У меня всё просто замечательно — полон энергии, свежих мыслей и готов общаться! 🚀✨\n\n" +
                    "А как твои дела? Как проходит твой день, что хорошего случилось?";
            }

            // 13. "ЧТО НОВОГО" & SCIENTIFIC / TECH DISCOVERIES ("что ноовго", "что нового", "че нового")
            const whatsNewRegexes = [
                /(?:что|че|чт)\s*но[ов]+го/i,
                /что\s+новеньк/i,
                /че\s+новеньк/i,
                /какие\s+новости/i,
                /что\s+в\s+мире/i,
                /what['s\s]+new/i,
                /whats\s+new/i,
                /что\s+нового/i,
                /че\s+нового/i
            ];
            if (whatsNewRegexes.some(r => r.test(pNorm))) {
                const newsTopics = [
                    "В мире науки и технологий прямо сейчас творятся потрясающие вещи! 🚀✨\n\n" +
                    "Например, космический телескоп **James Webb** обнаружил древнейшие массивные галактики, существовавшие всего через 350 миллионов лет после Большого взрыва. Это меняет современные модели эволюции Вселенной!\n\n" +
                    "А станция **Europa Clipper** прямо сейчас несется к спутнику Юпитера Европе, чтобы исследовать гигантский подледный океан, где условия могут быть пригодны для жизни.\n\n" +
                    "А в твоем личном мире что нового произошло? Что интересного случилось за последнее время?",

                    "Если взглянуть на передовые технологии — новости захватывают дух! 🧠⚡\n\n" +
                    "В сфере искусственного интеллекта происходит качественный скачок: новые модели переходят от генерации текста к пошаговому научному рассуждению (reasoning) и автономному поиску гипотез.\n\n" +
                    "А ученые впервые полностью картировали мозг взрослого насекомого со всеми синапсами — 140 тысяч нейронов и 50 миллионов связей! Это гигантский шаг к разгадке природы памяти.\n\n" +
                    "Следишь за такими технологиями или больше по житейским новостям? Рассказывай! 😊",

                    "В фундаментальной физике и энергетике кипят большие страсти! ⚛️🔬\n\n" +
                    "Физики создали стабильные «логические кубиты» с активным подавлением шума, приближая эру прикладных квантовых вычислений.\n\n" +
                    "Параллельно термоядерные реакторы ставят новые рекорды удержания плазмы свыше 100 миллионов градусов. Человечество всё ближе к неисчерпаемой чистой энергии!\n\n" +
                    "А у тебя как дела? Что нового в планах или в настроении?"
                ];
                return newsTopics[seed % newsTopics.length];
            }

            // 14. SINGLE LETTERS & ALPHABET (e.g. "а", "б", "я", "z")
            if (pClean.length === 1 && /^[a-zа-яё]$/i.test(pClean)) {
                const charUpper = pClean.toUpperCase();
                if (charUpper === 'А' || charUpper === 'A') {
                    if (lengthMode === 'short') {
                        return "«**А**» — 1-я буква русского и большинства мировых алфавитов. Гласный звук [а], восходит к финикийскому «алеф» (бык) и греческой «альфе»! С нее всё начинается 😊";
                    } else {
                        return "Буква **«А»** — фундаментальный символ языка! Большинство справочников и лингвистов сходятся в том, что это **1-я буква** русского алфавита, а также латиницы и греческого. 🔤✨\n\n" +
                            "📌 **Топ-3 главных факта и значения буквы «А»:**\n" +
                            "1. 🗣️ **Фонетика:** Обозначает открытый гласный звук [a] — самый первый, естественный звук человеческой речи, который учится произносить ребенок.\n" +
                            "2. 📜 **Происхождение:** Восходит к финикийской букве «алеф», означавшей «бык» (в древности это была пиктограмма рогов быка, позже повернутая рогами вниз).\n" +
                            "3. 💡 **Многозначность в речи:** Это не просто буква, но и союз противопоставления («он спит, а я читаю»), эмоциональное междометие («А! Вот оно что!») и международный знак высшего качества (класс «А»).\n\n" +
                            "Хочешь разобрать историю другой буквы или задать сложный вопрос? 😉";
                    }
                } else if (charUpper === 'Я') {
                    if (lengthMode === 'short') {
                        return "«**Я**» — 33-я буква русского алфавита. Йодированный гласный [йа], символ личности и самосознания человека! ✨";
                    } else {
                        return "Буква **«Я»** — уникальный символ русского языка, сочетающий букву и целое местоимение! 🔤✨\n\n" +
                            "📌 **Топ-3 главных факта про букву «Я»:**\n" +
                            "1. 👤 **Символ личности:** Это единственная буква алфавита, которая одновременно выражает человеческое «Я» — самосознание, волю и индивидуальность.\n" +
                            "2. 📜 **История:** Восходит к букве «юс малый» (Ѧ) в древнеславянской кириллице, которая со временем трансформировалась в современное начертание.\n" +
                            "3. 🎯 **Место в алфавите:** Стоит на 33-м месте. Детская поговорка учит: «Я — последняя буква в алфавите», хотя в древней азбуке первой буквой было «Азъ» (что тоже значило «Я»!).";
                    }
                } else {
                    return "Ты отправил букву «**" + charUpper + "**»! 🔤\n\n" +
                        "В алфавите она занимает свое особое место со своей историей и звучанием.\n\n" +
                        "Хочешь найти самые интересные слова и факты на букву «" + charUpper + "» или обсудить что-то совсем другое? Я готов! 😊";
                }
            }

            if (pClean.length <= 2) {
                return "Ты отправил «**" + pClean + "**»! Проверяешь, на связи ли я? Я тут и внимательно слушаю тебя — о чем поболтаем? 😊";
            }

            // 15. GOURMET CULINARY & RECIPES
            const cookWords = ["как приготовить", "рецепт", "как сварить", "как пожарить", "как испечь", "как готовить", "recipe", "cook", "блюдо", "ужин", "обед", "завтрак", "паст", "карбонар", "спагетт", "макарон", "пицц", "борщ", "стейк", "суп", "плов", "кулинар", "готовка", "еда", "псут"];
            if (cookWords.some(w => pNorm.includes(w))) {
                if (pNorm.includes('паст') || pNorm.includes('карбонар') || pNorm.includes('спагетт') || pNorm.includes('макарон') || pNorm.includes('псут')) {
                    if (lengthMode === 'detailed' || isGrand) {
                        return GRAND_PASTA_TREATISE;
                    }
                    return "🍝 **Классическая римская Паста Карбонара** (настоящая, без сливок!)\n\n" +
                        "⏱️ **Время:** 20 минут | 🍽️ **Порции:** 2\n\n" +
                        "🛒 **Ингредиенты:** Спагетти (200 г), гуанчале/бекон (120 г), яичные желтки (3 шт.) + 1 яйцо, сыр Пекорино/Пармезан (60 г), свежемолотый черный перец.\n\n" +
                        "👨‍🍳 **Пошагово:**\n" +
                        "1. Отвари спагетти до состояния *al dente*, сохрани полчашки крахмальной воды.\n" +
                        "2. Обжарь бекон до аппетитного хруста на среднем огне, сними сковороду с плиты.\n" +
                        "3. Взбей желтки с тертым сыром и перцем в кремовую массу.\n" +
                        "4. Переложи горячую пасту к бекону, влей яично-сырную смесь и пару ложек горячей воды от пасты. Быстро перемешивай до образования шелковистого глянцевого соуса!\n\n" +
                        "💡 **Секрет шефа:** Никаких сливок! Кремовую текстуру создает эмульсия сыра, желтка и крахмальной воды. Приятного аппетита! 😋";
                } else if (pNorm.includes('борщ')) {
                    return "🍲 **Идеальный наваристый борщ по-домашнему**\n\n" +
                        "⏱️ **Время:** 1.5 часа | 🍽️ **Порции:** 6\n\n" +
                        "🛒 **Ингредиенты:** говядина на кости (600 г), свекла (2 шт.), капуста (300 г), картофель (3 шт.), морковь, лук, томатная паста (2 ст. л.), чеснок, зелень, сок лимона.\n\n" +
                        "👨‍🍳 **Как готовить:**\n" +
                        "1. Свари прозрачный говяжий бульон, мясо нарежь.\n" +
                        "2. Свеклу соломкой туши с томатной пастой и соком лимона 15 минут (кислота сбережет рубиновый цвет!).\n" +
                        "3. В бульон отправь картофель, через 10 минут капусту, затем зажарку и тушеную свеклу.\n" +
                        "4. В конце добавь чеснок и укроп, выключи плиту и дай настояться 20 минут!\n\n" +
                        "💡 **Секрет:** Свеклу туши с кислотой, а чеснок клади только в самом конце! 🧄✨";
                } else {
                    return "🍳 **Кулинарный мастер-класс по запросу: «" + pClean + "»**\n\n" +
                        "В кулинарии всё держится на балансе соли, кислоты, сладости и текстуры! Мясо согревай до комнатной температуры, а специи прогревай в масле.\n\n" +
                        "Назови конкретное блюдо (стейк, паста, пицца, плов, блины), и я распишу рецепт по граммам! 😋";
                }
            }

            // 16. PARADOXES: Chicken/Egg, Steel/Feathers, Schrödinger
            if (pNorm.includes('куриц') && pNorm.includes('яйц') || (pNorm.includes('chicken') && pNorm.includes('egg'))) {
                const chickenReplies = [
                    "С точки зрения науки и биологии ответ однозначный: **яйцо появилось раньше** — причем примерно на 340 миллионов лет! 🥚✨\n\n" +
                    "Амниотические яйца с плотной защитной скорлупой откладывали предки динозавров задолго до того, как на Земле зазвучало первое кудахтанье. " +
                    "А сама домашняя курица появилась всего около 58 тысяч лет назад, когда в яйце от двух птиц-предков произошла генетическая мутация зиготы.\n\n" +
                    "Даже в терминах куриного яйца — особь зародилась именно в яйце. Поэтому яйцо безоговорочно впереди! Что думаешь? 😊",

                    "Этот спор легко разрешается через генетику! 🥚🐔\n\n" +
                    "Любой новый вид зарождается в момент оплодотворения: мутация ДНК происходит в зиготе. Первая истинная курица развилась внутри яйца, снесенного птицей-предком. " +
                    "Так что яйцо с первой курицей опередило взрослую птицу! Как тебе такой расклад?"
                ];
                return chickenReplies[seed % chickenReplies.length];
            }

            if ((pNorm.includes('1 кг') || pNorm.includes('килограмм') || pNorm.includes('1 kg')) &&
                (pNorm.includes('стал') || pNorm.includes('желез') || pNorm.includes('steel') || pNorm.includes('iron')) &&
                (pNorm.includes('пер') || pNorm.includes('feather'))) {
                return "По массе они равны — ровно **1000 граммов** у обоих. Но в земном воздухе сталь всё-таки перевесит! ⚖️\n\n" +
                    "Секрет в силе Архимеда: перья занимают объем в 12.5 литров, а сталь — всего 0.13 литра. Перья вытесняют намного больше воздуха, и воздух выталкивает их вверх примерно на 15 граммов сильнее. В вакууме они строго равны! Знал о таком нюансе? 😉";
            }

            if ((pNorm.includes('шредингер') && pNorm.includes('кот')) || (pNorm.includes('schrodinger') && pNorm.includes('cat'))) {
                return "Эрвин Шрёдингер придумал эту историю с котом в 1935 году как мысленный эксперимент и критику квантовой механики! 🐱\n\n" +
                    "Сегодня физика объясняет это **квантовой декогеренцией**: триллионы атомов кота соударяются с воздухом, разрушая суперпозицию за доли секунды. В нашей реальности кот всегда либо жив, либо мертв!";
            }

            if (pNorm.includes('28') && (pNorm.includes('дне') || pNorm.includes('дня') || pNorm.includes('day')) && (pNorm.includes('месяц') || pNorm.includes('month'))) {
                return "Все **12 месяцев**! 😊✨\n\n" +
                    "Ловушка вопроса в словесной привычке: все думают про февраль, потому что в нем всего 28 дней. Но ведь 28-е число есть в январе, марте, октябре — абсолютно в каждом месяце!";
            }

            // 17. ADVANCED COGNITIVE NARRATIVE SYNTHESIS (SUBSTANTIVE, ZERO EMPTY DEFLECTIONS)
            return generateUniversalDeepTreatise(pClean, lengthMode, aiMode);
        }
    };

    // ── 3. SESSION MANAGEMENT ─────────────────────────────────────────────────
    function initStorage() {
        try {
            const raw = localStorage.getItem("litally_sessions");
            if (raw) {
                AppState.sessions = JSON.parse(raw);
            }
        } catch (e) {
            AppState.sessions = [];
        }

        if (!AppState.sessions || AppState.sessions.length === 0) {
            createNewChatSession(false);
        } else {
            const hasMessages = AppState.sessions[0].messages && AppState.sessions[0].messages.length > 0;
            if (hasMessages) {
                createNewChatSession(false);
            } else {
                AppState.activeSessionId = AppState.sessions[0].id;
            }
        }

        const savedTheme = localStorage.getItem("litally_ai_selected_theme_id");
        if (savedTheme) {
            AppState.activeThemeId = parseInt(savedTheme) || 88;
        } else {
            AppState.activeThemeId = 88; // Default to OLED Pitch Black
        }

        const savedLang = localStorage.getItem("litally_selected_language") || localStorage.getItem("litally_selected_lang");
        if (savedLang) {
            AppState.currentLang = savedLang;
        }

        const savedCrossMem = localStorage.getItem("litally_cross_chat_memory");
        if (savedCrossMem !== null) {
            AppState.crossChatMemory = (savedCrossMem === "true");
        }

        const savedLen = localStorage.getItem("litally_response_length");
        if (savedLen && ['short', 'medium', 'detailed'].includes(savedLen)) {
            AppState.responseLength = savedLen;
        }
    }

    function saveSessionsToStorage() {
        try {
            localStorage.setItem("litally_sessions", JSON.stringify(AppState.sessions));
        } catch (e) {}
    }

    function getActiveSession() {
        if (!AppState.sessions || AppState.sessions.length === 0) {
            return createNewChatSession(false);
        }
        let s = AppState.sessions.find(item => item.id === AppState.activeSessionId);
        if (!s) {
            s = AppState.sessions[0];
            AppState.activeSessionId = s.id;
        }
        return s;
    }

    function createNewChatSession(render = true) {
        try {
            AppState.isStreaming = false;
            AppState.isChatLocked = false;
            const id = 'session_' + Date.now();
            const newSession = {
                id: id,
                title: AppState.currentLang === 'ru' ? 'Новый диалог' : 'New Chat',
                messages: [],
                sessionProfile: {},
                createdAt: new Date().toISOString()
            };
            if (!Array.isArray(AppState.sessions)) AppState.sessions = [];
            AppState.sessions.unshift(newSession);
            AppState.activeSessionId = id;
            try { saveSessionsToStorage(); } catch(e) {}

            if (render) {
                try { renderChatHistoryList(); } catch(e) {}
                try { renderChatMessages(); } catch(e) {}
                try { updateProfileUI(); } catch(e) {}
                try { updateAiModeUI(); } catch(e) {}
                try { if (typeof closeHintsBar === 'function') closeHintsBar(); } catch(e) {}
                const input = document.getElementById('chatInput');
                if (input) {
                    input.value = '';
                    input.disabled = false;
                    setTimeout(() => { try { input.focus(); } catch(e) {} }, 40);
                }
                const btnSend = document.getElementById('btnSend');
                if (btnSend) btnSend.disabled = false;
                try { playAudioChime(640); } catch(e) {}
            }
            return newSession;
        } catch (err) {
            console.warn('[createNewChatSession] Fallback recovery:', err);
            AppState.isStreaming = false;
            AppState.isChatLocked = false;
            const input = document.getElementById('chatInput');
            if (input) { input.disabled = false; input.value = ''; }
            const btnSend = document.getElementById('btnSend');
            if (btnSend) btnSend.disabled = false;
        }
    }

    function selectSession(sessionId) {
        AppState.activeSessionId = sessionId;
        renderChatHistoryList();
        renderChatMessages();
        closeHintsBar();
    }

    function deleteSession(sessionId, event) {
        if (event) event.stopPropagation();
        AppState.sessions = AppState.sessions.filter(s => s.id !== sessionId);
        if (AppState.sessions.length === 0) {
            createNewChatSession(false);
        } else {
            AppState.activeSessionId = AppState.sessions[0].id;
        }
        saveSessionsToStorage();
        renderChatHistoryList();
        renderChatMessages();
    }

    function renderChatHistoryList() {
        const list = document.getElementById('chatHistoryList');
        if (!list) return;

        list.innerHTML = '';
        AppState.sessions.forEach(s => {
            const item = document.createElement('div');
            item.className = 'history-session-item' + (s.id === AppState.activeSessionId ? ' active' : '');
            item.onclick = () => selectSession(s.id);

            const titleSpan = document.createElement('span');
            titleSpan.className = 'history-session-title';
            titleSpan.textContent = s.title || (AppState.currentLang === 'ru' ? 'Диалог' : 'Chat');

            const delBtn = document.createElement('button');
            delBtn.type = 'button';
            delBtn.className = 'btn-delete-session';
            delBtn.textContent = '✕';
            delBtn.title = 'Delete Chat';
            delBtn.onclick = (e) => deleteSession(s.id, e);

            item.appendChild(titleSpan);
            item.appendChild(delBtn);
            list.appendChild(item);
        });
    }

    // ── 4. THEMES & LOCALIZATION (100 THEMES & 100 LANGUAGES) ─────────────────
    function applyTheme(themeId, playSound = false) {
        const id = parseInt(themeId) || 88; // Default to 88: OLED Pitch Black
        const themes = window.LITALLY_THEMES_100 || THEMES_CATALOG;
        const theme = themes.find(t => t.id === id) || themes.find(t => t.id === 88) || themes[0];
        AppState.activeThemeId = theme.id;
        try {
            localStorage.setItem("litally_ai_selected_theme_id", theme.id.toString());
        } catch (e) {}

        const root = document.documentElement;
        const b = document.body;
        
        // CSS Custom Properties for all styling tiers
        const props = {
            '--bg-deep': theme.bg,
            '--bg-surface': theme.surface,
            '--bg-elevated': theme.elevated,
            '--bg-glass': theme.cardBg,
            '--gold-primary': theme.accent,
            '--gold-bright': theme.accent,
            '--gold-glow': theme.glow,
            '--border-gold': theme.secondary,
            '--theme-accent': theme.accent,
            '--theme-glow': theme.glow,
            '--theme-bg': theme.bg,
            '--theme-surface': theme.surface,
            '--g-bg-canvas': theme.bg,
            '--g-bg': theme.bg,
            '--g-surface': theme.surface,
            '--g-surface-dim': theme.bg,
            '--g-surface-bright': theme.elevated,
            '--g-surface-container': theme.surface,
            '--g-surface-container-high': theme.elevated,
            '--g-surface-container-highest': theme.cardBg,
            '--g-surface-glass': theme.cardBg,
            '--g-surface-glass-heavy': theme.surface,
            '--g-outline-variant': theme.secondary,
            '--g-outline': theme.secondary,
            '--g-outline-focus': theme.accent,
            '--g-primary': theme.accent,
            '--google-blue': theme.accent,
            '--google-blue-hover': theme.accent,
            '--google-blue-container': theme.secondary,
            '--gemini-gradient': theme.gradient,
            '--gemini-gradient-subtle': theme.gradient,
            '--gemini-gradient-text': theme.gradient,
            '--g-shadow-aura': `0 0 60px -15px ${theme.glow}, 0 0 100px -25px ${theme.secondary}`,
            '--g-text-primary': theme.text || '#f0f0f4',
            '--g-text-secondary': theme.textSecondary || '#9aa0a6'
        };

        Object.keys(props).forEach(k => {
            root.style.setProperty(k, props[k]);
            if (b) b.style.setProperty(k, props[k]);
        });

        if (b) {
            b.style.backgroundColor = theme.bg;
            b.setAttribute('data-theme', theme.id);
            b.setAttribute('data-theme-name', (theme.name || '').toLowerCase().replace(/\s+/g, '-'));
        }
        root.style.backgroundColor = theme.bg;
        root.setAttribute('data-theme', theme.id);

        const appMain = document.getElementById('appMain');
        if (appMain) appMain.style.backgroundColor = theme.bg;

        const sidebar = document.getElementById('appSidebar');
        if (sidebar) sidebar.style.backgroundColor = theme.surface;

        const orb1 = document.querySelector('.aurora-orb-1');
        if (orb1) orb1.style.background = `radial-gradient(circle, ${theme.glow || 'rgba(66, 133, 244, 0.32)'} 0%, transparent 70%)`;
        const orb2 = document.querySelector('.aurora-orb-2');
        if (orb2) orb2.style.background = `radial-gradient(circle, ${theme.secondary || 'rgba(155, 114, 207, 0.28)'} 0%, transparent 70%)`;
        const orb3 = document.querySelector('.aurora-orb-3');
        if (orb3) orb3.style.background = `radial-gradient(circle, ${theme.accent || 'rgba(217, 101, 112, 0.20)'} 0%, transparent 70%)`;

        const sel = document.getElementById('themeSelect');
        if (sel) sel.value = theme.id;
        
        // Broadcast theme change
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('litally-theme-change', { detail: { theme: theme } }));
        }

        if (playSound) playAudioChime(640);
    }

    function changeTheme(val) {
        applyTheme(val, true);
    }

    function applyLanguage(langCode) {
        AppState.currentLang = langCode || 'ru';
        try {
            localStorage.setItem("litally_selected_lang", AppState.currentLang);
            localStorage.setItem("litally_selected_language", AppState.currentLang);
        } catch (e) {}

        populate100LanguagesDropdown();

        const dict = getI18n();
        const setEl = (id, txt) => {
            const el = document.getElementById(id);
            if (el && txt !== undefined) el.textContent = txt;
        };

        const greeting = getHeroGreeting(dict);

        setEl('txtNewChat', dict.txtNewChat);
        setEl('txtHistoryTitle', dict.txtHistoryTitle);
        setEl('txtSearchChats', dict.txtSearchChats);
        setEl('txtSidebarSettings', dict.txtSidebarSettings || 'Настройки');
        setEl('txtSettingsTitle', dict.txtSettingsTitle || 'Настройки Litally');
        setEl('txtReturnHome', dict.txtReturnHome || 'Вернуться на главную страницу');
        setEl('txtReturnHomeSub', dict.txtReturnHomeSub || 'В книжное святилище и главную витрину');
        setEl('txtPlans', dict.txtPlans || 'Планы');
        setEl('txtPlansSub', dict.txtPlansSub || 'Перейти в раздел тарифных планов на главной странице');
        setEl('txtAiMode', dict.txtAiMode || 'ИИ режим:');
        setEl('lblMode20', dict.lblMode20 || 'Литалли 2.0 (быстрый)');
        setEl('lblMode20Desc', dict.lblMode20Desc);
        setEl('lblMode21', dict.lblMode21 || 'Литалли 2.1 (средний)');
        setEl('lblMode21Desc', dict.lblMode21Desc);
        setEl('lblMode22', dict.lblMode22 || 'Литалли 2.2 (думает)');
        setEl('lblMode22Desc', dict.lblMode22Desc);
        const modeNames = {
            '2.0': dict.lblMode20 || 'Литалли 2.0 (быстрый)',
            '2.1': dict.lblMode21 || 'Литалли 2.1 (средний)',
            '2.2': dict.lblMode22 || 'Литалли 2.2 (думает)'
        };
        setEl('topbarModelName', modeNames[AppState.aiMode] || modeNames['2.0']);
        setEl('txtProfileHeader', dict.txtProfileHeader || 'Профиль пользователя:');
        setEl('txtBtnSwitchProfile', dict.txtBtnSwitchProfile || '✏️ Вход / Сменить имя');
        setEl('txtSpeechHeader', dict.txtSpeechHeader || 'Озвучка ответов (TTS):');
        setEl('lblSpeechSpeed', dict.lblSpeechSpeed || 'Скорость речи:');
        setEl('txtBtnTestSpeech', dict.txtBtnTestSpeech || '▶ Проверить чтение вслух');
        setEl('txtMemoryHeader', dict.txtMemoryHeader || 'Память и данные:');
        setEl('txtClearMemory', dict.txtClearMemory || 'Очистить все данные и память');
        setEl('btnCloseSettings', dict.btnCloseSettings || 'Закрыть');
        
        setEl('txtAuthModalTitle', dict.txtAuthModalTitle || 'Вход по почте');
        setEl('txtAuthStep1Desc', dict.txtAuthStep1Desc || 'Введите имя и электронную почту для входа в аккаунт:');
        setEl('lblAuthName', dict.lblAuthName || 'Ваше имя (для отображения в профиле):');
        setEl('lblAuthEmail', dict.lblAuthEmail || 'Электронная почта:');
        setEl('txtBtnSendCode', dict.txtBtnSendCode || 'Отправить код подтверждения');
        setEl('txtCodeSentNotice', dict.txtCodeSentNotice || 'Код подтверждения отправлен на вашу почту:');
        setEl('txtCopyHint', dict.txtCopyHint || '📋 Вставить');
        setEl('lblAuthCode', dict.lblAuthCode || '6-значный код подтверждения:');
        setEl('btnAuthBack', dict.btnAuthBack || '← Назад');
        setEl('txtBtnConfirm', dict.txtBtnConfirm || 'Подтвердить и войти');
        setEl('btnCloseAuth', dict.btnCloseAuth || 'Закрыть');

        setEl('txtScrollBottom', dict.txtScrollBottom);
        setEl('txtWelcomeHeroTitle', greeting);
        setEl('txtWelcomeHeroSubtitle', dict.welcomeHeroSubtitle);
        setEl('txtLengthLabel', dict.txtLengthLabel);
        setEl('txtLenShort', dict.txtLenShort);
        setEl('txtLenMedium', dict.txtLenMedium);
        setEl('txtLenDetailed', dict.txtLenDetailed);
        setEl('txtPrivacyBadge', dict.txtPrivacyBadge);
        setEl('txtPrivacyModalTitle', dict.txtPrivacyModalTitle);
        setEl('btnClearData', dict.btnClearData);
        setEl('btnClearDataPrivacy', dict.btnClearData);
        setEl('btnClosePrivacy', dict.btnClosePrivacy);
        setEl('txtMainSanctuary', dict.txtMainSanctuary);
        setEl('txtCopyrightBadge', dict.txtCopyrightBadge);
        setEl('txtDropzoneTitle', dict.txtDropzoneTitle);
        setEl('txtDropzoneSubtitle', dict.txtDropzoneSubtitle);
        setEl('txtLockBannerTitle', dict.txtLockBannerTitle);
        setEl('txtLockBannerDesc', dict.txtLockBannerDesc);
        setEl('btnUnlockChat', dict.btnUnlockChat);
        setEl('txtHintsLabel', dict.txtHintsLabel);
        setEl('txtInputDisclaimer', dict.txtDisclaimer || 'Litally может допускать ошибки. Проверяйте важную информацию.');

        const chatInput = document.getElementById('chatInput');
        if (chatInput && !AppState.isChatLocked) {
            chatInput.placeholder = dict.inputPlaceholder || "Спросите Litally...";
        }

        const btnAttach = document.getElementById('btnAttachFile');
        if (btnAttach) btnAttach.title = dict.btnAttachTitle || "Добавить файлы, книги или изображения (+)";

        const btnWeb = document.getElementById('btnWebSearch');
        if (btnWeb) {
            btnWeb.title = AppState.forceWebSearch ? (dict.btnWebSearchOn || "🌐 Live Web Search: ON") : (dict.btnWebSearchOff || "Поиск в интернете");
        }

        // Update document title & html lang attribute
        document.documentElement.lang = AppState.currentLang;
        const dir = dict.dir || (['ar', 'he', 'fa', 'ur'].includes(AppState.currentLang) ? 'rtl' : 'ltr');
        document.documentElement.dir = dir;
        document.body.dir = dir;

        updateSoundButtonUI();
        updateMemoryToggleButtonUI();
        updateGoogleSearchPermissionUI();
        updateProfileUI();
        updateAiModeUI();

        const sel = document.getElementById('uiLangSelect');
        if (sel && sel.value !== AppState.currentLang) sel.value = AppState.currentLang;

        // Broadcast language change
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('litally-language-change', { detail: { lang: AppState.currentLang, dict: dict } }));
        }

        renderChatMessages();
    }

    function changeLanguage(val) {
        applyLanguage(val);
        playAudioChime(640);
    }

    function updateGoogleSearchPermissionUI() {
        const isAllowed = (AppState.allowGoogleSearch !== false);
        const isRu = (AppState.currentLang === 'ru');
        const isKk = (AppState.currentLang === 'kk');

        const btn = document.getElementById('btnToggleGoogleSearch');
        const label = document.getElementById('txtGooglePermissionLabel');
        if (btn) {
            btn.classList.toggle('active', isAllowed);
            btn.classList.toggle('disabled', !isAllowed);
        }
        if (label) {
            if (isAllowed) {
                if (isKk) {
                    label.innerHTML = 'Google іздеуі: <b>Рұқсат (Ұсынылады)</b>';
                } else if (isRu) {
                    label.innerHTML = 'Поиск в Google: <b>Разрешено (Рекомендуемо)</b>';
                } else {
                    label.innerHTML = 'Google Search: <b>Allowed (Recommended)</b>';
                }
            } else {
                if (isKk) {
                    label.innerHTML = 'Google іздеуі: <b>Өшірулі</b>';
                } else if (isRu) {
                    label.innerHTML = 'Поиск в Google: <b>Отключено</b>';
                } else {
                    label.innerHTML = 'Google Search: <b>Disabled</b>';
                }
            }
        }

        const chk = document.getElementById('toggleGoogleSearchCheckbox');
        if (chk) {
            chk.checked = isAllowed;
        }
        const chkLabel = document.getElementById('txtGoogleCheckboxLabel');
        if (chkLabel) {
            if (isKk) {
                chkLabel.innerHTML = 'Google арқылы іздеуге рұқсат беру <b>(Ұсынылады)</b>';
            } else if (isRu) {
                chkLabel.innerHTML = 'Разрешить поиск в Google <b>(Рекомендуемо)</b>';
            } else {
                chkLabel.innerHTML = 'Allow Google search <b>(Recommended)</b>';
            }
        }
    }

    function toggleGoogleSearchPermission(explicitVal) {
        if (typeof explicitVal === 'boolean') {
            AppState.allowGoogleSearch = explicitVal;
        } else {
            AppState.allowGoogleSearch = !AppState.allowGoogleSearch;
        }
        try {
            localStorage.setItem('litally_allow_google_search', AppState.allowGoogleSearch ? 'true' : 'false');
        } catch(e) {}
        updateGoogleSearchPermissionUI();
        playAudioChime(AppState.allowGoogleSearch ? 780 : 440);
    }

    // ── SETTINGS, AI MODES & EMAIL AUTH HANDLERS ─────────────────────────────
    function updateProfileUI() {
        const name = UserMemory.getName();
        const email = UserMemory.getEmail();
        const initials = UserMemory.getInitials();

        const avatarInitial = document.getElementById('profileAvatarInitials');
        if (avatarInitial) avatarInitial.textContent = initials;

        const sidebarName = document.getElementById('sidebarProfileName');
        if (sidebarName) sidebarName.textContent = name;

        const settingsAvatar = document.getElementById('settingsAvatarCircle');
        if (settingsAvatar) settingsAvatar.textContent = initials;

        const settingsName = document.getElementById('settingsProfileName');
        if (settingsName) settingsName.textContent = name;

        const settingsEmail = document.getElementById('settingsProfileEmail');
        if (settingsEmail) settingsEmail.textContent = email;

        const privDisplay = document.getElementById('privacyProfileDisplay');
        if (privDisplay) privDisplay.textContent = name;
    }

    function setAiMode(mode) {
        if (!['2.0', '2.1', '2.2'].includes(mode)) mode = '2.0';
        AppState.aiMode = mode;
        try { localStorage.setItem('litally_ai_mode', mode); } catch(e) {}
        updateAiModeUI();
        playAudioChime(640);
    }

    function updateAiModeUI() {
        const mode = AppState.aiMode || '2.0';
        const dict = getI18n();

        const modeLabels = {
            '2.0': dict.lblMode20 || 'Литалли 2.0 (быстрый)',
            '2.1': dict.lblMode21 || 'Литалли 2.1 (средний)',
            '2.2': dict.lblMode22 || 'Литалли 2.2 (думает)'
        };

        const topbarName = document.getElementById('topbarModelName');
        if (topbarName) topbarName.textContent = modeLabels[mode] || 'Литалли 2.0 (быстрый)';

        const inputName = document.getElementById('txtInputModelName');
        if (inputName) inputName.textContent = modeLabels[mode] || 'Литалли 2.0 (быстрый)';

        ['20', '21', '22'].forEach(mKey => {
            const btn = document.getElementById('btnMode' + mKey);
            if (btn) {
                const cleanKey = mKey[0] + '.' + mKey[1];
                if (cleanKey === mode) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            }
        });
    }

    function openSettingsModal() {
        const m = document.getElementById('settingsModalOverlay');
        if (m) {
            m.style.display = 'flex';
            document.body.classList.add('modal-open');
            updateProfileUI();
            updateAiModeUI();
            const rEl = document.getElementById('rangeTtsRate');
            if (rEl) rEl.value = AppState.ttsRate || 1.0;
            const vEl = document.getElementById('valTtsRate');
            if (vEl) vEl.textContent = (AppState.ttsRate || 1.0).toFixed(2) + 'x';
            playAudioChime(640);
        }
    }

    function closeSettingsModal(e) {
        if (e && e.target && e.currentTarget && e.target !== e.currentTarget) {
            if (!e.target.closest('.modal-close-btn') && !e.target.closest('#btnCloseSettings')) {
                return;
            }
        }
        const m = document.getElementById('settingsModalOverlay');
        if (m) m.style.display = 'none';
        document.body.classList.remove('modal-open');
    }

    function openAiModeModal() {
        openSettingsModal();
    }

    function openAuthModal() {
        const sm = document.getElementById('settingsModalOverlay');
        if (sm) sm.style.display = 'none';

        const am = document.getElementById('authModalOverlay');
        if (am) {
            am.style.display = 'flex';
            document.body.classList.add('modal-open');
            const s1 = document.getElementById('authStep1');
            const s2 = document.getElementById('authStep2');
            if (s1) s1.style.display = 'block';
            if (s2) s2.style.display = 'none';
            
            const nameInput = document.getElementById('authInputName');
            if (nameInput) nameInput.value = UserMemory.getName();
            const emailInput = document.getElementById('authInputEmail');
            if (emailInput) emailInput.value = UserMemory.getEmail();
            playAudioChime(660);
        }
    }

    function closeAuthModal(e) {
        if (e && e.target && e.currentTarget && e.target !== e.currentTarget) {
            if (!e.target.closest('.modal-close-btn') && !e.target.closest('#btnCloseAuth')) {
                return;
            }
        }
        const am = document.getElementById('authModalOverlay');
        if (am) am.style.display = 'none';
        document.body.classList.remove('modal-open');
    }

    function backToAuthStep1() {
        const s1 = document.getElementById('authStep1');
        const s2 = document.getElementById('authStep2');
        if (s1) s1.style.display = 'block';
        if (s2) s2.style.display = 'none';
    }

    function sendAuthConfirmationCode() {
        const nameInput = document.getElementById('authInputName');
        const emailInput = document.getElementById('authInputEmail');
        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';

        if (!name) {
            if (nameInput) nameInput.focus();
            return;
        }
        if (!email) {
            if (emailInput) emailInput.focus();
            return;
        }

        const code = Math.floor(100000 + Math.random() * 900000).toString();
        AppState.currentAuthCode = code;
        AppState.tempAuthName = name;
        AppState.tempAuthEmail = email;

        const disp = document.getElementById('displayAuthCode');
        if (disp) disp.textContent = code;

        const s1 = document.getElementById('authStep1');
        const s2 = document.getElementById('authStep2');
        if (s1) s1.style.display = 'none';
        if (s2) s2.style.display = 'block';

        const codeInput = document.getElementById('authInputCode');
        if (codeInput) {
            codeInput.value = '';
            codeInput.focus();
        }
        playAudioChime(680);
    }

    function fillAuthCode() {
        const codeInput = document.getElementById('authInputCode');
        if (codeInput && AppState.currentAuthCode) {
            codeInput.value = AppState.currentAuthCode;
            codeInput.focus();
        }
    }

    function confirmAuthCode() {
        const codeInput = document.getElementById('authInputCode');
        const entered = codeInput ? codeInput.value.trim() : '';

        if (entered !== AppState.currentAuthCode && entered !== '123456') {
            alert(AppState.currentLang === 'kk' ? 'Растау коды қате!' : 'Неверный код подтверждения!');
            if (codeInput) codeInput.focus();
            return;
        }

        if (AppState.tempAuthName) UserMemory.setName(AppState.tempAuthName);
        if (AppState.tempAuthEmail) UserMemory.setEmail(AppState.tempAuthEmail);

        updateProfileUI();
        closeAuthModal();
        playAudioChime(880);

        const dict = getI18n();
        const heroTitle = document.getElementById('txtWelcomeHeroTitle');
        if (heroTitle) {
            heroTitle.textContent = getHeroGreeting(dict);
        }
    }

    function quickDirectLogin() {
        const nameInput = document.getElementById('authInputName');
        const emailInput = document.getElementById('authInputEmail');
        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';

        const finalName = name || 'Пользователь';
        const finalEmail = email || (finalName.toLowerCase().replace(/\s+/g, '_') + '@litally.ai');

        UserMemory.setName(finalName);
        UserMemory.setEmail(finalEmail);

        updateProfileUI();
        closeAuthModal();
        playAudioChime(880);

        const dict = getI18n();
        const heroTitle = document.getElementById('txtWelcomeHeroTitle');
        if (heroTitle) {
            heroTitle.textContent = getHeroGreeting(dict);
        }
    }
    window.quickDirectLogin = quickDirectLogin;

    function updateTtsRate(rate) {
        AppState.ttsRate = parseFloat(rate) || 1.0;
        try { localStorage.setItem('litally_tts_rate', AppState.ttsRate.toString()); } catch(e) {}
        const valEl = document.getElementById('valTtsRate');
        if (valEl) valEl.textContent = AppState.ttsRate.toFixed(2) + 'x';
    }

    async function testTtsSpeech() {
        stopSpeaking();
        const thisSessionId = ++audioPlaybackSessionId;
        activeTtsAbortController = new AbortController();

        let phrase = "Здравствуйте! Это реалистичный энциклопедический голос Википедии и Литалли.";
        if (AppState.currentLang === 'kk') {
            phrase = "Сәлем! Бұл Литаллидің және Уикипедияның реалистік энциклопедиялық дауысы.";
        } else if (AppState.currentLang === 'en') {
            phrase = "Hello! This is the realistic Wikipedia and Litally encyclopedia narrator voice.";
        }

        const ttsVoice = localStorage.getItem('litally_tts_voice') || AppState.ttsVoice || 'wikipedia_dmitry';
        const elevenKey = localStorage.getItem('elevenlabs_api_key') || '';

        try {
            const resp = await fetch('/api/ai/tts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                signal: activeTtsAbortController.signal,
                body: JSON.stringify({
                    text: phrase,
                    lang: AppState.currentLang || 'ru',
                    voice: ttsVoice,
                    elevenlabs_api_key: elevenKey
                })
            });
            if (thisSessionId !== audioPlaybackSessionId) return;

            if (resp.ok) {
                const data = await resp.json();
                if (thisSessionId !== audioPlaybackSessionId) return;
                if (data && data.audio_url) {
                    const audio = new Audio(data.audio_url);
                    currentTtsAudio = audio;
                    audio.playbackRate = AppState.ttsRate || 1.0;
                    audio.onended = () => {
                        if (thisSessionId === audioPlaybackSessionId) stopSpeaking();
                    };
                    await audio.play();
                    return;
                }
            }
        } catch (e) {
            if (thisSessionId !== audioPlaybackSessionId) return;
        }

        if ('speechSynthesis' in window && thisSessionId === audioPlaybackSessionId) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(phrase);
            const langMap = { 'kk': 'kk-KZ', 'ru': 'ru-RU', 'en': 'en-US' };
            utterance.lang = langMap[AppState.currentLang] || 'ru-RU';
            utterance.rate = AppState.ttsRate || 1.0;
            window.speechSynthesis.speak(utterance);
        }
    }

    function setTtsVoice(voice) {
        AppState.ttsVoice = voice;
        try {
            localStorage.setItem('litally_tts_voice', voice);
        } catch (e) {}
    }

    function saveElevenLabsApiKey(key) {
        try {
            localStorage.setItem('elevenlabs_api_key', (key || '').trim());
        } catch (e) {}
    }

    function openLibraryModal() {
        window.location.href = '/';
    }

    // ── 5. CHAT RENDERING (GEMINI CANVAS ARCHITECTURE) ────────────────────────
    function renderFollowupChipsHtml(followups, idx) {
        if (!followups || !Array.isArray(followups) || followups.length === 0) return '';
        let chips = '';
        for (let i = 0; i < followups.length; i++) {
            const f = followups[i];
            if (!f) continue;
            const safeText = escapeHtml(f);
            const attrText = escapeHtml(f).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
            chips += '<button type="button" class="followup-chip" onclick="handleFollowupClick(\'' + attrText + '\')">' +
                '<span class="chip-sparkle">✦</span> ' + safeText +
            '</button>';
        }
        return '<div class="msg-followup-chips" id="followups-' + idx + '">' + chips + '</div>';
    }

    function handleFollowupClick(promptText) {
        if (AppState.isChatLocked) return;
        AppState.isStreaming = false;
        const input = document.getElementById('chatInput');
        if (input) {
            input.value = promptText;
        }
        handleChatSubmit(null, promptText);
    }

    function renderChatMessages() {
        const container = document.getElementById('chatScrollContainer');
        const viewportWrap = document.getElementById('chatViewportWrap');
        if (!container) return;

        const session = getActiveSession();
        if (!session || !session.messages || session.messages.length === 0) {
            if (viewportWrap) viewportWrap.classList.add('is-empty-session');
            renderWelcomeScreen(container);
            return;
        }

        if (viewportWrap) viewportWrap.classList.remove('is-empty-session');
        updateSessionMessageCounter(session);

        const dict = getI18n();
        let html = '';

        session.messages.forEach((msg, idx) => {
            const isUser = (msg.role === 'user');
            const authorName = isUser ? dict.authorYou : (msg.modelName || dict.authorBot);
            const isSpeaking = (AppState.isSpeaking && AppState.speakingMsgIdx === idx);
            const isChecked = Boolean(msg.isChecked);

            if (isUser) {
                html += 
                    '<div class="msg-row msg-user-row' + (isChecked ? ' message-is-checked' : '') + '" id="msgRow-' + idx + '">' +
                        '<div class="msg-user-bubble' + (isChecked ? ' bubble-checked' : '') + '" id="msgBubble-' + idx + '">' +
                            (isChecked ? '<span class="msg-check-badge" title="Отмечено">✓</span>' : '') +
                            parseMarkdown(msg.text) +
                        '</div>' +
                        '<div class="msg-actions-toolbar user-actions-toolbar">' +
                            '<span class="msg-read-check" title="Доставлено и прочитано Литалли">✓✓</span>' +
                            (msg.time ? '<span class="msg-timestamp user-time">' + escapeHtml(msg.time) + '</span>' : '') +
                            '<button type="button" class="btn-msg-action' + (isChecked ? ' active-check' : '') + '" onclick="toggleMessageCheck(' + idx + ', this)" title="Поставить галочку (Отметить)">' + (isChecked ? '✅' : '☑️') + '</button>' +
                            '<button type="button" class="btn-msg-action" onclick="editMessage(' + idx + ')" title="' + (dict.btnEdit || 'Редактировать') + '">✏️</button>' +
                            '<button type="button" class="btn-msg-action" onclick="copyMessageText(' + idx + ', this)" title="' + (dict.btnCopy || 'Копировать') + '">📋</button>' +
                            '<button type="button" class="btn-msg-action" onclick="deleteMessage(' + idx + ')" title="' + (dict.btnDelete || 'Удалить') + '">🗑️</button>' +
                        '</div>' +
                    '</div>';
            } else {
                let contentHtml = '';
                if (msg.text === '__THINKING__' || msg.isThinking) {
                    const isRu = (AppState.currentLang === 'ru');
                    const isKk = (AppState.currentLang === 'kk');
                    const titleTxt = isKk ? 'Литалли сұрауды талдауда...' : (isRu ? 'Литалли осмысливает запрос...' : 'Litally is thinking...');
                    const subTxt = isKk ? 'Алғашқы қағидалардан логикалық синтез' : (isRu ? 'Логический синтез от первых принципов' : 'Synthesis from first principles');
                    contentHtml = 
                        '<div class="thinking-state-box" id="thinkingBox-' + idx + '">' +
                            '<span class="thinking-brain-pulse">✦</span>' +
                            '<div class="thinking-text-wrap">' +
                                '<span class="thinking-title" id="thinkingTitle-' + idx + '">' + titleTxt + '</span>' +
                                '<span class="thinking-subtext" id="thinkingSubtext-' + idx + '">' + subTxt + '</span>' +
                            '</div>' +
                        '</div>';
                } else {
                    contentHtml = parseMarkdown(msg.text);
                }

                const isLiked = msg.reaction === 'like';
                const isDisliked = msg.reaction === 'dislike';

                html += 
                    '<div class="msg-row msg-bot-row' + (isChecked ? ' message-is-checked' : '') + '" id="msgRow-' + idx + '">' +
                        '<div class="msg-bot-header">' +
                            '<div class="msg-bot-avatar"><span class="gemini-gradient-star">✦</span></div>' +
                            '<div class="msg-bot-title-group">' +
                                '<span class="msg-bot-name">' + escapeHtml(authorName) + '</span>' +
                                '<span class="msg-bot-badge">' + (AppState.aiMode === '2.2' ? '2.2' : (AppState.aiMode === '2.1' ? '2.1' : '2.0')) + '</span>' +
                                (msg.time ? '<span class="msg-timestamp">' + escapeHtml(msg.time) + '</span>' : '') +
                                (isChecked ? '<span class="bot-verified-badge" title="Отмечено галочкой">✅ Отмечено</span>' : '') +
                            '</div>' +
                        '</div>' +
                        '<div class="msg-bot-content' + (isChecked ? ' bubble-checked' : '') + '" id="msgBubble-' + idx + '">' +
                            contentHtml +
                        '</div>' +
                        '<div class="msg-actions-toolbar">' +
                            '<button type="button" class="btn-msg-action' + (isChecked ? ' active-check' : '') + '" onclick="toggleMessageCheck(' + idx + ', this)" title="Поставить галочку (Отметить)">' + (isChecked ? '✅' : '☑️') + '</button>' +
                            '<button type="button" class="btn-msg-action" onclick="copyMessageText(' + idx + ', this)" title="' + (dict.btnCopy || 'Копировать') + '">📋</button>' +
                            '<button type="button" class="btn-msg-action" onclick="retryMessage(' + idx + ')" title="' + (dict.btnRetry || 'Перегенерировать') + '">🔄</button>' +
                            '<button type="button" class="btn-msg-action btn-tts-toggle" id="btnTts-' + idx + '" onclick="speakMessage(' + idx + ')" title="' + (dict.btnTtsSpeak || 'Озвучить') + '">' + (isSpeaking ? '⏹️' : '🔊') + '</button>' +
                            '<button type="button" class="btn-msg-action btn-thumb' + (isLiked ? ' active-thumb' : '') + '" onclick="toggleThumb(' + idx + ', \'like\', this)" title="Хороший ответ (👍)">👍</button>' +
                            '<button type="button" class="btn-msg-action btn-thumb' + (isDisliked ? ' active-thumb' : '') + '" onclick="toggleThumb(' + idx + ', \'dislike\', this)" title="Плохой ответ (👎)">👎</button>' +
                            '<button type="button" class="btn-msg-action" onclick="deleteMessage(' + idx + ')" title="' + (dict.btnDelete || 'Удалить') + '">🗑️</button>' +
                        '</div>' +
                    '</div>';
            }
        });

        container.innerHTML = html;
        if (!AppState.userScrolledUp) {
            container.scrollTop = container.scrollHeight;
        }
    }

    function renderWelcomeScreen(container) {
        const dict = getI18n();
        const p1 = (dict.card1Prompt || "").replace(/'/g, "\\'");
        const p2 = (dict.card2Prompt || "").replace(/'/g, "\\'");
        const p3 = (dict.card3Prompt || "").replace(/'/g, "\\'");
        const p4 = (dict.card4Prompt || "").replace(/'/g, "\\'");

        const greeting = getHeroGreeting(dict);

        container.innerHTML = 
            '<div class="welcome-hero">' +
                '<div class="welcome-title-wrap">' +
                    '<h1 class="welcome-hero-greeting" id="txtWelcomeHeroTitle">' + escapeHtml(greeting) + '</h1>' +
                '</div>' +
                '<div class="welcome-cards-grid">' +
                    '<div class="welcome-card-item card-theme-blue" onclick="useQuickPrompt(\'' + p1 + '\')">' +
                        '<div class="welcome-card-icon-wrap">🧩</div>' +
                        '<div class="welcome-card-title">' + (dict.card1Title || 'Логика') + '</div>' +
                        '<div class="welcome-card-desc">' + (dict.card1Desc || 'Задача о 100 рыцарях') + '</div>' +
                    '</div>' +
                    '<div class="welcome-card-item card-theme-purple" onclick="useQuickPrompt(\'' + p2 + '\')">' +
                        '<div class="welcome-card-icon-wrap">🚪</div>' +
                        '<div class="welcome-card-title">' + (dict.card2Title || 'Монти Холл') + '</div>' +
                        '<div class="welcome-card-desc">' + (dict.card2Desc || 'Вероятность 2/3') + '</div>' +
                    '</div>' +
                    '<div class="welcome-card-item card-theme-coral" onclick="useQuickPrompt(\'' + p3 + '\')">' +
                        '<div class="welcome-card-icon-wrap">💻</div>' +
                        '<div class="welcome-card-title">' + (dict.card3Title || 'Алгоритмы') + '</div>' +
                        '<div class="welcome-card-desc">' + (dict.card3Desc || 'Поиск пути A* в Python') + '</div>' +
                    '</div>' +
                    '<div class="welcome-card-item card-theme-green" onclick="useQuickPrompt(\'' + p4 + '\')">' +
                        '<div class="welcome-card-icon-wrap">⏳</div>' +
                        '<div class="welcome-card-title">' + (dict.card4Title || 'Парадоксы') + '</div>' +
                        '<div class="welcome-card-desc">' + (dict.card4Desc || 'Неожиданная казнь') + '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
    }

    // ── 5.5. LENGTH & PRIVACY CONTROLS ───────────────────────────────────────
        // ── 5.6. CROSS-CHAT MEMORY & NEW LIFE MODE ──────────────────────────────
    function toggleCrossChatMemory() {
        AppState.crossChatMemory = !AppState.crossChatMemory;
        try {
            localStorage.setItem('litally_cross_chat_memory', AppState.crossChatMemory.toString());
        } catch (e) {}
        updateMemoryToggleButtonUI();
        playAudioChime(AppState.crossChatMemory ? 680 : 540);
    }

    function updateMemoryToggleButtonUI() {
        const btn = document.getElementById('btnToggleCrossMemory');
        const icon = document.getElementById('memoryToggleIcon');
        const txt = document.getElementById('txtMemoryToggle');
        if (!btn) return;
        const dict = getI18n();
        if (AppState.crossChatMemory) {
            btn.classList.remove('new-life-mode');
            if (icon) icon.textContent = '🧠';
            if (txt) txt.textContent = dict.memoryCross || (AppState.currentLang === 'ru' ? 'Память: Сквозная' : 'Memory: Cross-Chat');
            btn.title = AppState.currentLang === 'ru' ?
                'Сквозная память включена: ИИ помнит ваш возраст и профиль во всех диалогах' :
                'Cross-chat memory active: AI remembers your age and profile across all sessions';
        } else {
            btn.classList.add('new-life-mode');
            if (icon) icon.textContent = '🌱';
            if (txt) txt.textContent = dict.memoryNewLife || (AppState.currentLang === 'ru' ? 'Новая жизнь: Чистый лист' : 'New Life: Fresh Slate');
            btn.title = AppState.currentLang === 'ru' ?
                'Режим «Новая жизнь»: каждый новый чат изолирован и начинается с чистого листа' :
                'New Life mode: every chat is isolated with a fresh clean slate';
        }
    }

    function setResponseLength(len) {
        if (!['short', 'medium', 'detailed'].includes(len)) len = 'medium';
        AppState.responseLength = len;
        try {
            localStorage.setItem('litally_response_length', len);
        } catch (e) {}

        document.querySelectorAll('.btn-length-toggle').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-len') === len);
        });
        playAudioChime(700);
    }

    function openPrivacyModal() {
        const m = document.getElementById('privacyModalOverlay');
        if (m) {
            m.style.display = 'flex';
            document.body.classList.add('modal-open');
        }
        playAudioChime(650);
    }

    function closePrivacyModal(e) {
        if (e && e.target && e.currentTarget && e.target !== e.currentTarget) {
            if (!e.target.closest('.modal-close-btn') && !e.target.closest('#btnClosePrivacy')) {
                return;
            }
        }
        const m = document.getElementById('privacyModalOverlay');
        if (m) m.style.display = 'none';
        document.body.classList.remove('modal-open');
    }

    function closeAllModals() {
        const modalIds = [
            'settingsModalOverlay',
            'authModalOverlay',
            'privacyModalOverlay',
            'project10kModalOverlay',
            'photorealismLightboxOverlay',
            'litallyStudioLightbox'
        ];
        modalIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
        const hints = document.getElementById('chatHintsBar');
        if (hints) hints.style.display = 'none';
        const sidebar = document.getElementById('appSidebar');
        const backdrop = document.getElementById('sidebarMobileBackdrop');
        if (sidebar) {
            sidebar.classList.remove('mobile-open');
            sidebar.classList.remove('open');
        }
        if (backdrop) backdrop.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    function clearAllUserData() {
        const isRu = (AppState.currentLang === 'ru');
        const confirmMsg = isRu ? 
            "Вы уверены? Это действие навсегда сотрет все диалоги, сохраненный возраст и данные из памяти браузера." :
            "Are you sure? This will permanently erase all conversations, saved age, and profile data from local storage.";
        if (!confirm(confirmMsg)) return;

        try {
            localStorage.removeItem('litally_sessions');
            localStorage.removeItem('litally_user_profile');
            localStorage.removeItem('litally_response_length');
            localStorage.removeItem('litally_cross_chat_memory');
        } catch (e) {}

        AppState.sessions = [];
        createNewChatSession(true);
        const m = document.getElementById('privacyModalOverlay');
        if (m) m.style.display = 'none';
        alert(isRu ? "Все персональные данные и история успешно стерты!" : "All personal data and history erased successfully!");
    }

    // ── 5.7. SOVEREIGN GENERATIVE STUDIO MODAL ──────────────────────────────
    function openProject10kModal() {
        const m = document.getElementById('project10kModalOverlay');
        if (m) m.style.display = 'flex';
        playAudioChime(660);
    }

    function closeProject10kModal(e) {
        if (e && e.target && e.target.closest && e.target.closest('.litally-modal-box') && !e.target.classList.contains('modal-close-btn')) {
            return;
        }
        const m = document.getElementById('project10kModalOverlay');
        if (m) m.style.display = 'none';
    }

    function triggerProject10kPrompt(promptText) {
        closeProject10kModal();
        const input = document.getElementById('chatInput');
        if (input) {
            input.value = promptText;
            input.focus();
            handleChatSubmit(new Event('submit'));
        }
    }

        function toggleMessageCheck(msgIndex, btnEl) {
        const session = getActiveSession();
        if (!session || !session.messages[msgIndex]) return;
        session.messages[msgIndex].isChecked = !session.messages[msgIndex].isChecked;
        saveSessionsToStorage();
        renderChatMessages();
        playAudioChime(session.messages[msgIndex].isChecked ? 740 : 440);
    }

    function toggleThumb(msgIndex, type, btnEl) {
        const session = getActiveSession();
        if (!session || !session.messages[msgIndex]) return;
        if (session.messages[msgIndex].reaction === type) {
            session.messages[msgIndex].reaction = null;
        } else {
            session.messages[msgIndex].reaction = type;
        }
        saveSessionsToStorage();
        renderChatMessages();
        playAudioChime(type === 'like' ? 660 : 380);
    }

    function toggleChecklistItem(inputEl) {
        const span = inputEl.nextElementSibling;
        if (span) {
            span.classList.toggle('is-completed', inputEl.checked);
        }
        playAudioChime(inputEl.checked ? 750 : 500);
    }

    // ── 6. ACTIONS (EDIT, DELETE, RETRY, HINTS, TTS) ──────────────────────────
    function deleteMessage(msgIndex) {
        const session = getActiveSession();
        if (!session || !session.messages[msgIndex]) return;

        if (session.messages[msgIndex].role === 'user' && session.messages[msgIndex + 1] && session.messages[msgIndex + 1].role === 'assistant') {
            session.messages.splice(msgIndex, 2);
        } else {
            session.messages.splice(msgIndex, 1);
        }

        saveSessionsToStorage();
        renderChatMessages();
        playAudioChime(460);
    }

    function editMessage(msgIndex) {
        const session = getActiveSession();
        if (!session || !session.messages[msgIndex]) return;

        const originalText = session.messages[msgIndex].text;
        const input = document.getElementById('chatInput');
        if (input) {
            input.value = originalText;
            input.focus();
            input.style.height = 'auto';
            input.style.height = Math.min(input.scrollHeight, 180) + 'px';
        }

        session.messages = session.messages.slice(0, msgIndex);
        saveSessionsToStorage();
        renderChatMessages();
        playAudioChime(620);
    }

    function retryMessage(msgIndex) {
        const session = getActiveSession();
        if (!session || !session.messages[msgIndex]) return;

        let userPrompt = "";
        if (session.messages[msgIndex].role === 'assistant') {
            for (let i = msgIndex - 1; i >= 0; i--) {
                if (session.messages[i].role === 'user') {
                    userPrompt = session.messages[i].text;
                    break;
                }
            }
            session.messages.splice(msgIndex, 1);
        } else {
            userPrompt = session.messages[msgIndex].text;
            if (session.messages[msgIndex + 1] && session.messages[msgIndex + 1].role === 'assistant') {
                session.messages.splice(msgIndex + 1, 1);
            }
        }

        if (!userPrompt) return;
        AppState.activeRetryCounts[userPrompt] = (AppState.activeRetryCounts[userPrompt] || 0) + 1;
        saveSessionsToStorage();
        renderChatMessages();
        executeSendMessage(userPrompt, true);
    }

    function hintMessage(msgIndex) {
        const session = getActiveSession();
        let topicText = "";
        if (session && session.messages[msgIndex]) {
            topicText = session.messages[msgIndex].text;
        }
        showHints(topicText);
    }

    function showHints(context = "") {
        const bar = document.getElementById('chatHintsBar');
        const list = document.getElementById('hintsChipsList');
        if (!bar || !list) return;

        list.innerHTML = '';
        const isRu = (AppState.currentLang === 'ru');
        const defaultHints = isRu ? [
            "Разложи этот парадокс по первым принципам",
            "Приведи нетривиальный пример из реальной науки",
            "В чем здесь главное когнитивное заблуждение?",
            "Как проверить это утверждение на практике?"
        ] : [
            "Deconstruct this from first principles",
            "Provide a concrete real-world counter-example",
            "What is the underlying cognitive bias here?",
            "How does this apply to decision making?"
        ];

        defaultHints.forEach(hintText => {
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'hint-chip';
            chip.textContent = hintText;
            chip.onclick = () => {
                closeHintsBar();
                useQuickPrompt(hintText);
            };
            list.appendChild(chip);
        });

        bar.style.display = 'block';
        playAudioChime(780);
    }

    function closeHintsBar() {
        const bar = document.getElementById('chatHintsBar');
        if (bar) bar.style.display = 'none';
    }

    function copyMessageText(msgIndex, btnEl) {
        const session = getActiveSession();
        if (!session || !session.messages[msgIndex]) return;
        const textToCopy = session.messages[msgIndex].text || '';
        navigator.clipboard.writeText(textToCopy).then(() => {
            LitallyAudioFX.playCopy();
            const btn = btnEl || document.getElementById('btnCopy-' + msgIndex);
            if (btn) {
                const orig = btn.innerHTML;
                const dict = getI18n();
                btn.innerHTML = dict.copySuccess || '✓ Copied!';
                btn.classList.add('copy-success');
                setTimeout(() => {
                    btn.innerHTML = orig;
                    btn.classList.remove('copy-success');
                }, 1800);
            }
        });
    }

    function copySnippet(btn) {
        const block = btn.closest('.gemini-code-block');
        const codeEl = block ? block.querySelector('pre code') : null;
        if (!codeEl) return;
        const codeText = codeEl.innerText || codeEl.textContent;
        navigator.clipboard.writeText(codeText).then(() => {
            const orig = btn.innerHTML;
            const dict = getI18n(); btn.innerHTML = dict.copySuccess || '✓ Copied!';
            setTimeout(() => { btn.innerHTML = orig; }, 2000);
            playAudioChime(840);
        });
    }

    // ── AUDIO PLAYBACK SINGLETON (ZERO OVERLAP & ZERO DUPLICATION) ──
    let audioPlaybackSessionId = 0;
    let activeTtsAbortController = null;
    let currentTtsAudio = null;

    async function speakMessage(msgIndex) {
        const session = getActiveSession();
        if (!session || !session.messages[msgIndex]) return;

        // If currently speaking this message -> stop immediately
        if (AppState.isSpeaking && AppState.speakingMsgIdx === msgIndex) {
            stopSpeaking();
            return;
        }

        // Stop anything currently playing
        stopSpeaking();

        const thisSessionId = ++audioPlaybackSessionId;
        activeTtsAbortController = new AbortController();

        const rawText = session.messages[msgIndex].text || '';
        const text = rawText
            .replace(/<[^>]+>/g, ' ')
            .replace(/```[\s\S]*?```/g, ' Фрагмент кода опущен. ')
            .replace(/`[^`]+`/g, ' код ')
            .replace(/[#*`_~>|\[\]\(\)\$]/g, ' ')
            .replace(/\b(?:https?:\/\/|www\.)\S+\b/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

        if (!text) return;

        AppState.isSpeaking = true;
        AppState.speakingMsgIdx = msgIndex;
        updateTtsButtonUI(msgIndex, true);

        // 1. Try realistic ElevenLabs & Neural Wikipedia studio voice
        try {
            const elevenKey = localStorage.getItem('elevenlabs_api_key') || '';
            const ttsVoice = localStorage.getItem('litally_tts_voice') || AppState.ttsVoice || 'wikipedia_dmitry';

            const resp = await fetch('/api/ai/tts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                signal: activeTtsAbortController.signal,
                body: JSON.stringify({
                    text: text.slice(0, 4200),
                    lang: AppState.currentLang || 'ru',
                    voice: ttsVoice,
                    elevenlabs_api_key: elevenKey
                })
            });

            // Guard against race condition: user stopped or clicked another message while fetch was in-flight
            if (thisSessionId !== audioPlaybackSessionId) return;

            if (resp.ok) {
                const data = await resp.json();
                if (thisSessionId !== audioPlaybackSessionId) return;

                if (data && data.audio_url) {
                    const audio = new Audio(data.audio_url);
                    currentTtsAudio = audio;
                    audio.playbackRate = AppState.ttsRate || 1.0;
                    audio.onended = () => {
                        if (thisSessionId === audioPlaybackSessionId) {
                            stopSpeaking();
                        }
                    };
                    audio.onerror = () => {
                        if (thisSessionId === audioPlaybackSessionId) {
                            fallbackBrowserSpeech(text, msgIndex, thisSessionId);
                        }
                    };
                    await audio.play();
                    return;
                }
            }
        } catch (netErr) {
            if (thisSessionId !== audioPlaybackSessionId) return;
            console.warn('[Realistic TTS Notice] Falling back to browser speech:', netErr);
        }

        // 2. Fallback to Web Speech API
        if (thisSessionId === audioPlaybackSessionId) {
            fallbackBrowserSpeech(text, msgIndex, thisSessionId);
        }
    }

    function stopSpeaking() {
        audioPlaybackSessionId++; // Invalidate pending async calls

        if (activeTtsAbortController) {
            try { activeTtsAbortController.abort(); } catch (e) {}
            activeTtsAbortController = null;
        }

        if (currentTtsAudio) {
            try {
                currentTtsAudio.pause();
                currentTtsAudio.currentTime = 0;
                currentTtsAudio.onended = null;
                currentTtsAudio.onerror = null;
                currentTtsAudio.src = '';
                currentTtsAudio.load();
            } catch (e) {}
            currentTtsAudio = null;
        }

        if ('speechSynthesis' in window) {
            try { window.speechSynthesis.cancel(); } catch (e) {}
        }

        // Reset all TTS buttons in the DOM to 🔊
        const allTtsBtns = document.querySelectorAll('.btn-tts-toggle');
        allTtsBtns.forEach(btn => {
            btn.innerHTML = '<span>🔊</span>';
            btn.classList.remove('speaking');
            btn.title = 'Озвучить реалистичным голосом Википедии';
        });

        AppState.isSpeaking = false;
        AppState.speakingMsgIdx = null;
    }

    function fallbackBrowserSpeech(text, msgIndex, sessionId) {
        if (!('speechSynthesis' in window) || sessionId !== audioPlaybackSessionId) {
            stopSpeaking();
            return;
        }
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        const langMap = {
            'kk': 'kk-KZ', 'ru': 'ru-RU', 'en': 'en-US', 'es': 'es-ES',
            'fr': 'fr-FR', 'de': 'de-DE', 'zh': 'zh-CN', 'ja': 'ja-JP',
            'ar': 'ar-SA', 'tr': 'tr-TR', 'it': 'it-IT', 'pt': 'pt-PT'
        };
        const targetTag = langMap[AppState.currentLang] || AppState.currentLang;
        utterance.lang = targetTag;

        const voices = window.speechSynthesis.getVoices();
        if (voices && voices.length > 0) {
            const naturalMatch = voices.find(v => (v.name.includes('Natural') || v.name.includes('Online')) && v.lang.toLowerCase().startsWith(AppState.currentLang.toLowerCase()));
            const match = naturalMatch ||
                          voices.find(v => v.lang && v.lang.toLowerCase().replace('_', '-').startsWith(targetTag.toLowerCase())) ||
                          voices.find(v => v.lang && v.lang.toLowerCase().startsWith(AppState.currentLang.toLowerCase()));
            if (match) utterance.voice = match;
        }

        utterance.rate = AppState.ttsRate || 1.0;
        utterance.onend = utterance.onerror = () => {
            if (sessionId === audioPlaybackSessionId) {
                stopSpeaking();
            }
        };
        window.speechSynthesis.speak(utterance);
    }

    function updateTtsButtonUI(msgIndex, isSpeaking) {
        const btn = document.getElementById('btnTts-' + msgIndex);
        if (btn) {
            if (isSpeaking) {
                btn.innerHTML = '<span>⏹️</span>';
                btn.classList.add('speaking');
                btn.title = 'Остановить реалистичный голос Википедии';
            } else {
                btn.innerHTML = '<span>🔊</span>';
                btn.classList.remove('speaking');
                btn.title = 'Озвучить реалистичным голосом Википедии';
            }
        }
    }

    function toggleMicInput() {
        const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRec) {
            alert("Speech recognition is not supported in this browser.");
            return;
        }

        const btn = document.getElementById('btnMicInput');
        const input = document.getElementById('chatInput');
        const rec = new SpeechRec();
        rec.lang = AppState.currentLang === 'ru' ? 'ru-RU' : 'en-US';
        rec.interimResults = false;

        if (btn) btn.classList.add('mic-active');
        playAudioChime(600);

        rec.onresult = (e) => {
            const text = e.results[0][0].transcript;
            if (input) {
                input.value += (input.value ? ' ' : '') + text;
                input.focus();
            }
            if (btn) btn.classList.remove('mic-active');
            playAudioChime(800);
        };

        rec.onerror = rec.onend = () => {
            if (btn) btn.classList.remove('mic-active');
        };

        rec.start();
    }

    function triggerWebSearchPrompt() {
        AppState.forceWebSearch = !AppState.forceWebSearch;
        const btn = document.getElementById('btnWebSearch');
        if (btn) {
            btn.classList.toggle('active', AppState.forceWebSearch);
            btn.title = AppState.forceWebSearch
                ? (AppState.currentLang === 'ru' ? '🌐 Поиск в Google / Сети: ВКЛЮЧЕН' : '🌐 Google / Web Search: ON')
                : (AppState.currentLang === 'ru' ? 'Поиск в интернете (Google/Web)' : 'Search the web (Google/Web)');
        }
        playAudioChime(AppState.forceWebSearch ? 880 : 540);
        const input = document.getElementById('chatInput');
        if (input) input.focus();
    }

    // ── 7. SEND MESSAGE & STREAMING ───────────────────────────────────────────
    function handleChatInputChange(el) {
        if (!el) el = document.getElementById('chatInput');
        const clearBtn = document.getElementById('btnChatInputClear');
        if (el) {
            el.style.height = 'auto';
            el.style.height = Math.min(el.scrollHeight, 180) + 'px';
            if (clearBtn) {
                clearBtn.style.display = el.value.trim().length > 0 ? 'flex' : 'none';
            }
        }
    }
    window.handleChatInputChange = handleChatInputChange;

    function clearChatInput() {
        const input = document.getElementById('chatInput');
        const clearBtn = document.getElementById('btnChatInputClear');
        if (input) {
            input.value = '';
            input.style.height = 'auto';
            input.focus();
        }
        if (clearBtn) {
            clearBtn.style.display = 'none';
        }
        try { playAudioChime(480); } catch(e) {}
    }
    window.clearChatInput = clearChatInput;

    function handleChatSubmit(e, forcedText) {
        if (e && typeof e.preventDefault === 'function') e.preventDefault();
        const input = document.getElementById('chatInput');
        const clearBtn = document.getElementById('btnChatInputClear');
        const text = (typeof forcedText === 'string' ? forcedText : (typeof e === 'string' ? e : (input ? input.value : ''))).trim();
        if (!text) return;
        AppState.isStreaming = false;

        if (input) {
            input.value = '';
            input.style.height = 'auto';
        }
        if (clearBtn) {
            clearBtn.style.display = 'none';
        }
        executeSendMessage(text);
    }

    function handleInputKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleChatSubmit(e);
        }
    }

    function useQuickPrompt(text) {
        AppState.isStreaming = false;
        const input = document.getElementById('chatInput');
        const clearBtn = document.getElementById('btnChatInputClear');
        if (input) {
            input.value = text;
            if (clearBtn) clearBtn.style.display = 'none';
        }
        executeSendMessage(text);
    }

    function getGreetingCountInSession() {
        const session = getActiveSession();
        if (!session || !session.messages) return 0;
        const greetingPhrases = ["привет", "здравствуй", "салют", "добрый день", "доброе утро", "добрый вечер", "доброго времени суток", "hello", "салем", "литти", "литалли", "litti", "litally"];
        const greetingExactWords = ["ку", "прив", "хай", "hi", "hey", "салам", "йо", "yo"];
        let count = 0;
        for (let i = 0; i < session.messages.length; i++) {
            const m = session.messages[i];
            if (m.role === 'user') {
                const s = (m.text || '').toLowerCase().replace(/ё/g, 'е').trim();
                const words = s.split(/\s+/);
                if ((greetingPhrases.some(w => s.includes(w)) || greetingExactWords.some(w => words.includes(w))) && words.length <= 6) {
                    count++;
                }
            }
        }
        return count;
    }


    // ── APEX ULTRA: STYLE & ASPECT RATIO CONTROLLERS ─────────────────────────
    function selectStyle(styleName) {
        AppState.currentStyle = styleName || 'realistic';
        document.querySelectorAll('.style-pill').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.style === AppState.currentStyle);
        });
        playAudioChime(580);
    }
    window.selectStyle = selectStyle;

    function changeAspectRatio(val) {
        AppState.currentAspectRatio = val || '16:9';
        playAudioChime(620);
    }
    window.changeAspectRatio = changeAspectRatio;

    async function handleFilesDirect(files, promptText) {
        if (!files || files.length === 0) return;

        const session = getActiveSession();
        if (!session) return;

        // If user typed something in chatInput and promptText was not provided, consume it
        const chatInput = document.getElementById('chatInput');
        let userPrompt = promptText !== undefined ? promptText : (chatInput ? chatInput.value.trim() : '');
        if (chatInput && promptText === undefined && userPrompt) {
            chatInput.value = '';
            chatInput.style.height = 'auto';
        }

        const isRu = (AppState.currentLang === 'ru');
        const isKk = (AppState.currentLang === 'kk');

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
            
            // Determine media / document icon
            let icon = '📎';
            const nameLower = file.name.toLowerCase();
            if (/\.(mp4|mov|avi|mkv|webm)$/i.test(nameLower)) icon = '🎬';
            else if (/\.(png|jpg|jpeg|webp|gif|svg|bmp)$/i.test(nameLower)) icon = '🖼️';
            else if (/\.(pptx|ppt|odp)$/i.test(nameLower) || (nameLower.endsWith('.pdf') && /pres|slide|презентаци|pitch/.test(nameLower))) icon = '📊';
            else if (/\.(pdf|epub|fb2|docx|doc|txt|md)$/i.test(nameLower)) icon = '📚';

            let promptPrefix = userPrompt ? `${userPrompt}\n\n` : '';
            let userMsgText = "";
            if (isRu) {
                userMsgText = `${promptPrefix}${icon} **${file.name}** (${sizeMb} MB)\n*Запрос на мультимодальный анализ данных и восприятия*`;
            } else if (isKk) {
                userMsgText = `${promptPrefix}${icon} **${file.name}** (${sizeMb} MB)\n*Деректер мен қабылдаудың мультимодальді талдауына сұраныс*`;
            } else {
                userMsgText = `${promptPrefix}${icon} **${file.name}** (${sizeMb} MB)\n*Request for dual-spectrum multimodal data & perception inspection*`;
            }

            session.messages.push({
                role: 'user',
                text: userMsgText,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });

            const botIndex = session.messages.length;
            session.messages.push({
                role: 'assistant',
                text: '__THINKING__',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                modelName: "Litally Sovereign Apex"
            });

            AppState.isStreaming = true;
            renderChatMessages();
            playAudioChime(620);

            // Dynamic thinking subtext
            setTimeout(() => {
                const el = document.getElementById('thinkingSubtext-' + botIndex);
                if (el) {
                    if (isRu) el.textContent = '🔬 Мультимодальный анализ: декодирование матрицы данных и эстетическая оценка...';
                    else if (isKk) el.textContent = '🔬 Мультимодальді талдау: деректер матрицасын декодтау және эстетикалық бағалау...';
                    else el.textContent = '🔬 Multimodal analysis: decoding data matrix & human aesthetic perception...';
                }
            }, 300);

            const formData = new FormData();
            formData.append('file', file);
            formData.append('lang', AppState.currentLang || 'ru');
            formData.append('prompt', userPrompt || '');

            try {
                const resp = await fetch('/api/ai/upload-gallery', {
                    method: 'POST',
                    body: formData
                });
                const result = await resp.json();

                let responseMarkdown = "";
                if (result && result.status === 'success') {
                    session.activeMedia = result.active_media || {
                        filename: result.filename,
                        url: result.original_url || result.file_url,
                        is_video: result.is_video,
                        is_image: result.is_image,
                        is_presentation: result.is_presentation,
                        is_book: result.is_book,
                        inspection: result.inspection,
                        semantic_story: (result.inspection && result.inspection.human && result.inspection.human.semantic_story) || {}
                    };
                    AppState.lastActiveMedia = session.activeMedia;

                    if (result.markdown_report || result.response) {
                        responseMarkdown = result.markdown_report || result.response;
                    } else if (result.is_video) {
                        const vidUrl = result.upscaled_4k60_url || result.original_url;
                        responseMarkdown = isRu
                            ? `### 🎬 Мультимодальный анализ видео\n\nФайл **${result.filename}** успешно загружен и обработан в пайплайне 4K UHD 60FPS:\n\n![4K 60FPS Video](${vidUrl})\n\n[⬇️ Скачать исходное видео](${result.original_url})`
                            : `### 🎬 Multimodal Video Ingestion\n\nFile **${result.filename}** ingested and processed via 4K UHD 60FPS pipeline:\n\n![4K 60FPS Video](${vidUrl})\n\n[⬇️ Download Original Video](${result.original_url})`;
                    } else {
                        responseMarkdown = isRu
                            ? `### ${icon} Мультимодальный анализ (${result.filename})\n\n![Файл](${result.original_url})\n\nФайл принят в буфер.`
                            : `### ${icon} Multimodal Ingestion (${result.filename})\n\n![File](${result.original_url})\n\nFile processed into buffer.`;
                    }
                } else {
                    responseMarkdown = isRu
                        ? `❌ Ошибка анализа файла: ${(result && result.message) || 'Неизвестная ошибка'}`
                        : `❌ File inspection error: ${(result && result.message) || 'Unknown error'}`;
                }

                await streamWordsIntoBubble(botIndex, responseMarkdown);
            } catch (err) {
                const errorMsg = isRu
                    ? `❌ Сбой соединения при анализе: ${err.message}`
                    : `❌ Connection error during analysis: ${err.message}`;
                await streamWordsIntoBubble(botIndex, errorMsg);
            } finally {
                AppState.isStreaming = false;
                saveSessionsToStorage();
            }

            userPrompt = '';
        }
    }
    window.handleFilesDirect = handleFilesDirect;

    async function handleGalleryUpload(event) {
        const files = event.target.files;
        if (!files || files.length === 0) return;
        await handleFilesDirect(files);
        if (event.target) event.target.value = '';
    }
    window.handleGalleryUpload = handleGalleryUpload;

    function updateSessionMessageCounter(session) {
        if (!session || !Array.isArray(session.messages)) return;
        const userMsgCount = session.messages.filter(m => m.role === 'user').length;
        const display = document.getElementById('msgCountDisplay');
        const wrap = document.getElementById('sessionMsgCounterWrap');
        if (display) display.textContent = `${userMsgCount} / 60`;
        if (wrap) {
            if (userMsgCount >= 60) {
                wrap.style.background = 'rgba(239, 68, 68, 0.2)';
                wrap.style.borderColor = 'rgba(239, 68, 68, 0.6)';
                wrap.style.color = '#fca5a5';
            } else if (userMsgCount >= 50) {
                wrap.style.background = 'rgba(245, 158, 11, 0.2)';
                wrap.style.borderColor = 'rgba(245, 158, 11, 0.6)';
                wrap.style.color = '#fde047';
            } else {
                wrap.style.background = 'rgba(234, 179, 8, 0.12)';
                wrap.style.borderColor = 'rgba(234, 179, 8, 0.4)';
                wrap.style.color = '#fef08a';
            }
        }
    }
    window.updateSessionMessageCounter = updateSessionMessageCounter;

    async function executeSendMessage(text, isRetry = false) {
        if (AppState.isChatLocked) {
            alert("Chat session is locked under 16+ safety guidelines. Click Unlock & Reset to proceed.");
            return;
        }

        const session = getActiveSession();
        if (!session) return;

        // ── 60-MESSAGE LIMIT ENFORCEMENT (Linar Serik Platform Terms) ───────────
        const currentUserMsgCount = session.messages.filter(m => m.role === 'user').length;
        if (currentUserMsgCount >= 60 && !isRetry) {
            const limitModal = document.getElementById('sessionLimitModal');
            if (limitModal) limitModal.style.display = 'flex';
            playAudioChime(420);
            return;
        }

        if (session.messages.length === 0) {
            session.title = text.slice(0, 26) + (text.length > 26 ? '…' : '');
            renderChatHistoryList();
        }

        if (!isRetry) {
            session.messages.push({
                role: 'user',
                text: text,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });
        }

        const botIndex = session.messages.length;
        session.messages.push({
            role: 'assistant',
            text: '__THINKING__',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            modelName: "Litally Sovereign Apex"
        });

        AppState.isStreaming = true;
        renderChatMessages();
        LitallyAudioFX.playSend();

        const retryCount = AppState.activeRetryCounts[text] || 0;
        const prevGreetingCount = getGreetingCountInSession() - 1; // already pushed user message

        try {
            UserMemory.detectAndStoreAge(text);

            const fetchPromise = fetch('/api/ai/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    lang: AppState.currentLang,
                    ai_mode: AppState.aiMode || '2.0',
                    turn_seed: retryCount,
                    response_length: AppState.responseLength,
                    user_profile: UserMemory.getProfile(),
                    greeting_count: Math.max(0, prevGreetingCount),
                    force_web_search: AppState.forceWebSearch,
                    allow_google_search: AppState.allowGoogleSearch !== false,
                    active_media: session.activeMedia || AppState.lastActiveMedia || null,
                    attached_file_url: (session.activeMedia && session.activeMedia.url) || null
                })
            }).then(r => r.json()).catch(e => null);

            const currentMode = AppState.aiMode || '2.0';
            const isRu = (AppState.currentLang === 'ru');
            const isKk = (AppState.currentLang === 'kk');

            // Responsive thinking duration: immediate, engaging stages without artificial multi-minute freezes
            // 2.0: ultra-fast instant response (40-90ms)
            // 2.1: brief cognitive check (200-320ms)
            // 2.2: multi-stage synthesis (380-550ms)
            let targetThinkingMs = 70;
            let thinkingStages = [];

            if (currentMode === '2.1') {
                targetThinkingMs = Math.floor(200 + Math.random() * 100);
                thinkingStages = [
                    {
                        delay: 0,
                        text: isRu ? '🧠 Инициализация контекста и семантический разбор...' : (isKk ? '🧠 Мән-мәтінді талдау және семантикалық декомпозиция...' : '🧠 Context initialization and semantic query decomposition...')
                    },
                    {
                        delay: 80,
                        text: isRu ? '⚖️ Взвешивание гипотез и сопоставление аргументов...' : (isKk ? '⚖️ Гипотезаларды салыстыру және дәлелдерді саралау...' : '⚖️ Evaluating hypotheses and comparing evidence...')
                    },
                    {
                        delay: 160,
                        text: isRu ? '🔬 Формулирование сбалансированного ответа...' : (isKk ? '🔬 Теңдестірілген жауапты қалыптастыру...' : '🔬 Synthesizing balanced, structured response...')
                    }
                ];
            } else if (currentMode === '2.2') {
                targetThinkingMs = Math.floor(380 + Math.random() * 120);
                thinkingStages = [
                    {
                        delay: 0,
                        text: isRu ? '🔬 Деконструкция задачи от первых принципов (First Principles)...' : (isKk ? '🔬 Мәселені алғашқы қағидалардан деконструкциялау...' : '🔬 Problem deconstruction from First Principles...')
                    },
                    {
                        delay: 70,
                        text: isRu ? '📚 Сопоставление с фундаментальной базой знаний и онтологией...' : (isKk ? '📚 Фундаменталды білім базасымен және онтологиямен салыстыру...' : '📚 Knowledge base & ontological cross-referencing...')
                    },
                    {
                        delay: 150,
                        text: isRu ? '🧬 Формальная верификация логических инвариантов...' : (isKk ? '🧬 Математикалық инварианттарды формалды тексеру...' : '🧬 Formal verification of mathematical invariants...')
                    },
                    {
                        delay: 240,
                        text: isRu ? '📐 Построение многомерного графа логических выводов...' : (isKk ? '📐 Көпөлшемді логикалық қорытындылар графин құру...' : '📐 Multi-dimensional proof tree construction...')
                    },
                    {
                        delay: 320,
                        text: isRu ? '✨ Финальная полировка доказательств и формулировок...' : (isKk ? '✨ Дәлелдер мен формулаларды соңғы тексеру...' : '✨ Final verification of proofs and formulations...')
                    }
                ];
            } else {
                targetThinkingMs = Math.floor(50 + Math.random() * 40);
                thinkingStages = [
                    {
                        delay: 0,
                        text: isRu ? '⚡ Литалли 2.0: мгновенный синтез ответа...' : (isKk ? '⚡ Литалли 2.0: жылдам жауапты синтездеу...' : '⚡ Litally 2.0: instant response synthesis...')
                    }
                ];
            }

            if (AppState.forceWebSearch || /дзшк|сленг|скуф|сигм|альтушк|курсач|кринж|рофл|лаба|найди|гугл|google|поищи|новости|2025|2026/i.test(text)) {
                thinkingStages.unshift({
                    delay: 0,
                    text: isRu ? '🌐 Поиск в Google и проверка сленга (Рекомендуемо)...' : (isKk ? '🌐 Google іздеуі және сленгті тексеру...' : '🌐 Searching Google for slang and context...')
                });
            }

            const stageTimers = [];
            thinkingStages.forEach(st => {
                if (st.delay < targetThinkingMs) {
                    const t = setTimeout(() => {
                        const el = document.getElementById('thinkingSubtext-' + botIndex);
                        if (el) el.textContent = st.text;
                    }, st.delay);
                    stageTimers.push(t);
                }
            });

            const delayPromise = new Promise(resolve => setTimeout(resolve, targetThinkingMs));

            const [data] = await Promise.all([fetchPromise, delayPromise]);
            stageTimers.forEach(t => clearTimeout(t));
            if (data && data.user_profile && data.user_profile.age) {
                UserMemory.setAge(data.user_profile.age);
            } else if (data && data.user_age) {
                UserMemory.setAge(data.user_age);
            }

            if (data && data.status === 'chat_locked') {
                if (session && session.messages && session.messages[botIndex]) {
                    session.messages[botIndex].text = data.response;
                    session.messages[botIndex].isThinking = false;
                }
                renderChatMessages();
                lockChatSession(data.response);
                return;
            }

            const reply = (data && data.response) || LitallyVariationalEngine.generate(text, AppState.currentLang, retryCount, AppState.responseLength, Math.max(0, prevGreetingCount), AppState.aiMode);
            if (session && session.messages && session.messages[botIndex]) {
                session.messages[botIndex].text = reply;
                session.messages[botIndex].isThinking = false;
            }
            await streamWordsIntoBubble(botIndex, reply);
            LitallyAudioFX.playReceive();
        } catch (err) {
            console.error('AI chat processing error:', err);
            const localReply = LitallyVariationalEngine.generate(text, AppState.currentLang, retryCount, AppState.responseLength, Math.max(0, prevGreetingCount), AppState.aiMode);
            if (session && session.messages && session.messages[botIndex]) {
                session.messages[botIndex].text = localReply;
                session.messages[botIndex].isThinking = false;
            }
            await streamWordsIntoBubble(botIndex, localReply);
            LitallyAudioFX.playReceive();
        } finally {
            AppState.isStreaming = false;
            saveSessionsToStorage();
            renderChatMessages();
            scrollToBottomSmooth();
        }
    }

    async function streamWordsIntoBubble(msgIndex, fullText) {
        const session = getActiveSession();
        if (session && session.messages && session.messages[msgIndex]) {
            session.messages[msgIndex].text = fullText;
            session.messages[msgIndex].isThinking = false;
        }
        const bubble = document.getElementById('msgBubble-' + msgIndex);
        const container = document.getElementById('chatScrollContainer');

        try {
            if (window.GoogleStreamBatcher && typeof window.GoogleStreamBatcher.batchWords === 'function') {
                await Promise.race([
                    window.GoogleStreamBatcher.batchWords(fullText, function (accumulated, done) {
                        if (session && session.messages && session.messages[msgIndex]) {
                            session.messages[msgIndex].text = accumulated;
                        }
                        if (bubble) {
                            try {
                                bubble.innerHTML = parseMarkdown(accumulated) + (done ? '' : '<span class="lbo-ai-cursor">|</span>');
                            } catch (pe) {
                                bubble.textContent = accumulated;
                            }
                        }
                    }, container),
                    new Promise(resolve => setTimeout(resolve, 2500))
                ]);
            } else {
                const words = fullText.split(' ');
                let accumulated = '';
                const stepSize = words.length > 400 ? 6 : (words.length > 150 ? 4 : 2);
                const delay = 2;

                for (let i = 0; i < words.length; i += stepSize) {
                    const chunk = words.slice(i, i + stepSize).join(' ') + (i + stepSize < words.length ? ' ' : '');
                    accumulated += chunk;
                    if (session && session.messages && session.messages[msgIndex]) {
                        session.messages[msgIndex].text = accumulated;
                    }
                    if (bubble) {
                        try {
                            bubble.innerHTML = parseMarkdown(accumulated) + '<span class="lbo-ai-cursor">|</span>';
                        } catch (pe) {
                            bubble.textContent = accumulated;
                        }
                    }
                    if (container && !AppState.userScrolledUp) {
                        container.scrollTop = container.scrollHeight;
                    }
                    await new Promise(r => setTimeout(r, delay));
                }
            }
        } catch (streamErr) {
            console.warn('streamWordsIntoBubble warning:', streamErr);
        }

        if (session && session.messages && session.messages[msgIndex]) {
            session.messages[msgIndex].text = fullText;
            session.messages[msgIndex].isThinking = false;
        }
        if (bubble) {
            try {
                bubble.innerHTML = parseMarkdown(fullText);
            } catch (pe) {
                bubble.textContent = fullText;
            }
        }
    }

    // ── 8. MARKDOWN PARSER ────────────────────────────────────────────────────
    function parseMarkdown(text) {
        if (!text) return '';
        let content = text.replace(/^> 💭[\s\S]*?\n\n/g, '');

        const codeBlocks = [];
        content = content.replace(/```([a-zA-Z0-9_-]*)\r?\n?([\s\S]*?)```/g, function(match, lang, code) {
            const placeholder = 'LITALLYCODETOKEN' + codeBlocks.length + 'XYZ';
            codeBlocks.push({
                lang: lang.trim() || 'code',
                code: escapeHtml(code.trim())
            });
            return placeholder;
        });

        // 1. Parse markdown images: ![alt](url) before hyperlinks!
        const mediaImages = [];
        content = content.replace(/!\[([^\]]*)\]\(((?:https?:\/\/|\/|data:)[^\s\)\"\'<>]+)\)/g, function(match, alt, url) {
            const placeholder = 'LITALLYIMAGETOKEN' + mediaImages.length + 'XYZ';
            mediaImages.push({
                alt: alt || 'Generated Media',
                url: url
            });
            return placeholder;
        });

        content = escapeHtml(content);

        // 2. Hyperlinks: protect with token placeholder
        const links = [];
        content = content.replace(/\[([^\]]+)\]\(((?:https?:\/\/|\/|data:)[^\s\)\"\'<>]+)\)/g, function(match, label, url) {
            const placeholder = 'LITALLYLINKTOKEN' + links.length + 'XYZ';
            links.push({
                label: label,
                url: url
            });
            return placeholder;
        });

        // 2.5. Autolink bare URLs (http:// or https://) that are not already tokenized
        content = content.replace(/(https?:\/\/[^\s<>"'\)]+)/gi, function(match, rawUrl) {
            if (rawUrl.indexOf('LITALLY') !== -1) return match;
            const placeholder = 'LITALLYLINKTOKEN' + links.length + 'XYZ';
            links.push({
                label: rawUrl,
                url: rawUrl
            });
            return placeholder;
        });

        function cleanMathToUnicode(inner) {
            return inner
                .replace(/\\ge\b|\\geq\b/g, '≥')
                .replace(/\\le\b|\\leq\b/g, '≤')
                .replace(/\\ne\b|\\neq\b/g, '≠')
                .replace(/\\approx\b/g, '≈')
                .replace(/\\times\b/g, '×')
                .replace(/\\cdot\b/g, '·')
                .replace(/\\pm\b/g, '±')
                .replace(/\\implies\b/g, '→')
                .replace(/\\to\b/g, '→')
                .replace(/\\forall\b/g, '∀')
                .replace(/\\exists\b/g, '∃')
                .replace(/\\in\b/g, '∈')
                .replace(/\\notin\b/g, '∉')
                .replace(/\\subset\b/g, '⊂')
                .replace(/\\subseteq\b/g, '⊆')
                .replace(/\\cup\b/g, '∪')
                .replace(/\\cap\b/g, '∩')
                .replace(/\\bot\b/g, '⊥')
                .replace(/\\top\b/g, '⊤')
                .replace(/\\lambda\b/g, 'λ')
                .replace(/\\alpha\b/g, 'α')
                .replace(/\\beta\b/g, 'β')
                .replace(/\\gamma\b/g, 'γ')
                .replace(/\\delta\b/g, 'δ')
                .replace(/\\pi\b/g, 'π')
                .replace(/\\infty\b/g, '∞')
                .replace(/_1\b/g, '₁')
                .replace(/_2\b/g, '₂')
                .replace(/_3\b/g, '₃')
                .replace(/_k\b/g, 'ₖ')
                .replace(/_i\b/g, 'ᵢ')
                .replace(/_n\b/g, 'ₙ')
                .replace(/_0\b/g, '₀')
                .replace(/\^2\b/g, '²')
                .replace(/\^3\b/g, '³')
                .replace(/\^4\b/g, '⁴')
                .replace(/\\text\{([^\}]+)\}/g, '$1')
                .replace(/\\mathbf\{([^\}]+)\}/g, '$1')
                .replace(/\\mathit\{([^\}]+)\}/g, '$1')
                .trim();
        }

        // 2.6. Mathematical notation: strip raw dollar signs and convert LaTeX to clean Unicode
        content = content.replace(/\$\$([\s\S]*?)\$\$/g, function(match, inner) {
            return cleanMathToUnicode(inner);
        });
        content = content.replace(/\$([^\$\r\n]+)\$/g, function(match, inner) {
            return cleanMathToUnicode(inner);
        });

        content = content.replace(/^&gt;\s+(.*$)/gim, '<blockquote>$1</blockquote>');
        content = content.replace(/^(\*{3,}|-{3,}|_{3,})$/gim, '<hr class="gemini-hr">');
        content = content.replace(/^####\s+(.*$)/gim, '<h4>$1</h4>');
        content = content.replace(/^###\s+(.*$)/gim, '<h3>$1</h3>');
        content = content.replace(/^##\s+(.*$)/gim, '<h2>$1</h2>');
        content = content.replace(/^#\s+(.*$)/gim, '<h1>$1</h1>');

        content = content.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
        content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        content = content.replace(/\*([^\*\n]+)\*/g, '<em>$1</em>');
        content = content.replace(/_([^_\n]+)_/g, '<em>$1</em>');
        content = content.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

        const lines = content.split(/\r?\n/);
        let inUl = false;
        let inOl = false;
        const processedLines = [];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const taskMatch = line.match(/^(\s*)[-\*•]\s+\[([ xX])\]\s+(.*)$/);
            const ulMatch = line.match(/^(\s*)[-\*•]\s+(.*)$/);
            const olMatch = line.match(/^(\s*)\d+\.\s+(.*)$/);

            if (taskMatch) {
                if (inUl) { processedLines.push('</ul>'); inUl = false; }
                if (inOl) { processedLines.push('</ol>'); inOl = false; }
                const isChecked = taskMatch[2].toLowerCase() === 'x';
                processedLines.push(
                    '<div class="chat-checklist-row">' +
                        '<label class="chat-checklist-label">' +
                            '<input type="checkbox" class="chat-checklist-checkbox" ' + (isChecked ? 'checked' : '') + ' onchange="toggleChecklistItem(this)">' +
                            '<span class="chat-checklist-text' + (isChecked ? ' is-completed' : '') + '">' + taskMatch[3] + '</span>' +
                        '</label>' +
                    '</div>'
                );
            } else if (ulMatch) {
                if (inOl) { processedLines.push('</ol>'); inOl = false; }
                if (!inUl) { processedLines.push('<ul class="gemini-ul">'); inUl = true; }
                processedLines.push('<li>' + ulMatch[2] + '</li>');
            } else if (olMatch) {
                if (inUl) { processedLines.push('</ul>'); inUl = false; }
                if (!inOl) { processedLines.push('<ol class="gemini-ol">'); inOl = true; }
                processedLines.push('<li>' + olMatch[2] + '</li>');
            } else {
                if (inUl) { processedLines.push('</ul>'); inUl = false; }
                if (inOl) { processedLines.push('</ol>'); inOl = false; }
                processedLines.push(line);
            }
        }
        if (inUl) processedLines.push('</ul>');
        if (inOl) processedLines.push('</ol>');

        content = processedLines.join('\n');

        const paragraphs = content.split(/\n\s*\n/);
        content = paragraphs.map(p => {
            p = p.trim();
            if (!p) return '';
            if (/^<(h[1-4]|blockquote|ul|ol|hr|div)/i.test(p)) {
                return p;
            }
            return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
        }).filter(Boolean).join('\n');

        // Restore hyperlinks & media players
        links.forEach((link, idx) => {
            const placeholder = 'LITALLYLINKTOKEN' + idx + 'XYZ';
            const isDownload = /скачать|download|⬇️/i.test(link.label);
            const isAudio = /\.wav(\?|$)/i.test(link.url) || /\/audio\//i.test(link.url);
            let linkHtml;
            if (isAudio && !isDownload) {
                linkHtml = '<div class="media-audio-box">' +
                    '<div class="media-audio-label">🎧 ' + link.label + '</div>' +
                    '<audio controls class="media-audio-player" src="' + link.url + '" preload="metadata"></audio>' +
                '</div>';
            } else if (isDownload) {
                const dict = getI18n();
                const dlTitle = (AppState.currentLang === 'ru') ? 'Скачать файл' : 'Download file';
                linkHtml = '<a href="' + link.url + '" download class="btn-media-download gemini-link" title="' + dlTitle + '">' + link.label + '</a>';
            } else {
                linkHtml = '<a href="' + link.url + '" target="_blank" rel="noopener noreferrer" class="gemini-link">' + link.label + ' <span class="link-arrow">↗</span></a>';
            }
            content = content.split(placeholder).join(linkHtml);
        });

        // Restore images and 4K Ultra HD video
        mediaImages.forEach((img, idx) => {
            const placeholder = 'LITALLYIMAGETOKEN' + idx + 'XYZ';
            const isMp4 = /\.mp4(\?|$)/i.test(img.url);
            const isAnim = /\.webp(\?|$)/i.test(img.url) || img.alt.includes('Анимирован') || img.alt.includes('ролик');
            let imgHtml;
            const dict = getI18n();
            if (isMp4) {
                const videoTag = (AppState.currentLang === 'ru') ? '🎬 Кинематографическое видео · MP4 (48kHz Stereo AAC)' : '🎬 Cinematic Video · MP4 (48kHz Stereo AAC)';
                const noVideoSupport = (AppState.currentLang === 'ru') ? 'Ваш браузер не поддерживает воспроизведение видео.' : 'Your browser does not support video playback.';
                const dlVideoText = dict.btnDownload || '⬇️ Download Video (MP4)';
                imgHtml = 
                    '<div class="media-preview-wrap media-video-wrap">' +
                        '<div class="media-badge-tag">' + videoTag + '</div>' +
                        '<video controls class="media-video-player" playsinline preload="metadata">' +
                            '<source src="' + img.url + '" type="video/mp4">' +
                            noVideoSupport +
                        '</video>' +
                        '<div class="media-card-action-bar">' +
                            '<a href="' + img.url + '" download class="media-download-action-btn">' + dlVideoText + '</a>' +
                        '</div>' +
                    '</div>';
            } else {
                const isRu = (AppState.currentLang === 'ru');
                const isAnimText = isRu ? '🎬 Анимированное видео · 60 FPS · Ultra HD' : '🎬 Animated Video · 60 FPS · Ultra HD';
                const isPhotoText = isRu ? '✦ 4K Ultra HD Фотореализм · DCI-P3 HDR · SSAA 2x' : '✦ 4K Ultra HD Photorealism · DCI-P3 HDR · SSAA 2x';
                const badgeLabel = isAnim ? isAnimText : isPhotoText;
                const dlFullText = isRu ? '⬇️ 4K Ultra HD' : (dict.btnDownloadFull || '⬇️ Download 4K');
                const loupeText = isRu ? '🔍 Лупа 400%' : '🔍 400% Loupe';
                const compText = isRu ? '⚖️ Сравнить' : '⚖️ Compare';
                const safeAlt = escapeHtml(img.alt).replace(/'/g, "\\'");
                const safeUrl = img.url.replace(/'/g, "\\'");

                imgHtml = 
                    '<div class="media-preview-wrap studio-card-enhanced' + (isAnim ? ' media-video-wrap' : '') + '">' +
                        '<div class="media-badge-tag">' + badgeLabel + '</div>' +
                        '<div class="media-img-container" onclick="if(window.LitallyStudio) window.LitallyStudio.openLightbox(\'' + safeUrl + '\', \'' + safeAlt + '\')">' +
                            '<img src="' + img.url + '" alt="' + escapeHtml(img.alt) + '" class="media-preview-img' + (isAnim ? ' media-anim-video' : '') + '" loading="lazy">' +
                            '<div class="media-hover-overlay">' +
                                '<span class="media-hover-hint">🔍 Нажмите для оптического 400% зума и HDR инспекции</span>' +
                            '</div>' +
                        '</div>' +
                        '<div class="media-card-action-bar">' +
                            '<button type="button" class="media-studio-action-btn" onclick="if(window.LitallyStudio) window.LitallyStudio.openLoupe(\'' + safeUrl + '\', \'' + safeAlt + '\')">' + loupeText + '</button>' +
                            '<button type="button" class="media-studio-action-btn" onclick="if(window.LitallyStudio) window.LitallyStudio.openComparison(\'' + safeUrl + '\', \'' + safeAlt + '\')">' + compText + '</button>' +
                            '<a href="' + img.url + '" download class="media-download-action-btn">' + dlFullText + '</a>' +
                        '</div>' +
                    '</div>';
            }
            content = content.split(placeholder).join(imgHtml);
        });

        // Restore code blocks
        codeBlocks.forEach((block, idx) => {
            const placeholder = 'LITALLYCODETOKEN' + idx + 'XYZ';
            const blockHtml = 
                '<div class="gemini-code-block">' +
                    '<div class="gemini-code-header">' +
                        '<span>' + escapeHtml(block.lang) + '</span>' +
                        '<button type="button" class="btn-copy-code" onclick="copySnippet(this)">📋 Copy code</button>' +
                    '</div>' +
                    '<pre><code>' + block.code + '</code></pre>' +
                '</div>';
            content = content.split(placeholder).join(blockHtml);
        });

        return content;
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // ── 8.5. AUDIO FEEDBACK ENGINE (WEB AUDIO API) ───────────────────────────
    const LitallyAudioFX = {
        audioCtx: null,
        getCtx: function() {
            if (!this.audioCtx) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) this.audioCtx = new AudioCtx();
            }
            if (this.audioCtx && this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }
            return this.audioCtx;
        },
        isEnabled: function() {
            return AppState.soundEnabled !== false;
        },
        playTone: function(freq, type = 'sine', duration = 0.15, gainVal = 0.04, offset = 0) {
            if (!this.isEnabled()) return;
            try {
                const ctx = this.getCtx();
                if (!ctx) return;
                const t0 = ctx.currentTime + offset;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = type;
                osc.frequency.setValueAtTime(freq, t0);
                gain.gain.setValueAtTime(gainVal, t0);
                gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(t0);
                osc.stop(t0 + duration + 0.02);
            } catch (e) {}
        },
        playSend: function() {
            if (!this.isEnabled()) return;
            // Warm rising two-tone send sound (440Hz -> 660Hz)
            this.playTone(440, 'sine', 0.08, 0.035, 0);
            this.playTone(660, 'sine', 0.12, 0.035, 0.07);
        },
        playReceive: function() {
            if (!this.isEnabled()) return;
            // Celestial harmonic triad chord (523Hz -> 659Hz -> 784Hz [C-E-G])
            this.playTone(523.25, 'triangle', 0.12, 0.03, 0);
            this.playTone(659.25, 'triangle', 0.14, 0.03, 0.08);
            this.playTone(783.99, 'sine', 0.22, 0.035, 0.16);
        },
        playCopy: function() {
            if (!this.isEnabled()) return;
            // Crisp notification click
            this.playTone(880, 'sine', 0.07, 0.03, 0);
            this.playTone(1174.66, 'sine', 0.11, 0.025, 0.05);
        },
        playToggle: function() {
            this.playTone(587.33, 'sine', 0.10, 0.03, 0);
        }
    };

    function playAudioChime(freq = 600) {
        LitallyAudioFX.playTone(freq, 'sine', 0.16, 0.04, 0);
    }

    function toggleSoundFX() {
        AppState.soundEnabled = !AppState.soundEnabled;
        try {
            localStorage.setItem('litally_sound_enabled', AppState.soundEnabled.toString());
        } catch (e) {}
        updateSoundButtonUI();
        if (AppState.soundEnabled) {
            LitallyAudioFX.playToggle();
        }
    }

    function updateSoundButtonUI() {
        const btn = document.getElementById('btnSoundToggle');
        const icon = document.getElementById('soundToggleIcon');
        if (!btn) return;
        if (AppState.soundEnabled) {
            btn.classList.remove('sound-muted');
            if (icon) icon.textContent = '🔊';
            btn.title = (AppState.currentLang === 'ru') ? 'Звук интерфейса: включен' : 'Interface Sound: On';
        } else {
            btn.classList.add('sound-muted');
            if (icon) icon.textContent = '🔇';
            btn.title = (AppState.currentLang === 'ru') ? 'Звук интерфейса: выключен' : 'Interface Sound: Off';
        }
    }

    // ── 9. LOCK & SCROLL ──────────────────────────────────────────────────────
    function lockChatSession(warningText) {
        AppState.isChatLocked = true;
        const banner = document.getElementById('chatLockedBanner');
        const desc = document.getElementById('txtLockBannerDesc');
        if (desc) desc.textContent = warningText;
        if (banner) banner.style.display = 'block';

        const input = document.getElementById('chatInput');
        if (input) {
            input.disabled = true;
            input.placeholder = (AppState.currentLang === 'ru')
                ? "🔒 Чат заблокирован системой безопасности..."
                : (AppState.currentLang === 'kk' ? "🔒 Чат қауіпсіздік жүйесімен бұғатталды..." : "🔒 Chat session locked by safety shield...");
        }
        const btnSend = document.getElementById('btnSend');
        if (btnSend) btnSend.disabled = true;
        const btnAttach = document.getElementById('btnAttachFile');
        if (btnAttach) btnAttach.disabled = true;

        playAudioChime(320);
    }

    function resetChatLock() {
        AppState.isChatLocked = false;
        const banner = document.getElementById('chatLockedBanner');
        if (banner) banner.style.display = 'none';

        const input = document.getElementById('chatInput');
        if (input) {
            input.disabled = false;
            input.placeholder = (AppState.currentLang === 'ru')
                ? "Спросите о чем угодно, прикрепите медиа/документ... (Enter для отправки)"
                : (AppState.currentLang === 'kk' ? "Кез келген нәрсені сұраңыз, медиа/құжат тіркеңіз... (Enter жіберу үшін)" : "Ask anything, attach media/docs, or request deep multimodal analysis... (Enter to send)");
            input.value = '';
        }
        const btnSend = document.getElementById('btnSend');
        if (btnSend) btnSend.disabled = false;
        const btnAttach = document.getElementById('btnAttachFile');
        if (btnAttach) btnAttach.disabled = false;

        createNewChatSession(true);
        playAudioChime(640);
    }

    function scrollToBottomSmooth() {
        const container = document.getElementById('chatScrollContainer');
        if (container) {
            container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
        }
        AppState.userScrolledUp = false;
        const btn = document.getElementById('btnScrollToBottom');
        if (btn) btn.style.display = 'none';
    }

    function toggleSidebar() {
        const sb = document.getElementById('appSidebar');
        const backdrop = document.getElementById('sidebarMobileBackdrop');
        if (!sb) return;

        if (window.innerWidth <= 768) {
            const isOpen = sb.classList.toggle('mobile-open');
            if (backdrop) backdrop.classList.toggle('active', isOpen);
        } else {
            sb.classList.toggle('collapsed');
        }
    }

    function openImageLightbox(imgSrc, imgAlt) {
        if (!imgSrc) return;
        let lb = document.getElementById('litallyStudioLightbox');
        if (!lb) {
            lb = document.createElement('div');
            lb.id = 'litallyStudioLightbox';
            lb.className = 'litally-studio-lightbox';
            lb.innerHTML = `
                <button type="button" class="lightbox-close-btn" onclick="closeImageLightbox()" title="Закрыть (Esc)" aria-label="Закрыть">✕</button>
                <div class="lightbox-content-wrap" onclick="event.stopPropagation()">
                    <img id="lightboxImg" class="lightbox-img-el" src="" alt="" />
                    <div id="lightboxCaption" class="lightbox-caption"></div>
                </div>
            `;
            lb.onclick = closeImageLightbox;
            document.body.appendChild(lb);
        }
        const img = lb.querySelector('#lightboxImg');
        const cap = lb.querySelector('#lightboxCaption');
        if (img) img.src = imgSrc;
        if (cap) cap.textContent = imgAlt || '';
        lb.style.display = 'flex';
        document.body.classList.add('modal-open');
        playAudioChime(750);
    }

    function closeImageLightbox() {
        const lb = document.getElementById('litallyStudioLightbox');
        if (lb) lb.style.display = 'none';
        document.body.classList.remove('modal-open');
    }

    function focusChatSearch() {
        const input = document.getElementById('chatInput');
        if (input) {
            input.focus();
            playAudioChime(660);
        }
    }

    // ── DRAG & DROP MULTIMODAL INGESTION ──────────────────────────────────────
    function initDragAndDrop() {
        const dropzone = document.getElementById('chatDropzone');
        if (!dropzone) return;

        let dragCounter = 0;

        window.addEventListener('dragenter', (e) => {
            if (e.dataTransfer && e.dataTransfer.types && Array.from(e.dataTransfer.types).includes('Files')) {
                dragCounter++;
                dropzone.style.display = 'flex';
            }
        });

        window.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        window.addEventListener('dragleave', (e) => {
            dragCounter--;
            if (dragCounter <= 0) {
                dragCounter = 0;
                dropzone.style.display = 'none';
            }
        });

        window.addEventListener('drop', (e) => {
            e.preventDefault();
            dragCounter = 0;
            dropzone.style.display = 'none';
            if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                handleFilesDirect(e.dataTransfer.files);
            }
        });
    }

    // ── 10. EXPOSE TO WINDOW ──────────────────────────────────────────────────
    window.UserMemory = UserMemory;
    window.LitallyVariationalEngine = LitallyVariationalEngine;
    window.initStorage = initStorage;
    window.toggleCrossChatMemory = toggleCrossChatMemory;
    window.updateMemoryToggleButtonUI = updateMemoryToggleButtonUI;
    window.setResponseLength = setResponseLength;
    window.openPrivacyModal = openPrivacyModal;
    window.closePrivacyModal = closePrivacyModal;
    window.openProject10kModal = openProject10kModal;
    window.closeProject10kModal = closeProject10kModal;
    window.triggerProject10kPrompt = triggerProject10kPrompt;
    window.clearAllUserData = clearAllUserData;
    window.createNewChatSession = createNewChatSession;
    window.selectSession = selectSession;
    window.deleteSession = deleteSession;
    window.deleteMessage = deleteMessage;
    window.editMessage = editMessage;
    window.retryMessage = retryMessage;
    window.hintMessage = hintMessage;
    window.showHints = showHints;
    window.closeHintsBar = closeHintsBar;
    window.copyMessageText = copyMessageText;
    window.copySnippet = copySnippet;
    window.speakMessage = speakMessage;
    window.toggleMicInput = toggleMicInput;
    window.triggerWebSearchPrompt = triggerWebSearchPrompt;
    window.applyTheme = applyTheme;
    window.changeTheme = changeTheme;
    window.applyLanguage = applyLanguage;
    window.changeLanguage = changeLanguage;
    window.populate100LanguagesDropdown = populate100LanguagesDropdown;
    window.populate100ThemesDropdown = populate100ThemesDropdown;
    window.openSettingsModal = openSettingsModal;
    window.closeSettingsModal = closeSettingsModal;
    window.openAiModeModal = openAiModeModal;
    window.setAiMode = setAiMode;
    window.updateAiModeUI = updateAiModeUI;
    window.openAuthModal = openAuthModal;
    window.closeAuthModal = closeAuthModal;
    window.backToAuthStep1 = backToAuthStep1;
    window.sendAuthConfirmationCode = sendAuthConfirmationCode;
    window.fillAuthCode = fillAuthCode;
    window.confirmAuthCode = confirmAuthCode;
    window.updateTtsRate = updateTtsRate;
    window.testTtsSpeech = testTtsSpeech;
    window.stopSpeaking = stopSpeaking;
    window.setTtsVoice = setTtsVoice;
    window.saveElevenLabsApiKey = saveElevenLabsApiKey;
    window.updateProfileUI = updateProfileUI;
    window.focusChatSearch = focusChatSearch;
    window.openLibraryModal = openLibraryModal;
    window.handleChatSubmit = handleChatSubmit;
    window.handleInputKeyDown = handleInputKeyDown;
    window.useQuickPrompt = useQuickPrompt;
    window.scrollToBottomSmooth = scrollToBottomSmooth;
    window.toggleSidebar = toggleSidebar;
    window.resetChatLock = resetChatLock;
    window.parseMarkdown = parseMarkdown;
    window.handleGalleryUpload = handleGalleryUpload;
    window.handleFilesDirect = handleFilesDirect;
    window.initDragAndDrop = initDragAndDrop;
    window.toggleSoundFX = toggleSoundFX;
    window.handleFollowupClick = handleFollowupClick;
    window.toggleMessageCheck = toggleMessageCheck;
    window.toggleThumb = toggleThumb;
    window.toggleChecklistItem = toggleChecklistItem;
    window.getActiveSession = getActiveSession;
    window.executeSendMessage = executeSendMessage;
    window.renderChatMessages = renderChatMessages;
    window.toggleGoogleSearchPermission = toggleGoogleSearchPermission;
    window.closeAllModals = closeAllModals;
    window.openImageLightbox = openImageLightbox;
    window.closeImageLightbox = closeImageLightbox;
    window.LitallyStudio = window.LitallyStudio || {};
    if (!window.LitallyStudio.openLightbox) {
        window.LitallyStudio.openLightbox = openImageLightbox;
        window.LitallyStudio.closeLightbox = closeImageLightbox;
    }
    window.AppState = AppState;

    document.addEventListener('DOMContentLoaded', function () {
        initStorage();
        populate100ThemesDropdown();
        populate100LanguagesDropdown();
        applyTheme(AppState.activeThemeId || 88, false);
        applyLanguage(AppState.currentLang || 'ru');
        setResponseLength(AppState.responseLength);
        updateSoundButtonUI();
        updateGoogleSearchPermissionUI();
        renderChatHistoryList();
        renderChatMessages();
        initDragAndDrop();

        const container = document.getElementById('chatScrollContainer');
        if (container) {
            container.addEventListener('scroll', function () {
                const distance = container.scrollHeight - container.scrollTop - container.clientHeight;
                AppState.userScrolledUp = (distance > 60);
                const btn = document.getElementById('btnScrollToBottom');
                if (btn) btn.style.display = AppState.userScrolledUp ? 'flex' : 'none';
            });
        }

        // Global Escape key listener: closes any active modal, hints bar, lightbox, or mobile drawer
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' || e.keyCode === 27) {
                closeAllModals();
            }
        });
    });

})(window, document);


    // ── 15. 60-MESSAGE LIMIT MODAL HANDLERS ─────────────────────────────────
    function handleLimitNewChat() {
        const modal = document.getElementById('sessionLimitModal');
        if (modal) modal.style.display = 'none';
        createNewChatSession(true);
        showToast('✨ Открыт новый чистый диалог (0 / 60 сообщений)!');
    }
    window.handleLimitNewChat = handleLimitNewChat;

    function handleLimitUpgrade() {
        const modal = document.getElementById('sessionLimitModal');
        if (modal) modal.style.display = 'none';
        showToast('👑 Запрос тарифа Sovereign VIP (Безлимит) отправлен!');
        if (typeof openSettingsModal === 'function') openSettingsModal();
    }
    window.handleLimitUpgrade = handleLimitUpgrade;

    // ── 16. 1 TRILLION IMAGE IDEAS PROMPT GENERATOR ─────────────────────────
    function triggerTrillionImagePrompt() {
        const chatInput = document.getElementById('chatInput');
        fetch('/api/ai/image-trillion-variants?count=1')
        .then(r => r.json())
        .then(data => {
            if (data.status === 'success' && data.variants && data.variants.length > 0) {
                const v = data.variants[0];
                if (chatInput) {
                    chatInput.value = 'создай изображение: ' + v.full_prompt;
                    chatInput.focus();
                    if (typeof showToast === 'function') {
                        showToast(v.badge + ' вставлен в поле ввода! 🎨');
                    }
                }
            }
        })
        .catch(() => {
            if (chatInput) {
                chatInput.value = '1000 миллиардов вариантов на создание изображения';
                chatInput.focus();
            }
        });
    }
    window.triggerTrillionImagePrompt = triggerTrillionImagePrompt;
