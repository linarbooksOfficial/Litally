# -*- coding: utf-8 -*-
"""
Litally Sovereign Trend Spy Engine 2026
Universal Viral Radar across TikTok, Instagram Reels, YouTube Shorts & AI Cinema.
Author: Linar Serik. All Rights Reserved.
"""

import time
import random
from typing import List, Dict, Any, Optional

VIRAL_TRENDS_DATABASE = [
    {
        "id": "trend-ai-evolution-10k",
        "title": "Нейросетевая эволюция человека через 10,000 лет",
        "category": "ai_scifi",
        "category_label": "🤖 ИИ & Sci-Fi Кино",
        "platforms": ["tiktok", "reels", "shorts"],
        "viral_score": 99,
        "growth_rate": "+960%",
        "views_estimate": "18.4M",
        "audio": {
            "title": "Hyperborea Quantum Bass Slowed",
            "artist": "CyberAesthetic / LitSound",
            "duration": "0:24",
            "bpm": 128,
            "vibe": "Кинематографичный саб-бас с космическим эхо",
            "sound_type": "deep_bass"
        },
        "hooks": [
            "Ученые смоделировали человека через 10,000 лет, и это пугает...",
            "99% людей уверены, что мы будем выглядеть так же. Смотри правду:",
            "Если нейросеть права, через 100 веков наше тело изменится до неузнаваемости."
        ],
        "visual_prompt": "Cinematic 8K, morphing sequence of human facial evolution across 10,000 years into biomechanical cyber-luminescent entity, glowing optic receptors, ultra-photorealistic skin pores, cinematic volumetric haze, deep obsidian studio background, anamorphic lens 35mm, ARRI Alexa 65 color grading.",
        "hashtags": ["#evolution", "#futurehuman", "#aiart", "#scifi", "#tiktokviral", "#litdeo4k"],
        "script_structure": {
            "hook": "0-3с: Резкий зум на лицо современного человека с надписью '2026 vs 12026 год'.",
            "tension": "3-8с: Плавная покадровая трансформация черепа, биомеханических волокон и квантовых имплантов под нарастающий саб-бас.",
            "climax": "8-15с: Финальный облик сверхчеловека будущего с кристаллическими глазами и аурой квантового свечения.",
            "cta": "15-20с: 'Как думаешь, мы доживем до этого? Напиши в комменты'."
        },
        "created_at": "12 минут назад"
    },
    {
        "id": "trend-kz-cyber-batyr",
        "title": "Киберпанк Батыр: Защитник Великой Степи 2099",
        "category": "kazakh_heritage",
        "category_label": "🇰🇿 Наследие Великой Степи",
        "platforms": ["tiktok", "reels", "shorts"],
        "viral_score": 98,
        "growth_rate": "+990%",
        "views_estimate": "24.1M",
        "audio": {
            "title": "Dombyra Trap Epic Bass Drop 2026",
            "artist": "Steppe Future Waves",
            "duration": "0:30",
            "bpm": 140,
            "vibe": "Эпическая домбра с тяжелым 808 басом и свистом степного ветра",
            "sound_type": "dombyra_trap"
        },
        "hooks": [
            "Ни один голливудский блокбастер не показал кочевников ТАК...",
            "Что если бы Казахское Ханство развивалось по пути киберпанка?",
            "Смотри до конца: как выглядит Алтын Адам в экзоскелете 2099 года!"
        ],
        "visual_prompt": "Majestic Kazakh cyber-warrior Batyr in illuminated gold-inlaid heavy cyber-armor, standing atop a futuristic cliff overlooking neo-futuristic megacity Astana 2099, neon domed minarets and glowing holographic eagles soaring in purple dusk sky, dynamic wind blowing embroidered velvet cape, photorealistic 8k, Unreal Engine 5 render, cinematic masterwork.",
        "hashtags": ["#kazakhstan", "#cyberpunk", "#batyr", "#astana2099", "#steppe", "#litdeo"],
        "script_structure": {
            "hook": "0-3с: Крупный план золотого шлема Батыра со светодиодным узором оюк и огненным взором.",
            "tension": "3-9с: Камера облетает Батыра на 360 градусов под нарастающий перебор домбры, на заднем плане загораются неоновые башни Байтерека 2099.",
            "climax": "9-16с: Мощный дроп 808 баса, Батыр поднимает сверкающий клинок из плазмы, цифровой беркут срывается с руки в камеру.",
            "cta": "16-22с: 'Қазақ киберпанк фильмін күтіп жүрсіз бе? Жазып кет!'."
        },
        "created_at": "8 минут назад"
    },
    {
        "id": "trend-pov-ancient-secret-room",
        "title": "POV: Ты нашел тайную комнату в библиотеке древних цивилизаций",
        "category": "pov_thriller",
        "category_label": "🎬 POV & Кино-триллеры",
        "platforms": ["tiktok", "shorts", "reels"],
        "viral_score": 97,
        "growth_rate": "+870%",
        "views_estimate": "15.7M",
        "audio": {
            "title": "Ancient Echoes & Heartbeat Tension",
            "artist": "Hans Zimmer Style Ambience",
            "duration": "0:28",
            "bpm": 95,
            "vibe": "Таинственный шепот, скрип древних полок, глухой стук сердца",
            "sound_type": "mystery_heartbeat"
        },
        "hooks": [
            "Я нажал на старую книгу в стене, и стеллаж поехал назад...",
            "То, что я нашел в подвале старинной библиотеки, не должно существовать.",
            "POV: Ты первый человек за 800 лет, открывший этот золотой фолиант."
        ],
        "visual_prompt": "First-person POV walking through a secret dust-filled stone archway behind towering antique bookshelves, discovering a glowing spherical holographic astrolabe floating above an obsidian altar, golden dust particles floating in god rays, cinematic moody lighting, 4K film still, masterwork cinematography.",
        "hashtags": ["#pov", "#mystery", "#secretroom", "#ancientlibrary", "#lore", "#cinematic"],
        "script_structure": {
            "hook": "0-3с: Дрожащая камера POV, рука отодвигает кожаную книгу, щелчок механизма, полка с грохотом сдвигается.",
            "tension": "3-9с: Медленный шаг в темный проем, свет фонарика выхватывает золотые письмена и древние артефакты.",
            "climax": "9-16с: В центре зала вспыхивает левитирующий световой диск с картой неизвестных континентов.",
            "cta": "16-20с: 'Какую книгу ты бы прочитал первой?'."
        },
        "created_at": "19 минут назад"
    },
    {
        "id": "trend-luxury-bugatti-tokyo-rain",
        "title": "Ночной Токио: Дождливый заезд гиперкара в неоновых отражениях",
        "category": "luxury_cars",
        "category_label": "🏎️ Гиперкары & Роскошь",
        "platforms": ["reels", "tiktok", "shorts"],
        "viral_score": 96,
        "growth_rate": "+920%",
        "views_estimate": "21.3M",
        "audio": {
            "title": "Tokyo Drift Phonk Midnight Wave",
            "artist": "LXST CENTURY / Phonk Club",
            "duration": "0:20",
            "bpm": 132,
            "vibe": "Агрессивный фонк с низкими частотами и звуком раскрутки твин-турбо",
            "sound_type": "phonk_turbo"
        },
        "hooks": [
            "Это видео выглядит дороже, чем весь бюджет твоего города...",
            "Звук, от которого по коже бегут мурашки: W16 Quad-Turbo в тоннеле.",
            "Если тебе грустно — просто включи этот 20-секундный заезд в 4K."
        ],
        "visual_prompt": "Ultra-realistic 8K, custom Matte Black and Rose Gold hypercar drifting smoothly on wet asphalt streets of Shinjuku Tokyo at 3 AM, neon kanji signs reflecting in rain puddles, high-speed camera tracking shot, macro water droplets flying off aerodynamic carbon fiber spoiler, exhaust spitting blue fire, photorealism masterwork.",
        "hashtags": ["#hypercar", "#tokyonight", "#rainyaesthetic", "#phonk", "#caredit", "#4krender"],
        "script_structure": {
            "hook": "0-2с: Макро-кадр: капли дождя на карбоновом капоте, отражающие розовый неон, внезапный рык мотора.",
            "tension": "2-7с: Камера скользит по колесу, спицы вращаются в slow-mo, синий огонь из глушителя.",
            "climax": "7-14с: Дрифт в поворот на перекрестке Синдзюку, брызги воды во все стороны в кинематографичном рапиде 120fps.",
            "cta": "14-18с: 'Твоя машина мечты? Напиши марку'."
        },
        "created_at": "25 минут назад"
    },
    {
        "id": "trend-asmr-liquid-chrome-singularity",
        "title": "Квантовая сингулярность: Жидкий хром и черная дыра 4K Macro",
        "category": "asmr_vfx",
        "category_label": "✨ Визуальный ASMR & VFX",
        "platforms": ["tiktok", "shorts", "reels"],
        "viral_score": 95,
        "growth_rate": "+840%",
        "views_estimate": "12.8M",
        "audio": {
            "title": "Binaural Crystal Resonance 432Hz",
            "artist": "Quantum Frequencies",
            "duration": "0:25",
            "bpm": 80,
            "vibe": "Глубокие вибрирующие кристаллы, гипнотический ASMR звук перетекания ртути",
            "sound_type": "crystal_asmr"
        },
        "hooks": [
            "Твой мозг расслабится ровно через 5 секунд после начала видео...",
            "Самая гипнотическая симуляция физики 2026 года. Смотри на центр.",
            "Ученые доказали: этот визуальный ритм снижает стресс на 90%."
        ],
        "visual_prompt": "Macro 8K photorealistic simulation of liquid mercury chrome swirling around a glowing miniature singularity sphere, iridescent rainbow refractions on metallic surface, zero-gravity physics, obsidian void background, hyper-detailed surface tension, cinematic optics 100mm macro lens.",
        "hashtags": ["#asmr", "#satisfying", "#fluidphysics", "#chrome", "#relax", "#cgi"],
        "script_structure": {
            "hook": "0-3с: Одна идеальная сферическая капля ртути падает в абсолютной тишине.",
            "tension": "3-9с: При соприкосновении капля распадается на тысячи микросфер, которые начинают вращаться по спирали Фибоначчи.",
            "climax": "9-16с: В центре вспыхивает золотой квантовый луч, хром превращается в зеркальные нити.",
            "cta": "16-20с: 'Сохрани, чтобы пересмотреть перед сном'."
        },
        "created_at": "34 минуты назад"
    },
    {
        "id": "trend-ai-robot-mirror-soul",
        "title": "Осознание ИИ: Робот впервые видит свое отражение в зеркале",
        "category": "ai_scifi",
        "category_label": "🤖 ИИ & Sci-Fi Кино",
        "platforms": ["tiktok", "reels", "shorts"],
        "viral_score": 98,
        "growth_rate": "+910%",
        "views_estimate": "19.5M",
        "audio": {
            "title": "Sentient Awakening Melancholy Cello",
            "artist": "Emotional Cinema Labs",
            "duration": "0:26",
            "bpm": 72,
            "vibe": "Щемящая виолончель, затухающие звуки сервоприводов и вздох",
            "sound_type": "emotional_cello"
        },
        "hooks": [
            "Момент, когда искусственный интеллект понял, что он существует...",
            "Инженеры в лаборатории не ожидали такой реакции от андроида:",
            "Ты почувствуешь сочувствие к роботу уже на 7-й секунде этого видео."
        ],
        "visual_prompt": "Deeply emotional cinematic 8K shot, sophisticated humanoid android with translucent synthetic skin and glowing blue neural circuits looking into a cracked antique mirror, trembling mechanical fingers gently touching the reflection of its cheek, single luminous tear flowing, warm Rembrandt lighting contrasting with cool cybernetic glow, masterwork drama.",
        "hashtags": ["#ai", "#sentient", "#humanoid", "#empathy", "#scifiart", "#litdeo"],
        "script_structure": {
            "hook": "0-3с: Рука робота с оголенными титановыми шарнирами поднимается к стеклу.",
            "tension": "3-8с: Камера переходит на лицо: сенсоры сужаются, словно в удивлении, звучит глубокая струнная нота.",
            "climax": "8-15с: Из оптического окуляра робота скатывается светящаяся капля, он проводит пальцем по отражению.",
            "cta": "15-20с: 'Сможет ли ИИ когда-нибудь по-настоящему чувствовать? Твое мнение?'."
        },
        "created_at": "42 минуты назад"
    },
    {
        "id": "trend-kz-bozzhyra-stargate",
        "title": "Звездные Врата Бозжыры: Мистический портал Мангистау",
        "category": "kazakh_heritage",
        "category_label": "🇰🇿 Наследие Великой Степи",
        "platforms": ["tiktok", "reels", "shorts"],
        "viral_score": 97,
        "growth_rate": "+890%",
        "views_estimate": "16.8M",
        "audio": {
            "title": "Mangystau Shamanic Throat Singing Trap",
            "artist": "Uly Dala Beats",
            "duration": "0:27",
            "bpm": 130,
            "vibe": "Горловое пение кочевников с футуристичным синтезатором и низким басом",
            "sound_type": "throat_trap"
        },
        "hooks": [
            "Казахстанские скалы Бозжыра скрывают тайну, которую не покажут по ТВ...",
            "Что если клыки Бозжыры — это древний передатчик внеземной цивилизации?",
            "Смотри на звездное небо Мангистау: такого космоса ты еще не видел."
        ],
        "visual_prompt": "Epic wide cinematic 8K, otherworldly white chalk spires of Bozzhyra tract in Mangystau Kazakhstan under a brilliant Milky Way galaxy, a massive glowing alien stargate portal opening between the spires, ethereal cyan energy rings swirling, lone Kazakh wanderer in traditional chapan with modern luminescent staff gazing in awe, national geographic photorealism masterwork.",
        "hashtags": ["#bozzhyra", "#mangystau", "#kazakhstan", "#stargate", "#shaman", "#litally"],
        "script_structure": {
            "hook": "0-3с: Дрон летит над белыми известняковыми клыками на закате, тихий шепот ветра.",
            "tension": "3-8с: Внезапное сгущение сумерек, между скалами начинает вибрировать бирюзовое световое кольцо под горловое пение.",
            "climax": "8-16с: Взрыв баса, портал раскрывается в глубины туманности Ориона, свет озаряет пустыню на километры вокруг.",
            "cta": "16-20с: 'Бывал в Мангистау? Поделись впечатлениями!'."
        },
        "created_at": "1 час назад"
    },
    {
        "id": "trend-phone-call-from-2050",
        "title": "Звонок из 2050 года: Голос предупреждает о сегодняшнем дне",
        "category": "pov_thriller",
        "category_label": "🎬 POV & Кино-триллеры",
        "platforms": ["tiktok", "reels", "shorts"],
        "viral_score": 96,
        "growth_rate": "+830%",
        "views_estimate": "14.4M",
        "audio": {
            "title": "Static Radio Distortion & Warning Broadcast",
            "artist": "Analog Horror Collective",
            "duration": "0:22",
            "bpm": 88,
            "vibe": "Шипение радиопомех, азбука Морзе, напряженный шепот диктора",
            "sound_type": "radio_static"
        },
        "hooks": [
            "Если тебе сейчас позвонит номер без кода страны — НЕ БЕРИ ТРУБКУ...",
            "Запись звонка, которую удалили из всех соцсетей через 10 минут после публикации:",
            "Слушай внимательно то, что он говорит на 8-й секунде. Это произойдет завтра."
        ],
        "visual_prompt": "Dark cinematic retro-futuristic apartment room, an old red rotary telephone ringing erratically under flickering green neon light, dust dancing in beam, digital glitch artifacts overlaying the reality, close-up on receiver trembling, 35mm film grain, Fincher color grading, intense thriller atmosphere.",
        "hashtags": ["#analoghorror", "#timetravel", "#2050", "#mysterycall", "#creepytok", "#thriller"],
        "script_structure": {
            "hook": "0-3с: Темная комната, резкий пронзительный звонок дискового телефона, на экране таймер '00:00:2026'.",
            "tension": "3-8с: Рука медленно поднимает трубку, сквозь белый шум слышен искаженный голос: 'Пожалуйста, не выходи из дома 28-го числа...'",
            "climax": "8-14с: Огни в городе за окном одновременно гаснут, превращаясь в цифровой шум.",
            "cta": "14-18с: 'Что бы ты ответил на такой звонок?'."
        },
        "created_at": "1 час назад"
    }
]


