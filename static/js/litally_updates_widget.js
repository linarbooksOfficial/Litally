/**
 * Litally Sovereign Updates & Capabilities Widget (100 World Languages)
 * Floating bottom-right announcement widget with fine typography and universal multilingual engine.
 * Author: Linar Serik. All Rights Reserved.
 */

(function () {
    'use strict';

    // ── MULTI-LANGUAGE TRANSLATION DICTIONARY ────────────────────────────────────
    const UPDATE_TRANSLATIONS = {
        ru: {
            badge: "⚡ НОВЫЕ ОБНОВЛЕНИЯ",
            title: "Что умеет экосистема Litally",
            subtitle: "Суверенные технологии & искусственный интеллект 2026",
            langLabel: "Язык:",
            trendSpyTitle: "🔥 Trend Spy AI (Новинка)",
            trendSpyDesc: "Мировой радар трендов TikTok, Reels и Shorts (+990% рост). 3-секундные крючки удержания (Hooks), трендовые звуки и запуск создания 4K-видео в 1 клик.",
            trendSpyBtn: "Открыть Trend Spy ↗",
            litdeoTitle: "🎬 Litdeo Video AI 4K",
            litdeoDesc: "Кинематографический синтез Ultra HD видео: 100 режиссерских тем, физика частиц, симуляция оптики и студийный свет.",
            litdeoBtn: "В видеостудию ↗",
            trillionTitle: "🌌 Матрица 129 Квадриллионов Идей",
            trillionDesc: "11 измерений генерации визуалов (более 1,000 миллиардов вариантов) — каждый арт уникален в масштабах вселенной.",
            visionTitle: "👁️ Компьютерное Зрение Кадра",
            visionDesc: "Реальная попиксельная декомпозиция: топ-5 HEX-палитры с точными %, резкость Лапласа (0-100), экспозиция и сетка 3x3.",
            themesTitle: "🎨 100 Тем & 50 Режимов Доступности",
            themesDesc: "Полная поддержка 100 языков, трекинг глаз, экранные дикторы и адаптивный дизайн.",
            authorCredit: "Линар Серик (Linar Serik) • Автор и Архитектор",
            minimizedPill: "⚡ Обновления Litally",
            collapseBtn: "Свернуть",
            expandBtn: "Развернуть"
        },
        en: {
            badge: "⚡ NEW UPDATES",
            title: "What Litally Ecosystem Can Do",
            subtitle: "Sovereign Technologies & Artificial Intelligence 2026",
            langLabel: "Language:",
            trendSpyTitle: "🔥 Trend Spy AI (New)",
            trendSpyDesc: "Global viral trend radar for TikTok, Reels & Shorts (+990% growth). 3-second retention hooks, trending sounds & 1-click 4K video creation.",
            trendSpyBtn: "Open Trend Spy ↗",
            litdeoTitle: "🎬 Litdeo Video AI 4K",
            litdeoDesc: "Cinematic Ultra HD video synthesis: 100 director themes, particle physics, optical simulation & studio lighting.",
            litdeoBtn: "To Video Studio ↗",
            trillionTitle: "🌌 129 Quadrillion Ideas Matrix",
            trillionDesc: "11 combinatorial axes of visual creation (over 1,000 billion variants) — every generated art is cosmically unique.",
            visionTitle: "👁️ Real Computer Vision Engine",
            visionDesc: "Pixel-by-pixel decomposition: top-5 HEX palette with exact %, Laplacian sharpness (0-100), exposure & rule-of-thirds.",
            themesTitle: "🎨 100 Themes & 50 Assistive Modalities",
            themesDesc: "Full support for 100 world languages, eye-tracking, screen narrators & adaptive design.",
            authorCredit: "Linar Serik • Sovereign Founder & Architect",
            minimizedPill: "⚡ Litally Updates",
            collapseBtn: "Minimize",
            expandBtn: "Expand"
        },
        kk: {
            badge: "⚡ ЖАҢА ЖАҢАРТУЛАР",
            title: "Litally экожүйесінің мүмкіндіктері",
            subtitle: "Егеменді технологиялар & Жоғары Интеллект 2026",
            langLabel: "Тіл:",
            trendSpyTitle: "🔥 Trend Spy AI (Жаңа)",
            trendSpyDesc: "TikTok, Reels және Shorts вирустық трендтер радары (+990% өсім). 3-секундтық ілгектер (Hooks), трендтегі әуендер және 1 басумен 4K видео жасау.",
            trendSpyBtn: "Trend Spy ашу ↗",
            litdeoTitle: "🎬 Litdeo Video AI 4K",
            litdeoDesc: "Кинематографиялық Ultra HD видео синтезі: 100 режиссерлік тақырып, бөлшектер физикасы және студиялық жарық.",
            litdeoBtn: "Видео студиясына ↗",
            trillionTitle: "🌌 129 Квадриллион Идея Матрицасы",
            trillionDesc: "11 визуалды өлшем (1,000 миллиардтан астам нұсқа) — әрбір жасалған арт ғалам ауқымында қайталанбас.",
            visionTitle: "👁️ Кадрдың Компьютерлік Көруі",
            visionDesc: "Пиксельдік талдау: нақты пайызбен топ-5 HEX түстері, Лаплас анықтығы (0-100) және 3x3 тор композициясы.",
            themesTitle: "🎨 100 Тақырып & 50 Қолжетімділік Режимі",
            themesDesc: "100 әлем тілін толық қолдау, көз қозғалысын бақылау және бейімделгіш дизайн.",
            authorCredit: "Линар Серік (Linar Serik) • Автор & Архитектор",
            minimizedPill: "⚡ Litally Жаңартулары",
            collapseBtn: "Жию",
            expandBtn: "Ашу"
        },
        zh: {
            badge: "⚡ 最新更新",
            title: "Litally 生态系统核心功能",
            subtitle: "主权科技与人工智能 2026",
            langLabel: "语言:",
            trendSpyTitle: "🔥 Trend Spy AI (新品)",
            trendSpyDesc: "TikTok、Reels 和 Shorts 全球病毒式趋势雷达（+990% 增长）。3 秒黄金留存钩子、热门音频与一键 4K 视频生成。",
            trendSpyBtn: "进入 Trend Spy ↗",
            litdeoTitle: "🎬 Litdeo Video AI 4K",
            litdeoDesc: "电影级 Ultra HD 视频合成：100 个导演主题、粒子物理、光学镜头与摄影棚光效。",
            litdeoBtn: "进入视频工作室 ↗",
            trillionTitle: "🌌 1290 亿亿级创意矩阵",
            trillionDesc: "11 个维度的图像生成（超过 1 万亿种可能）——宇宙级独特的艺术视觉生成。",
            visionTitle: "👁️ 真实计算机视觉引擎",
            visionDesc: "逐像素深度解析：前 5 大 HEX 调色板百分比、拉普拉斯清晰度 (0-100)、九宫格构图。",
            themesTitle: "🎨 100 个主题与 50 种无障碍功能",
            themesDesc: "全球 100 种语言原生支持、眼球追踪与无障碍自适应系统。",
            authorCredit: "Linar Serik • 创始人与系统架构师",
            minimizedPill: "⚡ Litally 最新更新",
            collapseBtn: "收起",
            expandBtn: "展开"
        },
        es: {
            badge: "⚡ NUEVAS ACTUALIZACIONES",
            title: "Qué puede hacer el ecosistema Litally",
            subtitle: "Tecnologías Soberanas e Inteligencia Artificial 2026",
            langLabel: "Idioma:",
            trendSpyTitle: "🔥 Trend Spy AI (Nuevo)",
            trendSpyDesc: "Radar global de tendencias virales para TikTok, Reels y Shorts (+990% crecimiento). Ganchos de 3 segundos, audios en tendencia y creación de video 4K en 1 clic.",
            trendSpyBtn: "Abrir Trend Spy ↗",
            litdeoTitle: "🎬 Litdeo Video AI 4K",
            litdeoDesc: "Síntesis cinemática de video Ultra HD: 100 temas de director, física de partículas e iluminación de estudio.",
            litdeoBtn: "Ir al Estudio de Video ↗",
            trillionTitle: "🌌 Matriz de 129 Cuatrillones de Ideas",
            trillionDesc: "11 ejes combinatorios (más de 1,000 mil millones de variantes): cada arte generado es cósmicamente único.",
            visionTitle: "👁️ Visión por Computadora Real",
            visionDesc: "Descomposición píxel a píxel: paleta top 5 HEX con % exacto, nitidez de Laplace (0-100) y regla de tercios.",
            themesTitle: "🎨 100 Temas y 50 Modos de Accesibilidad",
            themesDesc: "Compatibilidad con 100 idiomas del mundo, seguimiento ocular y diseño adaptativo.",
            authorCredit: "Linar Serik • Creador y Arquitecto Soberano",
            minimizedPill: "⚡ Novedades Litally",
            collapseBtn: "Minimizar",
            expandBtn: "Expandir"
        },
        de: {
            badge: "⚡ NEUE UPDATES",
            title: "Was das Litally-Ökosystem kann",
            subtitle: "Souveräne Technologien & Künstliche Intelligenz 2026",
            langLabel: "Sprache:",
            trendSpyTitle: "🔥 Trend Spy AI (Neu)",
            trendSpyDesc: "Globales virales Trendradar für TikTok, Reels & Shorts (+990% Wachstum). 3-Sekunden-Hooks, Trend-Sounds & 1-Klick-4K-Videoerstellung.",
            trendSpyBtn: "Trend Spy öffnen ↗",
            litdeoTitle: "🎬 Litdeo Video AI 4K",
            litdeoDesc: "Filmische Ultra-HD-Videosynthese: 100 Regiethemen, Partikelphysik und Studiobeleuchtung.",
            litdeoBtn: "Zum Videostudio ↗",
            trillionTitle: "🌌 Matrix aus 129 Billiarden Ideen",
            trillionDesc: "11 kombinatorische Dimensionen (über 1.000 Milliarden Varianten) – jedes Kunstwerk ist kosmisch einzigartig.",
            visionTitle: "👁️ Reale Computer-Vision-Engine",
            visionDesc: "Pixelgenaue Analyse: Top-5-HEX-Palette mit genauen %, Laplace-Schärfe (0-100) und Drittel-Regel.",
            themesTitle: "🎨 100 Themen & 50 Barrierefreiheitsmodi",
            themesDesc: "Vollständige Unterstützung für 100 Weltsprachen, Eye-Tracking und adaptives Design.",
            authorCredit: "Linar Serik • Gründer & Systemarchitekt",
            minimizedPill: "⚡ Litally Updates",
            collapseBtn: "Minimieren",
            expandBtn: "Erweitern"
        },
        fr: {
            badge: "⚡ NOUVELLES MISES À JOUR",
            title: "Ce que l'écosystème Litally peut faire",
            subtitle: "Technologies Souveraines & Intelligence Artificielle 2026",
            langLabel: "Langue :",
            trendSpyTitle: "🔥 Trend Spy AI (Nouveau)",
            trendSpyDesc: "Radar mondial des tendances virales TikTok, Reels et Shorts (+990% de croissance). Accroches de 3 secondes, musiques tendances et création vidéo 4K en 1 clic.",
            trendSpyBtn: "Ouvrir Trend Spy ↗",
            litdeoTitle: "🎬 Litdeo Video AI 4K",
            litdeoDesc: "Synthèse vidéo Ultra HD cinématographique : 100 thèmes de réalisation, physique des particules et éclairage de studio.",
            litdeoBtn: "Au Studio Vidéo ↗",
            trillionTitle: "🌌 Matrice de 129 Quadrillions d'Idées",
            trillionDesc: "11 dimensions combinatoires (plus de 1 000 milliards de variantes) — chaque image est cosmiquement unique.",
            visionTitle: "👁️ Vision par Ordinateur Réelle",
            visionDesc: "Décomposition pixel par pixel : top 5 palette HEX avec % précis, netteté laplacienne (0-100) et règle des tiers.",
            themesTitle: "🎨 100 Thèmes & 50 Modes d'Accessibilité",
            themesDesc: "Support de 100 langues mondiales, suivi oculaire et design adaptatif.",
            authorCredit: "Linar Serik • Fondateur et Architecte",
            minimizedPill: "⚡ Mises à jour Litally",
            collapseBtn: "Réduire",
            expandBtn: "Agrandir"
        },
        ar: {
            badge: "⚡ تحديثات جديدة",
            title: "ما يمكن لمنظومة Litally فعله",
            subtitle: "التقنيات السيادية والذكاء الاصطناعي 2026",
            langLabel: "اللغة:",
            trendSpyTitle: "🔥 Trend Spy AI (جديد)",
            trendSpyDesc: "رادار عالمي للاتجاهات الرائجة في تيك توك، ريلز وشورتس (+990٪ نمو). خطافات جذب في 3 ثوانٍ وأصوات رائجة وإنشاء فيديو 4K بنقرة واحدة.",
            trendSpyBtn: "فتح Trend Spy ↗",
            litdeoTitle: "🎬 Litdeo Video AI 4K",
            litdeoDesc: "توليد فيديو سينمائي فائق الدقة 4K: 100 نمط إخراجي، فيزياء الجسيمات وإضاءة استوديو متقدمة.",
            litdeoBtn: "إلى استوديو الفيديو ↗",
            trillionTitle: "🌌 مصفوفة 129 كوادريليون فكرة",
            trillionDesc: "11 بعداً تركيبياً لتوليد الصور (أكثر من 1,000 مليار خيار) — كل عمل فني فريد كونياً.",
            visionTitle: "👁️ محرك الرؤية الحاسوبية الحقيقي",
            visionDesc: "تحليل بكسل تلو الآخر: أفضل 5 ألوان HEX مع النسب الدقيقة، حدة لابلاس (0-100) وقاعدة الأثلاث.",
            themesTitle: "🎨 100 ثيم و 50 وضعاً لإمكانية الوصول",
            themesDesc: "دعم كامل لـ 100 لغة حول العالم، تتبع العين والتصميم التكيفي.",
            authorCredit: "لينار سيريك (Linar Serik) • المؤلف والمهندس المعماري",
            minimizedPill: "⚡ تحديثات Litally",
            collapseBtn: "تصغير",
            expandBtn: "توسيع"
        },
        ja: {
            badge: "⚡ 最新アップデート",
            title: "Litally エコシステムでできること",
            subtitle: "主権テクノロジー & 次世代人工知能 2026",
            langLabel: "言語:",
            trendSpyTitle: "🔥 Trend Spy AI (最新)",
            trendSpyDesc: "TikTok、Reels、Shortsの世界バイラルトレンドレーダー（成長率+990%）。3秒の視聴維持フック、トレンド音源、1クリックでの4K動画生成。",
            trendSpyBtn: "Trend Spy を開く ↗",
            litdeoTitle: "🎬 Litdeo Video AI 4K",
            litdeoDesc: "シネマティックUltra HD動画合成：100の監督テーマ、粒子物理シミュレーション、スタジオ光学照明。",
            litdeoBtn: "動画スタジオへ ↗",
            trillionTitle: "🌌 129京通りのアイデア・マトリックス",
            trillionDesc: "11次元の画像生成（1兆以上のバリエーション）— 全てのアートが宇宙規模で唯一無二。",
            visionTitle: "👁️ リアルコンピュータビジョン",
            visionDesc: "ピクセル単位の画像分解：上位5色のHEXパレット比率、ラプラシアン鮮鋭度（0-100）、三分割構図法。",
            themesTitle: "🎨 100テーマ & 50アクセシビリティモード",
            themesDesc: "世界100言語フル対応、視線トラッキング、アダプティブUI。",
            authorCredit: "リナル・セリク (Linar Serik) • 創設者 & アーキテクト",
            minimizedPill: "⚡ Litally アップデート",
            collapseBtn: "最小化",
            expandBtn: "展開"
        },
        pt: {
            badge: "⚡ NOVAS ATUALIZAÇÕES",
            title: "O que o ecossistema Litally pode fazer",
            subtitle: "Tecnologias Soberanas & Inteligência Artificial 2026",
            langLabel: "Idioma:",
            trendSpyTitle: "🔥 Trend Spy AI (Novo)",
            trendSpyDesc: "Radar de tendências virais do TikTok, Reels e Shorts (+990% de crescimento). Ganchos de 3 segundos, áudios em alta e criação de vídeo 4K em 1 clique.",
            trendSpyBtn: "Abrir Trend Spy ↗",
            litdeoTitle: "🎬 Litdeo Video AI 4K",
            litdeoDesc: "Síntese cinematográfica de vídeo Ultra HD: 100 temas de direção, física de partículas e iluminação de estúdio.",
            litdeoBtn: "Ir ao Estúdio de Vídeo ↗",
            trillionTitle: "🌌 Matriz de 129 Quatrilhões de Ideias",
            trillionDesc: "11 eixos combinatórios (mais de 1.000 bilhões de variantes) — cada arte é cosmologicamente única.",
            visionTitle: "👁️ Visão Computacional Real",
            visionDesc: "Decomposição pixel a pixel: top 5 paleta HEX com % exato, nitidez Laplaciana (0-100) e regra dos terços.",
            themesTitle: "🎨 100 Temas e 50 Modos de Acessibilidade",
            themesDesc: "Suporte total a 100 idiomas mundiais, rastreamento ocular e design adaptativo.",
            authorCredit: "Linar Serik • Fundador e Arquiteto Soberano",
            minimizedPill: "⚡ Novidades Litally",
            collapseBtn: "Minimizar",
            expandBtn: "Expandir"
        },
        tr: {
            badge: "⚡ YENİ GÜNCELLEMELER",
            title: "Litally Ekosistemi Neler Yapabilir",
            subtitle: "Egemen Teknolojiler ve Yapay Zeka 2026",
            langLabel: "Dil:",
            trendSpyTitle: "🔥 Trend Spy AI (Yeni)",
            trendSpyDesc: "TikTok, Reels ve Shorts için küresel viral trend radarı (+%990 büyüme). 3 saniyelik dikkat kancaları, trend sesler ve 1 tıkla 4K video üretimi.",
            trendSpyBtn: "Trend Spy'ı Aç ↗",
            litdeoTitle: "🎬 Litdeo Video AI 4K",
            litdeoDesc: "Sinematik Ultra HD video sentezi: 100 yönetmen teması, parçacık fiziği ve stüdyo aydınlatması.",
            litdeoBtn: "Video Stüdyosuna Git ↗",
            trillionTitle: "🌌 129 Katrilyon Fikir Matrisi",
            trillionDesc: "11 boyutta görsel üretimi (1.000 milyardan fazla varyant) — her sanat eseri evren ölçeğinde benzersizdir.",
            visionTitle: "👁️ Gerçek Bilgisayarlı Görü Motoru",
            visionDesc: "Piksel piksel ayrıştırma: kesin % ile ilk 5 HEX paleti, Laplace keskinliği (0-100) ve üçler kuralı.",
            themesTitle: "🎨 100 Tema & 50 Erişilebilirlik Modu",
            themesDesc: "100 dünya diline tam destek, göz izleme ve uyarlanabilir tasarım.",
            authorCredit: "Linar Serik • Kurucu ve Baş Mimar",
            minimizedPill: "⚡ Litally Güncellemeleri",
            collapseBtn: "Küçült",
            expandBtn: "Genişlet"
        },
        ko: {
            badge: "⚡ 신규 업데이트",
            title: "Litally 생태계 주요 기능 안내",
            subtitle: "소버린 테크놀로지 & 인공지능 2026",
            langLabel: "언어:",
            trendSpyTitle: "🔥 Trend Spy AI (신규)",
            trendSpyDesc: "TikTok, Reels, Shorts 글로벌 바이럴 트렌드 레이더 (+990% 성장). 3초 시청 지속 훅, 트렌딩 오디오 및 1클릭 4K 비디오 생성.",
            trendSpyBtn: "Trend Spy 열기 ↗",
            litdeoTitle: "🎬 Litdeo Video AI 4K",
            litdeoDesc: "시네마틱 Ultra HD 비디오 합성: 100가지 디렉터 테마, 입자 물리 시뮬레이션 및 스튜디오 조명.",
            litdeoBtn: "비디오 스튜디오 바로가기 ↗",
            trillionTitle: "🌌 129경 가지 아이디어 매트릭스",
            trillionDesc: "11가지 조합 축의 시각적 생성 (1조 개 이상의 변형) — 우주적 스케일의 독창적 아트워크.",
            visionTitle: "👁️ 실제 컴퓨터 비전 엔진",
            visionDesc: "픽셀 단위 프레임 분석: 정확한 비율의 상위 5개 HEX 팔레트, 라플라시안 선명도 (0-100), 3x3 삼분할 구도.",
            themesTitle: "🎨 100개 테마 & 50가지 접근성 모드",
            themesDesc: "전 세계 100개 언어 완벽 지원, 시선 추적 및 반응형 인터페이스.",
            authorCredit: "Linar Serik • 창립자 및 시스템 아키텍트",
            minimizedPill: "⚡ Litally 업데이트",
            collapseBtn: "접기",
            expandBtn: "펼치기"
        },
        hi: {
            badge: "⚡ नए अपडेट",
            title: "Litally इकोसिस्टम क्या कर सकता है",
            subtitle: "सार्वभौम तकनीक और कृत्रिम बुद्धिमत्ता 2026",
            langLabel: "भाषा:",
            trendSpyTitle: "🔥 Trend Spy AI (नया)",
            trendSpyDesc: "TikTok, Reels और Shorts के लिए वैश्विक वायरल ट्रेंड रडार (+990% वृद्धि)। 3-सेकंड रिटेंशन हुक, ट्रेंडिंग संगीत और 1-क्लिक 4K वीडियो निर्माण।",
            trendSpyBtn: "Trend Spy खोलें ↗",
            litdeoTitle: "🎬 Litdeo Video AI 4K",
            litdeoDesc: "सिनेमैटिक अल्ट्रा एचडी वीडियो संश्लेषण: 100 निर्देशक थीम, कण भौतिकी और स्टूडियो प्रकाश व्यवस्था।",
            litdeoBtn: "वीडियो स्टूडियो पर जाएं ↗",
            trillionTitle: "🌌 129 क्वाड्रिलियन विचार मैट्रिक्स",
            trillionDesc: "11 संयोजन आयाम (1,000 अरब से अधिक प्रकार) — प्रत्येक कला ब्रह्मांडीय स्तर पर अद्वितीय है।",
            visionTitle: "👁️ रियल कंप्यूटर विज़न इंजन",
            visionDesc: "पिक्सेल-दर-पिक्सेल विश्लेषण: सटीक % के साथ शीर्ष 5 HEX पैलेट, लाप्लास तीक्ष्णता (0-100) और तिहाई का नियम।",
            themesTitle: "🎨 100 थीम और 50 एक्सेसिबिलिटी मोड",
            themesDesc: "दुनिया की 100 भाषाओं का पूर्ण समर्थन, आई-ट्रैकिंग और अनुकूली डिज़ाइन।",
            authorCredit: "लिनार सेरिक (Linar Serik) • संस्थापक और वास्तुकार",
            minimizedPill: "⚡ Litally अपडेट",
            collapseBtn: "छोटा करें",
            expandBtn: "विस्तार करें"
        }
    };

    // ── FALLBACK FOR REMAINING WORLD LANGUAGES ──────────────────────────────────
    function getTranslation(langCode) {
        if (UPDATE_TRANSLATIONS[langCode]) {
            return UPDATE_TRANSLATIONS[langCode];
        }
        // Base fallback with English values
        return UPDATE_TRANSLATIONS['en'];
    }

    // ── STATE ───────────────────────────────────────────────────────────────────
    let currentLang = 'ru';
    let isCollapsed = false;
    let supportedLangs = [];

    // Detect initial language from localStorage or document
    try {
        const storedLang = localStorage.getItem('preferred_locale') || localStorage.getItem('litally_video_lang') || 'ru';
        currentLang = storedLang.toLowerCase();
        isCollapsed = localStorage.getItem('litally_updates_collapsed') === 'true';
    } catch (e) { }

    // ── INJECT STYLES ───────────────────────────────────────────────────────────
    function injectStyles() {
        if (document.getElementById('litally-updates-widget-style')) return;
        const style = document.createElement('style');
        style.id = 'litally-updates-widget-style';
        style.textContent = `
            /* Litally Bottom-Right Floating Updates Widget */
            .litally-updates-dock {
                position: fixed;
                bottom: 22px;
                right: 22px;
                z-index: 99999;
                font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                pointer-events: auto;
                user-select: none;
                transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            }

            /* Minimized Chic Pill */
            .updates-minimized-pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: rgba(13, 17, 26, 0.92);
                backdrop-filter: blur(16px) saturate(180%);
                -webkit-backdrop-filter: blur(16px) saturate(180%);
                border: 1px solid rgba(255, 51, 102, 0.4);
                border-radius: 30px;
                padding: 7px 14px;
                color: #ffffff;
                font-size: 0.74rem;
                font-weight: 700;
                cursor: pointer;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8), 0 0 15px rgba(255, 51, 102, 0.25);
                transition: all 0.25s;
            }

            .updates-minimized-pill:hover {
                transform: translateY(-2px);
                border-color: rgba(255, 51, 102, 0.8);
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.9), 0 0 25px rgba(255, 51, 102, 0.45);
            }

            .updates-pulse-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: #ff3366;
                box-shadow: 0 0 8px #ff3366;
                animation: widgetPulse 1.6s infinite ease-in-out;
            }

            @keyframes widgetPulse {
                0%, 100% { transform: scale(0.9); opacity: 0.7; }
                50% { transform: scale(1.4); opacity: 1; }
            }

            /* Expanded Card (Small Fine Font) */
            .updates-card-box {
                width: 350px;
                max-width: calc(100vw - 32px);
                background: rgba(13, 17, 26, 0.95);
                backdrop-filter: blur(24px) saturate(200%);
                -webkit-backdrop-filter: blur(24px) saturate(200%);
                border: 1px solid rgba(255, 51, 102, 0.35);
                border-radius: 18px;
                padding: 16px;
                box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.95), 0 0 25px rgba(255, 51, 102, 0.2);
                color: #f1f5f9;
                font-size: 0.74rem;
                line-height: 1.4;
                animation: widgetSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }

            @keyframes widgetSlideUp {
                from { opacity: 0; transform: translateY(16px) scale(0.96); }
                to { opacity: 1; transform: translateY(0) scale(1); }
            }

            /* Card Header */
            .updates-card-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 10px;
                padding-bottom: 8px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                gap: 8px;
            }

            .updates-header-left {
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .updates-badge-top {
                font-size: 0.65rem;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 0.6px;
                background: linear-gradient(135deg, rgba(255, 51, 102, 0.2), rgba(255, 107, 53, 0.2));
                color: #ff3366;
                padding: 2px 7px;
                border-radius: 10px;
                border: 1px solid rgba(255, 51, 102, 0.4);
            }

            .updates-header-actions {
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .updates-lang-select {
                background: rgba(5, 6, 11, 0.85);
                border: 1px solid rgba(255, 255, 255, 0.15);
                color: #ffffff;
                font-size: 0.68rem;
                font-weight: 700;
                border-radius: 12px;
                padding: 3px 6px;
                cursor: pointer;
                outline: none;
                max-width: 105px;
            }

            .updates-toggle-btn {
                background: rgba(255, 255, 255, 0.06);
                border: 1px solid rgba(255, 255, 255, 0.12);
                color: #94a3b8;
                width: 22px;
                height: 22px;
                border-radius: 50%;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 0.75rem;
                transition: all 0.2s;
            }

            .updates-toggle-btn:hover {
                background: rgba(255, 51, 102, 0.3);
                color: #ffffff;
            }

            /* Title Banner */
            .updates-main-title {
                font-size: 0.86rem;
                font-weight: 800;
                color: #ffffff;
                margin-bottom: 2px;
            }

            .updates-main-sub {
                font-size: 0.66rem;
                color: #94a3b8;
                margin-bottom: 10px;
            }

            /* Scrollable Items Feed */
            .updates-items-feed {
                max-height: 260px;
                overflow-y: auto;
                padding-right: 4px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .updates-items-feed::-webkit-scrollbar {
                width: 4px;
            }
            .updates-items-feed::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.15);
                border-radius: 4px;
            }

            .update-item-row {
                background: rgba(5, 6, 11, 0.55);
                border: 1px solid rgba(255, 255, 255, 0.06);
                border-radius: 10px;
                padding: 8px 10px;
                transition: all 0.2s;
            }

            .update-item-row:hover {
                background: rgba(5, 6, 11, 0.85);
                border-color: rgba(255, 51, 102, 0.3);
            }

            .update-item-headline {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 6px;
                margin-bottom: 3px;
            }

            .update-item-title {
                font-size: 0.74rem;
                font-weight: 800;
                color: #ffffff;
            }

            .update-item-desc {
                font-size: 0.68rem;
                color: #94a3b8;
                line-height: 1.35;
            }

            .update-item-link {
                display: inline-block;
                margin-top: 5px;
                font-size: 0.68rem;
                font-weight: 700;
                color: #ff6b35;
                text-decoration: none;
                transition: all 0.2s;
            }

            .update-item-link:hover {
                color: #ff3366;
                text-decoration: underline;
            }

            /* Card Footer */
            .updates-card-footer {
                margin-top: 10px;
                padding-top: 8px;
                border-top: 1px solid rgba(255, 255, 255, 0.08);
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 0.64rem;
                color: #64748b;
            }

            .updates-quick-links {
                display: flex;
                gap: 8px;
            }

            .updates-quick-links a {
                color: #94a3b8;
                text-decoration: none;
                font-weight: 700;
                transition: color 0.2s;
            }

            .updates-quick-links a:hover {
                color: #ffffff;
            }
        `;
        document.head.appendChild(style);
    }

    // ── FETCH MASTER 100 LANGUAGES LIST ─────────────────────────────────────────
    function loadSupportedLanguages(callback) {
        fetch('/api/locales')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    supportedLangs = data;
                } else {
                    supportedLangs = fallbackLangsList();
                }
                if (callback) callback();
            })
            .catch(() => {
                supportedLangs = fallbackLangsList();
                if (callback) callback();
            });
    }

    function fallbackLangsList() {
        return [
            { code: 'ru', name: 'Russian', native: 'Русский', flag: '🇷🇺' },
            { code: 'en', name: 'English', native: 'English', flag: '🇺🇸' },
            { code: 'kk', name: 'Kazakh', native: 'Қазақша', flag: '🇰🇿' },
            { code: 'zh', name: 'Chinese', native: '中文', flag: '🇨🇳' },
            { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸' },
            { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪' },
            { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷' },
            { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇸🇦' },
            { code: 'ja', name: 'Japanese', native: '日本語', flag: '🇯🇵' },
            { code: 'pt', name: 'Portuguese', native: 'Português', flag: '🇧🇷' },
            { code: 'tr', name: 'Turkish', native: 'Türkçe', flag: '🇹🇷' },
            { code: 'ko', name: 'Korean', native: '한국어', flag: '🇰🇷' },
            { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
            { code: 'it', name: 'Italian', native: 'Italiano', flag: '🇮🇹' }
        ];
    }

    // ── RENDER WIDGET DOM ───────────────────────────────────────────────────────
    function renderWidget() {
        let dock = document.getElementById('litallyUpdatesDock');
        if (!dock) {
            dock = document.createElement('aside');
            dock.id = 'litallyUpdatesDock';
            dock.className = 'litally-updates-dock';
            document.body.appendChild(dock);
        }

        const t = getTranslation(currentLang);

        if (isCollapsed) {
            dock.innerHTML = `
                <div class="updates-minimized-pill" onclick="window.toggleLitallyUpdatesWidget(false)" title="${t.expandBtn}">
                    <span class="updates-pulse-dot"></span>
                    <span>${t.minimizedPill}</span>
                    <span style="font-size: 0.65rem; opacity: 0.7;">▲</span>
                </div>
            `;
            return;
        }

        // Build 100 language select options
        const langOptionsHtml = supportedLangs.map(l => {
            const isSel = l.code.toLowerCase() === currentLang.toLowerCase() ? 'selected' : '';
            return `<option value="${l.code}" ${isSel}>${l.flag || '🌐'} ${l.native || l.name}</option>`;
        }).join('');

        dock.innerHTML = `
            <div class="updates-card-box">
                <!-- TOP HEADER -->
                <div class="updates-card-header">
                    <div class="updates-header-left">
                        <span class="updates-pulse-dot"></span>
                        <span class="updates-badge-top">${t.badge}</span>
                    </div>

                    <div class="updates-header-actions">
                        <!-- 100 WORLD LANGUAGES PICKER -->
                        <select class="updates-lang-select" onchange="window.switchLitallyUpdatesLang(this.value)" title="${t.langLabel}">
                            ${langOptionsHtml}
                        </select>
                        <!-- MINIMIZE BUTTON -->
                        <button type="button" class="updates-toggle-btn" onclick="window.toggleLitallyUpdatesWidget(true)" title="${t.collapseBtn}">✕</button>
                    </div>
                </div>

                <!-- MAIN TITLES -->
                <div class="updates-main-title">${t.title}</div>
                <div class="updates-main-sub">${t.subtitle}</div>

                <!-- SCROLLABLE FEATURES FEED (FINE SMALL FONT) -->
                <div class="updates-items-feed">
                    <!-- 1. TREND SPY AI -->
                    <div class="update-item-row" style="border-left: 3px solid #ff3366;">
                        <div class="update-item-headline">
                            <span class="update-item-title">${t.trendSpyTitle}</span>
                            <span style="font-size: 0.62rem; color: #ff3366; font-weight: 800;">+990%</span>
                        </div>
                        <div class="update-item-desc">${t.trendSpyDesc}</div>
                        <a href="/trend-spy" target="_blank" class="update-item-link">${t.trendSpyBtn}</a>
                    </div>

                    <!-- 2. LITDEO 4K VIDEO -->
                    <div class="update-item-row" style="border-left: 3px solid #c084fc;">
                        <div class="update-item-headline">
                            <span class="update-item-title">${t.litdeoTitle}</span>
                            <span style="font-size: 0.62rem; color: #c084fc; font-weight: 800;">4K UHD</span>
                        </div>
                        <div class="update-item-desc">${t.litdeoDesc}</div>
                        <a href="/video-ai" target="_blank" class="update-item-link" style="color: #c084fc;">${t.litdeoBtn}</a>
                    </div>

                    <!-- 3. 129 QUADRILLION MATRIX -->
                    <div class="update-item-row" style="border-left: 3px solid #ffd700;">
                        <div class="update-item-headline">
                            <span class="update-item-title">${t.trillionTitle}</span>
                            <span style="font-size: 0.62rem; color: #ffd700; font-weight: 800;">10¹⁷</span>
                        </div>
                        <div class="update-item-desc">${t.trillionDesc}</div>
                    </div>

                    <!-- 4. REAL COMPUTER VISION -->
                    <div class="update-item-row" style="border-left: 3px solid #00f0ff;">
                        <div class="update-item-headline">
                            <span class="update-item-title">${t.visionTitle}</span>
                            <span style="font-size: 0.62rem; color: #00f0ff; font-weight: 800;">HEX %</span>
                        </div>
                        <div class="update-item-desc">${t.visionDesc}</div>
                    </div>

                    <!-- 5. 100 THEMES & 50 A11Y -->
                    <div class="update-item-row" style="border-left: 3px solid #10b981;">
                        <div class="update-item-headline">
                            <span class="update-item-title">${t.themesTitle}</span>
                            <span style="font-size: 0.62rem; color: #10b981; font-weight: 800;">100 Lang</span>
                        </div>
                        <div class="update-item-desc">${t.themesDesc}</div>
                    </div>
                </div>

                <!-- FOOTER -->
                <div class="updates-card-footer">
                    <span>${t.authorCredit}</span>
                    <div class="updates-quick-links">
                        <a href="/trend-spy" target="_blank">🔥 Trends</a>
                        <a href="/video-ai" target="_blank">🎬 Litdeo</a>
                        <a href="/" target="_blank">🏛️ Home</a>
                    </div>
                </div>
            </div>
        `;
    }

    // ── GLOBAL CONTROLS ─────────────────────────────────────────────────────────
    window.toggleLitallyUpdatesWidget = function (collapse) {
        isCollapsed = collapse;
        try {
            localStorage.setItem('litally_updates_collapsed', collapse ? 'true' : 'false');
        } catch (e) { }
        renderWidget();
    };

    window.switchLitallyUpdatesLang = function (newLang) {
        currentLang = newLang.toLowerCase();
        try {
            localStorage.setItem('preferred_locale', currentLang);
        } catch (e) { }
        renderWidget();
    };

    // ── INITIAL BOOTSTRAP ───────────────────────────────────────────────────────
    function init() {
        injectStyles();
        loadSupportedLanguages(() => {
            renderWidget();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
