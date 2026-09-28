/**
 * =============================================================================
 * LITALLY 4K ULTRA HD — 10-TIER SUBSCRIPTION & PRICING PLANS ENGINE
 * File: static/js/pricing_plans_engine.js
 * Description: Master engine for the 10 sovereign subscription tiers,
 *              dynamic currency converter across 100 countries, vertical card
 *              rendering, interactive checkout simulation, and quota comparison.
 * =============================================================================
 */

const LITALLY_TIERS_DATA = [
    // -------------------------------------------------------------------------
    // Tier 1: Basic (Requested by User)
    // -------------------------------------------------------------------------
    {
        id: "tier_1_basic",
        index: 1,
        usdPrice: 0,
        badge: "TIER 01 • ESSENTIAL",
        nameEn: "Basic",
        nameRu: "Базовый",
        nameKk: "Базалық",
        nameZh: "基础版",
        nameEs: "Básico",
        nameDe: "Basis",
        nameFr: "Basique",
        nameAr: "الأساسي",
        nameJa: "ベーシック",
        namePt: "Básico",
        taglineEn: "Free access for emerging writers and curious readers",
        taglineRu: "Бесплатный вход для начинающих писателей и пытливых читателей",
        isPopular: false,
        features: [
            // 1. Линар Токены: 50 штук. Каждый месяц сгорают по 50, если меньше, то до нуля.
            {
                icon: "🪙",
                qty: "50",
                ru: "Линар Токены: 50 штук. Каждый месяц сгорают по 50, если меньше, то до нуля.",
                en: "Linar Tokens: 50 pcs. Burn 50 each month (or to zero if fewer remain).",
                kk: "Линар Токендері: 50 дана. Әр ай сайын 50 дана күйеді (аз болса нөлге дейін).",
                zh: "Linar 代币：50 枚。每月扣除 50 枚（若不足则清零）。",
                es: "Tokens Linar: 50 unidades. Se queman 50 cada mes (o hasta cero si restan menos).",
                de: "Linar-Tokens: 50 Stück. Verfallen monatlich um 50 (oder bis null, falls weniger).",
                fr: "Jetons Linar : 50 unités. Expirent de 50 chaque mois (ou jusqu'à zéro).",
                ar: "رموز لينار: 50 قطعة. تخصم 50 شهرياً (أو حتى الصفر إذا كانت أقل).",
                ja: "Linarトークン：50個。毎月50個消滅（残数が少なければ0まで）。",
                pt: "Tokens Linar: 50 unidades. Expiram 50 por mês (ou até zero se houver menos).",
                shortRu: "50 Токенов",
                shortEn: "50 Tokens",
                shortKk: "50 Токен",
                shortZh: "50 代币",
                shortEs: "50 Tokens",
                shortDe: "50 Tokens",
                shortFr: "50 Jetons",
                shortAr: "50 رمزاً",
                shortJa: "50トークン",
                shortPt: "50 Tokens",
                descRu: "Каждый месяц сгорают по 50, если меньше, то до нуля.",
                descEn: "Burn 50 each month (or down to zero if fewer remain).",
                descKk: "Әр ай сайын 50 дана күйеді, егер аз болса, нөлге дейін.",
                descZh: "每月扣减 50 枚代币，若账户余额不足 50 枚则清零。",
                descEs: "Cada mes se consumen 50 unidades (o hasta cero si restan menos).",
                descDe: "Verfallen jeden Monat um 50 (oder bis auf null, falls weniger übrig).",
                descFr: "Expirent de 50 chaque mois (ou jusqu'à zéro s'il en reste moins).",
                descAr: "تخصم 50 قطعة شهرياً، وإذا كان المتبقي أقل تصفر بالكامل.",
                descJa: "毎月50個が自動消滅します（残数が50未満の場合は0まで）。",
                descPt: "Expiram 50 unidades por mês (ou até zero se houver menos)."
            },
            // 2. Капсула времени сценариев. Слот: 2
            {
                icon: "⏳",
                qty: "2",
                ru: "Капсула времени сценариев. Слот: 2",
                en: "Script Time Capsule. Slots: 2",
                kk: "Сценарий уақыт капсуласы. Слот: 2",
                zh: "剧本时光胶囊。槽位：2",
                es: "Cápsula del tiempo de guiones. Ranuras: 2",
                de: "Drehbuch-Zeitkapsel. Slots: 2",
                fr: "Capsule temporelle de scénarios. Emplacements : 2",
                ar: "كبسولة زمن السيناريو. الفتحات: 2",
                ja: "シナリオタイムカプセル。スロット：2",
                pt: "Cápsula do tempo de roteiros. Slots: 2",
                shortRu: "Капсула: 2 слота",
                shortEn: "Capsule: 2 slots",
                shortKk: "Капсула: 2 слот",
                shortZh: "时光胶囊: 2槽位",
                shortEs: "Cápsula: 2 slots",
                shortDe: "Kapsel: 2 Slots",
                shortFr: "Capsule : 2 slots",
                shortAr: "الكبسولة: فتحتان",
                shortJa: "カプセル: 2枠",
                shortPt: "Cápsula: 2 slots",
                descRu: "Защищенное хранение версий и альтернативных сюжетных веток.",
                descEn: "Secure vault for manuscript versions and alternative plot branches.",
                descKk: "Қолжазба нұсқалары мен балама сюжеттерге арналған қауіпсіз қойма.",
                descZh: "安全存储各版本草稿与平行剧情分支的时空档案仓。",
                descEs: "Bóveda segura para borradores y ramas argumentales alternas.",
                descDe: "Sicherer Tresor für Manuskriptversionen und Handlungszweige.",
                descFr: "Coffre sécurisé pour brouillons et branches d'intrigue alternatives.",
                descAr: "خزينة آمنة لتخزين مسودات المخطوطات وتفرعات الحبكة البديلة.",
                descJa: "原稿バージョンや分岐プロットを保存する安全な保管庫。",
                descPt: "Cofre seguro para rascunhos e ramificações de enredo alternativas."
            },
            // 3. ИИ шпион за трендами 3 отчета
            {
                icon: "🕵️",
                qty: "3",
                ru: "ИИ шпион за трендами: 3 отчета",
                en: "AI Trend Spy: 3 reports",
                kk: "Трендтерді бақылайтын ЖИ тыңшысы: 3 есеп",
                zh: "AI 趋势风向侦探：3 份报告",
                es: "Espía de tendencias IA: 3 informes",
                de: "KI-Trendspion: 3 Berichte",
                fr: "Espion de tendances IA : 3 rapports",
                ar: "جاسوس اتجاهات الذكاء الاصطناعي: 3 تقارير",
                ja: "AIトレンドスパイ：3レポート",
                pt: "Espião de tendências IA: 3 relatórios",
                shortRu: "Тренды: 3 отчета",
                shortEn: "Trend Spy: 3 reports",
                shortKk: "Трендтер: 3 есеп",
                shortZh: "趋势侦探: 3份",
                shortEs: "Tendencias: 3 inf.",
                shortDe: "Trends: 3 Berichte",
                shortFr: "Tendances : 3 rap.",
                shortAr: "الاتجاهات: 3",
                shortJa: "トレンド: 3本",
                shortPt: "Tendências: 3 rel.",
                descRu: "Аналитика бестселлеров, читательских запросов и виральных ниш.",
                descEn: "Analytics on bestsellers, reader search spikes, and viral genres.",
                descKk: "Бестселлерлер мен оқырмандар сұранысын сараптамалық талдау.",
                descZh: "畅销书题材、热搜爆款关键词与读者受众趋势深度挖掘。",
                descEs: "Análisis de superventas, nichos en auge y demanda de lectores.",
                descDe: "Analysen zu Bestsellern, Suchtrends und viralen Genres.",
                descFr: "Analyse prédictive des best-sellers et niches virales.",
                descAr: "تحليلات دقيقة لأكثر الكتب رواجاً واهتمامات القراء.",
                descJa: "ベストセラー傾向、検索急上昇ワード、需要のリアルタイム分析。",
                descPt: "Análise de best-sellers, nichos em alta e demanda de leitores."
            },
            // 4. Генератор имен персонажей: 7
            {
                icon: "🏷️",
                qty: "7",
                ru: "Генератор имен персонажей: 7",
                en: "Character Name Generator: 7",
                kk: "Кейіпкер аттарының генераторы: 7",
                zh: "角色命名大师：7 次",
                es: "Generador de nombres de personajes: 7",
                de: "Charakternamen-Generator: 7",
                fr: "Générateur de noms de personnages : 7",
                ar: "مولد أسماء الشخصيات: 7",
                ja: "キャラクター名前生成：7回",
                pt: "Gerador de nomes de personagens: 7",
                shortRu: "Имена: 7 генераций",
                shortEn: "Names: 7 gens",
                shortKk: "Аттар: 7 генерация",
                shortZh: "角色命名: 7次",
                shortEs: "Nombres: 7 gens",
                shortDe: "Namen: 7 Gens",
                shortFr: "Noms : 7 gén.",
                shortAr: "الأسماء: 7",
                shortJa: "命名: 7回",
                shortPt: "Nomes: 7 gens",
                descRu: "Аутентичные имена персонажей, фамилии и титулы под ваш сеттинг.",
                descEn: "Lore-authentic names, lineage aliases, and noble titles for your world.",
                descKk: "Дүниетанымға сай шынайы кейіпкер есімдері мен атаулары.",
                descZh: "完全符合您设定世界观的高阶角色名、家族姓氏与专属头衔。",
                descEs: "Nombres auténticos, apellidos de linaje y títulos para su mundo.",
                descDe: "Authentische Namen, Ahnenbezeichnungen und Titel für Ihre Welt.",
                descFr: "Noms authentiques, patronymes de lignée et titres pour votre univers.",
                descAr: "أسماء أصيلة وألقاب أسطورية ونبيلة تناسب عالمك الأدبي.",
                descJa: "作品の世界観に調和した本格的な人名、家名、称号の創出。",
                descPt: "Nombres autênticos, sobrenomes de linhagem e títulos para seu universo."
            },
            // 5. голосовые функции ИИ. Выбор: 2, менять только 1 раз
            {
                icon: "🎙️",
                qty: "2",
                ru: "Голосовые функции ИИ. Выбор: 2, менять только 1 раз",
                en: "AI Voice Functions. Selection: 2, can change only 1 time",
                kk: "ЖИ дауыстық функциялары. Таңдау: 2, тек 1 рет өзгертуге болады",
                zh: "AI 语音功能。可选：2 款，限更改 1 次",
                es: "Funciones de voz IA. Elección: 2, cambiar solo 1 vez",
                de: "KI-Stimmfunktionen. Auswahl: 2, nur 1-mal änderbar",
                fr: "Fonctions vocales IA. Choix : 2, modifiable 1 seule fois",
                ar: "وظائف الصوت بالذكاء الاصطناعي. الاختيار: 2، التغيير مرة واحدة فقط",
                ja: "AI音声機能。選択：2種、変更は1回のみ可能",
                pt: "Funções de voz IA. Escolha: 2, alterar apenas 1 vez",
                shortRu: "Голос ИИ: 2 (1 смена)",
                shortEn: "AI Voice: 2 (1 swap)",
                shortKk: "ЖИ Дауысы: 2 (1 рет)",
                shortZh: "AI语音: 2款(限改1次)",
                shortEs: "Voz IA: 2 (1 cambio)",
                shortDe: "KI-Stimme: 2 (1x)",
                shortFr: "Voix IA : 2 (1 modif)",
                shortAr: "الصوت: 2 (تغيير 1)",
                shortJa: "AI音声: 2種(変更1回)",
                shortPt: "Voz IA: 2 (1 troca)",
                descRu: "Студийная озвучка глав. Выбор из 2 голосов, смена разрешена только 1 раз.",
                descEn: "Studio chapter narration. 2 voice options, locked after 1 swap.",
                descKk: "Тарауларды студиялық дыбыстау. 2 дауыс таңдауы, тек 1 рет өзгертуге болады.",
                descZh: "录音室级朗读。可在 2 款音色中挑选，确认后仅限更改 1 次。",
                descEs: "Locución de estudio. Elección de 2 voces, cambio permitido solo 1 vez.",
                descDe: "Studio-Sprachausgabe. 2 Stimmen wählbar, Wechsel genau 1-mal möglich.",
                descFr: "Narration studio. 2 voix disponibles, modifiable une seule fois.",
                descAr: "سرد صوتي احترافي للفصول. اختيار صوتين مع إمكانية التبديل مرة واحدة فقط.",
                descJa: "章のスタジオ朗読。2種類の音声から選択、変更は1回のみ可能。",
                descPt: "Narração de estúdio. Escolha de 2 vozes, alteração permitida apenas 1 vez."
            },
            // 6. Статус: "Пользователь"
            {
                icon: "🎖️",
                qty: "User",
                ru: 'Статус: «Пользователь»',
                en: 'Status: "User"',
                kk: 'Мәртебе: «Пайдаланушы»',
                zh: '身份等级：“认证用户”',
                es: 'Estado: "Usuario"',
                de: 'Status: „Benutzer“',
                fr: 'Statut : « Utilisateur »',
                ar: 'الحالة: "مستخدم"',
                ja: 'ステータス：「ユーザー」',
                pt: 'Status: "Usuário"',
                shortRu: 'Статус «Пользователь»',
                shortEn: 'Status: "User"',
                shortKk: '«Пайдаланушы» мәртебесі',
                shortZh: '“认证用户”标识',
                shortEs: 'Estado "Usuario"',
                shortDe: 'Status „Benutzer“',
                shortFr: 'Statut « Utilisateur »',
                shortAr: 'صفة "مستخدم"',
                shortJa: '「ユーザー」権限',
                shortPt: 'Status "Usuário"',
                descRu: "Официальный верифицированный профиль суверенного пользователя платформы.",
                descEn: "Official verified sovereign platform user and reader profile badge.",
                descKk: "Платформаның ресми тексерілген суверен пайдаланушы профилі.",
                descZh: "平台官方认证探索者与读者专属徽章地位。",
                descEs: "Perfil oficial y verificado de usuario soberano en la plataforma.",
                descDe: "Offizieller, verifizierter Rang als souveräner Plattform-Benutzer.",
                descFr: "Profil vérifié et rang officiel d'utilisateur souverain sur Litally.",
                descAr: "الملف التعريفي الرسمي والموثق كمستخدم للمنصة.",
                descJa: "公式認証されたプラットフォーム公認ユーザーランクバッジ。",
                descPt: "Perfil oficial verificado de usuário soberano na plataforma."
            },
            // 7. Эксперт лора. Говорит историю и несостыковки. Использовать: 2 раза
            {
                icon: "📜",
                qty: "2",
                ru: "Эксперт лора. Говорит историю и несостыковки. Использовать: 2 раза",
                en: "Lore Expert. Details history and plot discrepancies. Usage: 2 times",
                kk: "Лор сарапшысы. Тарих пен сәйкессіздіктерді тексереді. Қолдану: 2 рет",
                zh: "世界观设定专家。梳理历史与剧情漏洞。可用：2 次",
                es: "Experto en lore. Señala historia e inconsistencias. Uso: 2 veces",
                de: "Lore-Experte. Prüft Historie und Widersprüche. Nutzung: 2-mal",
                fr: "Expert en lore. Révèle l'histoire et les incohérences. Utilisation : 2 fois",
                ar: "خبير القصة. يوضح التاريخ والتناقضات. الاستخدام: مرتان",
                ja: "世界観設定エキスパート。歴史と設定矛盾の検証。利用：2回",
                pt: "Especialista em lore. Aponta história e inconsistências. Uso: 2 vezes",
                shortRu: "Эксперт лора: 2x",
                shortEn: "Lore Expert: 2x",
                shortKk: "Лор сарапшысы: 2x",
                shortZh: "设定专家: 2次",
                shortEs: "Experto lore: 2x",
                shortDe: "Lore-Experte: 2x",
                shortFr: "Expert lore : 2x",
                shortAr: "خبير القصة: 2x",
                shortJa: "設定検証: 2回",
                shortPt: "Especialista lore: 2x",
                descRu: "Говорит историю и несостыковки. Использовать: 2 раза.",
                descEn: "Details universe history and narrative discrepancies. Usage: 2 times.",
                descKk: "Тарих пен сюжет сәйкессіздіктерін айтады. Қолдану: 2 рет.",
                descZh: "指出历史设定与剧情冲突漏洞，确保世界观逻辑严谨。可用 2 次。",
                descEs: "Explica la historia e inconsistencias de la trama. Uso: 2 veces.",
                descDe: "Erklärt Historie und logische Brüche. 2-mal nutzbar.",
                descFr: "Révèle l'histoire et repère les incohérences. Utilisable 2 fois.",
                descAr: "يوضح التسلسل التاريخي والتناقضات في القصة. الاستخدام: مرتان.",
                descJa: "歴史の整合性とプロットの矛盾を徹底解説。2回利用可能。",
                descPt: "Aponta a história e incoerências da trama. Uso: 2 vezes."
            },
            // 8. Секретный подарок
            {
                icon: "🎁",
                qty: "Gift",
                ru: "Секретный подарок",
                en: "Secret Gift",
                kk: "Құпия сыйлық",
                zh: "神秘赠礼",
                es: "Regalo secreto",
                de: "Geheimes Geschenk",
                fr: "Cadeau secret",
                ar: "هدية سرية",
                ja: "シークレットギフト",
                pt: "Presente secreto",
                shortRu: "Секретный подарок",
                shortEn: "Secret Gift",
                shortKk: "Құпия сыйлық",
                shortZh: "神秘赠礼",
                shortEs: "Regalo secreto",
                shortDe: "Geheimes Geschenk",
                shortFr: "Cadeau secret",
                shortAr: "هدية سرية",
                shortJa: "限定ギフト",
                shortPt: "Presente secreto",
                descRu: "Эксклюзивный артефакт, коллекционный значок или бонусный промпт.",
                descEn: "Exclusive mystery digital collectible from the platform sanctuary.",
                descKk: "Платформадан эксклюзивті цифрлық артефакт немесе коллекциялық белгі.",
                descZh: "平台专属掉落的绝版数字藏品、创作者勋章或彩蛋指令。",
                descEs: "Artefacto digital exclusivo, insignia de coleccionista o prompt secreto.",
                descDe: "Exklusives digitales Artefakt, Sammlerabzeichen oder Geheim-Prompt.",
                descFr: "Artefact numérique exclusif, badge collector ou prompt d'initié.",
                descAr: "قطعة رقمية نادرة، أو شارة حصرية، أو مدخلات سياقية غامضة.",
                descJa: "限定デジタルアーティファクト、コレクターバッジまたは秘匿特典。",
                descPt: "Artefato digital exclusivo, emblema colecionável ou prompt secreto."
            },
            // 9. 1 видео
            {
                icon: "🎬",
                qty: "1",
                ru: "1 видео",
                en: "1 Video",
                kk: "1 бейне",
                zh: "1 个视频",
                es: "1 Vídeo",
                de: "1 Video",
                fr: "1 Vidéo",
                ar: "فيديو واحد",
                ja: "1本の動画",
                pt: "1 Vídeo",
                shortRu: "1 Видео (Трейлер)",
                shortEn: "1 Video (Trailer)",
                shortKk: "1 Бейне (Тизер)",
                shortZh: "1 个视频 (预告片)",
                shortEs: "1 Vídeo (Tráiler)",
                shortDe: "1 Video (Trailer)",
                shortFr: "1 Vidéo (Teaser)",
                shortAr: "فيديو واحد (تشويقي)",
                shortJa: "1動画 (予告編)",
                shortPt: "1 Vídeo (Trailer)",
                descRu: "Кинематографический тизер для трейлера вашей книги.",
                descEn: "Cinematic trailer generation for your book presentation.",
                descKk: "Кітабыңыздың тұсаукесеріне арналған киноматографиялық тизер.",
                descZh: "为您的作品打造身临其境的 1080p 概念预告片。",
                descEs: "Tráiler cinemático para la presentación de su obra.",
                descDe: "Kinoreifer Buch-Teasertrailer in Full-HD.",
                descFr: "Bande-annonce cinématique pour la présentation du livre.",
                descAr: "إعلان تشويقي سينمائي عالي الدقة لعرض كتابك.",
                descJa: "書籍のプロモーション用シネマティック予告編の生成。",
                descPt: "Teaser cinematográfico para o trailer do seu livro."
            },
            // 10. Общение с ИИ-персонажем
            {
                icon: "🧠",
                qty: "Chat",
                ru: "Общение с ИИ-персонажем",
                en: "AI Character Dialogue",
                kk: "ЖИ-кейіпкермен сөйлесу",
                zh: "与 AI 角色对话",
                es: "Charla con personaje IA",
                de: "Dialog mit KI-Figur",
                fr: "Dialogue avec personnage IA",
                ar: "المحادثة مع شخصية ذكية",
                ja: "AIキャラクター対話",
                pt: "Conversa com personagem IA",
                shortRu: "ИИ-персонаж (Диалог)",
                shortEn: "AI Character Chat",
                shortKk: "ЖИ-кейіпкер (Сұхбат)",
                shortZh: "AI角色交互",
                shortEs: "Personaje IA",
                shortDe: "KI-Charakter-Chat",
                shortFr: "Dialogue IA",
                shortAr: "حوار الشخصية",
                shortJa: "AIキャラ対話",
                shortPt: "Personagem IA",
                descRu: "Прямой живой интерактивный диалог с героями произведений.",
                descEn: "Direct interactive conversations with living book personas.",
                descKk: "Кітап кейіпкерлерімен тікелей интерактивті сұхбат.",
                descZh: "突破第四面墙，与书中塑造的英雄与反派实时交谈。",
                descEs: "Conversaciones directas e interactivas con héroes de ficción.",
                descDe: "Direkter interaktiver Austausch mit lebendigen Buchfiguren.",
                descFr: "Échange immersif direct avec les protagonistes de vos récits.",
                descAr: "حوار تفاعلي مباشر مع أبطال وشخصيات الروايات.",
                descJa: "物語の登場人物と直接会話できる没入型チャット体験。",
                descPt: "Diálogo interativo e imersivo com os protagonistas das obras."
            },
            // 11. 20 исправлений текста
            {
                icon: "✍️",
                qty: "20",
                ru: "20 исправлений текста",
                en: "20 Text Revisions",
                kk: "20 мәтіндік түзету",
                zh: "20 次文本修正",
                es: "20 Correcciones de texto",
                de: "20 Textkorrekturen",
                fr: "20 Corrections de texte",
                ar: "20 تصحيحاً للنص",
                ja: "20回のテキスト校正",
                pt: "20 Correções de texto",
                shortRu: "20 правок текста",
                shortEn: "20 Text Revisions",
                shortKk: "20 мәтін түзету",
                shortZh: "20次文本精修",
                shortEs: "20 correcciones",
                shortDe: "20 Korrekturen",
                shortFr: "20 corrections",
                shortAr: "20 تصحيحاً",
                shortJa: "20回校正",
                shortPt: "20 correções",
                descRu: "Улучшение стилистики, исправление опечаток и пунктуации.",
                descEn: "Style refinement, spelling corrections, and rhythmic polishing.",
                descKk: "Стильді жақсарту, емле мен тыныс белгілерін түзету.",
                descZh: "修辞打磨、语法订正与行文节奏智能增强。",
                descEs: "Mejora de estilo, corrección gramatical y refinamiento métrico.",
                descDe: "Stilverfeinerung, Rechtschreibkorrektur und rhythmischer Feinschliff.",
                descFr: "Amélioration du style, correction typographique et syntaxique.",
                descAr: "صقل الأسلوب اللغوي وتصحيح الأخطاء الإملائية والإيقاع السردي.",
                descJa: "文体推敲、誤字脱字の修正、表現リズムの最適化。",
                descPt: "Aprimoramento de estilo, correção gramatical e ritmo textual."
            },
            // 12. 40 сообщений ИИ-архитектору
            {
                icon: "🏛️",
                qty: "40",
                ru: "40 сообщений ИИ-архитектору",
                en: "40 Messages for AI Architect",
                kk: "ЖИ-сәулетшіге 40 хабарлама",
                zh: "40 条 AI 架构师咨询",
                es: "40 Mensajes al Arquitecto IA",
                de: "40 Nachrichten an den KI-Architekten",
                fr: "40 Messages pour l'Architecte IA",
                ar: "40 رسالة لمهندس الذكاء الاصطناعي",
                ja: "AIアーキテクトに40通",
                pt: "40 Mensagens para Arquiteto IA",
                shortRu: "40 сообщ. архитектору",
                shortEn: "40 Architect msgs",
                shortKk: "Сәулетшіге 40 хабар",
                shortZh: "40条架构师咨询",
                shortEs: "40 msgs arquitecto",
                shortDe: "40 Architekten-Msgs",
                shortFr: "40 msgs architecte",
                shortAr: "40 رسالة للمهندس",
                shortJa: "アーキテクト40通",
                shortPt: "40 msgs arquiteto",
                descRu: "Генерация сюжетных поворотов, кульминаций и систем магии.",
                descEn: "Brainstorming plot twists, climax beats, and magic system mechanics.",
                descKk: "Сюжеттік бұрылыстар, кульминациялар және сиқыр жүйесін құру.",
                descZh: "打磨高潮转折、力量体系设定与复杂多线叙事架构。",
                descEs: "Diseño de giros narrativos, clímax y sistemas de magia.",
                descDe: "Plot-Twists konzipieren, Höhepunkte und Magiesysteme ausarbeiten.",
                descFr: "Création de rebondissements, points culminants et systèmes de magie.",
                descAr: "ابتكار الحبكات المفاجئة والذروات الدرامية وقواعد السحر.",
                descJa: "どんでん返し、クライマックス、魔法体系の構築相談。",
                descPt: "Brainstorming de reviravoltas, clímax e sistemas mágicos."
            },
            // 13. 2 использования ИИ-картографа
            {
                icon: "🗺️",
                qty: "2",
                ru: "2 использования ИИ-картографа",
                en: "2 Uses of AI Cartographer",
                kk: "ЖИ-картографты 2 рет қолдану",
                zh: "2 次 AI 地图测绘调用",
                es: "2 Usos del Cartógrafo IA",
                de: "2 Nutzungen des KI-Kartografen",
                fr: "2 Utilisations du Cartographe IA",
                ar: "مرتان لاستخدام رسام الخرائط",
                ja: "AI地図製作者2回利用",
                pt: "2 Usos do Cartógrafo IA",
                shortRu: "Картограф: 2 карты",
                shortEn: "Cartographer: 2x",
                shortKk: "Картограф: 2 карта",
                shortZh: "地图绘制: 2次",
                shortEs: "Cartógrafo: 2x",
                shortDe: "Kartograf: 2x",
                shortFr: "Cartographe : 2x",
                shortAr: "الخرائط: مرتان",
                shortJa: "地図作成: 2回",
                shortPt: "Cartógrafo: 2x",
                descRu: "Генерация подробных карт материков, городов или подземелий.",
                descEn: "Algorithmic generation of continents, citadel layouts, or dungeon grids.",
                descKk: "Құрлықтар, қалалар немесе лабиринттердің егжей-тегжейлі карталары.",
                descZh: "一键生成奇幻大陆版图、帝国要塞与迷宫高精度地图。",
                descEs: "Generación de mapas de continentes, ciudadelas y mazmorras.",
                descDe: "Generierung von Kontinentkarten, Stadtplänen und Verliesen.",
                descFr: "Génération de cartes de continents, forteresses et donjons.",
                descAr: "توليد خرائط للقارات والمدن الخيالية والحصون والمتاهات.",
                descJa: "ファンタジー大陸、要塞都市、迷宮の詳細マップ自動描画。",
                descPt: "Geração de mapas de continentes, ciudadelas e masmorras."
            },
            // 14. Психолог лора: 2 использования. Говорит насколько какому типу людей здесь будет смешно/страшно
            {
                icon: "🎭",
                qty: "2",
                ru: "Психолог лора: 2 использования. Говорит насколько какому типу людей здесь будет смешно/страшно",
                en: "Lore Psychologist: 2 uses. Details how funny/scary scenes will be to specific reader types",
                kk: "Лор психологы: 2 қолдану. Қай санаттағы адамдарға күлкілі немесе қорқынышты болатынын айтады",
                zh: "世界观心理学家：2 次使用。预判各类型读者觉得何处搞笑/惊悚",
                es: "Psicólogo de lore: 2 usos. Indica qué tan cómico/aterrador será según el perfil de lector",
                de: "Lore-Psychologe: 2 Nutzungen. Sagt, wie lustig/gruselig es für welche Lesertypen ist",
                fr: "Psychologue du lore : 2 usages. Indique le niveau d'humour ou de peur selon le profil",
                ar: "أخصائي نفس القصة: مرتان. يوضح مدى الضحك أو الخوف بحسب نمط القراء",
                ja: "世界観心理学者：2回利用。読者タイプ別の笑いと恐怖の反応度を判定",
                pt: "Psicólogo de lore: 2 usos. Informa o quanto será cômico/assustador para cada perfil",
                shortRu: "Психолог лора: 2x",
                shortEn: "Lore Psychologist: 2x",
                shortKk: "Лор психологы: 2x",
                shortZh: "心理学分析: 2次",
                shortEs: "Psicólogo lore: 2x",
                shortDe: "Lore-Psychologe: 2x",
                shortFr: "Psychologue lore: 2x",
                shortAr: "أخصائي القصة: 2x",
                shortJa: "心理判定: 2回",
                shortPt: "Psicólogo lore: 2x",
                descRu: "Говорит насколько какому типу людей здесь будет смешно/страшно.",
                descEn: "Emotional spectrum analysis: archetype reader reactions to suspense, humor, and grief.",
                descKk: "Эмоциялық спектрлік талдау: юмор мен қорқынышқа оқырмандар реакциясы.",
                descZh: "情感共鸣全息图：深度预测幽默、惊悚与悲剧在各类人格原型读者中的心理刺激度。",
                descEs: "Análisis espectral de emociones: predicción de impacto en humor y terror.",
                descDe: "Emotionale Spektralanalyse: Reaktionen von Leserarchtypen auf Humor und Suspense.",
                descFr: "Analyse du spectre émotionnel : prédiction des réactions au rire et à l'angoisse.",
                descAr: "تحليل الطيف العاطفي: قياس ردود أفعال أنماط القراء المختلفة تجاه الإثارة والكوميديا.",
                descJa: "感情スペクトル分析：読者層別の恐怖・笑い・サスペンスへの心理的共鳴度を予測。",
                descPt: "Análise do espectro emocional: reação dos arquétipos de leitores a humor e suspense."
            },
            // 15. ИИ возрастной: 1 использование. Предлагает поставить возрастной рейтинг и объясняет причины. «Пожалуйста, финальное слово должно остаться за вами»
            {
                icon: "🔞",
                qty: "1",
                ru: 'ИИ возрастной: 1 использование. Предлагает поставить возрастной рейтинг и объясняет причины. «Пожалуйста, финальное слово должно остаться за вами»',
                en: 'Age Rating AI: 1 use. Recommends age rating and explains rationale. "Please, the final word must remain with you"',
                kk: 'Жас мөлшері ЖИ: 1 қолдану. Жас шектеуін ұсынып себептерін түсіндіреді. «Өтінеміз, соңғы шешім сіздің еншіңізде қалуы тиіс»',
                zh: 'AI 年龄分级：1 次使用。建议作品分级并详述理由：“请注意，最终决定权务必由您定夺”',
                es: 'IA de edad: 1 uso. Sugiere clasificación por edad y explica razones. "Por favor, la última palabra debe ser suya"',
                de: 'Altersfreigabe-KI: 1 Nutzung. Schlägt Alterseinstufung vor und begründet sie. „Bitte beachten Sie: Das letzte Wort liegt bei Ihnen“',
                fr: 'IA de classification d\'âge : 1 usage. Propose la classification et explique les raisons. « S\'il vous plaît, le mot de la fin doit vous revenir »',
                ar: 'ذكاء التصنيف العمري: استخدام 1. يقترح التصنيف العمري ويوضح الأسباب. "يرجى العلم، الكلمة الأخيرة يجب أن تبقى لك دائماً"',
                ja: 'AI年齢判定：1回利用。レーティング推奨と理由を明示。「どうか、最終決定権はあなた自身にあります」',
                pt: 'IA de idade: 1 uso. Sugiere classificação etária e explica motivos. "Por favor, a palavra final deve ser sempre sua"',
                shortRu: "Возрастной рейтинг: 1x",
                shortEn: "Age Rating AI: 1x",
                shortKk: "Жас рейтингі: 1x",
                shortZh: "年龄分级: 1次",
                shortEs: "Rating edad: 1x",
                shortDe: "Altersfreigabe: 1x",
                shortFr: "Âge légal : 1x",
                shortAr: "التصنيف العمري: 1x",
                shortJa: "年齢制限判定: 1回",
                shortPt: "Classif. etária: 1x",
                descRu: 'Предлагает поставить возрастной рейтинг и объясняет причины. «Пожалуйста, финальное слово должно остаться за вами».',
                descEn: 'Recommends age rating and explains rationale. "Please, the final word must remain with you".',
                descKk: 'Жас шектеуін ұсынып себептерін түсіндіреді. «Өтінеміз, соңғы шешім сіздің еншіңізде қалуы тиіс».',
                descZh: '根据敏感内容提出合规评级建议与详细解释：“请注意，最终决定权务必由您定夺”。',
                descEs: 'Sugiere clasificación y detalla motivos. "Por favor, la última palabra debe ser suya".',
                descDe: 'Schlägt Freigabe vor und begründet sie. „Bitte beachten Sie: Das letzte Wort liegt bei Ihnen“.',
                descFr: 'Recommande une classification et fournit les motifs. « S\'il vous plaît, le mot de la fin doit vous revenir ».',
                descAr: 'يقترح التصنيف ويوضح الأسباب بدقة. "يرجى العلم، الكلمة الأخيرة يجب أن تبقى لك".',
                descJa: '倫理的根拠を添えて推奨区分を提示。「どうか、最終決定権はあなた自身にあります」。',
                descPt: 'Sugere classificação e detalha motivos. "Por favor, a palavra final deve ser sempre sua".'
            }
        ]
    },

    // -------------------------------------------------------------------------
    // Tier 2: Standard (REPLACED — user-specified exact 20 features, $14.99)
    // -------------------------------------------------------------------------
    {
        id: "tier_2_standard",
        index: 2,
        usdPrice: 14.99,
        badge: "TIER 02 \u2022 STANDARD",
        nameEn: "Standard",
        nameRu: "\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439",
        nameKk: "\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0442\u044b",
        nameZh: "\u6807\u51c6\u7248",
        nameEs: "Est\u00e1ndar",
        nameDe: "Standard",
        nameFr: "Standard",
        nameAr: "\u0627\u0644\u0645\u0639\u064a\u0627\u0631\u064a",
        nameJa: "\u30b9\u30bf\u30f3\u30c0\u30fc\u30c9",
        namePt: "Padr\u00e3o",
        nameHi: "\u092e\u093e\u0928\u0915",
        nameTr: "Standart",
        namePl: "Standardowy",
        taglineEn: "Serious tools for the dedicated writer",
        taglineRu: "\u0421\u0435\u0440\u044c\u0451\u0437\u043d\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0446\u0435\u043b\u0435\u0443\u0441\u0442\u0440\u0435\u043c\u043b\u0451\u043d\u043d\u043e\u0433\u043e \u0430\u0432\u0442\u043e\u0440\u0430",
        isPopular: false,
        features: [
            {
                icon: "\ud83c\udfac", qty: "2",
                en: "2 Videos", ru: "2 \u0432\u0438\u0434\u0435\u043e",
                kk: "2 \u0431\u0435\u0439\u043d\u0435", zh: "2 \u89c6\u9891", es: "2 V\u00eddeos", de: "2 Videos",
                fr: "2 Vid\u00e9os", ar: "2 \u0645\u0642\u0430\u0442\u0435\u0639", ja: "2\u52d5\u753b", pt: "2 V\u00eddeos",
                shortEn: "2 Videos", shortRu: "2 \u0432\u0438\u0434\u0435\u043e",
                descEn: "Generate 2 AI cinematic videos per month.",
                descRu: "\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f 2 \u043a\u0438\u043d\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0432\u0438\u0434\u0435\u043e \u0432 \u043c\u0435\u0441\u044f\u0446."
            },
            {
                icon: "\ud83d\uddbc\ufe0f", qty: "7",
                en: "7 Images", ru: "7 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a",
                kk: "7 \u0441\u0443\u0440\u0435\u0442", zh: "7 \u56fe\u7247", es: "7 Im\u00e1genes", de: "7 Bilder",
                fr: "7 Images", ar: "7 \u0635\u0648\u0631", ja: "7\u679a\u306e\u753b\u50cf", pt: "7 Imagens",
                shortEn: "7 Images", shortRu: "7 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a",
                descEn: "7 AI-generated high-quality illustrations.",
                descRu: "7 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u0439 \u0432\u044b\u0441\u043e\u043a\u043e\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430."
            },
            {
                icon: "\ud83e\udde0", qty: "\u2713",
                en: "AI Deep Thinking", ru: "\u0423\u0433\u043b\u0443\u0431\u043b\u0451\u043d\u043d\u043e\u0435 \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u0435 \u0418\u0418",
                kk: "\u0416\u0430\u0441\u0430\u043d\u0434\u044b \u0422\u0416", zh: "AI\u6df1\u5ea6\u601d\u8003", es: "Pensamiento Profundo IA",
                de: "KI-Tiefendenken", fr: "Pens\u00e9e Profonde IA", ar: "\u062a\u0641\u0643\u064a\u0440 \u0639\u0645\u064a\u0642 \u0644\u0644\u0630\u0643\u0627\u0621",
                ja: "AI\u6df1\u5c64\u601d\u8003", pt: "Pensamento Profundo IA",
                shortEn: "Deep Thinking", shortRu: "\u0413\u043b\u0443\u0431\u043e\u043a\u043e\u0435 \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u0435",
                descEn: "Extended AI reasoning with enhanced context for complex narratives.",
                descRu: "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u043e\u0435 \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435 \u0418\u0418 \u0441 \u0443\u0433\u043b\u0443\u0431\u043b\u0451\u043d\u043d\u044b\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043e\u043c."
            },
            {
                icon: "\ud83d\udcdc", qty: "30",
                en: "30 Synopses", ru: "30 \u0441\u0438\u043d\u043e\u043f\u0441\u0438\u0441\u043e\u0432",
                kk: "30 \u0441\u0438\u043d\u043e\u043f\u0441\u0438\u0441", zh: "30 \u5c0f\u8bcd\u5927\u7eb2", es: "30 Sin\u00f3psis",
                de: "30 Synopsen", fr: "30 Synopsis", ar: "30 \u0645\u0644\u062e\u0635\u064b\u0627",
                ja: "30\u306e\u30b7\u30ce\u30d7\u30b7\u30b9", pt: "30 Sin\u00f3pses",
                shortEn: "30 Synopses", shortRu: "30 \u0441\u0438\u043d\u043e\u043f\u0441\u0438\u0441\u043e\u0432",
                descEn: "30 AI-generated plot synopses per month.",
                descRu: "30 \u0441\u0438\u043d\u043e\u043f\u0441\u0438\u0441\u043e\u0432 \u0441\u044e\u0436\u0435\u0442\u043e\u0432 \u0432 \u043c\u0435\u0441\u044f\u0446."
            },
            {
                icon: "\ud83d\udcd6", qty: "20",
                en: "20 Chapters", ru: "20 \u0433\u043b\u0430\u0432",
                kk: "20 \u0442\u0430\u0440\u0430\u0443", zh: "20 \u7ae0\u8282", es: "20 Cap\u00edtulos",
                de: "20 Kapitel", fr: "20 Chapitres", ar: "20 \u0641\u0635\u0644\u0627\u064b",
                ja: "20\u7ae0", pt: "20 Cap\u00edtulos",
                shortEn: "20 Chapters", shortRu: "20 \u0433\u043b\u0430\u0432",
                descEn: "Up to 20 AI-assisted chapter drafts.",
                descRu: "\u0414\u043e 20 \u0447\u0435\u0440\u043d\u043e\u0432\u0438\u043a\u043e\u0432 \u0433\u043b\u0430\u0432 \u0441 ИИ."
            },
            {
                icon: "\u270d\ufe0f", qty: "40",
                en: "40 Text Corrections", ru: "40 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0439 \u0442\u0435\u043a\u0441\u0442\u0430",
                kk: "40 \u043c\u04d9\u0442\u0456\u043d \u0442\u04af\u0437\u0435\u0442\u0443", zh: "40\u6b21\u6587\u672c\u4fee\u6539",
                es: "40 correcciones de texto", de: "40 Textkorrekturen",
                fr: "40 corrections de texte", ar: "40 \u062a\u0635\u062d\u064a\u062d\u064b\u0627 \u0646\u0635\u064a\u064b\u0627",
                ja: "40\u56de\u306e\u6587\u7ae0\u4fee\u6b63", pt: "40 corre\u00e7\u00f5es de texto",
                shortEn: "40 Corrections", shortRu: "40 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0439",
                descEn: "40 AI-powered text edits and style corrections.",
                descRu: "40 \u0440\u0435\u0434\u0430\u043a\u0442\u0443\u0440\u0441\u043a\u0438\u0445 \u043f\u0440\u0430\u0432\u043e\u043a \u0438 \u0441\u0442\u0438\u043b\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0439."
            },
            {
                icon: "\ud83e\ude99", qty: "80",
                en: "Linar Tokens: 80 pcs. Burn 80/month (or to zero).", ru: "\u041b\u0438\u043d\u0430\u0440 \u0422\u043e\u043a\u0435\u043d\u044b: 80 \u0448\u0442. \u0421\u0433\u043e\u0440\u0430\u044e\u0442 80 \u0432 \u043c\u0435\u0441\u044f\u0446 (\u0438\u043b\u0438 \u0434\u043e \u043d\u0443\u043b\u044f).",
                kk: "80 \u0442\u043e\u043a\u0435\u043d", zh: "80 \u4ee3\u5e01", es: "80 Tokens",
                de: "80 Tokens", fr: "80 Jetons", ar: "80 \u0631\u0645\u0632\u064b\u0627",
                ja: "80\u30c8\u30fc\u30af\u30f3", pt: "80 Tokens",
                shortEn: "80 Tokens", shortRu: "80 \u0422\u043e\u043a\u0435\u043d\u043e\u0432",
                descEn: "80 Linar Tokens monthly. Burn to zero if less than 80 remain.",
                descRu: "80 \u0422\u043e\u043a\u0435\u043d\u043e\u0432 \u0432 \u043c\u0435\u0441\u044f\u0446. \u0421\u0433\u043e\u0440\u0430\u044e\u0442 80 (\u0435\u0441\u043b\u0438 \u043c\u0435\u043d\u044c\u0448\u0435 — \u0434\u043e \u043d\u0443\u043b\u044f)."
            },
            {
                icon: "\u23f3", qty: "4",
                en: "Future Plot Slots: 4", ru: "\u0421\u044e\u0436\u0435\u0442\u044b \u043d\u0430 \u0431\u0443\u0434\u0443\u0449\u0435\u0435: \u0441\u043b\u043e\u0442 4",
                kk: "4 \u0441\u043b\u043e\u0442", zh: "4\u4e2a\u5267\u60c5\u80f6\u56ca", es: "Tramas futuras: 4 ranuras",
                de: "Zukunftsplots: 4 Slots", fr: "Trames futures: 4 emplacements",
                ar: "\u0642\u0635\u0635 \u0645\u0633\u062a\u0642\u0628\u0644\u064a\u0629: 4 \u0641\u062a\u062d\u0627\u062a",
                ja: "\u672a\u6765\u306e\u30d7\u30ed\u30c3\u30c8: 4\u30b9\u30ed\u30c3\u30c8", pt: "Enredos futuros: 4 vagas",
                shortEn: "4 Plot Slots", shortRu: "4 \u0441\u043b\u043e\u0442\u0430 \u0441\u044e\u0436\u0435\u0442\u043e\u0432",
                descEn: "Save 4 future story plots in the Time Capsule.",
                descRu: "4 \u0441\u043b\u043e\u0442\u0430 \u0434\u043b\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0441\u044e\u0436\u0435\u0442\u043e\u0432 \u0432 \u041a\u0430\u043f\u0441\u0443\u043b\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438."
            },
            {
                icon: "\ud83d\udd75\ufe0f", qty: "5",
                en: "Trend Spy: 5 reports", ru: "\u0428\u043f\u0438\u043e\u043d \u0442\u0440\u0435\u043d\u0434\u043e\u0432: 5 \u043e\u0442\u0447\u0451\u0442\u043e\u0432",
                kk: "5 \u0435\u0441\u0435\u043f", zh: "5\u4e2a\u8d8b\u52bf\u62a5\u544a", es: "Esp\u00eda de tendencias: 5 informes",
                de: "Trend-Spy: 5 Berichte", fr: "Espion de tendances: 5 rapports",
                ar: "\u062c\u0627\u0633\u0648\u0633 \u0627\u0644\u0627\u062a\u062c\u0627\u0647\u0627\u062a: 5 \u062a\u0642\u0627\u0631\u064a\u0631",
                ja: "\u30c8\u30ec\u30f3\u30c9\u30b9\u30d1\u30a4: 5\u30ec\u30dd\u30fc\u30c8", pt: "Espiao de Tend\u00eancias: 5 relat\u00f3rios",
                shortEn: "5 Trend Reports", shortRu: "5 \u043e\u0442\u0447\u0451\u0442\u043e\u0432 \u0448\u043f\u0438\u043e\u043d\u0430",
                descEn: "5 AI market trend analysis reports per month.",
                descRu: "5 \u043e\u0442\u0447\u0451\u0442\u043e\u0432 \u0418\u0418-\u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0440\u044b\u043d\u043e\u0447\u043d\u044b\u0445 \u0442\u0440\u0435\u043d\u0434\u043e\u0432 \u0432 \u043c\u0435\u0441\u044f\u0446."
            },
            {
                icon: "\ud83c\udff7\ufe0f", qty: "10",
                en: "Name Generator: 10", ru: "\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0438\u043c\u0451\u043d: 10",
                kk: "10 \u0435\u0441\u0456\u043c", zh: "10\u4e2a\u540d\u5b57", es: "Generador de nombres: 10",
                de: "Namensgenerator: 10", fr: "G\u00e9n\u00e9rateur de noms: 10",
                ar: "\u0645\u0648\u0644\u062f \u0627\u0644\u0623\u0633\u0645\u0627\u0621: 10",
                ja: "\u540d\u524d\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc: 10", pt: "Gerador de nomes: 10",
                shortEn: "10 Names", shortRu: "10 \u0438\u043c\u0451\u043d",
                descEn: "Generate 10 unique character names per month.",
                descRu: "10 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u043c\u0451\u043d \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0435\u0439 \u0432 \u043c\u0435\u0441\u044f\u0446."
            },
            {
                icon: "\ud83c\udfa4", qty: "4",
                en: "AI Voice: 4 choices, change 2 times", ru: "\u0413\u043e\u043b\u043e\u0441 \u0418\u0418: 4, \u043c\u0435\u043d\u044f\u0442\u044c 2 \u0440\u0430\u0437\u0430",
                kk: "\u0414\u0430\u0443\u044b\u0441 \u0436\u0430\u0441\u0430\u043d\u0434\u044b\u049b\u0442\u0430\u0440: 4", zh: "AI\u58f0\u97f3: 4\u9009, \u66f4\u62162\u6b21",
                es: "Voz IA: 4, cambiar 2 veces", de: "KI-Stimme: 4, 2 \u00c4nderungen",
                fr: "Voix IA: 4, changer 2 fois", ar: "\u0635\u0648\u062a \u0627\u0644\u0630\u0643\u0627\u0621: 4, \u0627\u0644\u062a\u063a\u064a\u064a\u0631 \u0645\u0631\u062a\u064a\u0646",
                ja: "AI\u97f3\u58f0: 4\u9078, 2\u56de\u5909\u66f4\u53ef", pt: "Voz IA: 4, alterar 2 vezes",
                shortEn: "4 Voices / 2x", shortRu: "4 \u0433\u043e\u043b\u043e\u0441\u0430 / 2\u0440 \u0441\u043c.",
                descEn: "Choose from 4 AI voices, change your selection up to 2 times.",
                descRu: "4 \u0433\u043e\u043b\u043e\u0441\u0430 \u0418\u0418 \u043d\u0430 \u0432\u044b\u0431\u043e\u0440, \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043c\u0435\u043d\u044f\u0442\u044c 2 \u0440\u0430\u0437\u0430."
            },
            {
                icon: "\ud83c\udfc6", qty: "\u2713",
                en: "Status: \"Craftsman\"", ru: "\u0421\u0442\u0430\u0442\u0443\u0441: \u00ab\u0423\u043c\u0435\u043b\u0435\u0446\u00bb",
                kk: "\u041c\u04d9\u0440\u0442\u0435\u0431\u0435: \u00ab\u0428\u0435\u0431\u0435\u0440\u00bb", zh: "\u5730\u4f4d: \u300c\u5de5\u5320\u300d",
                es: "Estado: \u00abArtesano\u00bb", de: "Status: \u00bbHandwerker\u00ab",
                fr: "Statut: \u00abArtisan\u00bb", ar: "\u062d\u0627\u0644\u0629: \u00ab\u062d\u0631\u0641\u064a\u00bb",
                ja: "\u30b9\u30c6\u30fc\u30bf\u30b9: \u300c\u8077\u4eba\u300d", pt: "Status: \u00abArtif\u00edce\u00bb",
                shortEn: "Craftsman", shortRu: "\u0423\u043c\u0435\u043b\u0435\u0446",
                descEn: "Unlock the exclusive \"Craftsman\" community badge.",
                descRu: "\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0439\u0442\u0435 \u044d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432\u043d\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u00ab\u0423\u043c\u0435\u043b\u0435\u0446\u00bb."
            },
            {
                icon: "\ud83d\udcdc", qty: "4",
                en: "Lore Expert: 4 uses", ru: "\u042d\u043a\u0441\u043f\u0435\u0440\u0442 \u043b\u043e\u0440\u0430: 4 \u0448\u0442.",
                kk: "4 \u0440\u0435\u0442", zh: "4\u6b21\u8a18\u5f55\u4f7f\u7528", es: "Experto en Lore: 4 usos",
                de: "Lore-Experte: 4 Nutzungen", fr: "Expert du Lore: 4 utilisations",
                ar: "\u062e\u0628\u064a\u0631 \u0627\u0644\u0644\u0648\u0631: 4 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0627\u062a",
                ja: "\u30ed\u30a2\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8: 4\u56de", pt: "Especialista em Lore: 4 usos",
                shortEn: "4x Lore Expert", shortRu: "4 \u042d\u043a\u0441\u043f\u0435\u0440\u0442 \u043b\u043e\u0440\u0430",
                descEn: "Lore Expert detects inconsistencies and narrates world history. 4 uses/month.",
                descRu: "\u042d\u043a\u0441\u043f\u0435\u0440\u0442 \u043b\u043e\u0440\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442 \u043d\u0435\u0441\u0442\u044b\u043a\u043e\u0432\u043a\u0438 \u0438 \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0438\u0441\u0442\u043e\u0440\u0438\u044e. 4 \u0440\u0430\u0437\u0430 \u0432 \u043c\u0435\u0441\u044f\u0446."
            },
            {
                icon: "\ud83c\udf81", qty: "2",
                en: "2 Secret Gifts", ru: "2 \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0445 \u043f\u043e\u0434\u0430\u0440\u043a\u0430",
                kk: "2 \u0436\u0430\u0441\u044b\u0440\u044b\u043d \u0441\u044b\u0439", zh: "2\u4e2a\u795e\u79d8\u793c\u7269",
                es: "2 regalos secretos", de: "2 Geheimnisvolle Geschenke",
                fr: "2 cadeaux secrets", ar: "2 \u0647\u062f\u0627\u064a\u0627 \u0633\u0631\u064a\u0629",
                ja: "2\u3064\u306e\u79d8\u5bc6\u306e\u8d08\u308a\u7269", pt: "2 presentes secretos",
                shortEn: "2 Secret Gifts", shortRu: "2 \u043f\u043e\u0434\u0430\u0440\u043a\u0430",
                descEn: "Two mystery rewards delivered monthly.",
                descRu: "\u0414\u0432\u0430 \u0437\u0430\u0433\u0430\u0434\u043e\u0447\u043d\u044b\u0445 \u0432\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u044f \u0435\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u043e."
            },
            {
                icon: "\ud83e\udde0", qty: "\u2713",
                en: "Deep AI Character Dialogue", ru: "\u0423\u0433\u043b\u0443\u0431\u043b\u0451\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440 \u0441 \u0418\u0418-\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0435\u043c",
                kk: "\u0422\u0435\u0440\u0435\u04a3 \u0436\u0430\u0441\u0430\u043d\u0434\u044b\u049b\u0442\u0430\u0440", zh: "\u6df1\u5ea6AI\u89d2\u8272\u5bf9\u8bdd",
                es: "Di\u00e1logo profundo IA", de: "Tiefes KI-Charakterdialog",
                fr: "Dialogue profond IA", ar: "\u062d\u0648\u0627\u0631 \u0639\u0645\u064a\u0642 \u0645\u0639 \u0634\u062e\u0635\u064a\u0629 \u0627\u0644\u0630\u0643\u0627\u0621",
                ja: "\u6df1\u5c64AI\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u5bfe\u8a71", pt: "Di\u00e1logo profundo IA",
                shortEn: "Deep AI Chat", shortRu: "\u0413\u043b\u0443\u0431\u043e\u043a\u0438\u0439 \u0447\u0430\u0442",
                descEn: "Extended memory AI conversation with your characters.",
                descRu: "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440 \u0441 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0435\u043c \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u044c\u044e."
            },
            {
                icon: "\ud83c\udfd9\ufe0f", qty: "60",
                en: "60 AI Architect Messages", ru: "60 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u0418\u0418-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440\u0443",
                kk: "60 \u0445\u0430\u0431\u0430\u0440", zh: "60\u6761\u5efa\u7b51\u5e08\u6d88\u606f", es: "60 mensajes al Arquitecto IA",
                de: "60 KI-Architekt-Nachrichten", fr: "60 messages Architecte IA",
                ar: "60 \u0631\u0633\u0627\u0644\u0629 \u0644\u0644\u0645\u0639\u0645\u0627\u0631 \u0627\u0644\u0630\u0643\u0627\u0621",
                ja: "AI\u30a2\u30fc\u30ad\u30c6\u30af\u30c8\u306b60\u30e1\u30c3\u30bb\u30fc\u30b8", pt: "60 mensagens ao Arquiteto IA",
                shortEn: "60 Architect", shortRu: "60 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440",
                descEn: "60 messages to the AI world architect per month.",
                descRu: "60 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u0418\u0418-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440\u0443 \u043c\u0438\u0440\u0430 \u0432 \u043c\u0435\u0441\u044f\u0446."
            },
            {
                icon: "\ud83d\udd1e", qty: "3",
                en: "Age Restrictor: 3 uses. Please, the last word must be yours.", ru: "\u0412\u043e\u0437\u0440\u0430\u0441\u0442\u043d\u043e\u0439 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u0435\u043b\u044c: 3. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0441\u043b\u043e\u0432\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u043e\u0441\u0442\u0430\u0442\u044c\u0441\u044f \u0437\u0430 \u0432\u0430\u043c\u0438.",
                kk: "3 \u043f\u0430\u0439\u0434\u0430\u043b\u0430\u043d\u0443", zh: "3\u6b21\u5e74\u9f84\u9650\u5236",
                es: "Restrictor de edad: 3. Por favor, la \u00faltima palabra debe ser suya.",
                de: "Altersfreigabe: 3. Bitte, das letzte Wort soll bei Ihnen bleiben.",
                fr: "Restriction d'\u00e2ge: 3. S'il vous pla\u00eet, le dernier mot doit vous revenir.",
                ar: "3 \u0645\u0631\u0627\u062a \u0644\u062a\u0635\u0646\u064a\u0641 \u0627\u0644\u0639\u0645\u0631. \u0645\u0646 \u0641\u0636\u0644\u0643, \u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u0623\u062e\u064a\u0631\u0629 \u0644\u0643.",
                ja: "3\u56de\u306e\u5e74\u9f62\u5236\u9650. \u6700\u7d42\u5224\u65ad\u306f\u3042\u306a\u305f\u306b\u59d4\u306d\u307e\u3059.",
                pt: "Restritor de idade: 3. Por favor, a palavra final \u00e9 sempre sua.",
                shortEn: "3x Age Guard", shortRu: "3 \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u043d\u043e\u0439",
                descEn: "Age-gating advisor. Suggests ratings with reasons. Please, the last word must be yours.",
                descRu: "\u041f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u043d\u043e\u0439 \u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u0438 \u043e\u0431\u044a\u044f\u0441\u043d\u044f\u0435\u0442 \u043f\u0440\u0438\u0447\u0438\u043d\u044b. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0441\u043b\u043e\u0432\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u043e\u0441\u0442\u0430\u0442\u044c\u0441\u044f \u0437\u0430 \u0432\u0430\u043c\u0438."
            },
            {
                icon: "\ud83d\udcdc", qty: "4",
                en: "AI Lore: 4 uses", ru: "\u0418\u0418-\u043b\u043e\u0440: 4 \u0448\u0442.",
                kk: "4 \u0440\u0435\u0442", zh: "4\u6b21AI\u4e16\u754c\u89c2", es: "IA-Lore: 4 usos",
                de: "KI-Lore: 4 Nutzungen", fr: "IA-Lore: 4 utilisations",
                ar: "4 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0627\u062a \u0644\u0648\u0631", ja: "AI\u30ed\u30a2: 4\u56de",
                pt: "IA-Lore: 4 usos",
                shortEn: "4x AI Lore", shortRu: "4 \u0418\u0418-\u043b\u043e\u0440",
                descEn: "Use AI Lore to build world mythology and history. 4 uses/month.",
                descRu: "\u0418\u0418-\u043b\u043e\u0440 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0438\u0444\u043e\u043b\u043e\u0433\u0438\u0438 \u0438 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u043c\u0438\u0440\u0430. 4 \u0440\u0430\u0437\u0430."
            },
            {
                icon: "\ud83c\udfa5", qty: "4",
                en: "Lore Psychologist: 4 uses", ru: "\u041f\u0441\u0438\u0445\u043e\u043b\u043e\u0433 \u043b\u043e\u0440\u0430: 4 \u0448\u0442.",
                kk: "4 \u0440\u0435\u0442", zh: "4\u6b21\u8bb0\u5f55\u5fc3\u7406\u5b66\u5bb6", es: "Psic\u00f3logo de Lore: 4 usos",
                de: "Lore-Psychologe: 4 Nutzungen", fr: "Psychologue du Lore: 4 utilisations",
                ar: "4 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0627\u062a \u0639\u0627\u0644\u0645 \u0646\u0641\u0633 \u0627\u0644\u0644\u0648\u0631",
                ja: "\u30ed\u30a2\u5fc3\u7406\u5b66\u8005: 4\u56de", pt: "Psic\u00f3logo de Lore: 4 usos",
                shortEn: "4x Lore Psychol.", shortRu: "4 \u041f\u0441\u0438\u0445\u043e\u043b\u043e\u0433",
                descEn: "AI Lore Psychologist analyzes character motivations and psychology. 4 uses/month.",
                descRu: "\u0418\u0418-\u043f\u0441\u0438\u0445\u043e\u043b\u043e\u0433 \u043b\u043e\u0440\u0430 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u043c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0435\u0439. 4 \u0440\u0430\u0437\u0430."
            },
            {
                icon: "\ud83d\uddfa\ufe0f", qty: "3",
                en: "AI Cartographer: 3 uses", ru: "\u041a\u0430\u0440\u0442\u043e\u0433\u0440\u0430\u0444: 3 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",
                kk: "3 \u0440\u0435\u0442", zh: "3\u6b21AI\u5730\u56fe\u5e08", es: "Cart\u00f3grafo IA: 3 usos",
                de: "KI-Kartograf: 3 Nutzungen", fr: "Cartographe IA: 3 utilisations",
                ar: "3 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0627\u062a \u0631\u0633\u0627\u0645 \u0627\u0644\u062e\u0631\u0430\u0626\u0637",
                ja: "AI\u5730\u56f3\u5236\u4f5c\u8005: 3\u56de", pt: "Cart\u00f3grafo IA: 3 usos",
                shortEn: "3x Cartographer", shortRu: "3 \u043a\u0430\u0440\u0442\u043e\u0433\u0440\u0430\u0444",
                descEn: "Use AI Cartographer to generate world and region maps. 3 uses/month.",
                descRu: "\u0418\u0418-\u043a\u0430\u0440\u0442\u043e\u0433\u0440\u0430\u0444 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043a\u0430\u0440\u0442\u044b \u043c\u0438\u0440\u043e\u0432 \u0438 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432. 3 \u0440\u0430\u0437\u0430."
            },
            {
                icon: "\ud83d\udd0d", qty: "1",
                en: "AI Anti-Plagiarism: 1 use. Scans internet for similar content.", ru: "\u0418\u0418-\u0430\u043d\u0442\u0438\u043f\u043b\u0430\u0433\u0438\u0430\u0442: 1 \u0438\u0441\u043f. \u0421\u043b\u0435\u0434\u0438\u0442 \u0437\u0430 \u0432\u0430\u0448\u0438\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u043c, \u0438\u0449\u0435\u0442 \u0432 \u0441\u0435\u0442\u0438.",
                kk: "1 \u043f\u0430\u0439\u0434\u0430\u043b\u0430\u043d\u0443", zh: "1\u6b21AI\u53cd\u5267\u7a83",
                es: "Anti-Plagio IA: 1 uso. Busca contenido similar en internet.",
                de: "KI-Antiplagiat: 1 Nutzung. Sucht \u00e4hnliche Inhalte im Internet.",
                fr: "Anti-Plagiat IA: 1 usage. D\u00e9tecte les contenus similaires en ligne.",
                ar: "1 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0644\u0645\u0643\u0627\u0641\u062d\u0629 \u0627\u0644\u0633\u0631\u0642\u0629 \u0627\u0644\u0623\u062f\u0628\u064a\u0629",
                ja: "AI\u30a2\u30f3\u30c1\u30d7\u30e9\u30b8\u30a2\u30ea\u30ba\u30e0: 1\u56de\u3002\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u3092\u691c\u7d22\u3002",
                pt: "Anti-Pl\u00e1gio IA: 1 uso. Verifica semelhan\u00e7as na internet.",
                shortEn: "1x Anti-Plagiarism", shortRu: "1 \u0430\u043d\u0442\u0438\u043f\u043b\u0430\u0433\u0438\u0430\u0442",
                descEn: "AI scans the internet searching for similar content to protect your project.",
                descRu: "\u0418\u0418 \u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u0432 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u043f\u043e\u0445\u043e\u0436\u0435\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430."
            }
        ]
    },,

    // ── Tier 3: Business Standard — $24.99/mo ─────────────────────────────────
    {
        id: "tier_3_biz_standard", index: 3, usdPrice: 24.99, badge: "TIER 03",
        nameEn: "Business Standard", nameRu: "Бизнес Стандарт", nameKk: "Бизнес Стандарт",
        nameZh: "商业标准版", nameEs: "Business Standard", nameDe: "Business Standard",
        nameFr: "Business Standard", nameAr: "الأعمال المعيارية", nameJa: "ビジネス スタンダード", namePt: "Business Standard",
        taglineEn: "Essentials for growing creative businesses",
        taglineRu: "Основа для растущего творческого бизнеса",
        isPopular: false,
        features: [
            { icon:"🎬", qty:"5",   en:"5 Videos",               ru:"5 видео",                kk:"5 бейне",      zh:"5 视频",    es:"5 Vídeos",            de:"5 Videos",             fr:"5 Vidéos",             ar:"5 مقاطع",          ja:"5動画",        pt:"5 Vídeos",            shortEn:"5 Videos",         shortRu:"5 видео",         descEn:"5 AI videos/mo.",               descRu:"5 видео/мес." },
            { icon:"🖼️", qty:"20",  en:"20 Images",              ru:"20 картинок",             kk:"20 сурет",     zh:"20 图片",   es:"20 Imágenes",         de:"20 Bilder",            fr:"20 Images",            ar:"20 صورة",          ja:"20枚画像",     pt:"20 Imagens",          shortEn:"20 Images",        shortRu:"20 картинок",     descEn:"20 AI illustrations/mo.",       descRu:"20 иллюстраций/мес." },
            { icon:"🧠", qty:"✓",   en:"AI Deep Thinking",       ru:"Углублённое мышление ИИ", kk:"Жасанды ТЖ",   zh:"AI深度思考", es:"Pensamiento Profundo IA",de:"KI-Tiefendenken",    fr:"Pensée Profonde IA",   ar:"تفكير عميق للذكاء",ja:"AI深層思考",   pt:"Pensamento Profundo IA",shortEn:"Deep Thinking",    shortRu:"Глубокое мышл.",  descEn:"Extended AI reasoning.",        descRu:"Расширенное рассуждение ИИ." },
            { icon:"📜", qty:"60",  en:"60 Synopses",             ru:"60 синопсисов",           kk:"60 синопсис",  zh:"60 大纲",   es:"60 Sinópsis",         de:"60 Synopsen",          fr:"60 Synopsis",          ar:"60 ملخصاً",        ja:"60シノプシス",  pt:"60 Sinópses",         shortEn:"60 Synopses",      shortRu:"60 синопсисов",   descEn:"60 plot synopses/mo.",          descRu:"60 синопсисов/мес." },
            { icon:"📖", qty:"40",  en:"40 Chapters",             ru:"40 глав",                 kk:"40 тарау",     zh:"40 章节",   es:"40 Capítulos",        de:"40 Kapitel",           fr:"40 Chapitres",         ar:"40 فصلاً",         ja:"40章",         pt:"40 Capítulos",        shortEn:"40 Chapters",      shortRu:"40 глав",         descEn:"40 AI-assisted chapters/mo.",   descRu:"40 глав/мес." },
            { icon:"✍️", qty:"80",  en:"80 Text Corrections",    ru:"80 исправлений текста",   kk:"80 түзету",    zh:"80次修改",  es:"80 Correcciones",     de:"80 Korrekturen",       fr:"80 Corrections",       ar:"80 تصحيحاً",       ja:"80回修正",     pt:"80 Correções",        shortEn:"80 Corrections",   shortRu:"80 исправлений",  descEn:"80 AI text edits/mo.",          descRu:"80 правок/мес." },
            { icon:"🪙", qty:"150", en:"Linar Tokens: 150",      ru:"Линар Токены: 150",       kk:"150 токен",    zh:"150 代币",  es:"150 Tokens",          de:"150 Tokens",           fr:"150 Jetons",           ar:"150 رمزاً",        ja:"150トークン",  pt:"150 Tokens",          shortEn:"150 Tokens",       shortRu:"150 Токенов",     descEn:"150 Linar Tokens/mo.",          descRu:"150 Токенов/мес." },
            { icon:"⏳", qty:"6",   en:"Future Plot Slots: 6",   ru:"Сюжеты на будущее: 6",    kk:"6 слот",       zh:"6个剧情槽", es:"6 Ranuras de trama",  de:"6 Plot-Slots",         fr:"6 emplacements",       ar:"6 فتحات للقصة",    ja:"6スロット",    pt:"6 vagas de enredo",   shortEn:"6 Plot Slots",     shortRu:"6 слотов",        descEn:"6 future story capsules.",      descRu:"6 слотов капсул." },
            { icon:"🕵️", qty:"8",   en:"Trend Spy: 8 reports",  ru:"Шпион трендов: 8 отчётов",kk:"8 есеп",       zh:"8个趋势报告",es:"Espía: 8 informes",   de:"Trend-Spy: 8 Berichte",fr:"Espion: 8 rapports",   ar:"8 تقارير اتجاهات", ja:"8レポート",    pt:"8 relatórios",        shortEn:"8 Trend Reports",  shortRu:"8 отчётов шпиона",descEn:"8 AI trend reports/mo.",        descRu:"8 отчётов о трендах/мес." },
            { icon:"🏷️", qty:"20",  en:"Name Generator: 20",    ru:"Генератор имён: 20",      kk:"20 есім",      zh:"20个名字",  es:"Generador: 20 nombres",de:"Namensgenerator: 20",  fr:"Générateur: 20 noms",  ar:"20 اسماً",         ja:"名前20個",     pt:"20 Nomes",            shortEn:"20 Names",         shortRu:"20 имён",         descEn:"20 character names/mo.",        descRu:"20 имён персонажей/мес." },
            { icon:"🎙️", qty:"6",   en:"AI Voice: 6 choices",   ru:"Голос ИИ: 6, менять 3 раза",kk:"6 дауыс",   zh:"6种AI声音", es:"Voz IA: 6, cambiar 3x",de:"KI-Stimme: 6, 3 Wechsel",fr:"Voix IA: 6, 3 changements",ar:"صوت الذكاء: 6",  ja:"AI音声: 6",    pt:"Voz IA: 6, mudar 3x", shortEn:"6 Voices/3x",      shortRu:"6 голосов/3 смены",descEn:"6 AI voices, change 3 times.",  descRu:"6 голосов, менять 3 раза." },
            { icon:"🏆", qty:"✓",   en:"Status: \"Expert\"",     ru:"Статус: «Эксперт»",       kk:"«Сарапшы»",    zh:"地位: 专家",es:"Estado: «Experto»",    de:"Status: «Experte»",    fr:"Statut: «Expert»",     ar:"حالة: «خبير»",     ja:"ステータス: 専門家",pt:"Status: «Especialista»",shortEn:"Expert",           shortRu:"Эксперт",         descEn:"Exclusive Expert community badge.", descRu:"Статус «Эксперт»." },
            { icon:"📚", qty:"6",   en:"Lore Expert: 6 uses",   ru:"Эксперт лора: 6 шт.",     kk:"6 рет",        zh:"6次记录",   es:"Experto en Lore: 6",  de:"Lore-Experte: 6",      fr:"Expert du Lore: 6",    ar:"خبير اللور: 6",    ja:"ローアエキスパート: 6",pt:"Especialista: 6",    shortEn:"6x Lore Expert",   shortRu:"6 Эксперт лора",  descEn:"6 Lore Expert uses/mo.",        descRu:"6 использований Эксперта лора." },
            { icon:"🗺️", qty:"5",   en:"AI Cartographer: 5",    ru:"Картограф ИИ: 5",         kk:"5 рет",        zh:"5次AI绘图", es:"Cartógrafo IA: 5",    de:"KI-Kartograf: 5",      fr:"Cartographe IA: 5",    ar:"رسام الخرائط: 5",  ja:"AI地図: 5",    pt:"Cartógrafo IA: 5",    shortEn:"5x Cartographer",  shortRu:"5 картограф",     descEn:"5 AI map generations/mo.",      descRu:"5 карт/мес." },
            { icon:"🔍", qty:"2",   en:"AI Anti-Plagiarism: 2", ru:"ИИ-антиплагиат: 2",       kk:"2 рет",        zh:"2次AI反剽窃",es:"Anti-Plagio IA: 2",  de:"KI-Antiplagiat: 2",    fr:"Anti-Plagiat IA: 2",   ar:"مكافحة السرقة: 2", ja:"AI反剽窃: 2",   pt:"Anti-Plágio IA: 2",   shortEn:"2x Anti-Plagiarism",shortRu:"2 антиплагиат",  descEn:"2 internet scans/mo.",          descRu:"2 сканирования/мес." },
            { icon:"🎁", qty:"3",   en:"3 Secret Gifts",         ru:"3 секретных подарка",     kk:"3 сыйлық",     zh:"3个神秘礼物",es:"3 regalos secretos",  de:"3 Geheimnisvolle Geschenke",fr:"3 cadeaux secrets",  ar:"3 هدايا سرية",     ja:"3つの秘密の贈り物",pt:"3 presentes secretos", shortEn:"3 Secret Gifts",   shortRu:"3 подарка",       descEn:"3 mystery rewards monthly.",    descRu:"3 загадочных вознаграждения." }
        ]
    },

    // ── Tier 4: Business Enterprise — $30/mo ──────────────────────────────────
    {
        id: "tier_4_biz_enterprise", index: 4, usdPrice: 30, badge: "TIER 04",
        nameEn: "Business Enterprise", nameRu: "Бизнес Энтерпрайз", nameKk: "Бизнес Энтерпрайз",
        nameZh: "商业企业版", nameEs: "Business Enterprise", nameDe: "Business Enterprise",
        nameFr: "Business Enterprise", nameAr: "الأعمال المتقدمة", nameJa: "ビジネス エンタープライズ", namePt: "Business Enterprise",
        taglineEn: "Full enterprise creative power for teams",
        taglineRu: "Полная корпоративная творческая мощь для команд",
        isPopular: false,
        features: [
            { icon:"🎬", qty:"10",  en:"10 Videos",              ru:"10 видео",                kk:"10 бейне",     zh:"10 视频",   es:"10 Vídeos",           de:"10 Videos",            fr:"10 Vidéos",            ar:"10 مقاطع",         ja:"10動画",       pt:"10 Vídeos",           shortEn:"10 Videos",        shortRu:"10 видео",        descEn:"10 AI videos/mo.",              descRu:"10 видео/мес." },
            { icon:"🖼️", qty:"40",  en:"40 Images",              ru:"40 картинок",             kk:"40 сурет",     zh:"40 图片",   es:"40 Imágenes",         de:"40 Bilder",            fr:"40 Images",            ar:"40 صورة",          ja:"40枚画像",     pt:"40 Imagens",          shortEn:"40 Images",        shortRu:"40 картинок",     descEn:"40 AI illustrations/mo.",       descRu:"40 иллюстраций/мес." },
            { icon:"🧠", qty:"✓",   en:"AI Deep Thinking",       ru:"Углублённое мышление ИИ", kk:"Жасанды ТЖ",   zh:"AI深度思考", es:"Pensamiento Profundo IA",de:"KI-Tiefendenken",    fr:"Pensée Profonde IA",   ar:"تفكير عميق للذكاء",ja:"AI深層思考",   pt:"Pensamento Profundo IA",shortEn:"Deep Thinking",    shortRu:"Глубокое мышл.",  descEn:"Extended AI reasoning.",        descRu:"Расширенное рассуждение ИИ." },
            { icon:"📜", qty:"100", en:"100 Synopses",            ru:"100 синопсисов",          kk:"100 синопсис", zh:"100 大纲",  es:"100 Sinópsis",        de:"100 Synopsen",         fr:"100 Synopsis",         ar:"100 ملخص",         ja:"100シノプシス", pt:"100 Sinópses",        shortEn:"100 Synopses",     shortRu:"100 синопсисов",  descEn:"100 synopses/mo.",              descRu:"100 синопсисов/мес." },
            { icon:"📖", qty:"60",  en:"60 Chapters",             ru:"60 глав",                 kk:"60 тарау",     zh:"60 章节",   es:"60 Capítulos",        de:"60 Kapitel",           fr:"60 Chapitres",         ar:"60 فصلاً",         ja:"60章",         pt:"60 Capítulos",        shortEn:"60 Chapters",      shortRu:"60 глав",         descEn:"60 chapters/mo.",               descRu:"60 глав/мес." },
            { icon:"✍️", qty:"150", en:"150 Text Corrections",   ru:"150 исправлений текста",  kk:"150 түзету",   zh:"150次修改", es:"150 Correcciones",    de:"150 Korrekturen",      fr:"150 Corrections",      ar:"150 تصحيحاً",      ja:"150回修正",    pt:"150 Correções",       shortEn:"150 Corrections",  shortRu:"150 исправлений", descEn:"150 text edits/mo.",            descRu:"150 правок/мес." },
            { icon:"🪙", qty:"250", en:"Linar Tokens: 250",      ru:"Линар Токены: 250",       kk:"250 токен",    zh:"250 代币",  es:"250 Tokens",          de:"250 Tokens",           fr:"250 Jetons",           ar:"250 رمزاً",        ja:"250トークン",  pt:"250 Tokens",          shortEn:"250 Tokens",       shortRu:"250 Токенов",     descEn:"250 Linar Tokens/mo.",          descRu:"250 Токенов/мес." },
            { icon:"⏳", qty:"8",   en:"Future Plot Slots: 8",   ru:"Сюжеты на будущее: 8",    kk:"8 слот",       zh:"8个剧情槽", es:"8 Ranuras de trama",  de:"8 Plot-Slots",         fr:"8 emplacements",       ar:"8 فتحات للقصة",    ja:"8スロット",    pt:"8 vagas de enredo",   shortEn:"8 Plot Slots",     shortRu:"8 слотов",        descEn:"8 future story capsules.",      descRu:"8 слотов капсул." },
            { icon:"🕵️", qty:"12",  en:"Trend Spy: 12 reports", ru:"Шпион трендов: 12",       kk:"12 есеп",      zh:"12个趋势报告",es:"Espía: 12 informes", de:"Trend-Spy: 12 Berichte",fr:"Espion: 12 rapports",  ar:"12 تقريراً",       ja:"12レポート",   pt:"12 relatórios",       shortEn:"12 Trend Reports", shortRu:"12 отчётов",      descEn:"12 trend reports/mo.",          descRu:"12 отчётов/мес." },
            { icon:"🏷️", qty:"30",  en:"Name Generator: 30",    ru:"Генератор имён: 30",      kk:"30 есім",      zh:"30个名字",  es:"30 nombres",          de:"30 Namen",             fr:"30 noms",              ar:"30 اسماً",         ja:"名前30個",     pt:"30 Nomes",            shortEn:"30 Names",         shortRu:"30 имён",         descEn:"30 character names/mo.",        descRu:"30 имён/мес." },
            { icon:"🎙️", qty:"8",   en:"AI Voice: 8 choices",   ru:"Голос ИИ: 8, менять 4 раза",kk:"8 дауыс",   zh:"8种AI声音", es:"Voz IA: 8, cambiar 4x",de:"KI-Stimme: 8, 4 Wechsel",fr:"Voix IA: 8, 4 changements",ar:"صوت الذكاء: 8",  ja:"AI音声: 8",    pt:"Voz IA: 8, mudar 4x", shortEn:"8 Voices/4x",      shortRu:"8 голосов/4 смены",descEn:"8 AI voices, change 4 times.",  descRu:"8 голосов, менять 4 раза." },
            { icon:"🏆", qty:"✓",   en:"Status: \"Maestro\"",    ru:"Статус: «Маэстро»",       kk:"«Маэстро»",    zh:"地位: 大师",es:"Estado: «Maestro»",    de:"Status: «Maestro»",    fr:"Statut: «Maestro»",    ar:"حالة: «مايسترو»",  ja:"ステータス: 達人",pt:"Status: «Maestro»",    shortEn:"Maestro",          shortRu:"Маэстро",         descEn:"Exclusive Maestro badge.",      descRu:"Статус «Маэстро»." },
            { icon:"🏛️", qty:"150", en:"AI Architect: 150 msgs",ru:"ИИ-архитектор: 150",      kk:"150 хабар",    zh:"150条消息", es:"Arquitecto IA: 150",  de:"KI-Architekt: 150",    fr:"Architecte IA: 150",   ar:"المعماري: 150",    ja:"AIアーキテクト: 150",pt:"Arquiteto IA: 150",  shortEn:"150 Architect",    shortRu:"150 архитектор",  descEn:"150 AI Architect messages.",    descRu:"150 сообщений/мес." },
            { icon:"🗺️", qty:"8",   en:"AI Cartographer: 8",    ru:"Картограф ИИ: 8",         kk:"8 рет",        zh:"8次AI绘图", es:"Cartógrafo IA: 8",    de:"KI-Kartograf: 8",      fr:"Cartographe IA: 8",    ar:"رسام الخرائط: 8",  ja:"AI地図: 8",    pt:"Cartógrafo IA: 8",    shortEn:"8x Cartographer",  shortRu:"8 картограф",     descEn:"8 AI maps/mo.",                 descRu:"8 карт/мес." },
            { icon:"🔍", qty:"4",   en:"AI Anti-Plagiarism: 4", ru:"ИИ-антиплагиат: 4",       kk:"4 рет",        zh:"4次AI反剽窃",es:"Anti-Plagio IA: 4",  de:"KI-Antiplagiat: 4",    fr:"Anti-Plagiat IA: 4",   ar:"مكافحة السرقة: 4", ja:"AI反剽窃: 4",   pt:"Anti-Plágio IA: 4",   shortEn:"4x Anti-Plagiarism",shortRu:"4 антиплагиат",  descEn:"4 internet scans/mo.",          descRu:"4 сканирования/мес." },
            { icon:"🎁", qty:"4",   en:"4 Secret Gifts",         ru:"4 секретных подарка",     kk:"4 сыйлық",     zh:"4个神秘礼物",es:"4 regalos secretos",  de:"4 Geheimnisvolle Geschenke",fr:"4 cadeaux secrets",  ar:"4 هدايا سرية",     ja:"4つの秘密の贈り物",pt:"4 presentes secretos", shortEn:"4 Secret Gifts",   shortRu:"4 подарка",       descEn:"4 mystery rewards monthly.",    descRu:"4 вознаграждения/мес." }
        ]
    },

    // ── Tier 5: Advanced — $39.99/mo ── POPULAR ────────────────────────────────
    {
        id: "tier_5_advanced", index: 5, usdPrice: 39.99, badge: "TIER 05",
        nameEn: "Advanced", nameRu: "Продвинутый", nameKk: "Жетілдірілген",
        nameZh: "高级版", nameEs: "Avanzado", nameDe: "Fortgeschritten",
        nameFr: "Avancé", nameAr: "المتقدم", nameJa: "アドバンスト", namePt: "Avançado",
        taglineEn: "Advanced tools for serious world-builders",
        taglineRu: "Продвинутые инструменты для серьёзных создателей",
        isPopular: true,
        features: [
            { icon:"🎬", qty:"18",  en:"18 Videos",              ru:"18 видео",                kk:"18 бейне",     zh:"18 视频",   es:"18 Vídeos",           de:"18 Videos",            fr:"18 Vidéos",            ar:"18 مقطعاً",        ja:"18動画",       pt:"18 Vídeos",           shortEn:"18 Videos",        shortRu:"18 видео",        descEn:"18 AI videos/mo.",              descRu:"18 видео/мес." },
            { icon:"🖼️", qty:"80",  en:"80 Images",              ru:"80 картинок",             kk:"80 сурет",     zh:"80 图片",   es:"80 Imágenes",         de:"80 Bilder",            fr:"80 Images",            ar:"80 صورة",          ja:"80枚画像",     pt:"80 Imagens",          shortEn:"80 Images",        shortRu:"80 картинок",     descEn:"80 AI illustrations/mo.",       descRu:"80 иллюстраций/мес." },
            { icon:"🧠", qty:"✓",   en:"AI Deep Thinking",       ru:"Углублённое мышление ИИ", kk:"Жасанды ТЖ",   zh:"AI深度思考", es:"Pensamiento Profundo IA",de:"KI-Tiefendenken",    fr:"Pensée Profonde IA",   ar:"تفكير عميق للذكاء",ja:"AI深層思考",   pt:"Pensamento Profundo IA",shortEn:"Deep Thinking",    shortRu:"Глубокое мышл.",  descEn:"Extended AI reasoning.",        descRu:"Расширенное рассуждение ИИ." },
            { icon:"📜", qty:"200", en:"200 Synopses",            ru:"200 синопсисов",          kk:"200 синопсис", zh:"200 大纲",  es:"200 Sinópsis",        de:"200 Synopsen",         fr:"200 Synopsis",         ar:"200 ملخص",         ja:"200シノプシス", pt:"200 Sinópses",        shortEn:"200 Synopses",     shortRu:"200 синопсисов",  descEn:"200 synopses/mo.",              descRu:"200 синопсисов/мес." },
            { icon:"📖", qty:"100", en:"100 Chapters",            ru:"100 глав",                kk:"100 тарау",    zh:"100 章节",  es:"100 Capítulos",       de:"100 Kapitel",          fr:"100 Chapitres",        ar:"100 فصل",          ja:"100章",        pt:"100 Capítulos",       shortEn:"100 Chapters",     shortRu:"100 глав",        descEn:"100 chapters/mo.",              descRu:"100 глав/мес." },
            { icon:"✍️", qty:"300", en:"300 Text Corrections",   ru:"300 исправлений текста",  kk:"300 түзету",   zh:"300次修改", es:"300 Correcciones",    de:"300 Korrekturen",      fr:"300 Corrections",      ar:"300 تصحيح",        ja:"300回修正",    pt:"300 Correções",       shortEn:"300 Corrections",  shortRu:"300 исправлений", descEn:"300 text edits/mo.",            descRu:"300 правок/мес." },
            { icon:"🪙", qty:"500", en:"Linar Tokens: 500",      ru:"Линар Токены: 500",       kk:"500 токен",    zh:"500 代币",  es:"500 Tokens",          de:"500 Tokens",           fr:"500 Jetons",           ar:"500 رمز",          ja:"500トークン",  pt:"500 Tokens",          shortEn:"500 Tokens",       shortRu:"500 Токенов",     descEn:"500 Linar Tokens/mo.",          descRu:"500 Токенов/мес." },
            { icon:"⏳", qty:"12",  en:"Future Plot Slots: 12",  ru:"Сюжеты на будущее: 12",   kk:"12 слот",      zh:"12个剧情槽",es:"12 Ranuras",          de:"12 Plot-Slots",        fr:"12 emplacements",      ar:"12 فتحة",          ja:"12スロット",   pt:"12 vagas",            shortEn:"12 Plot Slots",    shortRu:"12 слотов",       descEn:"12 story capsules.",            descRu:"12 слотов капсул." },
            { icon:"🕵️", qty:"20",  en:"Trend Spy: 20 reports", ru:"Шпион трендов: 20",       kk:"20 есеп",      zh:"20个趋势报告",es:"Espía: 20 informes", de:"Trend-Spy: 20 Berichte",fr:"Espion: 20 rapports",  ar:"20 تقريراً",       ja:"20レポート",   pt:"20 relatórios",       shortEn:"20 Trend Reports", shortRu:"20 отчётов",      descEn:"20 AI trend reports/mo.",       descRu:"20 отчётов/мес." },
            { icon:"🏷️", qty:"50",  en:"Name Generator: 50",    ru:"Генератор имён: 50",      kk:"50 есім",      zh:"50个名字",  es:"50 nombres",          de:"50 Namen",             fr:"50 noms",              ar:"50 اسماً",         ja:"名前50個",     pt:"50 Nomes",            shortEn:"50 Names",         shortRu:"50 имён",         descEn:"50 character names/mo.",        descRu:"50 имён/мес." },
            { icon:"🎙️", qty:"12",  en:"AI Voice: 12 choices",  ru:"Голос ИИ: 12, менять 5 раз",kk:"12 дауыс",  zh:"12种AI声音",es:"Voz IA: 12, cambiar 5x",de:"KI-Stimme: 12, 5 Wechsel",fr:"Voix IA: 12, 5 changements",ar:"صوت الذكاء: 12",ja:"AI音声: 12",   pt:"Voz IA: 12, mudar 5x", shortEn:"12 Voices/5x",     shortRu:"12 голосов/5 смен",descEn:"12 AI voices, change 5 times.", descRu:"12 голосов, менять 5 раз." },
            { icon:"🏆", qty:"✓",   en:"Status: \"Virtuoso\"",   ru:"Статус: «Виртуоз»",       kk:"«Виртуоз»",    zh:"地位: 大师",es:"Estado: «Virtuoso»",   de:"Status: «Virtuose»",   fr:"Statut: «Virtuose»",   ar:"حالة: «فيرتوزو»",  ja:"ステータス: 名人",pt:"Status: «Virtuoso»",   shortEn:"Virtuoso",         shortRu:"Виртуоз",         descEn:"Exclusive Virtuoso badge.",     descRu:"Статус «Виртуоз»." },
            { icon:"🏛️", qty:"300", en:"AI Architect: 300 msgs",ru:"ИИ-архитектор: 300",      kk:"300 хабар",    zh:"300条消息", es:"Arquitecto IA: 300",  de:"KI-Architekt: 300",    fr:"Architecte IA: 300",   ar:"المعماري: 300",    ja:"AIアーキテクト: 300",pt:"Arquiteto IA: 300",  shortEn:"300 Architect",    shortRu:"300 архитектор",  descEn:"300 AI Architect messages.",    descRu:"300 сообщений/мес." },
            { icon:"🗺️", qty:"15",  en:"AI Cartographer: 15",   ru:"Картограф ИИ: 15",        kk:"15 рет",       zh:"15次AI绘图",es:"Cartógrafo IA: 15",   de:"KI-Kartograf: 15",     fr:"Cartographe IA: 15",   ar:"رسام الخرائط: 15", ja:"AI地図: 15",   pt:"Cartógrafo IA: 15",   shortEn:"15x Cartographer", shortRu:"15 картограф",    descEn:"15 AI maps/mo.",                descRu:"15 карт/мес." },
            { icon:"🔍", qty:"8",   en:"AI Anti-Plagiarism: 8", ru:"ИИ-антиплагиат: 8",       kk:"8 рет",        zh:"8次AI反剽窃",es:"Anti-Plagio IA: 8",  de:"KI-Antiplagiat: 8",    fr:"Anti-Plagiat IA: 8",   ar:"مكافحة السرقة: 8", ja:"AI反剽窃: 8",   pt:"Anti-Plágio IA: 8",   shortEn:"8x Anti-Plagiarism",shortRu:"8 антиплагиат",  descEn:"8 internet scans/mo.",          descRu:"8 сканирований/мес." },
            { icon:"🎁", qty:"5",   en:"5 Secret Gifts",         ru:"5 секретных подарков",    kk:"5 сыйлық",     zh:"5个神秘礼物",es:"5 regalos secretos",  de:"5 Geheimnisvolle Geschenke",fr:"5 cadeaux secrets",  ar:"5 هدايا سرية",     ja:"5つの秘密の贈り物",pt:"5 presentes secretos", shortEn:"5 Secret Gifts",   shortRu:"5 подарков",      descEn:"5 mystery rewards monthly.",    descRu:"5 загадочных вознаграждений." }
        ]
    },

    // ── Tier 6: Pro — $49.99/mo ───────────────────────────────────────────────
    {
        id: "tier_6_pro", index: 6, usdPrice: 49.99, badge: "TIER 06",
        nameEn: "Pro", nameRu: "Про", nameKk: "Про",
        nameZh: "专业版", nameEs: "Pro", nameDe: "Pro",
        nameFr: "Pro", nameAr: "الاحترافي", nameJa: "プロ", namePt: "Pro",
        taglineEn: "Professional-grade tools for prolific creators",
        taglineRu: "Профессиональные инструменты для плодовитых авторов",
        isPopular: false,
        features: [
            { icon:"🎬", qty:"30",  en:"30 Videos",              ru:"30 видео",                kk:"30 бейне",     zh:"30 视频",   es:"30 Vídeos",           de:"30 Videos",            fr:"30 Vidéos",            ar:"30 مقطعاً",        ja:"30動画",       pt:"30 Vídeos",           shortEn:"30 Videos",        shortRu:"30 видео",        descEn:"30 AI videos/mo.",              descRu:"30 видео/мес." },
            { icon:"🖼️", qty:"150", en:"150 Images",             ru:"150 картинок",            kk:"150 сурет",    zh:"150 图片",  es:"150 Imágenes",        de:"150 Bilder",           fr:"150 Images",           ar:"150 صورة",         ja:"150枚画像",    pt:"150 Imagens",         shortEn:"150 Images",       shortRu:"150 картинок",    descEn:"150 AI illustrations/mo.",      descRu:"150 иллюстраций/мес." },
            { icon:"🧠", qty:"✓",   en:"AI Deep Thinking",       ru:"Углублённое мышление ИИ", kk:"Жасанды ТЖ",   zh:"AI深度思考", es:"Pensamiento Profundo IA",de:"KI-Tiefendenken",    fr:"Pensée Profonde IA",   ar:"تفكير عميق للذكاء",ja:"AI深層思考",   pt:"Pensamento Profundo IA",shortEn:"Deep Thinking",    shortRu:"Глубокое мышл.",  descEn:"Extended AI reasoning.",        descRu:"Расширенное рассуждение ИИ." },
            { icon:"📜", qty:"400", en:"400 Synopses",            ru:"400 синопсисов",          kk:"400 синопсис", zh:"400 大纲",  es:"400 Sinópsis",        de:"400 Synopsen",         fr:"400 Synopsis",         ar:"400 ملخص",         ja:"400シノプシス", pt:"400 Sinópses",        shortEn:"400 Synopses",     shortRu:"400 синопсисов",  descEn:"400 synopses/mo.",              descRu:"400 синопсисов/мес." },
            { icon:"📖", qty:"200", en:"200 Chapters",            ru:"200 глав",                kk:"200 тарау",    zh:"200 章节",  es:"200 Capítulos",       de:"200 Kapitel",          fr:"200 Chapitres",        ar:"200 فصل",          ja:"200章",        pt:"200 Capítulos",       shortEn:"200 Chapters",     shortRu:"200 глав",        descEn:"200 chapters/mo.",              descRu:"200 глав/мес." },
            { icon:"✍️", qty:"600", en:"600 Text Corrections",   ru:"600 исправлений текста",  kk:"600 түзету",   zh:"600次修改", es:"600 Correcciones",    de:"600 Korrekturen",      fr:"600 Corrections",      ar:"600 تصحيح",        ja:"600回修正",    pt:"600 Correções",       shortEn:"600 Corrections",  shortRu:"600 исправлений", descEn:"600 text edits/mo.",            descRu:"600 правок/мес." },
            { icon:"🪙", qty:"900", en:"Linar Tokens: 900",      ru:"Линар Токены: 900",       kk:"900 токен",    zh:"900 代币",  es:"900 Tokens",          de:"900 Tokens",           fr:"900 Jetons",           ar:"900 رمز",          ja:"900トークン",  pt:"900 Tokens",          shortEn:"900 Tokens",       shortRu:"900 Токенов",     descEn:"900 Linar Tokens/mo.",          descRu:"900 Токенов/мес." },
            { icon:"⏳", qty:"20",  en:"Future Plot Slots: 20",  ru:"Сюжеты на будущее: 20",   kk:"20 слот",      zh:"20个剧情槽",es:"20 Ranuras",          de:"20 Plot-Slots",        fr:"20 emplacements",      ar:"20 فتحة",          ja:"20スロット",   pt:"20 vagas",            shortEn:"20 Plot Slots",    shortRu:"20 слотов",       descEn:"20 story capsules.",            descRu:"20 слотов капсул." },
            { icon:"🕵️", qty:"35",  en:"Trend Spy: 35 reports", ru:"Шпион трендов: 35",       kk:"35 есеп",      zh:"35个趋势报告",es:"Espía: 35 informes", de:"Trend-Spy: 35 Berichte",fr:"Espion: 35 rapports",  ar:"35 تقريراً",       ja:"35レポート",   pt:"35 relatórios",       shortEn:"35 Trend Reports", shortRu:"35 отчётов",      descEn:"35 AI trend reports/mo.",       descRu:"35 отчётов/мес." },
            { icon:"🏷️", qty:"80",  en:"Name Generator: 80",    ru:"Генератор имён: 80",      kk:"80 есім",      zh:"80个名字",  es:"80 nombres",          de:"80 Namen",             fr:"80 noms",              ar:"80 اسماً",         ja:"名前80個",     pt:"80 Nomes",            shortEn:"80 Names",         shortRu:"80 имён",         descEn:"80 character names/mo.",        descRu:"80 имён/мес." },
            { icon:"🎙️", qty:"20",  en:"AI Voice: 20 choices",  ru:"Голос ИИ: 20, менять ∞",  kk:"20 дауыс",     zh:"20种AI声音",es:"Voz IA: 20, cambiar ∞",de:"KI-Stimme: 20, ∞ Wechsel",fr:"Voix IA: 20, ∞ changements",ar:"صوت الذكاء: 20",ja:"AI音声: 20",   pt:"Voz IA: 20, mudar ∞",  shortEn:"20 Voices/∞",      shortRu:"20 голосов/∞",    descEn:"20 AI voices, unlimited changes.", descRu:"20 голосов, неограниченная смена." },
            { icon:"🏆", qty:"✓",   en:"Status: \"Sovereign\"",  ru:"Статус: «Суверен»",       kk:"«Суверен»",    zh:"地位: 主权",es:"Estado: «Soberano»",   de:"Status: «Souverän»",   fr:"Statut: «Souverain»",  ar:"حالة: «ذو سيادة»", ja:"ステータス: 主権者",pt:"Status: «Soberano»",   shortEn:"Sovereign",        shortRu:"Суверен",         descEn:"Exclusive Sovereign badge.",    descRu:"Статус «Суверен»." },
            { icon:"🏛️", qty:"500", en:"AI Architect: 500 msgs",ru:"ИИ-архитектор: 500",      kk:"500 хабар",    zh:"500条消息", es:"Arquitecto IA: 500",  de:"KI-Architekt: 500",    fr:"Architecte IA: 500",   ar:"المعماري: 500",    ja:"AIアーキテクト: 500",pt:"Arquiteto IA: 500",  shortEn:"500 Architect",    shortRu:"500 архитектор",  descEn:"500 AI Architect messages.",    descRu:"500 сообщений/мес." },
            { icon:"🗺️", qty:"25",  en:"AI Cartographer: 25",   ru:"Картограф ИИ: 25",        kk:"25 рет",       zh:"25次AI绘图",es:"Cartógrafo IA: 25",   de:"KI-Kartograf: 25",     fr:"Cartographe IA: 25",   ar:"رسام الخرائط: 25", ja:"AI地図: 25",   pt:"Cartógrafo IA: 25",   shortEn:"25x Cartographer", shortRu:"25 картограф",    descEn:"25 AI maps/mo.",                descRu:"25 карт/мес." },
            { icon:"🔍", qty:"15",  en:"AI Anti-Plagiarism: 15",ru:"ИИ-антиплагиат: 15",      kk:"15 рет",       zh:"15次AI反剽窃",es:"Anti-Plagio IA: 15", de:"KI-Antiplagiat: 15",   fr:"Anti-Plagiat IA: 15",  ar:"مكافحة السرقة: 15",ja:"AI反剽窃: 15",  pt:"Anti-Plágio IA: 15",  shortEn:"15x Anti-Plagiarism",shortRu:"15 антиплагиат", descEn:"15 internet scans/mo.",         descRu:"15 сканирований/мес." },
            { icon:"🎁", qty:"6",   en:"6 Secret Gifts",         ru:"6 секретных подарков",    kk:"6 сыйлық",     zh:"6个神秘礼物",es:"6 regalos secretos",  de:"6 Geheimnisvolle Geschenke",fr:"6 cadeaux secrets",  ar:"6 هدايا سرية",     ja:"6つの秘密の贈り物",pt:"6 presentes secretos", shortEn:"6 Secret Gifts",   shortRu:"6 подарков",      descEn:"6 mystery rewards monthly.",    descRu:"6 вознаграждений/мес." }
        ]
    },

    // ── Tier 7: Ultra — $69.99/mo ─────────────────────────────────────────────
    {
        id: "tier_7_ultra", index: 7, usdPrice: 69.99, badge: "TIER 07",
        nameEn: "Ultra", nameRu: "Ультра", nameKk: "Ультра",
        nameZh: "超级版", nameEs: "Ultra", nameDe: "Ultra",
        nameFr: "Ultra", nameAr: "الأولترا", nameJa: "ウルトラ", namePt: "Ultra",
        taglineEn: "Ultra power for the most ambitious creators",
        taglineRu: "Ультра-возможности для самых амбициозных авторов",
        isPopular: false,
        features: [
            { icon:"🎬", qty:"60",  en:"60 Videos",              ru:"60 видео",                kk:"60 бейне",     zh:"60 视频",   es:"60 Vídeos",           de:"60 Videos",            fr:"60 Vidéos",            ar:"60 مقطعاً",        ja:"60動画",       pt:"60 Vídeos",           shortEn:"60 Videos",        shortRu:"60 видео",        descEn:"60 AI videos/mo.",              descRu:"60 видео/мес." },
            { icon:"🖼️", qty:"300", en:"300 Images",             ru:"300 картинок",            kk:"300 сурет",    zh:"300 图片",  es:"300 Imágenes",        de:"300 Bilder",           fr:"300 Images",           ar:"300 صورة",         ja:"300枚画像",    pt:"300 Imagens",         shortEn:"300 Images",       shortRu:"300 картинок",    descEn:"300 AI illustrations/mo.",      descRu:"300 иллюстраций/мес." },
            { icon:"🧠", qty:"✓",   en:"AI Deep Thinking",       ru:"Углублённое мышление ИИ", kk:"Жасанды ТЖ",   zh:"AI深度思考", es:"Pensamiento Profundo IA",de:"KI-Tiefendenken",    fr:"Pensée Profonde IA",   ar:"تفكير عميق للذكاء",ja:"AI深層思考",   pt:"Pensamento Profundo IA",shortEn:"Deep Thinking",    shortRu:"Глубокое мышл.",  descEn:"Extended AI reasoning.",        descRu:"Расширенное рассуждение ИИ." },
            { icon:"📜", qty:"∞",   en:"Unlimited Synopses",     ru:"Синопсисов: ∞",           kk:"Шексіз синопсис",zh:"无限大纲", es:"Sinópsis ilimitadas", de:"∞ Synopsen",           fr:"Synopsis illimités",   ar:"ملخصات غير محدودة",ja:"無限シノプシス", pt:"Sinópses ilimitadas", shortEn:"∞ Synopses",       shortRu:"∞ синопсисов",    descEn:"Unlimited plot synopses.",      descRu:"Безлимитные синопсисы." },
            { icon:"📖", qty:"∞",   en:"Unlimited Chapters",     ru:"Глав: ∞",                 kk:"Шексіз тарау", zh:"无限章节",  es:"Capítulos ilimitados",de:"∞ Kapitel",            fr:"Chapitres illimités",  ar:"فصول غير محدودة",  ja:"無限の章",     pt:"Capítulos ilimitados", shortEn:"∞ Chapters",       shortRu:"∞ глав",          descEn:"Unlimited chapters.",           descRu:"Безлимитные главы." },
            { icon:"✍️", qty:"∞",   en:"Unlimited Corrections",  ru:"Исправлений: ∞",          kk:"Шексіз түзету",zh:"无限修改",  es:"Correcciones ilimitadas",de:"∞ Korrekturen",      fr:"Corrections illimitées",ar:"تصحيحات غير محدودة",ja:"無限の修正",   pt:"Correções ilimitadas", shortEn:"∞ Corrections",    shortRu:"∞ исправлений",   descEn:"Unlimited text edits.",         descRu:"Безлимитные правки." },
            { icon:"🪙", qty:"2000",en:"Linar Tokens: 2000",     ru:"Линар Токены: 2000",      kk:"2000 токен",   zh:"2000 代币", es:"2000 Tokens",         de:"2000 Tokens",          fr:"2000 Jetons",          ar:"2000 رمز",         ja:"2000トークン", pt:"2000 Tokens",         shortEn:"2000 Tokens",      shortRu:"2000 Токенов",    descEn:"2000 Linar Tokens/mo.",         descRu:"2000 Токенов/мес." },
            { icon:"⏳", qty:"∞",   en:"Unlimited Plot Slots",   ru:"Сюжеты на будущее: ∞",    kk:"Шексіз слот",  zh:"无限剧情槽",es:"Ranuras ilimitadas",   de:"∞ Plot-Slots",         fr:"Emplacements illimités",ar:"فتحات غير محدودة", ja:"無限スロット",  pt:"Vagas ilimitadas",    shortEn:"∞ Plot Slots",     shortRu:"∞ слотов",        descEn:"Unlimited story capsules.",     descRu:"Безлимитные слоты." },
            { icon:"🕵️", qty:"∞",   en:"Trend Spy: Unlimited",  ru:"Шпион трендов: ∞",        kk:"Шексіз есеп",  zh:"无限趋势报告",es:"Informes ilimitados", de:"∞ Berichte",           fr:"Rapports illimités",   ar:"تقارير غير محدودة",ja:"無限レポート",  pt:"Relatórios ilimitados",shortEn:"∞ Trend Reports",  shortRu:"∞ отчётов",       descEn:"Unlimited trend reports.",      descRu:"Безлимитные отчёты." },
            { icon:"🏷️", qty:"∞",   en:"Name Generator: ∞",     ru:"Генератор имён: ∞",       kk:"Шексіз есім",  zh:"无限名字",  es:"Nombres ilimitados",  de:"∞ Namen",              fr:"Noms illimités",       ar:"أسماء غير محدودة", ja:"無限の名前",   pt:"Nomes ilimitados",    shortEn:"∞ Names",          shortRu:"∞ имён",          descEn:"Unlimited character names.",    descRu:"Безлимитные имена." },
            { icon:"🎙️", qty:"∞",   en:"AI Voice: All voices",  ru:"Голос ИИ: все голоса",    kk:"Барлық дауыс", zh:"全部AI声音", es:"Todos los voces IA",  de:"Alle KI-Stimmen",      fr:"Toutes les voix IA",   ar:"جميع أصوات الذكاء",ja:"全てのAI音声",  pt:"Todas as vozes IA",   shortEn:"All Voices",       shortRu:"Все голоса",      descEn:"All AI voices unlocked.",       descRu:"Все голоса ИИ разблокированы." },
            { icon:"🏆", qty:"✓",   en:"Status: \"Legendary\"",  ru:"Статус: «Легенда»",       kk:"«Аңыз»",       zh:"地位: 传奇",es:"Estado: «Legendario»", de:"Status: «Legendär»",   fr:"Statut: «Légendaire»", ar:"حالة: «أسطوري»",   ja:"ステータス: 伝説",pt:"Status: «Lendário»",   shortEn:"Legendary",        shortRu:"Легенда",         descEn:"Exclusive Legendary badge.",    descRu:"Статус «Легенда»." },
            { icon:"🏛️", qty:"∞",   en:"AI Architect: Unlimited",ru:"ИИ-архитектор: ∞",       kk:"Шексіз хабар", zh:"无限条消息",es:"Arquitecto IA: ∞",    de:"KI-Architekt: ∞",      fr:"Architecte IA: ∞",     ar:"المعماري: غير محدود",ja:"AIアーキテクト: ∞",pt:"Arquiteto IA: ∞",    shortEn:"∞ Architect",      shortRu:"∞ архитектор",    descEn:"Unlimited AI Architect.",       descRu:"Безлимитный архитектор." },
            { icon:"🗺️", qty:"∞",   en:"AI Cartographer: ∞",    ru:"Картограф ИИ: ∞",         kk:"Шексіз рет",   zh:"无限AI绘图",es:"Cartógrafo IA: ∞",    de:"KI-Kartograf: ∞",      fr:"Cartographe IA: ∞",    ar:"رسام الخرائط: ∞",  ja:"AI地図: ∞",    pt:"Cartógrafo IA: ∞",    shortEn:"∞ Cartographer",   shortRu:"∞ картограф",     descEn:"Unlimited AI maps.",            descRu:"Безлимитные карты." },
            { icon:"🔍", qty:"∞",   en:"AI Anti-Plagiarism: ∞", ru:"ИИ-антиплагиат: ∞",       kk:"Шексіз рет",   zh:"无限AI反剽窃",es:"Anti-Plagio IA: ∞",  de:"KI-Antiplagiat: ∞",    fr:"Anti-Plagiat IA: ∞",   ar:"مكافحة السرقة: ∞",  ja:"AI反剽窃: ∞",   pt:"Anti-Plágio IA: ∞",   shortEn:"∞ Anti-Plagiarism",shortRu:"∞ антиплагиат",  descEn:"Unlimited internet scans.",     descRu:"Безлимитные сканирования." },
            { icon:"🎁", qty:"∞",   en:"Unlimited Secret Gifts", ru:"Подарки: ∞",              kk:"Шексіз сыйлық",zh:"无限神秘礼物",es:"Regalos ilimitados",  de:"∞ Geheimnisvolle Geschenke",fr:"Cadeaux illimités",  ar:"هدايا غير محدودة", ja:"無限の秘密の贈り物",pt:"Presentes ilimitados", shortEn:"∞ Gifts",          shortRu:"∞ подарков",      descEn:"Unlimited mystery rewards.",    descRu:"Безлимитные награды." }
        ]
    },

    // ── Tier 8: Unlimited — $999/mo ★ Only 50 left ★ Gold Frame ──────────────
    {
        id: "tier_8_unlimited", index: 8, usdPrice: 999, badge: "TIER 08 • UNLIMITED",
        nameEn: "Unlimited", nameRu: "Безлимитный", nameKk: "Шексіз",
        nameZh: "无限制版", nameEs: "Ilimitado", nameDe: "Unbegrenzt",
        nameFr: "Illimité", nameAr: "غير محدود", nameJa: "アンリミテッド", namePt: "Ilimitado",
        taglineEn: "The absolute pinnacle. Everything, forever.",
        taglineRu: "Абсолютная вершина. Всё, навсегда.",
        isPopular: false, isUnlimited: true, limitedSlots: 50,
        features: [
            { icon:"♾️", qty:"∞",  en:"Everything in Ultra — Unlimited",ru:"Всё из Ультра — Безлимит",kk:"Ультрадан барлығы — шексіз",zh:"超级版全部内容",es:"Todo de Ultra — Ilimitado",de:"Alles aus Ultra — Unbegrenzt",fr:"Tout d'Ultra — Illimité",ar:"كل شيء من أولترا — غير محدود",ja:"ウルトラの全て — 無限",pt:"Tudo do Ultra — Ilimitado",shortEn:"∞ Everything",shortRu:"∞ Всё",descEn:"Every Ultra feature, fully unlimited.",descRu:"Всё из Ультра, полностью безлимитно." },
            { icon:"🌐", qty:"✓",  en:"Dedicated AI Instance",ru:"Выделенный ИИ-инстанс",kk:"Арнайы ИИ",zh:"专用AI实例",es:"Instancia IA Dedicada",de:"Dedizierte KI-Instanz",fr:"Instance IA Dédiée",ar:"نموذج ذكاء مخصص",ja:"専用AIインスタンス",pt:"Instância IA Dedicada",shortEn:"Dedicated AI",shortRu:"Выдел. ИИ",descEn:"Your own dedicated AI compute.",descRu:"Выделенный ресурс ИИ." },
            { icon:"🛡️", qty:"✓",  en:"Priority Support 24/7",ru:"Приоритетная поддержка 24/7",kk:"Басымды қолдау 24/7",zh:"优先支持 24/7",es:"Soporte Prioritario 24/7",de:"Prioritätssupport 24/7",fr:"Support Prioritaire 24/7",ar:"دعم ذو أولوية 24/7",ja:"優先サポート 24/7",pt:"Suporte Prioritário 24/7",shortEn:"24/7 Support",shortRu:"Поддержка 24/7",descEn:"24/7 priority support.",descRu:"Приоритетная поддержка 24/7." },
            { icon:"👑", qty:"✓",  en:"Status: \"God of Worlds\"",ru:"Статус: «Бог Миров»",kk:"«Дүниелер Құдайы»",zh:"地位: 世界之神",es:"Estado: «Dios de Mundos»",de:"Status: «Gott der Welten»",fr:"Statut: «Dieu des Mondes»",ar:"حالة: «إله العوالم»",ja:"ステータス: 世界の神",pt:"Status: «Deus dos Mundos»",shortEn:"God of Worlds",shortRu:"Бог Миров",descEn:"The highest creator status.",descRu:"Высший статус создателя." },
            { icon:"🔒", qty:"✓",  en:"Early Access to All New Features",ru:"Ранний доступ ко всем новым функциям",kk:"Барлық жаңа мүмкіндіктерге ерте қол жеткізу",zh:"所有新功能早期访问",es:"Acceso anticipado a todo",de:"Frühzugang zu allen Funktionen",fr:"Accès anticipé à tout",ar:"وصول مبكر لكل الميزات",ja:"全機能への早期アクセス",pt:"Acesso antecipado a tudo",shortEn:"Early Access",shortRu:"Ранний доступ",descEn:"First access to every new LBO feature.",descRu:"Первый доступ ко всем новым функциям LBO." },
            { icon:"💎", qty:"✓",  en:"Custom Branding & White-Label",ru:"Кастомный брендинг и белый лейбл",kk:"Арнайы брендинг",zh:"自定义品牌和白标",es:"Branding personalizado",de:"Custom-Branding & White-Label",fr:"Marquage personnalisé",ar:"علامة تجارية مخصصة",ja:"カスタムブランドとホワイトレーベル",pt:"Branding personalizado e White-Label",shortEn:"White-Label",shortRu:"Белый лейбл",descEn:"Your brand on all LBO outputs.",descRu:"Ваш бренд на всех результатах LBO." }
        ]
    }

];

