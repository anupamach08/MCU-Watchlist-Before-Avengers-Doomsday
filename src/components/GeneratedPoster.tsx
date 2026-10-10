/**
 * src/components/GeneratedPoster.tsx
 *
 * Copyright-free generated 2:3 portrait poster component.
 * Built entirely from algorithmic CSS/SVG vector elements:
 * 1. Seeded deterministic gradient background
 * 2. Abstract generative geometry (rays, grids, particles, concentric rings, halftone)
 * 3. Tinted glow & atmospheric lighting
 * 4. Procedural film-grain & vignette
 * 5. Monogram/badge identifier (P1, S2, AEG, etc.)
 * 6. Format strip (FEATURE FILM, SERIES, SPECIAL, etc.)
 * 7. Scrim-backed title artwork passing 4.5:1 contrast
 *
 * Supports pluggable external CC0 posters with automatic fallback on load error.
 */

import React, { useState } from 'react';
import type { TitleItem } from '../data/titles';
import { posterThemes, getFormatShortLabel } from '../utils/posterColor';

interface GeneratedPosterProps {
  item: TitleItem;
  isWatched?: boolean;
}

export const GeneratedPoster: React.FC<GeneratedPosterProps> = ({ item, isWatched = false }) => {
  const [imageError, setImageError] = useState(false);
  const theme = posterThemes[item.posterHue] || posterThemes.crimson;
  const formatLabel = getFormatShortLabel(item.format);

  // Pattern SVG renderer
  const renderPattern = () => {
    switch (item.patternType) {
      case 'rays':
        return (
          <svg
            className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 300"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`ray-grad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="0,0 80,0 200,300 120,300" fill={`url(#ray-grad-${item.id})`} />
            <polygon points="120,0 160,0 60,300 20,300" fill={`url(#ray-grad-${item.id})`} opacity="0.4" />
          </svg>
        );

      case 'grid':
        return (
          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 300"
          >
            <defs>
              <pattern id={`grid-pat-${item.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#FFFFFF" strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width="200" height="300" fill={`url(#grid-pat-${item.id})`} />
          </svg>
        );

      case 'particles':
        return (
          <svg
            className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 300"
          >
            <circle cx="35" cy="40" r="1.5" fill="#FFFFFF" opacity="0.6" />
            <circle cx="160" cy="55" r="2" fill="#FFFFFF" opacity="0.8" />
            <circle cx="95" cy="90" r="1" fill="#FFFFFF" opacity="0.5" />
            <circle cx="140" cy="130" r="2.5" fill="#FFFFFF" opacity="0.7" />
            <circle cx="45" cy="170" r="1.5" fill="#FFFFFF" opacity="0.4" />
            <circle cx="175" cy="210" r="1.8" fill="#FFFFFF" opacity="0.6" />
            <circle cx="70" cy="245" r="2.2" fill="#FFFFFF" opacity="0.8" />
            <circle cx="120" cy="275" r="1.2" fill="#FFFFFF" opacity="0.5" />
          </svg>
        );

      case 'concentric':
        return (
          <svg
            className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 300"
          >
            <circle cx="100" cy="130" r="30" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="100" cy="130" r="55" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="100" cy="130" r="85" fill="none" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="6 4" />
            <circle cx="100" cy="130" r="115" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
          </svg>
        );

      case 'halftone':
        return (
          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 300"
          >
            <defs>
              <pattern id={`dot-pat-${item.id}`} width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="6" cy="6" r="1.5" fill="#FFFFFF" />
              </pattern>
            </defs>
            <rect width="200" height="300" fill={`url(#dot-pat-${item.id})`} />
          </svg>
        );

      default:
        return null;
    }
  };

  const hasPluggablePoster = item.poster && !imageError;

  return (
    <div
      className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-surface border border-border/80 shadow-md transition-transform duration-200 group-hover:scale-[1.02] group-hover:shadow-lg group-hover:border-accent/40"
      style={{
        background: theme.background,
      }}
    >
      {/* Pluggable external poster if available */}
      {hasPluggablePoster ? (
        <img
          src={item.poster!.url}
          alt={item.poster!.alt || `${item.title} Poster`}
          onError={() => setImageError(true)}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      ) : (
        /* Algorithmic CSS/SVG Poster Canvas */
        <div className="absolute inset-0 flex flex-col justify-between p-3 select-none">
          {/* Subtle radial glow in background */}
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-2xl pointer-events-none"
            style={{ backgroundColor: theme.glowColor }}
          />

          {/* Abstract Generative Geometry */}
          {renderPattern()}

          {/* Film Grain Vignette Layer */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 pointer-events-none" />

          {/* Top Format Strip */}
          <div className="relative z-10 flex items-center justify-between">
            <span
              className="text-[10px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10"
              style={{ color: theme.formatColor }}
            >
              {formatLabel}
            </span>

            {item.phase && (
              <span className="text-[10px] font-medium tracking-wider text-text-muted/80 bg-black/40 px-1.5 py-0.5 rounded">
                {item.phase}
              </span>
            )}
          </div>

          {/* Center Monogram / Badge Artwork */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center border shadow-inner backdrop-blur-md"
              style={{
                backgroundColor: theme.badgeBg,
                borderColor: theme.badgeBorder,
              }}
            >
              <span
                className="font-heading text-2xl sm:text-3xl font-bold tracking-wider"
                style={{ color: theme.badgeText }}
              >
                {item.badgeText}
              </span>
            </div>
          </div>

          {/* Bottom Scrim & Typeset Artwork Title (contrast > 20:1) */}
          <div className="relative z-10 mt-auto pt-4 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/90 to-transparent -mx-3 -mb-3 px-3 pb-3">
            <p className="font-heading text-sm sm:text-base font-bold text-white tracking-wide uppercase line-clamp-2 drop-shadow-md leading-tight text-center">
              {item.title}
            </p>
          </div>
        </div>
      )}

      {/* Watched Badge Indicator Overlay */}
      {isWatched && (
        <div className="absolute top-2 right-2 z-20 flex items-center justify-center w-7 h-7 rounded-full bg-accent text-white shadow-lg border border-white/20">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </div>
  );
};
