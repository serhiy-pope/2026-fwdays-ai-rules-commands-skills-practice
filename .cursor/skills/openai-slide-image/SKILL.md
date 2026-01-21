---
name: openai-slide-image
description: "Generate an image via OpenAI API and create a Slidev slide that embeds it."
---

## Goal

Create a Slidev slide with an **AI-generated image**, using the **OpenAI Images API**, and save assets in the repo in the right places.

## Requirements

- **No secrets in repo**: use `OPENAI_API_KEY` via environment variable.
- **Output paths**:
  - Images go to `public/images/`
  - Slide goes to `pages/`
  - Slide references image via an absolute public path like `/images/<file>.png`

## Inputs to collect

- **Slide title**
- **Slide bullets/content** (optional; can be a placeholder)
- **Image prompt** (what to generate)

## Steps

1. Ensure `OPENAI_API_KEY` is set in the environment.
2. Run the generator script:

```bash
node scripts/create-slide-with-openai-image.mjs --title "Your slide title" --prompt "Describe the image you want"
```

3. Add the generated slide to `slides.md` by inserting:

```md
---
src: ./pages/<generated-file>.md
---
```

## Expected outcome

- A new image file exists under `public/images/`.
- A new slide markdown file exists under `pages/` referencing that image.
- The slide renders in Slidev once included from `slides.md`.

