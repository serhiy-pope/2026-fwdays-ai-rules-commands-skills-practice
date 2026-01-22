---
theme: seriph
title: AI Rules, Commands, Skills — Practice Workshop
info: |
  ## AI Rules · Commands · Skills
  A practical workshop deck for building reliable AI-assisted workflows.
transition: none
mdc: true
duration: 60min
background: /images/bg-aurora-light.svg
---

<div class="text-center">

<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/70 backdrop-blur text-sm text-slate-800">
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
.slidev-page,
.slidev-layout,
.slidev {
  cursor: none !important;
}

.slidev-layout {
  position: relative;
}

.slidev-layout::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.7;
  background:
    radial-gradient(1200px 700px at 15% 15%, rgba(99, 102, 241, 0.16), transparent 55%),
    radial-gradient(900px 600px at 85% 25%, rgba(16, 185, 129, 0.14), transparent 55%),
    radial-gradient(800px 600px at 70% 85%, rgba(236, 72, 153, 0.12), transparent 55%),
    url('/images/bg-paper-grid.svg');
  background-size: cover, cover, cover, 900px auto;
  background-position: center, center, center, center;
}

.slidev-layout > * {
  position: relative;
  z-index: 1;
}

.slidev-layout h2 {
  letter-spacing: -0.02em;
}

.slidev-layout h2 {
  background: linear-gradient(90deg, rgba(30, 64, 175, 0.95), rgba(79, 70, 229, 0.95), rgba(16, 185, 129, 0.9));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.slidev-layout h3 {
  letter-spacing: -0.01em;
  color: rgba(15, 23, 42, 0.92);
}

.slidev-layout ul > li {
  margin: 0.35rem 0;
}

.slidev-layout blockquote {
  border-left: 4px solid rgba(99, 102, 241, 0.65);
  padding-left: 0.9rem;
  color: rgba(15, 23, 42, 0.88);
}

.slidev-layout kbd {
  border: 1px solid rgba(15, 23, 42, 0.18);
  border-bottom-width: 2px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.75);
  padding: 0.15rem 0.35rem;
}

.slidev-layout :not(pre) > code {
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.66);
  padding: 0.12rem 0.35rem;
}

.section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.85rem;
  opacity: 0.9;
}

.section-kicker .dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.9), rgba(16, 185, 129, 0.85));
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

<div class="section-kicker mb-3">
  <span class="dot" aria-hidden="true" />
  <span>Orientation</span>
</div>

<div class="frame frame--subtle p-5">
  <div class="badge mb-3 text-sm">
    <span class="i-carbon:map icon text-lg" aria-hidden="true" />
    <span>We’ll build a “prompting system” mindset</span>
  </div>

  <ul>
    <li><b>Rules</b>: constraints that shape behavior</li>
    <li><b>Commands</b>: repeatable actions you can ask for</li>
    <li><b>Skills</b>: practiced capabilities (with feedback)</li>
  </ul>
</div>

:::right::

### Outcomes (by the end)

<div class="frame frame--subtle p-5">
  <div class="badge mb-3 text-sm">
    <span class="i-carbon:checkmark-outline icon text-lg" aria-hidden="true" />
    <span>Outcomes</span>
  </div>
  <ul>
    <li>Write 3 rules that prevent common failures</li>
    <li>Use a small “command palette” to steer an agent</li>
    <li>Practice a skill loop: attempt → critique → revise</li>
  </ul>
</div>

:::

<!--
- Ask the room: “What’s one workflow you want AI to help with?”
-->

---
layout: center
class: text-center
---

## Glossary (fast)

<div class="mt-8 text-left max-w-2xl mx-auto frame p-6">
  <div class="badge mb-4 text-sm">
    <span class="i-carbon:bookmark icon text-lg" aria-hidden="true" />
    <span>Terms we’ll reuse</span>
  </div>
  <ul>
    <li><b>Rule</b>: always-on instruction (“must/never/always”)</li>
    <li><b>Command</b>: a callable action (“do X”, often with parameters)</li>
    <li><b>Skill</b>: a repeatable behavior you improve via practice</li>
    <li><b>Spec</b>: a shared contract that reduces ambiguity</li>
  </ul>
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

