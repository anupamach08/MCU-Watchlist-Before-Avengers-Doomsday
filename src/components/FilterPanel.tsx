/**
 * src/components/FilterPanel.tsx
 *
 * Multi-criteria filter controls:
 * - Format filter pills (All, Movie, TV Series / Mini-Series, Animated, Special)
 * - Toggles: "Most Important only", "Hide Can skip titles", "Unwatched only"
 * - Direction toggle for A–Z mode (A–Z / Z–A)
 * - Clear all filters button
 */

import React from 'react';
import type { FilterState, FormatFilterType } from '../utils/filterTitles';
import { Sparkles, EyeOff, CheckCircle2, RotateCcw, ArrowUpDown } from 'lucide-react';
import type { ViewTab } from '../hooks/useHashRoute';

interface FilterPanelProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onClear: () => void;
  activeTab: ViewTab;
  sortDirection: 'asc' | 'desc';
  onToggleSortDirection: () => void;
  totalFilteredCount: number;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onChange,
  onClear,
  activeTab,
  sortDirection,
  onToggleSortDirection,
  totalFilteredCount,
}) => {
  const formats: { id: FormatFilterType; label: string }[] = [
    { id: 'all', label: 'All Formats' },
    { id: 'Movie', label: 'Movies' },
    { id: 'Series', label: 'TV Series / Mini-Series' },
    { id: 'Animated', label: 'Animated' },
    { id: 'Special', label: 'Special Presentations' },
  ];

  const hasActiveFilters =
    filters.formatFilter !== 'all' ||
    filters.mostImportantOnly ||
    filters.hideCanSkip ||
    filters.unwatchedOnly ||
    filters.searchQuery !== '';

  return (
    <div className="bg-surface rounded-xl p-4 border border-border shadow-sm mb-6 space-y-4">
      {/* Format Selector Row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {formats.map((fmt) => {
            const isActive = filters.formatFilter === fmt.id;
            return (
              <button
                key={fmt.id}
                type="button"
                onClick={() => onChange({ ...filters, formatFilter: fmt.id })}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? 'bg-accent text-white shadow-sm'
                    : 'bg-surface-2 text-text-muted hover:text-white border border-border/80'
                }`}
              >
                {fmt.label}
              </button>
            );
          })}
        </div>

        {/* Optional A–Z / Z–A toggle for A–Z mode */}
        {activeTab === 'all' && (
          <button
            type="button"
            onClick={onToggleSortDirection}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-surface-2 text-text hover:text-white border border-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            title="Toggle Alphabetical Direction"
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-accent-text" />
            <span>Order: {sortDirection === 'asc' ? 'A–Z' : 'Z–A'}</span>
          </button>
        )}
      </div>

      {/* Toggles & Clear-all row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border/60">
        <div className="flex flex-wrap items-center gap-2">
          {/* Most Important Only */}
          <button
            type="button"
            onClick={() =>
              onChange({ ...filters, mostImportantOnly: !filters.mostImportantOnly })
            }
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              filters.mostImportantOnly
                ? 'bg-green-bg text-green-text border-green-border shadow-sm'
                : 'bg-surface-2 text-text-muted hover:text-white border-border/80'
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Most Important only</span>
          </button>

          {/* Hide Can Skip Titles */}
          <button
            type="button"
            onClick={() => onChange({ ...filters, hideCanSkip: !filters.hideCanSkip })}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              filters.hideCanSkip
                ? 'bg-accent/20 text-accent-text border-accent/40 shadow-sm'
                : 'bg-surface-2 text-text-muted hover:text-white border-border/80'
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
          >
            <EyeOff className="w-3.5 h-3.5" />
            <span>Hide "Can skip"</span>
          </button>

          {/* Unwatched Only */}
          <button
            type="button"
            onClick={() => onChange({ ...filters, unwatchedOnly: !filters.unwatchedOnly })}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              filters.unwatchedOnly
                ? 'bg-accent text-white border-accent shadow-sm'
                : 'bg-surface-2 text-text-muted hover:text-white border-border/80'
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Unwatched only</span>
          </button>
        </div>

        {/* Clear All & Count */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-text-muted font-mono">
            Showing {totalFilteredCount} titles
          </span>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={onClear}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold text-accent-text hover:text-white hover:bg-surface-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear filters</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
