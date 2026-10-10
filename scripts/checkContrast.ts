/**
 * scripts/checkContrast.ts
 *
 * Computes WCAG AA contrast ratio for every color token pair used across the site.
 * Fails (exit code 1) if any text/background pair used in UI falls below 4.5:1
 * (or 3:1 for large display headings).
 */

interface ColorPair {
  name: string;
  fgName: string;
  fgHex: string;
  bgName: string;
  bgHex: string;
  isLargeText?: boolean;
  minRatio?: number;
}

function hexToRgb(hex: string): [number, number, number] {
  const sanitized = hex.replace('#', '').trim();
  const r = parseInt(sanitized.substring(0, 2), 16);
  const g = parseInt(sanitized.substring(2, 4), 16);
  const b = parseInt(sanitized.substring(4, 6), 16);
  return [r, g, b];
}

function channelLuminance(c: number): number {
  const norm = c / 255;
  return norm <= 0.03928 ? norm / 12.92 : Math.pow((norm + 0.055) / 1.055, 2.4);
}

function getRelativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex);
  return 0.2126 * channelLuminance(r) + 0.7152 * channelLuminance(g) + 0.0722 * channelLuminance(b);
}

function computeContrast(fgHex: string, bgHex: string): number {
  const l1 = getRelativeLuminance(fgHex);
  const l2 = getRelativeLuminance(bgHex);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const tokenPairs: ColorPair[] = [
  {
    name: 'Primary Text on Page Background',
    fgName: '--text',
    fgHex: '#F5F5F7',
    bgName: '--bg',
    bgHex: '#0A0A0F',
  },
  {
    name: 'Primary Text on Surface (Cards & Panels)',
    fgName: '--text',
    fgHex: '#F5F5F7',
    bgName: '--surface',
    bgHex: '#14141C',
  },
  {
    name: 'Primary Text on Surface-2 (Hover & Inputs)',
    fgName: '--text',
    fgHex: '#F5F5F7',
    bgName: '--surface-2',
    bgHex: '#1D1D28',
  },
  {
    name: 'Secondary/Muted Text on Page Background',
    fgName: '--text-muted',
    fgHex: '#B8BCC8',
    bgName: '--bg',
    bgHex: '#0A0A0F',
  },
  {
    name: 'Secondary/Muted Text on Surface',
    fgName: '--text-muted',
    fgHex: '#B8BCC8',
    bgName: '--surface',
    bgHex: '#14141C',
  },
  {
    name: 'Secondary/Muted Text on Surface-2',
    fgName: '--text-muted',
    fgHex: '#B8BCC8',
    bgName: '--surface-2',
    bgHex: '#1D1D28',
  },
  {
    name: 'White Text on Accent Button / Active Tab',
    fgName: '#FFFFFF',
    fgHex: '#FFFFFF',
    bgName: '--accent',
    bgHex: '#E11D2E',
  },
  {
    name: 'Accent Text on Page Background',
    fgName: '--accent-text',
    fgHex: '#FF6B78',
    bgName: '--bg',
    bgHex: '#0A0A0F',
  },
  {
    name: 'Accent Text on Surface (Cards)',
    fgName: '--accent-text',
    fgHex: '#FF6B78',
    bgName: '--surface',
    bgHex: '#14141C',
  },
  {
    name: 'Most Important Tag: Green Text on Green Background',
    fgName: '--green-text',
    fgHex: '#86F7B0',
    bgName: '--green-bg',
    bgHex: '#0F3D24',
  },
  {
    name: 'Masterpiece Amber Text on Dark Pill/Surface',
    fgName: '--amber-text',
    fgHex: '#FFD27A',
    bgName: '--surface-2',
    bgHex: '#1D1D28',
  },
  {
    name: 'Standard Format Label Text on Surface-2 Pill',
    fgName: '--text',
    fgHex: '#F5F5F7',
    bgName: '--surface-2',
    bgHex: '#1D1D28',
  },
  {
    name: 'Poster Title White Text on Scrim Overlay',
    fgName: '#FFFFFF',
    fgHex: '#FFFFFF',
    bgName: 'Poster Scrim (#05050A)',
    bgHex: '#05050A',
  },
  {
    name: 'Poster Monogram Watermark on Deep Background (Large Heading)',
    fgName: '#9999AA',
    fgHex: '#9999AA',
    bgName: 'Deep Poster Gradient',
    bgHex: '#0D0D14',
    isLargeText: true,
  },
];

console.log('====================================================');
console.log('   MCU DOOMSDAY WATCHLIST — WCAG CONTRAST AUDIT     ');
console.log('====================================================\n');

let hasFailure = false;

for (const pair of tokenPairs) {
  const ratio = computeContrast(pair.fgHex, pair.bgHex);
  const minRequired = pair.minRatio ?? (pair.isLargeText ? 3.0 : 4.5);
  const passed = ratio >= minRequired;
  const statusStr = passed ? '✅ PASS' : '❌ FAIL';

  console.log(
    `${statusStr} | ${ratio.toFixed(2)}:1 (min ${minRequired}:1) — ${pair.name}\n` +
      `        Foreground: ${pair.fgName} (${pair.fgHex})\n` +
      `        Background: ${pair.bgName} (${pair.bgHex})\n`
  );

  if (!passed) {
    hasFailure = true;
  }
}

console.log('----------------------------------------------------');
if (hasFailure) {
  console.error('❌ Contrast audit failed! One or more pairs violate WCAG AA requirements.');
  process.exit(1);
} else {
  console.log('✅ Contrast audit passed! All token pairs meet or exceed WCAG AA requirements (≥ 4.5:1).');
  process.exit(0);
}
