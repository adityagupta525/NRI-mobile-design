---
name: centricity-design
description: Use this skill to generate well-branded interfaces and assets for Centricity, the D2C NRI mutual-fund investing app, either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key facts:
- Mobile-first, 375×812 iPhone frame. Dark-first (obsidian) — no light theme in v1.
- Copper is the ONLY accent. One brushed-copper CTA and one copper rim-glow per screen, max.
- Fonts: Figtree (UI/headings), Tabular (numerals/currency, tabular figures, Indian digit grouping).
- Tokens live in `tokens/*.css`, imported by root `styles.css`. Never hardcode hex/px.
- Components in `components/<group>/<Name>/`. UI kit in `ui_kits/centricity-app/`.