<div class="mt-8 frame frame--subtle p-6 max-w-3xl mx-auto">
  <div class="badge mb-3 text-sm">
    <span class="i-carbon:shield icon text-lg" aria-hidden="true" />
    <span>Think: guardrails</span>
  </div>
  <div class="text-sm opacity-90">
    Rules are your “always-on” safety net: they prevent predictable failure modes and keep the agent inside the contract.
  </div>
</div>

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

<div class="frame frame--subtle p-5">
  <div class="badge mb-3 text-sm">
    <span class="i-carbon:stacked-move icon text-lg" aria-hidden="true" />
    <span>Starter pack</span>
  </div>
  <ul>
    <li><b>Scope rule</b>: stay within provided files/data</li>
    <li><b>Uncertainty rule</b>: ask when ambiguous; don’t guess facts</li>
    <li><b>Verification rule</b>: validate outputs (lint/build/tests when relevant)</li>
  </ul>
</div>

<div v-click class="mt-6 text-sm opacity-80">
These three cover most “agent went off the rails” stories.
</div>

:::right::

### Failure modes they prevent

<div class="frame frame--subtle p-5">
  <div class="badge mb-3 text-sm">
    <span class="i-carbon:warning-alt icon text-lg" aria-hidden="true" />
    <span>Prevents</span>
  </div>
  <ul>
    <li>Hallucinated APIs/paths</li>
    <li>Hidden assumptions</li>
    <li>“Looks right” but broken output</li>
  </ul>
</div>

:::

<!--
- Emphasize: rules protect outcomes; they don’t kill creativity.
-->

---

## Rule conflicts: decide a tie-breaker

<div class="badge text-sm">
  <span class="i-carbon:arrows-horizontal icon text-lg" aria-hidden="true" />
  <span>Example conflict: “Move fast” vs “Don’t break builds”</span>
</div>

<div v-click class="mt-5 frame frame--subtle p-5">

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

<div class="mt-8 frame frame--subtle p-6 max-w-3xl mx-auto">
  <div class="badge mb-3 text-sm">
    <span class="i-carbon:terminal icon text-lg" aria-hidden="true" />
    <span>Think: repeatable actions</span>
  </div>
  <div class="text-sm opacity-90">
    Commands turn vague intent into structured work. When the inputs + outputs are explicit, agents get dramatically more reliable.
  </div>
</div>

<!--
- “Commands” turn vague intent into structured work.
-->

---

## Command design: small, composable, explicit

<div class="frame frame--subtle p-5">
  <div class="badge mb-3 text-sm">
    <span class="i-carbon:function icon text-lg" aria-hidden="true" />
    <span>Command = function call</span>
  </div>
  <ul>
    <li><b>Name</b>: verb-first (<code>summarize</code>, <code>diff</code>, <code>plan</code>, <code>verify</code>)</li>
    <li><b>Inputs</b>: what the command needs (files, constraints, audience)</li>
    <li><b>Output contract</b>: what “done” looks like</li>
    <li><b>Failure behavior</b>: what happens if missing info</li>
  </ul>
</div>

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

<div class="frame p-5">
  <div class="badge mb-3 text-sm">
    <span class="i-carbon:code icon text-lg" aria-hidden="true" />
    <span>Command spec</span>
  </div>

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
</div>

:::right::

### Notes

<div class="frame frame--subtle p-5">
  <div class="badge mb-3 text-sm">
    <span class="i-carbon:idea icon text-lg" aria-hidden="true" />
    <span>Design notes</span>
  </div>
  <ul>
    <li>Make parameters explicit</li>
    <li>Pre-commit constraints</li>
    <li>Declare output target</li>
  </ul>
</div>

:::

<!--
- Point out: this repo already encodes constraints via `.cursor/rules/` + PRD.
-->

---

## Code-as-command (reusable snippet)

<div class="badge text-sm">
  <span class="i-carbon:document-export icon text-lg" aria-hidden="true" />
  <span>Import a reusable snippet instead of duplicating it</span>
</div>

<div class="mt-4 frame p-5">
<<< @/snippets/external.ts#snippet
</div>

<div v-click class="mt-5 text-sm opacity-80">
Rule of thumb: if you copy-paste it twice, it becomes a snippet.
</div>

<!--
- Show where snippets live: `snippets/`.
-->

---

## Command chain: “plan → execute → verify”

<div class="badge text-sm mb-4">
  <span class="i-carbon:flow icon text-lg" aria-hidden="true" />
  <span>Make the workflow visible</span>
</div>

