---
name: Cursor IDE Rules for Workshop Project
overview: Create comprehensive Cursor IDE rules (.cursorrules file) that guide AI assistance when working on this Slidev-based workshop project, covering project context, file organization, coding standards, Slidev conventions, Vue components, and best practices.
todos:
  - id: create-cursorrules-structure
    content: Create .cursorrules file with proper structure and sections
    status: pending
  - id: add-project-context
    content: Add project context, purpose, and PRD reference section
    status: pending
    dependencies:
      - create-cursorrules-structure
  - id: define-file-structure-rules
    content: Define file structure and organization rules
    status: pending
    dependencies:
      - create-cursorrules-structure
  - id: add-slidev-conventions
    content: Add Slidev-specific conventions and syntax rules
    status: pending
    dependencies:
      - create-cursorrules-structure
  - id: add-vue-component-standards
    content: Define Vue component standards and best practices
    status: pending
    dependencies:
      - create-cursorrules-structure
  - id: add-typescript-conventions
    content: Add TypeScript/JavaScript coding conventions
    status: pending
    dependencies:
      - create-cursorrules-structure
  - id: add-markdown-guidelines
    content: Define markdown and slide content guidelines
    status: pending
    dependencies:
      - create-cursorrules-structure
  - id: add-quality-standards
    content: Add code quality, testing, and best practices rules
    status: pending
    dependencies:
      - create-cursorrules-structure
  - id: add-deployment-rules
    content: Add deployment and build configuration rules
    status: pending
    dependencies:
      - create-cursorrules-structure
  - id: add-ai-behavior-rules
    content: Define AI assistant behavior and decision-making guidelines
    status: pending
    dependencies:
      - create-cursorrules-structure
---

# Cursor IDE Rules for AI Rules, Commands, Skills Practice Workshop

## Overview

Create a comprehensive `.cursorrules` file that provides clear guidelines for AI assistance when working on this Slidev-based workshop presentation project. The rules will ensure consistency, quality, and adherence to project standards.

## Implementation Plan

### 1. Project Context Section

- Document project purpose: Slidev-based workshop slides for teaching AI rules, commands, and skills practice
- Reference the PRD location: `docs/PRD.md`
- Specify target audience: Mixed technical audience
- Note technology stack: Slidev v52.11.3, Vue 3.5.26, TypeScript/JavaScript

### 2. File Structure & Organization Rules

- Enforce project directory structure:
- `slides.md` - Main slides file
- `pages/` - Additional slide markdown files
- `components/` - Vue components
- `snippets/` - External code snippets (TypeScript/JavaScript)
- `docs/` - Documentation (PRD.md)
- `public/` - Static assets
- Rules for file naming conventions
- Guidelines for organizing content by workshop modules

### 3. Slidev-Specific Conventions

- Frontmatter structure and required fields
- Slide separator syntax (`---`)
- Theme usage (seriph as primary, default as alternative)
- Layout conventions (two-cols, image-right, center, etc.)
- Transition naming conventions
- Animation directives (v-click, v-motion, v-mark)
- Code block syntax and highlighting
- External code snippet import syntax: `<<< @/snippets/filename.ts#snippet`
- Slide notes format and placement

### 4. Vue Component Standards

- Component structure: `<script setup lang="ts">` with TypeScript
- Props definition using `defineProps`
- Component naming: PascalCase
- File naming: PascalCase.vue
- Component organization in `components/` directory
- Reusability guidelines
- Props typing and documentation
- Component usage examples in slides

### 5. TypeScript/JavaScript Conventions

- Use TypeScript for all new code files
- ES modules (`type: "module"` in package.json)
- Code snippet organization in `snippets/` directory
- Named exports for code snippets
- Snippet region markers: `#region snippet` / `#endregion snippet`
- Type safety requirements
- Modern JavaScript features (async/await, destructuring, etc.)

### 6. Markdown & Slide Content Guidelines

- Slide content organization by modules (6 main modules)
- Heading hierarchy and slide levels
- Code example formatting
- Diagram syntax (Mermaid, PlantUML)
- LaTeX notation support
- Image and media embedding
- Accessibility considerations (alt text, semantic HTML)
- Content clarity and educational focus

### 7. Code Quality & Best Practices

- Code examples must be executable and accurate
- Follow Vue 3 Composition API patterns
- Use UnoCSS for styling (as per Slidev conventions)
- Performance considerations (avoid heavy computations in components)
- Accessibility requirements (keyboard navigation, screen readers)
- Browser compatibility (modern browsers)
- Mobile responsiveness

### 8. Documentation Standards

- Update PRD when making significant changes
- Comment complex code logic
- Document component props and usage
- Include usage examples for custom components
- Maintain README.md with project setup instructions

### 9. Testing & Validation

- Verify slides render correctly
- Test interactive components
- Validate code snippets execute properly
- Check export formats (PDF, PPTX, PNG)
- Ensure build process completes successfully
- Test deployment configurations

### 10. Deployment Considerations

- Maintain both Netlify and Vercel configurations
- Ensure SPA routing works correctly
- Verify build output in `dist/` directory
- Check environment variables if needed
- Validate redirects/rewrites configuration

### 11. Content Creation Guidelines

- Follow workshop module structure from PRD
- Ensure educational clarity
- Include practical examples
- Maintain consistent formatting
- Use progressive disclosure (v-click animations)
- Balance text, code, and visual elements

### 12. AI Assistant Behavior Rules

- Always reference PRD for requirements
- Suggest improvements aligned with project goals
- Maintain consistency with existing code patterns
- Prioritize educational value in content suggestions
- Consider accessibility in all recommendations
- Validate suggestions against Slidev capabilities
- Test suggestions before proposing complex changes

## Deliverables

- Complete `.cursorrules` file in project root
- Comprehensive rules covering all aspects of the project
- Clear, actionable guidelines for AI assistance
- References to project documentation and standards