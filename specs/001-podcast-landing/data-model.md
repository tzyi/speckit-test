# Data Model: Podcast Landing Page

## Entity: 精選集數 (Episode)
- id: string (唯一識別)
- title: string (標題)
- description: string (簡介)
- coverImage: string (封面圖路徑)
- detailPage: string (詳細頁 HTML 檔名)

### Example (JS 物件陣列)
```js
const episodes = [
  {
    id: 'ep1',
    title: '科技新知大解密',
    description: '深入剖析最新科技趨勢與幕後故事。',
    coverImage: 'assets/images/ep1.jpg',
    detailPage: 'episode-1.html'
  },
  {
    id: 'ep2',
    title: '創業者的真心話',
    description: '邀請創業家分享心路歷程與失敗經驗。',
    coverImage: 'assets/images/ep2.jpg',
    detailPage: 'episode-2.html'
  },
  {
    id: 'ep3',
    title: '生活美學研究所',
    description: '探索生活美學、設計與品味的日常靈感。',
    coverImage: 'assets/images/ep3.jpg',
    detailPage: 'episode-3.html'
  }
];
```

## Entity: 詳細頁 (Detail Page)
- 由單一 HTML 檔組成，內容靜態呈現（標題、完整介紹、封面圖、返回連結）

## Validation Rules
- 必須有 title、description、coverImage、detailPage 四欄位
- coverImage 路徑失效時顯示預設圖
- detailPage 檔名不存在時導回 index.html 並顯示錯誤
