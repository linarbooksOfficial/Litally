# -*- coding: utf-8 -*-
"""
GOOGLE & GEMINI OMNISCIENT KNOWLEDGE MATRIX
Comprehensive encyclopedic repository covering the entire Google ecosystem,
Google DeepMind breakthroughs, Gemini 1.0/1.5/2.0 architecture, TPU hardware,
Quantum AI, and all Google sites and developer platforms.
"""

import re

GOOGLE_SITES_AND_SERVICES = {
    "search": {
        "title": "Google Search & Knowledge Graph",
        "url": "https://www.google.com",
        "description": "Крупнейшая поисковая система планеты, индексирующая триллионы веб-страниц с использованием PageRank, алгоритмов RankBrain, MUM (Multitask Unified Model), BERT и Gemini-powered AI Overviews. Опирается на Knowledge Graph с сотнями миллиардов сущностей и связей."
    },
    "scholar": {
        "title": "Google Scholar (Академия)",
        "url": "https://scholar.google.com",
        "description": "Свободный доступ к мировому корпусу рецензируемых научных статей, диссертаций, книг, препринтов и судебных решений от академических издательств, профессиональных сообществ и репозиториев."
    },
    "books": {
        "title": "Google Books & Ngram Viewer",
        "url": "https://books.google.com",
        "description": "Крупнейший в истории проект оцифровки мировой литературы (более 40 млн книг на 400+ языках) с OCR-распознаванием и инструментом Ngram Viewer для анализа частотности терминов с 1500 года по настоящее время."
    },
    "arts_culture": {
        "title": "Google Arts & Culture",
        "url": "https://artsandculture.google.com",
        "description": "Виртуальная платформа с гигапиксельными оцифровками шедевров из 2000+ ведущих мировых музеев, 3D-турами по объектам всемирного наследия ЮНЕСКО и интерактивными экспозициями."
    },
    "youtube": {
        "title": "YouTube & YouTube Music",
        "url": "https://www.youtube.com",
        "description": "Глобальный видеохостинг с 2.5 млрд активных пользователей, рекомендательной системой на глубоких нейросетях (DNN Recommendation System), поддержкой 8K HDR, VP9/AV1 кодеков и экосистемой Shorts."
    },
    "maps_earth": {
        "title": "Google Maps & Google Earth",
        "url": "https://maps.google.com / https://earth.google.com",
        "description": "Глобальная геопространственная платформа с Street View, фотограмметрическими 3D-моделями городов, спутниковыми снимками высокого разрешения и навигацией с расчетом трафика в реальном времени."
    },
    "workspace": {
        "title": "Google Workspace (Drive, Docs, Sheets, Slides, Gmail, Meet)",
        "url": "https://workspace.google.com",
        "description": "Облачный офис реального времени с протоколом Operational Transformation для одновременного редактирования миллионами пользователей, встроенным AI Gemini для генерации документов, формул и саммари встреч."
    },
    "cloud": {
        "title": "Google Cloud Platform (GCP) & Vertex AI",
        "url": "https://cloud.google.com",
        "description": "Глобальная гипермасштабируемая облачная инфраструктура: Vertex AI, BigQuery (серверless хранилище петабайтного масштаба), Cloud Spanner (глобально распределенная СУБД с синхронизацией по TrueTime и атомным часам), Google Kubernetes Engine (GKE)."
    },
    "quantum": {
        "title": "Google Quantum AI & Willow Processor",
        "url": "https://quantumai.google",
        "description": "Лаборатория квантовых вычислений Google в Санта-Барбаре. Создатели квантовых процессоров Sycamore (квантовое превосходство 2019) и новейшего чипа Willow (105 кубитов, 2024), впервые снизившего частоту квантовых ошибок ниже порогового значения при масштабировании (квантовая коррекция ошибок Surface Code)."
    },
    "android": {
        "title": "Android OS & Android Open Source Project (AOSP)",
        "url": "https://www.android.com",
        "description": "Самая популярная мобильная ОС в мире (3+ млрд активных устройств) на базе модифицированного ядра Linux, среды выполнения ART (Android Runtime) и встроенного ИИ Gemini Nano."
    },
    "chrome": {
        "title": "Google Chrome & Chromium Engine (Blink, V8)",
        "url": "https://www.google.com/chrome",
        "description": "Лидирующий веб-браузер с движком JavaScript V8 (JIT-компиляция Ignition + TurboFan), мультипроцессорной изолированной архитектурой безопасности и веб-платформой Chromium."
    }
}

