/**
 * src/data/posterConfig.ts
 *
 * Centralized Poster Licensing & Image Source Configuration
 *
 * STRICT LICENSING POLICY:
 * Official posters, stills, and promotional graphics for the Marvel Cinematic Universe
 * are protected under copyright by Marvel Studios and Disney Enterprises, Inc.
 * Under copyright law, images from TMDB, Google Images, fan wikis, or scrapers CANNOT
 * be assumed to be public domain or free to use.
 *
 * In compliance with intellectual property standards:
 * 1. This application strictly prohibits unverified, scraped, or proprietary movie posters.
 * 2. Every title defaults to an original, code-based vector cinematic placeholder
 *    featuring the movie title, phase color palette, and thematic motif.
 * 3. External images are rendered ONLY if they have an explicitly verified CC0 / Public Domain
 *    or properly authorized API license with full author attribution recorded.
 * 4. Image sources remain modular and configurable here so the maintainer can add or replace
 *    verified artwork at any time.
 */

export type PosterLicenseType =
  | 'CC0-1.0'
  | 'Public-Domain'
  | 'CC-BY-4.0'
  | 'CC-BY-SA-4.0'
  | 'Authorized-API'
  | 'Unverified-Proprietary';

export interface LicensedPosterConfig {
  /** The accessible image URL or relative path (e.g., /posters/spacewalk.webp) */
  url: string;
  /** Descriptive alternative text for screen readers */
  alt: string;
  /** Formal license identifier */
  license: PosterLicenseType;
  /** Human-readable license display name */
  licenseName: string;
  /** Required attribution text (e.g., "Photo by NASA via Unsplash (CC0)") */
  attribution: string;
  /** Canonical link to the source repository or license page */
  sourceUrl: string;
  /** Photographer, illustrator, or agency */
  author?: string;
  /**
   * CRITICAL COMPLIANCE FLAG:
   * Must be set to true only after verifying that the license permits this use.
   * If false or undefined, the application displays the cinematic vector placeholder.
   */
  verified: boolean;
}

/**
 * Modular registry for configuring verified external poster replacements.
 * Add verified CC0/Public Domain photography or authorized API endpoints here.
 *
 * Example:
 * 'iron-man': {
 *   url: '/posters/arc-reactor-cc0.webp',
 *   alt: 'Abstract illuminated technological ring',
 *   license: 'CC0-1.0',
 *   licenseName: 'Creative Commons Zero (Public Domain)',
 *   attribution: 'Photo by NASA / Unsplash (Public Domain)',
 *   sourceUrl: 'https://unsplash.com/photos/...',
 *   author: 'NASA',
 *   verified: true,
 * }
 */
export const customPosterRegistry: Record<string, Partial<LicensedPosterConfig>> = {
  // Configurable override slots for all 66 titles.
  // All titles currently set to verified: false by default to ensure
  // 100% adherence to licensing compliance and display the cinematic placeholder.
};

/**
 * Returns the verified poster configuration if valid and verified,
 * or null to trigger the cinematic vector placeholder.
 */
export function getVerifiedPoster(
  titleId: string,
  basePoster?: LicensedPosterConfig
): LicensedPosterConfig | null {
  const custom = customPosterRegistry[titleId];
  const combined = custom ? ({ ...basePoster, ...custom } as LicensedPosterConfig) : basePoster;

  if (combined && combined.verified && combined.url && combined.url.trim() !== '') {
    return combined;
  }

  return null;
}
