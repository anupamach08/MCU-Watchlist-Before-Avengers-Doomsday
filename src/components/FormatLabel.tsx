/**
 * src/components/FormatLabel.tsx
 *
 * Renders the Section 7 editorial label pill.
 * Movies receive no label. Non-movies render with WCAG AA compliant colors:
 * - Green pill for "Most Important" (Loki)
 * - Amber highlight for "Masterpiece" inside Moon Knight, cleanly formatted with bullet separator
 * - Neutral dark-surface pill for standard labels
 */

import React from 'react';
import type { TitleItem } from '../data/titles';

interface FormatLabelProps {
  item: TitleItem;
  className?: string;
}

export const FormatLabel: React.FC<FormatLabelProps> = ({ item, className = '' }) => {
  // Hard requirement: Movies get no tag
  if (item.format === 'Movie' || !item.label) {
    return null;
  }

  // Green tag for Loki Seasons 1 & 2
  if (item.highlight === 'important') {
    return (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded text-[12px] font-medium tracking-wide bg-green-bg text-green-text border border-green-border shadow-sm ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-text mr-1.5 animate-pulse" />
        {item.label}
      </span>
    );
  }

  // Moon Knight with amber highlight on "Masterpiece", formatted cleanly with bullet separator
  if (item.id === 'moon-knight' || (item.highlight === 'masterpiece' && item.label.includes('Masterpiece'))) {
    return (
      <span
        className={`inline-flex flex-wrap items-center gap-1 px-2 py-0.5 rounded text-[11px] sm:text-[12px] font-medium leading-snug bg-surface-2 text-text border border-border shadow-sm ${className}`}
      >
        <span>TV Mini-Series</span>
        <span className="text-text-muted/60">•</span>
        <span>Can skip but</span>
        <span className="text-amber-text font-bold">Masterpiece</span>
      </span>
    );
  }

  // Standard neutral pill
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[12px] font-medium tracking-wide bg-surface-2 text-text-muted border border-border shadow-sm ${className}`}
    >
      {item.label}
    </span>
  );
};
