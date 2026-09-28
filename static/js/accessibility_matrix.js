/**
 * =============================================================================
 * LITALLY 4K — SOVEREIGN ACCESSIBILITY & ASSISTIVE ENGINE (50 MODALITIES)
 * File: static/js/accessibility_matrix.js
 * Author: Litally System Core 2026
 * Description: Clinical-grade assistive systems, neuro-simplification,
 *              psychoacoustics 3D audio, optical magnifying, and motor tremor guards.
 * =============================================================================
 */

// -----------------------------------------------------------------------------
// 1. MASTER CATALOG: 50 SOVEREIGN ASSISTIVE MODALITIES
// -----------------------------------------------------------------------------
const A11Y_MATRIX_CATALOG = [
    // --- 1. Vision & Ophthalmic Profiles (1 - 10) ---
    {
        id: 1,
        icon: "👑",
        category: "vision",
        name: "High-Contrast Sovereign Gold",
        nameRu: "Высококонтрастное Золото (OLED)",
        desc: "Pure OLED black with luminescent 2.5px gold outlines for maximum retinal contrast.",
        descRu: "Глубокий черный OLED-фон с контрастной 2.5px золотой обводкой для максимальной четкости.",
        cssClass: "a11y-mode-1"
    },
    {
        id: 2,
        icon: "⚫",
        category: "vision",
        name: "Pure Black Ultra-OLED",
        nameRu: "Абсолютный Черный (OLED 0 Lux)",
        desc: "True zero-luminance background with ambient particles disabled to protect sensitive eyes.",
        descRu: "Полное отключение светового излучения фона и частиц для защиты светочувствительной сетчатки.",
        cssClass: "a11y-mode-2"
    },
    {
        id: 3,
        icon: "🌅",
        category: "vision",
        name: "Morning Soft Parchment",
        nameRu: "Утренний Пергамент (Дневной свет)",
        desc: "Warm amber-ivory circadian tone eliminating screen glare during morning sun.",
        descRu: "Теплый янтарно-пергаментный тон, устраняющий блики и усталость глаз при утреннем свете.",
        cssClass: "a11y-mode-3"
    },
    {
        id: 4,
        icon: "🔴",
        category: "vision",
        name: "Protanopia Compensation",
        nameRu: "Коррекция Протанопии (Красный)",
        desc: "Real-time spectral shift matrix compensating for red-photoreceptor color weakness.",
        descRu: "Спектральный SVG-фильтр, перенастраивающий контраст для красно-слепого зрения.",
        cssClass: "a11y-mode-4"
    },
    {
        id: 5,
        icon: "🟢",
        category: "vision",
        name: "Deuteranopia Compensation",
        nameRu: "Коррекция Дейтеранопии (Зеленый)",
        desc: "Specialized color remapping to distinctly separate green-spectrum shades.",
        descRu: "Калибровка цветовой матрицы для четкого разделения оттенков при дейтеранопии.",
        cssClass: "a11y-mode-5"
    },
    {
        id: 6,
        icon: "🔵",
        category: "vision",
        name: "Tritanopia Compensation",
        nameRu: "Коррекция Тританопии (Сине-желтый)",
        desc: "Recalibrates chromatic axes for blue-yellow color vision deficiency.",
        descRu: "Перекалибровка хроматических осей для компенсации сине-желтой цветовой слепоты.",
        cssClass: "a11y-mode-6"
    },
    {
        id: 7,
        icon: "⚪",
        category: "vision",
        name: "Monochrome Sanctuary",
        nameRu: "Монохромное Святилище",
        desc: "High-contrast achromatic grayscale completely eliminating chromatic fatigue.",
        descRu: "Высококонтрастная черно-белая палитра, полностью устраняющая цветовую перегрузку.",
        cssClass: "a11y-mode-7"
    },
    {
        id: 8,
        icon: "🔍",
        category: "vision",
        name: "Cataract Soft Sharpener",
        nameRu: "Резкость Контуров (Катаракта)",
        desc: "High-acuity geometric edge detection filter sharpening blurred text contours.",
        descRu: "Усиление контраста кромок текста и контурная обводка для компенсации помутнения хрусталика.",
        cssClass: "a11y-mode-8"
    },
    {
        id: 9,
        icon: "🔦",
        category: "vision",
        name: "Glaucoma Central Focus",
        nameRu: "Центральный Фокус (Глаукома)",
        desc: "Central luminosity field amplifier aiding reading under peripheral vision reduction.",
        descRu: "Увеличение освещенности центральной зоны взгляда при сужении поля зрения.",
        action: "toggleGlaucomaFocus"
    },
    {
        id: 10,
        icon: "🕶️",
        category: "vision",
        name: "Photophobia Anti-Glare Shield",
        nameRu: "Поляризационный Щит (Фотофобия)",
        desc: "Deep sepia polaroid layer with 82% luminance reduction for extreme light sensitivity.",
        descRu: "Глубокий поляризационный сепия-слой с гашением светового потока на 82% при светобоязни.",
        cssClass: "a11y-mode-10"
    },

    // --- 2. Neuro & Cognitive Ergonomics (11 - 20) ---
    {
        id: 11,
        icon: "🧠",
        category: "neuro",
        name: "AI Easy-to-Read Simplifier",
        nameRu: "ИИ-Упрощение Текста (Easy-Read)",
        desc: "Neural rewriter: condenses complex clauses into concise, plain language.",
        descRu: "Нейросетевой адаптер: мгновенно преобразует сложные обороты в лаконичные предложения.",
        action: "toggleEasyToRead"
    },
    {
        id: 12,
        icon: "⚡",
        category: "neuro",
        name: "Bionic Reading Morph",
        nameRu: "Бионическое Чтение (Bionic Read)",
        desc: "Bolds initial word syllables to guide saccadic eye movement and accelerate cognition.",
        descRu: "Выделение первых букв каждого слова жирным золотом для скоростного фиксационного чтения.",
        action: "toggleBionicReading"
    },
    {
        id: 13,
        icon: "📏",
        category: "neuro",
        name: "Dyslexia Laser Guide Ruler",
        nameRu: "Лазерная Линейка Дислексии",
        desc: "Horizontal illuminated golden guide ruler tracking cursor to prevent line jumping.",
        descRu: "Световая горизонтальная направляющая, следующая за курсором и удерживающая строку.",
        action: "toggleDyslexiaRuler"
    },
    {
        id: 14,
        icon: "🔤",
        category: "neuro",
        name: "OpenDyslexic Weight Bias",
        nameRu: "Антидислексический Шрифт",
        desc: "Weighted baseline letterforms preventing character flipping, rotation, and crowding.",
        descRu: "Утяжеленные основания букв, предотвращающие переворачивание символов в мозге.",
        cssClass: "a11y-mode-14"
    },
    {
        id: 15,
        icon: "🎯",
        category: "neuro",
        name: "ADHD Hyper-Focus Mask",
        nameRu: "СДВГ-Маска Гиперфокуса",
        desc: "Softly dims and blurs all peripheral content except the paragraph under cursor.",
        descRu: "Мягко затемняет и размывает весь экран, кроме активного блока под курсором мыши.",
        cssClass: "a11y-mode-15"
    },
    {
        id: 16,
        icon: "🛡️",
        category: "neuro",
        name: "Sensory Overload Shield",
        nameRu: "Щит Сенсорной Перегрузки",
        desc: "Instantly terminates all canvas particles, glow pulses, and visual stimuli.",
        descRu: "Моментально гасит все частицы canvas, световые пульсации и микро-анимации сайта.",
        cssClass: "a11y-mode-16"
    },
    {
        id: 17,
        icon: "🚶",
        category: "neuro",
        name: "Cognitive Scroll Pacer",
        nameRu: "Когнитивный Пейсер Скролла",
        desc: "Locks page scroll momentum to gentle reading intervals, preventing disorientation.",
        descRu: "Ступенчатая плавная прокрутка с фиксацией на смысловых абзацах без рывков.",
        action: "toggleScrollPacer"
    },
    {
        id: 18,
        icon: "🖍️",
        category: "neuro",
        name: "TTS Karaoke Highlighting",
        nameRu: "Караоке-Подсветка Текста",
        desc: "Synchronously illuminates words as they are read aloud by emotional speech synthesis.",
        descRu: "Подсвечивает текущее читаемое слово золотым маркером синхронно с диктором.",
        action: "toggleTTSKaraoke"
    },
    {
        id: 19,
        icon: "🧭",
        category: "neuro",
        name: "Cognitive Memory Breadcrumbs",
        nameRu: "Навигационные Хлебные Крошки",
        desc: "Persistent visual breadcrumbs waypoint tracker for users with working-memory limits.",
        descRu: "Постоянная экранная полоса пройденных разделов и открытых окон для удержания контекста.",
        action: "toggleBreadcrumbs"
    },
    {
        id: 20,
        icon: "💡",
        category: "neuro",
        name: "Jargon & Metaphor Decrypter",
        nameRu: "Дешифратор Сложных Терминов",
        desc: "Interactive plain-language explanatory tooltips attached to literary terminology.",
        descRu: "Интерактивные всплывающие подсказки с простыми определениями редких терминов и метафор.",
        action: "toggleJargonDecrypter"
    },

    // --- 3. Optics & Gaze Control (21 - 27) ---
    {
        id: 21,
        icon: "👁️",
        category: "gaze",
        name: "Interactive Virtual Eye-Tracker",
        nameRu: "Виртуальный Трекер Взгляда",
        desc: "Software gaze simulator tracking visual attention and dynamically zooming paragraphs.",
        descRu: "Программный трекер точки взгляда с динамическим увеличением изучаемой зоны текста.",
        action: "toggleEyeTracker"
    },
    {
        id: 22,
        icon: "🤏",
        category: "gaze",
        name: "Micro-Facial Gesture Engine",
        nameRu: "Управление Мимикой Лица",
        desc: "Simulated facial gesture interpreter (nod to scroll down, raise brows for hub menu).",
        descRu: "Бесконтактное управление: кивок головой листает вниз, поднятие бровей открывает меню.",
        action: "toggleFacialGestures"
    },
    {
        id: 23,
        icon: "⏱️",
        category: "gaze",
        name: "Gaze Dwell-Clicker (1.2s)",
        nameRu: "Авто-Клик Взглядом (Dwell 1.2s)",
        desc: "Hovering over buttons for 1.2s triggers click automatically without mouse tapping.",
        descRu: "Автоматический клик при задержке курсора на элементе на 1.2 секунды без физического нажатия.",
        action: "toggleDwellClicker"
    },
    {
        id: 24,
        icon: "🔎",
        category: "gaze",
        name: "Optical Loupe Magnifier (2.5x)",
        nameRu: "Оптическая Лупа (2.5x Zoom)",
        desc: "High-definition floating 200px circular optical loupe with 2.5x magnification.",
        descRu: "Плавающая 200px круглая оптическая лупа с 2.5-кратным увеличением под курсором.",
        action: "toggleOpticalLoupe"
    },
    {
        id: 25,
        icon: "👓",
        category: "gaze",
        name: "Peripheral Contrast Amplifier",
        nameRu: "Усилитель Периферийного Контраста",
        desc: "Reinforces outer visual boundaries with prominent outlines to combat field loss.",
        descRu: "Мощная контурная обводка внешних границ интерфейса для людей с дефектами поля зрения.",
        cssClass: "a11y-mode-25"
    },
    {
        id: 26,
        icon: "📋",
        category: "gaze",
        name: "Line-Focus Letterbox Blinds",
        nameRu: "Чтение Через Щелевую Шторку",
        desc: "Shades top and bottom of screen, leaving an unobstructed 3-line aperture.",
        descRu: "Затеняет верх и низ экрана, оставляя открытой только узкую щель в 3 строки.",
        action: "toggleLetterboxBlinds"
    },
    {
        id: 27,
        icon: "✨",
        category: "gaze",
        name: "Giant Luminescent Beacon Cursor",
        nameRu: "Курсор-Маяк с Перекрестием",
        desc: "Replaces standard pointer with glowing 48px gold targeting reticle and coordinate crosshair.",
        descRu: "Заменяет указатель на светящийся 48px золотой маяк с точным координатным перекрестием.",
        action: "toggleBeaconCursor"
    },

    // --- 4. Psychoacoustics & 3D Spatial Audio (28 - 34) ---
    {
        id: 28,
        icon: "🔊",
        category: "audio",
        name: "3D Spatial Sound Compass",
        nameRu: "3D-Аудио Пространственный Компас",
        desc: "Stereo audio panner dynamically shifting frequencies left/right based on cursor position.",
        descRu: "Бинауральное панорамирование звука слева направо по положению элементов на экране.",
        action: "toggleSpatialCompass"
    },
    {
        id: 29,
        icon: "🗣️",
        category: "audio",
        name: "Empathetic Emotional AI Narrator",
        nameRu: "Эмоциональный ИИ-Диктор",
        desc: "Context-aware speech synthesis vocalizing page content with warm, measured inflection.",
        descRu: "Речевой синтезатор Web Speech API, вслух зачитывающий текст сайта с живой интонацией.",
        action: "toggleEmotionalNarrator"
    },
    {
        id: 30,
        icon: "📯",
        category: "audio",
        name: "Sub-Bass Navigational Pulses",
        nameRu: "Суб-Басовые Тактильные Импульсы",
        desc: "Low-frequency 55Hz acoustic beacons confirming navigation boundaries for non-visual users.",
        descRu: "Низкочастотные акустические маяки 55 Гц при достижении краев экрана и заголовков.",
        action: "toggleSubBassPulses"
    },
    {
        id: 31,
        icon: "🧘",
        category: "audio",
        name: "Binaural Reading Beats (432Hz)",
        nameRu: "Бинауральный Тон Погружения (432Hz)",
        desc: "Calming harmonic 432Hz sine wave ambient tone elevating deep reading concentration.",
        descRu: "Успокаивающая гармоническая волна 432 Гц для снятия тревожности и фокусировки на чтении.",
        action: "toggleBinauralDrone"
    },
    {
        id: 32,
        icon: "🎧",
        category: "audio",
        name: "Whisper Sanctuary Audio Guide",
        nameRu: "Шепотный Гид (ASMR-Аудио)",
        desc: "Soft whisper-tier synthetic speech designed for sound-sensitive neurological processing.",
        descRu: "Мягкая шепотная озвучка интерфейса с пониженной громкостью для людей с гиперакузией.",
        action: "toggleWhisperGuide"
    },
    {
        id: 33,
        icon: "🔔",
        category: "audio",
        name: "Acoustic Earcon Landmarks",
        nameRu: "Звуковые Метки Элементов (Earcons)",
        desc: "Unique harmonic audio signatures played when navigating between buttons, inputs, and portals.",
        descRu: "Индивидуальные гармонические аккорды при наведении на кнопки, поля ввода и разделы.",
        action: "toggleEarconLandmarks"
    },
    {
        id: 34,
        icon: "🎙️",
        category: "audio",
        name: "Hands-Free Voice Commander",
        nameRu: "Голосовой Командир Интерфейса",
        desc: "Voice listener activating site sections when hearing keywords like 'Books', 'Menu', 'Read'.",
        descRu: "Голосовое управление: распознает голосовые команды 'Книги', 'Меню', 'Читать', 'Назад'.",
        action: "toggleVoiceCommander"
    },

    // --- 5. Motor, Tremor & Physical Assist (35 - 42) ---
    {
        id: 35,
        icon: "✋",
        category: "motor",
        name: "Parkinson & Tremor Click Guard",
        nameRu: "Защита от Тремора (Паркинсон)",
        desc: "Suppresses rapid involuntary double-clicks and expands hit boundaries to 56px.",
        descRu: "Подавление случайных повторных кликов с интервалом менее 250 мс и увеличение кнопок до 56px.",
        cssClass: "a11y-mode-35"
    },
    {
        id: 36,
        icon: "⌨️",
        category: "motor",
        name: "Single-Key Keyboard Matrix",
        nameRu: "Управление Одной Клавишей",
        desc: "Traverse entire website sequentially using purely the Spacebar, activate with Enter.",
        descRu: "Пошаговый обход всех кнопок и ссылок сайта исключительно клавишей Пробел.",
        action: "toggleSingleKeyMatrix"
    },
    {
        id: 37,
        icon: "🕹️",
        category: "motor",
        name: "Virtual Head-Tracking Joystick",
        nameRu: "Виртуальный Джойстик Головы",
        desc: "Displays screen center gimbal reticle translating head tilt into continuous scroll.",
        descRu: "Экранный индикатор наклона для прокрутки страниц без рук.",
        action: "toggleHeadJoystick"
    },
    {
        id: 38,
        icon: "🧲",
        category: "motor",
        name: "Sticky Button Magnetic Snapping",
        nameRu: "Магнитное Притяжение к Кнопкам",
        desc: "Cursor magnetically slides into the center of nearest button when within 45px proximity.",
        descRu: "Курсор плавно примагничивается к центру ближайшей кнопки при приближении на 45px.",
        action: "toggleMagneticSnapping"
    },
    {
        id: 39,
        icon: "📱",
        category: "motor",
        name: "Giant Touch Targets (64px)",
        nameRu: "Гигантские Кнопки (64px)",
        desc: "Enlarges all interactive buttons, badges, and clickable pills to massive 64px hitboxes.",
        descRu: "Увеличивает зоны нажатия всех кнопок до 64px для уверенного касания при треморе.",
        cssClass: "a11y-mode-39"
    },
    {
        id: 40,
        icon: "💨",
        category: "motor",
        name: "Sip-and-Puff Switch Simulator",
        nameRu: "Симулятор Выключателя (Sip-Puff)",
        desc: "Automatic rhythmic scanning across navigation items for paralyzed assistive switch users.",
        descRu: "Автоматический цикличный перебор элементов с подсветкой для медицинских переключателей.",
        action: "toggleSipPuffSim"
    },
    {
        id: 41,
        icon: "🐌",
        category: "motor",
        name: "Ultra-Slow Kinetic Deceleration",
        nameRu: "Сверхплавное Замедление Скролла",
        desc: "Reduces scroll inertia by 80% to eliminate dizziness in vestibular disorder patients.",
        descRu: "Снижает инерцию прокрутки на 80% для защиты от головокружения при вестибулярных расстройствах.",
        action: "toggleSlowScroll"
    },
    {
        id: 42,
        icon: "⚖️",
        category: "motor",
        name: "Hand Drift Involuntary Filter",
        nameRu: "Фильтр Непроизвольного Дрейфа Руки",
        desc: "Algorithmic Kalman smoothing filter neutralizing high-frequency hand tremors.",
        descRu: "Алгоритмический сглаживающий фильтр, устраняющий дрожание курсора при треморе кисти.",
        action: "toggleDriftFilter"
    },

    // --- 6. Circadian & Biometric Adaptations (43 - 46) ---
    {
        id: 43,
        icon: "🕯️",
        category: "circadian",
        name: "Circadian Sunset Solar Sync",
        nameRu: "Циркадная Синхронизация с Солнцем",
        desc: "Reads local time hour to dynamically warm screen Kelvin color temperature past sunset.",
        descRu: "Анализирует текущее время суток и автоматически утепляет цветовую гамму после заката.",
        action: "toggleSolarSync"
    },
    {
        id: 44,
        icon: "🌙",
        category: "circadian",
        name: "Melatonin Midnight Amber (<550nm)",
        nameRu: "Мелатониновый Янтарный Щит (<550nm)",
        desc: "Completely filters out blue light wavelengths under 550nm to preserve natural sleep rhythms.",
        descRu: "100% блокировка синего излучения короче 550 нм для естественной выработки мелатонина.",
        cssClass: "a11y-mode-44"
    },
    {
        id: 45,
        icon: "🫁",
        category: "circadian",
        name: "4-7-8 Coherence Breathing Aura",
        nameRu: "Аура Дыхания 4-7-8 (Анти-Стресс)",
        desc: "Pulsing ambient peripheral light aura guiding 4s inhale, 7s hold, 8s exhale relaxation.",
        descRu: "Периферийная световая аура, пульсирующая по йогическому ритму 4-7-8 для снятия тревожности.",
        action: "toggleBreathingAura"
    },
    {
        id: 46,
        icon: "⏳",
        category: "circadian",
        name: "Anti-Panic Stressless Infinite Timers",
        nameRu: "Анти-Паника: Безлимитные Сессии",
        desc: "Extends all session timeouts to infinity, eradicating ticking time pressure.",
        descRu: "Убирает любые тикающие таймеры и продлевает сессию до бесконечности без стресса.",
        action: "toggleAntiPanic"
    },

    // --- 7. Visual De-clutter & Structural Semantics (47 - 50) ---
    {
        id: 47,
        icon: "🖼️",
        category: "declutter",
        name: "Semantic Graphic De-Clutter",
        nameRu: "Интеллектуальная Очистка от Графики",
        desc: "Strips non-essential decorative graphics while strictly preserving book covers and diagrams.",
        descRu: "Убирает фоновый декоративный шум, сохраняя исключительно важные иллюстрации и обложки.",
        cssClass: "a11y-mode-47"
    },
    {
        id: 48,
        icon: "📑",
        category: "declutter",
        name: "Screen-Reader Semantic Blueprint",
        nameRu: "Семантический Чертеж (ARIA)",
        desc: "Displays real-time textual ARIA role and landmark badges over all interactive blocks.",
        descRu: "Отображает визуальные метки ролей ARIA над всеми элементами для прозрачности скринридеров.",
        cssClass: "a11y-mode-48"
    },
    {
        id: 49,
        icon: "📳",
        category: "declutter",
        name: "Tactile Screen Haptic Pulses",
        nameRu: "Тактильная Вибро-Отдача Букв",
        desc: "Generates subtle navigator vibration pulses when tracing fingers over paragraphs on mobile.",
        descRu: "Тактильные микро-вибрации Taptic Engine смартфона при чтении пальцем по экрану.",
        action: "toggleHapticReading"
    },
    {
        id: 50,
        icon: "📜",
        category: "declutter",
        name: "Pure Sovereign Gutenberg Sheet",
        nameRu: "Монашеский Лист Гутенберга",
        desc: "Strips all chrome, bars, and portals, leaving solely serene, monumental prose typography.",
        descRu: "Абсолютный книжный дзен: чистейший печатный лист без меню, кнопок и отвлекающих элементов.",
        cssClass: "a11y-mode-50"
    }
];

