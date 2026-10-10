/**
 * src/hooks/useHashRoute.ts
 *
 * Synchronizes navigation tab state with URL hash (#/all, #/release, #/chronological).
 * Allows shareable deep-linking with zero page reloads.
 */

import { useState, useEffect, useCallback } from 'react';

export type ViewTab = 'all' | 'release' | 'chronological';

export function useHashRoute(): [ViewTab, (tab: ViewTab) => void] {
  const getTabFromHash = (): ViewTab => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#/release' || hash === '#release') return 'release';
    if (hash === '#/chronological' || hash === '#chronological') return 'chronological';
    if (hash === '#/all' || hash === '#all') return 'all';
    return 'all';
  };

  const [activeTab, setActiveTabState] = useState<ViewTab>(getTabFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTabState(getTabFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#/all');
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const setActiveTab = useCallback((tab: ViewTab) => {
    setActiveTabState(tab);
    const newHash = `#/${tab}`;
    if (window.location.hash !== newHash) {
      window.history.pushState(null, '', newHash);
    }
  }, []);

  return [activeTab, setActiveTab];
}
