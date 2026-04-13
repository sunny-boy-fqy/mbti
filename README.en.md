# MBTI Personality Test

A static MBTI web app that can be deployed to GitHub Pages, with bilingual (Chinese/English) interface support.

- Live Demo: <https://sunny-boy-fqy.github.io/mbti/>
- Chinese + bilingual README: [README.md](./README.md)

## Features

- 104 questions total (26 per MBTI dimension)
- 16 type result display with dimension percentage bars
- Question bank view with dimension filter
- Keyboard shortcuts (`1/A` select A, `2/B` select B, `←` previous question)
- Share result support (Web Share API + clipboard fallback)
- Language switch between Chinese and English (top-right selector)

## Local Run

```bash
git clone https://github.com/sunny-boy-fqy/mbti.git
cd mbti
```

Open `index.html` directly in your browser.

## Stack

- HTML
- CSS
- JavaScript
- Fully static, no backend required

## Project Structure

- `index.html`: page structure and app entry
- `styles.css`: styling
- `questions.js`: Chinese question bank + Chinese type descriptions
- `i18n.js`: bilingual UI text + English question bank + English type descriptions
- `app.js`: test flow, scoring, and language switching
- `README.md` / `README.en.md`: documentation
- `AI_PROMPT_TEMPLATE.md`: optional prompt template for generating new questions
- `package.json`: repository metadata (optional)

## Scoring Notes

- Dimensions: `EI`, `SN`, `TF`, `JP`
- Each question has two options (A/B)
- `reverse` determines whether option A maps to the first or second letter in a dimension
- Dimension scores are converted into percentages to produce the final type result

## Disclaimer

This MBTI test is for personal reference only and should not be treated as a sole source for important decisions.
