/**
 * src/utils/validateTitles.ts
 *
 * Comprehensive validation engine to enforce strict compliance with:
 * - 66 canonical titles in releaseOrder
 * - 60 titles in chronologicalOrder (and exclusion of the 6 prohibited titles)
 * - Exact 66 titles in All (A-Z) sorted list
 * - Exactly 26 titles with labels (per Section 7)
 * - Zero movies with labels (movies get no tag)
 * - Poster coverage for 100% of titles (fails build if any title lacks poster metadata)
 */

import { titlesData, allTitlesList } from '../data/titles';
import { releaseOrderIds } from '../data/releaseOrder';
import { chronologicalOrderIds, chronologicalExcludedIds } from '../data/chronologicalOrder';

export const SECTION_7_LABELS: Record<string, { label: string; highlight?: string }> = {
  wandavision: { label: 'TV Mini-Series' },
  'the-falcon-and-the-winter-soldier': { label: 'TV Mini-Series' },
  'what-if-season-1': { label: 'Animated Series – Can skip' },
  hawkeye: { label: 'TV Mini-Series – Understand basic plot / Can skip' },
  'moon-knight': { label: 'TV Mini-Series – Can skip but Masterpiece', highlight: 'masterpiece' },
  'ms-marvel': { label: 'TV Mini-Series – Understand basic plot / Can skip' },
  'i-am-groot-season-1': { label: 'Animated Series – Can skip' },
  'she-hulk-attorney-at-law': { label: 'TV Mini-Series – Can skip' },
  'werewolf-by-night': { label: 'Special Presentation – Can skip' },
  'the-guardians-of-the-galaxy-holiday-special': { label: 'Special Presentation – Can skip' },
  'secret-invasion': { label: 'TV Mini-Series – Can skip / Understand basic plot' },
  'i-am-groot-season-2': { label: 'Animated Series – Can skip' },
  'loki-season-1': { label: 'TV Series – Most Important', highlight: 'important' },
  'loki-season-2': { label: 'TV Series – Most Important', highlight: 'important' },
  'what-if-season-2': { label: 'Animated Series – Can skip' },
  echo: { label: 'TV Mini-Series – Can skip' },
  'agatha-all-along': { label: 'TV Mini-Series' },
  'your-friendly-neighborhood-spider-man-season-1': { label: 'Animated Series – Can skip' },
  'what-if-season-3': { label: 'Animated Series – Can skip' },
  'daredevil-born-again-season-1': { label: 'TV Series' },
  ironheart: { label: 'TV Mini-Series – Can skip' },
  'eyes-of-wakanda': { label: 'Animated TV Mini-Series – Can skip' },
  'marvel-zombies': { label: 'Animated Series – Can skip' },
  'wonder-man': { label: 'TV Series' },
  'daredevil-born-again-season-2': { label: 'TV Series' },
  'the-punisher-one-last-kill': { label: 'Special Presentation' },
};

export interface ValidationReport {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export function validateAllData(): ValidationReport {
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. Total title count check (66 titles)
  if (allTitlesList.length !== 66) {
    errors.push(`Expected exactly 66 canonical titles in titlesData, but found ${allTitlesList.length}.`);
  }

  // 2. Release order count and references
  if (releaseOrderIds.length !== 66) {
    errors.push(`Expected 66 items in releaseOrderIds, but found ${releaseOrderIds.length}.`);
  }

  const releaseUniqueIds = new Set(releaseOrderIds);
  if (releaseUniqueIds.size !== releaseOrderIds.length) {
    errors.push(`Duplicate IDs detected in releaseOrderIds.`);
  }

  for (const id of releaseOrderIds) {
    if (!titlesData[id]) {
      errors.push(`releaseOrder contains ID "${id}" which is missing from titlesData.`);
    }
  }

  // 3. Chronological order count, references, and exclusions
  if (chronologicalOrderIds.length !== 60) {
    errors.push(`Expected exactly 60 items in chronologicalOrderIds, but found ${chronologicalOrderIds.length}.`);
  }

  const chronoUniqueIds = new Set(chronologicalOrderIds);
  if (chronoUniqueIds.size !== chronologicalOrderIds.length) {
    errors.push(`Duplicate IDs detected in chronologicalOrderIds.`);
  }

  for (const id of chronologicalOrderIds) {
    if (!titlesData[id]) {
      errors.push(`chronologicalOrder contains ID "${id}" which is missing from titlesData.`);
    }
  }

  for (const excludedId of chronologicalExcludedIds) {
    if (chronologicalOrderIds.includes(excludedId)) {
      errors.push(
        `chronologicalOrder contains prohibited ID "${excludedId}" which was explicitly excluded in Section 9.`
      );
    }
  }

  // 4. Section 7 Label & Movie Tag Verification
  const section7Keys = Object.keys(SECTION_7_LABELS);
  if (section7Keys.length !== 26) {
    errors.push(`Section 7 definition must contain exactly 26 titles with labels, found ${section7Keys.length}.`);
  }

  for (const item of allTitlesList) {
    if (item.format === 'Movie') {
      if (item.label) {
        errors.push(`Movie "${item.title}" (${item.id}) has label "${item.label}". Movies must have NO tag!`);
      }
    } else {
      const expected = SECTION_7_LABELS[item.id];
      if (!expected) {
        errors.push(`Non-movie "${item.title}" (${item.id}) is not defined in Section 7 label registry!`);
      } else {
        if (item.label !== expected.label) {
          errors.push(
            `Label mismatch for "${item.title}": expected "${expected.label}", got "${item.label}".`
          );
        }
        if (expected.highlight && item.highlight !== expected.highlight) {
          errors.push(
            `Highlight mismatch for "${item.title}": expected "${expected.highlight}", got "${item.highlight}".`
          );
        }
      }
    }
  }

  // 5. Poster generation metadata coverage (all 66 must have badge, hue, pattern)
  for (const item of allTitlesList) {
    if (!item.badgeText || item.badgeText.trim() === '') {
      errors.push(`Title "${item.title}" (${item.id}) lacks poster badgeText.`);
    }
    if (!item.posterHue) {
      errors.push(`Title "${item.title}" (${item.id}) lacks posterHue.`);
    }
    if (!item.patternType) {
      errors.push(`Title "${item.title}" (${item.id}) lacks patternType.`);
    }
  }

  // 6. Section 10: Alphabetical sorting validation (preserving "The", 66 titles)
  const sortedTitles = [...allTitlesList].sort((a, b) =>
    a.title.localeCompare(b.title, 'en', { sensitivity: 'base' })
  );

  if (sortedTitles.length !== 66) {
    errors.push(`A–Z list contains ${sortedTitles.length} items instead of 66.`);
  }

  // Check The Incredible Hulk is under T
  const hulkIndex = sortedTitles.findIndex((t) => t.id === 'the-incredible-hulk');
  if (hulkIndex === -1 || !sortedTitles[hulkIndex].title.startsWith('The')) {
    errors.push(`"The Incredible Hulk" was not found under T!`);
  }

  // Check Ant-Man & The Wasp precedes Quantumania
  const waspIndex = sortedTitles.findIndex((t) => t.id === 'ant-man-and-the-wasp');
  const quantumaniaIndex = sortedTitles.findIndex((t) => t.id === 'ant-man-and-the-wasp-quantumania');
  if (waspIndex > quantumaniaIndex) {
    errors.push(`"Ant-Man & The Wasp" must precede "Ant-Man & The Wasp: Quantumania" in A-Z order.`);
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}
