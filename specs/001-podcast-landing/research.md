# Phase 0 Research: Podcast Landing Page (HTML/CSS/JS)

## 1. 精選集數資料硬編碼於前端
- **Decision**: 直接於 JS 變數或 HTML 內寫死三筆精選集數資料。
- **Rationale**: 無需外部 JSON、API 或資料庫，完全靜態，符合技術約束。
- **Alternatives considered**: 1. 外部 JSON 檔案（違反規範）；2. 以 JS 物件陣列管理（可行，推薦）。

## 2. 詳細頁為獨立 HTML 檔
- **Decision**: 每個精選集數詳細頁皆為單獨 HTML 檔，落地頁以 <a> 連結或 JS 跳轉。
- **Rationale**: 避免 SPA/彈窗，完全靜態，利於 SEO。
- **Alternatives considered**: 1. 單頁動態切換（違反規範）；2. Modal 彈窗（違反規範）。

## 3. 響應式設計
- **Decision**: 採用 CSS Flexbox/Grid 與 media queries，確保桌面與行動裝置皆可良好顯示。
- **Rationale**: 原生 CSS 響應式最佳實踐，無需第三方框架。
- **Alternatives considered**: 1. Bootstrap/Tailwind（違反規範）；2. 僅桌面版（不符需求）。

## 4. 錯誤處理與預設圖
- **Decision**: JS 檢查資料異常時顯示預設圖與錯誤訊息，圖片載入失敗時用 onerror fallback。
- **Rationale**: 提升 UX，避免空白或壞圖。
- **Alternatives considered**: 1. 忽略異常（不符需求）；2. 伺服器端處理（違反規範）。

## 5. 測試方式
- **Decision**: 僅手動驗證與原生 JS 測試（如 console.log/assert）。
- **Rationale**: 無外部測試框架，維持簡單。
- **Alternatives considered**: 1. Jest/Mocha（違反規範）；2. 完全無測試（不建議）。