<div class="frame p-5">
```mermaid {scale: 0.9, alt: 'A simple workflow diagram showing a plan, execute, verify loop'}
flowchart LR
  A[Plan] --> B[Execute]
  B --> C[Verify]
  C -->|pass| D[Done]
  C -->|fail| A
```
</div>

<!--
- Verification is what makes agentic workflows safe.
-->

---

## Demo: a tiny interactive component in Slidev

Use Vue components inline:

<div class="mt-6 frame frame--subtle p-6">
  <div class="badge mb-3 text-sm">
    <span class="i-carbon:touch-1 icon text-lg" aria-hidden="true" />
    <span>Interactive demo</span>
  </div>
  <Counter :count="3" />
</div>

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

<div class="mt-8 frame frame--subtle p-6 max-w-3xl mx-auto">
  <div class="badge mb-3 text-sm">
    <span class="i-carbon:cycle icon text-lg" aria-hidden="true" />
    <span>Think: feedback loops</span>
  </div>
  <div class="text-sm opacity-90">
    Skills are what you practice: attempt, critique, revise — with proof. That’s how “prompting” becomes a capability.
  </div>
</div>

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

<div class="frame frame--subtle p-5">
  <div class="badge mb-3 text-sm">
    <span class="i-carbon:document icon text-lg" aria-hidden="true" />
    <span>Spec checklist</span>
  </div>
  <ul>
    <li><b>Goal</b></li>
    <li><b>Non-goals</b></li>
    <li><b>Inputs/outputs</b></li>
    <li><b>Constraints</b></li>
    <li><b>Acceptance criteria</b></li>
  </ul>
</div>

<div v-click class="mt-6 frame p-4 text-sm">
If you can’t write acceptance criteria, you can’t reliably evaluate the model’s output.
</div>

<!--
- Tie back: PRD is the workshop’s spec source of truth.
-->

---

## Skill: asking the right clarifying question

When blocked, ask:

<div class="frame frame--subtle p-5">
  <div class="badge mb-3 text-sm">
    <span class="i-carbon:help icon text-lg" aria-hidden="true" />
    <span>High-signal questions</span>
  </div>
  <ul>
    <li><b>Which option do you want?</b> (A/B choices)</li>
    <li><b>What matters more?</b> (speed vs accuracy vs cost)</li>
    <li><b>What’s the success criteria?</b></li>
  </ul>
</div>

<div v-click class="mt-6 frame p-4 text-sm">
Avoid: “Any other details?” — it’s too vague to be helpful.
</div>

<!--
- The best agents ask fewer, better questions.
-->

---

## Skill: verification habits

Pick the right “proof”:

<div class="frame frame--subtle p-5">
  <div class="badge mb-3 text-sm">
    <span class="i-carbon:checkmark-outline icon text-lg" aria-hidden="true" />
    <span>Choose a proof</span>
  </div>
  <ul>
    <li>Docs change → link check / consistency check</li>
    <li>Code change → typecheck/lint/tests/build</li>
    <li>Slides change → <code>npm run build</code> to confirm exportability</li>
  </ul>
</div>

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

<div class="frame frame--subtle p-6 max-w-3xl">
  <div class="badge mb-4 text-sm">
    <span class="i-carbon:favorite icon text-lg" aria-hidden="true" />
    <span>Habits that compound</span>
  </div>
  <ul>
    <li><b>Prefer constraints</b> over vibes</li>
    <li><b>Prefer small changes</b> over large refactors</li>
    <li><b>Keep artifacts close to code</b> (<code>docs/</code>, <code>snippets/</code>, <code>components/</code>)</li>
    <li><b>Make failures loud</b> (build steps, checks, assertions)</li>
  </ul>
</div>

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

<div class="mt-10 frame frame--subtle p-6 max-w-3xl mx-auto text-left">
  <div class="badge mb-3 text-sm">
    <span class="i-carbon:rocket icon text-lg" aria-hidden="true" />
    <span>Next step</span>
  </div>
  <div class="text-sm opacity-90">
    Take one workflow this week and write:
    <ul class="mt-3">
      <li><b>3 rules</b> (prevent the top failure modes)</li>
      <li><b>5 commands</b> (a tiny command palette)</li>
      <li><b>20-minute practice loop</b> (attempt → critique → revise)</li>
    </ul>
  </div>
</div>

<!--
- Ask for one concrete commitment: “What will you apply tomorrow?”
-->
