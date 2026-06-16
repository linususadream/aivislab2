# Learning.md — AivisLab Web Project

在工作過程中學到的經驗、修正、偏好、踩雷紀錄。
每次 session 結束前，若有新發現必須補充在此。

---

<!-- 格式：
## YYYY-MM-DD — 主題
**類型：** 偏好 / 踩雷 / 修正 / 限制
**情境：** 發生什麼事
**規則：** 下次應該怎麼做
-->

## 2026-06-11 — PDF 對照內容增刪流程

**類型：** 流程

**情境：** 用戶提供 PDF 投資簡報，要求先刪除網頁中 PDF 沒有的內容，再新增 PDF 有但網頁沒有的內容。

**規則：**
1. 刪除時：逐頁掃描 PDF，列出所有 section，與網頁 section IDs 一對一比對，整段刪除（HTML + CSS + JS 全部清掉）。
2. 新增時：先確認 PDF 每頁的核心資訊類型（流程圖、定價表、市場數據等），再對應插入最合適的現有 section 內。
3. HTML 先完成後，CSS 必須同一 session 內補完——否則 context 壓縮後 pending CSS 狀態容易遺失。
4. Responsive breakpoints 必須一併加上，不能只寫桌面版 CSS。

---

## 2026-06-11 — 大量刪除 JS 時注意全域變數殘留

**類型：** 踩雷

**情境：** 刪除 `#demo` 和 `#traction` section 時，相關 JS（`animateCounter`、`_demoCart` 等）也必須一起刪，否則瀏覽器 console 會有 undefined reference 錯誤。

**規則：** 刪除 HTML section 時，同步搜尋 `<script>` 區塊內所有對應函式/變數名稱，一併刪除。

---

## 2026-06-11 — Hero stats 與已刪 section 的交叉依賴

**類型：** 踩雷

**情境：** Hero stats 中有一個 `$3.75M Fundraising Target` 指向 `#fundraising`，但該 section 被刪除後 stat 變成孤立文字，語意失效。

**規則：** 刪除 section 後，主動搜尋頁面所有含該 section ID 的 `href`、stat、或 cross-reference，一併處理。

---

## 2026-06-11 — `#hero` overflow:hidden 會裁掉 full-bleed CSS

**類型：** 踩雷

**情境：** 想在 hero 內做全寬白色 bar，用 `width:100vw; margin: 0 -50vw` 的 full-bleed 技巧，結果被 `#hero { overflow:hidden }` 完全裁掉。

**規則：** `#hero` 有 `overflow:hidden`。需要全寬元素時，必須把該元素移出受限的容器（e.g., 移出 `.hero-content`），成為 `#hero` 的直接子元素，再配合 `flex-direction:column` 讓版面重新排列。

---

## 2026-06-11 — dist/ 內的圖片路徑必須相對於 dist/

**類型：** 踩雷

**情境：** `dist/index.html` 引用 `../bird-logo.png`，本機可運作（上層目錄有檔案），但遠端只部署 `dist/`，上層不存在，圖片 404。

**規則：** `dist/` 是部署根目錄，所有圖片路徑必須是 `bird-logo.png`（相對於 `dist/`），絕不可用 `../`。新增圖片前先確認檔案已放進 `dist/`。

---

## 2026-06-11 — PowerShell 批次 HTML 插入後要驗證數量

**類型：** 流程

**情境：** 用 PowerShell regex 在所有 `.section-label` 前插入 logo，第一次因為移除舊 div 的 regex 沒有 match 成功，導致每個 section 有兩個 logo（舊的外部 + 新的內部）。

**規則：**
1. 批次插入前先執行「全部移除」步驟，並用 `([regex]::Matches(...)).Count` 驗證剩餘數量為 0。
2. 插入後同樣驗證數量是否等於預期 section 數（本專案為 14）。
3. 移除 regex 要加 `\s*` 在前面以 match 任意縮排。
