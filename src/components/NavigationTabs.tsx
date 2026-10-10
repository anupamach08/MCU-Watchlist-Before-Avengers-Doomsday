/**
 * src/components/NavigationTabs.tsx
 *
 * Sticky navigation tab bar for the 3 viewing modes:
 * 1. All (A–Z) (#/all)
 * 2. Release Date (#/release)
 * 3. Chronological (#/chronological)
 *
 * Active state: filled accent background, white text, underline.
 */

import React from 'react';
import type { ViewTab } from '../hooks/useHashRoute';
import { SortAsc, Calendar, Clock } from 'lucide-react';

interface NavigationTabsProps {
  activeTab: ViewTab;
  onTabChange: (tab: ViewTab) => void;
  counts: {
    all: number;
    release: number;
    chronological: number;
  };
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  activeTab,
  onTabChange,
  counts,
}) => {
  const tabs = [
    {
      id: 'all' as ViewTab,
      label: 'All (A–Z)',
      icon: SortAsc,
      count: counts.all,
      subtitle: '66 unique titles',
    },
    {
      id: 'release' as ViewTab,
      label: 'Release Date',
      icon: Calendar,
      count: counts.release,
      subtitle: 'Sagas & Phases',
    },
    {
      id: 'chronological' as ViewTab,
      label: 'Chronological',
      icon: Clock,
      count: counts.chronological,
      subtitle: 'Author viewing order',
    },
  ];

  return (
    <nav
      id="watchlist-tabs"
      aria-label="Watchlist viewing modes"
      className="sticky top-0 z-30 bg-bg/95 backdrop-blur-md border-b border-border py-3 px-4 shadow-md transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onTabChange(tab.id)}
                className={`relative flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? 'bg-accent text-white shadow-md border-b-2 border-white'
                    : 'bg-surface text-text hover:bg-surface-2 hover:text-white border border-border'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-accent-text'}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full font-mono ${
                    isActive ? 'bg-black/30 text-white' : 'bg-surface-2 text-text-muted'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
