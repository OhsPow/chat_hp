# Worker API Spec (MVP)

## 共通
- Base: `/api`
- Auth: Cloudflare Access 通過済み + 管理者メール一致
- Content-Type: `application/json`

## 1) News 下書き取得
- `GET /api/news/draft`
- Response: `{ "items": [...] }`

## 2) News 下書き保存
- `PUT /api/news/draft`
- Body: `{ "items": [...] }`
- Action: `content/drafts/news.json` を GitHub API 経由で更新

## 3) News 公開データ取得
- `GET /api/news/published`
- Response: `{ "items": [...] }`

## 4) News 公開
- `POST /api/news/publish`
- Body: `{ "commitMessage": "publish news" }`
- Action: draft を `content/news.json` に反映して commit

## 5) 履歴（簡易）
- `GET /api/history?path=cloudflare_project/content/news.json`
- Action: GitHub Commits API をプロキシ

## エラー形式
```json
{ "error": "message" }
```
