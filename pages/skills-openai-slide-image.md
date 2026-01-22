---
layout: two-cols
layoutClass: gap-10
background: /images/bg-paper-grid.svg
---

# One generated image (local asset)

This deck includes **one generated image** to illustrate the core triad:

- **Rules**: constraints
- **Commands**: actions
- **Skills**: practice loops

<div class="mt-6 text-sm opacity-80 frame frame--subtle p-4">
This image is stored locally under <code>public/images/</code> to keep the deck reliable offline.
</div>

:::right::

<img
  src="/images/rules-commands-skills-triad.svg"
  alt="A triangular diagram connecting Rules, Commands, and Skills, with short labels explaining each concept."
  class="w-full frame p-3"
/>

:::

<!--
Speaker notes:
- If you want an AI-generated PNG instead, you can use the script:
  - `node scripts/create-slide-with-openai-image.mjs --title "Rules, Commands, Skills" --prompt "A clean minimal diagram showing Rules, Commands, Skills..." `
- Then replace the <img> `src` with the generated `/images/<file>.png`.
-->

