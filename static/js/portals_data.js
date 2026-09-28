/**
 * =============================================================================
 * LITALLY 4K — PORTALS DATA & MULTILINGUAL ENGINE
 * File: static/js/portals_data.js
 * Description: Multilingual content and 4K Liquid Glass rendering engine
 *              for Plans (Roadmap), About Sanctuary, and FAQ across 10 languages.
 * =============================================================================
 */

const LITALLY_PORTALS_DATA = {
    // -------------------------------------------------------------------------
    // 1. ENGLISH (en)
    // -------------------------------------------------------------------------
    en: {
        plans: [
            {
                quarter: "Q4 2026",
                status: "Active Alpha",
                statusClass: "badge-active",
                icon: "✨",
                title: "Litally 4K Quantum Typography & Sovereign Font Foundry",
                desc: "Cinematic retinal-grade rendering engine with 120Hz ProMotion support, zero subpixel jitter, and proprietary nomadic ligature sets.",
                features: ["Retina OLED 4K Font Rasterizer", "Instant ePub / PDF Sovereign Export", "50 Adaptive Circadian Themes"]
            },
            {
                quarter: "Q1 2027",
                status: "In Development",
                statusClass: "badge-dev",
                icon: "🧠",
                title: "Neural Co-Author Engine & 3D Celestial Book Previews",
                desc: "Interactive conversational book personas powered by on-device and cloud LLMs, allowing readers to converse directly with characters.",
                features: ["Live Multilingual Character Dialogues", "Binaural 3D Audio Book Dramatization", "Plot Arc Co-Creation Assistant"]
            },
            {
                quarter: "Q2 2027",
                status: "Architected",
                statusClass: "badge-planned",
                icon: "🛡️",
                title: "Sovereign Decentralized Rights Registry & Anti-Plagiarism Ledger",
                desc: "Cryptographic SHA-256 continuous fingerprinting permanently securing author manuscripts against unauthorized web scraping and predatory republishing.",
                features: ["Immutable Blockchain Proof-of-Authorship", "Autonomous Anti-Scraping Sentinel", "Direct Peer-to-Peer Royalty Settlement"]
            },
            {
                quarter: "Q3 2027",
                status: "Roadmap",
                statusClass: "badge-planned",
                icon: "🌌",
                title: "Litally VR & Spatial Reading for Apple Vision Pro & Smart TV 8K",
                desc: "Full spatial reading chambers transporting readers directly inside the Great Steppe lore, ancient cities, and futuristic nomadic space citadels.",
                features: ["Apple Vision Pro / Meta Quest Spatial Shaders", "10-Foot Smart TV D-Pad Spatial Navigation", "Biofeedback Ambient Symphony"]
            },
            {
                quarter: "Q4 2027",
                status: "Vision",
                statusClass: "badge-planned",
                icon: "🌐",
                title: "Global Multilingual Sovereign Translation Matrix (100+ Languages)",
                desc: "Preserving cadence, authorial tone, poetic meter, and philosophical nuances across 100+ global languages with neural semantic fidelity.",
                features: ["100+ World Languages Zero-Latency Translation", "Cultural Nuance & Metaphor Harmonizer", "Sovereign Community Localization DAO"]
            }
        ],
        about: {
            heroBadge: "SOVEREIGN MULTIDISCIPLINARY ECOSYSTEM",
            heroTitle: "LITALLY: Multimodal AI, 4K Cinema & Future Innovation",
            heroSubtitle: "A premier multidisciplinary technology holding uniting artificial intelligence, cinematic video generation, creative media, literature, and educational technologies.",
            storyTitle: "Our Multidisciplinary Foundation",
            storyText: "Litally was architected by Linar Serik as a holistic technological ecosystem. We bring together four sovereign pillars: high-performance Multimodal AI Intelligence (Litally AI), next-generation 4K Cinematic Video Creation (Litdeo Studio benchmarking Luma and Higgsfield), visionary Creative Literature & Universe Worldbuilding, and cutting-edge Enterprise Science & Future Technologies.",
            authorTitle: "Architect & Founder: Linar Serik",
            authorRole: "AI Architect, Speculative Author & Holding Founder",
            authorBio: "Synthesizing the vast spirit of the Great Steppe with hard-science neural computing, Linar Serik architects next-generation digital ecosystems where multimodal cognition, high-fidelity generative cinema, and creator sovereignty thrive in harmony.",
            pillars: [
                { icon: "🤖", title: "Litally Multimodal AI", desc: "Next-gen neural intelligence: human-grade slide critique, photo perception, deep code synthesis, and multimodal reasoning." },
                { icon: "🎬", title: "Litdeo 4K Video Cinema", desc: "Multi-minute neural rendering engine benchmarking Luma Dream Machine & Higgsfield for cinematic 4K productions." },
                { icon: "📚", title: "Creative Media & Literature", desc: "Sovereign universe lore, digital publishing, interactive characters, and 100% intellectual property protection." },
                { icon: "⚡", title: "Future Enterprise & Science", desc: "Cognitive corporate agents, spatial computing for Apple Vision Pro, 100 languages, and zero-latency infrastructure." }
            ]
        },
        faq: [
            {
                q: "What is Litally and what makes it a multidisciplinary holding?",
                a: "Litally is a sovereign technology holding developed by Linar Serik. It unites 4 interconnected divisions: Litally Multimodal AI (advanced slide/photo/code intelligence), Litdeo 4K Video Studio (cinematic AI video generation), Creative Media & Digital Literature, and Future Enterprise Tech with 50 accessibility profiles."
            },
            {
                q: "How does Litally protect author copyrights and combat plagiarism?",
                a: "Every manuscript and chapter published on Litally is cryptographically hashed with SHA-256 and salt, generating a verifiable digital timestamp. Web scraping and AI model training without author consent are legally and technically barred."
            },
            {
                q: "Is it free to publish and read on Litally?",
                a: "Yes! Independent authors can publish their books, teasers, and dispatches completely free. Readers have open access to public catalog archives, with optional direct support for their favorite authors."
            },
            {
                q: "How do the 50 Accessibility & Assistive Modalities work?",
                a: "Our matrix includes clinical ophthalmic filters (protanopia, deuteranopia, tritanopia), AI Easy-to-read cognitive simplification, eye-tracking simulation, 3D binaural focus beats, and motor tremor guards for smooth reading."
            },
            {
                q: "What are the 50 Kazakhstan visual themes?",
                a: "A curated collection of 50 ambient visual schemes celebrating the majestic landscapes and monuments of Kazakhstan: Charyn Canyon, Kaindy Lake, Bozzhira chalk cliffs, Singing Dunes, Turkestan, and Baikonur."
            },
            {
                q: "What tools does Litally Studio offer to writers and creators?",
                a: "Litally Studio offers complimentary initial AI image generation for covers, intelligent narrative synopsis outlining, automated grammar and spelling correction, and one-click 4K digital typesetting."
            }
        ]
    },

    // -------------------------------------------------------------------------
    // 2. RUSSIAN (ru)
    // -------------------------------------------------------------------------
    ru: {
        plans: [
            {
                quarter: "Q4 2026",
                status: "Активная Альфа",
                statusClass: "badge-active",
                icon: "✨",
                title: "Квантовая типографика Litally 4K и Мультимодальная платформа",
                desc: "Сверхчеткий рендеринг текста с частотой 120 Гц ProMotion, нулевой субпиксельный джиттер и авторские гарнитуры с поддержкой кочевой каллиграфии.",
                features: ["Рендерер шрифтов для Retina OLED 4K", "Мгновенный экспорт в ePub / PDF", "50 адаптивных циркадных тем оформления"]
            },
            {
                quarter: "Q1 2027",
                status: "В разработке",
                statusClass: "badge-dev",
                icon: "🧠",
                title: "Мультимодальный Нейро-интеллект и 4K Видеогенератор Litdeo",
                desc: "Генерация кинематографических видео уровня Luma и Higgsfield, диалоги с книжными героями на базе локальных и облачных нейросетей.",
                features: ["Человекоподобный анализ слайдов и фото", "4K видеогенерация за 1–10 минут", "ИИ-ассистент построения сюжетных арок"]
            },
            {
                quarter: "Q2 2027",
                status: "Проектирование",
                statusClass: "badge-planned",
                icon: "🛡️",
                title: "Децентрализованный реестр авторских прав и защита от плагиата",
                desc: "Неизменяемые криптографические слепки SHA-256, навсегда защищающие разработки и рукописи от несанкционированного парсинга.",
                features: ["Блокчейн-фиксация даты авторства", "Автономный страж против кражи контента", "Прямые выплаты авторских гонораров без посредников"]
            },
            {
                quarter: "Q3 2027",
                status: "Запланировано",
                statusClass: "badge-planned",
                icon: "🌌",
                title: "Litally VR & Spatial Computing для Apple Vision Pro и Smart TV 8K",
                desc: "Погружение в пространственные залы, переносящие пользователя в атмосферу Великой Степи, древних городищ и звездных цитаделей будущего.",
                features: ["Пространственные шейдеры для Vision Pro и Quest", "Управление с пульта Smart TV (D-pad навигация)", "Адаптивный звуковой эмбиент-фон"]
            },
            {
                quarter: "Q4 2027",
                status: "Видение",
                statusClass: "badge-planned",
                icon: "🌐",
                title: "Глобальная матрица суверенного перевода (100+ языков мира)",
                desc: "Сохранение авторского ритма, поэтического метра, метафор и глубокого философского подтекста на более чем 100 языках с нейронной точностью.",
                features: ["Мгновенный перевод на 100+ языков мира", "Гармонизатор культурного контекста и метафор", "Суверенное сообщество локализации Litally DAO"]
            }
        ],
        about: {
            heroBadge: "СУВЕРЕННЫЙ МНОГОПРОФИЛЬНЫЙ ХОЛДИНГ",
            heroTitle: "LITALLY: Мультимодальный ИИ, 4K Кино и Технологии Будущего",
            heroSubtitle: "Передовой многопрофильный технологический холдинг Линара Серика: Искусственный Интеллект, 4K Видеостудия Litdeo, Креативные Индустрии, Литература и Наука.",
            storyTitle: "Многопрофильная Архитектура Холдинга",
            storyText: "Litally создан Линаром Сериком как суверенная многопрофильная экосистема нового поколения. Холдинг объединяет 4 ключевых направления: квантовый Мультимодальный ИИ (Litally AI), кинематографическую 4K Видеостудию Litdeo мирового уровня (бенчмарк Luma Dream Machine и Higgsfield), Креативные Медиа и Цифровую Литературу, а также Корпоративные IT-решения и Науку Будущего.",
            authorTitle: "Архитектор и Основатель: Линар Серик",
            authorRole: "AI-Архитектор, Писатель и Основатель Холдинга Litally",
            authorBio: "Соединяя многовековую мудрость Великой Степи с фундаментальными принципами нейровычислений, Линар Серик создает суверенные цифровые платформы, где мультимодальный интеллект, кинематографическая генерация и независимость создателей образуют совершенную гармонию.",
            pillars: [
                { icon: "🤖", title: "Мультимодальный ИИ Litally", desc: "Человекоподобный анализ презентаций, слайдов, фото, написание сложнейшего кода и глубокое когнитивное мышление." },
                { icon: "🎬", title: "4K Видеостудия Litdeo", desc: "Генерация кинематографических видеороликов за 1–10 минут уровня Luma Dream Machine и Higgsfield с регламентом безопасности." },
                { icon: "📚", title: "Креативные Медиа и Литература", desc: "Создание масштабных вселенных, цифровые издания, интерактивные книжные персонажи и 100% защита авторских прав." },
                { icon: "⚡", title: "Технологии Будущего и Наука", desc: "Пространственные вычисления для Apple Vision Pro, 100 языков мира, Smart TV 8K и корпоративные когнитивные агенты." }
            ]
        },
        faq: [
            {
                q: "Чем Litally принципиально отличается от обычных сайтов самиздата?",
                a: "Litally ставит во главу угла суверенитет писателя и комфорт читателя. Мы объединили 4K Ultra HD типографику, матрицу из 50 режимов доступности, встроенную студию с ИИ-редактором и абсолютное сохранение 100% авторских прав за создателем."
            },
            {
                q: "Как защищаются авторские права и пресекается плагиат?",
                a: "Каждая публикация и глава автоматически хэшируются с солью по алгоритму SHA-256 с фиксацией точного времени в неизменяемом реестре. Несанкционированный парсинг и скармливание текстов чужим нейросетям строго запрещены юридически и программно."
            },
            {
                q: "Платно ли публиковать книги и читать на Litally?",
                a: "Нет, публикация в каталоге полностью бесплатна для независимых писателей. Читатели получают свободный доступ к открытым архивам и могут напрямую поддерживать любимых авторов без посреднических комиссий."
            },
            {
                q: "Как работают 50 режимов доступности (Accessibility)?",
                a: "Матрица доступности включает офтальмологические фильтры спектра (протанопия, дейтеранопия, тританопия), нейросетевой режим Easy-to-read для снижения когнитивной нагрузки, трекинг взгляда, 3D-звуковые бинауральные ритмы и защиту от случайных нажатий при треморе рук."
            },
            {
                q: "Что представляют собой 50 Тем Казахстана?",
                a: "Это уникальная коллекция визуальных атмосфер, вдохновленная сакральными ландшафтами и историей Казахстана: каньоны Шарына, затонувший лес Каинды, белые утесы Бозжиры, Поющие барханы, лазурь Туркестана и космодром Байконур."
            },
            {
                q: "Какие возможности предоставляет Litally Studio писателям?",
                a: "Студия Litally включает бесплатную стартовую генерацию обложек, ИИ-конструктор сюжетных арок и синопсисов, автоматическую проверку орфографии и пунктуации, а также цифровую верстку премиум-класса в один клик."
            }
        ]
    },

    // -------------------------------------------------------------------------
    // 3. KAZAKH (kk)
    // -------------------------------------------------------------------------
// -------------------------------------------------------------------------
    // 3. KAZAKH (kk) - Көпбейінді IT-Холдинг
    // -------------------------------------------------------------------------
    kk: {
        plans: [
            {
                quarter: "Q4 2026",
                status: "Белсенді Альфа",
                statusClass: "badge-active",
                icon: "✨",
                title: "Litally 4K Кванттық Типографикасы мен Егеменді Қаріптер Шеберханасы",
                desc: "120 Гц ProMotion қолдауы бар экранға арналған қаріптер рендерері, субпиксельдік тұрақтылық және көшпелі жазу өнеріне негізделген гарнитуралар.",
                features: ["Retina OLED 4K қаріптер қозғалтқышы", "ePub / PDF пішімінде лезде экспорттау", "Көру қабілетін қорғайтын 50 циркадтық тақырып"]
            },
            {
                quarter: "Q1 2027",
                status: "Әзірленуде",
                statusClass: "badge-dev",
                icon: "🧠",
                title: "Мультимодальды ЖИ және 4K Litdeo Кинобейне Студиясы",
                desc: "Luma Dream Machine және Higgsfield деңгейіндегі 4K кинематографиялық бейнелер генерациясы, жергілікті және бұлтты ЖИ модульдері арқылы кейіпкерлермен сұхбат.",
                features: ["Слайдтар мен фотоларды терең талдау", "1-10 минутта қауіпсіз 4K бейнегенерация", "Сюжет желісін құрастыруға арналған ЖИ-кеңесші"]
            },
            {
                quarter: "Q2 2027",
                status: "Жобалануда",
                statusClass: "badge-planned",
                icon: "🛡️",
                title: "Авторлық Құқықтың Орталықсыздандырылған Тізілімі және Антиплагиат",
                desc: "Қолжазбаларды заңсыз көшіруден және ЖИ үлгілеріне рұқсатсыз жүктеуден мәңгілік қорғайтын SHA-256 криптографиялық қорғанысы.",
                features: ["Блокчейнде авторлық күнді бекіту", "Мазмұнды ұрлауға қарсы автономды күзет", "Авторларға тікелей делдалсыз төлемдер"]
            },
            {
                quarter: "Q3 2027",
                status: "Жоспарда",
                statusClass: "badge-planned",
                icon: "🌌",
                title: "Apple Vision Pro және Smart TV 8K арналған Litally VR кеңістігі",
                desc: "Оқырманды Ұлы Даланың кең тынысына, көне шаһарларға және ғарыштық бекіністерге жетелейтін виртуалды кеңістіктік оқу бөлмелері.",
                features: ["Vision Pro және Quest үшін визуалды кеңістік", "Smart TV пультімен оңай басқару", "Көңіл-күйге бейімделетін дыбыстық әуен"]
            },
            {
                quarter: "Q4 2027",
                status: "Болашақ",
                statusClass: "badge-planned",
                icon: "🌐",
                title: "Әлемнің 100+ тіліне Егеменді Аударма Матрицасы",
                desc: "Автордың сөз саптау мәнерін, ұйқасын, терең философиялық мәнін сақтай отырып, 100-ден астам тілге лезде дәл аудару жүйесі.",
                features: ["100+ әлем тіліне кідіріссіз аударма", "Мәдени ерекшеліктер мен теңеулерді үйлестіру", "Litally DAO егеменді локализация қауымдастығы"]
            }
        ],
        about: {
            heroBadge: "ЕГЕМЕНДІ КӨПБЕЙІНДІ ЭКОЖҮЙЕ",
            heroTitle: "LITALLY: Мультимодальды ЖИ, 4K Кинобейне және Болашақ Технологиясы",
            heroSubtitle: "Линар Серіктің жасанды интеллектті, 4K бейнегенерацияны, шығармашылық медианы, әдебиетті және ғылымды біріктіретін жетекші көпбейінді IT-холдингі.",
            storyTitle: "Холдингтің Көпбейінді Құрылымы",
            storyText: "Litally Линар Серік тарапынан жаңа буынның егеменді экожүйесі ретінде құрылды. Холдинг 4 негізгі бағытты қамтиды: мультимодальды жасанды интеллект (Litally AI), әлемдік деңгейдегі 4K Litdeo бейнестудиясы (Luma және Higgsfield эталоны негізінде), шығармашылық медиа мен цифрлық әдебиет, сондай-ақ корпоративтік IT-шешімдер мен болашақ ғылымы.",
            authorTitle: "Сәулетші және Негізін Қалаушы: Линар Серік",
            authorRole: "ЖИ-Сәулетшісі, Жазушы және Litally Холдингінің Негізін Қалаушы",
            authorBio: "Ұлы Дала рухын заманауи нейроесептеу қағидаларымен тоғыстыра отырып, Линар Серік мультимодальды интеллект, кинематографиялық бейне және шығармашылық тәуелсіздік мінсіз үйлесім тапқан егемен сандық платформалар жасайды.",
            pillars: [
                { icon: "🤖", title: "Litally Мультимодальды ЖИ", desc: "Презентациялар, слайдтар, фотоларды терең талдау, күрделі код жазу және когнитивтік пайымдау." },
                { icon: "🎬", title: "Litdeo 4K Бейнестудиясы", desc: "Luma Dream Machine және Higgsfield деңгейіндегі қауіпсіздік ережелерімен 1-10 минутта 4K бейнелер генерациясы." },
                { icon: "📚", title: "Креативті Медиа & Әдебиет", desc: "Ауқымды ғаламдар жасау, цифрлық басылымдар, интерактивті кейіпкерлер және 100% авторлық құқықты қорғау." },
                { icon: "⚡", title: "Болашақ IT және Ғылым", desc: "Apple Vision Pro кеңістіктік есептеулері, әлемнің 100 тілі, 50 қолжетімділік режімі және корпоративтік ЖИ-агенттер." }
            ]
        },
        faq: [
            {
                q: "Litally дегеніміз не және оны көпбейінді холдинг ететін не?",
                a: "Litally — Линар Серік жасақтаған егеменді технологиялық холдинг. Ол 4 өзара байланысты саланы біріктіреді: Litally Multimodal AI, Litdeo 4K Video Studio, Креативті Медиа және Цифрлық Әдебиет, сондай-ақ 50 қолжетімділік режімі бар болашақ технологиялары."
            },
            {
                q: "Авторлық құқық қалай қорғалады және плагиатқа қалай тосқауыл қойылады?",
                a: "Әрбір жарияланған шығарма SHA-256 криптографиялық хэш-алгоритмімен бекітіліп, уақыты тіркеледі. Шығармаларды рұқсатсыз көшіруге немесе бөгде ЖИ үлгілерін оқытуға заңды әрі техникалық тұрғыдан қатаң тыйым салынған."
            },
            {
                q: "Litally-де кітап жариялау және оқу ақылы ма?",
                a: "Жоқ, тәуелсіз авторлар үшін шығармаларды жариялау мүлдем тегін. Оқырмандар ашық каталогты еркін оқи алады және сүйікті авторларына тікелей қолдау көрсете алады."
            },
            {
                q: "50 қолжетімділік (Accessibility) режімі қалай жұмыс істейді?",
                a: "Матрица түсті қабылдаудың офтальмологиялық сүзгілерін, күрделі мәтінді жеңілдетуді (Easy-to-read), көз жанарын бақылауды, 3D бинауральді дыбыстарды және қол дірілі кезінде қате басудан сақтауды қамтиды."
            },
            {
                q: "Қазақстанның 50 Тақырыбы дегеніміз не?",
                a: "Бұл — Қазақстанның қасиетті жерлері мен табиғатынан шабыттанған 50 бірегей визуалды атмосфера: Шарын каньоны, Қайыңды көлі, Бозжыра шатқалы, Әнші құм, Түркістан және Байқоңыр ғарыш айлағы."
            },
            {
                q: "Litally Studio жазушылар мен авторларға қандай мүмкіндіктер береді?",
                a: "Студия мұқабалар үшін ЖИ суреттерін тегін жасауды, сюжетті жүйелеуді, грамматиканы тексеруді және бір батырмамен баспаға дайын 4K файлдарды әзірлеуді ұсынады."
            }
        ]
    },


    // -------------------------------------------------------------------------
    // 4. CHINESE (zh)
    // -------------------------------------------------------------------------
    zh: {
        plans: [
            {
                quarter: "2026年第四季度",
                status: "开发中测试",
                statusClass: "badge-active",
                icon: "✨",
                title: "Litally 4K 量子排版引擎与主权字形工坊",
                desc: "专为Retina OLED 4K显示打造的超高保真字形渲染核心，支持120Hz ProMotion动态刷新率，配备游牧文明古典字联美学。",
                features: ["Retina OLED 4K 高保真文字光栅化", "一键极速导出 ePub 与加密PDF", "50款昼夜节律自适应沉浸主题"]
            },
            {
                quarter: "2027年第一季度",
                status: "深度研发中",
                statusClass: "badge-dev",
                icon: "🧠",
                title: "神经拟态共创助手与全景三维名著角色交互",
                desc: "基于端侧与云端混合大模型的书中人物对话系统，读者可随时与心仪著作中的经典角色进行沉浸式多轮长文本对话。",
                features: ["支持10种语言的书中人物拟真交谈", "全景3D空间双耳声场有声剧朗读", "基于故事弧线的世界观构筑辅助"]
            },
            {
                quarter: "2027年第二季度",
                status: "架构规划中",
                statusClass: "badge-planned",
                icon: "🛡️",
                title: "主权去中心化版权账本与反洗稿追踪系统",
                desc: "通过SHA-256密码学数字摘要为每一部原稿施加防篡改时间戳，从根源杜绝未经授权的网络爬虫抓取与AI非法训练。",
                features: ["区块链不可篡改版权存证链", "全天候自律型反盗版监测巡逻机制", "读者与作者无缝直接打赏支持通道"]
            },
            {
                quarter: "2027年第三季度",
                status: "路线图规划",
                statusClass: "badge-planned",
                icon: "🌌",
                title: "Litally 空间现实阅读舱（Vision Pro 与 8K 电视适配）",
                desc: "将读者带入浩瀚辽阔的大草原、古老的丝路绿洲与未来游牧太空星舰之中，营造身临其境的视听感官盛宴。",
                features: ["Apple Vision Pro / Quest 全景空间着色器", "电视遥控器十字键无缝平滑空间导航", "生物节律与心流自适应声景环绕"]
            },
            {
                quarter: "2027年第四季度",
                status: "长远愿景",
                statusClass: "badge-planned",
                icon: "🌐",
                title: "全球主权多语言神经网络翻译矩阵（100+世界语言）",
                desc: "在保持作者原文韵律、隐喻色彩与深邃哲思的前提下，实现跨越100余种全球语言的高保真语义无损转换。",
                features: ["100+全球主流与稀有语言毫秒级同声翻译", "多文化隐喻与修辞自适应校准仪", "Litally DAO 去中心化主权本地化社区"]
            }
        ],
        about: {
            heroBadge: "主权数字文学圣殿",
            heroTitle: "LITALLY：想象力奇迹与创作者主权的永恒圣域",
            heroSubtitle: "专为深邃宏大文学、良善人工智能共生以及创作者纯粹自由打造的先锋阵地。",
            storyTitle: "创立缘起",
            storyText: "Litally 源于一个坚不可摧的信仰：文学创作是人类文明中最崇高的星系艺术。然而，当下的商业平台却将作家沦为数据饲料与流量附庸。我们建立了 Litally 这座智性堡垒——在此，作者对世界观和作品拥有100%完全自主的版权，原稿在 4K Ultra HD 画质下得以完美绽放，读者亦可享受50项无障碍呵护。",
            authorTitle: "宇宙构筑师与主权作者：里纳尔 (Linar)",
            authorRole: "思辨幻想小说作家 · Litally 文学圣殿创始人",
            authorBio: "汲取欧亚大草原的浩瀚苍凉、冷冽星辰的永恒沉默以及古老游牧智慧为源泉，里纳尔构筑了融汇古老哲思与前沿硬科幻的恢弘史诗。Litally 每一行精心推敲的代码与像素，皆旨在捍卫文字神圣而崇高的尊严。",
            pillars: [
                { icon: "👑", title: "100% 作者绝对主权", desc: "拒绝霸王条款。作者永久保留所有版权、改编权与商业衍生权益。" },
                { icon: "⚡", title: "良善 AI 创作伴侣", desc: "AI仅作为构思与排版的催化剂：章节大纲打磨、插图构思与一键专业排印。" },
                { icon: "♿", title: "全维度临床级无障碍", desc: "50种医学级关怀：色觉缺陷光谱校正、易读模式认知减负与手部防抖防误触。" },
                { icon: "💎", title: "4K 影视级视觉呈现", desc: "120帧丝滑流体物理交互、智能电视遥控适配与OLED零光损护眼模式。" }
            ]
        },
        faq: [
            {
                q: "Litally 与传统网文平台相比，有何本质不同？",
                a: "Litally 将创作者完全主权置于核心。我们融合了 4K Ultra HD 视网膜排版引擎、50项医学级无障碍矩阵、内嵌 AI 创作者工作室，并确保作者享有 100% 独立的版权自由。"
            },
            {
                q: "平台如何保护作者版权与杜绝抄袭洗稿？",
                a: "每篇公开发布的作品均通过加盐 SHA-256 算法生成唯一数字指纹并加盖不可篡改的时间戳。严禁任何第三方爬虫抓取与将作品用于未授权的 AI 训练。"
            },
            {
                q: "在 Litally 上阅读与发布作品收费吗？",
                a: "不收费！独立创作者可以完全免费入驻并发布作品、预告和公报。读者可自由畅读公开档案，并可直接向喜爱的作家表达敬意与赞赏，无任何平台抽成损耗。"
            },
            {
                q: "50 项无障碍关怀体系是如何运作的？",
                a: "我们的矩阵覆盖了红绿蓝全色弱滤镜、基于大模型的易读简化模式（Easy-to-read）、视线注视点导航模拟、3D空间脑波专注音疗以及防止手部震颤的防误触技术。"
            },
            {
                q: "50 款哈萨克斯坦主题是什么？",
                a: "这是一套汲取中亚壮美风貌与悠久历史的视觉艺术杰作：查伦峡谷、凯恩迪沉湖、博兹吉拉白垩崖、鸣沙山、突厥斯坦蓝顶古殿以及拜科努尔航天城等经典光影意境。"
            },
            {
                q: "Litally Studio 为创作者提供哪些核心能力？",
                a: "Studio 提供免费的 AI 封面视觉生成、智能情节弧线与大纲提炼、全自动语法拼写润色以及一键导出出版级 4K 排版文件。"
            }
        ]
    },

    // -------------------------------------------------------------------------
    // 5. SPANISH (es)
    // -------------------------------------------------------------------------
    es: {
        plans: [
            {
                quarter: "Q4 2026",
                status: "Alfa Activa",
                statusClass: "badge-active",
                icon: "✨",
                title: "Tipografía Cuántica Litally 4K y Fundición de Fuentes",
                desc: "Motor de renderizado de texto cinematográfico con soporte para ProMotion a 120 Hz, sin fluctuaciones de subpíxeles.",
                features: ["Rasterizador de fuentes Retina OLED 4K", "Exportación instantánea a ePub / PDF", "50 temas circadianos adaptativos"]
            },
            {
                quarter: "Q1 2027",
                status: "En Desarrollo",
                statusClass: "badge-dev",
                icon: "🧠",
                title: "Motor de Coautoría Neural y Personajes 3D Interactivos",
                desc: "Diálogos interactivos con personajes de libros impulsados por IA, permitiendo a los lectores conversar directamente con sus héroes favoritos.",
                features: ["Diálogos en 10 idiomas", "Dramatización en audio espacial 3D", "Asistente de construcción de tramas"]
            },
            {
                quarter: "Q2 2027",
                status: "Diseñado",
                statusClass: "badge-planned",
                icon: "🛡️",
                title: "Registro Descentralizado de Derechos y Escudo Antiplagio",
                desc: "Huellas criptográficas SHA-256 que protegen permanentemente los manuscritos contra el rastreo no autorizado y el robo intelectual.",
                features: ["Certificación inmutable de autoría", "Centinela autónomo contra el plagio", "Liquidación directa de regalías sin intermediarios"]
            },
            {
                quarter: "Q3 2027",
                status: "Hoja de Ruta",
                statusClass: "badge-planned",
                icon: "🌌",
                title: "Litally VR y Lectura Espacial para Vision Pro y Smart TV 8K",
                desc: "Salas de lectura inmersivas que transportan a los lectores a la Gran Estepa, ciudades ancestrales y ciudadelas espaciales nómadas.",
                features: ["Shaders espaciales para Vision Pro y Quest", "Navegación espacial D-Pad para Smart TV", "Sinfonía ambiental con biorretroalimentación"]
            },
            {
                quarter: "Q4 2027",
                status: "Visión",
                statusClass: "badge-planned",
                icon: "🌐",
                title: "Matriz de Traducción Soberana Global (Más de 100 Idiomas)",
                desc: "Preservación del ritmo, tono poético y sutilezas filosóficas en más de 100 idiomas con fidelidad semántica neural.",
                features: ["Traducción sin latencia a más de 100 idiomas", "Armonizador de matices culturales y metáforas", "Comunidad de localización soberana Litally DAO"]
            }
        ],
        about: {
            heroBadge: "SANTUARIO LITERARIO SOBERANO",
            heroTitle: "LITALLY: Donde la Imaginación Abraza la Soberanía Autoral",
            heroSubtitle: "Un refugio de vanguardia dedicado a la literatura profunda, la simbiosis ética con IA y la libertad creativa absoluta.",
            storyTitle: "Nuestros Orígenes",
            storyText: "Litally nació de una convicción inquebrantable: el arte de narrar es la expresión celeste más elevada de la humanidad. Erigimos Litally como una fortaleza intelectual donde los autores conservan el 100% de sus derechos, las obras se muestran en 4K Ultra HD y los lectores disfrutan de 50 modos de accesibilidad.",
            authorTitle: "Arquitecto del Universo y Autor: Linar",
            authorRole: "Autor de ficción especulativa y fundador de Litally",
            authorBio: "Inspirado por la inmensidad de la Gran Estepa, el silencio cósmico y la antigua sabiduría nómada, Linar entreteje universos monumentales donde la espiritualidad y el futurismo científico convergen.",
            pillars: [
                { icon: "👑", title: "100% Soberanía Autoral", desc: "Sin contratos editoriales abusivos. Los autores conservan todos sus derechos y control creativo." },
                { icon: "⚡", title: "Mentoría de IA Ética", desc: "Herramientas diseñadas para potenciar el talento: creación de sinopsis, portadas y maquetación profesional." },
                { icon: "♿", title: "Accesibilidad Clínica", desc: "50 perfiles de asistencia médica: filtros para daltonismo, simplificación de texto y protección contra temblores." },
                { icon: "💎", title: "Elegancia Cinematográfica 4K", desc: "Interactividad fluida a 120 FPS, compatibilidad con mandos de televisión y modos OLED relajantes." }
            ]
        },
        faq: [
            {
                q: "¿Qué diferencia a Litally de otras plataformas literarias?",
                a: "Litally prioriza la soberanía del autor y el confort visual del lector, fusionando tipografía 4K Ultra HD, 50 perfiles de accesibilidad médica y retención absoluta del 100% de los derechos de autor."
            },
            {
                q: "¿Cómo se protegen los derechos de autor contra el plagio?",
                a: "Cada manuscrito publicado recibe un sello criptográfico SHA-256 inmutable con marca de tiempo. El rastreo no autorizado y el entrenamiento de modelos de IA sin permiso están estrictamente prohibidos."
            },
            {
                q: "¿Es gratis publicar y leer en Litally?",
                a: "¡Sí! La publicación es completamente gratuita para escritores independientes. Los lectores tienen acceso libre al catálogo público y pueden respaldar directamente a sus autores preferidos."
            },
            {
                q: "¿Cómo funcionan las 50 modalidades de accesibilidad?",
                a: "Nuestra matriz incluye filtros oftálmicos para protanopía y deuteranopía, simplificación de lenguaje mediante IA, seguimiento ocular simulado, ritmos binaurales 3D y protección contra pulsaciones involuntarias."
            },
            {
                q: "¿Qué son los 50 temas de Kazajistán?",
                a: "Una colección exclusiva de atmósferas visuales inspiradas en los paisajes sagrados de Kazajistán: el Cañón de Charyn, el Lago Kaindy, los acantilados de Bozzhira, las Dunas Cantoras y Baikonur."
            },
            {
                q: "¿Qué herramientas ofrece Litally Studio a los escritores?",
                a: "Studio ofrece generación gratuita de imágenes para portadas, diseño de sinopsis y arcos narrativos con IA, corrección ortográfica inteligente y maquetación digital 4K en un solo clic."
            }
        ]
    },

    // -------------------------------------------------------------------------
    // 6. GERMAN (de)
    // -------------------------------------------------------------------------
    de: {
        plans: [
            {
                quarter: "Q4 2026",
                status: "Aktive Alpha",
                statusClass: "badge-active",
                icon: "✨",
                title: "Litally 4K Quanten-Typografie & Souveräne Schriftenschmiede",
                desc: "Kinoreife Textdarstellung mit 120Hz ProMotion-Unterstützung, Null Subpixel-Jitter und traditionellen nomadischen Ligaturen.",
                features: ["Retina OLED 4K Schrift-Rasterizer", "Sofortiger ePub / PDF Export", "50 adaptive zirkadiane Atmosphärenthemen"]
            },
            {
                quarter: "Q1 2027",
                status: "In Entwicklung",
                statusClass: "badge-dev",
                icon: "🧠",
                title: "Neuronaler Co-Autor & Interaktive 3D-Buchcharaktere",
                desc: "Interaktive Dialoge mit Buchcharakteren auf Basis modernster KI-Modelle für ein lebendiges Leseerlebnis.",
                features: ["Lebendige Dialoge in 10 Sprachen", "Binaurale 3D-Klanginszenierung für Hörbücher", "Handlungsbogen-Strukturassistent"]
            },
            {
                quarter: "Q2 2027",
                status: "Geplant",
                statusClass: "badge-planned",
                icon: "🛡️",
                title: "Dezentrales Urheberrechtsregister & Anti-Plagiat-Schutz",
                desc: "Kryptografische SHA-256 Zeitstempel, die Manuskripte dauerhaft vor unerlaubtem Web-Scraping und Diebstahl schützen.",
                features: ["Unveränderlicher Nachweis der Urheberschaft", "Autonomer Wächter gegen Content-Diebstahl", "Direkte Honorarauszahlung ohne Abzüge"]
            },
            {
                quarter: "Q3 2027",
                status: "Roadmap",
                statusClass: "badge-planned",
                icon: "🌌",
                title: "Litally VR & Räumliches Lesen für Apple Vision Pro & Smart TV 8K",
                desc: "Immersive Lesehallen, die Leser direkt in die Weiten der Großen Steppe und futuristische nomadische Himmelsstädte entführen.",
                features: ["Räumliche Shader für Vision Pro & Quest", "Smart TV Fernbedienungs-Navigation", "Adaptive binaurale Klangwelten"]
            },
            {
                quarter: "Q4 2027",
                status: "Vision",
                statusClass: "badge-planned",
                icon: "🌐",
                title: "Globales Übersetzungsgitter (Über 100 Weltsprachen)",
                desc: "Wahrung von Sprachrhythmus, Poetik und philosophischer Tiefe in über 100 Sprachen mit neuronaler Präzision.",
                features: ["Verzögerungsfreie Übersetzung in 100+ Sprachen", "Harmonisierung kultureller Nuancen und Metaphern", "Souveräne Litally DAO Lokalisierungs-Gemeinschaft"]
            }
        ],
        about: {
            heroBadge: "SOUVERÄNES LITERARISCHES HEILIGTUM",
            heroTitle: "LITALLY: Wo Vorstellungskraft auf Autorensouveränität trifft",
            heroSubtitle: "Ein avantgardistischer Zufluchtsort für anspruchsvolle Literatur, ethische KI-Symbiose und uneingeschränkte kreative Freiheit.",
            storyTitle: "Unsere Entstehung",
            storyText: "Litally entstand aus der festen Überzeugung, dass das geschriebene Wort das höchste Gut der Menschheit darstellt. Litally ist eine intellektuelle Festung: Autoren behalten 100% ihrer Rechte, Werke erstrahlen in 4K Ultra HD und Leser genießen 50 Barrierefreiheits-Modi.",
            authorTitle: "Universumsarchitekt und Autor: Linar",
            authorRole: "Autor spekulativer Fiktion & Gründer von Litally",
            authorBio: "Inspiriert von der Unendlichkeit der Großen Steppe, der Stille des Kosmos und alter nomadischer Weisheit, erschafft Linar monumentale Literaturwelten voller Tiefe und futuristischer Eleganz.",
            pillars: [
                { icon: "👑", title: "100% Autorensouveränität", desc: "Keine Knebelverträge. Autoren behalten alle Rechte an ihren Welten und Figuren." },
                { icon: "⚡", title: "Ethische KI-Begleitung", desc: "KI-Werkzeuge als schöpferischer Mentor: Gliederungshilfen, Buchcover und Drucksatz." },
                { icon: "♿", title: "Umfassende Barrierefreiheit", desc: "50 klinische Profile: Farbfilter für Sehschwächen, Easy-to-Read Vereinfachung und Zitterschutz." },
                { icon: "💎", title: "4K Kino-Ästhetik", desc: "Flüssige 120 FPS Reaktionszeit, Smart-TV-Bedienung und augenschonende OLED-Zirkadian-Modi." }
            ]
        },
        faq: [
            {
                q: "Was unterscheidet Litally von herkömmlichen Plattformen?",
                a: "Litally vereint 100% Autorensouveränität mit einem gestochen scharfen 4K-Leseerlebnis, 50 medizinischen Assistenzmodi und ethischen KI-Werkzeugen ohne Rechteabtretung."
            },
            {
                q: "Wie werden Manuskripte vor Plagiaten geschützt?",
                a: "Jedes Werk wird mit einem unveränderlichen SHA-256 Hash kryptografisch versiegelt. Das Auslesen durch Web-Crawler und das Trainieren fremder KI-Modelle ist strengstens untersagt."
            },
            {
                q: "Ist das Veröffentlichen und Lesen auf Litally kostenlos?",
                a: "Ja! Unabhängige Autoren können Werke kostenlos veröffentlichen. Leser haben freien Zugang zum offenen Katalog und können Autoren direkt unterstützen."
            },
            {
                q: "Wie funktionieren die 50 Barrierefreiheits-Modi?",
                a: "Unsere Matrix bietet optische Filter (Protanopie, Deuteranopie), kognitive KI-Textvereinfachung, Blickverfolgungs-Simulation, 3D-Binauraltöne und motorische Dämpfung bei Händezittern."
            },
            {
                q: "Was bedeuten die 50 Kasachstan-Themen?",
                a: "50 meisterhafte Farb- und Lichtwelten inspiriert von den Landschaften Kasachstans: der Charyn Canyon, der Kaindy-See, die weißen Kreidefelsen von Bozzhira und das Kosmodrom Baikonur."
            },
            {
                q: "Welche Funktionen bietet das Litally Studio für Schriftsteller?",
                a: "Das Studio bietet kostenlose KI-Bildgenerierung für Buchcover, automatische Exposé- und Kapitelgliederung, Korrekturlesung und professionellen 4K-Drucksatz per Klick."
            }
        ]
    },

    // -------------------------------------------------------------------------
    // 7. FRENCH (fr)
    // -------------------------------------------------------------------------
    fr: {
        plans: [
            {
                quarter: "T4 2026",
                status: "Alpha Active",
                statusClass: "badge-active",
                icon: "✨",
                title: "Typographie Quantique Litally 4K & Fonderie Souveraine",
                desc: "Rendu de texte haute fidélité avec rafraîchissement 120 Hz ProMotion, zéro vibration sous-pixel et ligatures d'inspiration nomade.",
                features: ["Moteur de polices Retina OLED 4K", "Exportation instantanée en ePub / PDF", "50 thèmes d'ambiance circadiens adaptatifs"]
            },
            {
                quarter: "T1 2027",
                status: "En Développement",
                statusClass: "badge-dev",
                icon: "🧠",
                title: "Moteur de Co-écriture Neuronale & Personnages 3D Interactifs",
                desc: "Conversations interactives avec les protagonistes littéraires propulsées par l'IA, permettant aux lecteurs de dialoguer avec les personnages.",
                features: ["Dialogues vivants en 10 langues", "Dramatisation audio spatiale 3D binaurale", "Assistant d'architecture narrative et d'intrigues"]
            },
            {
                quarter: "T2 2027",
                status: "Architecture Validée",
                statusClass: "badge-planned",
                icon: "🛡️",
                title: "Registre Décentralisé des Droits & Bouclier Anti-Plagiat",
                desc: "Empreintes cryptographiques SHA-256 horodatées protégeant définitivement les manuscrits contre le pillage et l'entraînement d'IA non autorisé.",
                features: ["Preuve de paternité d'œuvre sur registre infalsifiable", "Sentinelle autonome anti-vol de contenu", "Versement direct des royalties sans intermédiaire"]
            },
            {
                quarter: "T3 2027",
                status: "Feuille de Route",
                statusClass: "badge-planned",
                icon: "🌌",
                title: "Litally VR & Lecture Spatiale pour Apple Vision Pro & TV 8K",
                desc: "Chambres de lecture immersives transportant les lecteurs au cœur de la Grande Steppe, des cités antiques et des forteresses spatiales nomades.",
                features: ["Shaders spatiaux pour Vision Pro et Quest", "Navigation spatiale à la télécommande Smart TV", "Symphonies d'ambiance adaptatives"]
            },
            {
                quarter: "T4 2027",
                status: "Vision",
                statusClass: "badge-planned",
                icon: "🌐",
                title: "Matrice de Traduction Neuronale Souveraine (100+ Langues)",
                desc: "Préservation du souffle poétique, du rythme et des nuances philosophiques dans plus de 100 langues avec une précision sémantique absolue.",
                features: ["Traduction instantanée dans plus de 100 langues", "Harmonisateur d'équivalences culturelles et de métaphores", "Communauté de localisation souveraine Litally DAO"]
            }
        ],
        about: {
            heroBadge: "SANCTUAIRE LITTÉRAIRE SOUVERAIN",
            heroTitle: "LITALLY : L'Alliance de l'Imaginaire et de la Souveraineté Autoriale",
            heroSubtitle: "Un havre avant-gardiste dédié aux œuvres visionnaires, à l'IA éthique et à l'émancipation totale des créateurs.",
            storyTitle: "Notre Genèse",
            storyText: "Litally est né d'une conviction profonde : la littérature est le sommet de l'art humain. Nous avons bâti Litally comme un bastion intellectuel où les auteurs conservent 100 % de leurs droits patrimoniaux et moraux, les manuscrits sont magnifiés en 4K Ultra HD, et les lecteurs bénéficient de 50 modes d'accessibilité.",
            authorTitle: "Architecte de l'Univers & Auteur : Linar",
            authorRole: "Écrivain de fiction spéculative et fondateur de Litally",
            authorBio: "Inspiré par l'immensité de la Grande Steppe, le silence des abîmes stellaires et la sagesse nomade millénaire, Linar conçoit des fresques monumentales alliant spiritualité intemporelle et hard science-fiction.",
            pillars: [
                { icon: "👑", title: "100% Souveraineté Autoriale", desc: "Aucun contrat d'édition spoliateur. L'auteur reste le maître absolu de son œuvre et de ses dérivés." },
                { icon: "⚡", title: "Soutien par une IA Éthique", desc: "Des outils pensés comme des mentors créatifs : synopses détaillés, créations de couvertures et composition." },
                { icon: "♿", title: "Accessibilité Médicale", desc: "50 profils d'assistance : filtres ophtalmiques pour daltonisme, mode Facile à lire et protection anti-tremblement." },
                { icon: "💎", title: "Élégance Cinématographique 4K", desc: "Fluidité ProMotion à 120 FPS, pilotage fluide à la télécommande Smart TV et modes OLED protecteurs." }
            ]
        },
        faq: [
            {
                q: "En quoi Litally se distingue-t-il des plateformes d'auto-édition classiques ?",
                a: "Litally garantit la souveraineté totale de l'auteur tout en offrant un rendu 4K d'exception, 50 modes d'accessibilité clinique et des outils d'IA qui n'aliènent jamais votre propriété intellectuelle."
            },
            {
                q: "Comment les droits d'auteur sont-ils protégés contre le plagiat ?",
                a: "Chaque chapitre publié génère une signature cryptographique SHA-256 horodatée. Tout scraping et utilisation des textes pour entraîner des modèles d'IA sans consentement sont formellement bannis."
            },
            {
                q: "Est-ce gratuit de publier et de lire sur Litally ?",
                a: "Oui ! Les auteurs indépendants peuvent publier gratuitement livres, nouvelles et préfaces. Les lecteurs profitent du catalogue librement et peuvent soutenir directement leurs auteurs favoris."
            },
            {
                q: "Comment fonctionnent les 50 modalités d'accessibilité ?",
                a: "La matrice intègre des filtres de compensation spectrale (protanopie, deutéranopie), un mode cognitif simplifié (Easy-to-read), la simulation de suivi oculaire et des fréquences binaurales 3D."
            },
            {
                q: "Que représentent les 50 thèmes du Kazakhstan ?",
                a: "Une collection d'atmosphères visuelles inspirées par les paysages grandioses du Kazakhstan : le canyon de Charyn, le lac Kaindy, les falaises blanches de Bozzhira et le cosmodrome de Baïkonour."
            },
            {
                q: "Quels sont les outils de Litally Studio pour les écrivains ?",
                a: "Litally Studio offre la génération initiale d'illustrations de couverture par IA, la structuration d'arches narratives, la relecture orthographique automatique et la mise en page 4K en un clic."
            }
        ]
    },

    // -------------------------------------------------------------------------
    // 8. ARABIC (ar)
    // -------------------------------------------------------------------------
    ar: {
        plans: [
            {
                quarter: "الربع الرابع 2026",
                status: "نسخة ألفا نشطة",
                statusClass: "badge-active",
                icon: "✨",
                title: "محرك الطباعة الكمومية بدقة 4K وسباكة الخطوط السيادية",
                desc: "محرك طباعي سينمائي فائق يدعم سلاسة 120 هرتز لشاشات ريتينا OLED بدون أي تشويش وبخطوط مستوحاة من عراقة الخطوط البدوية.",
                features: ["معالج خطوط فائق لشاشات Retina OLED 4K", "تصدير فوري بصيغ ePub و PDF مشفرة", "50 سمة بصرية مريحة لراحة العين"]
            },
            {
                quarter: "الربع الأول 2027",
                status: "قيد التطوير",
                statusClass: "badge-dev",
                icon: "🧠",
                title: "محرك الكاتب المساعد الذكي والشخصيات الروائية ثلاثية الأبعاد",
                desc: "حوارات حية وتفاعلية مع أبطال وشخصيات الروايات مدعومة بنماذج الذكاء الاصطناعي تتيح للقراء محاورة شخصياتهم المفضلة.",
                features: ["حوارات تفاعلية بـ 10 لغات", "أداء صوتي درامي ثلاثي الأبعاد", "مساعد بناء الحبكة وتطور القصة"]
            },
            {
                quarter: "الربع الثاني 2027",
                status: "مكتمل التخطيط",
                statusClass: "badge-planned",
                icon: "🛡️",
                title: "سجل حقوق التأليف اللامركزي ودرع مكافحة الانتحال الأدبي",
                desc: "بصمات رقمية مشفرة ببروتوكول SHA-256 تحمي المخطوطات نهائيًا من الكشط غير المصرح به وتدريب نماذج الذكاء الاصطناعي بدون إذن.",
                features: ["توثيق غير قابل للتعديل لتاريخ الملكية", "حارس ذاتي ضد سرقة النصوص", "دفع العائدات مباشرة للمؤلفين دون وسطاء"]
            },
            {
                quarter: "الربع الثالث 2027",
                status: "ضمن الخطة",
                statusClass: "badge-planned",
                icon: "🌌",
                title: "القراءة الغامرة للواقع الافتراضي لأجهزة Apple Vision Pro وشاشات 8K",
                desc: "غرف قراءة مكانية ثلاثية الأبعاد تنقل القارئ مباشرة إلى سهوب كازاخستان الفسيحة والمدن التاريخية والحصون الفضائية المستقبلية.",
                features: ["تظليل بصري فراغي لنظارات Vision Pro و Quest", "تحكم سهل عبر جهاز التحكم عن بعد للتلفاز", "أصوات بيئية متناغمة تعزز الاسترخاء"]
            },
            {
                quarter: "الربع الرابع 2027",
                status: "رؤية مستقبلية",
                statusClass: "badge-planned",
                icon: "🌐",
                title: "مصفوفة الترجمة السيادية العالمية لأكثر من 100 لغة حية",
                desc: "الحفاظ على جرس الكلمات والإيقاع البلاغي والعمق الفلسفي لأعمال الكاتب عبر أكثر من 100 لغة بدقة دلالية عصبية متناهية.",
                features: ["ترجمة فورية لأكثر من 100 لغة بدون تأخير", "مواءمة ذكية للاستعارات الثقافية والبلاغية", "مجتمع توطين سيادي ومستقل Litally DAO"]
            }
        ],
        about: {
            heroBadge: "الصرح الأدبي السيادي",
            heroTitle: "LITALLY: حيث يلتقي الخيال الملحمي بسيادة الكاتب المطلقة",
            heroSubtitle: "ملاذ رقمي رائد مكرس للأدب الرفيع، والتناغم الأخلاقي مع الذكاء الاصطناعي، والحرية الإبداعية الكاملة.",
            storyTitle: "قصة التأسيس",
            storyText: "انبثقت منصة Litally من إيمان راسخ بأن الأدب هو أسمى فنون الفكر الإنساني. أنشأنا Litally كحصن فكري يمتلك فيه المؤلف 100% من حقوق ملكيته الأدبية، وتُعرض فيه الأعمال بدقة 4K فائقة الوضوح، مع توفير 50 نمطًا مريحًا لإمكانية الوصول الشامل للقراء.",
            authorTitle: "معمار العوالم الروائية والكاتب: لينار (Linar)",
            authorRole: "كاتب الخيال العلمي الملحمي ومؤسس صرح Litally",
            authorBio: "مستلهمًا أفكاره من سعة السهوب العظمى وسكون الفضاء اللانهائي وحكمة البداوة العريقة، ينسج لينار عوالم روائية ملحمية تجمع بين العمق الروحي والخيال العلمي الدقيق.",
            pillars: [
                { icon: "👑", title: "100% سيادة تامة للمؤلف", desc: "لا عقود احتكارية جائرة. يحتفظ المؤلف بكامل حقوق الطبع والترجمة والاقتباس السينمائي." },
                { icon: "⚡", title: "ذكاء اصطناعي أخلاقي مساند", desc: "أدوات مخصصة لدعم المبدع: صياغة ملخصات الفصول، ابتكار الأغلفة وتنسيق الكتاب بضغطة زر." },
                { icon: "♿", title: "إمكانية وصول طبية فائقة", desc: "50 نمطًا صحيًا مساندًا: تصحيح ألوان الرؤية، نمط القراءة السلسة وحماية من ارتعاش اليدين." },
                { icon: "💎", title: "تصميم سينمائي فائق بدقة 4K", desc: "سلاسة حركة بمعدل 120 إطارًا، وتحكم كامل عبر شاشات التلفاز الذكية وأوضاع OLED المريحة." }
            ]
        },
        faq: [
            {
                q: "ما الذي يجعل Litally مختلفة كليًا عن منصات النشر المعتادة؟",
                a: "تضع Litally سيادة الكاتب في المقام الأول، دامجة بين تقنيات العرض بدقة 4K Ultra HD، و50 نمطًا لإمكانية الوصول، واستوديو ذكاء اصطناعي أخلاقي دون التنازل عن أي جزء من حقوق ملكيتك."
            },
            {
                q: "كيف تحمي المنصة حقوق التأليف وتمنع السرقة الأدبية؟",
                a: "تخضع كل مادة منشورة لتشفير تجزئة رقمي SHA-256 مع ختم زمني غير قابل للتلاعب، ويُحظر قانونيًا وتقنيًا استخلاص النصوص أو تغذيتها لنماذج الذكاء الاصطناعي."
            },
            {
                q: "هل النشر والقراءة في Litally مجانيان؟",
                a: "نعم! النشر مجاني تمامًا لكافة الكتّاب المستقلين. ويستطيع القراء تصفح الفهارس العامة بحرية، مع إمكانية دعم مؤلفيهم المفضلين مباشرة وبدون أي استقطاعات مجحفة."
            },
            {
                q: "كيف تعمل الأنماط الخمسون لإمكانية الوصول (Accessibility)؟",
                a: "تشمل المصفوفة مرشحات بصرية لعمى الألوان، ونمط التبسيط المعرفي بالذكاء الاصطناعي، ومحاكاة تتبع حركة العينين، ونغمات التركيز الذهني ثلاثية الأبعاد، وحماية من النقرات غير المقصودة."
            },
            {
                q: "ما هي السمات الخمسون لكازاخستان؟",
                a: "مجموعة من 50 سمة بصرية خلابة مستوحاة من معالم كازاخستان الساحرة: وادي شارين، وبحيرة كايندي، وهضبة بوزجيرا، والكثبان الرنانة، ومدينة بايكونور الفضائية."
            },
            {
                q: "ما هي المزايا التي يقدمها Litally Studio للكتّاب؟",
                a: "يقدم الاستوديو توليدًا مجانيًا لصور الأغلفة، وتنظيمًا ذكيًا لمحاور القصة والحبكة، وتدقيقًا إملائيًا ولغويًا آليًا، وتنسيقًا احترافيًا للكتب بجودة طباعية عالية."
            }
        ]
    },

    // -------------------------------------------------------------------------
    // 9. JAPANESE (ja)
    // -------------------------------------------------------------------------
    ja: {
        plans: [
            {
                quarter: "2026年 第4四半期",
                status: "アクティブ・アルファ",
                statusClass: "badge-active",
                icon: "✨",
                title: "Litally 4K 量子タイポグラフィ＆主権フォント工房",
                desc: "Retina OLED 4Kに最適化された高精細文字描画エンジン。120Hz ProMotion駆動と遊牧文化の伝統美学を宿した独自フォントセット。",
                features: ["Retina OLED 4K 高精細フォントラスタライザ", "ePub / 暗号化PDFへのワンクリック出力", "50種類のサーカディアン適応テーマ"]
            },
            {
                quarter: "2027年 第1四半期",
                status: "現在開発中",
                statusClass: "badge-dev",
                icon: "🧠",
                title: "ニューラル共創エンジン＆名著キャラクター3D対話",
                desc: "作品内の登場人物と直接会話ができるAI対話エンジンを搭載。読者は名作の世界に飛び込み、キャラクターと対話できます。",
                features: ["10言語でのキャラクター対話", "3Dバイノーラル立体音響による朗読演出", "ストーリー展開構築のアシスト機能"]
            },
            {
                quarter: "2027年 第2四半期",
                status: "設計完了",
                statusClass: "badge-planned",
                icon: "🛡️",
                title: "分散型著作権台帳＆盗用防止ブロックチェーンシールド",
                desc: "改ざん不可能なSHA-256暗号化ハッシュにより、原稿の無断スクレイピングやAI学習への不正利用を恒久的に遮断します。",
                features: ["ブロックチェーンによる著作権確定証明", "無断転載・剽窃を常時監視する自律型哨戒機能", "中間手数料ゼロの著者直接還元システム"]
            },
            {
                quarter: "2027年 第3四半期",
                status: "ロードマップ",
                statusClass: "badge-planned",
                icon: "🌌",
                title: "Litally VR＆空間読書体験（Vision Pro＆8Kテレビ対応）",
                desc: "大草原の静寂、古代シルクロードのオアシス、未来の遊牧宇宙要塞へと読者を誘うフルイマーシブ空間読書チェンバー。",
                features: ["Apple Vision Pro / Quest用空間シェーダー", "テレビリモコンの十字キーによる直感的操作", "生体リズム連動の環境アンビエント音響"]
            },
            {
                quarter: "2027年 第4四半期",
                status: "未来ビジョン",
                statusClass: "badge-planned",
                icon: "🌐",
                title: "グローバル主権多言語翻訳マトリクス（100言語以上）",
                desc: "著者の文体、詩的なリズム、深遠な哲学的ニュアンスを一切損なうことなく、100以上の世界言語へニューラル高精度変換。",
                features: ["100以上の言語への低遅延リアルタイム翻訳", "文化的文脈・比喩表現の自律調和アルゴリズム", "Litally DAO 主権ローカライゼーションコミュニティ"]
            }
        ],
        about: {
            heroBadge: "主権的文学の聖域",
            heroTitle: "LITALLY：壮大な想像力と作家主権が融合する至高の空間",
            heroSubtitle: "深遠なる文学、倫理的AIの共生、そして表現の絶対的自由のために創設された前衛的なデジタルサンクチュアリ。",
            storyTitle: "創設の理念",
            storyText: "Litally は「物語の創造こそ人類最高の天上の芸術である」という確信から誕生しました。商業主義の波により作家がアルゴリズムの部品と化す中、私たちは知的要塞として Litally を築きました。ここでは作家が100%の権利を保持し、原稿は美しい4K Ultra HD画質で輝き、読者は50のアクセシビリティを享受できます。",
            authorTitle: "宇宙構築師・作家：リナル (Linar)",
            authorRole: "思弁的SF作家・Litally創設者",
            authorBio: "大草原の雄大な静寂、冷徹な星々の瞬き、古代遊牧民の哲学にインスピレーションを得て、リナルは普遍的な精神性とハードSFが融合した壮大な文学世界を創造しています。Litallyのすべてのコードとピクセルは、言葉の尊厳を称えるために捧げられています。",
            pillars: [
                { icon: "👑", title: "100% 作家の完全主権", desc: "不当な契約は一切なし。作家は作品の著作権、二次利用権、翻訳権を永久に保持します。" },
                { icon: "⚡", title: "倫理的AIメンター", desc: "創作を高める補助ツール：プロットの構築支援、表紙アート生成、ワンクリック組版。" },
                { icon: "♿", title: "臨床レベルのアクセシビリティ", desc: "50種類の支援モード：色覚補正フィルター、平易な文章への要約変換、手の震え防止機能。" },
                { icon: "💎", title: "映画級の4Kシネマ美学", desc: "120 FPSの流麗なアニメーション、スマートテレビ操作対応、目に優しいOLED低輝度モード。" }
            ]
        },
        faq: [
            {
                q: "従来の小説投稿サイトと Litally の決定的な違いは何ですか？",
                a: "Litally は作家の主権と読者の視覚的快適性を最優先しています。4K Ultra HDタイポグラフィ、50のアクセシビリティモード、内蔵AIスタジオ、そして100%の著作権保持を完全両立しています。"
            },
            {
                q: "著作権保護と盗作防止はどのように機能しますか？",
                a: "投稿されたすべての原稿はSHA-256暗号化ハッシュにより改ざん不可能なタイムスタンプが付与されます。スクレイピングやAI学習への無断利用は法的・技術的に固く禁じられています。"
            },
            {
                q: "Litally での作品公開や読書は無料ですか？",
                a: "はい！独立した作家は完全無料で作品や予告を公開できます。読者は公開アーカイブを自由に閲覧でき、お気に入りの作家を直接支援することも可能です。"
            },
            {
                q: "50のアクセシビリティ機能はどのように役立ちますか？",
                a: "色覚補正（赤色・緑色・青色弱）、認知負荷を軽減する「やさしい日本語要約（Easy-to-read）」、アイトラッキング視線操作、3D立体音響集中ビート、手の震えによる誤操作防止などを網羅しています。"
            },
            {
                q: "「カザフスタン50のテーマ」とは何ですか？",
                a: "カザフスタンの雄大な景勝地や歴史的遺産から着想を得た50種類の洗練されたビジュアル空間です。チャリン渓谷、カインディ湖、ボズジラ白亜の崖、歌う砂丘、バイコヌール宇宙基地などの世界観が広がります。"
            },
            {
                q: "作家向け「Litally Studio」にはどのような機能がありますか？",
                a: "本の表紙アート生成、AIによるプロット・あらすじの自動構築、高度な校正支援、ワンクリックでの出版用4Kデジタル組版機能などを提供しています。"
            }
        ]
    },

    // -------------------------------------------------------------------------
    // 10. PORTUGUESE (pt)
    // -------------------------------------------------------------------------
    pt: {
        plans: [
            {
                quarter: "Q4 2026",
                status: "Alfa Ativa",
                statusClass: "badge-active",
                icon: "✨",
                title: "Tipografia Quântica Litally 4K e Fundição de Fontes",
                desc: "Motor de renderização com suporte a 120Hz ProMotion, zero oscilação de subpixels e fontes com ligaduras de herança nômade.",
                features: ["Renderizador Retina OLED 4K", "Exportação veloz em ePub / PDF", "50 temas circadianos adaptativos"]
            },
            {
                quarter: "Q1 2027",
                status: "Em Desenvolvimento",
                statusClass: "badge-dev",
                icon: "🧠",
                title: "Motor de Coautoria Neural e Personagens 3D Interativos",
                desc: "Diálogos dinâmicos com personagens de ficção através de IA avançada, permitindo conversas diretas entre leitores e heróis literários.",
                features: ["Diálogos envolventes em 10 idiomas", "Dramatização em áudio espacial 3D", "Assistente de arcos dramáticos"]
            },
            {
                quarter: "Q2 2027",
                status: "Planejado",
                statusClass: "badge-planned",
                icon: "🛡️",
                title: "Registro Descentralizado de Direitos e Escudo Antiplágio",
                desc: "Carimbos criptográficos SHA-256 que protegem permanentemente manuscritos contra raspagem de dados e treino ilegal de IA.",
                features: ["Certificado inalterável de autoria", "Sentinela autônoma contra plágio", "Repasse direto de direitos sem intermediários"]
            },
            {
                quarter: "Q3 2027",
                status: "Roteiro",
                statusClass: "badge-planned",
                icon: "🌌",
                title: "Litally VR e Leitura Espacial para Apple Vision Pro e Smart TV 8K",
                desc: "Salas de leitura imersivas que transportam leitores para o silêncio da Grande Estepe, cidadelas ancestrais e fortalezas cósmicas.",
                features: ["Shaders espaciais para Vision Pro e Quest", "Navegação por controle remoto em Smart TVs", "Sinfonia acústica adaptativa"]
            },
            {
                quarter: "Q4 2027",
                status: "Visão",
                statusClass: "badge-planned",
                icon: "🌐",
                title: "Matriz Global de Tradução Soberana (Mais de 100 Idiomas)",
                desc: "Preservação da cadência lírica, métrica poética e nuances filosóficas em mais de 100 idiomas com fidelidade semântica neural.",
                features: ["Tradução sem latência em mais de 100 línguas", "Harmonização de metáforas e expressões culturais", "Comunidade soberana Litally DAO"]
            }
        ],
        about: {
            heroBadge: "SANTUÁRIO LITERÁRIO SOBERANO",
            heroTitle: "LITALLY: O Encontro da Imaginação com a Soberania Autoral",
            heroSubtitle: "Um refúgio vanguardista consagrado à literatura profunda, à inteligência artificial ética e à total independência criativa.",
            storyTitle: "Nossa Fundação",
            storyText: "O Litally nasceu da certeza inabalável de que a literatura é a mais nobre manifestação do espírito humano. Erguemos o Litally como uma fortaleza intelectual onde o autor retém 100% de seus direitos, as obras ganham vida em 4K Ultra HD e os leitores usufruem de 50 modos de acessibilidade.",
            authorTitle: "Arquiteto do Universo e Autor: Linar",
            authorRole: "Escritor de ficção especulativa e idealizador do Litally",
            authorBio: "Inspirado pela vastidão da Grande Estepe, pelo silêncio do cosmos e pela ancestral sabedoria nômade, Linar constrói universos monumentais que unem profundidade espiritual e futurismo científico.",
            pillars: [
                { icon: "👑", title: "100% Soberania do Autor", desc: "Sem contratos predatórios. O autor retém todos os direitos morais, autorais e comerciais." },
                { icon: "⚡", title: "Mentoria com IA Ética", desc: "Ferramentas pensadas para apoiar o escritor: estruturação de enredo, capas e diagramação 4K." },
                { icon: "♿", title: "Acessibilidade Clínica", desc: "50 perfis assistivos: filtros de cores para daltonismo, modo leitura fácil e filtro contra tremores." },
                { icon: "💎", title: "Estética Cinematográfica 4K", desc: "Fluidez ProMotion a 120 FPS, controle espacial para Smart TVs e modos OLED para proteção ocular." }
            ]
        },
        faq: [
            {
                q: "O que torna o Litally diferente de outras plataformas literárias?",
                a: "O Litally coloca a soberania autoral em primeiro plano, unindo tipografia 4K Ultra HD, 50 perfis de acessibilidade médica e proteção integral aos direitos autorais."
            },
            {
                q: "Como os direitos autorais são protegidos contra o plágio?",
                a: "Cada manuscrito publicado recebe uma assinatura criptográfica SHA-256 com carimbo de tempo indelével. A cópia não autorizada e o uso de textos para treinar modelos de IA são rigidamente proibidos."
            },
            {
                q: "É gratuito publicar e ler no Litally?",
                a: "Sim! Escritores independentes podem publicar suas obras gratuitamente. Os leitores têm acesso livre aos acervos abertos e podem apoiar diretamente seus autores preferidos."
            },
            {
                q: "Como funcionam os 50 modos de acessibilidade?",
                a: "Nossa matriz abrange filtros ópticos para daltonismo, simplificação de textos por IA (Easy-to-read), simulação de rastreamento ocular, áudio 3D e proteção contra toques acidentais."
            },
            {
                q: "O que representam os 50 temas do Cazaquistão?",
                a: "Uma seleção de 50 atmosferas visuais inspiradas na natureza exuberante do Cazaquistão: o Cânion de Charyn, o Lago Kaindy, as falésias de Bozzhira, as Dunas Cantantes e Baikonur."
            },
            {
                q: "Quais recursos o Litally Studio oferece para os autores?",
                a: "O estúdio oferece criação gratuita de capas com IA, estruturação inteligente de sinopses e arcos narrativos, revisão ortográfica e diagramação 4K em um só clique."
            }
        ]
    }
};

