# create-slide

## Description
Create a new Slidev slide file under `pages/` with standard structure and add it to `slides.md`.

## Usage
Run: `/create-slide`

## Steps
1. Ask for:
   - Slide file name (kebab-case).
   - Slide title.
   - Optional layout (e.g., `center`, `two-cols`, `image-right`).
   - Module/section placement (where to insert in `slides.md`).
2. Create `pages/<name>.md` with:
   - Optional frontmatter (layout/transition as needed).
   - A single slide scaffold:
     - `# <Title>`
     - Placeholder bullets or structure.
     - Optional notes in the last HTML comment block.
3. Insert a `src: ./pages/<name>.md` block in `slides.md` at the requested location.
4. Ensure the slide follows `.cursor/rules/10-slidev-slides.mdc`.

## Expected Outcome
A new slide file exists in `pages/`, and `slides.md` includes it.

