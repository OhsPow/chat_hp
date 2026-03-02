# sandbox_v2

既存サイト（リポジトリ直下の `*.html`）を**そのまま残したまま**、
更新UI導入を並行開発するための作業領域です。

## 方針
- 既存公開ページは触らない（非破壊）
- `sandbox_v2/` 内だけで管理UI・コンテンツ管理の検証を行う
- 検証完了後に段階的に本体へ反映する

## 現在の実装
- `admin/`: Decap CMS 管理画面
- `content/*.json`: News / 資料 / メンバーの管理データ
- `public/*.html`: `content/*.json` を読み込む表示確認ページ

## ローカル確認
```bash
python3 -m http.server 8000
# 表示確認
# http://localhost:8000/sandbox_v2/public/news.html
# http://localhost:8000/sandbox_v2/public/resources.html
# http://localhost:8000/sandbox_v2/public/members.html
# 管理画面
# http://localhost:8000/sandbox_v2/admin/
```

## GitHub Pages 本番化（Decap完成手順）
1. `docs/decap-github-pages-setup.md` の手順で OAuth broker を用意
2. `sandbox_v2/admin/config.yml` のプレースホルダを実値に置換
3. 置換は次の補助スクリプトでも可能

```bash
python3 scripts/prepare_decap_config.py \
  --repo <user>/<repo> \
  --site-url https://<user>.github.io/<repo> \
  --oauth-base-url https://<oauth-broker-domain>
```

4. `https://<user>.github.io/<repo>/sandbox_v2/admin/` にアクセスし、ログインして編集