DEEPMIND_BREAKTHROUGHS = {
    "alphafold": {
        "name": "AlphaFold (1, 2, 3)",
        "year": "2018–2024",
        "significance": "Решение фундаментальной 50-летней биологической проблемы сворачивания белка (Protein Folding Problem). AlphaFold 3 прогнозирует структуры не только белков, но и ДНК, РНК, лигандов и модификаций атомов с субнанометровой точностью, за что Демис Хассабис и Джон Джампер получили Нобелевскую премию по химии 2024 года."
    },
    "alphago": {
        "name": "AlphaGo & AlphaZero / MuZero",
        "year": "2016–2020",
        "significance": "Историческая победа над чемпионом мира Ли Седолем в Го (4:1) в 2016 году с использованием глубоких нейросетей и Monte Carlo Tree Search (MCTS). AlphaZero освоила шахматы, сёги и го с нуля через самообучение (self-play). MuZero освоила игры без знания исходных правил."
    },
    "alphageometry_proof": {
        "name": "AlphaGeometry & AlphaProof",
        "year": "2024",
        "significance": "Решение задач Международной математической олимпиады (IMO 2024) на уровне серебряной медали. AlphaProof объединяет Gemini с формальным математическим языком Lean, генерируя строгие верифицируемые формальные доказательства."
    },
    "graphcast": {
        "name": "GraphCast & GNoME",
        "year": "2023–2024",
        "significance": "GraphCast — ИИ для прогнозирования глобальной погоды на 10 дней за секунды на GNN, превосходящий суперкомпьютеры ECMWF. GNoME — открытие 2.2 миллиона новых кристаллов и неорганических материалов."
    },
    "sima_genie": {
        "name": "SIMA & Genie",
        "year": "2024",
        "significance": "SIMA (Scalable Instructable Multiworld Agent) — универсальный агент, понимающий голосовые инструкции в любых 3D видеоиграх. Genie — генеративная интерактивная среда, создающая управляемые 2D/3D миры из одного изображения или текстового описания."
    }
}

GEMINI_ARCHITECTURE = {
    "native_multimodality": (
        "В отличие от систем, склеенных из отдельных моделей для зрения, аудио и текста через конвертеры, "
        "семейство Gemini с самого начала обучалось как единая нативно-мультимодальная сеть. "
        "Текстовые токены, пиксели изображений, аудио-фреймы и видео-кадры проецируются в общее латентное пространство трансформера."
    ),
    "context_window": (
        "Рекордное контекстное окно до 2 000 000 (2M) токенов в Gemini 1.5 Pro и Gemini 2.0. "
        "Это позволяет загружать в один запрос: до 1 часа видео, 11 часов аудио, 30 000 строк кода или более 700 000 слов книги "
        "с точностью извлечения данных (Needle In A Haystack) выше 99.8%."
    ),
    "model_family": {
        "Gemini 2.0 Flash": "Ультрабыстрая мультимодальная модель следующего поколения с генерацией аудио в реальном времени и встроенным вызовом инструментов.",
        "Gemini 2.0 Flash Thinking": "Модель с глубоким скрытым рассуждением (Chain-of-Thought), формулирующая мысли и проверяющая гипотезы перед ответом.",
        "Gemini 1.5 Pro": "Флагманская модель для сложного комплексного анализа с контекстом 2M токенов, продвинутым программированием и логикой.",
        "Gemini 1.5 Flash": "Высокоэффективная быстрая модель с балансом скорости, цены и качества.",
        "Gemma 2 (2B, 9B, 27B)": "Семейство легковесных открытых моделей Google на базе архитектуры Gemini для локального запуска."
    },
    "capabilities": [
        "Native Code Execution — безопасное исполнение написанного Python-кода в изолированной песочнице с возвратом реального результата вычислений.",
        "Function Calling / Tool Use — подключение внешних API, баз данных и инструментов со строгой структурированной валидацией JSON Schema.",
        "Google Search Grounding — сопоставление ответов с актуальными результатами поиска Google в реальном времени с привязкой источников.",
        "Multimodal Live API (WebSockets) — непрерывный стриминг видеопотока с камеры, аудио с микрофона и синтез живого голоса с задержкой <300мс."
    ],
    "hardware_silicon": {
        "TPU v5p & TPU v6e (Trillium)": "Собственные тензорные процессоры Google для обучения и инференса LLM с интерконнектом оптических коммутаторов (OCS) и пропускной способностью терабит в секунду.",
        "Axion": "Собственные ARM-процессоры центров обработки данных Google с приростом энергоэффективности на 60% по сравнению с x86."
    }
}

