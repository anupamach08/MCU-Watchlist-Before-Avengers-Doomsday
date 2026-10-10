/**
 * src/components/Footer.tsx
 *
 * Dark footer matching site aesthetic:
 * - Brand identity
 * - Direct links to All (A–Z), Release Date, Chronological, and Sources & Methodology
 * - Full legal fan disclaimer
 * - Dynamic copyright for Anupam Acharya covering original code, design and writing
 */

import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Shield, BookOpen } from 'lucide-react';
import type { ViewTab } from '../hooks/useHashRoute';

interface FooterProps {
  onSelectTab: (tab: ViewTab) => void;
  onOpenSources: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenSources }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/80 text-text-muted mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Col 1: Identity & Purpose */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-surface-2 border border-border flex items-center justify-center">
                <Shield className="w-4 h-4 text-accent" />
              </div>
              <span className="font-heading text-lg font-bold uppercase tracking-wider text-text">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed font-body">
              An independent, opinionated viewing guide designed to help Marvel fans navigate the Marvel Cinematic Universe before Avengers: Doomsday.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text font-heading">
              Viewing Modes
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#/all"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('all');
                  }}
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                >
                  All Titles (A–Z) — 66 Titles
                </a>
              </li>
              <li>
                <a
                  href="#/release"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('release');
                  }}
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                >
                  Release Date Order — Sagas & Phases
                </a>
              </li>
              <li>
                <a
                  href="#/chronological"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('chronological');
                  }}
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                >
                  Chronological Order — 60 Titles
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenSources}
                  className="inline-flex items-center gap-1.5 text-accent-text hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Sources & Methodology</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal Scope */}
          <div className="space-y-2 text-xs">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text font-heading">
              Notice of Independence
            </h4>
            <p className="leading-relaxed">
              This site is not affiliated with, endorsed by, or sponsored by Marvel Studios, Disney, or any related entity.
            </p>
            <p className="text-[11px] text-text-muted/80">
              Posters are original algorithmic CSS/SVG vector illustrations. No copyrighted trademarks, character logos, or film stills are used.
            </p>
          </div>
        </div>

        {/* Full Disclaimer Banner */}
        <div className="pt-8 border-t border-border/60 space-y-4">
          <p className="text-xs text-text-muted leading-relaxed font-body">
            {siteConfig.fullDisclaimer}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted/90 pt-3">
            <p>
              © {currentYear} {siteConfig.author}. All rights reserved.
            </p>
            <p className="text-center sm:text-right text-[11px]">
              Copyright covers only the site's original code, design, and editorial writing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
