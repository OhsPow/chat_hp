# Setup Checklist (Cloudflare Pages)

## A. GitHub
- [ ] リポジトリをCloudflareと連携
- [ ] `cloudflare_project/` をデフォルト運用ディレクトリとして確定

## B. Cloudflare Pages
- [ ] GitHub連携でPagesプロジェクト作成
- [ ] Build command: なし（静的）
- [ ] Output directory: `.`
- [ ] Production branch: `main`

## C. Cloudflare Access
- [ ] `/admin/*` と `/api/*` を保護
- [ ] 許可メールに管理者アドレスを登録

## D. Worker
- [ ] `/api/*` にWorkerを接続
- [ ] Secret登録: `GITHUB_TOKEN`, `GITHUB_REPO`, `GITHUB_OWNER`, `GITHUB_BRANCH`
- [ ] 管理者メール（`ADMIN_EMAIL`）登録

## E. 動作確認
- [ ] `/admin` でメール認証がかかる
- [ ] 下書き保存できる
- [ ] プレビュー確認できる
- [ ] 公開ボタンで本番JSON更新される
- [ ] GitHub commit が残る
- [ ] Pagesに反映される