let isPanoramaModeActive = true;

/**
 * Returns localized name for tier
 */
function getTierLocalizedName(tier, lang = 'en') {
    if (lang === 'ru') return tier.nameRu || tier.nameEn;
    if (lang === 'kk') return tier.nameKk || tier.nameRu || tier.nameEn;
    if (lang === 'zh') return tier.nameZh || tier.nameEn;
    if (lang === 'es') return tier.nameEs || tier.nameEn;
    if (lang === 'de') return tier.nameDe || tier.nameEn;
    if (lang === 'fr') return tier.nameFr || tier.nameEn;
    if (lang === 'ar') return tier.nameAr || tier.nameEn;
    if (lang === 'ja') return tier.nameJa || tier.nameEn;
    if (lang === 'pt') return tier.namePt || tier.nameEn;
    return tier.nameEn;
}

/**
 * Returns localized tagline for tier
 */
function getTierLocalizedTagline(tier, lang = 'en') {
    if (lang === 'ru') return tier.taglineRu || tier.taglineEn;
    return tier.taglineEn;
}

/**
 * Returns localized feature title across all languages
 */
function getFeatureTitle(f, lang = 'en') {
    if (f[lang]) return f[lang];
    if (lang === 'ru') return f.ru || f.en;
    if (lang === 'kk') return f.kk || f.ru || f.en;
    if (lang === 'zh') return f.zh || f.en;
    if (lang === 'es') return f.es || f.en;
    if (lang === 'de') return f.de || f.en;
    if (lang === 'fr') return f.fr || f.en;
    if (lang === 'ar') return f.ar || f.en;
    if (lang === 'ja') return f.ja || f.en;
    if (lang === 'pt') return f.pt || f.en;
    return f.en || f.ru || '';
}

