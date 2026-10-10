/**
 * src/components/GeneratedPoster.tsx
 *
 * Copyright-compliant cinematic poster component.
 *
 * STRICT LICENSING POLICY:
 * Does NOT assume images from TMDB, Google Images, or fan wikis are copyright-free.
 * Renders an external image ONLY if explicitly verified with a valid license (CC0,
 * Public Domain, or authorized API) and full attribution metadata.
 *
 * If a suitable licensed poster cannot be verified, it displays an original
 * cinematic vector placeholder featuring:
 * 1. Thematic code-based SVG illustration representing core movie symbols
 * 2. Deterministic phase color palette and ambient lighting
 * 3. Movie title prominently typeset on a high-contrast dark scrim
 * 4. Format strip indicator (FEATURE FILM, SERIES, SPECIAL, etc.)
 */

import React, { useState } from 'react';
import type { TitleItem } from '../data/titles';
import { posterThemes, getFormatShortLabel } from '../utils/posterColor';
import { PosterIllustration } from './posters/PosterIllustrations';
import { getVerifiedPoster } from '../data/posterConfig';
import { ShieldCheck } from 'lucide-react';

interface GeneratedPosterProps {
  item: TitleItem;
}

export const GeneratedPoster: React.FC<GeneratedPosterProps> = ({ item }) => {
  const [imageError, setImageError] = useState(false);
  const theme = posterThemes[item.posterHue] || posterThemes.crimson;
  const formatLabel = getFormatShortLabel(item.format);

  // Check centralized registry for verified licensing compliance
  const verifiedPoster = getVerifiedPoster(item.id, item.poster);
  const canRenderExternalImage = verifiedPoster !== null && !imageError;

  // Background pattern SVG renderer for the cinematic placeholder
  const renderPattern = () => {
    switch (item.patternType) {
      case 'rays':
        return (
          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 300"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`ray-grad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="0,0 80,0 200,300 120,300" fill={`url(#ray-grad-${item.id})`} />
            <polygon points="120,0 160,0 60,300 20,300" fill={`url(#ray-grad-${item.id})`} opacity="0.3" />
          </svg>
        );

      case 'grid':
        return (
          <svg
            className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
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
            className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
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
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
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
            className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
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

  return (
    <div
      className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-surface border border-border/80 shadow-md transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:border-accent/40"
      style={{
        background: theme.background,
      }}
    >
      {/* 1. Verified Licensed Poster Image (if explicitly verified) */}
      {canRenderExternalImage ? (
        <div className="relative w-full h-full">
          <img
            src={verifiedPoster.url}
            alt={verifiedPoster.alt || `${item.title} Poster`}
            onError={() => setImageError(true)}
            loading="lazy"
            className="w-full h-full object-cover"
          />

          {/* Legal Attribution Badge */}
          <div className="absolute bottom-2 left-2 right-2 z-10 flex items-center justify-between text-[10px] bg-black/85 text-text-muted px-2 py-1 rounded backdrop-blur-md border border-white/10">
            <span className="flex items-center gap-1 text-green-text font-medium truncate">
              <ShieldCheck className="w-3 h-3 text-green-text shrink-0" />
              <span>{verifiedPoster.licenseName}</span>
            </span>
            {verifiedPoster.sourceUrl && (
              <a
                href={verifiedPoster.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white shrink-0 ml-2"
                onClick={(e) => e.stopPropagation()}
              >
                Source
              </a>
            )}
          </div>
        </div>
      ) : (
        /* 2. Original Cinematic Vector Placeholder (Default for 100% compliance) */
        <div className="absolute inset-0 flex flex-col justify-between p-3 select-none">
          {/* Subtle radial glow in background */}
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-2xl pointer-events-none"
            style={{ backgroundColor: theme.glowColor }}
          />

          {/* Abstract Generative Geometry */}
          {renderPattern()}

          {/* Film Grain Vignette Layer */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/70 pointer-events-none" />

          {/* Top Format Strip */}
          <div className="relative z-10 flex items-center justify-between pr-8">
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

          {/* Center Thematic Vector Illustration */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto transition-transform duration-300 group-hover:scale-105">
            <PosterIllustration id={item.id} className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-2xl" />
          </div>

          {/* Bottom Scrim & Typeset Artwork Title (Passes WCAG contrast > 20:1) */}
          <div className="relative z-10 mt-auto pt-4 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/90 to-transparent -mx-3 -mb-3 px-3 pb-3">
            <p className="font-heading text-sm sm:text-base font-bold text-white tracking-wide uppercase line-clamp-2 drop-shadow-md leading-tight text-center">
              {item.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
