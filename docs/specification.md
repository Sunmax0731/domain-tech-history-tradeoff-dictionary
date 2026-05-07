# 仕様

## プロダクト範囲

- Domain: Dictionary
- Repository: domain-tech-history-tradeoff-dictionary
- 主な公開先: GitHub Pages / GitHub Release
- Surface: static dictionary site + CLI validation core

## 入力データ

必須項目:

- `id`
- `title`
- `domain`
- `history`
- `adoptionContext`
- `tradeoff`

推奨項目:

- `relatedTechnology`

## 判定

- 必須項目不足は `failed`。
- 推奨項目不足、`waiting`、`blocked`、`riskLevel=high` は `warning`。
- エラーも警告もない場合は `passed`。
