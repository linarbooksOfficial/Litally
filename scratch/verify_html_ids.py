with open('templates/trend_spy.html', 'r', encoding='utf-8') as f:
    h = f.read()

ids = [
    'lblDocStamp', 'lblDocClassification', 'lblDocStatus', 'navSurveyBtnText',
    'surveyMainTitle', 'surveyBadgeLang', 'surveySubtitle', 'surveyLangSelectLabel',
    'btnSurveyAudio', 'surveyAudioLabel', 'surveyAudioIcon', 'audioEqualizerBars',
    'txtSurveyToggleMin', 'surveyQ1Title', 'optAudPersonal', 'subAudPersonal',
    'optAudCompany', 'subAudCompany', 'optAudLeaders', 'subAudLeaders',
    'optAudOther', 'subAudOther', 'surveyCustomAudienceInput',
    'surveyQ2Title', 'surveyQ2Subtitle', 'lvlTitleZero', 'lvlTitleMaximum',
    'surveyQ3Title', 'optLocYes', 'subLocYes', 'optLocNo', 'subLocNo',
    'stepThemesTitle', 'stepThemesSubtitle', 'optThemeAi', 'optThemeBiz',
    'optThemeHeritage', 'optThemeLux', 'optThemeCinema', 'surveyCustomNicheInput',
    'surveyQ5Title', 'surveyQ5Subtitle', 'lblChartCurveTitle', 'valChartFeatures',
    'svgCurveChart', 'lblChartAudienceTitle', 'valChartMultiplier', 'svgAudienceChart',
    'lblChartDensityTitle', 'valChartDensity', 'svgDensityChart',
    'lblChartReachTitle', 'valChartReach', 'svgReachChart',
    'radarLockedContainer', 'radarLockOverlay', 'radarLockIcon', 'lockTitle', 'lockDesc', 'lockBtnText',
    'btnSubmitSurvey', 'txtBtnSubmitSurvey', 'surveyResultDossier'
]

missing = [i for i in ids if f'id="{i}"' not in h and f"id='{i}'" not in h]
print('Missing IDs count:', len(missing))
if missing:
    print('Missing IDs:', missing)
else:
    print('ALL REQUIRED IDS ARE PRESENT AND 100% MATCHED!')
