"""
Litally Localization Synchronizer
---------------------------------
Automatically synchronizes translations from master `locales/en.json`
to all target languages (`ru`, `kk`, `zh`, `es`, `de`, `fr`, `ar`, `ja`, `pt`).

Usage:
    python sync_locales.py
"""

import os
import json
import urllib.request
import urllib.parse
import time

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
LOCALES_DIR = os.path.join(BASE_DIR, 'locales')
MASTER_FILE = os.path.join(LOCALES_DIR, 'en.json')

TARGET_LANGS = {
    'ru': 'ru',
    'kk': 'kk',
    'zh': 'zh-CN',
    'es': 'es',
    'de': 'de',
    'fr': 'fr',
    'ar': 'ar',
    'ja': 'ja',
    'pt': 'pt'
}

def translate_text(text: str, target_lang: str) -> str:
    """Translates text from English using Google Translate free API (standard library)."""
    if not text or not isinstance(text, str) or text.strip() == "":
        return text
    
    # Do not translate simple identifiers, URLs or symbols
    if text.startswith("http://") or text.startswith("https://") or text.startswith("#"):
        return text

    url = (
        "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl="
        + urllib.parse.quote(target_lang)
        + "&dt=t&q="
        + urllib.parse.quote(text)
    )
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            result = json.loads(response.read().decode("utf-8"))
            translated = "".join([part[0] for part in result[0] if part[0]])
            return translated
    except Exception as e:
        print(f"  [!] Translation failed for '{text[:30]}...': {e}")
        return text

def sync_dict(master: dict, target: dict, target_lang_code: str, path: str = "") -> bool:
    """Recursively syncs keys from master to target dictionary."""
    changed = False
    for k, v in master.items():
        curr_path = f"{path}.{k}" if path else k
        if k not in target or target[k] is None or target[k] == "":
            if isinstance(v, dict):
                target[k] = {}
                sync_dict(v, target[k], target_lang_code, curr_path)
                changed = True
            else:
                print(f"  [+] Translating missing key: {curr_path}")
                target[k] = translate_text(v, target_lang_code)
                time.sleep(0.1)  # friendly rate limit
                changed = True
        else:
            if isinstance(v, dict) and isinstance(target[k], dict):
                if sync_dict(v, target[k], target_lang_code, curr_path):
                    changed = True
    return changed

def main():
    if not os.path.exists(MASTER_FILE):
        print(f"[Error] Master file not found: {MASTER_FILE}")
        return

    with open(MASTER_FILE, 'r', encoding='utf-8') as f:
        master_data = json.load(f)

    print("=" * 60)
    print("Litally Localization Sync: Master (en.json)")
    print(f"Scanning target languages: {list(TARGET_LANGS.keys())}")
    print("=" * 60)

    for lang_code, api_code in TARGET_LANGS.items():
        file_path = os.path.join(LOCALES_DIR, f"{lang_code}.json")
        target_data = {}
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read().strip()
                    if content:
                        target_data = json.loads(content)
            except Exception as e:
                print(f"[!] Error reading {lang_code}.json: {e}. Rebuilding...")

        print(f"\nChecking [{lang_code.upper()}] ({file_path})...")
        changed = sync_dict(master_data, target_data, api_code)

        if changed or not os.path.exists(file_path):
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(target_data, f, ensure_ascii=False, indent=2)
            print(f"  [OK] Saved updated {lang_code}.json")
        else:
            print(f"  [OK] Up-to-date. No changes needed.")

    print("\n" + "=" * 60)
    print("✨ Sync completed successfully for all 10 languages!")
    print("=" * 60)

if __name__ == "__main__":
    main()
