# Podcast Landing Page Quickstart

## 1. 專案結構

```
public/
├── index.html         # 播客落地頁
├── episode-1.html     # 精選集數 1 詳細頁
├── episode-2.html     # 精選集數 2 詳細頁
├── episode-3.html     # 精選集數 3 詳細頁
├── assets/
│   └── images/        # 封面圖與預設圖
└── styles/
    └── main.css       # 全站樣式
scripts/
└── main.js            # 落地頁 JS
```

## 2. 開發步驟

1. 於 `public/index.html` 實作落地頁，JS 內硬編碼三筆精選集數資料。
2. 每個詳細頁（`episode-1.html` 等）為獨立 HTML，內容靜態呈現。
3. `main.js` 處理資料渲染、點擊跳轉、錯誤處理。
4. `main.css` 實作響應式排版與預設樣式。
5. 圖片放於 `assets/images/`，預設圖命名為 `default.jpg`。

## 3. 驗證方式

- 手動於瀏覽器開啟 index.html，確認三集資訊正確顯示。
- 點擊任一集數，確認能正確跳轉至詳細頁。
- 測試封面圖失效、詳細頁不存在等異常情境。
- 調整瀏覽器尺寸，驗證響應式設計。

## 4. 注意事項

- 嚴禁引入任何第三方 JS/CSS 框架。
- 僅允許原生 HTML、CSS、JS。
- 不可有任何後端程式或 API 呼叫。
