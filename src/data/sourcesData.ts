/**
 * src/data/sourcesData.ts
 *
 * Detailed documentation for Sources & Methodology modal / drawer:
 * - Editorial choices & watching orders
 * - Copyright-free poster generation architecture
 * - Resolution of dataset conflicts (Section 7)
 * - Accuracy and disclaimers
 */

export interface ConflictResolution {
  item: string;
  sourceVariant: string;
  resolvedTo: string;
  rationale: string;
}

export const conflictResolutions: ConflictResolution[] = [
  {
    item: 'The Falcon and the Winter Soldier',
    sourceVariant: 'A–Z source called it "TV Series"',
    resolvedTo: 'TV Mini-Series',
    rationale:
      'Per Section 7 authoritative label specifications, standard MCU mini-series format is maintained across all tabs.',
  },
  {
    item: 'Moon Knight',
    sourceVariant: 'A–Z source called it "Optional / Masterpiece"',
    resolvedTo: 'TV Mini-Series – Can skip but Masterpiece',
    rationale:
      'Section 7 replaces generic "Optional" terminology with consistent format-first editorial note and amber highlight on "Masterpiece".',
  },
  {
    item: 'Secret Invasion',
    sourceVariant: 'A–Z source called it "Optional / Understand Basic Plot"',
    resolvedTo: 'TV Mini-Series – Can skip / Understand basic plot',
    rationale:
      'Eliminated "Optional" in favor of uniform Section 7 format naming.',
  },
  {
    item: 'Hawkeye',
    sourceVariant: 'Chronological list shortened to "(Can skip)"',
    resolvedTo: 'TV Mini-Series – Understand basic plot / Can skip',
    rationale:
      'Unified label across all tabs to ensure viewer clarity on narrative importance.',
  },
  {
    item: 'Loki Seasons 1 & 2',
    sourceVariant: 'Various labels across source documents',
    resolvedTo: 'TV Series – Most Important',
    rationale:
      'Preserved green priority pill indicating pivotal multiverse relevance for Avengers: Doomsday.',
  },
  {
    item: 'Alphabetical Sorting with "The"',
    sourceVariant: 'Stripping leading articles vs preserving them',
    resolvedTo: 'Preserved (e.g., The Incredible Hulk under T)',
    rationale:
      'Per Section 5 & 10 explicit instructions: sorted alphabetically by displayed title, grouping "The" under T.',
  },
];

export const methodologyContent = {
  editorialPhilosophy:
    "This watchlist was curated from an editorial perspective to help fans prepare for 'Avengers: Doomsday' without suffering MCU fatigue. Marvel Studios does not publish official skip guides or 'essential only' decrees. All 'Can skip', 'Understand basic plot', and 'Most Important' tags represent independent editorial opinions by the author.",
  posterNotice:
    'All posters displayed on this site are original, algorithmic CSS/SVG vector artworks created without copyrighted Marvel characters, costumes, shields, or proprietary imagery. Each poster derives its color harmony, geometric monogram, and abstract pattern deterministically from the title identifier.',
  pluggablePosters:
    'External poster photographs are supported via a pluggable API interface only when licensed under Creative Commons Zero (CC0) or public domain, with strict author attribution and zero third-party tracking.',
};
