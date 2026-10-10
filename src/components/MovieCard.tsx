/**
 * src/components/MovieCard.tsx
 *
 * Card component for every title:
 * 1. 2:3 portrait poster with custom code-based vector artwork
 * 2. Real HTML title directly beneath poster (wraps naturally, NEVER truncated)
 * 3. Section 7 editorial label directly beneath title (only for titles that have one)
 * 4. Interactive watched toggle with ONLY the checkmark icon (✓), no "Mark" text,
 *    cleanly aligned and fully responsive across all screen sizes.
 */

import React from 'react';
import { Check } from 'lucide-react';
import type { TitleItem } from '../data/titles';
import { GeneratedPoster } from './GeneratedPoster';
import { FormatLabel } from './FormatLabel';

interface MovieCardProps {
  item: TitleItem;
  isWatched: boolean;
  onToggleWatched: (id: string) => void;
  index?: number;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  item,
  isWatched,
  onToggleWatched,
  index,
}) => {
  return (
    <article
      className="group relative flex flex-col bg-surface rounded-xl p-3 border border-border hover:border-border/80 hover:bg-surface-2/40 transition-all duration-200 shadow-sm"
      aria-label={`${item.title} card`}
    >
      {/* 1. 2:3 Portrait Poster */}
      <div className="relative w-full">
        <GeneratedPoster item={item} />

        {/* Clean Checkmark-Only Watched Action Button (No "Mark" text) */}
        <button
          type="button"
          onClick={() => onToggleWatched(item.id)}
          aria-label={isWatched ? `Mark ${item.title} as unwatched` : `Mark ${item.title} as watched`}
          title={isWatched ? 'Marked as watched (click to unmark)' : 'Mark as watched'}
          className={`absolute top-2.5 right-2.5 z-20 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full backdrop-blur-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
            isWatched
              ? 'bg-accent text-white shadow-lg shadow-accent/40 scale-105 border border-white/30'
              : 'bg-surface/85 text-text-muted hover:text-white hover:bg-surface-2 border border-border/80 hover:border-accent-text/60'
          }`}
        >
          <Check
            className={`w-4 h-4 transition-transform ${
              isWatched ? 'stroke-[3] scale-110' : 'opacity-70 group-hover:opacity-100'
            }`}
          />
        </button>
      </div>

      {/* Info Block Directly Beneath Poster */}
      <div className="flex flex-col flex-grow pt-3">
        {/* Sequence Index badge if present (e.g. chronological or release order number) */}
        {typeof index === 'number' && (
          <span className="text-[12px] font-semibold tracking-wider text-text-muted mb-1">
            #{index + 1}
          </span>
        )}

        {/* 2. Real HTML Title: wraps naturally, NEVER truncated */}
        <h3 className="text-[15px] sm:text-[16px] font-semibold text-text leading-[1.3] break-words">
          {item.title}
        </h3>

        {/* 3. Label from Section 7: only rendered for titles that have one */}
        {item.label && (
          <div className="mt-2 pt-1 flex flex-wrap gap-1.5">
            <FormatLabel item={item} />
          </div>
        )}
      </div>
    </article>
  );
};
