# Testing

## Smoke test (ローカル)

```bash
./scripts/smoke_test.sh
```

実行内容:
- ローカルHTTPサーバ起動
- 主要ページのHTTP 200確認
  - `/index.html`
  - `/news.html`
  - `/sandbox_v2/public/news.html`
  - `/sandbox_v2/public/resources.html`
  - `/sandbox_v2/public/members.html`
- `sandbox_v2/content/*.json` の構文・必須構造チェック
