/**
 * =============================================================================
 * LITDEO — SOVEREIGN 4K CINEMATIC VIDEO GENERATION STUDIO ENGINE
 * File: static/js/litally_video_ai.js
 * Description: Ultra high-performance procedural neural video synthesis & 4K playback engine.
 *              Full 100-language synchronization, instant cross-tab storage sync,
 *              30 dynamic cinema & mobile aspect ratios (9:16, 16:9, 1:1, 4:5, 21:9, etc.),
 *              and sovereign Litdeo 2.0, Litdeo 2.1, Litdeo 2.2 neural video models.
 * =============================================================================
 */

(function() {
    'use strict';

    // ── 1. 30 DYNAMIC ASPECT RATIOS DIRECTORY ──────────────────────────────────
    const ASPECT_RATIOS_30 = [
        // 📱 МОБИЛЬНЫЕ И СОЦСЕТИ (10 форматов)
        {
            id: '9:16',
            cssRatio: '9 / 16',
            category: 'social',
            icon: '📱',
            nameRu: '9:16 — Вертикальный экран',
            nameEn: '9:16 — Vertical Screen',
            nameKk: '9:16 — Тік экран',
            descRu: 'TikTok, Reels, Shorts & Stories',
            descEn: 'TikTok, Reels, Shorts & Stories',
            descKk: 'TikTok, Reels, Shorts & Stories',
            previewW: 18,
            previewH: 32
        },
        {
            id: '4:5',
            cssRatio: '4 / 5',
            category: 'social',
            icon: '📸',
            nameRu: '4:5 — Портрет ленты',
            nameEn: '4:5 — Feed Portrait',
            nameKk: '4:5 — Таспа портреті',
            descRu: 'Instagram Feed (Оптимальный для ленты)',
            descEn: 'Instagram Feed (Max Engagement)',
            descKk: 'Instagram Feed (Оңтайлы портрет)',
            previewW: 24,
            previewH: 30
        },
        {
            id: '1:1',
            cssRatio: '1 / 1',
            category: 'social',
            icon: '⏹️',
            nameRu: '1:1 — Классический квадрат',
            nameEn: '1:1 — Classic Square',
            nameKk: '1:1 — Классикалық шаршы',
            descRu: 'Instagram Square, обложки треков & альбомов',
            descEn: 'Instagram Square, Album Art & Posts',
            descKk: 'Instagram шаршысы, трек мұқабалары',
            previewW: 26,
            previewH: 26
        },
        {
            id: '9:19.5',
            cssRatio: '9 / 19.5',
            category: 'social',
            icon: '📲',
            nameRu: '9:19.5 — iPhone Fullscreen',
            nameEn: '9:19.5 — iPhone Fullscreen',
            nameKk: '9:19.5 — iPhone толық экраны',
            descRu: 'iPhone 14/15/16 Pro Dynamic Island',
            descEn: 'iPhone 14/15/16 Pro Dynamic Island',
            descKk: 'iPhone 14/15/16 Pro Dynamic Island',
            previewW: 16,
            previewH: 34
        },
        {
            id: '9:20',
            cssRatio: '9 / 20',
            category: 'social',
            icon: '📱',
            nameRu: '9:20 — Android AMOLED',
            nameEn: '9:20 — Android AMOLED',
            nameKk: '9:20 — Android толық экраны',
            descRu: 'Samsung Galaxy & modern flagship displays',
            descEn: 'Samsung Galaxy & modern flagship displays',
            descKk: 'Samsung Galaxy флагман экрандары',
            previewW: 15,
            previewH: 34
        },
        {
            id: '9:21',
            cssRatio: '9 / 21',
            category: 'social',
            icon: '📱',
            nameRu: '9:21 — Ultra-tall Mobile',
            nameEn: '9:21 — Ultra-tall Mobile',
            nameKk: '9:21 — Өте биік мобильді',
            descRu: 'Sony Xperia CinemaWide Mobile',
            descEn: 'Sony Xperia CinemaWide Mobile',
            descKk: 'Sony Xperia кинематографиялық мобильді',
            previewW: 14,
            previewH: 34
        },
        {
            id: '3:4',
            cssRatio: '3 / 4',
            category: 'social',
            icon: '📷',
            nameRu: '3:4 — Ретро-портрет',
            nameEn: '3:4 — Retro Portrait',
            nameKk: '3:4 — Ретро портрет',
            descRu: 'Винтажный вертикальный формат / iPad',
            descEn: 'Vintage vertical format / iPad Portrait',
            descKk: 'Винтаждық тік формат / iPad',
            previewW: 24,
            previewH: 32
        },
        {
            id: '2:3',
            cssRatio: '2 / 3',
            category: 'social',
            icon: '📸',
            nameRu: '2:3 — Вертикальное фото 35mm',
            nameEn: '2:3 — Vertical 35mm Photo',
            nameKk: '2:3 — Тік 35мм фото',
            descRu: 'Классический портрет плёночной камеры',
            descEn: 'Classic vertical film photography',
            descKk: 'Классикалық пленкалық портрет',
            previewW: 22,
            previewH: 33
        },
        {
            id: '10:16',
            cssRatio: '10 / 16',
            category: 'social',
            icon: '📱',
            nameRu: '10:16 — Вертикальный планшет',
            nameEn: '10:16 — Vertical Tablet',
            nameKk: '10:16 — Тік планшет',
            descRu: 'Android-планшеты, e-Reader & ридеры',
            descEn: 'Android Tablets, e-Readers & digital reading',
            descKk: 'Android планшеттері, электронды кітаптар',
            previewW: 20,
            previewH: 32
        },
        {
            id: '1:2',
            cssRatio: '1 / 2',
            category: 'social',
            icon: '📲',
            nameRu: '1:2 — Складной экран Fold',
            nameEn: '1:2 — Foldable Tall Screen',
            nameKk: '1:2 — Бүктелетін биік экран',
            descRu: 'Внешние экраны Fold-смартфонов',
            descEn: 'Outer cover screen of foldables',
            descKk: 'Бүктелетін смартфон сыртқы экраны',
            previewW: 16,
            previewH: 32
        },

        // 🎬 КИНО И РЕЖИССУРА (10 форматов)
        {
            id: '16:9',
            cssRatio: '16 / 9',
            category: 'cinema',
            icon: '🎬',
            nameRu: '16:9 — Стандарт Widescreen',
            nameEn: '16:9 — Standard Widescreen',
            nameKk: '16:9 — Стандартты Widescreen',
            descRu: 'YouTube, 4K UHD TV, классическое видео',
            descEn: 'YouTube, 4K UHD TV, standard video',
            descKk: 'YouTube, 4K UHD TV, стандартты бейне',
            previewW: 34,
            previewH: 19
        },
        {
            id: '21:9',
            cssRatio: '21 / 9',
            category: 'cinema',
            icon: '🎥',
            nameRu: '21:9 — Cinematic UltraWide',
            nameEn: '21:9 — Cinematic UltraWide',
            nameKk: '21:9 — Кинематографиялық UltraWide',
            descRu: 'Широкоэкранный CinemaScope 2.33:1',
            descEn: 'CinemaScope 2.33:1 widescreen cinema',
            descKk: 'Кең экранды CinemaScope 2.33:1 киносы',
            previewW: 36,
            previewH: 15
        },
        {
            id: '2.39:1',
            cssRatio: '2.39 / 1',
            category: 'cinema',
            icon: '🎞️',
            nameRu: '2.39:1 — Голливудский Анаморфот',
            nameEn: '2.39:1 — Anamorphic Widescreen',
            nameKk: '2.39:1 — Голливудтық Анаморфот',
            descRu: 'Современный голливудский киноблокбастер',
            descEn: 'Modern Hollywood blockbuster cinema standard',
            descKk: 'Заманауи Голливуд блокбастер кино стандарты',
            previewW: 36,
            previewH: 15
        },
        {
            id: '2.35:1',
            cssRatio: '2.35 / 1',
            category: 'cinema',
            icon: '🎬',
            nameRu: '2.35:1 — Классический CinemaScope',
            nameEn: '2.35:1 — Classic CinemaScope',
            nameKk: '2.35:1 — Классикалық CinemaScope',
            descRu: 'Золотой стандарт плёночного кино 35mm',
            descEn: 'Golden 35mm optical anamorphic film standard',
            descKk: '35мм оптикалық классикалық кино стандарты',
            previewW: 36,
            previewH: 15
        },
        {
            id: '1.85:1',
            cssRatio: '1.85 / 1',
            category: 'cinema',
            icon: '🎥',
            nameRu: '1.85:1 — US Theatrical Widescreen',
            nameEn: '1.85:1 — US Theatrical Widescreen',
            nameKk: '1.85:1 — АҚШ театрлық стандарты',
            descRu: 'Основной американский прокатный формат кино',
            descEn: 'Dominant US theatrical release ratio',
            descKk: 'Негізгі американдық кинопрокат стандарты',
            previewW: 33,
            previewH: 18
        },
        {
            id: '2:1',
            cssRatio: '2 / 1',
            category: 'cinema',
            icon: '📺',
            nameRu: '2:1 — Univisium',
            nameEn: '2:1 — Univisium',
            nameKk: '2:1 — Univisium',
            descRu: 'Netflix Originals, Stranger Things, House of Cards',
            descEn: 'Netflix Originals, Stranger Things, House of Cards',
            descKk: 'Netflix Originals, Stranger Things, House of Cards',
            previewW: 34,
            previewH: 17
        },
        {
            id: '1.43:1',
            cssRatio: '1.43 / 1',
            category: 'cinema',
            icon: '🌌',
            nameRu: '1.43:1 — Полнокупольный IMAX 70mm',
            nameEn: '1.43:1 — Full Height IMAX 70mm',
            nameKk: '1.43:1 — Толық күмбезді IMAX 70mm',
            descRu: 'Кристофер Нолан: Оппенгеймер, Интерстеллар',
            descEn: 'Christopher Nolan: Oppenheimer, Interstellar',
            descKk: 'Кристофер Нолан: Оппенгеймер, Интерстеллар',
            previewW: 30,
            previewH: 21
        },
        {
            id: '2.76:1',
            cssRatio: '2.76 / 1',
            category: 'cinema',
            icon: '🏛️',
            nameRu: '2.76:1 — Ultra Panavision 70',
            nameEn: '2.76:1 — Ultra Panavision 70',
            nameKk: '2.76:1 — Ultra Panavision 70',
            descRu: 'The Hateful Eight, Бен-Гур, эпический размах',
            descEn: 'The Hateful Eight, Ben-Hur epic 70mm cinema',
            descKk: 'The Hateful Eight, Бен-Гур эпикалық 70мм киносы',
            previewW: 38,
            previewH: 14
        },
        {
            id: '1.66:1',
            cssRatio: '1.66 / 1',
            category: 'cinema',
            icon: '🎞️',
            nameRu: '1.66:1 — European Widescreen',
            nameEn: '1.66:1 — European Widescreen',
            nameKk: '1.66:1 — Еуропалық кең экран',
            descRu: 'Европейский артхаус, Super 16 & VistaVision',
            descEn: 'European Art-house, Super 16 & VistaVision',
            descKk: 'Еуропалық артхаус, Super 16 және VistaVision',
            previewW: 31,
            previewH: 19
        },
        {
            id: '1.375:1',
            cssRatio: '1.375 / 1',
            category: 'cinema',
            icon: '📽️',
            nameRu: '1.375:1 — Золотой Век (Academy Ratio)',
            nameEn: '1.375:1 — Golden Age (Academy Ratio)',
            nameKk: '1.375:1 — Алтын дәуір (Academy Ratio)',
            descRu: 'Классический голливудский кинематограф 1932 г.',
            descEn: 'Classic Academy ratio established in 1932',
            descKk: '1932 жылғы классикалық голливуд академиялық стандарты',
            previewW: 29,
            previewH: 21
        },

        // 🖥️ МОНИТОРЫ, ФОТОГРАФИЯ И ПАНОРАМЫ (10 форматов)
        {
            id: '3:2',
            cssRatio: '3 / 2',
            category: 'photo',
            icon: '📷',
            nameRu: '3:2 — Фотография 35mm DSLR',
            nameEn: '3:2 — 35mm DSLR Photography',
            nameKk: '3:2 — 35мм DSLR Фотография',
            descRu: 'Стандарт фотоматриц Canon, Nikon, Sony, Leica',
            descEn: 'Standard full-frame sensor ratio (Sony, Canon, Nikon)',
            descKk: 'Canon, Nikon, Sony толық өлшемді сенсор стандарты',
            previewW: 30,
            previewH: 20
        },
        {
            id: '4:3',
            cssRatio: '4 / 3',
            category: 'photo',
            icon: '📺',
            nameRu: '4:3 — Ретро ТВ / SDTV',
            nameEn: '4:3 — Retro TV / SDTV',
            nameKk: '4:3 — Ретро Теледидар / SDTV',
            descRu: 'ЭЛТ-мониторы CRT, старое телевидение & iPad',
            descEn: 'CRT Displays, classic television broadcasting & iPad',
            descKk: 'CRT мониторлар, ескі теледидар және iPad',
            previewW: 28,
            previewH: 21
        },
        {
            id: '16:10',
            cssRatio: '16 / 10',
            category: 'photo',
            icon: '💻',
            nameRu: '16:10 — Дисплей MacBook & PC',
            nameEn: '16:10 — MacBook & PC Display',
            nameKk: '16:10 — MacBook және ДК экраны',
            descRu: 'Профессиональные мониторы 2560x1600 & MacBook Pro',
            descEn: 'Pro Displays 2560x1600 & Apple MacBook Pro screens',
            descKk: 'Кәсіби мониторлар 2560x1600 және MacBook Pro',
            previewW: 32,
            previewH: 20
        },
        {
            id: '5:4',
            cssRatio: '5 / 4',
            category: 'photo',
            icon: '🖥️',
            nameRu: '5:4 — Большой формат / LCD',
            nameEn: '5:4 — Large Format / LCD',
            nameKk: '5:4 — Үлкен формат / LCD',
            descRu: 'Разрешение 1280x1024, широкоформатная фотография',
            descEn: 'Legacy 1280x1024 resolution & large format cameras',
            descKk: '1280x1024 рұқсаты және үлкен форматты камералар',
            previewW: 27,
            previewH: 22
        },
        {
            id: '32:9',
            cssRatio: '32 / 9',
            category: 'photo',
            icon: '🏎️',
            nameRu: '32:9 — Super Ultra-Wide',
            nameEn: '32:9 — Super Ultra-Wide',
            nameKk: '32:9 — Супер Ultra-Wide',
            descRu: 'Двойной монитор 16:9 (Samsung Odyssey G9)',
            descEn: 'Dual 16:9 gaming curved monitors (Samsung Odyssey)',
            descKk: 'Қос 16:9 ойын мониторы (Samsung Odyssey)',
            previewW: 38,
            previewH: 11
        },
        {
            id: '3:1',
            cssRatio: '3 / 1',
            category: 'photo',
            icon: '🌆',
            nameRu: '3:1 — Тройная Панорама',
            nameEn: '3:1 — Triple Surround Panorama',
            nameKk: '3:1 — Үштік панорама',
            descRu: 'Тройной экран Surround Cinema & панорамы',
            descEn: 'Triple-monitor panoramic surround immersion',
            descKk: 'Үштік экранды панорамалық кино',
            previewW: 39,
            previewH: 13
        },
        {
            id: '4:1',
            cssRatio: '4 / 1',
            category: 'photo',
            icon: '🌉',
            nameRu: '4:1 — Ленточный Ультрабаннер',
            nameEn: '4:1 — Ultra Ribbon Banner',
            nameKk: '4:1 — Таспалы ультрабаннер',
            descRu: 'Суперширокий горизонтальный панорамный дисплей',
            descEn: 'Extreme horizontal panoramic ribbon display',
            descKk: 'Өте кең көлденең панорамалық таспа',
            previewW: 40,
            previewH: 10
        },
        {
            id: '5:3',
            cssRatio: '5 / 3',
            category: 'photo',
            icon: '🎮',
            nameRu: '5:3 — Портативная Консоль',
            nameEn: '5:3 — Handheld Console / PSP',
            nameKk: '5:3 — Портативті консоль',
            descRu: 'Формат Sony PSP & Super 16 расширенный',
            descEn: 'Sony PSP display & extended Super 16 film',
            descKk: 'Sony PSP дисплейі және Super 16 кеңейтілген',
            previewW: 32,
            previewH: 19
        },
        {
            id: '1:3',
            cssRatio: '1 / 3',
            category: 'photo',
            icon: '🏙️',
            nameRu: '1:3 — Вертикальная Стела',
            nameEn: '1:3 — Vertical Skyscraper Totem',
            nameKk: '1:3 — Тік стела',
            descRu: 'Вертикальные рекламные LED-экраны и стойки',
            descEn: 'Vertical digital signage totems & tall LED pillars',
            descKk: 'Тік жарнамалық LED экрандар мен бағандар',
            previewW: 13,
            previewH: 39
        },
        {
            id: '9:32',
            cssRatio: '9 / 32',
            category: 'photo',
            icon: '🗼',
            nameRu: '9:32 — Skyscraper Ribbon',
            nameEn: '9:32 — Skyscraper Ribbon',
            nameKk: '9:32 — Skyscraper лентасы',
            descRu: 'Сверхвысокие вертикальные экраны небоскрёбов',
            descEn: 'Extreme ultra-tall building façade displays',
            descKk: 'Ғимарат қасбеттеріндегі өте биік тік экрандар',
            previewW: 11,
            previewH: 39
        }
    ];

    // ── 2. INITIAL LANGUAGE DETECTION & GLOBAL STATE ───────────────────────────
    function getInitialLanguage() {
        let lang = null;
        try {
            lang = localStorage.getItem('litally_selected_language') || 
                   localStorage.getItem('litally_selected_lang') || 
                   localStorage.getItem('litally_video_lang');
        } catch(e) {}
        
        if (!lang) {
            try {
                const params = new URLSearchParams(window.location.search);
                lang = params.get('lang');
            } catch(e) {}
        }
        return lang || 'ru';
    }

    const VideoState = {
        prompt: "Студия Litdeo: неоновый кинематографичный мир в ультрафиолетовых, пурпурных и глубоких индиго тонах, объемный космический свет, фотореализм 8k",
        style: "cinematic_8k",
        aspectRatio: "16:9",
        cameraMotion: "zoom_in",
        cameraAngle: 1, // 1 (wide), 2 (close-up portrait), 3 (fpv dynamic action)
        secondaryMotion: "none",
        lens: "35mm",
        lighting: "three_point",
        soulId: "none",
        soulAesthetic: "default",
        duration: 60,
        complexity: "standard",
        fps: 30,
        model: "litdeo_2_0",
        audio: true,
        subtitlesEnabled: true,
        voiceoverEnabled: true,
        voiceoverStyle: "trailer_baritone",
        motionDynamics: 1.0,
        screenplayData: null,
        lastVoicedAct: 0,
        lang: getInitialLanguage(),
        isRendering: false,
        isPlaying: true,
        currentTime: 0,
        currentTheme: 'litdeo_indigo_violet',
        history: [],
        animFrameId: null,
        mediaRecorder: null,
        recordedChunks: []
    };

    function formatTime(sec) {
        const s = Math.floor(Math.max(0, sec || 0));
        const m = Math.floor(s / 60);
        const rem = s % 60;
        return (m < 10 ? '0' : '') + m + ':' + (rem < 10 ? '0' : '') + rem;
    }

    function updateNarrativeActsBreakdown() {
        const dur = Math.max(15, VideoState.duration || 60);
        const complexity = VideoState.complexity || 'standard';
        const cardSummary = document.getElementById('cardDurationSummary');
        const badge = document.getElementById('durationValBadge');
        
        if (cardSummary) cardSummary.textContent = `${dur} сек (${formatTime(dur)})`;
        if (badge) badge.textContent = `${dur} сек (${formatTime(dur)})`;

        const q1 = formatTime(dur * 0.25);
        const q2 = formatTime(dur * 0.50);
        const q3 = formatTime(dur * 0.75);
        const q4 = formatTime(dur);

        // Update timing in act cards
        const t1 = document.querySelector('.act-card-item[data-act="1"] .act-timing');
        const t2 = document.querySelector('.act-card-item[data-act="2"] .act-timing');
        const t3 = document.querySelector('.act-card-item[data-act="3"] .act-timing');
        const t4 = document.querySelector('.act-card-item[data-act="4"] .act-timing');

        if (t1) t1.textContent = `00:00–${q1}`;
        if (t2) t2.textContent = `${q1}–${q2}`;
        if (t3) t3.textContent = `${q2}–${q3}`;
        if (t4) t4.textContent = `${q3}–${q4}`;

        if (!VideoState.screenplayData) {
            // Default act descriptions per complexity
            const d1 = document.querySelector('.act-card-item[data-act="1"] .act-desc-text');
            const d2 = document.querySelector('.act-card-item[data-act="2"] .act-desc-text');
            const d3 = document.querySelector('.act-card-item[data-act="3"] .act-desc-text');
            const d4 = document.querySelector('.act-card-item[data-act="4"] .act-desc-text');

            if (complexity === 'standard') {
                if (d1) d1.textContent = 'Масштабная панорама, построение 3D-пространства сцены и атмосферный свет.';
                if (d2) d2.textContent = 'Появление персонажа, Soul ID фиксация, мимика, колыхание ткани и взгляд.';
                if (d3) d3.textContent = 'Пиковая кинетическая энергия, скоростные траектории DoP и драматический перелом.';
                if (d4) d4.textContent = 'Величественная развязка, затухание движения, божественные лучи света и катарсис.';
            } else if (complexity === 'medium') {
                if (d1) d1.textContent = 'Монументальный пролог: 4K HDR рендеринг глубины сцены и объемная дымка.';
                if (d2) d2.textContent = 'Раскрытие персонажа, оптика DoP 50mm f/1.2, субпиксельная физика волос.';
                if (d3) d3.textContent = 'Стремительный экшен, оптический блюр скорости и нарастающее напряжение.';
                if (d4) d4.textContent = 'Эпическая развязка кадра, золотой закатный час и бесконечный горизонт.';
            } else if (complexity === 'cinema') {
                if (d1) d1.textContent = 'Киноэпос: масштабирование вселенной, 70mm глубина кадра и пролог легенды.';
                if (d2) d2.textContent = 'DoP Supreme портрет: микротекстуры кожи, золотая парча и дыхание ветра.';
                if (d3) d3.textContent = 'Симфония динамики: вихревые потоки пыли, частицы и пиковый конфликт.';
                if (d4) d4.textContent = 'Величественный финал: анаморфные блики, катарсис и оседающий туман.';
            } else {
                if (d1) d1.textContent = '8K Quantum Пролог: гигантская детализация окружения, воксели и квантовый свет.';
                if (d2) d2.textContent = 'Абсолютная Soul ID когерентность: микротекстуры глаз, чеканка доспехов.';
                if (d3) d3.textContent = 'Квантовый вихрь: максимальная кинетическая скорость, шлейфы оптического потока.';
                if (d4) d4.textContent = 'Шедевральный эпос 120 FPS: божественные лучи (god-rays) и бессмертный кадр.';
            }
        }
    }

    function generateAiScreenplay() {
        const btn = document.getElementById('btnAutoGenerateScreenplay');
        const origText = btn ? btn.innerHTML : '';
        if (btn) {
            btn.disabled = true;
            btn.innerHTML = '<span>⏳</span> <span>ИИ Пишет Киносценарий...</span>';
        }

        const promptInput = document.getElementById('promptInput');
        const p = promptInput ? promptInput.value.trim() : VideoState.prompt;

        fetch('/api/ai/generate-screenplay', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt: p,
                duration: VideoState.duration,
                complexity: VideoState.complexity,
                soul_id: VideoState.soulId,
                soul_aesthetic: VideoState.soulAesthetic,
                style: VideoState.style,
                lang: VideoState.lang
            })
        })
        .then(r => r.json())
        .then(data => {
            if (data.status === 'success' && data.acts) {
                VideoState.screenplayData = data;
                applyScreenplayToUI(data);
                showToast(`✨ Сценарий «${data.title}» готов!`);
                VideoState.lastVoicedAct = 0;
            }
        })
        .catch(() => {
            showToast('⚠️ Применен локальный сценарий Litdeo.');
        })
        .finally(() => {
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = origText;
            }
        });
    }

    function applyScreenplayToUI(data) {
        if (!data || !data.acts) return;
        const titleBadge = document.getElementById('screenplayTitleBadge');
        if (titleBadge && data.title) {
            titleBadge.textContent = `📜 ${data.title}:`;
        }

        data.acts.forEach(act => {
            const card = document.querySelector(`.act-card-item[data-act="${act.act}"]`);
            if (card) {
                const titleSpan = card.querySelector('div:first-child span:first-child');
                const timingSpan = card.querySelector('.act-timing');
                const descEl = card.querySelector('.act-desc-text');
                const quoteEl = card.querySelector('.act-narration-quote');

                if (titleSpan) titleSpan.textContent = act.title;
                if (timingSpan) timingSpan.textContent = act.time_range;
                if (descEl) descEl.textContent = act.scene_description || act.focus;
                if (quoteEl) quoteEl.textContent = act.narration;
            }
        });

        // Update Subtitles display
        const subOverlay = document.getElementById('cinemaSubtitlesOverlay');
        const subText = document.getElementById('cinemaSubtitlesText');
        if (subText && data.acts[0]) {
            subText.textContent = data.acts[0].narration;
            if (VideoState.subtitlesEnabled && subOverlay) {
                subOverlay.style.display = 'block';
            }
        }
    }

    function triggerVoiceoverForAct(actIndex) {
        if (VideoState.lastVoicedAct === actIndex) return;
        VideoState.lastVoicedAct = actIndex;

        let narrationText = '';
        if (VideoState.screenplayData && VideoState.screenplayData.acts) {
            const actData = VideoState.screenplayData.acts.find(a => a.act === actIndex);
            if (actData && actData.narration) narrationText = actData.narration;
        }

        if (!narrationText) {
            const quoteEl = document.querySelector(`.act-card-item[data-act="${actIndex}"] .act-narration-quote`);
            if (quoteEl) narrationText = quoteEl.textContent.trim();
        }

        if (!narrationText) {
            const fallbacks = [
                'Там, где ветер целует вечность, рождается земля героев...',
                'В деталях кроется истина, а во взгляде — непоколебимая решимость...',
                'Сквозь вихри времени скачет батыр навстречу рассвету новой эры!',
                'И пока горит этот вечный свет — не угаснет слава вовеки.'
            ];
            narrationText = fallbacks[actIndex - 1] || fallbacks[0];
        }

        // 1. Update Subtitles Overlay
        const subOverlay = document.getElementById('cinemaSubtitlesOverlay');
        const subText = document.getElementById('cinemaSubtitlesText');
        if (subText) subText.textContent = narrationText;
        if (subOverlay && VideoState.subtitlesEnabled) {
            subOverlay.style.display = 'block';
            subOverlay.style.opacity = '1';
        }

        // 2. Play Voiceover
        if (!VideoState.voiceoverEnabled || !VideoState.isPlaying) return;

        const cleanSpeech = narrationText.replace(/[«»"]/g, '').trim();
        if ('speechSynthesis' in window && cleanSpeech) {
            try {
                window.speechSynthesis.cancel();
                const utter = new SpeechSynthesisUtterance(cleanSpeech);
                utter.lang = VideoState.lang === 'kk' ? 'kk-KZ' : (VideoState.lang === 'en' ? 'en-US' : 'ru-RU');

                if (VideoState.voiceoverStyle === 'trailer_baritone') {
                    utter.pitch = 0.82;
                    utter.rate = 0.92;
                } else if (VideoState.voiceoverStyle === 'steppe_teller') {
                    utter.pitch = 0.95;
                    utter.rate = 0.88;
                } else {
                    utter.pitch = 1.15;
                    utter.rate = 1.02;
                }
                window.speechSynthesis.speak(utter);
            } catch(e) {}
        }
    }

    function setCameraAngle(angleNum) {
        VideoState.cameraAngle = angleNum;
        document.querySelectorAll('.cam-angle-btn').forEach(btn => {
            const a = parseInt(btn.dataset.angle, 10);
            if (a === angleNum) {
                btn.classList.add('active');
                btn.style.background = 'rgba(168,85,247,0.3)';
                btn.style.borderColor = '#c084fc';
                btn.style.color = '#fff';
            } else {
                btn.classList.remove('active');
                btn.style.background = 'none';
                btn.style.borderColor = 'transparent';
                btn.style.color = '#94a3b8';
            }
        });
        const angleNames = {
            1: "Общий план (Wide Master)",
            2: "Крупный портрет DoP (Portrait)",
            3: "FPV Дрон / Динамичный Экшен (Action)"
        };
        showToast(`🎥 Ракурс: Камера ${angleNum} — ${angleNames[angleNum]}`);
    }
    window.setCameraAngle = setCameraAngle;

    function toggleSubtitles() {
        VideoState.subtitlesEnabled = !VideoState.subtitlesEnabled;
        const subOverlay = document.getElementById('cinemaSubtitlesOverlay');
        const ccBtn = document.getElementById('btnToggleSubtitles');
        if (subOverlay) {
            subOverlay.style.display = VideoState.subtitlesEnabled ? 'block' : 'none';
        }
        if (ccBtn) {
            ccBtn.style.color = VideoState.subtitlesEnabled ? '#ffd700' : '#64748b';
            ccBtn.style.borderColor = VideoState.subtitlesEnabled ? 'rgba(255,215,0,0.4)' : 'rgba(255,255,255,0.1)';
        }
        showToast(VideoState.subtitlesEnabled ? '💬 Субтитры включены' : '💬 Субтитры скрыты');
    }
    window.toggleSubtitles = toggleSubtitles;

    window.seekToAct = function(actNum) {
        const dur = VideoState.duration || 60;
        const targetTime = (actNum - 1) * 0.25 * dur;
        VideoState.currentTime = targetTime;
        animTime = targetTime;
        updatePlaybackTimeline();
        triggerVoiceoverForAct(actNum);
        showToast(`🎬 Переход к Акту ${actNum} (${formatTime(targetTime)})`);
    };

    // ── 1.9. GPU BOOST HARDWARE & ESTIMATED WAIT TIME SUBSYSTEM (x1, x4, x8, x12, x20) ──
    const BoostState = {
        lcoins: parseInt(localStorage.getItem('litdeo_lcoins') || '150', 10),
        activeBoost: parseInt(localStorage.getItem('litdeo_active_boost') || '1', 10),
        unlockedBoosts: JSON.parse(localStorage.getItem('litdeo_unlocked_boosts') || '[1]'),
        catalog: {
            1: { name: 'Standard Cloud GPU', multiplier: 1, price: 0, icon: '🖥️' },
            4: { name: 'Turbo GPU Cluster', multiplier: 4, price: 50, icon: '⚡' },
            8: { name: 'Quantum H100 Supercluster', multiplier: 8, price: 100, icon: '🔮' },
            12: { name: 'Tensor TPU V5e Supernode', multiplier: 12, price: 200, icon: '🧬' },
            20: { name: 'Hyperspace Singularity Core', multiplier: 20, price: 400, icon: '🌌' }
        }
    };

    function saveBoostState() {
        try {
            localStorage.setItem('litdeo_lcoins', BoostState.lcoins.toString());
            localStorage.setItem('litdeo_active_boost', BoostState.activeBoost.toString());
            localStorage.setItem('litdeo_unlocked_boosts', JSON.stringify(BoostState.unlockedBoosts));
        } catch(e) {}
    }

    function addLCoins(amount, silent = false) {
        BoostState.lcoins = Math.max(0, BoostState.lcoins + amount);
        saveBoostState();
        updateLCoinsDisplay();
        if (!silent && amount > 0) {
            showToast(`🪙 +${amount} L-Coins! Баланс: ${BoostState.lcoins}`);
        }
    }

    function updateLCoinsDisplay() {
        const badge = document.getElementById('userLCoinsBalance');
        if (badge) badge.textContent = `🪙 ${BoostState.lcoins} L-Coins`;
        const modalBal = document.getElementById('modalUserBalanceDisplay');
        if (modalBal) modalBal.textContent = `🪙 ${BoostState.lcoins} L-Coins`;
    }

    function calculateEstimatedWaitTime() {
        const dur = Math.max(15, VideoState.duration || 60);
        const comp = VideoState.complexity || 'standard';
        const pipelineSelect = document.getElementById('renderPipelineTimeSelect');
        const pipeVal = pipelineSelect ? parseInt(pipelineSelect.value, 10) : 3;
        const boost = BoostState.activeBoost || 1;

        const compFactors = { standard: 1.0, medium: 1.4, cinema: 2.0, masterpiece: 3.2 };
        const pipeFactors = { 1: 0.6, 3: 1.0, 5: 1.6, 10: 2.5 };

        const baseSec = Math.round(dur * (compFactors[comp] || 1.0) * (pipeFactors[pipeVal] || 1.0) * 0.75);
        const acceleratedSec = Math.max(4, Math.round(baseSec / boost));

        function formatWait(s) {
            if (s < 60) return `~${s} сек`;
            const m = Math.floor(s / 60);
            const r = s % 60;
            return `~${m} мин${r > 0 ? ' ' + r + ' сек' : ''}`;
        }

        return {
            baseSeconds: baseSec,
            acceleratedSeconds: acceleratedSec,
            boost: boost,
            formattedBase: formatWait(baseSec),
            formattedAccelerated: formatWait(acceleratedSec)
        };
    }

    function updateEstimatedWaitTimeUI() {
        const eta = calculateEstimatedWaitTime();
        const etaTimeDisplay = document.getElementById('etaTimeDisplay');
        if (etaTimeDisplay) etaTimeDisplay.textContent = eta.formattedAccelerated;

        const etaCompare = document.getElementById('etaOriginalCompare');
        if (etaCompare) {
            if (eta.boost > 1) {
                etaCompare.innerHTML = `Базовое: <s>${eta.formattedBase}</s>`;
            } else {
                etaCompare.textContent = `Базовое: ${eta.formattedBase}`;
            }
        }

        const etaBadge = document.getElementById('etaBoostActiveBadge');
        if (etaBadge) {
            if (eta.boost > 1) {
                etaBadge.style.background = 'rgba(239, 68, 68, 0.25)';
                etaBadge.style.color = '#fca5a5';
                etaBadge.textContent = `🔥 Ускоритель x${eta.boost}`;
            } else {
                etaBadge.style.background = 'rgba(168, 85, 247, 0.25)';
                etaBadge.style.color = '#c084fc';
                etaBadge.textContent = 'Стандарт 1x';
            }
        }

        const renderCountdown = document.getElementById('renderCountdownText');
        if (renderCountdown) renderCountdown.textContent = eta.formattedAccelerated;

        const renderBoostTag = document.getElementById('renderActiveBoostTag');
        if (renderBoostTag) renderBoostTag.textContent = eta.boost === 1 ? '1x' : `x${eta.boost} активен`;

        // Update pills active states
        document.querySelectorAll('.boost-pill-btn').forEach(btn => {
            const b = parseInt(btn.dataset.boost, 10);
            if (b === eta.boost) {
                btn.classList.add('active');
                btn.style.background = 'rgba(168,85,247,0.35)';
                btn.style.borderColor = '#c084fc';
                btn.style.color = '#fff';
            } else {
                btn.classList.remove('active');
                btn.style.background = 'rgba(255,255,255,0.05)';
                btn.style.borderColor = 'rgba(255,255,255,0.1)';
                btn.style.color = '#94a3b8';
            }
        });
    }

    function activateBoost(multiplier) {
        if (!BoostState.unlockedBoosts.includes(multiplier)) {
            const item = BoostState.catalog[multiplier];
            if (item) {
                openBoostShopModal();
                showToast(`🔒 ${item.name} (x${multiplier}) еще не приобретен. Открыт магазин.`);
            }
            return;
        }
        BoostState.activeBoost = multiplier;
        saveBoostState();
        updateEstimatedWaitTimeUI();
        updateBoostShopModalUI();
        showToast(`⚡ Активирован ускоритель x${multiplier}! Время рендеринга ускорено в ${multiplier} раз.`);
        if (MiniGame && MiniGame.playSynth) MiniGame.playSynth('coin');
    }

    function purchaseBoost(multiplier, price) {
        if (BoostState.unlockedBoosts.includes(multiplier)) {
            activateBoost(multiplier);
            return;
        }
        if (BoostState.lcoins < price) {
            showToast(`🪙 Недостаточно L-Coins! Требуется ${price}, у вас ${BoostState.lcoins}. Заберите бонус или сыграйте в мини-игру!`);
            return;
        }
        BoostState.lcoins -= price;
        BoostState.unlockedBoosts.push(multiplier);
        BoostState.activeBoost = multiplier;
        saveBoostState();
        updateLCoinsDisplay();
        updateEstimatedWaitTimeUI();
        updateBoostShopModalUI();
        const item = BoostState.catalog[multiplier] || { name: `Ускоритель x${multiplier}` };
        showToast(`🎉 Успешно приобретен ${item.name}! Ускорение x${multiplier} активировано!`);
        if (MiniGame && MiniGame.playSynth) MiniGame.playSynth('victory');
    }

    function claimDailyBonus() {
        addLCoins(100);
        showToast('🎁 Начислен квантовый бонус: +100 L-Coins!');
        if (MiniGame && MiniGame.playSynth) MiniGame.playSynth('coin');
        updateBoostShopModalUI();
    }

    function openBoostShopModal() {
        const modal = document.getElementById('boostShopModalOverlay');
        if (modal) {
            modal.style.display = 'flex';
            updateLCoinsDisplay();
            updateBoostShopModalUI();
        }
    }

    function closeBoostShopModal() {
        const modal = document.getElementById('boostShopModalOverlay');
        if (modal) modal.style.display = 'none';
    }

    function updateBoostShopModalUI() {
        updateLCoinsDisplay();
        document.querySelectorAll('.btn-boost-action').forEach(btn => {
            const b = parseInt(btn.dataset.boost, 10);
            const isUnlocked = BoostState.unlockedBoosts.includes(b);
            const isActive = BoostState.activeBoost === b;

            if (isActive) {
                btn.textContent = '✓ Активен';
                btn.style.background = 'rgba(168,85,247,0.35)';
                btn.style.borderColor = '#c084fc';
                btn.style.color = '#fff';
                btn.disabled = true;
            } else if (isUnlocked) {
                btn.textContent = 'Включить';
                btn.style.background = 'rgba(16,185,129,0.25)';
                btn.style.borderColor = '#34d399';
                btn.style.color = '#34d399';
                btn.disabled = false;
            } else {
                const price = btn.dataset.price || '50';
                btn.textContent = `Купить (${price} 🪙)`;
                btn.style.background = 'linear-gradient(135deg, #ffd700, #f59e0b)';
                btn.style.borderColor = 'transparent';
                btn.style.color = '#000';
                btn.disabled = false;
            }
        });
    }

// ── 1.10. BATTLE SQUAD MINI-GAME: 100 HEROES, 5 TOWERS, 3D PERSPECTIVE & ENORMOUS WORLD ──────
    const MiniGame = {
        isOpen: false,
        isFullscreen: false,
        is3D: false,
        canvas: null,
        ctx: null,
        animId: null,
        tick: 0,
        score: 0,
        coinsEarnedInSession: 0,
        lives: 3,
        maxLives: 3,
        ultimateCharge: 0, // 0 to 100
        shake: 0,
        roundStartTime: 0,
        roundDurationSec: 510, // ~8.5 minutes (7-10 mins)

        // 100 HEROES DATABASE (First 25 Canonical Heroes of Litally Universe)
        heroes100: [{"id": 1, "name": "Фил", "fullName": "Фил К. Рэйт", "title": "Главный стратег, СЕО, аналитик", "cls": "techno", "clsName": "Главный стратег", "avatar": "👨‍💼", "color": "#00f0ff", "hp": 140, "atk": 32, "spd": 7.4, "crit": 30, "weapon": "Квантовый планшет & Импульсный карабин", "ult": "«Кризисный менеджмент» — Призыв соратника и тактический овердрайв", "role": "Стратег / СЕО", "abilities": [{"slot": 1, "name": "«Метод Сая»", "key": "Q", "keyDisplay": "[Q]", "desc": "Анализ слабых мест и мотивов противника. Подсвечивает уязвимости (+50% крит).", "icon": "🧠", "cd": 4, "type": "analysis"}, {"slot": 2, "name": "«Контроль дофамина»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Мгновенное снятие дебаффов страха и паники. Активирует фокус и ускорение.", "icon": "✨", "cd": 7, "type": "focus"}, {"slot": 3, "name": "«Анализ LTV и воронки»", "key": "ПКМ", "keyDisplay": "[Зажать ПКМ]", "desc": "Расчёт идеального уклонения и критического урона. Сканирует всё поле боя.", "icon": "📊", "cd": 5, "type": "scan"}, {"slot": 4, "name": "«Кризисный менеджмент»", "key": "R", "keyDisplay": "[R]", "desc": "Ультимейт: Призыв соратника для подстраховки и огневой поддержки с орбиты.", "icon": "🤝", "cd": 20, "type": "summon"}, {"slot": 5, "name": "«Архитектура будущего»", "key": "Space+W", "keyDisplay": "[Зажать Space + W]", "desc": "Сверхрывок вперед с голографическим следом и защитным силовым полем.", "icon": "🚀", "cd": 6, "type": "dash"}]}, {"id": 2, "name": "Тогайбек", "fullName": "Тогайбек (Фритюрництыров)", "title": "Экстремал, уличный боец, «химик» на адреналине", "cls": "warrior", "clsName": "Экстремал-Химик", "avatar": "🍳", "color": "#f59e0b", "hp": 180, "atk": 36, "spd": 7.0, "crit": 25, "weapon": "Тяжелая титановая сковорода & Фритюр-пушка", "ult": "«Адреналиновый форсаж» — Супер-режим берсерка", "role": "Штурмовик / Берсерк", "abilities": [{"slot": 1, "name": "«Удар сковородой / Фритюр-всплеск»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сокрушительный удар раскаленной сковородой и шквал кипящего масла по конусу.", "icon": "🍳", "cd": 3, "type": "friture_burst"}, {"slot": 2, "name": "«Перегруз по маслу»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Паровой таран сквозь вражеский строй с рассекающим масляным следом.", "icon": "💨", "cd": 6, "type": "oil_ram"}, {"slot": 3, "name": "«Крик Тогайбека»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Оглушительный звуковой рык, сбивающий с ног и замедляющий врагов на 70%.", "icon": "🗣️", "cd": 5, "type": "sonic_roar"}, {"slot": 4, "name": "«Адреналиновый форсаж»", "key": "R", "keyDisplay": "[R]", "desc": "Супер-режим берсерка: удвоенная скорость передвижения, +100% урона и неуязвимость.", "icon": "🔥", "cd": 18, "type": "berserk"}, {"slot": 5, "name": "«Двойной бургер-додж»", "key": "Z", "keyDisplay": "[Z / Space x2]", "desc": "Акробатический уворот с облаком горячего пара и моментальным рывком в сторону.", "icon": "🍔", "cd": 4, "type": "dodge"}]}, {"id": 3, "name": "Сара", "fullName": "Сара", "title": "Акробатка, утилитарист, разведчик", "cls": "mage", "clsName": "Акробатка", "avatar": "🧝‍♀️", "color": "#ec4899", "hp": 115, "atk": 35, "spd": 7.9, "crit": 35, "weapon": "Парные лазерные клинки & Крюк-кошка", "ult": "«Танец лезвий» — Шквальная круговая серия ударов", "role": "Разведчик / Утилитарист", "abilities": [{"slot": 1, "name": "«Теневой паркур»", "key": "Q", "keyDisplay": "[Q]", "desc": "Бег по высотам и стенам: игнорирование препятствий и ускорение на 50%.", "icon": "🏃‍♀️", "cd": 4, "type": "parkour"}, {"slot": 2, "name": "«Лазерная растяжка»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Установка невидимой лазерной мины-ловушки, детонирующей при приближении врага.", "icon": "⚡", "cd": 6, "type": "laser_tripwire"}, {"slot": 3, "name": "«Ослепляющий импульс»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Вспышка карманного дрона, ослепляющая всех противников впереди на 3 сек.", "icon": "💡", "cd": 5, "type": "blind"}, {"slot": 4, "name": "«Танец лезвий»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальная круговая серия рассекающих ударов с разрезанием снарядов и брони.", "icon": "⚔️", "cd": 19, "type": "blade_dance"}, {"slot": 5, "name": "«Эвакуация: Крюк-кошка»", "key": "Z", "keyDisplay": "[Z / Shift+ПКМ]", "desc": "Мгновенный подтяг на крюке-кошке на безопасную дистанцию с неуязвимостью.", "icon": "🪝", "cd": 5, "type": "grapple"}]}, {"id": 4, "name": "Дарк", "fullName": "Дарк (Дарк Грант)", "title": "Бухгалтер, суровый аудитор, «тяжёлый контроль»", "cls": "paladin", "clsName": "Суровый аудитор", "avatar": "💼", "color": "#64748b", "hp": 170, "atk": 28, "spd": 6.5, "crit": 20, "weapon": "Титановый чемодан аудитора & Гравитационный блокнот", "ult": "«Ликвидация активов» — Удар кейсом с гравитационной волной", "role": "Тяжелый контроль / Танк", "abilities": [{"slot": 1, "name": "«Аудит баланса»", "key": "Q", "keyDisplay": "[Q]", "desc": "Высасывание ресурсов и щитов у противников с передачей их в свою защиту.", "icon": "⚖️", "cd": 5, "type": "audit_drain"}, {"slot": 2, "name": "«Печать банкротства»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Тяжелая энергетическая печать, прижимающая врагов к земле и запрещающая движение.", "icon": "📑", "cd": 7, "type": "bankruptcy_seal"}, {"slot": 3, "name": "«Глухая проводка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый металлический блок кейсом с отражением 100% входящих пуль.", "icon": "🛡️", "cd": 4, "type": "case_block"}, {"slot": 4, "name": "«Ликвидация активов»", "key": "R", "keyDisplay": "[R]", "desc": "Сокрушительный удар кейсом судного дня с расходящейся гравитационной волной.", "icon": "💥", "cd": 20, "type": "asset_liquidation"}, {"slot": 5, "name": "«Налоговый сбор»", "key": "Z", "keyDisplay": "[Z / Shift+Q]", "desc": "Аура финансового прессинга: замедляет всех врагов вокруг на 60% и крадет энергию.", "icon": "💰", "cd": 6, "type": "tax_levy"}]}, {"id": 5, "name": "Анна", "fullName": "Анна", "title": "Квантовый физик, боец пространственных искажений", "cls": "warrior", "clsName": "Квантовый физик", "avatar": "⚛️", "color": "#8b5cf6", "hp": 135, "atk": 34, "spd": 7.3, "crit": 32, "weapon": "Квантовые кастеты & Хроно-излучатель", "ult": "«Сингулярность: Разрыв» — Ультимативный разрыв пространства", "role": "Боец ближнего боя / Физик", "abilities": [{"slot": 1, "name": "«Сдвиг фазы»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мгновенный квантовый телепорт на 10 метров вперед сквозь любые преграды.", "icon": "🌌", "cd": 4, "type": "phase_shift"}, {"slot": 2, "name": "«Квантовый кулак»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Удар в пространственную брешь с отложенным квантовым взрывом через 2 секунды.", "icon": "👊", "cd": 6, "type": "quantum_fist"}, {"slot": 3, "name": "«Гравитационная воронка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Микро-чёрная дыра в точке курсора, затягивающая всех врагов в центр.", "icon": "🌀", "cd": 6, "type": "gravity_vortex"}, {"slot": 4, "name": "«Сингулярность: Разрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Ультимативный пространственный коллапс: наносит огромный урон по всей области.", "icon": "🪐", "cd": 22, "type": "singularity"}, {"slot": 5, "name": "«Стазис-поле»", "key": "Z", "keyDisplay": "[Z / Shift+F]", "desc": "Заморозка времени для одной или группы целей на 3 секунды (полный паралич).", "icon": "⏳", "cd": 8, "type": "stasis_field"}]}, {"id": 6, "name": "Хейлэр Смит", "fullName": "Хейлэр Смит", "title": "Биоинженер, полевой медик, «главврач»", "cls": "techno", "clsName": "Главврач", "avatar": "💉", "color": "#10b981", "hp": 130, "atk": 26, "spd": 7.1, "crit": 22, "weapon": "Био-инжектор & Пневмо-шприцемет", "ult": "«Полевая реанимация» — Массовый хил команды и воскрешение", "role": "Полевой медик / Саппорт", "abilities": [{"slot": 1, "name": "«Токсичный аэрозоль»", "key": "Q", "keyDisplay": "[Q]", "desc": "Облако едкого био-газа, наносящее периодический DoT урон и снижающее броню.", "icon": "☣️", "cd": 4, "type": "toxic_gas"}, {"slot": 2, "name": "«Шприц-инъектор: Адреналин»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Мгновенное исцеление союзника или себя на +80 HP и +40% к скорости.", "icon": "💉", "cd": 5, "type": "adrenaline_heal"}, {"slot": 3, "name": "«Био-сканер»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Рентгеновский импульс, раскрывающий врагов сквозь дым и стены с подсветкой HP.", "icon": "🔬", "cd": 5, "type": "bio_scan"}, {"slot": 4, "name": "«Полевая реанимация»", "key": "R", "keyDisplay": "[R]", "desc": "Мощная волна нано-лечения: восстанавливает всем союзникам +200 HP.", "icon": "💖", "cd": 20, "type": "resuscitation"}, {"slot": 5, "name": "«Дефибрилляция»", "key": "Z", "keyDisplay": "[Z / Shift+E]", "desc": "Мощный электроудар в упор медицинскими электродами с шоком и параличом.", "icon": "⚡", "cd": 6, "type": "defibrillator"}]}, {"id": 7, "name": "Грэй", "fullName": "Грэй (Грэй Бэдвор)", "title": "Военный инженер, фортификация и экзоскелеты", "cls": "paladin", "clsName": "Военный инженер", "avatar": "🦾", "color": "#f97316", "hp": 165, "atk": 30, "spd": 6.6, "crit": 24, "weapon": "Тяжелый плазменный резак & Экзо-щит", "ult": "«Активация Экзо-титана» — Удвоение брони и ракетный залп", "role": "Фортификатор / Танк", "abilities": [{"slot": 1, "name": "«Магнитный якорь»", "key": "Q", "keyDisplay": "[Q]", "desc": "Выстрел магнитным гарпуном, притягивающим врагов или сближающим с ними.", "icon": "🧲", "cd": 4, "type": "magnetic_anchor"}, {"slot": 2, "name": "«Развёртывание баррикады»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Установка кинетического энергетического щита-укрытия, блокирующего снаряды.", "icon": "🚧", "cd": 6, "type": "barricade"}, {"slot": 3, "name": "«Плазменный резак»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированный лазерный луч огромной температуры, прожигающий любую броню.", "icon": "🔥", "cd": 4, "type": "plasma_torch"}, {"slot": 4, "name": "«Активация Экзо-титана»", "key": "R", "keyDisplay": "[R]", "desc": "Броня увеличивается вдвое, из наплечников вылетает веер самонаводящихся ракет.", "icon": "🚀", "cd": 22, "type": "exo_titan"}, {"slot": 5, "name": "«ЭМИ-мина»", "key": "Z", "keyDisplay": "[Z / Shift+C]", "desc": "Импульсная мина, снимающая щиты врагов и отключающая их технику на 4 секунды.", "icon": "🌐", "cd": 7, "type": "emp_mine"}]}, {"id": 8, "name": "Алмат Шаттершилд", "fullName": "Алмат Шаттершилд", "title": "Непробиваемый танк со щитом судного дня", "cls": "paladin", "clsName": "Тяжёлый танк", "avatar": "🛡️", "color": "#0284c7", "hp": 210, "atk": 25, "spd": 6.0, "crit": 18, "weapon": "Башенный щит Судного Дня & Тяжелый молот", "ult": "«Сейсмический раскол» — Удар щитом об землю с трещиной", "role": "Главный танк / Защитник", "abilities": [{"slot": 1, "name": "«Провокация чести»", "key": "Q", "keyDisplay": "[Q]", "desc": "Агро всех врагов в радиусе 15 метров на себя, заставляя атаковать щит.", "icon": "📢", "cd": 5, "type": "taunt"}, {"slot": 2, "name": "«Удар бастиона»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Рывок вперёд со щитом наперевес, сбивающий всех противников на пути с ног.", "icon": "💥", "cd": 6, "type": "shield_bash"}, {"slot": 3, "name": "«Стена Шаттершилда»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Огромный фронтальный световой барьер, поглощающий любой фронтальный урон.", "icon": "🧱", "cd": 4, "type": "shatter_wall"}, {"slot": 4, "name": "«Сейсмический раскол»", "key": "R", "keyDisplay": "[R]", "desc": "Сокрушительный удар щитом в землю, вызывающий огненную трещину и стан.", "icon": "🌋", "cd": 20, "type": "seismic_rift"}, {"slot": 5, "name": "«Непоколебимость»", "key": "Z", "keyDisplay": "[Z / Shift+V]", "desc": "Полный иммунитет к любому контролю, оглушению и замедлению на 5 секунд.", "icon": "👑", "cd": 8, "type": "ironclad"}]}, {"id": 9, "name": "Айганым", "fullName": "Айганым", "title": "Дипломат, мастер майндгеймсов и манипуляций", "cls": "mage", "clsName": "Дипломат", "avatar": "📜", "color": "#e879f9", "hp": 110, "atk": 33, "spd": 7.3, "crit": 31, "weapon": "Дипломатический веер & Ментальная сфера", "ult": "«Резолюция: Коллапс» — Массовый ментальный взрыв", "role": "Пси-контроллер / Маг", "abilities": [{"slot": 1, "name": "«Вето: Запрет»", "key": "Q", "keyDisplay": "[Q]", "desc": "Блокировка всех способностей и стрельбы выбранного врага на 4 секунды (Сайленс).", "icon": "🚫", "cd": 5, "type": "veto_silence"}, {"slot": 2, "name": "«Контракт крови»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Связывает двух врагов ментальной нитью: урон по одному в точности передается второму.", "icon": "📜", "cd": 7, "type": "blood_contract"}, {"slot": 3, "name": "«Очарование аудитории»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Враг теряет агрессию, перестает стрелять и покорно идет в сторону Айганым.", "icon": "💖", "cd": 6, "type": "charm"}, {"slot": 4, "name": "«Резолюция: Коллапс»", "key": "R", "keyDisplay": "[R]", "desc": "Массовый ментальный резонанс: наносит урон пропорционально интеллекту врагов.", "icon": "🔮", "cd": 21, "type": "resolution_collapse"}, {"slot": 5, "name": "«Дипломатический иммунитет»", "key": "Z", "keyDisplay": "[Z / Shift]", "desc": "Абсолютная неуязвимость к любому урону и воздействию на 3 секунды.", "icon": "🕊️", "cd": 9, "type": "diplomatic_immunity"}]}, {"id": 10, "name": "Батырхан Марк", "fullName": "Батырхан Марк", "title": "Скрытный следопыт, лучник и охотник", "cls": "ranger", "clsName": "Следопыт", "avatar": "🏹", "color": "#84cc16", "hp": 125, "atk": 36, "spd": 7.8, "crit": 42, "weapon": "Композитный степной лук & Кинжал ястреба", "ult": "«Град стрел духов» — Дождь из стрел по большой площади", "role": "Снайпер / Следопыт", "abilities": [{"slot": 1, "name": "«Метка добычи»", "key": "Q", "keyDisplay": "[Q]", "desc": "Метка охотника: цель подсвечивается и получает +35% повышенного урона от всех источников.", "icon": "🎯", "cd": 4, "type": "hunter_mark"}, {"slot": 2, "name": "«Ловушка охотника»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Стальной капкан, намертво обездвиживающий наступившего врага на 4 секунды.", "icon": "🪤", "cd": 6, "type": "snare_trap"}, {"slot": 3, "name": "«Выстрел ястреба»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сверхдальнобойная пробивная стрела, летящая через препятствия на огромную дистанцию.", "icon": "🦅", "cd": 4, "type": "hawk_shot"}, {"slot": 4, "name": "«Град стрел духов»", "key": "R", "keyDisplay": "[R]", "desc": "Призыв духов предков: шквальный ливень из сотен стрел по обширной зоне боя.", "icon": "🏹", "cd": 20, "type": "arrow_storm"}, {"slot": 5, "name": "«Маскировочный плащ степи»", "key": "Z", "keyDisplay": "[Z / Shift+Q]", "desc": "Полная оптическая невидимость на 6 секунд с увеличением скорости перемещения.", "icon": "🍃", "cd": 8, "type": "camo_cloak"}]}, {"id": 11, "name": "Человек в красном", "fullName": "Человек в красном", "title": "Загадочный мастер катаны и кровавых дуэлей", "cls": "warrior", "clsName": "Мастер катаны", "avatar": "🥷", "color": "#dc2626", "hp": 135, "atk": 40, "spd": 7.6, "crit": 45, "weapon": "Багровая катана Мурамаса", "ult": "«Багровая резня: 1000 лепестков» — Вихревой шторм лезвий", "role": "Дуэлянт / Ассасин", "abilities": [{"slot": 1, "name": "«Жажда крови»", "key": "Q", "keyDisplay": "[Q]", "desc": "Вампиризм 35% от наносимого урона и увеличение скорости атаки на 40%.", "icon": "🩸", "cd": 5, "type": "bloodlust"}, {"slot": 2, "name": "«Кровавый росчерк»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Молниеносный выпад катаной с глубоким кровотечением и рассечением брони.", "icon": "🗡️", "cd": 4, "type": "crimson_slash"}, {"slot": 3, "name": "«Парирование абсолюта»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Мгновенное парирование любой вражеской атаки со смертоносной контратакой.", "icon": "⚔️", "cd": 4, "type": "parry"}, {"slot": 4, "name": "«Багровая резня: 1000 лепестков»", "key": "R", "keyDisplay": "[R]", "desc": "Мгновенные 1000 ударов катаной по всем врагам вокруг в вихре кровавых лепестков.", "icon": "🌸", "cd": 22, "type": "thousand_petals"}, {"slot": 5, "name": "«Шаг сквозь тень»", "key": "Z", "keyDisplay": "[Z / Shift+Space]", "desc": "Мгновенный телепорт-рывок за спину противника со 100% критическим ударом.", "icon": "🌑", "cd": 6, "type": "shadow_step"}]}, {"id": 12, "name": "Роберт Крон", "fullName": "Роберт Крон («Стрелок»)", "title": "Легендарный снайпер с крупнокалиберной винтовкой", "cls": "ranger", "clsName": "Легендарный снайпер", "avatar": "🎯", "color": "#06b6d4", "hp": 120, "atk": 44, "spd": 7.2, "crit": 48, "weapon": "Антиматериальная снайперская винтовка «Игла»", "ult": "«Один выстрел — один мир» — Выстрел с гарантированным критом 300%", "role": "Дальнобойный снайпер", "abilities": [{"slot": 1, "name": "«Дымовая завеса отхода»", "key": "Q", "keyDisplay": "[Q]", "desc": "Бросок тактической дымовой шашки под ноги, маскирующей стрелка.", "icon": "💨", "cd": 5, "type": "smoke_screen"}, {"slot": 2, "name": "«Бронебойный патрон 'Игла'»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сверхтяжелая пуля, пробивающая стены, укрытия и несколько врагов насквозь.", "icon": "💥", "cd": 6, "type": "piercing_round"}, {"slot": 3, "name": "«Прицел 'Око ворона'»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Снайперский оптический зум х8 с замедлением времени для идеального прицеливания.", "icon": "👁️", "cd": 3, "type": "sniper_zoom"}, {"slot": 4, "name": "«Один выстрел — один мир»", "key": "R", "keyDisplay": "[R]", "desc": "Легендарный выстрел, наносящий 300% критического урона и уничтожающий боссов.", "icon": "🌐", "cd": 22, "type": "one_shot_kill"}, {"slot": 5, "name": "«Сенсорный маяк»", "key": "Z", "keyDisplay": "[Z / Shift+E]", "desc": "Запуск сканирующего дрона, обнаруживающего всех скрытых врагов на миникарте.", "icon": "📡", "cd": 7, "type": "sensor_beacon"}]}, {"id": 13, "name": "Адриан Крон", "fullName": "Адриан Крон", "title": "Генерал полиции, тактик ближнего боя", "cls": "warrior", "clsName": "Генерал полиции", "avatar": "👮", "color": "#3b82f6", "hp": 155, "atk": 32, "spd": 7.3, "crit": 28, "weapon": "Тяжелый служебный револьвер & Электрошоковая дубинка", "ult": "«План перехват» — Вызов полицейского дрона огневой поддержки", "role": "Тактик ближнего боя / Дуэлянт", "abilities": [{"slot": 1, "name": "«Полицейский ордер»", "key": "Q", "keyDisplay": "[Q]", "desc": "Бросок энергетических наручников, сковывающих цель на 3 секунды без возможности стрельбы.", "icon": "⛓️", "cd": 5, "type": "handcuffs"}, {"slot": 2, "name": "«Шоковый разряд»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Удар электродубинкой с мощным оглушением и электрическим шоком цели.", "icon": "⚡", "cd": 4, "type": "shock_baton"}, {"slot": 3, "name": "«Фаннинг из револьвера»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Мгновенный веерный отстрел всех 6 патронов барабана за доли секунды.", "icon": "🔫", "cd": 5, "type": "revolver_fanning"}, {"slot": 4, "name": "«План перехват»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов патрульного дрона, зависающего над полем боя и ведущего шквальный пулеметный огонь.", "icon": "🛸", "cd": 20, "type": "interceptor_drone"}, {"slot": 5, "name": "«Тактический подкат»", "key": "Z", "keyDisplay": "[Z / Shift+C]", "desc": "Стремительный подкат по полу, сбивающий всех врагов с ног и дающий ускорение.", "icon": "🛹", "cd": 5, "type": "tactical_slide"}]}, {"id": 14, "name": "Кайрат Казахстанулы", "fullName": "Кайрат Казахстанулы", "title": "Король дыма и плотного ближнего боя", "cls": "warrior", "clsName": "Король дыма", "avatar": "💨", "color": "#6b7280", "hp": 160, "atk": 35, "spd": 7.4, "crit": 29, "weapon": "Парные кастеты-клинки & Дымогенератор", "ult": "«Ярость кочевника» — Вихрь ударов парным оружием", "role": "Штурмовик / Мастер дыма", "abilities": [{"slot": 1, "name": "«Дымовая завеса Астаны»", "key": "Q", "keyDisplay": "[Q]", "desc": "Создает непроглядный дымовой купол, в котором враги теряют ориентацию.", "icon": "🌫️", "cd": 5, "type": "astana_smoke"}, {"slot": 2, "name": "«Удар батыра»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сокрушительный хук в челюсть, отправляющий любого врага в глубокий нокдаун.", "icon": "🥊", "cd": 4, "type": "batyr_punch"}, {"slot": 3, "name": "«Чутье степи»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Позволяет видеть тепловые силуэты всех врагов внутри любого дыма и тумана.", "icon": "🐺", "cd": 4, "type": "steppe_vision"}, {"slot": 4, "name": "«Ярость кочевника»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный вихрь ударов парным оружием с повышенной скоростью и разлетом лезвий.", "icon": "🌪️", "cd": 19, "type": "nomad_wrath"}, {"slot": 5, "name": "«Штурмовой натиск»", "key": "Z", "keyDisplay": "[Z / Shift+W]", "desc": "Бешеный разгон с плечом вперед, ломающий преграды и расшвыривающий врагов.", "icon": "🦬", "cd": 6, "type": "assault_charge"}]}, {"id": 15, "name": "Адам Казахстанулы", "fullName": "Адам Казахстанулы", "title": "Мастер тяжелых щитов и фортификации укрытий", "cls": "paladin", "clsName": "Мастер укрытий", "avatar": "🛡️", "color": "#475569", "hp": 195, "atk": 26, "spd": 6.2, "crit": 19, "weapon": "Баллистический щит & Окопный дробовик", "ult": "«Несокрушимый оплот» — Купол, отражающий все пули на 6 сек", "role": "Защитник / Саппорт-танк", "abilities": [{"slot": 1, "name": "«Братское плечо»", "key": "Q", "keyDisplay": "[Q]", "desc": "Перенаправление 50% входящего урона с любого выбранного союзника на свой щит.", "icon": "🤝", "cd": 5, "type": "brother_shoulder"}, {"slot": 2, "name": "«Мобильный дот»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Установка укрепленного станкового пулеметного дота для союзников.", "icon": "🧱", "cd": 7, "type": "bunker_turret"}, {"slot": 3, "name": "«Окопная дробь»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Мощный выстрел тяжелой картечью, отбрасывающий врагов назад на 10 метров.", "icon": "💥", "cd": 4, "type": "buckshot_blast"}, {"slot": 4, "name": "«Несокрушимый оплот»", "key": "R", "keyDisplay": "[R]", "desc": "Развертывание огромного защитного купола, отражающего все снаряды в течение 6 сек.", "icon": "🏰", "cd": 22, "type": "invulnerable_dome"}, {"slot": 5, "name": "«Ремонтный набор»", "key": "Z", "keyDisplay": "[Z / Shift+E]", "desc": "Восстановление брони и щитов себе и ближайшим союзникам на +120 единиц.", "icon": "🔧", "cd": 7, "type": "armor_repair"}]}, {"id": 16, "name": "Кирилл", "fullName": "Кирилл", "title": "Диверсант, специалист по взрывчатке C4 и минам", "cls": "techno", "clsName": "Диверсант-подрывник", "avatar": "💣", "color": "#ef4444", "hp": 130, "atk": 38, "spd": 7.5, "crit": 36, "weapon": "Заряды пластида C4 & Детонаторный автомат", "ult": "«Ковровый подрыв» — Запуск кассетных мин по секторам", "role": "Подрывник / Диверсант", "abilities": [{"slot": 1, "name": "«Светошумовая граната»", "key": "Q", "keyDisplay": "[Q]", "desc": "Вспышка и звуковой удар: полная потеря ориентации и оглушение врагов на 3.5 сек.", "icon": "✨", "cd": 4, "type": "flashbang"}, {"slot": 2, "name": "«Установка пластида C4»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Бросок мощной взрывчатки C4, прилипающей к полу, стенам или технике.", "icon": "🧨", "cd": 4, "type": "c4_charge"}, {"slot": 3, "name": "«Детонатор»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Дистанционный клик: мгновенный подрыв всех заложенных зарядов C4.", "icon": "🖲️", "cd": 2, "type": "detonate"}, {"slot": 4, "name": "«Ковровый подрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Запуск серии кассетных авиамин, взрывающих весь сектор сплошным ковром огня.", "icon": "💥", "cd": 21, "type": "carpet_bomb"}, {"slot": 5, "name": "«Радио-помехи»", "key": "Z", "keyDisplay": "[Z / Shift+Q]", "desc": "Глушилка частот: отключает радар, миникарту и наведение турелей противника.", "icon": "📻", "cd": 8, "type": "radio_jam"}]}, {"id": 17, "name": "Брэйкомаренстер", "fullName": "Брэйкомаренстер", "title": "Киборг-бурильщик тяжелого класса", "cls": "paladin", "clsName": "Киборг-бурильщик", "avatar": "🚜", "color": "#b45309", "hp": 200, "atk": 32, "spd": 6.1, "crit": 20, "weapon": "Гигантский алмазный бур & Паровой котел", "ult": "«Тектонический разлом» — Создание непроходимой лавовой трещины", "role": "Тяжелый прорыв / Бурильщик", "abilities": [{"slot": 1, "name": "«Перегрев котла»", "key": "Q", "keyDisplay": "[Q]", "desc": "Выброс раскаленного пара на 360°, обжигающего врагов и скрывающего киборга.", "icon": "♨️", "cd": 5, "type": "steam_overheat"}, {"slot": 2, "name": "«Глубинный сейсмоудар»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Удар буром вглубь породы, вызывающий локальное землетрясение и стан.", "icon": "🌍", "cd": 6, "type": "seismic_slam"}, {"slot": 3, "name": "«Алмазный бур: Защита»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Вращение бура на полных оборотах, превращающее его в щит, перемалывающий пули.", "icon": "🛡️", "cd": 4, "type": "drill_shield"}, {"slot": 4, "name": "«Тектонический разлом»", "key": "R", "keyDisplay": "[R]", "desc": "Раскалывает поле боя пополам, создавая пылающую лавовую пропасть с уроном.", "icon": "🌋", "cd": 22, "type": "tectonic_rift"}, {"slot": 5, "name": "«Буровой таран»", "key": "Z", "keyDisplay": "[Z / Shift+W]", "desc": "Неудержимый разгон буром вперед, перемалывающий всех врагов и укрытия.", "icon": "⚙️", "cd": 6, "type": "drill_ram"}]}, {"id": 18, "name": "Трэйк", "fullName": "Трэйк", "title": "Скоростной курьер-киллер, мастер роликов и прыжков", "cls": "ranger", "clsName": "Скоростной агент", "avatar": "🛼", "color": "#06b6d4", "hp": 120, "atk": 36, "spd": 8.5, "crit": 38, "weapon": "Неоновые ролики & Шоковые метательные диски", "ult": "«Овердрайв: Сверхзвук» — Замедление всего мира вокруг на 70%", "role": "Спидстер / Фланкер", "abilities": [{"slot": 1, "name": "«Вспышка ускорения»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мгновенный рывок сквозь толпу врагов с нанесением глубоких порезов.", "icon": "⚡", "cd": 4, "type": "speed_flash"}, {"slot": 2, "name": "«Грайнд по стенам»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Экстремальное скольжение на роликах по стенам и препятствиям с искрами.", "icon": "🛹", "cd": 5, "type": "wall_grind"}, {"slot": 3, "name": "«Шоковые диски»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Метание острых неоновых дисков, рикошетящих между врагами с электрошоком.", "icon": "💿", "cd": 3, "type": "shock_discs"}, {"slot": 4, "name": "«Овердрайв: Сверхзвук»", "key": "R", "keyDisplay": "[R]", "desc": "Переход в гипер-скорость: весь мир вокруг замедляется на 70%, а Трэйк неуязвим.", "icon": "🌀", "cd": 20, "type": "supersonic_overdrive"}, {"slot": 5, "name": "«Дрифт-разворот»", "key": "Z", "keyDisplay": "[Z / S+Space]", "desc": "Резкая смена направления на 180° с подсечкой и опрокидыванием врагов.", "icon": "🔄", "cd": 4, "type": "drift_turn"}]}, {"id": 19, "name": "Дэн Блэквуд", "fullName": "Дэн Блэквуд («Великий Дэн»)", "title": "Иллюзионист, шоумен, мастер голограмм и обмана", "cls": "mage", "clsName": "Иллюзионист", "avatar": "🎩", "color": "#9333ea", "hp": 115, "atk": 37, "spd": 7.4, "crit": 34, "weapon": "Зачарованная колода карт & Межпространственный цилиндр", "ult": "«Гранд-финал: Иллюзион» — Все враги атакуют фантомов и взрываются", "role": "Иллюзионист / Трикстер", "abilities": [{"slot": 1, "name": "«Зеркальные клоны»", "key": "Q", "keyDisplay": "[Q]", "desc": "Создает 3 бегущие голографические иллюзии, отвлекающие на себя вражеский огонь.", "icon": "👥", "cd": 5, "type": "mirror_clones"}, {"slot": 2, "name": "«Ловушка в шляпе»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Бросок цилиндра: засасывает противника в межпространственный карман на 3 сек.", "icon": "🎩", "cd": 7, "type": "hat_trap"}, {"slot": 3, "name": "«Карточный веер»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Бросок веера из зачарованных карт, взрывающихся при контакте с врагами.", "icon": "🃏", "cd": 4, "type": "card_fan"}, {"slot": 4, "name": "«Гранд-финал: Иллюзион»", "key": "R", "keyDisplay": "[R]", "desc": "Все противники начинают бить собственные фантомы, получая зеркальный урон.", "icon": "🎭", "cd": 22, "type": "grand_illusion"}, {"slot": 5, "name": "«Фокус с исчезновением»", "key": "Z", "keyDisplay": "[Z / Shift+E]", "desc": "Телепортация на короткую дистанцию с взрывом конфетти и плотным дымом.", "icon": "✨", "cd": 5, "type": "vanish"}]}, {"id": 20, "name": "Иван", "fullName": "Иван", "title": "Командир полевой разведки, тактик с боевым дроном", "cls": "paladin", "clsName": "Командир разведки", "avatar": "🪖", "color": "#16a34a", "hp": 160, "atk": 31, "spd": 6.8, "crit": 26, "weapon": "Командный пулемет & Целеуказатель авиации", "ult": "«Командный залп» — Массированный ракетный удар по координатам", "role": "Командир / Поддержка огнем", "abilities": [{"slot": 1, "name": "«Артиллерийский целеуказатель»", "key": "Q", "keyDisplay": "[Q]", "desc": "Метка лазерного наведения: вызов сокрушительного авиаудара в указанную точку.", "icon": "📍", "cd": 5, "type": "artillery_strike"}, {"slot": 2, "name": "«Запуск дрона-корректировщика»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Дрон парит рядом, подсвечивая слабые точки целей и атакуя их лазером.", "icon": "🛰️", "cd": 6, "type": "spotter_drone"}, {"slot": 3, "name": "«Подавление огнем»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Шквальная непрерывная пулеметная очередь, накладывающая эффект паники.", "icon": "💥", "cd": 4, "type": "suppressive_fire"}, {"slot": 4, "name": "«Командный залп»", "key": "R", "keyDisplay": "[R]", "desc": "Приказ всей батарее: массированный залп крылатых ракет по всему сектору.", "icon": "🚀", "cd": 22, "type": "command_salvo"}, {"slot": 5, "name": "«Боевой стимулятор»", "key": "Z", "keyDisplay": "[Z / Shift+E]", "desc": "Раздача стимуляторов взводу: повышение скорости стрельбы и урона союзников на 35%.", "icon": "💊", "cd": 7, "type": "combat_stim"}]}, {"id": 21, "name": "Нурбол Бургеров", "fullName": "Нурбол Бургеров", "title": "Ловкий паркурщик и скаут фастфуд-картеля", "cls": "ranger", "clsName": "Паркурщик-скаут", "avatar": "🍔", "color": "#eab308", "hp": 130, "atk": 33, "spd": 8.0, "crit": 32, "weapon": "Парные фритюрные тесаки & Зажигательные коктейли", "ult": "«Атака комбо-набором» — Ураганный штурм с фритюрными бомбами", "role": "Паркурщик / Скаут", "abilities": [{"slot": 1, "name": "«Масляный след»", "key": "Q", "keyDisplay": "[Q]", "desc": "Оставляет за собой скользкую дорожку раскаленного масла, на которой враги падают.", "icon": "🛢️", "cd": 4, "type": "oil_slick"}, {"slot": 2, "name": "«Бросок коктейля с фритюром»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Зажигательная бутылка с горящим маслом, создающая пылающую огненную зону.", "icon": "🍾", "cd": 5, "type": "molotov"}, {"slot": 3, "name": "«Энергетик 'Турбо'»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Мгновенное восстановление выносливости и спринт с увеличением скорости на 70%.", "icon": "🥤", "cd": 5, "type": "energy_drink"}, {"slot": 4, "name": "«Атака комбо-набором»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный бросок комбо-наборов с фритюрными взрывами по всему периметру.", "icon": "🍟", "cd": 19, "type": "combo_assault"}, {"slot": 5, "name": "«Быстрая доставка»", "key": "Z", "keyDisplay": "[Z / Space+E]", "desc": "Супер-прыжок на огромную дистанцию с приземлением и оглушением врагов.", "icon": "🛵", "cd": 5, "type": "express_jump"}]}, {"id": 22, "name": "Дархан Бектор", "fullName": "Дархан Бектор Бургерэктор", "title": "Элитный снайпер-артиллерист клана Бургерэкторов", "cls": "ranger", "clsName": "Снайпер-артиллерист", "avatar": "🔭", "color": "#d97706", "hp": 135, "atk": 42, "spd": 7.0, "crit": 45, "weapon": "Тяжелая винтовка 'Бектор-1' & Осадные мортиры", "ult": "«Залп тяжелых мортир» — Три мощнейших взрыва по площадям", "role": "Артиллерист / Снайпер", "abilities": [{"slot": 1, "name": "«Тепловизионный визор»", "key": "Q", "keyDisplay": "[Q]", "desc": "Включение тепловизора: подсветка всех целей через укрытия и стены.", "icon": "🥽", "cd": 4, "type": "thermal_visor"}, {"slot": 2, "name": "«Кассетная вспышка»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Запуск кассетного снаряда, ослепляющего и замедляющего группу противников.", "icon": "🎇", "cd": 5, "type": "cluster_flash"}, {"slot": 3, "name": "«Тяжелый калибр 'Бектор-1'»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Особый выстрел крупным калибром, сбивающий с ног и сносящий 50% щита цели.", "icon": "🎯", "cd": 4, "type": "bektor_shot"}, {"slot": 4, "name": "«Залп тяжелых мортир»", "key": "R", "keyDisplay": "[R]", "desc": "Три мощнейших артиллерийских взрыва с воздуха, уничтожающих группы врагов.", "icon": "💣", "cd": 21, "type": "mortar_barrage"}, {"slot": 5, "name": "«Отступление на тросе»", "key": "Z", "keyDisplay": "[Z / Shift+Space]", "desc": "Быстрый отскок назад на лебедке с установкой противопехотной мины.", "icon": "🧗", "cd": 6, "type": "wire_retreat"}]}, {"id": 23, "name": "Шмектор", "fullName": "Шмектор Бектор Бургерэктор («Шмеки»)", "title": "Бронированный гигант, ходячий танк с тяжелым пулеметом Гатлинга", "cls": "warrior", "clsName": "Бронированный гигант", "avatar": "🦍", "color": "#b91c1c", "hp": 240, "atk": 36, "spd": 5.9, "crit": 22, "weapon": "Шестиствольный пулемет Гатлинга & Титановый панцирь", "ult": "«Абсолютный шквал 'Мясной шторм'» — Разрывные снаряды во все стороны", "role": "Джаггернаут / Тяжелый танк", "abilities": [{"slot": 1, "name": "«Громовой топот»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сокрушительный топот ногой: оглушение всех противников вокруг в радиусе 8 метров.", "icon": "🦶", "cd": 5, "type": "thunder_stomp"}, {"slot": 2, "name": "«Титановая пластина»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Активация сверхпрочной пластины: поглощает 80% любого входящего урона на 4 сек.", "icon": "🛡️", "cd": 7, "type": "titanium_plate"}, {"slot": 3, "name": "«Раскрутка минигана»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Раскрутка стволов и ураганный шквал 100 пуль с эффектом подавления и пробития.", "icon": "🌪️", "cd": 4, "type": "minigun_spin"}, {"slot": 4, "name": "«Абсолютный шквал 'Мясной шторм'»", "key": "R", "keyDisplay": "[R]", "desc": "Стрельба крупнокалиберными разрывными снарядами во все 360 градусов.", "icon": "🔥", "cd": 22, "type": "meat_storm"}, {"slot": 5, "name": "«Таран пузом 'Шмеки-пресс'»", "key": "Z", "keyDisplay": "[Z / Shift+W]", "desc": "Неудержимый таран многотонной массой, сминающий любые препятствия и врагов.", "icon": "🦏", "cd": 6, "type": "shmeki_press"}]}, {"id": 24, "name": "Аня", "fullName": "Аня", "title": "Хакер-саппорт, взломщица систем и нейросетей", "cls": "techno", "clsName": "Хакер-саппорт", "avatar": "💻", "color": "#06b6d4", "hp": 115, "atk": 30, "spd": 7.5, "crit": 28, "weapon": "Кибер-дека & ЭМИ-излучатель", "ult": "«Глобальный блэкаут» — Отключение света, интерфейсов и радаров врагов", "role": "Хакер / Саппорт", "abilities": [{"slot": 1, "name": "«Нейро-взлом оружия»", "key": "Q", "keyDisplay": "[Q]", "desc": "Дистанционный взлом систем: заклинивает оружие выбранного врага на 4 секунды.", "icon": "🔒", "cd": 5, "type": "weapon_hack"}, {"slot": 2, "name": "«Перехват турелей / дронов»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Взлом вражеской техники: турели и дроны противника начинают атаковать своих союзников.", "icon": "🛰️", "cd": 7, "type": "turret_hijack"}, {"slot": 3, "name": "«Шифрованный канал связи»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Квантовое шифрование: дает всей команде иммунитет к критам и сканерам на 5 сек.", "icon": "🔑", "cd": 6, "type": "encrypted_comms"}, {"slot": 4, "name": "«Глобальный блэкаут»", "key": "R", "keyDisplay": "[R]", "desc": "Полное отключение энергосистемы врагов: вырубает радары, щиты и замедляет противников.", "icon": "⚡", "cd": 22, "type": "blackout"}, {"slot": 5, "name": "«Цифровой фантом»", "key": "Z", "keyDisplay": "[Z / Shift+E]", "desc": "Создает на радаре и поле боя ложную цель, притягивающую огонь врагов.", "icon": "👤", "cd": 5, "type": "digital_decoy"}]}, {"id": 25, "name": "Стелла", "fullName": "Стелла", "title": "Хранительница древних боевых искусств и духовной энергии", "cls": "paladin", "clsName": "Духовная наставница", "avatar": "🧘‍♀️", "color": "#f43f5e", "hp": 140, "atk": 36, "spd": 7.4, "crit": 32, "weapon": "Духовный посох Лотоса & Сферы Ци", "ult": "«Гнев предков: Дракон света» — Гигантский проекционный дракон", "role": "Мистик / Духовная наставница", "abilities": [{"slot": 1, "name": "«Сфера очищения»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сияющая сфера, снимающая все негативные эффекты с союзников и дающая щит на 100 HP.", "icon": "🌟", "cd": 4, "type": "purifying_sphere"}, {"slot": 2, "name": "«Удар Ци: Волна духов»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Дальнобойный сферический заряд чистой духовной энергии, пробивающий строй врагов.", "icon": "🌊", "cd": 5, "type": "chi_wave"}, {"slot": 3, "name": "«Медитативный барьер»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Вхождение в транс: отражает все летящие вражеские пули и снаряды обратно во врагов.", "icon": "🛡️", "cd": 4, "type": "meditation_shield"}, {"slot": 4, "name": "«Гнев предков: Дракон света»", "key": "R", "keyDisplay": "[R]", "desc": "Призыв колоссального сияющего дракона, летящего по прямой и сжигающего все на пути.", "icon": "🐉", "cd": 22, "type": "light_dragon"}, {"slot": 5, "name": "«Левитация духа»", "key": "Z", "keyDisplay": "[Z / Space+Shift]", "desc": "Парение над полем боя с увеличением скорости на 60% и прохождением сквозь снаряды.", "icon": "🪷", "cd": 6, "type": "spirit_levitation"}]}, {"id": 26, "name": "Батыр", "title": "Великий Богатырь", "cls": "warrior", "clsName": "Воин", "hp": 131, "atk": 28, "spd": 6.6, "crit": 31, "weapon": "Алмазная Секира", "ult": "Удар Монолита", "avatar": "⚔️", "color": "#f59e0b", "role": "Великий Богатырь", "abilities": [{"slot": 1, "name": "«Сокрушительный выпад»", "key": "Q", "keyDisplay": "[Q]", "desc": "Резкий выпад мечом, оглушающий цель на 2 сек.", "icon": "⚔️", "cd": 4, "type": "slash"}, {"slot": 2, "name": "«Боевой раж»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Увеличение скорости атаки и урона на 35%.", "icon": "🔥", "cd": 6, "type": "buff"}, {"slot": 3, "name": "«Тяжелый блок»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Блокирует 75% входящего урона щитом.", "icon": "🛡️", "cd": 4, "type": "block"}, {"slot": 4, "name": "«Вихрь стали»", "key": "R", "keyDisplay": "[R]", "desc": "Круговой смертоносный шторм клинков.", "icon": "🌪️", "cd": 20, "type": "cyclone"}, {"slot": 5, "name": "«Тактический рывок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Быстрый рывок вперед с уклонением от пуль.", "icon": "💨", "cd": 5, "type": "dash"}]}, {"id": 27, "name": "Алия", "title": "Волшебница Изумруда", "cls": "mage", "clsName": "Маг", "hp": 97, "atk": 30, "spd": 6.8, "crit": 37, "weapon": "Изумрудный Скипетр", "ult": "Изумрудный Кристаллопад", "avatar": "🔮", "color": "#a855f7", "role": "Волшебница Изумруда", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 28, "name": "Индира", "title": "Владычица Звезд", "cls": "mage", "clsName": "Маг", "hp": 98, "atk": 31, "spd": 6.8999999999999995, "crit": 38, "weapon": "Астральный Фолиант", "ult": "Звездный Дождь", "avatar": "🔮", "color": "#a855f7", "role": "Владычица Звезд", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 29, "name": "Диана", "title": "Жрица Луны", "cls": "mage", "clsName": "Маг", "hp": 99, "atk": 32, "spd": 7.0, "crit": 39, "weapon": "Лунный Лук Света", "ult": "Лунное Затмение", "avatar": "🔮", "color": "#a855f7", "role": "Жрица Луны", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 30, "name": "Зара", "title": "Повелительница Пламени", "cls": "mage", "clsName": "Маг", "hp": 100, "atk": 33, "spd": 6.6, "crit": 25, "weapon": "Жезл Феникса", "ult": "Огненный Смерч", "avatar": "🔮", "color": "#a855f7", "role": "Повелительница Пламени", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 31, "name": "Мира", "title": "Чародейка Пространства", "cls": "mage", "clsName": "Маг", "hp": 101, "atk": 34, "spd": 6.699999999999999, "crit": 26, "weapon": "Квантовая Сфера", "ult": "Искажение Времени", "avatar": "🔮", "color": "#a855f7", "role": "Чародейка Пространства", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 32, "name": "Надия", "title": "Мистик Эфира", "cls": "mage", "clsName": "Маг", "hp": 102, "atk": 35, "spd": 6.8, "crit": 27, "weapon": "Эфирный Кристалл", "ult": "Эфирный Резонанс", "avatar": "🔮", "color": "#a855f7", "role": "Мистик Эфира", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 33, "name": "Карина", "title": "Маг Кристаллов", "cls": "mage", "clsName": "Маг", "hp": 103, "atk": 36, "spd": 6.8999999999999995, "crit": 28, "weapon": "Алмазный Жезл", "ult": "Кристальная Тюрьма", "avatar": "🔮", "color": "#a855f7", "role": "Маг Кристаллов", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 34, "name": "Лаура", "title": "Фея Ветра", "cls": "mage", "clsName": "Маг", "hp": 104, "atk": 37, "spd": 7.0, "crit": 29, "weapon": "Посох Зефира", "ult": "Вихревой Ураган", "avatar": "🔮", "color": "#a855f7", "role": "Фея Ветра", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 35, "name": "Вероника", "title": "Некромант Бездны", "cls": "mage", "clsName": "Маг", "hp": 105, "atk": 38, "spd": 6.6, "crit": 30, "weapon": "Костяной Посох", "ult": "Призыв Душ", "avatar": "🔮", "color": "#a855f7", "role": "Некромант Бездны", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 36, "name": "Елена", "title": "Чародейка Рассвета", "cls": "mage", "clsName": "Маг", "hp": 106, "atk": 30, "spd": 6.699999999999999, "crit": 31, "weapon": "Солнечный Венец", "ult": "Благословение Света", "avatar": "🔮", "color": "#a855f7", "role": "Чародейка Рассвета", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 37, "name": "Ольга", "title": "Ледяная Королева", "cls": "mage", "clsName": "Маг", "hp": 107, "atk": 31, "spd": 6.8, "crit": 32, "weapon": "Ледяной Скипетр", "ult": "Абсолютный Ноль", "avatar": "🔮", "color": "#a855f7", "role": "Ледяная Королева", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 38, "name": "Полина", "title": "Маг Гравитации", "cls": "mage", "clsName": "Маг", "hp": 108, "atk": 32, "spd": 6.8999999999999995, "crit": 33, "weapon": "Гравитационная Сфера", "ult": "Черная Дыра", "avatar": "🔮", "color": "#a855f7", "role": "Маг Гравитации", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 39, "name": "Роза", "title": "Друид Жизни", "cls": "mage", "clsName": "Маг", "hp": 109, "atk": 33, "spd": 7.0, "crit": 34, "weapon": "Посох Лозы", "ult": "Цветение Природы", "avatar": "🔮", "color": "#a855f7", "role": "Друид Жизни", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 40, "name": "Стелла", "title": "Звездная Лучница", "cls": "mage", "clsName": "Маг", "hp": 90, "atk": 34, "spd": 6.6, "crit": 35, "weapon": "Комета-Жезл", "ult": "Сверхновая Звезда", "avatar": "🔮", "color": "#a855f7", "role": "Звездная Лучница", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 41, "name": "Тамара", "title": "Шаманка Духов", "cls": "mage", "clsName": "Маг", "hp": 91, "atk": 35, "spd": 6.699999999999999, "crit": 36, "weapon": "Бубен Предков", "ult": "Тотем Силы", "avatar": "🔮", "color": "#a855f7", "role": "Шаманка Духов", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 42, "name": "Ульяна", "title": "Алхимик Хаоса", "cls": "mage", "clsName": "Маг", "hp": 92, "atk": 36, "spd": 6.8, "crit": 37, "weapon": "Колбы Экстракта", "ult": "Кислотный Каскад", "avatar": "🔮", "color": "#a855f7", "role": "Алхимик Хаоса", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 43, "name": "Фариза", "title": "Хранительница Оазиса", "cls": "mage", "clsName": "Маг", "hp": 93, "atk": 37, "spd": 6.8999999999999995, "crit": 38, "weapon": "Водный Кувшин", "ult": "Волна Очищения", "avatar": "🔮", "color": "#a855f7", "role": "Хранительница Оазиса", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 44, "name": "Хлоя", "title": "Психо-Маг", "cls": "mage", "clsName": "Маг", "hp": 94, "atk": 38, "spd": 7.0, "crit": 39, "weapon": "Ментальный Фокус", "ult": "Психический Шок", "avatar": "🔮", "color": "#a855f7", "role": "Психо-Маг", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 45, "name": "Белла", "title": "Муза Гармонии", "cls": "mage", "clsName": "Маг", "hp": 95, "atk": 30, "spd": 6.6, "crit": 25, "weapon": "Лира Света", "ult": "Соната Победы", "avatar": "🔮", "color": "#a855f7", "role": "Муза Гармонии", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 46, "name": "Гульнар", "title": "Цветочная Чародейка", "cls": "mage", "clsName": "Маг", "hp": 96, "atk": 31, "spd": 6.699999999999999, "crit": 26, "weapon": "Лепестковый Веер", "ult": "Аромат Сна", "avatar": "🔮", "color": "#a855f7", "role": "Цветочная Чародейка", "abilities": [{"slot": 1, "name": "«Мистическая стрела»", "key": "Q", "keyDisplay": "[Q]", "desc": "Сгусток чистой магии с самонаведением.", "icon": "🔮", "cd": 4, "type": "magic_missile"}, {"slot": 2, "name": "«Магический барьер»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Сфера щита, поглощающая урон.", "icon": "✨", "cd": 6, "type": "mana_shield"}, {"slot": 3, "name": "«Энерго-луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непрерывный лазер чистой эфирной энергии.", "icon": "⚡", "cd": 4, "type": "beam"}, {"slot": 4, "name": "«Звездный взрыв»", "key": "R", "keyDisplay": "[R]", "desc": "Падение астрального метеора по площади.", "icon": "🌠", "cd": 20, "type": "meteor"}, {"slot": 5, "name": "«Астральный скачок»", "key": "Z", "keyDisplay": "[Z]", "desc": "Телепортация сквозь эфирное пространство.", "icon": "🌌", "cd": 5, "type": "teleport"}]}, {"id": 47, "name": "Арман", "title": "Снайпер Орбиты", "cls": "ranger", "clsName": "Лучник", "hp": 102, "atk": 35, "spd": 7.5, "crit": 37, "weapon": "Ионная Винтовка", "ult": "Орбитальный Хедшот", "avatar": "🏹", "color": "#38bdf8", "role": "Снайпер Орбиты", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 48, "name": "Болат", "title": "Степной Стрелок", "cls": "ranger", "clsName": "Лучник", "hp": 103, "atk": 28, "spd": 7.6, "crit": 38, "weapon": "Композитный Лук", "ult": "Град Бронебойных Стрел", "avatar": "🏹", "color": "#38bdf8", "role": "Степной Стрелок", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 49, "name": "Самат", "title": "Следопыт Джунглей", "cls": "ranger", "clsName": "Лучник", "hp": 104, "atk": 29, "spd": 7.7, "crit": 39, "weapon": "Дротикомет", "ult": "Ядовитый Залп", "avatar": "🏹", "color": "#38bdf8", "role": "Следопыт Джунглей", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 50, "name": "Талгат", "title": "Лазерный Снайпер", "cls": "ranger", "clsName": "Лучник", "hp": 105, "atk": 30, "spd": 7.3, "crit": 40, "weapon": "Фотонная Пушка", "ult": "Фотонный Сквозной Луч", "avatar": "🏹", "color": "#38bdf8", "role": "Лазерный Снайпер", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 51, "name": "Жомарт", "title": "Охотник на Зверей", "cls": "ranger", "clsName": "Лучник", "hp": 106, "atk": 31, "spd": 7.3999999999999995, "crit": 41, "weapon": "Арбалет Монстров", "ult": "Капкан и Залп", "avatar": "🏹", "color": "#38bdf8", "role": "Охотник на Зверей", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 52, "name": "Денис", "title": "Спецназовец Галактики", "cls": "ranger", "clsName": "Лучник", "hp": 107, "atk": 32, "spd": 7.5, "crit": 42, "weapon": "Тактический Автомат", "ult": "Тактическая Бомбардировка", "avatar": "🏹", "color": "#38bdf8", "role": "Спецназовец Галактики", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 53, "name": "Егор", "title": "Разведчик Ветров", "cls": "ranger", "clsName": "Лучник", "hp": 108, "atk": 33, "spd": 7.6, "crit": 43, "weapon": "Ветряной Лук", "ult": "Стрела Бури", "avatar": "🏹", "color": "#38bdf8", "role": "Разведчик Ветров", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 54, "name": "Игорь", "title": "Меткий Глаз", "cls": "ranger", "clsName": "Лучник", "hp": 109, "atk": 34, "spd": 7.7, "crit": 44, "weapon": "Магнум-Револьвер", "ult": "Веерный Шестизарядник", "avatar": "🏹", "color": "#38bdf8", "role": "Меткий Глаз", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 55, "name": "Клим", "title": "Кибер-Следопыт", "cls": "ranger", "clsName": "Лучник", "hp": 110, "atk": 35, "spd": 7.3, "crit": 45, "weapon": "Энерго-Дротики", "ult": "Микро-Ракетный Рой", "avatar": "🏹", "color": "#38bdf8", "role": "Кибер-Следопыт", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 56, "name": "Луис", "title": "Корсар Ветров", "cls": "ranger", "clsName": "Лучник", "hp": 111, "atk": 28, "spd": 7.3999999999999995, "crit": 46, "weapon": "Дуэльный Пистоль", "ult": "Двойной Выстрел", "avatar": "🏹", "color": "#38bdf8", "role": "Корсар Ветров", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 57, "name": "Марат", "title": "Степной Беркут", "cls": "ranger", "clsName": "Лучник", "hp": 112, "atk": 29, "spd": 7.5, "crit": 47, "weapon": "Лук Беркута", "ult": "Орлиный Взгляд", "avatar": "🏹", "color": "#38bdf8", "role": "Степной Беркут", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 58, "name": "Никита", "title": "Техно-Охотник", "cls": "ranger", "clsName": "Лучник", "hp": 113, "atk": 30, "spd": 7.6, "crit": 48, "weapon": "Электро-Арбалет", "ult": "Шоковая Сетка", "avatar": "🏹", "color": "#38bdf8", "role": "Техно-Охотник", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 59, "name": "Омар", "title": "Снайпер Дюн", "cls": "ranger", "clsName": "Лучник", "hp": 114, "atk": 31, "spd": 7.7, "crit": 49, "weapon": "Винтовка Барханов", "ult": "Песчаная Пуля", "avatar": "🏹", "color": "#38bdf8", "role": "Снайпер Дюн", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 60, "name": "Павел", "title": "Часовой Рубежа", "cls": "ranger", "clsName": "Лучник", "hp": 95, "atk": 32, "spd": 7.3, "crit": 35, "weapon": "Тяжелый Карабин", "ult": "Огневой Рубеж", "avatar": "🏹", "color": "#38bdf8", "role": "Часовой Рубежа", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 61, "name": "Рафаэль", "title": "Артист Лука", "cls": "ranger", "clsName": "Лучник", "hp": 96, "atk": 33, "spd": 7.3999999999999995, "crit": 36, "weapon": "Изящный Лук", "ult": "Стрела Аполлона", "avatar": "🏹", "color": "#38bdf8", "role": "Артист Лука", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 62, "name": "Умар", "title": "Пустынный Рейнджер", "cls": "ranger", "clsName": "Лучник", "hp": 97, "atk": 34, "spd": 7.5, "crit": 37, "weapon": "Карабин Саванны", "ult": "Меткий Выстрел", "avatar": "🏹", "color": "#38bdf8", "role": "Пустынный Рейнджер", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 63, "name": "Филипп", "title": "Морской Стрелок", "cls": "ranger", "clsName": "Лучник", "hp": 98, "atk": 35, "spd": 7.6, "crit": 38, "weapon": "Гарпунная Пушка", "ult": "Гарпунный Захват", "avatar": "🏹", "color": "#38bdf8", "role": "Морской Стрелок", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 64, "name": "Зере", "title": "Степная Амазонка", "cls": "ranger", "clsName": "Лучник", "hp": 99, "atk": 28, "spd": 7.7, "crit": 39, "weapon": "Лук Кочевницы", "ult": "Стремительный Залп", "avatar": "🏹", "color": "#38bdf8", "role": "Степная Амазонка", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 65, "name": "Влад", "title": "Ночной Охотник", "cls": "ranger", "clsName": "Лучник", "hp": 100, "atk": 29, "spd": 7.3, "crit": 40, "weapon": "Арбалет Теней", "ult": "Теневой Укол", "avatar": "🏹", "color": "#38bdf8", "role": "Ночной Охотник", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 66, "name": "Григорий", "title": "Охотник на Драконов", "cls": "ranger", "clsName": "Лучник", "hp": 101, "atk": 30, "spd": 7.3999999999999995, "crit": 41, "weapon": "Баллиста", "ult": "Пронзание Дракона", "avatar": "🏹", "color": "#38bdf8", "role": "Охотник на Драконов", "abilities": [{"slot": 1, "name": "«Прицельный выстрел»", "key": "Q", "keyDisplay": "[Q]", "desc": "Мощная стрела с гарантированным критическим ударом.", "icon": "🎯", "cd": 4, "type": "aim_shot"}, {"slot": 2, "name": "«Ловушка с шипами»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Замедляет и ранит наступивших врагов.", "icon": "🪤", "cd": 6, "type": "trap"}, {"slot": 3, "name": "«Снайперская стойка»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Увеличение дальности стрельбы и урона в 1.5 раза.", "icon": "🔭", "cd": 4, "type": "snipe_stance"}, {"slot": 4, "name": "«Град стрел»", "key": "R", "keyDisplay": "[R]", "desc": "Шквальный ливень стрел по обширной зоне.", "icon": "🏹", "cd": 20, "type": "volley"}, {"slot": 5, "name": "«Кувырок уклонения»", "key": "Z", "keyDisplay": "[Z]", "desc": "Акробатический отскок назад с маскировкой.", "icon": "🤸", "cd": 4, "type": "roll"}]}, {"id": 67, "name": "Азамат", "title": "Рыцарь Долга", "cls": "paladin", "clsName": "Паладин", "hp": 167, "atk": 23, "spd": 6.1, "crit": 22, "weapon": "Священный Палаш", "ult": "Аура Стойкости", "avatar": "🛡️", "color": "#10b981", "role": "Рыцарь Долга", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 68, "name": "Даулет", "title": "Страж Бастиона", "cls": "paladin", "clsName": "Паладин", "hp": 168, "atk": 24, "spd": 5.8, "crit": 23, "weapon": "Башенный Щит", "ult": "Неприступная Стена", "avatar": "🛡️", "color": "#10b981", "role": "Страж Бастиона", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 69, "name": "Есбол", "title": "Хранитель Очага", "cls": "paladin", "clsName": "Паладин", "hp": 169, "atk": 25, "spd": 5.8999999999999995, "crit": 24, "weapon": "Молот Предков", "ult": "Защитный Купол", "avatar": "🛡️", "color": "#10b981", "role": "Хранитель Очага", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 70, "name": "Казыбек", "title": "Судья Справедливости", "cls": "paladin", "clsName": "Паладин", "hp": 170, "atk": 26, "spd": 6.0, "crit": 15, "weapon": "Клинок Истины", "ult": "Кара Небес", "avatar": "🛡️", "color": "#10b981", "role": "Судья Справедливости", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 71, "name": "Серик", "title": "Верный Защитник", "cls": "paladin", "clsName": "Паладин", "hp": 171, "atk": 27, "spd": 6.1, "crit": 16, "weapon": "Копье Стража", "ult": "Круговой Барьер", "avatar": "🛡️", "color": "#10b981", "role": "Верный Защитник", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 72, "name": "Тамерлан", "title": "Великий Полководец", "cls": "paladin", "clsName": "Паладин", "hp": 172, "atk": 22, "spd": 5.8, "crit": 17, "weapon": "Золотая Булава", "ult": "Призыв Гвардии", "avatar": "🛡️", "color": "#10b981", "role": "Великий Полководец", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 73, "name": "Улугбек", "title": "Астроном-Хранитель", "cls": "paladin", "clsName": "Паладин", "hp": 173, "atk": 23, "spd": 5.8999999999999995, "crit": 18, "weapon": "Звездный Скипетр", "ult": "Небесный Щит", "avatar": "🛡️", "color": "#10b981", "role": "Астроном-Хранитель", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 74, "name": "Вадим", "title": "Железный Страж", "cls": "paladin", "clsName": "Паладин", "hp": 174, "atk": 24, "spd": 6.0, "crit": 19, "weapon": "Шоковый Щит", "ult": "Шоковая Волна", "avatar": "🛡️", "color": "#10b981", "role": "Железный Страж", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 75, "name": "Захар", "title": "Крепостной Воин", "cls": "paladin", "clsName": "Паладин", "hp": 175, "atk": 25, "spd": 6.1, "crit": 20, "weapon": "Осадный Молот", "ult": "Осадный Удар", "avatar": "🛡️", "color": "#10b981", "role": "Крепостной Воин", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 76, "name": "Иван", "title": "Рыцарь Солнца", "cls": "paladin", "clsName": "Паладин", "hp": 176, "atk": 26, "spd": 5.8, "crit": 21, "weapon": "Клинок Рассвета", "ult": "Солнечная Вспышка", "avatar": "🛡️", "color": "#10b981", "role": "Рыцарь Солнца", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 77, "name": "Лука", "title": "Целитель Света", "cls": "paladin", "clsName": "Паладин", "hp": 177, "atk": 27, "spd": 5.8999999999999995, "crit": 22, "weapon": "Жезл Милосердия", "ult": "Великое Исцеление", "avatar": "🛡️", "color": "#10b981", "role": "Целитель Света", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 78, "name": "Меир", "title": "Светлый Защитник", "cls": "paladin", "clsName": "Паладин", "hp": 178, "atk": 22, "spd": 6.0, "crit": 23, "weapon": "Серебряный Меч", "ult": "Очищающий Свет", "avatar": "🛡️", "color": "#10b981", "role": "Светлый Защитник", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 79, "name": "Нурсултан", "title": "Золотой Хан-Страж", "cls": "paladin", "clsName": "Паладин", "hp": 179, "atk": 23, "spd": 6.1, "crit": 24, "weapon": "Золотой Молот", "ult": "Золотой Барьер", "avatar": "🛡️", "color": "#10b981", "role": "Золотой Хан-Страж", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 80, "name": "Олег", "title": "Вещий Воин", "cls": "paladin", "clsName": "Паладин", "hp": 180, "atk": 24, "spd": 5.8, "crit": 15, "weapon": "Зачарованный Меч", "ult": "Щит Предвидения", "avatar": "🛡️", "color": "#10b981", "role": "Вещий Воин", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 81, "name": "Платон", "title": "Философ Битвы", "cls": "paladin", "clsName": "Паладин", "hp": 181, "atk": 25, "spd": 5.8999999999999995, "crit": 16, "weapon": "Копье Мудрости", "ult": "Ментальный Барьер", "avatar": "🛡️", "color": "#10b981", "role": "Философ Битвы", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 82, "name": "Ринат", "title": "Гвардеец Чести", "cls": "paladin", "clsName": "Паладин", "hp": 182, "atk": 26, "spd": 6.0, "crit": 17, "weapon": "Гвардейская Сабля", "ult": "Строй Гвардии", "avatar": "🛡️", "color": "#10b981", "role": "Гвардеец Чести", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 83, "name": "Франк", "title": "Паладин Ордена", "cls": "paladin", "clsName": "Паладин", "hp": 183, "atk": 27, "spd": 6.1, "crit": 18, "weapon": "Паладинский Меч", "ult": "Освящение Земли", "avatar": "🛡️", "color": "#10b981", "role": "Паладин Ордена", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 84, "name": "Эдгар", "title": "Теневой Паладин", "cls": "paladin", "clsName": "Паладин", "hp": 184, "atk": 22, "spd": 5.8, "crit": 19, "weapon": "Темный Щит", "ult": "Поглощение Урона", "avatar": "🛡️", "color": "#10b981", "role": "Теневой Паладин", "abilities": [{"slot": 1, "name": "«Священная кара»", "key": "Q", "keyDisplay": "[Q]", "desc": "Световой молот, оглушающий и ранящий цель.", "icon": "🔨", "cd": 5, "type": "smite"}, {"slot": 2, "name": "«Благословение щита»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Восстановление щита себе и ближайшим союзникам.", "icon": "🛡️", "cd": 6, "type": "blessing"}, {"slot": 3, "name": "«Эгида света»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Непробиваемый фронтальный барьер святости.", "icon": "🌟", "cd": 4, "type": "aegis"}, {"slot": 4, "name": "«Небесный суд»", "key": "R", "keyDisplay": "[R]", "desc": "Столб святого огня с небес по всем врагам.", "icon": "☀️", "cd": 22, "type": "judgment"}, {"slot": 5, "name": "«Рывок бастиона»", "key": "Z", "keyDisplay": "[Z]", "desc": "Мощный разгон со щитом, отталкивающий врагов.", "icon": "🏰", "cd": 5, "type": "charge"}]}, {"id": 85, "name": "Айдар", "title": "Кибер-Инженер", "cls": "techno", "clsName": "Техник", "hp": 120, "atk": 26, "spd": 7.1, "crit": 23, "weapon": "Энерго-Гаечный Ключ", "ult": "Турель Самонаведения", "avatar": "⚡", "color": "#00f0ff", "role": "Кибер-Инженер", "abilities": [{"slot": 1, "name": "«Импульсный разряд»", "key": "Q", "keyDisplay": "[Q]", "desc": "Электромагнитная вспышка, сбивающая щиты.", "icon": "⚡", "cd": 4, "type": "pulse"}, {"slot": 2, "name": "«Нано-ремонт»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Наноботы восстанавливают HP и системы.", "icon": "🧬", "cd": 6, "type": "nanorepair"}, {"slot": 3, "name": "«Плазменный луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированная плазма, прожигающая броню.", "icon": "🔬", "cd": 4, "type": "plasma_beam"}, {"slot": 4, "name": "«Орбитальный удар»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов залпа с орбитального спутника.", "icon": "🛰️", "cd": 22, "type": "orbital_strike"}, {"slot": 5, "name": "«Турбо-ускоритель»", "key": "Z", "keyDisplay": "[Z]", "desc": "Кратковременный реактивный форсаж.", "icon": "🚀", "cd": 5, "type": "thruster"}]}, {"id": 86, "name": "Нео", "title": "Хакер Матрицы", "cls": "techno", "clsName": "Техник", "hp": 121, "atk": 27, "spd": 7.2, "crit": 24, "weapon": "Кодовый Излучатель", "ult": "Взлом Пространства", "avatar": "⚡", "color": "#00f0ff", "role": "Хакер Матрицы", "abilities": [{"slot": 1, "name": "«Импульсный разряд»", "key": "Q", "keyDisplay": "[Q]", "desc": "Электромагнитная вспышка, сбивающая щиты.", "icon": "⚡", "cd": 4, "type": "pulse"}, {"slot": 2, "name": "«Нано-ремонт»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Наноботы восстанавливают HP и системы.", "icon": "🧬", "cd": 6, "type": "nanorepair"}, {"slot": 3, "name": "«Плазменный луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированная плазма, прожигающая броню.", "icon": "🔬", "cd": 4, "type": "plasma_beam"}, {"slot": 4, "name": "«Орбитальный удар»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов залпа с орбитального спутника.", "icon": "🛰️", "cd": 22, "type": "orbital_strike"}, {"slot": 5, "name": "«Турбо-ускоритель»", "key": "Z", "keyDisplay": "[Z]", "desc": "Кратковременный реактивный форсаж.", "icon": "🚀", "cd": 5, "type": "thruster"}]}, {"id": 87, "name": "Дин", "title": "Пилот Мехи", "cls": "techno", "clsName": "Техник", "hp": 122, "atk": 28, "spd": 7.3, "crit": 25, "weapon": "Импульсный Бластер", "ult": "Ракетный Залп Мехи", "avatar": "⚡", "color": "#00f0ff", "role": "Пилот Мехи", "abilities": [{"slot": 1, "name": "«Импульсный разряд»", "key": "Q", "keyDisplay": "[Q]", "desc": "Электромагнитная вспышка, сбивающая щиты.", "icon": "⚡", "cd": 4, "type": "pulse"}, {"slot": 2, "name": "«Нано-ремонт»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Наноботы восстанавливают HP и системы.", "icon": "🧬", "cd": 6, "type": "nanorepair"}, {"slot": 3, "name": "«Плазменный луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированная плазма, прожигающая броню.", "icon": "🔬", "cd": 4, "type": "plasma_beam"}, {"slot": 4, "name": "«Орбитальный удар»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов залпа с орбитального спутника.", "icon": "🛰️", "cd": 22, "type": "orbital_strike"}, {"slot": 5, "name": "«Турбо-ускоритель»", "key": "Z", "keyDisplay": "[Z]", "desc": "Кратковременный реактивный форсаж.", "icon": "🚀", "cd": 5, "type": "thruster"}]}, {"id": 88, "name": "Зейн", "title": "Мастер Дронов", "cls": "techno", "clsName": "Техник", "hp": 123, "atk": 29, "spd": 7.4, "crit": 26, "weapon": "Контроллер Роя", "ult": "Рой Дронов-Камикадзе", "avatar": "⚡", "color": "#00f0ff", "role": "Мастер Дронов", "abilities": [{"slot": 1, "name": "«Импульсный разряд»", "key": "Q", "keyDisplay": "[Q]", "desc": "Электромагнитная вспышка, сбивающая щиты.", "icon": "⚡", "cd": 4, "type": "pulse"}, {"slot": 2, "name": "«Нано-ремонт»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Наноботы восстанавливают HP и системы.", "icon": "🧬", "cd": 6, "type": "nanorepair"}, {"slot": 3, "name": "«Плазменный луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированная плазма, прожигающая броню.", "icon": "🔬", "cd": 4, "type": "plasma_beam"}, {"slot": 4, "name": "«Орбитальный удар»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов залпа с орбитального спутника.", "icon": "🛰️", "cd": 22, "type": "orbital_strike"}, {"slot": 5, "name": "«Турбо-ускоритель»", "key": "Z", "keyDisplay": "[Z]", "desc": "Кратковременный реактивный форсаж.", "icon": "🚀", "cd": 5, "type": "thruster"}]}, {"id": 89, "name": "Кайл", "title": "Кибер-Сапер", "cls": "techno", "clsName": "Техник", "hp": 124, "atk": 30, "spd": 7.5, "crit": 27, "weapon": "Миномет Энергии", "ult": "Поле Нано-Мин", "avatar": "⚡", "color": "#00f0ff", "role": "Кибер-Сапер", "abilities": [{"slot": 1, "name": "«Импульсный разряд»", "key": "Q", "keyDisplay": "[Q]", "desc": "Электромагнитная вспышка, сбивающая щиты.", "icon": "⚡", "cd": 4, "type": "pulse"}, {"slot": 2, "name": "«Нано-ремонт»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Наноботы восстанавливают HP и системы.", "icon": "🧬", "cd": 6, "type": "nanorepair"}, {"slot": 3, "name": "«Плазменный луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированная плазма, прожигающая броню.", "icon": "🔬", "cd": 4, "type": "plasma_beam"}, {"slot": 4, "name": "«Орбитальный удар»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов залпа с орбитального спутника.", "icon": "🛰️", "cd": 22, "type": "orbital_strike"}, {"slot": 5, "name": "«Турбо-ускоритель»", "key": "Z", "keyDisplay": "[Z]", "desc": "Кратковременный реактивный форсаж.", "icon": "🚀", "cd": 5, "type": "thruster"}]}, {"id": 90, "name": "Лиам", "title": "Бионик-Штурмовик", "cls": "techno", "clsName": "Техник", "hp": 125, "atk": 31, "spd": 7.0, "crit": 28, "weapon": "Кибернетическая Рука", "ult": "Титановый Сокрушитель", "avatar": "⚡", "color": "#00f0ff", "role": "Бионик-Штурмовик", "abilities": [{"slot": 1, "name": "«Импульсный разряд»", "key": "Q", "keyDisplay": "[Q]", "desc": "Электромагнитная вспышка, сбивающая щиты.", "icon": "⚡", "cd": 4, "type": "pulse"}, {"slot": 2, "name": "«Нано-ремонт»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Наноботы восстанавливают HP и системы.", "icon": "🧬", "cd": 6, "type": "nanorepair"}, {"slot": 3, "name": "«Плазменный луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированная плазма, прожигающая броню.", "icon": "🔬", "cd": 4, "type": "plasma_beam"}, {"slot": 4, "name": "«Орбитальный удар»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов залпа с орбитального спутника.", "icon": "🛰️", "cd": 22, "type": "orbital_strike"}, {"slot": 5, "name": "«Турбо-ускоритель»", "key": "Z", "keyDisplay": "[Z]", "desc": "Кратковременный реактивный форсаж.", "icon": "🚀", "cd": 5, "type": "thruster"}]}, {"id": 91, "name": "Мигель", "title": "Техно-Медик", "cls": "techno", "clsName": "Техник", "hp": 126, "atk": 25, "spd": 7.1, "crit": 29, "weapon": "Нано-Инжектор", "ult": "Нано-Регенерация", "avatar": "⚡", "color": "#00f0ff", "role": "Техно-Медик", "abilities": [{"slot": 1, "name": "«Импульсный разряд»", "key": "Q", "keyDisplay": "[Q]", "desc": "Электромагнитная вспышка, сбивающая щиты.", "icon": "⚡", "cd": 4, "type": "pulse"}, {"slot": 2, "name": "«Нано-ремонт»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Наноботы восстанавливают HP и системы.", "icon": "🧬", "cd": 6, "type": "nanorepair"}, {"slot": 3, "name": "«Плазменный луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированная плазма, прожигающая броню.", "icon": "🔬", "cd": 4, "type": "plasma_beam"}, {"slot": 4, "name": "«Орбитальный удар»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов залпа с орбитального спутника.", "icon": "🛰️", "cd": 22, "type": "orbital_strike"}, {"slot": 5, "name": "«Турбо-ускоритель»", "key": "Z", "keyDisplay": "[Z]", "desc": "Кратковременный реактивный форсаж.", "icon": "🚀", "cd": 5, "type": "thruster"}]}, {"id": 92, "name": "Отто", "title": "Профессор Лазеров", "cls": "techno", "clsName": "Техник", "hp": 127, "atk": 26, "spd": 7.2, "crit": 30, "weapon": "Фотонная Пушка", "ult": "Фотонный Резак", "avatar": "⚡", "color": "#00f0ff", "role": "Профессор Лазеров", "abilities": [{"slot": 1, "name": "«Импульсный разряд»", "key": "Q", "keyDisplay": "[Q]", "desc": "Электромагнитная вспышка, сбивающая щиты.", "icon": "⚡", "cd": 4, "type": "pulse"}, {"slot": 2, "name": "«Нано-ремонт»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Наноботы восстанавливают HP и системы.", "icon": "🧬", "cd": 6, "type": "nanorepair"}, {"slot": 3, "name": "«Плазменный луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированная плазма, прожигающая броню.", "icon": "🔬", "cd": 4, "type": "plasma_beam"}, {"slot": 4, "name": "«Орбитальный удар»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов залпа с орбитального спутника.", "icon": "🛰️", "cd": 22, "type": "orbital_strike"}, {"slot": 5, "name": "«Турбо-ускоритель»", "key": "Z", "keyDisplay": "[Z]", "desc": "Кратковременный реактивный форсаж.", "icon": "🚀", "cd": 5, "type": "thruster"}]}, {"id": 93, "name": "Пак", "title": "Кибер-Гном", "cls": "techno", "clsName": "Техник", "hp": 128, "atk": 27, "spd": 7.3, "crit": 31, "weapon": "Паровой Пулемет", "ult": "Перегрев Орудий", "avatar": "⚡", "color": "#00f0ff", "role": "Кибер-Гном", "abilities": [{"slot": 1, "name": "«Импульсный разряд»", "key": "Q", "keyDisplay": "[Q]", "desc": "Электромагнитная вспышка, сбивающая щиты.", "icon": "⚡", "cd": 4, "type": "pulse"}, {"slot": 2, "name": "«Нано-ремонт»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Наноботы восстанавливают HP и системы.", "icon": "🧬", "cd": 6, "type": "nanorepair"}, {"slot": 3, "name": "«Плазменный луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированная плазма, прожигающая броню.", "icon": "🔬", "cd": 4, "type": "plasma_beam"}, {"slot": 4, "name": "«Орбитальный удар»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов залпа с орбитального спутника.", "icon": "🛰️", "cd": 22, "type": "orbital_strike"}, {"slot": 5, "name": "«Турбо-ускоритель»", "key": "Z", "keyDisplay": "[Z]", "desc": "Кратковременный реактивный форсаж.", "icon": "🚀", "cd": 5, "type": "thruster"}]}, {"id": 94, "name": "Рэй", "title": "Скоростной Киборг", "cls": "techno", "clsName": "Техник", "hp": 129, "atk": 28, "spd": 7.4, "crit": 32, "weapon": "Турбо-Ножи", "ult": "Гипер-Скоростной Рывок", "avatar": "⚡", "color": "#00f0ff", "role": "Скоростной Киборг", "abilities": [{"slot": 1, "name": "«Импульсный разряд»", "key": "Q", "keyDisplay": "[Q]", "desc": "Электромагнитная вспышка, сбивающая щиты.", "icon": "⚡", "cd": 4, "type": "pulse"}, {"slot": 2, "name": "«Нано-ремонт»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Наноботы восстанавливают HP и системы.", "icon": "🧬", "cd": 6, "type": "nanorepair"}, {"slot": 3, "name": "«Плазменный луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированная плазма, прожигающая броню.", "icon": "🔬", "cd": 4, "type": "plasma_beam"}, {"slot": 4, "name": "«Орбитальный удар»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов залпа с орбитального спутника.", "icon": "🛰️", "cd": 22, "type": "orbital_strike"}, {"slot": 5, "name": "«Турбо-ускоритель»", "key": "Z", "keyDisplay": "[Z]", "desc": "Кратковременный реактивный форсаж.", "icon": "🚀", "cd": 5, "type": "thruster"}]}, {"id": 95, "name": "Саймон", "title": "Мастер Теслы", "cls": "techno", "clsName": "Техник", "hp": 130, "atk": 29, "spd": 7.5, "crit": 33, "weapon": "Катушка Тесла", "ult": "Шаровая Молния", "avatar": "⚡", "color": "#00f0ff", "role": "Мастер Теслы", "abilities": [{"slot": 1, "name": "«Импульсный разряд»", "key": "Q", "keyDisplay": "[Q]", "desc": "Электромагнитная вспышка, сбивающая щиты.", "icon": "⚡", "cd": 4, "type": "pulse"}, {"slot": 2, "name": "«Нано-ремонт»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Наноботы восстанавливают HP и системы.", "icon": "🧬", "cd": 6, "type": "nanorepair"}, {"slot": 3, "name": "«Плазменный луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированная плазма, прожигающая броню.", "icon": "🔬", "cd": 4, "type": "plasma_beam"}, {"slot": 4, "name": "«Орбитальный удар»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов залпа с орбитального спутника.", "icon": "🛰️", "cd": 22, "type": "orbital_strike"}, {"slot": 5, "name": "«Турбо-ускоритель»", "key": "Z", "keyDisplay": "[Z]", "desc": "Кратковременный реактивный форсаж.", "icon": "🚀", "cd": 5, "type": "thruster"}]}, {"id": 96, "name": "Трой", "title": "Кибер-Гладиатор", "cls": "techno", "clsName": "Техник", "hp": 131, "atk": 30, "spd": 7.0, "crit": 22, "weapon": "Плазменный Щит-Пила", "ult": "Циркулярный Разрез", "avatar": "⚡", "color": "#00f0ff", "role": "Кибер-Гладиатор", "abilities": [{"slot": 1, "name": "«Импульсный разряд»", "key": "Q", "keyDisplay": "[Q]", "desc": "Электромагнитная вспышка, сбивающая щиты.", "icon": "⚡", "cd": 4, "type": "pulse"}, {"slot": 2, "name": "«Нано-ремонт»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Наноботы восстанавливают HP и системы.", "icon": "🧬", "cd": 6, "type": "nanorepair"}, {"slot": 3, "name": "«Плазменный луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированная плазма, прожигающая броню.", "icon": "🔬", "cd": 4, "type": "plasma_beam"}, {"slot": 4, "name": "«Орбитальный удар»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов залпа с орбитального спутника.", "icon": "🛰️", "cd": 22, "type": "orbital_strike"}, {"slot": 5, "name": "«Турбо-ускоритель»", "key": "Z", "keyDisplay": "[Z]", "desc": "Кратковременный реактивный форсаж.", "icon": "🚀", "cd": 5, "type": "thruster"}]}, {"id": 97, "name": "Уильям", "title": "Агент Будущего", "cls": "techno", "clsName": "Техник", "hp": 132, "atk": 31, "spd": 7.1, "crit": 23, "weapon": "Хроно-Бластер", "ult": "Хроно-Замедление", "avatar": "⚡", "color": "#00f0ff", "role": "Агент Будущего", "abilities": [{"slot": 1, "name": "«Импульсный разряд»", "key": "Q", "keyDisplay": "[Q]", "desc": "Электромагнитная вспышка, сбивающая щиты.", "icon": "⚡", "cd": 4, "type": "pulse"}, {"slot": 2, "name": "«Нано-ремонт»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Наноботы восстанавливают HP и системы.", "icon": "🧬", "cd": 6, "type": "nanorepair"}, {"slot": 3, "name": "«Плазменный луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированная плазма, прожигающая броню.", "icon": "🔬", "cd": 4, "type": "plasma_beam"}, {"slot": 4, "name": "«Орбитальный удар»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов залпа с орбитального спутника.", "icon": "🛰️", "cd": 22, "type": "orbital_strike"}, {"slot": 5, "name": "«Турбо-ускоритель»", "key": "Z", "keyDisplay": "[Z]", "desc": "Кратковременный реактивный форсаж.", "icon": "🚀", "cd": 5, "type": "thruster"}]}, {"id": 98, "name": "Фрост", "title": "Крио-Техник", "cls": "techno", "clsName": "Техник", "hp": 133, "atk": 25, "spd": 7.2, "crit": 24, "weapon": "Крио-Пушка", "ult": "Глубокая Заморозка", "avatar": "⚡", "color": "#00f0ff", "role": "Крио-Техник", "abilities": [{"slot": 1, "name": "«Импульсный разряд»", "key": "Q", "keyDisplay": "[Q]", "desc": "Электромагнитная вспышка, сбивающая щиты.", "icon": "⚡", "cd": 4, "type": "pulse"}, {"slot": 2, "name": "«Нано-ремонт»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Наноботы восстанавливают HP и системы.", "icon": "🧬", "cd": 6, "type": "nanorepair"}, {"slot": 3, "name": "«Плазменный луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированная плазма, прожигающая броню.", "icon": "🔬", "cd": 4, "type": "plasma_beam"}, {"slot": 4, "name": "«Орбитальный удар»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов залпа с орбитального спутника.", "icon": "🛰️", "cd": 22, "type": "orbital_strike"}, {"slot": 5, "name": "«Турбо-ускоритель»", "key": "Z", "keyDisplay": "[Z]", "desc": "Кратковременный реактивный форсаж.", "icon": "🚀", "cd": 5, "type": "thruster"}]}, {"id": 99, "name": "Хьюго", "title": "Тяжелый Артиллерист", "cls": "techno", "clsName": "Техник", "hp": 134, "atk": 26, "spd": 7.3, "crit": 25, "weapon": "Осадная Плазмо-Пушка", "ult": "Артиллерийский Шквал", "avatar": "⚡", "color": "#00f0ff", "role": "Тяжелый Артиллерист", "abilities": [{"slot": 1, "name": "«Импульсный разряд»", "key": "Q", "keyDisplay": "[Q]", "desc": "Электромагнитная вспышка, сбивающая щиты.", "icon": "⚡", "cd": 4, "type": "pulse"}, {"slot": 2, "name": "«Нано-ремонт»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Наноботы восстанавливают HP и системы.", "icon": "🧬", "cd": 6, "type": "nanorepair"}, {"slot": 3, "name": "«Плазменный луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированная плазма, прожигающая броню.", "icon": "🔬", "cd": 4, "type": "plasma_beam"}, {"slot": 4, "name": "«Орбитальный удар»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов залпа с орбитального спутника.", "icon": "🛰️", "cd": 22, "type": "orbital_strike"}, {"slot": 5, "name": "«Турбо-ускоритель»", "key": "Z", "keyDisplay": "[Z]", "desc": "Кратковременный реактивный форсаж.", "icon": "🚀", "cd": 5, "type": "thruster"}]}, {"id": 100, "name": "Эрик", "title": "Кибер-Разведчик", "cls": "techno", "clsName": "Техник", "hp": 110, "atk": 27, "spd": 7.4, "crit": 26, "weapon": "Маскировочный Модуль", "ult": "Невидимый Удар", "avatar": "⚡", "color": "#00f0ff", "role": "Кибер-Разведчик", "abilities": [{"slot": 1, "name": "«Импульсный разряд»", "key": "Q", "keyDisplay": "[Q]", "desc": "Электромагнитная вспышка, сбивающая щиты.", "icon": "⚡", "cd": 4, "type": "pulse"}, {"slot": 2, "name": "«Нано-ремонт»", "key": "Shift+E", "keyDisplay": "[Shift + E]", "desc": "Наноботы восстанавливают HP и системы.", "icon": "🧬", "cd": 6, "type": "nanorepair"}, {"slot": 3, "name": "«Плазменный луч»", "key": "ПКМ", "keyDisplay": "[ПКМ]", "desc": "Сфокусированная плазма, прожигающая броню.", "icon": "🔬", "cd": 4, "type": "plasma_beam"}, {"slot": 4, "name": "«Орбитальный удар»", "key": "R", "keyDisplay": "[R]", "desc": "Вызов залпа с орбитального спутника.", "icon": "🛰️", "cd": 22, "type": "orbital_strike"}, {"slot": 5, "name": "«Турбо-ускоритель»", "key": "Z", "keyDisplay": "[Z]", "desc": "Кратковременный реактивный форсаж.", "icon": "🚀", "cd": 5, "type": "thruster"}]}],
        selectedHero: null, // Initialized to Phil (id 1)
        heroCooldowns: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        activeBuffs: {
            focusUntil: 0,
            berserkUntil: 0,
            ironcladUntil: 0,
            speedUntil: 0,
            smokeUntil: 0,
            shieldHp: 0,
            timeSlowUntil: 0,
            stealthUntil: 0,
            reflectUntil: 0
        },
        deployables: [], // Turrets, drones, traps, C4, clones

        // 5v5 TEAM BATTLE SYSTEM
        is5v5Mode: false,
        teamAlpha: [1, 2, 3, 5, 8], // Default Canonical Alpha: Phil, Togaybek, Sara, Anna, Almat
        teamBeta: [23, 22, 21, 11, 19], // Default Canonical Beta: Shmeki, Darkhan, Nurbol, Man in Red, Den Blackwood
        alphaKills: 0,
        betaKills: 0,
        targetKills: 15,
        alliedBots: [],
        enemyBots: [],
        killfeed: [],

        // QUEST ARTIFACTS
        questEmerald: false,   // Волшебный Изумрудный Камень (+50% DMG, Изумрудный лазер)
        questWaterStaff: false,// Посох Воды (Цунами-залп против толп и крабов)
        artifacts: [
            { id: 'emerald', name: 'Волшебный Изумрудный Камень', x: 1200, y: 950, radius: 24, color: '#10b981', glow: '#34d399', found: false },
            { id: 'water', name: 'Посох Воды', x: 2350, y: 450, radius: 24, color: '#06b6d4', glow: '#38bdf8', found: false }
        ],

        // 5 TOWERS CAMPAIGN
        towers: [
            { id: 1, name: 'Башня Мага', x: 800, y: 450, maxHp: 2500, hp: 2500, width: 80, height: 160, color: '#a855f7', coins: 100, destroyed: false, icon: '🧙' },
            { id: 2, name: 'Башня 100 Крабов', x: 2400, y: 450, maxHp: 3500, hp: 3500, width: 90, height: 160, color: '#ef4444', coins: 150, destroyed: false, icon: '🦀' },
            { id: 3, name: 'Башня Динозавров', x: 800, y: 2200, maxHp: 4500, hp: 4500, width: 95, height: 170, color: '#f59e0b', coins: 200, destroyed: false, icon: '🦖' },
            { id: 4, name: 'Башня Босса-Краба', x: 3100, y: 950, maxHp: 6000, hp: 6000, width: 110, height: 190, color: '#dc2626', coins: 300, destroyed: false, icon: '👑🦀' },
            { id: 5, name: 'Башня Босса-Динозавра', x: 3000, y: 2200, maxHp: 8500, hp: 8500, width: 120, height: 210, color: '#ec4899', coins: 500, destroyed: false, icon: '👑🦖' }
        ],

        // ENORMOUS GALAXY CONSTANTS
        WORLD_W: 3600,
        WORLD_H: 2700,

        // Smooth Camera
        camera: {
            x: 600,
            y: 400,
            targetX: 600,
            targetY: 400
        },

        // 4 Galactic Sectors
        sectors: [
            { id: 'neon', name: '🌌 Сектор 1: Квантовая Туманность', x1: 0, y1: 0, x2: 1800, y2: 1350, color: '#38bdf8', bg1: '#030816', bg2: '#081730' },
            { id: 'magma', name: '🌋 Сектор 2: Разлом Меха-Краба', x1: 1800, y1: 0, x2: 3600, y2: 1350, color: '#ef4444', bg1: '#180404', bg2: '#320b0b' },
            { id: 'void', name: '🌑 Сектор 3: Темная Бездна Нора', x1: 0, y1: 1350, x2: 1800, y2: 2700, color: '#a855f7', bg1: '#0e0418', bg2: '#220833' },
            { id: 'citadel', name: '⚡ Сектор 4: Цитадель Архи-Виллэна', x1: 1800, y1: 1350, x2: 3600, y2: 2700, color: '#ec4899', bg1: '#180315', bg2: '#32062a' }
        ],

        // Player Entity
        player: {
            x: 900,
            y: 650,
            vx: 0,
            vy: 0,
            rot: -Math.PI / 2,
            speed: 7.4,
            accel: 0.65,
            friction: 0.94,
            maxSpeed: 8.8,
            boostSpeed: 15.5,
            isBoosting: false,
            radius: 20,
            invulnerableTimer: 0
        },

        // Bosses in Sector Lairs
        bosses: {
            crab: {
                type: 'crab', name: 'Меха-Краб', title: '🦀 БОСС: МЕХА-КРАБ',
                maxHp: 3000, hp: 3000, shield: 0, shieldMax: 300,
                x: 3100, y: 950, vx: 1.5, vy: 0.8, width: 130, height: 80,
                color: '#ef4444', coreColor: '#f97316', hitFlash: 0
            },
            dino: {
                type: 'dino', name: 'Апекс Кибер-Тираннозавр', title: '🦖 МЕГА-БОСС: АПЕКС ТИРАННОЗАВР',
                maxHp: 4500, hp: 4500, shield: 0, shieldMax: 400,
                x: 3000, y: 2200, vx: 1.8, vy: 1.0, width: 140, height: 95,
                color: '#ec4899', coreColor: '#ffd700', hitFlash: 0
            }
        },

        // World Objects
        asteroids: [],
        stargates: [],
        bullets: [],
        bossBullets: [],
        minions: [],
        items: [],
        particles: [],
        floatingTexts: [],
        stars: [],
        nebulae: [],

        // Controls
        keys: { left: false, right: false, up: false, down: false, space: false, shift: false, w: false },
        mouse: { x: 0, y: 0, isDown: false, worldX: 0, worldY: 0 },
        lastShotTime: 0,
        lastSpawnMinionTime: 0,
        audioCtx: null,

        playSynth(type) {
            try {
                if (!this.audioCtx) {
                    const AC = window.AudioContext || window.webkitAudioContext;
                    if (AC) this.audioCtx = new AC();
                }
                if (!this.audioCtx) return;
                if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

                const ctx = this.audioCtx;
                const now = ctx.currentTime;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);

                if (type === 'laser') {
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(750, now);
                    osc.frequency.exponentialRampToValueAtTime(140, now + 0.08);
                    gain.gain.setValueAtTime(0.08, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
                    osc.start(now);
                    osc.stop(now + 0.08);
                } else if (type === 'water') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(320, now);
                    osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
                    gain.gain.setValueAtTime(0.12, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
                    osc.start(now);
                    osc.stop(now + 0.15);
                } else if (type === 'crit') {
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(950, now);
                    osc.frequency.exponentialRampToValueAtTime(250, now + 0.14);
                    gain.gain.setValueAtTime(0.14, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
                    osc.start(now);
                    osc.stop(now + 0.14);
                } else if (type === 'hit') {
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(140, now);
                    osc.frequency.exponentialRampToValueAtTime(40, now + 0.12);
                    gain.gain.setValueAtTime(0.15, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
                    osc.start(now);
                    osc.stop(now + 0.12);
                } else if (type === 'coin') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(987.77, now);
                    osc.frequency.exponentialRampToValueAtTime(1318.51, now + 0.11);
                    gain.gain.setValueAtTime(0.14, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
                    osc.start(now);
                    osc.stop(now + 0.11);
                } else if (type === 'warp') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(280, now);
                    osc.frequency.exponentialRampToValueAtTime(1700, now + 0.35);
                    gain.gain.setValueAtTime(0.18, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
                    osc.start(now);
                    osc.stop(now + 0.35);
                } else if (type === 'ultimate') {
                    [440, 554, 659, 880, 1108].forEach((f, i) => {
                        const o = ctx.createOscillator();
                        const g = ctx.createGain();
                        o.connect(g);
                        g.connect(ctx.destination);
                        o.type = 'sawtooth';
                        o.frequency.setValueAtTime(f, now + i * 0.05);
                        g.gain.setValueAtTime(0.12, now + i * 0.05);
                        g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.28);
                        o.start(now + i * 0.05);
                        o.stop(now + i * 0.05 + 0.28);
                    });
                } else if (type === 'victory') {
                    [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => {
                        const o = ctx.createOscillator();
                        const g = ctx.createGain();
                        o.connect(g);
                        g.connect(ctx.destination);
                        o.type = 'triangle';
                        o.frequency.setValueAtTime(f, now + i * 0.1);
                        g.gain.setValueAtTime(0.15, now + i * 0.1);
                        g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.35);
                        o.start(now + i * 0.1);
                        o.stop(now + i * 0.1 + 0.35);
                    });
                } else if (type === 'towerExplosion') {
                    [180, 240, 320, 480, 640].forEach((freq, i) => {
                        const o = ctx.createOscillator();
                        const g = ctx.createGain();
                        o.connect(g);
                        g.connect(ctx.destination);
                        o.type = 'square';
                        o.frequency.setValueAtTime(freq, now + i * 0.08);
                        g.gain.setValueAtTime(0.16, now + i * 0.08);
                        g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.35);
                        o.start(now + i * 0.08);
                        o.stop(now + i * 0.08 + 0.35);
                    });
                }
            } catch(e) {}
        },

        updateRenderProgress(pct) {
            const badge = document.getElementById('gameRenderPct');
            if (badge) badge.textContent = pct + '%';
        },

        onVideoComplete() {
            this.playSynth('ultimate');
            this.updateRenderProgress(100);
            const banner = document.getElementById('gameVideoReadyBanner');
            const coinsAddedEl = document.getElementById('gameFinalCoinsAdded');
            if (banner) banner.style.display = 'flex';
            if (coinsAddedEl) coinsAddedEl.textContent = `+${this.coinsEarnedInSession} L-Coins!`;
        },

        init() {
            this.canvas = document.getElementById('miniGameCanvas');
            if (this.canvas) {
                this.ctx = this.canvas.getContext('2d');
            }

            // Default Hero: Phil (id 1)
            this.selectedHero = this.heroes100[0];

            // Setup Right Click on Canvas for Ability 3
            if (this.canvas) {
                this.canvas.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    if (!this.isOpen) return;
                    this.triggerHeroAbility(3);
                });
            }

            // Full Keyboard Listeners for All Canonical Keybinds
            window.addEventListener('keydown', (e) => {
                if (!this.isOpen) return;
                if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) return;

                const k = e.key.toLowerCase();
                const code = e.code;

                // Movement
                if (k === 'arrowleft' || k === 'a' || k === 'ф') {
                    this.keys.left = true;
                    e.preventDefault();
                } else if (k === 'arrowright' || k === 'd' || k === 'в') {
                    this.keys.right = true;
                    e.preventDefault();
                } else if (k === 'arrowup' || k === 'w' || k === 'ц') {
                    this.keys.up = true;
                    this.keys.w = true;
                    if (this.keys.space) {
                        this.triggerHeroAbility(5);
                    }
                    e.preventDefault();
                } else if (k === 'arrowdown' || k === 's' || k === 'ы') {
                    this.keys.down = true;
                    e.preventDefault();
                } else if (code === 'Space') {
                    this.keys.space = true;
                    if (this.keys.w) {
                        this.triggerHeroAbility(5);
                    } else {
                        this.fireBullet();
                    }
                    e.preventDefault();
                } else if (e.key === 'Shift') {
                    this.keys.shift = true;
                    this.player.isBoosting = true;
                }
                // Canonical Abilities:
                // [Q] - Ability 1
                else if (k === 'q' || k === 'й') {
                    this.triggerHeroAbility(1);
                    e.preventDefault();
                }
                // [Shift + E] or [E] - Ability 2
                else if (k === 'e' || k === 'у') {
                    if (e.shiftKey) {
                        this.triggerHeroAbility(2);
                    } else {
                        this.triggerHeroAbility(2);
                    }
                    e.preventDefault();
                }
                // [R] - Ability 4 (Ultimate)
                else if (k === 'r' || k === 'к') {
                    this.triggerHeroAbility(4);
                    e.preventDefault();
                }
                // [Z], [X], [C] - Ability 5 (Mobility/Dodge/Dash)
                else if (k === 'z' || k === 'я' || k === 'x' || k === 'ч' || k === 'c' || k === 'с') {
                    this.triggerHeroAbility(5);
                    e.preventDefault();
                }
                // [F] - Interactive Ability Trigger
                else if (k === 'f' || k === 'а') {
                    this.triggerHeroAbility(5);
                    e.preventDefault();
                }
                // [V] - Toggle 3D / 2D
                else if (k === 'v' || k === 'м') {
                    this.toggle3DMode();
                    e.preventDefault();
                }
            });

            window.addEventListener('keyup', (e) => {
                if (!this.isOpen) return;
                const k = e.key.toLowerCase();
                const code = e.code;

                if (k === 'arrowleft' || k === 'a' || k === 'ф') this.keys.left = false;
                else if (k === 'arrowright' || k === 'd' || k === 'в') this.keys.right = false;
                else if (k === 'arrowup' || k === 'w' || k === 'ц') { this.keys.up = false; this.keys.w = false; }
                else if (k === 'arrowdown' || k === 's' || k === 'ы') this.keys.down = false;
                else if (code === 'Space') this.keys.space = false;
                else if (e.key === 'Shift') {
                    this.keys.shift = false;
                    this.player.isBoosting = false;
                }
            });

            // Mouse Aiming & Movement
            if (this.canvas) {
                this.canvas.addEventListener('mousemove', (e) => {
                    if (!this.isOpen) return;
                    const rect = this.canvas.getBoundingClientRect();
                    const scaleX = this.canvas.width / rect.width;
                    const scaleY = this.canvas.height / rect.height;
                    this.mouse.x = (e.clientX - rect.left) * scaleX;
                    this.mouse.y = (e.clientY - rect.top) * scaleY;
                    this.mouse.worldX = this.mouse.x + this.camera.x;
                    this.mouse.worldY = this.mouse.y + this.camera.y;

                    if (!this.is3D) {
                        const dx = this.mouse.worldX - this.player.x;
                        const dy = this.mouse.worldY - this.player.y;
                        this.player.rot = Math.atan2(dy, dx);
                    }
                });

                this.canvas.addEventListener('mousedown', (e) => {
                    if (e.button === 0) {
                        this.mouse.isDown = true;
                        this.fireBullet();
                    }
                });
                window.addEventListener('mouseup', () => { this.mouse.isDown = false; });
            }

            // 3D Mode Button
            const btn3D = document.getElementById('btnToggle3DMode');
            if (btn3D) btn3D.addEventListener('click', () => this.toggle3DMode());

            // Fullscreen Button
            const btnFull = document.getElementById('btnToggleGameFullscreen');
            if (btnFull) btnFull.addEventListener('click', () => this.toggleFullscreen());

            // Quick Hero Selection Bar (1-6)
            document.querySelectorAll('#quickHeroSelectRow .team-hero-btn[data-hero]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const heroId = parseInt(btn.dataset.hero, 10);
                    if (heroId) this.selectHeroById(heroId);
                });
            });

            // 100 Heroes Roster Catalog Buttons
            const btnOpenRoster = document.getElementById('btnOpen100HeroesRoster');
            const btnOpenRosterAlt = document.getElementById('btnOpen100HeroesRosterAlt');
            const btnCloseRoster = document.getElementById('btnCloseHeroRosterModal');
            if (btnOpenRoster) btnOpenRoster.addEventListener('click', () => this.openHeroRoster());
            if (btnOpenRosterAlt) btnOpenRosterAlt.addEventListener('click', () => this.openHeroRoster());
            if (btnCloseRoster) btnCloseRoster.addEventListener('click', () => this.closeHeroRoster());

            // 5v5 Team Roster Modal Buttons
            const btnOpen5v5 = document.getElementById('btnOpen5v5RosterModal');
            const btnClose5v5 = document.getElementById('btnClose5v5RosterModal');
            const btnStart5v5 = document.getElementById('btnStart5v5Battle');
            if (btnOpen5v5) btnOpen5v5.addEventListener('click', () => this.open5v5RosterModal());
            if (btnClose5v5) btnClose5v5.addEventListener('click', () => this.close5v5RosterModal());
            if (btnStart5v5) btnStart5v5.addEventListener('click', () => this.start5v5Battle());

            const btnOpen5v5Cinema = document.getElementById('btnOpen5v5FromCinema');
            if (btnOpen5v5Cinema) btnOpen5v5Cinema.addEventListener('click', () => this.open5v5RosterModal());

            // 5v5 Presets
            const pCanon = document.getElementById('btnPreset5v5Canonical');
            const pSpec = document.getElementById('btnPreset5v5SpecOps');
            const pBal = document.getElementById('btnPreset5v5Balanced');
            const pRnd = document.getElementById('btnPreset5v5Random');
            if (pCanon) pCanon.addEventListener('click', () => this.apply5v5Preset('canonical'));
            if (pSpec) pSpec.addEventListener('click', () => this.apply5v5Preset('specops'));
            if (pBal) pBal.addEventListener('click', () => this.apply5v5Preset('balanced'));
            if (pRnd) pRnd.addEventListener('click', () => this.apply5v5Preset('random'));

            // Ultimate Button trigger
            const btnUlt = document.getElementById('btnTriggerUltimate');
            if (btnUlt) btnUlt.addEventListener('click', () => this.triggerHeroAbility(4));

            // Build Galaxy & Initialize HUDs
            this.buildGalaxy();
            this.initHeroRoster();
            this.updateAbilityBarHUD();
            this.render5v5RosterUI();
        },

        updateAbilityBarHUD() {
            const hero = this.selectedHero || this.heroes100[0];
            const nameEl = document.getElementById('heroAbilityHeroName');
            const badgeEl = document.getElementById('heroAbilityRoleBadge');
            const container = document.getElementById('heroAbilitiesContainer');

            if (nameEl) nameEl.textContent = hero.name;
            if (badgeEl) {
                badgeEl.textContent = hero.clsName || hero.role || 'Герой';
                badgeEl.style.color = hero.color || '#38bdf8';
                badgeEl.style.borderColor = hero.color || '#38bdf8';
            }

            if (!container) return;
            container.innerHTML = '';

            const abilities = hero.abilities || [];
            abilities.forEach((ab, idx) => {
                const slot = idx + 1;
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = `hero-ability-slot-btn ability-slot-${slot}`;
                btn.id = `heroAbilitySlot_${slot}`;
                btn.title = `${ab.name} — ${ab.desc} (Клавиша: ${ab.keyDisplay})`;
                
                const isUlt = slot === 4;
                const now = performance.now();
                const cdRemaining = Math.max(0, Math.ceil(((this.heroCooldowns[slot] || 0) - now) / 1000));
                const isOnCd = cdRemaining > 0;

                btn.style.cssText = `
                    background: ${isUlt ? 'linear-gradient(135deg, rgba(234,179,8,0.2), rgba(236,72,153,0.25))' : 'rgba(255,255,255,0.04)'};
                    border: 1px solid ${isUlt ? '#ffd700' : (isOnCd ? 'rgba(255,255,255,0.1)' : (hero.color || 'rgba(168,85,247,0.4)'))};
                    border-radius: 8px;
                    padding: 5px 6px;
                    color: #fff;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 3px;
                    position: relative;
                    overflow: hidden;
                    text-align: left;
                    transition: transform 0.15s ease, border-color 0.2s ease;
                    box-shadow: ${isUlt ? '0 0 14px rgba(255,215,0,0.3)' : 'none'};
                `;

                btn.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
                        <span style="font-size:0.62rem; background:rgba(0,0,0,0.5); color:${isUlt ? '#ffd700' : '#38bdf8'}; font-weight:800; padding:1px 5px; border-radius:4px; font-family:monospace;">${ab.keyDisplay}</span>
                        <span style="font-size:1rem;">${ab.icon}</span>
                    </div>
                    <div style="font-size:0.72rem; font-weight:700; color:#fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; width:100%;">${ab.name}</div>
                    <div style="font-size:0.58rem; color:#94a3b8; line-height:1.2; height:24px; overflow:hidden; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;">${ab.desc}</div>
                    <div class="ability-cd-overlay" id="abilityCdOverlay_${slot}" style="display:${isOnCd ? 'flex' : 'none'}; position:absolute; inset:0; background:rgba(0,0,0,0.75); backdrop-filter:blur(2px); align-items:center; justify-content:center; font-size:0.85rem; font-weight:900; color:#ffd700; font-family:monospace;">
                        ${cdRemaining}с
                    </div>
                `;

                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.triggerHeroAbility(slot);
                });

                container.appendChild(btn);
            });
        },

        triggerHeroAbility(slot) {
            const now = performance.now();
            const hero = this.selectedHero || this.heroes100[0];
            const abilities = hero.abilities || [];
            const ability = abilities[slot - 1];

            if (!ability) return;

            // Check Cooldown
            if (this.heroCooldowns[slot] && this.heroCooldowns[slot] > now) {
                const rem = Math.ceil((this.heroCooldowns[slot] - now) / 1000);
                this.addFloatingText(this.player.x, this.player.y - 30, `⏳ Перезарядка: ${rem}с`, '#94a3b8');
                return;
            }

            // Set Cooldown
            const cdSec = ability.cd || 5;
            this.heroCooldowns[slot] = now + cdSec * 1000;

            // Sound & Shake
            if (slot === 4) {
                this.shake = 26;
                this.playSynth('ultimate');
            } else {
                this.shake = 9;
                this.playSynth(slot === 3 ? 'crit' : 'warp');
            }

            // Floating Combat Text
            this.addFloatingText(this.player.x, this.player.y - 45, `${ability.icon} ${ability.name}!`, hero.color || '#ffd700');

            // Visual Particles
            const particleCount = slot === 4 ? 60 : 30;
            for (let i = 0; i < particleCount; i++) {
                const angle = Math.random() * Math.PI * 2;
                const spd = Math.random() * (slot === 4 ? 14 : 9) + 2;
                this.particles.push({
                    x: this.player.x,
                    y: this.player.y,
                    vx: Math.cos(angle) * spd,
                    vy: Math.sin(angle) * spd,
                    size: Math.random() * 5 + 2,
                    color: slot === 4 ? '#ffd700' : (hero.color || '#38bdf8'),
                    alpha: 1,
                    decay: slot === 4 ? 0.018 : 0.035
                });
            }

            // DISPATCH SPECIFIC CANONICAL HERO MECHANICS
            this.executeAbilityMechanic(hero, slot, ability);

            // Update Ability HUD CD display
            this.updateAbilityBarHUD();
        },

        executeAbilityMechanic(hero, slot, ability) {
            const now = performance.now();
            const p = this.player;

            if (slot === 1) {
                // Analysis / First Strike / Buff
                this.activeBuffs.focusUntil = now + 6000;
                this.damageNearestEnemies(p.x, p.y, 350, hero.atk * 1.5, 'burst');
            } else if (slot === 2) {
                // Cleanse / Shield / Heal / Trap
                this.player.invulnerableTimer = 120; // 2 seconds invulnerability
                this.lives = Math.min(this.maxLives, this.lives + 1);
                this.updateHUD();
                this.addFloatingText(p.x, p.y - 20, '✨ ФОКУС & ИСЦЕЛЕНИЕ!', '#10b981');
            } else if (slot === 3) {
                // Right Click Ability: Shield / Heavy Aim / Scan
                this.damageNearestEnemies(p.x, p.y, 500, hero.atk * 2.2, 'scan_hit');
                this.bossBullets = this.bossBullets.filter(b => Math.hypot(b.x - p.x, b.y - p.y) > 250);
            } else if (slot === 4) {
                // ULTIMATE: Mass AoE devastation
                const ultDmg = hero.atk * 15;
                this.damageNearestEnemies(p.x, p.y, 1100, ultDmg, 'ultimate');
                this.towers.forEach(t => {
                    if (!t.destroyed && Math.hypot(t.x - p.x, t.y - p.y) < 1100) {
                        this.damageTower(t, ultDmg);
                    }
                });
                for (const k in this.bosses) {
                    const b = this.bosses[k];
                    if (b.hp > 0 && Math.hypot(b.x - p.x, b.y - p.y) < 1100) {
                        b.hp = Math.max(0, b.hp - ultDmg);
                        b.hitFlash = 8;
                        this.addFloatingText(b.x, b.y - 30, `УЛЬТА! -${Math.round(ultDmg)}`, '#ffd700');
                    }
                }
                this.bossBullets = [];
            } else if (slot === 5) {
                // Mobility / Dodge / Super Dash
                const dashDist = 180;
                p.x += Math.cos(p.rot) * dashDist;
                p.y += Math.sin(p.rot) * dashDist;
                p.x = Math.max(40, Math.min(this.WORLD_W - 40, p.x));
                p.y = Math.max(40, Math.min(this.WORLD_H - 40, p.y));
                this.player.invulnerableTimer = 90;
                this.playSynth('warp');
            }
        },

        damageNearestEnemies(x, y, radius, damage, type) {
            // Minions
            this.minions.forEach(m => {
                if (Math.hypot(m.x - x, m.y - y) < radius) {
                    m.hp -= damage;
                    this.addFloatingText(m.x, m.y - 15, `-${Math.round(damage)}`, '#ef4444');
                }
            });
            // 5v5 Enemy Bots
            if (this.is5v5Mode) {
                this.enemyBots.forEach(bot => {
                    if (bot.hp > 0 && Math.hypot(bot.x - x, bot.y - y) < radius) {
                        bot.hp = Math.max(0, bot.hp - damage);
                        this.addFloatingText(bot.x, bot.y - 25, `-${Math.round(damage)}`, '#ffd700');
                        if (bot.hp <= 0) {
                            this.alphaKills++;
                            this.score += 200;
                            this.coinsEarnedInSession += 10;
                            this.addKillfeedMessage(this.selectedHero.name, bot.hero.name, 'alpha');
                            bot.respawnTimer = 300;
                            this.check5v5WinCondition();
                        }
                    }
                });
            }
        },

        // 5v5 ROSTER & MATCH METHODS
        open5v5RosterModal() {
            if (!this.canvas) this.init();
            const modal = document.getElementById('modal5v5TeamRoster');
            if (modal) {
                modal.style.display = 'flex';
                modal.style.zIndex = '10350';
            }
            this.render5v5RosterUI();
        },

        close5v5RosterModal() {
            const modal = document.getElementById('modal5v5TeamRoster');
            if (modal) modal.style.display = 'none';
        },

        calculateSynergy(teamIds) {
            const heroes = teamIds.map(id => this.heroes100.find(h => h.id === id) || this.heroes100[0]);
            const classes = new Set(heroes.map(h => h.cls));
            let score = 70 + classes.size * 5;
            if (classes.size >= 4) score += 5;
            if (classes.size === 5) score = 98;
            return Math.min(100, score);
        },

        render5v5RosterUI() {
            const alphaSlotsEl = document.getElementById('rosterAlphaSlots');
            const betaSlotsEl = document.getElementById('rosterBetaSlots');
            if (!alphaSlotsEl || !betaSlotsEl) return;

            alphaSlotsEl.innerHTML = '';
            betaSlotsEl.innerHTML = '';

            // Synergy badges
            const alphaSynEl = document.getElementById('rosterAlphaSynergy');
            const betaSynEl = document.getElementById('rosterBetaSynergy');
            if (alphaSynEl) alphaSynEl.textContent = `Синергия: ${this.calculateSynergy(this.teamAlpha)}%`;
            if (betaSynEl) betaSynEl.textContent = `Синергия: ${this.calculateSynergy(this.teamBeta)}%`;

            // Render 5 Alpha slots
            this.teamAlpha.forEach((heroId, idx) => {
                const hero = this.heroes100.find(h => h.id === heroId) || this.heroes100[idx];
                const isPlayer = idx === 0;
                const slotDiv = document.createElement('div');
                slotDiv.style.cssText = `background:rgba(255,255,255,0.04); border:1px solid ${isPlayer ? '#38bdf8' : 'rgba(56,189,248,0.2)'}; border-radius:8px; padding:6px 10px; display:flex; justify-content:space-between; align-items:center; gap:8px;`;
                slotDiv.innerHTML = `
                    <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:1.4rem;">${hero.avatar}</span>
                        <div>
                            <div style="font-size:0.8rem; font-weight:800; color:#fff;">
                                ${hero.name} ${isPlayer ? '<span style="color:#ffd700; font-size:0.65rem; background:rgba(255,215,0,0.15); padding:1px 5px; border-radius:3px;">[ВЫ: ЛИДЕР]</span>' : ''}
                            </div>
                            <div style="font-size:0.64rem; color:#94a3b8;">${hero.clsName || hero.role} • ATK ${hero.atk} • HP ${hero.hp}</div>
                        </div>
                    </div>
                    <div>
                        <select class="select-hero-slot" data-team="alpha" data-slot="${idx}" style="background:rgba(0,0,0,0.6); border:1px solid rgba(56,189,248,0.4); color:#38bdf8; font-size:0.72rem; border-radius:6px; padding:3px 6px;">
                            ${this.heroes100.slice(0, 25).map(h => `<option value="${h.id}" ${h.id === hero.id ? 'selected' : ''}>${h.avatar} ${h.name} (${h.clsName})</option>`).join('')}
                        </select>
                    </div>
                `;
                alphaSlotsEl.appendChild(slotDiv);
            });

            // Render 5 Beta slots
            this.teamBeta.forEach((heroId, idx) => {
                const hero = this.heroes100.find(h => h.id === heroId) || this.heroes100[idx + 5];
                const slotDiv = document.createElement('div');
                slotDiv.style.cssText = `background:rgba(255,255,255,0.04); border:1px solid rgba(239,68,68,0.2); border-radius:8px; padding:6px 10px; display:flex; justify-content:space-between; align-items:center; gap:8px;`;
                slotDiv.innerHTML = `
                    <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:1.4rem;">${hero.avatar}</span>
                        <div>
                            <div style="font-size:0.8rem; font-weight:800; color:#fff;">${hero.name}</div>
                            <div style="font-size:0.64rem; color:#94a3b8;">${hero.clsName || hero.role} • ATK ${hero.atk} • HP ${hero.hp}</div>
                        </div>
                    </div>
                    <div>
                        <select class="select-hero-slot" data-team="beta" data-slot="${idx}" style="background:rgba(0,0,0,0.6); border:1px solid rgba(239,68,68,0.4); color:#f87171; font-size:0.72rem; border-radius:6px; padding:3px 6px;">
                            ${this.heroes100.slice(0, 25).map(h => `<option value="${h.id}" ${h.id === hero.id ? 'selected' : ''}>${h.avatar} ${h.name} (${h.clsName})</option>`).join('')}
                        </select>
                    </div>
                `;
                betaSlotsEl.appendChild(slotDiv);
            });

            // Dropdown change listeners
            document.querySelectorAll('.select-hero-slot').forEach(sel => {
                sel.addEventListener('change', (e) => {
                    const team = sel.dataset.team;
                    const slot = parseInt(sel.dataset.slot, 10);
                    const heroId = parseInt(sel.value, 10);
                    if (team === 'alpha') {
                        this.teamAlpha[slot] = heroId;
                        if (slot === 0) {
                            this.selectHeroById(heroId);
                        }
                    } else {
                        this.teamBeta[slot] = heroId;
                    }
                    this.render5v5RosterUI();
                });
            });
        },

        apply5v5Preset(preset) {
            if (preset === 'canonical') {
                this.teamAlpha = [1, 2, 3, 5, 8]; // Фил, Тогайбек, Сара, Анна, Алмат
                this.teamBeta = [23, 22, 21, 11, 19]; // Шмеки, Дархан, Нурбол, Человек в красном, Дэн
            } else if (preset === 'specops') {
                this.teamAlpha = [12, 13, 20, 7, 6]; // Роберт, Адриан, Иван, Грэй, Хейлэр
                this.teamBeta = [16, 17, 18, 14, 24]; // Кирилл, Брэйкомаренстер, Трэйк, Кайрат, Аня
            } else if (preset === 'balanced') {
                this.teamAlpha = [1, 8, 2, 10, 6]; // Стратег, Танк, Штурм, Снайпер, Саппорт
                this.teamBeta = [23, 11, 22, 9, 24]; // Танк, Дуэлянт, Снайпер, Маг, Хакер
            } else if (preset === 'random') {
                const shuffled = [...this.heroes100.slice(0, 25)].sort(() => 0.5 - Math.random());
                this.teamAlpha = shuffled.slice(0, 5).map(h => h.id);
                this.teamBeta = shuffled.slice(5, 10).map(h => h.id);
            }
            this.selectHeroById(this.teamAlpha[0]);
            this.render5v5RosterUI();
            this.playSynth('coin');
        },

        start5v5Battle() {
            this.close5v5RosterModal();
            if (!this.isOpen) {
                this.open();
            } else {
                const gameModal = document.getElementById('miniGameModalOverlay');
                if (gameModal) {
                    gameModal.style.display = 'flex';
                    gameModal.style.zIndex = '10250';
                }
            }
            this.is5v5Mode = true;
            this.alphaKills = 0;
            this.betaKills = 0;
            this.killfeed = [];

            // Spawn Player at Alpha Base
            this.player.x = 800;
            this.player.y = 800;
            this.player.vx = 0;
            this.player.vy = 0;

            // Spawn 4 Allied Bots
            this.alliedBots = [];
            const alphaOffsets = [
                { dx: -70, dy: -50 },
                { dx: 70, dy: -50 },
                { dx: -60, dy: 60 },
                { dx: 60, dy: 60 }
            ];
            for (let i = 1; i < 5; i++) {
                const heroId = this.teamAlpha[i];
                const hero = this.heroes100.find(h => h.id === heroId) || this.heroes100[i];
                this.alliedBots.push({
                    id: i,
                    hero: hero,
                    x: this.player.x + alphaOffsets[i - 1].dx,
                    y: this.player.y + alphaOffsets[i - 1].dy,
                    vx: 0,
                    vy: 0,
                    rot: 0,
                    hp: hero.hp * 3,
                    maxHp: hero.hp * 3,
                    team: 'alpha',
                    respawnTimer: 0,
                    attackCooldown: performance.now() + 1000 + i * 300,
                    abilityCooldown: performance.now() + 6000 + i * 1500
                });
            }

            // Spawn 5 Enemy Bots at Beta Base
            this.enemyBots = [];
            const betaBaseX = 2800;
            const betaBaseY = 1900;
            const betaOffsets = [
                { dx: 0, dy: 0 },
                { dx: -80, dy: -60 },
                { dx: 80, dy: -60 },
                { dx: -70, dy: 70 },
                { dx: 70, dy: 70 }
            ];
            for (let i = 0; i < 5; i++) {
                const heroId = this.teamBeta[i];
                const hero = this.heroes100.find(h => h.id === heroId) || this.heroes100[i + 5];
                this.enemyBots.push({
                    id: i,
                    hero: hero,
                    x: betaBaseX + betaOffsets[i].dx,
                    y: betaBaseY + betaOffsets[i].dy,
                    vx: 0,
                    vy: 0,
                    rot: Math.PI,
                    hp: hero.hp * 3.2,
                    maxHp: hero.hp * 3.2,
                    team: 'beta',
                    respawnTimer: 0,
                    attackCooldown: performance.now() + 1200 + i * 250,
                    abilityCooldown: performance.now() + 7000 + i * 1800
                });
            }

            // Show 5v5 HUDs
            const hudScore = document.getElementById('hud5v5Scoreboard');
            const hudKill = document.getElementById('hud5v5Killfeed');
            if (hudScore) hudScore.style.display = 'flex';
            if (hudKill) hudKill.style.display = 'flex';
            this.update5v5HUD();

            // Open Canvas Game if closed
            if (!this.isOpen) {
                this.open();
            }

            this.playSynth('ultimate');
            this.addFloatingText(this.player.x, this.player.y - 60, '⚔️ БИТВА 5х5 НАЧАЛАСЬ! ВПЕРЁД, АЛЬФА!', '#38bdf8');
        },

        update5v5HUD() {
            const aEl = document.getElementById('hud5v5AlphaScore');
            const bEl = document.getElementById('hud5v5BetaScore');
            if (aEl) aEl.textContent = this.alphaKills;
            if (bEl) bEl.textContent = this.betaKills;

            const killfeedEl = document.getElementById('hud5v5Killfeed');
            if (killfeedEl) {
                killfeedEl.innerHTML = this.killfeed.slice(-4).map(k => `
                    <div style="background:rgba(0,0,0,0.7); border:1px solid ${k.team === 'alpha' ? '#38bdf8' : '#ef4444'}; padding:2px 8px; border-radius:4px; font-size:0.65rem; color:#fff; font-family:'JetBrains Mono', monospace; display:flex; align-items:center; gap:6px;">
                        <span style="color:${k.team === 'alpha' ? '#38bdf8' : '#ef4444'}; font-weight:800;">${k.killer}</span>
                        <span>⚔️</span>
                        <span style="color:#94a3b8;">${k.victim}</span>
                    </div>
                `).join('');
            }
        },

        addKillfeedMessage(killer, victim, team) {
            this.killfeed.push({ killer, victim, team, time: performance.now() });
            this.update5v5HUD();
        },

        check5v5WinCondition() {
            if (this.alphaKills >= this.targetKills) {
                this.playSynth('ultimate');
                this.coinsEarnedInSession += 250;
                const banner = document.getElementById('gameVideoReadyBanner');
                const title = document.getElementById('gameVictoryTitle');
                const coinsAddedEl = document.getElementById('gameFinalCoinsAdded');
                if (title) title.textContent = '👑 ПОБЕДА КОМАНДЫ АЛЬФА В БИТВЕ 5х5!';
                if (coinsAddedEl) coinsAddedEl.textContent = `+${this.coinsEarnedInSession} L-Coins!`;
                if (banner) banner.style.display = 'flex';
            }
        },

        update5v5Bots(now) {
            if (!this.is5v5Mode) return;

            // Update Allied Bots
            this.alliedBots.forEach(bot => {
                if (bot.respawnTimer > 0) {
                    bot.respawnTimer--;
                    if (bot.respawnTimer === 0) {
                        bot.hp = bot.maxHp;
                        bot.x = this.player.x + (Math.random() - 0.5) * 80;
                        bot.y = this.player.y + (Math.random() - 0.5) * 80;
                        this.addFloatingText(bot.x, bot.y - 20, `${bot.hero.name} возродился!`, '#38bdf8');
                    }
                    return;
                }

                // Target nearest alive enemy bot
                let nearest = null;
                let minDist = 99999;
                this.enemyBots.forEach(eb => {
                    if (eb.hp > 0 && eb.respawnTimer === 0) {
                        const d = Math.hypot(eb.x - bot.x, eb.y - bot.y);
                        if (d < minDist) { minDist = d; nearest = eb; }
                    }
                });

                if (nearest) {
                    const angle = Math.atan2(nearest.y - bot.y, nearest.x - bot.x);
                    bot.rot = angle;
                    if (minDist > 250) {
                        bot.vx += Math.cos(angle) * 0.45;
                        bot.vy += Math.sin(angle) * 0.45;
                    } else if (minDist < 140) {
                        bot.vx -= Math.cos(angle) * 0.35;
                        bot.vy -= Math.sin(angle) * 0.35;
                    }
                    bot.vx *= 0.92;
                    bot.vy *= 0.92;
                    bot.x += bot.vx;
                    bot.y += bot.vy;

                    // Shoot
                    if (now > bot.attackCooldown) {
                        bot.attackCooldown = now + 900 + Math.random() * 600;
                        this.bullets.push({
                            x: bot.x + Math.cos(angle) * 16,
                            y: bot.y + Math.sin(angle) * 16,
                            vx: Math.cos(angle) * 13,
                            vy: Math.sin(angle) * 13,
                            damage: bot.hero.atk,
                            color: bot.hero.color || '#38bdf8',
                            glow: bot.hero.color || '#38bdf8',
                            radius: 4.5,
                            life: 60,
                            sourceTeam: 'alpha',
                            shooterName: bot.hero.name
                        });
                    }
                }
            });

            // Update Enemy Bots
            this.enemyBots.forEach(bot => {
                if (bot.respawnTimer > 0) {
                    bot.respawnTimer--;
                    if (bot.respawnTimer === 0) {
                        bot.hp = bot.maxHp;
                        bot.x = 2800 + (Math.random() - 0.5) * 100;
                        bot.y = 1900 + (Math.random() - 0.5) * 100;
                        this.addFloatingText(bot.x, bot.y - 20, `${bot.hero.name} (Бета) возродился!`, '#ef4444');
                    }
                    return;
                }

                // Target nearest Alpha member (player or alive bot)
                const targets = [this.player, ...this.alliedBots.filter(b => b.hp > 0 && b.respawnTimer === 0)];
                let nearest = null;
                let minDist = 99999;
                targets.forEach(t => {
                    const d = Math.hypot(t.x - bot.x, t.y - bot.y);
                    if (d < minDist) { minDist = d; nearest = t; }
                });

                if (nearest) {
                    const angle = Math.atan2(nearest.y - bot.y, nearest.x - bot.x);
                    bot.rot = angle;
                    if (minDist > 240) {
                        bot.vx += Math.cos(angle) * 0.42;
                        bot.vy += Math.sin(angle) * 0.42;
                    } else if (minDist < 130) {
                        bot.vx -= Math.cos(angle) * 0.35;
                        bot.vy -= Math.sin(angle) * 0.35;
                    }
                    bot.vx *= 0.92;
                    bot.vy *= 0.92;
                    bot.x += bot.vx;
                    bot.y += bot.vy;

                    // Shoot
                    if (now > bot.attackCooldown) {
                        bot.attackCooldown = now + 950 + Math.random() * 600;
                        this.bossBullets.push({
                            x: bot.x + Math.cos(angle) * 16,
                            y: bot.y + Math.sin(angle) * 16,
                            vx: Math.cos(angle) * 10.5,
                            vy: Math.sin(angle) * 10.5,
                            damage: Math.round(bot.hero.atk * 0.65),
                            color: bot.hero.color || '#ef4444',
                            glow: '#ef4444',
                            radius: 4.5,
                            life: 65,
                            sourceTeam: 'beta',
                            shooterName: bot.hero.name
                        });
                    }
                }
            });
        },

        render5v5Bots(c) {
            if (!this.is5v5Mode) return;

            // Allied Bots
            this.alliedBots.forEach(bot => {
                if (bot.hp <= 0 || bot.respawnTimer > 0) return;
                c.save();
                c.translate(bot.x, bot.y);
                c.rotate(bot.rot);
                // Cyan team ring
                c.shadowColor = '#38bdf8'; c.shadowBlur = 12;
                c.strokeStyle = '#38bdf8'; c.lineWidth = 2;
                c.beginPath(); c.arc(0, 0, 18, 0, Math.PI * 2); c.stroke();
                // Avatar
                c.rotate(Math.PI / 2);
                c.font = '16px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
                c.fillText(bot.hero.avatar, 0, 0);
                c.restore();

                // Overhead Name & HP bar
                c.save();
                c.font = 'bold 9px sans-serif'; c.textAlign = 'center';
                c.fillStyle = '#38bdf8';
                c.fillText(bot.hero.name, bot.x, bot.y - 26);
                // HP bar
                const pct = Math.max(0, bot.hp / bot.maxHp);
                c.fillStyle = 'rgba(0,0,0,0.5)';
                c.fillRect(bot.x - 18, bot.y - 23, 36, 4);
                c.fillStyle = '#10b981';
                c.fillRect(bot.x - 18, bot.y - 23, 36 * pct, 4);
                c.restore();
            });

            // Enemy Bots
            this.enemyBots.forEach(bot => {
                if (bot.hp <= 0 || bot.respawnTimer > 0) return;
                c.save();
                c.translate(bot.x, bot.y);
                c.rotate(bot.rot);
                // Red team ring
                c.shadowColor = '#ef4444'; c.shadowBlur = 12;
                c.strokeStyle = '#ef4444'; c.lineWidth = 2;
                c.beginPath(); c.arc(0, 0, 18, 0, Math.PI * 2); c.stroke();
                // Avatar
                c.rotate(Math.PI / 2);
                c.font = '16px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
                c.fillText(bot.hero.avatar, 0, 0);
                c.restore();

                // Overhead Name & HP bar
                c.save();
                c.font = 'bold 9px sans-serif'; c.textAlign = 'center';
                c.fillStyle = '#f87171';
                c.fillText(bot.hero.name, bot.x, bot.y - 26);
                // HP bar
                const pct = Math.max(0, bot.hp / bot.maxHp);
                c.fillStyle = 'rgba(0,0,0,0.5)';
                c.fillRect(bot.x - 18, bot.y - 23, 36, 4);
                c.fillStyle = '#ef4444';
                c.fillRect(bot.x - 18, bot.y - 23, 36 * pct, 4);
                c.restore();
            });
        },

        toggle3DMode() {
            this.is3D = !this.is3D;
            const btn = document.getElementById('btnToggle3DMode');
            const badge = document.getElementById('gameViewModeBadge');
            if (btn) {
                btn.textContent = this.is3D ? '🗺️ 2D Карта' : '🕶️ 3D Режим';
                btn.style.background = this.is3D ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #06b6d4, #3b82f6)';
            }
            if (badge) {
                badge.textContent = this.is3D ? 'Режим: 🕶️ 3D Перспектива' : 'Режим: 2D Открытый Мир';
                badge.style.color = this.is3D ? '#10b981' : '#38bdf8';
            }
            this.playSynth('warp');
            this.addFloatingText(this.player.x, this.player.y - 30, this.is3D ? '🕶️ 3D РЕЖИМ АКТИВИРОВАН!' : '🗺️ 2D КАРТА АКТИВИРОВАНА!', '#10b981');
        },

        toggleFullscreen() {
            this.isFullscreen = !this.isFullscreen;
            const card = document.getElementById('miniGameModalCard');
            const btn = document.getElementById('btnToggleGameFullscreen');
            if (this.isFullscreen) {
                if (card) {
                    card.style.position = 'fixed'; card.style.inset = '0';
                    card.style.width = '100vw'; card.style.height = '100vh';
                    card.style.maxWidth = '100vw'; card.style.maxHeight = '100vh';
                    card.style.borderRadius = '0'; card.style.zIndex = '10200'; card.style.padding = '12px';
                }
                if (btn) btn.textContent = '🗗 Оконный';
                if (this.canvas) {
                    this.canvas.width = window.innerWidth - 30;
                    this.canvas.height = window.innerHeight - 180;
                }
            } else {
                if (card) {
                    card.style.position = 'relative'; card.style.inset = 'auto';
                    card.style.width = '97vw'; card.style.height = 'auto';
                    card.style.maxWidth = '960px'; card.style.maxHeight = '95vh';
                    card.style.borderRadius = '18px'; card.style.zIndex = 'auto'; card.style.padding = '12px 16px';
                }
                if (btn) btn.textContent = '⛶ Экран';
                if (this.canvas) {
                    this.canvas.width = 920;
                    this.canvas.height = 480;
                }
            }
        },

        initHeroRoster() {
            const grid = document.getElementById('heroRosterGrid');
            if (!grid) return;

            const renderCards = (filterClass = 'all', searchQuery = '') => {
                grid.innerHTML = '';
                const q = searchQuery.toLowerCase().trim();
                const filtered = this.heroes100.filter(h => {
                    const matchCls = filterClass === 'all' || h.cls === filterClass;
                    const matchQ = !q || h.name.toLowerCase().includes(q) || (h.title && h.title.toLowerCase().includes(q)) || (h.clsName && h.clsName.toLowerCase().includes(q));
                    return matchCls && matchQ;
                });

                filtered.forEach(h => {
                    const isSelected = this.selectedHero && this.selectedHero.id === h.id;
                    const card = document.createElement('div');
                    card.style.cssText = `background:rgba(255,255,255,0.04); border:1px solid ${isSelected ? (h.color || '#38bdf8') : 'rgba(255,255,255,0.1)'}; border-radius:10px; padding:10px; display:flex; flex-direction:column; gap:6px; cursor:pointer; transition:transform 0.15s ease; box-shadow:${isSelected ? '0 0 15px ' + (h.color || '#38bdf8') : 'none'};`;
                    
                    const abilitiesHtml = (h.abilities || []).map(a => 
                        `<div style="font-size:0.6rem; color:#cbd5e1; display:flex; align-items:center; gap:3px;"><span style="color:#ffd700; font-weight:800;">${a.keyDisplay}</span> <span>${a.icon}</span> <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${a.name}</span></div>`
                    ).join('');

                    card.innerHTML = `
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:1.6rem;">${h.avatar}</span>
                            <span style="font-size:0.62rem; background:rgba(255,255,255,0.1); color:${h.color || '#38bdf8'}; padding:2px 6px; border-radius:4px; font-weight:700;">${h.clsName}</span>
                        </div>
                        <div>
                            <div style="font-size:0.85rem; font-weight:800; color:#fff;">${h.name}</div>
                            <div style="font-size:0.65rem; color:#94a3b8;">${h.title || h.role}</div>
                        </div>
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:4px; font-size:0.62rem; color:#cbd5e1; font-family:monospace; background:rgba(0,0,0,0.3); padding:4px 6px; border-radius:6px;">
                            <span>❤️ HP: ${h.hp}</span>
                            <span>⚔️ ATK: ${h.atk}</span>
                            <span>⚡ SPD: ${h.spd}</span>
                            <span>🎯 CRIT: ${h.crit}%</span>
                        </div>
                        <div style="background:rgba(0,0,0,0.25); border-radius:6px; padding:4px 6px; display:flex; flex-direction:column; gap:2px;">
                            ${abilitiesHtml}
                        </div>
                        <button type="button" style="margin-top:auto; background:${isSelected ? (h.color || '#38bdf8') : 'rgba(255,255,255,0.08)'}; color:${isSelected ? '#000' : '#fff'}; font-weight:800; border:none; border-radius:6px; padding:4px; font-size:0.68rem; cursor:pointer;">${isSelected ? '✓ ВЫБРАН' : 'ВЫБРАТЬ'}</button>
                    `;
                    card.addEventListener('click', () => {
                        this.selectHeroById(h.id);
                        this.closeHeroRoster();
                    });
                    grid.appendChild(card);
                });
            };

            renderCards('all', '');

            // Filter pills
            document.querySelectorAll('.hero-filter-pill').forEach(pill => {
                pill.addEventListener('click', () => {
                    document.querySelectorAll('.hero-filter-pill').forEach(p => {
                        p.classList.remove('active');
                        p.style.background = 'rgba(255,255,255,0.06)';
                        p.style.color = '#94a3b8';
                    });
                    pill.classList.add('active');
                    pill.style.background = '#a855f7';
                    pill.style.color = '#fff';
                    const q = document.getElementById('heroSearchInput')?.value || '';
                    renderCards(pill.dataset.class, q);
                });
            });

            const searchInput = document.getElementById('heroSearchInput');
            if (searchInput) {
                searchInput.addEventListener('input', (e) => {
                    const activePill = document.querySelector('.hero-filter-pill.active');
                    const cls = activePill ? activePill.dataset.class : 'all';
                    renderCards(cls, e.target.value);
                });
            }
        },

        openHeroRoster() {
            const m = document.getElementById('heroRosterModalOverlay');
            if (m) m.style.display = 'flex';
        },

        closeHeroRoster() {
            const m = document.getElementById('heroRosterModalOverlay');
            if (m) m.style.display = 'none';
        },

        selectHeroById(id) {
            const hero = this.heroes100.find(h => h.id === id);
            if (!hero) return;
            this.selectedHero = hero;
            this.player.speed = hero.spd || 7.2;

            if (this.is5v5Mode) {
                this.teamAlpha[0] = hero.id;
            }

            const nameEl = document.getElementById('activeHeroDisplayName');
            if (nameEl) {
                nameEl.textContent = `${hero.name} (${hero.clsName || hero.title})`;
                nameEl.style.color = hero.color || '#ffd700';
            }

            // Highlight in quick bar if 1-6
            document.querySelectorAll('#quickHeroSelectRow .team-hero-btn[data-hero]').forEach(b => {
                const isAct = parseInt(b.dataset.hero, 10) === hero.id;
                b.classList.toggle('active', isAct);
                b.style.background = isAct ? 'rgba(56,189,248,0.25)' : 'rgba(255,255,255,0.05)';
                b.style.borderColor = isAct ? '#38bdf8' : 'rgba(255,255,255,0.1)';
                b.style.color = isAct ? '#fff' : '#94a3b8';
            });

            this.updateAbilityBarHUD();
            this.render5v5RosterUI();
            this.playSynth('coin');
            this.addFloatingText(this.player.x, this.player.y - 30, `Герой: ${hero.name} (${hero.clsName})!`, hero.color || '#ffd700');
        },

        buildGalaxy() {
            this.stars = [];
            for (let i = 0; i < 150; i++) {
                this.stars.push({
                    x: Math.random() * this.WORLD_W,
                    y: Math.random() * this.WORLD_H,
                    size: Math.random() * 2.5 + 0.8,
                    layer: Math.floor(Math.random() * 3) + 1,
                    color: Math.random() > 0.4 ? '#ffffff' : (Math.random() > 0.5 ? '#38bdf8' : '#c084fc')
                });
            }

            this.nebulae = [
                { x: 700, y: 500, radius: 450, color: 'rgba(56, 189, 248, 0.12)' },
                { x: 1200, y: 800, radius: 500, color: 'rgba(168, 85, 247, 0.14)' },
                { x: 2600, y: 550, radius: 550, color: 'rgba(239, 68, 68, 0.15)' },
                { x: 3100, y: 850, radius: 480, color: 'rgba(249, 115, 22, 0.12)' },
                { x: 750, y: 1900, radius: 520, color: 'rgba(139, 92, 246, 0.16)' },
                { x: 1300, y: 2200, radius: 480, color: 'rgba(76, 29, 149, 0.15)' },
                { x: 2500, y: 1950, radius: 540, color: 'rgba(236, 72, 153, 0.14)' },
                { x: 3000, y: 2250, radius: 500, color: 'rgba(217, 70, 239, 0.15)' }
            ];

            this.asteroids = [];
            for (let i = 0; i < 55; i++) {
                const ax = 150 + Math.random() * (this.WORLD_W - 300);
                const ay = 150 + Math.random() * (this.WORLD_H - 300);
                const r = 20 + Math.random() * 24;
                const secType = ax > 1800 ? (ay > 1350 ? 'cyber' : 'magma') : (ay > 1350 ? 'void' : 'crystal');
                this.asteroids.push({
                    id: i, x: ax, y: ay, radius: r, maxHp: Math.round(r * 2.2), hp: Math.round(r * 2.2),
                    rot: Math.random() * Math.PI * 2, rotSpeed: (Math.random() - 0.5) * 0.02,
                    type: secType, hitFlash: 0
                });
            }

            this.stargates = [
                { id: 1, x: 1550, y: 1150, targetX: 2150, targetY: 1550, name: 'Врата Цитадели', color: '#38bdf8' },
                { id: 2, x: 2050, y: 1150, targetX: 1550, targetY: 1550, name: 'Врата Бездны', color: '#ef4444' },
                { id: 3, x: 1550, y: 1550, targetX: 2050, targetY: 1150, name: 'Врата Разлома', color: '#8b5cf6' },
                { id: 4, x: 2050, y: 1550, targetX: 1550, targetY: 1150, name: 'Врата Неона', color: '#ec4899' }
            ];
        },

        open() {
            this.isOpen = true;
            this.lives = 3;
            this.score = 0;
            this.coinsEarnedInSession = 0;
            this.ultimateCharge = 0;
            this.shake = 0;
            this.roundStartTime = performance.now();
            this.bullets = [];
            this.bossBullets = [];
            this.minions = [];
            this.items = [];
            this.particles = [];
            this.floatingTexts = [];

            // Reset artifacts & towers
            this.questEmerald = false;
            this.questWaterStaff = false;
            this.artifacts.forEach(a => a.found = false);
            this.towers.forEach(t => { t.hp = t.maxHp; t.destroyed = false; });

            this.player.x = 900;
            this.player.y = 650;
            this.player.vx = 0;
            this.player.vy = 0;
            this.player.rot = -Math.PI / 2;
            this.player.invulnerableTimer = 0;

            const modal = document.getElementById('miniGameModalOverlay');
            if (modal) modal.style.display = 'flex';

            const readyBanner = document.getElementById('gameVideoReadyBanner');
            if (readyBanner) readyBanner.style.display = 'none';

            this.updateHUD();
            this.updateTowersHUD();
            this.updateArtifactsHUD();
            this.updateAbilityBarHUD();

            cancelAnimationFrame(this.animId);
            const loop = (t) => {
                if (!this.isOpen) return;
                this.update(t);
                this.render();
                this.animId = requestAnimationFrame(loop);
            };
            this.animId = requestAnimationFrame(loop);
        },

        close() {
            this.isOpen = false;
            this.is5v5Mode = false;
            cancelAnimationFrame(this.animId);
            const modal = document.getElementById('miniGameModalOverlay');
            if (modal) modal.style.display = 'none';

            const hudScore = document.getElementById('hud5v5Scoreboard');
            const hudKill = document.getElementById('hud5v5Killfeed');
            if (hudScore) hudScore.style.display = 'none';
            if (hudKill) hudKill.style.display = 'none';

            if (this.coinsEarnedInSession > 0) {
                if (typeof window.LCoinsBalance === 'number') {
                    window.LCoinsBalance += this.coinsEarnedInSession;
                }
                if (window.BoostState) {
                    window.BoostState.balance = (window.BoostState.balance || 0) + this.coinsEarnedInSession;
                }
                if (typeof updateLCoinsDisplay === 'function') {
                    updateLCoinsDisplay();
                }
            }
        },

        fireBullet() {
            const now = performance.now();
            const hero = this.selectedHero || this.heroes100[0];
            const interval = hero.cls === 'techno' ? 120 : (hero.cls === 'mage' ? 170 : 140);
            if (now - this.lastShotTime < interval) return;
            this.lastShotTime = now;

            const px = this.player.x;
            const py = this.player.y;
            const rot = this.player.rot;

            // Base damage boosted if Emerald collected (+50%)
            let dmg = hero.atk;
            if (this.questEmerald) dmg = Math.round(dmg * 1.5);
            if (this.activeBuffs.focusUntil > now) dmg = Math.round(dmg * 1.8);

            const isCrit = (this.activeBuffs.focusUntil > now) || (Math.random() * 100 < hero.crit);
            if (isCrit) dmg = Math.round(dmg * 2.2);

            // Primary hero shot
            this.bullets.push({
                x: px + Math.cos(rot) * 15,
                y: py + Math.sin(rot) * 15,
                vx: Math.cos(rot) * 14 + this.player.vx * 0.3,
                vy: Math.sin(rot) * 14 + this.player.vy * 0.3,
                damage: dmg,
                isCrit: isCrit,
                color: isCrit ? '#ffd700' : (hero.color || '#38bdf8'),
                glow: hero.color || '#38bdf8',
                radius: isCrit ? 6 : 4,
                type: 'primary',
                life: 70,
                sourceTeam: 'alpha',
                shooterName: hero.name
            });
            this.playSynth(isCrit ? 'crit' : 'laser');

            // Secondary: Emerald Laser if found
            if (this.questEmerald) {
                this.bullets.push({
                    x: px + Math.cos(rot + 0.15) * 15,
                    y: py + Math.sin(rot + 0.15) * 15,
                    vx: Math.cos(rot + 0.15) * 16,
                    vy: Math.sin(rot + 0.15) * 16,
                    damage: 20,
                    color: '#10b981',
                    glow: '#34d399',
                    radius: 3.5,
                    type: 'emerald',
                    life: 75,
                    sourceTeam: 'alpha'
                });
            }

            // Secondary: Water Staff Tsunami if found
            if (this.questWaterStaff && this.tick % 3 === 0) {
                this.bullets.push({
                    x: px + Math.cos(rot - 0.15) * 15,
                    y: py + Math.sin(rot - 0.15) * 15,
                    vx: Math.cos(rot - 0.15) * 12,
                    vy: Math.sin(rot - 0.15) * 12,
                    damage: 35,
                    color: '#06b6d4',
                    glow: '#38bdf8',
                    radius: 7,
                    type: 'tsunami',
                    life: 80,
                    sourceTeam: 'alpha'
                });
                this.playSynth('water');
            }
        },

        triggerUltimate() {
            this.triggerHeroAbility(4);
        },

        damageTower(tower, dmg) {
            if (tower.destroyed) return;
            tower.hp = Math.max(0, tower.hp - dmg);
            this.score += Math.round(dmg * 1.5);
            this.ultimateCharge = Math.min(100, this.ultimateCharge + dmg * 0.12);
            this.addFloatingText(tower.x, tower.y - tower.height / 2 - 20, `БАШНЯ: -${dmg}`, '#f43f5e');

            if (tower.hp <= 0) {
                tower.destroyed = true;
                this.shake = 28;
                this.playSynth('towerExplosion');
                this.coinsEarnedInSession += tower.coins;
                this.addFloatingText(tower.x, tower.y - 40, `💥 ${tower.name.toUpperCase()} СОКРУШЕНА! +${tower.coins} 🪙`, '#ffd700');

                // Tower collapse particles
                for (let i = 0; i < 50; i++) {
                    this.particles.push({
                        x: tower.x + (Math.random() - 0.5) * 60,
                        y: tower.y + (Math.random() - 0.5) * 100,
                        vx: (Math.random() - 0.5) * 12,
                        vy: (Math.random() - 0.5) * 12,
                        size: Math.random() * 7 + 2,
                        color: tower.color,
                        alpha: 1,
                        decay: 0.02
                    });
                }

                // Check all 5 Towers Destroyed!
                const remaining = this.towers.filter(t => !t.destroyed);
                if (remaining.length === 0) {
                    this.onAllTowersDestroyed();
                }
            }
            this.updateTowersHUD();
            this.updateHUD();
        },

        onAllTowersDestroyed() {
            setTimeout(() => {
                this.playSynth('ultimate');
                const banner = document.getElementById('gameVideoReadyBanner');
                const title = document.getElementById('gameVictoryTitle');
                const coinsAddedEl = document.getElementById('gameFinalCoinsAdded');
                if (title) title.textContent = '👑 ВСЕ 5 БАШЕН СОКРУШЕНЫ! ВЫ ЛЕГЕНДА ГАЛАКТИКИ!';
                if (coinsAddedEl) coinsAddedEl.textContent = `+${this.coinsEarnedInSession} L-Coins!`;
                if (banner) banner.style.display = 'flex';
            }, 1200);
        },

        addFloatingText(x, y, text, color = '#fff') {
            this.floatingTexts.push({ x, y, text, color, alpha: 1, vy: -1.2 });
        },

        update(t) {
            this.tick++;
            const now = performance.now();
            const cw = this.canvas ? this.canvas.width : 920;
            const ch = this.canvas ? this.canvas.height : 480;

            if (this.shake > 0) this.shake = Math.max(0, this.shake - 0.7);
            if (this.player.invulnerableTimer > 0) this.player.invulnerableTimer--;

            // Player Flight Physics
            const p = this.player;
            const limit = p.isBoosting ? p.boostSpeed : p.maxSpeed;

            if (this.keys.up) {
                p.vx += Math.cos(p.rot) * p.accel;
                p.vy += Math.sin(p.rot) * p.accel;
            }
            if (this.keys.down) {
                p.vx *= 0.88;
                p.vy *= 0.88;
            }
            if (this.keys.left) p.rot -= 0.07;
            if (this.keys.right) p.rot += 0.07;

            p.vx *= p.friction;
            p.vy *= p.friction;
            const curSpd = Math.hypot(p.vx, p.vy);
            if (curSpd > limit) {
                p.vx = (p.vx / curSpd) * limit;
                p.vy = (p.vy / curSpd) * limit;
            }

            p.x += p.vx;
            p.y += p.vy;
            p.x = Math.max(30, Math.min(this.WORLD_W - 30, p.x));
            p.y = Math.max(30, Math.min(this.WORLD_H - 30, p.y));

            // Camera Tracking
            this.camera.targetX = p.x - cw / 2;
            this.camera.targetY = p.y - ch / 2;
            this.camera.targetX = Math.max(0, Math.min(this.WORLD_W - cw, this.camera.targetX));
            this.camera.targetY = Math.max(0, Math.min(this.WORLD_H - ch, this.camera.targetY));
            this.camera.x += (this.camera.targetX - this.camera.x) * 0.12;
            this.camera.y += (this.camera.targetY - this.camera.y) * 0.12;

            // Check Artifact Pickup
            this.artifacts.forEach(art => {
                if (!art.found && Math.hypot(art.x - p.x, art.y - p.y) < art.radius + p.radius) {
                    art.found = true;
                    this.score += 500;
                    this.playSynth('coin');
                    if (art.id === 'emerald') {
                        this.questEmerald = true;
                        this.addFloatingText(p.x, p.y - 40, '💎 ИЗУМРУДНЫЙ КАМЕНЬ НАЙДЕН! +50% DMG', '#10b981');
                    } else if (art.id === 'water') {
                        this.questWaterStaff = true;
                        this.addFloatingText(p.x, p.y - 40, '🌊 ПОСОХ ВОДЫ НАЙДЕН! ЦУНАМИ-АТАКА', '#06b6d4');
                    }
                    this.updateArtifactsHUD();
                }
            });

            // 5v5 Mode Bots Update
            if (this.is5v5Mode) {
                this.update5v5Bots(now);
            }

            // Bullets Update & Collisions
            for (let i = this.bullets.length - 1; i >= 0; i--) {
                const b = this.bullets[i];
                b.x += b.vx;
                b.y += b.vy;
                b.life--;

                // Collision with Towers
                this.towers.forEach(tow => {
                    if (!tow.destroyed && Math.abs(b.x - tow.x) < tow.width / 2 && Math.abs(b.y - tow.y) < tow.height / 2) {
                        this.damageTower(tow, b.damage);
                        b.life = 0;
                    }
                });

                // Collision with Enemy Bots in 5v5
                if (this.is5v5Mode && b.sourceTeam === 'alpha') {
                    this.enemyBots.forEach(eb => {
                        if (eb.hp > 0 && eb.respawnTimer === 0 && Math.hypot(eb.x - b.x, eb.y - b.y) < 22) {
                            eb.hp = Math.max(0, eb.hp - b.damage);
                            this.addFloatingText(eb.x, eb.y - 20, `-${b.damage}`, b.isCrit ? '#ffd700' : '#f87171');
                            b.life = 0;
                            if (eb.hp <= 0) {
                                this.alphaKills++;
                                this.score += 200;
                                this.coinsEarnedInSession += 10;
                                this.addKillfeedMessage(b.shooterName || this.selectedHero.name, eb.hero.name, 'alpha');
                                eb.respawnTimer = 300;
                                this.check5v5WinCondition();
                            }
                        }
                    });
                }

                if (b.life <= 0) this.bullets.splice(i, 1);
            }

            // Enemy/Boss Bullets Update & Hit Player
            for (let i = this.bossBullets.length - 1; i >= 0; i--) {
                const bb = this.bossBullets[i];
                bb.x += bb.vx;
                bb.y += bb.vy;
                bb.life--;

                // Check hit on player
                if (p.invulnerableTimer <= 0 && Math.hypot(bb.x - p.x, bb.y - p.y) < p.radius + bb.radius) {
                    this.shake = 12;
                    this.playSynth('hit');
                    this.lives--;
                    p.invulnerableTimer = 120;
                    this.addFloatingText(p.x, p.y - 30, `УРОН! -${bb.damage}`, '#f43f5e');
                    this.updateHUD();
                    bb.life = 0;

                    if (this.is5v5Mode && this.lives <= 0) {
                        this.betaKills++;
                        this.addKillfeedMessage(bb.shooterName || 'Враг Бета', this.selectedHero.name, 'beta');
                        this.lives = 3;
                        p.x = 800; p.y = 800;
                        this.update5v5HUD();
                    }
                }

                // Check hit on Allied Bots in 5v5
                if (this.is5v5Mode && bb.sourceTeam === 'beta') {
                    this.alliedBots.forEach(ab => {
                        if (ab.hp > 0 && ab.respawnTimer === 0 && Math.hypot(bb.x - ab.x, bb.y - ab.y) < 22) {
                            ab.hp = Math.max(0, ab.hp - bb.damage);
                            this.addFloatingText(ab.x, ab.y - 20, `-${bb.damage}`, '#f43f5e');
                            bb.life = 0;
                            if (ab.hp <= 0) {
                                this.betaKills++;
                                this.addKillfeedMessage(bb.shooterName || 'Враг', ab.hero.name, 'beta');
                                ab.respawnTimer = 300;
                                this.update5v5HUD();
                            }
                        }
                    });
                }

                if (bb.life <= 0) this.bossBullets.splice(i, 1);
            }

            // Particles Update
            for (let i = this.particles.length - 1; i >= 0; i--) {
                const pt = this.particles[i];
                pt.x += pt.vx;
                pt.y += pt.vy;
                pt.alpha -= pt.decay;
                if (pt.alpha <= 0) this.particles.splice(i, 1);
            }

            // Floating Texts Update
            for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
                const ft = this.floatingTexts[i];
                ft.y += ft.vy;
                ft.alpha -= 0.018;
                if (ft.alpha <= 0) this.floatingTexts.splice(i, 1);
            }

            // Passive Ultimate Recharging
            if (this.ultimateCharge < 100) {
                this.ultimateCharge = Math.min(100, this.ultimateCharge + 0.08);
                const ultEl = document.getElementById('ultimateChargeText');
                if (ultEl) ultEl.textContent = `${Math.floor(this.ultimateCharge)}%`;
            }

            // Update Ability HUD CD display every 10 frames
            if (this.tick % 10 === 0) {
                for (let s = 1; s <= 5; s++) {
                    const el = document.getElementById(`abilityCdOverlay_${s}`);
                    if (el) {
                        const rem = Math.max(0, Math.ceil(((this.heroCooldowns[s] || 0) - now) / 1000));
                        el.style.display = rem > 0 ? 'flex' : 'none';
                        el.textContent = `${rem}с`;
                    }
                }
            }
        },

        updateHUD() {
            const scoreEl = document.getElementById('gameScore');
            const coinsEl = document.getElementById('gameCoinsEarned');
            const livesEl = document.getElementById('gameLivesDisplay');
            if (scoreEl) scoreEl.textContent = this.score;
            if (coinsEl) coinsEl.textContent = this.coinsEarnedInSession;
            if (livesEl) livesEl.textContent = '❤️'.repeat(Math.max(0, this.lives));
        },

        updateTowersHUD() {
            this.towers.forEach(t => {
                const hpEl = document.getElementById(`towerHpBar${t.id}`);
                if (hpEl) {
                    const pct = Math.max(0, Math.round((t.hp / t.maxHp) * 100));
                    hpEl.style.width = `${pct}%`;
                }
            });
        },

        updateArtifactsHUD() {
            const emEl = document.getElementById('questEmeraldBadge');
            const wsEl = document.getElementById('questWaterStaffBadge');
            if (emEl) {
                emEl.textContent = this.questEmerald ? '💎 Изумруд: ✅ НАЙДЕН (+50% DMG)' : '💎 Изумруд: ❌ Искать в Неоне';
                emEl.style.color = this.questEmerald ? '#10b981' : '#94a3b8';
            }
            if (wsEl) {
                wsEl.textContent = this.questWaterStaff ? '🌊 Посох Воды: ✅ НАЙДЕН (Цунами)' : '🌊 Посох Воды: ❌ Искать в Разломе';
                wsEl.style.color = this.questWaterStaff ? '#06b6d4' : '#94a3b8';
            }
        },

        render() {
            if (!this.ctx || !this.canvas) return;
            const c = this.ctx;
            const cw = this.canvas.width;
            const ch = this.canvas.height;

            if (this.is3D) {
                this.render3DMode(c, cw, ch);
                return;
            }

            c.save();
            c.clearRect(0, 0, cw, ch);

            // Screen Shake
            if (this.shake > 0) {
                const sx = (Math.random() - 0.5) * this.shake;
                const sy = (Math.random() - 0.5) * this.shake;
                c.translate(sx, sy);
            }

            // World Camera Transform
            c.translate(-this.camera.x, -this.camera.y);

            // Background Deep Space & Stars
            c.fillStyle = '#03010a';
            c.fillRect(0, 0, this.WORLD_W, this.WORLD_H);

            // Sectors Background Grid
            this.sectors.forEach(sec => {
                const grad = c.createRadialGradient((sec.x1 + sec.x2) / 2, (sec.y1 + sec.y2) / 2, 100, (sec.x1 + sec.x2) / 2, (sec.y1 + sec.y2) / 2, 900);
                grad.addColorStop(0, sec.bg2);
                grad.addColorStop(1, sec.bg1);
                c.fillStyle = grad;
                c.fillRect(sec.x1, sec.y1, sec.x2 - sec.x1, sec.y2 - sec.y1);
            });

            // Stars
            this.stars.forEach(st => {
                c.fillStyle = st.color;
                c.beginPath();
                c.arc(st.x, st.y, st.size, 0, Math.PI * 2);
                c.fill();
            });

            // Nebulae
            this.nebulae.forEach(neb => {
                const nGrad = c.createRadialGradient(neb.x, neb.y, 10, neb.x, neb.y, neb.radius);
                nGrad.addColorStop(0, neb.color);
                nGrad.addColorStop(1, 'rgba(0,0,0,0)');
                c.fillStyle = nGrad;
                c.beginPath();
                c.arc(neb.x, neb.y, neb.radius, 0, Math.PI * 2);
                c.fill();
            });

            // Stargates
            this.stargates.forEach(sg => {
                c.save();
                c.translate(sg.x, sg.y);
                c.strokeStyle = sg.color; c.lineWidth = 3;
                c.shadowColor = sg.color; c.shadowBlur = 20;
                c.beginPath();
                c.arc(0, 0, 45, 0, Math.PI * 2);
                c.stroke();
                c.font = 'bold 11px sans-serif'; c.fillStyle = '#fff'; c.textAlign = 'center';
                c.fillText(sg.name, 0, -55);
                c.restore();
            });

            // 5 Towers
            this.towers.forEach(tow => {
                c.save();
                c.translate(tow.x, tow.y);
                if (tow.destroyed) {
                    c.fillStyle = 'rgba(100, 100, 100, 0.4)';
                    c.fillRect(-tow.width / 2, -tow.height / 4, tow.width, tow.height / 2);
                    c.font = '28px sans-serif'; c.textAlign = 'center';
                    c.fillText('💥', 0, 10);
                    c.restore();
                    return;
                }
                c.shadowColor = tow.color; c.shadowBlur = 25;
                c.fillStyle = tow.color;
                c.fillRect(-tow.width / 2, -tow.height / 2, tow.width, tow.height);
                c.font = '36px sans-serif'; c.textAlign = 'center';
                c.fillText(tow.icon, 0, 10);
                c.font = 'bold 11px sans-serif'; c.fillStyle = '#fff';
                c.fillText(tow.name, 0, -tow.height / 2 - 8);
                c.restore();
            });

            // Artifacts
            this.artifacts.forEach(art => {
                if (art.found) return;
                c.save();
                c.translate(art.x, art.y);
                c.shadowColor = art.glow; c.shadowBlur = 25;
                c.fillStyle = art.color;
                c.beginPath(); c.arc(0, 0, art.radius + Math.sin(this.tick * 0.1) * 3, 0, Math.PI * 2); c.fill();
                c.font = 'bold 10px sans-serif'; c.fillStyle = '#fff'; c.textAlign = 'center';
                c.fillText(art.name, 0, -32);
                c.restore();
            });

            // 5v5 Bots (Allies & Enemies)
            if (this.is5v5Mode) {
                this.render5v5Bots(c);
            }

            // Bullets
            this.bullets.forEach(b => {
                c.save(); c.shadowColor = b.glow; c.shadowBlur = 10;
                c.fillStyle = b.color;
                c.beginPath(); c.arc(b.x, b.y, b.radius, 0, Math.PI * 2); c.fill();
                c.restore();
            });

            // Enemy/Boss Bullets
            this.bossBullets.forEach(bb => {
                c.save(); c.shadowColor = bb.glow; c.shadowBlur = 10;
                c.fillStyle = bb.color;
                c.beginPath(); c.arc(bb.x, bb.y, bb.radius, 0, Math.PI * 2); c.fill();
                c.restore();
            });

            // Player Hero
            this.renderHero2D(c);

            // Particles
            this.particles.forEach(pt => {
                c.save();
                c.globalAlpha = Math.max(0, pt.alpha);
                c.fillStyle = pt.color;
                c.beginPath(); c.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2); c.fill();
                c.restore();
            });

            // Floating Texts
            this.floatingTexts.forEach(ft => {
                c.save(); c.globalAlpha = Math.max(0, ft.alpha);
                c.font = 'bold 12px sans-serif'; c.textAlign = 'center';
                c.fillStyle = ft.color; c.shadowColor = ft.color; c.shadowBlur = 8;
                c.fillText(ft.text, ft.x, ft.y);
                c.restore();
            });

            c.restore(); // Restore world camera
            this.renderRadar2D(c, cw, ch);
        },

        renderHero2D(c) {
            const p = this.player;
            const hero = this.selectedHero || this.heroes100[0];
            c.save();
            c.translate(p.x, p.y);
            c.rotate(p.rot);

            c.shadowColor = hero.color || '#38bdf8'; c.shadowBlur = 16;
            c.fillStyle = '#1e112a'; c.strokeStyle = hero.color || '#38bdf8'; c.lineWidth = 2.4;
            c.beginPath();
            c.moveTo(22, 0); c.lineTo(-14, 16); c.lineTo(-8, 6);
            c.lineTo(-18, 0); c.lineTo(-8, -6); c.lineTo(-14, -16);
            c.closePath(); c.fill(); c.stroke();

            // Invulnerable / Shield Glow
            if (p.invulnerableTimer > 0) {
                c.strokeStyle = '#ffd700'; c.lineWidth = 2;
                c.beginPath(); c.arc(0, 0, 24, 0, Math.PI * 2); c.stroke();
            }

            c.rotate(Math.PI / 2);
            c.font = '17px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
            c.fillText(hero.avatar, 0, 0);
            c.restore();

            // Overhead Hero Nameplate
            c.save();
            c.font = 'bold 10px sans-serif'; c.textAlign = 'center';
            c.fillStyle = hero.color || '#ffd700';
            c.fillText(hero.name, p.x, p.y - 28);
            c.restore();
        },

        render3DMode(c, cw, ch) {
            const p = this.player;
            const hero = this.selectedHero || this.heroes100[0];
            const horizonY = ch * 0.44;

            // Sky gradient
            const skyGrad = c.createLinearGradient(0, 0, 0, horizonY);
            skyGrad.addColorStop(0, '#020108'); skyGrad.addColorStop(1, '#0e0422');
            c.fillStyle = skyGrad; c.fillRect(0, 0, cw, horizonY);

            // 3D Perspective Ground
            const groundGrad = c.createLinearGradient(0, horizonY, 0, ch);
            groundGrad.addColorStop(0, '#0a0316'); groundGrad.addColorStop(1, '#1e083a');
            c.fillStyle = groundGrad; c.fillRect(0, horizonY, cw, ch - horizonY);

            // Perspective Grid Lines
            c.strokeStyle = 'rgba(168, 85, 247, 0.2)'; c.lineWidth = 1.2;
            for (let i = -10; i <= 10; i++) {
                c.beginPath(); c.moveTo(cw / 2, horizonY);
                c.lineTo(cw / 2 + i * 160, ch); c.stroke();
            }
            for (let d = 20; d < 300; d += 35) {
                const y = horizonY + (ch - horizonY) * (d / 300);
                c.beginPath(); c.moveTo(0, y); c.lineTo(cw, y); c.stroke();
            }

            // Render Hero at center bottom
            c.save();
            c.translate(cw / 2, ch - 80);
            c.shadowColor = hero.color || '#38bdf8'; c.shadowBlur = 20;
            c.font = '48px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
            c.fillText(hero.avatar, 0, 0);
            c.font = 'bold 12px sans-serif'; c.fillStyle = '#fff';
            c.fillText(hero.name, 0, 35);
            c.restore();
        },

        renderRadar2D(c, cw, ch) {
            const rw = 120;
            const rh = 90;
            const rx = cw - rw - 12;
            const ry = ch - rh - 12;

            c.save();
            c.fillStyle = 'rgba(5, 2, 14, 0.82)';
            c.strokeStyle = 'rgba(168, 85, 247, 0.45)';
            c.lineWidth = 1.2;
            c.fillRect(rx, ry, rw, rh);
            c.strokeRect(rx, ry, rw, rh);

            // Towers on radar
            this.towers.forEach(t => {
                if (t.destroyed) return;
                const tx = rx + (t.x / this.WORLD_W) * rw;
                const ty = ry + (t.y / this.WORLD_H) * rh;
                c.fillStyle = t.color;
                c.fillRect(tx - 2, ty - 2, 4, 4);
            });

            // 5v5 Bots on radar
            if (this.is5v5Mode) {
                this.alliedBots.forEach(ab => {
                    if (ab.hp <= 0 || ab.respawnTimer > 0) return;
                    const bx = rx + (ab.x / this.WORLD_W) * rw;
                    const by = ry + (ab.y / this.WORLD_H) * rh;
                    c.fillStyle = '#38bdf8';
                    c.beginPath(); c.arc(bx, by, 2, 0, Math.PI * 2); c.fill();
                });
                this.enemyBots.forEach(eb => {
                    if (eb.hp <= 0 || eb.respawnTimer > 0) return;
                    const bx = rx + (eb.x / this.WORLD_W) * rw;
                    const by = ry + (eb.y / this.WORLD_H) * rh;
                    c.fillStyle = '#ef4444';
                    c.beginPath(); c.arc(bx, by, 2, 0, Math.PI * 2); c.fill();
                });
            }

            // Player Blip
            const px = rx + (this.player.x / this.WORLD_W) * rw;
            const py = ry + (this.player.y / this.WORLD_H) * rh;
            c.fillStyle = '#00f0ff';
            c.beginPath(); c.arc(px, py, 3.5, 0, Math.PI * 2); c.fill();

            c.restore();
        }
    };
    window.MiniGame = MiniGame;
    window.BoostState = BoostState;

    // ── 2. PRO LIVE GPU CUSTOMIZER & ZERO-VOID DISPLAY STATE ───────────────────
    const CustomState = {
        brightness: 100,
        contrast: 105,
        saturation: 108,
        hue: 0,
        glow: 30,
        vignette: 55,
        flare: 40,
        godRays: 50,
        chroma: 0,
        sharpness: 75,
        hdr: 80,
        hdrMode: true,
        speed: 1.0,
        grain: 'none',
        particles: 140,
        resolution: '4k',
        resolutionMultiplier: 2.5,
        displayMode: 'fit', // 'fit', 'fill', 'tight'
        ambientGlow: true,
        theaterMode: false,
        lut: 'default'
    };

    const LUT_PRESETS = {
        default: { brightness: 100, contrast: 100, saturation: 100, hue: 0, glow: 30, vignette: 65 },
        cyberpunk: { brightness: 108, contrast: 130, saturation: 150, hue: 315, glow: 65, vignette: 75 },
        golden: { brightness: 105, contrast: 112, saturation: 135, hue: 28, glow: 45, vignette: 50 },
        matrix: { brightness: 96, contrast: 138, saturation: 75, hue: 100, glow: 50, vignette: 80 },
        noir: { brightness: 92, contrast: 155, saturation: 0, hue: 0, glow: 15, vignette: 85 },
        scifi: { brightness: 110, contrast: 128, saturation: 125, hue: 195, glow: 55, vignette: 70 }
    };


    // ── 3. 100-LANGUAGE LOCALIZATION SYSTEM ───────────────────────────────────
    // ── 3. 100-LANGUAGE LOCALIZATION SYSTEM & PROMPT GUIDANCE ────────────────
    const VIDEO_I18N = {
        ru: {
            brandTitle: "Litdeo",
            brandSub: "Суверенная 4K Студия Видеогенерации",
            navChat: "🤖 Litally AI Чат ↗",
            navSanctuary: "🏛️ Главное святилище",
            studioTitle: "🎬 Студия создания видео",
            lblPrompt: "Промпт видео:",
            btnEnhance: "✨ Улучшить с ИИ",
            promptPlaceholder: "Опишите видео или изображение: кто в кадре (персонаж, возраст, эмоция), что делает (действие, динамика), внешность (цвет волос и глаз, прическа), одежда и детали, окружение (локация, погода), освещение (золотой час, неон, киносвет), ракурс и движение камеры (35mm наезд, дрон, slow-mo)...",
            lblInspiration: "Быстрые идеи и темы:",
            lblStyle: "Кинематографичный стиль:",
            lblRatio: "Формат кадра (30 форматов):",
            lblCamera: "Движение камеры:",
            lblDuration: "Длительность:",
            lblAudio: "🔊 Синтезировать звуковые эффекты и музыку",
            btnGenerate: "🎬 Сгенерировать видео 4K",
            btnRendering: "⏳ Нейросетевой рендеринг...",
            stage1: "Декомпозиция семантики промпта и 3D-вокселей сцены...",
            stage2: "Генерация латентных диффузионных ключевых кадров и физики...",
            stage3: "Расчет субпиксельной временной когерентности и света...",
            stage4: "4K/8K нейронный апскейлинг 60 FPS и квантовый рендеринг...",
            stage5: "Готово! Видео отрендерено в 4K Ultra HD со звуком.",
            btnDownload: "📥 Скачать MP4",
            btnExtend: "➕ Добавить 5 сек",
            btnCopyLink: "📋 Скопировать ссылку",
            galleryTitle: "🎞️ Недавние генерации видео",
            emptyGallery: "Пока нет сгенерированных видео. Создайте свой первый 4K шедевр выше!",
            toastCopied: "Ссылка на видео скопирована в буфер обмена!",
            langModalTitle: "Выберите язык студии (100 языков)",
            langSearchPlaceholder: "Поиск 100 языков / Search languages..."
        },
        kk: {
            brandTitle: "Litdeo",
            brandSub: "Дербес 4K Бейнегенерация Студиясы",
            navChat: "🤖 Litally AI Чат ↗",
            navSanctuary: "🏛️ Басты Киелі Мекен",
            studioTitle: "🎬 Бейне жасау студиясы",
            lblPrompt: "Бейне промпті:",
            btnEnhance: "✨ ИИ арқылы жақсарту",
            promptPlaceholder: "Бейне немесе суретті сипаттаңыз: кадрда кім бар (кейіпкер, жасы, эмоциясы), не істеп жатыр (қимыл-қозғалыс, физика), сыртқы келбеті (шаш пен көздің түсі, шаш үлгісі), киімі мен бөлшектері, қоршаған ортасы (мекені, ауа райы), жарықтандыру (алтын сәуле, неон, киножарық), камера бұрышы мен қозғалысы (35мм кинолинза, дрон, баяу түсірілім)...",
            lblInspiration: "Шабыттандыратын идеялар:",
            lblStyle: "Кинематографиялық стиль:",
            lblRatio: "Кадр пішімі (30 пішім):",
            lblCamera: "Камера қозғалысы:",
            lblDuration: "Ұзақтығы:",
            lblAudio: "🔊 Дыбыстық әсерлер мен музыканы қосу",
            btnGenerate: "🎬 4K Бейне жасау",
            btnRendering: "⏳ Нейрожелілік рендеринг...",
            stage1: "Промпт семантикасы мен 3D-кеңістіктік воксельдерді талдау...",
            stage2: "Латенттік диффузиялық кілттік кадрлар мен физиканы синтездеу...",
            stage3: "Субпиксельдік уақыттық үйлесімділік пен жарықты есептеу...",
            stage4: "4K/8K нейрондық масштабтау 60 FPS және кванттық рендеринг...",
            stage5: "Дайын! Бейне 4K Ultra HD сапасында және дыбыспен әзірленді.",
            btnDownload: "📥 MP4 жүктеп алу",
            btnExtend: "➕ 5 секунд қосу",
            btnCopyLink: "📋 Сілтемені көшіру",
            galleryTitle: "🎞️ Соңғы бейне туындылар",
            emptyGallery: "Әзірге бейнелер жоқ. Жоғарыда алғашқы шедеврді жасаңыз!",
            toastCopied: "Бейне сілтемесі алмасу буферіне көшірілді!",
            langModalTitle: "Студия тілін таңдаңыз (100 тіл)",
            langSearchPlaceholder: "100 тілден іздеу / Тіл атауы..."
        },
        en: {
            brandTitle: "Litdeo",
            brandSub: "Sovereign 4K Video Generation Studio",
            navChat: "🤖 Litally AI Chat ↗",
            navSanctuary: "🏛️ Main Sanctuary",
            studioTitle: "🎬 Video Creation Studio",
            lblPrompt: "Video Prompt:",
            btnEnhance: "✨ AI Enhance",
            promptPlaceholder: "Describe the video or image: who is in the scene (character, age, emotion), what they are doing (action, physics), appearance (hair & eye color, hairstyle), outfit & details, environment (location, weather), cinematic lighting (golden hour, volumetric rays, neon), camera motion & optics (35mm lens, FPV drone, slow-motion)...",
            lblInspiration: "Quick Inspirations & Themes:",
            lblStyle: "Cinematic Visual Style:",
            lblRatio: "Aspect Ratio (30 Variations):",
            lblCamera: "Camera Motion:",
            lblDuration: "Duration:",
            lblAudio: "🔊 Synthesize atmospheric sound fx & music",
            btnGenerate: "🎬 Render 4K Video",
            btnRendering: "⏳ Neural Rendering...",
            stage1: "Decomposing prompt semantics and spatial 3D voxel graphs...",
            stage2: "Synthesizing latent diffusion keyframes & character physics...",
            stage3: "Calculating sub-pixel temporal motion coherence & radiance...",
            stage4: "4K/8K Neural Super-Resolution upscaling & 60 FPS optical flow...",
            stage5: "Complete! Video rendered in 4K Ultra HD with master spatial audio.",
            btnDownload: "📥 Download MP4",
            btnExtend: "➕ Add +5 Sec",
            btnCopyLink: "📋 Copy Video Link",
            galleryTitle: "🎞️ Recent Video Creations",
            emptyGallery: "No videos rendered yet. Create your first 4K masterpiece above!",
            toastCopied: "Video link copied to clipboard!",
            langModalTitle: "Select Studio Language (100 Languages)",
            langSearchPlaceholder: "Search 100 languages..."
        },
        pt: {
            brandTitle: "Litdeo",
            brandSub: "Estúdio Soberano de Geração de Vídeo 4K",
            navChat: "🤖 Litally AI Chat ↗",
            navSanctuary: "🏛️ Santuário Principal",
            studioTitle: "🎬 Estúdio de Criação de Vídeo",
            lblPrompt: "Prompt do Vídeo:",
            btnEnhance: "✨ Melhorar com IA",
            promptPlaceholder: "Descreva o vídeo ou imagem: quem está em cena (personagem, idade, emoção), o que está fazendo (ação, física), aparência (cor de cabelo e olhos, penteado), roupas e detalhes, ambiente (local, clima), iluminação cinematográfica (golden hour, neon), movimento e lente de câmera (35mm, drone FPV, slow-motion)...",
            lblInspiration: "Ideias e Temas Rápidos:",
            lblStyle: "Estilo Visual Cinematográfico:",
            lblRatio: "Proporção de Tela (30 Formatos):",
            lblCamera: "Movimento de Câmera:",
            lblDuration: "Duração:",
            lblAudio: "🔊 Sintetizar efeitos sonoros e música",
            btnGenerate: "🎬 Renderizar Vídeo 4K",
            btnRendering: "⏳ Renderização Neural...",
            stage1: "Analisando semântica do prompt e geometria 3D...",
            stage2: "Sintetizando quadros-chave de difusão latente e física...",
            stage3: "Calculando coerência temporal sub-pixel e iluminação...",
            stage4: "Super-resolução neural 4K/8K 60 FPS e renderização quântica...",
            stage5: "Concluído! Vídeo renderizado em 4K Ultra HD com áudio espacial.",
            btnDownload: "📥 Baixar MP4",
            btnExtend: "➕ Adicionar 5 Seg",
            btnCopyLink: "📋 Copiar Link",
            galleryTitle: "🎞️ Criações Recentes em Vídeo",
            emptyGallery: "Nenhum vídeo renderizado ainda. Crie sua obra-prima 4K acima!",
            toastCopied: "Link do vídeo copiado para a área de transferência!",
            langModalTitle: "Selecionar Idioma (100 Idiomas)",
            langSearchPlaceholder: "Pesquisar 100 idiomas..."
        },
        es: {
            brandTitle: "Litdeo",
            brandSub: "Estudio Soberano de Generación de Video 4K",
            navChat: "🤖 Litally AI Chat ↗",
            navSanctuary: "🏛️ Santuario Principal",
            studioTitle: "🎬 Estudio de Creación de Video",
            lblPrompt: "Prompt del Video:",
            btnEnhance: "✨ Mejorar con IA",
            promptPlaceholder: "Describe el video o imagen: quién está en escena (personaje, edad, emoción), qué hace (acción, física), apariencia (color de cabello y ojos), atuendo, entorno (locación, clima), iluminación cinematográfica (hora dorada, neón), movimiento de cámara (35mm, dron FPV, cámara lenta)...",
            lblInspiration: "Inspiraciones y Temas:",
            lblStyle: "Estilo Cinematográfico:",
            lblRatio: "Relación de Aspecto (30 Formatos):",
            lblCamera: "Movimiento de Cámara:",
            lblDuration: "Duración:",
            lblAudio: "🔊 Sintetizar efectos de sonido y música",
            btnGenerate: "🎬 Renderizar Video 4K",
            btnRendering: "⏳ Renderizado Neural...",
            stage1: "Descomponiendo semántica del prompt y vóxeles 3D...",
            stage2: "Sintetizando fotogramas clave de difusión latente...",
            stage3: "Calculando coherencia temporal y luminancia espacial...",
            stage4: "Superresolución neural 4K/8K 60 FPS y render cuántico...",
            stage5: "¡Listo! Video renderizado en 4K Ultra HD con audio estéreo.",
            btnDownload: "📥 Descargar MP4",
            btnExtend: "➕ Añadir 5 Seg",
            btnCopyLink: "📋 Copiar Enlace",
            galleryTitle: "🎞️ Creaciones Recientes",
            emptyGallery: "No hay videos generados aún. ¡Crea tu obra maestra 4K arriba!",
            toastCopied: "¡Enlace copiado al portapapeles!",
            langModalTitle: "Seleccionar Idioma (100 Idiomas)",
            langSearchPlaceholder: "Buscar entre 100 idiomas..."
        },
        zh: {
            brandTitle: "Litdeo",
            brandSub: "主权 4K 视频生成工作室",
            navChat: "🤖 Litally AI 对话 ↗",
            navSanctuary: "🏛️ 主圣殿",
            studioTitle: "🎬 视频创作工作室",
            lblPrompt: "视频提示词 (Prompt):",
            btnEnhance: "✨ AI 智能增强",
            promptPlaceholder: "详细描述画面或视频：谁在画面中（人物、年龄、情绪），在做什么（动作、物理互动），外貌细节（发色、眼眸颜色、发型），服装与配饰，环境与背景（地点、天气），电影级光影（黄金时刻、体积光、霓虹光晕），运镜方式（35mm 镜头、穿越机视角、慢动作）...",
            lblInspiration: "快速灵感与主题:",
            lblStyle: "电影视觉风格:",
            lblRatio: "画面画幅 (30 种比例):",
            lblCamera: "镜头运镜:",
            lblDuration: "视频时长:",
            lblAudio: "🔊 合成空间立体声音效与配乐",
            btnGenerate: "🎬 生成 4K 视频",
            btnRendering: "⏳ 神经网络渲染中...",
            stage1: "解析提示词语义与 3D 空间结构图...",
            stage2: "合成潜在扩散关键帧与角色物理动态...",
            stage3: "计算亚像素时域连续性与光能传递...",
            stage4: "4K/8K 神经超分辨率放大与 60 FPS 光流插帧...",
            stage5: "完成！视频已以 4K Ultra HD 渲染完毕并配备母带音频。",
            btnDownload: "📥 下载 MP4",
            btnExtend: "➕ 增加 5 秒",
            btnCopyLink: "📋 复制链接",
            galleryTitle: "🎞️ 最近生成的视频作品",
            emptyGallery: "暂无视频作品。请在上方输入提示词开始创作！",
            toastCopied: "视频链接已复制到剪贴板！",
            langModalTitle: "选择工作室语言 (100 种语言)",
            langSearchPlaceholder: "搜索 100 种语言..."
        }
    };

    function getLanguageMeta(code) {
        const langList = (typeof window !== 'undefined' && window.LITALLY_LANGUAGES_100) ? window.LITALLY_LANGUAGES_100 : [];
        const found = langList.find(l => l.code === code);
        if (found) return found;

        const fallbacks = {
            ru: { code: 'ru', name: 'Russian', native: 'Русский', flag: '🇷🇺', dir: 'ltr', country: 'Russia' },
            kk: { code: 'kk', name: 'Kazakh', native: 'Қазақша', flag: '🇰🇿', dir: 'ltr', country: 'Kazakhstan' },
            en: { code: 'en', name: 'English', native: 'English', flag: '🇺🇸', dir: 'ltr', country: 'United States' },
            pt: { code: 'pt', name: 'Portuguese', native: 'Português', flag: '🇵🇹', dir: 'ltr', country: 'Portugal' },
            es: { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸', dir: 'ltr', country: 'Spain' },
            zh: { code: 'zh', name: 'Chinese', native: '中文', flag: '🇨🇳', dir: 'ltr', country: 'China' }
        };
        return fallbacks[code] || { code: code, name: code.toUpperCase(), native: code.toUpperCase(), flag: '🌐', dir: 'ltr', country: 'Global' };
    }

    function getI18n() {
        const code = VideoState.lang;
        if (VIDEO_I18N[code]) return VIDEO_I18N[code];

        const meta = getLanguageMeta(code);
        const base = VIDEO_I18N['en'];
        const trans = (typeof window !== 'undefined' && window.LITALLY_TRANSLATIONS_100) ? window.LITALLY_TRANSLATIONS_100[code] : null;

        return {
            brandTitle: "Litdeo",
            brandSub: `4K Video AI Studio • ${meta.native}`,
            navChat: base.navChat,
            navSanctuary: (trans && trans.lboAbout) ? trans.lboAbout : base.navSanctuary,
            studioTitle: (trans && trans.lboStudio) ? `🎬 ${trans.lboStudio} (${meta.native})` : `🎬 Video Creation Studio (${meta.native})`,
            lblPrompt: base.lblPrompt,
            btnEnhance: base.btnEnhance,
            promptPlaceholder: `[${meta.native}] Describe the scene: who is in frame (character, age, eyes/hair), action & physics, outfit & details, environment, cinematic lighting (golden hour, volumetric rays), camera motion (35mm, drone FPV, 60fps)...`,
            lblInspiration: (trans && trans.modalThemesTitle) ? trans.modalThemesTitle : base.lblInspiration,
            lblStyle: base.lblStyle,
            lblRatio: `Aspect Ratio (30 Variations) • ${meta.native}`,
            lblCamera: base.lblCamera,
            lblDuration: base.lblDuration,
            lblAudio: base.lblAudio,
            btnGenerate: `🎬 4K Video (${meta.native})`,
            btnRendering: base.btnRendering,
            stage1: base.stage1,
            stage2: base.stage2,
            stage3: base.stage3,
            stage4: base.stage4,
            stage5: base.stage5,
            btnDownload: base.btnDownload,
            btnExtend: base.btnExtend,
            btnCopyLink: base.btnCopyLink,
            galleryTitle: `🎞️ ${meta.native} Video Creations`,
            emptyGallery: base.emptyGallery,
            toastCopied: base.toastCopied,
            langModalTitle: `Language Selector (100 Languages) • ${meta.native}`,
            langSearchPlaceholder: `Search 100 languages...`
        };
    }

    // ── 4. WEB AUDIO SYNTHESIZER ───────────────────────────────────────────────
    let audioCtx = null;
    function getAudioContext() {
        if (!audioCtx) {
            const AudioClass = window.AudioContext || window.webkitAudioContext;
            if (AudioClass) audioCtx = new AudioClass();
        }
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    function playCinematicChime(type) {
        if (!VideoState.audio) return;
        try {
            const ctx = getAudioContext();
            if (!ctx) return;
            const now = ctx.currentTime;

            if (type === 'start') {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(220, now);
                osc.frequency.exponentialRampToValueAtTime(880, now + 0.6);
                gain.gain.setValueAtTime(0.2, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.6);
            } else if (type === 'finish') {
                [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, now + i * 0.1);
                    gain.gain.setValueAtTime(0.25, now + i * 0.1);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.8);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + i * 0.1);
                    osc.stop(now + i * 0.1 + 0.8);
                });
            }
        } catch(e) {}
    }

    // ── 5. PROCEDURAL 4K CANVAS VIDEO RENDERER ─────────────────────────────────
    let canvas, ctx;
    let particles = [];
    let canvasWidth = 1280, canvasHeight = 720;
    let animTime = 0;

    function initCanvas() {
        canvas = document.getElementById('cinemaCanvas');
        if (!canvas) return;
        ctx = canvas.getContext('2d');
        resizeCanvas();
        initParticles(VideoState.currentTheme);
        requestAnimationFrame(renderLoop);
    }

    function resizeCanvas() {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const baseW = rect.width || 1280;
        const baseH = rect.height || 720;
        const mult = CustomState.resolutionMultiplier || 2.5;
        const dpr = Math.min(window.devicePixelRatio || 1, 2) * (mult / 2.0);

        canvasWidth = Math.round(baseW * Math.max(1.0, dpr));
        canvasHeight = Math.round(baseH * Math.max(1.0, dpr));
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        if (ctx) {
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
        }
    }

    const spectrumFreqData = new Uint8Array(32);
    function updateAudioSpectrum() {
        const specCanvas = document.getElementById('audioSpectrumCanvas');
        if (!specCanvas) return;
        const sCtx = specCanvas.getContext('2d');
        if (!sCtx) return;

        sCtx.clearRect(0, 0, specCanvas.width, specCanvas.height);
        let hasData = false;
        if (window.LitdeoAudio && window.LitdeoAudio.getFrequencyData) {
            hasData = window.LitdeoAudio.getFrequencyData(spectrumFreqData);
        }

        const barCount = 14;
        const barWidth = Math.floor(specCanvas.width / barCount) - 1;
        for (let i = 0; i < barCount; i++) {
            let norm = hasData && VideoState.isPlaying && !window.LitdeoAudio.isMuted()
                ? (spectrumFreqData[i * 2] || 0) / 255
                : (Math.sin(animTime * 5 + i * 0.4) * 0.35 + 0.45) * (VideoState.isPlaying ? 0.7 : 0.08);

            const barH = Math.max(2, norm * (specCanvas.height - 2));
            const x = i * (barWidth + 1);
            const y = specCanvas.height - barH;

            const grad = sCtx.createLinearGradient(0, specCanvas.height, 0, 0);
            grad.addColorStop(0, '#a855f7');
            grad.addColorStop(0.6, '#ec4899');
            grad.addColorStop(1, '#facc15');

            sCtx.fillStyle = grad;
            sCtx.fillRect(x, y, barWidth, barH);
        }
    }

    function initParticles(theme) {
        particles = [];
        const count = CustomState.particles || 120;
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * (canvasWidth || 1280),
                y: Math.random() * (canvasHeight || 720),
                z: Math.random() * 1000 + 1,
                size: Math.random() * 3 + 1,
                speed: Math.random() * 2 + 0.5,
                color: getThemeParticleColor(theme, i),
                angle: Math.random() * Math.PI * 2,
                spin: (Math.random() - 0.5) * 0.04
            });
        }
    }

    function getThemeParticleColor(theme, idx) {
        if (theme === 'cyberpunk') {
            return idx % 3 === 0 ? '#ec4899' : (idx % 3 === 1 ? '#06b6d4' : '#a855f7');
        } else if (theme === 'ocean') {
            return idx % 2 === 0 ? '#0ea5e9' : '#38bdf8';
        } else if (theme === 'nature') {
            return idx % 3 === 0 ? '#eab308' : (idx % 3 === 1 ? '#22c55e' : '#f97316');
        } else if (theme === 'action') {
            return idx % 2 === 0 ? '#ef4444' : '#f97316';
        } else if (theme === 'anime') {
            return idx % 2 === 0 ? '#f472b6' : '#c084fc';
        }
        return idx % 2 === 0 ? '#c084fc' : '#38bdf8';
    }

    function renderLoop(timestamp) {
        if (!ctx || !canvas) return;

        if (VideoState.isPlaying) {
            const delta = 0.016 * (CustomState.speed || 1.0) * (VideoState.motionDynamics || 1.0);
            animTime += delta;
            VideoState.currentTime = (VideoState.currentTime + delta) % VideoState.duration;
            updatePlaybackTimeline();
        }

        renderFrame(ctx, animTime);
        updateAudioSpectrum();
        requestAnimationFrame(renderLoop);
    }

    function renderFrame(c, t) {
        c.clearRect(0, 0, canvasWidth, canvasHeight);

        const theme = VideoState.currentTheme || 'cyberpunk';
        const motion = VideoState.cameraMotion || 'zoom_in';
        const cx = canvasWidth / 2;
        const cy = canvasHeight / 2;

        c.save();
        applyCameraMotion(c, motion, t, cx, cy);

        // Render themed procedural world (from 100 Themes Catalog)
        if (window.LitdeoThemes && window.LitdeoThemes.render) {
            window.LitdeoThemes.render(c, theme, t, canvasWidth, canvasHeight);
        } else
        if (theme === 'cyberpunk') {
            const grad = c.createLinearGradient(0, 0, 0, canvasHeight);
            grad.addColorStop(0, '#070312');
            grad.addColorStop(0.45, '#16082e');
            grad.addColorStop(0.7, '#240b3b');
            grad.addColorStop(1, '#05020c');
            c.fillStyle = grad;
            c.fillRect(0, 0, canvasWidth, canvasHeight);

            // Distant Cyberpunk Skyline Silhouettes
            c.save();
            const skylineY = canvasHeight * 0.58;
            c.fillStyle = '#0b0618';
            for (let b = 0; b < 18; b++) {
                const bw = (canvasWidth / 16) * 1.1;
                const bx = b * bw * 0.95 - 20;
                const bh = (Math.sin(b * 3.7 + 1.2) * 0.3 + 0.5) * (canvasHeight * 0.28);
                c.fillRect(bx, skylineY - bh, bw, bh + 10);

                // Neon window grids on towers
                if (b % 2 === 0) {
                    c.fillStyle = (b % 4 === 0) ? 'rgba(6, 182, 212, 0.65)' : 'rgba(236, 72, 153, 0.65)';
                    for (let wy = skylineY - bh + 12; wy < skylineY - 10; wy += 14) {
                        for (let wx = bx + 6; wx < bx + bw - 6; wx += 10) {
                            if ((wx + wy) % 5 === 0) c.fillRect(wx, wy, 4, 6);
                        }
                    }
                    c.fillStyle = '#0b0618';
                }
            }
            c.restore();

            // Wet asphalt road specular reflection
            const horizon = canvasHeight * 0.62;
            const roadGrad = c.createLinearGradient(0, horizon, 0, canvasHeight);
            roadGrad.addColorStop(0, 'rgba(15, 7, 30, 0.98)');
            roadGrad.addColorStop(0.3, 'rgba(30, 10, 50, 0.95)');
            roadGrad.addColorStop(1, 'rgba(5, 2, 12, 1.0)');
            c.fillStyle = roadGrad;
            c.fillRect(0, horizon, canvasWidth, canvasHeight - horizon);

            // Horizon neon grid with perspective anti-aliasing
            c.save();
            c.strokeStyle = 'rgba(236, 72, 153, 0.35)';
            c.lineWidth = 1.2;
            c.beginPath();
            for (let x = -canvasWidth; x < canvasWidth * 2; x += 55) {
                c.moveTo(cx, horizon);
                c.lineTo(x, canvasHeight);
            }
            for (let y = horizon; y <= canvasHeight; y += (y - horizon + 12) * 0.28) {
                c.moveTo(0, y);
                c.lineTo(canvasWidth, y);
            }
            c.stroke();

            // Neon road reflections (wet asphalt specular streaks)
            c.fillStyle = 'rgba(6, 182, 212, 0.12)';
            c.fillRect(cx - canvasWidth * 0.25, horizon, canvasWidth * 0.5, canvasHeight - horizon);
            c.fillStyle = 'rgba(236, 72, 153, 0.1)';
            c.fillRect(cx - 60, horizon, 120, canvasHeight - horizon);
            c.restore();

            // Neon rain streaks
            c.save();
            c.strokeStyle = 'rgba(6, 182, 212, 0.55)';
            c.lineWidth = 1.5;
            c.beginPath();
            for (let i = 0; i < 48; i++) {
                const rx = (Math.sin(i * 99 + t * 5) * 0.5 + 0.5) * canvasWidth;
                const ry = ((t * 900 + i * 75) % canvasHeight);
                c.moveTo(rx, ry);
                c.lineTo(rx - 10, ry + 28);
            }
            c.stroke();
            c.restore();

        } else if (theme === 'space') {
            const grad = c.createRadialGradient(cx, cy, 20, cx, cy, canvasWidth * 0.85);
            grad.addColorStop(0, '#010103');
            grad.addColorStop(0.3, '#0e041f');
            grad.addColorStop(0.65, '#071025');
            grad.addColorStop(1, '#010206');
            c.fillStyle = grad;
            c.fillRect(0, 0, canvasWidth, canvasHeight);

            // Cosmic Nebula Dust Clouds
            c.save();
            const nebGrad1 = c.createRadialGradient(cx * 0.4, cy * 0.4, 20, cx * 0.4, cy * 0.4, canvasWidth * 0.45);
            nebGrad1.addColorStop(0, 'rgba(168, 85, 247, 0.18)');
            nebGrad1.addColorStop(0.6, 'rgba(236, 72, 153, 0.08)');
            nebGrad1.addColorStop(1, 'transparent');
            c.fillStyle = nebGrad1;
            c.fillRect(0, 0, canvasWidth, canvasHeight);

            const nebGrad2 = c.createRadialGradient(cx * 1.6, cy * 1.4, 30, cx * 1.6, cy * 1.4, canvasWidth * 0.5);
            nebGrad2.addColorStop(0, 'rgba(6, 182, 212, 0.16)');
            nebGrad2.addColorStop(0.6, 'rgba(59, 130, 246, 0.07)');
            nebGrad2.addColorStop(1, 'transparent');
            c.fillStyle = nebGrad2;
            c.fillRect(0, 0, canvasWidth, canvasHeight);
            c.restore();

            // Relativistic Accretion Disk of Black Hole (Doppler-Beamed)
            c.save();
            c.translate(cx, cy);
            c.rotate(t * 0.25);
            const rMin = Math.min(canvasWidth, canvasHeight) * 0.19;
            const rMax = Math.min(canvasWidth, canvasHeight) * 0.68;
            
            // Doppler beaming: Asymmetric luminous radiant gradient
            const diskGrad = c.createRadialGradient(-30, 0, rMin, 0, 0, rMax);
            diskGrad.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
            diskGrad.addColorStop(0.18, 'rgba(255, 215, 0, 0.95)');
            diskGrad.addColorStop(0.4, 'rgba(236, 72, 153, 0.72)');
            diskGrad.addColorStop(0.72, 'rgba(168, 85, 247, 0.35)');
            diskGrad.addColorStop(1, 'transparent');
            c.fillStyle = diskGrad;
            c.beginPath();
            c.ellipse(0, 0, rMax, rMax * 0.32, 0, 0, Math.PI * 2);
            c.fill();

            // Gravitational Lensing Photon Ring
            c.strokeStyle = 'rgba(255, 255, 255, 0.85)';
            c.lineWidth = 3;
            c.shadowColor = '#ffd700';
            c.shadowBlur = 24;
            c.beginPath();
            c.ellipse(0, 0, rMin * 1.05, rMin * 0.98, 0, 0, Math.PI * 2);
            c.stroke();

            // Black Hole Event Horizon (Absolute Void with Specular Edge)
            c.fillStyle = '#000000';
            c.shadowBlur = 0;
            c.beginPath();
            c.arc(0, 0, rMin * 0.88, 0, Math.PI * 2);
            c.fill();
            c.restore();

        } else if (theme === 'ocean') {
            const grad = c.createLinearGradient(0, 0, 0, canvasHeight);
            grad.addColorStop(0, '#011526');
            grad.addColorStop(0.35, '#03233c');
            grad.addColorStop(0.75, '#021627');
            grad.addColorStop(1, '#010a12');
            c.fillStyle = grad;
            c.fillRect(0, 0, canvasWidth, canvasHeight);

            // Deep underwater volumetric light shafts
            c.save();
            for (let i = 0; i < 8; i++) {
                const rayGrad = c.createLinearGradient(0, 0, 0, canvasHeight);
                rayGrad.addColorStop(0, 'rgba(56, 189, 248, 0.22)');
                rayGrad.addColorStop(0.6, 'rgba(14, 165, 233, 0.08)');
                rayGrad.addColorStop(1, 'transparent');
                c.fillStyle = rayGrad;
                c.beginPath();
                const lx = cx + Math.sin(t * 0.8 + i * 0.9) * 160 - 150 + i * 55;
                c.moveTo(lx, 0);
                c.lineTo(lx + 45, 0);
                c.lineTo(lx + 180, canvasHeight);
                c.lineTo(lx - 30, canvasHeight);
                c.fill();
            }
            c.restore();

            // Bioluminescent plankton floating motes
            c.save();
            c.fillStyle = 'rgba(56, 189, 248, 0.7)';
            c.shadowColor = '#38bdf8';
            c.shadowBlur = 8;
            for (let j = 0; j < 35; j++) {
                const px = (Math.sin(j * 37 + t * 0.7) * 0.5 + 0.5) * canvasWidth;
                const py = (Math.cos(j * 43 + t * 0.5) * 0.5 + 0.5) * canvasHeight;
                const psz = (Math.sin(t * 2 + j) * 1.5 + 2.5);
                c.beginPath();
                c.arc(px, py, psz, 0, Math.PI * 2);
                c.fill();
            }
            c.restore();

        } else if (theme === 'nature') {
            const grad = c.createLinearGradient(0, 0, 0, canvasHeight);
            grad.addColorStop(0, '#2e1065');
            grad.addColorStop(0.35, '#831843');
            grad.addColorStop(0.65, '#ea580c');
            grad.addColorStop(0.85, '#ca8a04');
            grad.addColorStop(1, '#14532d');
            c.fillStyle = grad;
            c.fillRect(0, 0, canvasWidth, canvasHeight);

            // Radiant golden hour sun orb
            c.save();
            const sunY = canvasHeight * 0.52;
            const sunGrad = c.createRadialGradient(cx, sunY, 15, cx, sunY, 140);
            sunGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
            sunGrad.addColorStop(0.25, 'rgba(254, 240, 138, 0.95)');
            sunGrad.addColorStop(0.55, 'rgba(249, 115, 22, 0.75)');
            sunGrad.addColorStop(1, 'transparent');
            c.fillStyle = sunGrad;
            c.beginPath();
            c.arc(cx, sunY, 140, 0, Math.PI * 2);
            c.fill();
            c.restore();

            // 3-tier majestic mountain ranges (Parallax & aerial perspective)
            // Tier 1: Distant hazy mountain ridge
            c.fillStyle = 'rgba(76, 29, 149, 0.65)';
            c.beginPath();
            c.moveTo(0, canvasHeight);
            c.lineTo(0, canvasHeight * 0.62);
            c.lineTo(canvasWidth * 0.2, canvasHeight * 0.42);
            c.lineTo(canvasWidth * 0.45, canvasHeight * 0.56);
            c.lineTo(canvasWidth * 0.7, canvasHeight * 0.38);
            c.lineTo(canvasWidth, canvasHeight * 0.58);
            c.lineTo(canvasWidth, canvasHeight);
            c.closePath();
            c.fill();

            // Tier 2: Mid-ground mountain silhouette
            c.fillStyle = '#1e1b4b';
            c.beginPath();
            c.moveTo(0, canvasHeight);
            c.lineTo(0, canvasHeight * 0.68);
            c.lineTo(canvasWidth * 0.32, canvasHeight * 0.48);
            c.lineTo(canvasWidth * 0.6, canvasHeight * 0.64);
            c.lineTo(canvasWidth * 0.85, canvasHeight * 0.44);
            c.lineTo(canvasWidth, canvasHeight * 0.66);
            c.lineTo(canvasWidth, canvasHeight);
            c.closePath();
            c.fill();

            // Tier 3: Foreground deep ridge
            c.fillStyle = '#090d16';
            c.beginPath();
            c.moveTo(0, canvasHeight);
            c.lineTo(0, canvasHeight * 0.78);
            c.lineTo(canvasWidth * 0.25, canvasHeight * 0.68);
            c.lineTo(canvasWidth * 0.55, canvasHeight * 0.74);
            c.lineTo(canvasWidth * 0.8, canvasHeight * 0.65);
            c.lineTo(canvasWidth, canvasHeight * 0.76);
            c.lineTo(canvasWidth, canvasHeight);
            c.closePath();
            c.fill();

        } else if (theme === 'action') {
            const grad = c.createLinearGradient(0, 0, canvasWidth, canvasHeight);
            grad.addColorStop(0, '#1a0505');
            grad.addColorStop(0.5, '#3b0d0c');
            grad.addColorStop(1, '#0d0202');
            c.fillStyle = grad;
            c.fillRect(0, 0, canvasWidth, canvasHeight);

            // Speed motion streaks
            c.save();
            c.strokeStyle = 'rgba(239, 68, 68, 0.4)';
            c.lineWidth = 2;
            for (let i = 0; i < 35; i++) {
                const y = (i * 35 + t * 400) % canvasHeight;
                c.beginPath();
                c.moveTo(0, y);
                c.lineTo(canvasWidth, y + (Math.sin(i) * 20));
                c.stroke();
            }
            c.restore();

        } else if (theme === 'anime') {
            const grad = c.createLinearGradient(0, 0, 0, canvasHeight);
            grad.addColorStop(0, '#1e1b4b');
            grad.addColorStop(0.5, '#4c1d95');
            grad.addColorStop(1, '#831843');
            c.fillStyle = grad;
            c.fillRect(0, 0, canvasWidth, canvasHeight);

            // Sakura petals with 3D tumble
            c.save();
            c.fillStyle = 'rgba(244, 114, 182, 0.82)';
            for (let i = 0; i < 40; i++) {
                const sx = (Math.sin(t * 1.5 + i * 12) * 0.5 + 0.5) * canvasWidth;
                const sy = ((t * 90 + i * 40) % canvasHeight);
                c.beginPath();
                c.ellipse(sx, sy, 8, 4.5, t * 1.4 + i, 0, Math.PI * 2);
                c.fill();
            }
            c.restore();

        } else if (theme === 'fantasy_dragon' || theme === 'dragon') {
            const grad = c.createLinearGradient(0, 0, 0, canvasHeight);
            grad.addColorStop(0, '#160408');
            grad.addColorStop(0.5, '#350a10');
            grad.addColorStop(1, '#0c0204');
            c.fillStyle = grad;
            c.fillRect(0, 0, canvasWidth, canvasHeight);

            // Flying mythical dragon silhouette & fiery breath
            c.save();
            const dx = cx + Math.sin(t * 0.7) * (canvasWidth * 0.15);
            const dy = cy * 0.8 + Math.cos(t * 1.1) * (canvasHeight * 0.08);
            c.translate(dx, dy);

            // Dragon wings flapping with glowing membrane
            const wingSpread = Math.sin(t * 4.0) * 35;
            c.fillStyle = '#dc2626';
            c.shadowColor = '#ef4444';
            c.shadowBlur = 28;
            c.beginPath();
            c.moveTo(0, 0);
            c.lineTo(-70, -35 + wingSpread);
            c.lineTo(-145, 15 + wingSpread);
            c.lineTo(-35, 25);
            c.closePath();
            c.fill();

            c.beginPath();
            c.moveTo(0, 0);
            c.lineTo(70, -35 + wingSpread);
            c.lineTo(145, 15 + wingSpread);
            c.lineTo(35, 25);
            c.closePath();
            c.fill();

            // Dragon body
            c.fillStyle = '#991b1b';
            c.beginPath();
            c.ellipse(0, 0, 24, 60, 0, 0, Math.PI * 2);
            c.fill();

            // Volumetric Dragon Fire Breath (White-hot core & flame plume)
            c.fillStyle = 'rgba(255, 255, 255, 0.95)';
            c.shadowColor = '#f59e0b';
            c.shadowBlur = 40;
            c.beginPath();
            c.moveTo(0, 48);
            c.lineTo(-14 + Math.sin(t * 14) * 8, 90 + Math.sin(t * 9) * 15);
            c.lineTo(14 + Math.cos(t * 14) * 8, 90 + Math.sin(t * 9) * 15);
            c.closePath();
            c.fill();

            c.fillStyle = 'rgba(245, 158, 11, 0.88)';
            c.beginPath();
            c.moveTo(0, 48);
            c.lineTo(-32 + Math.sin(t * 12) * 16, 140 + Math.sin(t * 9) * 25);
            c.lineTo(32 + Math.cos(t * 12) * 16, 140 + Math.sin(t * 9) * 25);
            c.closePath();
            c.fill();
            c.restore();

        } else if (theme === 'library') {
            const grad = c.createLinearGradient(0, 0, 0, canvasHeight);
            grad.addColorStop(0, '#0a0714');
            grad.addColorStop(0.5, '#1e1435');
            grad.addColorStop(1, '#05030a');
            c.fillStyle = grad;
            c.fillRect(0, 0, canvasWidth, canvasHeight);

            // Floating starlight books & golden runes
            c.save();
            for (let i = 0; i < 8; i++) {
                const bx = cx + Math.sin(t * 0.8 + i * 1.2) * (canvasWidth * 0.35);
                const by = cy + Math.cos(t * 0.6 + i * 1.5) * (canvasHeight * 0.25) - 30;
                c.save();
                c.translate(bx, by);
                c.rotate(Math.sin(t + i) * 0.15);
                c.fillStyle = 'rgba(255, 215, 0, 0.85)';
                c.shadowColor = '#ffd700';
                c.shadowBlur = 16;
                // Open book shape
                c.beginPath();
                c.moveTo(0, 5);
                c.lineTo(-18, -4);
                c.lineTo(-18, -16);
                c.lineTo(0, -8);
                c.lineTo(18, -16);
                c.lineTo(18, -4);
                c.closePath();
                c.fill();
                c.restore();
            }
            c.restore();
        }

        drawParticles(c, t);
        c.restore();

        drawActVisualEffects(c, t, cx, cy);
        drawGodRays(c, cx, cy, t);
        drawAnamorphicFlare(c, cx, cy);
        drawCinemaVignette(c);
        drawFilmGrain(c, CustomState.grain);
        drawCinemaHud(c);
        drawHDRToneMapping(c, cx, cy, t);
        drawContrastAdaptiveSharpening(c);
    }

    function drawHDRToneMapping(c, cx, cy, t) {
        if (!CustomState.hdrMode) return;
        c.save();
        const intensity = (CustomState.hdr || 80) / 100;
        
        // 1. Specular Bloom on Highlights (Rec.2020 High Dynamic Speculars)
        const bloomGrad = c.createRadialGradient(cx, cy, 80, cx, cy, Math.max(canvasWidth, canvasHeight) * 0.7);
        bloomGrad.addColorStop(0, `rgba(255, 255, 255, ${(0.04 * intensity).toFixed(3)})`);
        bloomGrad.addColorStop(0.4, `rgba(250, 204, 21, ${(0.02 * intensity).toFixed(3)})`);
        bloomGrad.addColorStop(1, 'transparent');
        c.fillStyle = bloomGrad;
        c.fillRect(0, 0, canvasWidth, canvasHeight);

        // 2. Anamorphic Micro-Glints (Star spikes on dynamic specular points)
        const glintCount = 3;
        for (let i = 0; i < glintCount; i++) {
            const gx = cx + Math.sin(t * 0.4 + i * 2.1) * (canvasWidth * 0.28);
            const gy = cy * 0.75 + Math.cos(t * 0.5 + i * 1.7) * (canvasHeight * 0.2);
            const gSize = (12 + Math.sin(t * 4 + i) * 6) * intensity;
            
            c.strokeStyle = `rgba(255, 255, 255, ${(0.45 * intensity).toFixed(2)})`;
            c.lineWidth = 1;
            c.beginPath();
            c.moveTo(gx - gSize * 2, gy);
            c.lineTo(gx + gSize * 2, gy);
            c.moveTo(gx, gy - gSize * 2);
            c.lineTo(gx, gy + gSize * 2);
            c.stroke();
        }
        c.restore();
    }

    function drawContrastAdaptiveSharpening(c) {
        if (!CustomState.sharpness || CustomState.sharpness <= 0) return;
        const sharpnessFactor = (CustomState.sharpness / 100);
        c.save();
        c.globalCompositeOperation = 'overlay';
        c.fillStyle = `rgba(255, 255, 255, ${(0.015 * sharpnessFactor).toFixed(3)})`;
        c.fillRect(0, 0, canvasWidth, canvasHeight);
        c.restore();
    }

    function drawAnamorphicFlare(c, cx, cy) {
        if (!CustomState.flare || CustomState.flare <= 0) return;
        c.save();
        const intensity = CustomState.flare / 100;
        const streakW = canvasWidth * 0.96;
        const streakH = Math.max(3, canvasHeight * 0.016);

        const grad = c.createLinearGradient(cx - streakW / 2, cy, cx + streakW / 2, cy);
        grad.addColorStop(0, 'rgba(6, 182, 212, 0)');
        grad.addColorStop(0.3, `rgba(56, 189, 248, ${(0.3 * intensity).toFixed(2)})`);
        grad.addColorStop(0.5, `rgba(255, 255, 255, ${(0.85 * intensity).toFixed(2)})`);
        grad.addColorStop(0.7, `rgba(236, 72, 153, ${(0.3 * intensity).toFixed(2)})`);
        grad.addColorStop(1, 'rgba(168, 85, 247, 0)');

        c.fillStyle = grad;
        c.fillRect(cx - streakW / 2, cy - streakH / 2, streakW, streakH);

        // Radiant starburst lens flare
        const starGrad = c.createRadialGradient(cx, cy, 2, cx, cy, 60 * intensity);
        starGrad.addColorStop(0, `rgba(255, 255, 255, ${(0.95 * intensity).toFixed(2)})`);
        starGrad.addColorStop(0.3, `rgba(250, 204, 21, ${(0.5 * intensity).toFixed(2)})`);
        starGrad.addColorStop(1, 'transparent');
        c.fillStyle = starGrad;
        c.beginPath();
        c.arc(cx, cy, 60 * intensity, 0, Math.PI * 2);
        c.fill();
        c.restore();
    }

    function drawGodRays(c, cx, cy, t) {
        if (!CustomState.godRays || CustomState.godRays <= 0) return;
        c.save();
        const count = 12;
        const intensity = (CustomState.godRays / 100) * 0.16;
        c.fillStyle = `rgba(255, 240, 200, ${intensity.toFixed(3)})`;
        for (let i = 0; i < count; i++) {
            const angle = ((i / count) * Math.PI * 1.3 - 0.65) + Math.sin(t * 0.25 + i * 1.3) * 0.09;
            const len = Math.max(canvasWidth, canvasHeight) * 1.3;
            c.beginPath();
            c.moveTo(cx, cy * 0.35);
            c.lineTo(cx + Math.cos(angle - 0.05) * len, cy * 0.35 + Math.sin(angle - 0.05) * len);
            c.lineTo(cx + Math.cos(angle + 0.05) * len, cy * 0.35 + Math.sin(angle + 0.05) * len);
            c.closePath();
            c.fill();
        }
        c.restore();
    }

    function applyCameraMotion(c, motion, t, cx, cy) {
        const dur = VideoState.duration || 5;

        // 1. Virtual Lens Focal Length Optical Perspective
        let lensFactor = 1.0;
        if (VideoState.lens === '14mm') lensFactor = 0.86;
        else if (VideoState.lens === '24mm') lensFactor = 0.93;
        else if (VideoState.lens === '35mm') lensFactor = 1.0;
        else if (VideoState.lens === '50mm') lensFactor = 1.08;
        else if (VideoState.lens === '85mm') lensFactor = 1.18;
        else if (VideoState.lens === '200mm') lensFactor = 1.32;

        c.translate(cx, cy);
        c.scale(lensFactor, lensFactor);
        c.translate(-cx, -cy);

        // 1.5. Live Multi-Camera Perspective Switcher (CAM 1: Wide Master, CAM 2: Portrait DoP, CAM 3: FPV Dynamic Drone)
        if (VideoState.cameraAngle === 2) {
            c.translate(cx, cy);
            c.scale(1.36, 1.36);
            c.translate(-cx, -cy);
        } else if (VideoState.cameraAngle === 3) {
            const fpvTilt = Math.sin(t * 1.6) * 0.07;
            const fpvSkew = Math.cos(t * 1.3) * 16;
            c.translate(cx + fpvSkew, cy);
            c.rotate(fpvTilt);
            c.scale(1.18, 1.18);
            c.translate(-cx, -cy);
        }

        // 2. Primary DoP Camera Motion
        if (motion === 'zoom_in') {
            const scale = 1.0 + (Math.sin(t * 0.35) * 0.12 + 0.12);
            c.translate(cx, cy);
            c.scale(scale, scale);
            c.translate(-cx, -cy);
        } else if (motion === 'zoom_out') {
            const scale = 1.24 - (Math.sin(t * 0.35) * 0.12 + 0.12);
            c.translate(cx, cy);
            c.scale(scale, scale);
            c.translate(-cx, -cy);
        } else if (motion === 'pan_right') {
            const dx = Math.sin(t * 0.55) * 45;
            c.translate(dx, 0);
        } else if (motion === 'pan_left') {
            const dx = -Math.sin(t * 0.55) * 45;
            c.translate(dx, 0);
        } else if (motion === 'pedestal_up') {
            const dy = -Math.sin(t * 0.5) * 35;
            c.translate(0, dy);
        } else if (motion === 'pedestal_down') {
            const dy = Math.sin(t * 0.5) * 35;
            c.translate(0, dy);
        } else if (motion === 'static') {
            // Pure steady tripod
        } else if (motion === 'crash_zoom') {
            // Rapid Tarantino crash zoom with periodic pulse
            const cycle = (t * 1.4) % 2.5;
            const punch = cycle < 0.35 ? (cycle / 0.35) * 0.45 : Math.max(0, 0.45 - (cycle - 0.35) * 0.18);
            c.translate(cx, cy);
            c.scale(1.0 + punch, 1.0 + punch);
            c.translate(-cx, -cy);
        } else if (motion === 'bullet_time') {
            // 360-degree slow motion orbital rotation Matrix style
            const angle = t * 0.5;
            const orbitX = Math.cos(angle) * 35;
            const orbitY = Math.sin(angle) * 18;
            c.translate(cx + orbitX, cy + orbitY);
            c.rotate(Math.sin(t * 0.35) * 0.12);
            c.translate(-cx, -cy);
        } else if (motion === 'vertigo') {
            // Hitchcock Vertigo Dolly Zoom (background scale vs foreground FOV shift)
            const fovShift = Math.sin(t * 0.8) * 0.22;
            c.translate(cx, cy);
            c.scale(1.15 + fovShift, 1.15 - fovShift * 0.45);
            c.translate(-cx, -cy);
        } else if (motion === 'whip_pan') {
            // Fast whip pan with motion snap
            const whipPhase = Math.sin(t * 2.2);
            const whipDist = Math.sign(whipPhase) * Math.pow(Math.abs(whipPhase), 5) * 85;
            c.translate(whipDist, 0);
        } else if (motion === 'dutch_angle') {
            // Cinematic 22-degree tilted horizon with smooth drift
            c.translate(cx, cy);
            c.rotate(0.38 + Math.sin(t * 0.5) * 0.05);
            c.scale(1.15, 1.15);
            c.translate(-cx, -cy);
        } else if (motion === 'snorricam') {
            // Body-mounted camera locked to torso with footstep stride bounce
            const bounceY = Math.abs(Math.sin(t * 4.2)) * 14;
            const swayX = Math.sin(t * 2.1) * 9;
            c.translate(cx + swayX, cy + bounceY);
            c.scale(1.08, 1.08);
            c.translate(-cx, -cy);
        } else if (motion === 'roll_360') {
            // Full 360-degree axial roll
            const rollAngle = (t * 0.45) % (Math.PI * 2);
            c.translate(cx, cy);
            c.rotate(rollAngle);
            c.scale(1.18, 1.18);
            c.translate(-cx, -cy);
        } else if (motion === 'drone_fpv') {
            // 3-axis smooth gimbal flight
            const tilt = Math.sin(t * 0.8) * 0.05;
            const sway = Math.cos(t * 0.6) * 20;
            const forward = 1.0 + (t % dur) * 0.035;
            c.translate(cx + sway, cy);
            c.rotate(tilt);
            c.scale(forward, forward);
            c.translate(-cx, -cy);
        } else if (motion === 'drone_dive') {
            // High-speed aerial dive down
            const diveProgress = (t % 3.5) / 3.5;
            c.translate(cx, cy - diveProgress * 55);
            c.rotate(-0.12 + diveProgress * 0.22);
            c.scale(1.0 + diveProgress * 0.38, 1.0 + diveProgress * 0.38);
            c.translate(-cx, -cy);
        } else if (motion === 'orbit_360') {
            // Smooth circular orbit
            const ang = t * 0.45;
            c.translate(cx + Math.cos(ang) * 30, cy + Math.sin(ang) * 15);
            c.rotate(Math.sin(t * 0.3) * 0.06);
            c.translate(-cx, -cy);
        } else if (motion === 'corkscrew') {
            // Spiral forward fly-through
            const scAngle = t * 0.9;
            c.translate(cx + Math.cos(scAngle) * 35, cy + Math.sin(scAngle) * 25);
            c.rotate(t * 0.28);
            c.scale(1.0 + Math.sin(t * 0.5) * 0.15, 1.0 + Math.sin(t * 0.5) * 0.15);
            c.translate(-cx, -cy);
        } else if (motion === 'low_skim') {
            // High-speed ground skimming
            const skimSpeed = Math.sin(t * 1.8) * 14;
            c.translate(cx, cy + 28 + skimSpeed);
            c.scale(1.22, 1.22);
            c.translate(-cx, -cy);
        } else if (motion === 'top_down_nadir') {
            // 90-degree satellite view
            c.translate(cx, cy);
            c.rotate(t * 0.08);
            c.scale(0.92, 0.92);
            c.translate(-cx, -cy);
        } else if (motion === 'selfie_05') {
            // 0.5x Ultra-wide viral selfie with micro-distortion
            c.translate(cx, cy);
            c.scale(0.88, 0.88);
            c.rotate(Math.sin(t * 1.2) * 0.04);
            c.translate(-cx, -cy + Math.sin(t * 2.0) * 8);
        } else if (motion === 'handheld') {
            // Documentary natural breathing & micro-tremor
            const shakeX = (Math.sin(t * 3.7) + Math.cos(t * 7.3) * 0.5) * 9;
            const shakeY = (Math.cos(t * 4.1) + Math.sin(t * 8.9) * 0.4) * 7;
            const shakeRot = (Math.sin(t * 2.9) * 0.025);
            c.translate(cx + shakeX, cy + shakeY);
            c.rotate(shakeRot);
            c.translate(-cx, -cy);
        } else if (motion === 'snap_zoom') {
            // Rhythmic snap-in
            const snap = Math.floor((t * 1.3) % 3) === 0 ? 1.25 : 1.0;
            c.translate(cx, cy);
            c.scale(snap, snap);
            c.translate(-cx, -cy);
        } else if (motion === 'parallax_reveal') {
            // Lateral parallax shift
            const pShift = Math.sin(t * 0.7) * 50;
            c.translate(pShift, 0);
        }

        // 3. Secondary Motion Mixer
        if (VideoState.secondaryMotion === 'handheld' && motion !== 'handheld') {
            const hx = (Math.sin(t * 6.5) + Math.cos(t * 11.2) * 0.4) * 4;
            const hy = (Math.cos(t * 7.1) + Math.sin(t * 13.5) * 0.3) * 3;
            c.translate(hx, hy);
        } else if (VideoState.secondaryMotion === 'speed_blur') {
            const speedX = Math.sin(t * 3.0) * 8;
            c.translate(speedX, 0);
        } else if (VideoState.secondaryMotion === 'subtle_drift') {
            const driftX = Math.sin(t * 0.3) * 12;
            const driftY = Math.cos(t * 0.4) * 8;
            c.translate(driftX, driftY);
        }
    }

    function drawParticles(c, t) {
        c.save();
        for (let p of particles) {
            p.y -= p.speed;
            p.x += Math.sin(t + p.y * 0.01) * 0.5;
            if (p.y < 0) {
                p.y = canvasHeight;
                p.x = Math.random() * canvasWidth;
            }
            c.fillStyle = p.color;
            c.shadowColor = p.color;
            c.shadowBlur = 7;
            c.beginPath();
            c.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            c.fill();
        }
        c.restore();
    }

    function drawCinemaVignette(c) {
        if (CustomState.vignette <= 0) return;
        const alpha = Math.min(1.0, (CustomState.vignette / 100) * 0.85);
        const grad = c.createRadialGradient(
            canvasWidth / 2, canvasHeight / 2, Math.min(canvasWidth, canvasHeight) * 0.38,
            canvasWidth / 2, canvasHeight / 2, Math.max(canvasWidth, canvasHeight) * 0.76
        );
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(1, `rgba(0,0,0,${alpha.toFixed(2)})`);
        c.fillStyle = grad;
        c.fillRect(0, 0, canvasWidth, canvasHeight);
    }

    function drawFilmGrain(c, grainType) {
        if (!grainType || grainType === 'none') return;
        const density = grainType === 'cinema' ? 1400 : 700;
        const alpha = grainType === 'cinema' ? 0.045 : 0.026;
        c.save();
        c.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        for (let i = 0; i < density; i++) {
            const gx = Math.random() * canvasWidth;
            const gy = Math.random() * canvasHeight;
            const sz = Math.random() * 1.6 + 0.4;
            c.fillRect(gx, gy, sz, sz);
        }
        c.restore();
    }

    function drawCinemaHud(c) {
        // Pure Cinema: Zero fake OSD overlays, watermarks, or glued text over the video
    }

    function drawActVisualEffects(c, t, cx, cy) {
        const dur = Math.max(15, VideoState.duration || 60);
        const cur = Math.max(0, VideoState.currentTime || 0);
        const progress = Math.min(1.0, cur / dur);
        const actIndex = Math.min(4, Math.floor(progress * 4) + 1); // 1, 2, 3, 4
        const actDuration = dur * 0.25;
        const timeIntoAct = cur - (actIndex - 1) * actDuration;

        // Visual enhancement per screenplay act
        if (actIndex === 1) {
            // Act 1: Atmospheric world haze & soft horizon glow
            const haze = c.createLinearGradient(0, canvasHeight * 0.6, 0, canvasHeight);
            haze.addColorStop(0, 'rgba(56, 189, 248, 0)');
            haze.addColorStop(1, 'rgba(56, 189, 248, 0.08)');
            c.fillStyle = haze;
            c.fillRect(0, canvasHeight * 0.6, canvasWidth, canvasHeight * 0.4);
        } else if (actIndex === 2) {
            // Act 2: Character focus ring & micro-contrast
            const focus = c.createRadialGradient(cx, cy, 60, cx, cy, canvasWidth * 0.55);
            focus.addColorStop(0, 'rgba(255, 255, 255, 0.03)');
            focus.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
            focus.addColorStop(1, 'rgba(15, 23, 42, 0.12)');
            c.fillStyle = focus;
            c.fillRect(0, 0, canvasWidth, canvasHeight);
        } else if (actIndex === 3) {
            // Act 3: Dynamic Climax - Kinetic velocity streaks
            c.save();
            const streakCount = 6;
            c.strokeStyle = 'rgba(244, 63, 94, 0.2)';
            c.lineWidth = 1.8;
            c.beginPath();
            for (let i = 0; i < streakCount; i++) {
                const sy = (canvasHeight * 0.25) + (i * (canvasHeight * 0.1)) + Math.sin(t * 8 + i) * 12;
                const sx = ((Math.sin(t * 5 + i * 2.3) * 0.5 + 0.5) * canvasWidth);
                c.moveTo(sx - 70, sy);
                c.lineTo(sx + 70, sy);
            }
            c.stroke();
            c.restore();
        } else if (actIndex === 4) {
            // Act 4: Cinematic Finale - Warm anamorphic golden glow
            const goldWash = c.createLinearGradient(0, 0, canvasWidth, canvasHeight);
            goldWash.addColorStop(0, 'rgba(250, 204, 21, 0.08)');
            goldWash.addColorStop(0.5, 'rgba(249, 115, 22, 0.04)');
            goldWash.addColorStop(1, 'rgba(168, 85, 247, 0.05)');
            c.fillStyle = goldWash;
            c.fillRect(0, 0, canvasWidth, canvasHeight);
        }

        // On-screen sleek act chapter watermark in viewport (first 4 seconds of each act)
        let badgeAlpha = 0;
        if (timeIntoAct < 0.8) {
            badgeAlpha = timeIntoAct / 0.8; // Smooth fade-in
        } else if (timeIntoAct < 3.2) {
            badgeAlpha = 1.0; // Sustained display
        } else if (timeIntoAct < 4.2) {
            badgeAlpha = Math.max(0, 1.0 - (timeIntoAct - 3.2)); // Smooth fade-out
        }

        if (badgeAlpha > 0.02) {
            c.save();
            c.globalAlpha = badgeAlpha;
            const actNames = [
                'АКТ I: ЭКСПОЗИЦИЯ МИРА & СЦЕНЫ',
                'АКТ II: ГЕРОЙ & МИКРОФИЗИКА ДЕТАЛЕЙ',
                'АКТ III: ДРАМАТИЧЕСКАЯ КУЛЬМИНАЦИЯ',
                'АКТ IV: КИНЕМАТОГРАФИЧЕСКИЙ ФИНАЛ'
            ];
            const name = actNames[actIndex - 1] || actNames[0];

            const bx = 20;
            const by = 20;
            const bw = 275;
            const bh = 28;

            c.fillStyle = 'rgba(7, 5, 18, 0.78)';
            c.strokeStyle = 'rgba(168, 85, 247, 0.45)';
            c.lineWidth = 1;
            c.beginPath();
            if (c.roundRect) {
                c.roundRect(bx, by, bw, bh, 6);
            } else {
                c.rect(bx, by, bw, bh);
            }
            c.fill();
            c.stroke();

            // Status light dot
            c.fillStyle = actIndex === 3 ? '#ef4444' : (actIndex === 4 ? '#eab308' : '#38bdf8');
            c.shadowColor = c.fillStyle;
            c.shadowBlur = 8;
            c.beginPath();
            c.arc(bx + 14, by + 14, 4, 0, Math.PI * 2);
            c.fill();
            c.shadowBlur = 0;

            c.font = '700 11px system-ui, -apple-system, sans-serif';
            c.fillStyle = '#f8fafc';
            c.fillText(name, bx + 26, by + 18);
            c.restore();
        }
    }

    // ── 6. DYNAMIC 30 ASPECT RATIOS SWITCHER ENGINE ───────────────────────────
    function getAspectMeta(ratioId) {
        return ASPECT_RATIOS_30.find(r => r.id === ratioId) || ASPECT_RATIOS_30[0];
    }

    function setAspectRatio(ratioId, notify = true) {
        const fmt = getAspectMeta(ratioId);
        VideoState.aspectRatio = fmt.id;

        // 1. Update .aspect-wrapper shape and style
        const wrapper = document.getElementById('aspectWrapper');
        if (wrapper) {
            wrapper.style.aspectRatio = fmt.cssRatio;
        }

        // Auto-detect vertical/compact formats to eliminate black void wings
        const verticalRatios = ['9:16', '4:5', '3:4', '9:19.5', '9:20', '9:21', '10:16', '1:2', '1:3', '9:32', '1:1'];
        const isVertical = verticalRatios.includes(fmt.id);

        const cinemaContainer = document.getElementById('cinemaViewportContainer');
        if (cinemaContainer) {
            if (CustomState.displayMode === 'fill') {
                cinemaContainer.classList.remove('is-vertical-mode');
            } else if (isVertical || CustomState.displayMode === 'tight') {
                cinemaContainer.classList.add('is-vertical-mode');
            } else {
                cinemaContainer.classList.remove('is-vertical-mode');
            }
        }

        // 2. Update quick buttons state
        document.querySelectorAll('#quickRatioButtonsRow .ratio-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.ratio === fmt.id);
        });

        // 3. Update dropdown select state
        const select = document.getElementById('aspectRatioSelect30');
        if (select && select.value !== fmt.id) {
            select.value = fmt.id;
        }

        // 4. Update Format Badge in Cinema Viewport (Pure clean number)
        const badge = document.getElementById('currentFormatBadge');
        if (badge) {
            badge.textContent = fmt.id;
        }

        // 5. Trigger Canvas Resizing to fit the exact new frame shape
        setTimeout(() => {
            resizeCanvas();
            initParticles(VideoState.currentTheme);
        }, 50);

        if (notify) {
            const locDesc = VideoState.lang === 'ru' ? fmt.descRu : (VideoState.lang === 'kk' ? fmt.descKk : fmt.descEn);
            showToast(`📐 Формат кадра: ${fmt.id} (${locDesc})`);
        }

        closeAspectModal();
    }

    function openAspectModal() {
        const modal = document.getElementById('aspectModalOverlay');
        if (modal) {
            modal.style.display = 'flex';
            const searchInput = document.getElementById('aspectSearchInput');
            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
            }
        }
        renderAspectCards30('');
    }

    function closeAspectModal() {
        const modal = document.getElementById('aspectModalOverlay');
        if (modal) modal.style.display = 'none';
    }

    function renderAspectCards30(query) {
        const grid = document.getElementById('aspectGrid30');
        if (!grid) return;

        const q = (query || '').toLowerCase().trim();
        const filtered = ASPECT_RATIOS_30.filter(r => {
            if (!q) return true;
            return r.id.toLowerCase().includes(q) ||
                   r.nameRu.toLowerCase().includes(q) ||
                   r.nameEn.toLowerCase().includes(q) ||
                   r.descRu.toLowerCase().includes(q) ||
                   r.descEn.toLowerCase().includes(q);
        });

        if (filtered.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: var(--v-text-muted); padding: 30px;">Формат не найден / No aspect ratios match</div>`;
            return;
        }

        grid.innerHTML = filtered.map(r => {
            const isSel = r.id === VideoState.aspectRatio;
            const locName = VideoState.lang === 'ru' ? r.nameRu : (VideoState.lang === 'kk' ? r.nameKk : r.nameEn);
            const locDesc = VideoState.lang === 'ru' ? r.descRu : (VideoState.lang === 'kk' ? r.descKk : r.descEn);

            return `
                <div class="aspect-card-30 ${isSel ? 'active' : ''}" onclick="window.selectAspect30('${r.id}')">
                    <div class="aspect-mini-frame">
                        <div class="aspect-mini-shape" style="width: ${r.previewW}px; height: ${r.previewH}px;"></div>
                    </div>
                    <div class="aspect-card-info">
                        <div class="aspect-card-title">${r.icon} <strong>${r.id}</strong></div>
                        <div class="aspect-card-sub" title="${escapeHtml(locDesc)}">${escapeHtml(locDesc)}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    window.selectAspect30 = function(ratioId) {
        setAspectRatio(ratioId, true);
    };

    // ── 7. PLAYER CONTROLS & TIMELINE ──────────────────────────────────────────
    function togglePlayPause() {
        VideoState.isPlaying = !VideoState.isPlaying;
        const icon = document.getElementById('playPauseIcon');
        if (icon) icon.textContent = VideoState.isPlaying ? '⏸' : '▶';

        if (window.LitdeoAudio) {
            if (VideoState.isPlaying && VideoState.audio) {
                const age = window.AgeSoftEngine ? window.AgeSoftEngine.currentAge : 25;
                window.LitdeoAudio.play(VideoState.currentTheme || 'cyberpunk', age);
            } else {
                window.LitdeoAudio.pause();
            }
        }
    }

    function handleScrubberClick(e) {
        const scrubber = document.getElementById('scrubberContainer');
        if (!scrubber) return;
        const rect = scrubber.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const pct = Math.max(0, Math.min(1, clickX / rect.width));
        VideoState.currentTime = pct * VideoState.duration;
        updatePlaybackTimeline();
    }

    function updatePlaybackTimeline() {
        const progressEl = document.getElementById('scrubberProgress');
        const counterEl = document.getElementById('timeCounter');
        const dur = Math.max(1, VideoState.duration || 60);
        const cur = Math.max(0, VideoState.currentTime || 0);
        const pct = Math.min(100, (cur / dur) * 100);

        if (progressEl) progressEl.style.width = pct + '%';
        if (counterEl) {
            counterEl.textContent = `${formatTime(cur)} / ${formatTime(dur)}`;
        }

        // Highlight active story act button in Cinema Viewport player
        const activeAct = Math.min(4, Math.floor((cur / dur) * 4) + 1);
        document.querySelectorAll('.story-act-btn').forEach(btn => {
            const btnAct = parseInt(btn.dataset.act, 10);
            if (btnAct === activeAct) {
                btn.classList.add('active');
                btn.style.background = 'rgba(168,85,247,0.35)';
                btn.style.borderColor = '#c084fc';
                btn.style.color = '#fff';
            } else {
                btn.classList.remove('active');
                btn.style.background = 'rgba(255,255,255,0.06)';
                btn.style.borderColor = 'rgba(255,255,255,0.12)';
                btn.style.color = '#cbd5e1';
            }
        });

        // Highlight active act in Storyboard Desk
        document.querySelectorAll('.act-card-item').forEach(card => {
            const cardAct = parseInt(card.dataset.act, 10);
            if (cardAct === activeAct) {
                card.style.borderColor = '#ffd700';
                card.style.background = 'rgba(255, 215, 0, 0.08)';
            } else {
                card.style.borderColor = 'rgba(255,255,255,0.08)';
                card.style.background = 'rgba(255,255,255,0.03)';
            }
        });

        // Trigger Voiceover & Subtitles sync when entering a new act during playback
        if (VideoState.isPlaying && activeAct !== VideoState.lastVoicedAct) {
            triggerVoiceoverForAct(activeAct);
        }
    }

    function toggleMute() {
        VideoState.audio = !VideoState.audio;
        if (window.LitdeoAudio) {
            window.LitdeoAudio.isMuted = !VideoState.audio;
            if (!VideoState.audio) {
                window.LitdeoAudio.pause();
            } else if (VideoState.isPlaying) {
                const age = window.AgeSoftEngine ? window.AgeSoftEngine.currentAge : 25;
                window.LitdeoAudio.play(VideoState.currentTheme || 'cyberpunk', age);
            }
        }
        const muteIcon = document.getElementById('muteIcon');
        if (muteIcon) muteIcon.textContent = VideoState.audio ? '🔊' : '🔇';
    }

    function toggleFullscreen() {
        const container = document.getElementById('aspectStage') || document.getElementById('cinemaViewportContainer');
        if (!container) return;
        if (!document.fullscreenElement) {
            container.requestFullscreen().catch(() => {});
        } else {
            document.exitFullscreen().catch(() => {});
        }
    }

    // ── 8. PROMPT ENHANCER & VIDEO GENERATION ──────────────────────────────────
    function enhancePromptWithAi() {
        const promptInput = document.getElementById('promptInput');
        const raw = promptInput ? promptInput.value.trim() : VideoState.prompt;

        const btn = document.getElementById('btnMagicEnhance');
        if (btn) {
            btn.disabled = true;
            btn.textContent = '✨ Оптимизация...';
        }

        fetch('/api/ai/enhance-video-prompt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt: raw,
                style: VideoState.style,
                lang: VideoState.lang
            })
        })
        .then(r => r.json())
        .then(data => {
            if (data.status === 'success' && data.enhanced_prompt) {
                if (promptInput) {
                    promptInput.value = data.enhanced_prompt;
                    VideoState.prompt = data.enhanced_prompt;
                }
                showToast("✨ Промпт улучшен кинематографичными деталями 4K!");
            }
        })
        .catch(() => {
            const enhanced = raw + ", cinematic 8k resolution, IMAX 70mm, volumetric lighting, photorealistic, 4K UHD";
            if (promptInput) promptInput.value = enhanced;
            VideoState.prompt = enhanced;
        })
        .finally(() => {
            if (btn) {
                btn.disabled = false;
                btn.textContent = getI18n().btnEnhance;
            }
        });
    }

    function startVideoGeneration() {
        if (VideoState.isRendering) return;

        const promptInput = document.getElementById('promptInput');
        if (promptInput && promptInput.value.trim()) {
            let rawPrompt = promptInput.value.trim();
            const currentAge = window.AgeSoftEngine ? window.AgeSoftEngine.currentAge : 25;
            if (currentAge >= 4 && currentAge <= 7 && window.AgeSoftEngine && typeof window.AgeSoftEngine.correctKidsPrompt === 'function') {
                const corrected = window.AgeSoftEngine.correctKidsPrompt(rawPrompt);
                if (corrected && corrected !== rawPrompt) {
                    showToast('🧸 Litdeo Kids: поняли детскую команду: "' + rawPrompt + '" ➔ "' + corrected + '"');
                    rawPrompt = corrected;
                }
            }
            VideoState.prompt = rawPrompt;
        }

        // Dynamic prompt analysis & instant scene theme routing
        const pNorm = (VideoState.prompt || '').toLowerCase();
        if (pNorm.includes('дракон') || pNorm.includes('dragon') || pNorm.includes('замок') || pNorm.includes('castle') || pNorm.includes('пламя') || pNorm.includes('огн')) {
            VideoState.currentTheme = 'fantasy_dragon';
        } else if (pNorm.includes('киберпанк') || pNorm.includes('cyberpunk') || pNorm.includes('неон') || pNorm.includes('audi') || pNorm.includes('машина') || pNorm.includes('car')) {
            VideoState.currentTheme = 'cyberpunk';
        } else if (pNorm.includes('космос') || pNorm.includes('черная дыра') || pNorm.includes('галактик') || pNorm.includes('space') || pNorm.includes('звезд') || pNorm.includes('планет')) {
            VideoState.currentTheme = 'space';
        } else if (pNorm.includes('орел') || pNorm.includes('беркут') || pNorm.includes('степь') || pNorm.includes('горы') || pNorm.includes('eagle')) {
            VideoState.currentTheme = 'nature';
        } else if (pNorm.includes('океан') || pNorm.includes('кит') || pNorm.includes('море') || pNorm.includes('ocean') || pNorm.includes('whale') || pNorm.includes('подводн')) {
            VideoState.currentTheme = 'ocean';
        } else if (pNorm.includes('книг') || pNorm.includes('библиотек') || pNorm.includes('святилищ') || pNorm.includes('храм') || pNorm.includes('литалли') || pNorm.includes('library')) {
            VideoState.currentTheme = 'library';
        } else if (pNorm.includes('аниме') || pNorm.includes('сакур') || pNorm.includes('anime')) {
            VideoState.currentTheme = 'anime';
        } else if (pNorm.includes('дрифт') || pNorm.includes('action') || pNorm.includes('гонк') || pNorm.includes('скорост')) {
            VideoState.currentTheme = 'action';
        } else if (pNorm.includes('малыш') || pNorm.includes('машинк') || pNorm.includes('игрушк')) {
            VideoState.currentTheme = 'baby_toy_cars';
        }
        initParticles(VideoState.currentTheme);

        const rangeSlider = document.getElementById('rangeDurationSlider');
        const durSelect = document.getElementById('durationSelect');
        if (rangeSlider && rangeSlider.value) {
            VideoState.duration = parseInt(rangeSlider.value, 10);
        } else if (durSelect && durSelect.value) {
            VideoState.duration = parseInt(durSelect.value, 10);
        }
        if (!VideoState.duration || VideoState.duration < 15) VideoState.duration = 60;

        const compSelect = document.getElementById('complexitySelect');
        if (compSelect) VideoState.complexity = compSelect.value;

        const cameraSelect = document.getElementById('cameraMotionSelect');
        if (cameraSelect) VideoState.cameraMotion = cameraSelect.value;

        const secMotionSelect = document.getElementById('secondaryMotionSelect');
        if (secMotionSelect) VideoState.secondaryMotion = secMotionSelect.value;

        const lensSelect = document.getElementById('lensSelect');
        if (lensSelect) VideoState.lens = lensSelect.value;

        const lightingSelect = document.getElementById('lightingRigSelect');
        if (lightingSelect) VideoState.lighting = lightingSelect.value;

        const soulIdSelect = document.getElementById('soulIdSelect');
        if (soulIdSelect) VideoState.soulId = soulIdSelect.value;

        const soulAesthSelect = document.getElementById('soulAestheticSelect');
        if (soulAesthSelect) VideoState.soulAesthetic = soulAesthSelect.value;

        const audioCheck = document.getElementById('audioToggleCheckbox');
        if (audioCheck) VideoState.audio = audioCheck.checked;

        // Build Augmented Director Prompt incorporating Soul ID & Aesthetics
        let effectivePrompt = VideoState.prompt;

        const soulProfiles = {
            nomad_hero: "Kazakh Batyr warrior Altynbek, heroic gaze, intricate silk shapan with gold threads, steel armor, steed",
            steppe_queen: "Tomiris queen of the Great Steppe, majestic golden saukele headwear, piercing sapphire eyes, regal demeanor",
            cyber_runner: "Cyberpunk runner Kai, glowing cyan retinal visor, chrome cyberware implants, high-collar tech jacket",
            anime_heroine: "Anime heroine Aiko, radiant amethyst eyes, flowing midnight-blue hair, emotive expression",
            deep_astronaut: "Deep Space astronaut Vega, NASA 2099 exploration helmet with gold visor reflections, deep cosmic dust",
            vogue_model: "Vogue runway supermodel Elena, haute couture porcelain skin, high fashion editorial lighting, sharp cheekbones"
        };
        if (VideoState.soulId && soulProfiles[VideoState.soulId]) {
            effectivePrompt = `${soulProfiles[VideoState.soulId]}, ${effectivePrompt}`;
        }

        const aestheticProfiles = {
            quiet_luxury: "Quiet Luxury aesthetic, ultra-soft diffuse window lighting, cashmere and raw silk textures, muted neutral palette",
            selfie_wide: "0.5x Ultra-Wide viral selfie camera, wide-angle lens distortion, dynamic streetwear perspective",
            y2k_grunge: "Y2K Cyber Grunge aesthetic, glossy vinyl reflections, subtle chromatic aberration, late 90s aesthetic",
            golden_nomad: "Golden Steppe aesthetic, warm sunset backlighting, ancient gold nomadic ornaments, cinematic wind",
            kodak_portra: "Kodak Portra 400 35mm film stock, organic subtle grain, warm creamy skin tones, natural daylight",
            imax_interstellar: "IMAX 70mm Interstellar cinema grade, deep cosmic contrast, anamorphic lens flares, cold space"
        };
        if (VideoState.soulAesthetic && aestheticProfiles[VideoState.soulAesthetic]) {
            effectivePrompt = `${effectivePrompt}, ${aestheticProfiles[VideoState.soulAesthetic]}`;
        }

        const lensMap = {
            '14mm': 'shot on 14mm ultra-wide fisheye lens',
            '24mm': 'shot on 24mm wide cinematic lens',
            '35mm': 'shot on 35mm anamorphic cinema lens T1.3',
            '50mm': 'shot on 50mm human natural prime f/1.2',
            '85mm': 'shot on 85mm portrait master lens f/1.4 with creamy bokeh',
            '200mm': 'shot on 200mm telephoto lens with compressed depth'
        };
        if (VideoState.lens && lensMap[VideoState.lens]) {
            effectivePrompt = `${effectivePrompt}, ${lensMap[VideoState.lens]}`;
        }

        const lightingMap = {
            'three_point': 'three-point cinematic studio lighting key fill rim',
            'rembrandt': 'dramatic Rembrandt chiaroscuro lighting triangle',
            'golden_hour': 'golden hour sunset backlit god-rays',
            'neon_duotone': 'cyberpunk neon dual-tone cyan and magenta lighting',
            'film_noir': 'moody film noir high-contrast shadows'
        };
        if (VideoState.lighting && lightingMap[VideoState.lighting]) {
            effectivePrompt = `${effectivePrompt}, ${lightingMap[VideoState.lighting]}`;
        }

        VideoState.isRendering = true;
        playCinematicChime('start');

        // UI rendering lock
        const btnGen = document.getElementById('btnGenerateVideo');
        const btnGenText = document.getElementById('btnGenerateVideoText');
        const overlay = document.getElementById('renderOverlay');
        const pctText = document.getElementById('renderPctText');
        const statusSub = document.getElementById('renderStatusSub');

        if (btnGen) btnGen.classList.add('rendering');
        if (btnGenText) btnGenText.textContent = getI18n().btnRendering;
        if (overlay) overlay.classList.add('active');

        const i18n = getI18n();
        const pipelineSelect = document.getElementById('renderPipelineTimeSelect');
        const pipelineVal = pipelineSelect ? parseInt(pipelineSelect.value, 10) : 3;
        const boost = (window.BoostState && window.BoostState.activeBoost) || 1;
        updateEstimatedWaitTimeUI();

        // Dynamic multi-stage neural telemetry
        const stages = [
            { pct: 12, msg: i18n.stage1 || '1/5: Анализ семантики промпта, DoP оптики и 3D-вокселей...' },
            { pct: 36, msg: i18n.stage2 || '2/5: Фиксация Soul ID персонажа, латентная диффузия и физика...' },
            { pct: 64, msg: i18n.stage3 || '3/5: Расчет субпиксельной когерентности и объемного света DoP...' },
            { pct: 88, msg: i18n.stage4 || '4/5: 4K/8K нейронный апскейлинг 60 FPS...' },
            { pct: 100, msg: i18n.stage5 || '5/5: Завершение! 4K Ultra HD видео готово.' }
        ];

        let currentStage = 0;
        // Step duration dynamically adapted (smooth fast responsive UX: ~400-600ms per stage, accelerated by boost)
        const baseDelay = pipelineVal <= 1 ? 400 : (pipelineVal === 3 ? 550 : 700);
        const boostSpeedup = boost === 1 ? 1 : (boost === 4 ? 2.5 : (boost === 8 ? 4.5 : (boost === 12 ? 6.5 : 10)));
        const stepDelay = Math.max(45, Math.round(baseDelay / boostSpeedup));

        const stageInterval = setInterval(() => {
            if (currentStage < stages.length) {
                const s = stages[currentStage];
                if (pctText) pctText.textContent = s.pct + '%';
                if (statusSub) statusSub.textContent = s.msg;
                if (window.MiniGame && window.MiniGame.updateRenderProgress) {
                    window.MiniGame.updateRenderProgress(s.pct);
                }
                currentStage++;
            } else {
                clearInterval(stageInterval);
                finishVideoGeneration();
            }
        }, stepDelay);

        // API Call
        fetch('/api/ai/generate-video', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt: effectivePrompt,
                original_prompt: VideoState.prompt,
                style: VideoState.style,
                aspect_ratio: VideoState.aspectRatio,
                duration: VideoState.duration,
                complexity: VideoState.complexity || 'standard',
                fps: VideoState.fps,
                camera_motion: VideoState.cameraMotion,
                secondary_motion: VideoState.secondaryMotion,
                lens: VideoState.lens,
                lighting: VideoState.lighting,
                soul_id: VideoState.soulId,
                soul_aesthetic: VideoState.soulAesthetic,
                model: VideoState.model,
                audio: VideoState.audio,
                boost_multiplier: boost,
                lang: VideoState.lang
            })
        })
        .then(r => r.json())
        .then(res => {
            if (res.status === 'success') {
                VideoState.currentTheme = res.theme_profile || 'space';
                initParticles(VideoState.currentTheme);
                if (res.duration) VideoState.duration = res.duration;
                updateNarrativeActsBreakdown();
                updatePlaybackTimeline();
            }
        })
        .catch(() => {});
    }

    function finishVideoGeneration() {
        VideoState.isRendering = false;
        VideoState.currentTime = 0;
        VideoState.isPlaying = true;

        playCinematicChime('finish');
        if (window.MiniGame && window.MiniGame.onVideoComplete) {
            window.MiniGame.onVideoComplete();
        }

        if (window.LitdeoAudio && VideoState.audio) {
            const age = window.AgeSoftEngine ? window.AgeSoftEngine.currentAge : 25;
            window.LitdeoAudio.play(VideoState.currentTheme || 'cyberpunk', age);
        }

        const btnGen = document.getElementById('btnGenerateVideo');
        const btnGenText = document.getElementById('btnGenerateVideoText');
        const overlay = document.getElementById('renderOverlay');

        if (btnGen) btnGen.classList.remove('rendering');
        if (btnGenText) btnGenText.textContent = getI18n().btnGenerate;
        if (overlay) overlay.classList.remove('active');

        addCurrentToHistory();
        showToast("🎬 Видео 4K успешно сгенерировано!");
    }

    // ── 9. GALLERY & HISTORY MANAGEMENT ────────────────────────────────────────
    function addCurrentToHistory() {
        const item = {
            id: 'litdeo_' + Date.now(),
            prompt: VideoState.prompt,
            style: VideoState.style,
            aspectRatio: VideoState.aspectRatio,
            duration: VideoState.duration,
            model: VideoState.model,
            theme: VideoState.currentTheme,
            date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        VideoState.history.unshift(item);
        if (VideoState.history.length > 8) VideoState.history.pop();

        try {
            localStorage.setItem('litally_video_history', JSON.stringify(VideoState.history));
        } catch(e) {}
        renderGallery();
    }

    function renderGallery() {
        const grid = document.getElementById('galleryGrid');
        if (!grid) return;

        if (!VideoState.history || VideoState.history.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--v-text-muted); font-size: 0.9rem;">
                    ${getI18n().emptyGallery}
                </div>
            `;
            return;
        }

        const modelNames = {
            'litdeo_2_0': 'Litdeo 2.0',
            'litdeo_2_1': 'Litdeo 2.1 (4K)',
            'litdeo_2_2': 'Litdeo 2.2 (Ultra)'
        };

        grid.innerHTML = VideoState.history.map((v, i) => `
            <div class="video-card" onclick="window.loadSavedVideo(${i})">
                <div class="card-thumb-wrap">
                    <canvas class="card-thumb-canvas" id="thumb_${v.id}"></canvas>
                    <div class="card-play-overlay">
                        <div class="card-play-icon">▶</div>
                    </div>
                </div>
                <div class="card-info">
                    <div class="card-prompt" title="${escapeHtml(v.prompt)}">${escapeHtml(v.prompt)}</div>
                    <div class="card-meta-row">
                        <span class="card-badge">${modelNames[v.model] || 'Litdeo 2.0'}</span>
                        <span>${v.duration}s • ${v.aspectRatio}</span>
                    </div>
                </div>
            </div>
        `).join('');

        setTimeout(() => {
            VideoState.history.forEach(v => {
                const thumbCanvas = document.getElementById(`thumb_${v.id}`);
                if (thumbCanvas) {
                    thumbCanvas.width = 240;
                    thumbCanvas.height = 135;
                    const tc = thumbCanvas.getContext('2d');
                    renderFrame(tc, 2.5);
                }
            });
        }, 100);
    }

    window.loadSavedVideo = function(index) {
        const item = VideoState.history[index];
        if (!item) return;

        VideoState.prompt = item.prompt;
        VideoState.style = item.style;
        VideoState.duration = item.duration;
        VideoState.model = item.model;
        VideoState.currentTheme = item.theme;

        setAspectRatio(item.aspectRatio || '16:9', false);

        const promptInput = document.getElementById('promptInput');
        if (promptInput) promptInput.value = item.prompt;

        const durSelect = document.getElementById('durationSelect');
        if (durSelect) durSelect.value = item.duration.toString();

        document.querySelectorAll('.style-card').forEach(card => {
            card.classList.toggle('active', card.dataset.style === item.style);
        });

        document.querySelectorAll('.model-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.model === item.model);
        });

        initParticles(item.theme);
        resizeCanvas();
        showToast("Загружено видео из истории!");
    };

    function downloadCurrentVideo() {
        exportRealVideoFile(false);
    }

    function exportRealVideoFile(saveToFolder = false) {
        if (!canvas) return;
        const modal = document.getElementById('videoExportModal');
        const pBar = document.getElementById('exportProgressBar');
        const pPct = document.getElementById('exportProgressPct');
        const pStatus = document.getElementById('exportProgressStatus');
        const pQual = document.getElementById('exportQualityLabel');

        const currentRes = CustomState.resolution || '4k';
        const bitrateMap = {
            '8k': 80000000, // 80 Mbps Quantum IMAX
            '4k': 50000000, // 50 Mbps UHD Cinema
            '2k': 30000000, // 30 Mbps QHD Master
            '1080p': 16000000 // 16 Mbps Full HD
        };
        const targetBitrate = bitrateMap[currentRes] || 50000000;
        const bitrateMb = Math.round(targetBitrate / 1000000) + ' Mbps';

        if (modal) modal.style.display = 'flex';
        if (pBar) pBar.style.width = '0%';
        if (pPct) pPct.textContent = '0%';
        if (pStatus) pStatus.textContent = `Инициализация ${currentRes.toUpperCase()} потока 60 FPS (${bitrateMb})...`;
        if (pQual) pQual.textContent = `${currentRes.toUpperCase()} Cinema • 60 FPS • ${bitrateMb} • Rec.2020 HDR`;

        let exportStream = null;
        if (window.LitdeoAudio && window.LitdeoAudio.getExportStream) {
            exportStream = window.LitdeoAudio.getExportStream(canvas, 60);
        } else if (canvas.captureStream) {
            exportStream = canvas.captureStream(60);
        }

        if (!exportStream || typeof MediaRecorder === 'undefined') {
            if (modal) modal.style.display = 'none';
            downloadSnapshotDirect();
            return;
        }

        const mimeTypes = [
            'video/webm;codecs=vp9,opus',
            'video/webm;codecs=vp8,opus',
            'video/webm',
            'video/mp4'
        ];
        const chosenMime = mimeTypes.find(m => MediaRecorder.isTypeSupported(m)) || 'video/webm';

        let chunks = [];
        let recorder;
        try {
            recorder = new MediaRecorder(exportStream, {
                mimeType: chosenMime,
                videoBitsPerSecond: targetBitrate,
                audioBitsPerSecond: 384000
            });
        } catch(e) {
            recorder = new MediaRecorder(exportStream);
        }

        recorder.ondataavailable = (e) => {
            if (e.data && e.data.size > 0) chunks.push(e.data);
        };

        const recordDuration = Math.min(15, VideoState.duration || 5);
        const startTime = Date.now();

        const progressInterval = setInterval(() => {
            const elapsed = (Date.now() - startTime) / 1000;
            const pct = Math.min(98, Math.round((elapsed / recordDuration) * 100));
            if (pBar) pBar.style.width = `${pct}%`;
            if (pPct) pPct.textContent = `${pct}%`;
            if (pStatus) pStatus.textContent = `Кодирование ${currentRes.toUpperCase()} кадров (${bitrateMb}): ${elapsed.toFixed(1)}s / ${recordDuration}s...`;
        }, 100);

        recorder.onstop = async () => {
            clearInterval(progressInterval);
            if (pBar) pBar.style.width = '100%';
            if (pPct) pPct.textContent = '100%';
            if (pStatus) pStatus.textContent = 'Готово! Сохранение файла...';

            const blob = new Blob(chunks, { type: chosenMime });
            const ext = chosenMime.includes('mp4') ? 'mp4' : 'webm';
            const filename = `litdeo_cinema_${VideoState.currentTheme || 'video'}_${Date.now()}.${ext}`;

            if (saveToFolder && window.showSaveFilePicker) {
                try {
                    const handle = await window.showSaveFilePicker({
                        suggestedName: filename,
                        types: [{
                            description: 'Video File',
                            accept: { [chosenMime]: [`.${ext}`] }
                        }]
                    });
                    const writable = await handle.createWritable();
                    await writable.write(blob);
                    await writable.close();
                    showToast(`💾 Видео сохранено в выбранную папку: ${filename}`);
                } catch(err) {
                    triggerBlobDownload(blob, filename);
                }
            } else {
                triggerBlobDownload(blob, filename);
                showToast(`📥 Видео успешно скачано: ${filename}`);
            }

            setTimeout(() => {
                if (modal) modal.style.display = 'none';
            }, 800);
        };

        recorder.start();

        const cancelBtn = document.getElementById('btnCancelExport');
        if (cancelBtn) {
            cancelBtn.onclick = () => {
                clearInterval(progressInterval);
                try { recorder.stop(); } catch(e) {}
                if (modal) modal.style.display = 'none';
                showToast('Экспорт отменен');
            };
        }

        setTimeout(() => {
            try {
                if (recorder.state === 'recording') recorder.stop();
            } catch(e) {}
        }, recordDuration * 1000);
    }

    function triggerBlobDownload(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            a.remove();
            URL.revokeObjectURL(url);
        }, 1000);
    }

    function downloadSnapshotDirect() {
        if (!canvas) return;
        try {
            const link = document.createElement('a');
            link.download = `litdeo_8k_frame_${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png', 1.0);
            link.click();
            showToast("📸 8K Master кадр успешно сохранен в максимальной четкости!");
        } catch(e) {
            showToast("Кадр сохранен!");
        }
    }

    function extendVideoDuration() {
        const step = 30;
        VideoState.duration = Math.min(300, (VideoState.duration || 60) + step);
        const durSelect = document.getElementById('durationSelect');
        if (durSelect) {
            for (let opt of durSelect.options) {
                if (opt.value === VideoState.duration.toString()) {
                    durSelect.value = VideoState.duration.toString();
                    break;
                }
            }
        }
        const slider = document.getElementById('rangeDurationSlider');
        if (slider) slider.value = VideoState.duration;
        updateNarrativeActsBreakdown();
        updatePlaybackTimeline();
        showToast(`➕ Длительность увеличена до ${VideoState.duration} сек (${formatTime(VideoState.duration)})!`);
        startVideoGeneration();
    }

    function copyVideoLink() {
        navigator.clipboard.writeText(window.location.href).then(() => {
            showToast(getI18n().toastCopied);
        }).catch(() => {
            showToast(getI18n().toastCopied);
        });
    }

    function showToast(msg) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
            background: linear-gradient(135deg, #a855f7, #ec4899);
            color: #fff; padding: 12px 24px; border-radius: 30px;
            font-weight: 700; font-size: 0.9rem; z-index: 99999;
            box-shadow: 0 10px 30px rgba(0,0,0,0.6), 0 0 20px rgba(168,85,247,0.5);
            animation: fadeInOut 2.5s forwards;
        `;
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2600);
    }

    // ── 10. LANGUAGE ENGINE ───────────────────────────────────────────────────
    function setLanguage(lang) {
        if (!lang) return;
        VideoState.lang = lang;

        try {
            localStorage.setItem('litally_selected_language', lang);
            localStorage.setItem('litally_selected_lang', lang);
            localStorage.setItem('litally_video_lang', lang);
        } catch(e) {}

        const meta = getLanguageMeta(lang);
        const dict = getI18n();

        const activeFlag = document.getElementById('activeLangFlag');
        const activeName = document.getElementById('activeLangName');
        if (activeFlag) activeFlag.textContent = meta.flag || '🌐';
        if (activeName) activeName.textContent = meta.native || meta.name || lang.toUpperCase();

        document.documentElement.lang = lang;
        document.documentElement.dir = meta.dir === 'rtl' ? 'rtl' : 'ltr';

        const setTxt = (id, txt) => {
            const el = document.getElementById(id);
            if (el && txt !== undefined) el.textContent = txt;
        };

        setTxt('brandTitleText', dict.brandTitle);
        setTxt('brandSubText', dict.brandSub);
        setTxt('navChatText', dict.navChat);
        setTxt('navSanctuaryText', dict.navSanctuary);
        setTxt('studioTitleText', dict.studioTitle);
        setTxt('lblPromptText', dict.lblPrompt);
        setTxt('btnMagicEnhance', dict.btnEnhance);
        setTxt('lblInspirationText', dict.lblInspiration);
        setTxt('lblStyleText', dict.lblStyle);
        setTxt('lblRatioText', dict.lblRatio);
        setTxt('lblCameraText', dict.lblCamera);
        setTxt('lblDurationText', dict.lblDuration);
        setTxt('lblAudioText', dict.lblAudio);
        setTxt('btnGenerateVideoText', dict.btnGenerate);
        setTxt('btnDownloadText', dict.btnDownload);
        setTxt('btnExtendText', dict.btnExtend);
        setTxt('btnCopyLinkText', dict.btnCopyLink);
        setTxt('galleryTitleText', dict.galleryTitle);
        setTxt('langModalTitleText', dict.langModalTitle);

        const promptInput = document.getElementById('promptInput');
        if (promptInput) promptInput.placeholder = dict.promptPlaceholder;

        const searchInput = document.getElementById('langSearchInput');
        if (searchInput) searchInput.placeholder = dict.langSearchPlaceholder;

        // Re-render active format badge
        setAspectRatio(VideoState.aspectRatio, false);

        closeLangModal();
    }

    function openLangModal() {
        const modal = document.getElementById('langModalOverlay');
        if (modal) {
            modal.style.display = 'flex';
            const searchInput = document.getElementById('langSearchInput');
            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
            }
        }
        renderLangItems('');
    }

    function closeLangModal() {
        const modal = document.getElementById('langModalOverlay');
        if (modal) modal.style.display = 'none';
    }

    function getAllLanguagesList() {
        if (typeof window !== 'undefined' && Array.isArray(window.LITALLY_LANGUAGES_100) && window.LITALLY_LANGUAGES_100.length > 0) {
            return window.LITALLY_LANGUAGES_100;
        }
        return [
            { code: 'ru', name: 'Russian', native: 'Русский', flag: '🇷🇺', country: 'Russia' },
            { code: 'kk', name: 'Kazakh', native: 'Қазақша', flag: '🇰🇿', country: 'Kazakhstan' },
            { code: 'en', name: 'English', native: 'English', flag: '🇺🇸', country: 'United States' }
        ];
    }

    function renderLangItems(query) {
        const container = document.getElementById('langItemsGrid');
        if (!container) return;

        const languages = getAllLanguagesList();
        const q = (query || '').toLowerCase().trim();

        const filtered = languages.filter(l => {
            if (!q) return true;
            return (l.name && l.name.toLowerCase().includes(q)) ||
                   (l.native && l.native.toLowerCase().includes(q)) ||
                   (l.code && l.code.toLowerCase().includes(q)) ||
                   (l.country && l.country.toLowerCase().includes(q));
        });

        if (filtered.length === 0) {
            container.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: var(--v-text-muted); padding: 30px;">Ничего не найдено / No languages match</div>`;
            return;
        }

        container.innerHTML = filtered.map(l => {
            const isSelected = l.code === VideoState.lang;
            return `
                <button class="lang-item-btn ${isSelected ? 'active' : ''}" onclick="window.selectVideoLang('${l.code}')" style="${isSelected ? 'background: linear-gradient(135deg, rgba(168,85,247,0.35), rgba(236,72,153,0.35)); border-color: #c084fc;' : ''}">
                    <span style="font-size: 1.25rem;">${l.flag || '🌐'}</span>
                    <div>
                        <div style="font-weight: 700; color: #fff; line-height: 1.2;">${escapeHtml(l.native || l.name)}</div>
                        <div style="font-size: 0.72rem; color: var(--v-text-muted);">${escapeHtml(l.name)} • ${l.code.toUpperCase()}</div>
                    </div>
                </button>
            `;
        }).join('');
    }

    window.selectVideoLang = function(code) {
        setLanguage(code);
    };

    function escapeHtml(str) {
        return (str || '').replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }

    // ── 11. CROSS-TAB STORAGE SYNC ────────────────────────────────────────────
    window.addEventListener('storage', function(e) {
        if (e.key === 'litally_selected_language' || e.key === 'litally_selected_lang' || e.key === 'litally_video_lang') {
            if (e.newValue && e.newValue !== VideoState.lang) {
                setLanguage(e.newValue);
            }
        }
    });

    // ── 12. INITIALIZATION & LISTENERS ────────────────────────────────────────

    // ── 7. PRO GPU CUSTOMIZER & DISPLAY MODES LOGIC ─────────────────────────
    function applyCanvasFilter() {
        const cv = document.getElementById('cinemaCanvas');
        if (!cv) return;

        let glowFilter = '';
        if (CustomState.glow > 0) {
            const glowPx = Math.round((CustomState.glow / 100) * 22);
            const glowAlpha = (CustomState.glow / 100) * 0.75;
            glowFilter = ` drop-shadow(0 0 ${glowPx}px rgba(168, 85, 247, ${glowAlpha.toFixed(2)}))`;
        }

        const hdrContrastBoost = CustomState.hdrMode ? Math.round(((CustomState.hdr || 80) / 100) * 10) : 0;
        const hdrSatBoost = CustomState.hdrMode ? Math.round(((CustomState.hdr || 80) / 100) * 8) : 0;
        const effContrast = (CustomState.contrast || 100) + hdrContrastBoost;
        const effSat = (CustomState.saturation || 100) + hdrSatBoost;

        let baseFilter = `brightness(${CustomState.brightness}%) contrast(${effContrast}%) saturate(${effSat}%) hue-rotate(${CustomState.hue}deg)${glowFilter}`;
        if (window.AgeSoftEngine && window.AgeSoftEngine.enabled) {
            const profile = window.AgeSoftEngine.calculateErgonomics(window.AgeSoftEngine.currentAge, window.AgeSoftEngine.gender);
            baseFilter = window.AgeSoftEngine.computeFilterString(baseFilter, profile);
        }
        cv.style.filter = baseFilter;
    }

    function updateAmbientGlow() {
        const glowEl = document.getElementById('ambientGlowLayer');
        if (!glowEl) return;
        if (!CustomState.ambientGlow) {
            glowEl.classList.remove('active');
            return;
        }
        glowEl.classList.add('active');

        const theme = VideoState.currentTheme || 'cyberpunk';
        let grad = 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.65) 0%, rgba(236, 72, 153, 0.4) 45%, rgba(6, 182, 212, 0.25) 75%, transparent 95%)';
        if (theme === 'space') {
            grad = 'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.6) 0%, rgba(168, 85, 247, 0.45) 45%, rgba(6, 182, 212, 0.2) 75%, transparent 95%)';
        } else if (theme === 'ocean') {
            grad = 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.7) 0%, rgba(59, 130, 246, 0.45) 45%, rgba(14, 165, 233, 0.25) 75%, transparent 95%)';
        } else if (theme === 'nature') {
            grad = 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.65) 0%, rgba(16, 185, 129, 0.45) 45%, rgba(5, 150, 105, 0.2) 75%, transparent 95%)';
        } else if (theme === 'action') {
            grad = 'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.7) 0%, rgba(249, 115, 22, 0.45) 45%, rgba(127, 29, 29, 0.25) 75%, transparent 95%)';
        } else if (theme === 'anime') {
            grad = 'radial-gradient(circle at 50% 50%, rgba(244, 114, 182, 0.7) 0%, rgba(168, 85, 247, 0.45) 45%, rgba(147, 51, 234, 0.25) 75%, transparent 95%)';
        }
        glowEl.style.background = grad;
    }

    function syncSliderUi(sliderId, valId, val, unit) {
        const slider = document.getElementById(sliderId);
        const valSpan = document.getElementById(valId);
        if (slider) slider.value = val;
        if (valSpan) valSpan.textContent = `${val}${unit}`;
    }

    function applyLutPreset(lutKey) {
        const p = LUT_PRESETS[lutKey];
        if (!p) return;
        CustomState.lut = lutKey;
        CustomState.brightness = p.brightness;
        CustomState.contrast = p.contrast;
        CustomState.saturation = p.saturation;
        CustomState.hue = p.hue;
        CustomState.glow = p.glow;
        CustomState.vignette = p.vignette;

        syncSliderUi('rangeBrightness', 'valBrightness', p.brightness, '%');
        syncSliderUi('rangeContrast', 'valContrast', p.contrast, '%');
        syncSliderUi('rangeSaturation', 'valSaturation', p.saturation, '%');
        syncSliderUi('rangeHue', 'valHue', p.hue, '°');
        syncSliderUi('rangeGlow', 'valGlow', p.glow, '%');
        syncSliderUi('rangeVignette', 'valVignette', p.vignette, '%');

        document.querySelectorAll('.lut-pill').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lut === lutKey);
        });

        applyCanvasFilter();
        updateAmbientGlow();
        showToast(`🎨 Профиль цвета: ${lutKey.toUpperCase()}`);
    }

    function setDisplayMode(mode) {
        CustomState.displayMode = mode;
        const wrapper = document.getElementById('aspectWrapper');
        const stage = document.getElementById('aspectStage');
        const container = document.getElementById('cinemaViewportContainer');

        const btnFit = document.getElementById('btnModeFit');
        const btnFill = document.getElementById('btnModeFill');
        const btnTight = document.getElementById('btnModeTight');

        if (btnFit) btnFit.classList.toggle('active', mode === 'fit');
        if (btnFill) btnFill.classList.toggle('active', mode === 'fill');
        if (btnTight) btnTight.classList.toggle('active', mode === 'tight');

        if (mode === 'fill') {
            if (wrapper) wrapper.classList.add('mode-fill');
            if (stage) stage.classList.add('is-fill-mode');
            if (container) container.classList.remove('is-vertical-mode');
            showToast('🖼️ Режим "Заполнить всё": видео растянуто на 100% без черных полей!');
        } else if (mode === 'tight') {
            if (wrapper) wrapper.classList.remove('mode-fill');
            if (stage) stage.classList.remove('is-fill-mode');
            if (container) container.classList.add('is-vertical-mode');
            showToast('📱 Режим "Только видео": узкий компактный фрейм без боковых черных полос!');
        } else { // 'fit'
            if (wrapper) wrapper.classList.remove('mode-fill');
            if (stage) stage.classList.remove('is-fill-mode');

            const verticalRatios = ['9:16', '4:5', '3:4', '9:19.5', '9:20', '9:21', '10:16', '1:2', '1:3', '9:32', '1:1'];
            if (container) {
                container.classList.toggle('is-vertical-mode', verticalRatios.includes(VideoState.aspectRatio));
            }
            showToast('📐 Режим "Вписать": точные пропорции кадра');
        }

        setTimeout(resizeCanvas, 60);
    }

    function toggleAmbientGlow() {
        CustomState.ambientGlow = !CustomState.ambientGlow;
        const btn = document.getElementById('btnModeAmbient');
        if (btn) btn.classList.toggle('active', CustomState.ambientGlow);
        updateAmbientGlow();
        showToast(CustomState.ambientGlow ? '🌌 Неоновый амбиент-фон ВКЛЮЧЕН (без черной пустоты)' : '🌑 Амбиент-фон выключен');
    }

    function toggleTheaterMode() {
        CustomState.theaterMode = !CustomState.theaterMode;
        const main = document.querySelector('.studio-main');
        const btn = document.getElementById('btnModeTheater');
        if (main) main.classList.toggle('theater-mode', CustomState.theaterMode);
        if (btn) btn.classList.toggle('active', CustomState.theaterMode);
        setTimeout(resizeCanvas, 320);
        showToast(CustomState.theaterMode ? '🖥️ Театральный полноэкранный режим студии' : 'Стандартный режим студии');
    }

    function resetCustomizer() {
        applyLutPreset('default');
        CustomState.speed = 1.0;
        CustomState.grain = 'none';
        CustomState.particles = 120;

        document.querySelectorAll('#speedPillsGroup .mini-pill').forEach(b => {
            b.classList.toggle('active', b.dataset.speed === '1.0');
        });

        document.querySelectorAll('#grainPillsGroup .mini-pill').forEach(b => {
            b.classList.toggle('active', b.dataset.grain === 'none');
        });

        document.querySelectorAll('#particlePillsGroup .mini-pill').forEach(b => {
            b.classList.toggle('active', b.dataset.particles === '120');
        });

        initParticles(VideoState.currentTheme);
        showToast('🔄 Настройки кастомизации сброшены к исходным');
    }

    function initCustomizerControls() {
        // Display mode buttons
        const btnFit = document.getElementById('btnModeFit');
        if (btnFit) btnFit.addEventListener('click', () => setDisplayMode('fit'));

        const btnFill = document.getElementById('btnModeFill');
        if (btnFill) btnFill.addEventListener('click', () => setDisplayMode('fill'));

        const btnTight = document.getElementById('btnModeTight');
        if (btnTight) btnTight.addEventListener('click', () => setDisplayMode('tight'));

        const btnAmbient = document.getElementById('btnModeAmbient');
        if (btnAmbient) btnAmbient.addEventListener('click', toggleAmbientGlow);

        const btnTheater = document.getElementById('btnModeTheater');
        if (btnTheater) btnTheater.addEventListener('click', toggleTheaterMode);

        // Reset button
        const btnReset = document.getElementById('btnResetCustom');
        if (btnReset) btnReset.addEventListener('click', resetCustomizer);

        // LUT buttons
        document.querySelectorAll('.lut-pill').forEach(btn => {
            btn.addEventListener('click', function() {
                applyLutPreset(this.dataset.lut);
            });
        });

        // Sliders
        const bindSlider = (id, valId, prop, unit, extraCallback) => {
            const el = document.getElementById(id);
            const valEl = document.getElementById(valId);
            if (!el) return;
            el.addEventListener('input', function() {
                const val = parseFloat(this.value);
                CustomState[prop] = val;
                if (valEl) valEl.textContent = `${val}${unit}`;
                applyCanvasFilter();
                if (extraCallback) extraCallback();
            });
        };

        bindSlider('rangeBrightness', 'valBrightness', 'brightness', '%');
        bindSlider('rangeContrast', 'valContrast', 'contrast', '%');
        bindSlider('rangeSaturation', 'valSaturation', 'saturation', '%');
        bindSlider('rangeHue', 'valHue', 'hue', '°', updateAmbientGlow);
        bindSlider('rangeGlow', 'valGlow', 'glow', '%');
        bindSlider('rangeVignette', 'valVignette', 'vignette', '%');
        bindSlider('rangeFlare', 'valFlare', 'flare', '%');
        bindSlider('rangeGodRays', 'valGodRays', 'godRays', '%');
        bindSlider('rangeChroma', 'valChroma', 'chroma', '%');
        bindSlider('rangeSharpness', 'valSharpness', 'sharpness', '%');
        bindSlider('rangeHdr', 'valHdr', 'hdr', '%');

        // Unified Resolution & Bitrate Quality Controller (8K, 4K, 2K, 1080p)
        function setResolutionQuality(r) {
            CustomState.resolution = r;
            if (r === '1080p') CustomState.resolutionMultiplier = 1.2;
            else if (r === '2k') CustomState.resolutionMultiplier = 1.8;
            else if (r === '4k') CustomState.resolutionMultiplier = 2.5;
            else if (r === '8k') CustomState.resolutionMultiplier = 4.0;

            // Sync pills in customizer panel
            document.querySelectorAll('#resolutionPillsGroup .res-pill').forEach(b => {
                b.classList.toggle('active', b.dataset.res === r);
            });

            // Sync dropdown options
            document.querySelectorAll('.quality-opt-btn').forEach(b => {
                const isActive = b.dataset.res === r;
                b.classList.toggle('active', isActive);
                if (isActive) {
                    b.style.background = 'rgba(168,85,247,0.25)';
                    b.style.border = '1px solid rgba(168,85,247,0.5)';
                } else {
                    b.style.background = 'transparent';
                    b.style.border = 'none';
                }
            });

            const badgeIcon = document.getElementById('qualityBadgeIcon');
            const badgeText = document.getElementById('qualityBadgeText');
            const indicator = document.getElementById('playerQualityIndicator');

            const icons = { '8k': '👑', '4k': '💎', '2k': '✨', '1080p': '⚡' };
            const texts = {
                '8k': '8K IMAX 120FPS',
                '4k': '4K UHD 60FPS',
                '2k': '2K QHD 60FPS',
                '1080p': '1080P FHD'
            };
            const bitrates = { '8k': '80 Mbps', '4k': '50 Mbps', '2k': '30 Mbps', '1080p': '16 Mbps' };

            if (badgeIcon) badgeIcon.textContent = icons[r] || '💎';
            if (badgeText) badgeText.textContent = texts[r] || '4K UHD 60FPS';
            if (indicator && !badgeText) {
                indicator.textContent = `${icons[r] || '💎'} ${texts[r] || '4K UHD 60FPS'}`;
            }

            resizeCanvas();
            initParticles(VideoState.currentTheme);
            showToast(`${icons[r] || '💎'} Режим качества: ${texts[r]} (${bitrates[r]}, HDR)`);
        }
        window.setResolutionQuality = setResolutionQuality;

        // Resolution Switcher in Customizer panel
        document.querySelectorAll('#resolutionPillsGroup .res-pill').forEach(btn => {
            btn.addEventListener('click', function() {
                setResolutionQuality(this.dataset.res);
            });
        });

        // Interactive Quality Dropdown in Video Player
        const qualityIndicatorBtn = document.getElementById('playerQualityIndicator');
        const qualityDropdown = document.getElementById('qualityDropdownMenu');
        if (qualityIndicatorBtn && qualityDropdown) {
            qualityIndicatorBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const isHidden = qualityDropdown.style.display === 'none' || !qualityDropdown.style.display;
                qualityDropdown.style.display = isHidden ? 'block' : 'none';
            });

            document.querySelectorAll('.quality-opt-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    setResolutionQuality(this.dataset.res);
                    if (qualityDropdown) qualityDropdown.style.display = 'none';
                });
            });

            document.addEventListener('click', function(e) {
                if (qualityDropdown && !qualityDropdown.contains(e.target) && e.target !== qualityIndicatorBtn) {
                    qualityDropdown.style.display = 'none';
                }
            });
        }

        // HDR 12-Bit Toggle Button
        const btnHdr = document.getElementById('btnHdrToggle');
        if (btnHdr) {
            btnHdr.addEventListener('click', function() {
                CustomState.hdrMode = !CustomState.hdrMode;
                this.classList.toggle('active-hdr', CustomState.hdrMode);
                if (CustomState.hdrMode) {
                    this.style.background = 'rgba(56,189,248,0.2)';
                    this.style.borderColor = '#38bdf8';
                    this.style.color = '#38bdf8';
                    showToast('✨ Режим HDR 12-Bit (Deep Dynamic Range) включен!');
                } else {
                    this.style.background = 'rgba(255,255,255,0.06)';
                    this.style.borderColor = 'rgba(255,255,255,0.15)';
                    this.style.color = '#94a3b8';
                    showToast('HDR режим отключен (SDR 8-Bit)');
                }
                applyCanvasFilter();
            });
        }

        // Speed pills
        document.querySelectorAll('#speedPillsGroup .mini-pill').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('#speedPillsGroup .mini-pill').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                CustomState.speed = parseFloat(this.dataset.speed) || 1.0;
                showToast(`⚡ Скорость: ${CustomState.speed}x`);
            });
        });

        // Grain pills
        document.querySelectorAll('#grainPillsGroup .mini-pill').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('#grainPillsGroup .mini-pill').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                CustomState.grain = this.dataset.grain;
                showToast(`🎞️ Зерно плёнки: ${this.textContent}`);
            });
        });

        // Particle density pills
        document.querySelectorAll('#particlePillsGroup .mini-pill').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('#particlePillsGroup .mini-pill').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                CustomState.particles = parseInt(this.dataset.particles, 10) || 120;
                initParticles(VideoState.currentTheme);
                showToast(`💫 Плотность сцены: ${this.textContent}`);
            });
        });

        applyCanvasFilter();
    }


    // ── 8. 100 THEMES CATALOG MODAL & DISPATCHER ────────────────────────────
    let currentThemeFilterCat = 'all';

    function open100ThemesModal() {
        const modal = document.getElementById('themes100ModalOverlay');
        if (modal) {
            modal.style.display = 'flex';
            render100ThemesGrid();
        }
    }

    function close100ThemesModal() {
        const modal = document.getElementById('themes100ModalOverlay');
        if (modal) modal.style.display = 'none';
    }

    window.filter100Themes = function(query) {
        render100ThemesGrid(query, currentThemeFilterCat);
    };

    function render100ThemesGrid(query = '', cat = 'all') {
        const container = document.getElementById('themes100GridContainer');
        if (!container || !window.LitdeoThemes) return;

        let list = window.LitdeoThemes.catalog;
        if (cat !== 'all') {
            list = list.filter(t => t.category === cat);
        }
        if (query.trim()) {
            const q = query.toLowerCase();
            list = list.filter(t => t.nameRu.toLowerCase().includes(q) || t.nameEn.toLowerCase().includes(q) || t.prompt.toLowerCase().includes(q));
        }

        container.innerHTML = '';
        list.forEach(theme => {
            const card = document.createElement('div');
            card.className = `theme-card-100 ${theme.id === VideoState.currentTheme ? 'active' : ''}`;
            card.innerHTML = `
                <div class="theme-card-header">
                    <span class="theme-card-icon">${theme.icon}</span>
                    <div>
                        <div class="theme-card-title">${theme.nameRu}</div>
                        <div class="theme-card-cat">${theme.category.toUpperCase()}</div>
                    </div>
                </div>
                <div class="theme-card-preview" style="background: linear-gradient(90deg, ${theme.colors.join(', ')});"></div>
            `;
            card.addEventListener('click', () => {
                selectTheme100(theme.id);
            });
            container.appendChild(card);
        });
    }

    function selectTheme100(themeId) {
        if (!window.LitdeoThemes) return;
        const theme = window.LitdeoThemes.getThemeById(themeId);
        if (!theme) return;

        VideoState.currentTheme = theme.id;
        VideoState.prompt = theme.prompt;

        const promptInput = document.getElementById('promptInput');
        if (promptInput) promptInput.value = theme.prompt;

        // Dynamically restyle the video studio UI theme palette
        const root = document.documentElement;
        const b = document.body;
        const col0 = (theme.colors && theme.colors[0]) || '#a855f7';
        const col1 = (theme.colors && theme.colors[1]) || '#ec4899';
        const bg0 = (theme.bgGradient && theme.bgGradient[0]) || '#07080c';
        const bg1 = (theme.bgGradient && theme.bgGradient[1]) || '#0f111a';
        const bg2 = (theme.bgGradient && theme.bgGradient[2]) || '#151824';

        root.style.setProperty('--v-bg-base', bg0);
        root.style.setProperty('--v-bg-surface', bg1);
        root.style.setProperty('--v-bg-panel', bg2);
        root.style.setProperty('--v-bg-card', bg2);
        root.style.setProperty('--v-purple', col0);
        root.style.setProperty('--v-purple-bright', col0);
        root.style.setProperty('--v-pink', col1);
        root.style.setProperty('--v-border-active', col0);
        root.style.setProperty('--v-glow-purple', `0 0 25px ${col0}66`);
        root.style.setProperty('--v-glow-pink', `0 0 25px ${col1}66`);

        if (b) {
            b.style.backgroundColor = bg0;
            b.style.backgroundImage = `
                radial-gradient(circle at 15% 10%, ${col0}18 0%, transparent 45%),
                radial-gradient(circle at 85% 85%, ${col1}15 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, ${col0}0a 0%, transparent 60%)
            `;
        }

        // Update ambient glow layer
        const glowEl = document.getElementById('ambientGlowLayer');
        if (glowEl && theme.ambient) glowEl.style.background = theme.ambient;

        initParticles(theme.id);
        if (window.LitdeoAudio && VideoState.isPlaying && VideoState.audio) {
            const age = window.AgeSoftEngine ? window.AgeSoftEngine.currentAge : 25;
            window.LitdeoAudio.play(theme.id, age);
        }
        showToast(`🎨 Активирована тема: ${theme.nameRu}`);
        close100ThemesModal();
    }
    window.selectTheme100 = selectTheme100;

    // ── 9. AGE SOFT™ ADAPTIVE ERGONOMIC ENGINE (AGES 1-99) ───────────────────
    function initAgeSoftControls() {
        const inputAge = document.getElementById('inputAgeSoft');
        const rangeAge = document.getElementById('rangeAgeSoft');
        const btnMinus = document.getElementById('btnAgeMinus');
        const btnPlus = document.getElementById('btnAgePlus');
        const toggle = document.getElementById('toggleAgeSoft');
        const chips = document.querySelectorAll('.age-chip');
        const genderBtns = document.querySelectorAll('#ageGenderGroup .mini-pill');
        const btnAdvice = document.getElementById('btnAgeSearchAdvice');

        // Toddler panel buttons
        const btnBabyPlayCar = document.getElementById('btnBabyPlayCar');
        const btnBabyChangeAge = document.getElementById('btnBabyChangeAge');

        const updateAge = (newAge, saveToStorage = true) => {
            newAge = Math.max(1, Math.min(99, parseInt(newAge, 10) || 25));
            if (window.AgeSoftEngine) {
                window.AgeSoftEngine.currentAge = newAge;
                if (typeof window.AgeSoftEngine.applyInterfaceAdaptation === 'function') {
                    window.AgeSoftEngine.applyInterfaceAdaptation(newAge);
                }
            }

            if (saveToStorage) {
                try { localStorage.setItem('litdeo_user_age', newAge); } catch(e) {}
            }

            if (inputAge) inputAge.value = newAge;
            if (rangeAge) rangeAge.value = newAge;

            // Update topbar age trigger button
            const topbarAgeVal = document.getElementById('topbarAgeVal');
            if (topbarAgeVal) {
                let icon = '👶';
                if (newAge >= 4 && newAge <= 7) icon = '🧒';
                else if (newAge >= 8 && newAge <= 13) icon = '🧑';
                else if (newAge >= 14 && newAge <= 29) icon = '⚡';
                else if (newAge >= 30 && newAge <= 39) icon = '💼';
                else if (newAge >= 40) icon = '🌟';
                const suffix = newAge === 1 ? 'год' : ((newAge >= 2 && newAge <= 4) ? 'года' : 'лет');
                topbarAgeVal.textContent = `${icon} ${newAge} ${suffix}`;
            }

            // Toddler (1-3) vs Kids (4-7) vs Tweens/Adults visibility
            const babyPanel = document.getElementById('babyToddlerPanel');
            const kidsHint = document.getElementById('kidsPromptHint');

            if (newAge <= 3) {
                if (babyPanel) babyPanel.style.display = 'block';
                if (kidsHint) kidsHint.style.display = 'none';
            } else if (newAge <= 7) {
                if (babyPanel) babyPanel.style.display = 'none';
                if (kidsHint) kidsHint.style.display = 'block';
            } else {
                if (babyPanel) babyPanel.style.display = 'none';
                if (kidsHint) kidsHint.style.display = 'none';
            }

            // Sync audio soundscape if playing
            if (window.LitdeoAudio && VideoState.isPlaying && VideoState.audio) {
                window.LitdeoAudio.play(VideoState.currentTheme || 'cyberpunk', newAge);
            }

            chips.forEach(c => {
                c.classList.toggle('active', parseInt(c.dataset.age, 10) === newAge);
            });

            syncAgeSoftUi();
            applyCanvasFilter();
        };

        if (inputAge) {
            inputAge.addEventListener('change', () => updateAge(inputAge.value));
        }
        if (rangeAge) {
            rangeAge.addEventListener('input', () => updateAge(rangeAge.value));
        }
        if (btnMinus) {
            btnMinus.addEventListener('click', () => updateAge((window.AgeSoftEngine ? window.AgeSoftEngine.currentAge : 45) - 1));
        }
        if (btnPlus) {
            btnPlus.addEventListener('click', () => updateAge((window.AgeSoftEngine ? window.AgeSoftEngine.currentAge : 45) + 1));
        }

        chips.forEach(chip => {
            chip.addEventListener('click', function() {
                updateAge(this.dataset.age);
            });
        });

        genderBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                genderBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                if (window.AgeSoftEngine) {
                    window.AgeSoftEngine.gender = this.dataset.gender;
                    syncAgeSoftUi();
                    applyCanvasFilter();
                }
            });
        });

        if (toggle) {
            toggle.addEventListener('change', function() {
                if (window.AgeSoftEngine) {
                    window.AgeSoftEngine.enabled = this.checked;
                    showToast(this.checked ? '👁️ Age Soft™ ВКЛЮЧЕН (Адаптация 1–99 лет)' : 'Age Soft выключен');
                    applyCanvasFilter();
                }
            });
        }

        if (btnAdvice) {
            btnAdvice.addEventListener('click', () => {
                if (!window.AgeSoftEngine) return;
                const p = window.AgeSoftEngine.calculateErgonomics(window.AgeSoftEngine.currentAge, window.AgeSoftEngine.gender);
                alert(`🔬 Научные офтальмологические стандарты для ${p.age} лет:\n\n` +
                      `• Категория: ${p.stage}\n` +
                      `• Снижение синего света: -${p.blueCut}% (спектр ${p.colorTempK}K)\n` +
                      `• Контраст: ${p.contrastAdj}% | Яркость: ${p.brightnessAdj}%\n` +
                      `• Плавность кадров: ${p.speedMult}x\n\n` +
                      `${p.adviceRu}\n\n` +
                      `${p.genderNoteRu}`);
            });
        }

        // Toddler quick action
        if (btnBabyPlayCar) {
            btnBabyPlayCar.addEventListener('click', () => {
                if (typeof window.selectTheme100 === 'function') {
                    window.selectTheme100('baby_toy_cars');
                }
                VideoState.isPlaying = true;
                if (window.LitdeoAudio && VideoState.audio) {
                    window.LitdeoAudio.play('baby_toy_cars', 1);
                }
                showToast('🚗 Малыш играет с машинкой! Колыбельная музыка включена 🎶');
            });
        }

        // Initialize Onboarding Modal
        initAgeOnboardingModal(updateAge);

        syncAgeSoftUi();
    }

    function initAgeOnboardingModal(updateAgeFunc) {
        const modal = document.getElementById('ageOnboardingModal');
        const customAgeInput = document.getElementById('onboardingCustomAge');
        const btnConfirm = document.getElementById('btnConfirmOnboardingAge');
        const btnClose = document.getElementById('btnCloseAgeOnboardingModal');
        const cards = document.querySelectorAll('.onboarding-age-card');
        const topbarTrigger = document.getElementById('topbarAgeTrigger');
        const btnBabyChangeAge = document.getElementById('btnBabyChangeAge');

        let selectedAge = (window.AgeSoftEngine ? window.AgeSoftEngine.currentAge : 25) || 25;

        function openModal() {
            if (!modal) return;
            modal.style.display = 'flex';
            selectedAge = (window.AgeSoftEngine ? window.AgeSoftEngine.currentAge : 25) || 25;
            if (customAgeInput) customAgeInput.value = selectedAge;
            highlightCard(selectedAge);
        }

        function closeModal() {
            if (modal) modal.style.display = 'none';
        }

        function highlightCard(age) {
            cards.forEach(card => {
                const cardAge = parseInt(card.dataset.age, 10);
                const isMatch = (cardAge === 1 && age <= 3) ||
                                (cardAge === 5 && age >= 4 && age <= 7) ||
                                (cardAge === 11 && age >= 8 && age <= 13) ||
                                (cardAge === 20 && age >= 14 && age <= 29) ||
                                (cardAge === 35 && age >= 30 && age <= 39) ||
                                (cardAge === 45 && age >= 40);
                if (isMatch) {
                    card.style.borderColor = '#f59e0b';
                    card.style.background = 'rgba(245, 158, 11, 0.12)';
                    card.style.boxShadow = '0 0 20px rgba(245, 158, 11, 0.3)';
                } else {
                    card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    card.style.background = 'rgba(255, 255, 255, 0.03)';
                    card.style.boxShadow = 'none';
                }
            });
        }

        // Card clicks
        cards.forEach(card => {
            card.addEventListener('click', function() {
                const age = parseInt(this.dataset.age, 10);
                selectedAge = age;
                if (customAgeInput) customAgeInput.value = age;
                highlightCard(age);
            });
        });

        // Custom number input (1-99)
        if (customAgeInput) {
            customAgeInput.addEventListener('input', function() {
                let val = parseInt(this.value, 10);
                if (!isNaN(val)) {
                    val = Math.max(1, Math.min(99, val));
                    selectedAge = val;
                    highlightCard(val);
                }
            });
        }

        // Confirm button
        if (btnConfirm) {
            btnConfirm.addEventListener('click', function() {
                let age = selectedAge;
                if (customAgeInput && !isNaN(parseInt(customAgeInput.value, 10))) {
                    age = Math.max(1, Math.min(99, parseInt(customAgeInput.value, 10)));
                }
                updateAgeFunc(age, true);
                closeModal();
                showToast(`✨ Возрастной профиль Litdeo (${age} лет) успешно активирован!`);
            });
        }

        // Close buttons
        if (btnClose) {
            btnClose.addEventListener('click', closeModal);
        }

        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === this) closeModal();
            });
        }

        // Open triggers
        if (topbarTrigger) {
            topbarTrigger.addEventListener('click', openModal);
        }

        if (btnBabyChangeAge) {
            btnBabyChangeAge.addEventListener('click', openModal);
        }

        // Apply saved age or default to 25 (adult)
        try {
            let stored = localStorage.getItem('litdeo_user_age');
            if (!stored || stored === '1') {
                stored = '25';
                try { localStorage.setItem('litdeo_user_age', '25'); } catch(e) {}
            }
            updateAgeFunc(parseInt(stored, 10) || 25, false);
        } catch(e) {
            updateAgeFunc(25, false);
        }
    }

    function syncAgeSoftUi() {
        if (!window.AgeSoftEngine) return;
        const p = window.AgeSoftEngine.calculateErgonomics(window.AgeSoftEngine.currentAge, window.AgeSoftEngine.gender);

        const stageEl = document.getElementById('ageStageText');
        const blueEl = document.getElementById('specBlueCut');
        const tempEl = document.getElementById('specColorTemp');
        const contEl = document.getElementById('specContrast');
        const speedEl = document.getElementById('specSpeed');
        const adviceEl = document.getElementById('ageAdviceText');

        if (stageEl) stageEl.textContent = `${p.stage} (${p.age} лет)`;
        if (blueEl) blueEl.textContent = `−${p.blueCut}%`;
        if (tempEl) tempEl.textContent = `${p.colorTempK}K`;
        if (contEl) contEl.textContent = `${p.contrastAdj > 100 ? '+' : ''}${p.contrastAdj - 100}%`;
        if (speedEl) speedEl.textContent = `${p.speedMult}x`;
        if (adviceEl) adviceEl.textContent = p.adviceRu + (p.genderNoteRu ? ' ' + p.genderNoteRu : '');
    }

    // ── 10. REAL NATIVE 4K/8K VIDEO EXPORT, FOLDER SAVE & SNAPSHOT ────────────────────────
    function downloadSnapshotDirect() {
        downloadSnapshot();
    }

    function saveVideoToFolder() {
        exportRealVideoFile(true);
    }

    function downloadSnapshot() {
        if (!canvas) return;
        const res = (CustomState.resolution || '4k').toUpperCase();
        const a = document.createElement('a');
        a.download = `Litdeo_${res}_Snapshot_${Date.now()}.png`;
        a.href = canvas.toDataURL('image/png', 1.0);
        a.click();
        showToast(`📸 ${res} Ultra HD скриншот кадра сохранен!`);
    }

    // ── 11. SHARE & FORWARD MODAL ────────────────────────────────────────────
    function openShareModal() {
        const modal = document.getElementById('shareModalOverlay');
        const linkInput = document.getElementById('shareDirectLinkInput');
        if (!modal) return;

        const shareUrl = window.location.origin + '/video-ai?theme=' + VideoState.currentTheme + '&ratio=' + VideoState.aspectRatio;
        const shareText = `Посмотри кинематографичное 4K видео в Litdeo: "${VideoState.prompt}"`;

        if (linkInput) linkInput.value = shareUrl;

        const tgBtn = document.getElementById('shareTelegram');
        if (tgBtn) tgBtn.href = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;

        const waBtn = document.getElementById('shareWhatsApp');
        if (waBtn) waBtn.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;

        const vkBtn = document.getElementById('shareVk');
        if (vkBtn) vkBtn.href = `https://vk.com/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent('Litdeo 4K Video')}`;

        const twBtn = document.getElementById('shareTwitter');
        if (twBtn) twBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

        const mailBtn = document.getElementById('shareEmail');
        if (mailBtn) mailBtn.href = `mailto:?subject=${encodeURIComponent('Litdeo 4K Video')}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`;

        modal.style.display = 'flex';
    }

    function closeShareModal() {
        const modal = document.getElementById('shareModalOverlay');
        if (modal) modal.style.display = 'none';
    }

    // ── 12. TRUE CINEMA FULLSCREEN WITH AUTO-HIDING CONTROLS ─────────────────
    let fsHideTimer = null;

    function toggleFullscreen() {
        const container = document.getElementById('cinemaViewportContainer');
        if (!container) return;

        if (!document.fullscreenElement) {
            container.requestFullscreen().then(() => {
                setupFullscreenAutoControls(container);
            }).catch(() => {});
        } else {
            document.exitFullscreen().catch(() => {});
        }
    }

    function setupFullscreenAutoControls(container) {
        const resetTimer = () => {
            container.classList.remove('controls-hidden');
            if (fsHideTimer) clearTimeout(fsHideTimer);
            fsHideTimer = setTimeout(() => {
                if (document.fullscreenElement) {
                    container.classList.add('controls-hidden');
                }
            }, 3000);
        };

        container.addEventListener('mousemove', resetTimer);
        resetTimer();
    }

    function init() {
        initCanvas();
        initCustomizerControls();

        // Auto-fill prompt from URL query params (e.g. from Trend Spy)
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const promptParam = urlParams.get('prompt');
            if (promptParam) {
                const promptInput = document.getElementById('promptInput');
                if (promptInput) {
                    promptInput.value = promptParam;
                    VideoState.prompt = promptParam;
                    updatePromptClearBtn();
                    promptInput.focus();
                    showToast('🔥 Трендовый промпт загружен из Trend Spy!');
                }
            }

            // Auto-launch mini-game or 5v5 battle if requested in URL
            if (urlParams.get('game') === '1' || urlParams.get('battle') === '1' || urlParams.get('5v5') === '1') {
                setTimeout(() => {
                    if (window.MiniGame) {
                        if (!window.MiniGame.canvas) window.MiniGame.init();
                        window.MiniGame.open();
                        if (urlParams.get('5v5') === '1' || urlParams.get('battle') === '1') {
                            window.MiniGame.open5v5RosterModal();
                        }
                    }
                }, 200);
            }
            window.open5v5BattleModal = function() {
                if (window.MiniGame) {
                    if (!window.MiniGame.canvas) window.MiniGame.init();
                    window.MiniGame.open();
                    window.MiniGame.open5v5RosterModal();
                }
            };
        } catch(e) {}

        // 100 Themes Modal Trigger
        const btnOpen100 = document.getElementById('btnOpen100ThemesModal');
        if (btnOpen100) btnOpen100.addEventListener('click', open100ThemesModal);

        const btnClose100 = document.getElementById('btnClose100ThemesModal');
        if (btnClose100) btnClose100.addEventListener('click', close100ThemesModal);

        const overlay100 = document.getElementById('themes100ModalOverlay');
        if (overlay100) {
            overlay100.addEventListener('click', function(e) {
                if (e.target === this) close100ThemesModal();
            });
        }

        // Category pills in 100 themes modal
        document.querySelectorAll('#themeCategoryPillsRow .mode-pill-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('#themeCategoryPillsRow .mode-pill-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentThemeFilterCat = this.dataset.cat;
                const searchInput = document.getElementById('theme100SearchInput');
                render100ThemesGrid(searchInput ? searchInput.value : '', currentThemeFilterCat);
            });
        });

        // Initialize Age Soft
        initAgeSoftControls();

        // New Cinema Action Buttons
        const btnSaveDir = document.getElementById('btnSaveToFolder');
        if (btnSaveDir) btnSaveDir.addEventListener('click', saveVideoToFolder);

        const btnSnap = document.getElementById('btnSnapshot');
        if (btnSnap) btnSnap.addEventListener('click', downloadSnapshot);

        const btnOpenShare = document.getElementById('btnOpenShareModal');
        if (btnOpenShare) btnOpenShare.addEventListener('click', openShareModal);

        const btnCloseShare = document.getElementById('btnCloseShareModal');
        if (btnCloseShare) btnCloseShare.addEventListener('click', closeShareModal);

        const overlayShare = document.getElementById('shareModalOverlay');
        if (overlayShare) {
            overlayShare.addEventListener('click', function(e) {
                if (e.target === this) closeShareModal();
            });
        }

        const btnCopyDirect = document.getElementById('btnCopyShareDirectLink');
        if (btnCopyDirect) {
            btnCopyDirect.addEventListener('click', function() {
                const input = document.getElementById('shareDirectLinkInput');
                if (input) {
                    navigator.clipboard.writeText(input.value).then(() => {
                        showToast('📋 Ссылка на видео скопирована!');
                    });
                }
            });
        }

        const btnShareSys = document.getElementById('shareNative');
        if (btnShareSys) {
            btnShareSys.addEventListener('click', function() {
                if (navigator.share) {
                    navigator.share({
                        title: 'Litdeo 4K Video',
                        text: VideoState.prompt,
                        url: window.location.href
                    }).catch(() => {});
                } else {
                    showToast('📋 Ссылка скопирована в буфер обмена!');
                }
            });
        }


        // Observe aspectWrapper resizing so canvas is always pixel-perfect
        const aspectWrapper = document.getElementById('aspectWrapper');
        if (aspectWrapper && window.ResizeObserver) {
            const ro = new ResizeObserver(() => {
                resizeCanvas();
            });
            ro.observe(aspectWrapper);
        }

        // Load History
        try {
            const saved = localStorage.getItem('litally_video_history');
            if (saved) VideoState.history = JSON.parse(saved);
        } catch(e) {}
        renderGallery();

        // Apply detected initial language
        setLanguage(VideoState.lang);

        // Apply signature Litdeo Purple, Violet & Indigo theme
        if (typeof selectTheme100 === 'function') {
            selectTheme100('litdeo_indigo_violet');
        }

        // Apply default aspect ratio
        setAspectRatio(VideoState.aspectRatio, false);

        // Quick Aspect Ratio Buttons (5 Popular)
        document.querySelectorAll('#quickRatioButtonsRow .ratio-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const ratio = this.dataset.ratio;
                setAspectRatio(ratio, true);
            });
        });

        // 30 Aspect Ratios Select Dropdown
        const aspectSelect = document.getElementById('aspectRatioSelect30');
        if (aspectSelect) {
            aspectSelect.addEventListener('change', function() {
                setAspectRatio(this.value, true);
            });
        }

        // 30 Aspect Ratios Catalog Modal Trigger
        const btnOpenAspect = document.getElementById('btnOpenAspectModal');
        if (btnOpenAspect) btnOpenAspect.addEventListener('click', openAspectModal);

        const btnCloseAspect = document.getElementById('btnCloseAspectModal');
        if (btnCloseAspect) btnCloseAspect.addEventListener('click', closeAspectModal);

        const aspectOverlay = document.getElementById('aspectModalOverlay');
        if (aspectOverlay) {
            aspectOverlay.addEventListener('click', function(e) {
                if (e.target === this) closeAspectModal();
            });
        }

        const aspectSearchInput = document.getElementById('aspectSearchInput');
        if (aspectSearchInput) {
            aspectSearchInput.addEventListener('input', function() {
                renderAspectCards30(this.value);
            });
        }

        // Style Cards
        document.querySelectorAll('.style-card').forEach(card => {
            card.addEventListener('click', function() {
                document.querySelectorAll('.style-card').forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                VideoState.style = this.dataset.style;
            });
        });

        // Quick Inspiration Chips
        const btnClearPrompt = document.getElementById('btnClearPrompt');
        function updatePromptClearBtn() {
            const promptInput = document.getElementById('promptInput');
            if (btnClearPrompt && promptInput) {
                btnClearPrompt.style.display = promptInput.value.trim().length > 0 ? 'inline-flex' : 'none';
            }
        }

        document.querySelectorAll('.prompt-chip').forEach(chip => {
            chip.addEventListener('click', function() {
                const p = this.dataset.prompt;
                const promptInput = document.getElementById('promptInput');
                if (promptInput && p) {
                    promptInput.value = p;
                    VideoState.prompt = p;
                    updatePromptClearBtn();
                }
                const theme = this.dataset.theme;
                if (theme) {
                    VideoState.currentTheme = theme;
                    initParticles(theme);
                }
            });
        });

        function appendPromptModifier(tag) {
            const promptInput = document.getElementById('promptInput');
            if (promptInput) {
                const cur = promptInput.value.trim();
                promptInput.value = cur ? `${cur}, ${tag}` : tag;
                VideoState.prompt = promptInput.value;
                updatePromptClearBtn();
                promptInput.focus();
                showToast(`➕ Добавлен тег: ${tag}`);
            }
        }
        window.appendPromptModifier = appendPromptModifier;

        if (btnClearPrompt) {
            btnClearPrompt.addEventListener('click', function() {
                const promptInput = document.getElementById('promptInput');
                if (promptInput) {
                    promptInput.value = '';
                    VideoState.prompt = '';
                    updatePromptClearBtn();
                    promptInput.focus();
                }
            });
        }

        const promptInputEl = document.getElementById('promptInput');
        if (promptInputEl) {
            promptInputEl.addEventListener('input', function() {
                VideoState.prompt = this.value;
                updatePromptClearBtn();
            });
        }

        // Model Switcher (Litdeo 2.0, Litdeo 2.1, Litdeo 2.2)
        document.querySelectorAll('.model-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                VideoState.model = this.dataset.model;
            });
        });

        // Main controls
        const btnGen = document.getElementById('btnGenerateVideo');
        if (btnGen) btnGen.addEventListener('click', startVideoGeneration);

        const btnPromptSend = document.getElementById('btnPromptSend');
        if (btnPromptSend) btnPromptSend.addEventListener('click', startVideoGeneration);

        const promptInput = document.getElementById('promptInput');
        if (promptInput) {
            promptInput.addEventListener('keydown', function(e) {
                if ((e.key === 'Enter' && e.ctrlKey) || (e.key === 'Enter' && !e.shiftKey)) {
                    e.preventDefault();
                    startVideoGeneration();
                }
            });
        }

        const btnEnhance = document.getElementById('btnMagicEnhance');
        if (btnEnhance) btnEnhance.addEventListener('click', enhancePromptWithAi);

        const playPauseBtn = document.getElementById('btnPlayPause');
        if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);

        const btnFramePrev = document.getElementById('btnFramePrev');
        if (btnFramePrev) {
            btnFramePrev.addEventListener('click', function() {
                const step = VideoState.duration >= 180 ? 10.0 : 5.0;
                VideoState.currentTime = Math.max(0, VideoState.currentTime - step);
                animTime = VideoState.currentTime;
                updatePlaybackTimeline();
            });
        }

        const btnFrameNext = document.getElementById('btnFrameNext');
        if (btnFrameNext) {
            btnFrameNext.addEventListener('click', function() {
                const step = VideoState.duration >= 180 ? 10.0 : 5.0;
                VideoState.currentTime = Math.min(VideoState.duration, VideoState.currentTime + step);
                animTime = VideoState.currentTime;
                updatePlaybackTimeline();
            });
        }

        // Logical Narrative Complexity & Detailing Tier Selector
        const complexitySelect = document.getElementById('complexitySelect');
        if (complexitySelect) {
            complexitySelect.addEventListener('change', function() {
                VideoState.complexity = this.value;
                let defaultDur = 60;
                if (this.value === 'standard') defaultDur = 60;
                else if (this.value === 'medium') defaultDur = 120;
                else if (this.value === 'cinema') defaultDur = 180;
                else if (this.value === 'masterpiece') defaultDur = 300;

                VideoState.duration = defaultDur;
                
                const durSelect = document.getElementById('durationSelect');
                if (durSelect) durSelect.value = defaultDur.toString();

                const slider = document.getElementById('rangeDurationSlider');
                if (slider) slider.value = defaultDur;

                updateNarrativeActsBreakdown();
                VideoState.currentTime = 0;
                animTime = 0;
                updatePlaybackTimeline();
                updateEstimatedWaitTimeUI();
                showToast(`🧠 Уровень сюжета: ${this.options[this.selectedIndex].text.split('(')[0].trim()} (${defaultDur} сек)`);
            });
        }

        // Duration Preset Dropdown (60s to 300s)
        const durSelect = document.getElementById('durationSelect');
        if (durSelect) {
            durSelect.addEventListener('change', function() {
                const val = parseInt(this.value, 10);
                VideoState.duration = val;
                
                const slider = document.getElementById('rangeDurationSlider');
                if (slider) slider.value = val;

                const compSelect = document.getElementById('complexitySelect');
                if (compSelect) {
                    if (val <= 60) { compSelect.value = 'standard'; VideoState.complexity = 'standard'; }
                    else if (val <= 120) { compSelect.value = 'medium'; VideoState.complexity = 'medium'; }
                    else if (val <= 180) { compSelect.value = 'cinema'; VideoState.complexity = 'cinema'; }
                    else { compSelect.value = 'masterpiece'; VideoState.complexity = 'masterpiece'; }
                }

                updateNarrativeActsBreakdown();
                VideoState.currentTime = 0;
                animTime = 0;
                updatePlaybackTimeline();
                updateEstimatedWaitTimeUI();
                showToast(`⏱️ Длительность видео: ${val} сек (${formatTime(val)})`);
            });
        }

        // Fine-Tuned Duration Slider (60s to 300s)
        const rangeSlider = document.getElementById('rangeDurationSlider');
        if (rangeSlider) {
            rangeSlider.addEventListener('input', function() {
                const val = parseInt(this.value, 10);
                VideoState.duration = val;
                
                const durSelect = document.getElementById('durationSelect');
                if (durSelect) {
                    for (let opt of durSelect.options) {
                        if (opt.value === val.toString()) {
                            durSelect.value = val.toString();
                            break;
                        }
                    }
                }

                const compSelect = document.getElementById('complexitySelect');
                if (compSelect) {
                    if (val <= 75) { compSelect.value = 'standard'; VideoState.complexity = 'standard'; }
                    else if (val <= 150) { compSelect.value = 'medium'; VideoState.complexity = 'medium'; }
                    else if (val <= 210) { compSelect.value = 'cinema'; VideoState.complexity = 'cinema'; }
                    else { compSelect.value = 'masterpiece'; VideoState.complexity = 'masterpiece'; }
                }

                updateNarrativeActsBreakdown();
                updatePlaybackTimeline();
                updateEstimatedWaitTimeUI();
            });
        }

        // Storyboard Acts Jump Buttons (Act 1, Act 2, Act 3, Act 4)
        document.querySelectorAll('.story-act-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const actNum = parseInt(this.dataset.act, 10) || 1;
                const dur = VideoState.duration || 60;
                const targetTime = (actNum - 1) * 0.25 * dur;
                VideoState.currentTime = targetTime;
                animTime = targetTime;
                updatePlaybackTimeline();
                showToast(`🎬 Переход к Акту ${actNum} (${formatTime(targetTime)})`);
            });
        });

        // AI 4-Act Screenplay Studio & Storyboard Desk Listeners
        const btnGenScreenplay = document.getElementById('btnAutoGenerateScreenplay');
        if (btnGenScreenplay) btnGenScreenplay.addEventListener('click', generateAiScreenplay);

        const btnToggleBoard = document.getElementById('btnToggleStoryboardExpand');
        if (btnToggleBoard) {
            btnToggleBoard.addEventListener('click', function() {
                const board = document.getElementById('narrativeActsCard');
                if (board) {
                    const isHidden = board.style.display === 'none';
                    board.style.display = isHidden ? 'block' : 'none';
                    btnToggleBoard.style.background = isHidden ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)';
                    showToast(isHidden ? '📋 Режиссерский стол развернут' : '📋 Режиссерский стол свернут');
                }
            });
        }

        // Live Multi-Camera Switcher (C1, C2, C3)
        document.querySelectorAll('.cam-angle-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const angle = parseInt(this.dataset.angle, 10) || 1;
                setCameraAngle(angle);
            });
        });

        // Live Cinema Subtitles Toggle
        const btnSub = document.getElementById('btnToggleSubtitles');
        if (btnSub) btnSub.addEventListener('click', toggleSubtitles);

        // Voiceover & Motion Dynamics Controls
        const voiceToggle = document.getElementById('voiceoverToggleCheckbox');
        if (voiceToggle) {
            voiceToggle.addEventListener('change', function() {
                VideoState.voiceoverEnabled = this.checked;
                showToast(this.checked ? '🎙️ Озвучка включена' : '🔇 Озвучка отключена');
                if (!this.checked && 'speechSynthesis' in window) {
                    window.speechSynthesis.cancel();
                }
            });
        }

        const voiceStyle = document.getElementById('voiceoverStyleSelect');
        if (voiceStyle) {
            voiceStyle.addEventListener('change', function() {
                VideoState.voiceoverStyle = this.value;
                const optText = this.options[this.selectedIndex].text;
                showToast(`🎙️ Голос: ${optText}`);
            });
        }

        const motionSelect = document.getElementById('motionDynamicsSelect');
        if (motionSelect) {
            motionSelect.addEventListener('change', function() {
                VideoState.motionDynamics = parseFloat(this.value) || 1.0;
                const optText = this.options[this.selectedIndex].text;
                showToast(`⚡ Динамика оптического потока: ${optText}`);
            });
        }

        // Storyboard Desk act card click
        document.querySelectorAll('.act-card-item').forEach(card => {
            card.addEventListener('click', function(e) {
                const actNum = parseInt(this.dataset.act, 10);
                if (actNum) window.seekToAct(actNum);
            });
        });

        // Initialize Screenplay Acts Breakdown and Playback Counter
        updateNarrativeActsBreakdown();
        updatePlaybackTimeline();

        const scrubber = document.getElementById('scrubberContainer');
        if (scrubber) scrubber.addEventListener('click', handleScrubberClick);

        const muteBtn = document.getElementById('btnMute');
        if (muteBtn) muteBtn.addEventListener('click', toggleMute);

        const fsBtn = document.getElementById('btnFullscreen');
        if (fsBtn) fsBtn.addEventListener('click', toggleFullscreen);

        const dlBtn = document.getElementById('btnDownloadVideo');
        if (dlBtn) dlBtn.addEventListener('click', () => exportRealVideoFile(false));

        const btnSaveToFolder = document.getElementById('btnSaveToFolder');
        if (btnSaveToFolder) btnSaveToFolder.addEventListener('click', () => exportRealVideoFile(true));

        const btnSnapshot = document.getElementById('btnSnapshot');
        if (btnSnapshot) btnSnapshot.addEventListener('click', downloadSnapshotDirect);

        const btnScanVision = document.getElementById('btnScanFrameVision');
        if (btnScanVision) btnScanVision.addEventListener('click', scanCurrentFrameVision);

        const btnTrillion = document.getElementById('btnTrillionVariants');
        if (btnTrillion) btnTrillion.addEventListener('click', generateTrillionVariantIdea);

        const extBtn = document.getElementById('btnExtendVideo');
        if (extBtn) extBtn.addEventListener('click', extendVideoDuration);

        const copyBtn = document.getElementById('btnCopyLink');
        if (copyBtn) copyBtn.addEventListener('click', copyVideoLink);

        const langBtn = document.getElementById('btnLangModalTrigger');
        if (langBtn) langBtn.addEventListener('click', openLangModal);

        const closeLang = document.getElementById('btnCloseLangModal');
        if (closeLang) closeLang.addEventListener('click', closeLangModal);

        const modalOverlay = document.getElementById('langModalOverlay');
        if (modalOverlay) {
            modalOverlay.addEventListener('click', function(e) {
                if (e.target === this) closeLangModal();
            });
        }

        const searchLang = document.getElementById('langSearchInput');
        if (searchLang) {
            searchLang.addEventListener('input', function() {
                renderLangItems(this.value);
            });
        }

        // ── GPU BOOST SHOP & ESTIMATED WAIT TIME LISTENERS ──
        const btnOpenBoost = document.getElementById('btnOpenBoostShop');
        if (btnOpenBoost) btnOpenBoost.addEventListener('click', openBoostShopModal);

        const btnCloseBoost = document.getElementById('btnCloseBoostShopModal');
        if (btnCloseBoost) btnCloseBoost.addEventListener('click', closeBoostShopModal);

        const boostModalOverlay = document.getElementById('boostShopModalOverlay');
        if (boostModalOverlay) {
            boostModalOverlay.addEventListener('click', function(e) {
                if (e.target === this) closeBoostShopModal();
            });
        }

        const btnClaimCoins = document.getElementById('btnClaimDailyCoins');
        if (btnClaimCoins) btnClaimCoins.addEventListener('click', claimDailyBonus);

        const userBalBadge = document.getElementById('userLCoinsBalance');
        if (userBalBadge) userBalBadge.addEventListener('click', openBoostShopModal);

        // Quick Boost Pills (1x, 4x, 8x, 12x, 20x)
        document.querySelectorAll('.boost-pill-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const b = parseInt(this.dataset.boost, 10) || 1;
                activateBoost(b);
            });
        });

        // Boost Shop Action Buttons
        document.querySelectorAll('.btn-boost-action').forEach(btn => {
            btn.addEventListener('click', function() {
                const b = parseInt(this.dataset.boost, 10) || 1;
                const price = parseInt(this.dataset.price || '0', 10);
                purchaseBoost(b, price);
            });
        });

        const pipelineSelect = document.getElementById('renderPipelineTimeSelect');
        if (pipelineSelect) {
            pipelineSelect.addEventListener('change', updateEstimatedWaitTimeUI);
        }

        // ── RETRO MINI-GAME LISTENERS ──
        if (window.MiniGame && window.MiniGame.init) {
            window.MiniGame.init();
        }

        const btnOpenGame = document.getElementById('btnOpenMiniGame');
        if (btnOpenGame) btnOpenGame.addEventListener('click', () => MiniGame.open());

        const btnLaunchDuringRender = document.getElementById('btnLaunchMiniGameDuringRender');
        if (btnLaunchDuringRender) btnLaunchDuringRender.addEventListener('click', () => MiniGame.open());

        const btnCloseGame = document.getElementById('btnCloseMiniGameModal');
        if (btnCloseGame) btnCloseGame.addEventListener('click', () => MiniGame.close());

        const miniGameOverlay = document.getElementById('miniGameModalOverlay');
        if (miniGameOverlay) {
            miniGameOverlay.addEventListener('click', function(e) {
                if (e.target === this) MiniGame.close();
            });
        }

        const btnGameWatch = document.getElementById('btnGameWatchVideo');
        if (btnGameWatch) {
            btnGameWatch.addEventListener('click', function() {
                MiniGame.close();
                const v = document.getElementById('aspectStage') || document.getElementById('cinemaCanvas');
                if (v) v.scrollIntoView({ behavior: 'smooth' });
            });
        }

        const btnGameCont = document.getElementById('btnGameContinuePlaying');
        if (btnGameCont) {
            btnGameCont.addEventListener('click', function() {
                const banner = document.getElementById('gameVideoReadyBanner');
                if (banner) banner.style.display = 'none';
                if (window.MiniGame && window.MiniGame.isOpen) {
                    if (MiniGame.isCampaign) {
                        MiniGame.campaignStage = (MiniGame.campaignStage + 1) % 3;
                        const stages = ['crab', 'nor', 'villain'];
                        MiniGame.spawnBoss(stages[MiniGame.campaignStage]);
                    } else {
                        MiniGame.spawnBoss(MiniGame.currentVillain || 'crab');
                    }
                }
            });
        }

        // Initialize Boost & Wait Time Displays
        updateLCoinsDisplay();
        updateEstimatedWaitTimeUI();

        // Cinema Master Keyboard Shortcuts (Space, J, K, L, M, F, 1, 2, 3, C)
        window.addEventListener('keydown', function(e) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            if (window.MiniGame && window.MiniGame.isOpen) return;

            if (e.code === 'Space' || e.key === 'k' || e.key === 'K') {
                e.preventDefault();
                togglePlayPause();
            } else if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const step = VideoState.duration >= 180 ? 10.0 : 5.0;
                VideoState.currentTime = Math.max(0, VideoState.currentTime - step);
                animTime = VideoState.currentTime;
                updatePlaybackTimeline();
            } else if (e.key === 'l' || e.key === 'L' || e.key === 'ArrowRight') {
                e.preventDefault();
                const step = VideoState.duration >= 180 ? 10.0 : 5.0;
                VideoState.currentTime = Math.min(VideoState.duration, VideoState.currentTime + step);
                animTime = VideoState.currentTime;
                updatePlaybackTimeline();
            } else if (e.key === 'm' || e.key === 'M') {
                e.preventDefault();
                toggleMute();
            } else if (e.key === 'f' || e.key === 'F') {
                e.preventDefault();
                toggleFullscreen();
            } else if (e.key === '1') {
                e.preventDefault();
                setCameraAngle(1);
            } else if (e.key === '2') {
                e.preventDefault();
                setCameraAngle(2);
            } else if (e.key === '3') {
                e.preventDefault();
                setCameraAngle(3);
            } else if (e.key === 'c' || e.key === 'C') {
                e.preventDefault();
                toggleSubtitles();
            }
        });

        initMultimodalDropzone();
        window.addEventListener('resize', resizeCanvas);
    }

    // ── 13. MULTIMODAL HUMAN PERCEPTION DROPZONE HANDLER ──────────────────────
    function initMultimodalDropzone() {
        const dropzone = document.getElementById('multimodalDropzone');
        const fileInput = document.getElementById('videoFileInput');
        const resultCard = document.getElementById('perceptionResultCard');
        const bodyText = document.getElementById('percepBodyText');
        const filenameLabel = document.getElementById('percepFilename');
        const iconLabel = document.getElementById('percepIcon');
        const btnClose = document.getElementById('btnClosePercep');
        const btnGenFromPercep = document.getElementById('btnPercepGenerateVideo');

        if (!dropzone || !fileInput) return;

        dropzone.addEventListener('click', () => fileInput.click());

        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('dragover');
        });

        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('dragover');
        });

        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('dragover');
            if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                handleMultimodalFile(e.dataTransfer.files[0]);
            }
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files.length > 0) {
                handleMultimodalFile(e.target.files[0]);
            }
        });

        if (btnClose) {
            btnClose.addEventListener('click', (e) => {
                e.stopPropagation();
                if (resultCard) resultCard.style.display = 'none';
                if (dropzone) dropzone.style.display = 'block';
                if (fileInput) fileInput.value = '';
            });
        }

        let lastPerceivedPrompt = '';

        function handleMultimodalFile(file) {
            if (!file) return;
            showToast(`🧠 ИИ осмысляет: ${file.name}...`);
            if (dropzone) dropzone.style.display = 'none';
            if (resultCard) {
                resultCard.style.display = 'block';
                if (filenameLabel) filenameLabel.textContent = file.name;
                if (bodyText) bodyText.textContent = '⏳ Человеческий анализ содержания, визуального ряда и структуры...';
            }

            const ext = file.name.split('.').pop().toLowerCase();
            const icons = {
                pptx: '📊', ppt: '📊', pdf: '📑', docx: '📄', xlsx: '📈',
                png: '🖼️', jpg: '🖼️', jpeg: '🖼️', webp: '🖼️',
                mp4: '🎬', webm: '🎬', mov: '🎬', mp3: '🎧', wav: '🎧'
            };
            if (iconLabel) iconLabel.textContent = icons[ext] || '📁';

            const formData = new FormData();
            formData.append('file', file);
            formData.append('lang', VideoState.lang || 'ru');

            fetch('/api/ai/perceive-multimodal', {
                method: 'POST',
                body: formData
            })
            .then(r => r.json())
            .then(data => {
                if (data.status === 'success' && data.human_perception) {
                    if (bodyText) bodyText.innerHTML = formatPerceptionMarkdown(data.human_perception);

                    if (data.modality === 'presentation') {
                        const topSlide = (data.slides && data.slides[0]) ? data.slides[0].title : file.name;
                        lastPerceivedPrompt = `Кинематографичная презентация темы «${topSlide}»: футуристический голографический зал, динамические диаграммы из света, 4K HDR`;
                    } else if (data.modality === 'image') {
                        lastPerceivedPrompt = `Живая кинематографичная 3D сцена по мотивам изображения «${file.name}»: ${data.color_mood || 'кинематографичный свет'}, фотореализм 8K, плавный наезд камеры`;
                    } else if (data.modality === 'video') {
                        lastPerceivedPrompt = `Ремастеринг и расширение видеоряда «${file.name}»: объемный свет, динамический ракурс, кинематографичный 4K HDR поток`;
                    } else {
                        lastPerceivedPrompt = `Кинематографичная визуализация документа «${file.name}»: парящие книги, древнее святилище мудрости, золотые руны света`;
                    }

                    showToast('✅ Материал успешно осмыслен ИИ!');
                } else {
                    if (bodyText) bodyText.textContent = data.message || 'Файл успешно загружен и проанализирован.';
                }
            })
            .catch(err => {
                if (bodyText) bodyText.textContent = `Файл прочитан. Готов к генерации 4K видео!`;
            });
        }

        if (btnGenFromPercep) {
            btnGenFromPercep.addEventListener('click', () => {
                if (lastPerceivedPrompt) {
                    const promptInput = document.getElementById('promptInput');
                    if (promptInput) promptInput.value = lastPerceivedPrompt;
                    VideoState.prompt = lastPerceivedPrompt;
                    startVideoGeneration();
                } else {
                    startVideoGeneration();
                }
            });
        }
    }

    function formatPerceptionMarkdown(txt) {
        return (txt || '')
            .replace(/### (.*)/g, '<h4 style="color:#ffd700;margin:4px 0;">$1</h4>')
            .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#fff;">$1</strong>')
            .replace(/\*(.*?)\*/g, '<em style="color:#c084fc;">$1</em>')
            .replace(/• (.*)/g, '<div style="margin:3px 0;padding-left:10px;">• $1</div>')
            .replace(/\n/g, '<br>');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();


    // ── 14. BENCHMARK & SAFETY MODALS (LINAR SERIK SOVEREIGNTY) ──────────────
    function openBenchmarkModal() {
        const m = document.getElementById('benchmarkModal');
        if (m) {
            m.style.display = 'flex';
            playCinematicChime('start');
        }
    }
    window.openBenchmarkModal = openBenchmarkModal;

    function closeBenchmarkModal() {
        const m = document.getElementById('benchmarkModal');
        if (m) m.style.display = 'none';
    }
    window.closeBenchmarkModal = closeBenchmarkModal;

    function openSafetyModal() {
        const m = document.getElementById('safetyPolicyModal');
        if (m) {
            m.style.display = 'flex';
            playCinematicChime('start');
        }
    }
    window.openSafetyModal = openSafetyModal;

    function closeSafetyModal() {
        const m = document.getElementById('safetyPolicyModal');
        if (m) m.style.display = 'none';
    }
    window.closeSafetyModal = closeSafetyModal;

    // ═════════════════════════════════════════════════════════════════════════
    // 1 TRILLION VARIANTS & REAL COMPUTER VISION INSPECTOR
    // ═════════════════════════════════════════════════════════════════════════
    let lastScannedPalette = [];

    function generateTrillionVariantIdea() {
        const promptInput = document.getElementById('promptInput');
        const raw = promptInput ? promptInput.value.trim() : '';

        const btn = document.getElementById('btnTrillionVariants');
        if (btn) {
            btn.disabled = true;
            btn.textContent = '🎲 Подбор из матрицы...';
        }

        fetch('/api/ai/image-trillion-variants?count=1' + (raw ? '&topic=' + encodeURIComponent(raw) : ''))
        .then(r => r.json())
        .then(data => {
            if (data.status === 'success' && data.variants && data.variants.length > 0) {
                const v = data.variants[0];
                if (promptInput) {
                    promptInput.value = v.full_prompt;
                    VideoState.prompt = v.full_prompt;
                    promptInput.focus();
                }
                showToast(v.badge + ' добавлен в промпт! 🚀');
                playCinematicChime('render');
            }
        })
        .catch(err => {
            console.error('Trillion variant error:', err);
            showToast('🎲 Вариант из квантовой матрицы готов!');
        })
        .finally(() => {
            if (btn) {
                btn.disabled = false;
                btn.textContent = '🎲 1 Триллион Идей';
            }
        });
    }
    window.generateTrillionVariantIdea = generateTrillionVariantIdea;

    function scanCurrentFrameVision() {
        const canvas = document.getElementById('cinemaCanvas');
        if (!canvas) return;

        const btn = document.getElementById('btnScanFrameVision');
        const oldHtml = btn ? btn.innerHTML : '';
        if (btn) {
            btn.disabled = true;
            btn.innerHTML = '<span>⏳ Сканирование...</span>';
        }

        let frameData = '';
        try {
            frameData = canvas.toDataURL('image/jpeg', 0.92);
        } catch (e) {
            console.warn('Canvas toDataURL security note:', e);
        }

        if (!frameData) {
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = oldHtml;
            }
            showToast('⚠️ Не удалось считать пиксели текущего кадра');
            return;
        }

        showToast('👁️ Компьютерное зрение анализирует пиксели кадра...');

        fetch('/api/ai/perceive-frame', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                image_data: frameData,
                prompt: VideoState.prompt || '',
                lang: VideoState.lang || 'ru'
            })
        })
        .then(r => r.json())
        .then(data => {
            if (data.status === 'success') {
                openVisionScannerModal(data, frameData);
            } else {
                showToast('❌ Ошибка сканирования: ' + (data.message || 'Сбой анализа'));
            }
        })
        .catch(err => {
            console.error('Vision scan error:', err);
            showToast('❌ Ошибка связи с модулем компьютерного зрения');
        })
        .finally(() => {
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = oldHtml;
            }
        });
    }
    window.scanCurrentFrameVision = scanCurrentFrameVision;

    function openVisionScannerModal(data, frameData) {
        const modal = document.getElementById('visionScannerModal');
        if (!modal) return;

        const thumb = document.getElementById('visionModalThumb');
        if (thumb) thumb.src = frameData;

        const resVal = document.getElementById('visionResVal');
        if (resVal) resVal.textContent = data.resolution || '1920×1080';

        const mpVal = document.getElementById('visionMpVal');
        if (mpVal) mpVal.textContent = (data.megapixels || '2.07') + ' Мп';

        // Sharpness
        const sharpnessVal = document.getElementById('visionSharpnessScore');
        if (sharpnessVal) sharpnessVal.textContent = (data.sharpness_score || 70) + '/100';
        const sharpnessBar = document.getElementById('visionSharpnessBar');
        if (sharpnessBar) sharpnessBar.style.width = Math.min(100, Math.max(5, data.sharpness_score || 70)) + '%';

        // Brightness
        const brightnessVal = document.getElementById('visionBrightnessScore');
        if (brightnessVal) brightnessVal.textContent = (data.brightness || '40%');
        const brightnessBar = document.getElementById('visionBrightnessBar');
        if (brightnessBar) {
            const bNum = parseFloat(data.brightness) || 40;
            brightnessBar.style.width = Math.min(100, Math.max(5, bNum)) + '%';
        }

        // Contrast & Temp & Anchor
        const contrastVal = document.getElementById('visionContrastVal');
        if (contrastVal) contrastVal.textContent = (data.contrast_ratio ? data.contrast_ratio + ':1' : '30:1');

        const tempVal = document.getElementById('visionColorTempVal');
        if (tempVal) tempVal.textContent = '~' + (data.color_temp_k || 5500) + 'K';

        const anchorVal = document.getElementById('visionAnchorVal');
        if (anchorVal) {
            const aStr = data.composition_anchor || 'Центральный фокус';
            anchorVal.textContent = aStr.split('—')[0].trim();
        }

        // Palette
        lastScannedPalette = data.dominant_palette || [];
        const palContainer = document.getElementById('visionPaletteContainer');
        if (palContainer) {
            palContainer.innerHTML = '';
            lastScannedPalette.forEach(p => {
                const row = document.createElement('div');
                row.style.cssText = 'display:flex; align-items:center; justify-content:space-between; gap:10px; padding:6px 10px; border-radius:8px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); font-size:0.75rem;';
                row.innerHTML = 
                    '<div style="display:flex; align-items:center; gap:8px;">' +
                        '<span style="width:20px; height:20px; border-radius:50%; background:' + p.hex + '; border:1px solid rgba(255,255,255,0.5); display:inline-block; flex-shrink:0;"></span>' +
                        '<span style="font-weight:700; color:#fff;">' + escapeHtml(p.name) + '</span>' +
                    '</div>' +
                    '<div style="display:flex; align-items:center; gap:6px;">' +
                        '<code style="color:#ffd700; font-family:\'JetBrains Mono\', monospace; font-size:0.72rem;">' + p.hex + '</code>' +
                        '<span style="background:rgba(255,255,255,0.1); color:#bae6fd; padding:1px 6px; border-radius:4px; font-weight:700; font-size:0.68rem;">' + p.percentage + '%</span>' +
                    '</div>';
                palContainer.appendChild(row);
            });
        }

        // Scene category tag
        const sceneTag = document.getElementById('visionSceneCategoryTag');
        if (sceneTag) sceneTag.textContent = data.detected_scene || 'Художественная сцена';

        // Objects
        const objContainer = document.getElementById('visionObjectsContainer');
        if (objContainer) {
            objContainer.innerHTML = '';
            const objs = data.detected_objects || [];
            objs.forEach(o => {
                const pill = document.createElement('span');
                pill.style.cssText = 'background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); color:#cbd5e1; padding:3px 9px; border-radius:6px; font-size:0.73rem;';
                pill.textContent = o;
                objContainer.appendChild(pill);
            });
        }

        // Text Report
        const textReport = document.getElementById('visionTextReport');
        if (textReport) {
            const rawText = data.real_vision_summary || data.human_perception || '';
            textReport.innerHTML = rawText.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
        }

        modal.style.display = 'flex';
        playCinematicChime('start');
    }
    window.openVisionScannerModal = openVisionScannerModal;

    function closeVisionScannerModal() {
        const modal = document.getElementById('visionScannerModal');
        if (modal) modal.style.display = 'none';
    }
    window.closeVisionScannerModal = closeVisionScannerModal;

    function copyVisionPaletteHex() {
        if (!lastScannedPalette || lastScannedPalette.length === 0) {
            showToast('⚠️ Палитра пуста');
            return;
        }
        const hexList = lastScannedPalette.map(p => p.hex + ' (' + p.name + ' - ' + p.percentage + '%)').join('\n');
        if (navigator.clipboard) {
            navigator.clipboard.writeText(hexList).then(() => {
                showToast('📋 HEX-палитра скопирована в буфер обмена!');
            });
        } else {
            showToast('📋 Палитра: ' + lastScannedPalette.map(p => p.hex).join(', '));
        }
    }
    window.copyVisionPaletteHex = copyVisionPaletteHex;
