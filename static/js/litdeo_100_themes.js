/**
 * =============================================================================
 * LITDEO — 100 FUNCTIONAL CINEMA THEMES & PROCEDURAL VISUAL ENGINE
 * File: static/js/litdeo_100_themes.js
 * Description: 100 meticulously crafted themes with unique color palettes,
 *              procedural canvas shaders, ambient lighting, and prompt blueprints.
 * =============================================================================
 */

(function(window) {
    'use strict';

    const THEMES_100 = [
        {
            id: 'litdeo_indigo_violet',
            nameRu: 'Litdeo Пурпур, Фиолетовый и Индиго',
            nameEn: 'Litdeo Purple, Violet & Indigo',
            category: 'cinema',
            icon: '🎬',
            prompt: 'Студия Litdeo: неоновый кинематографичный мир в ультрафиолетовых, пурпурных и глубоких индиго тонах, объемный космический свет, фотореализм 8k',
            shader: 'nebula',
            colors: ['#a855f7', '#8b5cf6', '#6366f1', '#4f46e5'],
            bgGradient: ['#070514', '#120a2e', '#191142', '#05030e'],
            ambient: 'radial-gradient(circle, rgba(168,85,247,0.75) 0%, rgba(99,102,241,0.55) 45%, rgba(139,92,246,0.25) 75%, transparent 95%)'
        },
        {
            id: 'baby_toy_cars',
            nameRu: 'Машинки и игрушки малыша',
            nameEn: 'Toddler Wooden Toy Cars',
            category: 'relax',
            icon: '🚗',
            prompt: 'Малыш играет в яркие деревянные машинки на мягком солнечном коврике, милые машинки весело едут по деревянному мостику, теплый мягкий свет, стиль доброго мультика',
            shader: 'baby_cars',
            colors: ['#ef4444', '#3b82f6', '#facc15', '#10b981'],
            bgGradient: ['#1e140a', '#362413', '#241a0d', '#0d0803'],
            ambient: 'radial-gradient(circle, rgba(250,204,21,0.65) 0%, rgba(239,68,68,0.35) 50%, transparent 90%)'
        },

        // ── 1. КОСМОС И АСТРОФИЗИКА (12 тем) ──────────────────────────────────
        {
            id: 'black_hole',
            nameRu: 'Черная дыра Гаргантюа',
            nameEn: 'Gargantua Black Hole',
            category: 'space',
            icon: '🕳️',
            prompt: 'Сверхмассивная черная дыра с пылающим аккреционным диском, гравитационное линзирование света, звезды на фоне, 8k cinematic masterpiece',
            shader: 'black_hole',
            colors: ['#ffd700', '#ec4899', '#a855f7', '#06b6d4'],
            bgGradient: ['#020205', '#100624', '#081226', '#020308'],
            ambient: 'radial-gradient(circle, rgba(255,215,0,0.6) 0%, rgba(168,85,247,0.4) 45%, rgba(6,182,212,0.2) 75%, transparent 95%)'
        },
        {
            id: 'supernova',
            nameRu: 'Взрыв Сверхновой',
            nameEn: 'Supernova Explosion',
            category: 'space',
            icon: '💥',
            prompt: 'Взрыв гигантской сверхновой звезды в космосе, ударные волны плазмы, светящийся газ, звездная пыль, IMAX 70mm',
            shader: 'supernova',
            colors: ['#ef4444', '#f97316', '#fbbf24', '#ffffff'],
            bgGradient: ['#180202', '#360505', '#140101', '#050000'],
            ambient: 'radial-gradient(circle, rgba(239,68,68,0.7) 0%, rgba(249,115,22,0.45) 45%, transparent 90%)'
        },
        {
            id: 'orion_nebula',
            nameRu: 'Туманность Ориона',
            nameEn: 'Orion Nebula',
            category: 'space',
            icon: '🌌',
            prompt: 'Глубокий космос, космическая туманность Ориона, светящиеся водородные облака, молодые протозвезды, телескоп Джеймс Уэбб',
            shader: 'nebula',
            colors: ['#c084fc', '#e879f9', '#38bdf8', '#818cf8'],
            bgGradient: ['#050212', '#14072b', '#071836', '#020512'],
            ambient: 'radial-gradient(circle, rgba(192,132,252,0.6) 0%, rgba(56,189,248,0.35) 50%, transparent 90%)'
        },
        {
            id: 'saturn_rings',
            nameRu: 'Кольца Сатурна',
            nameEn: 'Rings of Saturn',
            category: 'space',
            icon: '🪐',
            prompt: 'Планета Сатурн с близкого расстояния, ледяные частицы и пыль в кольцах в лучах далекого Солнца, космический реализм 8k',
            shader: 'rings',
            colors: ['#fef08a', '#e2e8f0', '#94a3b8', '#38bdf8'],
            bgGradient: ['#040508', '#0b111e', '#131b2c', '#020306'],
            ambient: 'radial-gradient(circle, rgba(254,240,138,0.5) 0%, rgba(56,189,248,0.3) 50%, transparent 90%)'
        },
        {
            id: 'mars_sunrise',
            nameRu: 'Марсианский рассвет',
            nameEn: 'Martian Sunrise',
            category: 'space',
            icon: '🔴',
            prompt: 'Рассвет над каньонами Марса, голубоватое марсианское солнце, красная каменистая пустыня, пылевые бури на горизонте',
            shader: 'mars',
            colors: ['#ea580c', '#c2410c', '#9a3412', '#38bdf8'],
            bgGradient: ['#1a0604', '#380e07', '#210804', '#0a0201'],
            ambient: 'radial-gradient(circle, rgba(234,88,12,0.65) 0%, rgba(56,189,248,0.25) 60%, transparent 90%)'
        },
        {
            id: 'quasar_beam',
            nameRu: 'Квазар далекой галактики',
            nameEn: 'Distant Quasar Jet',
            category: 'space',
            icon: '⚡',
            prompt: 'Релятивистский джет квазара, сверхяркий космический луч энергии, разрывающий межзвездное пространство, астрофизика 4k',
            shader: 'quasar',
            colors: ['#a855f7', '#06b6d4', '#ffffff', '#ec4899'],
            bgGradient: ['#030208', '#10052b', '#03172e', '#010105'],
            ambient: 'radial-gradient(circle, rgba(6,182,212,0.7) 0%, rgba(168,85,247,0.4) 50%, transparent 90%)'
        },
        {
            id: 'pulsar_star',
            nameRu: 'Пульсар нейтронной звезды',
            nameEn: 'Neutron Pulsar',
            category: 'space',
            icon: '✨',
            prompt: 'Быстро вращающийся пульсар, спиральное магнитное поле, периодические импульсы космической радиации, космический зонд',
            shader: 'pulsar',
            colors: ['#38bdf8', '#818cf8', '#e0e7ff', '#67e8f9'],
            bgGradient: ['#02040a', '#06132b', '#020b1c', '#010206'],
            ambient: 'radial-gradient(circle, rgba(56,189,248,0.65) 0%, rgba(129,140,248,0.35) 50%, transparent 90%)'
        },
        {
            id: 'meteor_shower',
            nameRu: 'Метеоритный дождь',
            nameEn: 'Perseid Meteor Shower',
            category: 'space',
            icon: '🌠',
            prompt: 'Метеоритный поток Персеиды над ночными заснеженными горами, падающие огненные следы болидов, кристально чистое звездное небо',
            shader: 'meteors',
            colors: ['#fde047', '#f97316', '#38bdf8', '#ffffff'],
            bgGradient: ['#03050c', '#091224', '#040b18', '#010206'],
            ambient: 'radial-gradient(circle, rgba(253,224,71,0.55) 0%, rgba(56,189,248,0.3) 50%, transparent 90%)'
        },
        {
            id: 'event_horizon',
            nameRu: 'Горизонт событий',
            nameEn: 'Event Horizon Singularity',
            category: 'space',
            icon: '🌀',
            prompt: 'Предел горизонта событий, искривление времени и пространства, свет огибает невидимую сингулярность, теоретическая физика 8k',
            shader: 'event_horizon',
            colors: ['#ec4899', '#8b5cf6', '#06b6d4', '#f43f5e'],
            bgGradient: ['#07010a', '#170321', '#0c0218', '#020004'],
            ambient: 'radial-gradient(circle, rgba(236,72,153,0.6) 0%, rgba(139,92,246,0.4) 50%, transparent 90%)'
        },
        {
            id: 'moon_base',
            nameRu: 'Лунная станция Артемида',
            nameEn: 'Artemis Lunar Base',
            category: 'space',
            icon: '🌕',
            prompt: 'Лунная колония в кратере Шеклтон, освещенные купола, роверы на фоне восходящей над горизонтом Земли, фотореализм NASA',
            shader: 'moon',
            colors: ['#94a3b8', '#cbd5e1', '#38bdf8', '#f8fafc'],
            bgGradient: ['#020204', '#0b0c12', '#141620', '#030306'],
            ambient: 'radial-gradient(circle, rgba(203,213,225,0.45) 0%, rgba(56,189,248,0.25) 50%, transparent 90%)'
        },
        {
            id: 'milky_way_arm',
            nameRu: 'Рукав Млечного Пути',
            nameEn: 'Milky Way Spiral Arm',
            category: 'space',
            icon: '🌌',
            prompt: 'Панорамный вид галактики Млечный Путь со стороны, триллионы светящихся звезд, темные рукава космической пыли, глубокий космос',
            shader: 'spiral_galaxy',
            colors: ['#c084fc', '#a855f7', '#60a5fa', '#fcd34d'],
            bgGradient: ['#03010a', '#110424', '#080d26', '#010208'],
            ambient: 'radial-gradient(circle, rgba(192,132,252,0.6) 0%, rgba(96,165,250,0.3) 50%, transparent 90%)'
        },
        {
            id: 'warp_hyperspace',
            nameRu: 'Гиперпространственный прыжок',
            nameEn: 'Warp Speed Hyperspace',
            category: 'space',
            icon: '🚀',
            prompt: 'Корабль входит в варп-прыжок, звезды растягиваются в бесконечные неоновые световые линии скорости, эффект доплера',
            shader: 'warp',
            colors: ['#38bdf8', '#06b6d4', '#a855f7', '#ffffff'],
            bgGradient: ['#020510', '#061a38', '#020a1c', '#000208'],
            ambient: 'radial-gradient(circle, rgba(6,182,212,0.7) 0%, rgba(168,85,247,0.35) 50%, transparent 90%)'
        },

        // ── 2. КИБЕРПАНК И НАУЧНАЯ ФАНТАСТИКА (14 тем) ─────────────────────────
        {
            id: 'cyber_tokyo',
            nameRu: 'Кибер-Токио 2099',
            nameEn: 'Cyber-Tokyo 2099',
            category: 'scifi',
            icon: '🌆',
            prompt: 'Неоновый футуристический Токио в дождливую полночь, летающие спидеры, неоновые иероглифы отражаются в мокром асфальте, 8k cinematic',
            shader: 'cyber_city',
            colors: ['#ec4899', '#a855f7', '#06b6d4', '#f43f5e'],
            bgGradient: ['#0a0518', '#18082e', '#090417', '#03010a'],
            ambient: 'radial-gradient(circle, rgba(236,72,153,0.65) 0%, rgba(168,85,247,0.4) 40%, rgba(6,182,212,0.2) 75%, transparent 95%)'
        },
        {
            id: 'matrix_rain',
            nameRu: 'Цифровой код Матрицы',
            nameEn: 'Matrix Digital Rain',
            category: 'scifi',
            icon: '🟢',
            prompt: 'Падающий каскадом зеленый цифровой код матрицы, мерцающие глифы, объемная глубина резкости, киберпространство',
            shader: 'matrix_code',
            colors: ['#22c55e', '#4ade80', '#86efac', '#15803d'],
            bgGradient: ['#010a04', '#031f0b', '#021206', '#000502'],
            ambient: 'radial-gradient(circle, rgba(34,197,94,0.65) 0%, rgba(74,222,128,0.3) 45%, transparent 90%)'
        },
        {
            id: 'synthwave_highway',
            nameRu: 'Синтвейв Шоссе 80-х',
            nameEn: 'Synthwave Neon Highway',
            category: 'scifi',
            icon: '🏎️',
            prompt: 'Ретро-футуристическое синтвейв шоссе, неоновая проволочная сетка уходит к огромному полосатому оранжевому солнцу, DeLorean',
            shader: 'synthwave',
            colors: ['#f97316', '#ec4899', '#a855f7', '#06b6d4'],
            bgGradient: ['#17031e', '#2c0836', '#1a0524', '#08010d'],
            ambient: 'radial-gradient(circle, rgba(249,115,22,0.65) 0%, rgba(236,72,153,0.4) 45%, transparent 90%)'
        },
        {
            id: 'quantum_core',
            nameRu: 'Квантовый ИИ Реактор',
            nameEn: 'Quantum AI Core',
            category: 'scifi',
            icon: '⚛️',
            prompt: 'Сверхмощный квантовый термоядерный реактор, парящее плазменное ядро в магнитных ловушках, искры энергии, лаборатория будущего',
            shader: 'quantum',
            colors: ['#06b6d4', '#3b82f6', '#8b5cf6', '#ffffff'],
            bgGradient: ['#030a1c', '#061d4a', '#03102d', '#01040f'],
            ambient: 'radial-gradient(circle, rgba(6,182,212,0.7) 0%, rgba(59,130,246,0.35) 50%, transparent 90%)'
        },
        {
            id: 'tron_grid',
            nameRu: 'Неоновая Сетка Трон',
            nameEn: 'Tron Light Grid',
            category: 'scifi',
            icon: '🏍️',
            prompt: 'Мир Трона, бесконечные световые дорожки, скоростные светоциклы оставляют за собой светящиеся стены, киберпанк арена',
            shader: 'tron',
            colors: ['#00f5ff', '#38bdf8', '#0284c7', '#ffffff'],
            bgGradient: ['#01070e', '#031422', '#010a12', '#000205'],
            ambient: 'radial-gradient(circle, rgba(0,245,255,0.7) 0%, rgba(56,189,248,0.3) 50%, transparent 90%)'
        },
        {
            id: 'blade_runner_mist',
            nameRu: 'Туман Бегущего по лезвию',
            nameEn: 'Blade Runner Smog',
            category: 'scifi',
            icon: '🌧️',
            prompt: 'Лос-Анджелес 2049, плотный оранжевый пылевой смог, монументальные гигантские статуи, одинокий спидер парит над руинами',
            shader: 'bladerunner',
            colors: ['#ea580c', '#c2410c', '#f59e0b', '#78350f'],
            bgGradient: ['#1c0803', '#331006', '#1f0904', '#0d0301'],
            ambient: 'radial-gradient(circle, rgba(234,88,12,0.7) 0%, rgba(245,158,11,0.35) 50%, transparent 90%)'
        },
        {
            id: 'neural_synapse',
            nameRu: 'Нейросетевой синапс',
            nameEn: 'Neural Net Synapses',
            category: 'scifi',
            icon: '🧠',
            prompt: 'Светящиеся биологические нейроны и синапсы мозга, электрические импульсы мысли, золотисто-голубые разряды сознания',
            shader: 'synapse',
            colors: ['#e879f9', '#c084fc', '#38bdf8', '#ffd700'],
            bgGradient: ['#0a0314', '#1b0733', '#0a0314', '#030108'],
            ambient: 'radial-gradient(circle, rgba(232,121,249,0.6) 0%, rgba(56,189,248,0.35) 50%, transparent 90%)'
        },
        {
            id: 'cyber_glitch',
            nameRu: 'Кибер-Глитч Артефакт',
            nameEn: 'Cybernetic Glitch Art',
            category: 'scifi',
            icon: '📺',
            prompt: 'Хроматическая аберрация, VHS глитч полосы, пиксельный распад изображения, цифровой шум киберпространства',
            shader: 'glitch',
            colors: ['#f43f5e', '#06b6d4', '#a855f7', '#ffffff'],
            bgGradient: ['#0d040a', '#1e0717', '#080f1e', '#030108'],
            ambient: 'radial-gradient(circle, rgba(244,63,94,0.6) 0%, rgba(6,182,212,0.4) 50%, transparent 90%)'
        },
        {
            id: 'orbital_elevator',
            nameRu: 'Орбитальный лифт',
            nameEn: 'Space Elevator Tether',
            category: 'scifi',
            icon: '🛰️',
            prompt: 'Космический лифт уходит из океанической платформы сквозь облака на геостационарную орбиту, рассвет над Землей',
            shader: 'elevator',
            colors: ['#38bdf8', '#60a5fa', '#f8fafc', '#0284c7'],
            bgGradient: ['#031024', '#0a254d', '#05132b', '#020612'],
            ambient: 'radial-gradient(circle, rgba(56,189,248,0.6) 0%, rgba(96,165,250,0.3) 50%, transparent 90%)'
        },
        {
            id: 'steampunk_golem',
            nameRu: 'Стимпанк Голем',
            nameEn: 'Steampunk Clockwork',
            category: 'scifi',
            icon: '⚙️',
            prompt: 'Механические латунные шестеренки стимпанка, клубы горячего пара, манометры, медный гигантский механизм Викторианской эпохи',
            shader: 'steampunk',
            colors: ['#d97706', '#b45309', '#78350f', '#fbbf24'],
            bgGradient: ['#170c04', '#2d1808', '#1a0d04', '#090401'],
            ambient: 'radial-gradient(circle, rgba(217,119,6,0.6) 0%, rgba(251,191,36,0.3) 50%, transparent 90%)'
        },
        {
            id: 'android_city',
            nameRu: 'Город Андроидов',
            nameEn: 'Android Metropolis',
            category: 'scifi',
            icon: '🤖',
            prompt: 'Стеклянный белый футуристический мегаполис, парящие мосты, андроиды среди голографических деревьев, утопия будущего',
            shader: 'utopia',
            colors: ['#06b6d4', '#e0f2fe', '#38bdf8', '#a7f3d0'],
            bgGradient: ['#051524', '#0c2e4a', '#061929', '#020912'],
            ambient: 'radial-gradient(circle, rgba(6,182,212,0.6) 0%, rgba(224,242,254,0.3) 50%, transparent 90%)'
        },
        {
            id: 'bio_luminescence',
            nameRu: 'Био-Кибернетика Пандоры',
            nameEn: 'Pandora Bio-Luminescence',
            category: 'scifi',
            icon: '🪼',
            prompt: 'Биолюминесцентный ночной лес в стиле Аватара, светящиеся споры парят в воздухе, неоновые корни деревьев, магия природы',
            shader: 'biolum',
            colors: ['#10b981', '#06b6d4', '#a855f7', '#34d399'],
            bgGradient: ['#03140e', '#072e21', '#041712', '#010806'],
            ambient: 'radial-gradient(circle, rgba(16,185,129,0.7) 0%, rgba(6,182,212,0.35) 50%, transparent 90%)'
        },
        {
            id: 'mad_max_desert',
            nameRu: 'Безумный Макс: Пустошь',
            nameEn: 'Wasteland Dust Storm',
            category: 'scifi',
            icon: '🌪️',
            prompt: 'Буря в пустыне Безумного Макса, бронированный кортеж мчится сквозь стену пыли и пламени, кинематографичный экшен',
            shader: 'wasteland',
            colors: ['#ea580c', '#dc2626', '#f59e0b', '#7f1d1d'],
            bgGradient: ['#210904', '#3d1208', '#210803', '#0d0301'],
            ambient: 'radial-gradient(circle, rgba(234,88,12,0.7) 0%, rgba(220,38,38,0.4) 50%, transparent 90%)'
        },
        {
            id: 'hologram_concert',
            nameRu: 'Голографический Нео-Рейв',
            nameEn: 'Hologram Cyber Rave',
            category: 'scifi',
            icon: '🪩',
            prompt: 'Стадион будущего, гигантская голограмма вокалиста парит над 100-тысячной толпой, лазерное шоу, басы сотрясают воздух',
            shader: 'rave',
            colors: ['#f43f5e', '#a855f7', '#06b6d4', '#e879f9'],
            bgGradient: ['#0e0214', '#210530', '#0a0b24', '#03010a'],
            ambient: 'radial-gradient(circle, rgba(244,63,94,0.65) 0%, rgba(168,85,247,0.4) 50%, transparent 90%)'
        },

        // ── 3. ПРИРОДА И СТИХИИ (14 тем) ────────────────────────────────────────
        {
            id: 'aurora_borealis',
            nameRu: 'Северное сияние Аврора',
            nameEn: 'Aurora Borealis',
            category: 'nature',
            icon: '🌌',
            prompt: 'Танцующее изумрудное и фиолетовое северное сияние над зеркальным озером в Норвегии, заснеженные сосны, звезды',
            shader: 'aurora',
            colors: ['#10b981', '#34d399', '#a855f7', '#38bdf8'],
            bgGradient: ['#02140d', '#052b1b', '#071b2e', '#01080a'],
            ambient: 'radial-gradient(circle, rgba(16,185,129,0.7) 0%, rgba(168,85,247,0.4) 45%, transparent 90%)'
        },
        {
            id: 'ocean_depth',
            nameRu: 'Океанская Бездна',
            nameEn: 'Deep Ocean Whale',
            category: 'nature',
            icon: '🌊',
            prompt: 'Гигантский светящийся кит парит в бездне ночного океана, каустические солнечные лучи пробивают толщу бирюзовой воды',
            shader: 'ocean_caustics',
            colors: ['#06b6d4', '#38bdf8', '#0284c7', '#67e8f9'],
            bgGradient: ['#02182b', '#06283d', '#031726', '#010c14'],
            ambient: 'radial-gradient(circle, rgba(6,182,212,0.7) 0%, rgba(59,130,246,0.4) 45%, transparent 90%)'
        },
        {
            id: 'volcano_eruption',
            nameRu: 'Извержение вулкана',
            nameEn: 'Volcanic Eruption',
            category: 'nature',
            icon: '🌋',
            prompt: 'Ночное извержение исландского вулкана, фонтаны алой магмы взлетают в небо, реки лавы, раскаленный пепел и дым',
            shader: 'volcano',
            colors: ['#ef4444', '#f97316', '#fbbf24', '#7f1d1d'],
            bgGradient: ['#1a0404', '#3b0808', '#210606', '#080101'],
            ambient: 'radial-gradient(circle, rgba(239,68,68,0.75) 0%, rgba(249,115,22,0.45) 50%, transparent 90%)'
        },
        {
            id: 'sakura_kyoto',
            nameRu: 'Цветение Сакуры в Киото',
            nameEn: 'Kyoto Sakura Blossom',
            category: 'nature',
            icon: '🌸',
            prompt: 'Падающие розовые лепестки сакуры над древним деревянным храмом в Киото, теплый весенний ветерок, лучи закатного солнца',
            shader: 'sakura',
            colors: ['#f472b6', '#fb7185', '#fda4af', '#e879f9'],
            bgGradient: ['#1c0f1e', '#36153b', '#200c24', '#0d040f'],
            ambient: 'radial-gradient(circle, rgba(244,114,182,0.7) 0%, rgba(251,113,133,0.35) 50%, transparent 90%)'
        },
        {
            id: 'golden_autumn',
            nameRu: 'Золотая осень в лесу',
            nameEn: 'Golden Autumn Woods',
            category: 'nature',
            icon: '🍂',
            prompt: 'Золотой кленовый лес в утреннем тумане, кружащиеся в воздухе янтарные листья, мягкий солнечный свет сквозь кроны',
            shader: 'autumn',
            colors: ['#f59e0b', '#d97706', '#ea580c', '#fef08a'],
            bgGradient: ['#1c1004', '#361e08', '#211205', '#0d0702'],
            ambient: 'radial-gradient(circle, rgba(245,158,11,0.65) 0%, rgba(234,88,12,0.35) 50%, transparent 90%)'
        },
        {
            id: 'thunderstorm',
            nameRu: 'Грозовой шторм',
            nameEn: 'Electric Thunderstorm',
            category: 'nature',
            icon: '⛈️',
            prompt: 'Ночная гроза над равниной, ветвящиеся молнии озаряют грозовые тучи фиолетовым светом, стена проливного дождя',
            shader: 'lightning',
            colors: ['#a855f7', '#c084fc', '#38bdf8', '#ffffff'],
            bgGradient: ['#090514', '#150c2e', '#091326', '#02030a'],
            ambient: 'radial-gradient(circle, rgba(168,85,247,0.7) 0%, rgba(56,189,248,0.4) 50%, transparent 90%)'
        },
        {
            id: 'jungle_waterfall',
            nameRu: 'Тропический водопад',
            nameEn: 'Jungle Mist Waterfall',
            category: 'nature',
            icon: '🏞️',
            prompt: 'Грандиозный водопад посреди диких джунглей, радуга в водяной пыли, изумрудный мох, пышная зелень в лучах солнца',
            shader: 'waterfall',
            colors: ['#10b981', '#06b6d4', '#34d399', '#fef08a'],
            bgGradient: ['#03170e', '#072e1c', '#041d24', '#010b0a'],
            ambient: 'radial-gradient(circle, rgba(16,185,129,0.65) 0%, rgba(6,182,212,0.35) 50%, transparent 90%)'
        },
        {
            id: 'baikal_ice',
            nameRu: 'Ледяные торосы Байкала',
            nameEn: 'Baikal Turquoise Ice',
            category: 'nature',
            icon: '🧊',
            prompt: 'Прозрачные лазурные глыбы льда озера Байкал на рассвете, морозные узоры, трещины уходят в глубину, золотые лучи',
            shader: 'ice',
            colors: ['#06b6d4', '#38bdf8', '#e0f2fe', '#ffffff'],
            bgGradient: ['#041421', '#0a273d', '#061726', '#020912'],
            ambient: 'radial-gradient(circle, rgba(6,182,212,0.65) 0%, rgba(224,242,254,0.3) 50%, transparent 90%)'
        },
        {
            id: 'sahara_dunes',
            nameRu: 'Дюны Сахары на закате',
            nameEn: 'Sahara Sunset Dunes',
            category: 'nature',
            icon: '🏜️',
            prompt: 'Бескрайние барханы пустыни Сахара на закате, теплые песчаные тени, ветер несет золотую песчаную вуаль, эпичный кадр',
            shader: 'desert',
            colors: ['#f59e0b', '#d97706', '#b45309', '#fde68a'],
            bgGradient: ['#241203', '#402107', '#2b1505', '#0f0701'],
            ambient: 'radial-gradient(circle, rgba(245,158,11,0.7) 0%, rgba(217,119,6,0.4) 50%, transparent 90%)'
        },
        {
            id: 'bamboo_arashiyama',
            nameRu: 'Бамбуковый лес Арасияма',
            nameEn: 'Arashiyama Bamboo Grove',
            category: 'nature',
            icon: '🎋',
            prompt: 'Высокие зеленые стволы бамбука качаются от ветра в Арасияме, косые лучи утреннего солнца пробивают крону, покой',
            shader: 'bamboo',
            colors: ['#22c55e', '#16a34a', '#86efac', '#eab308'],
            bgGradient: ['#041408', '#0b2b13', '#06170a', '#010803'],
            ambient: 'radial-gradient(circle, rgba(34,197,94,0.6) 0%, rgba(234,179,8,0.3) 50%, transparent 90%)'
        },
        {
            id: 'coral_reef',
            nameRu: 'Коралловый риф',
            nameEn: 'Vibrant Coral Reef',
            category: 'nature',
            icon: '🪸',
            prompt: 'Красочный коралловый риф Большого Барьерного рифа, стаи тропических неоновых рыб, прозрачная бирюзовая вода',
            shader: 'coral',
            colors: ['#06b6d4', '#f43f5e', '#fbbf24', '#a855f7'],
            bgGradient: ['#021b2b', '#05364f', '#032036', '#010f17'],
            ambient: 'radial-gradient(circle, rgba(6,182,212,0.65) 0%, rgba(244,63,94,0.35) 50%, transparent 90%)'
        },
        {
            id: 'everest_summit',
            nameRu: 'Вершина Эвереста',
            nameEn: 'Mount Everest Summit',
            category: 'nature',
            icon: '🏔️',
            prompt: 'Пик горы Эверест на рассвете, снежные флаги на ветру, море облаков простирается под вершиной до горизонта, 8k National Geographic',
            shader: 'everest',
            colors: ['#f8fafc', '#94a3b8', '#38bdf8', '#f59e0b'],
            bgGradient: ['#050e1f', '#0e2347', '#081730', '#020612'],
            ambient: 'radial-gradient(circle, rgba(248,250,252,0.5) 0%, rgba(56,189,248,0.3) 50%, transparent 90%)'
        },
        {
            id: 'misty_moss_forest',
            nameRu: 'Таинственный моховой лес',
            nameEn: 'Enchanted Moss Forest',
            category: 'nature',
            icon: '🌲',
            prompt: 'Сказочный древний лес, вековые деревья покрыты бархатным зеленым мхом, клубящийся туман, мягкие золотые пылинки',
            shader: 'moss',
            colors: ['#15803d', '#16a34a', '#86efac', '#fde047'],
            bgGradient: ['#031206', '#08260e', '#041408', '#010803'],
            ambient: 'radial-gradient(circle, rgba(22,163,74,0.65) 0%, rgba(253,224,71,0.25) 50%, transparent 90%)'
        },
        {
            id: 'pink_lake_sunset',
            nameRu: 'Розовый закат на озере',
            nameEn: 'Pink Mirror Lake Sunset',
            category: 'nature',
            icon: '🪞',
            prompt: 'Идеально гладкое горное озеро отражает нежно-розовые и пурпурные закатные облака, абсолютное спокойствие природы',
            shader: 'mirror_lake',
            colors: ['#f472b6', '#c084fc', '#fb7185', '#60a5fa'],
            bgGradient: ['#1c0c1e', '#361338', '#1a0d2e', '#0b0414'],
            ambient: 'radial-gradient(circle, rgba(244,114,182,0.65) 0%, rgba(192,132,252,0.4) 50%, transparent 90%)'
        },

        // ── 4. КИНЕМАТОГРАФ И ЖАНРЫ (12 тем) ───────────────────────────────────
        {
            id: 'noir_detective',
            nameRu: 'Ч/Б Детектив Нуар',
            nameEn: 'Film Noir Detective',
            category: 'cinema',
            icon: '🎞️',
            prompt: 'Классический голливудский нуар 1940-х, тени от жалюзи на стене, струящийся сигаретный дым, контрастный свет и тень',
            shader: 'noir',
            colors: ['#f8fafc', '#cbd5e1', '#64748b', '#1e293b'],
            bgGradient: ['#050505', '#121212', '#0a0a0a', '#020202'],
            ambient: 'radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(100,116,139,0.2) 60%, transparent 90%)'
        },
        {
            id: 'spaghetti_western',
            nameRu: 'Спагетти-Вестерн',
            nameEn: 'Spaghetti Western Duel',
            category: 'cinema',
            icon: '🤠',
            prompt: 'Вестерн в стиле Серджио Леоне, дуэль двух стрелков в пыльном городке, катящееся перекати-поле, палящее полуденное солнце',
            shader: 'western',
            colors: ['#d97706', '#b45309', '#78350f', '#fbbf24'],
            bgGradient: ['#1f1105', '#381f09', '#241306', '#0d0602'],
            ambient: 'radial-gradient(circle, rgba(217,119,6,0.65) 0%, rgba(180,83,9,0.35) 50%, transparent 90%)'
        },
        {
            id: 'epic_fantasy',
            nameRu: 'Эпическое Фэнтези',
            nameEn: 'Lord of Fantasy Citadel',
            category: 'cinema',
            icon: '🏰',
            prompt: 'Величественная белая цитадель на вершине скалы, парящие в небе драконы, золотые лучи заката над древними пиками',
            shader: 'fantasy',
            colors: ['#fbbf24', '#f59e0b', '#a855f7', '#38bdf8'],
            bgGradient: ['#120921', '#281242', '#140c26', '#06030d'],
            ambient: 'radial-gradient(circle, rgba(251,191,36,0.6) 0%, rgba(168,85,247,0.35) 50%, transparent 90%)'
        },
        {
            id: 'horror_mansion',
            nameRu: 'Хоррор в заброшенном особняке',
            nameEn: 'Gothic Horror Manor',
            category: 'cinema',
            icon: '🕯️',
            prompt: 'Готический викторианский заброшенный особняк, мерцающая свеча, скрипучая лестница, тени сгущаются в углах коридора',
            shader: 'horror',
            colors: ['#dc2626', '#991b1b', '#450a0a', '#f59e0b'],
            bgGradient: ['#0f0303', '#210505', '#120202', '#050000'],
            ambient: 'radial-gradient(circle, rgba(220,38,38,0.65) 0%, rgba(245,158,11,0.2) 50%, transparent 90%)'
        },
        {
            id: 'spy_thriller',
            nameRu: 'Шпионский Триллер 007',
            nameEn: '007 Casino Spy Thriller',
            category: 'cinema',
            icon: '🍸',
            prompt: 'Роскошное казино в Монте-Карло, смокинги, золотые блики анаморфотных линз, шпионская интрига, кинематограф 35mm',
            shader: 'spy',
            colors: ['#ffd700', '#f59e0b', '#0284c7', '#0f172a'],
            bgGradient: ['#141005', '#2b220b', '#171206', '#080602'],
            ambient: 'radial-gradient(circle, rgba(255,215,0,0.6) 0%, rgba(2,132,199,0.3) 50%, transparent 90%)'
        },
        {
            id: 'retro_cinema_1920',
            nameRu: 'Немое кино 1920-х',
            nameEn: 'Vintage 1920s Silent Film',
            category: 'cinema',
            icon: '📽️',
            prompt: 'Аутентичная сепия 1920 года, мерцание кинопроектора, зернистость пленки, виньетированные темные углы, ретро',
            shader: 'sepia',
            colors: ['#d97706', '#78350f', '#fef3c7', '#451a03'],
            bgGradient: ['#140d06', '#26190c', '#170e06', '#0a0603'],
            ambient: 'radial-gradient(circle, rgba(217,119,6,0.5) 0%, rgba(120,53,15,0.3) 50%, transparent 90%)'
        },
        {
            id: 'nordic_noir',
            nameRu: 'Скандинавский детектив',
            nameEn: 'Nordic Cold Thriller',
            category: 'cinema',
            icon: '❄️',
            prompt: 'Холодные свинцовые фьорды Норвегии, туман над водой, одинокий маяк, приглушенные кинематографичные холодные тона',
            shader: 'nordic',
            colors: ['#64748b', '#94a3b8', '#0284c7', '#cbd5e1'],
            bgGradient: ['#090d14', '#131b29', '#0a101c', '#04060a'],
            ambient: 'radial-gradient(circle, rgba(148,163,184,0.45) 0%, rgba(2,132,199,0.25) 50%, transparent 90%)'
        },
        {
            id: 'superhero_battle',
            nameRu: 'Супергеройский блокбастер',
            nameEn: 'Superhero City Clash',
            category: 'cinema',
            icon: '⚡',
            prompt: 'Эпическая битва на крышах небоскребов, энергетические лучи разрывают ночное небо, кинематографичный рапид 120fps',
            shader: 'action_hero',
            colors: ['#3b82f6', '#ef4444', '#ffd700', '#06b6d4'],
            bgGradient: ['#0a081a', '#181238', '#0c0e29', '#03020a'],
            ambient: 'radial-gradient(circle, rgba(59,130,246,0.65) 0%, rgba(239,68,68,0.4) 50%, transparent 90%)'
        },
        {
            id: 'caribbean_pirates',
            nameRu: 'Карибские Пираты',
            nameEn: 'Pirates of the High Seas',
            category: 'cinema',
            icon: '🏴‍☠️',
            prompt: 'Трехмачтовый галеон рассекает штормовые волны Карибского моря, вспышки пушечных выстрелов в ночи, соленые брызги',
            shader: 'pirates',
            colors: ['#0284c7', '#d97706', '#f59e0b', '#0f172a'],
            bgGradient: ['#03111c', '#08253b', '#041524', '#01080d'],
            ambient: 'radial-gradient(circle, rgba(2,132,199,0.6) 0%, rgba(217,119,6,0.35) 50%, transparent 90%)'
        },
        {
            id: 'post_apocalypse',
            nameRu: 'Постапокалипсис ЧАЭС',
            nameEn: 'Abandoned Exclusion Zone',
            category: 'cinema',
            icon: '☢️',
            prompt: 'Заброшенное колесо обозрения в Припяти сквозь туман, пробивающиеся сквозь асфальт деревья, зеленоватый постапокалипсис',
            shader: 'chernobyl',
            colors: ['#84cc16', '#65a30d', '#4d7c0f', '#eab308'],
            bgGradient: ['#0a1205', '#16240d', '#0d1706', '#030602'],
            ambient: 'radial-gradient(circle, rgba(132,204,22,0.55) 0%, rgba(234,179,8,0.25) 50%, transparent 90%)'
        },
        {
            id: 'broadway_musical',
            nameRu: 'Мюзикл Бродвея',
            nameEn: 'Broadway Golden Stage',
            category: 'cinema',
            icon: '🎭',
            prompt: 'Театральные прожекторы освещают золотую сцену Бродвея, искрящиеся блестки в воздухе, бархатный красный занавес',
            shader: 'broadway',
            colors: ['#ffd700', '#dc2626', '#fbbf24', '#ffffff'],
            bgGradient: ['#1c0406', '#38090d', '#210508', '#0c0203'],
            ambient: 'radial-gradient(circle, rgba(255,215,0,0.65) 0%, rgba(220,38,38,0.4) 50%, transparent 90%)'
        },
        {
            id: 'nat_geo_macro',
            nameRu: 'National Geographic Макро',
            nameEn: 'National Geographic 8K',
            category: 'cinema',
            icon: '🦎',
            prompt: 'Макросъемка глаза хамелеона в тропическом лесу, микрокапли росы, безупречная резкость каждой чешуйки, 8k documentary',
            shader: 'macro',
            colors: ['#10b981', '#f59e0b', '#06b6d4', '#84cc16'],
            bgGradient: ['#04140a', '#082916', '#04170d', '#010804'],
            ambient: 'radial-gradient(circle, rgba(16,185,129,0.6) 0%, rgba(245,158,11,0.3) 50%, transparent 90%)'
        },

        // ── 5. ГОРОДА, АРХИТЕКТУРА И ПУТЕШЕСТВИЯ (12 тем) ──────────────────────
        {
            id: 'manhattan_rain',
            nameRu: 'Дождливый Манхэттен',
            nameEn: 'Rainy Manhattan Night',
            category: 'urban',
            icon: '🚕',
            prompt: 'Желтые такси Нью-Йорка в дождливый вечер на Таймс-сквер, пар поднимается из люков, яркие неоновые билборды',
            shader: 'nyc',
            colors: ['#facc15', '#f43f5e', '#38bdf8', '#ffffff'],
            bgGradient: ['#0b0d17', '#17192b', '#0d0f1c', '#04050a'],
            ambient: 'radial-gradient(circle, rgba(250,204,21,0.65) 0%, rgba(244,63,94,0.35) 50%, transparent 90%)'
        },
        {
            id: 'venice_canals',
            nameRu: 'Венецианские каналы',
            nameEn: 'Venetian Twilight Canals',
            category: 'urban',
            icon: '🛶',
            prompt: 'Гондолы на Гранд-канале Венеции в сумерках, старинные палаццо освещены фонарями, отражения золотого света в воде',
            shader: 'venice',
            colors: ['#0284c7', '#f59e0b', '#d97706', '#38bdf8'],
            bgGradient: ['#061324', '#0d2545', '#08172e', '#020712'],
            ambient: 'radial-gradient(circle, rgba(2,132,199,0.6) 0%, rgba(245,158,11,0.35) 50%, transparent 90%)'
        },
        {
            id: 'dubai_skyline',
            nameRu: 'Дубай: Бурдж-Халифа в облаках',
            nameEn: 'Dubai Cloud Piercer',
            category: 'urban',
            icon: '🏙️',
            prompt: 'Бурдж-Халифа пробивает утренний ковер из белых облаков, лазерное шоу на фасаде, футуристический горизонт Дубая',
            shader: 'dubai',
            colors: ['#38bdf8', '#ffd700', '#60a5fa', '#f8fafc'],
            bgGradient: ['#05152b', '#0a2a54', '#061a36', '#020914'],
            ambient: 'radial-gradient(circle, rgba(56,189,248,0.6) 0%, rgba(255,215,0,0.35) 50%, transparent 90%)'
        },
        {
            id: 'samarkand_registan',
            nameRu: 'Древний Самарканд',
            nameEn: 'Ancient Samarkand Registan',
            category: 'urban',
            icon: '🕌',
            prompt: 'Площадь Регистан в Самарканде на закате, бирюзовые мозаичные купола, золотые узоры медресе, дыхание Шелкового пути',
            shader: 'samarkand',
            colors: ['#06b6d4', '#ffd700', '#0284c7', '#f59e0b'],
            bgGradient: ['#051c29', '#09364f', '#062336', '#020d17'],
            ambient: 'radial-gradient(circle, rgba(6,182,212,0.65) 0%, rgba(255,215,0,0.4) 50%, transparent 90%)'
        },
        {
            id: 'london_fog',
            nameRu: 'Лондонский туман',
            nameEn: 'Victorian London Fog',
            category: 'urban',
            icon: '🕰️',
            prompt: 'Силуэт Биг-Бена сквозь густой лондонский туман, теплый свет газовых фонарей отражается в мокрой брусчатке Темзы',
            shader: 'london',
            colors: ['#f59e0b', '#d97706', '#94a3b8', '#64748b'],
            bgGradient: ['#120e0a', '#241c14', '#140f0a', '#080604'],
            ambient: 'radial-gradient(circle, rgba(245,158,11,0.55) 0%, rgba(148,163,184,0.3) 50%, transparent 90%)'
        },
        {
            id: 'singapore_gardens',
            nameRu: 'Сингапур: Сады у залива',
            nameEn: 'Singapore Supertree Grove',
            category: 'urban',
            icon: '🌴',
            prompt: 'Сверхдеревья Supertree Grove в Сингапуре ночью, вертикальные сады пульсируют неоновыми градиентами, шоу света',
            shader: 'singapore',
            colors: ['#a855f7', '#ec4899', '#06b6d4', '#10b981'],
            bgGradient: ['#0c051a', '#1a0a36', '#061929', '#02040d'],
            ambient: 'radial-gradient(circle, rgba(168,85,247,0.65) 0%, rgba(6,182,212,0.4) 50%, transparent 90%)'
        },
        {
            id: 'rome_trastevere',
            nameRu: 'Улочки Рима: Трастевере',
            nameEn: 'Rome Trastevere Evening',
            category: 'urban',
            icon: '🍷',
            prompt: 'Узкие мощеные улочки Трастевере в Риме, увитые плющом фасады теплых терракотовых тонов, уличные фонари и кафе',
            shader: 'rome',
            colors: ['#ea580c', '#f59e0b', '#b45309', '#fed7aa'],
            bgGradient: ['#1f0e05', '#381a0a', '#241006', '#0d0602'],
            ambient: 'radial-gradient(circle, rgba(234,88,12,0.65) 0%, rgba(245,158,11,0.35) 50%, transparent 90%)'
        },
        {
            id: 'shanghai_bund',
            nameRu: 'Ночной Шанхай',
            nameEn: 'Shanghai Bund Waterfront',
            category: 'urban',
            icon: '🏮',
            prompt: 'Набережная Вайтань в Шанхае, телебашня Восточная Жемчужина сияет над рекой Хуанпу, футуристические небоскребы Пудуна',
            shader: 'shanghai',
            colors: ['#ec4899', '#3b82f6', '#f43f5e', '#06b6d4'],
            bgGradient: ['#070717', '#121233', '#0a0d26', '#02030d'],
            ambient: 'radial-gradient(circle, rgba(236,72,153,0.65) 0%, rgba(59,130,246,0.35) 50%, transparent 90%)'
        },
        {
            id: 'paris_rooftops',
            nameRu: 'Парижские крыши на закате',
            nameEn: 'Paris Rooftops & Eiffel',
            category: 'urban',
            icon: '🗼',
            prompt: 'Цинковые крыши Парижа в лучах заката, золотой силуэт Эйфелевой башни на горизонте, романтичный свет',
            shader: 'paris',
            colors: ['#f472b6', '#fb923c', '#ffd700', '#38bdf8'],
            bgGradient: ['#1a0c1a', '#331733', '#1e112e', '#0a0412'],
            ambient: 'radial-gradient(circle, rgba(244,114,182,0.6) 0%, rgba(251,146,60,0.35) 50%, transparent 90%)'
        },
        {
            id: 'neuschwanstein',
            nameRu: 'Замок Нойшванштайн',
            nameEn: 'Neuschwanstein Castle',
            category: 'urban',
            icon: '🏰',
            prompt: 'Сказочный замок Нойшванштайн на заснеженном утесе баварских Альп, первый утренний свет, туман в ущелье',
            shader: 'castle',
            colors: ['#cbd5e1', '#f8fafc', '#38bdf8', '#f59e0b'],
            bgGradient: ['#08101f', '#10223d', '#0a1529', '#03070f'],
            ambient: 'radial-gradient(circle, rgba(203,213,225,0.5) 0%, rgba(56,189,248,0.3) 50%, transparent 90%)'
        },
        {
            id: 'istanbul_bazaar',
            nameRu: 'Гранд-Базар Стамбула',
            nameEn: 'Istanbul Spice Bazaar',
            category: 'urban',
            icon: '🧿',
            prompt: 'Красочные мозаичные лампы Гранд-Базара в Стамбуле, пирамиды ароматных специй, золотые лучи сквозь старинные арки',
            shader: 'bazaar',
            colors: ['#ef4444', '#f59e0b', '#06b6d4', '#10b981'],
            bgGradient: ['#1f0904', '#3d1208', '#210c05', '#0d0402'],
            ambient: 'radial-gradient(circle, rgba(239,68,68,0.65) 0%, rgba(245,158,11,0.4) 50%, transparent 90%)'
        },
        {
            id: 'tokyo_metro_rush',
            nameRu: 'Токийское метро в час пик',
            nameEn: 'Tokyo Shinjuku Speed Blur',
            category: 'urban',
            icon: '🚇',
            prompt: 'Скоростной поезд синкансэн проносится сквозь неоновые тоннели Синдзюку, световые шлейфы огней, динамичный ритм',
            shader: 'subway',
            colors: ['#f43f5e', '#38bdf8', '#facc15', '#a855f7'],
            bgGradient: ['#080414', '#140a2e', '#09102b', '#02020a'],
            ambient: 'radial-gradient(circle, rgba(244,63,94,0.65) 0%, rgba(56,189,248,0.35) 50%, transparent 90%)'
        },

        // ── 6. АРТ, ЖИВОПИСЬ И СТИЛИ (12 тем) ───────────────────────────────────
        {
            id: 'van_gogh_stars',
            nameRu: 'Звездная ночь Ван Гога',
            nameEn: 'Van Gogh Starry Night',
            category: 'art',
            icon: '🎨',
            prompt: 'Масляные вихри в стиле Звездной ночи Ван Гога, густые мазки желтых звезд, синий вихревой небосвод, кипарисы',
            shader: 'vangogh',
            colors: ['#facc15', '#fde047', '#1d4ed8', '#3b82f6'],
            bgGradient: ['#071433', '#0e2b6b', '#08173d', '#020817'],
            ambient: 'radial-gradient(circle, rgba(250,204,21,0.7) 0%, rgba(29,78,216,0.4) 50%, transparent 90%)'
        },
        {
            id: 'hokusai_wave',
            nameRu: 'Большая волна Хокусая',
            nameEn: 'Hokusai Great Wave',
            category: 'art',
            icon: '🌊',
            prompt: 'Японская гравюра в стиле Большой волны в Канагаве, пенистые гребни когтей волны, гора Фудзи на горизонте, укиё-э',
            shader: 'hokusai',
            colors: ['#1e40af', '#60a5fa', '#f8fafc', '#fef08a'],
            bgGradient: ['#051529', '#0c2c54', '#081e3b', '#020914'],
            ambient: 'radial-gradient(circle, rgba(30,64,175,0.7) 0%, rgba(248,250,252,0.35) 50%, transparent 90%)'
        },
        {
            id: 'anime_shinkai',
            nameRu: 'Аниме Макото Синкая',
            nameEn: 'Makoto Shinkai Skies',
            category: 'art',
            icon: '☁️',
            prompt: 'Гигантские кучевые облака на лазурном небе в стиле Твоего Имени, пролетающий поезд, кристальная чистота атмосферы',
            shader: 'shinkai',
            colors: ['#38bdf8', '#60a5fa', '#f472b6', '#ffffff'],
            bgGradient: ['#051838', '#0c3575', '#082554', '#020d21'],
            ambient: 'radial-gradient(circle, rgba(56,189,248,0.65) 0%, rgba(244,114,182,0.35) 50%, transparent 90%)'
        },
        {
            id: 'watercolor_dream',
            nameRu: 'Акварельный этюд',
            nameEn: 'Watercolor Wet Bleed',
            category: 'art',
            icon: '🖌️',
            prompt: 'Нежная акварельная живопись по мокрой бумаге, растекающиеся пигменты индиго и кармина, мягкие переливы цвета',
            shader: 'watercolor',
            colors: ['#f43f5e', '#a855f7', '#38bdf8', '#fbbf24'],
            bgGradient: ['#17071e', '#2e0e3b', '#131b3b', '#060312'],
            ambient: 'radial-gradient(circle, rgba(244,63,94,0.6) 0%, rgba(168,85,247,0.35) 50%, transparent 90%)'
        },
        {
            id: 'suprematism_shapes',
            nameRu: 'Супрематизм Малевича',
            nameEn: 'Malevich Suprematism',
            category: 'art',
            icon: '🟥',
            prompt: 'Парящие в невесомости геометрические фигуры супрематизма: красные квадраты, черные круги, синие диагонали',
            shader: 'suprematism',
            colors: ['#ef4444', '#000000', '#3b82f6', '#ffd700'],
            bgGradient: ['#0f0f0f', '#242424', '#141414', '#050505'],
            ambient: 'radial-gradient(circle, rgba(239,68,68,0.6) 0%, rgba(59,130,246,0.35) 50%, transparent 90%)'
        },
        {
            id: 'dali_surrealism',
            nameRu: 'Сюрреализм Сальвадора Дали',
            nameEn: 'Dali Melting Clocks',
            category: 'art',
            icon: '⏳',
            prompt: 'Сюрреалистический пейзаж в стиле Постоянства памяти, стекающие карманные часы на ветвях оливы, пустынный пляж',
            shader: 'dali',
            colors: ['#f59e0b', '#d97706', '#0284c7', '#78350f'],
            bgGradient: ['#1c1005', '#38200b', '#132036', '#070b14'],
            ambient: 'radial-gradient(circle, rgba(245,158,11,0.65) 0%, rgba(2,132,199,0.35) 50%, transparent 90%)'
        },
        {
            id: 'monet_waterlilies',
            nameRu: 'Кувшинки Клода Моне',
            nameEn: 'Monet Impressionist Lilies',
            category: 'art',
            icon: '🪷',
            prompt: 'Импрессионистический пруд с водяными кувшинками в Живерни, мазки пастельного розового и изумрудного света, блики воды',
            shader: 'monet',
            colors: ['#f472b6', '#10b981', '#38bdf8', '#a7f3d0'],
            bgGradient: ['#041a14', '#083327', '#062029', '#020d0a'],
            ambient: 'radial-gradient(circle, rgba(244,114,182,0.6) 0%, rgba(16,185,129,0.35) 50%, transparent 90%)'
        },
        {
            id: 'sumie_ink',
            nameRu: 'Тушь Суми-э',
            nameEn: 'Japanese Sumi-e Ink',
            category: 'art',
            icon: '🖋️',
            prompt: 'Традиционная японская живопись черной тушью на рисовой бумаге, одинокая сосна на утесе в тумане, минимализм',
            shader: 'sumie',
            colors: ['#f8fafc', '#94a3b8', '#475569', '#0f172a'],
            bgGradient: ['#080808', '#141414', '#0c0c0c', '#030303'],
            ambient: 'radial-gradient(circle, rgba(248,250,252,0.4) 0%, rgba(71,85,105,0.2) 60%, transparent 90%)'
        },
        {
            id: 'pixel_art_arcade',
            nameRu: 'Пиксель-Арт 16-бит',
            nameEn: '16-Bit Arcade Retro',
            category: 'art',
            icon: '👾',
            prompt: '16-битный ночной кибер-город, яркая пиксельная палитра аркадных автоматов 90-х, светящиеся вывески',
            shader: 'pixel',
            colors: ['#a855f7', '#06b6d4', '#f43f5e', '#facc15'],
            bgGradient: ['#0b0317', '#1a0633', '#061329', '#02020d'],
            ambient: 'radial-gradient(circle, rgba(168,85,247,0.65) 0%, rgba(6,182,212,0.35) 50%, transparent 90%)'
        },
        {
            id: 'byzantine_mosaic',
            nameRu: 'Византийская мозаика',
            nameEn: 'Byzantine Golden Mosaic',
            category: 'art',
            icon: '👑',
            prompt: 'Древняя византийская мозаика собора Святой Софии, золотые тессеры мерцают в свете свечей, священное величие',
            shader: 'mosaic',
            colors: ['#ffd700', '#f59e0b', '#1e3a8a', '#dc2626'],
            bgGradient: ['#1c1404', '#382808', '#1c1404', '#0d0a02'],
            ambient: 'radial-gradient(circle, rgba(255,215,0,0.7) 0%, rgba(30,58,138,0.3) 50%, transparent 90%)'
        },
        {
            id: 'street_graffiti',
            nameRu: 'Уличный Граффити-Арт',
            nameEn: 'Urban Graffiti Wall',
            category: 'art',
            icon: '🎨',
            prompt: 'Кирпичная стена Бруклина, покрытая взрывным многослойным граффити, брызги аэрозольной краски, потеки акрила',
            shader: 'graffiti',
            colors: ['#f43f5e', '#22c55e', '#06b6d4', '#facc15'],
            bgGradient: ['#120814', '#241029', '#081721', '#04020a'],
            ambient: 'radial-gradient(circle, rgba(244,63,94,0.65) 0%, rgba(34,197,94,0.35) 50%, transparent 90%)'
        },
        {
            id: 'bauhaus_minimalism',
            nameRu: 'Минимализм Баухаус',
            nameEn: 'Bauhaus Modernist Form',
            category: 'art',
            icon: '📐',
            prompt: 'Чистый минимализм стиля Баухаус 1925 года, идеальный красный круг, синий треугольник и желтый квадрат, архитектура',
            shader: 'bauhaus',
            colors: ['#ef4444', '#3b82f6', '#facc15', '#f8fafc'],
            bgGradient: ['#0f0f12', '#1a1a21', '#111117', '#050508'],
            ambient: 'radial-gradient(circle, rgba(239,68,68,0.55) 0%, rgba(59,130,246,0.35) 50%, transparent 90%)'
        },

        // ── 7. ИСТОРИЯ И ВЕЛИКИЕ ЭПОХИ (12 тем) ────────────────────────────────
        {
            id: 'ancient_egypt',
            nameRu: 'Древний Египет: Пирамиды',
            nameEn: 'Ancient Egypt Pyramids',
            category: 'history',
            icon: '🏺',
            prompt: 'Великие пирамиды Гизы в эпоху расцвета фараонов, золотые вершины пирионов сияют на солнце, караван у Нила',
            shader: 'egypt',
            colors: ['#ffd700', '#d97706', '#b45309', '#0284c7'],
            bgGradient: ['#1f1304', '#3d2508', '#241605', '#0d0701'],
            ambient: 'radial-gradient(circle, rgba(255,215,0,0.7) 0%, rgba(217,119,6,0.35) 50%, transparent 90%)'
        },
        {
            id: 'rome_colosseum',
            nameRu: 'Римский Колизей: Гладиаторы',
            nameEn: 'Colosseum Gladiator Arena',
            category: 'history',
            icon: '🏛️',
            prompt: 'Залитый солнцем Римский Колизей, песчаная арена, алые штандарты легионов, развевающиеся на трибунах',
            shader: 'gladiator',
            colors: ['#dc2626', '#d97706', '#fbbf24', '#7f1d1d'],
            bgGradient: ['#1c0805', '#36110a', '#210b06', '#0a0301'],
            ambient: 'radial-gradient(circle, rgba(220,38,38,0.65) 0%, rgba(217,119,6,0.35) 50%, transparent 90%)'
        },
        {
            id: 'viking_fjords',
            nameRu: 'Эпоха Викингов',
            nameEn: 'Viking Drakkar Ships',
            category: 'history',
            icon: '⚔️',
            prompt: 'Драккары викингов с драконьими носами рассекают ледяные норвежские фьорды, щиты на бортах, суровое северное небо',
            shader: 'vikings',
            colors: ['#0284c7', '#94a3b8', '#dc2626', '#e2e8f0'],
            bgGradient: ['#05101a', '#0b1e30', '#071421', '#02060a'],
            ambient: 'radial-gradient(circle, rgba(2,132,199,0.6) 0%, rgba(148,163,184,0.3) 50%, transparent 90%)'
        },
        {
            id: 'feudal_samurai',
            nameRu: 'Самураи феодальной Японии',
            nameEn: 'Feudal Samurai Duel',
            category: 'history',
            icon: '🗡️',
            prompt: 'Самурай в черных лакированных доспехах стоит на холме под падающими кленовыми листьями, блеск клинка катаны на закате',
            shader: 'samurai',
            colors: ['#dc2626', '#ef4444', '#1e293b', '#f59e0b'],
            bgGradient: ['#1c0608', '#380c10', '#1f0709', '#0a0203'],
            ambient: 'radial-gradient(circle, rgba(220,38,38,0.7) 0%, rgba(245,158,11,0.3) 50%, transparent 90%)'
        },
        {
            id: 'renaissance_davinci',
            nameRu: 'Ренессанс: Мастерская Да Винчи',
            nameEn: 'Renaissance Da Vinci Lab',
            category: 'history',
            icon: '📜',
            prompt: 'Флоренция эпохи Возрождения, мастерская Леонардо да Винчи, чертежи летательных аппаратов, свечи, теплый пергамент',
            shader: 'davinci',
            colors: ['#d97706', '#b45309', '#78350f', '#fef3c7'],
            bgGradient: ['#1a0e05', '#331b0a', '#1c0f05', '#0a0502'],
            ambient: 'radial-gradient(circle, rgba(217,119,6,0.65) 0%, rgba(180,83,9,0.35) 50%, transparent 90%)'
        },
        {
            id: 'steppe_nomads',
            nameRu: 'Великая Степь кочевников',
            nameEn: 'Great Steppe Nomads',
            category: 'history',
            icon: '🐎',
            prompt: 'Бескрайняя золотая ковыльная степь Казахстана на закате, табун вольных лошадей мчится к горизонту, белая юрта вдали',
            shader: 'steppe',
            colors: ['#f59e0b', '#d97706', '#0284c7', '#fef08a'],
            bgGradient: ['#1c1104', '#382208', '#141d33', '#080602'],
            ambient: 'radial-gradient(circle, rgba(245,158,11,0.7) 0%, rgba(2,132,199,0.35) 50%, transparent 90%)'
        },
        {
            id: 'ancient_greece',
            nameRu: 'Древняя Греция: Парфенон',
            nameEn: 'Ancient Greece Parthenon',
            category: 'history',
            icon: '🏛️',
            prompt: 'Беломраморный Афинский Акрополь и Парфенон в зените славы, лазурное Эгейское море, оливковые рощи в лучах полудня',
            shader: 'greece',
            colors: ['#0284c7', '#38bdf8', '#f8fafc', '#ffd700'],
            bgGradient: ['#051529', '#0a2c54', '#061c36', '#020a14'],
            ambient: 'radial-gradient(circle, rgba(2,132,199,0.65) 0%, rgba(255,215,0,0.3) 50%, transparent 90%)'
        },
        {
            id: 'victorian_steam',
            nameRu: 'Викторианская индустрия',
            nameEn: 'Victorian Steam Engine',
            category: 'history',
            icon: '🚂',
            prompt: 'Паровоз мчится по виадуку сквозь шотландские туманные горы, клубы белого пара, монументальная викторианская сталь',
            shader: 'train',
            colors: ['#94a3b8', '#d97706', '#cbd5e1', '#334155'],
            bgGradient: ['#0d0d12', '#1a1a24', '#101017', '#050508'],
            ambient: 'radial-gradient(circle, rgba(148,163,184,0.5) 0%, rgba(217,119,6,0.3) 50%, transparent 90%)'
        },
        {
            id: 'disco_1970',
            nameRu: 'Эпоха Диско 70-х',
            nameEn: '1970s Disco Dancefloor',
            category: 'history',
            icon: '🕺',
            prompt: 'Зеркальный диско-шар пускает тысячи солнечных зайчиков по неоновому танцполу, винтажный стиль Studio 54, блеск',
            shader: 'disco',
            colors: ['#ec4899', '#a855f7', '#ffd700', '#06b6d4'],
            bgGradient: ['#140214', '#2b042b', '#07182e', '#03010a'],
            ambient: 'radial-gradient(circle, rgba(236,72,153,0.7) 0%, rgba(255,215,0,0.4) 50%, transparent 90%)'
        },
        {
            id: 'klondike_gold',
            nameRu: 'Золотая лихорадка Клондайка',
            nameEn: 'Klondike Gold Rush',
            category: 'history',
            icon: '⛏️',
            prompt: 'Горная бурная река Юкона, старатели моют золото в лотках, сосновая тайга Аляски, морозный чистый воздух',
            shader: 'gold_rush',
            colors: ['#ffd700', '#f59e0b', '#0284c7', '#15803d'],
            bgGradient: ['#0b141a', '#132833', '#0e1d14', '#04070a'],
            ambient: 'radial-gradient(circle, rgba(255,215,0,0.65) 0%, rgba(2,132,199,0.3) 50%, transparent 90%)'
        },
        {
            id: 'maya_pyramids',
            nameRu: 'Майя: Пирамиды Чичен-Ицы',
            nameEn: 'Maya Chichen Itza Jungle',
            category: 'history',
            icon: '🗿',
            prompt: 'Каменная ступенчатая пирамида Кукулькана посреди непроходимых мексиканских джунглей, лучи солнца сквозь лианы',
            shader: 'maya',
            colors: ['#10b981', '#f59e0b', '#d97706', '#059669'],
            bgGradient: ['#03140a', '#082915', '#1a1005', '#020804'],
            ambient: 'radial-gradient(circle, rgba(16,185,129,0.65) 0%, rgba(245,158,11,0.35) 50%, transparent 90%)'
        },
        {
            id: 'silk_road_caravan',
            nameRu: 'Караван Шелкового Пути',
            nameEn: 'Silk Road Oasis Caravan',
            category: 'history',
            icon: '🐪',
            prompt: 'Караван верблюдов движется по гребням песчаных дюн к цветущему оазису с пальмами на закате, Шелковый путь',
            shader: 'silk_road',
            colors: ['#f59e0b', '#ea580c', '#10b981', '#fbbf24'],
            bgGradient: ['#210e03', '#3d1c06', '#211004', '#0d0601'],
            ambient: 'radial-gradient(circle, rgba(245,158,11,0.7) 0%, rgba(234,88,12,0.35) 50%, transparent 90%)'
        },

        // ── 8. РЕЛАКСАЦИЯ, ДЗЕН И МЕДИТАЦИЯ (14 тем) ───────────────────────────
        {
            id: 'cozy_fireplace',
            nameRu: 'Уютный камин с искрами',
            nameEn: 'Cozy Crackling Fireplace',
            category: 'relax',
            icon: '🔥',
            prompt: 'Уютный каменный камин в горном шале, потрескивающие дрова, взлетающие золотые искры, мягкое теплое свечение',
            shader: 'fire',
            colors: ['#f97316', '#ef4444', '#fbbf24', '#ea580c'],
            bgGradient: ['#1f0703', '#380d05', '#1f0703', '#0d0301'],
            ambient: 'radial-gradient(circle, rgba(249,115,22,0.7) 0%, rgba(239,68,68,0.4) 45%, transparent 90%)'
        },
        {
            id: 'rain_on_window',
            nameRu: 'Ночной дождь за стеклом',
            nameEn: 'Night Rain on Window Glass',
            category: 'relax',
            icon: '🌧️',
            prompt: 'Капли дождя медленно стекают по стеклу окна, размытые огни ночного города на заднем плане, успокаивающая атмосфера',
            shader: 'rain_drops',
            colors: ['#38bdf8', '#0284c7', '#94a3b8', '#facc15'],
            bgGradient: ['#050812', '#0c1224', '#070b17', '#020308'],
            ambient: 'radial-gradient(circle, rgba(56,189,248,0.55) 0%, rgba(2,132,199,0.3) 50%, transparent 90%)'
        },
        {
            id: 'zen_rock_garden',
            nameRu: 'Дзен-сад камней',
            nameEn: 'Japanese Zen Rock Garden',
            category: 'relax',
            icon: '🪨',
            prompt: 'Японский сад камней в Киото, идеальные круги на гравии от граблей, замшелые валуны, капли росы на бонсай, покой',
            shader: 'zen',
            colors: ['#94a3b8', '#10b981', '#cbd5e1', '#475569'],
            bgGradient: ['#0a0f0d', '#131f1a', '#0c1411', '#040807'],
            ambient: 'radial-gradient(circle, rgba(148,163,184,0.5) 0%, rgba(16,185,129,0.3) 50%, transparent 90%)'
        },
        {
            id: 'forest_campfire',
            nameRu: 'Звездный костер в лесу',
            nameEn: 'Starry Forest Campfire',
            category: 'relax',
            icon: '⛺',
            prompt: 'Костер под вековыми соснами под гигантским куполом звездного неба, струйка дыма уходит к Млечному Пути',
            shader: 'campfire',
            colors: ['#f59e0b', '#ef4444', '#38bdf8', '#fbbf24'],
            bgGradient: ['#070814', '#0d1329', '#1a0d06', '#020308'],
            ambient: 'radial-gradient(circle, rgba(245,158,11,0.65) 0%, rgba(56,189,248,0.3) 50%, transparent 90%)'
        },
        {
            id: 'tea_ceremony',
            nameRu: 'Чайная церемония',
            nameEn: 'Zen Tea Ceremony Steam',
            category: 'relax',
            icon: '🍵',
            prompt: 'Пар мягко поднимается над керамической пиалой с зеленым чаем матча, бамбуковый венчик, деревянная терраса',
            shader: 'steam',
            colors: ['#84cc16', '#22c55e', '#fef08a', '#e2e8f0'],
            bgGradient: ['#0a1207', '#14240f', '#0c1709', '#030602'],
            ambient: 'radial-gradient(circle, rgba(132,204,22,0.6) 0%, rgba(34,197,94,0.3) 50%, transparent 90%)'
        },
        {
            id: 'sunset_beach_waves',
            nameRu: 'Теплый океанский прибой',
            nameEn: 'Gentle Ocean Sunset Tide',
            category: 'relax',
            icon: '🏖️',
            prompt: 'Нежные волны ласкают песчаный берег на закате, золотисто-розовая пена, угасающее солнце касается горизонта',
            shader: 'beach_tide',
            colors: ['#fb7185', '#f59e0b', '#38bdf8', '#fed7aa'],
            bgGradient: ['#1c0c17', '#36162a', '#14172e', '#07040d'],
            ambient: 'radial-gradient(circle, rgba(251,113,133,0.65) 0%, rgba(245,158,11,0.35) 50%, transparent 90%)'
        },
        {
            id: 'levitating_crystals',
            nameRu: 'Левитирующие кристаллы',
            nameEn: 'Floating Amethyst Crystals',
            category: 'relax',
            icon: '🔮',
            prompt: 'Парящие в невесомости фиолетовые аметистовые кристаллы, мягкое внутреннее свечение, гипнотический релакс',
            shader: 'crystals',
            colors: ['#c084fc', '#a855f7', '#e879f9', '#38bdf8'],
            bgGradient: ['#0a0314', '#190630', '#0a0314', '#030108'],
            ambient: 'radial-gradient(circle, rgba(192,132,252,0.65) 0%, rgba(232,121,249,0.35) 50%, transparent 90%)'
        },
        {
            id: 'candle_flicker',
            nameRu: 'Свеча в темноте',
            nameEn: 'Solitary Candle Radiance',
            category: 'relax',
            icon: '🕯️',
            prompt: 'Одинокая свеча в полумраке, мягкое колеблющееся янтарное пламя, теплое успокаивающее сияние, глубокая тишина',
            shader: 'candle',
            colors: ['#f59e0b', '#ffd700', '#ea580c', '#78350f'],
            bgGradient: ['#140a02', '#241204', '#140a02', '#050200'],
            ambient: 'radial-gradient(circle, rgba(245,158,11,0.7) 0%, rgba(255,215,0,0.35) 50%, transparent 90%)'
        },
        {
            id: 'morning_clouds',
            nameRu: 'Парящие облака на рассвете',
            nameEn: 'Endless Dawn Cloud Carpet',
            category: 'relax',
            icon: '☁️',
            prompt: 'Бескрайний океан пушистых облаков в первых лучах рассвета, золотые и персиковые переливы света, полет души',
            shader: 'clouds',
            colors: ['#fed7aa', '#f472b6', '#38bdf8', '#ffffff'],
            bgGradient: ['#140e24', '#291b47', '#17203b', '#060614'],
            ambient: 'radial-gradient(circle, rgba(254,215,170,0.6) 0%, rgba(244,114,182,0.35) 50%, transparent 90%)'
        },
        {
            id: 'polar_cabin',
            nameRu: 'Хижина в полярную ночь',
            nameEn: 'Cozy Polar Cabin Snow',
            category: 'relax',
            icon: '🛖',
            prompt: 'Деревянная хижина среди сугробов в полярную ночь, теплое желтое окошко светит во тьму, падающий медленный снег',
            shader: 'snow_cabin',
            colors: ['#ffd700', '#38bdf8', '#cbd5e1', '#f8fafc'],
            bgGradient: ['#040914', '#08172e', '#050e1c', '#010308'],
            ambient: 'radial-gradient(circle, rgba(255,215,0,0.6) 0%, rgba(56,189,248,0.3) 50%, transparent 90%)'
        },
        {
            id: 'fireflies_forest',
            nameRu: 'Сад светлячков',
            nameEn: 'Enchanted Firefly Grove',
            category: 'relax',
            icon: '✨',
            prompt: 'Сотни золотисто-зеленых светлячков парят в ночном лесу над цветущими папоротниками, сказочное умиротворение',
            shader: 'fireflies',
            colors: ['#a3e635', '#fde047', '#10b981', '#84cc16'],
            bgGradient: ['#030f06', '#06210d', '#031207', '#010602'],
            ambient: 'radial-gradient(circle, rgba(163,230,53,0.65) 0%, rgba(253,224,71,0.35) 50%, transparent 90%)'
        },
        {
            id: 'starry_lullaby',
            nameRu: 'Колыбельная звезд',
            nameEn: 'Pastel Star Lullaby',
            category: 'relax',
            icon: '🌙',
            prompt: 'Пастельное сновидение, тонкий серп луны качается на облаке, мягкие сияющие созвездия укачивают мир',
            shader: 'lullaby',
            colors: ['#c084fc', '#f472b6', '#fed7aa', '#67e8f9'],
            bgGradient: ['#0e071c', '#1e0e38', '#10142e', '#05030d'],
            ambient: 'radial-gradient(circle, rgba(192,132,252,0.6) 0%, rgba(244,114,182,0.35) 50%, transparent 90%)'
        },
        {
            id: 'mountain_onsen',
            nameRu: 'Горный горячий источник Онсэн',
            nameEn: 'Japanese Mountain Onsen',
            category: 'relax',
            icon: '♨️',
            prompt: 'Каменная купель онсэн под открытым небом в заснеженных горах Японии, горячий пар, снежинки тают в воде',
            shader: 'onsen',
            colors: ['#38bdf8', '#cbd5e1', '#f8fafc', '#f59e0b'],
            bgGradient: ['#08121f', '#10233b', '#0a1726', '#03060d'],
            ambient: 'radial-gradient(circle, rgba(56,189,248,0.55) 0%, rgba(203,213,225,0.3) 50%, transparent 90%)'
        },
        {
            id: 'deep_cosmic_calm',
            nameRu: 'Безмолвие глубокого космоса',
            nameEn: 'Deep Cosmic Silence',
            category: 'relax',
            icon: '🌌',
            prompt: 'Абсолютная медитативная тишина открытого космоса, медленно вращающаяся далекая галактика, мир и безмятежность',
            shader: 'cosmic_calm',
            colors: ['#818cf8', '#c084fc', '#38bdf8', '#e0e7ff'],
            bgGradient: ['#020208', '#070817', '#03040f', '#010105'],
            ambient: 'radial-gradient(circle, rgba(129,140,248,0.55) 0%, rgba(192,132,252,0.3) 50%, transparent 90%)'
        }
    ];

    // Procedural Shader Registry for all 100 themes
    function renderProceduralWorld(c, themeId, t, w, h) {
        const theme = THEMES_100.find(item => item.id === themeId) || THEMES_100[0];
        const s = theme.shader || 'space';
        const cx = w / 2;
        const cy = h / 2;

        // Base gradient background
        const grad = c.createLinearGradient(0, 0, 0, h);
        const bg = theme.bgGradient;
        grad.addColorStop(0, bg[0]);
        grad.addColorStop(0.4, bg[1]);
        grad.addColorStop(0.8, bg[2]);
        grad.addColorStop(1, bg[3]);
        c.fillStyle = grad;
        c.fillRect(0, 0, w, h);

        // Procedural Animation layer by shader family
                if (s === 'baby_cars') {
            // Toddler Toy Cars & Playroom Scene (Age 1-3 Safe)
            c.save();

            // Soft cozy floor & circular pastel play rug
            const floorY = h * 0.72;
            c.fillStyle = '#261b12';
            c.fillRect(0, floorY, w, h - floorY);

            // Large round rainbow rug
            c.fillStyle = 'rgba(254, 240, 138, 0.25)';
            c.beginPath();
            c.ellipse(cx, floorY + 40, w * 0.45, (h - floorY) * 0.75, 0, 0, Math.PI * 2);
            c.fill();
            c.strokeStyle = 'rgba(244, 114, 182, 0.4)';
            c.lineWidth = 4;
            c.stroke();

            // Smiling warm sun in the corner
            const sunX = w * 0.85;
            const sunY = h * 0.22;
            c.fillStyle = '#fde047';
            c.shadowColor = '#facc15';
            c.shadowBlur = 24;
            c.beginPath();
            c.arc(sunX, sunY, 42, 0, Math.PI * 2);
            c.fill();
            c.shadowBlur = 0;

            // Sunbeams
            c.strokeStyle = 'rgba(253, 224, 71, 0.4)';
            c.lineWidth = 3;
            for (let a = 0; a < 8; a++) {
                const ang = a * (Math.PI / 4) + t * 0.2;
                c.beginPath();
                c.moveTo(sunX + Math.cos(ang) * 48, sunY + Math.sin(ang) * 48);
                c.lineTo(sunX + Math.cos(ang) * 62, sunY + Math.sin(ang) * 62);
                c.stroke();
            }

            // Smiling baby toy car moving across the screen
            const carSpeed = 85;
            const carX = ((t * carSpeed) % (w + 240)) - 120;
            const carY = floorY - 38;

            // Car Body (Bright red rounded wooden block)
            c.fillStyle = '#ef4444';
            c.beginPath();
            c.roundRect(carX, carY, 110, 42, [14, 14, 6, 6]);
            c.fill();

            // Car Cabin (Cyan / Yellow roof)
            c.fillStyle = '#38bdf8';
            c.beginPath();
            c.roundRect(carX + 22, carY - 30, 62, 32, [16, 16, 2, 2]);
            c.fill();

            // Smiling window
            c.fillStyle = '#ffffff';
            c.beginPath();
            c.arc(carX + 53, carY - 14, 12, 0, Math.PI * 2);
            c.fill();
            c.fillStyle = '#1e293b';
            c.beginPath();
            c.arc(carX + 56, carY - 14, 4, 0, Math.PI * 2);
            c.fill();

            // Headlight
            c.fillStyle = '#fef08a';
            c.shadowColor = '#fde047';
            c.shadowBlur = 10;
            c.beginPath();
            c.arc(carX + 106, carY + 16, 7, 0, Math.PI * 2);
            c.fill();
            c.shadowBlur = 0;

            // Wheels (Spinning yellow wooden circles)
            const wheelSpin = t * 6;
            const drawWheel = (wx, wy) => {
                c.save();
                c.translate(wx, wy);
                c.rotate(wheelSpin);
                c.fillStyle = '#facc15';
                c.beginPath();
                c.arc(0, 0, 16, 0, Math.PI * 2);
                c.fill();
                c.strokeStyle = '#d97706';
                c.lineWidth = 3;
                c.stroke();
                // Wheel spokes
                c.beginPath();
                c.moveTo(-16, 0); c.lineTo(16, 0);
                c.moveTo(0, -16); c.lineTo(0, 16);
                c.stroke();
                c.restore();
            };

            drawWheel(carX + 26, carY + 42);
            drawWheel(carX + 86, carY + 42);

            // Floating gentle rainbow bubbles
            for (let b = 0; b < 12; b++) {
                const bx = (Math.sin(b * 17 + t * 0.6) * 0.5 + 0.5) * w;
                const by = ((t * 40 + b * 55) % (h * 0.75));
                const bRad = 10 + Math.sin(b) * 5;

                c.strokeStyle = b % 2 === 0 ? 'rgba(56, 189, 248, 0.6)' : 'rgba(244, 114, 182, 0.6)';
                c.lineWidth = 2;
                c.beginPath();
                c.arc(bx, by, bRad, 0, Math.PI * 2);
                c.stroke();

                // Bubble shine
                c.fillStyle = 'rgba(255, 255, 255, 0.6)';
                c.beginPath();
                c.arc(bx - bRad * 0.35, by - bRad * 0.35, bRad * 0.25, 0, Math.PI * 2);
                c.fill();
            }

            c.restore();

        } else if (s === 'black_hole' || s === 'event_horizon') {
            c.save();
            c.translate(cx, cy);
            c.rotate(t * 0.25);
            const rMin = Math.min(w, h) * 0.18;
            const rMax = Math.min(w, h) * 0.65;
            const disk = c.createRadialGradient(0, 0, rMin, 0, 0, rMax);
            disk.addColorStop(0, theme.colors[0]);
            disk.addColorStop(0.3, theme.colors[1]);
            disk.addColorStop(0.7, theme.colors[2] || 'transparent');
            disk.addColorStop(1, 'transparent');
            c.fillStyle = disk;
            c.beginPath();
            c.ellipse(0, 0, rMax, rMax * 0.35, 0, 0, Math.PI * 2);
            c.fill();

            // Black void center
            c.fillStyle = '#000000';
            c.beginPath();
            c.arc(0, 0, rMin * 0.82, 0, Math.PI * 2);
            c.fill();
            c.strokeStyle = theme.colors[0];
            c.lineWidth = 2.5;
            c.shadowColor = theme.colors[0];
            c.shadowBlur = 18;
            c.stroke();
            c.restore();

        } else if (s === 'supernova' || s === 'volcano') {
            c.save();
            c.translate(cx, cy);
            const pulse = (Math.sin(t * 3) * 0.15 + 1);
            const r = Math.min(w, h) * 0.4 * pulse;
            const blast = c.createRadialGradient(0, 0, 10, 0, 0, r);
            blast.addColorStop(0, '#ffffff');
            blast.addColorStop(0.2, theme.colors[0]);
            blast.addColorStop(0.6, theme.colors[1]);
            blast.addColorStop(1, 'transparent');
            c.fillStyle = blast;
            c.beginPath();
            c.arc(0, 0, r, 0, Math.PI * 2);
            c.fill();
            // Shockwave rings
            c.strokeStyle = theme.colors[2] || '#f97316';
            c.lineWidth = 2;
            c.beginPath();
            c.arc(0, 0, (t * 120) % (Math.max(w, h) * 0.7), 0, Math.PI * 2);
            c.stroke();
            c.restore();

        } else if (s === 'aurora') {
            c.save();
            for (let i = 0; i < 4; i++) {
                c.beginPath();
                c.moveTo(0, h * 0.2);
                for (let x = 0; x <= w; x += 40) {
                    const y = h * 0.35 + Math.sin(x * 0.005 + t * 0.8 + i) * 60 + Math.cos(x * 0.01 + t) * 30;
                    c.lineTo(x, y);
                }
                c.lineTo(w, h);
                c.lineTo(0, h);
                c.closePath();
                const aGrad = c.createLinearGradient(0, h * 0.2, 0, h * 0.7);
                aGrad.addColorStop(0, 'transparent');
                aGrad.addColorStop(0.5, i % 2 === 0 ? 'rgba(16, 185, 129, 0.25)' : 'rgba(168, 85, 247, 0.22)');
                aGrad.addColorStop(1, 'transparent');
                c.fillStyle = aGrad;
                c.fill();
            }
            c.restore();

        } else if (s === 'matrix_code') {
            c.save();
            c.fillStyle = 'rgba(34, 197, 94, 0.75)';
            c.font = '12px monospace';
            const cols = Math.floor(w / 24);
            for (let i = 0; i < cols; i++) {
                const charY = ((t * 220 + i * 97) % h);
                const charX = i * 24 + 10;
                const char = String.fromCharCode(0x30A0 + Math.floor(Math.sin(i * 13 + t) * 40 + 40));
                c.fillText(char, charX, charY);
            }
            c.restore();

        } else if (s === 'cyber_city' || s === 'synthwave' || s === 'tron') {
            // Horizon neon grid
            const horizon = h * 0.65;
            c.strokeStyle = theme.colors[0] || 'rgba(236, 72, 153, 0.3)';
            c.lineWidth = 1;
            c.beginPath();
            for (let x = -w; x < w * 2; x += 45) {
                c.moveTo(cx, horizon);
                c.lineTo(x, h);
            }
            for (let y = horizon; y <= h; y += (y - horizon + 12) * 0.32) {
                c.moveTo(0, y);
                c.lineTo(w, y);
            }
            c.stroke();

            // Neon sun orb for synthwave
            if (s === 'synthwave') {
                c.save();
                const sGrad = c.createLinearGradient(cx, horizon - 120, cx, horizon);
                sGrad.addColorStop(0, '#f97316');
                sGrad.addColorStop(1, '#ec4899');
                c.fillStyle = sGrad;
                c.beginPath();
                c.arc(cx, horizon - 20, 90, Math.PI, 0);
                c.fill();
                c.restore();
            }

        } else if (s === 'fire' || s === 'campfire' || s === 'candle') {
            c.save();
            const fY = s === 'candle' ? cy + 40 : h * 0.85;
            for (let i = 0; i < 28; i++) {
                const fx = cx + Math.sin(i * 3 + t * 4) * 35;
                const fy = fY - ((t * 180 + i * 25) % 160);
                const fRadius = Math.max(2, 18 - (fY - fy) * 0.1);
                c.fillStyle = i % 2 === 0 ? 'rgba(249, 115, 22, 0.65)' : 'rgba(239, 68, 68, 0.55)';
                c.beginPath();
                c.arc(fx, fy, fRadius, 0, Math.PI * 2);
                c.fill();
            }
            c.restore();

        } else if (s === 'ocean_caustics' || s === 'beach_tide') {
            c.save();
            c.fillStyle = 'rgba(56, 189, 248, 0.08)';
            for (let i = 0; i < 7; i++) {
                c.beginPath();
                const lx = cx + Math.sin(t * 1.2 + i) * 110 - 120 + i * 50;
                c.moveTo(lx, 0);
                c.lineTo(lx + 60, 0);
                c.lineTo(lx + 150, h);
                c.lineTo(lx - 40, h);
                c.fill();
            }
            c.restore();

        } else if (s === 'sakura' || s === 'autumn') {
            c.save();
            c.fillStyle = s === 'sakura' ? 'rgba(244, 114, 182, 0.8)' : 'rgba(245, 158, 11, 0.85)';
            for (let i = 0; i < 35; i++) {
                const px = (Math.sin(t * 1.3 + i * 15) * 0.5 + 0.5) * w;
                const py = ((t * 80 + i * 40) % h);
                c.beginPath();
                c.ellipse(px, py, 7, 4, t + i, 0, Math.PI * 2);
                c.fill();
            }
            c.restore();

        } else if (s === 'rain_drops' || s === 'nyc') {
            c.strokeStyle = 'rgba(56, 189, 248, 0.45)';
            c.lineWidth = 1.4;
            c.beginPath();
            for (let i = 0; i < 45; i++) {
                const rx = (Math.sin(i * 91 + t * 4) * 0.5 + 0.5) * w;
                const ry = ((t * 750 + i * 65) % h);
                c.moveTo(rx, ry);
                c.lineTo(rx - 6, ry + 24);
            }
            c.stroke();

        } else if (s === 'warp') {
            c.save();
            c.strokeStyle = theme.colors[0] || 'rgba(56, 189, 248, 0.8)';
            c.lineWidth = 2;
            for (let i = 0; i < 60; i++) {
                const ang = (i / 60) * Math.PI * 2;
                const dist = ((t * 350 + i * 35) % (Math.max(w, h) * 0.8));
                const sx = cx + Math.cos(ang) * (dist * 0.6);
                const sy = cy + Math.sin(ang) * (dist * 0.6);
                const ex = cx + Math.cos(ang) * dist;
                const ey = cy + Math.sin(ang) * dist;
                c.beginPath();
                c.moveTo(sx, sy);
                c.lineTo(ex, ey);
                c.stroke();
            }
            c.restore();

        } else {
            // Default Cosmic Floating Orbs & Light Radiance
            c.save();
            for (let i = 0; i < 18; i++) {
                const ox = cx + Math.sin(t * 0.8 + i * 2) * (w * 0.35);
                const oy = cy + Math.cos(t * 0.6 + i * 1.5) * (h * 0.3);
                const oRad = Math.sin(t + i) * 8 + 14;
                c.fillStyle = theme.colors[i % theme.colors.length] || 'rgba(168, 85, 247, 0.4)';
                c.shadowColor = c.fillStyle;
                c.shadowBlur = 15;
                c.beginPath();
                c.arc(ox, oy, oRad, 0, Math.PI * 2);
                c.fill();
            }
            c.restore();
        }
    }

    // Export to window
    window.LitdeoThemes = {
        catalog: THEMES_100,
        render: renderProceduralWorld,
        getThemeById: function(id) {
            return THEMES_100.find(t => t.id === id) || THEMES_100[0];
        }
    };

})(window);
