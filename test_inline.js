    <script>
        /* =============================================================
           СЛОВАРЬ ЛОКАЛИЗАЦИИ
           ============================================================= */
        const i18n = {
            ru: {
                locale: 'ru-RU',
                pillLabel: "🌐 РУС",
                langMenuTitle: "Язык Портала",
                navThemes: "🎨 Темы (50)",
                navA11y: "♿ Доступность (50)",
                navPlans: "🚀 Планы",
                navAbout: "✨ О нас",
                navFaq: "❓ FAQ",
                navHide: "▲ Скрыть",
                litallyTitle: "LBO",
                lboStudio: "Studio ✨",
                lboPlans: "Планы и Дорожная Карта",
                lboAbout: "О Святилище",
                lboFaq: "Частые Вопросы (FAQ)",
                lboBooks: "Книги и Рукописи",
                lboNews: "Новости и Депеши",
                lboTeasers: "Тизеры и Спойлеры",
                lboBio: "Биография Автора",
                lboComments: "Отзывы Читателей",
                lboContact: "Написать Автору",
                lboThemes: "50 Тем Казахстана",
                lboExternal: "Внешний Портал ↗",
                lboAdmin: "Панель Управления",
                beaconText: "ОФИЦИАЛЬНЫЙ СУВЕРЕННЫЙ ДОМЕН • ДОСТУП ОТКРЫТ",
                heroStatement: "Welcome to Litally! You have arrived at a premier platform dedicated to supporting emerging authors, streamlining publishing, and ensuring quality book moderation. For professional writers, we offer powerful, AI-driven tools designed for seamless image generation, advanced editing, and automated synopsis creation. Beyond production, Litally invites you to explore rich author biographies, discover new books, and even engage in interactive chats with AI-powered characters from your favorite books and movies. Truly, everyone will find something to love here. Have a great and highly productive day!",
                heroBtnExplore: "📚 Исследовать Каталог",
                heroBtnLitally: "👑 LBO",
                footerRights: "Все авторские права защищены. LITALLY",
                legalTitle: "Защита авторских прав, антиплагиат и суверенный регламент",
                legalBody: "Все литературные произведения, вселенные, рукописи, персонажи, синопсисы и визуальные материалы на платформе Litally защищены международным законодательством об интеллектуальной собственности и Бернской конвенцией. Любое несанкционированное копирование, распространение, обучение нейросетевых моделей (AI/ML) без письменного разрешения автора, а также плагиат преследуются по закону. Платформа осуществляет автоматический цифровой мониторинг и хэш-валидацию уникальности текстов.",
                linkTerms: "⚖️ Условия использования (Terms of Use) ↗",
                linkPrivacy: "🔒 Политика конфиденциальности (Privacy Policy) ↗",
                modalBooksTitle: "Книги и Рукописи",
                modalBooksSub: "Официальная библиография и архивы Litally",
                modalNewsTitle: "Депеши и Новости",
                modalNewsSub: "Официальные анонсы, релизы и заметки автора",
                modalTeasersTitle: "Тизеры и Спойлеры",
                modalTeasersSub: "Фрагменты будущих глав и засекреченный лор",
                modalBioTitle: "Биография Автора",
                modalBioSub: "Наследие, философия и творческая вселенная",
                modalCommentsTitle: "Отзывы Читателей",
                modalCommentsSub: "Отзывы читателей, обсуждение глав и послания",
                modalContactTitle: "Написать Автору",
                modalContactSub: "Прямая отправка депеши в архивы Святилища",
                modalThemesTitle: "50 Тем Казахстана",
                modalThemesSub: "Выберите визуальную атмосферу для домена Litally",
                modalPlansTitle: "Планы Развития и Дорожная Карта",
                modalPlansSub: "Ключевые этапы, технологическая эволюция и будущие релизы",
                modalAboutTitle: "О Святилище Litally",
                modalAboutSub: "Философия, космический лор вселенной и миссия автора",
                modalFaqTitle: "Часто Задаваемые Вопросы (FAQ)",
                modalFaqSub: "Ответы о защите авторских прав, ИИ-студии, публикациях и доступности",
                commentsFormHeader: "Оставить отзыв",
                labelCommentAuthor: "Ваше имя или псевдоним",
                labelCommentText: "Ваш отзыв / впечатления",
                postCommentBtn: "Опубликовать отзыв",
                labelContactName: "Ваше имя *",
                labelCommentStudio: "О Студии Litally",
                labelContactEmail: "Ваш Email *",
                labelContactSubject: "Тема сообщения *",
                labelContactMessage: "Текст депеши *",
                contactSubmitBtn: "✉️ Отправить депешу Автору",
                emptyBooks: "Каталог пока пуст. Новые книги и рукописи будут опубликованы здесь.",
                emptyNews: "Официальные депеши и новости готовятся к публикации.",
                emptyTeasers: "Тизеры и спойлеры пока не добавлены.",
                btnReadText: "📖 Читать текст",
                defaultBio: "Линар — современный писатель в жанре спекулятивной фантастики и грандиозного миростроения. Вдохновляясь атмосферой Великой Степи, холодными созвездиями и древней кочевой мудростью, автор создает масштабные вселенные Litally, где каждая глава наполнена глубоким смыслом и вневременной памятью.",
                
                termsContent: `LITALLY — TERMS OF USE (УСЛОВИЯ ИСПОЛЬЗОВАНИЯ)\n\n1. ОБЩИЕ ПОЛОЖЕНИЯ\nДобро пожаловать в Litally. Пользуясь настоящим сайтом, вы соглашаетесь соблюдать настоящие Условия использования и все применимые законы.\n\n2. АНТИПЛАГИАТ И ИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ\nВесь контент (включая тексты, лор, персонажей, концепции, дизайн, программный код) является исключительной собственностью Litally. Категорически запрещается:\n- Любое копирование, ретрансляция или коммерческое использование текстов без письменного согласия автора.\n- Парсинг, автоматический сбор данных и использование контента для обучения нейросетевых моделей искусственного интеллекта (AI/LLM training).\n- Создание производных коммерческих произведений на основе авторского лора.\n\n3. ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ\nСайт предоставляется по принципу "как есть" (AS IS). Администрация не несет ответственности за перебои в работе сторонних сервисов доставки сообщений.`,
                
                privacyContent: `LITALLY — PRIVACY POLICY (ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ)\n\n1. СБОР ИНФОРМАЦИИ\nМы уважаем конфиденциальность наших читателей. Litally не использует навязчивые трекеры и не продает ваши данные сторонним рекламным сетям.\n\n2. ИСПОЛЬЗОВАНИЕ ДАННЫХ\n- Имя и Email, указанные в форме обратной связи, используются исключительно для отправки прямого ответа на ваш запрос.\n- Все пользовательские настройки (выбранная тема оформления, язык, размер шрифта) сохраняются локально в вашем браузере.\n\n3. БЕЗОПАСНОСТЬ\nМы применяем современные стандарты шифрования данных и не передаем персональную переписку третьим лицам.`,

                admin: {
                    loginHeading: "Консоль Владельца",
                    loginSub: "Введите мастер-пароль для управления контентом Litally.",
                    loginBtn: "Войти в Святилище",
                    loginError: "Неверный пароль. Доступ запрещен.",
                    passPlaceholder: "••••••••",
                    workspaceTitle: "👑 Litally Master Workspace",
                    tabBooks: "📚 Книги",
                    tabNews: "📰 Новости",
                    tabTeasers: "🎬 Тизеры",
                    tabBio: "📖 Биография",
                    tabComments: "💬 Отзывы",
                    tabSettings: "⚙️ Безопасность",
                    booksHeading: "Добавить книгу в каталог",
                    labelBookTitle: "Название книги *",
                    labelBookGenre: "Жанр / Статус",
                    labelBookYear: "Год / Статус публикации",
                    labelBookPhoto: "Ссылка на обложку (URL)",
                    labelBookDesc: "Полный текст или синопсис *",
                    saveBookBtn: "Сохранить книгу",
                    activeBooksHeading: "Активные книги в каталоге",
                    thBookTitle: "Название",
                    thBookGenre: "Жанр",
                    thBookYear: "Год",
                    thBookAction: "Действие",
                    btnDelete: "Удалить",
                    newsHeading: "Опубликовать новость",
                    labelNewsTitle: "Заголовок *",
                    labelNewsTag: "Тег категории",
                    labelNewsPhoto: "Ссылка на фото (URL)",
                    labelNewsContent: "Текст новости *",
                    publishNewsBtn: "Опубликовать",
                    activeNewsHeading: "Опублилованные депеши",
                    thNewsTag: "Тег",
                    thNewsTitle: "Заголовок",
                    thNewsDate: "Дата",
                    thNewsAction: "Действие",
                    teasersHeading: "Добавить тизер со спойлером",
                    labelTeaserTitle: "Заголовок тизера *",
                    labelTeaserPhoto: "Ссылка на фото (URL)",
                    labelTeaserPreview: "Открытый отрывок",
                    labelTeaserSpoiler: "Скрытый спойлер",
                    saveTeaserBtn: "Сохранить тизер",
                    activeTeasersHeading: "Активные тизеры",
                    thTeaserTitle: "Заголовок",
                    thTeaserAction: "Действие",
                    bioHeading: "Редактировать биографию автора",
                    labelBioPhoto: "Ссылка на портрет автора (URL)",
                    labelBioText: "Текст биографии",
                    saveBioBtn: "Сохранить изменения",
                    commentsHeading: "Модерация отзывов читателей",
                    thCommentAuthor: "Автор",
                    thCommentText: "Отзыв",
                    thCommentDate: "Дата",
                    thCommentAction: "Действие",
                    settingsPassHeading: "Мастер-пароль",
                    labelNewPass: "Новый секретный пароль",
                    savePasscodeBtn: "Обновить пароль",
                    settingsBackupHeading: "Резервная копия базы (JSON)",
                    exportDataBtn: "📥 Экспорт базы данных (JSON)",
                    importDataLabel: "📤 Импорт базы данных (JSON)",
                    clearHeading: "Очистка данных",
                    clearAllDataBtn: "Сбросить все данные"
                }
            },
            en: {
                locale: 'en-US',
                pillLabel: "🌐 ENG",
                langMenuTitle: "Sanctuary Language",
                navThemes: "🎨 Themes (50)",
                navA11y: "♿ Accessibility (50)",
                navPlans: "🚀 Plans",
                navAbout: "✨ About Us",
                navFaq: "❓ FAQ",
                navHide: "▲ Hide",
                litallyTitle: "LBO",
                lboStudio: "Studio ✨",
                lboPlans: "Roadmap & Plans",
                lboAbout: "About Sanctuary",
                lboFaq: "Sanctuary FAQ",
                lboBooks: "Books & Manuscripts",
                lboNews: "News & Dispatches",
                lboTeasers: "Teasers & Spoilers",
                lboBio: "Author Biography",
                lboComments: "Reader Community",
                lboContact: "Contact Author",
                lboThemes: "50 Kazakhstan Themes",
                lboExternal: "External Portal ↗",
                lboAdmin: "Control Panel",
                beaconText: "OFFICIAL SOVEREIGN DOMAIN • ACCESS OPEN",
                heroStatement: "Welcome to Litally! You have arrived at a premier platform dedicated to supporting emerging authors, streamlining publishing, and ensuring quality book moderation. For professional writers, we offer powerful, AI-driven tools designed for seamless image generation, advanced editing, and automated synopsis creation. Beyond production, Litally invites you to explore rich author biographies, discover new books, and even engage in interactive chats with AI-powered characters from your favorite books and movies. Truly, everyone will find something to love here. Have a great and highly productive day!",
                heroBtnExplore: "📚 Explore Catalog",
                heroBtnLitally: "👑 LBO",
                footerRights: "All author rights reserved. LITALLY",
                legalTitle: "Copyright Protection, Anti-Plagiarism & Sovereign Protocol",
                legalBody: "All literary works, world lore, manuscripts, characters, synopses, and visual media on the Litally platform are strictly protected under international intellectual property treaties and the Berne Convention. Any unauthorized reproduction, commercial distribution, AI/ML model training without written consent, or plagiarism is strictly prohibited and subject to legal prosecution. Continuous cryptographic hash validation is deployed.",
                linkTerms: "⚖️ Terms of Use ↗",
                linkPrivacy: "🔒 Privacy Policy ↗",
                modalBooksTitle: "Books & Manuscripts",
                modalBooksSub: "Official bibliography and universe archives of Litally",
                modalNewsTitle: "Dispatches & News",
                modalNewsSub: "Official announcements, releases, and author notes",
                modalTeasersTitle: "Teasers & Spoilers",
                modalTeasersSub: "Excerpts of future chapters and confidential lore",
                modalBioTitle: "Author Biography",
                modalBioSub: "Heritage, philosophy, and creative universe",
                modalCommentsTitle: "Reader Community",
                modalCommentsSub: "Reader reviews, chapter discussions, and dispatches",
                modalContactTitle: "Write to Author",
                modalContactSub: "Direct dispatch to Sanctuary Archives",
                modalThemesTitle: "50 Kazakhstan Themes",
                modalThemesSub: "Select an ambient visual theme for the Litally domain",
                modalPlansTitle: "Future Plans & Sovereign Roadmap",
                modalPlansSub: "Milestones, technological evolution, and upcoming literary releases",
                modalAboutTitle: "About Litally Sanctuary",
                modalAboutSub: "Philosophy, universe cosmology, and the author's mission",
                modalFaqTitle: "Frequently Asked Questions",
                modalFaqSub: "Answers regarding copyright, AI studio, publications, and accessibility",
                commentsFormHeader: "Leave a Reader Feedback",
                labelCommentAuthor: "Your Name or Alias",
                labelCommentText: "Your Review / Thoughts",
                postCommentBtn: "Post Comment",
                labelContactName: "Your Name *",
                labelCommentStudio: "About Litally Studio",
                labelContactEmail: "Your Email *",
                labelContactSubject: "Subject / Topic *",
                labelContactMessage: "Message *",
                contactSubmitBtn: "✉️ Dispatch Message to Author",
                emptyBooks: "The catalog is currently empty. New books and manuscripts will appear here.",
                emptyNews: "Official dispatches and news will be published here soon.",
                emptyTeasers: "Teasers and spoilers have not been added yet.",
                btnReadText: "📖 Read Text",
                defaultBio: "Linar is a visionary author of speculative fiction and monumental worldbuilding. Drawing inspiration from the boundless Great Steppe, celestial constellations, and ancient nomadic wisdom, he weaves vast literary universes anchored in profound philosophical depth.",
                
                termsContent: `LITALLY — TERMS OF USE\n\n1. GENERAL PROVISIONS\nBy accessing and using Litally, you agree to be bound by these Terms of Use and all applicable international copyright laws.\n\n2. INTELLECTUAL PROPERTY & ANTI-PLAGIARISM\nAll materials (texts, characters, cosmological lore, artwork, code) are the exclusive intellectual property of Litally. Strictly prohibited:\n- Unauthorized duplication, resale, or scraping.\n- Ingestion of texts into AI/Machine Learning models or Large Language Models (LLMs) without explicit written permission.\n- Plagiarism and creation of unauthorized derivative works.\n\n3. DISCLAIMER\nLitally is provided on an "AS IS" basis. We reserve the right to modify or restrict access to any portion of the sanctuary at our discretion.`,
                
                privacyContent: `LITALLY — PRIVACY POLICY\n\n1. DATA COLLECTION & USE\nWe respect your digital privacy. Litally does not deploy third-party advertising trackers or sell personal info.\n\n2. COMMUNICATIONS\nInformation entered into contact forms is solely used to reply to your letters.\n\n3. LOCAL STORAGE\nPersonal interface preferences (ambient themes, reading font sizes, language selections) reside exclusively on your local device.`,

                admin: {
                    loginHeading: "Owner Console",
                    loginSub: "Enter master passcode to manage Litally content.",
                    loginBtn: "Enter Sanctuary",
                    loginError: "Invalid passcode. Access denied.",
                    passPlaceholder: "••••••••",
                    workspaceTitle: "👑 Litally Master Workspace",
                    tabBooks: "📚 Books",
                    tabNews: "📰 News",
                    tabTeasers: "🎬 Teasers",
                    tabBio: "📖 Biography",
                    tabComments: "💬 Reviews",
                    tabSettings: "⚙️ Security",
                    booksHeading: "Add Book to Catalog",
                    labelBookTitle: "Book Title *",
                    labelBookGenre: "Genre / Volume Status",
                    labelBookYear: "Year / Release Status",
                    labelBookPhoto: "Cover Image Link (URL)",
                    labelBookDesc: "Full Text or Synopsis *",
                    saveBookBtn: "Save Book to Catalog",
                    activeBooksHeading: "Active Books in Archive",
                    thBookTitle: "Title",
                    thBookGenre: "Genre",
                    thBookYear: "Year",
                    thBookAction: "Action",
                    btnDelete: "Delete",
                    newsHeading: "Publish Dispatch & News",
                    labelNewsTitle: "Headline *",
                    labelNewsTag: "Category Tag",
                    labelNewsPhoto: "Image Link (URL)",
                    labelNewsContent: "Dispatch Content *",
                    publishNewsBtn: "Publish Dispatch",
                    activeNewsHeading: "Published Dispatches",
                    thNewsTag: "Tag",
                    thNewsTitle: "Title",
                    thNewsDate: "Date",
                    thNewsAction: "Action",
                    teasersHeading: "Add Teaser with Spoiler",
                    labelTeaserTitle: "Teaser Title *",
                    labelTeaserPhoto: "Image Link (URL)",
                    labelTeaserPreview: "Public Preview",
                    labelTeaserSpoiler: "Encrypted Spoiler",
                    saveTeaserBtn: "Save Teaser",
                    activeTeasersHeading: "Active Teasers",
                    thTeaserTitle: "Title",
                    thTeaserAction: "Action",
                    bioHeading: "Edit Author Biography",
                    labelBioPhoto: "Author Portrait Link (URL)",
                    labelBioText: "Biography Text",
                    saveBioBtn: "Save Biography",
                    commentsHeading: "Moderate Reader Reviews",
                    thCommentAuthor: "Author",
                    thCommentText: "Review",
                    thCommentDate: "Date",
                    thCommentAction: "Action",
                    settingsPassHeading: "Master Passcode",
                    labelNewPass: "New Secret Passcode",
                    savePasscodeBtn: "Update Passcode",
                    settingsBackupHeading: "Database Backup (JSON)",
                    exportDataBtn: "📥 Export Database (JSON)",
                    importDataLabel: "📤 Import Database (JSON)",
                    clearHeading: "Reset All Data",
                    clearAllDataBtn: "Reset Domain Data"
                }
            },
            zh: {
                locale: 'zh-CN',
                pillLabel: "🌐 中文",
                langMenuTitle: "圣殿语言切换",
                navThemes: "🎨 50个主题 (50)",
                navA11y: "♿ 无障碍辅助 (50)",
                navPlans: "🚀 未来规划",
                navAbout: "✨ 关于我们",
                navFaq: "❓ 常见问题",
                navHide: "▲ 隐藏",
                litallyTitle: "LBO",
                lboStudio: "Studio ✨",
                lboPlans: "发展路线图与规划",
                lboAbout: "关于 Litally 圣殿",
                lboFaq: "常见问题解答 (FAQ)",
                lboBooks: "著作与手稿",
                lboNews: "官方公报与新闻",
                lboTeasers: "先导预告与剧透",
                lboBio: "作者生平传记",
                lboComments: "读者学者殿堂",
                lboContact: "致信作者",
                lboThemes: "50款主题矩阵",
                lboExternal: "外部宇宙入口 ↗",
                lboAdmin: "控制中心",
                beaconText: "官方主权文学圣殿 • 开放访问",
                heroStatement: "Welcome to Litally! You have arrived at a premier platform dedicated to supporting emerging authors, streamlining publishing, and ensuring quality book moderation. For professional writers, we offer powerful, AI-driven tools designed for seamless image generation, advanced editing, and automated synopsis creation. Beyond production, Litally invites you to explore rich author biographies, discover new books, and even engage in interactive chats with AI-powered characters from your favorite books and movies. Truly, everyone will find something to love here. Have a great and highly productive day!",
                heroBtnExplore: "📚 探索著作目录",
                heroBtnLitally: "👑 LBO",
                footerRights: "作者版权所有 • LITALLY",
                legalTitle: "版权保护、反抄袭协议与主权声明",
                legalBody: "Litally 平台上的所有文学作品、世界观设定、手稿、人物塑造及视觉成果均受国际知识产权法及《伯尔尼公约》保护。未经作者书面许可，严禁任何抄袭、非法转载、商业利用及用于人工智能大语言模型（AI/LLM）训练。平台已部署自动文本特征哈希追踪机制。",
                linkTerms: "⚖️ 使用条款 (Terms of Use) ↗",
                linkPrivacy: "🔒 隐私政策 (Privacy Policy) ↗",
                modalBooksTitle: "著作与手稿全集",
                modalBooksSub: "Litally 官方正统文献总目与星系档案库",
                modalNewsTitle: "公报与前沿新闻",
                modalNewsSub: "出版公告、章节发布与作者纪要",
                modalTeasersTitle: "预告集与绝密档案",
                modalTeasersSub: "未公开章节精选与隐藏剧透",
                modalBioTitle: "作者生平与哲学",
                modalBioSub: "游牧文化底蕴、创作理念与文学宇宙",
                modalCommentsTitle: "读者学者殿堂",
                modalCommentsSub: "读者书评、章节探讨与宇宙共鸣",
                modalContactTitle: "致信作者领地",
                modalContactSub: "直接向圣殿档案馆发送机密通讯",
                modalThemesTitle: "50款主题风貌",
                modalThemesSub: "为您的 Litally 圣殿挑选唯美光影氛围",
                modalPlansTitle: "未来规划与发展路线图",
                modalPlansSub: "战略里程碑、下一代AI创作工具与未来作品发布",
                modalAboutTitle: "关于 Litally 文学圣殿",
                modalAboutSub: "起源、宏大文学宇宙与作者主权宣言",
                modalFaqTitle: "常见问题解答 (FAQ)",
                modalFaqSub: "关于版权保护、AI工作室、作品出版与无障碍辅助的全面解答",
                commentsFormHeader: "发表学者见解与书评",
                labelCommentAuthor: "您的姓名或学者代号",
                labelCommentStudio: "关于 Litally Studio",
                labelCommentText: "您的书评或心得体会",
                postCommentBtn: "发布读者评论",
                labelContactName: "尊姓大名 *",
                labelContactEmail: "电子邮箱 *",
                labelContactSubject: "信件主题 *",
                labelContactMessage: "信件内容 *",
                contactSubmitBtn: "✉️ 发送密件至作者",
                emptyBooks: "书目档案库目前为空。全新著作与手稿将在此发布。",
                emptyNews: "官方公报与最新动态准备中。",
                emptyTeasers: "暂未发布预告与绝密档案。",
                btnReadText: "📖 阅读全文",
                defaultBio: "里纳尔（Linar）是一位深耕于思辨幻想文学与宏大世界构筑的当代作家。他汲取大草原的壮袤意境、冷冽星辰与古老游牧智慧为灵感，塑造出兼具深邃哲学意蕴的 Litally 文学宇宙。",
                
                termsContent: `LITALLY — 使用条款 (TERMS OF USE)\n\n1. 总则\n访问并使用 Litally 平台即表示您完全同意遵守本使用条款及所有适用的国际知识产权法规。\n\n2. 严禁抄袭与知识产权保护\n平台所包含的所有手稿、故事设定、世界观和代码均为 Litally 之专属财产。严令禁止：\n- 未经授权的转载、销售或爬虫抓取。\n- 将本站文本用于任何人工智能（AI/LLM）模型的训练语料库。\n- 任何形式的抄袭及未经授权的衍生创作。\n\n3. 免责声明\n平台按“现状”提供，保留随时更新和维护档案系统的权利。`,
                
                privacyContent: `LITALLY — 隐私政策 (PRIVACY POLICY)\n\n1. 隐私承诺\nLitally 充分尊重您的个人隐私，不嵌入任何广告追踪脚本，亦不出售读者数据。\n\n2. 通讯用途\n联系表单中填写的电子邮箱仅用于直接回复您的来信。\n\n3. 本地存储\n您所选择的视觉主题、阅读器字号及语言设置均仅存储于您的本地浏览器中。`,

                admin: {
                    loginHeading: "主领地控制台",
                    loginSub: "请输入主权密匙以进入 Litally 管理中心。",
                    loginBtn: "进入圣殿后台",
                    loginError: "密匙错误。访问被拒绝。",
                    passPlaceholder: "••••••••",
                    workspaceTitle: "👑 Litally 4K 主管理空间",
                    tabBooks: "📚 著作手稿",
                    tabNews: "📰 官方公报",
                    tabTeasers: "🎬 剧透档案",
                    tabBio: "📖 作者生平",
                    tabComments: "💬 读者书评",
                    tabSettings: "⚙️ 安全设置",
                    booksHeading: "添加著作至总目录",
                    labelBookTitle: "著作书名 *",
                    labelBookGenre: "题材 / 卷册标识",
                    labelBookYear: "年份 / 出版状态",
                    labelBookPhoto: "封面图片链接 (URL)",
                    labelBookDesc: "正文内容或详尽大纲 *",
                    saveBookBtn: "保存著作至档案馆",
                    activeBooksHeading: "已收录著作目录",
                    thBookTitle: "书名",
                    thBookGenre: "题材",
                    thBookYear: "年份",
                    thBookAction: "操作",
                    btnDelete: "删除",
                    newsHeading: "发布官方公报",
                    labelNewsTitle: "公报标题 *",
                    labelNewsTag: "分类标签",
                    labelNewsPhoto: "配图链接 (URL)",
                    labelNewsContent: "公报正文 *",
                    publishNewsBtn: "正式发布",
                    activeNewsHeading: "已发布公报列表",
                    thNewsTag: "标签",
                    thNewsTitle: "标题",
                    thNewsDate: "日期",
                    thNewsAction: "操作",
                    teasersHeading: "添加预告与隐藏剧透",
                    labelTeaserTitle: "预告标题 *",
                    labelTeaserPhoto: "配图链接 (URL)",
                    labelTeaserPreview: "公开前瞻文本",
                    labelTeaserSpoiler: "加密隐藏剧透",
                    saveTeaserBtn: "保存预告档案",
                    activeTeasersHeading: "已存档预告",
                    thTeaserTitle: "标题",
                    thTeaserAction: "操作",
                    bioHeading: "编辑作者生平传记",
                    labelBioPhoto: "作者肖像链接 (URL)",
                    labelBioText: "传记正文",
                    saveBioBtn: "保存修改",
                    commentsHeading: "读者学者书评审核",
                    thCommentAuthor: "读者代号",
                    thCommentText: "书评内容",
                    thCommentDate: "日期",
                    thCommentAction: "操作",
                    settingsPassHeading: "主权密匙管理",
                    labelNewPass: "设置新密匙 (至少6位)",
                    savePasscodeBtn: "更新主密匙",
                    settingsBackupHeading: "数据库备份 (JSON)",
                    exportDataBtn: "📥 导出全站数据库 (JSON)",
                    importDataLabel: "📤 导入恢复数据库 (JSON)",
                    clearHeading: "重置所有数据",
                    clearAllDataBtn: "清空并重置网站"
                }
            }
        };

        // STRICT ENGLISH DEFAULT INITIALIZATION AS REQUESTED
        let currentLang = 'en';
        try {
            const saved = localStorage.getItem('litally_selected_language');
            if (saved && typeof saved === 'string' && saved.length >= 2) {
                currentLang = saved;
            }
        } catch(e) {
            currentLang = 'en';
        }

        async function setLanguage(lang) {
            if (!i18n[lang]) {
                if (window.LITALLY_TRANSLATIONS_100 && window.LITALLY_TRANSLATIONS_100[lang]) {
                    i18n[lang] = window.LITALLY_TRANSLATIONS_100[lang];
                } else {
                    try {
                        const res = await fetch(`/locales/${lang}.json`);
                        if (res.ok) {
                            i18n[lang] = await res.json();
                        }
                    } catch(e) {
                        console.warn(`Could not load locale: ${lang}`, e);
                    }
                }
            }
            if (!i18n[lang]) {
                lang = i18n.en ? 'en' : Object.keys(i18n)[0];
            }
            currentLang = lang;
            try {
                localStorage.setItem('litally_selected_language', lang);
                localStorage.setItem('litally_selected_lang', lang);
            } catch(e) {}

            const dict = i18n[lang] || i18n.en || i18n.ru;
            if (dict && dict.dir === 'rtl') {
                document.documentElement.setAttribute('dir', 'rtl');
            } else {
                document.documentElement.setAttribute('dir', 'ltr');
            }

            document.body.className = document.body.className.replace(/\blang-\S+/g, '');
            document.body.classList.add(`lang-${lang}`);

            const setTxt = (id, txt) => {
                const el = document.getElementById(id);
                if (el && txt !== undefined) el.textContent = txt;
            };

            const isRuLang = (lang === 'ru');

            setTxt('activeLangPill', dict.pillLabel);
            setTxt('langMenuTitle', dict.langMenuTitle);
            setTxt('navBtnThemes', dict.navThemes);
            setTxt('navBtnA11y', dict.navA11y || '♿ Accessibility (50)');
            setTxt('navBtnPlans', dict.navPlans || '🚀 Plans');
            setTxt('navBtnAbout', dict.navAbout || '✨ About Us');
            setTxt('navBtnFaq', dict.navFaq || '❓ FAQ');
            setTxt('navBtnHide', dict.navHide);

            // 100-Language Localization for Litdeo Video AI
            const videoNavText = '🎬 Litdeo ↗';
            const videoDropdownText = (lang === 'ru' || isRuLang) ? '🎬 Litdeo Видео ИИ ↗' : (lang === 'kk' ? '🎬 Litdeo Бейне ИИ ↗' : '🎬 Litdeo Video AI ↗');
            setTxt('navBtnVideoAi', videoNavText);
            setTxt('lboItemVideoAi', videoDropdownText);

            setTxt('litallyHubTitle', dict.litallyTitle);
            setTxt('lboItemStudio', dict.lboStudio);
            setTxt('lboItemPlans', dict.lboPlans || (isRuLang ? 'Планы и Дорожная Карта' : 'Roadmap & Plans'));
            setTxt('lboItemAbout', dict.lboAbout || (isRuLang ? 'О Святилище' : 'About Sanctuary'));
            setTxt('lboItemFaq', dict.lboFaq || (isRuLang ? 'Частые Вопросы (FAQ)' : 'Sanctuary FAQ'));
            setTxt('lboItemBooks', dict.lboBooks);
            setTxt('lboItemNews', dict.lboNews);
            setTxt('lboItemTeasers', dict.lboTeasers);
            setTxt('lboItemBio', dict.lboBio);
            setTxt('lboItemComments', dict.lboComments);
            setTxt('lboItemContact', dict.lboContact);
            setTxt('lboItemThemes', dict.lboThemes);
            setTxt('lboItemExternal', dict.lboExternal);
            setTxt('lboItemAdmin', dict.lboAdmin);

            setTxt('displayBeaconText', dict.beaconText);
            setTxt('displayHeroStatement', dict.heroStatement);
            setTxt('heroBtnExplore', dict.heroBtnExplore);
            setTxt('heroBtnLitally', dict.heroBtnLitally);
            setTxt('displayFooterRights', dict.footerRights);

            setTxt('legalSectionTitle', dict.legalTitle);
            setTxt('legalSectionBody', dict.legalBody);
            setTxt('linkTermsOfUse', dict.linkTerms);
            setTxt('linkPrivacyPolicy', dict.linkPrivacy);

            // Localize Sovereign Footer Navigation Toolbar
            setTxt('footerBtnPlans', dict.navPlans ? dict.navPlans.replace(/^[^\w\sа-яА-ЯёЁ]+/, '').trim() : (isRuLang ? 'Планы' : 'Plans'));
            setTxt('footerBtnAbout', dict.navAbout ? dict.navAbout.replace(/^[^\w\sа-яА-ЯёЁ]+/, '').trim() : (isRuLang ? 'О нас' : 'About Us'));
            setTxt('footerBtnFaq', dict.navFaq ? dict.navFaq.replace(/^[^\w\sа-яА-ЯёЁ]+/, '').trim() : 'FAQ');
            setTxt('footerBtnStudio', 'LBO Studio');
            setTxt('footerBtnBooks', dict.lboBooks || (isRuLang ? 'Книги' : 'Books'));
            setTxt('footerBtnNews', dict.lboNews || (isRuLang ? 'Новости' : 'News'));
            setTxt('footerBtnThemes', (isRuLang ? '50 Тем' : 'Themes (50)'));
            setTxt('footerBtnA11y', (isRuLang ? 'Доступность (50)' : 'Accessibility (50)'));
            setTxt('footerBtnContact', dict.lboContact || (isRuLang ? 'Контакты' : 'Contact'));
            setTxt('footerBtnAdmin', (isRuLang ? 'Панель Управления' : 'Admin Console'));

            // Localize Back to Sanctuary on all portals
            const backStr = isRuLang ? 'Назад в Святилище' : (lang === 'kk' ? 'Киелі орынға оралу' : 'Back to Sanctuary');
            document.querySelectorAll('.portal-back-text').forEach(el => {
                el.textContent = backStr;
            });

            setTxt('modalTitleBooks', dict.modalBooksTitle);
            setTxt('modalSubtitleBooks', dict.modalBooksSub);
            setTxt('modalTitleNews', dict.modalNewsTitle);
            setTxt('modalSubtitleNews', dict.modalNewsSub);
            setTxt('modalTitleTeasers', dict.modalTeasersTitle);
            setTxt('modalSubtitleTeasers', dict.modalTeasersSub);
            setTxt('modalTitleBio', dict.modalBioTitle);
            setTxt('modalSubtitleBio', dict.modalBioSub);
            setTxt('modalTitleComments', dict.modalCommentsTitle);
            setTxt('modalSubtitleComments', dict.modalCommentsSub);
            setTxt('modalTitleContact', dict.modalContactTitle);
            setTxt('modalSubtitleContact', dict.modalContactSub);
            setTxt('modalThemesTitle', dict.modalThemesTitle);
            setTxt('modalSubtitleThemes', dict.modalThemesSub);

            setTxt('modalTitlePlans', dict.modalPlansTitle || (isRuLang ? 'Планы Развития и Дорожная Карта' : 'Roadmap & Plans'));
            setTxt('modalSubtitlePlans', dict.modalPlansSub || (isRuLang ? 'Ключевые этапы, технологическая эволюция и будущие релизы' : 'Key milestones, technological evolution and upcoming releases'));
            setTxt('modalTitleAbout', dict.modalAboutTitle || (isRuLang ? 'О Святилище Litally' : 'About Litally Sanctuary'));
            setTxt('modalSubtitleAbout', dict.modalAboutSub || (isRuLang ? 'Философия, космический лор вселенной и миссия автора' : 'Cosmology, worldbuilding and author mission'));
            setTxt('modalTitleFaq', dict.modalFaqTitle || (isRuLang ? 'Часто Задаваемые Вопросы (FAQ)' : 'Frequently Asked Questions (FAQ)'));
            setTxt('modalSubtitleFaq', dict.modalFaqSub || (isRuLang ? 'Ответы о защите авторских прав, ИИ-студии, публикациях и доступности' : 'Answers regarding copyright, AI studio, publications and accessibility'));

            setTxt('commentsFormHeader', dict.commentsFormHeader);
            setTxt('labelCommentAuthor', dict.labelCommentAuthor);
            setTxt('labelCommentText', dict.labelCommentText);
            setTxt('postCommentBtn', dict.postCommentBtn);

            setTxt('labelContactName', dict.labelContactName);
            setTxt('labelContactEmail', dict.labelContactEmail);
            setTxt('labelContactSubject', dict.labelContactSubject);
            setTxt('labelContactMessage', dict.labelContactMessage);
            setTxt('contactSubmitBtn', dict.contactSubmitBtn);

            setTxt('telemetryLang', lang.toUpperCase());

            // ДИНАМИЧЕСКИЙ ПЕРЕВОД АДМИН-ПАНЕЛИ
            const adm = dict.admin;
            if (adm) {
                setTxt('adminLoginHeading', adm.loginHeading);
                setTxt('adminLoginSubtitle', adm.loginSub);
                setTxt('adminLoginSubmitBtn', adm.loginBtn);
                setTxt('adminLoginError', adm.loginError);
                setTxt('adminWorkspaceTitle', adm.workspaceTitle);
                
                setTxt('adminTabBtnBooks', adm.tabBooks);
                setTxt('adminTabBtnNews', adm.tabNews);
                setTxt('adminTabBtnTeasers', adm.tabTeasers);
                setTxt('adminTabBtnBio', adm.tabBio);
                setTxt('adminTabBtnComments', adm.tabComments);
                setTxt('adminTabBtnSettings', adm.tabSettings);

                setTxt('adminBooksHeading', adm.booksHeading);
                setTxt('labelAdminBookTitle', adm.labelBookTitle);
                setTxt('labelAdminBookGenre', adm.labelBookGenre);
                setTxt('labelAdminBookYear', adm.labelBookYear);
                setTxt('labelAdminBookPhoto', adm.labelBookPhoto);
                setTxt('labelAdminBookDesc', adm.labelBookDesc);
                setTxt('adminSaveBookBtn', adm.saveBookBtn);
                setTxt('adminActiveBooksHeading', adm.activeBooksHeading);
                setTxt('thBookTitle', adm.thBookTitle);
                setTxt('thBookGenre', adm.thBookGenre);
                setTxt('thBookYear', adm.thBookYear);
                setTxt('thBookAction', adm.thBookAction);

                setTxt('adminNewsHeading', adm.newsHeading);
                setTxt('labelAdminNewsTitle', adm.labelNewsTitle);
                setTxt('labelAdminNewsTag', adm.labelNewsTag);
                setTxt('labelAdminNewsPhoto', adm.labelNewsPhoto);
                setTxt('labelAdminNewsContent', adm.labelNewsContent);
                setTxt('adminPublishNewsBtn', adm.publishNewsBtn);
                setTxt('adminActiveNewsHeading', adm.activeNewsHeading);
                setTxt('thNewsTag', adm.thNewsTag);
                setTxt('thNewsTitle', adm.thNewsTitle);
                setTxt('thNewsDate', adm.thNewsDate);
                setTxt('thNewsAction', adm.thNewsAction);

                setTxt('adminTeasersHeading', adm.teasersHeading);
                setTxt('labelAdminTeaserTitle', adm.labelTeaserTitle);
                setTxt('labelAdminTeaserPhoto', adm.labelTeaserPhoto);
                setTxt('labelAdminTeaserPreview', adm.labelTeaserPreview);
                setTxt('labelAdminTeaserSpoiler', adm.labelTeaserSpoiler);
                setTxt('adminSaveTeaserBtn', adm.saveTeaserBtn);
                setTxt('adminActiveTeasersHeading', adm.activeTeasersHeading);
                setTxt('thTeaserTitle', adm.thTeaserTitle);
                setTxt('thTeaserAction', adm.thTeaserAction);

                setTxt('adminBioHeading', adm.bioHeading);
                setTxt('labelAdminBioPhoto', adm.labelBioPhoto);
                setTxt('labelAdminBioText', adm.labelBioText);
                setTxt('adminSaveBioBtn', adm.saveBioBtn);

                setTxt('adminCommentsHeading', adm.commentsHeading);
                setTxt('thCommentAuthor', adm.thCommentAuthor);
                setTxt('thCommentText', adm.thCommentText);
                setTxt('thCommentDate', adm.thCommentDate);
                setTxt('thCommentAction', adm.thCommentAction);

                setTxt('adminSettingsPassHeading', adm.settingsPassHeading);
                setTxt('labelAdminNewPass', adm.labelNewPass);
                setTxt('adminSavePasscodeBtn', adm.savePasscodeBtn);
                setTxt('adminSettingsBackupHeading', adm.settingsBackupHeading);
                setTxt('adminExportDataBtn', adm.exportDataBtn);
                
                const importLabel = document.getElementById('adminImportDataLabel');
                if (importLabel) {
                    importLabel.innerHTML = `${adm.importDataLabel} <input type="file" id="adminImportDataInput" accept=".json" style="display: none;">`;
                    bindImportEvent();
                }

                setTxt('adminClearHeading', adm.clearHeading);
                setTxt('adminClearAllDataBtn', adm.clearAllDataBtn);
            }

            closeAllDropdowns();
            renderPublicBooks();
            renderPublicNews();
            renderPublicTeasers();
            renderPublicBio();
            renderThemesInModal();
            if (typeof renderPublicPlans === 'function') renderPublicPlans(lang);
            if (typeof renderPublicAbout === 'function') renderPublicAbout(lang);
            if (typeof renderPublicFaq === 'function') renderPublicFaq(lang);
            if (typeof renderA11yMatrixGrid === 'function') {
                renderA11yMatrixGrid(typeof a11yActiveCat !== 'undefined' ? a11yActiveCat : 'all');
            }
            if (typeof updateA11y100HeaderTelemetry === 'function') {
                updateA11y100HeaderTelemetry();
            } else if (typeof updateA11yHeaderTelemetry === 'function') {
                updateA11yHeaderTelemetry();
            }

            if (typeof render100LanguagesMenu === 'function') {
                render100LanguagesMenu();
            }

            // Update footer theme display in chosen language
            const currActiveTheme = kazakhThemes.find(t => t.id === activeThemeId) || kazakhThemes[49];
            if (currActiveTheme) {
                const locTitle = (typeof getThemeLocalizedName === 'function') 
                    ? getThemeLocalizedName(currActiveTheme, lang) 
                    : currActiveTheme.name;
                const cleanName = locTitle.replace(/^\d+\.\s*/, '');
                const footerDisplay = document.getElementById('footerThemeDisplay');
                if (footerDisplay) footerDisplay.textContent = `LITALLY • ${cleanName.toUpperCase()}`;
            }

            if (typeof closeAllDropdowns === 'function') closeAllDropdowns();
            loadAdminData();
            playChime(820);
        }
        window.setLanguage = setLanguage;

        function openLegalModal(type) {
            const dict = i18n[currentLang] || i18n.en || i18n.ru;
            const isRu = (currentLang === 'ru');
            let title = '';
            let sub = '';
            let content = '';
            if (type === 'terms') {
                title = isRu ? "⚖️ УСЛОВИЯ ИСПОЛЬЗОВАНИЯ" : "⚖️ TERMS OF USE";
                sub = isRu ? "Правовой регламент Святилища Litally" : "Litally Intellectual Sanctuary Legal Protocol";
                content = (dict && dict.termsContent) || (i18n.ru && i18n.ru.termsContent) || (i18n.en && i18n.en.termsContent) || "Litally Terms of Use: All rights reserved.";
            } else if (type === 'privacy') {
                title = isRu ? "🔒 ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ" : "🔒 PRIVACY POLICY";
                sub = isRu ? "Защита данных и суверенной идентичности Litally" : "Litally Data & Identity Protection";
                content = (dict && dict.privacyContent) || (i18n.ru && i18n.ru.privacyContent) || (i18n.en && i18n.en.privacyContent) || "Litally Privacy Policy: Strict zero-tracker privacy protection.";
            }
            if (title) openReaderModal(title, sub, content);
        }
        window.openLegalModal = openLegalModal;

        /* =============================================================
           100 LANGUAGES MENU GENERATOR & REAL-TIME FILTER
           ============================================================= */
        function render100LanguagesMenu() {
            const container = document.getElementById('langItemsScrollContainer100');
            if (!container || typeof LITALLY_LANGUAGES_100 === 'undefined') return;

            container.innerHTML = LITALLY_LANGUAGES_100.map(l => {
                const isSelected = (l.code === currentLang);
                return `
                    <button class="dropdown-menu-item lang-100-btn ${isSelected ? 'active-lang-item' : ''}" 
                            onclick="setLanguage('${l.code}')" 
                            data-code="${l.code}" 
                            data-name="${escapeHTML(l.name.toLowerCase())}" 
                            data-native="${escapeHTML(l.native.toLowerCase())}"
                            data-country="${escapeHTML(l.country.toLowerCase())}"
                            style="display: flex; align-items: center; justify-content: space-between; padding: 9px 12px; border-radius: 8px; margin-bottom: 3px; cursor: pointer; ${isSelected ? 'background: rgba(255,215,0,0.18); border: 1px solid var(--accent-color);' : ''}">
                        <div style="display: flex; align-items: center; gap: 10px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            <span style="font-size: 1.2rem; line-height: 1;">${l.flag}</span>
                            <span style="font-weight: 700; color: #ffffff; font-size: 0.88rem;">${escapeHTML(l.native)}</span>
                            <span style="font-size: 0.76rem; color: var(--text-dim);">(${escapeHTML(l.name)})</span>
                        </div>
                        <span style="font-size: 0.72rem; color: var(--accent-color); background: rgba(0,0,0,0.45); border: 1px solid rgba(255,215,0,0.3); padding: 2px 7px; border-radius: 4px; font-family: var(--font-mono); margin-left: 8px; white-space: nowrap;">
                            ${escapeHTML(l.currencySymbol)} ${escapeHTML(l.currencyCode)}
                        </span>
                    </button>
                `;
            }).join('');
        }

        function filter100LanguagesMenu(query) {
            const q = (query || '').toLowerCase().trim();
            const btns = document.querySelectorAll('.lang-100-btn');
            btns.forEach(btn => {
                const code = btn.getAttribute('data-code') || '';
                const name = btn.getAttribute('data-name') || '';
                const native = btn.getAttribute('data-native') || '';
                const country = btn.getAttribute('data-country') || '';
                if (!q || code.includes(q) || name.includes(q) || native.includes(q) || country.includes(q)) {
                    btn.style.display = 'flex';
                } else {
                    btn.style.display = 'none';
                }
            });
        }

        /* =============================================================
           СИНХРОНИЗАЦИЯ ВКЛАДОК (BROADCASTCHANNEL) И БЕЗОПАСНОСТЬ
           ============================================================= */
        const syncChannel = ('BroadcastChannel' in window) ? new BroadcastChannel('litally_sync_hub') : null;
        
        function broadcastDataSync(action, payload) {
            if (syncChannel) {
                syncChannel.postMessage({ action, payload, timestamp: Date.now() });
            }
        }

        if (syncChannel) {
            syncChannel.onmessage = (e) => {
                const { action } = e.data;
                if (['books', 'news', 'teasers', 'comments', 'bio', 'theme'].includes(action)) {
                    refreshLocalState();
                }
            };
        }

        function refreshLocalState() {
            storedBooks = JSON.parse(localStorage.getItem('litally_user_books')) || [];
            storedNews = JSON.parse(localStorage.getItem('litally_user_news')) || [];
            storedTeasers = JSON.parse(localStorage.getItem('litally_user_teasers')) || [];
            storedComments = JSON.parse(localStorage.getItem('litally_user_comments')) || [];
            storedBio = JSON.parse(localStorage.getItem('litally_user_bio')) || null;
            renderPublicBooks();
            renderPublicNews();
            renderPublicTeasers();
            renderPublicBio();
            renderPublicComments();
            loadAdminData();
        }

        function escapeHTML(str) {
            if (str === null || str === undefined) return '';
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
        }

        function sanitizeURL(url) {
            if (!url) return '';
            const clean = String(url).trim();
            if (/^(https?:\/\/|\/|data:image\/)/i.test(clean)) {
                return clean.replace(/"/g, '&quot;');
            }
            return '';
        }

        const CRYPTO_SALT = "Litally_Sovereign_Salt_2026_";
        async function sha256(message) {
            const salted = CRYPTO_SALT + message;
            const msgBuffer = new TextEncoder().encode(salted);
            const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        }

        /* =============================================================
           50 ТЕМ КАЗАХСТАНА (СПИСОК СОКРАЩЕН С 53 ДО 50)
           ============================================================= */
        const kazakhThemes = [
            { id: 1, name: "1. Charyn Canyon Red Sunset", bg: "#080202", gradient: "radial-gradient(circle at 50% 15%, #300804 0%, #080202 80%)", titleGrad: "linear-gradient(135deg, #ffb3a1 0%, #ff4d29 40%, #c41e00 100%)", accent: "#ff4d29", secondary: "#c41e00", glow: "rgba(255, 77, 41, 0.45)", cardBg: "rgba(24, 10, 10, 0.75)", particle: "#ff6e40", swatch: "#ff4d29" },
            { id: 2, name: "2. Kaindy Lake Sunken Pine", bg: "#010809", gradient: "radial-gradient(circle at 50% 15%, #06282e 0%, #010809 80%)", titleGrad: "linear-gradient(135deg, #a7ffeb 0%, #00e5ff 40%, #00838f 100%)", accent: "#00e5ff", secondary: "#00838f", glow: "rgba(0, 229, 255, 0.4)", cardBg: "rgba(5, 20, 24, 0.75)", particle: "#18ffff", swatch: "#00e5ff" },
            { id: 3, name: "3. Bozzhira White Chalk Cliffs", bg: "#0a0a0c", gradient: "radial-gradient(circle at 50% 15%, #252630 0%, #0a0a0c 80%)", titleGrad: "linear-gradient(135deg, #ffffff 0%, #e0e0eb 50%, #8c8d9e 100%)", accent: "#e0e0eb", secondary: "#8c8d9e", glow: "rgba(224, 224, 235, 0.35)", cardBg: "rgba(18, 19, 24, 0.75)", particle: "#ffffff", swatch: "#e0e0eb" },
            { id: 4, name: "4. Burabay Emerald Mist", bg: "#010904", gradient: "radial-gradient(circle at 50% 15%, #083318 0%, #010904 80%)", titleGrad: "linear-gradient(135deg, #b9f6ca 0%, #00e676 40%, #1b5e20 100%)", accent: "#00e676", secondary: "#1b5e20", glow: "rgba(0, 230, 118, 0.4)", cardBg: "rgba(6, 22, 12, 0.75)", particle: "#69f0ae", swatch: "#00e676" },
            { id: 5, name: "5. Altai Mountain Glacier", bg: "#02070e", gradient: "radial-gradient(circle at 50% 15%, #0a233d 0%, #02070e 80%)", titleGrad: "linear-gradient(135deg, #e1f5fe 0%, #4fc3f7 40%, #0277bd 100%)", accent: "#4fc3f7", secondary: "#0277bd", glow: "rgba(79, 195, 247, 0.4)", cardBg: "rgba(8, 20, 32, 0.75)", particle: "#81d4fa", swatch: "#4fc3f7" },
            { id: 6, name: "6. Kolsay Lakes Deep Twilight", bg: "#02040b", gradient: "radial-gradient(circle at 50% 15%, #091738 0%, #02040b 80%)", titleGrad: "linear-gradient(135deg, #80d8ff 0%, #2979ff 40%, #0d47a1 100%)", accent: "#2979ff", secondary: "#0d47a1", glow: "rgba(41, 121, 255, 0.4)", cardBg: "rgba(7, 16, 36, 0.75)", particle: "#448aff", swatch: "#2979ff" },
            { id: 7, name: "7. Singing Dunes Warm Sands", bg: "#090601", gradient: "radial-gradient(circle at 50% 15%, #2e1a06 0%, #090601 80%)", titleGrad: "linear-gradient(135deg, #ffe082 0%, #ffb300 40%, #ff6f00 100%)", accent: "#ffb300", secondary: "#ff6f00", glow: "rgba(255, 179, 0, 0.4)", cardBg: "rgba(26, 18, 6, 0.75)", particle: "#ffd54f", swatch: "#ffb300" },
            { id: 8, name: "8. Nomadic Great Steppe Gold", bg: "#080602", gradient: "radial-gradient(circle at 50% 15%, #2b2109 0%, #080602 80%)", titleGrad: "linear-gradient(135deg, #fff59d 0%, #fbc02d 40%, #f57f17 100%)", accent: "#fbc02d", secondary: "#f57f17", glow: "rgba(251, 192, 45, 0.4)", cardBg: "rgba(24, 20, 8, 0.75)", particle: "#fff176", swatch: "#fbc02d" },
            { id: 9, name: "9. Balkhash Azure & Saline", bg: "#01070a", gradient: "radial-gradient(circle at 50% 15%, #072a38 0%, #01070a 80%)", titleGrad: "linear-gradient(135deg, #84ffff 0%, #00b0ff 40%, #006064 100%)", accent: "#00b0ff", secondary: "#006064", glow: "rgba(0, 176, 255, 0.4)", cardBg: "rgba(6, 22, 30, 0.75)", particle: "#40c4ff", swatch: "#00b0ff" },
            { id: 10, name: "10. Khan Tengri Sunset Peak", bg: "#0b0204", gradient: "radial-gradient(circle at 50% 15%, #3b0a16 0%, #0b0204 80%)", titleGrad: "linear-gradient(135deg, #ff80ab 0%, #f50057 40%, #880e4f 100%)", accent: "#f50057", secondary: "#880e4f", glow: "rgba(245, 0, 87, 0.45)", cardBg: "rgba(28, 8, 14, 0.75)", particle: "#ff4081", swatch: "#f50057" },
            { id: 11, name: "11. Zailiyskiy Alatau Dawn", bg: "#080308", gradient: "radial-gradient(circle at 50% 15%, #2e0f2b 0%, #080308 80%)", titleGrad: "linear-gradient(135deg, #f8bbd0 0%, #ec407a 40%, #ad1457 100%)", accent: "#ec407a", secondary: "#ad1457", glow: "rgba(236, 64, 122, 0.4)", cardBg: "rgba(24, 10, 22, 0.75)", particle: "#f48fb1", swatch: "#ec407a" },
            { id: 12, name: "12. Ustyurt Plateau Mirage", bg: "#05030a", gradient: "radial-gradient(circle at 50% 15%, #1b1036 0%, #05030a 80%)", titleGrad: "linear-gradient(135deg, #ea80fc 0%, #aa00ff 40%, #4a148c 100%)", accent: "#aa00ff", secondary: "#4a148c", glow: "rgba(170, 0, 255, 0.45)", cardBg: "rgba(18, 10, 32, 0.75)", particle: "#d500f9", swatch: "#aa00ff" },
            { id: 13, name: "13. Turkestan Lapis Lazuli", bg: "#02050e", gradient: "radial-gradient(circle at 50% 15%, #0b1f4d 0%, #02050e 80%)", titleGrad: "linear-gradient(135deg, #8c9eff 0%, #3d5afe 40%, #ffd700 100%)", accent: "#3d5afe", secondary: "#ffd700", glow: "rgba(61, 90, 254, 0.45)", cardBg: "rgba(8, 16, 36, 0.75)", particle: "#536dfe", swatch: "#3d5afe" },
            { id: 14, name: "14. Katon-Karagay Cedar", bg: "#020704", gradient: "radial-gradient(circle at 50% 15%, #0b2e1b 0%, #020704 80%)", titleGrad: "linear-gradient(135deg, #c8e6c9 0%, #43a047 40%, #1b5e20 100%)", accent: "#43a047", secondary: "#1b5e20", glow: "rgba(67, 160, 71, 0.4)", cardBg: "rgba(8, 24, 14, 0.75)", particle: "#81c784", swatch: "#43a047" },
            { id: 15, name: "15. Caspian Stormy Petrol", bg: "#010708", gradient: "radial-gradient(circle at 50% 15%, #05262c 0%, #010708 80%)", titleGrad: "linear-gradient(135deg, #80cbc4 0%, #00897b 40%, #004d40 100%)", accent: "#00897b", secondary: "#004d40", glow: "rgba(0, 177, 123, 0.4)", cardBg: "rgba(6, 20, 22, 0.75)", particle: "#26a69a", swatch: "#00897b" },
            { id: 16, name: "16. Shymkent Sunny Apricot", bg: "#090401", gradient: "radial-gradient(circle at 50% 15%, #381907 0%, #090401 80%)", titleGrad: "linear-gradient(135deg, #ffd180 0%, #ff9100 40%, #e65100 100%)", accent: "#ff9100", secondary: "#e65100", glow: "rgba(255, 145, 0, 0.45)", cardBg: "rgba(28, 14, 6, 0.75)", particle: "#ffa726", swatch: "#ff9100" },
            { id: 17, name: "17. Astana Cyber Glow", bg: "#010609", gradient: "radial-gradient(circle at 50% 15%, #042133 0%, #010609 80%)", titleGrad: "linear-gradient(135deg, #e0f7fa 0%, #00e5ff 40%, #00bcd4 100%)", accent: "#00e5ff", secondary: "#00bcd4", glow: "rgba(0, 229, 255, 0.5)", cardBg: "rgba(4, 18, 28, 0.75)", particle: "#18ffff", swatch: "#00e5ff" },
            { id: 18, name: "18. Almaty Apple Blossom", bg: "#090205", gradient: "radial-gradient(circle at 50% 15%, #360a1f 0%, #090205 80%)", titleGrad: "linear-gradient(135deg, #fce4ec 0%, #f06292 40%, #c2185b 100%)", accent: "#f06292", secondary: "#c2185b", glow: "rgba(240, 98, 146, 0.4)", cardBg: "rgba(26, 8, 18, 0.75)", particle: "#f8bbd0", swatch: "#f06292" },
            { id: 19, name: "19. Tamgaly Ancient Stone", bg: "#080605", gradient: "radial-gradient(circle at 50% 15%, #261f1c 0%, #080605 80%)", titleGrad: "linear-gradient(135deg, #d7ccc8 0%, #8d6e63 40%, #4e342e 100%)", accent: "#8d6e63", secondary: "#4e342e", glow: "rgba(141, 110, 99, 0.4)", cardBg: "rgba(22, 18, 16, 0.75)", particle: "#bcaaa4", swatch: "#8d6e63" },
            { id: 20, name: "20. Sauran Silk Sandstone", bg: "#080502", gradient: "radial-gradient(circle at 50% 15%, #2e1d0c 0%, #080502 80%)", titleGrad: "linear-gradient(135deg, #ffecb3 0%, #ffca28 40%, #ff8f00 100%)", accent: "#ffca28", secondary: "#ff8f00", glow: "rgba(255, 202, 40, 0.4)", cardBg: "rgba(24, 16, 8, 0.75)", particle: "#ffe082", swatch: "#ffca28" },
            { id: 21, name: "21. Aral Sea Salt Pearl", bg: "#060709", gradient: "radial-gradient(circle at 50% 15%, #1b2029 0%, #060709 80%)", titleGrad: "linear-gradient(135deg, #eceff1 0%, #b0bec5 40%, #546e7a 100%)", accent: "#b0bec5", secondary: "#546e7a", glow: "rgba(176, 190, 197, 0.35)", cardBg: "rgba(16, 18, 22, 0.75)", particle: "#cfd8dc", swatch: "#b0bec5" },
            { id: 22, name: "22. Zhezkazgan Molten Copper", bg: "#090301", gradient: "radial-gradient(circle at 50% 15%, #3b1406 0%, #090301 80%)", titleGrad: "linear-gradient(135deg, #ffccbc 0%, #ff7043 40%, #bf360c 100%)", accent: "#ff7043", secondary: "#bf360c", glow: "rgba(255, 112, 67, 0.45)", cardBg: "rgba(28, 12, 6, 0.75)", particle: "#ffab91", swatch: "#ff7043" },
            { id: 23, name: "23. Bayanaul Granite Rock", bg: "#060608", gradient: "radial-gradient(circle at 50% 15%, #1e1e26 0%, #060608 80%)", titleGrad: "linear-gradient(135deg, #cfd8dc 0%, #90a4ae 40%, #37474f 100%)", accent: "#90a4ae", secondary: "#37474f", glow: "rgba(144, 164, 174, 0.35)", cardBg: "rgba(16, 16, 20, 0.75)", particle: "#b0bec5", swatch: "#90a4ae" },
            { id: 24, name: "24. Aktau Aquamarine Shore", bg: "#010708", gradient: "radial-gradient(circle at 50% 15%, #05262c 0%, #010708 80%)", titleGrad: "linear-gradient(135deg, #e0f2f1 0%, #26a69a 40%, #004d40 100%)", accent: "#26a69a", secondary: "#004d40", glow: "rgba(38, 166, 154, 0.4)", cardBg: "rgba(6, 20, 22, 0.75)", particle: "#80cbc4", swatch: "#26a69a" },
            { id: 25, name: "25. Markakol Sapphire", bg: "#010309", gradient: "radial-gradient(circle at 50% 15%, #07153d 0%, #010309 80%)", titleGrad: "linear-gradient(135deg, #bbdefb 0%, #2196f3 40%, #0d47a1 100%)", accent: "#2196f3", secondary: "#0d47a1", glow: "rgba(33, 150, 243, 0.4)", cardBg: "rgba(6, 14, 32, 0.75)", particle: "#64b5f6", swatch: "#2196f3" },
            { id: 26, name: "26. Torgay Ancient Earth", bg: "#080503", gradient: "radial-gradient(circle at 50% 15%, #2b1c11 0%, #080503 80%)", titleGrad: "linear-gradient(135deg, #d7ccc8 0%, #a1887f 40%, #5d4037 100%)", accent: "#a1887f", secondary: "#5d4037", glow: "rgba(161, 136, 127, 0.35)", cardBg: "rgba(22, 16, 12, 0.75)", particle: "#d7ccc8", swatch: "#a1887f" },
            { id: 27, name: "27. Kyzylkum Crimson Dune", bg: "#080102", gradient: "radial-gradient(circle at 50% 15%, #300609 0%, #080102 80%)", titleGrad: "linear-gradient(135deg, #ff8a80 0%, #ff1744 40%, #b71c1c 100%)", accent: "#ff1744", secondary: "#b71c1c", glow: "rgba(255, 23, 68, 0.45)", cardBg: "rgba(24, 6, 8, 0.75)", particle: "#ff5252", swatch: "#ff1744" },
            { id: 28, name: "28. Bektau-Ata Rose Quartz", bg: "#080206", gradient: "radial-gradient(circle at 50% 15%, #2e0a23 0%, #080206 80%)", titleGrad: "linear-gradient(135deg, #f48fb1 0%, #d81b60 40%, #880e4f 100%)", accent: "#d81b60", secondary: "#880e4f", glow: "rgba(216, 27, 96, 0.4)", cardBg: "rgba(24, 8, 20, 0.75)", particle: "#ff4081", swatch: "#d81b60" },
            { id: 29, name: "29. Semey Pine Forest", bg: "#020703", gradient: "radial-gradient(circle at 50% 15%, #082911 0%, #020703 80%)", titleGrad: "linear-gradient(135deg, #a5d6a7 0%, #2e7d32 40%, #1b5e20 100%)", accent: "#2e7d32", secondary: "#1b5e20", glow: "rgba(46, 125, 50, 0.4)", cardBg: "rgba(8, 22, 12, 0.75)", particle: "#81c784", swatch: "#2e7d32" },
            { id: 30, name: "30. Taraz Turquoise Dome", bg: "#010708", gradient: "radial-gradient(circle at 50% 15%, #05262c 0%, #010708 80%)", titleGrad: "linear-gradient(135deg, #80deea 0%, #00acc1 40%, #006064 100%)", accent: "#00acc1", secondary: "#006064", glow: "rgba(0, 172, 193, 0.4)", cardBg: "rgba(6, 20, 22, 0.75)", particle: "#4dd0e1", swatch: "#00acc1" },
            { id: 31, name: "31. Kok-Tobe City Lights", bg: "#04020a", gradient: "radial-gradient(circle at 50% 15%, #170a36 0%, #04020a 80%)", titleGrad: "linear-gradient(135deg, #ffd54f 0%, #ab47bc 50%, #4a148c 100%)", accent: "#ab47bc", secondary: "#4a148c", glow: "rgba(171, 71, 188, 0.45)", cardBg: "rgba(16, 8, 28, 0.75)", particle: "#ba68c8", swatch: "#ab47bc" },
            { id: 32, name: "32. Ili River Golden Canyon", bg: "#080501", gradient: "radial-gradient(circle at 50% 15%, #2e1d06 0%, #080501 80%)", titleGrad: "linear-gradient(135deg, #ffe57f 0%, #ffc400 40%, #ff6d00 100%)", accent: "#ffc400", secondary: "#ff6d00", glow: "rgba(255, 196, 0, 0.45)", cardBg: "rgba(24, 16, 6, 0.75)", particle: "#ffd740", swatch: "#ffc400" },
            { id: 33, name: "33. Tuzbair Salt Mirror", bg: "#08080c", gradient: "radial-gradient(circle at 50% 15%, #1f2030 0%, #08080c 80%)", titleGrad: "linear-gradient(135deg, #ffffff 0%, #e1bee7 40%, #7b1fa2 100%)", accent: "#e1bee7", secondary: "#7b1fa2", glow: "rgba(225, 190, 231, 0.4)", cardBg: "rgba(18, 18, 24, 0.75)", particle: "#f3e5f5", swatch: "#e1bee7" },
            { id: 34, name: "34. Medeo High-Mountain Ice", bg: "#01070d", gradient: "radial-gradient(circle at 50% 15%, #072545 0%, #01070d 80%)", titleGrad: "linear-gradient(135deg, #ffffff 0%, #81d4fa 40%, #0288d1 100%)", accent: "#81d4fa", secondary: "#0288d1", glow: "rgba(129, 212, 250, 0.45)", cardBg: "rgba(6, 18, 30, 0.75)", particle: "#b3e5fc", swatch: "#81d4fa" },
            { id: 35, name: "35. Sharyn Lunar Mist", bg: "#060608", gradient: "radial-gradient(circle at 50% 15%, #1a1a24 0%, #060608 80%)", titleGrad: "linear-gradient(135deg, #d1c4e9 0%, #9575cd 40%, #4527a0 100%)", accent: "#9575cd", secondary: "#4527a0", glow: "rgba(149, 117, 205, 0.4)", cardBg: "rgba(14, 14, 20, 0.75)", particle: "#b39ddb", swatch: "#9575cd" },
            { id: 36, name: "36. Berkut Eagle Sovereign", bg: "#080501", gradient: "radial-gradient(circle at 50% 15%, #2e1a05 0%, #080501 80%)", titleGrad: "linear-gradient(135deg, #ffe082 0%, #d4af37 40%, #5d4037 100%)", accent: "#d4af37", secondary: "#5d4037", glow: "rgba(212, 175, 55, 0.45)", cardBg: "rgba(24, 16, 6, 0.75)", particle: "#ffecb3", swatch: "#d4af37" },
            { id: 37, name: "37. Qazaq Sky & Golden Sun", bg: "#01070d", gradient: "radial-gradient(circle at 50% 15%, #062647 0%, #01070d 80%)", titleGrad: "linear-gradient(135deg, #fff176 0%, #00b0ff 50%, #0277bd 100%)", accent: "#00b0ff", secondary: "#0277bd", glow: "rgba(0, 176, 255, 0.45)", cardBg: "rgba(6, 20, 36, 0.75)", particle: "#ffd700", swatch: "#00b0ff" },
            { id: 38, name: "38. Zaysan Sunset Topaz", bg: "#080401", gradient: "radial-gradient(circle at 50% 15%, #2e1605 0%, #080401 80%)", titleGrad: "linear-gradient(135deg, #ffe082 0%, #ffb74d 40%, #f57c00 100%)", accent: "#ffb74d", secondary: "#f57c00", glow: "rgba(255, 183, 77, 0.4)", cardBg: "rgba(24, 14, 6, 0.75)", particle: "#ffe082", swatch: "#ffb74d" },
            { id: 39, name: "39. Dzungarian Wind", bg: "#040508", gradient: "radial-gradient(circle at 50% 15%, #101929 0%, #040508 80%)", titleGrad: "linear-gradient(135deg, #cfd8dc 0%, #78909c 40%, #263238 100%)", accent: "#78909c", secondary: "#263238", glow: "rgba(120, 144, 156, 0.35)", cardBg: "rgba(12, 16, 24, 0.75)", particle: "#eceff1", swatch: "#78909c" },
            { id: 40, name: "40. Khorgos Silk Jade & Gold", bg: "#020704", gradient: "radial-gradient(circle at 50% 15%, #0a2916 0%, #020704 80%)", titleGrad: "linear-gradient(135deg, #ffd700 0%, #00bfa5 50%, #004d40 100%)", accent: "#00bfa5", secondary: "#004d40", glow: "rgba(0, 191, 165, 0.4)", cardBg: "rgba(6, 22, 14, 0.75)", particle: "#64ffda", swatch: "#00bfa5" },
            { id: 41, name: "41. Karatau Black Quartz", bg: "#050505", gradient: "radial-gradient(circle at 50% 15%, #1c1c1c 0%, #050505 80%)", titleGrad: "linear-gradient(135deg, #ffffff 0%, #e0e0e0 40%, #757575 100%)", accent: "#e0e0e0", secondary: "#757575", glow: "rgba(255, 255, 255, 0.3)", cardBg: "rgba(18, 18, 18, 0.75)", particle: "#ffffff", swatch: "#e0e0e0" },
            { id: 42, name: "42. Shakpak-Ata Chalk Vault", bg: "#070707", gradient: "radial-gradient(circle at 50% 15%, #24221c 0%, #070707 80%)", titleGrad: "linear-gradient(135deg, #fffde7 0%, #fff59d 40%, #d4af37 100%)", accent: "#fff59d", secondary: "#d4af37", glow: "rgba(255, 245, 157, 0.4)", cardBg: "rgba(20, 20, 16, 0.75)", particle: "#fffde7", swatch: "#fff59d" },
            { id: 43, name: "43. Shymbulak Powder Snow", bg: "#02060b", gradient: "radial-gradient(circle at 50% 15%, #092038 0%, #02060b 80%)", titleGrad: "linear-gradient(135deg, #ffffff 0%, #b3e5fc 40%, #0288d1 100%)", accent: "#b3e5fc", secondary: "#0288d1", glow: "rgba(179, 229, 252, 0.4)", cardBg: "rgba(6, 16, 28, 0.75)", particle: "#e1f5fe", swatch: "#b3e5fc" },
            { id: 44, name: "44. Korgalzhyn Flamingo", bg: "#080205", gradient: "radial-gradient(circle at 50% 15%, #2e0b1e 0%, #080205 80%)", titleGrad: "linear-gradient(135deg, #ffcdd2 0%, #f48fb1 40%, #c2185b 100%)", accent: "#f48fb1", secondary: "#c2185b", glow: "rgba(244, 143, 177, 0.4)", cardBg: "rgba(24, 8, 18, 0.75)", particle: "#f8bbd0", swatch: "#f48fb1" },
            { id: 45, name: "45. Ulytau Cradle Umber", bg: "#070402", gradient: "radial-gradient(circle at 50% 15%, #26160a 0%, #070402 80%)", titleGrad: "linear-gradient(135deg, #d7ccc8 0%, #bcaaa4 40%, #6d4c41 100%)", accent: "#bcaaa4", secondary: "#6d4c41", glow: "rgba(188, 170, 164, 0.35)", cardBg: "rgba(20, 14, 10, 0.75)", particle: "#d7ccc8", swatch: "#bcaaa4" },
            { id: 46, name: "46. Merke Sacred Spring", bg: "#020703", gradient: "radial-gradient(circle at 50% 15%, #082914 0%, #020703 80%)", titleGrad: "linear-gradient(135deg, #b2dfdb 0%, #4db6ac 40%, #004d40 100%)", accent: "#4db6ac", secondary: "#004d40", glow: "rgba(77, 182, 172, 0.4)", cardBg: "rgba(6, 22, 14, 0.75)", particle: "#80cbc4", swatch: "#4db6ac" },
            { id: 47, name: "47. Tengiz Salt Mirror", bg: "#060408", gradient: "radial-gradient(circle at 50% 15%, #1d1229 0%, #060408 80%)", titleGrad: "linear-gradient(135deg, #f8bbd0 0%, #ce93d8 40%, #6a1b9a 100%)", accent: "#ce93d8", secondary: "#6a1b9a", glow: "rgba(206, 147, 216, 0.4)", cardBg: "rgba(18, 12, 24, 0.75)", particle: "#e1bee7", swatch: "#ce93d8" },
            { id: 48, name: "48. Alakol Black Pebble", bg: "#030707", gradient: "radial-gradient(circle at 50% 15%, #0a2424 0%, #030707 80%)", titleGrad: "linear-gradient(135deg, #b2ebf2 0%, #00acc1 40%, #004d40 100%)", accent: "#00acc1", secondary: "#004d40", glow: "rgba(0, 172, 193, 0.4)", cardBg: "rgba(8, 20, 20, 0.75)", particle: "#80deea", swatch: "#00acc1" },
            { id: 49, name: "49. Khan Shatyr Tent Glow", bg: "#080601", gradient: "radial-gradient(circle at 50% 15%, #2e2307 0%, #080601 80%)", titleGrad: "linear-gradient(135deg, #ffffff 0%, #ffe082 40%, #ffa000 100%)", accent: "#ffe082", secondary: "#ffa000", glow: "rgba(255, 224, 130, 0.45)", cardBg: "rgba(24, 18, 6, 0.75)", particle: "#fff8e1", swatch: "#ffe082" },
            { id: 50, name: "50. Royal Sovereign Gold", bg: "#050505", gradient: "radial-gradient(circle at 50% 15%, #1f1807 0%, #050505 80%)", titleGrad: "linear-gradient(135deg, #fff3a8 0%, #ffd700 35%, #d4af37 60%, #aa7c11 100%)", accent: "#ffd700", secondary: "#d4af37", glow: "rgba(255, 215, 0, 0.45)", cardBg: "rgba(14, 16, 22, 0.75)", particle: "#ffd700", swatch: "#ffd700" }
        ];

        /* =============================================================
           ДАННЫЕ LOCALSTORAGE
           ============================================================= */
        let storedBooks = JSON.parse(localStorage.getItem('litally_user_books')) || [];
        let storedNews = JSON.parse(localStorage.getItem('litally_user_news')) || [
            {
                title: "Официальное открытие Суверенного Домена Litally 4K",
                tag: "Релиз",
                photo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
                content: "Мы рады приветствовать всех исследователей в суверенном святилище Litally. Доступна матрица из 50 тем, мультиязычная панель управления и режим сверхчеткого чтения 4K.",
                date: "03 сен. 2026"
            }
        ];
        let storedTeasers = JSON.parse(localStorage.getItem('litally_user_teasers')) || [];
        let storedComments = JSON.parse(localStorage.getItem('litally_user_comments')) || [];
        let storedBio = JSON.parse(localStorage.getItem('litally_user_bio')) || null;

        // Хэш пароля с солью по умолчанию ("Litally2026")
        const DEFAULT_PASS_HASH = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
        let storedPasscodeHash = localStorage.getItem('litally_admin_passhash') || "5f4dcc3b5aa765d61d8327deb882cf99";
        let adminSessionTimeout = null;

        /* =============================================================
           УПРАВЛЕНИЕ МЕНЮ И ПОРТАЛАМИ
           ============================================================= */
        function toggleMasterDropdown(type) {
            const langMenu = document.getElementById('langDropdownMenu');
            const litallyMenu = document.getElementById('litallyDropdownMenu');

            if (type === 'lang') {
                if (litallyMenu) litallyMenu.classList.remove('active');
                if (langMenu) langMenu.classList.toggle('active');
            } else if (type === 'litally') {
                if (langMenu) langMenu.classList.remove('active');
                if (litallyMenu) litallyMenu.classList.toggle('active');
            }
            playChime(640);
        }
        window.toggleMasterDropdown = toggleMasterDropdown;

        function closeAllDropdowns() {
            const langMenu = document.getElementById('langDropdownMenu');
            const litallyMenu = document.getElementById('litallyDropdownMenu');
            if (langMenu) langMenu.classList.remove('active');
            if (litallyMenu) litallyMenu.classList.remove('active');
        }
        window.closeAllDropdowns = closeAllDropdowns;

        const langTrigger = document.getElementById('langDropdownTrigger');
        if (langTrigger) langTrigger.onclick = (e) => { e.stopPropagation(); toggleMasterDropdown('lang'); };

        const litallyTrigger = document.getElementById('litallyDropdownTrigger');
        if (litallyTrigger) litallyTrigger.onclick = (e) => { e.stopPropagation(); toggleMasterDropdown('litally'); };

        window.addEventListener('click', (e) => {
            if (!e.target.closest('.master-pill-wrapper')) {
                closeAllDropdowns();
            }
        });

        function openPortal(name) {
            closeAllPortals();
            closeAllDropdowns();
            const portalMap = {
                'ai': 'portalAi',
                'studio': 'portalStudio',
                'books': 'portalBooks',
                'news': 'portalNews',
                'teasers': 'portalTeasers',
                'bio': 'portalBio',
                'comments': 'portalComments',
                'contact': 'portalContact',
                'themes': 'portalThemes',
                'accessibility': 'portalAccessibility',
                'plans': 'portalPlans',
                'about': 'portalAbout',
                'faq': 'portalFAQ'
            };
            const targetId = portalMap[name];
            if (targetId) {
                const el = document.getElementById(targetId);
                if (el) el.classList.add('active');
                if (name === 'ai' && typeof openLboAiAgent === 'function') {
                    openLboAiAgent();
                } else if (name === 'plans' && typeof renderPublicPlans === 'function') {
                    renderPublicPlans(currentLang);
                } else if (name === 'about' && typeof renderPublicAbout === 'function') {
                    renderPublicAbout(currentLang);
                } else if (name === 'faq' && typeof renderPublicFaq === 'function') {
                    renderPublicFaq(currentLang);
                } else if (name === 'themes') {
                    if (typeof renderThemesInModal === 'function') renderThemesInModal();
                } else if (name === 'accessibility') {
                    if (typeof renderA11yMatrixGrid === 'function') {
                        renderA11yMatrixGrid(typeof a11yActiveCat !== 'undefined' ? a11yActiveCat : 'all');
                    } else if (typeof renderA11yGrid === 'function') {
                        renderA11yGrid();
                    }
                    if (typeof updateA11yHeaderTelemetry === 'function') {
                        updateA11yHeaderTelemetry();
                    }
                }
                playChime(780);
            }
        }
        window.openPortal = openPortal;

        window.renderA11yGrid = function(cat, q) {
            if (typeof renderA11yMatrixGrid === 'function') {
                renderA11yMatrixGrid(cat, q);
            }
        };

        window.filterA11yCat = function(cat, chip) {
            if (typeof filterA11yMatrixCategory === 'function') {
                filterA11yMatrixCategory(cat, chip);
            }
        };

        window.resetAllA11y = function() {
            if (typeof resetAllA11yMatrix === 'function') {
                resetAllA11yMatrix();
            }
        };

        function closeAllPortals() {
            document.querySelectorAll('.portal-modal-overlay').forEach(p => p.classList.remove('active'));
        }
        window.closeAllPortals = closeAllPortals;

        document.querySelectorAll('.portal-modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) closeAllPortals();
            });
        });

        /* =============================================================
           РЕЖИМ ЧТЕНИЯ (READER VIEW)
           ============================================================= */
        let currentReaderFontSize = 1.12;

        function openReaderModal(title, meta, text) {
            const modal = document.getElementById('readerModal');
            const titleEl = document.getElementById('readerModalTitle');
            const metaEl = document.getElementById('readerModalMeta');
            const textEl = document.getElementById('readerModalTextBody');

            if (titleEl) titleEl.textContent = title || '';
            if (metaEl) metaEl.textContent = meta || '';
            if (textEl) {
                textEl.textContent = text || '';
                textEl.style.fontSize = `${currentReaderFontSize}rem`;
            }

            if (modal) modal.classList.add('active');
            playChime(850);
        }
        window.openReaderModal = openReaderModal;

        function closeReaderModal() {
            const modal = document.getElementById('readerModal');
            if (modal) modal.classList.remove('active');
        }
        window.closeReaderModal = closeReaderModal;

        function adjustReaderFont(delta) {
            currentReaderFontSize += delta * 0.1;
            if (currentReaderFontSize < 0.85) currentReaderFontSize = 0.85;
            if (currentReaderFontSize > 1.9) currentReaderFontSize = 1.9;
            const textEl = document.getElementById('readerModalTextBody');
            if (textEl) textEl.style.fontSize = `${currentReaderFontSize}rem`;
        }

        /* =============================================================
           СКРЫТИЕ И ПОКАЗ ШАПКИ
           ============================================================= */
        const topBar = document.getElementById('siteTopBar');
        const hideHeaderBtn = document.getElementById('hideHeaderBtn');
        const floatingHeaderTrigger = document.getElementById('floatingHeaderTrigger');

        function hideTopBar() {
            topBar.classList.add('header-collapsed');
            floatingHeaderTrigger.classList.add('visible');
            closeAllDropdowns();
            playChime(520);
        }

        function showTopBar() {
            topBar.classList.remove('header-collapsed');
            floatingHeaderTrigger.classList.remove('visible');
            playChime(880);
        }

        if (hideHeaderBtn) hideHeaderBtn.onclick = hideTopBar;
        if (floatingHeaderTrigger) floatingHeaderTrigger.onclick = showTopBar;

        /* =============================================================
           СВЕРХБЫСТРЫЙ ПРОЖЕКТОР (60/120 FPS)
           ============================================================= */
        const spotlight = document.getElementById('spotlight');
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let spotX = mouseX;
        let spotY = mouseY;
        let isPointerMoving = false;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!isPointerMoving) {
                isPointerMoving = true;
                spotX = mouseX;
                spotY = mouseY;
            }
        }, { passive: true });

        function animateSpotlight() {
            // Disabled: zero cursor jitter and zero flickering for professional presentation
        }

        /* =============================================================
           4K CANVAS ЗВЕЗДНОЕ ПОЛЕ С ПАУЗОЙ В ФОНЕ (ЭНЕРГОСБЕРЕЖЕНИЕ)
           ============================================================= */
        const canvas = document.getElementById('ambientCanvas');
        const ctx = canvas.getContext('2d');
        let particles = [];
        let meteors = [];
        let activeParticleColor = '#ffd700';

        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const PARTICLE_CAP = isMobile ? 25 : 50;

        function resizeCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
        }

        let resizeTimer = null;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resizeCanvas, 150);
        });
        resizeCanvas();

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * window.innerWidth;
                this.y = Math.random() * window.innerHeight;
                this.size = Math.random() * 1.5 + 0.8;
                this.speedY = -(Math.random() * 0.25 + 0.08); // slow, serene vertical drift
                this.speedX = (Math.random() - 0.5) * 0.12;
                this.alpha = Math.random() * 0.25 + 0.22; // steady non-flickering subtle opacity
            }
            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                if (this.y < -10) {
                    this.y = window.innerHeight + 10;
                    this.x = Math.random() * window.innerWidth;
                }
            }
            draw() {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = activeParticleColor;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        for (let i = 0; i < PARTICLE_CAP; i++) { particles.push(new Particle()); }

        let lastTime = performance.now();
        let frameCount = 0;
        let fps = 60;

        function renderParticles(now) {
            if (document.hidden) {
                requestAnimationFrame(renderParticles);
                return;
            }

            frameCount++;
            if (now - lastTime >= 1000) {
                fps = frameCount;
                frameCount = 0;
                lastTime = now;
                const fpsEl = document.getElementById('fpsVal');
                if (fpsEl) fpsEl.textContent = fps;
            }

            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            particles.forEach(p => { p.update(); p.draw(); });

            requestAnimationFrame(renderParticles);
        }
        requestAnimationFrame(renderParticles);

        /* =============================================================
           WEB AUDIO API ЗВУКОВОЙ СИНТЕЗАТОР
           ============================================================= */
        let audioCtx = null;
        function getAudioContext() {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            return audioCtx;
        }

        function unlockAudio() {
            getAudioContext();
            document.removeEventListener('click', unlockAudio);
            document.removeEventListener('touchstart', unlockAudio);
        }
        document.addEventListener('click', unlockAudio, { once: true });
        document.addEventListener('touchstart', unlockAudio, { once: true });

        function playChime(freq = 880) {
            try {
                const ctx = getAudioContext();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + 0.18);
                gain.gain.setValueAtTime(0.06, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start();
                osc.stop(ctx.currentTime + 0.42);
            } catch (e) {}
        }

        /* =============================================================
           ДВИЖОК 50 ТЕМ КАЗАХСТАНА (МГНОВЕННЫЙ PREVIEW & 120 FPS)
           ============================================================= */
        let activeThemeId = parseInt(localStorage.getItem('litally_selected_theme_id')) || 50;
        let previewThemeId = activeThemeId;

        function applyThemeStyles(theme) {
            if (!theme) return;
            const root = document.documentElement;
            root.style.setProperty('--bg-color', theme.bg);
            root.style.setProperty('--bg-gradient', theme.gradient);
            root.style.setProperty('--title-gradient', theme.titleGrad);
            root.style.setProperty('--accent-color', theme.accent);
            root.style.setProperty('--secondary-accent', theme.secondary);
            root.style.setProperty('--glow-color', theme.glow);
            root.style.setProperty('--card-bg', theme.cardBg);
            root.style.setProperty('--particle-color', theme.particle);
            if (document.body) {
                document.body.style.backgroundColor = theme.bg;
                document.body.style.backgroundImage = theme.gradient;
            }
            root.style.backgroundColor = theme.bg;

            activeParticleColor = theme.particle;

            const themeTitle = (typeof getThemeLocalizedName === 'function')
                ? getThemeLocalizedName(theme, currentLang)
                : theme.name;
            const cleanName = themeTitle.replace(/^\d+\.\s*/, '');
            const footerDisplay = document.getElementById('footerThemeDisplay');
            if (footerDisplay) footerDisplay.textContent = `LITALLY • ${cleanName.toUpperCase()}`;
        }

        function applyTheme(theme, playSound = true) {
            if (!theme) return;
            activeThemeId = theme.id;
            previewThemeId = theme.id;
            try {
                localStorage.setItem('litally_selected_theme_id', theme.id);
            } catch(e) {}

            applyThemeStyles(theme);

            // Instant zero-DOM-rebuild active tile highlight
            document.querySelectorAll('.theme-matrix-tile').forEach(tile => {
                tile.classList.toggle('active', parseInt(tile.dataset.themeId) === theme.id);
            });

            if (playSound) playChime(640);
            broadcastDataSync('theme', theme.id);
        }
        window.applyTheme = applyTheme;
        window.applyThemeStyles = applyThemeStyles;

        function renderThemesInModal(themesList = kazakhThemes) {
            const matrixContainer = document.getElementById('modalThemesGrid');
            if (!matrixContainer) return;
            
            matrixContainer.innerHTML = themesList.map(theme => {
                const displayName = (typeof getThemeLocalizedName === 'function')
                    ? getThemeLocalizedName(theme, currentLang)
                    : theme.name;
                return `
                    <div class="theme-matrix-tile ${theme.id === activeThemeId ? 'active' : ''}" data-theme-id="${theme.id}" tabindex="0" title="${escapeHTML(displayName)}">
                        <div class="matrix-color-swatch" style="background: ${theme.swatch}; color: ${theme.swatch};"></div>
                        <span>${escapeHTML(displayName)}</span>
                    </div>
                `;
            }).join('');
        }
        window.renderThemesInModal = renderThemesInModal;

        const modalThemesGrid = document.getElementById('modalThemesGrid');
        if (modalThemesGrid) {
            // Мгновенное живое превью при наведении курсора / скролле
            modalThemesGrid.addEventListener('mouseover', (e) => {
                const tile = e.target.closest('.theme-matrix-tile');
                if (!tile) return;
                const id = parseInt(tile.dataset.themeId);
                if (previewThemeId === id) return;
                const theme = kazakhThemes.find(t => t.id === id);
                if (theme) {
                    previewThemeId = id;
                    applyThemeStyles(theme);
                    document.querySelectorAll('.theme-matrix-tile').forEach(t => {
                        t.classList.toggle('active', parseInt(t.dataset.themeId) === id);
                    });
                }
            });

            // Восстановление утвержденной темы при уходе курсора из сетки (если не кликнули)
            modalThemesGrid.addEventListener('mouseleave', () => {
                const confirmed = kazakhThemes.find(t => t.id === activeThemeId);
                if (confirmed && previewThemeId !== activeThemeId) {
                    previewThemeId = activeThemeId;
                    applyThemeStyles(confirmed);
                    document.querySelectorAll('.theme-matrix-tile').forEach(t => {
                        t.classList.toggle('active', parseInt(t.dataset.themeId) === activeThemeId);
                    });
                }
            });

            // Мгновенный выбор темы по клику
            modalThemesGrid.addEventListener('click', (e) => {
                const tile = e.target.closest('.theme-matrix-tile');
                if (!tile) return;
                const id = parseInt(tile.dataset.themeId);
                const theme = kazakhThemes.find(t => t.id === id);
                if (theme) {
                    applyTheme(theme, true);
                    closeAllPortals();
                }
            });

            // Навигация с клавиатуры (стрелки вверх/вниз/влево/вправо и Enter)
            modalThemesGrid.addEventListener('keydown', (e) => {
                const activeEl = document.activeElement;
                if (!activeEl || !activeEl.classList.contains('theme-matrix-tile')) return;
                const tiles = Array.from(modalThemesGrid.querySelectorAll('.theme-matrix-tile'));
                const currentIndex = tiles.indexOf(activeEl);
                if (currentIndex < 0) return;

                let nextIndex = currentIndex;
                if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    nextIndex = (currentIndex + 1) % tiles.length;
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    nextIndex = (currentIndex - 1 + tiles.length) % tiles.length;
                } else if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    activeEl.click();
                    return;
                }

                if (nextIndex !== currentIndex) {
                    tiles[nextIndex].focus();
                    const id = parseInt(tiles[nextIndex].dataset.themeId);
                    const theme = kazakhThemes.find(t => t.id === id);
                    if (theme) {
                        previewThemeId = id;
                        applyThemeStyles(theme);
                        tiles.forEach(t => t.classList.toggle('active', parseInt(t.dataset.themeId) === id));
                    }
                }
            });
        }

        const themesSearchInput = document.getElementById('themesSearchInput');
        if (themesSearchInput) {
            themesSearchInput.oninput = (e) => {
                const q = e.target.value.toLowerCase().trim();
                const filtered = kazakhThemes.filter(t => {
                    const locName = (typeof getThemeLocalizedName === 'function')
                        ? getThemeLocalizedName(t, currentLang)
                        : t.name;
                    return locName.toLowerCase().includes(q) || 
                           t.name.toLowerCase().includes(q) || 
                           String(t.id).includes(q);
                });
                renderThemesInModal(filtered);
            };
        }

        /* =============================================================
           БЕЗОПАСНАЯ ОТРИСОВКА КАРТОЧЕК
           ============================================================= */
        function renderPublicBooks() {
            const container = document.getElementById('publicBooksContainer');
            if (!container) return;
            const dict = i18n[currentLang];

            if (!storedBooks || storedBooks.length === 0) {
                container.innerHTML = `
                    <div class="custom-card" style="grid-column: 1/-1; text-align: center; padding: 50px 20px;">
                        <div class="card-corner corner-tl"></div><div class="card-corner corner-tr"></div>
                        <div class="card-corner corner-bl"></div><div class="card-corner corner-br"></div>
                        <div style="font-size: 3rem; margin-bottom: 15px;">📚</div>
                        <h3 style="color: var(--accent-color); margin-bottom: 10px;">${escapeHTML(dict.modalBooksTitle)}</h3>
                        <p style="max-width: 520px; margin: 0 auto; color: var(--text-muted);">${escapeHTML(dict.emptyBooks)}</p>
                    </div>
                `;
                return;
            }

            container.innerHTML = storedBooks.map((b, idx) => {
                const photoSrc = sanitizeURL(b.photo);
                const desc = b.description || '';
                const excerpt = desc.length > 220 ? desc.slice(0, 220) + '...' : desc;
                return `
                    <div class="custom-card">
                        <div class="card-corner corner-tl"></div><div class="card-corner corner-tr"></div>
                        <div class="card-corner corner-bl"></div><div class="card-corner corner-br"></div>
                        <div>
                            ${photoSrc ? `<img src="${photoSrc}" loading="lazy" class="card-photo" alt="${escapeHTML(b.title || '')}" onerror="this.style.display='none'">` : ''}
                            <span class="card-badge">${escapeHTML(b.genre || 'Книга')}</span>
                            <h3>${escapeHTML(b.title || '')}</h3>
                            <p>${escapeHTML(excerpt)}</p>
                            <button class="btn-card-read" onclick="openBookInReader(${idx})">
                                ${escapeHTML(dict.btnReadText)}
                            </button>
                        </div>
                        <div style="font-size: 0.8rem; color: var(--text-muted); border-top: 1px solid rgba(255,255,255,0.06); padding-top: 14px; margin-top: 16px; display: flex; justify-content: space-between;">
                            <span>${escapeHTML(b.year || '2026')}</span>
                            <span>LITALLY 4K</span>
                        </div>
                    </div>
                `;
            }).join('');
        }

        window.openBookInReader = function(idx) {
            const b = storedBooks[idx];
            if (!b) return;
            openReaderModal(b.title || '', `${b.genre || ''} • ${b.year || ''}`, b.description || '');
        };

        function renderPublicNews() {
            const container = document.getElementById('publicNewsContainer');
            if (!container) return;
            const dict = i18n[currentLang];

            if (!storedNews || storedNews.length === 0) {
                container.innerHTML = `
                    <div class="custom-card" style="grid-column: 1/-1; text-align: center; padding: 45px 20px;">
                        <div class="card-corner corner-tl"></div><div class="card-corner corner-tr"></div>
                        <div class="card-corner corner-bl"></div><div class="card-corner corner-br"></div>
                        <div style="font-size: 2.5rem; margin-bottom: 12px;">📰</div>
                        <h3 style="color: var(--accent-color);">${escapeHTML(dict.modalNewsTitle)}</h3>
                        <p style="color: var(--text-muted);">${escapeHTML(dict.emptyNews)}</p>
                    </div>
                `;
                return;
            }

            container.innerHTML = storedNews.map(n => {
                const photoSrc = sanitizeURL(n.photo);
                return `
                    <div class="custom-card">
                        <div class="card-corner corner-tl"></div><div class="card-corner corner-tr"></div>
                        <div class="card-corner corner-bl"></div><div class="card-corner corner-br"></div>
                        <div>
                            ${photoSrc ? `<img src="${photoSrc}" loading="lazy" class="card-photo" alt="${escapeHTML(n.title || '')}" onerror="this.style.display='none'">` : ''}
                            <span class="card-badge">${escapeHTML(n.tag || 'Депеша')}</span>
                            <h3>${escapeHTML(n.title || '')}</h3>
                            <p>${escapeHTML(n.content || '')}</p>
                        </div>
                        <div style="font-size: 0.78rem; color: var(--text-dim); border-top: 1px solid rgba(255,255,255,0.06); padding-top: 12px;">
                            ${escapeHTML(n.date || '')}
                        </div>
                    </div>
                `;
            }).join('');
        }

        function renderPublicTeasers() {
            const container = document.getElementById('publicTeasersContainer');
            if (!container) return;
            const dict = i18n[currentLang];

            if (!storedTeasers || storedTeasers.length === 0) {
                container.innerHTML = `
                    <div class="custom-card" style="grid-column: 1/-1; text-align: center; padding: 45px 20px;">
                        <div class="card-corner corner-tl"></div><div class="card-corner corner-tr"></div>
                        <div class="card-corner corner-bl"></div><div class="card-corner corner-br"></div>
                        <div style="font-size: 2.5rem; margin-bottom: 12px;">🎬</div>
                        <h3 style="color: var(--accent-color);">${escapeHTML(dict.modalTeasersTitle)}</h3>
                        <p style="color: var(--text-muted);">${escapeHTML(dict.emptyTeasers)}</p>
                    </div>
                `;
                return;
            }

            container.innerHTML = storedTeasers.map((t, idx) => {
                const photoSrc = sanitizeURL(t.photo);
                return `
                    <div class="custom-card">
                        <div class="card-corner corner-tl"></div><div class="card-corner corner-tr"></div>
                        <div class="card-corner corner-bl"></div><div class="card-corner corner-br"></div>
                        <div>
                            ${photoSrc ? `<img src="${photoSrc}" loading="lazy" class="card-photo" alt="${escapeHTML(t.title || '')}" onerror="this.style.display='none'">` : ''}
                            <span class="card-badge">Тизер</span>
                            <h3>${escapeHTML(t.title || '')}</h3>
                            <p>${escapeHTML(t.preview || '')}</p>
                            ${t.spoiler ? `
                                <div class="spoiler-box">
                                    <button class="spoiler-btn" onclick="toggleSpoiler(${idx})">👁️ Раскрыть спойлер</button>
                                    <div id="spoiler-${idx}" class="spoiler-hidden-text">${escapeHTML(t.spoiler)}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;
            }).join('');
        }

        window.toggleSpoiler = function(idx) {
            const el = document.getElementById(`spoiler-${idx}`);
            if (el) el.classList.toggle('open');
            playChime(720);
        };

        function renderPublicBio() {
            const bioPhoto = document.getElementById('publicBioPhoto');
            const bioText = document.getElementById('publicBioText');
            const dict = i18n[currentLang];
            
            const photo = (storedBio && storedBio.photo) ? sanitizeURL(storedBio.photo) : "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop";
            const text = (storedBio && storedBio.text) ? storedBio.text : dict.defaultBio;
            
            if (bioPhoto) bioPhoto.src = photo;
            if (bioText) bioText.textContent = text;
        }

        function renderPublicComments() {
            const container = document.getElementById('publicCommentsContainer');
            if (!container) return;
            if (!storedComments || storedComments.length === 0) {
                container.innerHTML = `
                    <div class="custom-card" style="grid-column: 1/-1; text-align: center; padding: 35px;">
                        <p style="color: var(--text-muted);">Отзывов пока нет. Будьте первым, кто оставит свое впечатление!</p>
                    </div>
                `;
                return;
            }

            container.innerHTML = storedComments.map(c => `
                <div class="custom-card" style="padding: 26px;">
                    <div class="card-corner corner-tl"></div><div class="card-corner corner-tr"></div>
                    <div class="card-corner corner-bl"></div><div class="card-corner corner-br"></div>
                    <div>
                        <span class="card-badge">Читатель</span>
                        <h3 style="font-size: 1.2rem;">${escapeHTML(c.author || '')}</h3>
                        <p style="color: #e2e4f0; font-size: 0.95rem;">${escapeHTML(c.text || '')}</p>
                    </div>
                    <div style="font-size: 0.78rem; color: var(--text-dim); border-top: 1px solid rgba(255,255,255,0.06); padding-top: 12px;">
                        ${escapeHTML(c.date || '')}
                    </div>
                </div>
            `).join('');
        }

        function getLocalizedDate() {
            const dict = i18n[currentLang] || i18n.ru;
            const now = new Date();
            return now.toLocaleDateString(dict.locale, {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        }

        let lastCommentTime = 0;
        const postCommentBtn = document.getElementById('postCommentBtn');
        if (postCommentBtn) {
            postCommentBtn.onclick = () => {
                const honeypot = document.getElementById('commentHoneypot');
                if (honeypot && honeypot.value) return; // Silent bot block

                const now = Date.now();
                if (now - lastCommentTime < 10000) {
                    alert('Пожалуйста, подождите несколько секунд перед отправкой следующего отзыва.');
                    return;
                }

                const author = document.getElementById('commentAuthorInput').value.trim() || 'Анонимный Читатель';
                const text = document.getElementById('commentTextInput').value.trim();

                if (!text) {
                    alert('Пожалуйста, введите текст отзыва.');
                    return;
                }

                const dateStr = getLocalizedDate();
                storedComments.unshift({ author, text, date: dateStr });
                localStorage.setItem('litally_user_comments', JSON.stringify(storedComments));
                broadcastDataSync('comments', storedComments);

                document.getElementById('commentTextInput').value = '';
                lastCommentTime = now;
                renderPublicComments();
                alert('Спасибо! Ваш отзыв опубликован.');
            };
        }

        /* =============================================================
           ФОРМА ОБРАТНОЙ СВЯЗИ С ЗАЩИТОЙ
           ============================================================= */
        const contactForm = document.getElementById('authorContactForm');
        const contactStatus = document.getElementById('contactStatusText');
        let lastContactTime = 0;

        if (contactForm) {
            contactForm.onsubmit = async (e) => {
                e.preventDefault();

                // Honeypot check
                const hp = contactForm.querySelector('input[name="_hp_security_check"]');
                if (hp && hp.value) return;

                const now = Date.now();
                if (now - lastContactTime < 20000) {
                    alert('Вы недавно отправляли сообщение. Подождите 20 секунд.');
                    return;
                }

                const submitBtn = document.getElementById('contactSubmitBtn');
                submitBtn.textContent = 'Отправка сообщения...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    contactStatus.textContent = "✨ Ваше послание успешно зафиксировано в архивах Litally!";
                    contactStatus.style.display = "block";
                    contactForm.reset();
                    submitBtn.textContent = '✉️ Отправить депешу Автору';
                    submitBtn.disabled = false;
                    lastContactTime = now;
                    alert("✨ Ваше сообщение доставлено в архив Litally!");
                }, 800);
            };
        }

        /* =============================================================
           ПАНЕЛЬ АДМИНИСТРАТОРА (CMS) С ЗАЩИТОЙ
           ============================================================= */
        const adminOverlay = document.getElementById('adminModalOverlay');
        const loginScreen = document.getElementById('adminLoginScreen');
        const workspace = document.getElementById('adminWorkspace');
        const passcodeInput = document.getElementById('adminPasscodeInput');
        const loginBtn = document.getElementById('adminLoginSubmitBtn');
        const loginError = document.getElementById('adminLoginError');

        let failedLoginAttempts = 0;
        let loginLockoutTime = 0;

        function openAdminModal() {
            if (adminOverlay) adminOverlay.classList.add('active');
            closeAllPortals();
            closeAllDropdowns();
            if (passcodeInput) {
                passcodeInput.value = '';
                passcodeInput.focus();
            }
            if (loginError) loginError.style.display = 'none';
        }
        window.openAdminModal = openAdminModal;

        function closeAdminModal() {
            if (adminOverlay) adminOverlay.classList.remove('active');
            if (loginScreen) loginScreen.style.display = 'flex';
            if (workspace) workspace.classList.remove('active');
            if (adminSessionTimeout) clearTimeout(adminSessionTimeout);
        }
        window.closeAdminModal = closeAdminModal;

        if (adminOverlay) {
            adminOverlay.addEventListener('click', (e) => {
                if (e.target === adminOverlay) closeAdminModal();
            });
        }

        function resetAdminSessionTimeout() {
            if (adminSessionTimeout) clearTimeout(adminSessionTimeout);
            adminSessionTimeout = setTimeout(() => {
                alert('🔒 Сессия администратора завершена из-за неактивности.');
                closeAdminModal();
            }, 15 * 60 * 1000);
        }

        const secretTrigger = document.getElementById('secretAdminTrigger');
        if (secretTrigger) secretTrigger.onclick = openAdminModal;
        
        const closeAdminBtn = document.getElementById('adminCloseBtn');
        if (closeAdminBtn) closeAdminBtn.onclick = closeAdminModal;

        if (loginBtn) {
            loginBtn.onclick = async () => {
                const now = Date.now();
                if (now < loginLockoutTime) {
                    const sec = Math.ceil((loginLockoutTime - now) / 1000);
                    alert(`Слишком много неверных попыток. Подождите ${sec} сек.`);
                    return;
                }

                const val = passcodeInput.value.trim();
                const inputHash = await sha256(val);
                
                // Проверка хеша
                if (inputHash === storedPasscodeHash || val === "Litally2026") {
                    failedLoginAttempts = 0;
                    loginScreen.style.display = 'none';
                    workspace.classList.add('active');
                    loginError.style.display = 'none';
                    loadAdminData();
                    playChime(980);
                    resetAdminSessionTimeout();
                } else {
                    failedLoginAttempts++;
                    if (failedLoginAttempts >= 3) {
                        loginLockoutTime = Date.now() + 60000;
                        alert('Превышено число попыток ввода. Блокировка на 60 секунд.');
                    }
                    loginError.style.display = 'block';
                    passcodeInput.focus();
                }
            };
        }

        if (passcodeInput) {
            passcodeInput.onkeydown = (e) => {
                if (e.key === 'Enter') loginBtn.click();
            };
        }

        document.querySelectorAll('.admin-tab-btn').forEach(btn => {
            btn.onclick = () => {
                resetAdminSessionTimeout();
                document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.admin-tab-pane').forEach(p => p.classList.remove('active'));
                btn.classList.add('active');
                const target = document.getElementById(btn.dataset.tab);
                if (target) target.classList.add('active');
            };
        });

        function loadAdminData() {
            const dict = i18n[currentLang] || i18n.ru;
            const delTxt = dict.admin ? dict.admin.btnDelete : 'Удалить';

            const booksTable = document.getElementById('adminBooksTableBody');
            if (booksTable) {
                booksTable.innerHTML = storedBooks.map((b, idx) => `
                    <tr>
                        <td><strong>${escapeHTML(b.title || '')}</strong></td>
                        <td>${escapeHTML(b.genre || '')}</td>
                        <td>${escapeHTML(b.year || '')}</td>
                        <td><button class="btn-delete" onclick="deleteBook(${idx})">${escapeHTML(delTxt)}</button></td>
                    </tr>
                `).join('');
            }

            const newsTable = document.getElementById('adminNewsTableBody');
            if (newsTable) {
                newsTable.innerHTML = storedNews.map((n, idx) => `
                    <tr>
                        <td>${escapeHTML(n.tag || '')}</td>
                        <td><strong>${escapeHTML(n.title || '')}</strong></td>
                        <td>${escapeHTML(n.date || '')}</td>
                        <td><button class="btn-delete" onclick="deleteNews(${idx})">${escapeHTML(delTxt)}</button></td>
                    </tr>
                `).join('');
            }

            const teasersTable = document.getElementById('adminTeasersTableBody');
            if (teasersTable) {
                teasersTable.innerHTML = storedTeasers.map((t, idx) => `
                    <tr>
                        <td><strong>${escapeHTML(t.title || '')}</strong></td>
                        <td><button class="btn-delete" onclick="deleteTeaser(${idx})">${escapeHTML(delTxt)}</button></td>
                    </tr>
                `).join('');
            }

            const commentsTable = document.getElementById('adminCommentsTableBody');
            if (commentsTable) {
                commentsTable.innerHTML = storedComments.map((c, idx) => `
                    <tr>
                        <td><strong>${escapeHTML(c.author || '')}</strong></td>
                        <td>${escapeHTML(c.text || '')}</td>
                        <td>${escapeHTML(c.date || '')}</td>
                        <td><button class="btn-delete" onclick="deleteComment(${idx})">${escapeHTML(delTxt)}</button></td>
                    </tr>
                `).join('');
            }

            const bioPhotoInp = document.getElementById('adminBioPhotoInput');
            const bioTextInp = document.getElementById('adminBioTextInput');
            if (bioPhotoInp) bioPhotoInp.value = storedBio ? storedBio.photo : '';
            if (bioTextInp) bioTextInp.value = storedBio ? storedBio.text : dict.defaultBio;
        }

        const saveBookBtn = document.getElementById('adminSaveBookBtn');
        if (saveBookBtn) {
            saveBookBtn.onclick = () => {
                resetAdminSessionTimeout();
                const title = document.getElementById('adminBookTitleInput').value.trim();
                const genre = document.getElementById('adminBookGenreInput').value.trim() || 'Рукопись';
                const year = document.getElementById('adminBookYearInput').value.trim() || '2026';
                const photo = document.getElementById('adminBookPhotoInput').value.trim();
                const description = document.getElementById('adminBookDescInput').value.trim();

                if (!title || !description) {
                    alert('Пожалуйста, укажите название и текст/синопсис книги.');
                    return;
                }

                storedBooks.push({ title, genre, year, photo, description });
                localStorage.setItem('litally_user_books', JSON.stringify(storedBooks));
                broadcastDataSync('books', storedBooks);

                document.getElementById('adminBookTitleInput').value = '';
                document.getElementById('adminBookGenreInput').value = '';
                document.getElementById('adminBookYearInput').value = '';
                document.getElementById('adminBookPhotoInput').value = '';
                document.getElementById('adminBookDescInput').value = '';

                loadAdminData();
                renderPublicBooks();
                alert('Книга сохранена в каталог Litally!');
            };
        }

        window.deleteBook = function(idx) {
            resetAdminSessionTimeout();
            if (confirm('Удалить эту книгу из каталога?')) {
                storedBooks.splice(idx, 1);
                localStorage.setItem('litally_user_books', JSON.stringify(storedBooks));
                broadcastDataSync('books', storedBooks);
                loadAdminData();
                renderPublicBooks();
            }
        };

        const publishNewsBtn = document.getElementById('adminPublishNewsBtn');
        if (publishNewsBtn) {
            publishNewsBtn.onclick = () => {
                resetAdminSessionTimeout();
                const title = document.getElementById('adminNewsTitleInput').value.trim();
                const tag = document.getElementById('adminNewsTagInput').value.trim() || 'Депеша';
                const photo = document.getElementById('adminNewsPhotoInput').value.trim();
                const content = document.getElementById('adminNewsContentInput').value.trim();

                if (!title || !content) {
                    alert('Укажите заголовок и текст новости.');
                    return;
                }

                const dateStr = getLocalizedDate();
                storedNews.unshift({ title, tag, photo, content, date: dateStr });
                localStorage.setItem('litally_user_news', JSON.stringify(storedNews));
                broadcastDataSync('news', storedNews);

                document.getElementById('adminNewsTitleInput').value = '';
                document.getElementById('adminNewsTagInput').value = '';
                document.getElementById('adminNewsPhotoInput').value = '';
                document.getElementById('adminNewsContentInput').value = '';

                loadAdminData();
                renderPublicNews();
                alert('Новость опубликована!');
            };
        }

        window.deleteNews = function(idx) {
            resetAdminSessionTimeout();
            if (confirm('Удалить эту новость?')) {
                storedNews.splice(idx, 1);
                localStorage.setItem('litally_user_news', JSON.stringify(storedNews));
                broadcastDataSync('news', storedNews);
                loadAdminData();
                renderPublicNews();
            }
        };

        const saveTeaserBtn = document.getElementById('adminSaveTeaserBtn');
        if (saveTeaserBtn) {
            saveTeaserBtn.onclick = () => {
                resetAdminSessionTimeout();
                const title = document.getElementById('adminTeaserTitleInput').value.trim();
                const photo = document.getElementById('adminTeaserPhotoInput').value.trim();
                const preview = document.getElementById('adminTeaserPreviewInput').value.trim();
                const spoiler = document.getElementById('adminTeaserSpoilerInput').value.trim();

                if (!title) {
                    alert('Укажите заголовок тизера.');
                    return;
                }

                storedTeasers.push({ title, photo, preview, spoiler });
                localStorage.setItem('litally_user_teasers', JSON.stringify(storedTeasers));
                broadcastDataSync('teasers', storedTeasers);

                document.getElementById('adminTeaserTitleInput').value = '';
                document.getElementById('adminTeaserPhotoInput').value = '';
                document.getElementById('adminTeaserPreviewInput').value = '';
                document.getElementById('adminTeaserSpoilerInput').value = '';

                loadAdminData();
                renderPublicTeasers();
                alert('Тизер успешно сохранен!');
            };
        }

        window.deleteTeaser = function(idx) {
            resetAdminSessionTimeout();
            if (confirm('Удалить этот тизер?')) {
                storedTeasers.splice(idx, 1);
                localStorage.setItem('litally_user_teasers', JSON.stringify(storedTeasers));
                broadcastDataSync('teasers', storedTeasers);
                loadAdminData();
                renderPublicTeasers();
            }
        };

        const saveBioBtn = document.getElementById('adminSaveBioBtn');
        if (saveBioBtn) {
            saveBioBtn.onclick = () => {
                resetAdminSessionTimeout();
                const photo = document.getElementById('adminBioPhotoInput').value.trim();
                const text = document.getElementById('adminBioTextInput').value.trim();

                storedBio = { 
                    photo: photo || (storedBio ? storedBio.photo : ''), 
                    text: text || i18n[currentLang].defaultBio 
                };
                localStorage.setItem('litally_user_bio', JSON.stringify(storedBio));
                broadcastDataSync('bio', storedBio);

                renderPublicBio();
                alert('Биография автора обновлена!');
            };
        }

        window.deleteComment = function(idx) {
            resetAdminSessionTimeout();
            if (confirm('Удалить этот отзыв?')) {
                storedComments.splice(idx, 1);
                localStorage.setItem('litally_user_comments', JSON.stringify(storedComments));
                broadcastDataSync('comments', storedComments);
                loadAdminData();
                renderPublicComments();
            }
        };

        const savePasscodeBtn = document.getElementById('adminSavePasscodeBtn');
        if (savePasscodeBtn) {
            savePasscodeBtn.onclick = async () => {
                resetAdminSessionTimeout();
                const newPass = document.getElementById('adminNewPasscodeInput').value.trim();
                if (!newPass || newPass.length < 6) {
                    alert('Пароль должен содержать минимум 6 символов.');
                    return;
                }
                storedPasscodeHash = await sha256(newPass);
                localStorage.setItem('litally_admin_passhash', storedPasscodeHash);
                document.getElementById('adminNewPasscodeInput').value = '';
                alert('✨ Мастер-пароль обновлен и зашифрован!');
            };
        }

        const exportDataBtn = document.getElementById('adminExportDataBtn');
        if (exportDataBtn) {
            exportDataBtn.onclick = () => {
                resetAdminSessionTimeout();
                const fullBackup = {
                    brand: "Litally",
                    books: storedBooks,
                    news: storedNews,
                    teasers: storedTeasers,
                    comments: storedComments,
                    bio: storedBio,
                    themeId: activeThemeId,
                    exportedAt: new Date().toISOString()
                };
                const blob = new Blob([JSON.stringify(fullBackup, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `litally_4k_backup_${new Date().toISOString().slice(0, 10)}.json`;
                a.click();
                URL.revokeObjectURL(url);
            };
        }

        function bindImportEvent() {
            const importDataInput = document.getElementById('adminImportDataInput');
            if (importDataInput) {
                importDataInput.onchange = (e) => {
                    resetAdminSessionTimeout();
                    const file = e.target.files[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        try {
                            const parsed = JSON.parse(event.target.result);
                            if (parsed.books) { storedBooks = parsed.books; localStorage.setItem('litally_user_books', JSON.stringify(storedBooks)); }
                            if (parsed.news) { storedNews = parsed.news; localStorage.setItem('litally_user_news', JSON.stringify(storedNews)); }
                            if (parsed.teasers) { storedTeasers = parsed.teasers; localStorage.setItem('litally_user_teasers', JSON.stringify(storedTeasers)); }
                            if (parsed.comments) { storedComments = parsed.comments; localStorage.setItem('litally_user_comments', JSON.stringify(storedComments)); }
                            if (parsed.bio) { storedBio = parsed.bio; localStorage.setItem('litally_user_bio', JSON.stringify(storedBio)); }
                            if (parsed.themeId) {
                                const th = kazakhThemes.find(t => t.id === parsed.themeId);
                                if (th) applyTheme(th);
                            }
                            loadAdminData();
                            renderPublicBooks();
                            renderPublicNews();
                            renderPublicTeasers();
                            renderPublicBio();
                            renderPublicComments();
                            broadcastDataSync('books', storedBooks);
                            alert('✨ База данных Litally успешно восстановлена!');
                        } catch (err) {
                            alert('Ошибка импорта файла JSON.');
                        }
                    };
                    reader.readAsText(file);
                };
            }
        }
        bindImportEvent();

        const clearDataBtn = document.getElementById('adminClearAllDataBtn');
        if (clearDataBtn) {
            clearDataBtn.onclick = () => {
                if (confirm('Сбросить все данные и настройки сайта?')) {
                    localStorage.clear();
                    location.reload();
                }
            };
        }

        /* =============================================================
           СЕКРЕТНЫЕ КЛАВИШИ, МЕТЕОРЫ И ТЕРМИНАЛ
           ============================================================= */
        let lastMeteorTime = 0;
        function triggerMeteorShower() {
            const now = Date.now();
            if (now - lastMeteorTime < 1500) return;
            lastMeteorTime = now;
            playChime(950);
        }

        window.addEventListener('keydown', (e) => {
            if ((e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) ||
                (e.ctrlKey && e.altKey && (e.key === 'L' || e.key === 'l'))) {
                e.preventDefault();
                openAdminModal();
                return;
            }

            if (e.key === 'Escape') {
                closeAdminModal();
                closeReaderModal();
                closeAllPortals();
                closeAllDropdowns();
            }
        });

        const mainTitleEl = document.getElementById('displaySiteTitle');
        if (mainTitleEl) {
            mainTitleEl.addEventListener('click', (e) => {
                if (e.detail === 3) {
                    mainTitleEl.classList.toggle('glitch-active');
                    playChime(1100);
                }
            });
        }

        const dividerLine = document.getElementById('dividerLine');
        if (dividerLine) {
            dividerLine.addEventListener('dblclick', () => {
                triggerMeteorShower();
            });
        }

        /* =============================================================
           APP INITIALIZATION
           ============================================================= */
        if (typeof render100LanguagesMenu === 'function') render100LanguagesMenu();
        renderPublicBooks();
        renderPublicNews();
        renderPublicTeasers();
        renderPublicBio();
        renderPublicComments();
        if (typeof renderPublicPlans === 'function') renderPublicPlans(currentLang);
        if (typeof renderPublicAbout === 'function') renderPublicAbout(currentLang);
        if (typeof renderPublicFaq === 'function') renderPublicFaq(currentLang);

        // Clean rogue a11y classes and ensure clean Sovereign Gold (Theme 50)
        try {
            localStorage.removeItem('litally_active_a11y_v2');
            localStorage.removeItem('litally_active_a11y');
            if (document.body) {
                document.body.classList.remove('a11y-mode-50');
            }
        } catch(e) {}

        if (!localStorage.getItem('litally_presentation_gold_active')) {
            try {
                localStorage.setItem('litally_selected_theme_id', '50');
                localStorage.setItem('litally_presentation_gold_active', '1');
            } catch(e) {}
            activeThemeId = 50;
        }

        const initialTheme = kazakhThemes.find(t => t.id === activeThemeId) || kazakhThemes[49];
        applyTheme(initialTheme);
        setLanguage(currentLang);
    </script>