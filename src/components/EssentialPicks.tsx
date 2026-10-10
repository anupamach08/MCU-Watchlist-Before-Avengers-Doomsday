/**
 * src/components/EssentialPicks.tsx
 *
 * Dedicated section for "Most Important Picks", anchor target for Hero button:
 * - Driven strictly by `highlight: 'important'` (Loki Season 1 & Loki Season 2)
 * - Required editorial disclaimer:
 *   "These priorities reflect the author's editorial opinion, not an official Marvel Studios viewing requirement."
 * - No invented story connections.
 */

import React from 'react';
import { titlesData } from '../data/titles';
import { MovieCard } from './MovieCard';
import { Sparkles, Info } from 'lucide-react';

interface EssentialPicksProps {
  isWatched: (id: string) => boolean;
  onToggleWatched: (id: string) => void;
}

export const EssentialPicks: React.FC<EssentialPicksProps> = ({
  isWatched,
  onToggleWatched,
}) => {
  // Grab titles flagged with highlight === 'important' (Loki Season 1 and Loki Season 2)
  const importantTitles = Object.values(titlesData).filter(
    (item) => item.highlight === 'important'
  );

  return (
    <section
      id="essential-picks"
      className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border bg-gradient-to-b from-bg to-surface/30"
      aria-labelledby="essential-picks-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-bg text-green-text border border-green-border mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Priority Multiverse Focus</span>
            </div>
            <h2
              id="essential-picks-heading"
              className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-text"
            >
              Most Important Picks
            </h2>
          </div>

          {/* Author Editorial Note (verbatim per spec) */}
          <div className="flex items-start gap-2 max-w-lg p-3 rounded-lg bg-surface border border-border text-xs text-text-muted">
            <Info className="w-4 h-4 text-accent-text shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              These priorities reflect the author's editorial opinion, not an official Marvel Studios viewing requirement.
            </p>
          </div>
        </div>

        {/* Card Grid for the Important Picks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {importantTitles.map((item) => (
            <MovieCard
              key={item.id}
              item={item}
              isWatched={isWatched(item.id)}
              onToggleWatched={onToggleWatched}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
