# create-snippet

## Description
Create a new code snippet in `snippets/` with proper region markers for Slidev imports.

## Usage
Run: `/create-snippet`

## Steps
1. Ask for:
   - Snippet file name (kebab-case).
   - Language (default to TypeScript).
   - Purpose and required functions/exports.
2. Create `snippets/<name>.ts` (or `.js`) with:
   - Named exports.
   - `// #region snippet` and `// #endregion snippet` around the imported section.
3. Provide the Slidev import line:
   - `<<< @/snippets/<name>.ts#snippet`
4. Ensure it follows `.cursor/rules/30-snippets-typescript.mdc`.

## Expected Outcome
A reusable snippet file exists in `snippets/` and can be imported into slides.

