/**
 * src/components/SearchBar.tsx
 *
 * Real-time search bar with clear button and keyboard shortcuts.
 */

import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search titles by name or phase (e.g. Iron Man, Loki, Phase 3)...',
}) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
        <Search className="w-4 h-4" />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-surface text-text placeholder-text-muted/60 border border-border focus:border-accent hover:border-border/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent text-sm transition-colors"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search query"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-muted hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-r-lg"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
