# Decap CMS を GitHub Pages で運用する手順（chat_hp）

この手順を完了すると、ブラウザ上で News / 資料 / メンバーを更新できます。

## 0. 前提
- GitHub リポジトリが存在している
- GitHub Pages が有効化済み
- 管理画面は `https://<user>.github.io/<repo>/sandbox_v2/admin/` で公開される

## 1. `sandbox_v2/admin/config.yml` を実値に変更
以下を置き換える:
- `repo: YOUR_GITHUB_USER/YOUR_REPO_NAME`
- `site_url`
- `display_url`
- `base_url`（OAuth broker）

## 2. OAuth broker を用意
Decap CMS の GitHub backend は OAuth broker が必要です。

実装方法（どちらか）:
1. Decap の serverless OAuth を Cloudflare Workers などでデプロイ
2. 既存の OAuth broker サービスを利用

最低限必要な設定:
- GitHub OAuth App 作成
- Authorization callback URL を OAuth broker の指示通りに設定
- OAuth broker 側で `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` を設定

## 3. GitHub OAuth App 設定
GitHub > Settings > Developer settings > OAuth Apps > New OAuth App
- Homepage URL: `https://<user>.github.io/<repo>/`
- Authorization callback URL: OAuth broker が要求する URL

## 4. 管理画面アクセス確認
- `https://<user>.github.io/<repo>/sandbox_v2/admin/` を開く
- GitHub ログイン後に編集画面が開く

## 5. 更新フロー
- 新規/編集後に保存 → Draft
- Review を経て Publish
- 公開後、GitHub Pages へ反映

## 6. つまずきやすい点
- 401/認証失敗: `base_url` / callback URL の不一致
- 保存失敗: `repo` 名・branch 名ミス
- 反映遅延: GitHub Pages のビルド待ち
