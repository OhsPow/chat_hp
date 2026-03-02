#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-8000}"
BASE="http://127.0.0.1:${PORT}"

python3 -m http.server "${PORT}" >/tmp/chat_hp_smoke_http.log 2>&1 &
SERVER_PID=$!
trap 'kill ${SERVER_PID} >/dev/null 2>&1 || true' EXIT
sleep 1

curl -sSf "${BASE}/index.html" >/dev/null
curl -sSf "${BASE}/news.html" >/dev/null
curl -sSf "${BASE}/sandbox_v2/public/news.html" >/dev/null
curl -sSf "${BASE}/sandbox_v2/public/resources.html" >/dev/null
curl -sSf "${BASE}/sandbox_v2/public/members.html" >/dev/null

python3 - <<'PY'
import json
from pathlib import Path

files = [
    Path('sandbox_v2/content/news.json'),
    Path('sandbox_v2/content/resources.json'),
    Path('sandbox_v2/content/members.json'),
]
for p in files:
    data = json.loads(p.read_text(encoding='utf-8'))
    assert isinstance(data.get('items'), list), f'{p} missing items list'

news = json.loads(Path('sandbox_v2/content/news.json').read_text(encoding='utf-8'))['items']
assert any(i.get('status') == 'published' for i in news), 'news.json has no published item'
print('JSON validation passed')
PY

echo "Smoke test passed on ${BASE}"