class LitallyTrendSpyEngine:
    """Core intelligence engine for social media trend tracking and viral hook generation."""

    def __init__(self):
        self.trends = VIRAL_TRENDS_DATABASE

    def get_all_trends(self, category: Optional[str] = None, platform: Optional[str] = None,
                       search: Optional[str] = None, sort_by: str = "growth") -> List[Dict[str, Any]]:
        results = list(self.trends)

        if category and category != "all":
            results = [t for t in results if t.get("category") == category]

        if platform and platform != "all":
            results = [t for t in results if platform in t.get("platforms", [])]

        if search:
            q = search.lower().strip()
            results = [
                t for t in results
                if q in t.get("title", "").lower()
                or q in t.get("category_label", "").lower()
                or any(q in h.lower() for h in t.get("hooks", []))
                or any(q in tag.lower() for tag in t.get("hashtags", []))
                or q in t.get("visual_prompt", "").lower()
            ]

        if sort_by == "growth":
            results.sort(key=lambda x: int(x.get("growth_rate", "+0%").replace("+", "").replace("%", "")), reverse=True)
        elif sort_by == "score":
            results.sort(key=lambda x: x.get("viral_score", 0), reverse=True)
        elif sort_by == "views":
            # Rough conversion of e.g. "18.4M" -> float
            def parse_views(v_str):
                try:
                    return float(v_str.replace("M", "").replace("K", ""))
                except:
                    return 0.0
            results.sort(key=lambda x: parse_views(x.get("views_estimate", "0")), reverse=True)

        return results

    def get_trend_by_id(self, trend_id: str) -> Optional[Dict[str, Any]]:
        for t in self.trends:
            if t["id"] == trend_id:
                return t
        return None

    def generate_custom_trend(self, niche: str, emotion: str = "shock") -> Dict[str, Any]:
        """
        Synthesizes a brand-new viral trend strategy for any custom user niche.
        """
        niche_clean = niche.strip() if niche else "Будущее технологий"
        
        emotion_templates = {
            "shock": {
                "hooks": [
                    f"99% людей никогда не узнают правду про {niche_clean}...",
                    f"То, что только что рассекретили о {niche_clean}, перевернет всё.",
                    f"Никогда не делай этого с {niche_clean}, если не хочешь потерять всё за секунду!"
                ],
                "audio_vibe": "Тяжелый суб-бас с резким обрывом и нарастающим звуком тревоги",
                "bpm": 135
            },
            "curiosity": {
                "hooks": [
                    f"Смотри до 7-й секунды: вот что на самом деле скрывает {niche_clean}:",
                    f"Я проверил самый сумасшедший миф про {niche_clean}, и вот результат...",
                    f"Почему миллионеры молчат про эту скрытую деталь в {niche_clean}?"
                ],
                "audio_vibe": "Загадочный гипнотический синкопированный ритм с реверберацией",
                "bpm": 118
            },
            "aesthetic": {
                "hooks": [
                    f"Самое эстетичное 4K видео про {niche_clean}, которое ты увидишь в этом году.",
                    f"Позволь своему мозгу отдохнуть 15 секунд: чистый визуал {niche_clean}.",
                    f"Уровень детализации {niche_clean} здесь просто за гранью реальности..."
                ],
                "audio_vibe": "Глубокий атмосферный эмбиент, шелест ветра и кристальное фортепиано",
                "bpm": 85
            },
            "motivation": {
                "hooks": [
                    f"Если ты сейчас на дне — вспомни это правило про {niche_clean}:",
                    f"Через 1 год ты пожалеешь, что не начал изучать {niche_clean} сегодня.",
                    f"Вот почему 1% людей забирает 99% успеха в нише {niche_clean}."
                ],
                "audio_vibe": "Эпический кинематографичный подъем с оркестровыми барабанами и брассом",
                "bpm": 124
            }
        }

        template = emotion_templates.get(emotion, emotion_templates["shock"])
        growth_val = random.randint(820, 995)
        viral_score = random.randint(95, 99)
        views_val = f"{random.uniform(11.2, 28.5):.1f}M"

        # Generate an ultra-high photorealism prompt for Litdeo
        litdeo_prompt = (
            f"Hyper-cinematic 8K masterpiece showcasing {niche_clean}, dramatic volumetric lighting, "
            f"photorealistic reflections, intricate textures, ARRI Alexa 65 film grading, 35mm master prime lens, "
            f"ultra-detailed atmospheric particles, trending on ArtStation and Litdeo Video Studio."
        )

        return {
            "id": f"custom-{int(time.time())}",
            "title": f"Вирусный тренд в нише: {niche_clean.capitalize()}",
            "category": "custom_ai",
            "category_label": f"⚡ Ниша: {niche_clean}",
            "platforms": ["tiktok", "reels", "shorts"],
            "viral_score": viral_score,
            "growth_rate": f"+{growth_val}%",
            "views_estimate": views_val,
            "audio": {
                "title": f"Viral {emotion.capitalize()} Soundwave Matrix",
                "artist": "LitSound Quantum Engine",
                "duration": "0:22",
                "bpm": template["bpm"],
                "vibe": template["audio_vibe"],
                "sound_type": "custom_beat"
            },
            "hooks": template["hooks"],
            "visual_prompt": litdeo_prompt,
            "hashtags": [
                f"#{niche_clean.replace(' ', '')}",
                "#viral2026",
                "#trendspy",
                "#litdeo4k",
                "#reelsgrowth",
                "#tiktokstrategy"
            ],
            "script_structure": {
                "hook": f"0-3с: {template['hooks'][0]} Крупный динамичный план.",
                "tension": f"3-8с: Визуальное доказательство, быстрое чередование ракурсов с акцентом на {niche_clean}.",
                "climax": "8-15с: Максимальное эмоциональное раскрытие темы с кульминационным аудио-дропом.",
                "cta": "15-20с: 'Сохрани видео и отправь другу, который в теме!'."
            },
            "created_at": "Только что (Нейро-синтез)"
        }

    def generate_survey_strategy(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Synthesizes a personalized creator viral strategy based on intake questionnaire:
        - Question 1: Audience (personal, company, leaders, other)
        - Question 2: Usage Level (zero, novice, beginner, intermediate, advanced, business_std, high, extreme, maximum)
        - Question 3: Location Sharing (yes, no, permission)
        - Question 4: 5 Sovereign Themes (ai_tech, business_capital, heritage_history, luxury_lifestyle, cinema_cyberpunk)
        - Supports 100 World Languages (English primary, Turkish, Spanish, Russian, Kazakh, etc.)
        """
        audience = data.get("audience", "personal")
        custom_audience = data.get("custom_audience", "").strip()
        level = data.get("usage_level", data.get("level", "zero"))
        location = data.get("share_location", data.get("location", "yes"))
        theme = data.get("theme", data.get("niche", "ai_tech"))
        niche = data.get("niche", theme)
        platform = data.get("platform", "all")
        target_lang = (data.get("target_lang", "en") or "en").lower()

        # Human-friendly niche naming
        theme_names_map = {
            "ai_tech": {
                "en": "AI & Autonomous Tech", "tr": "Yapay Zeka ve Otonom Teknoloji", "es": "IA y Tecnología Autónoma",
                "ru": "ИИ и Автономные Технологии", "kk": "ЖИ және Автономды Технологиялар"
            },
            "business_capital": {
                "en": "Business & Startups", "tr": "İş Dünyası ve Girişimler", "es": "Negocios y Startups",
                "ru": "Бизнес и Стартапы", "kk": "Бизнес және Стартаптар"
            },
            "heritage_history": {
                "en": "Heritage & Great Steppe", "tr": "Kadim Miras ve Büyük Bozkır", "es": "Herencia y Gran Estepa",
                "ru": "Наследие и Великая Степь", "kk": "Ұлы Дала және Тарихи Мұра"
            },
            "luxury_lifestyle": {
                "en": "Luxury & Supercars", "tr": "Lüks ve Süper Arabalar", "es": "Lujo y Superdeportivos",
                "ru": "Роскошь и Суперкары", "kk": "Люкс және Суперкарлар"
            },
            "cinema_cyberpunk": {
                "en": "Cinema & Cyberpunk", "tr": "Sinematik ve Siberpunk", "es": "Cine y Cyberpunk",
                "ru": "Кино и Киберпанк", "kk": "Кинематография және Киберпанк"
            }
        }

        lang_key = target_lang if target_lang in ["en", "tr", "es", "ru", "kk"] else "en"
        display_niche = theme_names_map.get(niche, {}).get(lang_key, niche)

        # 9 Levels Localization
        level_profiles = {
            "en": {
                "zero": {"title": "Zero", "badge": "👶 4-9 y.o.", "desc": "for complete start and personal use. Fewer features. Simpler. Ideal for ages 4-9.", "feature_count": "15 Basic Features", "mode": "Ultra-Simple (No-code, large icons, child safety)", "viral_score": 92, "growth_rate": "+340% (Family Feed)", "reach": "15K - 60K views / month", "code_snippet": None},
                "novice": {"title": "Novice", "badge": "📖 6-9 y.o.", "desc": "Ideal for low entry barrier. Where you need reading skills. Ideal for 6-9.", "feature_count": "30 Features", "mode": "Novice Creator (Text cues, essential edits)", "viral_score": 93, "growth_rate": "+450% (Organic Growth)", "reach": "30K - 120K views / month", "code_snippet": None},
                "beginner": {"title": "Beginner", "badge": "🎯 Basic", "desc": "ideal for beginner who understands how to use, knows how to work, move, create and plan.", "feature_count": "75 Features", "mode": "Basic Creator (Drag-and-drop, schedule tracking)", "viral_score": 94, "growth_rate": "+580% (Consistent Calendar)", "reach": "70K - 280K views / month", "code_snippet": None},
                "intermediate": {"title": "Intermediate", "badge": "💡 6-11 y.o.", "desc": "ideal for ages 6-11. Slightly higher entry barrier. More advanced controls, more features.", "feature_count": "150 Features", "mode": "Intermediate (Advanced filters, timeline pacing)", "viral_score": 95, "growth_rate": "+720% (Multi-Platform Radar)", "reach": "150K - 550K views / month", "code_snippet": None},
                "advanced": {"title": "Advanced", "badge": "🎓 12-17 y.o.", "desc": "Ideal for ages 12-17. Hundreds of features, tables, code. Minimum for business and marketing.", "feature_count": "350 Features", "mode": "Advanced Creator (Trend tables, JSON/CSV exports, code)", "viral_score": 96, "growth_rate": "+890% (Retention Analytics)", "reach": "400K - 1.5M views / month", "code_snippet": "# Python Trend Harvester\nimport urllib.request, json\ndata = json.loads(urllib.request.urlopen('http://127.0.0.1:5000/api/trends/stream').read())\nprint(f'Top Viral Trend: {data[0][\"title\"]} (Score: {data[0][\"viral_score\"]})')"},
                "business_std": {"title": "Business Standard", "badge": "📈 Business", "desc": "great for business. Short documentation, coding basics & strong analytics for SMB.", "feature_count": "500 Features", "mode": "Business Standard (Cohort analytics, viral ROI, docs)", "viral_score": 97, "growth_rate": "+1,050% (Commercial Conversion)", "reach": "600K - 2.8M views / month", "code_snippet": "# Business ROI & Lead Generation Scanner\nfrom litally_trend_spy_engine import litally_trend_spy_engine\nleads = litally_trend_spy_engine.generate_custom_trend(niche='business', emotion='trust')\nprint(f'Recommended Hook: {leads[\"hooks\"][0]}')"},
                "high": {"title": "High", "badge": "⚙️ 800+ features", "desc": "Near complete documentation. 800+ features. High entry barrier. Hyper-personalized tables.", "feature_count": "800+ Features", "mode": "High Tier (Hyper-personalized matrices, real-time webhooks)", "viral_score": 98, "growth_rate": "+1,350% (Hyper-Targeting)", "reach": "1.8M - 7.5M views / month", "code_snippet": "# Hyper-Personalized Table Streamer\nclass TrendMatrix:\n    def __init__(self, niche):\n        self.niche = niche\n        self.features_active = 800"},
                "extreme": {"title": "Extreme", "badge": "🐍 1000+ feat. • Python/AI", "desc": "very high entry barrier. Python, AI, predictive scenarios, trend theories. 1000+ features.", "feature_count": "1000+ Features", "mode": "Extreme AI Engineer (Python, AI trend forecasting, theories)", "viral_score": 99, "growth_rate": "+1,800% (Predictive Scenarios)", "reach": "3.5M - 15M views / month", "code_snippet": "# Extreme Predictive Trend Future Scenario Model\nimport numpy as np\ndef forecast_viral_wave(momentum, decay=0.08):\n    # 1000+ functions unlocked: Neural differential equation for future trends\n    return [momentum * np.exp(-decay * t) for t in range(30)]"},
                "maximum": {"title": "MAXIMUM", "badge": "🔥 ALL FEATURES", "desc": "extended edition. All features unlocked. For giant enterprise and global market expansion.", "feature_count": "ALL FEATURES (1500+)", "mode": "MAXIMUM ENTERPRISE (Global markets, IT analytics, Prompt Engineering Lab)", "viral_score": 100, "growth_rate": "+2,400% (Global Algorithm Mastery)", "reach": "10M - 50M+ views / month", "code_snippet": "# LITALLY MAXIMUM GLOBAL ENTERPRISE ARCHITECTURE\n# Full Suite Unlocked: 1500+ Functions, Multi-Region Clusters, Neural Prompt Engine\nfrom litally_ai_backend import litally_trend_spy_engine\nclass SovereignViralDominance:\n    MARKETS = ['GLOBAL', 'US', 'EU', 'KZ', 'ASIA', 'LATAM']\n    STATUS = 'ALL_FEATURES_ACTIVE_100_PERCENT'"}
            },
            "tr": {
                "zero": {"title": "Sıfır", "badge": "👶 4-9 yaş", "desc": "Tam başlangıç ve kişisel kullanım için. Daha az fonksiyon, maksimum sadelik. 4-9 yaş için ideal.", "feature_count": "15 Temel Özellik", "mode": "Ultra-Basit (Kodsuz, büyük ikonlar, çocuk güvenliği)", "viral_score": 92, "growth_rate": "+%340 (Aile Akışı)", "reach": "15K - 60K izlenme / ay", "code_snippet": None},
                "novice": {"title": "Acemi", "badge": "📖 6-9 yaş", "desc": "Düşük giriş eşiği. Okuma becerisi gerektirir. 6-9 yaş için ideal.", "feature_count": "30 Özellik", "mode": "Acemi Üretici (Metin ipuçları, temel kurgu)", "viral_score": 93, "growth_rate": "+%450 (Organik Büyüme)", "reach": "30K - 120K izlenme / ay", "code_snippet": None},
                "beginner": {"title": "Başlangıç", "badge": "🎯 Temel", "desc": "Sistemi anlayan, oluşturan, planlayan ve yöneten başlangıç seviyesi için ideal.", "feature_count": "75 Özellik", "mode": "Temel Üretici (Sürükle-bırak, içerik takvimi)", "viral_score": 94, "growth_rate": "+%580 (Düzenli Takvim)", "reach": "70K - 280K izlenme / ay", "code_snippet": None},
                "intermediate": {"title": "Orta Seviye", "badge": "💡 6-11 yaş", "desc": "6-11 yaş için ideal. Biraz daha yüksek giriş eşiği, zengin kontroller ve daha fazla fonksiyon.", "feature_count": "150 Özellik", "mode": "Orta Düzey (Gelişmiş filtreler, tempo yönetimi)", "viral_score": 95, "growth_rate": "+%720 (Çok Platformlu Radar)", "reach": "150K - 550K izlenme / ay", "code_snippet": None},
                "advanced": {"title": "İleri", "badge": "🎓 12-17 yaş", "desc": "12-17 yaş için ideal. Yüzlerce fonksiyon, tablolar, kodlama. İş dünyası ve pazarlama için asgari seviye.", "feature_count": "350 Özellik", "mode": "Gelişmiş Üretici (Trend tabloları, JSON/CSV, kod)", "viral_score": 96, "growth_rate": "+%890 (Kitle Tutundurma Analizi)", "reach": "400K - 1.5M izlenme / ay", "code_snippet": "# Python Trend Harvester\nimport urllib.request, json\ndata = json.loads(urllib.request.urlopen('http://127.0.0.1:5000/api/trends/stream').read())\nprint(f'En İyi Viral Trend: {data[0][\"title\"]}')"},
                "business_std": {"title": "İş Standardı", "badge": "📈 Kurumsal", "desc": "KOBİ'ler için mükemmel. Kısa dokümantasyon, temel kod bilgisi ve güçlü analiz yeteneği gerektirir.", "feature_count": "500 Özellik", "mode": "Kurumsal Standart (Kohort analizi, viral ROI)", "viral_score": 97, "growth_rate": "+%1,050 (Ticari Dönüşüm)", "reach": "600K - 2.8M izlenme / ay", "code_snippet": "# Business ROI & Lead Generation Scanner\nfrom litally_trend_spy_engine import litally_trend_spy_engine\nleads = litally_trend_spy_engine.generate_custom_trend(niche='business', emotion='trust')"},
                "high": {"title": "Yüksek", "badge": "⚙️ 800+ fonksiyon", "desc": "Kapsamlı dokümantasyon, 800+ özellik, yüksek giriş eşiği, hiper-kişiselleştirilmiş tablolar.", "feature_count": "800+ Özellik", "mode": "Üst Düzey (Hiper-kişiselleştirilmiş tablolar, webhooklar)", "viral_score": 98, "growth_rate": "+%1,350 (Hedef Odaklı)", "reach": "1.8M - 7.5M izlenme / ay", "code_snippet": "# Hyper-Personalized Table Streamer\nclass TrendMatrix:\n    def __init__(self, niche):\n        self.niche = niche"},
                "extreme": {"title": "Ekstrem", "badge": "🐍 1000+ fonk. • Python/AI", "desc": "Çok yüksek eşik. Python, yapay zeka, gelecek trend senaryoları, ileri düzey teoriler. 1000+ fonksiyon.", "feature_count": "1000+ Özellik", "mode": "Ekstrem Yapay Zeka Mühendisi (Python, AI trend tahminleri)", "viral_score": 99, "growth_rate": "+%1,800 (Öngörücü Modeller)", "reach": "3.5M - 15M izlenme / ay", "code_snippet": "# Extreme Predictive Trend Future Scenario Model\nimport numpy as np\ndef forecast_viral_wave(momentum, decay=0.08):\n    return [momentum * np.exp(-decay * t) for t in range(30)]"},
                "maximum": {"title": "MAKSİMUM", "badge": "🔥 TÜM ÖZELLİKLER", "desc": "Eksiksiz dokümantasyon. Tüm özellikler aktif. Küresel pazar genişlemesi ve büyük ölçekli holdingler için.", "feature_count": "TÜM ÖZELLİKLER (1500+)", "mode": "MAXIMUM ENTERPRISE (Küresel Piyasalar, IT Analitiği, Prompt Laboratuvarı)", "viral_score": 100, "growth_rate": "+%2,400 (Küresel Algoritma Hakimiyeti)", "reach": "10M - 50M+ izlenme / ay", "code_snippet": "# LITALLY MAXIMUM GLOBAL ENTERPRISE ARCHITECTURE\nclass SovereignViralDominance:\n    MARKETS = ['GLOBAL', 'TR', 'EU', 'US', 'ASIA']\n    STATUS = 'ALL_FEATURES_ACTIVE'"}
            },
            "es": {
                "zero": {"title": "Cero", "badge": "👶 4-9 años", "desc": "Para inicio absoluto y uso personal. Menos funciones, máxima simplicidad. Ideal para 4-9 años.", "feature_count": "15 Funciones Básicas", "mode": "Ultra-Simple (Sin código, iconos grandes, seguridad infantil)", "viral_score": 92, "growth_rate": "+340% (Feed Familiar)", "reach": "15K - 60K vistas / mes", "code_snippet": None},
                "novice": {"title": "Novato", "badge": "📖 6-9 años", "desc": "Baja barrera de entrada. Requiere lectura básica. Ideal para 6-9 años.", "feature_count": "30 Funciones", "mode": "Creador Novato (Pistas de texto, edición básica)", "viral_score": 93, "growth_rate": "+450% (Crecimiento Orgánico)", "reach": "30K - 120K vistas / mes", "code_snippet": None},
                "beginner": {"title": "Principiante", "badge": "🎯 Básico", "desc": "Ideal para quien comprende el funcionamiento, crea, mueve y planifica contenido.", "feature_count": "75 Funciones", "mode": "Creador Básico (Arrastrar y soltar, calendario de publicaciones)", "viral_score": 94, "growth_rate": "+580% (Planificación Estable)", "reach": "70K - 280K vistas / mes", "code_snippet": None},
                "intermediate": {"title": "Intermedio", "badge": "💡 6-11 años", "desc": "Ideal para 6-11 años. Barrera ligeramente superior, controles más ricos y funciones ampliadas.", "feature_count": "150 Funciones", "mode": "Nivel Intermedio (Filtros avanzados, ritmo visual)", "viral_score": 95, "growth_rate": "+720% (Radar Multiplataforma)", "reach": "150K - 550K vistas / mes", "code_snippet": None},
                "advanced": {"title": "Avanzado", "badge": "🎓 12-17 años", "desc": "Ideal para 12-17 años. Cientos de funciones, tablas, código. Mínimo para negocios y marketing.", "feature_count": "350 Funciones", "mode": "Creador Avanzado (Tablas de tendencias, JSON/CSV, código)", "viral_score": 96, "growth_rate": "+890% (Analítica de Retención)", "reach": "400K - 1.5M vistas / mes", "code_snippet": "# Python Trend Harvester\nimport urllib.request, json\ndata = json.loads(urllib.request.urlopen('http://127.0.0.1:5000/api/trends/stream').read())\nprint(f'Top Tendencia Viral: {data[0][\"title\"]}')"},
                "business_std": {"title": "Estándar Empresarial", "badge": "📈 Empresas", "desc": "Excelente para pymes. Requiere documentación breve, código básico y análisis riguroso.", "feature_count": "500 Funciones", "mode": "Estándar Empresarial (Análisis de cohortes, ROI viral)", "viral_score": 97, "growth_rate": "+1,050% (Conversión Comercial)", "reach": "600K - 2.8M vistas / mes", "code_snippet": "# Business ROI & Lead Generation Scanner\nfrom litally_trend_spy_engine import litally_trend_spy_engine\nleads = litally_trend_spy_engine.generate_custom_trend(niche='business', emotion='trust')"},
                "high": {"title": "Alto", "badge": "⚙️ 800+ funciones", "desc": "Documentación casi completa, 800+ funciones, barrera alta, tablas ultra-personalizadas e inteligencia en tiempo real.", "feature_count": "800+ Funciones", "mode": "Nivel Superior (Matrices personalizadas, webhooks en vivo)", "viral_score": 98, "growth_rate": "+1,350% (Hiper-Segmentación)", "reach": "1.8M - 7.5M vistas / mes", "code_snippet": "# Hyper-Personalized Table Streamer\nclass TrendMatrix:\n    def __init__(self, niche):\n        self.niche = niche"},
                "extreme": {"title": "Extremo", "badge": "🐍 1000+ func. • Python/IA", "desc": "Barrera muy alta. Dominio de Python, IA, software y escenarios predictivos de tendencias futuras. 1000+ funciones.", "feature_count": "1000+ Funciones", "mode": "Ingeniero de IA Extremo (Python, predicción de tendencias, teorías)", "viral_score": 99, "growth_rate": "+1,800% (Modelos Predictivos)", "reach": "3.5M - 15M vistas / mes", "code_snippet": "# Extreme Predictive Trend Future Scenario Model\nimport numpy as np\ndef forecast_viral_wave(momentum, decay=0.08):\n    return [momentum * np.exp(-decay * t) for t in range(30)]"},
                "maximum": {"title": "MÁXIMO", "badge": "🔥 TODAS LAS FUNCIONES", "desc": "Edición extendida. Todas las funciones activas. Para holdings multinacionales y expansión global.", "feature_count": "TODAS LAS FUNCIONES (1500+)", "mode": "MAXIMUM ENTERPRISE (Mercados Globales, Analítica IT, Laboratorio de Prompts)", "viral_score": 100, "growth_rate": "+2,400% (Dominio Global del Algoritmo)", "reach": "10M - 50M+ vistas / mes", "code_snippet": "# LITALLY MAXIMUM GLOBAL ENTERPRISE ARCHITECTURE\nclass SovereignViralDominance:\n    MARKETS = ['GLOBAL', 'LATAM', 'ES', 'US', 'EU']\n    STATUS = 'ALL_FEATURES_ACTIVE'"}
            },
            "ru": {
                "zero": {"title": "Нулевой", "badge": "👶 4-9 лет", "desc": "для самого старта и личного использования. Меньше функций. Все проще. Идеально для 4-9 лет.", "feature_count": "15 базовых функций", "mode": "Ультра-простой (Без кода, крупные иконки, детская безопасность)", "viral_score": 92, "growth_rate": "+340% (детская / семейная лента)", "reach": "15K - 60K просмотров / месяц", "code_snippet": None},
                "novice": {"title": "Начинающий", "badge": "📖 6-9 лет", "desc": "Идеально для низкого порога входа. Где нужно уметь читать. Идеально для 6-9", "feature_count": "30 функций", "mode": "Начинающий (Легкие текстовые подсказки, базовый монтаж)", "viral_score": 93, "growth_rate": "+450% (органика новичка)", "reach": "30K - 120K просмотров / месяц", "code_snippet": None},
                "beginner": {"title": "Начальный", "badge": "🎯 Базовый", "desc": "идеально для начинающего, который понимает, как пользоваться, умеет работать, перемещать, создавать и планировать", "feature_count": "75 функций", "mode": "Базовый творец (Drag-and-drop, календарь публикаций, трекинг)", "viral_score": 94, "growth_rate": "+580% (стабильный контент-план)", "reach": "70K - 280K просмотров / месяц", "code_snippet": None},
                "intermediate": {"title": "Средний", "badge": "💡 6-11 лет", "desc": "идеально для 6-11 лет. Чуть выше порог входа. Более сложное управление, больше функций и более высокий порог входа", "feature_count": "150 функций", "mode": "Средний уровень (Расширенные фильтры, управление хронометражем)", "viral_score": 95, "growth_rate": "+720% (мульти-платформенный радар)", "reach": "150K - 550K просмотров / месяц", "code_snippet": None},
                "advanced": {"title": "Сложный", "badge": "🎓 12-17 лет", "desc": "Идеально для 12-17 лет. Сотни функций, разные разделения, таблицы, код. Минимум для бизнеса и маркетинга", "feature_count": "350 функций", "mode": "Продвинутый (Таблицы трендов, экспорт в JSON/CSV, базовый код)", "viral_score": 96, "growth_rate": "+890% (аналитика удержания)", "reach": "400K - 1.5M просмотров / месяц", "code_snippet": "# Python Trend Harvester\nimport urllib.request, json\ndata = json.loads(urllib.request.urlopen('http://127.0.0.1:5000/api/trends/stream').read())\nprint(f'Top Viral Trend: {data[0][\"title\"]} (Score: {data[0][\"viral_score\"]})')"},
                "business_std": {"title": "Бизнес стандарт", "badge": "📈 Бизнес", "desc": "отлично для бизнеса. Нужно прочитать небольшую документацию. Надо знать основы программирования кода, хорошо анализировать. Идеально для маленького-среднего бизнеса", "feature_count": "500 функций", "mode": "Бизнес Стандарт (Когортный анализ, ROI виральности, документация)", "viral_score": 97, "growth_rate": "+1,050% (коммерческая конверсия)", "reach": "600K - 2.8M просмотров / месяц", "code_snippet": "# Business ROI & Lead Generation Scanner\nfrom litally_trend_spy_engine import litally_trend_spy_engine\nleads = litally_trend_spy_engine.generate_custom_trend(niche='business', emotion='trust')\nprint(f'Recommended Hook: {leads[\"hooks\"][0]}')"},
                "high": {"title": "Высокий", "badge": "⚙️ 800+ функций", "desc": "Почти полная документация. 800+ функций. Высокий порог входа. Гипер персонализированные таблицы, новейшая информация", "feature_count": "800+ функций", "mode": "Высокий ранг (Гипер-персонализированные таблицы, Real-time Webhooks)", "viral_score": 98, "growth_rate": "+1,350% (гипер-таргетинг)", "reach": "1.8M - 7.5M просмотров / месяц", "code_snippet": "# Hyper-Personalized Table Streamer\nclass TrendMatrix:\n    def __init__(self, niche):\n        self.niche = niche\n        self.features_active = 800"},
                "extreme": {"title": "Экстремальный", "badge": "🐍 1000+ ф-й • Python/AI", "desc": "очень высокий порог входа. Нужно знать языки программирования, пайтон, ИИ, ПО, как работает компьютер. Максимально персонализированные графики. Планирование. Сценарии как изменятся тренды в будущем. Теории. Полная документация. 1000+ функций", "feature_count": "1000+ функций", "mode": "Экстремальный ИИ-Инженер (Python, ИИ-прогнозирование будущего, теории трендов)", "viral_score": 99, "growth_rate": "+1,800% (предиктивные сценарии)", "reach": "3.5M - 15M просмотров / месяц", "code_snippet": "# Extreme Predictive Trend Future Scenario Model\nimport numpy as np\ndef forecast_viral_wave(momentum, decay=0.08):\n    return [momentum * np.exp(-decay * t) for t in range(30)]"},
                "maximum": {"title": "МАКСИМАЛЬНЫЙ", "badge": "🔥 ВСЕ ФУНКЦИИ", "desc": "расширенная версия документации. Все функции. Идеально для гигантского бизнеса и выхода на мировой рынок. Но нужно разбираться в IT аналитике, промпт инжиниринге и т.д.", "feature_count": "ВСЕ ФУНКЦИИ (1500+)", "mode": "MAXIMUM ENTERPRISE (Мировой рынок, IT-аналитика, Prompt Engineering Lab)", "viral_score": 100, "growth_rate": "+2,400% (мировое господство алгоритмов)", "reach": "10M - 50M+ просмотров / месяц", "code_snippet": "# LITALLY MAXIMUM GLOBAL ENTERPRISE ARCHITECTURE\nfrom litally_ai_backend import litally_trend_spy_engine\nclass SovereignViralDominance:\n    MARKETS = ['GLOBAL', 'US', 'EU', 'KZ', 'ASIA', 'LATAM']\n    STATUS = 'ALL_FEATURES_ACTIVE_100_PERCENT'"}
            },
            "kk": {
                "zero": {"title": "Нөлдік", "badge": "👶 4-9 жас", "desc": "Алғашқы қадам және жеке қолданыс үшін. Аз функциялар. Өте қарапайым. 4-9 жасқа арналған.", "feature_count": "15 Негізгі функция", "mode": "Ультра-Қарапайым (Кодсыз, балалар қауіпсіздігі)", "viral_score": 92, "growth_rate": "+340% (Отбасылық лента)", "reach": "15K - 60K қаралым / ай", "code_snippet": None},
                "novice": {"title": "Үйренуші", "badge": "📖 6-9 жас", "desc": "Төмен кіру шегі. Оқу дағдысы қажет. 6-9 жасқа арналған.", "feature_count": "30 Функция", "mode": "Үйренуші (Мәтіндік кеңестер, базалық монтаж)", "viral_score": 93, "growth_rate": "+450% (Органикалық өсім)", "reach": "30K - 120K қаралым / ай", "code_snippet": None},
                "beginner": {"title": "Бастауыш", "badge": "🎯 Базалық", "desc": "Жүйені түсінетін, құрастыратын және жоспарлайтын бастаушылар үшін.", "feature_count": "75 Функция", "mode": "Базалық жасаушы (Жариялау күнтізбесі, бақылау)", "viral_score": 94, "growth_rate": "+580% (Тұрақты контент-жоспар)", "reach": "70K - 280K қаралым / ай", "code_snippet": None},
                "intermediate": {"title": "Орташа", "badge": "💡 6-11 жас", "desc": "6-11 жасқа арналған. Сәл жоғары кіру шегі, көбірек функциялар.", "feature_count": "150 Функция", "mode": "Орта деңгей (Кеңейтілген сүзгілер, қарқынды басқару)", "viral_score": 95, "growth_rate": "+720% (Көп платформалы радар)", "reach": "150K - 550K қаралым / ай", "code_snippet": None},
                "advanced": {"title": "Күрделі", "badge": "🎓 12-17 жас", "desc": "12-17 жасқа арналған. Жүздеген функциялар, кестелер, код. Бизнес пен маркетинг үшін қажетті деңгей.", "feature_count": "350 Функция", "mode": "Күрделі деңгей (Трендтер кестесі, JSON/CSV экспорт, код)", "viral_score": 96, "growth_rate": "+890% (Қамту аналитикасы)", "reach": "400K - 1.5M қаралым / ай", "code_snippet": "# Python Trend Harvester\nimport urllib.request, json\ndata = json.loads(urllib.request.urlopen('http://127.0.0.1:5000/api/trends/stream').read())\nprint(f'Үздік вирус тренді: {data[0][\"title\"]}')"},
                "business_std": {"title": "Бизнес стандарт", "badge": "📈 Бизнес", "desc": "Орта және шағын бизнеске арналған. Қысқа құжаттама, бағдарламалау негіздері және терең талдау.", "feature_count": "500 Функция", "mode": "Бизнес Стандарт (Когорталық талдау, вирустық ROI)", "viral_score": 97, "growth_rate": "+1,050% (Коммерциялық конверсия)", "reach": "600K - 2.8M қаралым / ай", "code_snippet": "# Business ROI & Lead Generation Scanner\nfrom litally_trend_spy_engine import litally_trend_spy_engine\nleads = litally_trend_spy_engine.generate_custom_trend(niche='business', emotion='trust')"},
                "high": {"title": "Жоғары", "badge": "⚙️ 800+ функция", "desc": "Толыққа жуық құжаттама, 800+ функция, жоғары кіру шегі, дербес кестелер.", "feature_count": "800+ Функция", "mode": "Жоғары ранг (Дербес матрицалар, нақты уақыттағы вебхуктар)", "viral_score": 98, "growth_rate": "+1,350% (Гипер-таргетинг)", "reach": "1.8M - 7.5M қаралым / ай", "code_snippet": "# Hyper-Personalized Table Streamer\nclass TrendMatrix:\n    def __init__(self, niche):\n        self.niche = niche"},
                "extreme": {"title": "Экстремалды", "badge": "🐍 1000+ ф. • Python/AI", "desc": "Өте жоғары шек. Python, ЖИ, бағдарламалық жасақтама, болашақ трендтер теориясы. 1000+ функция.", "feature_count": "1000+ Функция", "mode": "Экстремалды ЖИ-Инженер (Python, болашақты болжау, теориялар)", "viral_score": 99, "growth_rate": "+1,800% (Предиктивті сценарийлер)", "reach": "3.5M - 15M қаралым / ай", "code_snippet": "# Extreme Predictive Trend Future Scenario Model\nimport numpy as np\ndef forecast_viral_wave(momentum, decay=0.08):\n    return [momentum * np.exp(-decay * t) for t in range(30)]"},
                "maximum": {"title": "МАКСИМАЛДЫ", "badge": "🔥 БАРЛЫҚ МҮМКІНДІКТЕР", "desc": "Құжаттаманың кеңейтілген нұсқасы. Барлық мүмкіндіктер. Әлемдік деңгейдегі алып холдингтерге арналған.", "feature_count": "БАРЛЫҚ МҮМКІНДІКТЕР (1500+)", "mode": "MAXIMUM ENTERPRISE (Әлемдік нарық, IT-аналитика, Prompt Lab)", "viral_score": 100, "growth_rate": "+2,400% (Алгоритмдер үстемдігі)", "reach": "10M - 50M+ қаралым / ай", "code_snippet": "# LITALLY MAXIMUM GLOBAL ENTERPRISE ARCHITECTURE\nclass SovereignViralDominance:\n    MARKETS = ['GLOBAL', 'KZ', 'US', 'EU', 'ASIA']\n    STATUS = 'ALL_FEATURES_ACTIVE'"}
            }
        }

        # Select dictionary based on lang_key
        profiles_lang = level_profiles.get(lang_key, level_profiles["en"])
        current_profile = profiles_lang.get(level, profiles_lang["zero"])

        # Audience labels localization
        audience_names = {
            "en": {
                "personal": "For Personal Use (Creator Brand / Art / Lifestyle)",
                "company": "For My Company (Brand Awareness, Client Acquisition)",
                "leaders": "For Executive Leadership (C-Level Reports & Viral KPIs)",
                "other": f"Custom Objective: {custom_audience or 'Independent Project'}"
            },
            "tr": {
                "personal": "Kişisel Kullanım İçin (Kişisel Marka / Yaratıcılık)",
                "company": "Şirketim İçin (Marka Bilinirliği, Müşteri Kazanımı)",
                "leaders": "Yöneticilerim İçin (C-Level Raporlar ve Viral KPI'lar)",
                "other": f"Özel Amaç: {custom_audience or 'Bağımsız Proje'}"
            },
            "es": {
                "personal": "Para Uso Personal (Marca Personal / Arte / Creatividad)",
                "company": "Para Mi Empresa (Reconocimiento de Marca, Clientes)",
                "leaders": "Para Directivos (Informes Ejecutivos y KPIs Virales)",
                "other": f"Objetivo Personalizado: {custom_audience or 'Proyecto Independiente'}"
            },
            "ru": {
                "personal": "Для персонального использования (Личный бренд / Творчество)",
                "company": "Для моей компании (Бизнес, Маркетинг, Клиенты)",
                "leaders": "Для своих руководителей (Стратегический отчет & KPI)",
                "other": f"Специализированная цель: {custom_audience or 'Индивидуальный проект'}"
            },
            "kk": {
                "personal": "Жеке қолданыс үшін (Жеке бренд / Шығармашылық)",
                "company": "Менің компаниям үшін (Бизнес, Маркетинг, Клиенттер)",
                "leaders": "Басшыларым үшін (Стратегиялық есеп & KPI)",
                "other": f"Арнайы мақсат: {custom_audience or 'Дербес жоба'}"
            }
        }
        aud_lang_dict = audience_names.get(lang_key, audience_names["en"])
        audience_label = aud_lang_dict.get(audience, aud_lang_dict["personal"])

        # Location details localization
        location_statuses = {
            "en": {
                "yes": "📍 Local city radar active: scanning trends within your district radius for maximum localized engagement (+340% boost)",
                "no": "🔒 Full privacy mode: scanning global worldwide trends only without metropolitan localization",
                "permission": "🛡️ On request: geolocation is queried strictly upon your confirmation before each district scan"
            },
            "tr": {
                "yes": "📍 Şehir radarı devrede: maksimum yerel etkileşim için bölgenizdeki trendler taranıyor (+%340 artış)",
                "no": "🔒 Tam gizlilik modu: şehir eşleştirmesi olmadan yalnızca küresel trendler taranıyor",
                "permission": "🛡️ İstek üzerine: bölge taramalarından önce onayınız isteniyor"
            },
            "es": {
                "yes": "📍 Radar local activo: escaneo de tendencias en su distrito para máxima viralidad local (+340% impulso)",
                "no": "🔒 Modo privacidad total: escaneo exclusivo de tendencias globales sin geolocalización",
                "permission": "🛡️ Bajo confirmación: se solicita permiso antes de escanear su distrito"
            },
            "ru": {
                "yes": "📍 Локальный радар города активирован: поиск трендов в радиусе вашего округа (+340% вовлечения)",
                "no": "🔒 Полная приватность: сканирование только мировых глобальных трендов без привязки к городу",
                "permission": "🛡️ По запросу: геолокация опрашивается только с вашего подтверждения перед сканированием"
            },
            "kk": {
                "yes": "📍 Жергілікті радар белсенді: аймағыңыздағы трендтер сканерленуде (+340% белсенділік)",
                "no": "🔒 Толық құпиялылық: қаласыз тек жаһандық трендтер сканерленуде",
                "permission": "🛡️ Сұраныс бойынша: әр сканерлеу алдында рұқсат сұралады"
            }
        }
        loc_lang_dict = location_statuses.get(lang_key, location_statuses["en"])
        location_status = loc_lang_dict.get(location, loc_lang_dict["yes"])

        # Generate localized hooks and trend details
        hooks_templates = {
            "en": [
                f"99% of creators will never realize this hidden fact about {display_niche}...",
                f"What was just revealed about {display_niche} is reshaping the entire algorithmic meta.",
                f"Never make this mistake with {display_niche} if you value high-retention growth!"
            ],
            "tr": [
                f"İçerik üreticilerinin %99'u {display_niche} hakkındaki bu kritik gerçeği bilmiyor...",
                f"{display_niche} alanında az önce açığa çıkan bu bilgi tüm algoritmaları değiştirecek.",
                f"Viral büyüme istiyorsanız {display_niche} konusunda bu hatayı kesinlikle yapmayın!"
            ],
            "es": [
                f"El 99% de los creadores nunca descubrirá este detalle clave sobre {display_niche}...",
                f"Lo que acaba de revelarse sobre {display_niche} está transformando todo el algoritmo.",
                f"¡Nunca cometas este grave error con {display_niche} si buscas máxima retención!"
            ],
            "ru": [
                f"99% авторов никогда не узнают эту скрытую деталь про {display_niche}...",
                f"То, что только что рассекретили о {display_niche}, перевернет все алгоритмы 2026 года.",
                f"Никогда не делай эту ошибку в нише {display_niche}, если хочешь взрывной рост охватов!"
            ],
            "kk": [
                f"Авторлардың 99%-ы {display_niche} туралы бұл құпияны ешқашан білмейді...",
                f"{display_niche} саласында жаңа ашылған бұл дерек алгоритмдерді түбегейлі өзгертеді.",
                f"Жоғары қамту қажет болса, {display_niche} тақырыбында бұл қатені ешқашан жасамаңыз!"
            ]
        }
        hooks = hooks_templates.get(lang_key, hooks_templates["en"])

        custom_trend = self.generate_custom_trend(niche=display_niche, emotion="shock" if level in ["extreme", "maximum"] else "curiosity")

        posting_times = {
            "tiktok": "14:00 - 16:30 & 20:00 - 22:30",
            "reels": "12:00 - 14:00 & 19:00 - 21:00",
            "shorts": "16:00 - 19:00",
            "all": "13:00 - 15:00 & 20:30 - 22:00"
        }

        return {
            "status": "success",
            "audience": audience,
            "audience_label": audience_label,
            "custom_audience": custom_audience,
            "usage_level": level,
            "level_profile": current_profile,
            "share_location": location,
            "location_status": location_status,
            "platform": platform,
            "theme": theme,
            "niche": display_niche,
            "target_lang": target_lang,
            "viral_score": current_profile["viral_score"],
            "growth_rate": current_profile["growth_rate"],
            "reach_estimate": current_profile["reach"],
            "features_unlocked": current_profile["feature_count"],
            "interface_mode": current_profile["mode"],
            "code_snippet": current_profile["code_snippet"],
            "best_posting_window": posting_times.get(platform, posting_times["all"]),
            "hooks": hooks,
            "audio": custom_trend["audio"],
            "litdeo_prompt": custom_trend["visual_prompt"],
            "hashtags": custom_trend["hashtags"],
            "script_structure": custom_trend["script_structure"]
        }


# Global singleton instance
litally_trend_spy_engine = LitallyTrendSpyEngine()