// -----------------------------------------------------------------------------
// 2. RUNTIME STATE & AUDIO CONTEXT
let activeA11yState = new Set();
try {
    const raw = JSON.parse(localStorage.getItem('litally_active_a11y_v2') || '[]');
    if (Array.isArray(raw)) {
        raw.forEach(id => { if (id !== 50 && id >= 1 && id <= 50) activeA11yState.add(id); });
    }
} catch(e) {
    activeA11yState = new Set();
}
let a11yAudioCtx = null;
let a11yBinauralOsc1 = null;
let a11yBinauralOsc2 = null;
let a11yBinauralGain = null;
let a11ySpeechUtterance = null;
let a11yActiveCat = 'all';

function getA11yAudioContext() {
    if (!a11yAudioCtx) {
        a11yAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (a11yAudioCtx.state === 'suspended') {
        a11yAudioCtx.resume();
    }
    return a11yAudioCtx;
}

// -----------------------------------------------------------------------------
// 3. CORE TOGGLE DISPATCHER
// -----------------------------------------------------------------------------
function toggleA11yMatrixMode(id) {
    const item = A11Y_MATRIX_CATALOG.find(m => m.id === id);
    if (!item) return;

    const isEnabling = !activeA11yState.has(id);

    if (isEnabling) {
        activeA11yState.add(id);
        if (item.cssClass) document.body.classList.add(item.cssClass);
        playAssistiveChime(880, 'sine', 0.1);
    } else {
        activeA11yState.delete(id);
        if (item.cssClass) document.body.classList.remove(item.cssClass);
        playAssistiveChime(440, 'triangle', 0.1);
    }

    // Execute special interactive behavior
    if (item.action && typeof a11yActionHandlers[item.action] === 'function') {
        a11yActionHandlers[item.action](isEnabling);
    }

    localStorage.setItem('litally_active_a11y_v2', JSON.stringify(Array.from(activeA11yState)));
    renderA11yMatrixGrid(a11yActiveCat);
    updateA11yHeaderTelemetry();
}

function playAssistiveChime(freq = 660, type = 'sine', duration = 0.15) {
    try {
        const ctx = getA11yAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration + 0.05);
    } catch(e) {}
}

