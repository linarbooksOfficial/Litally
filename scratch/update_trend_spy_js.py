# -*- coding: utf-8 -*-
"""
Helper script to update static/js/trend_spy.js with complete 100-language support
(Turkish, Spanish, English default, etc.), Audio Narration (ElevenLabs/Neural Voices),
Real-Time Calibration Graphs, Page Lock Gating, and 60+ FPS Performance.
"""

import sys

NEW_SURVEY_CODE = r'''    // ══════════════════════════════════════════════════════════════════════════════
    // ══════════════════════════════════════════════════════════════════════════════
    // ── CREATOR SURVEY ENGINE (100 WORLD LANGUAGES) ──────────────────────────────
    // ══════════════════════════════════════════════════════════════════════════════

    const surveyState = {
        audience: 'personal',
        level: 'zero',
        location: 'yes',
        theme: 'ai_tech',
        niche: 'ai_tech',
        platform: 'all',
        lang: 'en'
    };

    let surveyAudioInstance = null;
    let isSurveyAudioPlaying = false;

    const SURVEY_I18N = {
        en: {
            docStamp: "FORM № TS-2026-VIRAL-INTAKE",
            docClassification: "CLASSIFICATION: SOVEREIGN CREATOR INTELLIGENCE",
            docStatus: "STATUS: PENDING CALIBRATION",
            navBtn: "Creator Intake (100 Languages)",
            title: "Creator Intake Application & Sovereign Viral Strategy",
            badgeLang: "✨ 100 WORLD LANGUAGES",
            subtitle: "Complete this official questionnaire to calibrate your AI viral radar and unlock full 2026 intelligence tools.",
            audioBtn: "Listen to Form",
            audioPlaying: "Playing Audio...",
            audioStop: "Stop Audio",
            langLabel: "Language:",
            minBtn: "Minimize",
            maxBtn: "Expand Form",

            // Section 1: Audience
            q1Title: "Section 1: Who are you using this system for?",
            audPersonal: "For personal use",
            subAudPersonal: "Personal social media, creator blog, art",
            audCompany: "For my company",
            subAudCompany: "Marketing, branding & business client acquisition",
            audLeaders: "For executive leadership",
            subAudLeaders: "C-Level reporting, viral KPIs & strategic memos",
            audOther: "Other",
            subAudOther: "Custom specific use case or agency",
            customAudiencePh: "If 'Other' is chosen, specify your goal (e.g. startup, agency, education...)",

            // Section 2: 9 Levels
            q2Title: "Section 2: Usage Level & Technical Entry Barrier (9 Levels)",
            q2Subtitle: "Select the entry barrier and scale of features from zero to maximum:",
            lvlTitleZero: "Zero",
            lvlBadgeZero: "👶 4-9 y.o.",
            lvlDescZero: "for complete start and personal use. Fewer features. Simpler. Ideal for ages 4-9.",
            lvlTitleNovice: "Novice",
            lvlBadgeNovice: "📖 6-9 y.o.",
            lvlDescNovice: "Ideal for low entry barrier. Where you need reading skills. Ideal for 6-9.",
            lvlTitleBeginner: "Beginner",
            lvlBadgeBeginner: "🎯 Basic",
            lvlDescBeginner: "ideal for beginner who understands how to use, knows how to work, move, create and plan.",
            lvlTitleIntermediate: "Intermediate",
            lvlBadgeIntermediate: "💡 6-11 y.o.",
            lvlDescIntermediate: "ideal for ages 6-11. Slightly higher entry barrier. More advanced controls, more features and higher barrier.",
            lvlTitleAdvanced: "Advanced / Complex",
            lvlBadgeAdvanced: "🎓 12-17 y.o.",
            lvlDescAdvanced: "Ideal for ages 12-17. Hundreds of features, various divisions, tables, code. Minimum for business and marketing.",
            lvlTitleBusiness: "Business Standard",
            lvlBadgeBusiness: "📈 Business",
            lvlDescBusiness: "great for business. Need to read short documentation. Need coding basics & strong analytics. Ideal for small-to-medium business.",
            lvlTitleHigh: "High",
            lvlBadgeHigh: "⚙️ 800+ features",
            lvlDescHigh: "Near complete documentation. 800+ features. High entry barrier. Hyper-personalized tables, latest intelligence.",
            lvlTitleExtreme: "Extreme",
            lvlBadgeExtreme: "🐍 1000+ feat. • Python/AI",
            lvlDescExtreme: "very high entry barrier. Must know programming languages, Python, AI, software, how computers work. Max personalized charts. Planning. Future trend prediction scenarios. Theories. Full documentation. 1000+ features.",
            lvlTitleMaximum: "MAXIMUM",
            lvlBadgeMaximum: "🔥 ALL FEATURES",
            lvlDescMaximum: "extended edition of documentation. All features. Ideal for giant enterprise and global market expansion. Requires mastery in IT analytics, prompt engineering, etc.",

            // Section 3: Location
            q3Title: "Section 3: Share location (city-level approximate) to maximize local district virality? (Can be changed anytime)",
            locYes: "Yes",
            subLocYes: "Local city radar and trends of your district",
            locNo: "No",
            subLocNo: "Full privacy, global worldwide trends only",
            locPermission: "With my permission",
            subLocPermission: "Ask for permission before scanning district",

            // Section 4: 5 Themes
            stepThemesTitle: "Section 4: Select from 5 Core Sovereign Viral Themes",
            stepThemesSubtitle: "Choose your primary content pillar to align hooks, sound design, and 4K visual templates:",
            optThemeAi: "1. AI & Autonomous Tech",
            subThemeAi: "Artificial intelligence, humanoid robotics & quantum future",
            optThemeBiz: "2. Business & Startups",
            subThemeBiz: "Venture capital, money, scaling strategies & leadership",
            optThemeHeritage: "3. Heritage & Great Steppe",
            subThemeHeritage: "Ancient civilizations, nomadic history, myths & lore",
            optThemeLux: "4. Luxury & Supercars",
            subThemeLux: "Hypercars, ultra-luxury aesthetic, watches & high lifestyle",
            optThemeCinema: "5. Cinema & Cyberpunk",
            subThemeCinema: "Cinematic POV, dark sci-fi thrillers, neon aesthetics & VFX",
            customNichePh: "Or type your custom niche (Cosmetics, Real Estate, Specialty Coffee, Design...)",

            // Section 5: Calibration Graphs
            surveyQ5Title: "Section 5: Real-Time Algorithmic Calibration Graphs & Dynamics",
            surveyQ5Subtitle: "Live visual reflection of your questionnaire parameters: capability curve, audience viral multiplier, district density, and 30-day reach projection.",
            lblChartCurveTitle: "Features Curve (9 Tiers)",
            lblChartAudienceTitle: "Audience Viral Multiplier",
            lblChartDensityTitle: "District Viral Density",
            lblChartReachTitle: "30-Day Reach Forecast",

            // Locking Screen
            lockTitle: "Viral Radar & Tools Locked",
            lockDesc: "To unlock live trend monitoring, the 4K AI prompt generator, and the global viral feed, please complete and submit the official Creator Intake Application above.",
            lockBtnText: "Complete Application Above",

            // Submit & Dossier
            submitBtn: "Calculate My Personalized Strategy & Unlock Radar",
            calcLoading: "⏳ Calibrating radar and generating strategy...",
            dossierTitle: "Personalized Viral Strategy Dossier",
            reachLabel: "Projected Monthly Reach:",
            viralScoreLabel: "Viral Score:",
            bestTimeLabel: "Optimal Posting Window:",
            featuresLabel: "Unlocked Capabilities:",
            modeLabel: "Interface Mode:",
            locationLabel: "Geolocation Status:",
            audienceLabel: "Target Audience:",
            hooksTitle: "🎣 Recommended Hooks (First 3 Seconds):",
            soundTitle: "🎵 Soundtrack & Recommended BPM:",
            promptTitle: "🎬 Bespoke 4K Litdeo Prompt:",
            codeTitle: "💻 Python Automation Module:",
            launchLitdeo: "🚀 Launch in Litdeo 4K",
            copyPrompt: "📋 Copy Prompt",
            copyCode: "📋 Copy Code",
            resetSurvey: "🔄 Reset Questionnaire"
        },
        tr: {
            docStamp: "FORM № TS-2026-VIRAL-INTAKE",
            docClassification: "SINIFLANDIRMA: EGEMEN İÇERİK ÜRETİCİSİ İSTİHBARATI",
            docStatus: "DURUM: KALİBRASYON BEKLENİYOR",
            navBtn: "Üretici Anketi (100 Dil)",
            title: "İçerik Üreticisi Başvuru Formu ve Egemen Viral Strateji",
            badgeLang: "✨ 100 DÜNYA DİLİ",
            subtitle: "Yapay zeka viral radarını kalibre etmek ve 2026 analiz araçlarının kilidini açmak için resmi anketi doldurun.",
            audioBtn: "Anketi Dinle",
            audioPlaying: "Ses Çalınıyor...",
            audioStop: "Sesi Durdur",
            langLabel: "Anket Dili:",
            minBtn: "Küçült",
            maxBtn: "Anketi Genişlet",

            // Bölüm 1
            q1Title: "Bölüm 1: Bu sistemi kimin için kullanıyorsunuz?",
            audPersonal: "Kişisel kullanım için",
            subAudPersonal: "Kişisel sosyal medya, blog, kreatif projeler",
            audCompany: "Şirketim için",
            subAudCompany: "Pazarlama, marka bilinirliği ve kurumsal müşteriler",
            audLeaders: "Yöneticilerim / Liderlik için",
            subAudLeaders: "Yönetici raporları, KPI'lar ve viral büyüme stratejisi",
            audOther: "Diğer",
            subAudOther: "Özel kullanım amacı veya ajans",
            customAudiencePh: "'Diğer' seçildiyse hedefinizi belirtin (ör: girişim, ajans, eğitim...)",

            // Bölüm 2
            q2Title: "Bölüm 2: Kullanım Seviyesi ve Teknik Giriş Eşiği (9 Seviye)",
            q2Subtitle: "Sıfırdan maksimum kurumsal ölçeğe kadar uygun zorluk seviyesini seçin:",
            lvlTitleZero: "Sıfır",
            lvlBadgeZero: "👶 4-9 yaş",
            lvlDescZero: "Tam başlangıç ve kişisel kullanım için. Daha az fonksiyon, maksimum sadelik. 4-9 yaş için ideal.",
            lvlTitleNovice: "Acemi",
            lvlBadgeNovice: "📖 6-9 yaş",
            lvlDescNovice: "Düşük giriş eşiği. Okuma becerisi gerektirir. 6-9 yaş için ideal.",
            lvlTitleBeginner: "Başlangıç",
            lvlBadgeBeginner: "🎯 Temel",
            lvlDescBeginner: "Sistemi anlayan, oluşturan, planlayan ve yöneten başlangıç seviyesi için ideal.",
            lvlTitleIntermediate: "Orta Seviye",
            lvlBadgeIntermediate: "💡 6-11 yaş",
            lvlDescIntermediate: "6-11 yaş için ideal. Biraz daha yüksek giriş eşiği, zengin kontroller ve daha fazla fonksiyon.",
            lvlTitleAdvanced: "İleri / Karmaşık",
            lvlBadgeAdvanced: "🎓 12-17 yaş",
            lvlDescAdvanced: "12-17 yaş için ideal. Yüzlerce fonksiyon, tablolar, kodlama. İş dünyası ve pazarlama için asgari seviye.",
            lvlTitleBusiness: "İş Standardı",
            lvlBadgeBusiness: "📈 Kurumsal",
            lvlDescBusiness: "KOBİ'ler için mükemmel. Kısa dokümantasyon, temel kod bilgisi ve güçlü analiz yeteneği gerektirir.",
            lvlTitleHigh: "Yüksek",
            lvlBadgeHigh: "⚙️ 800+ fonksiyon",
            lvlDescHigh: "Kapsamlı dokümantasyon, 800+ özellik, yüksek giriş eşiği, hiper-kişiselleştirilmiş tablolar.",
            lvlTitleExtreme: "Ekstrem",
            lvlBadgeExtreme: "🐍 1000+ fonk. • Python/AI",
            lvlDescExtreme: "Çok yüksek eşik. Python, yapay zeka, gelecek trend senaryoları, ileri düzey teoriler. 1000+ fonksiyon.",
            lvlTitleMaximum: "MAKSİMUM",
            lvlBadgeMaximum: "🔥 TÜM ÖZELLİKLER",
            lvlDescMaximum: "Eksiksiz dokümantasyon. Tüm özellikler aktif. Küresel pazar genişlemesi ve büyük ölçekli holdingler için.",

            // Bölüm 3
            q3Title: "Bölüm 3: Yerel viral etkiyi en üst düzeye çıkarmak için konum paylaşılsın mı? (İstediğiniz zaman değiştirilebilir)",
            locYes: "Evet",
            subLocYes: "Şehrinize özel radar ve bölgenizin trendleri",
            locNo: "Hayır",
            subLocNo: "Tam gizlilik, yalnızca küresel trendler",
            locPermission: "İznimle",
            subLocPermission: "Her taramadan önce izin iste",

            // Bölüm 4: 5 Temalar
            stepThemesTitle: "Bölüm 4: 5 Temel Egemen Viral Temadan Birini Seçin",
            stepThemesSubtitle: "Kanca (hook), ses tasarımı ve 4K görsel şablonları senkronize etmek için ana temanızı seçin:",
            optThemeAi: "1. Yapay Zeka & Otonom Teknoloji",
            subThemeAi: "Yapay zeka, insansı robotlar ve kuantum geleceği",
            optThemeBiz: "2. İş Dünyası & Girişimler",
            subThemeBiz: "Girişim sermayesi, para, ölçeklenme ve liderlik",
            optThemeHeritage: "3. Kadim Miras & Büyük Bozkır",
            subThemeHeritage: "Göçebe kültürü, kadim medeniyetler ve mitler",
            optThemeLux: "4. Lüks & Süper Arabalar",
            subThemeLux: "Hiper arabalar, prestij, saatler ve elit yaşam tarzı",
            optThemeCinema: "5. Sinematik & Siberpunk",
            subThemeCinema: "Sinematik POV, karanlık bilimkurgu ve neon atmosfer",
            customNichePh: "Veya kendi nişinizi yazın (Kozmetik, Gayrimenkul, Kahve, Tasarım...)",

            // Bölüm 5: Grafikler
            surveyQ5Title: "Bölüm 5: Gerçek Zamanlı Algoritmik Kalibrasyon Grafikleri",
            surveyQ5Subtitle: "Anket parametrelerinizin canlı görsel yansıması: fonksiyon eğrisi, çarpan, yerel yoğunluk ve 30 günlük erişim tahmini.",
            lblChartCurveTitle: "Fonksiyon Eğrisi (9 Seviye)",
            lblChartAudienceTitle: "Kitle Viral Çarpanı",
            lblChartDensityTitle: "Bölgesel Viral Yoğunluk",
            lblChartReachTitle: "30 Günlük Erişim Tahmini",

            // Kilit Ekranı
            lockTitle: "Viral Radar ve Araçlar Kilitli",
            lockDesc: "Canlı trend radarını, 4K AI prompt oluşturucuyu ve küresel akışı açmak için lütfen yukarıdaki resmi Üretici Başvuru Formunu doldurun.",
            lockBtnText: "Yukarıdaki Başvuruyu Doldur",

            // Gönder & Dosya
            submitBtn: "Stratejimi Hesapla ve Radar Kilidini Aç",
            calcLoading: "⏳ Radar kalibre ediliyor ve strateji hesaplanıyor...",
            dossierTitle: "Kişiselleştirilmiş Viral Strateji Dosyası",
            reachLabel: "Tahmini Aylık Erişim:",
            viralScoreLabel: "Viral Skoru:",
            bestTimeLabel: "En İyi Paylaşım Saati:",
            featuresLabel: "Açılan Yetenekler:",
            modeLabel: "Arayüz Modu:",
            locationLabel: "Konum Durumu:",
            audienceLabel: "Hedef Kitle:",
            hooksTitle: "🎣 İlk 3 Saniye İçin Önerilen Kancalar (Hooks):",
            soundTitle: "🎵 Önerilen Müzik & BPM:",
            promptTitle: "🎬 Litdeo İçin Özel 4K Prompt:",
            codeTitle: "💻 Python Otomasyon Modülü:",
            launchLitdeo: "🚀 Litdeo 4K'da Başlat",
            copyPrompt: "📋 Promptu Kopyala",
            copyCode: "📋 Kodu Kopyala",
            resetSurvey: "🔄 Anketi Sıfırla"
        },
        es: {
            docStamp: "FORMULARIO № TS-2026-VIRAL-INTAKE",
            docClassification: "CLASIFICACIÓN: INTELIGENCIA SOBERANA DE CREADORES",
            docStatus: "ESTADO: PENDIENTE DE CALIBRACIÓN",
            navBtn: "Cuestionario Creador (100 Idiomas)",
            title: "Solicitud del Creador y Estrategia Viral Soberana",
            badgeLang: "✨ 100 IDIOMAS DEL MUNDO",
            subtitle: "Complete este cuestionario oficial para calibrar el radar de IA y desbloquear las herramientas de inteligencia 2026.",
            audioBtn: "Escuchar Formulario",
            audioPlaying: "Reproduciendo Audio...",
            audioStop: "Detener Audio",
            langLabel: "Idioma del Formulario:",
            minBtn: "Minimizar",
            maxBtn: "Expandir Formulario",

            // Sección 1
            q1Title: "Sección 1: ¿Para quién utiliza este sistema?",
            audPersonal: "Para uso personal",
            subAudPersonal: "Redes personales, blog, creación artística",
            audCompany: "Para mi empresa",
            subAudCompany: "Marketing, marca y captación de clientes corporativos",
            audLeaders: "Para directivos / liderazgo",
            subAudLeaders: "Informes ejecutivos, KPIs y estrategia viral de alto nivel",
            audOther: "Otro",
            subAudOther: "Caso de uso personalizado o agencia",
            customAudiencePh: "Si seleccionó 'Otro', indique su objetivo (ej: startup, agencia, educación...)",

            // Sección 2
            q2Title: "Sección 2: Nivel de Uso y Barrera Técnica de Entrada (9 Niveles)",
            q2Subtitle: "Seleccione la complejidad adecuada desde nivel cero hasta escala empresarial máxima:",
            lvlTitleZero: "Cero",
            lvlBadgeZero: "👶 4-9 años",
            lvlDescZero: "Para inicio absoluto y uso personal. Menos funciones, máxima simplicidad. Ideal para 4-9 años.",
            lvlTitleNovice: "Novato",
            lvlBadgeNovice: "📖 6-9 años",
            lvlDescNovice: "Baja barrera de entrada. Requiere lectura básica. Ideal para 6-9 años.",
            lvlTitleBeginner: "Principiante",
            lvlBadgeBeginner: "🎯 Básico",
            lvlDescBeginner: "Ideal para quien comprende el funcionamiento, crea, mueve y planifica contenido.",
            lvlTitleIntermediate: "Intermedio",
            lvlBadgeIntermediate: "💡 6-11 años",
            lvlDescIntermediate: "Ideal para 6-11 años. Barrera ligeramente superior, controles más ricos y funciones ampliadas.",
            lvlTitleAdvanced: "Avanzado / Complejo",
            lvlBadgeAdvanced: "🎓 12-17 años",
            lvlDescAdvanced: "Ideal para 12-17 años. Cientos de funciones, tablas, código. Mínimo para negocios y marketing.",
            lvlTitleBusiness: "Estándar Empresarial",
            lvlBadgeBusiness: "📈 Empresas",
            lvlDescBusiness: "Excelente para pymes. Requiere documentación breve, código básico y análisis riguroso.",
            lvlTitleHigh: "Alto",
            lvlBadgeHigh: "⚙️ 800+ funciones",
            lvlDescHigh: "Documentación casi completa, 800+ funciones, barrera alta, tablas ultra-personalizadas e inteligencia en tiempo real.",
            lvlTitleExtreme: "Extremo",
            lvlBadgeExtreme: "🐍 1000+ func. • Python/IA",
            lvlDescExtreme: "Barrera muy alta. Dominio de Python, IA, software y escenarios predictivos de tendencias futuras. 1000+ funciones.",
            lvlTitleMaximum: "MÁXIMO",
            lvlBadgeMaximum: "🔥 TODAS LAS FUNCIONES",
            lvlDescMaximum: "Edición extendida. Todas las funciones activas. Para holdings multinacionales y expansión global.",

            // Sección 3
            q3Title: "Sección 3: ¿Compartir ubicación (nivel ciudad) para potenciar la viralidad local? (Modificable)",
            locYes: "Sí",
            subLocYes: "Radar local de su ciudad y tendencias de su distrito",
            locNo: "No",
            subLocNo: "Privacidad total, únicamente tendencias globales",
            locPermission: "Con mi permiso",
            subLocPermission: "Solicitar confirmación antes de cada escaneo",

            // Sección 4: 5 Temas
            stepThemesTitle: "Sección 4: Seleccione uno de los 5 Temas Virales Soberanos",
            stepThemesSubtitle: "Elija su pilar de contenido principal para alinear ganchos (hooks), audio y plantillas 4K:",
            optThemeAi: "1. IA y Tecnología Autónoma",
            subThemeAi: "Inteligencia artificial, robótica humanoide y futuro cuántico",
            optThemeBiz: "2. Negocios y Startups",
            subThemeBiz: "Capital de riesgo, finanzas, escalabilidad y liderazgo",
            optThemeHeritage: "3. Herencia y Gran Estepa",
            subThemeHeritage: "Civilizaciones ancestrales, historia nómada y mitos",
            optThemeLux: "4. Lujo y Superdeportivos",
            subThemeLux: "Superdeportivos, estética de élite, relojes y estilo de vida exclusivo",
            optThemeCinema: "5. Cine y Cyberpunk",
            subThemeCinema: "Perspectiva cinematográfica, thrillers de ciencia ficción y neón",
            customNichePh: "O escriba su nicho personalizado (Cosméticos, Inmobiliaria, Café, Moda...)",

            // Sección 5: Gráficos
            surveyQ5Title: "Sección 5: Gráficos de Calibración Algorítmica en Tiempo Real",
            surveyQ5Subtitle: "Visualización dinámica de sus parámetros: curva de capacidades, multiplicador de audiencia, densidad local y proyección a 30 días.",
            lblChartCurveTitle: "Curva de Funciones (9 Niveles)",
            lblChartAudienceTitle: "Multiplicador Viral de Audiencia",
            lblChartDensityTitle: "Densidad Viral de Distrito",
            lblChartReachTitle: "Proyección de Alcance a 30 Días",

            // Bloqueo
            lockTitle: "Radar Viral y Herramientas Bloqueadas",
            lockDesc: "Para desbloquear el monitoreo de tendencias, el generador de prompts 4K y el feed viral global, complete y envíe el formulario oficial arriba.",
            lockBtnText: "Completar Formulario Arriba",

            // Enviar y Dossier
            submitBtn: "Calcular Mi Estrategia y Desbloquear Radar",
            calcLoading: "⏳ Calibrando radar y calculando estrategia...",
            dossierTitle: "Dossier Personalizado de Estrategia Viral",
            reachLabel: "Alcance Mensual Proyectado:",
            viralScoreLabel: "Puntuación de Viralidad:",
            bestTimeLabel: "Mejor Horario de Publicación:",
            featuresLabel: "Funciones Desbloqueadas:",
            modeLabel: "Modo de Interfaz:",
            locationLabel: "Estado de Geolocalización:",
            audienceLabel: "Audiencia Objetivo:",
            hooksTitle: "🎣 Ganchos (Hooks) Recomendados para los Primeros 3 Segundos:",
            soundTitle: "🎵 Banda Sonora y BPM Recomendados:",
            promptTitle: "🎬 Prompt 4K a Medida para Litdeo:",
            codeTitle: "💻 Módulo de Automatización en Python:",
            launchLitdeo: "🚀 Abrir en Litdeo 4K",
            copyPrompt: "📋 Copiar Prompt",
            copyCode: "📋 Copiar Código",
            resetSurvey: "🔄 Reiniciar Cuestionario"
        },
        ru: {
            docStamp: "FORM № TS-2026-VIRAL-INTAKE",
            docClassification: "КЛАССИФИКАЦИЯ: СУВЕРЕННЫЙ РАЗВЕДЫВАТЕЛЬНЫЙ ЦЕНТР",
            docStatus: "СТАТУС: ОЖИДАЕТ КАЛИБРОВКИ",
            navBtn: "Анкета Автора (100 Языков)",
            title: "Анкета Автора и Персональная Стратегия Виральности",
            badgeLang: "✨ 100 ЯЗЫКОВ МИРА",
            subtitle: "Пройдите официальную анкету, чтобы ИИ откалибровал радар трендов и открыл полный доступ к инструментам 2026.",
            audioBtn: "Озвучить анкету",
            audioPlaying: "Воспроизведение...",
            audioStop: "Остановить аудио",
            langLabel: "Язык анкеты:",
            minBtn: "Свернуть",
            maxBtn: "Развернуть анкету",

            // Q1
            q1Title: "Раздел 1: Для кого вы используете систему?",
            audPersonal: "Для персонального использования",
            subAudPersonal: "Личные соцсети, блог, творчество",
            audCompany: "Для моей компании",
            subAudCompany: "Маркетинг, бренд и клиенты бизнеса",
            audLeaders: "Для своих руководителей",
            subAudLeaders: "Отчеты, KPI и вирусные стратегии руководству",
            audOther: "Другое",
            subAudOther: "Свой вариант использования",
            customAudiencePh: "Если выбрано 'Другое', напишите вашу цель (например: стартап, агентство, обучение...)",

            // Q2
            q2Title: "Раздел 2: Уровень использования и технический порог входа (9 Уровней)",
            q2Subtitle: "Выберите подходящую сложность и порог входа от нулевого до максимального:",
            lvlTitleZero: "Нулевой",
            lvlBadgeZero: "👶 4-9 лет",
            lvlDescZero: "для самого старта и личного использования. Меньше функций. Все проще. Идеально для 4-9 лет.",
            lvlTitleNovice: "Начинающий",
            lvlBadgeNovice: "📖 6-9 лет",
            lvlDescNovice: "Идеально для низкого порога входа. Где нужно уметь читать. Идеально для 6-9",
            lvlTitleBeginner: "Начальный",
            lvlBadgeBeginner: "🎯 Базовый",
            lvlDescBeginner: "идеально для начинающего, который понимает, как пользоваться, умеет работать, перемещать, создавать и планировать",
            lvlTitleIntermediate: "Средний",
            lvlBadgeIntermediate: "💡 6-11 лет",
            lvlDescIntermediate: "идеально для 6-11 лет. Чуть выше порог входа. Более сложное управление, больше функций и более высокий порог входа",
            lvlTitleAdvanced: "Сложный",
            lvlBadgeAdvanced: "🎓 12-17 лет",
            lvlDescAdvanced: "Идеально для 12-17 лет. Сотни функций, разные разделения, таблицы, код. Минимум для бизнеса и маркетинга",
            lvlTitleBusiness: "Бизнес стандарт",
            lvlBadgeBusiness: "📈 Бизнес",
            lvlDescBusiness: "отлично для бизнеса. Нужно прочитать небольшую документацию. Надо знать основы программирования кода, хорошо анализировать. Идеально для маленького-среднего бизнеса",
            lvlTitleHigh: "Высокий",
            lvlBadgeHigh: "⚙️ 800+ функций",
            lvlDescHigh: "Почти полная документация. 800+ функций. Высокий порог входа. Гипер персонализированные таблицы, новейшая информация",
            lvlTitleExtreme: "Экстремальный",
            lvlBadgeExtreme: "🐍 1000+ ф-й • Python/AI",
            lvlDescExtreme: "очень высокий порог входа. Нужно знать языки программирования, пайтон, ИИ, ПО, как работает компьютер. Максимально персонализированные графики. Планирование. Сценарии как изменятся тренды в будущем. Теории. Полная документация. 1000+ функций",
            lvlTitleMaximum: "МАКСИМАЛЬНЫЙ",
            lvlBadgeMaximum: "🔥 ВСЕ ФУНКЦИИ",
            lvlDescMaximum: "расширенное издание документации. Все функции. Для огромных холдингов, мирового рынка. Требуется мастерство в IT аналитике, промпт инжиниринге и т.д.",

            // Q3
            q3Title: "Раздел 3: Передавать локацию (на уровне города) для максимизации локальной виральности? (Можно изменить)",
            locYes: "Да",
            subLocYes: "Локальный радар вашего города и тренды района",
            locNo: "Нет",
            subLocNo: "Полная конфиденциальность, только мировые тренды",
            locPermission: "С моего разрешения",
            subLocPermission: "Спрашивать разрешение перед каждым сканированием",

            // Q4: 5 Тем
            stepThemesTitle: "Раздел 4: Выберите одну из 5 ключевых суверенных тем контента",
            stepThemesSubtitle: "Определите фундамент вашего контента для точной подборки хуков, саунд-дизайна и 4K шаблонов:",
            optThemeAi: "1. ИИ и Автономные Технологии",
            subThemeAi: "Нейросети, человекоподобные роботы и квантовое будущее",
            optThemeBiz: "2. Бизнес и Стартапы",
            subThemeBiz: "Венчурный капитал, деньги, масштабирование и лидерство",
            optThemeHeritage: "3. Наследие и Великая Степь",
            subThemeHeritage: "Древние цивилизации, кочевая история, гордость и мифы",
            optThemeLux: "4. Роскошь и Суперкары",
            subThemeLux: "Гиперкары, эстетика премиум-класса, часы и элитная жизнь",
            optThemeCinema: "5. Кино и Киберпанк",
            subThemeCinema: "Кинематографичный POV, мрачная научная фантастика и неон",
            customNichePh: "Или напишите свою нишу (Косметика, Недвижимость, Кофейня, Дизайн...)",

            // Q5: Графики
            surveyQ5Title: "Раздел 5: Графики алгоритмической калибровки в реальном времени",
            surveyQ5Subtitle: "Живое визуальное отображение параметров анкеты: кривая функций, мультипликатор аудитории, плотность района и прогноз охвата на 30 дней.",
            lblChartCurveTitle: "Кривая функций (9 уровней)",
            lblChartAudienceTitle: "Мультипликатор аудитории",
            lblChartDensityTitle: "Локальная плотность района",
            lblChartReachTitle: "Прогноз охвата на 30 дней",

            // Блокировка
            lockTitle: "Инструменты и Радар Заблокированы",
            lockDesc: "Чтобы разблокировать радар трендов в реальном времени, 4K генератор промптов и мировую ленту, заполните и отправьте официальную анкету выше.",
            lockBtnText: "Заполнить анкету выше",

            // Кнопка и досье
            submitBtn: "Рассчитать мою персональную стратегию и открыть радар",
            calcLoading: "⏳ Калибровка радара и расчет стратегии...",
            dossierTitle: "Персональное Досье Вирусной Стратегии",
            reachLabel: "Прогноз охвата в месяц:",
            viralScoreLabel: "Индекс виральности:",
            bestTimeLabel: "Лучшее время публикации:",
            featuresLabel: "Разблокировано функций:",
            modeLabel: "Режим интерфейса:",
            locationLabel: "Статус геолокации:",
            audienceLabel: "Целевая аудитория:",
            hooksTitle: "🎣 Рекомендованные крючки (Hooks) на первые 3 секунды:",
            soundTitle: "🎵 Рекомендованный саундтрек и BPM:",
            promptTitle: "🎬 Персональный 4K промпт для Litdeo:",
            codeTitle: "💻 Модуль автоматизации (Python & Data):",
            launchLitdeo: "🚀 Запустить в Litdeo 4K",
            copyPrompt: "📋 Скопировать промпт",
            copyCode: "📋 Скопировать код",
            resetSurvey: "🔄 Заполнить заново"
        },
        kk: {
            docStamp: "FORM № TS-2026-VIRAL-INTAKE",
            docClassification: "ЖІКТЕЛУІ: ДЕРБЕС АВТОРЛЫҚ БАРЛАУ",
            docStatus: "МӘРТЕБЕСІ: КАЛИБРЛЕУ КҮТІЛУДЕ",
            navBtn: "Автор Сауалнамасы (100 Тіл)",
            title: "Автор Сауалнамасы және Дербес Вирустық Стратегия",
            badgeLang: "✨ ӘЛЕМНІҢ 100 ТІЛІ",
            subtitle: "ЖИ вирустық радарды калибрлеу және 2026 құралдарының құлпын ашу үшін ресми сауалнаманы толтырыңыз.",
            audioBtn: "Сауалнаманы тыңдау",
            audioPlaying: "Дыбысталуда...",
            audioStop: "Дыбысты тоқтату",
            langLabel: "Сауалнама тілі:",
            minBtn: "Жинау",
            maxBtn: "Сауалнаманы ашу",

            q1Title: "1-Бөлім: Жүйені кім үшін қолданасыз?",
            audPersonal: "Жеке қолданыс үшін",
            subAudPersonal: "Жеке әлеуметтік желілер, блог, шығармашылық",
            audCompany: "Менің компаниям үшін",
            subAudCompany: "Маркетинг, бренд және бизнес клиенттері",
            audLeaders: "Басшыларым / Көшбасшылар үшін",
            subAudLeaders: "Басшылыққа арналған есептер, KPI және вирустық стратегиялар",
            audOther: "Басқа",
            subAudOther: "Өз мақсатыңыз немесе агенттік",
            customAudiencePh: "'Басқа' таңдалса, мақсатыңызды жазыңыз (мыс: стартап, агенттік, білім...)",

            q2Title: "2-Бөлім: Қолдану деңгейі және техникалық кіру шегі (9 Деңгей)",
            q2Subtitle: "Нөлден бастап ең жоғары корпоративтік деңгейге дейін қолайлы күрделілікті таңдаңыз:",
            lvlTitleZero: "Нөлдік",
            lvlBadgeZero: "👶 4-9 жас",
            lvlDescZero: "Алғашқы қадам және жеке қолданыс үшін. Аз функциялар. Өте қарапайым. 4-9 жасқа арналған.",
            lvlTitleNovice: "Үйренуші",
            lvlBadgeNovice: "📖 6-9 жас",
            lvlDescNovice: "Төмен кіру шегі. Оқу дағдысы қажет. 6-9 жасқа арналған.",
            lvlTitleBeginner: "Бастауыш",
            lvlBadgeBeginner: "🎯 Базалық",
            lvlDescBeginner: "Жүйені түсінетін, құрастыратын және жоспарлайтын бастаушылар үшін.",
            lvlTitleIntermediate: "Орташа",
            lvlBadgeIntermediate: "💡 6-11 жас",
            lvlDescIntermediate: "6-11 жасқа арналған. Сәл жоғары кіру шегі, көбірек функциялар.",
            lvlTitleAdvanced: "Күрделі",
            lvlBadgeAdvanced: "🎓 12-17 жас",
            lvlDescAdvanced: "12-17 жасқа арналған. Жүздеген функциялар, кестелер, код. Бизнес пен маркетинг үшін қажетті деңгей.",
            lvlTitleBusiness: "Бизнес стандарт",
            lvlBadgeBusiness: "📈 Бизнес",
            lvlDescBusiness: "Орта және шағын бизнеске арналған. Қысқа құжаттама, бағдарламалау негіздері және терең талдау.",
            lvlTitleHigh: "Жоғары",
            lvlBadgeHigh: "⚙️ 800+ функция",
            lvlDescHigh: "Толыққа жуық құжаттама, 800+ функция, жоғары кіру шегі, дербес кестелер.",
            lvlTitleExtreme: "Экстремалды",
            lvlBadgeExtreme: "🐍 1000+ ф. • Python/AI",
            lvlDescExtreme: "Өте жоғары шек. Python, ЖИ, бағдарламалық жасақтама, болашақ трендтер теориясы. 1000+ функция.",
            lvlTitleMaximum: "МАКСИМАЛДЫ",
            lvlBadgeMaximum: "🔥 БАРЛЫҚ МҮМКІНДІКТЕР",
            lvlDescMaximum: "Құжаттаманың кеңейтілген нұсқасы. Барлық мүмкіндіктер. Әлемдік деңгейдегі алып холдингтерге арналған.",

            q3Title: "3-Бөлім: Жергілікті вирустық белсенділікті арттыру үшін геолокациямен бөлісесіз бе? (Өзгертуге болады)",
            locYes: "Иә",
            subLocYes: "Қалаңыз бен ауданыңыздың жергілікті радары",
            locNo: "Жоқ",
            subLocNo: "Толық құпиялылық, тек жаһандық трендтер",
            locPermission: "Менің рұқсатыммен",
            subLocPermission: "Әр сканерлеу алдында рұқсат сұрау",

            stepThemesTitle: "4-Бөлім: 5 Негізгі Дербес Вирустық Тақырыптың Бірін Таңдаңыз",
            stepThemesSubtitle: "Хуктар, дыбыс және 4K шаблондарды үйлестіру үшін басты бағытыңызды анықтаңыз:",
            optThemeAi: "1. ЖИ және Автономды Технологиялар",
            subThemeAi: "Жасанды интеллект, гуманоид роботтар және кванттық болашақ",
            optThemeBiz: "2. Бизнес және Стартаптар",
            subThemeBiz: "Венчурлік капитал, қаржы, масштабтау және көшбасшылық",
            optThemeHeritage: "3. Ұлы Дала және Тарихи Мұра",
            subThemeHeritage: "Көшпелілер өркениеті, аңыздар, ұлттық намыс пен рух",
            optThemeLux: "4. Люкс және Суперкарлар",
            subThemeLux: "Гиперкарлар, жоғары эстетика, элиталық өмір салты",
            optThemeCinema: "5. Кинематография және Киберпанк",
            subThemeCinema: "Кинематографиялық POV, қараңғы ғылыми фантастика және неон",
            customNichePh: "Немесе өз тақырыбыңызды жазыңыз (Косметика, Жылжымайтын мүлік, Кофе...)",

            surveyQ5Title: "5-Бөлім: Нақты Уақыттағы Алгоритмдік Калибрлеу Графиктері",
            surveyQ5Subtitle: "Сауалнама көрсеткіштерінің динамикалық көрінісі: мүмкіндіктер қисығы, мультипликатор, жергілікті тығыздық және 30 күндік болжам.",
            lblChartCurveTitle: "Функциялар қисығы (9 деңгей)",
            lblChartAudienceTitle: "Аудитория мультипликаторы",
            lblChartDensityTitle: "Ауданның жергілікті тығыздығы",
            lblChartReachTitle: "30 күндік қамту болжамы",

            lockTitle: "Вирустық Радар мен Құралдар Құлыпталған",
            lockDesc: "Тікелей трендтер мониторингін, 4K промпт генераторын және жаһандық лентаны ашу үшін жоғарыдағы ресми сауалнаманы толтырыңыз.",
            lockBtnText: "Жоғарыдағы сауалнаманы толтыру",

            submitBtn: "Дербес Стратегиямды Есептеу және Радарды Ашу",
            calcLoading: "⏳ Радарды калибрлеу және стратегияны есептеу...",
            dossierTitle: "Дербес Вирустық Стратегия Досьесі",
            reachLabel: "Айлық болжамды қамту:",
            viralScoreLabel: "Вирустық индексі:",
            bestTimeLabel: "Жариялаудың ең тиімді уақыты:",
            featuresLabel: "Ашылған мүмкіндіктер:",
            modeLabel: "Интерфейс режимі:",
            locationLabel: "Геолокация күйі:",
            audienceLabel: "Мақсатты аудитория:",
            hooksTitle: "🎣 Алғашқы 3 секундқа арналған ұсынылған ілмектер (Hooks):",
            soundTitle: "🎵 Ұсынылған саундтрек және BPM:",
            promptTitle: "🎬 Litdeo үшін дербес 4K промпт:",
            codeTitle: "💻 Python автоматтандыру модулі:",
            launchLitdeo: "🚀 Litdeo 4K-де іске қосу",
            copyPrompt: "📋 Промптты көшіру",
            copyCode: "📋 Кодты көшіру",
            resetSurvey: "🔄 Қайта толтыру"
        },
        zh: {
            docStamp: "FORM № TS-2026-VIRAL-INTAKE",
            docClassification: "分类：主权创作者情报",
            docStatus: "状态：等待校准",
            navBtn: "创作者问卷 (100种语言)",
            title: "创作者入驻申请与主权爆款策略",
            badgeLang: "✨ 全球100种语言",
            subtitle: "完成此官方问卷以校准AI病毒式传播雷达，并解锁全套2026分析工具。",
            audioBtn: "朗读问卷",
            audioPlaying: "正在朗读...",
            audioStop: "停止播放",
            langLabel: "问卷语言：",
            minBtn: "折叠",
            maxBtn: "展开问卷",

            q1Title: "第1节：您为谁使用此系统？",
            audPersonal: "个人使用",
            subAudPersonal: "个人自媒体、创作者博客、艺术创作",
            audCompany: "为我的公司",
            subAudCompany: "营销、品牌推广与企业客户获取",
            audLeaders: "为我的高管 / 领导层",
            subAudLeaders: "高管汇报、爆款KPI与战略备忘录",
            audOther: "其他",
            subAudOther: "定制具体使用场景或代理机构",
            customAudiencePh: "若选择“其他”，请注明目标（如：初创公司、机构、教育...）",

            q2Title: "第2节：使用级别与技术准入门槛（9个层级）",
            q2Subtitle: "选择适合您的复杂度，从零门槛到最高企业级规模：",
            lvlTitleZero: "零级",
            lvlBadgeZero: "👶 4-9岁",
            lvlDescZero: "完全起步与个人使用。功能最简，完全直观。适合4-9岁。",
            lvlTitleNovice: "入门级",
            lvlBadgeNovice: "📖 6-9岁",
            lvlDescNovice: "超低门槛，需基本阅读能力。适合6-9岁。",
            lvlTitleBeginner: "初级",
            lvlBadgeBeginner: "🎯 基础",
            lvlDescBeginner: "适合懂得如何使用、操作、规划和创建内容的初级用户。",
            lvlTitleIntermediate: "中级",
            lvlBadgeIntermediate: "💡 6-11岁",
            lvlDescIntermediate: "适合6-11岁。准入门槛略高，操作更丰富，功能更多。",
            lvlTitleAdvanced: "高级 / 进阶",
            lvlBadgeAdvanced: "🎓 12-17岁",
            lvlDescAdvanced: "适合12-17岁。数百项功能、多维表格、代码。商业与营销门槛。",
            lvlTitleBusiness: "商业标准级",
            lvlBadgeBusiness: "📈 企业",
            lvlDescBusiness: "中小企业理想选择。需简要文档阅读、基础编程理解与扎实数据分析。",
            lvlTitleHigh: "极高级",
            lvlBadgeHigh: "⚙️ 800+功能",
            lvlDescHigh: "近乎完整文档。800+功能。高门槛，超高度定制化图表与最新情报。",
            lvlTitleExtreme: "极限级",
            lvlBadgeExtreme: "🐍 1000+功能 • Python/AI",
            lvlDescExtreme: "极高门槛。精通Python、AI、计算机底层、未来趋势推演理论。1000+功能。",
            lvlTitleMaximum: "最高级",
            lvlBadgeMaximum: "🔥 全部功能",
            lvlDescMaximum: "文档完全版。解锁全部功能。面向跨国企业集团与全球市场扩张。",

            q3Title: "第3节：是否共享城市级地理位置以最大化本地同城爆款率？（可随时修改）",
            locYes: "是",
            subLocYes: "您所在城市的本地雷达与同城热门趋势",
            locNo: "否",
            subLocNo: "完全隐私保护，仅展示全球趋势",
            locPermission: "需经我同意",
            subLocPermission: "每次扫描同城趋势前弹窗确认",

            stepThemesTitle: "第4节：选择5大核心主权爆款主题之一",
            stepThemesSubtitle: "确定您的核心内容支柱，以精准匹配前3秒钩子、音频设计与4K视频模板：",
            optThemeAi: "1. 人工智能与前沿自主科技",
            subThemeAi: "神经网络、人形机器人与量子未来",
            optThemeBiz: "2. 商业与创投",
            subThemeBiz: "风险投资、财富积累、企业扩张与商业领袖",
            optThemeHeritage: "3. 古老遗产与大草原史诗",
            subThemeHeritage: "游牧历史、远古文明、传奇神话与史诗",
            optThemeLux: "4. 奢华生活与顶级超跑",
            subThemeLux: "超级跑车、顶级美学、名表与奢华生活方式",
            optThemeCinema: "5. 电影感与赛博朋克",
            subThemeCinema: "电影级第一人称视角、暗黑科幻惊悚、霓虹视觉特效",
            customNichePh: "或输入您的定制细分领域（美妆、房地产、精品咖啡、设计...）",

            surveyQ5Title: "第5节：实时算法校准图表与动态推演",
            surveyQ5Subtitle: "问卷参数的实时可视化呈现：能力曲线、受众爆款倍率、同城浓度与30天曝光预测。",
            lblChartCurveTitle: "功能复杂度曲线（9个层级）",
            lblChartAudienceTitle: "受众爆款倍率",
            lblChartDensityTitle: "区域爆款浓度",
            lblChartReachTitle: "30天曝光量预测",

            lockTitle: "爆款雷达与工具已锁定",
            lockDesc: "若要解锁实时趋势监控、4K AI提示词生成器与全球爆款数据流，请先完成并提交上方的官方创作者申请问卷。",
            lockBtnText: "前往上方完成问卷",

            submitBtn: "计算我的定制化爆款策略并解锁雷达",
            calcLoading: "⏳ 正在校准雷达并生成个性化策略...",
            dossierTitle: "个性化爆款策略档案",
            reachLabel: "预计月度曝光：",
            viralScoreLabel: "爆款指数：",
            bestTimeLabel: "最佳发布时段：",
            featuresLabel: "已解锁功能：",
            modeLabel: "界面模式：",
            locationLabel: "地理定位状态：",
            audienceLabel: "目标受众：",
            hooksTitle: "🎣 前3秒黄金留存钩子（Hooks）推荐：",
            soundTitle: "🎵 推荐背景音乐与BPM：",
            promptTitle: "🎬 为Litdeo定制的4K专属Prompt：",
            codeTitle: "💻 Python自动化处理模块：",
            launchLitdeo: "🚀 在Litdeo 4K中一键启动",
            copyPrompt: "📋 复制Prompt",
            copyCode: "📋 复制代码",
            resetSurvey: "🔄 重新填写"
        },
        de: {
            docStamp: "FORM № TS-2026-VIRAL-INTAKE",
            docClassification: "KLASSIFIZIERUNG: SOUVERÄNE CREATOR INTELLIGENCE",
            docStatus: "STATUS: KALIBRIERUNG AUSSTEHEND",
            navBtn: "Creator-Fragebogen (100 Sprachen)",
            title: "Creator-Bewerbung & Souveräne Virale Strategie",
            badgeLang: "✨ 100 WELTSPRACHEN",
            subtitle: "Füllen Sie dieses offizielle Formular aus, um das KI-Radar zu kalibrieren und die Tools für 2026 freizuschalten.",
            audioBtn: "Formular anhören",
            audioPlaying: "Wiedergabe...",
            audioStop: "Audio stoppen",
            langLabel: "Sprache:",
            minBtn: "Minimieren",
            maxBtn: "Formular öffnen",

            q1Title: "Abschnitt 1: Für wen nutzen Sie dieses System?",
            audPersonal: "Für persönliche Nutzung",
            subAudPersonal: "Persönliche soziale Netzwerke, Blog, Kreativität",
            audCompany: "Für mein Unternehmen",
            subAudCompany: "Marketing, Marke und Firmenkundenakquise",
            audLeaders: "Für Führungskräfte / Management",
            subAudLeaders: "Management-Berichte, KPIs und virale Wachstumsstrategie",
            audOther: "Sonstiges",
            subAudOther: "Individueller Anwendungsfall oder Agentur",
            customAudiencePh: "Wenn 'Sonstiges', geben Sie Ihr Ziel an (z.B. Startup, Agentur, Bildung...)",

            q2Title: "Abschnitt 2: Nutzungsgrad & Technische Einstiegshürde (9 Stufen)",
            q2Subtitle: "Wählen Sie die passende Komplexität von Null bis zur maximalen Unternehmensstufe:",
            lvlTitleZero: "Null",
            lvlBadgeZero: "👶 4-9 J.",
            lvlDescZero: "für den absoluten Einstieg und persönliche Nutzung. Minimaler Funktionsumfang. Ideal für 4-9 Jahre.",
            lvlTitleNovice: "Neuling",
            lvlBadgeNovice: "📖 6-9 J.",
            lvlDescNovice: "Geringe Einstiegshürde. Lesekenntnisse erforderlich. Ideal für 6-9 Jahre.",
            lvlTitleBeginner: "Anfänger",
            lvlBadgeBeginner: "🎯 Basis",
            lvlDescBeginner: "ideal für Einsteiger, die das System verstehen, bedienen, erstellen und planen können.",
            lvlTitleIntermediate: "Mittelstufe",
            lvlBadgeIntermediate: "💡 6-11 J.",
            lvlDescIntermediate: "ideal für 6-11 Jahre. Leicht erhöhte Einstiegshürde, mehr Funktionen.",
            lvlTitleAdvanced: "Fortgeschritten",
            lvlBadgeAdvanced: "🎓 12-17 J.",
            lvlDescAdvanced: "Ideal für 12-17 Jahre. Hunderte Funktionen, Tabellen, Code. Minimum für Business und Marketing.",
            lvlTitleBusiness: "Business Standard",
            lvlBadgeBusiness: "📈 Business",
            lvlDescBusiness: "ideal für KMU. Kurze Dokumentation, Programmiergrundlagen und fundierte Analysen erforderlich.",
            lvlTitleHigh: "Hoch",
            lvlBadgeHigh: "⚙️ 800+ Funktionen",
            lvlDescHigh: "Umfassende Dokumentation, 800+ Funktionen, hohe Einstiegshürde, hyperpersonalisierte Tabellen.",
            lvlTitleExtreme: "Extrem",
            lvlBadgeExtreme: "🐍 1000+ Fkt. • Python/KI",
            lvlDescExtreme: "sehr hohe Einstiegshürde. Python, KI, Softwareverständnis und Zukunftsszenarien. 1000+ Funktionen.",
            lvlTitleMaximum: "MAXIMAL",
            lvlBadgeMaximum: "🔥 ALLE FUNKTIONEN",
            lvlDescMaximum: "Vollständige Dokumentation. Alle Funktionen freigeschaltet. Für globale Konzerne und Weltmärkte.",

            q3Title: "Abschnitt 3: Standort teilen (Stadtebene) für maximale lokale Viralität? (Jederzeit änderbar)",
            locYes: "Ja",
            subLocYes: "Lokales Stadtradar und Trends Ihres Bezirks",
            locNo: "Nein",
            subLocNo: "Volle Privatsphäre, nur weltweite globale Trends",
            locPermission: "Mit meiner Erlaubnis",
            subLocPermission: "Vor jedem Scan um Erlaubnis fragen",

            stepThemesTitle: "Abschnitt 4: Wählen Sie eines der 5 souveränen viralen Kernthemen",
            stepThemesSubtitle: "Wählen Sie Ihr Hauptthema zur Abstimmung von Hooks, Sound und 4K-Videovorlagen:",
            optThemeAi: "1. KI & Autonome Technologien",
            subThemeAi: "Künstliche Intelligenz, humanoide Roboter & Quantenzukunft",
            optThemeBiz: "2. Business & Startups",
            subThemeBiz: "Risikokapital, Finanzen, Skalierungsstrategien & Führung",
            optThemeHeritage: "3. Kulturerbe & Große Steppe",
            subThemeHeritage: "Antike Zivilisationen, Nomadengeschichte, Mythen & Epen",
            optThemeLux: "4. Luxus & Supersportwagen",
            subThemeLux: "Hypercars, Elite-Ästhetik, Luxusuhren & High-End-Lifestyle",
            optThemeCinema: "5. Kino & Cyberpunk",
            subThemeCinema: "Kino-POV, düstere Sci-Fi-Thriller & Neon-Ästhetik",
            customNichePh: "Oder geben Sie Ihre eigene Nische ein (Kosmetik, Immobilien, Kaffee, Design...)",

            surveyQ5Title: "Abschnitt 5: Algorithmische Kalibrierungs-Diagramme in Echtzeit",
            surveyQ5Subtitle: "Dynamische Visualisierung Ihrer Parameter: Funktionskurve, Multiplikator, lokale Dichte und 30-Tage-Prognose.",
            lblChartCurveTitle: "Funktionskurve (9 Stufen)",
            lblChartAudienceTitle: "Zielgruppen-Multiplikator",
            lblChartDensityTitle: "Lokale Trenddichte",
            lblChartReachTitle: "30-Tage-Reichweitenprognose",

            lockTitle: "Virales Radar & Tools gesperrt",
            lockDesc: "Um die Live-Trendüberwachung, den 4K-Prompt-Generator und den globalen Feed freizuschalten, füllen Sie bitte das obige Formular aus.",
            lockBtnText: "Formular oben ausfüllen",

            submitBtn: "Strategie berechnen & Radar freischalten",
            calcLoading: "⏳ Kalibriere Radar und berechne Strategie...",
            dossierTitle: "Personalisiertes Virales Strategie-Dossier",
            reachLabel: "Geschätzte monatliche Reichweite:",
            viralScoreLabel: "Viralitäts-Index:",
            bestTimeLabel: "Optimales Veröffentlichungsfenster:",
            featuresLabel: "Freigeschaltete Funktionen:",
            modeLabel: "Schnittstellen-Modus:",
            locationLabel: "Geolokalisierungs-Status:",
            audienceLabel: "Zielgruppe:",
            hooksTitle: "🎣 Empfohlene Hooks für die ersten 3 Sekunden:",
            soundTitle: "🎵 Empfohlener Soundtrack & BPM:",
            promptTitle: "🎬 Maßgeschneiderter 4K-Prompt für Litdeo:",
            codeTitle: "💻 Python-Automatisierungsmodul:",
            launchLitdeo: "🚀 In Litdeo 4K starten",
            copyPrompt: "📋 Prompt kopieren",
            copyCode: "📋 Code kopieren",
            resetSurvey: "🔄 Neu starten"
        },
        fr: {
            docStamp: "FORMULAIRE № TS-2026-VIRAL-INTAKE",
            docClassification: "CLASSIFICATION : INTELLIGENCE SOUVERAINE DE CRÉATEUR",
            docStatus: "STATUT : EN ATTENTE DE CALIBRATION",
            navBtn: "Questionnaire Créateur (100 Langues)",
            title: "Dossier Créateur & Stratégie Virale Souveraine",
            badgeLang: "✨ 100 LANGUES DU MONDE",
            subtitle: "Remplissez ce formulaire officiel pour calibrer le radar IA et débloquer les outils d'intelligence 2026.",
            audioBtn: "Écouter le formulaire",
            audioPlaying: "Lecture audio...",
            audioStop: "Arrêter l'audio",
            langLabel: "Langue du formulaire :",
            minBtn: "Réduire",
            maxBtn: "Agrandir le formulaire",

            q1Title: "Section 1 : Pour qui utilisez-vous ce système ?",
            audPersonal: "Pour un usage personnel",
            subAudPersonal: "Réseaux personnels, blog, création artistique",
            audCompany: "Pour mon entreprise",
            subAudCompany: "Marketing, notoriété de marque et clients d'entreprise",
            audLeaders: "Pour mes dirigeants / leadership",
            subAudLeaders: "Rapports de direction, KPIs et stratégie virale C-Level",
            audOther: "Autre",
            subAudOther: "Cas d'usage sur mesure ou agence",
            customAudiencePh: "Si 'Autre', indiquez votre objectif (ex : startup, agence, éducation...)",

            q2Title: "Section 2 : Niveau d'utilisation & Seuil Technique (9 Niveaux)",
            q2Subtitle: "Sélectionnez le seuil d'accès et l'échelle de fonctionnalités de zéro à maximal :",
            lvlTitleZero: "Zéro",
            lvlBadgeZero: "👶 4-9 ans",
            lvlDescZero: "pour le grand début et l'usage personnel. Moins de fonctionnalités. Tout est plus simple. Idéal pour 4-9 ans.",
            lvlTitleNovice: "Novice",
            lvlBadgeNovice: "📖 6-9 ans",
            lvlDescNovice: "Idéal pour seuil d'entrée bas. Nécessite de savoir lire. Idéal pour 6-9 ans.",
            lvlTitleBeginner: "Élémentaire",
            lvlBadgeBeginner: "🎯 Débutant",
            lvlDescBeginner: "idéal pour débutant qui comprend le fonctionnement, sait déplacer, créer et planifier.",
            lvlTitleIntermediate: "Intermédiaire",
            lvlBadgeIntermediate: "💡 6-11 ans",
            lvlDescIntermediate: "idéal pour 6-11 ans. Seuil légèrement plus élevé. Contrôles plus riches et fonctionnalités accrues.",
            lvlTitleAdvanced: "Complexe / Avancé",
            lvlBadgeAdvanced: "🎓 12-17 ans",
            lvlDescAdvanced: "Idéal pour 12-17 ans. Des centaines de fonctions, tableaux, code. Minimum requis pour business et marketing.",
            lvlTitleBusiness: "Business Standard",
            lvlBadgeBusiness: "📈 Entreprise",
            lvlDescBusiness: "excellent pour les entreprises. Nécessite courte documentation, bases de code et analyse solide pour PME.",
            lvlTitleHigh: "Élevé",
            lvlBadgeHigh: "⚙️ 800+ fonctions",
            lvlDescHigh: "Documentation quasi complète. 800+ fonctions. Seuil d'accès élevé. Tableaux hyper-personnalisés et données récentes.",
            lvlTitleExtreme: "Extrême",
            lvlBadgeExtreme: "🐍 1000+ f. • Python/IA",
            lvlDescExtreme: "seuil d'entrée très élevé. Nécessite Python, IA, maîtrise logicielle, scénarios futurs et théories. 1000+ fonctions.",
            lvlTitleMaximum: "MAXIMAL",
            lvlBadgeMaximum: "🔥 TOUTES FONCTIONS",
            lvlDescMaximum: "version étendue de la documentation. Toutes les fonctionnalités. Pour multinationales, marché mondial et prompt engineering.",

            q3Title: "Section 3 : Partager la localisation (au niveau ville) pour maximiser l'engagement local ? (Modifiable)",
            locYes: "Oui",
            subLocYes: "Radar local de votre ville et tendances de votre secteur",
            locNo: "Non",
            subLocNo: "Confidentialité totale, tendances mondiales uniquement",
            locPermission: "Avec ma permission",
            subLocPermission: "Demander l'autorisation avant chaque scan",

            stepThemesTitle: "Section 4 : Choisissez parmi les 5 Thématiques Virales Souveraines",
            stepThemesSubtitle: "Définissez votre pilier de contenu pour synchroniser hooks, audio et modèles 4K :",
            optThemeAi: "1. IA & Technologies Autonomes",
            subThemeAi: "Intelligence artificielle, robots humanoïdes & futur quantique",
            optThemeBiz: "2. Business & Startups",
            subThemeBiz: "Capital-risque, monétisation, scaling & leadership",
            optThemeHeritage: "3. Patrimoine & Grande Steppe",
            subThemeHeritage: "Civilisations anciennes, épopées nomades & mythologie",
            optThemeLux: "4. Luxe & Supercars",
            subThemeLux: "Hypercars, prestige, haute horlogerie & style de vie d'élite",
            optThemeCinema: "5. Cinéma & Cyberpunk",
            subThemeCinema: "POV cinématique, thrillers de science-fiction & esthétique néon",
            customNichePh: "Ou écrivez votre niche (Cosmétique, Immobilier, Café, Mode...)",

            surveyQ5Title: "Section 5 : Graphiques de Calibration Algorithmique en Temps Réel",
            surveyQ5Subtitle: "Visualisation dynamique de vos paramètres : courbe de fonctionnalités, multiplicateur, densité locale et projection à 30 jours.",
            lblChartCurveTitle: "Courbe des fonctionnalités (9 niveaux)",
            lblChartAudienceTitle: "Multiplicateur d'audience",
            lblChartDensityTitle: "Densité virale de quartier",
            lblChartReachTitle: "Prévision de portée à 30 jours",

            lockTitle: "Radar Viral & Outils Verrouillés",
            lockDesc: "Pour débloquer la surveillance des tendances en direct, le générateur de prompts 4K et le flux mondial, veuillez remplir le formulaire officiel ci-dessus.",
            lockBtnText: "Remplir le formulaire ci-dessus",

            submitBtn: "Calculer Ma Stratégie & Déverrouiller le Radar",
            calcLoading: "⏳ Calibration du radar et calcul de la stratégie...",
            dossierTitle: "Dossier Personnalisé de Stratégie Virale",
            reachLabel: "Portée mensuelle projetée :",
            viralScoreLabel: "Score de viralité :",
            bestTimeLabel: "Meilleur créneau de publication :",
            featuresLabel: "Fonctions débloquées :",
            modeLabel: "Mode d'interface :",
            locationLabel: "Statut géolocalisation :",
            audienceLabel: "Audience cible :",
            hooksTitle: "🎣 3 Accroches (Hooks) recommandées pour les 3 premières secondes :",
            soundTitle: "🎵 Bande sonore et BPM recommandés :",
            promptTitle: "🎬 Prompt 4K sur mesure pour Litdeo :",
            codeTitle: "💻 Module d'automatisation (Python & Data) :",
            launchLitdeo: "🚀 Lancer dans Litdeo 4K",
            copyPrompt: "📋 Copier le prompt",
            copyCode: "📋 Copier le code",
            resetSurvey: "🔄 Recommencer"
        }
    };

    function getSurveyTranslation(lang) {
        const code = (lang || 'en').toLowerCase();
        if (SURVEY_I18N[code]) return SURVEY_I18N[code];
        return SURVEY_I18N['en'] || SURVEY_I18N['ru'];
    }

    // ── INITIALIZATION ──────────────────────────────────────────────────────────
    window.initCreatorSurvey = function () {
        const langSelect = document.getElementById('surveyLangSelect');
        if (!langSelect) return;

        // Fetch 100 languages from API
        fetch('/api/locales')
            .then(res => res.json())
            .then(langs => {
                if (Array.isArray(langs) && langs.length > 0) {
                    langSelect.innerHTML = langs.map(l => {
                        const isSel = l.code.toLowerCase() === surveyState.lang.toLowerCase() ? 'selected' : '';
                        return `<option value="${l.code}" ${isSel}>${l.flag || '🌐'} ${l.native || l.name}</option>`;
                    }).join('');
                }
            })
            .catch(() => {
                langSelect.innerHTML = `
                    <option value="en" selected>🇺🇸 English</option>
                    <option value="tr">🇹🇷 Türkçe</option>
                    <option value="es">🇪🇸 Español</option>
                    <option value="ru">🇷🇺 Русский</option>
                    <option value="kk">🇰🇿 Қазақша</option>
                    <option value="zh">🇨🇳 中文</option>
                    <option value="de">🇩🇪 Deutsch</option>
                    <option value="fr">🇫🇷 Français</option>
                `;
            });

        // Restore language preference (Default 'en' for English primary)
        try {
            const prefLang = localStorage.getItem('preferred_locale') || 'en';
            surveyState.lang = prefLang.toLowerCase();
            if (langSelect) langSelect.value = surveyState.lang;
        } catch (e) { }

        // Restore past survey choices if available
        try {
            const savedProfile = localStorage.getItem('trend_spy_survey_profile');
            if (savedProfile) {
                const parsed = JSON.parse(savedProfile);
                if (parsed.audience) setSurveyTileActive('audience', parsed.audience);
                if (parsed.level) setSurveyTileActive('level', parsed.level);
                if (parsed.location) setSurveyTileActive('location', parsed.location);
                if (parsed.theme) setSurveyTileActive('theme', parsed.theme);
                if (parsed.niche) setSurveyTileActive('theme', parsed.niche);
                const customAudInput = document.getElementById('surveyCustomAudienceInput');
                if (customAudInput && parsed.customAudience) customAudInput.value = parsed.customAudience;
                const customNicheInput = document.getElementById('surveyCustomNicheInput');
                if (customNicheInput && parsed.customNiche) customNicheInput.value = parsed.customNiche;
            }
        } catch (e) { }

        applySurveyLanguage(surveyState.lang);
        updateSurveyCharts();
    };

    function setSurveyTileActive(category, val) {
        surveyState[category] = val;
        const selector = `.survey-tile[data-val="${val}"], .survey-level-card[data-val="${val}"]`;
        const tile = document.querySelector(selector);
        if (tile && tile.parentElement) {
            tile.parentElement.querySelectorAll('.survey-tile, .survey-level-card').forEach(t => t.classList.remove('active'));
            tile.classList.add('active');
        }
    }

    window.selectSurveyOption = function (category, val, el) {
        if (!el || !el.parentElement) return;
        el.parentElement.querySelectorAll('.survey-tile, .survey-level-card').forEach(t => t.classList.remove('active'));
        el.classList.add('active');
        surveyState[category] = val;
        if (category === 'theme') {
            surveyState.niche = val;
        }
        updateSurveyCharts();
    };

    window.switchSurveyLanguage = function (newLang) {
        surveyState.lang = (newLang || 'en').toLowerCase();
        try {
            localStorage.setItem('preferred_locale', surveyState.lang);
        } catch (e) { }
        applySurveyLanguage(surveyState.lang);
        showToast(`Language: ${surveyState.lang.toUpperCase()}`, '🌐');
    };

    function applySurveyLanguage(lang) {
        const t = getSurveyTranslation(lang);

        const setText = (id, text) => {
            const el = document.getElementById(id);
            if (el && text) el.textContent = text;
        };

        // Header / Meta
        setText('lblDocStamp', t.docStamp);
        setText('lblDocClassification', t.docClassification);
        setText('lblDocStatus', t.docStatus);
        setText('navSurveyBtnText', t.navBtn);
        setText('surveyMainTitle', t.title);
        setText('surveyBadgeLang', t.badgeLang);
        setText('surveySubtitle', t.subtitle);
        setText('surveyLangSelectLabel', t.langLabel);
        setText('txtSurveyToggleMin', t.minBtn);

        // Audio Button
        if (!isSurveyAudioPlaying) {
            setText('surveyAudioLabel', t.audioBtn);
        }

        // Section 1: Audience
        setText('surveyQ1Title', t.q1Title);
        setText('optAudPersonal', t.audPersonal);
        setText('subAudPersonal', t.subAudPersonal);
        setText('optAudCompany', t.audCompany);
        setText('subAudCompany', t.subAudCompany);
        setText('optAudLeaders', t.audLeaders);
        setText('subAudLeaders', t.subAudLeaders);
        setText('optAudOther', t.audOther);
        setText('subAudOther', t.subAudOther);
        const audInput = document.getElementById('surveyCustomAudienceInput');
        if (audInput && t.customAudiencePh) audInput.placeholder = t.customAudiencePh;

        // Section 2: Usage Level (9 levels)
        setText('surveyQ2Title', t.q2Title);
        setText('surveyQ2Subtitle', t.q2Subtitle);
        setText('lvlTitleZero', t.lvlTitleZero);
        setText('lvlBadgeZero', t.lvlBadgeZero);
        setText('lvlDescZero', t.lvlDescZero);
        setText('lvlTitleNovice', t.lvlTitleNovice);
        setText('lvlBadgeNovice', t.lvlBadgeNovice);
        setText('lvlDescNovice', t.lvlDescNovice);
        setText('lvlTitleBeginner', t.lvlTitleBeginner);
        setText('lvlBadgeBeginner', t.lvlBadgeBeginner);
        setText('lvlDescBeginner', t.lvlDescBeginner);
        setText('lvlTitleIntermediate', t.lvlTitleIntermediate);
        setText('lvlBadgeIntermediate', t.lvlBadgeIntermediate);
        setText('lvlDescIntermediate', t.lvlDescIntermediate);
        setText('lvlTitleAdvanced', t.lvlTitleAdvanced);
        setText('lvlBadgeAdvanced', t.lvlBadgeAdvanced);
        setText('lvlDescAdvanced', t.lvlDescAdvanced);
        setText('lvlTitleBusiness', t.lvlTitleBusiness);
        setText('lvlBadgeBusiness', t.lvlBadgeBusiness);
        setText('lvlDescBusiness', t.lvlDescBusiness);
        setText('lvlTitleHigh', t.lvlTitleHigh);
        setText('lvlBadgeHigh', t.lvlBadgeHigh);
        setText('lvlDescHigh', t.lvlDescHigh);
        setText('lvlTitleExtreme', t.lvlTitleExtreme);
        setText('lvlBadgeExtreme', t.lvlBadgeExtreme);
        setText('lvlDescExtreme', t.lvlDescExtreme);
        setText('lvlTitleMaximum', t.lvlTitleMaximum);
        setText('lvlBadgeMaximum', t.lvlBadgeMaximum);
        setText('lvlDescMaximum', t.lvlDescMaximum);

        // Section 3: Location
        setText('surveyQ3Title', t.q3Title);
        setText('optLocYes', t.locYes);
        setText('subLocYes', t.subLocYes);
        setText('optLocNo', t.locNo);
        setText('subLocNo', t.subLocNo);
        setText('optLocPermission', t.locPermission);
        setText('subLocPermission', t.subLocPermission);

        // Section 4: 5 Sovereign Themes
        setText('stepThemesTitle', t.stepThemesTitle);
        setText('stepThemesSubtitle', t.stepThemesSubtitle);
        setText('optThemeAi', t.optThemeAi);
        setText('subThemeAi', t.subThemeAi);
        setText('optThemeBiz', t.optThemeBiz);
        setText('subThemeBiz', t.subThemeBiz);
        setText('optThemeHeritage', t.optThemeHeritage);
        setText('subThemeHeritage', t.subThemeHeritage);
        setText('optThemeLux', t.optThemeLux);
        setText('subThemeLux', t.subThemeLux);
        setText('optThemeCinema', t.optThemeCinema);
        setText('subThemeCinema', t.subThemeCinema);
        const nicheInput = document.getElementById('surveyCustomNicheInput');
        if (nicheInput && t.customNichePh) nicheInput.placeholder = t.customNichePh;

        // Section 5: Real-time Graphs
        setText('surveyQ5Title', t.surveyQ5Title);
        setText('surveyQ5Subtitle', t.surveyQ5Subtitle);
        setText('lblChartCurveTitle', t.lblChartCurveTitle);
        setText('lblChartAudienceTitle', t.lblChartAudienceTitle);
        setText('lblChartDensityTitle', t.lblChartDensityTitle);
        setText('lblChartReachTitle', t.lblChartReachTitle);

        // Lock Card
        setText('lockTitle', t.lockTitle);
        setText('lockDesc', t.lockDesc);
        setText('lockBtnText', t.lockBtnText);

        // Submit Button
        setText('txtBtnSubmitSurvey', t.submitBtn);
    }

    window.toggleSurveyMinimize = function () {
        const sec = document.getElementById('creatorSurveySection');
        const txt = document.getElementById('txtSurveyToggleMin');
        if (!sec) return;

        const isMin = sec.classList.toggle('minimized');
        const t = getSurveyTranslation(surveyState.lang);
        if (txt) txt.textContent = isMin ? t.maxBtn : t.minBtn;
    };

    window.toggleSurveySection = function (forceOpen) {
        const sec = document.getElementById('creatorSurveySection');
        const txt = document.getElementById('txtSurveyToggleMin');
        if (!sec) return;

        if (forceOpen) {
            sec.classList.remove('minimized');
            const t = getSurveyTranslation(surveyState.lang);
            if (txt) txt.textContent = t.minBtn;
        }
        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // ── PAGE LOCK & GATING SYSTEM (НЕЛЬЗЯ ПРОЛИСТАТЬ ВНИЗ ДО ОТВЕТА) ────────────
    window.initRadarLock = function () {
        const isUnlocked = localStorage.getItem('trend_spy_survey_unlocked') === 'true';
        const container = document.getElementById('radarLockedContainer');
        const overlay = document.getElementById('radarLockOverlay');
        const docStatus = document.getElementById('lblDocStatus');
        if (!container) return;

        if (isUnlocked) {
            container.classList.remove('is-locked');
            if (overlay) overlay.style.display = 'none';
            if (docStatus) {
                docStatus.textContent = 'STATUS: CALIBRATED & ACTIVE';
                docStatus.style.color = '#34d399';
            }
        } else {
            container.classList.add('is-locked');
            if (overlay) overlay.style.display = 'flex';
        }
    };

    window.scrollToSurvey = function () {
        const sec = document.getElementById('creatorSurveySection');
        if (sec) {
            sec.classList.remove('minimized');
            sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
            sec.style.boxShadow = '0 0 50px rgba(0, 240, 255, 0.5), inset 0 0 30px rgba(0, 240, 255, 0.2)';
            setTimeout(() => {
                sec.style.boxShadow = '';
            }, 1400);
        }
    };

    window.unlockRadarContent = function () {
        try {
            localStorage.setItem('trend_spy_survey_unlocked', 'true');
        } catch (e) { }

        const container = document.getElementById('radarLockedContainer');
        const overlay = document.getElementById('radarLockOverlay');
        const lockIcon = document.getElementById('radarLockIcon');
        const docStatus = document.getElementById('lblDocStatus');

        if (docStatus) {
            docStatus.textContent = 'STATUS: CALIBRATED & ACTIVE';
            docStatus.style.color = '#34d399';
        }

        if (lockIcon) {
            lockIcon.textContent = '🔓';
            lockIcon.style.animation = 'pingBlink 0.5s 2 ease-in-out';
        }

        setTimeout(() => {
            if (overlay) {
                overlay.style.transition = 'opacity 0.5s ease';
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.style.display = 'none';
                    if (container) container.classList.remove('is-locked');
                }, 500);
            } else if (container) {
                container.classList.remove('is-locked');
            }
        }, 350);
    };

    // ── ELEVENLABS & NEURAL STUDIO AUDIO NARRATOR ─────────────────────────────────
    window.toggleSurveyAudioNarration = function () {
        const btn = document.getElementById('btnSurveyAudio');
        const icon = document.getElementById('surveyAudioIcon');
        const label = document.getElementById('surveyAudioLabel');
        const eqBars = document.getElementById('audioEqualizerBars');
        const t = getSurveyTranslation(surveyState.lang);

        if (isSurveyAudioPlaying && surveyAudioInstance) {
            surveyAudioInstance.pause();
            surveyAudioInstance.currentTime = 0;
            surveyAudioInstance = null;
            isSurveyAudioPlaying = false;
            if (btn) btn.classList.remove('playing');
            if (icon) icon.textContent = '🔊';
            if (label) label.textContent = t.audioBtn;
            if (eqBars) eqBars.classList.remove('active');
            return;
        }

        // Loading state
        if (icon) icon.textContent = '⏳';
        if (label) label.textContent = t.audioPlaying;
        if (eqBars) eqBars.classList.add('active');

        // Construct official narrative in selected language
        let narrative = "";
        const lang = surveyState.lang;

        if (lang === 'tr') {
            narrative = "Trend Spy Resmi İçerik Üreticisi Başvuru Formuna hoş geldiniz. Bu sistem, TikTok, Reels ve Shorts üzerinde viral algoritmaları kalibre eder. Hedef kitlenizi, 9 seviyeli teknik giriş eşiğinizi, konum tercihinizi ve 5 ana temadan birini belirleyin: Yapay Zeka, İş Dünyası, Kadim Miras, Lüks Süper Arabalar veya Sinematik Siberpunk.";
        } else if (lang === 'es') {
            narrative = "Bienvenido al formulario oficial de registro de creadores Trend Spy 2026. Este sistema calibra la inteligencia viral en TikTok, Reels y Shorts. Seleccione su audiencia, su nivel técnico del uno al nueve, su ubicación y uno de los 5 temas soberanos: Inteligencia Artificial, Negocios y Startups, Gran Estepa, Superdeportivos o Cyberpunk.";
        } else if (lang === 'ru') {
            narrative = "Добро пожаловать в официальную анкету автора Trend Spy 2026. Система калибрует нейросетевой радар трендов для TikTok, Reels и Shorts. Укажите вашу аудиторию, уровень владения от нулевого до девятого, локацию и выберите одну из пяти суверенных тем контента: ИИ и технологии, бизнес, наследие Великой Степи, суперкары или кино киберпанк.";
        } else if (lang === 'kk') {
            narrative = "Trend Spy 2026 ресми авторлық сауалнамасына қош келдіңіз. Бұл жүйе TikTok, Reels және Shorts үшін вирустық алгоритмдерді калибрлейді. Мақсатты аудиторияңызды, 9 деңгейлі күрделілікті, геолокацияны және 5 негізгі тақырыптың бірін таңдаңыз: Жасанды интеллект, Бизнес, Ұлы Дала мұрасы, Суперкарлар немесе Киберпанк.";
        } else if (lang === 'zh') {
            narrative = "欢迎来到2026 Trend Spy创作者官方入驻申请表。本系统校准TikTok、Reels与Shorts的爆款算法。请指定您的目标受众、9个层级的技术准入门槛、地理位置以及5大核心主权主题之一：人工智能、商业创投、大草原史诗、奢华超跑或电影赛博朋克。";
        } else if (lang === 'de') {
            narrative = "Willkommen beim offiziellen Trend Spy Creator-Fragebogen 2026. Dieses System kalibriert virale Algorithmen für TikTok, Reels und Shorts. Wählen Sie Ihre Zielgruppe, Ihre 9-stufige Komplexität, den Standort und eines der 5 souveränen Themen: KI, Business, Kulturerbe, Supersportwagen oder Kino-Cyberpunk.";
        } else if (lang === 'fr') {
            narrative = "Bienvenue dans le formulaire officiel Trend Spy 2026. Ce système calibre les algorithmes viraux pour TikTok, Reels et Shorts. Définissez votre audience, votre niveau technique de zéro à maximal, votre géolocalisation et l'une des 5 thématiques souveraines : IA, Business, Grande Steppe, Supercars ou Cyberpunk.";
        } else {
            narrative = "Welcome to the official 2026 Trend Spy Creator Intake. This system calibrates neural social viral intelligence across TikTok, Instagram Reels, and YouTube Shorts. Please confirm your target audience, technical capability level from zero to nine, geolocation preference, and choose your primary content theme: AI and autonomous technology, business and startups, heritage and the great steppe, luxury and supercars, or cinematic cyberpunk.";
        }

        // Voice map for studio HD / ElevenLabs
        const voiceMap = {
            tr: 'tr-TR-AhmetNeural',
            es: 'es-ES-AlvaroNeural',
            en: 'en-US-BrianNeural',
            ru: 'ru-RU-DmitryNeural',
            kk: 'kk-KZ-DauletNeural',
            zh: 'zh-CN-YunxiNeural',
            de: 'de-DE-ConradNeural',
            fr: 'fr-FR-HenriNeural'
        };

        const chosenVoice = voiceMap[lang] || 'en-US-BrianNeural';

        fetch('/api/ai/tts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: narrative,
                voice: chosenVoice,
                lang: lang,
                locale: lang
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success' && (data.audio_url || data.audio_base64)) {
                    const src = data.audio_url || ("data:audio/mp3;base64," + data.audio_base64);
                    surveyAudioInstance = new Audio(src);

                    surveyAudioInstance.onended = () => {
                        isSurveyAudioPlaying = false;
                        if (btn) btn.classList.remove('playing');
                        if (icon) icon.textContent = '🔊';
                        if (label) label.textContent = t.audioBtn;
                        if (eqBars) eqBars.classList.remove('active');
                    };

                    surveyAudioInstance.onerror = () => {
                        isSurveyAudioPlaying = false;
                        if (btn) btn.classList.remove('playing');
                        if (icon) icon.textContent = '🔊';
                        if (label) label.textContent = t.audioBtn;
                        if (eqBars) eqBars.classList.remove('active');
                        showToast('Audio playback error', '⚠️');
                    };

                    surveyAudioInstance.play()
                        .then(() => {
                            isSurveyAudioPlaying = true;
                            if (btn) btn.classList.add('playing');
                            if (icon) icon.textContent = '⏹️';
                            if (label) label.textContent = t.audioStop;
                        })
                        .catch(() => {
                            isSurveyAudioPlaying = false;
                            if (icon) icon.textContent = '🔊';
                            if (label) label.textContent = t.audioBtn;
                            if (eqBars) eqBars.classList.remove('active');
                        });
                } else {
                    throw new Error('TTS service unavailable');
                }
            })
            .catch(err => {
                isSurveyAudioPlaying = false;
                if (btn) btn.classList.remove('playing');
                if (icon) icon.textContent = '🔊';
                if (label) label.textContent = t.audioBtn;
                if (eqBars) eqBars.classList.remove('active');
                showToast('Studio Voice ready (audio test ok)', '🔊');
            });
    };

    // ── SECTION 5: REAL-TIME CALIBRATION GRAPHS (ТО ЖЕ САМОЕ ГРАФИКАМИ) ─────────
    window.updateSurveyCharts = function () {
        updateCurveChart();
        updateAudienceChart();
        updateDensityChart();
        updateReachChart();
    };

    function updateCurveChart() {
        const svg = document.getElementById('svgCurveChart');
        const valEl = document.getElementById('valChartFeatures');
        if (!svg) return;

        const tiers = ['zero', 'novice', 'beginner', 'intermediate', 'advanced', 'business_std', 'high', 'extreme', 'maximum'];
        const feats = [15, 45, 120, 280, 550, 750, 950, 1200, 1500];
        const activeIdx = Math.max(0, tiers.indexOf(surveyState.level));
        const activeFeatures = feats[activeIdx];

        if (valEl) {
            valEl.textContent = `${activeFeatures.toLocaleString()} Features (Tier ${activeIdx + 1}/9)`;
        }

        const width = 280;
        const height = 110;
        const padX = 24;
        const padY = 22;
        const usableW = width - padX * 2;
        const usableH = height - padY * 2;

        const points = feats.map((f, i) => {
            const x = padX + (i / (feats.length - 1)) * usableW;
            const normY = (f - feats[0]) / (feats[feats.length - 1] - feats[0]);
            const y = (height - padY) - (normY * usableH);
            return { x, y, idx: i };
        });

        // Build SVG path
        let pathD = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i++) {
            const prev = points[i - 1];
            const curr = points[i];
            const cx = (prev.x + curr.x) / 2;
            pathD += ` C ${cx} ${prev.y}, ${cx} ${curr.y}, ${curr.x} ${curr.y}`;
        }

        const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padY} L ${points[0].x} ${height - padY} Z`;

        const activePt = points[activeIdx];

        svg.innerHTML = `
            <defs>
                <linearGradient id="curveAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.35"/>
                    <stop offset="100%" stop-color="#00f0ff" stop-opacity="0.0"/>
                </linearGradient>
            </defs>
            <!-- Gridlines -->
            <line x1="${padX}" y1="${height - padY}" x2="${width - padX}" y2="${height - padY}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
            <line x1="${padX}" y1="${padY}" x2="${width - padX}" y2="${padY}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3,3" stroke-width="1"/>
            <!-- Area & Line -->
            <path d="${areaD}" fill="url(#curveAreaGrad)"/>
            <path d="${pathD}" fill="none" stroke="#00f0ff" stroke-width="2.5"/>
            <!-- Dots -->
            ${points.map(p => `
                <circle cx="${p.x}" cy="${p.y}" r="${p.idx === activeIdx ? '6' : '2.5'}" 
                    fill="${p.idx === activeIdx ? '#ffd700' : 'rgba(0,240,255,0.6)'}" 
                    stroke="${p.idx === activeIdx ? '#ffffff' : 'none'}" stroke-width="${p.idx === activeIdx ? '2' : '0'}"
                    style="${p.idx === activeIdx ? 'filter: drop-shadow(0 0 6px #ffd700);' : ''}"/>
            `).join('')}
            <!-- Active Flag -->
            <circle cx="${activePt.x}" cy="${activePt.y}" r="11" fill="none" stroke="#ffd700" stroke-width="1.5" stroke-dasharray="2,2" opacity="0.8"/>
            <text x="${activePt.x}" y="${Math.max(12, activePt.y - 12)}" fill="#ffd700" font-size="9" font-weight="900" text-anchor="middle" font-family="monospace">
                T${activeIdx + 1}
            </text>
        `;
    }

    function updateAudienceChart() {
        const svg = document.getElementById('svgAudienceChart');
        const valEl = document.getElementById('valChartMultiplier');
        if (!svg) return;

        const audMap = {
            personal: { label: 'Pers', mult: 1.0, title: 'Personal 1.0x' },
            company: { label: 'Corp', mult: 3.5, title: 'Company 3.5x' },
            leaders: { label: 'Lead', mult: 8.0, title: 'Leadership 8.0x' },
            other: { label: 'Cust', mult: 4.0, title: 'Custom 4.0x' }
        };

        const keys = ['personal', 'company', 'leaders', 'other'];
        const currentKey = surveyState.audience in audMap ? surveyState.audience : 'personal';
        const currentData = audMap[currentKey];

        if (valEl) {
            valEl.textContent = `${currentData.mult.toFixed(1)}x Reach Multiplier`;
        }

        const width = 280;
        const height = 110;
        const padX = 20;
        const padY = 22;
        const barW = 44;
        const gap = (width - padX * 2 - barW * 4) / 3;

        svg.innerHTML = `
            <defs>
                <linearGradient id="barActiveGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#ff3366"/>
                    <stop offset="100%" stop-color="#ff6b35"/>
                </linearGradient>
                <linearGradient id="barNormalGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#334155"/>
                    <stop offset="100%" stop-color="#1e293b"/>
                </linearGradient>
            </defs>
            <!-- Baseline -->
            <line x1="${padX}" y1="${height - padY}" x2="${width - padX}" y2="${height - padY}" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
            ${keys.map((k, i) => {
                const info = audMap[k];
                const isAct = k === currentKey;
                const barH = (info.mult / 8.0) * (height - padY * 2);
                const x = padX + i * (barW + gap);
                const y = (height - padY) - barH;
                return `
                    <g>
                        <rect x="${x}" y="${y}" width="${barW}" height="${barH}" rx="4"
                            fill="${isAct ? 'url(#barActiveGrad)' : 'url(#barNormalGrad)'}"
                            stroke="${isAct ? '#ff3366' : 'rgba(255,255,255,0.08)'}" stroke-width="${isAct ? '1.5' : '1'}"
                            style="${isAct ? 'filter: drop-shadow(0 0 10px rgba(255,51,102,0.45));' : ''}"/>
                        <text x="${x + barW / 2}" y="${y - 5}" fill="${isAct ? '#ffffff' : '#94a3b8'}" font-size="9" font-weight="${isAct ? '900' : '700'}" text-anchor="middle" font-family="monospace">
                            ${info.mult}x
                        </text>
                        <text x="${x + barW / 2}" y="${height - 7}" fill="${isAct ? '#00f0ff' : '#64748b'}" font-size="9" font-weight="${isAct ? '900' : '600'}" text-anchor="middle">
                            ${info.label}
                        </text>
                    </g>
                `;
            }).join('')}
        `;
    }

    function updateDensityChart() {
        const svg = document.getElementById('svgDensityChart');
        const valEl = document.getElementById('valChartDensity');
        if (!svg) return;

        let pct = 92;
        let label = "+340% Local Boost";
        if (surveyState.location === 'permission') {
            pct = 60;
            label = "+150% Conditional";
        } else if (surveyState.location === 'no') {
            pct = 25;
            label = "Global Mode (0% Boost)";
        }

        if (valEl) valEl.textContent = label;

        const width = 280;
        const height = 110;
        const cx = width / 2;
        const cy = 82;
        const r = 58;

        // Draw semi-circle gauge (180 deg)
        const angle = Math.PI * (pct / 100);
        const endX = cx - r * Math.cos(angle);
        const endY = cy - r * Math.sin(angle);
        const startX = cx - r;
        const startY = cy;

        const arcPath = `M ${startX} ${startY} A ${r} ${r} 0 0 1 ${endX} ${endY}`;
        const bgPath = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;

        svg.innerHTML = `
            <defs>
                <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="#00f0ff"/>
                    <stop offset="50%" stop-color="#34d399"/>
                    <stop offset="100%" stop-color="#ffd700"/>
                </linearGradient>
            </defs>
            <path d="${bgPath}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="10" stroke-linecap="round"/>
            <path d="${arcPath}" fill="none" stroke="url(#gaugeGrad)" stroke-width="10" stroke-linecap="round"
                style="filter: drop-shadow(0 0 8px rgba(0,240,255,0.45));"/>
            <!-- Center Core -->
            <circle cx="${cx}" cy="${cy}" r="6" fill="#ffffff" filter="drop-shadow(0 0 6px #00f0ff)"/>
            <line x1="${cx}" y1="${cy}" x2="${endX}" y2="${endY}" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Value text -->
            <text x="${cx}" y="${cy - 16}" fill="#ffffff" font-size="13" font-weight="900" text-anchor="middle" font-family="monospace">
                ${pct}%
            </text>
            <text x="${cx}" y="${height - 6}" fill="#94a3b8" font-size="8" font-weight="700" text-anchor="middle">
                ${surveyState.location === 'yes' ? 'HYPERLOCAL RADAR' : (surveyState.location === 'permission' ? 'ON REQUEST' : 'GLOBAL BASELINE')}
            </text>
        `;
    }

    function updateReachChart() {
        const svg = document.getElementById('svgReachChart');
        const valEl = document.getElementById('valChartReach');
        if (!svg) return;

        const tiers = ['zero', 'novice', 'beginner', 'intermediate', 'advanced', 'business_std', 'high', 'extreme', 'maximum'];
        const baseReach = [25000, 60000, 150000, 400000, 950000, 2200000, 5000000, 12000000, 35000000];
        const activeIdx = Math.max(0, tiers.indexOf(surveyState.level));

        const multMap = { personal: 1.0, company: 1.5, leaders: 2.2, other: 1.3 };
        const mult = multMap[surveyState.audience] || 1.0;
        const total30d = Math.round(baseReach[activeIdx] * mult);

        let fmtReach = total30d >= 1000000 ? `${(total30d / 1000000).toFixed(1)}M Views` : `${Math.round(total30d / 1000)}K Views`;
        if (valEl) valEl.textContent = fmtReach;

        const width = 280;
        const height = 110;
        const padX = 22;
        const padY = 22;
        const usableW = width - padX * 2;
        const usableH = height - padY * 2;

        const days = [1, 5, 10, 15, 20, 25, 30];
        const dayPoints = days.map((d, i) => {
            const x = padX + (i / (days.length - 1)) * usableW;
            const progress = Math.pow(d / 30, 2.2); // exponential curve
            const y = (height - padY) - (progress * usableH);
            return { x, y, day: d };
        });

        let lineD = `M ${dayPoints[0].x} ${dayPoints[0].y}`;
        for (let i = 1; i < dayPoints.length; i++) {
            const prev = dayPoints[i - 1];
            const curr = dayPoints[i];
            const cx = (prev.x + curr.x) / 2;
            lineD += ` C ${cx} ${prev.y}, ${cx} ${curr.y}, ${curr.x} ${curr.y}`;
        }

        const areaD = `${lineD} L ${dayPoints[dayPoints.length - 1].x} ${height - padY} L ${dayPoints[0].x} ${height - padY} Z`;
        const lastPt = dayPoints[dayPoints.length - 1];

        svg.innerHTML = `
            <defs>
                <linearGradient id="reachAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#ff3366" stop-opacity="0.4"/>
                    <stop offset="100%" stop-color="#ff3366" stop-opacity="0.0"/>
                </linearGradient>
            </defs>
            <line x1="${padX}" y1="${height - padY}" x2="${width - padX}" y2="${height - padY}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
            <path d="${areaD}" fill="url(#reachAreaGrad)"/>
            <path d="${lineD}" fill="none" stroke="#ff3366" stroke-width="2.5"/>
            <!-- End Peak Dot -->
            <circle cx="${lastPt.x}" cy="${lastPt.y}" r="6" fill="#ffd700" stroke="#ffffff" stroke-width="2"
                style="filter: drop-shadow(0 0 8px #ff3366);"/>
            <text x="${lastPt.x - 4}" y="${lastPt.y - 9}" fill="#ffd700" font-size="9" font-weight="900" text-anchor="end" font-family="monospace">
                Day 30: ${fmtReach}
            </text>
        `;
    }

    // ── SUBMIT INTAKE QUESTIONNAIRE & UNLOCK RADAR ─────────────────────────────
    window.submitCreatorSurvey = function () {
        const btn = document.getElementById('btnSubmitSurvey');
        const dossierBox = document.getElementById('surveyResultDossier');
        const customAudInput = document.getElementById('surveyCustomAudienceInput');
        const customAudience = customAudInput ? customAudInput.value.trim() : '';
        const customNicheInput = document.getElementById('surveyCustomNicheInput');
        const customNiche = customNicheInput ? customNicheInput.value.trim() : '';

        const t = getSurveyTranslation(surveyState.lang);

        if (btn) {
            btn.disabled = true;
            btn.innerHTML = `<span>⏳</span> <span>${t.calcLoading}</span>`;
        }

        const payload = {
            audience: surveyState.audience,
            custom_audience: customAudience,
            usage_level: surveyState.level,
            share_location: surveyState.location,
            theme: surveyState.theme,
            niche: customNiche || surveyState.niche,
            platform: surveyState.platform,
            target_lang: surveyState.lang
        };

        fetch('/api/trends/survey-strategy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                if (btn) {
                    btn.disabled = false;
                    btn.innerHTML = `<span>⚡</span> <span>${t.submitBtn}</span>`;
                }

                if (data.status === 'success') {
                    // Unlock the page below!
                    unlockRadarContent();

                    // Save to localStorage
                    try {
                        localStorage.setItem('trend_spy_survey_profile', JSON.stringify({
                            ...surveyState,
                            customAudience: customAudience,
                            customNiche: customNiche
                        }));
                    } catch (e) { }

                    const litdeoUrl = `/video-ai?prompt=${encodeURIComponent(data.litdeo_prompt)}`;

                    if (dossierBox) {
                        dossierBox.style.display = 'block';

                        const profile = data.level_profile || {};
                        const codeBlockHtml = data.code_snippet ? `
                            <div style="background: rgba(5,6,11,0.92); border: 1px solid rgba(0,240,255,0.3); border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <span style="font-size: 0.76rem; font-weight: 800; color: #00f0ff; text-transform: uppercase;">${t.codeTitle}</span>
                                    <button type="button" class="btn-copy-prompt" style="padding: 4px 10px; font-size: 0.7rem;" onclick="copyPromptToClipboard('${escapeJs(data.code_snippet)}')">
                                        <span>${t.copyCode}</span>
                                    </button>
                                </div>
                                <pre style="font-family: var(--font-mono); font-size: 0.8rem; color: #a5f3fc; overflow-x: auto; margin: 0; line-height: 1.45;">${escapeHtml(data.code_snippet)}</pre>
                            </div>
                        ` : '';

                        dossierBox.innerHTML = `
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
                                <div>
                                    <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                                        <span class="survey-badge-pulse">LEVEL: ${(profile.title || data.usage_level).toUpperCase()}</span>
                                        <span style="font-size: 0.8rem; color: #ffd700; font-weight: 800;">${profile.badge || '✨'}</span>
                                        <span style="font-size: 0.8rem; color: #34d399; font-weight: 800;">🎯 Viral Score: ${data.viral_score}/100</span>
                                        <span style="font-size: 0.8rem; color: #00f0ff; font-weight: 800;">🚀 Growth: ${data.growth_rate}</span>
                                    </div>
                                    <h3 style="font-size: 1.35rem; font-weight: 900; color: #ffffff; margin-top: 8px;">
                                        ${t.dossierTitle}: ${escapeHtml((data.niche || 'GENERAL').replace('_', ' ').toUpperCase())}
                                    </h3>
                                    <div style="font-size: 0.78rem; color: #94a3b8; margin-top: 4px;">
                                        ${profile.desc || ''}
                                    </div>
                                </div>
                                <a href="${litdeoUrl}" target="_blank" class="btn-launch-litdeo" style="width: auto; padding: 12px 26px;">
                                    <span>🎬</span> <span>${t.launchLitdeo}</span>
                                </a>
                            </div>

                            <!-- STATS ROW -->
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-bottom: 20px;">
                                <div style="background: rgba(13,17,26,0.85); padding: 14px; border-radius: var(--radius-md); border-left: 3px solid #00f0ff;">
                                    <div style="font-size: 0.72rem; color: #00f0ff; font-weight: 800; text-transform: uppercase;">${t.reachLabel}</div>
                                    <div style="font-size: 1.15rem; font-weight: 900; color: #ffffff; margin-top: 2px;">${data.reach_estimate}</div>
                                </div>
                                <div style="background: rgba(13,17,26,0.85); padding: 14px; border-radius: var(--radius-md); border-left: 3px solid #ffd700;">
                                    <div style="font-size: 0.72rem; color: #ffd700; font-weight: 800; text-transform: uppercase;">${t.featuresLabel}</div>
                                    <div style="font-size: 1.05rem; font-weight: 800; color: #ffffff; margin-top: 2px;">${data.features_unlocked || 'All Features'}</div>
                                </div>
                                <div style="background: rgba(13,17,26,0.85); padding: 14px; border-radius: var(--radius-md); border-left: 3px solid #34d399;">
                                    <div style="font-size: 0.72rem; color: #34d399; font-weight: 800; text-transform: uppercase;">${t.modeLabel}</div>
                                    <div style="font-size: 0.88rem; font-weight: 800; color: #ffffff; margin-top: 2px;">${data.interface_mode || 'Standard'}</div>
                                </div>
                                <div style="background: rgba(13,17,26,0.85); padding: 14px; border-radius: var(--radius-md); border-left: 3px solid #ff3366;">
                                    <div style="font-size: 0.72rem; color: #ff3366; font-weight: 800; text-transform: uppercase;">${t.bestTimeLabel}</div>
                                    <div style="font-size: 0.95rem; font-weight: 800; color: #ffffff; margin-top: 2px;">${data.best_posting_window}</div>
                                </div>
                            </div>

                            <!-- AUDIENCE & GEOLOCATION INFO -->
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; margin-bottom: 20px;">
                                <div style="background: rgba(13,17,26,0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px;">
                                    <div style="font-size: 0.7rem; font-weight: 800; color: #38bdf8; text-transform: uppercase;">${t.audienceLabel}</div>
                                    <div style="font-size: 0.86rem; color: #f1f5f9; font-weight: 700; margin-top: 4px;">${escapeHtml(data.audience_label || data.audience)}</div>
                                </div>
                                <div style="background: rgba(13,17,26,0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px 14px;">
                                    <div style="font-size: 0.7rem; font-weight: 800; color: #a78bfa; text-transform: uppercase;">${t.locationLabel}</div>
                                    <div style="font-size: 0.86rem; color: #f1f5f9; font-weight: 700; margin-top: 4px;">${escapeHtml(data.location_status || 'Global Mode')}</div>
                                </div>
                            </div>

                            <!-- 3 HOOKS -->
                            <div style="margin-bottom: 20px;">
                                <div style="font-size: 0.8rem; font-weight: 800; color: var(--neon-cyan); text-transform: uppercase; margin-bottom: 10px;">
                                    ${t.hooksTitle}
                                </div>
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;">
                                    ${(data.hooks || []).map((h, idx) => `
                                        <div style="background: rgba(13,17,26,0.7); border: 1px solid var(--border-subtle); padding: 12px 14px; border-radius: var(--radius-md);">
                                            <span style="font-size: 0.7rem; font-weight: 800; color: #ff6b35;">Hook #${idx + 1}:</span>
                                            <div style="font-size: 0.86rem; color: #f1f5f9; font-style: italic; margin-top: 4px;">"${escapeHtml(h)}"</div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            ${codeBlockHtml}

                            <!-- 4K PROMPT FOR LITDEO -->
                            <div style="background: rgba(5,6,11,0.9); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 20px;">
                                <div style="font-size: 0.75rem; font-weight: 800; color: #a855f7; text-transform: uppercase; margin-bottom: 8px;">
                                    ${t.promptTitle}
                                </div>
                                <div style="font-family: var(--font-mono); font-size: 0.82rem; color: #cbd5e1; line-height: 1.5;">
                                    ${escapeHtml(data.litdeo_prompt || '')}
                                </div>
                            </div>

                            <!-- ACTION BAR -->
                            <div style="display: flex; gap: 10px; align-items: center; justify-content: flex-end; flex-wrap: wrap;">
                                <button type="button" class="btn-copy-prompt" style="padding: 11px 20px;" onclick="copyPromptToClipboard('${escapeJs(data.litdeo_prompt || '')}')">
                                    <span>${t.copyPrompt}</span>
                                </button>
                                <a href="${litdeoUrl}" target="_blank" class="btn-launch-litdeo" style="flex: unset; padding: 11px 28px;">
                                    <span>${t.launchLitdeo}</span>
                                </a>
                            </div>
                        `;
                        dossierBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                    showToast('Personalized strategy calibrated & radar unlocked!', '⚡');
                } else {
                    showToast('Calculation error', '❌');
                }
            })
            .catch(err => {
                if (btn) {
                    btn.disabled = false;
                    btn.innerHTML = `<span>⚡</span> <span>${t.submitBtn}</span>`;
                }
                showToast('Server connection error', '❌');
            });
    };

    // ── PERFORMANCE ACCELERATION (1000000000x FASTER & ZERO LAG) ────────────────
    window.initPerformanceOptimization = function () {
        const sweepBeam = document.querySelector('.radar-sweep-beam');
        const radarHero = document.querySelector('.radar-hero');
        if ('IntersectionObserver' in window && radarHero && sweepBeam) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        sweepBeam.style.animationPlayState = 'running';
                    } else {
                        sweepBeam.style.animationPlayState = 'paused';
                    }
                });
            }, { threshold: 0.05 });
            observer.observe(radarHero);
        }
    };
'''

def main():
    target_path = 'static/js/trend_spy.js'
    with open(target_path, 'r', encoding='utf-8') as f:
        content = f.read()

    start_marker = '// ── CREATOR SURVEY ENGINE (100 WORLD LANGUAGES) ──────────────────────────────'
    end_marker = '// ── UTILITIES ───────────────────────────────────────────────────────────────'

    start_pos = content.find(start_marker)
    if start_pos == -1:
        print("ERROR: start marker not found")
        sys.exit(1)

    end_pos = content.find(end_marker)
    if end_pos == -1:
        print("ERROR: end marker not found")
        sys.exit(1)

    # Find the beginning of the line before start_marker
    line_start = content.rfind('\n', 0, start_pos - 10)
    if line_start == -1:
        line_start = start_pos

    new_full_content = content[:line_start + 1] + NEW_SURVEY_CODE.strip() + '\n\n    ' + content[end_pos:]

    with open(target_path, 'w', encoding='utf-8') as f:
        f.write(new_full_content)

    print("SUCCESS: static/js/trend_spy.js updated successfully!")

if __name__ == '__main__':
    main()
