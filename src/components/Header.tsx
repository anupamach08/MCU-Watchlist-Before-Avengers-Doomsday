/**
 * src/components/Header.tsx
 *
 * Top site header with brand badge, countdown pill, and methodology quick link.
 */

import React, { useEffect, useState } from 'react';
import { siteConfig, computeCountdown } from '../data/siteConfig';
import { Shield, BookOpen, Clock } from 'lucide-react';

interface HeaderProps {
  onOpenSources: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSources }) => {
  const [countdown, setCountdown] = useState(() =>
    computeCountdown(siteConfig.doomsdayReleaseDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(computeCountdown(siteConfig.doomsdayReleaseDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="border-b border-border bg-bg/80 backdrop-blur-md sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <a
          href="#/all"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md p-1"
        >
          <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-accent transition-colors">
            <Shield className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-heading text-lg sm:text-xl font-bold tracking-wider uppercase text-text group-hover:text-accent-text transition-colors">
            {siteConfig.name}
          </span>
        </a>

        {/* Live Countdown & Methodology CTA */}
        <div className="flex items-center gap-3">
          {/* Target Countdown Pill */}
          <div
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-surface border border-border text-text"
            title="Avengers: Doomsday Release Countdown"
          >
            <Clock className="w-3.5 h-3.5 text-accent-text animate-pulse" />
            <span>{countdown.displayText}</span>
          </div>

          <button
            type="button"
            onClick={onOpenSources}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-surface text-text hover:bg-surface-2 hover:text-white border border-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <BookOpen className="w-4 h-4 text-accent-text" />
            <span className="hidden xs:inline">Sources &</span> Methodology
          </button>
        </div>
      </div>
    </header>
  );
};