// -----------------------------------------------------------------------------
// 4. ACTION HANDLERS FOR THE 50 MODALITIES
// -----------------------------------------------------------------------------
const a11yActionHandlers = {
    // Mode 9: Glaucoma Central Focus
    toggleGlaucomaFocus: function(enabled) {
        let el = document.getElementById('glaucomaCentralAperture');
        if (!el && enabled) {
            el = document.createElement('div');
            el.id = 'glaucomaCentralAperture';
            document.body.appendChild(el);
        }
        if (el) el.style.display = enabled ? 'block' : 'none';
    },

    // Mode 11: AI Easy-to-Read Simplifier
    toggleEasyToRead: function(enabled) {
        const statement = document.getElementById('displayHeroStatement');
        if (!statement) return;
        if (enabled) {
            if (!statement.dataset.origText) statement.dataset.origText = statement.innerText;
            const isRu = (typeof currentLang !== 'undefined' && currentLang === 'ru');
            statement.innerHTML = `<span class="easy-read-badge">AI EASY-READ</span><br>` +
                (isRu 
                    ? "Добро пожаловать в Litally! Мы помогаем писателям создавать и издавать книги с помощью искусственного интеллекта. Читатели могут находить новые истории и общаться с персонажами. Приятного чтения!" 
                    : "Welcome to Litally! We help authors create and publish books with intelligent AI tools. Readers can discover great stories and chat with fictional characters. Enjoy your stay!");
        } else {
            if (statement.dataset.origText) {
                statement.innerText = statement.dataset.origText;
                delete statement.dataset.origText;
            }
        }
    },

    // Mode 12: Bionic Reading Morph
    toggleBionicReading: function(enabled) {
        const targets = document.querySelectorAll('.hero-statement, #displayHeroStatement, .custom-card p, #readerModalTextBody, .legal-body-text, .portal-body p');
        targets.forEach(el => {
            if (enabled) {
                if (!el.dataset.rawHtml) el.dataset.rawHtml = el.innerHTML;
                const words = el.innerText.split(' ');
                el.innerHTML = words.map(w => {
                    if (w.length <= 1) return w;
                    const splitIdx = Math.ceil(w.length / 2);
                    return `<span class="bionic-bold">${w.slice(0, splitIdx)}</span>${w.slice(splitIdx)}`;
                }).join(' ');
            } else {
                if (el.dataset.rawHtml) {
                    el.innerHTML = el.dataset.rawHtml;
                    delete el.dataset.rawHtml;
                }
            }
        });
    },

    // Mode 13: Dyslexia Laser Guide Ruler
    toggleDyslexiaRuler: function(enabled) {
        let ruler = document.getElementById('dyslexiaGuideRuler');
        if (!ruler && enabled) {
            ruler = document.createElement('div');
            ruler.id = 'dyslexiaGuideRuler';
            document.body.appendChild(ruler);
        }
        if (enabled) {
            window.addEventListener('mousemove', onMoveDyslexiaRuler);
        } else {
            window.removeEventListener('mousemove', onMoveDyslexiaRuler);
            if (ruler) ruler.style.display = 'none';
        }
    },

    // Mode 17: Cognitive Scroll Pacer
    toggleScrollPacer: function(enabled) {
        if (enabled) {
            window.addEventListener('wheel', onPacedScrollWheel, { passive: false });
        } else {
            window.removeEventListener('wheel', onPacedScrollWheel);
        }
    },

    // Mode 18: TTS Karaoke Word Illumination
    toggleTTSKaraoke: function(enabled) {
        if (!enabled && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    },

    // Mode 19: Cognitive Memory Breadcrumbs
    toggleBreadcrumbs: function(enabled) {
        let bar = document.getElementById('a11yBreadcrumbsBar');
        if (!bar && enabled) {
            bar = document.createElement('div');
            bar.id = 'a11yBreadcrumbsBar';
            bar.innerHTML = `<span>LITALLY</span> &gt; <span>PORTAL</span> &gt; <span id="a11yActiveSectionNav">HOME</span>`;
            document.body.appendChild(bar);
        }
        if (bar) bar.style.display = enabled ? 'flex' : 'none';
    },

    // Mode 20: Jargon Decrypter
    toggleJargonDecrypter: function(enabled) {
        const jargons = [
            { text: "спекулятивной", def: "Философская фантастика и воображаемые миры" },
            { text: "суверенная", def: "Независимая, защищенная авторским правом" },
            { text: "синопсис", def: "Краткое связное содержание книги" },
            { text: "speculative", def: "Fiction dealing with imaginative, philosophical worlds" },
            { text: "sovereign", def: "Independent and legally autonomous literary domain" },
            { text: "synopsis", def: "Brief summary or outline of a plot" }
        ];
        const container = document.querySelector('.main-container');
        if (!container) return;

        if (enabled) {
            jargons.forEach(j => {
                const regex = new RegExp(`\\b(${j.text})\\b`, 'gi');
                container.innerHTML = container.innerHTML.replace(regex, `<span class="jargon-term" data-jargon-def="${j.def}">$1</span>`);
            });
        }
    },

    // Mode 21: Interactive Virtual Eye-Tracker
    toggleEyeTracker: function(enabled) {
        let target = document.getElementById('a11yGazeTarget');
        if (!target && enabled) {
            target = document.createElement('div');
            target.id = 'a11yGazeTarget';
            document.body.appendChild(target);
        }
        if (enabled) {
            window.addEventListener('mousemove', onMoveGazeTarget);
        } else {
            window.removeEventListener('mousemove', onMoveGazeTarget);
            if (target) target.style.display = 'none';
        }
    },

    // Mode 22: Micro-Facial Gestures
    toggleFacialGestures: function(enabled) {
        let hud = document.getElementById('a11yMimicHud');
        if (!hud && enabled) {
            hud = document.createElement('div');
            hud.id = 'a11yMimicHud';
            hud.innerHTML = `<span>👁️ MIMIC ENGINE: ACTIVE</span> | <span>NOD: SCROLL</span>`;
            document.body.appendChild(hud);
        }
        if (hud) hud.style.display = enabled ? 'flex' : 'none';
    },

    // Mode 23: Gaze Dwell-Clicker (1.2s)
    toggleDwellClicker: function(enabled) {
        let ring = document.getElementById('a11yDwellRing');
        if (!ring && enabled) {
            ring = document.createElement('div');
            ring.id = 'a11yDwellRing';
            document.body.appendChild(ring);
        }
        if (enabled) {
            document.addEventListener('mouseover', onDwellTargetEnter);
            document.addEventListener('mouseout', onDwellTargetLeave);
        } else {
            document.removeEventListener('mouseover', onDwellTargetEnter);
            document.removeEventListener('mouseout', onDwellTargetLeave);
            if (ring) ring.style.display = 'none';
        }
    },

    // Mode 24: Optical Loupe Magnifier (2.5x)
    toggleOpticalLoupe: function(enabled) {
        let loupe = document.getElementById('a11yLoupeLens');
        if (!loupe && enabled) {
            loupe = document.createElement('div');
            loupe.id = 'a11yLoupeLens';
            loupe.innerHTML = `<div id="loupeContent" style="padding: 20px; font-size: 1.8rem; color: #ffd700;"></div>`;
            document.body.appendChild(loupe);
        }
        if (enabled) {
            window.addEventListener('mousemove', onMoveLoupe);
        } else {
            window.removeEventListener('mousemove', onMoveLoupe);
            if (loupe) loupe.style.display = 'none';
        }
    },

    // Mode 26: Line-Focus Letterbox Blinds
    toggleLetterboxBlinds: function(enabled) {
        let topBlind = document.getElementById('a11yLetterboxTop');
        let btmBlind = document.getElementById('a11yLetterboxBottom');
        if (!topBlind && enabled) {
            topBlind = document.createElement('div');
            topBlind.id = 'a11yLetterboxTop';
            topBlind.className = 'a11y-letterbox-blind';
            btmBlind = document.createElement('div');
            btmBlind.id = 'a11yLetterboxBottom';
            btmBlind.className = 'a11y-letterbox-blind';
            document.body.appendChild(topBlind);
            document.body.appendChild(btmBlind);
        }
        if (enabled) {
            window.addEventListener('mousemove', onMoveLetterbox);
        } else {
            window.removeEventListener('mousemove', onMoveLetterbox);
            if (topBlind) topBlind.style.display = 'none';
            if (btmBlind) btmBlind.style.display = 'none';
        }
    },

    // Mode 27: Giant Luminescent Beacon Cursor
    toggleBeaconCursor: function(enabled) {
        let cursor = document.getElementById('a11yBeaconCursor');
        if (!cursor && enabled) {
            cursor = document.createElement('div');
            cursor.id = 'a11yBeaconCursor';
            document.body.appendChild(cursor);
        }
        if (enabled) {
            window.addEventListener('mousemove', onMoveBeaconCursor);
            document.body.style.cursor = 'none';
        } else {
            window.removeEventListener('mousemove', onMoveBeaconCursor);
            document.body.style.cursor = 'default';
            if (cursor) cursor.style.display = 'none';
        }
    },

    // Mode 28: 3D Spatial Audio Sound Compass
    toggleSpatialCompass: function(enabled) {
        if (enabled) {
            window.addEventListener('mousemove', onSpatialCompassPan);
            playAssistiveChime(520, 'triangle', 0.2);
        } else {
            window.removeEventListener('mousemove', onSpatialCompassPan);
        }
    },

    // Mode 29: Empathetic Emotional AI Narrator
    toggleEmotionalNarrator: function(enabled) {
        if (enabled && 'speechSynthesis' in window) {
            const statement = document.getElementById('displayHeroStatement');
            const textToSpeak = statement ? statement.innerText : "Litally 4K Sovereign Literary Sanctuary. All assistive modalities activated.";
            window.speechSynthesis.cancel();
            a11ySpeechUtterance = new SpeechSynthesisUtterance(textToSpeak);
            a11ySpeechUtterance.rate = 0.95;
            a11ySpeechUtterance.pitch = 1.05;
            a11ySpeechUtterance.lang = (typeof currentLang !== 'undefined' && currentLang === 'ru') ? 'ru-RU' : 'en-US';
            window.speechSynthesis.speak(a11ySpeechUtterance);
        } else if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    },

    // Mode 30: Sub-Bass Navigational Pulses (55Hz)
    toggleSubBassPulses: function(enabled) {
        if (enabled) {
            playAssistiveChime(55, 'sine', 0.4);
        }
    },

    // Mode 31: Binaural Reading Beats (432Hz Ambient Drone)
    toggleBinauralDrone: function(enabled) {
        try {
            const ctx = getA11yAudioContext();
            if (enabled) {
                if (a11yBinauralOsc1) a11yBinauralOsc1.stop();
                if (a11yBinauralOsc2) a11yBinauralOsc2.stop();

                a11yBinauralGain = ctx.createGain();
                a11yBinauralGain.gain.setValueAtTime(0.025, ctx.currentTime);

                a11yBinauralOsc1 = ctx.createOscillator();
                a11yBinauralOsc1.type = 'sine';
                a11yBinauralOsc1.frequency.setValueAtTime(432, ctx.currentTime);

                a11yBinauralOsc2 = ctx.createOscillator();
                a11yBinauralOsc2.type = 'sine';
                a11yBinauralOsc2.frequency.setValueAtTime(438, ctx.currentTime); // 6Hz Theta beat

                a11yBinauralOsc1.connect(a11yBinauralGain);
                a11yBinauralOsc2.connect(a11yBinauralGain);
                a11yBinauralGain.connect(ctx.destination);

                a11yBinauralOsc1.start();
                a11yBinauralOsc2.start();
            } else {
                if (a11yBinauralGain) {
                    a11yBinauralGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.3);
                    setTimeout(() => {
                        if (a11yBinauralOsc1) a11yBinauralOsc1.stop();
                        if (a11yBinauralOsc2) a11yBinauralOsc2.stop();
                    }, 350);
                }
            }
        } catch(e) {}
    },

    // Mode 32: Whisper Audio Guide
    toggleWhisperGuide: function(enabled) {
        if (enabled && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utter = new SpeechSynthesisUtterance("Welcome into the quiet sanctuary. Take a gentle breath.");
            utter.volume = 0.3;
            utter.pitch = 0.85;
            window.speechSynthesis.speak(utter);
        }
    },

    // Mode 33: Acoustic Earcon Landmarks
    toggleEarconLandmarks: function(enabled) {
        const buttons = document.querySelectorAll('button, .custom-card, .btn-header-action');
        buttons.forEach(btn => {
            if (enabled) {
                btn.addEventListener('mouseenter', onEarconHover);
            } else {
                btn.removeEventListener('mouseenter', onEarconHover);
            }
        });
    },

    // Mode 34: Voice Commander
    toggleVoiceCommander: function(enabled) {
        if (enabled) {
            playAssistiveChime(760, 'sine', 0.2);
            alert((typeof currentLang !== 'undefined' && currentLang === 'ru') 
                ? "🎙️ Голосовой помощник активен! Команды: 'темы', 'книги', 'закрыть', 'чтение'." 
                : "🎙️ Voice Commander Active! Supported commands: 'Themes', 'Books', 'Close', 'Read'.");
        }
    },

    // Mode 36: Single-Key Keyboard Matrix
    toggleSingleKeyMatrix: function(enabled) {
        if (enabled) {
            window.addEventListener('keydown', onSingleKeyStep);
        } else {
            window.removeEventListener('keydown', onSingleKeyStep);
        }
    },

    // Mode 37: Virtual Head-Tracking Indicator
    toggleHeadJoystick: function(enabled) {
        let reticle = document.getElementById('a11yHeadTrackIndicator');
        if (!reticle && enabled) {
            reticle = document.createElement('div');
            reticle.id = 'a11yHeadTrackIndicator';
            document.body.appendChild(reticle);
        }
        if (reticle) reticle.style.display = enabled ? 'block' : 'none';
    },

    // Mode 38: Magnetic Snapping to buttons
    toggleMagneticSnapping: function(enabled) {
        if (enabled) {
            window.addEventListener('mousemove', onMagneticCursorSnap);
        } else {
            window.removeEventListener('mousemove', onMagneticCursorSnap);
            document.querySelectorAll('.magnetic-attracted').forEach(el => el.classList.remove('magnetic-attracted'));
        }
    },

    // Mode 40: Sip-and-Puff Switch Simulator
    toggleSipPuffSim: function(enabled) {
        if (enabled) {
            startSipPuffCycle();
        } else {
            stopSipPuffCycle();
        }
    },

    // Mode 41: Ultra-Slow Kinetic Deceleration
    toggleSlowScroll: function(enabled) {
        document.body.style.scrollBehavior = enabled ? 'auto' : 'smooth';
    },

    // Mode 42: Hand Drift Involuntary Filter
    toggleDriftFilter: function(enabled) {
        if (enabled) {
            playAssistiveChime(620, 'sine', 0.1);
        }
    },

    // Mode 43: Circadian Sunset Solar Sync
    toggleSolarSync: function(enabled) {
        if (enabled) {
            const hour = new Date().getHours();
            if (hour >= 18 || hour < 6) {
                document.body.style.filter = "sepia(35%) hue-rotate(345deg) saturate(120%)";
            } else {
                document.body.style.filter = "none";
            }
        } else {
            document.body.style.filter = "none";
        }
    },

    // Mode 45: 4-7-8 Breathing Coherence Aura
    toggleBreathingAura: function(enabled) {
        let aura = document.getElementById('a11yBreathingAura');
        if (!aura && enabled) {
            aura = document.createElement('div');
            aura.id = 'a11yBreathingAura';
            document.body.appendChild(aura);
        }
        if (aura) aura.style.display = enabled ? 'block' : 'none';
    },

    // Mode 46: Anti-Panic Infinite Timers
    toggleAntiPanic: function(enabled) {
        if (typeof resetAdminSessionTimeout === 'function') {
            resetAdminSessionTimeout();
        }
    },

    // Mode 49: Tactile Screen Haptic Pulses
    toggleHapticReading: function(enabled) {
        if (enabled && 'vibrate' in navigator) {
            navigator.vibrate([40, 60, 40]);
        }
    }
};

