/**
 * src/utils/posterColor.ts
 *
 * Deterministic color palettes and SVG generator definitions for copyright-free posters.
 * Uses restrained cinematic color palettes (crimson, steel, teal, violet, gold, emerald)
 * and abstract geometry (rays, grids, particles, concentric rings, halftone dots).
 */

import type { PosterHue, TitleFormat } from '../data/titles';

export interface PosterTheme {
  background: string;
  glowColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  formatColor: string;
}

export const posterThemes: Record<PosterHue, PosterTheme> = {
  crimson: {
    background: 'linear-gradient(145deg, #18080C 0%, #2A0B13 45%, #0A0A0F 100%)',
    glowColor: 'rgba(225, 29, 46, 0.35)',
    badgeBg: 'rgba(225, 29, 46, 0.15)',
    badgeBorder: 'rgba(255, 107, 120, 0.4)',
    badgeText: '#FF8A95',
    formatColor: '#FF6B78',
  },
  steel: {
    background: 'linear-gradient(145deg, #0C121A 0%, #172230 45%, #0A0A0F 100%)',
    glowColor: 'rgba(74, 144, 226, 0.3)',
    badgeBg: 'rgba(74, 144, 226, 0.15)',
    badgeBorder: 'rgba(147, 197, 253, 0.4)',
    badgeText: '#93C5FD',
    formatColor: '#60A5FA',
  },
  teal: {
    background: 'linear-gradient(145deg, #071518 0%, #0E2A32 45%, #0A0A0F 100%)',
    glowColor: 'rgba(20, 184, 166, 0.3)',
    badgeBg: 'rgba(20, 184, 166, 0.15)',
    badgeBorder: 'rgba(94, 234, 212, 0.4)',
    badgeText: '#5EEAD4',
    formatColor: '#2DD4BF',
  },
  violet: {
    background: 'linear-gradient(145deg, #12091F 0%, #23123B 45%, #0A0A0F 100%)',
    glowColor: 'rgba(168, 85, 247, 0.3)',
    badgeBg: 'rgba(168, 85, 247, 0.15)',
    badgeBorder: 'rgba(216, 180, 254, 0.4)',
    badgeText: '#D8B4FE',
    formatColor: '#C084FC',
  },
  gold: {
    background: 'linear-gradient(145deg, #181307 0%, #2F230B 45%, #0A0A0F 100%)',
    glowColor: 'rgba(245, 158, 11, 0.32)',
    badgeBg: 'rgba(245, 158, 11, 0.15)',
    badgeBorder: 'rgba(252, 211, 77, 0.4)',
    badgeText: '#FCD34D',
    formatColor: '#FBBF24',
  },
  emerald: {
    background: 'linear-gradient(145deg, #07170E 0%, #0F2E1E 45%, #0A0A0F 100%)',
    glowColor: 'rgba(34, 197, 94, 0.3)',
    badgeBg: 'rgba(34, 197, 94, 0.15)',
    badgeBorder: 'rgba(134, 247, 176, 0.4)',
    badgeText: '#86F7B0',
    formatColor: '#4ADE80',
  },
};

export function getFormatShortLabel(format: TitleFormat): string {
  switch (format) {
    case 'Movie':
      return 'FEATURE FILM';
    case 'TV Series':
      return 'SERIES';
    case 'TV Mini-Series':
      return 'MINI-SERIES';
    case 'Animated Series':
      return 'ANIMATION';
    case 'Animated TV Mini-Series':
      return 'ANIMATED MINI';
    case 'Special Presentation':
      return 'SPECIAL';
    default:
      return 'MCU TITLE';
  }
}
