# Welcome to [Slidev](https://github.com/slidevjs/slidev)!

To start the slide show:

- `pnpm install`
- `pnpm dev`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).

## Documentation

- [Product Requirements Document (PRD)](./docs/PRD.md) - Comprehensive project requirements and specifications

## Cursor Commands

Commands are defined in `.cursor/commands/` and can be invoked from Cursor with `/command-name`.

- `dev` - Start Slidev dev server
- `build` - Build production output
- `export` - Export slides (PDF/PPTX/PNG)
- `create-slide` - Create a new slide file in `pages/`
- `create-component` - Create a new Vue component in `components/`
- `create-snippet` - Create a new code snippet in `snippets/`
- `open-prd` - Open and summarize `docs/PRD.md`
- `validate-slides` - Run a content-quality pass for slides

## Cursor Skills

This repo includes a Cursor **Skill** that generates an image via the OpenAI API and creates a Slidev slide that embeds it:

- **Skill**: `.cursor/skills/openai-slide-image/`
- **Script**: `scripts/create-slide-with-openai-image.mjs`

### Setup

Set `OPENAI_API_KEY` in your environment (do not commit it).

### Run

```bash
node scripts/create-slide-with-openai-image.mjs --title "Your slide title" --prompt "Describe the image you want"
```
