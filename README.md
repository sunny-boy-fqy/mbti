# MBTI 人格测试 / MBTI Personality Test

一个可部署到 GitHub Pages 的纯前端 MBTI 测试工具，支持中文与英文界面。
A static MBTI web app for GitHub Pages with both Chinese and English UI.

- 在线体验 / Live Demo: <https://sunny-boy-fqy.github.io/mbti/>
- 英文说明 / English-only README: [README.en.md](./README.en.md)

## 中文说明

### 功能

- 104 道题（4 个维度各 26 题）
- 16 型人格结果与维度比例展示
- 题库浏览与按维度筛选
- 键盘快捷键（`1/A` 选 A，`2/B` 选 B，`←` 上一题）
- 结果分享（Web Share / 复制到剪贴板）
- 中英文界面切换（右上角语言选择）

### 本地运行

1. 克隆仓库
2. 进入项目目录
3. 直接用浏览器打开 `index.html`

```bash
git clone https://github.com/sunny-boy-fqy/mbti.git
cd mbti
```

### 技术栈

- HTML / CSS / JavaScript
- 纯静态部署，无后端依赖

### 题库说明

- 维度：`EI` / `SN` / `TF` / `JP`
- 每题二选一（A/B）
- `reverse` 字段控制 A/B 与维度字母方向的映射
- 计分后生成 4 维倾向与最终类型

### 注意事项

- 测试仅供自我了解参考，不建议作为高风险决策依据。

---

## English

### Features

- 104 questions total (26 per dimension)
- 16 personality type results with dimension percentages
- Question bank browser with dimension filter
- Keyboard shortcuts (`1/A` for A, `2/B` for B, `←` previous)
- Result sharing (Web Share API / clipboard fallback)
- Chinese/English UI toggle (language selector at top-right)

### Run Locally

1. Clone the repository
2. Enter the project folder
3. Open `index.html` directly in a browser

```bash
git clone https://github.com/sunny-boy-fqy/mbti.git
cd mbti
```

### Tech Stack

- HTML / CSS / JavaScript
- Fully static deployment (no backend)

### Question Bank and Scoring

- Dimensions: `EI`, `SN`, `TF`, `JP`
- Binary options (A/B) for each question
- `reverse` controls how A/B maps to dimension poles
- Final type and percentage bars are computed from dimension scores

### Disclaimer

- This test is for personal reference only and should not be used as the sole basis for important life decisions.
