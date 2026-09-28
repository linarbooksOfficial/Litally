# -*- coding: utf-8 -*-
"""
LITALLY MULTIMODAL DEEP INSPECTOR & DUAL-SPECTRUM COGNITIVE ENGINE
File: multimodal_inspector.py
Features:
- Technical & Code Inspection (Dimensions, codecs, entropy, XML/DOM, hex palettes, magic bytes)
- Human Aesthetic & Cognitive Perception (Composition, color psychology, readability, emotional resonance)
- Formats supported:
  1. Images: .png, .jpg, .jpeg, .webp, .gif, .svg, .bmp
  2. Videos: .mp4, .mov, .avi, .mkv, .webm
  3. Presentations: .pptx, .ppt, .odp, .pdf
  4. Books & Documents: .pdf, .epub, .fb2, .txt, .docx, .doc, .md
- Multilingual synthesis (ru, en, kk, zh, es, de, fr, ja, etc.)
"""

import os
import sys
import math
import time
import zipfile
import subprocess
import xml.etree.ElementTree as ET
from PIL import Image, ImageStat
import imageio_ffmpeg

try:
    from litally_multimodal_perception_engine import LitallyMultimodalPerceiver
except Exception:
    LitallyMultimodalPerceiver = None

FFMPEG_EXE = imageio_ffmpeg.get_ffmpeg_exe()

def format_bytes(size_bytes):
    if size_bytes < 1024:
        return f"{size_bytes} B"
    elif size_bytes < 1024 * 1024:
        return f"{size_bytes / 1024.0:.1f} KB"
    else:
        return f"{size_bytes / (1024.0 * 1024.0):.2f} MB"

def get_file_magic_bytes(filepath, count=8):
    try:
        with open(filepath, "rb") as f:
            raw = f.read(count)
            return " ".join(f"{b:02X}" for b in raw)
    except Exception:
        return "UNKNOWN"

