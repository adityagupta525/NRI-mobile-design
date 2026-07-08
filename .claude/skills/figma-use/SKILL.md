---
name: figma-use
description: MCP contract + gotchas for reading the Obsidian-Copper "claude" Figma library and assembling screens.
---
# figma-use — Figma MCP contract (SCAFFOLD PLACEHOLDER)

## Before any screen work — MANDATORY
1. `get_libraries(fileKey)` → confirm the **"claude"** team library is in
   `libraries_added_to_file`. If absent, STOP.
2. `search_design_system(query, fileKey)` → confirm real components resolve
   (e.g. PortfolioCard, HoldingRow). **Do not scope with includeLibraryKeys for the
   "claude" team lib — that path returns empty; use unscoped search + filter by
   libraryName === "claude".**
3. Never build in a file whose library is empty or unconfirmed.

## Gotchas observed
- The page-listing (get_metadata with no nodeId) can truncate to the Cover page
  only. Reach other pages by direct node-id (e.g. Flows = 406:267).
- Search index lags right after a library publish — components may return `{}` for
  a few minutes, then resolve. Retry before concluding "no library".
- Use ONLY existing components; do not create new base components off-system.
