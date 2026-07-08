/**
 * Obsidian-Copper token build (FIXED)
 * Source dimensions in tokens.json are RAW PX NUMBERS (e.g. "16" = 16px).
 * The old build used default `css`/`ios`/`android` transformGroups, which treat
 * dimensions as rem (base 16) → every spacing/radius/size came out 16× too big
 * (--space-4: 16rem = 256px, TouchMin = 704, RadiusPill = 15984). This build
 * registers explicit transforms so every platform gets true values:
 *   css → px · js/rn → raw numbers · ios → CGFloat points · android → dp/sp
 */
import StyleDictionary from 'style-dictionary';

// ---- custom value transforms (dimension = px number in source) ----
StyleDictionary.registerTransform({
  name: 'dimension/px', type: 'value', transitive: true,
  filter: (t) => t.$type === 'dimension',
  transform: (t) => `${parseFloat(t.$value)}px`,
});
StyleDictionary.registerTransform({
  name: 'dimension/raw', type: 'value', transitive: true,
  filter: (t) => t.$type === 'dimension',
  transform: (t) => parseFloat(t.$value),
});
StyleDictionary.registerTransform({
  name: 'dimension/dp', type: 'value', transitive: true,
  filter: (t) => t.$type === 'dimension',
  transform: (t) => `${parseFloat(t.$value)}dp`,
});
StyleDictionary.registerTransform({
  name: 'duration/ms', type: 'value', transitive: true,
  filter: (t) => t.$type === 'duration',
  transform: (t) => `${parseFloat(t.$value)}ms`,
});

const base = ['attribute/cti'];

const sd = new StyleDictionary({
  source: ['design-system/tokens/tokens.json'],
  platforms: {
    css: {
      buildPath: 'build/css/',
      transforms: [...base, 'name/kebab', 'dimension/px', 'duration/ms', 'color/css'],
      files: [{ destination: 'tokens.css', format: 'css/variables' }],
    },
    js: {
      buildPath: 'build/js/',
      transforms: [...base, 'name/pascal', 'dimension/raw', 'color/css'],
      files: [
        { destination: 'tokens.js', format: 'javascript/es6' },
        { destination: 'tokens.json', format: 'json/flat' },
      ],
    },
    rn: {
      buildPath: 'build/rn/',
      transforms: [...base, 'name/pascal', 'dimension/raw', 'color/css'],
      files: [{ destination: 'theme.js', format: 'javascript/es6' }],
    },
    ios: {
      buildPath: 'build/ios/',
      transforms: [...base, 'name/pascal', 'dimension/raw', 'color/ColorSwiftUI'],
      files: [{
        destination: 'Tokens.swift',
        format: 'ios-swift/class.swift',
        options: { className: 'ObsidianCopper', import: ['SwiftUI'] },
      }],
    },
    android: {
      buildPath: 'build/android/',
      transforms: [...base, 'name/snake', 'dimension/dp', 'color/hex8android'],
      files: [{ destination: 'tokens.xml', format: 'android/resources' }],
    },
  },
});

await sd.buildAllPlatforms();

// ---- post-build sanity gate: fail loudly if units regress ----
import { readFileSync } from 'node:fs';
const css = readFileSync('build/css/tokens.css', 'utf8');
const ok = css.includes('--space-4: 16px') && css.includes('--touch-min: 44px');
if (!ok) {
  console.error('✗ SANITY FAIL: space-4 must be 16px and touch-min 44px. Check transforms.');
  process.exit(1);
}
console.log('\n✓ Tokens built → build/{css,js,rn,ios,android} · sanity: space-4=16px, touch-min=44px');
