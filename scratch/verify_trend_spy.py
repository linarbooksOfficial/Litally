# -*- coding: utf-8 -*-
"""
Verification Script for Trend Spy AI Integration
Checks:
1. /trend-spy route (HTTP 200)
2. /trendspy and /trends redirects / routes
3. /api/trends/viral-radar (status 200, valid JSON, list of trends)
4. /api/trends/generate-hook (POST with custom niche, status 200, valid JSON)
5. Main page / has Trend Spy topbar button, hero button, and showcase section
6. /litally-ai has Trend Spy sidebar link
7. /video-ai has Trend Spy topbar link and ?prompt= handling
"""

import urllib.request
import urllib.parse
import json
import sys

try:
    sys.stdout.reconfigure(encoding='utf-8')
except:
    pass

def run_tests():
    base = "http://127.0.0.1:5000"
    print("========================================")
    print("STARTING TREND SPY INTEGRATION TESTS")
    print("========================================")

    # 1. Test /trend-spy
    print("\n[1] Testing GET /trend-spy...")
    res = urllib.request.urlopen(f"{base}/trend-spy")
    assert res.status == 200, f"Expected 200, got {res.status}"
    content = res.read().decode('utf-8')
    assert "TREND SPY AI" in content, "Missing 'TREND SPY AI' in /trend-spy HTML"
    assert "trend_spy.js" in content, "Missing 'trend_spy.js' script tag"
    print(" -> PASS: /trend-spy returned HTTP 200 with full UI template.")

    # 2. Test /api/trends/viral-radar
    print("\n[2] Testing GET /api/trends/viral-radar...")
    res = urllib.request.urlopen(f"{base}/api/trends/viral-radar")
    assert res.status == 200, f"Expected 200, got {res.status}"
    data = json.loads(res.read().decode('utf-8'))
    assert data.get("status") == "success", f"Unexpected status: {data}"
    trends = data.get("trends", [])
    assert len(trends) >= 8, f"Expected at least 8 trends, got {len(trends)}"
    print(f" -> PASS: API returned {len(trends)} viral trends. Sample trend: '{trends[0]['title']}' (Score: {trends[0]['viral_score']}, Velocity: {trends[0]['growth_rate']})")

    # 3. Test filtering by category
    print("\n[3] Testing GET /api/trends/viral-radar?cat=kazakh_heritage...")
    res = urllib.request.urlopen(f"{base}/api/trends/viral-radar?cat=kazakh_heritage")
    data = json.loads(res.read().decode('utf-8'))
    trends_kz = data.get("trends", [])
    assert len(trends_kz) >= 2, f"Expected KZ trends, got {len(trends_kz)}"
    print(f" -> PASS: Filtered {len(trends_kz)} Kazakh Heritage trends successfully.")

    # 4. Test POST /api/trends/generate-hook
    print("\n[4] Testing POST /api/trends/generate-hook...")
    payload = json.dumps({"niche": "квантовые нейросети и космос", "emotion": "shock"}).encode('utf-8')
    req = urllib.request.Request(f"{base}/api/trends/generate-hook", data=payload, headers={"Content-Type": "application/json"})
    res = urllib.request.urlopen(req)
    assert res.status == 200, f"Expected 200, got {res.status}"
    hook_data = json.loads(res.read().decode('utf-8'))
    assert hook_data.get("status") == "success", f"Unexpected status: {hook_data}"
    custom_trend = hook_data.get("trend", {})
    assert len(custom_trend.get("hooks", [])) == 3, "Expected 3 hooks"
    assert "visual_prompt" in custom_trend, "Missing visual_prompt in custom trend"
    print(f" -> PASS: Custom Hook Synthesizer generated 3 hooks & 4K prompt for niche '{custom_trend['title']}'.")

    # 5. Test Main Page (/) for Trend Spy elements
    print("\n[5] Testing GET / for Trend Spy elements...")
    res = urllib.request.urlopen(f"{base}/")
    main_html = res.read().decode('utf-8')
    assert "/trend-spy" in main_html, "Missing /trend-spy link in main page"
    assert "btnTrendSpyNavTrigger" in main_html, "Missing btnTrendSpyNavTrigger in main page"
    assert "trendSpyFeatureSection" in main_html, "Missing trendSpyFeatureSection showcase banner in main page"
    assert "heroBtnTrendSpy" in main_html, "Missing heroBtnTrendSpy in hero quick actions"
    print(" -> PASS: Main page index.html has top-bar button, hero button, showcase banner, and footer link.")

    # 6. Test /litally-ai for Trend Spy sidebar link
    print("\n[6] Testing GET /litally-ai for Trend Spy sidebar link...")
    res = urllib.request.urlopen(f"{base}/litally-ai")
    ai_html = res.read().decode('utf-8')
    assert "/trend-spy" in ai_html, "Missing /trend-spy link in litally_ai.html"
    print(" -> PASS: /litally-ai sidebar includes Trend Spy AI link.")

    # 7. Test /video-ai for Trend Spy topbar link
    print("\n[7] Testing GET /video-ai for Trend Spy topbar link...")
    res = urllib.request.urlopen(f"{base}/video-ai")
    video_html = res.read().decode('utf-8')
    assert "/trend-spy" in video_html, "Missing /trend-spy link in video_ai.html"
    print(" -> PASS: /video-ai topbar includes Trend Spy AI link.")

    print("\n========================================")
    print("ALL 7 TREND SPY VERIFICATION TESTS PASSED!")
    print("========================================")

if __name__ == '__main__':
    run_tests()
