# validate-slides

## Description
Run a content-quality pass across slides and related assets.

## Usage
Run: `/validate-slides`

## Steps
1. Scan `slides.md` and `pages/` for:
   - Broken links or missing images.
   - Missing `alt` text for images.
   - Overly dense slides (suggest split points).
2. Check for consistent Slidev syntax:
   - Slide separators `---`.
   - Frontmatter placement.
   - Snippet imports using `<<< @/snippets/...#snippet`.
3. Ensure demos/components referenced in slides exist in `components/`.
4. Summarize issues and propose fixes.

## Expected Outcome
A list of issues and actionable fixes to improve slide quality.

