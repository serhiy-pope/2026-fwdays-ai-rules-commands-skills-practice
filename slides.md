---
theme: seriph
title: AI Rules, Commands, Skills — Practice Workshop
info: |
  ## AI Rules · Commands · Skills
  A practical workshop deck for building reliable AI-assisted workflows.
transition: fade-out
mdc: true
duration: 60min
background: /images/bg-aurora-light.svg
---

<div class="text-center">

<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/70 backdrop-blur text-sm">
  <span class="i-carbon:checkmark text-lg" aria-hidden="true" />
  <span>Reliable AI workflows</span>
  <span class="opacity-50">·</span>
  <span class="i-carbon:cics-program text-lg" aria-hidden="true" />
  <span>Repeatable commands</span>
  <span class="opacity-50">·</span>
  <span class="i-carbon:pen text-lg" aria-hidden="true" />
  <span>Practice skills</span>
</div>

## AI Rules, Commands, Skills

### Practice workshop (Slidev)

<img
  src="/images/rules-commands-skills-triad.svg"
  alt="A triangular diagram connecting Rules, Commands, and Skills, with short labels explaining each concept."
  class="mx-auto mt-8 w-80 frame p-4"
/>

<div class="mt-10 text-sm opacity-80">
Use <kbd>Space</kbd> / <kbd>→</kbd> to advance · <kbd>Shift</kbd>+<kbd>Space</kbd> / <kbd>←</kbd> to go back
</div>

<div class="mt-6 text-xs opacity-70">
Repo: <code class="text-gray-700">2026-fwdays-ai-rules-commands-skills-practice</code>
</div>

</div>

<!--
- Timing: 60 minutes total (adjust on the fly).
- Framing: We’re building reliability via contracts (rules), repeatable actions (commands), and practice loops (skills).
-->

<style>
:global(.slidev-page),
:global(.slidev-layout),
:global(.slidev) {
  cursor: none !important;
}

.frame {
  border: 1px solid rgba(15, 23, 42, 0.18);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.08);
  backdrop-filter: blur(6px);
}

.frame--subtle {
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0 8px 20px rgba(2, 6, 23, 0.06);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border: 1px solid rgba(15, 23, 42, 0.18);
  border-radius: 999px;
  padding: 0.15rem 0.6rem;
  background: rgba(255, 255, 255, 0.7);
}

.icon {
  display: inline-block;
  vertical-align: -0.2em;
}
</style>

---
layout: two-cols
layoutClass: gap-10
---

## Today’s map

We’ll build a “prompting system” mindset:

- **Rules**: constraints that shape behavior
- **Commands**: repeatable actions you can ask for
- **Skills**: practiced capabilities (with feedback)

:::right::

### Outcomes (by the end)

- Write 3 rules that prevent common failures
- Use a small “command palette” to steer an agent
- Practice a skill loop: attempt → critique → revise

:::

<!--
- Ask the room: “What’s one workflow you want AI to help with?”
-->

---
layout: center
class: text-center
---

## Glossary (fast)

<div class="mt-8 text-left max-w-2xl mx-auto">

- **Rule**: always-on instruction (“must/never/always”)
- **Command**: a callable action (“do X”, often with parameters)
- **Skill**: a repeatable behavior you improve via practice
- **Spec**: a shared contract that reduces ambiguity

</div>

<!--
- Keep these terms consistent; don’t mix “rules” and “commands” casually.
-->

---
level: 2
---

## Table of contents

<div class="frame frame--subtle p-5 max-w-3xl mx-auto">
  <div class="badge mb-4 text-sm">
    <span class="i-carbon:list-boxes icon text-lg" aria-hidden="true" />
    <span>Navigate</span>
  </div>
  <Toc text-sm minDepth="1" maxDepth="2" />
</div>

<!--
- Use TOC for navigation when questions jump around.
-->

---
layout: center
class: text-center
level: 2
background: /images/bg-paper-grid.svg
---

## Module 1 — Rules

### Constraints that prevent failure modes

