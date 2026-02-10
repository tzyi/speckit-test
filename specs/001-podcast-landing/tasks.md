---
description: "Task list for Podcast Landing Page feature implementation"
---

# Tasks: Podcast Landing Page

**Input**: Design documents from `/specs/001-podcast-landing/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: 僅依需求明確指定時產生測試任務，本專案未要求自動化測試。

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: 可平行執行（不同檔案、無依賴）
- **[Story]**: 任務所屬 user story（如 US1, US2, US3）
- 必須明確標示檔案路徑

---

## Phase 1: Setup (專案初始化)

**Purpose**: 建立靜態網站基本結構，嚴禁任何框架或多餘依賴

- [ ] T001 [P] 建立 public/index.html
- [ ] T002 [P] 建立 public/styles/main.css
- [ ] T003 [P] 建立 scripts/main.js
- [ ] T004 [P] 建立 public/assets/images/default.jpg（預設封面圖）
- [ ] T005 [P] 建立 public/episode-1.html
- [ ] T006 [P] 建立 public/episode-2.html
- [ ] T007 [P] 建立 public/episode-3.html
- [ ] T008 [P] 建立 README.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: 必須先完成的基礎設施

- [ ] T009 [P] 定義 episodes 資料結構於 scripts/main.js
- [ ] T010 [P] 設計 public/styles/main.css 響應式排版基礎

---

## Phase 3: User Story 1 (P1)

**Goal**: 首頁完整顯示三個精選集數（標題、簡介、封面圖）
**Test Criteria**: 於 public/index.html 載入時，三集資訊正確渲染，資料異常時顯示預設圖與錯誤訊息

- [ ] T011 [US1] 於 public/index.html 建立精選集數區塊
- [ ] T012 [US1] 於 scripts/main.js 實作渲染三集資訊邏輯
- [ ] T013 [US1] 於 scripts/main.js 實作資料異常處理（預設圖、錯誤訊息）
- [ ] T014 [US1] 於 public/styles/main.css 設計首頁精選集數樣式

---

## Phase 4: User Story 2 (P2)

**Goal**: 點擊任一精選集數可進入對應詳細頁
**Test Criteria**: 點擊首頁任一集數，能正確跳轉至對應 episode-x.html，若詳細頁不存在則導回首頁並顯示訊息

- [ ] T015 [US2] 於 scripts/main.js 實作點擊跳轉邏輯
- [ ] T016 [US2] 於 public/episode-1.html 呈現完整集數資訊
- [ ] T017 [US2] 於 public/episode-2.html 呈現完整集數資訊
- [ ] T018 [US2] 於 public/episode-3.html 呈現完整集數資訊
- [ ] T019 [US2] 於 scripts/main.js 處理詳細頁不存在時的導回首頁與訊息顯示
- [ ] T020 [US2] 於 public/styles/main.css 設計詳細頁樣式

---

## Phase 5: User Story 3 (P3)

**Goal**: 響應式設計，桌機與行動裝置皆良好顯示
**Test Criteria**: 不同裝置/視窗寬度下，首頁與詳細頁內容皆可閱讀，集數排版自動調整

- [ ] T021 [US3] 於 public/styles/main.css 實作首頁響應式排版
- [ ] T022 [US3] 於 public/styles/main.css 實作詳細頁響應式排版
- [ ] T023 [US3] 於 public/index.html 加入 meta viewport 設定
- [ ] T024 [US3] 於 public/episode-1.html~3.html 加入 meta viewport 設定

---

## Phase 6: Polish & Cross-Cutting

**Purpose**: 細節優化、可用性、可維護性

- [ ] T025 [P] 優化 public/styles/main.css 可讀性與註解
- [ ] T026 [P] 優化 scripts/main.js 可讀性與註解
- [ ] T027 [P] 補充 README.md 使用說明

---

## Dependencies

- US1 → US2, US3 可平行
- US2、US3 完成後可進行 Polish

---

## Parallel Execution Examples

- T002、T003、T004、T005、T006、T007 可同時進行
- US2 詳細頁三檔（T016~T018）可平行
- 響應式樣式（T021、T022）可平行

---

## Implementation Strategy

- 先完成 Phase 1~3（MVP：首頁三集完整顯示）
- 逐步推進詳細頁與響應式設計
- 每個 user story 可獨立驗收

---

**格式驗證**：所有任務皆符合 checklist 格式（checkbox, ID, [P], [US?], file path）