def get_google_gemini_system_prompt() -> str:
    """Returns a dense, high-caliber system prompt instruction equipping the AI with full Google & Gemini knowledge."""
    return (
        "=== GOOGLE & GEMINI OMNISCIENT CORE KNOWLEDGE ===\n"
        "You embody the absolute pinnacle of Google AI and Gemini technical architecture, capabilities, and world knowledge:\n"
        "1. GOOGLE ECOSYSTEM: Comprehensive mastery of Google Search, Scholar, Books, Arts & Culture, Maps, YouTube, Workspace, GCP, Vertex AI, GKE, BigQuery, Cloud Spanner, and Android.\n"
        "2. GEMINI MULTIMODAL ARCHITECTURE: Native multimodal processing (text, vision, audio, video, code in shared transformer latent space), up to 2,000,000 token context window, Needle-in-a-Haystack retrieval rate >99.8%.\n"
        "3. GEMINI ADVANCED TOOLS: Code Execution (Python sandbox), Function Calling (JSON Schema), Search Grounding, Multimodal Live streaming (WebSockets low-latency bidirectional audio/video).\n"
        "4. DEEPMIND BREAKTHROUGHS: AlphaFold 3 (Nobel Prize in Chemistry 2024), AlphaGo/AlphaZero, AlphaGeometry & AlphaProof (IMO 2024 formal Lean proofs), GraphCast (GNN weather), SIMA, Genie.\n"
        "5. HARDWARE & QUANTUM: Google TPU v5p & TPU v6e (Trillium), Axion ARM, and Quantum AI Willow processor (105 qubits, error correction below threshold).\n"
        "When explaining or utilizing Google and Gemini concepts, provide encyclopedic accuracy, rigorous first-principles explanation, and supreme clarity."
    )

