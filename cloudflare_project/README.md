# cloudflare_project

Cloudflare Pages + Cloudflare Access + Worker API で、
ブラウザから更新できる管理UIを提供する新プロジェクト案です。

## 決定済み方針
- 認証: Cloudflare Access のメール認証
- 公開方式: 公開ボタン方式（下書き→確認→公開）
- データ形式: JSON

## ディレクトリ
- `docs/architecture.md`: 全体構成
- `docs/api-spec.md`: Worker API 仕様（MVP）
- `docs/setup-checklist.md`: 導入チェックリスト
- `content/*.json`: 管理対象データ（news/resources/members）

## MVPスコープ（Phase 1）
- News の下書き保存
- News のプレビュー
- News の公開ボタン
- 公開時に GitHub commit を作成し、Cloudflare Pages が自動反映
