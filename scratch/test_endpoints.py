import sys
sys.stdout.reconfigure(encoding='utf-8')
import urllib.request
import json

def test_endpoints():
    base_url = "http://127.0.0.1:5000"

    print("\n--- Testing /api/trends/survey-strategy in 5 languages ---")
    for lang in ['en', 'tr', 'es', 'ru', 'kk']:
        payload = {
            "audience": "company",
            "level": "maximum",
            "share_location": "yes",
            "theme": "ai_tech",
            "niche": "ai_tech",
            "platform": "all",
            "target_lang": lang
        }
        req = urllib.request.Request(
            f"{base_url}/api/trends/survey-strategy",
            data=json.dumps(payload).encode('utf-8'),
            headers={"Content-Type": "application/json"}
        )
        try:
            with urllib.request.urlopen(req, timeout=5) as r:
                res = json.loads(r.read().decode('utf-8'))
                print(f"[{lang.upper()}] Status: {res.get('status')}")
                print(f"  Level Title: {res.get('level_profile', {}).get('title')}")
                print(f"  Niche: {res.get('niche')}")
                print(f"  Audience Label: {res.get('audience_label')}")
                print(f"  Hooks (1): {res.get('hooks', [''])[0][:60]}...")
        except Exception as e:
            print(f"[{lang.upper()}] Error: {e}")

if __name__ == '__main__':
    test_endpoints()