<!--
- “Rules” are guardrails. They reduce cognitive load and stop predictable mistakes.
-->

---

## What good rules look like

Rules should be:

- **Specific** (not “be helpful”)
- **Testable** (you can tell if it complied)
- **Prioritized** (what wins when rules conflict?)
- **Grounded** (tools/data boundaries are explicit)

<div v-click class="mt-6 frame p-4 text-sm">
Rule template:
<br>
<code>When &lt;context&gt;, you must &lt;behavior&gt;. Never &lt;forbidden&gt;. If uncertain, &lt;fallback&gt;.</code>
</div>

<!--
- Ask: “Which of these is missing from your current prompting?”
-->

---
layout: two-cols
layoutClass: gap-10
---

## Three core rules (starter pack)

- **Scope rule**: stay within provided files/data
- **Uncertainty rule**: ask when ambiguous; don’t guess facts
- **Verification rule**: validate outputs (lint/build/tests when relevant)

<div v-click class="mt-6 text-sm opacity-80">
These three cover most “agent went off the rails” stories.
</div>

:::right::

### Failure modes they prevent

- Hallucinated APIs/paths
- Hidden assumptions
- “Looks right” but broken output

:::

<!--
- Emphasize: rules protect outcomes; they don’t kill creativity.
-->

---

## Rule conflicts: decide a tie-breaker

<div class="text-sm">
Example: “Move fast” vs “Don’t break builds”
</div>

<div v-click class="mt-5">

Recommended priority:

1. **Safety / security**
2. **Correctness (buildable, runnable)**
3. **User intent**
4. **Style / elegance**

</div>

<!--
- Tell a story: “style refactor” that broke deploy.
-->

---

## Exercise: write 3 rules for your workflow

Pick one:

- PR review assistant
- Slide generation / docs writing
- Refactor helper
- Incident debugging partner

<div v-click class="mt-6 frame p-4 text-sm">
Deliverable: 3 rules with a measurable fallback (e.g., “ask a question”, “show options”, “run build”).
</div>

<!--
- 3 minutes solo, then 2 minutes share-out.
-->

---
layout: center
class: text-center
level: 2
background: /images/bg-paper-grid.svg
---

## Module 2 — Commands

### Repeatable actions with parameters

<!--
- “Commands” turn vague intent into structured work.
-->

---

## Command design: small, composable, explicit

- **Name**: verb-first (`summarize`, `diff`, `plan`, `verify`)
- **Inputs**: what the command needs (files, constraints, audience)
- **Output contract**: what “done” looks like
- **Failure behavior**: what happens if missing info

<div v-click class="mt-5 text-sm opacity-80">
Think: a command is a function call, not a wish.
</div>

<!--
- Connect to engineering: APIs win when contracts are clear.
-->

---
layout: two-cols
layoutClass: gap-10
---

## Example: a “slide generator” command

```md
/make-slides
- topic: "Rules, Commands, Skills"
- audience: "mixed technical"
- duration: 60min
- constraints:
  - PRD-driven
  - keep images local
  - include 1 interactive demo
- output: "replace slides.md"
```

:::right::

### Notes

- Make parameters explicit
- Pre-commit constraints
- Declare output target

:::

<!--
- Point out: this repo already encodes constraints via `.cursor/rules/` + PRD.
-->

---

## Code-as-command (reusable snippet)

Import a reusable snippet instead of duplicating it:

<<< @/snippets/external.ts#snippet

<div v-click class="mt-5 text-sm opacity-80">
Rule of thumb: if you copy-paste it twice, it becomes a snippet.
</div>

<!--
- Show where snippets live: `snippets/`.
-->

---

## Command chain: “plan → execute → verify”

```mermaid {scale: 0.9, alt: 'A simple workflow diagram showing a plan, execute, verify loop'}
flowchart LR
  A[Plan] --> B[Execute]
  B --> C[Verify]
  C -->|pass| D[Done]
  C -->|fail| A
```

<!--
- Verification is what makes agentic workflows safe.
-->

---

## Demo: a tiny interactive component in Slidev

