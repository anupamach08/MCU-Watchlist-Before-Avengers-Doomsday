/**
 * src/utils/filterTitles.ts
 *
 * Filter criteria and logic for search, formats, editorial tags, and watch status.
 */

import type { TitleItem } from '../data/titles';

export type FormatFilterType =
  | 'all'
  | 'Movie'
  | 'Series' // encompasses TV Series & TV Mini-Series
  | 'Animated' // encompasses Animated Series & Animated TV Mini-Series
  | 'Special'; // Special Presentation

export interface FilterState {
  searchQuery: string;
  formatFilter: FormatFilterType;
  mostImportantOnly: boolean;
  hideCanSkip: boolean;
  unwatchedOnly: boolean;
}

export const initialFilterState: FilterState = {
  searchQuery: '',
  formatFilter: 'all',
  mostImportantOnly: false,
  hideCanSkip: false,
  unwatchedOnly: false,
};

export function filterTitles(
  titles: TitleItem[],
  filters: FilterState,
  watchedSet: Set<string>
): TitleItem[] {
  return titles.filter((item) => {
    // 1. Search Query
    if (filters.searchQuery.trim() !== '') {
      const q = filters.searchQuery.toLowerCase().trim();
      const titleMatch = item.title.toLowerCase().includes(q);
      const labelMatch = item.label ? item.label.toLowerCase().includes(q) : false;
      const phaseMatch = item.phase ? item.phase.toLowerCase().includes(q) : false;
      if (!titleMatch && !labelMatch && !phaseMatch) {
        return false;
      }
    }

    // 2. Format filter
    if (filters.formatFilter !== 'all') {
      if (filters.formatFilter === 'Movie' && item.format !== 'Movie') {
        return false;
      }
      if (
        filters.formatFilter === 'Series' &&
        item.format !== 'TV Series' &&
        item.format !== 'TV Mini-Series'
      ) {
        return false;
      }
      if (
        filters.formatFilter === 'Animated' &&
        item.format !== 'Animated Series' &&
        item.format !== 'Animated TV Mini-Series'
      ) {
        return false;
      }
      if (filters.formatFilter === 'Special' && item.format !== 'Special Presentation') {
        return false;
      }
    }

    // 3. Most Important Only
    if (filters.mostImportantOnly && item.highlight !== 'important') {
      return false;
    }

    // 4. Hide Can Skip Titles
    if (filters.hideCanSkip && item.label && item.label.toLowerCase().includes('can skip')) {
      return false;
    }

    // 5. Unwatched Only
    if (filters.unwatchedOnly && watchedSet.has(item.id)) {
      return false;
    }

    return true;
  });
}
