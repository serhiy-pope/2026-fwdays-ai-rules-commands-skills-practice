---
layout: two-cols
layoutClass: gap-10
background: /images/bg-paper-grid.svg
---

# Skills Architecture

How to make “skills” concrete: treat them like a small system with inputs, loops, and verification.

<div class="mt-6 text-sm frame p-4">
<div class="badge mb-3 text-xs">
  <span class="i-carbon:information icon text-base" aria-hidden="true" />
  <span>System view</span>
</div>
<ul>
  <li><b>Inputs</b>: context + constraints + tools</li>
  <li><b>Process</b>: attempt → critique → revise</li>
  <li><b>Output</b>: artifact + proof (build/log/test)</li>
</ul>
</div>

:::right::

<img
  src="/images/skills-architecture-flow.svg"
  alt="Flow diagram: Inputs lead into Attempt, Critique, Revise, Verify, producing Output. Verify loops back to Attempt on failure."
  class="w-full frame p-3"
/>

:::

<!--
- Message: skills are not “talent”; they’re feedback loops with proof.
- Tie-in: for this repo, proof can be `npm run build` (slides) or tests/lint (code).
-->

