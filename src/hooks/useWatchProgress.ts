/**
 * src/hooks/useWatchProgress.ts
 *
 * Persists watched status for each MCU title in LocalStorage.
 * No user accounts, database, or network requests.
 */

import { useState, useCallback } from 'react';

const STORAGE_KEY = 'mcu_doomsday_watched_ids';

export function useWatchProgress() {
  const [watchedIds, setWatchedIds] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: string[] = JSON.parse(stored);
        return new Set(parsed);
      }
    } catch {
      // LocalStorage access fallback
    }
    return new Set<string>();
  });

  const saveToStorage = useCallback((set: Set<string>) => {
    try {
      const arr = Array.from(set);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    } catch {
      // Ignore write errors
    }
  }, []);

  const toggleWatched = useCallback(
    (id: string) => {
      setWatchedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        saveToStorage(next);
        return next;
      });
    },
    [saveToStorage]
  );

  const isWatched = useCallback(
    (id: string): boolean => {
      return watchedIds.has(id);
    },
    [watchedIds]
  );

  const resetWatched = useCallback(() => {
    const emptySet = new Set<string>();
    setWatchedIds(emptySet);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore removal error
    }
  }, []);

  return {
    watchedIds,
    toggleWatched,
    isWatched,
    resetWatched,
  };
}
