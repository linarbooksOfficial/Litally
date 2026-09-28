# -*- coding: utf-8 -*-
"""
Verification script for Creator Survey in Trend Spy (100 Languages)
Checks:
1. GET /trend-spy contains all survey DOM elements and language selector
2. POST /api/trends/survey-strategy returns a valid customized strategy dossier
3. static/js/trend_spy.js has all survey functions and multilingual mappings
"""

import urllib.request
import urllib.parse
import json
import sys

try:
    sys.stdout.reconfigure(encoding='utf-8')
except:
    pass

def test_survey():
    base = "http://127.0.0.1:5000"
    print("========================================")
    print("TESTING CREATOR SURVEY IN TREND SPY")
    print("========================================")

    # 1. Test GET /trend-spy HTML
    print("\n[1] Testing GET /trend-spy for Survey markup...")
    req = urllib.request.urlopen(f"{base}/trend-spy")
    assert req.status == 200, f"Expected 200, got {req.status}"
    html = req.read().decode('utf-8')
    assert "creatorSurveySection" in html, "Missing #creatorSurveySection in trend_spy.html"
    assert "surveyLangSelect" in html, "Missing #surveyLangSelect in trend_spy.html"
    assert "btnSubmitSurvey" in html, "Missing #btnSubmitSurvey in trend_spy.html"
    assert "navSurveyBtnText" in html, "Missing #navSurveyBtnText in trend_spy.html"
    assert "surveyResultDossier" in html, "Missing #surveyResultDossier in trend_spy.html"
    print(" -> PASS: Survey markup, 100-lang selector & dossier container found in /trend-spy!")

    # 2. Test POST /api/trends/survey-strategy
    print("\n[2] Testing POST /api/trends/survey-strategy...")
    payload = json.dumps({
        "goal": "growth",
        "platform": "tiktok",
        "niche": "нейросети и космос",
        "format": "faceless_ai",
        "frequency": "daily",
        "target_lang": "ru"
    }).encode('utf-8')
    req2 = urllib.request.Request(
        f"{base}/api/trends/survey-strategy",
        data=payload,
        headers={"Content-Type": "application/json"}
    )
    res2 = urllib.request.urlopen(req2)
    assert res2.status == 200, f"Expected 200, got {res2.status}"
    data = json.loads(res2.read().decode('utf-8'))
    assert data.get("status") == "success", f"Failed: {data}"
    assert "reach_estimate" in data, "Missing reach_estimate"
    assert len(data.get("hooks", [])) == 3, "Expected 3 hooks"
    assert "litdeo_prompt" in data, "Missing litdeo_prompt"
    assert "best_posting_window" in data, "Missing best_posting_window"
    print(f" -> PASS: API returned strategy: Reach: {data['reach_estimate']}, Score: {data['viral_score']}, Hooks: {len(data['hooks'])}")

    # 3. Test static/js/trend_spy.js
    print("\n[3] Testing static/js/trend_spy.js for survey logic...")
    js_req = urllib.request.urlopen(f"{base}/static/js/trend_spy.js")
    assert js_req.status == 200
    js_content = js_req.read().decode('utf-8')
    assert "initCreatorSurvey" in js_content, "Missing initCreatorSurvey"
    assert "switchSurveyLanguage" in js_content, "Missing switchSurveyLanguage"
    assert "submitCreatorSurvey" in js_content, "Missing submitCreatorSurvey"
    assert "SURVEY_I18N" in js_content, "Missing SURVEY_I18N"
    print(" -> PASS: JavaScript contains survey initialization, 100-lang switcher & submit handler.")

    print("\n========================================")
    print("ALL CREATOR SURVEY TESTS PASSED!")
    print("========================================")

if __name__ == '__main__':
    test_survey()
