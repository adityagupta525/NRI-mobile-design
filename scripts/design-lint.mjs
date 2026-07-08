#!/usr/bin/env node
/**
 * design-lint.mjs — REAL checks (replaces the stub flagged in Home_Dashboard handoff).
 * Lints what code CAN verify: token discipline, build integrity, screen-brief completeness.
 * (Figma-side visual lint stays with figma-master + design-critique.)
 * Exit 1 on any ERROR; WARNs don't fail.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

let errors = 0, warns = 0;
const err = (m) => { console.log(`  ✗ ERROR ${m}`); errors++; };
const warn = (m) => { console.log(`  ⚠ WARN  ${m}`); warns++; };
const ok = (m) => console.log(`  ✓ ${m}`);

// ---------- 1 · tokens.json discipline ----------
console.log('\n[1/3] tokens.json');
const tokPath = 'design-system/tokens/tokens.json';
if (!existsSync(tokPath)) { err(`${tokPath} missing`); }
else {
  const tok = JSON.parse(readFileSync(tokPath, 'utf8'));
  const flat = [];
  (function walk(node, path) {
    if (node && typeof node === 'object') {
      if ('$value' in node) { flat.push({ path: path.join('.'), ...node }); return; }
      for (const [k, v] of Object.entries(node)) walk(v, [...path, k]);
    }
  })(tok, []);
  ok(`${flat.length} tokens parsed`);

  // space + font sizes on 4px grid (spacing) / declared scale
  for (const t of flat.filter((t) => t.path.startsWith('space.'))) {
    if (parseFloat(t.$value) % 4 !== 0) err(`space token off 4px grid: ${t.path}=${t.$value}`);
  }
  // line-heights match Ashish's LOCKED scale (rulebook 06). Note: the scale itself
  // includes 14 and 18 (not %4) — the scale wins over the prose "4px grid" claim.
  const LOCKED_LH = { 8:12, 10:14, 12:18, 14:20, 16:24, 20:28, 24:32, 28:36, 32:40, 40:48 };
  for (const t of flat.filter((t) => t.path.startsWith('font.lineHeight.'))) {
    const size = parseInt(t.path.split('.').pop(), 10);
    const lh = parseFloat(t.$value);
    if (size in LOCKED_LH) {
      if (lh !== LOCKED_LH[size]) err(`line-height deviates from locked scale: ${t.path}=${lh} (expected ${LOCKED_LH[size]})`);
    } else if (lh % 4 !== 0) {
      err(`new size ${size}: line-height ${lh} off 4px grid (rule for sizes outside the locked scale)`);
    }
  }
  // every font.size has a matching lineHeight
  const sizes = flat.filter((t) => t.path.startsWith('font.size.')).map((t) => t.path.split('.').pop());
  const lhs = new Set(flat.filter((t) => t.path.startsWith('font.lineHeight.')).map((t) => t.path.split('.').pop()));
  for (const s of sizes) if (!lhs.has(s)) err(`font.size.${s} has no matching lineHeight`);
  // touch targets
  const touchMin = flat.find((t) => t.path === 'touch.min');
  if (touchMin && parseFloat(touchMin.$value) < 44) err(`touch.min < 44 (${touchMin.$value})`);
  // dimension type sanity — dimensions must be plain numbers (px), no units baked in
  for (const t of flat.filter((t) => t.$type === 'dimension')) {
    if (!/^\d+(\.\d+)?$/.test(String(t.$value))) err(`dimension has non-numeric value (should be raw px number): ${t.path}=${t.$value}`);
  }
  ok('token checks complete');
}

// ---------- 2 · build output integrity (×16 regression guard) ----------
console.log('\n[2/3] build outputs');
const cssPath = 'build/css/tokens.css';
if (!existsSync(cssPath)) warn('build/css/tokens.css missing — run `npm run tokens:build`');
else {
  const css = readFileSync(cssPath, 'utf8');
  let cssBad = 0;
  if (!css.includes('--space-4: 16px')) { err('build corrupt: --space-4 is not 16px (rem/×16 regression)'); cssBad++; }
  if (!css.includes('--touch-min: 44px')) { err('build corrupt: --touch-min is not 44px'); cssBad++; }
  if (/:\s*\d+rem/.test(css)) { err('rem units found in CSS build — transforms regressed'); cssBad++; }
  if (!cssBad) ok('CSS build units correct (px, no rem bloat)');
  const swiftPath = 'build/ios/Tokens.swift';
  if (existsSync(swiftPath) && readFileSync(swiftPath, 'utf8').includes('colorWithRed:')) {
    err('Tokens.swift contains Obj-C syntax (old broken ios transformGroup) — rebuild with fixed build.mjs');
  }
}

// ---------- 3 · screen briefs completeness ----------
console.log('\n[3/3] screen briefs');
const screensDir = 'screens';
if (!existsSync(screensDir)) warn('screens/ missing');
else {
  const required = ['## References', '## Structure', '## Components used', '## States & edge cases', '## Copy', '## Motion', '## Gates'];
  const files = readdirSync(screensDir).filter((f) => f.endsWith('.md') && !f.startsWith('_'));
  if (!files.length) warn('no screen briefs yet');
  for (const f of files) {
    const body = readFileSync(join(screensDir, f), 'utf8');
    const missing = required.filter((h) => !body.includes(h));
    if (missing.length) err(`${f}: missing sections → ${missing.join(', ')}`);
    else ok(`${f}: all sections present`);
    if (/\[x\]\s*lint/i.test(body) === false && /\[~\]/.test(body)) warn(`${f}: has provisional [~] gates — resolve before DoD`);
  }
}

console.log(`\ndesign-lint: ${errors} error(s), ${warns} warning(s)`);
process.exit(errors ? 1 : 0);
