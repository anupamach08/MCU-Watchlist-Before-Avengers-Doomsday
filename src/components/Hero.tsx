/**
 * src/components/Hero.tsx
 *
 * Cinematic Hero component with:
 * - Headline clamp(2.5rem, 7vw, 5rem)
 * - Crimson atmospheric backdrop
 * - Primary & Secondary action buttons
 * - Prominent fan disclaimer
 * - Live dynamic Doomsday countdown
 */

import React, { useState, useEffect } from 'react';
import { siteConfig, computeCountdown } from '../data/siteConfig';
import { Compass, Flame, AlertCircle } from 'lucide-react';

interface HeroProps {
  onExploreWatchlist: () => void;
  onSeeImportantPicks: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWatchlist,
  onSeeImportantPicks,
}) => {
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
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-border">
      {/* Crimson Atmospheric Radial Spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[850px] h-[350px] sm:h-[600px] lg:h-[850px] rounded-full blur-3xl pointer-events-none opacity-20 bg-accent -z-10"
        aria-hidden="true"
      />

      {/* Subtle Vignette Background */}
      <div
        className="absolute inset-0 bg-radial-gradient from-transparent via-bg/40 to-bg pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Release Status / Countdown Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border shadow-sm text-xs sm:text-sm font-mono text-text mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="text-text-muted">Target Theatrical Release:</span>
          <span className="text-accent-text font-semibold">
            {countdown.isReleased ? 'Now in theatres' : countdown.displayText}
          </span>
        </div>

        {/* Hero Headline: Oswald, bold, condensed uppercase */}
        <h1
          className="font-heading font-bold uppercase tracking-tight text-text leading-[1.05] drop-shadow-sm mb-6 max-w-4xl"
          style={{
            fontSize: 'clamp(2.25rem, 6.5vw, 4.75rem)',
          }}
        >
          {siteConfig.headline}
        </h1>

        {/* Supporting text: Inter, secondary text token */}
        <p className="text-base sm:text-lg lg:text-xl text-text-muted max-w-2xl mx-auto mb-8 leading-relaxed font-body">
          {siteConfig.supportingText}
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md sm:max-w-none mb-8">
          <button
            type="button"
            onClick={onExploreWatchlist}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold text-white bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Compass className="w-5 h-5" />
            <span>{siteConfig.primaryCtaText}</span>
          </button>

          <button
            type="button"
            onClick={onSeeImportantPicks}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold text-text bg-surface hover:bg-surface-2 hover:text-white border border-border transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Flame className="w-5 h-5 text-accent-text" />
            <span>{siteConfig.secondaryCtaText}</span>
          </button>
        </div>

        {/* Hero Fan Disclaimer: Visible, meets contrast requirements */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface/80 border border-border/80 text-xs text-text-muted max-w-xl">
          <AlertCircle className="w-4 h-4 text-accent-text shrink-0" />
          <span>{siteConfig.heroDisclaimer}</span>
        </div>
      </div>
    </section>
  );
};