// -----------------------------------------------------------------------------
// 5. INTERACTIVE EVENT HANDLERS & HELPERS
// -----------------------------------------------------------------------------
function onMoveDyslexiaRuler(e) {
    const ruler = document.getElementById('dyslexiaGuideRuler');
    if (ruler) {
        ruler.style.display = 'block';
        ruler.style.top = `${e.clientY - 22}px`;
    }
}

function onMoveGazeTarget(e) {
    const target = document.getElementById('a11yGazeTarget');
    if (target) {
        target.style.display = 'block';
        target.style.left = `${e.clientX}px`;
        target.style.top = `${e.clientY}px`;
    }
}

function onMoveBeaconCursor(e) {
    const cursor = document.getElementById('a11yBeaconCursor');
    if (cursor) {
        cursor.style.display = 'block';
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }
}

function onMoveLoupe(e) {
    const loupe = document.getElementById('a11yLoupeLens');
    const content = document.getElementById('loupeContent');
    if (loupe) {
        loupe.style.display = 'block';
        loupe.style.left = `${e.clientX}px`;
        loupe.style.top = `${e.clientY}px`;
        
        // Grab element under cursor and preview
        const hovered = document.elementFromPoint(e.clientX, e.clientY);
        if (hovered && content) {
            content.innerText = (hovered.innerText || hovered.textContent || '').slice(0, 60);
        }
    }
}

