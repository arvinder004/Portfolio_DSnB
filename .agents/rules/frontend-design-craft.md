---
trigger: always_on
---

# Front-End Craft & Anti-AI Design Standards

## 1. Visual Anti-Patterns (Banned)
- Do NOT use dark-mode purple/indigo radial gradients or backdrop-blur glow cards.
- Do NOT generate symmetrical 3-column feature grids with centered icons.
- Do NOT apply arbitrary `rounded-3xl` cards with `border-white/10` overlays.
- Do NOT build decorative, low-information bento grids.

## 2. Layout & Typography
- Build asymmetric layouts with deliberate pacing. Alternate visual density between high-impact editorial typography and data-dense sections.
- Pair a character-rich display font with a clean geometric/humanist body font. Avoid default generic system fallbacks.
- Use a disciplined 3–4 color palette rooted in brand identity and physical materials rather than oversaturated neon gradients.
- Apply `tracking-tight` on large headers, `text-wrap: balance` for titles, and `tabular-nums` for numeric data.

## 3. Interaction & States
- Keep micro-interactions snappy and spring-based (<200ms transitions). Avoid floaty, ambient animations.
- Every interactive element must include customized `:hover`, `:focus-visible`, and `:active` styling.
- Provide realistic loading skeletons matching the exact component layout, actionable empty states, and inline form validation.

## 4. Content & Copy
- Ban boilerplate marketing buzzwords ("Unlock the power of", "Supercharge", "Next-gen AI", "All-in-one").
- Write grounded, domain-specific copy and realistic mock data instead of repetitive placeholder text.