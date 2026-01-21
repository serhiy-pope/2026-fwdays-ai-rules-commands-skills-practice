# create-component

## Description
Create a new Vue component in `components/` for use in slides.

## Usage
Run: `/create-component`

## Steps
1. Ask for:
   - Component name (PascalCase).
   - Purpose/behavior.
   - Props (names, types, defaults).
2. Create `components/<Name>.vue` using:
   - `<script setup lang="ts">`
   - `defineProps` with typed props and defaults
3. Use UnoCSS utility attributes for styling (avoid large `<style>` blocks).
4. Add a short usage example snippet for slides (as a comment or in response).
5. Ensure it follows `.cursor/rules/20-vue-components.mdc`.

## Expected Outcome
A new, typed Vue component exists in `components/` and is ready to embed in slides.

