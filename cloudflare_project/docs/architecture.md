# Architecture (Cloudflare Pages 更新UI)

## 1. 構成要素
1. Cloudflare Pages（公開サイト + 管理UI配信）
2. Cloudflare Access（`/admin/*` へのメール認証）
3. Cloudflare Worker（更新API）
4. GitHub Repository（JSONデータ保存 + 履歴）

## 2. ルーティング
- `/` : 公開サイト
- `/admin` : 管理UI（Access保護）
- `/api/*` : Worker API（Access保護 + サーバ側検証）

## 3. データ保存
- `cloudflare_project/content/news.json`
- `cloudflare_project/content/resources.json`
- `cloudflare_project/content/members.json`
- `cloudflare_project/content/drafts/news.json`（下書き用）

## 4. 更新フロー
1. 管理UIで編集
2. 「下書き保存」→ Worker が drafts JSON 更新（GitHub commit）
3. 「確認」→ draft をプレビュー表示
4. 「公開」→ Worker が本番 JSON 反映（GitHub commit）
5. Cloudflare Pages が GitHub 更新を自動デプロイ

## 5. 認証・認可
- Access: 許可メールアドレス 1件（管理者）
- Worker: Accessヘッダ検証（メール一致）
- GitHub token: Worker Secret で保管

## 6. 非機能
- 変更履歴: GitHub commit log
- 可用性: Cloudflare Pages/Workers の標準SLA
- スマホ対応: 管理画面はレスポンシブ（低優先）