/**
 * Returns localized short chip label for panorama distance matrix
 */
function getFeatureShort(f, lang = 'en') {
    const key = 'short' + lang.charAt(0).toUpperCase() + lang.slice(1);
    if (f[key]) return f[key];
    if (lang === 'ru') return f.shortRu || f.ru || f.en;
    if (lang === 'kk') return f.shortKk || f.shortRu || f.kk || f.en;
    if (lang === 'zh') return f.shortZh || f.zh || f.en;
    if (lang === 'es') return f.shortEs || f.es || f.en;
    if (lang === 'de') return f.shortDe || f.de || f.en;
    if (lang === 'fr') return f.shortFr || f.fr || f.en;
    if (lang === 'ar') return f.shortAr || f.ar || f.en;
    if (lang === 'ja') return f.shortJa || f.ja || f.en;
    if (lang === 'pt') return f.shortPt || f.pt || f.en;
    return f.shortEn || f.en || f.ru || '';
}

/**
 * Returns localized description for hover popover
 */
function getFeatureDesc(f, lang = 'en') {
    const key = 'desc' + lang.charAt(0).toUpperCase() + lang.slice(1);
    if (f[key]) return f[key];
    if (lang === 'ru') return f.descRu || f.descEn;
    if (lang === 'kk') return f.descKk || f.descRu || f.descEn;
    if (lang === 'zh') return f.descZh || f.descEn;
    if (lang === 'es') return f.descEs || f.descEn;
    if (lang === 'de') return f.descDe || f.descEn;
    if (lang === 'fr') return f.descFr || f.descEn;
    if (lang === 'ar') return f.descAr || f.descEn;
    if (lang === 'ja') return f.descJa || f.descEn;
    if (lang === 'pt') return f.descPt || f.descEn;
    return f.descEn || f.descRu || '';
}