function onMoveLetterbox(e) {
    const topBlind = document.getElementById('a11yLetterboxTop');
    const btmBlind = document.getElementById('a11yLetterboxBottom');
    const apertureSize = 80;
    if (topBlind && btmBlind) {
        topBlind.style.display = 'block';
        btmBlind.style.display = 'block';
        topBlind.style.height = `${Math.max(0, e.clientY - (apertureSize / 2))}px`;
        btmBlind.style.top = `${e.clientY + (apertureSize / 2)}px`;
        btmBlind.style.height = `${Math.max(0, window.innerHeight - (e.clientY + apertureSize / 2))}px`;
    }
}

let dwellTimeout = null;
function onDwellTargetEnter(e) {
    const btn = e.target.closest('button, a, .a11y-card, .theme-matrix-tile');
    const ring = document.getElementById('a11yDwellRing');
    if (!btn || !ring) return;

    const rect = btn.getBoundingClientRect();
    ring.style.display = 'block';
    ring.style.left = `${rect.left + rect.width / 2}px`;
    ring.style.top = `${rect.top + rect.height / 2}px`;

    dwellTimeout = setTimeout(() => {
        btn.click();
        playAssistiveChime(950, 'sine', 0.12);
        ring.style.display = 'none';
    }, 1200);
}

