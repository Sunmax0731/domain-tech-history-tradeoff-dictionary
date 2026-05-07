# 領域別技術・歴史・トレードオフ辞書

AdobePlugin、AssetPipeline、VSCodeExtension、IoT、WindowsApp、WebApp、Gameなど各領域で使う技術を辞書的に記載する。歴史、登場背景、関連技術、代替技術、採用時のトレードオフを読み、タグで絞り込みや並び替えができる。

| 項目 | 内容 |
| --- | --- |
| Rank | 86 |
| Domain | Dictionary |
| Idea No. | 1 |
| Repository | domain-tech-history-tradeoff-dictionary |
| 主な公開先 | GitHub Pages / GitHub Release |

## Implementation

- `src/product-profile.mjs`: プロダクト定義。
- `src/core.mjs`: 入力正規化とバッチ評価。
- `src/validators.mjs`: 必須項目と warning 項目の検査。
- `src/review-model.mjs`: QCDS / 手動レビュー向けモデル。
- `src/report.mjs`: Markdown / HTML レポート生成。
- `src/app-adapter.mjs`: static dictionary site + CLI validation core 向けの表示状態を作る。
- `src/cli.mjs`: CLI。
- `public/`: closed alpha preview 用の静的 UI。

## Validation

```powershell
npm test
npm start
```

`npm test` で代表シナリオ、QCDS、docs ZIP、静的UI smoke、文字化けを検証します。

## Strict QCDS Docs

- [Remote benchmark](docs/qcds-remote-benchmark.md)
- [Strict metrics](docs/qcds-strict-metrics.json)
- [Traceability matrix](docs/traceability-matrix.md)
- [Release evidence](docs/release-evidence.json)
