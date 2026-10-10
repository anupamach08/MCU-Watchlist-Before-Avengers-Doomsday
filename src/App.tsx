/**
 * src/App.tsx
 *
 * Main application component for MCU Doomsday Watchlist:
 * - Hash routing (#/all, #/release, #/chronological)
 * - Real-time title search and multi-criteria filters
 * - LocalStorage watched progress tracking
 * - Essential Picks anchor and smooth scrolling
 * - WCAG AA accessible contrast, responsive layout, dark cinematic styling
 */

import { useState, useMemo } from 'react';
import { titlesData } from './data/titles';
import { releaseOrderIds } from './data/releaseOrder';
import { chronologicalOrderIds } from './data/chronologicalOrder';
import { useHashRoute, type ViewTab } from './hooks/useHashRoute';
import { useWatchProgress } from './hooks/useWatchProgress';
import { filterTitles, initialFilterState, type FilterState } from './utils/filterTitles';
import { sortTitlesAlphabetically } from './utils/sortTitles';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EssentialPicks } from './components/EssentialPicks';
import { NavigationTabs } from './components/NavigationTabs';
import { SearchBar } from './components/SearchBar';
import { FilterPanel } from './components/FilterPanel';
import { WatchProgress } from './components/WatchProgress';
import { MovieGrid } from './components/MovieGrid';
import { Footer } from './components/Footer';
import { SourcesModal } from './components/SourcesModal';

export function App() {
  const [activeTab, setActiveTab] = useHashRoute();
  const { watchedIds, toggleWatched, isWatched, resetWatched } = useWatchProgress();

  const [filters, setFilters] = useState<FilterState>(initialFilterState);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);

  // Base list of titles per viewing mode
  const currentModeTitles = useMemo(() => {
    switch (activeTab) {
      case 'all': {
        // Derived from release dataset, deduplicated by ID, sorted alphabetically
        const rawList = releaseOrderIds.map((id) => titlesData[id]).filter(Boolean);
        return sortTitlesAlphabetically(rawList, sortDirection);
      }
      case 'release': {
        // Exact release date sequence
        return releaseOrderIds.map((id) => titlesData[id]).filter(Boolean);
      }
      case 'chronological': {
        // Exact chronological sequence (60 items)
        return chronologicalOrderIds.map((id) => titlesData[id]).filter(Boolean);
      }
      default:
        return releaseOrderIds.map((id) => titlesData[id]).filter(Boolean);
    }
  }, [activeTab, sortDirection]);

  // Apply search and filters
  const filteredTitles = useMemo(() => {
    return filterTitles(currentModeTitles, filters, watchedIds);
  }, [currentModeTitles, filters, watchedIds]);

  // Compute watched count for current view mode
  const currentModeWatchedCount = useMemo(() => {
    return currentModeTitles.filter((item) => watchedIds.has(item.id)).length;
  }, [currentModeTitles, watchedIds]);

  const handleTabChange = (tab: ViewTab) => {
    setActiveTab(tab);
  };

  const handleExploreWatchlist = () => {
    const el = document.getElementById('watchlist-tabs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSeeImportantPicks = () => {
    const el = document.getElementById('essential-picks');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setFilters(initialFilterState);
  };

  const handleToggleSortDirection = () => {
    setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col selection:bg-accent selection:text-white">
      {/* 1. Header */}
      <Header onOpenSources={() => setIsSourcesModalOpen(true)} />

      {/* 2. Hero Section */}
      <Hero
        onExploreWatchlist={handleExploreWatchlist}
        onSeeImportantPicks={handleSeeImportantPicks}
      />

      {/* 3. Most Important Picks Section (Target of Hero 2nd CTA) */}
      <EssentialPicks
        isWatched={isWatched}
        onToggleWatched={toggleWatched}
      />

      {/* 4. Sticky Navigation Tabs */}
      <NavigationTabs
        activeTab={activeTab}
        onTabChange={handleTabChange}
        counts={{
          all: 66,
          release: releaseOrderIds.length,
          chronological: chronologicalOrderIds.length,
        }}
      />

      {/* 5. Main Watchlist Workspace */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-4">
          <SearchBar
            value={filters.searchQuery}
            onChange={(q) => setFilters((prev) => ({ ...prev, searchQuery: q }))}
          />
        </div>

        {/* Filter Panel */}
        <FilterPanel
          filters={filters}
          onChange={setFilters}
          onClear={handleResetFilters}
          activeTab={activeTab}
          sortDirection={sortDirection}
          onToggleSortDirection={handleToggleSortDirection}
          totalFilteredCount={filteredTitles.length}
        />

        {/* Watch Progress Tracker */}
        <WatchProgress
          watchedCount={currentModeWatchedCount}
          totalCount={currentModeTitles.length}
          onReset={resetWatched}
        />

        {/* The Movie Grid for the current tab */}
        <MovieGrid
          filteredTitles={filteredTitles}
          allTitles={currentModeTitles}
          activeTab={activeTab}
          sortDirection={sortDirection}
          isWatched={isWatched}
          onToggleWatched={toggleWatched}
          onResetFilters={handleResetFilters}
        />
      </main>

      {/* 6. Footer */}
      <Footer
        onSelectTab={handleTabChange}
        onOpenSources={() => setIsSourcesModalOpen(true)}
      />

      {/* 7. Sources & Methodology Modal */}
      <SourcesModal
        isOpen={isSourcesModalOpen}
        onClose={() => setIsSourcesModalOpen(false)}
      />
    </div>
  );
}

export default App;