Use Vue components inline:

<Counter :count="3" class="mt-6" />

<div v-click class="mt-6 text-sm opacity-80">
Commands often map to UI demos: “increase”, “decrease”, “reset”.
</div>

<!--
- Interactivity breaks lecture fatigue and anchors concepts.
-->

---
layout: center
class: text-center
level: 2
background: /images/bg-paper-grid.svg
---

## Module 3 — Skills

### Practice loops that make you (and the agent) better

<!--
- “Skills” are what you train: writing specs, debugging, summarizing, refactoring.
-->

---

## Skill loop: attempt → critique → revise

<div class="grid grid-cols-3 gap-4 mt-8 text-center">
  <div class="frame frame--subtle p-4" v-click>
    <div class="flex items-center justify-center gap-2 font-bold">
      <span class="i-carbon:play icon text-xl opacity-90" aria-hidden="true" />
      <span>Attempt</span>
    </div>
    <div class="text-sm opacity-80">Do the task with constraints</div>
  </div>
  <div class="frame frame--subtle p-4" v-click>
    <div class="flex items-center justify-center gap-2 font-bold">
      <span class="i-carbon:information icon text-xl opacity-90" aria-hidden="true" />
      <span>Critique</span>
    </div>
    <div class="text-sm opacity-80">Find gaps, risks, assumptions</div>
  </div>
  <div class="frame frame--subtle p-4" v-click>
    <div class="flex items-center justify-center gap-2 font-bold">
      <span class="i-carbon:renew icon text-xl opacity-90" aria-hidden="true" />
      <span>Revise</span>
    </div>
    <div class="text-sm opacity-80">Fix + verify</div>
  </div>
</div>

<!--
- This is how you turn “prompting” into a real capability.
-->

---
src: ./pages/skills-architecture.md
hide: false
---

---

## Skill: writing a crisp spec

Good specs include:

- **Goal**
- **Non-goals**
- **Inputs/outputs**
- **Constraints**
- **Acceptance criteria**

<div v-click class="mt-6 frame p-4 text-sm">
If you can’t write acceptance criteria, you can’t reliably evaluate the model’s output.
</div>

<!--
- Tie back: PRD is the workshop’s spec source of truth.
-->

---

## Skill: asking the right clarifying question

When blocked, ask:

- **Which option do you want?** (A/B choices)
- **What matters more?** (speed vs accuracy vs cost)
- **What’s the success criteria?**

<div v-click class="mt-6 text-sm opacity-80">
Avoid: “Any other details?” — it’s too vague to be helpful.
</div>

<!--
- The best agents ask fewer, better questions.
-->

---

## Skill: verification habits

Pick the right “proof”:

- Docs change → link check / consistency check
- Code change → typecheck/lint/tests/build
- Slides change → `npm run build` to confirm exportability

<!--
- Verification is part of the skill, not an afterthought.
-->

---

## Mini-exercise: rewrite a vague ask into a command + rules

Vague ask:

> “Make these slides better.”

<div v-click class="mt-6 frame p-4 text-sm">
Rewrite as:
<br>
<code>/make-slides</code> + 3 rules + acceptance criteria
</div>

<!--
- 2 minutes. Then share one example from the room.
-->

---
src: ./pages/skills-openai-slide-image.md
hide: false
---

---
level: 2
---

## Best practices (quick hits)

- **Prefer constraints over vibes**
- **Prefer small changes over large refactors**
- **Keep artifacts close to code** (`docs/`, `snippets/`, `components/`)
- **Make failures loud** (build steps, checks, assertions)

<!--
- Reinforce repo norms: PRD-driven, minimize churn.
-->

---
layout: center
class: text-center
background: /images/bg-aurora-light.svg
---

## Wrap-up

### Rules → Commands → Skills

<div class="mt-8 text-sm opacity-80">
Next step: take one workflow this week and write (1) 3 rules, (2) 5 commands, (3) a 20-minute practice loop.
</div>

<!--
- Ask for one concrete commitment: “What will you apply tomorrow?”
-->
