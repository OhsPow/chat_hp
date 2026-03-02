# 更新UI 実装プラン（提案）

## フェーズ1（最優先: News）
1. コンテンツ管理方式を HTML直編集からデータ駆動へ移行
   - `content/news/*.md` などに分離
2. `index.html` / `news.html` をデータ読込ベースに変更
3. 管理画面（`admin/`）を導入し、NewsのCRUDを実現
4. 下書き・公開フローを有効化

## フェーズ2（資料）
1. `content/resources/` を新設
2. PDF/画像アップロード運用を追加
3. `resources.html` をデータ駆動化

## フェーズ3（メンバー）
1. `content/members/` を新設
2. 表示順・公開状態を管理
3. `members.html` をデータ駆動化

## フェーズ4（履歴の見える化）
1. Git履歴をそのまま利用（最低要件）
2. 必要なら `CHANGELOG.md` 自動更新を導入

## 技術候補
- 第一候補: Decap CMS + GitHub Pages
- 代替案: 独自管理画面 + GitHub API（実装負荷大）

## 次ステップ
1. CMS採用可否の確定（Decap CMS）
2. コンテンツスキーマ確定（News/資料/メンバー）
3. 管理画面導入の初期実装（Newsから）