// -----------------------------------------------------------------------------
// 2. RENDERERS FOR PLANS, ABOUT, AND FAQ
// -----------------------------------------------------------------------------

function renderPublicPlans(lang = 'en') {
    const container = document.getElementById('publicPlansContainer');
    if (!container) return;

    // ── PRIORITY 1: New LBO TaxScout-style hero + cards V2 engine ────────────
    if (typeof renderLBOPricingHero === 'function' && typeof LITALLY_TIERS_DATA !== 'undefined') {
        renderLBOPricingHero('publicPlansContainer', lang);
        // Synchronously populate cards grid for instant rendering with zero delay
        if (typeof renderLBOPlanCardsV2 === 'function') {
            renderLBOPlanCardsV2('lboPlanCardsGrid', LITALLY_TIERS_DATA, lang);
        }
        if (typeof renderLBOCapabilitiesNavbar === 'function') {
            const navSlot = document.getElementById('lboNavbarSlot');
            if (navSlot) renderLBOCapabilitiesNavbar('lboNavbarSlot', lang);
        }
        return;
    }

    // ── PRIORITY 2: Legacy 10-tier engine ────────────────────────────────────
    if (typeof render10PricingTiers === 'function') {
        render10PricingTiers('publicPlansContainer', lang);
        return;
    }

    // ── PRIORITY 3: Simple roadmap fallback ──────────────────────────────────
    const data = LITALLY_PORTALS_DATA[lang] || LITALLY_PORTALS_DATA.en || LITALLY_PORTALS_DATA.ru;
    const plans = data.plans || [];

    container.innerHTML = `
        <div class="plans-roadmap-wrapper">
            <div class="plans-timeline">
                ${plans.map((item, idx) => `
                    <div class="plan-card ${idx === 0 ? 'highlight-active' : ''}">
                        <div class="plan-card-header">
                            <div class="plan-badge-group">
                                <span class="plan-quarter">${escapeHTML(item.quarter)}</span>
                                <span class="plan-status-pill ${escapeHTML(item.statusClass)}">${escapeHTML(item.status)}</span>
                            </div>
                            <span class="plan-icon">${escapeHTML(item.icon)}</span>
                        </div>
                        <h3 class="plan-card-title">${escapeHTML(item.title)}</h3>
                        <p class="plan-card-desc">${escapeHTML(item.desc)}</p>
                        <div class="plan-features-list">
                            ${item.features.map(f => `
                                <div class="plan-feature-tag">
                                    <span style="color: var(--accent-color);">✓</span> ${escapeHTML(f)}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}


function renderPublicAbout(lang = 'ru') {
    const container = document.getElementById('publicAboutContainer');
    if (!container) return;

    const dict = (window.LITALLY_TRANSLATIONS_100 && window.LITALLY_TRANSLATIONS_100[lang]) ? window.LITALLY_TRANSLATIONS_100[lang] : {};
    const data = LITALLY_PORTALS_DATA[lang] || LITALLY_PORTALS_DATA.en || LITALLY_PORTALS_DATA.ru || {};
    const about = data.about || {
        heroBadge: dict.heroSubBadge || 'LITALLY SANCTUARY',
        heroTitle: dict.modalAboutTitle || 'LITALLY: Multimodal AI & 4K Cinema',
        heroSubtitle: dict.modalAboutSub || dict.heroStatement || 'A premier multidisciplinary technology holding.',
        storyTitle: dict.modalAboutTitle || 'Genesis',
        storyText: dict.heroStatement || '',
        authorTitle: 'Linar Serik',
        authorRole: dict.modalBioSub || 'AI Architect & Holding Founder',
        authorBio: dict.defaultBio || '',
        pillars: [
            { icon: '🤖', title: 'Litally Multimodal AI', desc: 'Slide critique, photo perception, code synthesis.' },
            { icon: '🎬', title: 'Litdeo 4K Video Cinema', desc: '4K video generation benchmarking Luma & Higgsfield.' },
            { icon: '📚', title: 'Creative Media & Literature', desc: 'Digital publishing & 100% author rights.' },
            { icon: '⚡', title: 'Future Enterprise Tech', desc: 'Apple Vision Pro, 100 languages, zero latency.' }
        ]
    };

    container.innerHTML = `
        <div class="about-portal-wrapper">
            <!-- Hero Banner -->
            <div class="about-hero-banner">
                <span class="card-badge" style="display: inline-block; margin-bottom: 12px;">${escapeHTML(about.heroBadge || 'LITALLY SANCTUARY')}</span>
                <h2 style="font-family: var(--font-decorative); color: var(--accent-color); font-size: 1.8rem; margin-bottom: 14px; letter-spacing: 2px;">
                    ${escapeHTML(about.heroTitle || '')}
                </h2>
                <p style="color: var(--text-dim); max-width: 820px; font-size: 1.05rem; line-height: 1.8;">
                    ${escapeHTML(about.heroSubtitle || '')}
                </p>
            </div>

            <!-- Pillars of Sovereignty Grid -->
            <div class="about-pillars-grid">
                ${(about.pillars || []).map(p => `
                    <div class="about-pillar-card">
                        <div class="about-pillar-icon">${escapeHTML(p.icon)}</div>
                        <h4 style="color: var(--accent-color); margin-bottom: 10px; font-size: 1.05rem;">${escapeHTML(p.title)}</h4>
                        <p style="font-size: 0.92rem; color: #b8bccd; line-height: 1.7;">${escapeHTML(p.desc)}</p>
                    </div>
                `).join('')}
            </div>

            <!-- Genesis Story & Author Section -->
            <div class="about-story-box">
                <h3 style="color: var(--accent-color); margin-bottom: 14px; font-family: var(--font-decorative); letter-spacing: 1px;">
                    ${escapeHTML(about.storyTitle || 'Genesis')}
                </h3>
                <p style="color: #cfd2e3; line-height: 2; font-size: 1.02rem; margin-bottom: 28px;">
                    ${escapeHTML(about.storyText || '')}
                </p>

                <div class="about-author-showcase">
                    <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop" 
                         alt="Author Portrait" class="about-author-img" loading="lazy">
                    <div>
                        <h4 style="color: var(--accent-color); font-size: 1.2rem; margin-bottom: 4px;">
                            ${escapeHTML(about.authorTitle || '')}
                        </h4>
                        <div style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 14px; letter-spacing: 1px; text-transform: uppercase;">
                            ${escapeHTML(about.authorRole || '')}
                        </div>
                        <p style="color: #d1d4e4; line-height: 1.9; font-size: 0.96rem;">
                            ${escapeHTML(about.authorBio || '')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderPublicFaq(lang = 'ru') {
    const container = document.getElementById('publicFaqContainer');
    if (!container) return;

    const dict = (window.LITALLY_TRANSLATIONS_100 && window.LITALLY_TRANSLATIONS_100[lang]) ? window.LITALLY_TRANSLATIONS_100[lang] : {};
    const data = LITALLY_PORTALS_DATA[lang] || LITALLY_PORTALS_DATA.en || LITALLY_PORTALS_DATA.ru || {};
    let faqList = data.faq;
    if (!faqList || !faqList.length) {
        faqList = [
            {
                q: dict.modalFaqTitle || "What is Litally and what makes it a multidisciplinary holding?",
                a: dict.modalFaqSub || dict.heroStatement || "Litally unites Multimodal AI, 4K Video Studio, Creative Literature, and Future Enterprise Technology."
            },
            {
                q: dict.legalTitle || "How does Litally protect author copyrights and combat plagiarism?",
                a: dict.legalBody || "Every manuscript published on Litally is cryptographically hashed with SHA-256."
            },
            {
                q: dict.modalStudioTitle || "What tools does Litally Studio offer to creators?",
                a: dict.studioMainDescription || "Litally Studio provides AI cover generation, smart synopsis structuring, and 4K typesetting."
            }
        ];
    }

    container.innerHTML = `
        <div class="faq-portal-wrapper">
            <div class="faq-list">
                ${faqList.map((item, idx) => `
                    <div class="faq-accordion-item" id="faqItem-${idx}">
                        <button class="faq-question-btn" onclick="toggleFaqAccordion(${idx})">
                            <span class="faq-q-text">${escapeHTML(item.q)}</span>
                            <span class="faq-toggle-icon" id="faqIcon-${idx}">▼</span>
                        </button>
                        <div class="faq-answer-pane" id="faqAnswer-${idx}">
                            <p>${escapeHTML(item.a)}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function toggleFaqAccordion(idx) {
    const pane = document.getElementById(`faqAnswer-${idx}`);
    const icon = document.getElementById(`faqIcon-${idx}`);
    const item = document.getElementById(`faqItem-${idx}`);
    if (!pane) return;

    const isOpen = pane.classList.contains('open');
    if (isOpen) {
        pane.classList.remove('open');
        if (icon) icon.style.transform = 'rotate(0deg)';
        if (item) item.classList.remove('active');
    } else {
        pane.classList.add('open');
        if (icon) icon.style.transform = 'rotate(180deg)';
        if (item) item.classList.add('active');
    }
    if (typeof playChime === 'function') playChime(700);
}