/**
 * Returns clean quota badge string for distance-reading
 */
function getFeatureQty(f) {
    if (f.qty) return f.qty;
    const str = f.en || f.ru || '';
    const match = str.match(/^([0-9,.]+)/);
    if (match) return match[1];
    return '✓';
}

/**
 * Renders the 10 Vertical Tier Cards into the designated container
 */
function render10PricingTiers(containerId = 'publicPlansContainer', lang = 'en') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const isRu = (lang === 'ru');
    const isEn = (lang === 'en');

    // Section Titles
    const titlePricingTab = isRu ? "⚡ 10 Тарифных Планов Творца" : (isEn ? "⚡ 10 Sovereign Creator Tiers" : "⚡ 10 Creator Tiers");
    const titleRoadmapTab = isRu ? "🚀 Дорожная Карта Платформы (2026-2027)" : (isEn ? "🚀 Platform Quantum Roadmap (2026-2027)" : "🚀 Quantum Roadmap");
    const subPricing = isRu 
        ? "Выберите план для доступа к ИИ-генерации видео, арта, синопсисов, картографу и соавторству. Цены автоматически пересчитаны в валюту вашей страны." 
        : "Select a sovereign tier to unleash generative AI video, character dialogs, synopses, and cartography. Prices automatically localized in your country's currency.";

    const selectPlanBtnTxt = isRu ? "Выбрать этот тариф" : (isEn ? "Select This Tier" : "Select Tier");
    const activePlanBadge = isRu ? "✓ Активный план" : "✓ Active Tier";
    const monthlyBillingTxt = isRu ? "в месяц / бессрочно для Базового" : "per month / lifetime for Basic";

    container.innerHTML = `
        <div class="pricing-plans-master-wrapper">
            
            <!-- Tab Controls -->
            <div class="plans-portal-tab-bar">
                <button class="plans-tab-btn active" id="tabBtnPricing" onclick="switchPlansModalTab('pricing')">
                    ${titlePricingTab}
                </button>
                <button class="plans-tab-btn" id="tabBtnRoadmap" onclick="switchPlansModalTab('roadmap')">
                    ${titleRoadmapTab}
                </button>
            </div>

            <!-- TAB 1: PRICING TIERS PANE -->
            <div class="plans-tab-pane active" id="panePricingTiers">
                <div class="pricing-hero-intro">
                    <p class="pricing-hero-sub">${escapeHTML(subPricing)}</p>
                    <div class="pricing-currency-pill">
                        <span class="currency-indicator-dot"></span>
                        <span id="pricingCurrencyTelemetry">
                            ${isRu ? "Валюта: " : "Currency: "} <strong>${formatLocalizedTierPrice(0, lang, 'verbalOnly')}</strong> (${lang.toUpperCase()})
                        </span>
                    </div>
                </div>

                <!-- Category Filter & Layout Controls -->
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; margin-bottom: 20px;">
                    <div class="plans-category-bar" style="margin-bottom: 0;">
                        <button class="plans-category-chip active" onclick="filterPricingCategory('all', this)">
                            ${isRu ? '🌟 Все 10 Тарифов' : '🌟 All 10 Tiers'}
                        </button>
                        <button class="plans-category-chip" onclick="filterPricingCategory('starter', this)">
                            ${isRu ? '🚀 Бесплатный и Базовые (1-3)' : '🚀 Free & Starter (1-3)'}
                        </button>
                        <button class="plans-category-chip" onclick="filterPricingCategory('creator', this)">
                            ${isRu ? '⚡ Профи и Творцы (4-6)' : '⚡ Creator & Pro (4-6)'}
                        </button>
                        <button class="plans-category-chip" onclick="filterPricingCategory('enterprise', this)">
                            ${isRu ? '👑 Студия и Infinity (7-10)' : '👑 Studio & Infinity (7-10)'}
                        </button>
                    </div>

                    <div style="display: flex; gap: 10px; align-items: center;">
                        <button class="plans-viewmode-btn ${isPanoramaModeActive ? 'active' : ''}" onclick="togglePanoramaMatrixMode()" id="btnTogglePanoramaMode" title="Switch 1-Window Distance View / Detailed List">
                            👁️ <span id="txtPanoramaToggle">${isPanoramaModeActive ? (isRu ? 'В 1 окне (Издалека)' : '1-Window (Far View)') : (isRu ? 'Развернутый список' : 'Detailed List')}</span>
                        </button>
                        <button class="btn-header-action" onclick="togglePricingLayout()" id="btnTogglePricingLayout" style="padding: 8px 16px; font-size: 0.82rem;" title="Switch Grid / Track View">
                            ⊞ ${isRu ? 'Вид Сетки' : 'Grid View'}
                        </button>
                    </div>
                </div>

                <!-- 10 Vertical Rectangular Cards Grid -->
                <div class="pricing-tiers-scroll-container" id="pricingTiersContainerWrapper">
                    <div class="pricing-tiers-grid ${isPanoramaModeActive ? 'view-mode-panorama' : 'view-mode-detailed'}" id="pricingTiersGridEl">
                        ${LITALLY_TIERS_DATA.map(tier => {
                            const localizedName = getTierLocalizedName(tier, lang);
                            const localizedTagline = getTierLocalizedTagline(tier, lang);
                            const localizedPriceStr = formatLocalizedTierPrice(tier.usdPrice, lang, 'dual');
                            const isBasic = (tier.usdPrice === 0);

                            // Category mapping
                            const catGroup = tier.index <= 3 ? 'starter' : (tier.index <= 6 ? 'creator' : 'enterprise');

                            const isUnlimited = !!tier.isUnlimited;
                            const hasBilling  = !isBasic;
                            const unlimLabel  = {en:'Only 50 left',ru:'Осталось 50 мест',kk:'50 орын қалды',zh:'仅剩50席',es:'Solo 50 lugares',de:'Nur noch 50',fr:'Plus que 50',ar:'50 فقط',ja:'残り50枠',pt:'Apenas 50 restam'}[lang] || 'Only 50 left';

                            return `
                                <div class="pricing-tier-card ${isBasic ? 'tier-basic-highlight' : ''} ${tier.isPopular ? 'tier-popular-highlight' : ''} ${isUnlimited ? 'tier-card-unlimited' : ''} ${hasBilling ? 'has-billing-tabs' : ''}" 
                                     id="tierCard-${tier.id}" 
                                     data-tier-index="${tier.index}"
                                     data-tier-cat="${catGroup}">
                                    
                                    ${isBasic ? `<div class="tier-basic-vertical-banner"><span>${isRu ? 'БАЗОВЫЙ' : (lang === 'kk' ? 'БАЗАЛЫҚ' : 'BASIC')}</span></div>` : ''}
                                    ${tier.isPopular ? `<div class="tier-popular-ribbon">${isRu ? 'ПОПУЛЯРНЫЙ' : 'MOST POPULAR'}</div>` : ''}
                                    ${isUnlimited ? `<div class="lbo-unlimited-badge">⭐ ${unlimLabel}</div>` : ''}
                                    
                                    <div class="tier-card-header">
                                        <span class="tier-badge-pill">${escapeHTML(tier.badge)}</span>
                                        <h3 class="tier-card-name">${escapeHTML(localizedName)}</h3>
                                        <p class="tier-card-tagline">${escapeHTML(localizedTagline)}</p>
                                    </div>

                                    ${hasBilling
                                        ? (typeof buildBillingTabs === 'function' ? buildBillingTabs(tier, lang) : `<div class="lbo-billing-wrap"><span class="lbo-bill-pnum">${escapeHTML(localizedPriceStr)}</span></div>`)
                                        : `<div class="tier-price-box">
                                            <div class="tier-price-amount" title="${tier.usdPrice} USD">
                                                ${escapeHTML(localizedPriceStr)}
                                            </div>
                                            <div class="tier-price-period">
                                                ${isBasic ? (isRu ? '0 расходов • Навсегда' : (lang === 'kk' ? '0 шығын • Мәңгілікке' : '0 Cost • Forever')) : monthlyBillingTxt}
                                            </div>
                                        </div>`
                                    }

                                    <div class="tier-divider-line"></div>

                                    <!-- Distance-Vision Quick Telemetry HUD -->
                                    <div class="tier-distance-hud">
                                        <div class="distance-hud-header">
                                            <span class="distance-hud-tag">⚡ ${isBasic ? (isRu ? '15 ФУНКЦИЙ • В 1 ОКНЕ' : (lang === 'kk' ? '15 ФУНКЦИЯ • 1 ТЕРЕЗЕДЕ' : '15 FEATURES • IN 1 WINDOW')) : (isRu ? 'КЛЮЧЕВЫЕ КВОТЫ' : 'KEY QUOTAS')}</span>
                                            <span class="distance-hud-status">${isBasic ? (isRu ? '$0 НАВСЕГДА' : '$0 FOREVER') : (isRu ? 'PRO ДОСТУП' : 'PRO ACCESS')}</span>
                                        </div>
                                        <div class="distance-hud-ticker" title="${tier.features.map(f => `${f.icon} ${getFeatureShort(f, lang)}`).join(' | ')}">
                                            ${tier.features.map(f => `${f.icon} ${getFeatureQty(f)}`).join(' • ')}
                                        </div>
                                    </div>

                                    <!-- 2-Column Panorama Matrix (Visible from afar in 1 window) -->
                                    <div class="tier-features-matrix" id="matrix-${tier.id}">
                                        ${tier.features.map(f => {
                                            const featTitle = getFeatureTitle(f, lang);
                                            const featShort = getFeatureShort(f, lang);
                                            const featDesc = getFeatureDesc(f, lang);
                                            const featQty = getFeatureQty(f);
                                            return `
                                                <div class="tier-matrix-chip" tabindex="0" title="${escapeHTML(featDesc || featTitle)}">
                                                    <div class="matrix-chip-badge">
                                                        <span class="matrix-chip-icon">${f.icon}</span>
                                                        <span class="matrix-chip-qty">${escapeHTML(featQty)}</span>
                                                    </div>
                                                    <div class="matrix-chip-info">
                                                        <span class="matrix-chip-name">${escapeHTML(featShort)}</span>
                                                    </div>
                                                    <div class="matrix-chip-popover">
                                                        <div class="popover-header">
                                                            <span class="popover-icon">${f.icon}</span>
                                                            <strong>${escapeHTML(featTitle)}</strong>
                                                        </div>
                                                        <div class="popover-desc">${escapeHTML(featDesc || featTitle)}</div>
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                        <div class="tier-matrix-sovereign-note">
                                            🛡️ ${isRu ? '100% авторские права остаются у вас' : '100% Full Copyright Sovereignty'}
                                        </div>
                                    </div>

                                    <!-- Detailed Linear List (Toggled via viewmode button) -->
                                    <div class="tier-features-list">
                                        ${tier.features.map(f => {
                                            const featTitle = getFeatureTitle(f, lang);
                                            const featDesc = getFeatureDesc(f, lang);
                                            const featQty = getFeatureQty(f);
                                            return `
                                                <div class="tier-feature-item">
                                                    <span class="tier-feature-icon">${f.icon}</span>
                                                    <div class="tier-feature-text-block">
                                                        <div style="display:flex; align-items:center; gap:8px;">
                                                            <span class="tier-feature-title">${escapeHTML(featTitle)}</span>
                                                            ${featQty !== '✓' ? `<span class="matrix-chip-qty" style="font-size:0.75rem; background:rgba(0,0,0,0.4); padding:1px 6px; border-radius:4px; border:1px solid rgba(255,215,0,0.3);">${escapeHTML(featQty)}</span>` : ''}
                                                        </div>
                                                        ${featDesc ? `<span class="tier-feature-desc">${escapeHTML(featDesc)}</span>` : ''}
                                                    </div>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>

                                    <button class="tier-cta-button ${isBasic ? 'tier-cta-basic' : ''}" onclick="selectSubscriptionTier('${tier.id}')">
                                        <span>${escapeHTML(selectPlanBtnTxt)}</span>
                                        <span style="font-size: 1.1rem;">→</span>
                                    </button>

                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div class="pricing-guarantee-footer">
                    <span>🛡️ ${isRu ? '100% суверенитет: вы сохраняете полные авторские права на любые тексты, сюжеты и арты.' : '100% Creator Sovereignty: You retain full intellectual copyright over all generated literature and visuals.'}</span>
                </div>
            </div>

            <!-- TAB 2: TECHNICAL ROADMAP PANE -->
            <div class="plans-tab-pane" id="paneTechnicalRoadmap" style="display: none;">
                <div id="roadmapContentWrapper"></div>
            </div>

        </div>
    `;

    // Also populate Roadmap Pane if data is available
    if (typeof LITALLY_PORTALS_DATA !== 'undefined') {
        const data = LITALLY_PORTALS_DATA[lang] || LITALLY_PORTALS_DATA.en || LITALLY_PORTALS_DATA.ru;
        const roadmapContainer = document.getElementById('roadmapContentWrapper');
        if (roadmapContainer && data && data.plans) {
            roadmapContainer.innerHTML = `
                <div class="plans-roadmap-wrapper">
                    <div class="plans-timeline">
                        ${data.plans.map((item, idx) => `
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
    }
}

/**
 * Toggle between Panorama Matrix (1 window from afar) and Detailed List
 */
window.togglePanoramaMatrixMode = function() {
    isPanoramaModeActive = !isPanoramaModeActive;
    const grid = document.getElementById('pricingTiersGridEl');
    const btn = document.getElementById('btnTogglePanoramaMode');
    const txt = document.getElementById('txtPanoramaToggle');
    const lang = (typeof currentLang !== 'undefined' && currentLang) ? currentLang : 'en';
    const isRu = (lang === 'ru');

    if (grid) {
        if (isPanoramaModeActive) {
            grid.classList.remove('view-mode-detailed');
            grid.classList.add('view-mode-panorama');
            if (btn) btn.classList.add('active');
            if (txt) txt.textContent = isRu ? 'В 1 окне (Издалека)' : '1-Window (Far View)';
        } else {
            grid.classList.remove('view-mode-panorama');
            grid.classList.add('view-mode-detailed');
            if (btn) btn.classList.remove('active');
            if (txt) txt.textContent = isRu ? 'Развернутый список' : 'Detailed List';
        }
    }
    if (typeof playChime === 'function') playChime(950);
};

/**
 * Switch tabs in Plans modal between Pricing and Roadmap
 */
function switchPlansModalTab(tabName) {
    const panePricing = document.getElementById('panePricingTiers');
    const paneRoadmap = document.getElementById('paneTechnicalRoadmap');
    const btnPricing = document.getElementById('tabBtnPricing');
    const btnRoadmap = document.getElementById('tabBtnRoadmap');

    if (tabName === 'pricing') {
        if (panePricing) panePricing.style.display = 'block';
        if (paneRoadmap) paneRoadmap.style.display = 'none';
        if (btnPricing) btnPricing.classList.add('active');
        if (btnRoadmap) btnRoadmap.classList.remove('active');
    } else {
        if (panePricing) panePricing.style.display = 'none';
        if (paneRoadmap) paneRoadmap.style.display = 'block';
        if (btnPricing) btnPricing.classList.remove('active');
        if (btnRoadmap) btnRoadmap.classList.add('active');
    }

    if (typeof playChime === 'function') playChime(800);
}

/**
 * Handles Tier Selection with localized checkout toast / confirmation
 */
function selectSubscriptionTier(tierId) {
    const tier = LITALLY_TIERS_DATA.find(t => t.id === tierId);
    if (!tier) return;

    const lang = (typeof currentLang !== 'undefined' && currentLang) ? currentLang : 'en';
    const isRu = (lang === 'ru');
    const localizedName = getTierLocalizedName(tier, lang);
    const priceStr = formatLocalizedTierPrice(tier.usdPrice, lang, 'dual');

    // Highlight selected card visually
    document.querySelectorAll('.pricing-tier-card').forEach(c => c.classList.remove('user-selected-tier'));
    const selectedCard = document.getElementById(`tierCard-${tierId}`);
    if (selectedCard) {
        selectedCard.classList.add('user-selected-tier');
    }

    // Interactive Toast Notification
    const toastTitle = isRu ? `Тариф «${localizedName}» активирован!` : `Tier "${localizedName}" Selected!`;
    const f0 = getFeatureTitle(tier.features[0], lang);
    const f1 = getFeatureTitle(tier.features[1] || tier.features[0], lang);
    const f2 = getFeatureTitle(tier.features[2] || tier.features[0], lang);
    const toastBody = isRu 
        ? `Стоимость: ${priceStr}. Доступны: ${f0}, ${f1}, ${f2}. Приятного творчества!`
        : `Price: ${priceStr}. Allocated: ${f0}, ${f1}, ${f2}. Happy worldbuilding!`;

    if (typeof showSovereignToast === 'function') {
        showSovereignToast(toastTitle, toastBody);
    } else {
        alert(`${toastTitle}\n\n${toastBody}`);
    }

    if (typeof playChime === 'function') playChime(1100);
}

/**
 * Filter pricing tiers by category: 'all', 'starter', 'creator', 'enterprise'
 */
window.filterPricingCategory = function(cat, chip) {
    if (chip) {
        document.querySelectorAll('.plans-category-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
    }
    const cards = document.querySelectorAll('.pricing-tier-card');
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-tier-cat');
        if (cat === 'all' || cardCat === cat) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
    if (typeof playChime === 'function') playChime(750);
};

/**
 * Toggle between 4K Multi-Column Responsive Grid and Horizontal Track
 */
window.togglePricingLayout = function() {
    const wrapper = document.getElementById('pricingTiersContainerWrapper');
    const btn = document.getElementById('btnTogglePricingLayout');
    if (!wrapper) return;
    const isTrack = wrapper.classList.toggle('mode-horizontal-track');
    const lang = (typeof currentLang !== 'undefined' && currentLang) ? currentLang : 'en';
    const isRu = (lang === 'ru');
    if (btn) {
        btn.textContent = isTrack 
            ? (isRu ? '↔ Вид Ленты' : '↔ Track View')
            : (isRu ? '⊞ Вид Сетки' : '⊞ Grid View');
    }
    if (typeof playChime === 'function') playChime(850);
};

// Standalone Toast notification engine for 4K feedback
function showSovereignToast(title, body) {
    let toast = document.getElementById('sovereignToastEl');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'sovereignToastEl';
        toast.className = 'sovereign-toast-container';
        document.body.appendChild(toast);
    }

    toast.innerHTML = `
        <div class="sovereign-toast-box">
            <div class="toast-sparkle">✦</div>
            <div>
                <div class="toast-title">${escapeHTML(title)}</div>
                <div class="toast-body">${escapeHTML(body)}</div>
            </div>
            <button class="toast-close-btn" onclick="this.parentElement.parentElement.classList.remove('show')">✕</button>
        </div>
    `;

    toast.classList.add('show');
    setTimeout(() => {
        if (toast) toast.classList.remove('show');
    }, 5500);
}

// =============================================================================
// SECTION 20: ADDITIONAL TIER DATA EXPANSION (Tiers 2-10 detailed features)
// =============================================================================

// Ensure each tier has full multilingual taglines
(function expandTierData() {
    var taglines = {
        en: [
            "Free access for emerging writers and curious readers",
            "The first step for serious creators",
            "Unleash your creative potential",
            "Write your bestselling novel",
            "Your own creative studio",
            "Build worlds without limits",
            "Architect of a sovereign creative guild",
            "Join the mythic pantheon of creators",
            "Infinite creation, infinite sovereignty"
        ],
        ru: [
            "Бесплатный вход для начинающих писателей и пытливых читателей",
            "Первый шаг для серьёзных создателей",
            "Раскройте свой творческий потенциал",
            "Напишите свой бестселлер",
            "Ваша собственная творческая студия",
            "Стройте миры без ограничений",
            "Архитектор суверенной творческой гильдии",
            "Войдите в мифический пантеон создателей",
            "Бесконечное творчество, бесконечный суверенитет"
        ]
    };

    if (typeof LITALLY_TIERS_DATA !== 'undefined') {
        LITALLY_TIERS_DATA.forEach(function(tier, idx) {
            if (!tier.taglineEn && taglines.en[idx]) {
                tier.taglineEn = taglines.en[idx];
            }
            if (!tier.taglineRu && taglines.ru[idx]) {
                tier.taglineRu = taglines.ru[idx];
            }
        });
    }
})();

// =============================================================================
// SECTION 21: PRICE ANIMATION ENGINE
// =============================================================================

var _lboPriceAnimTimers = {};

function animatePriceUpdate(cardEl, newPrice) {
    var priceEl = cardEl && cardEl.querySelector('.lbo-card-price-num');
    if (!priceEl) return;
    cardEl.classList.add('lbo-price-updating');
    priceEl.textContent = newPrice;
    setTimeout(function() { cardEl.classList.remove('lbo-price-updating'); }, 450);
}

function animateAllPrices(tiersData, lang) {
    if (!tiersData) return;
    var cards = document.querySelectorAll('.lbo-plan-card-v2');
    cards.forEach(function(card, idx) {
        var tier = tiersData[idx];
        if (!tier) return;
        var price = tier.usdPrice === 0 ? '0' : (
            typeof formatLocalizedTierPrice === 'function'
                ? formatLocalizedTierPrice(tier.usdPrice, lang, 'symbol').replace(/[^0-9.,]/g, '')
                : String(tier.usdPrice)
        );
        var id = 'price_anim_' + idx;
        if (_lboPriceAnimTimers[id]) clearTimeout(_lboPriceAnimTimers[id]);
        _lboPriceAnimTimers[id] = setTimeout(function() {
            animatePriceUpdate(card, price);
        }, idx * 40);
    });
}

// =============================================================================
// SECTION 22: LANGUAGE SWITCH HANDLER FOR V2 CARDS
// =============================================================================

function onLBOLanguageSwitch(newLang) {
    // Re-render hero + cards in new language
    var container = document.getElementById('publicPlansContainer');
    if (!container) return;

    // Check if we are in the new V2 mode (hero canvas exists)
    var canvas = container.querySelector('.lbo-plans-sovereign-canvas');
    if (!canvas) return;

    // Re-render from scratch
    if (typeof renderLBOPricingHero === 'function') {
        renderLBOPricingHero('publicPlansContainer', newLang);
        setTimeout(function() {
            if (typeof renderLBOPlanCardsV2 === 'function' && typeof LITALLY_TIERS_DATA !== 'undefined') {
                renderLBOPlanCardsV2('lboPlanCardsGrid', LITALLY_TIERS_DATA, newLang);
            }
        }, 0);
    }
}

// =============================================================================
// SECTION 23: TIER COMPARISON FEATURE TABLE DATA
// =============================================================================

var LBO_COMPARISON_FEATURES = [
    {
        key: 'tokens',
        en: 'Linar Tokens',
        ru: 'Линар Токены',
        values: ['50','150','300','500','800','1200','2000','3500','5000','∞']
    },
    {
        key: 'timecaps',
        en: 'Script Time Capsules',
        ru: 'Капсулы сценариев',
        values: ['2','5','10','15','20','30','50','75','100','∞']
    },
    {
        key: 'trendrep',
        en: 'AI Trend Reports',
        ru: 'Отчёты о трендах',
        values: ['3','5','10','15','20','30','50','75','100','∞']
    },
    {
        key: 'namegen',
        en: 'Name Generator Uses',
        ru: 'Генератор имён',
        values: ['7','15','30','50','80','120','200','350','500','∞']
    },
    {
        key: 'voice',
        en: 'AI Voice Choices',
        ru: 'Выбор голоса ИИ',
        values: ['2','3','5','8','12','18','25','35','50','∞']
    },
    {
        key: 'textfix',
        en: 'Text Corrections',
        ru: 'Исправления текста',
        values: ['20','50','100','200','400','800','1500','3000','5000','∞']
    },
    {
        key: 'architect',
        en: 'AI Architect Messages',
        ru: 'Сообщения архитектору',
        values: ['40','100','200','400','800','1600','3000','6000','10000','∞']
    },
    {
        key: 'cartog',
        en: 'AI Cartographer Uses',
        ru: 'Использование картографа',
        values: ['2','5','10','20','40','80','150','300','600','∞']
    },
    {
        key: 'psychol',
        en: 'Lore Psychologist Uses',
        ru: 'Психолог лора',
        values: ['2','5','10','20','40','80','150','300','600','∞']
    },
    {
        key: 'video',
        en: 'Video Generations',
        ru: 'Генерация видео',
        values: ['1','3','6','12','20','40','80','160','320','∞']
    }
];

function renderTierComparisonFull(containerId, lang) {
    var container = document.getElementById(containerId);
    if (!container || typeof LITALLY_TIERS_DATA === 'undefined') return;
    var isRu = (lang === 'ru');

    var tierNames = LITALLY_TIERS_DATA.map(function(t) {
        return isRu ? (t.nameRu || t.nameEn) : (t.nameEn || 'Tier');
    });

    var headerCells = ['<th></th>'].concat(tierNames.map(function(n, i) {
        var t = LITALLY_TIERS_DATA[i];
        var price = t.usdPrice === 0 ? '$0' : ('$' + t.usdPrice);
        return '<th><div class="lbo-comp-tier-name">' + n + '</div><div class="lbo-comp-tier-price">' + price + '</div></th>';
    })).join('');

    var bodyRows = LBO_COMPARISON_FEATURES.map(function(feat) {
        var label = isRu ? feat.ru : feat.en;
        var cells = feat.values.map(function(v, i) {
            var isElite = (i >= 8);
            var cls = isElite ? ' class="lbo-comp-elite-val"' : '';
            return '<td' + cls + '>' + v + '</td>';
        }).join('');
        return '<tr><td class="lbo-comp-feat-label">' + label + '</td>' + cells + '</tr>';
    }).join('');

    container.innerHTML =
        '<div style="overflow-x:auto;">' +
        '<table class="lbo-comparison-table" style="min-width:900px;">' +
            '<thead><tr>' + headerCells + '</tr></thead>' +
            '<tbody>' + bodyRows + '</tbody>' +
        '</table></div>';
}

// =============================================================================
// SECTION 24: TIER UPGRADE VISUAL FEEDBACK
// =============================================================================

function flashTierCard(tierIndex) {
    var cards = document.querySelectorAll('.lbo-plan-card-v2');
    var card = cards[tierIndex];
    if (!card) return;
    card.classList.remove('lbo-card-selected-flash');
    void card.offsetWidth; // force reflow
    card.classList.add('lbo-card-selected-flash');
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// =============================================================================
// SECTION 25: SOVEREIGN TOAST MULTILINGUAL WRAPPER
// =============================================================================

function showTierSelectedToast(tierData, lang) {
    if (!tierData) return;
    var isRu = (lang === 'ru');
    var name = isRu ? (tierData.nameRu || tierData.nameEn) : (tierData.nameEn || 'Tier');
    var price = tierData.usdPrice === 0
        ? (isRu ? '0 долларов' : '$0 — Free')
        : (typeof formatLocalizedTierPrice === 'function'
            ? formatLocalizedTierPrice(tierData.usdPrice, lang, 'symbol')
            : '$' + tierData.usdPrice);

    var title = isRu
        ? ('✦ Уровень выбран: ' + name)
        : ('✦ Tier Selected: ' + name);
    var body = isRu
        ? ('Цена: ' + price + ' — Активируем вашу подписку...')
        : ('Price: ' + price + ' — Activating your subscription...');

    if (typeof showSovereignToast === 'function') {
        showSovereignToast(title, body);
    } else {
        console.log('[LBO]', title, body);
    }
}

// Hook into selectSubscriptionTier
var _origSelectTier = (typeof selectSubscriptionTier !== 'undefined') ? selectSubscriptionTier : null;
function selectSubscriptionTier(tierIndex) {
    var lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
    if (typeof LITALLY_TIERS_DATA !== 'undefined' && LITALLY_TIERS_DATA[tierIndex]) {
        flashTierCard(tierIndex);
        showTierSelectedToast(LITALLY_TIERS_DATA[tierIndex], lang);
    }
    if (_origSelectTier && _origSelectTier !== selectSubscriptionTier) {
        _origSelectTier(tierIndex);
    }
    if (typeof playChime === 'function') { playChime(528); }
}

// =============================================================================
// SECTION 26: UTILITY — GET TIER BY ID
// =============================================================================

function getTierById(tierId) {
    if (typeof LITALLY_TIERS_DATA === 'undefined') return null;
    return LITALLY_TIERS_DATA.find(function(t) { return t.id === tierId; }) || null;
}

function getTierByIndex(idx) {
    if (typeof LITALLY_TIERS_DATA === 'undefined') return null;
    return LITALLY_TIERS_DATA[idx] || null;
}

function getFreeTier() {
    if (typeof LITALLY_TIERS_DATA === 'undefined') return null;
    return LITALLY_TIERS_DATA.find(function(t) { return t.usdPrice === 0; }) || LITALLY_TIERS_DATA[0];
}

// =============================================================================
// SECTION 27: CATEGORY FILTER LOGIC
// =============================================================================

var LBO_TIER_CATEGORIES = {
    tier_1_basic:           ['all', 'create', 'free'],
    tier_2_starter:         ['all', 'create', 'generate'],
    tier_3_creator:         ['all', 'create', 'generate', 'publish'],
    tier_4_novelist:        ['all', 'create', 'generate', 'publish'],
    tier_5_bestseller:      ['all', 'generate', 'publish', 'analyze'],
    tier_6_studio:          ['all', 'publish', 'analyze'],
    tier_7_world_architect: ['all', 'publish', 'analyze', 'elite'],
    tier_8_sovereign_guild: ['all', 'elite'],
    tier_9_mythic_pantheon: ['all', 'elite'],
    tier_10_infinity:       ['all', 'elite']
};

function getTierCategories(tierId) {
    return LBO_TIER_CATEGORIES[tierId] || ['all'];
}

// =============================================================================
// SECTION 28: SCROLLABLE HORIZONTAL CARD RAIL (mobile)
// =============================================================================

function initLBOCardRailScroll() {
    var grid = document.getElementById('lboPlanCardsGrid');
    if (!grid) return;
    if (window.innerWidth > 540) return; // only mobile

    var wrap = document.createElement('div');
    wrap.style.cssText = 'position:relative;width:100%;';

    var leftBtn = document.createElement('button');
    leftBtn.className = 'lbo-scroll-arrow lbo-arrow-left';
    leftBtn.textContent = '←';
    leftBtn.onclick = function() { grid.scrollBy({ left: -300, behavior: 'smooth' }); };

    var rightBtn = document.createElement('button');
    rightBtn.className = 'lbo-scroll-arrow lbo-arrow-right';
    rightBtn.textContent = '→';
    rightBtn.onclick = function() { grid.scrollBy({ left: 300, behavior: 'smooth' }); };

    grid.style.overflowX = 'auto';
    grid.style.scrollSnapType = 'x mandatory';
    grid.querySelectorAll('.lbo-plan-card-v2').forEach(function(card) {
        card.style.scrollSnapAlign = 'start';
        card.style.minWidth = '280px';
    });

    grid.parentNode.insertBefore(wrap, grid);
    wrap.appendChild(leftBtn);
    wrap.appendChild(grid);
    wrap.appendChild(rightBtn);
}

// =============================================================================
// SECTION 29: KEYBOARD SHORTCUT HANDLER FOR TIERS
// =============================================================================

document.addEventListener('keydown', function(e) {
    if (!e.altKey) return;
    var num = parseInt(e.key);
    if (num >= 1 && num <= 9) {
        e.preventDefault();
        selectSubscriptionTier(num - 1);
    }
    if (e.key === '0') {
        e.preventDefault();
        selectSubscriptionTier(9);
    }
});

// =============================================================================
// SECTION 30: TIER PRICE FORMATTER FALLBACK
// =============================================================================

if (typeof formatLocalizedTierPrice === 'undefined') {
    function formatLocalizedTierPrice(usdAmount, langCode, formatStyle) {
        var currencyMap = {
            ru: { symbol: '₽', rate: 90 },
            kk: { symbol: '₸', rate: 450 },
            zh: { symbol: '¥', rate: 7.2 },
            ja: { symbol: '¥', rate: 150 },
            de: { symbol: '€', rate: 0.92 },
            fr: { symbol: '€', rate: 0.92 },
            es: { symbol: '€', rate: 0.92 },
            pt: { symbol: 'R$', rate: 5.0 },
            ar: { symbol: 'د.إ', rate: 3.67 }
        };
        var cur = currencyMap[langCode] || { symbol: '$', rate: 1 };
        var converted = Math.round(usdAmount * cur.rate);
        return cur.symbol + converted;
    }
}

// =============================================================================
// SECTION 31: PLAN SELECTION STATE MANAGEMENT
// =============================================================================

var _lboSelectedTierIndex = null;
var _lboSelectedTierId = null;

function getLBOSelectedTier() {
    return {
        index: _lboSelectedTierIndex,
        id: _lboSelectedTierId,
        data: (_lboSelectedTierIndex !== null && typeof LITALLY_TIERS_DATA !== 'undefined')
            ? LITALLY_TIERS_DATA[_lboSelectedTierIndex]
            : null
    };
}

function setLBOSelectedTier(index) {
    _lboSelectedTierIndex = index;
    _lboSelectedTierId = (typeof LITALLY_TIERS_DATA !== 'undefined' && LITALLY_TIERS_DATA[index])
        ? LITALLY_TIERS_DATA[index].id
        : null;

    // Update UI — add selected class
    document.querySelectorAll('.lbo-plan-card-v2').forEach(function(card, i) {
        card.classList.toggle('lbo-card-selected', i === index);
    });
}

// =============================================================================
// SECTION 32: EXPORT / SHARE SELECTED PLAN
// =============================================================================

function shareLBOTierLink(tierIndex) {
    if (typeof LITALLY_TIERS_DATA === 'undefined' || !LITALLY_TIERS_DATA[tierIndex]) return;
    var tier = LITALLY_TIERS_DATA[tierIndex];
    var url = window.location.href.split('?')[0] + '?tier=' + (tier.id || tierIndex);
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function() {
            if (typeof showSovereignToast === 'function') {
                showSovereignToast('Link Copied!', 'Share your tier selection with others.');
            }
        });
    }
}

// Read tier from URL on load
(function readTierFromUrl() {
    var params = new URLSearchParams(window.location.search);
    var tierParam = params.get('tier');
    if (!tierParam) return;
    setTimeout(function() {
        if (typeof LITALLY_TIERS_DATA === 'undefined') return;
        var idx = LITALLY_TIERS_DATA.findIndex(function(t) { return t.id === tierParam; });
        if (idx >= 0) {
            setLBOSelectedTier(idx);
            flashTierCard(idx);
        }
    }, 800);
})();