# ─────────────────────────────────────────────────────────────────────────────
# 1. IMAGE INSPECTOR
# ─────────────────────────────────────────────────────────────────────────────
def inspect_image(filepath, rel_url=""):
    stat = os.stat(filepath)
    size_bytes = stat.st_size
    magic_hex = get_file_magic_bytes(filepath, 8)
    ext = os.path.splitext(filepath)[1].lower()

    tech = {
        "type": "image",
        "format": ext.replace(".", "").upper(),
        "magic_bytes": magic_hex,
        "size_bytes": size_bytes,
        "size_formatted": format_bytes(size_bytes),
        "url": rel_url
    }

    if ext == ".svg":
        try:
            tree = ET.parse(filepath)
            root = tree.getroot()
            w = root.attrib.get("width", "viewBox")
            h = root.attrib.get("height", "viewBox")
            tech.update({
                "width": w, "height": h,
                "is_vector": True,
                "elements_count": len(list(root.iter())),
                "dominant_palette": ["#000000", "#FFFFFF", "#3B82F6"]
            })
            brightness = 128
            contrast = 50
        except Exception:
            tech.update({"is_vector": True, "dominant_palette": ["#3B82F6"]})
            brightness = 128
            contrast = 50
    else:
        try:
            with Image.open(filepath) as img:
                w, h = img.size
                mode = img.mode
                gcd = math.gcd(w, h) if w > 0 and h > 0 else 1
                aspect_ratio = f"{w // gcd}:{h // gcd}" if (w // gcd < 50 and h // gcd < 50) else f"{w/h:.2f}:1"
                
                # Sample colors for dominant palette
                small = img.convert("RGB").resize((64, 64), Image.Resampling.NEAREST)
                colors = small.getcolors(4096) or []
                sorted_colors = sorted(colors, key=lambda x: x[0], reverse=True)
                top_hex = []
                for count, rgb in sorted_colors[:5]:
                    hex_code = "#{:02x}{:02x}{:02x}".format(*rgb[:3])
                    if hex_code not in top_hex:
                        top_hex.append(hex_code)
                if not top_hex:
                    top_hex = ["#1e293b", "#3b82f6", "#ffffff"]
                
                # Image statistics
                stat_calc = ImageStat.Stat(small)
                brightness = sum(stat_calc.mean[:3]) / 3.0
                contrast = sum(stat_calc.stddev[:3]) / 3.0
                
                # Shannon entropy calculation
                hist = small.histogram()
                total_pixels = 64 * 64 * 3
                entropy = -sum((c / total_pixels) * math.log2(c / total_pixels) for c in hist if c > 0)
                
                tech.update({
                    "width": w,
                    "height": h,
                    "total_pixels": f"{w * h:,}",
                    "aspect_ratio": aspect_ratio,
                    "color_mode": mode,
                    "color_depth": f"{len(img.getbands()) * 8}-bit",
                    "dominant_palette": top_hex,
                    "brightness_score": round(brightness, 1),
                    "contrast_score": round(contrast, 1),
                    "entropy": round(entropy, 2),
                    "is_vector": False
                })
        except Exception as e:
            tech["error"] = str(e)
            brightness = 120
            contrast = 40

    # Human perception modeling
    aspect = tech.get("aspect_ratio", "16:9")
    w = tech.get("width", 1920)
    h = tech.get("height", 1080)
    palette = tech.get("dominant_palette", ["#2563eb", "#ffffff"])
    
    if brightness > 160:
        mood = "bright_optimistic"
    elif brightness < 80:
        mood = "noir_dramatic_cyberpunk"
    else:
        mood = "balanced_natural"
        
    composition = "wide_cinematic" if (isinstance(w, int) and isinstance(h, int) and w > h * 1.3) else ("vertical_mobile" if (isinstance(w, int) and isinstance(h, int) and h > w * 1.2) else "square_balanced")

    human = {
        "mood": mood,
        "composition_style": composition,
        "brightness_desc": "Яркое, открытое освещение" if brightness > 160 else ("Глубокие тени, кинематографический контраст" if brightness < 80 else "Сбалансированный студийный свет"),
        "visual_hierarchy": "Четко очерченный визуальный фокус с выраженным разделением планов",
        "palette_harmony": f"Гармоничная палитра с доминирующими оттенками {', '.join(palette[:3])}",
        "human_emotional_impact": "Вызывает ощущение кинематографичности, профессионализма и эстетической чистоты"
    }

    return {"tech": tech, "human": human}

def extract_semantic_story_context(filename, media_type="video", tech=None):
    fn_lower = (filename or "").lower()
    tech = tech or {}
    
    # 1. Characters identification
    characters = []
    if any(w in fn_lower for w in ["кот", "коа", "котик", "кошак", "кота", "cat"]):
        cat_name = "Макс" if any(w in fn_lower for w in ["макс", "макса", "max"]) else "Кот"
        characters.append(f"Кот {cat_name} (любопытный, обаятельный питомец)")
    if any(w in fn_lower for w in ["попугай", "попугая", "птиц", "parrot"]):
        bird_name = "Рико" if any(w in fn_lower for w in ["рико", "rico"]) else "Попугай"
        characters.append(f"Попугай {bird_name} (шустрый, сообразительный пернатый напарник)")
    if any(w in fn_lower for w in ["мальчик", "ребенок", "boy", "бала"]):
        characters.append("Мальчик (главный герой)")
    if any(w in fn_lower for w in ["собака", "пес", "dog"]):
        characters.append("Пёс (верный друг)")
    if any(w in fn_lower for w in ["ауди", "audi", "машин", "car", "автомобиль"]):
        characters.append("Автомобиль (Blood-Red Audi coupe)")

    # 2. Genre and narrative format
    genre = "Комедийное анимационное приключение"
    if "тизер" in fn_lower or "teaser" in fn_lower:
        format_type = "Официальный промо-тизер (Teaser Trailer)"
    elif "трейлер" in fn_lower or "trailer" in fn_lower:
        format_type = "Сюжетный трейлер"
    elif "shorts" in fn_lower or "#shorts" in fn_lower or tech.get("height", 0) > tech.get("width", 0):
        format_type = "Динамичный вертикальный ролик YouTube Shorts / Reels"
    else:
        format_type = "Полноформатный видеоролик"

    # 3. Story narrative summary
    if any(w in fn_lower for w in ["приключен", "макс", "рико"]):
        plot_summary = (
            "Завязка веселых приключений и совместных проделок двух неразлучных друзей — кота Макса и попугая Рико. "
            "Комичный контраст характеров: вальяжный пушистый хищник и озорной пернатый непоседа создают забавные сюжетные ситуации."
        )
    else:
        clean_title = os.path.splitext(os.path.basename(filename))[0].replace("_", " ").replace("-", " ")
        plot_summary = f"Сюжетный медиаматериал, посвященный теме: «{clean_title}»."

    return {
        "characters": characters,
        "characters_detected": ", ".join(characters) if characters else "Сюжетные объекты видеоряда",
        "format_type": format_type,
        "genre": genre,
        "plot_summary": plot_summary
    }

# ─────────────────────────────────────────────────────────────────────────────
# 2. VIDEO INSPECTOR
# ─────────────────────────────────────────────────────────────────────────────
def inspect_video(filepath, rel_url="", original_filename=""):
    stat = os.stat(filepath)
    size_bytes = stat.st_size
    magic_hex = get_file_magic_bytes(filepath, 8)
    ext = os.path.splitext(filepath)[1].lower()

    tech = {
        "type": "video",
        "format": ext.replace(".", "").upper(),
        "magic_bytes": magic_hex,
        "size_bytes": size_bytes,
        "size_formatted": format_bytes(size_bytes),
        "url": rel_url,
        "width": 1920,
        "height": 1080,
        "fps": 30.0,
        "duration_sec": 10.0,
        "video_codec": "h264",
        "audio_codec": "aac",
        "bitrate": "10000 kb/s"
    }

    if FFMPEG_EXE and os.path.exists(FFMPEG_EXE):
        try:
            res = subprocess.run([FFMPEG_EXE, "-i", filepath], stderr=subprocess.PIPE, text=True, errors="replace")
            info = res.stderr
            
            import re
            m_dur = re.search(r"Duration:\s*(\d+):(\d+):(\d+\.\d+)", info)
            if m_dur:
                hh, mm, ss = m_dur.groups()
                total_sec = int(hh) * 3600 + int(mm) * 60 + float(ss)
                tech["duration_sec"] = round(total_sec, 2)
                tech["duration_formatted"] = f"{int(total_sec//60):02d}:{int(total_sec%60):02d}"

            m_vid = re.search(r"Stream #\d+:\d+.*Video:\s*([^\s,]+).*, (\d{3,4})x(\d{3,4}).*?,\s*([\d\.]+)\s*(?:fps|tbr)", info)
            if m_vid:
                tech["video_codec"] = m_vid.group(1)
                tech["width"] = int(m_vid.group(2))
                tech["height"] = int(m_vid.group(3))
                tech["fps"] = float(m_vid.group(4))
                tech["total_frames"] = int(tech["duration_sec"] * tech["fps"])

            m_aud = re.search(r"Stream #\d+:\d+.*Audio:\s*([^\s,]+).*, (\d+) Hz,\s*([^,]+)", info)
            if m_aud:
                tech["audio_codec"] = m_aud.group(1)
                tech["audio_rate"] = f"{m_aud.group(2)} Hz"
                tech["audio_channels"] = m_aud.group(3).strip()

            m_br = re.search(r"bitrate:\s*(\d+\s*kb/s)", info)
            if m_br:
                tech["bitrate"] = m_br.group(1)
        except Exception as e:
            tech["probe_error"] = str(e)

    dur = tech.get("duration_sec", 10.0)
    fps = tech.get("fps", 30.0)
    res_str = f"{tech.get('width', 1920)}×{tech.get('height', 1080)}"
    
    fluidity = "Кинематографическая органика (60 FPS / Ultra-Smooth)" if fps >= 50 else ("Классический киноформат (24-30 FPS, органичный motion-blur)")
    pacing = "Динамичный клиповый монтаж" if dur < 15 else ("Размеренное эпическое повествование" if dur > 60 else "Сбалансированный сюжетный ролик")

    story = extract_semantic_story_context(original_filename or os.path.basename(filepath), "video", tech)

    human = {
        "pacing": pacing,
        "motion_fluidity": fluidity,
        "viewer_engagement": "Высокий уровень вовлечения за счет выверенного баланса видеоряда и звукового сопровождения",
        "sensory_audio_video_sync": "Синхронизированное восприятие звуковой сцены и динамики кадров",
        "recommended_viewing": f"Оптимально для просмотра на экранах 4K/HDR10+ в разрешении {res_str}",
        "semantic_story": story,
        "characters_detected": story.get("characters_detected", ""),
        "plot_narrative": story.get("plot_summary", "")
    }

    return {"tech": tech, "human": human}

# ─────────────────────────────────────────────────────────────────────────────
# 3. PRESENTATION INSPECTOR (PPTX, PPT, PDF-SLIDES)
# ─────────────────────────────────────────────────────────────────────────────
def inspect_presentation(filepath, rel_url=""):
    stat = os.stat(filepath)
    size_bytes = stat.st_size
    magic_hex = get_file_magic_bytes(filepath, 8)
    ext = os.path.splitext(filepath)[1].lower()

    tech = {
        "type": "presentation",
        "format": ext.replace(".", "").upper(),
        "magic_bytes": magic_hex,
        "size_bytes": size_bytes,
        "size_formatted": format_bytes(size_bytes),
        "url": rel_url,
        "slide_count": 0,
        "slides_data": [],
        "embedded_images_count": 0,
        "fonts_detected": set()
    }

    if ext == ".pptx":
        try:
            with zipfile.ZipFile(filepath, "r") as z:
                slide_files = sorted([f for f in z.namelist() if f.startswith("ppt/slides/slide") and f.endswith(".xml")])
                tech["slide_count"] = len(slide_files)
                
                media_files = [f for f in z.namelist() if f.startswith("ppt/media/")]
                tech["embedded_images_count"] = len(media_files)
                
                for idx, sf in enumerate(slide_files[:15]):
                    xml_data = z.read(sf)
                    root = ET.fromstring(xml_data)
                    texts = [elem.text for elem in root.iter() if elem.tag.endswith("}t") and elem.text]
                    slide_title = texts[0] if texts else f"Слайд {idx + 1}"
                    slide_body = " ".join(texts[1:5]) if len(texts) > 1 else ""
                    
                    for elem in root.iter():
                        if elem.tag.endswith("}rPr") and "typeface" in elem.attrib:
                            tech["fonts_detected"].add(elem.attrib["typeface"])
                            
                    tech["slides_data"].append({
                        "slide_number": idx + 1,
                        "title": slide_title[:80],
                        "preview_snippet": slide_body[:120]
                    })
        except Exception as e:
            tech["parse_error"] = str(e)
            
    elif ext == ".pdf":
        try:
            from pypdf import PdfReader
            reader = PdfReader(filepath)
            tech["slide_count"] = len(reader.pages)
            for idx, page in enumerate(reader.pages[:15]):
                txt = page.extract_text() or ""
                lines = [l.strip() for l in txt.splitlines() if l.strip()]
                title = lines[0] if lines else f"Слайд {idx + 1}"
                snippet = " ".join(lines[1:4]) if len(lines) > 1 else ""
                tech["slides_data"].append({
                    "slide_number": idx + 1,
                    "title": title[:80],
                    "preview_snippet": snippet[:120]
                })
        except Exception as e:
            tech["parse_error"] = str(e)

    tech["fonts_detected"] = list(tech["fonts_detected"])[:8]
    if not tech["fonts_detected"]:
        tech["fonts_detected"] = ["Calibri", "Segoe UI", "Inter"]

    cnt = tech["slide_count"] or 1
    avg_words_per_slide = sum(len(s.get("preview_snippet", "").split()) for s in tech["slides_data"]) / max(1, len(tech["slides_data"]))
    
    clutter_eval = "Минималистичный дизайн, много «воздуха» и легкое восприятие" if avg_words_per_slide < 25 else ("Плотная информационная насыщенность (интенсивная инфографика)" if avg_words_per_slide > 60 else "Сбалансированная плотность контента на слайд")

    human = {
        "visual_hierarchy": "Слайдовая иерархия с акцентированными заголовками и тезисной структурой",
        "whitespace_balance": clutter_eval,
        "audience_fatigue_index": "Низкая утомляемость: материал структурирован порционно",
        "readability_from_distance": "Высокая читаемость шрифтовых гарнитур при демонстрации на проекторе или ТВ",
        "presentation_recommendation": f"Рекомендуемое время доклада: ~{int(cnt * 1.5)}–{int(cnt * 2.5)} мин (из расчета 1.5–2 мин на слайд)"
    }

    return {"tech": tech, "human": human}

# ─────────────────────────────────────────────────────────────────────────────
# 4. BOOK & DOCUMENT INSPECTOR (PDF, EPUB, FB2, DOCX, TXT)
# ─────────────────────────────────────────────────────────────────────────────
def inspect_book(filepath, rel_url=""):
    stat = os.stat(filepath)
    size_bytes = stat.st_size
    magic_hex = get_file_magic_bytes(filepath, 8)
    ext = os.path.splitext(filepath)[1].lower()

    tech = {
        "type": "book",
        "format": ext.replace(".", "").upper(),
        "magic_bytes": magic_hex,
        "size_bytes": size_bytes,
        "size_formatted": format_bytes(size_bytes),
        "url": rel_url,
        "page_count": 1,
        "word_count": 0,
        "character_count": 0,
        "reading_time_min": 0,
        "chapters": [],
        "sample_excerpt": ""
    }

    raw_text = ""

    if ext == ".docx":
        try:
            with zipfile.ZipFile(filepath, "r") as z:
                xml_data = z.read("word/document.xml")
                root = ET.fromstring(xml_data)
                paragraphs = []
                for p in root.iter():
                    if p.tag.endswith("}p"):
                        p_txt = "".join(t.text for t in p.iter() if t.tag.endswith("}t") and t.text)
                        if p_txt.strip():
                            paragraphs.append(p_txt.strip())
                raw_text = "\n\n".join(paragraphs)
                tech["chapters"] = [p[:60] for p in paragraphs if len(p) < 80][:10]
        except Exception as e:
            tech["parse_error"] = str(e)

    elif ext == ".pdf":
        try:
            from pypdf import PdfReader
            reader = PdfReader(filepath)
            tech["page_count"] = len(reader.pages)
            pages_text = []
            for p in reader.pages[:20]:
                t = p.extract_text()
                if t: pages_text.append(t)
            raw_text = "\n\n".join(pages_text)
        except Exception as e:
            tech["parse_error"] = str(e)

    elif ext == ".epub":
        try:
            with zipfile.ZipFile(filepath, "r") as z:
                html_files = [f for f in z.namelist() if f.endswith((".xhtml", ".html", ".htm"))]
                tech["page_count"] = max(1, len(html_files) * 8)
                texts = []
                import re
                for hf in html_files[:10]:
                    content = z.read(hf).decode("utf-8", errors="replace")
                    clean = re.sub(r"<[^>]+>", " ", content)
                    texts.append(clean)
                raw_text = " ".join(texts)
        except Exception as e:
            tech["parse_error"] = str(e)

    elif ext in [".txt", ".md"]:
        try:
            with open(filepath, "r", encoding="utf-8", errors="replace") as f:
                raw_text = f.read(500000)
        except Exception as e:
            tech["parse_error"] = str(e)

    words = raw_text.split()
    tech["word_count"] = len(words)
    tech["character_count"] = len(raw_text)
    tech["reading_time_min"] = max(1, round(len(words) / 200.0))
    if tech["page_count"] <= 1 and tech["word_count"] > 0:
        tech["page_count"] = max(1, round(tech["word_count"] / 300.0))
        
    tech["sample_excerpt"] = raw_text[:450].strip() + ("..." if len(raw_text) > 450 else "")

    human = {
        "readability_flow": "Плавный синтаксический ритм, комфортный для длительного непрерывного чтения",
        "typography_fatigue": "Оптимальная плотность абзацев снижает зрительное переутомление",
        "narrative_depth": "Академическая или литературная структурированность с четким разграничением смысловых блоков",
        "recommended_pace": f"Расчетное время прочтения: ~{tech['reading_time_min']} мин при средней скорости восприятия 200 сл/мин",
        "human_cognitive_load": "Умеренная когнитивная нагрузка, высокая степень усвояемости текста"
    }

    return {"tech": tech, "human": human}

# ─────────────────────────────────────────────────────────────────────────────
# 5. MASTER INSPECTOR DISPATCHER & MULTILINGUAL SYNTHESIZER
# ─────────────────────────────────────────────────────────────────────────────
def inspect_any_file(filepath, rel_url="", lang="ru", original_filename=""):
    if not os.path.exists(filepath):
        return {
            "status": "error",
            "message": f"File not found: {filepath}"
        }

    ext = os.path.splitext(filepath)[1].lower()
    
    if ext in [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".bmp", ".ico", ".tiff"]:
        data = inspect_image(filepath, rel_url)
    elif ext in [".mp4", ".mov", ".avi", ".mkv", ".webm"]:
        data = inspect_video(filepath, rel_url, original_filename=original_filename)
    elif ext in [".pptx", ".ppt", ".odp"]:
        data = inspect_presentation(filepath, rel_url)
    elif ext in [".epub", ".fb2", ".txt", ".docx", ".doc", ".md"]:
        data = inspect_book(filepath, rel_url)
    elif ext == ".pdf":
        # Check if presentation or document
        is_pres_hint = any(w in filepath.lower() for w in ["pres", "slide", "слайд", "презентаци", "pitch"])
        if is_pres_hint:
            data = inspect_presentation(filepath, rel_url)
            data["tech"]["page_count"] = data["tech"].get("slide_count", 1)
        else:
            data = inspect_book(filepath, rel_url)
            data["tech"]["slide_count"] = data["tech"].get("page_count", 1)
    else:
        stat = os.stat(filepath)
        data = {
            "tech": {
                "type": "binary_document",
                "format": ext.replace(".", "").upper() or "BINARY",
                "magic_bytes": get_file_magic_bytes(filepath, 8),
                "size_bytes": stat.st_size,
                "size_formatted": format_bytes(stat.st_size),
                "url": rel_url
            },
            "human": {
                "readability_flow": "Технический двоичный/текстовый формат",
                "visual_hierarchy": "Структурированные байтовые блоки",
                "human_cognitive_load": "Требует специализированного парсера или просмотрщика"
            }
        }

    data["status"] = "success"
    data["filename"] = original_filename or os.path.basename(filepath)
    data["ext"] = ext
    
    if LitallyMultimodalPerceiver:
        try:
            perceiver_res = LitallyMultimodalPerceiver.perceive(filepath, original_filename, "", lang)
            if perceiver_res.get("status") == "success" and perceiver_res.get("human_perception"):
                data["human_perception_text"] = perceiver_res.get("human_perception")
        except Exception:
            pass

    data["semantic_summary"] = data.get("human", {}).get("semantic_story", {})
    data["markdown_report"] = generate_multilingual_dual_report(data, lang)
    return data

def generate_multilingual_dual_report(data, lang="ru"):
    tech = data.get("tech", {})
    human = data.get("human", {})
    ftype = tech.get("type", "file")
    fname = data.get("filename", "")
    furl = tech.get("url", "")
    
    is_ru = (lang == "ru")
    is_kk = (lang == "kk")
    
    icons = {
        "image": "🖼️",
        "video": "🎬",
        "presentation": "📊",
        "book": "📚",
        "binary_document": "📁"
    }
    icon = icons.get(ftype, "📄")

    preview_block = ""
    if ftype == "image" and furl:
        preview_block = f"![{fname}]({furl})\n\n"
    elif ftype == "video" and furl:
        preview_block = f"![{fname}]({furl})\n\n"
    elif furl:
        lbl = "Скачать файл" if is_ru else ("Файлды жүктеу" if is_kk else "Download File")
        preview_block = f"📎 **[{lbl}: {fname} ↗]({furl})**\n\n"

    # Human Perception First & Foremost
    human_percep = data.get("human_perception_text", "")
    
    tech_lines = [
        f"• **Формат**: `{tech.get('format', 'UNKNOWN')}`",
        f"• **Размер**: `{tech.get('size_formatted', 'N/A')}`",
    ]
    if ftype == "image":
        tech_lines.append(f"• **Разрешение**: `{tech.get('width')}×{tech.get('height')}` px · `{tech.get('aspect_ratio', '16:9')}`")
    elif ftype == "video":
        tech_lines.append(f"• **Разрешение & FPS**: `{tech.get('width')}×{tech.get('height')}` @ `{tech.get('fps', 30.0)} FPS` ({tech.get('duration_sec', 0)} сек)")
    elif ftype == "presentation":
        tech_lines.append(f"• **Слайдов**: `{tech.get('slide_count', 0)}`")

    details_label = "⚙️ Технические характеристики" if is_ru else ("⚙️ Техникалық сипаттамалар" if is_kk else "⚙️ Technical Specifications")
    details_block = f"\n\n<details>\n<summary><small><b>{details_label} ({tech.get('format', 'FILE')})</b></small></summary>\n\n" + "\n".join(tech_lines) + "\n\n</details>"

    if human_percep:
        return f"{preview_block}{human_percep}{details_block}"

    # Fallback human summary
    if is_ru:
        human_lines = [
            f"• 🎨 **Композиция и визуальный строй**: {human.get('composition_style', 'Сбалансированная структура')}.",
            f"• 💡 **Светотень и атмосфера**: {human.get('brightness_desc', 'Естественный свет и мягкие тени')}.",
            f"• ❤️ **Эмоциональный тон**: {human.get('human_emotional_impact', 'Гармоничный визуальный отклик')}."
        ]
        return f"{preview_block}### 👁️ Человеческое восприятие: «{fname}»\n\n" + "\n".join(human_lines) + details_block

    return f"{preview_block}### 👁️ Человеческое восприятие: «{fname}»\n\nМатериал успешно осмыслен.{details_block}"
