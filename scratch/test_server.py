import urllib.request
import json
import time

def test():
    for attempt in range(10):
        try:
            with urllib.request.urlopen('http://127.0.0.1:5000/trend-spy', timeout=4) as r:
                html = r.read().decode('utf-8')
                print(f"Attempt {attempt+1}: Status {r.status}, HTML length {len(html)}")
                print("Has survey-doc-stamp:", "FORM № TS-2026-VIRAL-INTAKE" in html)
                print("Has radarLockedContainer:", 'id="radarLockedContainer"' in html)
                print("Has 5 themes:", 'id="gridSurveyThemes"' in html)
                print("Has Section 5 charts:", 'id="surveyChartsSection"' in html)
                return True
        except Exception as e:
            print(f"Attempt {attempt+1} failed: {e}")
            time.sleep(1)
    return False

if __name__ == '__main__':
    test()
