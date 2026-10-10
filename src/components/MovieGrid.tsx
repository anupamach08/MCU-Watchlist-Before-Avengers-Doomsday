/**
 * src/components/MovieGrid.tsx
 *
 * Renders the title cards according to the selected view mode:
 * 1. All (A–Z): Grouped under letter headings (A, B, C, D, E, G, H, I, L, M, S, T, W, X, Y)
 * 2. Release Date: Grouped under saga and phase headings with collapsible section headers
 * 3. Chronological: Linear 60-item sequence with author editorial note & sequence numbering
 *
 * Responsive grid: 2 cols on mobile, 3-4 on tablet, 5-6 on large desktop.
 */

import React, { useState } from 'react';
import type { TitleItem } from '../data/titles';
import { MovieCard } from './MovieCard';
import type { ViewTab } from '../hooks/useHashRoute';
import { releaseGroups } from '../data/releaseOrder';
import { chronologicalNote } from '../data/chronologicalOrder';
import { groupTitlesByLetter } from '../utils/sortTitles';
import { ChevronDown, ChevronUp, Film, Info, SearchX } from 'lucide-react';

interface MovieGridProps {
  filteredTitles: TitleItem[];
  allTitles: TitleItem[];
  activeTab: ViewTab;
  sortDirection: 'asc' | 'desc';
  isWatched: (id: string) => boolean;
  onToggleWatched: (id: string) => void;
  onResetFilters: () => void;
}

export const MovieGrid: React.FC<MovieGridProps> = ({
  filteredTitles,
  activeTab,
  sortDirection,
  isWatched,
  onToggleWatched,
  onResetFilters,
}) => {
  // Collapsed sections tracking for Release Date view
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  const toggleGroupCollapse = (groupId: string) => {
    setCollapsedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  // Quick lookup set for fast filtering
  const filteredIdsSet = new Set(filteredTitles.map((t) => t.id));

  // Helpful Empty State
  if (filteredTitles.length === 0) {
    return (
      <div className="py-16 px-4 text-center bg-surface rounded-2xl border border-border flex flex-col items-center justify-center my-8">
        <div className="w-16 h-16 rounded-full bg-surface-2 border border-border flex items-center justify-center text-text-muted mb-4">
          <SearchX className="w-8 h-8 text-accent-text" />
        </div>
        <h3 className="font-heading text-2xl font-bold uppercase text-text mb-2">
          No Titles Found
        </h3>
        <p className="text-text-muted text-sm max-w-md mb-6 font-body">
          No MCU titles match your current search and filter combination. Try clearing your filters or searching with a different term.
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-accent hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Reset All Filters
        </button>
      </div>
    );
  }

  // 1. ALL (A–Z) VIEW
  if (activeTab === 'all') {
    const letterGroups = groupTitlesByLetter(filteredTitles, sortDirection);

    return (
      <div className="space-y-10">
        {letterGroups.map((group) => (
          <section key={group.letter} aria-labelledby={`letter-${group.letter}`}>
            {/* Letter Header */}
            <div className="flex items-center gap-3 pb-3 mb-5 border-b border-border">
              <span
                id={`letter-${group.letter}`}
                className="font-heading text-3xl sm:text-4xl font-bold text-accent-text tracking-wider"
              >
                {group.letter}
              </span>
              <span className="text-xs font-mono text-text-muted px-2 py-0.5 rounded bg-surface-2 border border-border">
                {group.titles.length} {group.titles.length === 1 ? 'title' : 'titles'}
              </span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
              {group.titles.map((item) => (
                <MovieCard
                  key={item.id}
                  item={item}
                  isWatched={isWatched(item.id)}
                  onToggleWatched={onToggleWatched}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  }

  // 2. RELEASE DATE VIEW
  if (activeTab === 'release') {
    return (
      <div className="space-y-8">
        {releaseGroups.map((group) => {
          // Get titles belonging to this group that match current filters
          const groupTitles = group.titleIds
            .filter((id) => filteredIdsSet.has(id))
            .map((id) => filteredTitles.find((t) => t.id === id)!)
            .filter(Boolean);

          if (groupTitles.length === 0) return null;

          const isCollapsed = collapsedGroups[group.id] || false;
          const groupHeading = group.phase
            ? `${group.saga} — ${group.phase}`
            : group.saga;

          return (
            <section
              key={group.id}
              className="bg-surface/50 rounded-2xl border border-border p-4 sm:p-6"
              aria-labelledby={`release-heading-${group.id}`}
            >
              {/* Header with Collapsible Toggle */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-border/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-accent-text">
                    <Film className="w-4 h-4" />
                  </div>
                  <div>
                    <h3
                      id={`release-heading-${group.id}`}
                      className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wide text-text"
                    >
                      {groupHeading}
                    </h3>
                    <p className="text-xs text-text-muted font-mono">
                      {groupTitles.length} of {group.titleIds.length} titles visible
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleGroupCollapse(group.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-surface-2 hover:bg-surface-2/80 text-text transition-colors border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-expanded={!isCollapsed}
                >
                  <span>{isCollapsed ? 'Expand' : 'Collapse'}</span>
                  {isCollapsed ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronUp className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Grid content */}
              {!isCollapsed && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 pt-5 animate-fade-in">
                  {groupTitles.map((item) => (
                    <MovieCard
                      key={item.id}
                      item={item}
                      isWatched={isWatched(item.id)}
                      onToggleWatched={onToggleWatched}
                    />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    );
  }

  // 3. CHRONOLOGICAL VIEW
  return (
    <div className="space-y-6">
      {/* Editorial Note (hard requirement per Section 5 & Section 9) */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border text-sm text-text-muted shadow-sm">
        <Info className="w-5 h-5 text-accent-text shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-text block mb-1">
            Author Viewing Order
          </span>
          <p className="leading-relaxed font-body">{chronologicalNote}</p>
        </div>
      </div>

      {/* Linear Chronological Grid with Sequence Numbers */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
        {filteredTitles.map((item, index) => (
          <MovieCard
            key={item.id}
            item={item}
            index={index}
            isWatched={isWatched(item.id)}
            onToggleWatched={onToggleWatched}
          />
        ))}
      </div>
    </div>
  );
};
