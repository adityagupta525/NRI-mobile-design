#!/usr/bin/env node
/**
 * apca-check.mjs — REAL APCA contrast gate for Obsidian-Copper.
 * Computes APCA Lc (APCA-W3 0.1.9) for semantic text/bg token pairs read from the
 * built CSS (build/css/tokens.css). Alpha text is composited over its background.
 * Thresholds (rulebook 06): body |Lc| ≥ 75, large ≥ 60, icons ≥ 45, incidental ≥ 40.
 *
 * Severity: BODY text pairs are ERRORS (exit 1 on fail — catches real regressions).
 * Accent / status / icon / incidental pairs are WARNINGS (role-dependent thresholds;
 * surfaced, not hard-failed). Run `npm run tokens:build` first.
 */
import { readFileSync, existsSync } from 'node:fs';

const cssPath = 'build/css/tokens.css';
if (!existsSync(cssPath)) {
  console.error('✗ build/css/tokens.css missing — run `npm run tokens:build` first.');
  process.exit(1);
}
const css = readFileSync(cssPath, 'utf8');
const vars = {};
for (const m of css.matchAll(/--([\w-]+):\s*([^;]+);/g)) vars['--' + m[1]] = m[2].trim();

function parseColor(s) {
  s = s.trim(); let m;
  if ((m = s.match(/^#([0-9a-fA-F]{6})$/))) { const n = parseInt(m[1], 16); return { r:(n>>16)&255, g:(n>>8)&255, b:n&255, a:1 }; }
  if ((m = s.match(/^#([0-9a-fA-F]{8})$/))) { const n = parseInt(m[1], 16); return { r:(n>>>24)&255, g:(n>>16)&255, b:(n>>8)&255, a:(n&255)/255 }; }
  if ((m = s.match(/rgba?\(([^)]+)\)/i))) { const p = m[1].split(',').map(x => parseFloat(x)); return { r:p[0], g:p[1], b:p[2], a:p[3] === undefined ? 1 : p[3] }; }
  return null;
}
const over = (fg, bg) => { const a = fg.a; return { r:a*fg.r+(1-a)*bg.r, g:a*fg.g+(1-a)*bg.g, b:a*fg.b+(1-a)*bg.b, a:1 }; };

// APCA-W3 (0.1.9)
function apcaLc(txt, bg) {
  const trc = 2.4, Rco = 0.2126, Gco = 0.7152, Bco = 0.0722;
  const Ntx = 0.57, Nbg = 0.56, Rtx = 0.62, Rbg = 0.65;
  const Bthr = 0.022, Bclip = 1.414, scale = 1.14, loBoW = 0.027, loWoB = 0.027, dMin = 0.0005, loClip = 0.1;
  const Y = (c) => { const lin = v => Math.pow(v/255, trc); let y = Rco*lin(c.r)+Gco*lin(c.g)+Bco*lin(c.b); return y < Bthr ? y + Math.pow(Bthr - y, Bclip) : y; };
  const Yt = Y(txt), Yb = Y(bg);
  if (Math.abs(Yb - Yt) < dMin) return 0;
  let SAPC, out;
  if (Yb > Yt) { SAPC = (Math.pow(Yb, Nbg) - Math.pow(Yt, Ntx)) * scale; out = SAPC < loClip ? 0 : SAPC - loBoW; }
  else { SAPC = (Math.pow(Yb, Rbg) - Math.pow(Yt, Rtx)) * scale; out = SAPC > -loClip ? 0 : SAPC + loWoB; }
  return out * 100;
}

// [name, textVar, bgVar, minLc, role, severity]
const PAIRS = [
  ['text.primary / canvas',   '--text-primary',   '--bg-canvas',      75, 'body',       'error'],
  ['text.primary / surface',  '--text-primary',   '--bg-surface',     75, 'body',       'error'],
  ['text.secondary / surface','--text-secondary', '--bg-surface',     75, 'body',       'error'],
  ['text.number / surface',   '--text-number',    '--bg-surface',     75, 'body',       'error'],
  ['text.onAccent / accent',  '--text-on-accent', '--accent-default', 60, 'CTA-label',  'warn'],
  ['text.tertiary / surface', '--text-tertiary',  '--bg-surface',     60, 'large',      'warn'],
  ['icon.default / surface',  '--icon-default',   '--bg-surface',     45, 'icon',       'warn'],
  ['icon.muted / surface',    '--icon-muted',     '--bg-surface',     45, 'icon',       'warn'],
  ['text.meta / surface',     '--text-meta',      '--bg-surface',     40, 'incidental', 'warn'],
  ['accent / canvas',         '--accent-default', '--bg-canvas',      60, 'large',      'warn'],
  ['status.positive / surf',  '--status-positive','--bg-surface',     60, 'large',      'warn'],
  ['status.negative / surf',  '--status-negative','--bg-surface',     60, 'large',      'warn'],
  ['status.warning / surf',   '--status-warning', '--bg-surface',     60, 'large',      'warn'],
];

console.log('\nAPCA gate — rulebook 06 (body ≥75 · large ≥60 · icons ≥45 · incidental ≥40)\n');
let errors = 0, warns = 0;
const canvas = parseColor(vars['--bg-canvas']);
for (const [name, tv, bv, min, role, sev] of PAIRS) {
  const ts = vars[tv], bs = vars[bv];
  if (!ts || !bs) { console.log(`  ⚠ SKIP  ${name} (missing ${!ts ? tv : bv})`); continue; }
  let t = parseColor(ts), b = parseColor(bs);
  if (!t || !b) { console.log(`  ⚠ SKIP  ${name} (unparseable)`); continue; }
  if (b.a < 1 && canvas) b = over(b, canvas);
  if (t.a < 1) t = over(t, b);
  const abs = Math.abs(apcaLc(t, b));
  const pass = abs >= min;
  const mark = pass ? '✓' : (sev === 'error' ? '✗ ERROR' : '⚠ WARN ');
  if (!pass && sev === 'error') errors++;
  if (!pass && sev === 'warn') warns++;
  console.log(`  ${pass ? '✓' : mark} ${name.padEnd(26)} |Lc| ${abs.toFixed(1).padStart(5)}  (need ${min}, ${role})`);
}
console.log(`\napca: ${errors} error(s), ${warns} warning(s)`);
if (warns) console.log('  note: warnings are role-dependent (large/icon/CTA) — review, not a hard fail.');
process.exit(errors ? 1 : 0);
