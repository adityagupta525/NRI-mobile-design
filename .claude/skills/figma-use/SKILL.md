---
name: figma-use
description: Required reading before any use_figma call in this repo. Encodes the Obsidian-Copper Figma MCP contract and hard-won API gotchas that otherwise silently corrupt builds.
---

# figma-use — the MCP contract for this repo

## Contract (every call)
- Pass `fileKey` on EVERY `use_figma` call: working `JIwf2yzcNlgocM56dudWkh`, reference `hyyQp8QwOtTVuHmFyF888Z`. Missing fileKey = hard error + rollback.
- Pass `skillNames: "figma-use"` on every call.
- Build screens ONLY on `✦ 5 · Screens` (or a new `✦ 6 · Flows` page, one flow per column).
- Assemble from the 85-component library on `✦ 2 Components` as INSTANCES. Never redraw, never detach.

## Gotchas (each has burned a real session)
1. Calls are transactional — any typo (e.g. `primaxisSizingMode`) rolls back the ENTIRE call. Keep calls small; redefine all helpers fresh in every call.
2. `combineAsVariants` flips children to FIXED sizing — reset to AUTO after.
3. `layoutPositioning="ABSOLUTE"` only works inside layoutMode ≠ NONE frames; otherwise position via x/y.
4. `setBoundVariableForPaint({...,opacity:a},'color',var)` can silently emit op=1 — re-verify every tint (must be 10–16%) after building. This has caused real contrast failures.
5. `setTextStyleIdAsync(id)` does NOT apply fills — set fills separately. Load ALL Figtree + Tabular fonts/styles before any text op.
6. Icons via `figma.createNodeFromSvg(svg)` (handles arcs); raw `vectorPaths` reject `a/A` commands. Phosphor Regular, 20px glyph in 24px frame, recolored to `icon/default`.
7. After building: hug-fixer pass — VERTICAL frames → `primaryAxisSizingMode: AUTO`, HORIZONTAL → `counterAxisSizingMode: AUTO` where content exceeds height+2, else components clip.
8. `await node.screenshot({scale})` may intermittently return a non-viewable `[image]` — the build still succeeded; retry once, then note it.

## Standard helper kit (redefine EVERY call — fresh scope)
`V` var map · `PS`/`ES` paint/effect style maps · `C(r,g,b,a)` · `bF/bFa/bS/bSa` bind fill/alpha/stroke · `rad()` · `T(txt,fam,sty,sz,colKey,{ls,lh})` · `AL(mode,{gap,pad,pa,ca,fill,w})` · `box(w,h)` · `icon(name,size,colKey)` · `clusterRow(title)` · `metalBtn/ghostBtn/glassField/menuCard/chipEl`.

## Signature styles to reuse (never rebuild)
`Gradient/metalCopper` (5-stop diagonal) · `Effect/metalButton` · `Gradient/copperShimmer` (border) · `Gradient/radialCopper` · `Effect/glassPremium`. Glass field fill `rgba(86,86,86,.30)` + shimmer stroke. Metal-button ink `C(0.14,0.11,0.07)`; metal stroke `C(0.431,0.333,0.220,.55)`. Crafted-card = drop(0,4,16,.18) + inner-highlight(white .04, y1 spread1).
