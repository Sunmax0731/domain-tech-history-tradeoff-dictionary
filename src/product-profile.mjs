export const productProfile = {
  "repository": "domain-tech-history-tradeoff-dictionary",
  "title": "領域別技術・歴史・トレードオフ辞書",
  "domain": "Dictionary",
  "hostApp": null,
  "rank": 86,
  "tier": "P3",
  "ideaNo": 1,
  "overview": "AdobePlugin、AssetPipeline、VSCodeExtension、IoT、WindowsApp、WebApp、Gameなど各領域で使う技術を辞書的に記載する。歴史、登場背景、関連技術、代替技術、採用時のトレードオフを読み、タグで絞り込みや並び替えができる。",
  "problem": "技術名だけを調べても、なぜ使われるのか、何と比較すべきか、どの領域で重要かが分かりにくい。",
  "differentiation": "アイデア棚卸しの領域分類と連動し、技術の意味だけでなく採用判断と関連領域まで辞書として引ける。",
  "publish": "GitHub Pages / GitHub Release",
  "surface": "static dictionary site + CLI validation core",
  "entity": "technology dictionary entry",
  "requiredFields": [
    "id",
    "title",
    "domain",
    "history",
    "adoptionContext",
    "tradeoff"
  ],
  "warningField": "relatedTechnology",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/listing-delivery-asset-checklist",
    "Sunmax0731/codex-remote-android",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber"
  ]
};
