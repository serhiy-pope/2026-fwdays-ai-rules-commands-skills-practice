---
layout: two-cols
layoutClass: gap-10
background: /images/bg-paper-grid.svg
---

# Skills Architecture

How to make “skills” concrete: treat them like a small system with inputs, loops, and verification.

<div class="mt-6 text-sm">
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
  class="w-full rounded border bg-white/85 p-2"
/>

:::

<!--
- Message: skills are not “talent”; they’re feedback loops with proof.
- Tie-in: for this repo, proof can be `npm run build` (slides) or tests/lint (code).
-->

