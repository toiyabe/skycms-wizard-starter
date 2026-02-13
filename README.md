# SkyCMS • Concept‑B Static Cloud Background (with Subtle Veil)

This package includes a ready‑to‑use static background theme that uses **your cloud image** plus a top‑to‑bottom transparency fade and a **subtle white veil** (ideal behind glass UI).

## What’s inside

- `index.html` — a minimal demo page using the theme
- `theme/scss/…` — SCSS tokens, mixins, and utilities
- `theme/css/sky-hero.css` — precompiled CSS (use immediately)

> **Important:** Add **your** cloud image to `img/sky-hero.webp` (create the folder if needed). You can keep it as `.jpg` and update the CSS/SCSS path accordingly.

## How to run quickly

1. Create a folder `img/` next to `index.html` and place your image as `img/sky-hero.webp`.
2. Open `index.html` in your browser.

## Using the precompiled CSS in your app

```html
<link rel="stylesheet" href="/theme/css/sky-hero.css" />
<body class="sky-hero-bg">
  <!-- your wizard content -->
</body>
```

## SCSS tokens (edit to re-theme)
- Image path: `$sky-hero-image-path`
- Fade overlay: `$sky-fade-stops`
- Veil strength: `$sky-veil-opacity`
- Attachment: `$sky-background-attachment` (`fixed` | `scroll`)

### Build SCSS → CSS (optional)
```bash
sass theme/scss/sky-hero.scss theme/css/sky-hero.css --style=compressed --no-source-map
```

## Notes
- If iOS scrolling feels janky with `background-attachment: fixed`, change the token to `scroll`.
- For a *cooler* tint overall, you can change the fade color from white to a light blue (e.g., `rgba(234,244,255,0.25)`).
