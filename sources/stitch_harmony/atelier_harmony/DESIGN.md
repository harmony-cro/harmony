```markdown
# Design System Specification: Editorial Harmony

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Atelier"**

This design system is not a utility; it is a curated experience. It rejects the "templated" look of the modern web in favor of a high-end, editorial aesthetic inspired by luxury boutique ateliers and avant-garde architectural journals. 

The system breaks the rigid, symmetrical grid through **Rhythmic Asymmetry**. We lean into the concept of "The Accordion"—using vertical strokes, layered panels, and varying widths to create a sense of expansion and contraction. We move beyond standard UI by treating the screen as a canvas where negative space is as communicative as the content itself.

---

## 2. Colors & Tonal Depth
Our palette is rooted in the interplay between deep matte carbon and polished metallic gold.

### Color Tokens (Material Design Convention)
*   **Primary (The Polish):** `#f2ca50` (Primary) | `#d4af37` (Container)
*   **Surface (The Foundation):** `#131313` (Base) | `#0e0e0e` (Lowest) | `#353534` (Highest)
*   **On-Surface (The Ink):** `#e5e2e1` (Cream Text) | `#d0c5af` (Muted/Subtitle)

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined solely through background color shifts. To separate a hero section from a feature grid, transition from `surface` (#131313) to `surface-container-low` (#1c1b1b). Use the "Accordion" vertical lines only as structural accents, never as boxes.

### Signature Textures & Glass
To provide "visual soul," use subtle linear gradients on CTAs:
*   **The Golden Glow:** A 45-degree gradient from `primary` (#f2ca50) to `primary_container` (#d4af37).
*   **Atelier Glass:** For floating panels, use `surface_container_highest` (#353534) at 60% opacity with a `24px` backdrop-blur. This allows the deep blacks of the background to bleed through, creating a "frosted obsidian" effect.

---

## 3. Typography
Typography is our primary vehicle for luxury. The contrast between the serif’s historical weight and the sans-serif’s modern precision creates "Harmony."

*   **Display & Headlines (Noto Serif):** Set with tight tracking (-0.02em) and generous line-height for a poetic, rhythmic feel. Use `display-lg` (3.5rem) sparingly for high-impact editorial moments.
*   **Body & Labels (Manrope):** Set with increased tracking (+0.01em) to ensure legibility against the dark background. 
*   **The Highlight Rule:** Use the `primary` gold token for specific keywords within headlines to guide the eye, but never for entire paragraphs.

---

## 4. Elevation & Depth
In this system, depth is "grown," not applied. We use **Tonal Layering** instead of drop shadows.

*   **The Layering Principle:** Place a `surface_container_lowest` (#0e0e0e) card on a `surface_container_low` (#1c1b1b) section. This "recessed" look creates a sophisticated, architectural depth.
*   **Ambient Shadows:** If a component must float (e.g., a high-end modal), use a shadow color tinted with `#e9c349` at 5% opacity, with a blur radius of `40px`. This mimics the way light reflects off gold onto a dark surface.
*   **Ghost Borders:** If accessibility requires a border, use `outline_variant` (#4d4635) at 20% opacity. It should be felt, not seen.

---

## 5. Components & "Accordion" Structure

### The Vertical Accordion (Signature Component)
Instead of horizontal rows, use thin vertical lines (`outline_variant` at 0.5px thickness) to divide content panels. These panels "expand" on hover, utilizing the **Spacing Scale** (e.g., jumping from `12` to `24`) to reveal more information.

### Buttons
*   **Primary:** Sharp 0px corners. Background: `primary_container`. Text: `on_primary` (All caps, `label-md`).
*   **Secondary:** 0px corners. Ghost style. Border: `outline` (#99907c) at 30% opacity. 
*   **Tertiary:** Text-only with a `1px` underline in `primary` that expands to `2px` on hover.

### Cards & Lists
*   **Strict Proscription:** No divider lines between list items. Use vertical white space (`spacing-6`) or a `surface_container_high` hover state to define rows.
*   **Media:** Images should always have a slight `0.5px` inner glow (overlay) to prevent them from looking "flat" against the matte black background.

### Inputs & Forms
*   **Minimalist Field:** Only a bottom border using `outline_variant`. The label (`label-sm`) sits above the line in `on_surface_variant`. On focus, the bottom border animates into a `2px` `primary` gold line.

---

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetric Margins:** Align text to the left but allow imagery to bleed off the right edge of the grid to create an editorial "magazine" feel.
*   **Embrace the Dark:** Ensure at least 60% of the viewport is `surface_container_lowest` or `surface`. Darkness is our luxury.
*   **Intentional Type Scaling:** Jump between `display-lg` and `body-sm` to create a dramatic hierarchy.

### Don't:
*   **No Rounded Corners:** Use `0px` for everything. Hard edges convey the "Atelier" precision.
*   **No Pure White:** Never use #FFFFFF. Only use the cream-toned `on_surface` (#e5e2e1) to prevent eye strain and maintain the sophisticated warmth.
*   **No Standard Grids:** Avoid 12-column symmetry. Try a 3-column layout where the center column is twice the width of the flanks.

---

## 7. Spacing Scale
Our spacing is rhythmic, based on a `0.35rem` increment to ensure a tight, intentional "closeness" or a vast "openness."

*   **Micro (1-2.5):** For internal component padding.
*   **Macro (12-24):** For section breathing room. High-end design requires "wasteful" space. Do not be afraid of large empty areas in `surface` (#131313).```