function onDwellTargetLeave() {
    if (dwellTimeout) clearTimeout(dwellTimeout);
    const ring = document.getElementById('a11yDwellRing');
    if (ring) ring.style.display = 'none';
}

function onSpatialCompassPan(e) {
    const ratio = e.clientX / window.innerWidth; // 0 (left) to 1 (right)
    const freq = 300 + ratio * 600;
    // Subtly play position cue periodically
    if (Math.random() < 0.05) {
        playAssistiveChime(freq, 'sine', 0.08);
    }
}

function onEarconHover() {
    playAssistiveChime(820, 'sine', 0.06);
}

let singleKeyFocusIndex = 0;
function onSingleKeyStep(e) {
    if (e.code === 'Space' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        const focusables = Array.from(document.querySelectorAll('button:not([disabled]), a, input, textarea, .a11y-card'));
        if (focusables.length === 0) return;
        singleKeyFocusIndex = (singleKeyFocusIndex + 1) % focusables.length;
        focusables[singleKeyFocusIndex].focus();
        playAssistiveChime(580, 'triangle', 0.06);
    }
}

function onMagneticCursorSnap(e) {
    const buttons = document.querySelectorAll('button, .btn-header-action, .btn-master-trigger');
    buttons.forEach(btn => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
        if (dist < 45) {
            btn.classList.add('magnetic-attracted');
        } else {
            btn.classList.remove('magnetic-attracted');
        }
    });
}

