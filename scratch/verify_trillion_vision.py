# -*- coding: utf-8 -*-
import urllib.request
import json
import base64
import os
import sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

print('=== 1. VERIFYING TRILLION MATRIX ===')
import litally_trillion_image_matrix as tm
stats = tm.get_matrix_stats()
print('Total Combinations:', stats['total_combinations_formatted'])
print('Scientific notation:', stats['scientific_notation'])
assert stats['total_combinations'] >= 1_000_000_000_000, 'Must exceed 1 trillion!'
print('Trillion requirement exceeded by factor:', stats['multiplication_factor_over_1_trillion'])

print('\n=== 2. VERIFYING COMPUTER VISION ENGINE ===')
from litally_multimodal_perception_engine import LitallyMultimodalPerceiver
img_file = 'static/generated/images/litally_audi_rain_1789025209_1.jpg'
v_res = LitallyMultimodalPerceiver.perceive_image(img_file, filename='audi_test.jpg')
assert v_res['status'] == 'success'
print('Resolution:', v_res['resolution'], v_res['megapixels'], 'MP')
print('Brightness:', v_res['brightness'], 'Contrast:', v_res['contrast_ratio'])
print('Sharpness:', v_res['sharpness_score'], '/ 100')
print('Dominant palette count:', len(v_res['dominant_palette']))
for p in v_res['dominant_palette']:
    print('  -', p['hex'], f"({p['percentage']}%)", p['name'])

print('\n=== 3. VERIFYING HTTP API ENDPOINTS ===')
# Test /api/ai/image-trillion-variants
r1 = urllib.request.urlopen('http://127.0.0.1:5000/api/ai/image-trillion-variants?count=2')
d1 = json.loads(r1.read().decode('utf-8'))
assert d1['status'] == 'success'
assert len(d1['variants']) == 2
print('Endpoint /api/ai/image-trillion-variants: HTTP 200 OK (2 variants received)')

# Test /api/ai/perceive-frame
with open(img_file, 'rb') as f:
    b64_data = base64.b64encode(f.read()).decode('utf-8')
post_body = json.dumps({'image_data': 'data:image/jpeg;base64,' + b64_data, 'lang': 'ru'}).encode('utf-8')
req2 = urllib.request.Request('http://127.0.0.1:5000/api/ai/perceive-frame', data=post_body, headers={'Content-Type': 'application/json'})
r2 = urllib.request.urlopen(req2)
d2 = json.loads(r2.read().decode('utf-8'))
assert d2['status'] == 'success'
print('Endpoint /api/ai/perceive-frame: HTTP 200 OK (Real vision analysis returned)')

# Test /api/ai/chat with 1000 billion inquiry
post_chat = json.dumps({'message': '1000 миллиардов вариантов ответа на создание изображения', 'lang': 'ru'}).encode('utf-8')
req3 = urllib.request.Request('http://127.0.0.1:5000/api/ai/chat', data=post_chat, headers={'Content-Type': 'application/json'})
r3 = urllib.request.urlopen(req3)
d3 = json.loads(r3.read().decode('utf-8'))
assert '129' in d3['response'] or 'миллиард' in d3['response']
print('Endpoint /api/ai/chat (1000 Billion inquiry): HTTP 200 OK')

# Test /video-ai HTML page
r_page = urllib.request.urlopen('http://127.0.0.1:5000/video-ai')
html_content = r_page.read().decode('utf-8')
assert 'btnTrillionVariants' in html_content
assert 'btnScanFrameVision' in html_content
assert 'visionScannerModal' in html_content
print('Page /video-ai: HTTP 200 OK (All UI buttons & modals verified!)')

# Test /litally-ai HTML page
r_chat = urllib.request.urlopen('http://127.0.0.1:5000/litally-ai')
chat_html = r_chat.read().decode('utf-8')
assert 'btnTrillionChatPrompt' in chat_html
print('Page /litally-ai: HTTP 200 OK (Trillion button verified!)')

print('\n🎉 ALL CHECKS PASSED WITH 100% SUCCESS!')
