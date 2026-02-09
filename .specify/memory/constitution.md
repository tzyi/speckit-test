
<!--
Sync Impact Report
- Version change: (none) → 1.0.0
- Modified principles: 全部重寫
- Added sections: Governance
- Removed sections: 無
- Templates requiring updates: plan-template.md ✅, spec-template.md ✅, tasks-template.md ✅
- Follow-up TODOs: RATIFICATION_DATE 需補充
-->

# Minimal Static WebApp Constitution

## Core Principles


### I. 靜態部署優先
所有功能必須可於靜態主機（如 GitHub Pages、Netlify）直接部署，嚴禁依賴伺服器端運算。
**Rationale**: 保證可攜性、易於維護與低運維成本。


### II. 依賴最小化
僅允許使用原生 HTML、CSS、JavaScript。除非有明確理由，嚴禁引入第三方框架或套件。
**Rationale**: 降低複雜度、減少安全風險、提升載入效能。


### III. 測試可驗證
所有互動功能必須可用手動或自動化方式驗證（如瀏覽器開發者工具、簡單 JS 測試）。
**Rationale**: 保證功能正確性，便於日後維護。


### IV. 文件簡明
每個功能或頁面必須有簡要說明（可為註解或單一 markdown），描述用途與操作方式。
**Rationale**: 降低新進人員理解成本。


### V. 版本與變更管理
所有重大變更必須記錄於 changelog 或 commit message，並遵循 MAJOR.MINOR.PATCH 版本規則。
**Rationale**: 便於追蹤歷史與回溯。


## 技術與安全約束

- 僅允許 HTML、CSS、原生 JS，嚴禁 Node.js、PHP、Python 等後端技術。
- 不得儲存敏感資料於前端（如密碼、金鑰）。
- 必須考慮跨瀏覽器相容性。

## 開發流程與治理

- 任何原則修訂需經專案成員共識，並於憲章記錄。
- 憲章版本號須依語意化規則調整。
- 每次修訂須記錄 LAST_AMENDED_DATE。
- RATIFICATION_DATE: TODO(請補充原始通過日期)
- LAST_AMENDED_DATE: 2026-02-10
- CONSTITUTION_VERSION: 1.0.0

## [SECTION_3_NAME]
<!-- Example: Development Workflow, Review Process, Quality Gates, etc. -->

[SECTION_3_CONTENT]
<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

[GOVERNANCE_RULES]
<!-- Example: All PRs/reviews must verify compliance; Complexity must be justified; Use [GUIDANCE_FILE] for runtime development guidance -->

**Version**: [CONSTITUTION_VERSION] | **Ratified**: [RATIFICATION_DATE] | **Last Amended**: [LAST_AMENDED_DATE]
<!-- Example: Version: 2.1.1 | Ratified: 2025-06-13 | Last Amended: 2025-07-16 -->