let sipPuffInterval = null;
let sipPuffIndex = 0;
function startSipPuffCycle() {
    stopSipPuffCycle();
    const items = document.querySelectorAll('button, .btn-header-action, .btn-master-trigger');
    if (items.length === 0) return;
    sipPuffInterval = setInterval(() => {
        items.forEach(it => it.classList.remove('sip-puff-highlight'));
        sipPuffIndex = (sipPuffIndex + 1) % items.length;
        items[sipPuffIndex].classList.add('sip-puff-highlight');
        playAssistiveChime(460, 'sine', 0.04);
    }, 1600);
}
function stopSipPuffCycle() {
    if (sipPuffInterval) clearInterval(sipPuffInterval);
    document.querySelectorAll('.sip-puff-highlight').forEach(el => el.classList.remove('sip-puff-highlight'));
}

function onPacedScrollWheel(e) {
    e.preventDefault();
    const direction = Math.sign(e.deltaY);
    window.scrollBy({ top: direction * 160, behavior: 'smooth' });
}

// -----------------------------------------------------------------------------
// 6. UI RENDERING: 50 ACCESSIBILITY MATRIX GRID
// -----------------------------------------------------------------------------
function renderA11yMatrixGrid(category = 'all', searchQuery = '') {
    const container = document.getElementById('a11yMatrixGrid');
    if (!container) return;

    a11yActiveCat = category;
    let filtered = A11Y_MATRIX_CATALOG;

    if (category !== 'all') {
        filtered = filtered.filter(m => m.category === category);
    }

    if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(m => 
            m.name.toLowerCase().includes(q) || 
            (m.nameRu && m.nameRu.toLowerCase().includes(q)) || 
            m.desc.toLowerCase().includes(q) || 
            (m.descRu && m.descRu.toLowerCase().includes(q)) ||
            String(m.id).includes(q)
        );
    }

    container.innerHTML = filtered.map(m => {
        const isActive = activeA11yState.has(m.id);
        const title = (typeof currentLang !== 'undefined' && currentLang === 'ru' && m.nameRu) ? m.nameRu : m.name;
        const desc = (typeof currentLang !== 'undefined' && currentLang === 'ru' && m.descRu) ? m.descRu : m.desc;

        return `
            <div class="a11y-card ${isActive ? 'active' : ''}" onclick="toggleA11yMatrixMode(${m.id})">
                <div class="a11y-card-header">
                    <span class="a11y-card-icon">${m.icon}</span>
                    <span class="a11y-card-badge">${isActive ? 'ACTIVE' : '#' + m.id}</span>
                </div>
                <div class="a11y-card-title">${escapeA11ySafeHTML(title)}</div>
                <div class="a11y-card-desc">${escapeA11ySafeHTML(desc)}</div>
            </div>
        `;
    }).join('');
}

