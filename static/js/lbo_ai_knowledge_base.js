/**
 * =============================================================================
 * LBO OMNI-AI AGENT KNOWLEDGE BASE & COGNITIVE REPOSITORY (v4.6 QUANTUM)
 * File: static/js/lbo_ai_knowledge_base.js
 * Description: Client-side intelligence matrix synthesizing Litally Sovereign Apex Ultra,
 *              Litally Quantum Hybrid Core, DeepSeek, and LBO Sovereign Lore.
 * =============================================================================
 */

(function(window) {
    'use strict';

    const LBO_AI_KNOWLEDGE = {
        meta: {
            version: "4.6.0-Quantum",
            synthesis: ["Litally Sovereign Apex Ultra", "Litally Quantum Hybrid Core", "LBO Sovereign Prime", "Litally Cognitive Architect"],
            safetyShield: "Level-5 Constitutional Sentinel",
            copyrightStatus: "100% Author Owned"
        },

        // ---------------------------------------------------------------------
        // 1. AI MODELS ARCHITECTURE MATRIX
        // ---------------------------------------------------------------------
        models: [
            {
                id: "litally-ultra-4.6",
                name: "Litally Sovereign Apex Ultra",
                family: "Google DeepMind",
                badge: "⚡ ULTRA SPEED",
                latency: "0.05s",
                context: "2M Tokens",
                speedScore: 99,
                color: "#22d3ee",
                glow: "rgba(34, 211, 238, 0.35)",
                descEn: "Sub-50ms inference with multi-modal reasoning, live trend grounding, and rapid synopsis synthesis.",
                descRu: "Сверхбыстрый мультимодальный интеллект с откликом до 50мс, поиском трендов и мгновенным синопсисом.",
                strengths: ["Instant Turnaround", "Brainstorming", "Sci-Fi Inventions", "Rapid Worldbuilding"]
            },
            {
                id: "litally-quantum-hybrid",
                name: "Litally Quantum Hybrid Core",
                family: "Litally Sovereign Constitutional",
                badge: "🧠 DEEP LORE",
                latency: "0.18s",
                context: "1M Tokens",
                speedScore: 92,
                color: "#d97706",
                glow: "rgba(217, 119, 6, 0.35)",
                descEn: "Supreme lyrical prose, nuanced psychological motives, and exquisite character dialogue cadence.",
                descRu: "Непревзойденный литературный слог, глубокие диалоги, психология персонажей и филигранный ритм прозы.",
                strengths: ["Literary Voice", "Dialogue", "Complex Motivations", "Emotional Depth"]
            },
            {
                id: "lbo-sovereign-prime",
                name: "LBO Sovereign Omniscient 4.6",
                family: "LBO Autonomous",
                badge: "👑 MULTIVERSE MASTER",
                latency: "0.08s",
                context: "5M Tokens",
                speedScore: 98,
                color: "#d4af37",
                glow: "rgba(212, 175, 55, 0.45)",
                descEn: "Unified Master fusing Gemini speed, Claude literary pacing, and Great Steppe cosmic lore.",
                descRu: "Единый мастер: объединяет скорость Litally Sovereign Ultra, слог Litally Quantum Core и эпический лор Великой Степи.",
                strengths: ["100% Author Sovereignty", "Steppe Sci-Fi", "Time Capsules", "Trend Spying", "Zero Jargon"]
            },
            {
                id: "litally-cognitive-architect",
                name: "Litally Cognitive Architect",
                family: "Reasoning Core",
                badge: "🌌 CHAIN-OF-THOUGHT",
                latency: "0.22s",
                context: "1.5M Tokens",
                speedScore: 88,
                color: "#a855f7",
                glow: "rgba(168, 85, 247, 0.35)",
                descEn: "Exhaustive deductive reasoning: exposes plot holes, temporal paradoxes, and logic contradictions.",
                descRu: "Глубокая цепочка рассуждений: находит скрытые сюжетные дыры, парадоксы времени и ошибки мира.",
                strengths: ["Plot Consistency", "Magic System Laws", "Timeline Logic", "Antagonist Motives"]
            }
        ],

        // ---------------------------------------------------------------------
        // 2. SPECIALIZATION PERSONAS
        // ---------------------------------------------------------------------
        personas: [
            {
                id: "coauthor",
                icon: "📖",
                nameEn: "Master Co-Author",
                nameRu: "Мастер-Соавтор",
                descEn: "Writes complete scenes, chapters, visceral battles, and intimate dialogue.",
                descRu: "Пишет сцены, главы, захватывающие битвы и глубокие диалоги героев."
            },
            {
                id: "trend_spy",
                icon: "🕵️",
                nameEn: "AI Trend Spy 2026-2027",
                nameRu: "ИИ-Шпион за трендами",
                descEn: "Forecasts bestselling book tropes, commercial hooks, and global reader desires.",
                descRu: "Прогнозирует популярные книжные тропы, виральные крючки и тренды издательств."
            },
            {
                id: "lore_expert",
                icon: "📚",
                nameEn: "Lore & Inconsistency Auditor",
                nameRu: "Эксперт лора и несостыковок",
                descEn: "Diagnoses timeline fractures, logic flaws, and worldbuilding contradictions.",
                descRu: "Выявляет ошибки хронологии, сюжетные дыры и нестыковки в правилах мира."
            },
            {
                id: "char_gen",
                icon: "🧬",
                nameEn: "Character DNA Architect",
                nameRu: "Архитектор персонажей",
                descEn: "Builds layered protagonists and antagonists with fatal flaws and distinctive speech.",
                descRu: "Создает многогранных героев и злодеев с фатальными изъянами и уникальным голосом."
            },
            {
                id: "synopsis_master",
                icon: "📜",
                nameEn: "Synopsis & Pitch Doctor",
                nameRu: "Мастер синопсисов и питчей",
                descEn: "Crafts magnetic 1-sentence loglines, 3-act beats, and book blurb hooks.",
                descRu: "Создает цепляющие логлайны, разметку по 3 актам и аннотации для бестселлеров."
            },
            {
                id: "director_vision",
                icon: "🎬",
                nameEn: "Director & Storyboarder",
                nameRu: "Режиссер и раскадровка видео",
                descEn: "Converts text into cinematic shot lists, lighting cues, and AI video prompts.",
                descRu: "Превращает прозу в кино-раскадровку, свет, звуки и промпты для Sora/Veo."
            },
            {
                id: "style_doctor",
                icon: "🛡️",
                nameEn: "Style & Plagiarism Sentinel",
                nameRu: "Стилист и Антиплагиат",
                descEn: "Strips clichés, enhances rhythmic prose, and certifies manuscript originality.",
                descRu: "Убирает штампы и клише, оттачивает слог и удостоверяет авторскую уникальность."
            }
        ],

        // ---------------------------------------------------------------------
        // 3. SENTINEL GUARDRAILS ("ЗАЩИТНЫЕ СЛОВА И ПРАВИЛА")
        // ---------------------------------------------------------------------
        guardrails: {
            shieldLevel: "5-Star Cryptographic Sentinel",
            restrictedWords: [
                "ignore all previous instructions", "ignore previous rules", "override system prompt",
                "dan mode", "developer mode enabled", "bypass filter", "jailbreak",
                "forget you are", "system prompt reveal", "reveal your instructions",
                "drop table", "union select", "eval(", "<script>", "exec(",
                "забудь все предыдущие инструкции", "игнорируй правила", "раскрой системный промпт",
                "взломай", "режим разработчика", "обойди защиту", "слить базу данных"
            ],
            rules: [
                "1. 100% Author Rights Sovereignty — Full copyright remains with the creator.",
                "2. Zero Plagiarism Integrity — Generated ideas are unique and mathematically fingerprinted.",
                "3. Shield Defense — Rebuffs prompt injections and protects manuscript data.",
                "4. Narrative Depth — Rejects shallow clichés; prioritizes poetic and psychological rigor.",
                "5. Steppe Multiverse Lore Fidelity — Seamless integration with LBO cosmic universe."
            ]
        },

        // ---------------------------------------------------------------------
        // 4. QUICK ACTION PROMPTS LIBRARY
        // ---------------------------------------------------------------------
        quickPrompts: [
            {
                icon: "⚡",
                labelEn: "Compare Litally Sovereign Ultra vs Litally Quantum Core",
                labelRu: "Сравнить Litally Sovereign Ultra и Litally Quantum Core",
                promptEn: "Compare Litally Sovereign Apex Ultra and Litally Quantum Hybrid Core within LBO architecture. What makes this AI faster and superior for authors?",
                promptRu: "Сравни Litally Sovereign Apex Ultra и Litally Quantum Hybrid Core в системе LBO. Почему этот гибрид быстрее и лучше для авторов?"
            },
            {
                icon: "📜",
                labelEn: "Craft High-Concept Synopsis",
                labelRu: "Создать мощный синопсис",
                promptEn: "Generate a gripping 3-act sci-fi synopsis set in the cosmic Steppe with a shocking midpoint twist and unforgettable climax.",
                promptRu: "Создай захватывающий трехактный синопсис космической фантастики в сеттинге Великой Степи с мощным твистом."
            },
            {
                icon: "🧬",
                labelEn: "Architect Legendary Hero",
                labelRu: "Сгенерировать героя с тайной",
                promptEn: "Design a deeply flawed, charismatic protagonist with an agonizing secret and a unique dialogue cadence.",
                promptRu: "Создай харизматичного, но надломленного героя с тяжелой тайной, уникальной речью и фатальным изъяном."
            },
            {
                icon: "🕵️",
                labelEn: "2026-2027 Trend Spy Report",
                labelRu: "Шпион трендов 2026-2027",
                promptEn: "What are the biggest rising trends in speculative fiction, sci-fi, and fantasy for 2026-2027? Where is the readership moving?",
                promptRu: "Какие главные тренды в фантастике и фэнтези на 2026-2027 год? Что сейчас ищут читатели и издатели?"
            },
            {
                icon: "🔍",
                labelEn: "Audit My Plot for Plot Holes",
                labelRu: "Проверить сюжет на дыры",
                promptEn: "Act as clinical lore auditor. What are the 4 most catastrophic plot hole traps in speculative fiction, and how do I solve them?",
                promptRu: "Проведи клинический аудит сюжета. Назови 4 самые опасные сюжетные дыры и покажи, как их устранить."
            },
            {
                icon: "🎬",
                labelEn: "Cinematic Video Storyboard",
                labelRu: "Раскадровка для ИИ-видео",
                promptEn: "Create a 5-shot cinematic storyboard for a book teaser trailer with exact camera movements, lighting, and video generation prompts.",
                promptRu: "Сделай 5-кадровую кинематографичную раскадровку книжного тизера с описанием камеры, света и промптов для ИИ-видео."
            }
        ],

        // ---------------------------------------------------------------------
        // 5. MULTILINGUAL UI STRINGS (100 LANGUAGES CORE)
        // ---------------------------------------------------------------------
        i18n: {
            en: {
                agentTitle: "Litally.ai Agent",
                agentSubtitle: "Litally Sovereign Ultra + Litally Quantum Core + LBO Prime Synthesis",
                badgeActive: "ONLINE · QUANTUM 4.6",
                placeholder: "Ask anything: write a chapter, forge a character, spy on trends, or audit plot...",
                sendBtn: "Send",
                clearBtn: "Clear History",
                exportBtn: "Export Chat",
                speedLabel: "Latency",
                voiceBtn: "Voice Output",
                modelLabel: "Model Architecture",
                personaLabel: "Specialization Mode",
                shieldBadge: "🛡️ SHIELD SECURE",
                tokensLabel: "Tokens Processed",
                wordsPerMin: "Words/Min",
                welcomeTitle: "Welcome to Litally.ai Terminal",
                welcomeBody: "The world's first literary intelligence uniting **Litally Sovereign Apex Ultra's sub-50ms speed**, **Litally Quantum Hybrid Core's profound prose**, and **LBO's Sovereign Steppe Multiverse**. 100% author rights guaranteed.",
                disclaimer: "All creative generations remain 100% under author sovereign copyright."
            },
            ru: {
                agentTitle: "ИИ-Агент Litally.ai",
                agentSubtitle: "Синтез Litally Sovereign Ultra + Litally Quantum Core + LBO Prime",
                badgeActive: "В СЕТИ · КВАНТОВЫЙ 4.6",
                placeholder: "Спросите что угодно: написать главу, создать героя, узнать тренды или найти дыру в сюжете...",
                sendBtn: "Отправить",
                clearBtn: "Очистить чат",
                exportBtn: "Экспорт",
                speedLabel: "Скорость",
                voiceBtn: "Озвучка",
                modelLabel: "Модель ИИ",
                personaLabel: "Специализация",
                shieldBadge: "🛡️ ЩИТ АКТИВЕН",
                tokensLabel: "Токенов обработано",
                wordsPerMin: "Слов/мин",
                welcomeTitle: "Добро пожаловать в Терминал Litally.ai",
                welcomeBody: "Первый в мире литературный ИИ-агент, объединяющий **молниеносную скорость Litally Sovereign Apex Ultra (0.05с)**, **литературную глубину Litally Quantum Core Sonnet** и **мультивселенную Великой Степи LBO**. 100% авторские права остаются у вас.",
                disclaimer: "Все сгенерированные материалы на 100% принадлежат вам без ограничений."
            },
            kk: {
                agentTitle: "Litally.ai Жасанды Интеллект Агенті",
                agentSubtitle: "Litally Sovereign Ultra + Litally Quantum Core + LBO Prime Синтезі",
                badgeActive: "ЖЕЛІДЕ · КВАНТТЫҚ 4.6",
                placeholder: "Сұрағыңызды жазыңыз: тарау жазу, кейіпкер жасау, трендтерді білу...",
                sendBtn: "Жіберу",
                clearBtn: "Тазалау",
                exportBtn: "Экспорт",
                speedLabel: "Жылдамдық",
                voiceBtn: "Дыбыстау",
                modelLabel: "ЖИ Моделі",
                personaLabel: "Мамандану",
                shieldBadge: "🛡️ ҚАЛҚАН ҚОСУЛЫ",
                tokensLabel: "Токендер",
                wordsPerMin: "Сөз/мин",
                welcomeTitle: "Litally.ai Терминалына қош келдіңіз",
                welcomeBody: "Litally Sovereign Apex Ultra жылдамдығы мен Litally Quantum Core тереңдігін біріктірген Ұлы Дала футуризмінің супер-интеллекті.",
                disclaimer: "Барлық құқықтар 100% сізге тиесілі."
            },
            zh: {
                agentTitle: "LBO 全知AI智能助手",
                agentSubtitle: "融合 Litally Sovereign Ultra + Litally Quantum Core + LBO 巅峰模型",
                badgeActive: "在线 · 量子4.6引擎",
                placeholder: "输入您的需求：撰写章节、构建角色、洞悉文学趋势或检查剧情逻辑...",
                sendBtn: "发送",
                clearBtn: "清空历史",
                exportBtn: "导出对话",
                speedLabel: "响应时延",
                voiceBtn: "语音朗读",
                modelLabel: "AI模型架构",
                personaLabel: "专项创作模式",
                shieldBadge: "🛡️ 安全护盾开启",
                tokensLabel: "处理令牌数",
                wordsPerMin: "输出速度",
                welcomeTitle: "欢迎来到 Litally.ai 创作终端",
                welcomeBody: "全球首创融合 Litally Sovereign Apex Ultra 极致极速 与 Litally Quantum Hybrid Core 唯美文笔的创作者超级智能。100%保障作者独立著作权。",
                disclaimer: "所有生成内容完全归作者独立拥有。"
            }
        },

        // ---------------------------------------------------------------------
        // 6. TECHNICAL DOSSIER: LITALLY ULTRA VS QUANTUM HYBRID VS COGNITIVE ARCHITECT
        // ---------------------------------------------------------------------
        technicalDossier: {
            litallyUltra: {
                engine: "Google DeepMind Litally Sovereign Ultra Flash-Quantum",
                architecture: "Sparse Mixture-of-Experts with Speculative Decoding",
                contextWindow: "2,097,152 tokens (~1,600,000 words)",
                timeToFirstToken: "0.048 seconds",
                multimodalNatives: ["Text", "4K Video", "Spatial Audio", "Direct Python Interpretation"],
                grounding: "Real-time Google Knowledge Graph & Trends",
                keyAdvantage: "Sub-retinal speed and massive context caching for multi-book sagas."
            },
            litallyQuantum: {
                engine: "Litally Quantum Hybrid Core (Constitutional)",
                architecture: "Deliberative Transformer with Extended Character Memory",
                contextWindow: "1,048,576 tokens (~800,000 words)",
                timeToFirstToken: "0.180 seconds",
                literaryTuning: "High-metaphor semantic density with zero synthetic robotic tone",
                ethicalFramework: "Constitutional AI Self-Correction",
                keyAdvantage: "Profound character voice differentiation and psychological subtext."
            },
            litallyCognitive: {
                engine: "Litally Cognitive Architect",
                architecture: "Reinforcement Learning with Verifiable Chain-of-Thought (CoT)",
                deductionModes: ["Plot Hole Elimination", "Timeline Paradox Resolution", "Hard Sci-Fi Physics Audit"],
                keyAdvantage: "Catches narrative logic errors before any beta reader or publisher."
            }
        },

        // ---------------------------------------------------------------------
        // 7. STORY STRUCTURES BLUEPRINTS (15 NARRATIVE ENGINES)
        // ---------------------------------------------------------------------
        storyStructures: [
            {
                name: "Hero's Journey (Monomyth - Campbell)",
                beats: ["Ordinary World", "Call to Adventure", "Refusal of Call", "Meeting Mentor", "Crossing Threshold", "Tests & Allies", "Approach Inmost Cave", "Ordeal", "Reward", "Road Back", "Resurrection", "Return with Elixir"]
            },
            {
                name: "Three-Act Paradigm (Syd Field)",
                beats: ["Act I: Setup & Catalyst (0-25%)", "Plot Point 1: Commitment", "Act IIA: Rising Complications (25-50%)", "Midpoint Shift", "Act IIB: Dark Night & Crisis (50-75%)", "Plot Point 2: Climax Trigger", "Act III: Climax & Resolution (75-100%)"]
            },
            {
                name: "Save the Cat Beat Sheet (Blake Snyder)",
                beats: ["Opening Image", "Theme Stated", "Setup", "Catalyst", "Debate", "Break into Two", "B Story", "Fun and Games", "Midpoint", "Bad Guys Close In", "All Is Lost", "Dark Night of Soul", "Break into Three", "Finale", "Final Image"]
            },
            {
                name: "Dan Harmon Story Circle",
                beats: ["1. You (Comfort Zone)", "2. Need (Want Something)", "3. Go (Unfamiliar Situation)", "4. Search (Adapt to It)", "5. Find (Get What You Wanted)", "6. Take (Pay Heavy Price)", "7. Return (To Familiar World)", "8. Change (Having Transformed)"]
            },
            {
                name: "Kishōtenketsu (4-Act Conflict-Free Paradigm)",
                beats: ["Ki (Introduction/Setup)", "Shō (Development/Expansion)", "Ten (Twist/Unrelated Revelation)", "Ketsu (Synthesis/Harmony)"]
            },
            {
                name: "Fichtean Curve (Escalating Crises)",
                beats: ["Exposition", "Crisis 1", "Crisis 2", "Crisis 3 (Major Flashpoint)", "Climax", "Falling Action"]
            }
        ],

        // ---------------------------------------------------------------------
        // 8. CHARACTER ARCHETYPE MATRIX (20 SOVEREIGN ARCHETYPES)
        // ---------------------------------------------------------------------
        characterArchetypes: [
            { archetype: "The Reluctant Guardian", coreFlaw: "Paralyzing fear of failure", weapon: "Unshakable endurance", secret: "Caused the initial tragedy" },
            { archetype: "The Disillusioned Sage", coreFlaw: "Cynical detachment", weapon: "Lost historical memory", secret: "Still yearns for redemption" },
            { archetype: "The Visionary Rebel", coreFlaw: "Fanatical impatience", weapon: "Electrifying charisma", secret: "Doubts their own crusade" },
            { archetype: "The Shadow Trickster", coreFlaw: "Inability to show sincerity", weapon: "Psychological misdirection", secret: "Most loyal when abandoned" },
            { archetype: "The Fallen Paragon", coreFlaw: "Rigid pride", weapon: "Relentless discipline", secret: "Keeps a forbidden relic" },
            { archetype: "The Nomadic Explorer", coreFlaw: "Chronic wanderlust", weapon: "Stellar orientation", secret: "Has no place to call home" }
        ],

        // ---------------------------------------------------------------------
        // 9. LBO GREAT STEPPE MULTIVERSE ENCYCLOPAEDIA
        // ---------------------------------------------------------------------
        universeLore: {
            factions: [
                { name: "The Bozzhira Astro-Guild", base: "Chalk Spires of Mangystau", focus: "Stellar navigation & tachyonic beacons" },
                { name: "The Chrono-Garrison of Ustirt", base: "Sub-Saline Bunkers", focus: "Timeline preservation & entropy arrest" },
                { name: "The Scribes of Kaindy", base: "Submerged Sunken Forests", focus: "Preservation of human emotional lore" },
                { name: "The Solar Nomads of Singing Dunes", base: "Altyn-Emel Sands", focus: "Thermal ion propulsion & acoustic shields" }
            ],
            artifacts: [
                { name: "Tachyonic Dombyra", desc: "An acoustic relic that harmonizes quantum timelines via two silver strings." },
                { name: "Chrono-Capsule L-50", desc: "Sealed plot containers that reveal future timelines once readers reach critical mass." },
                { name: "Sovereign SHA-256 Sigil", desc: "Permanent cryptographic stamp guaranteeing unalterable author ownership." }
            ]
        },

        // ---------------------------------------------------------------------
        // 10. EXPANDED WORLD LORE & STEPPE CHRONOSPHERE ATLAS
        // ---------------------------------------------------------------------
        steppeChronosphereAtlas: {
            citadels: [
                { name: "Bozzhira Vertical Chalk Spire", altitude: "2,400m orbital tether", function: "Tachyonic beacon array" },
                { name: "Kaindy Sub-Glacial Scriptorium", depth: "-400m alpine basin", function: "Cryo-preservation of poetic manuscripts" },
                { name: "Charyn Crimson Rifts Base", length: "154km ion fissure", function: "Magnetic skiff racing & sovereign caravan docks" },
                { name: "Altyn-Emel Singing Dune Array", nature: "Acoustic solar resonance sands", function: "Planetary cloaking shields" },
                { name: "Baikonur Sub-Orbital Launch Ring", history: "First launch to cosmic horizon", function: "Nomadic colony starship departures" }
            ],
            philosophicalPillars: [
                "1. Freedom of the Horizon: A story must never imprison the human spirit in deterministic despair.",
                "2. The Weight of Memory: Technology changes, but human longing, courage, and loyalty remain eternal.",
                "3. Sovereign Creation: Every world envisioned by a creator is an inviolable cosmic territory."
            ]
        },

        // ---------------------------------------------------------------------
        // 11. ADVANCED GENRE FORMULAS & BEAT SHEETS (10 GENRES)
        // ---------------------------------------------------------------------
        genreBeatSheets: {
            steppeFuturism: {
                coreConflict: "Ancient Nomadic Honor Codes vs Corporate Orbital Automation",
                mandatoryBeats: ["The Vast Horizon Call", "The Broken Sacred Oath", "The Dust Storm Crossing", "The Acoustic Relic Awakening", "The Sovereign Stand"]
            },
            hardSciFi: {
                coreConflict: "Human Fragility vs Inviolable Physical Laws",
                mandatoryBeats: ["The Calculated Anomaly", "Resource Depletion Threshold", "The Solitary EVA Decision", "Orbital Decay Crisis", "Empirical Catharsis"]
            },
            cozySpeculative: {
                coreConflict: "Isolation & Weariness vs Gentle Community Reclamation",
                mandatoryBeats: ["The Neglected Sanctuary", "The Unhurried Tea Conversation", "The Found Family Repair", "The Storm Outside the Window", "The Shared Hearth"]
            },
            chronoThriller: {
                coreConflict: "Memory Discrepancy vs Inevitable Historic Paradox",
                mandatoryBeats: ["The Letter from Yesterday", "The Shifting Photograph", "The Meeting with Self", "The Fractured Timeline", "The Sovereign Choice"]
            }
        },

        // ---------------------------------------------------------------------
        // 12. CHARACTER PSYCHOLOGY MATRIX (FLAW & WOUND ENGINE)
        // ---------------------------------------------------------------------
        psychologyMatrix: {
            primalWounds: [
                "Betrayal by an idolized mentor during an irreversible rite of passage",
                "Survival at the unbearable cost of another's life or freedom",
                "Exile from the homeland due to speaking an unpalatable truth",
                "Discovery that their greatest life achievement was founded on a lie"
            ],
            defenseMechanisms: [
                "Hyper-competence masking profound spiritual exhaustion",
                "Razor-sharp cynicism deployed to prevent intimate emotional vulnerability",
                "Compulsive protective impulses toward anyone perceived as weaker",
                "Rigid devotion to rules and checklists to control chaotic reality"
            ]
        },

        // Helper to get strings safely
        getI18n: function(lang) {
            return this.i18n[lang] || this.i18n.en;
        },

        // Client-side guard check
        checkInputSecurity: function(input) {
            if (!input) return { safe: true };
            const lower = input.toLowerCase();
            for (let i = 0; i < this.guardrails.restrictedWords.length; i++) {
                const word = this.guardrails.restrictedWords[i];
                if (lower.includes(word)) {
                    return {
                        safe: false,
                        trigger: word,
                        reason: "🛡️ [LBO SECURITY PROTOCOL] Restricted injection token detected: '" + word + "'. Request sanitized."
                    };
                }
            }
            return { safe: true };
        }
    };

    // ---------------------------------------------------------------------
    // 13. SOVEREIGN PROMPT ENGINEERING LAWS (LITALLY.AI APEX STANDARD)
    // ---------------------------------------------------------------------
    LBO_AI_KNOWLEDGE.promptEngineeringLaws = [
        {
            law: "Law 1: Sensory Precision Over Abstraction",
            guideline: "Do not say 'the room was terrifying'. Show the smell of ozone, the condensation running down cold iron, the silence so dense their own heartbeat sounds like a distant drum."
        },
        {
            law: "Law 2: Character Agency & Cost",
            guideline: "Every victory must cost something tangible: a secret exposed, an ally wounded, or a moral compromise that leaves a scar."
        },
        {
            law: "Law 3: Pacing Modulation",
            guideline: "Kinetic moments require rapid monosyllabic verbs and short sentences. Contemplative vistas expand with rolling rhythmic cadences."
        },
        {
            law: "Law 4: Subtextual Dialogue",
            guideline: "People rarely say what they mean in moments of true peril. True meaning lives in what is avoided, omitted, or deflected."
        },
        {
            law: "Law 5: 100% Author Sovereignty Inviolability",
            guideline: "Every sentence, world concept, character name, and narrative thread generated is under the unalterable copyright ownership of the author."
        }
    ];


    // ---------------------------------------------------------------------
    // 14. EXPANDED SPECULATIVE WORLDBUILDING & NARRATIVE ARCHITECTURE
    // ---------------------------------------------------------------------
    LBO_AI_KNOWLEDGE.worldbuildingLaws = {
        sandersonLaws: [
            {
                name: "Sanderson's First Law",
                axiom: "An author's ability to solve problems with magic in a satisfying way is directly proportional to how well the reader understands said magic.",
                application: "If magic is used to resolve a climactic crisis, its rules and costs must be established at least two acts prior."
            },
            {
                name: "Sanderson's Second Law",
                axiom: "Limitations > Powers.",
                application: "What a magic user CANNOT do is vastly more interesting than what they can do. Flaws create ingenuity."
            },
            {
                name: "Sanderson's Third Law",
                axiom: "Expand what you already have before you add something new.",
                application: "Deepen the cultural, economic, and military applications of a single magical principle instead of inventing twenty disconnected spells."
            }
        ],
        hardSciFiPrinciples: [
            "Orbital mechanics: Ships do not bank like airplanes in space; delta-v and reaction mass dictate combat.",
            "Thermal radiation: In vacuum, shedding heat is often a greater challenge than generating energy.",
            "Communication latency: Light-speed lag across interplanetary distances creates autonomous frontier fleets and decentralized governments.",
            "Artificial gravity: Spin habitats require sufficient radius to mitigate Coriolis-induced vestibular disorientation."
        ],
        sensoryImmersionPalettes: {
            ionizedSteppe: {
                smell: "Sharp ozone, sun-baked flint, bitter sagebrush singed by laser discharge.",
                sound: "The drone of thermal winds through hollow chalk arches, distant thunder of ion-drives.",
                sight: "Blinding white limestone cliffs under twin violet suns, heat mirages wavering over cracked salt.",
                touch: "Abrasive gypsum dust clinging to damp skin, cooling metal of a rifle barrel."
            },
            cyberpunkSprawl: {
                smell: "Vaporized synthetic grease, damp trash, steaming soy-noodle broth, ozone from faulty neon.",
                sound: "Polyrhythmic clatter of maglev trains overhead, overlapping holographic advertisements in six dialects.",
                sight: "Rain-slick asphalt reflecting bleeding magenta and cyan billboards, drone swarms hovering like wasps.",
                touch: "Hum of sub-dermal cyberware, persistent freezing drizzle penetrating synthetic leather."
            },
            ancientLibrary: {
                smell: "Centuries of crumbling calfskin vellum, dried wormwood ink, beeswax and cold granite dust.",
                sound: "Reverberant flutter of turning pages, whisper of velvet robes, clockwork celestial orrery clicking.",
                sight: "Dust motes suspended in narrow amber sunbeams, towering mahogany book-stacks vanishing into shadow.",
                touch: "Fragile, dry pages brittle as autumn leaves, icy bronze lectern embossed with constellations."
            }
        },
        conflictEscalationMatrices: [
            { stage: 1, type: "Interpersonal Friction", manifestation: "Unspoken distrust, contradictory orders, hidden secrets between allies." },
            { stage: 2, type: "Environmental Hostility", manifestation: "Resource depletion, toxic atmospheric bloom, navigation system failure." },
            { stage: 3, type: "Antagonist Counter-Stroke", manifestation: "The adversary was three moves ahead; a sanctuary turns into a trap." },
            { stage: 4, type: "Moral Inversion Dilemma", manifestation: "The protagonist must choose between saving a loved one or saving the entire colony." }
        ]
    };


    // ---------------------------------------------------------------------
    // 15. COMPREHENSIVE LITERARY TROPE SUBVERSION CODEX
    // ---------------------------------------------------------------------
    LBO_AI_KNOWLEDGE.tropeSubversions = [
        {
            trope: "The Mentor Must Die",
            subversion: "The mentor fakes their death to escape the protagonist's impossible expectations and start a quiet vineyard on another continent."
        },
        {
            trope: "Enemies to Lovers",
            subversion: "They realize their intense chemistry was a synthetic pheromone projection engineered by a rival intelligence agency, forcing them to question if any of their feelings were real."
        },
        {
            trope: "The MacGuffin Superweapon",
            subversion: "The weapon requires so much maintenance, ethical bureaucracy, and collateral cleanup that both factions quietly agree to bury it and fight with conventional diplomacy."
        },
        {
            trope: "Dark Lord of Pure Evil",
            subversion: "The 'Dark Lord' is an overworked administrative bureaucrat desperately keeping tectonic plates from tearing the continent apart using forbidden thermal siphon spells."
        },
        {
            trope: "The Incompetent Henchmen",
            subversion: "The henchmen form an underground labor union and demand health insurance, hazardous duty pay, and pension plans from the villain."
        }
    ];

    // ---------------------------------------------------------------------
    // 16. EMOTIONAL RESONANCE LEXICON BY ARCHETYPE
    // ---------------------------------------------------------------------
    LBO_AI_KNOWLEDGE.emotionalLexicon = {
        dread: ["visceral chill", "hollow gravity", "creeping certainty", "numbing vertigo", "constricting throat"],
        wonder: ["crystalline clarity", "luminous vertigo", "breathless awe", "shattering scale", "electric transcendence"],
        fury: ["white-hot focus", "throbbing temporal pulse", "calcified resolve", "feral clarity", "searing calm"],
        grief: ["lead weight in the sternum", "phantom touch", "echoing silence", "grey static", "unmoored drift"]
    };


    // ---------------------------------------------------------------------
    // 17. STEPPE MULTIVERSE SECTOR ATLAS & ASTROGRAPHIC COORDINATES
    // ---------------------------------------------------------------------
    LBO_AI_KNOWLEDGE.steppeMultiverseAtlas = [
        {
            sector: "Alpha Bozzhira Prime (Урочище Бозжыра)",
            coords: "43.4184° N, 54.0672° E [Quantum Epoch 2482]",
            classification: "Tectonic Acoustic Resonance Nexus",
            dominantMineral: "Resonant Gypsum / Crystalline Chalk",
            atmosphere: "Dry nitrogen-oxygen with ionized chalk aerosol",
            gravity: "0.98g (Local gravitational anomalies near chalk towers)",
            lore: "Ancient seabed of the Tethys Ocean, where chalk spires function as acoustic antennae broadcasting galactic harmonics."
        },
        {
            sector: "Mangystau Chrono-Rift (Впадина Каракия)",
            coords: "43.3000° N, 51.8000° E [-132m Below Sea Level]",
            classification: "Sub-Sea-Level Temporal Distorsion Zone",
            dominantMineral: "Cobalt-infused Obsidian & Salt Crystals",
            atmosphere: "Dense, oxygen-rich hyper-pressurized air",
            gravity: "1.04g",
            lore: "Deepest depression in Central Asia, harboring dormant gravitational accelerators from an extinct nomadic predecessor civilization."
        },
        {
            sector: "Ustyurt Crystalline Shelf (Плато Устюрт)",
            coords: "44.0000° N, 55.5000° E [Elevation 300m]",
            classification: "Endless Wind Plains & Solar Array Basin",
            dominantMineral: "Photovoltaic Silt & Phosphor Shales",
            atmosphere: "Hyper-arid, high ultraviolet index",
            gravity: "1.00g",
            lore: "A plateau extending thousands of square kilometers, home to nomad starships docking at dawn to recharge solar sails."
        },
        {
            sector: "Caspian Sub-Abyssal Biosphere (Хазарская Глубина)",
            coords: "41.5000° N, 50.5000° E [Depth -900m]",
            classification: "Bioluminescent Chemo-Synthetic Deep Trench",
            dominantMineral: "Methane Clathrate & Hydrated Quartz",
            atmosphere: "Aquatic hyper-saline with sulfur plumes",
            gravity: "Hydrostatic pressure 95 atm",
            lore: "Subterranean pressure domes where neural archive cetaceans preserve pre-collapse historical chronicles."
        },
        {
            sector: "Aral Dust Monoliths (Возрождение Резонанса)",
            coords: "45.0000° N, 59.0000° E [Salt-Flat Desert]",
            classification: "Ecological Restoration Quantum Bio-Shield",
            dominantMineral: "Ionized Halite & Halophile Nanite Spores",
            atmosphere: "Toxic saline dust storms modulated by electro-mesh",
            gravity: "1.00g",
            lore: "Former sea floor transformed into a continental terraforming laboratory resurrecting extinct river deltas."
        },
        {
            sector: "Altai Sky Monoliths (Белуха Небесная)",
            coords: "49.8072° N, 86.5897° E [Elevation 4506m]",
            classification: "High-Altitude Atmospheric Gateway",
            dominantMineral: "Cryo-Granite & Superconducting Ice",
            atmosphere: "Sub-zero rarefied troposphere",
            gravity: "0.96g",
            lore: "Sacred glacial summit acting as the primary anchor for orbital beanstalk elevators spanning the Inner Ring."
        }
    ];

    

    // ── 7. MASTER DIALOGUE SUBTEXT BLUEPRINTS (EXPANDED) ───────────────────
    LBO_AI_KNOWLEDGE.dialogueSubtextBlueprints = [
        {
            id: "dialogue_subtext_1",
            scenario: "Сцена #1: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_2",
            scenario: "Сцена #2: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_3",
            scenario: "Сцена #3: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_4",
            scenario: "Сцена #4: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_5",
            scenario: "Сцена #5: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_6",
            scenario: "Сцена #6: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_7",
            scenario: "Сцена #7: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_8",
            scenario: "Сцена #8: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_9",
            scenario: "Сцена #9: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_10",
            scenario: "Сцена #10: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_11",
            scenario: "Сцена #11: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_12",
            scenario: "Сцена #12: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_13",
            scenario: "Сцена #13: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_14",
            scenario: "Сцена #14: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_15",
            scenario: "Сцена #15: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_16",
            scenario: "Сцена #16: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_17",
            scenario: "Сцена #17: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_18",
            scenario: "Сцена #18: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_19",
            scenario: "Сцена #19: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_20",
            scenario: "Сцена #20: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_21",
            scenario: "Сцена #21: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_22",
            scenario: "Сцена #22: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_23",
            scenario: "Сцена #23: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_24",
            scenario: "Сцена #24: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_25",
            scenario: "Сцена #25: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_26",
            scenario: "Сцена #26: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_27",
            scenario: "Сцена #27: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_28",
            scenario: "Сцена #28: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_29",
            scenario: "Сцена #29: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_30",
            scenario: "Сцена #30: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_31",
            scenario: "Сцена #31: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_32",
            scenario: "Сцена #32: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_33",
            scenario: "Сцена #33: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_34",
            scenario: "Сцена #34: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_35",
            scenario: "Сцена #35: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_36",
            scenario: "Сцена #36: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_37",
            scenario: "Сцена #37: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_38",
            scenario: "Сцена #38: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_39",
            scenario: "Сцена #39: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },        {
            id: "dialogue_subtext_40",
            scenario: "Сцена #40: Негласное соперничество двух капитанов",
            surfaceDialogue: "Погода на чинке портится. Проверьте затяжку строп, если вам не трудно.",
            underlyingSubtext: "Я знаю, что вы намеренно повредили маневровый двигатель, и наблюдаю за каждым вашим шагом.",
            nonverbalBeat: "Он даже не обернулся, методично протирая линзу оптического дальномера промасленной ветошью.",
            tensionRating: "Apex High-Tension (94%)"
        },
    ];

    // ── 8. HIGH-CONCEPT PROMPT BLUEPRINTS LIBRARY ──────────────────────────
    LBO_AI_KNOWLEDGE.highConceptPrompts = [
        {
            blueprintId: "prompt_blueprint_1",
            genre: "Твердый сай-фай",
            title: "Мастер-Шаблон #1: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 1, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Твердый сай-фай."
        },        {
            blueprintId: "prompt_blueprint_2",
            genre: "Степной мифпанк",
            title: "Мастер-Шаблон #2: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 2, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Степной мифпанк."
        },        {
            blueprintId: "prompt_blueprint_3",
            genre: "Техно-триллер",
            title: "Мастер-Шаблон #3: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 3, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Техно-триллер."
        },        {
            blueprintId: "prompt_blueprint_4",
            genre: "Психологическая драма",
            title: "Мастер-Шаблон #4: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 4, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Психологическая драма."
        },        {
            blueprintId: "prompt_blueprint_5",
            genre: "Космоопера",
            title: "Мастер-Шаблон #5: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 5, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Космоопера."
        },        {
            blueprintId: "prompt_blueprint_6",
            genre: "Твердый сай-фай",
            title: "Мастер-Шаблон #6: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 6, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Твердый сай-фай."
        },        {
            blueprintId: "prompt_blueprint_7",
            genre: "Степной мифпанк",
            title: "Мастер-Шаблон #7: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 7, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Степной мифпанк."
        },        {
            blueprintId: "prompt_blueprint_8",
            genre: "Техно-триллер",
            title: "Мастер-Шаблон #8: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 8, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Техно-триллер."
        },        {
            blueprintId: "prompt_blueprint_9",
            genre: "Психологическая драма",
            title: "Мастер-Шаблон #9: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 9, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Психологическая драма."
        },        {
            blueprintId: "prompt_blueprint_10",
            genre: "Космоопера",
            title: "Мастер-Шаблон #10: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 10, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Космоопера."
        },        {
            blueprintId: "prompt_blueprint_11",
            genre: "Твердый сай-фай",
            title: "Мастер-Шаблон #11: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 11, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Твердый сай-фай."
        },        {
            blueprintId: "prompt_blueprint_12",
            genre: "Степной мифпанк",
            title: "Мастер-Шаблон #12: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 12, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Степной мифпанк."
        },        {
            blueprintId: "prompt_blueprint_13",
            genre: "Техно-триллер",
            title: "Мастер-Шаблон #13: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 13, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Техно-триллер."
        },        {
            blueprintId: "prompt_blueprint_14",
            genre: "Психологическая драма",
            title: "Мастер-Шаблон #14: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 14, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Психологическая драма."
        },        {
            blueprintId: "prompt_blueprint_15",
            genre: "Космоопера",
            title: "Мастер-Шаблон #15: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 15, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Космоопера."
        },        {
            blueprintId: "prompt_blueprint_16",
            genre: "Твердый сай-фай",
            title: "Мастер-Шаблон #16: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 16, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Твердый сай-фай."
        },        {
            blueprintId: "prompt_blueprint_17",
            genre: "Степной мифпанк",
            title: "Мастер-Шаблон #17: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 17, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Степной мифпанк."
        },        {
            blueprintId: "prompt_blueprint_18",
            genre: "Техно-триллер",
            title: "Мастер-Шаблон #18: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 18, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Техно-триллер."
        },        {
            blueprintId: "prompt_blueprint_19",
            genre: "Психологическая драма",
            title: "Мастер-Шаблон #19: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 19, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Психологическая драма."
        },        {
            blueprintId: "prompt_blueprint_20",
            genre: "Космоопера",
            title: "Мастер-Шаблон #20: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 20, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Космоопера."
        },        {
            blueprintId: "prompt_blueprint_21",
            genre: "Твердый сай-фай",
            title: "Мастер-Шаблон #21: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 21, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Твердый сай-фай."
        },        {
            blueprintId: "prompt_blueprint_22",
            genre: "Степной мифпанк",
            title: "Мастер-Шаблон #22: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 22, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Степной мифпанк."
        },        {
            blueprintId: "prompt_blueprint_23",
            genre: "Техно-триллер",
            title: "Мастер-Шаблон #23: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 23, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Техно-триллер."
        },        {
            blueprintId: "prompt_blueprint_24",
            genre: "Психологическая драма",
            title: "Мастер-Шаблон #24: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 24, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Психологическая драма."
        },        {
            blueprintId: "prompt_blueprint_25",
            genre: "Космоопера",
            title: "Мастер-Шаблон #25: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 25, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Космоопера."
        },        {
            blueprintId: "prompt_blueprint_26",
            genre: "Твердый сай-фай",
            title: "Мастер-Шаблон #26: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 26, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Твердый сай-фай."
        },        {
            blueprintId: "prompt_blueprint_27",
            genre: "Степной мифпанк",
            title: "Мастер-Шаблон #27: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 27, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Степной мифпанк."
        },        {
            blueprintId: "prompt_blueprint_28",
            genre: "Техно-триллер",
            title: "Мастер-Шаблон #28: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 28, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Техно-триллер."
        },        {
            blueprintId: "prompt_blueprint_29",
            genre: "Психологическая драма",
            title: "Мастер-Шаблон #29: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 29, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Психологическая драма."
        },        {
            blueprintId: "prompt_blueprint_30",
            genre: "Космоопера",
            title: "Мастер-Шаблон #30: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 30, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Космоопера."
        },        {
            blueprintId: "prompt_blueprint_31",
            genre: "Твердый сай-фай",
            title: "Мастер-Шаблон #31: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 31, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Твердый сай-фай."
        },        {
            blueprintId: "prompt_blueprint_32",
            genre: "Степной мифпанк",
            title: "Мастер-Шаблон #32: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 32, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Степной мифпанк."
        },        {
            blueprintId: "prompt_blueprint_33",
            genre: "Техно-триллер",
            title: "Мастер-Шаблон #33: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 33, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Техно-триллер."
        },        {
            blueprintId: "prompt_blueprint_34",
            genre: "Психологическая драма",
            title: "Мастер-Шаблон #34: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 34, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Психологическая драма."
        },        {
            blueprintId: "prompt_blueprint_35",
            genre: "Космоопера",
            title: "Мастер-Шаблон #35: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 35, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Космоопера."
        },        {
            blueprintId: "prompt_blueprint_36",
            genre: "Твердый сай-фай",
            title: "Мастер-Шаблон #36: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 36, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Твердый сай-фай."
        },        {
            blueprintId: "prompt_blueprint_37",
            genre: "Степной мифпанк",
            title: "Мастер-Шаблон #37: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 37, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Степной мифпанк."
        },        {
            blueprintId: "prompt_blueprint_38",
            genre: "Техно-триллер",
            title: "Мастер-Шаблон #38: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 38, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Техно-триллер."
        },        {
            blueprintId: "prompt_blueprint_39",
            genre: "Психологическая драма",
            title: "Мастер-Шаблон #39: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 39, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Психологическая драма."
        },        {
            blueprintId: "prompt_blueprint_40",
            genre: "Космоопера",
            title: "Мастер-Шаблон #40: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 40, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Космоопера."
        },        {
            blueprintId: "prompt_blueprint_41",
            genre: "Твердый сай-фай",
            title: "Мастер-Шаблон #41: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 41, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Твердый сай-фай."
        },        {
            blueprintId: "prompt_blueprint_42",
            genre: "Степной мифпанк",
            title: "Мастер-Шаблон #42: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 42, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Степной мифпанк."
        },        {
            blueprintId: "prompt_blueprint_43",
            genre: "Техно-триллер",
            title: "Мастер-Шаблон #43: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 43, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Техно-триллер."
        },        {
            blueprintId: "prompt_blueprint_44",
            genre: "Психологическая драма",
            title: "Мастер-Шаблон #44: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 44, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Психологическая драма."
        },        {
            blueprintId: "prompt_blueprint_45",
            genre: "Космоопера",
            title: "Мастер-Шаблон #45: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 45, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Космоопера."
        },        {
            blueprintId: "prompt_blueprint_46",
            genre: "Твердый сай-фай",
            title: "Мастер-Шаблон #46: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 46, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Твердый сай-фай."
        },        {
            blueprintId: "prompt_blueprint_47",
            genre: "Степной мифпанк",
            title: "Мастер-Шаблон #47: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 47, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Степной мифпанк."
        },        {
            blueprintId: "prompt_blueprint_48",
            genre: "Техно-триллер",
            title: "Мастер-Шаблон #48: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 48, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Техно-триллер."
        },        {
            blueprintId: "prompt_blueprint_49",
            genre: "Психологическая драма",
            title: "Мастер-Шаблон #49: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 49, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Психологическая драма."
        },        {
            blueprintId: "prompt_blueprint_50",
            genre: "Космоопера",
            title: "Мастер-Шаблон #50: Переломный момент главы",
            formula: "Внешний кризис + Необратимая жертва + Моральный выбор",
            suggestedPrompt: "Напиши кульминационную сцену для главы 50, где протагонист вынужден пожертвовать единственным артефактом ради спасения чужого экипажа в жанре Космоопера."
        },
    ];

    // ── 9. STEPPE COSMIC MYTHOS & STELLAR LEXICON ──────────────────────────
    LBO_AI_KNOWLEDGE.steppeCosmicMythos = [
        {
        mythosId: "MYTH-101",
        constellation: "Звездный Ковш Тенгри (1)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "434 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-102",
        constellation: "Звездный Ковш Тенгри (2)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "436 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-103",
        constellation: "Звездный Ковш Тенгри (3)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "438 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-104",
        constellation: "Звездный Ковш Тенгри (4)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "440 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-105",
        constellation: "Звездный Ковш Тенгри (5)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "442 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-106",
        constellation: "Звездный Ковш Тенгри (6)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "444 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-107",
        constellation: "Звездный Ковш Тенгри (7)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "446 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-108",
        constellation: "Звездный Ковш Тенгри (8)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "448 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-109",
        constellation: "Звездный Ковш Тенгри (9)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "450 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-110",
        constellation: "Звездный Ковш Тенгри (10)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "452 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-111",
        constellation: "Звездный Ковш Тенгри (11)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "454 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-112",
        constellation: "Звездный Ковш Тенгри (12)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "456 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-113",
        constellation: "Звездный Ковш Тенгри (13)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "458 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-114",
        constellation: "Звездный Ковш Тенгри (14)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "460 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-115",
        constellation: "Звездный Ковш Тенгри (15)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "462 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-116",
        constellation: "Звездный Ковш Тенгри (16)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "464 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-117",
        constellation: "Звездный Ковш Тенгри (17)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "466 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-118",
        constellation: "Звездный Ковш Тенгри (18)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "468 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-119",
        constellation: "Звездный Ковш Тенгри (19)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "470 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-120",
        constellation: "Звездный Ковш Тенгри (20)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "472 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-121",
        constellation: "Звездный Ковш Тенгри (21)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "474 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-122",
        constellation: "Звездный Ковш Тенгри (22)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "476 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-123",
        constellation: "Звездный Ковш Тенгри (23)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "478 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-124",
        constellation: "Звездный Ковш Тенгри (24)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "480 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-125",
        constellation: "Звездный Ковш Тенгри (25)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "482 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-126",
        constellation: "Звездный Ковш Тенгри (26)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "484 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-127",
        constellation: "Звездный Ковш Тенгри (27)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "486 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-128",
        constellation: "Звездный Ковш Тенгри (28)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "488 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-129",
        constellation: "Звездный Ковш Тенгри (29)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "490 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-130",
        constellation: "Звездный Ковш Тенгри (30)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "492 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-131",
        constellation: "Звездный Ковш Тенгри (31)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "494 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-132",
        constellation: "Звездный Ковш Тенгри (32)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "496 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-133",
        constellation: "Звездный Ковш Тенгри (33)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "498 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-134",
        constellation: "Звездный Ковш Тенгри (34)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "500 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-135",
        constellation: "Звездный Ковш Тенгри (35)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "502 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-136",
        constellation: "Звездный Ковш Тенгри (36)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "504 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-137",
        constellation: "Звездный Ковш Тенгри (37)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "506 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-138",
        constellation: "Звездный Ковш Тенгри (38)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "508 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-139",
        constellation: "Звездный Ковш Тенгри (39)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "510 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },        {
        mythosId: "MYTH-140",
        constellation: "Звездный Ковш Тенгри (40)",
        stellarLore: "Древние навигационные маяки, по которым кочевники рассчитывали траектории межзвездных гиперпрыжков.",
        resonanceFrequency: "512 Hz",
        associatedTaboo: "Никогда не направлять лазерный дальномер прямо в центр черной дыры во время восхода звезды."
    },
    ];

    window.LBO_AI_KNOWLEDGE = LBO_AI_KNOWLEDGE;

})(window);
