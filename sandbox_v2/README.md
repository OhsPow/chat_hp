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

## GitHub Pages での公開（将来）
`/sandbox_v2/admin/` を公開し、GitHub OAuth の設定を行うことで
管理画面として運用できます（`admin/config.yml` の `repo` を実値に設定）。
