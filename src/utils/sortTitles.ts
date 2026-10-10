/**
 * src/utils/sortTitles.ts
 *
 * Sorting and letter-grouping utilities for All (A–Z) mode.
 * Preserves leading "The" in sorting (e.g., "The Incredible Hulk" is placed under 'T').
 */

import type { TitleItem } from '../data/titles';

export interface LetterGroup {
  letter: string;
  titles: TitleItem[];
}

export function sortTitlesAlphabetically(
  titles: TitleItem[],
  direction: 'asc' | 'desc' = 'asc'
): TitleItem[] {
  const sorted = [...titles].sort((a, b) => {
    const comparison = a.title.localeCompare(b.title, 'en', {
      sensitivity: 'base',
      numeric: true,
    });
    return direction === 'asc' ? comparison : -comparison;
  });
  return sorted;
}

export function groupTitlesByLetter(
  titles: TitleItem[],
  direction: 'asc' | 'desc' = 'asc'
): LetterGroup[] {
  const sorted = sortTitlesAlphabetically(titles, direction);
  const groupsMap = new Map<string, TitleItem[]>();

  for (const item of sorted) {
    const firstChar = item.title.trim().charAt(0).toUpperCase();
    if (!groupsMap.has(firstChar)) {
      groupsMap.set(firstChar, []);
    }
    groupsMap.get(firstChar)!.push(item);
  }

  const groups: LetterGroup[] = [];
  for (const [letter, items] of groupsMap.entries()) {
    groups.push({ letter, titles: items });
  }

  return groups;
}