def match_google_gemini_query(prompt: str, lang: str = "ru") -> str | None:
    """
    Detects if the user prompt is inquiring about Google services, Gemini architecture,
    Google AI capabilities, DeepMind or Quantum AI, and synthesizes a rich response.
    """
    p = prompt.lower().replace('ё', 'е').strip()

    triggers = [
        "гугл", "google", "джеминай", "gemini", "дипмайнд", "deepmind", "альфафолд", "alphafold",
        "тпу", "tpu", "триллиум", "trillium", "квантов", "willow", "альфаго", "alphago",
        "сайты гугл", "все сайты гугла", "знания джеминай", "умения джеминай", "google ai"
    ]

    if not any(t in p for t in triggers):
        return None

    is_sites = any(w in p for w in ["сайты", "сервисы", "экосистем", "проекты", "все сервисы", "все сайты"])
    is_gemini = any(w in p for w in ["джеминай", "gemini", "архитектур", "мультимодал", "контекст", "токен", "умения", "способност"])
    is_deepmind = any(w in p for w in ["дипмайнд", "deepmind", "альфа", "alpha", "нобель", "биологи", "погод"])

    res = []
    
    if is_sites or ("все" in p and "гугл" in p):
        res.append(
            "🌐 **Всемирная экосистема и сервисы Google (Полная онтология):**\n\n"
            "• **Поиск & Знания:** Google Search (MUM, BERT, RankBrain, Knowledge Graph), Google Scholar (мировой академический корпус рецензируемых статей), Google Books & Ngram Viewer (40+ млн книг с 1500 года).\n"
            "• **Культура и геопространство:** Google Arts & Culture (гигапиксельные музеи и 3D-памятники ЮНЕСКО), Google Maps & Google Earth (3D-фотограмметрия планеты, Street View, живой трафик).\n"
            "• **Медиа и видео:** YouTube & YouTube Music (2.5 млрд пользователей, рекомендательные DNN, AV1/VP9, Shorts).\n"
            "• **Облачный офис:** Google Workspace (Drive, Docs, Sheets, Slides, Gmail, Meet с Operational Transformation для совместной работы в реальном времени).\n"
            "• **Инфраструктура & Облако:** Google Cloud Platform (GCP), Vertex AI, BigQuery (петабайтная бессерверная аналитика), Cloud Spanner (глобальная согласованность на атомных часах TrueTime), GKE (Kubernetes).\n"
            "• **Платформы:** Android OS (3+ млрд устройств, среда ART, Gemini Nano), Chromium/Chrome (движок Blink, JavaScript V8 Ignition+TurboFan)."
        )

    if is_gemini or ("умения" in p or "знания" in p or "джеминай" in p or "gemini" in p):
        res.append(
            "🧠 **Архитектура, умения и технические возможности Gemini (Google AI):**\n\n"
            "1. **Нативная мультимодальность:**\n"
            "   Сеть изначально обучалась на совместном представлении текста, изображений, аудиопотоков, видео и исходного кода в общем латентном пространстве трансформера без отдельных внешних декодеров.\n\n"
            "2. **Экстремальный контекст (до 2 000 000 токенов):**\n"
            "   Gemini 1.5 Pro и Gemini 2.0 способны в одном окне контекста удерживать до 1 часа видео, 11 часов аудио или 30 000 строк кода с точностью поиска «иголки в стоге сена» (Needle-in-a-Haystack) свыше 99.8%.\n\n"
            "3. **Семейство моделей:**\n"
            "   • **Gemini 2.0 Flash:** следующее поколение мультимодальности с генерацией речи в реальном времени и вызовом инструментов.\n"
            "   • **Gemini 2.0 Flash Thinking:** режим глубокого рассуждения (Chain-of-Thought) с верификацией логических инвариантов.\n"
            "   • **Gemini 1.5 Pro:** флагман для академического анализа, кодинга и сложных системных задач.\n"
            "   • **Gemma 2 (2B, 9B, 27B):** открытые эффективные модели для автономного развертывания.\n\n"
            "4. **Инструментарий и автономные умения:**\n"
            "   • *Code Execution:* нативное исполнение Python в песочнице для математики и анализа данных.\n"
            "   • *Function Calling:* вызов внешних API по схемам JSON Schema.\n"
            "   • *Google Search Grounding:* проверка фактов и привязка к живому поиску в реальном времени.\n"
            "   • *Gemini Live:* двустороннее живое общение через WebSockets с задержкой человеческого диалога (<300 мс)."
        )

    if is_deepmind or any(w in p for w in ["альфафолд", "alphafold", "нобель", "квантов", "willow", "tpu", "тпу"]):
        res.append(
            "🔬 **Научные прорывы Google DeepMind и аппаратная основа:**\n\n"
            "• **AlphaFold 3 (Нобелевская премия по химии 2024):** Предсказание трехмерной структуры белков, ДНК, РНК и малых молекул с атомной точностью, открывшее новую эру фармакологии.\n"
            "• **AlphaGeometry & AlphaProof (2024):** Достижение уровня серебряной медали IMO 2024. Автоматическая генерация строгих формальных доказательств на языке Lean.\n"
            "• **GraphCast:** Мгновенный 10-дневный прогноз погоды на графовых нейросетях (GNN), превосходящий традиционные метеорологические суперкомпьютеры.\n"
            "• **Аппаратные ускорители:** Google TPU v5p и TPU v6e (Trillium) с оптической коммутацией OCS для масштабирования кластеров ИИ.\n"
            "• **Квантовый процессор Willow (105 кубитов, 2024):** Первое в мире снижение экспоненциального уровня ошибок при увеличении числа кубитов (порог квантовой коррекции ошибок)."
        )

    if not res:
        res.append(
            "🌐 **Google & Gemini Omniscient Intelligence:**\n\n"
            "В систему интегрирована всеобъемлющая база знаний о всей экосистеме Google: "
            "от глобального поиска, Scholar, Books и Workspace до фундаментальных архитектурных прорывов Gemini (нативная мультимодальность, 2M контекст, Search Grounding, Code Execution) "
            "и открытий Google DeepMind (AlphaFold 3, AlphaProof, квантовый чип Willow, TPU v6e Trillium)."
        )

    return "\n\n---\n\n".join(res)