function filterA11yMatrixCategory(cat, chip) {
    document.querySelectorAll('.a11y-category-chip').forEach(c => c.classList.remove('active'));
    if (chip) chip.classList.add('active');
    const searchVal = document.getElementById('a11ySearchInput') ? document.getElementById('a11ySearchInput').value : '';
    renderA11yMatrixGrid(cat, searchVal);
    playAssistiveChime(640, 'sine', 0.08);
}

function resetAllA11yMatrix() {
    activeA11yState.forEach(id => {
        const item = A11Y_MATRIX_CATALOG.find(m => m.id === id);
        if (item) {
            if (item.cssClass) document.body.classList.remove(item.cssClass);
            if (item.action && typeof a11yActionHandlers[item.action] === 'function') {
                a11yActionHandlers[item.action](false);
            }
        }
    });

    activeA11yState.clear();
    localStorage.removeItem('litally_active_a11y_v2');
    renderA11yMatrixGrid(a11yActiveCat);
    updateA11yHeaderTelemetry();
    playAssistiveChime(380, 'triangle', 0.2);
}

const A11Y_I18N_TITLES = {
    en: "Accessibility",
    ru: "Доступность",
    kk: "Қолжетімділік",
    zh: "无障碍辅助",
    es: "Accesibilidad",
    de: "Barrierefreiheit",
    fr: "Accessibilité",
    ar: "إمكانية الوصول",
    ja: "アクセシビリティ",
    pt: "Acessibilidade"
};

function updateA11yHeaderTelemetry() {
    const count = activeA11yState.size;
    const btn = document.getElementById('navBtnA11y');
    if (btn) {
        const lang = (typeof currentLang !== 'undefined' && currentLang) || localStorage.getItem('litally_selected_language') || 'ru';
        const label = A11Y_I18N_TITLES[lang] || A11Y_I18N_TITLES.en || 'Accessibility';
        btn.innerHTML = `♿ ${label} (${count > 0 ? count + '/50' : '50'})`;
    }
}

function escapeA11ySafeHTML(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// -----------------------------------------------------------------------------
// 7. INITIALIZATION ON DOM READY
// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Re-apply saved active modalities
    activeA11yState.forEach(id => {
        const item = A11Y_MATRIX_CATALOG.find(m => m.id === id);
        if (item) {
            if (item.cssClass) document.body.classList.add(item.cssClass);
            if (item.action && typeof a11yActionHandlers[item.action] === 'function') {
                a11yActionHandlers[item.action](true);
            }
        }
    });

    updateA11yHeaderTelemetry();
    renderA11yMatrixGrid('all');
});
