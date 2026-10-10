/**
 * src/components/posters/PosterIllustrations.tsx
 *
 * Dedicated code-based SVG vector illustrations for every MCU title.
 * Each title features a distinct, thematic, copyright-compliant visual motif
 * representing its core symbols, themes, and aesthetic without any copyrighted
 * actor likenesses, studio logos, or direct film stills.
 */

import React from 'react';

interface IllustrationProps {
  id: string;
  className?: string;
}

export const PosterIllustration: React.FC<IllustrationProps> = ({ id, className = 'w-24 h-24 sm:w-28 sm:h-28' }) => {
  switch (id) {
    // 1. Iron Man - Classic Arc Reactor
    case 'iron-man':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="50" cy="50" r="38" stroke="#38BDF8" strokeWidth="3" opacity="0.8" />
          <circle cx="50" cy="50" r="28" fill="#0C4A6E" stroke="#0284C7" strokeWidth="2" />
          {/* Reactor Coils */}
          {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg) => (
            <rect
              key={deg}
              x="47"
              y="14"
              width="6"
              height="8"
              rx="1.5"
              fill="#F59E0B"
              transform={`rotate(${deg} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="14" fill="#38BDF8" className="animate-pulse" />
          <circle cx="50" cy="50" r="6" fill="#FFFFFF" />
        </svg>
      );

    // 2. The Incredible Hulk - Gamma Radiation Trefoil
    case 'the-incredible-hulk':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
          <path d="M50 15 L58 35 A15 15 0 0 1 42 35 Z" fill="#10B981" />
          <path d="M50 15 L58 35 A15 15 0 0 1 42 35 Z" fill="#10B981" transform="rotate(120 50 50)" />
          <path d="M50 15 L58 35 A15 15 0 0 1 42 35 Z" fill="#10B981" transform="rotate(240 50 50)" />
          <circle cx="50" cy="50" r="10" fill="#064E3B" stroke="#34D399" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="4" fill="#6EE7B7" />
        </svg>
      );

    // 3. Iron Man 2 - Triangular Vibranium Arc Reactor
    case 'iron-man-2':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#E11D2E" strokeWidth="2" opacity="0.6" />
          <polygon points="50,18 80,72 20,72" stroke="#38BDF8" strokeWidth="3" fill="#0C2438" />
          <polygon points="50,28 72,68 28,68" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
          <polygon points="50,38 64,64 36,64" fill="#38BDF8" />
          <circle cx="50" cy="52" r="6" fill="#FFFFFF" />
        </svg>
      );

    // 4. Thor - Stylized Mjolnir & Norse Rune
    case 'thor':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" />
          {/* Lightning arcs */}
          <path d="M22 25 L35 45 L28 50 L42 75" stroke="#38BDF8" strokeWidth="2" opacity="0.7" />
          <path d="M78 25 L65 45 L72 50 L58 75" stroke="#38BDF8" strokeWidth="2" opacity="0.7" />
          {/* Hammer Head */}
          <rect x="30" y="32" width="40" height="24" rx="3" fill="#334155" stroke="#94A3B8" strokeWidth="2.5" />
          <line x1="36" y1="32" x2="36" y2="56" stroke="#64748B" strokeWidth="1.5" />
          <line x1="64" y1="32" x2="64" y2="56" stroke="#64748B" strokeWidth="1.5" />
          {/* Handle */}
          <rect x="47" y="56" width="6" height="28" fill="#78350F" stroke="#B45309" strokeWidth="1" />
          <circle cx="50" cy="44" r="5" fill="#38BDF8" />
        </svg>
      );

    // 5. Captain America: The First Avenger - Vintage Shield
    case 'captain-america-the-first-avenger':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" fill="#E11D2E" stroke="#7F1D1D" strokeWidth="2" />
          <circle cx="50" cy="50" r="35" fill="#E2E8F0" />
          <circle cx="50" cy="50" r="26" fill="#E11D2E" />
          <circle cx="50" cy="50" r="17" fill="#1E3A8A" />
          {/* Star */}
          <polygon
            points="50,37 53,44 61,44 55,49 57,56 50,52 43,56 45,49 39,44 47,44"
            fill="#FFFFFF"
          />
        </svg>
      );

    // 6. The Avengers - Avengers 'A' Assembly Crest
    case 'the-avengers':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" stroke="#2563EB" strokeWidth="3" opacity="0.8" />
          <circle cx="50" cy="50" r="38" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="8 4" />
          {/* Stylized 'A' */}
          <path d="M48 20 L28 80 L39 80 L44 65 L60 65 L48 20 Z" fill="#E2E8F0" />
          <path d="M46 36 L54 58 L42 58 Z" fill="#0A0A0F" />
          {/* Arrow Chevron */}
          <path d="M40 50 L75 50 L68 44" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M75 50 L68 56" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    // 7. Iron Man 3 - Modular Shrapnel Circuit Core
    case 'iron-man-3':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#F59E0B" strokeWidth="2" opacity="0.5" />
          <circle cx="50" cy="50" r="32" stroke="#E11D2E" strokeWidth="2.5" />
          <path d="M30 50 L70 50 M50 30 L50 70 M35 35 L65 65 M35 65 L65 35" stroke="#F59E0B" strokeWidth="1.5" opacity="0.6" />
          <polygon points="50,32 66,62 34,62" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
          <circle cx="50" cy="52" r="5" fill="#E11D2E" />
        </svg>
      );

    // 8. Thor: The Dark World - Convergence & Aether Vortex
    case 'thor-the-dark-world':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#881337" strokeWidth="2" transform="rotate(25 50 50)" />
          <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#9333EA" strokeWidth="2" transform="rotate(-35 50 50)" />
          <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#E11D2E" strokeWidth="2" transform="rotate(80 50 50)" />
          <circle cx="50" cy="50" r="14" fill="#4C0519" stroke="#E11D2E" strokeWidth="2" />
          <circle cx="50" cy="50" r="6" fill="#F43F5E" />
        </svg>
      );

    // 9. Captain America: The Winter Soldier - Bionic Arm Star
    case 'captain-america-the-winter-soldier':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
          {/* Metallic cybernetic muscle grooves */}
          <path d="M15 35 Q50 30 85 35" stroke="#94A3B8" strokeWidth="1.5" />
          <path d="M12 50 Q50 45 88 50" stroke="#94A3B8" strokeWidth="1.5" />
          <path d="M15 65 Q50 60 85 65" stroke="#94A3B8" strokeWidth="1.5" />
          {/* Soviet Crimson Star */}
          <polygon
            points="50,26 56,42 74,42 60,52 65,68 50,58 35,68 40,52 26,42 44,42"
            fill="#E11D2E"
            stroke="#991B1B"
            strokeWidth="1.5"
          />
        </svg>
      );

    // 10. Guardians of the Galaxy - Nova Starburst & Cosmic Orb
    case 'guardians-of-the-galaxy':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 8-pointed Nova Star */}
          {[0, 45, 90, 135].map((deg) => (
            <path key={deg} d="M50 8 L54 50 L50 92 L46 50 Z" fill="#F59E0B" opacity="0.8" transform={`rotate(${deg} 50 50)`} />
          ))}
          <circle cx="50" cy="50" r="22" fill="#1E1B4B" stroke="#A855F7" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="10" fill="#C084FC" className="animate-pulse" />
        </svg>
      );

    // 11. Avengers: Age of Ultron - Ultron Robotic Faceplate
    case 'avengers-age-of-ultron':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,15 82,32 75,75 50,90 25,75 18,32" stroke="#64748B" strokeWidth="2" fill="#0F172A" />
          {/* Glowing Crimson Visor & Mouth */}
          <polygon points="32,45 46,47 44,52 32,50" fill="#E11D2E" />
          <polygon points="68,45 54,47 56,52 68,50" fill="#E11D2E" />
          <path d="M40 68 L50 74 L60 68 L50 71 Z" fill="#E11D2E" />
          <circle cx="50" cy="50" r="4" fill="#EF4444" />
        </svg>
      );

    // 12. Ant-Man - Quantum Hexagon & Helmet Antennas
    case 'ant-man':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,12 85,31 85,69 50,88 15,69 15,31" stroke="#E11D2E" strokeWidth="2.5" fill="#18181B" />
          <circle cx="50" cy="50" r="22" stroke="#71717A" strokeWidth="2" />
          {/* Red Eye Lenses */}
          <ellipse cx="38" cy="48" rx="7" ry="9" fill="#E11D2E" transform="rotate(-15 38 48)" />
          <ellipse cx="62" cy="48" rx="7" ry="9" fill="#E11D2E" transform="rotate(15 62 48)" />
          <path d="M46 64 L50 70 L54 64" stroke="#A1A1AA" strokeWidth="2" />
        </svg>
      );

    // 13. Captain America: Civil War - Fractured Clash Shield
    case 'captain-america-civil-war':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" fill="#1E293B" stroke="#475569" strokeWidth="2" />
          {/* Left half Cap, right half Stark */}
          <path d="M50 8 A42 42 0 0 0 50 92 Z" fill="#1D4ED8" />
          <path d="M50 8 A42 42 0 0 1 50 92 Z" fill="#991B1B" />
          {/* Bisecting Lightning Fracture */}
          <path d="M50 6 L48 35 L53 50 L47 70 L50 94" stroke="#F59E0B" strokeWidth="3" />
          <circle cx="50" cy="50" r="14" fill="#0A0A0F" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="50" cy="50" r="5" fill="#FFFFFF" />
        </svg>
      );

    // 14. Doctor Strange - Eye of Agamotto & Sanctum Window
    case 'doctor-strange':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#F59E0B" strokeWidth="2" opacity="0.7" />
          <circle cx="50" cy="50" r="34" stroke="#CA8A04" strokeWidth="1.5" />
          {/* Sanctum Sanctorum 4 curved lines */}
          <path d="M16 50 Q50 50 50 16" stroke="#F59E0B" strokeWidth="2.5" />
          <path d="M84 50 Q50 50 50 16" stroke="#F59E0B" strokeWidth="2.5" />
          <path d="M16 50 Q50 50 50 84" stroke="#F59E0B" strokeWidth="2.5" />
          <path d="M84 50 Q50 50 50 84" stroke="#F59E0B" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="7" fill="#10B981" />
        </svg>
      );

    // 15. Guardians of the Galaxy Vol. 2 - Yondu Yaka Arrow & Flame
    case 'guardians-of-the-galaxy-vol-2':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Looping sonic trail */}
          <path d="M15 80 C20 20 80 15 85 60 C88 85 45 90 35 65 C28 45 70 30 80 40" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
          <polygon points="80,35 88,42 78,45" fill="#EF4444" />
          <circle cx="50" cy="50" r="36" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.4" />
          <circle cx="50" cy="50" r="10" fill="#0284C7" opacity="0.7" />
        </svg>
      );

    // 16. Spider-Man: Homecoming - High-Tech Web Shooter Lens
    case 'spider-man-homecoming':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#E11D2E" strokeWidth="2.5" />
          {/* Web Lines */}
          <path d="M50 8 L50 92 M8 50 L92 50 M20 20 L80 80 M20 80 L80 20" stroke="#38BDF8" strokeWidth="1" opacity="0.5" />
          <circle cx="50" cy="50" r="28" stroke="#38BDF8" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="16" fill="#E11D2E" />
          <circle cx="50" cy="50" r="6" fill="#0A0A0F" />
        </svg>
      );

    // 17. Thor: Ragnarok - Sakaar Arena Crossed Swords & Synthwave Sun
    case 'thor-ragnarok':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Neon Sun */}
          <circle cx="50" cy="50" r="38" fill="#1E1B4B" stroke="#06B6D4" strokeWidth="2.5" />
          <path d="M20 50 L80 50 M22 58 L78 58 M26 66 L74 66 M32 74 L68 74" stroke="#F43F5E" strokeWidth="2" />
          {/* Crossed Blades */}
          <line x1="25" y1="25" x2="75" y2="75" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" />
          <line x1="75" y1="25" x2="25" y2="75" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="50" r="8" fill="#F43F5E" />
        </svg>
      );

    // 18. Black Panther - Wakandan Claw Necklace & Panther Glyph
    case 'black-panther':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" stroke="#A855F7" strokeWidth="2" opacity="0.7" />
          {/* Vibranium Claws Necklace Ring */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <polygon
              key={deg}
              points="50,18 53,28 47,28"
              fill="#E2E8F0"
              transform={`rotate(${deg} 50 50)`}
            />
          ))}
          {/* Panther Mask Cheek Angles */}
          <polygon points="50,34 68,48 58,72 50,78 42,72 32,48" stroke="#C084FC" strokeWidth="2" fill="#180828" />
          {/* Eye Slits */}
          <line x1="42" y1="52" x2="47" y2="54" stroke="#C084FC" strokeWidth="2" />
          <line x1="58" y1="52" x2="53" y2="54" stroke="#C084FC" strokeWidth="2" />
        </svg>
      );

    // 19. Avengers: Infinity War - Six Infinity Stones Cluster
    case 'avengers-infinity-war':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#F59E0B" strokeWidth="2" opacity="0.6" />
          {/* 6 Gems in circular harmony */}
          <circle cx="50" cy="22" r="7" fill="#F59E0B" stroke="#B45309" strokeWidth="1" /> {/* Mind */}
          <circle cx="74" cy="36" r="7" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1" /> {/* Space */}
          <circle cx="74" cy="64" r="7" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" /> {/* Reality */}
          <circle cx="50" cy="78" r="7" fill="#A855F7" stroke="#6B21A8" strokeWidth="1" /> {/* Power */}
          <circle cx="26" cy="64" r="7" fill="#10B981" stroke="#047857" strokeWidth="1" /> {/* Time */}
          <circle cx="26" cy="36" r="7" fill="#F97316" stroke="#C2410C" strokeWidth="1" /> {/* Soul */}
          {/* Central convergence node */}
          <circle cx="50" cy="50" r="8" fill="#FCD34D" />
        </svg>
      );

    // 20. Ant-Man & The Wasp - Dual Wasp Wings & Quantum Grid
    case 'ant-man-and-the-wasp':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#F59E0B" strokeWidth="2" opacity="0.6" />
          {/* Wasp Wings */}
          <ellipse cx="34" cy="40" rx="14" ry="24" fill="#FDE047" opacity="0.3" transform="rotate(-30 34 40)" />
          <ellipse cx="66" cy="40" rx="14" ry="24" fill="#FDE047" opacity="0.3" transform="rotate(30 66 40)" />
          <ellipse cx="36" cy="62" rx="10" ry="18" fill="#E11D2E" opacity="0.3" transform="rotate(-40 36 62)" />
          <ellipse cx="64" cy="62" rx="10" ry="18" fill="#E11D2E" opacity="0.3" transform="rotate(40 64 62)" />
          <circle cx="50" cy="50" r="10" fill="#F59E0B" />
        </svg>
      );

    // 21. Captain Marvel - Hala Starburst & Golden Chevron
    case 'captain-marvel':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Dual military stripes */}
          <path d="M10 50 L90 50" stroke="#1E3A8A" strokeWidth="12" opacity="0.8" />
          <path d="M10 50 L90 50" stroke="#DC2626" strokeWidth="6" />
          {/* 8-pointed golden star */}
          <polygon
            points="50,15 54,42 68,32 58,46 85,50 58,54 68,68 54,58 50,85 46,58 32,68 42,54 15,50 42,46 32,32 46,42"
            fill="#FBBF24"
            stroke="#D97706"
            strokeWidth="1.5"
          />
          <circle cx="50" cy="50" r="6" fill="#FFFFFF" />
        </svg>
      );

    // 22. Avengers: Endgame - Quantum Realm GPS & Mobius Loop
    case 'avengers-endgame':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mobius Infinity loop */}
          <path
            d="M30 50 C15 35 15 65 30 50 C45 35 55 65 70 50 C85 35 85 65 70 50 C55 35 45 65 30 50 Z"
            stroke="#A855F7"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="30" cy="50" r="6" fill="#38BDF8" />
          <circle cx="70" cy="50" r="6" fill="#E11D2E" />
          <circle cx="50" cy="50" r="5" fill="#FFFFFF" />
        </svg>
      );

    // 23. Spider-Man: Far from Home - E.D.I.T.H. Tactical Drone HUD
    case 'spider-man-far-from-home':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Glasses Frame Silhouette */}
          <rect x="18" y="38" width="28" height="22" rx="4" stroke="#38BDF8" strokeWidth="2.5" fill="#0C2438" />
          <rect x="54" y="38" width="28" height="22" rx="4" stroke="#38BDF8" strokeWidth="2.5" fill="#0C2438" />
          <line x1="46" y1="44" x2="54" y2="44" stroke="#38BDF8" strokeWidth="2" />
          {/* Drone Reticles */}
          <circle cx="32" cy="49" r="6" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="68" cy="49" r="6" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 2" />
        </svg>
      );

    // 24. WandaVision - Retro 1950s TV Set & Chaos Hexagon
    case 'wandavision':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* TV Antenna */}
          <line x1="28" y1="14" x2="48" y2="28" stroke="#E2E8F0" strokeWidth="2" />
          <line x1="72" y1="14" x2="52" y2="28" stroke="#E2E8F0" strokeWidth="2" />
          {/* TV Cabinet */}
          <rect x="16" y="28" width="68" height="52" rx="8" fill="#1C1014" stroke="#E11D2E" strokeWidth="2.5" />
          {/* CRT Screen with Chaos Hexagon */}
          <polygon points="46,38 60,45 60,63 46,70 32,63 32,45" fill="#E11D2E" opacity="0.8" />
          <circle cx="74" cy="42" r="3" fill="#E2E8F0" />
          <circle cx="74" cy="54" r="3" fill="#E2E8F0" />
        </svg>
      );

    // 25. The Falcon and the Winter Soldier - Wings & Vibranium Shield
    case 'the-falcon-and-the-winter-soldier':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mechanical Falcon Wings */}
          <polygon points="12,30 45,45 25,65" fill="#64748B" opacity="0.8" />
          <polygon points="88,30 55,45 75,65" fill="#64748B" opacity="0.8" />
          {/* Shield Core */}
          <circle cx="50" cy="50" r="22" fill="#E11D2E" stroke="#94A3B8" strokeWidth="2" />
          <circle cx="50" cy="50" r="14" fill="#1E3A8A" />
          <polygon points="50,42 52,47 57,47 53,50 55,55 50,52 45,55 47,50 43,47 48,47" fill="#FFFFFF" />
        </svg>
      );

    // 26. Loki Season 1 - TVA Hourglass & Horned Crown
    case 'loki-season-1':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Golden Curved Horns */}
          <path d="M28 45 C20 15 35 15 45 32" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M72 45 C80 15 65 15 55 32" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* TVA Clock/Hourglass */}
          <circle cx="50" cy="55" r="26" fill="#064E3B" stroke="#10B981" strokeWidth="2.5" />
          <line x1="50" y1="36" x2="50" y2="55" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="55" x2="62" y2="55" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    // 27. Black Widow - Red Room Hourglass & Stun Batons
    case 'black-widow':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Crossed Stun Batons */}
          <line x1="20" y1="20" x2="80" y2="80" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="80" y1="20" x2="20" y2="80" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          {/* Red Hourglass */}
          <polygon points="35,26 65,26 50,50" fill="#E11D2E" />
          <polygon points="35,74 65,74 50,50" fill="#E11D2E" />
        </svg>
      );

    // 28. What If...? Season 1 - The Watcher Multiverse Eye
    case 'what-if-season-1':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cosmic Shards */}
          <polygon points="20,20 40,10 35,35" fill="#38BDF8" opacity="0.4" />
          <polygon points="80,20 60,10 65,35" fill="#A855F7" opacity="0.4" />
          {/* Cosmic Eye */}
          <ellipse cx="50" cy="50" rx="38" ry="24" stroke="#F59E0B" strokeWidth="2" fill="#0F172A" />
          <circle cx="50" cy="50" r="16" fill="#6366F1" />
          <circle cx="50" cy="50" r="7" fill="#FFFFFF" />
        </svg>
      );

    // 29. Shang-Chi - Ten Rings of Qi
    case 'shang-chi-and-the-legend-of-the-ten-rings':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg) => (
            <circle
              key={deg}
              cx="50"
              cy="20"
              r="7"
              stroke="#F59E0B"
              strokeWidth="2"
              fill="#083344"
              transform={`rotate(${deg} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="14" fill="#06B6D4" opacity="0.8" />
        </svg>
      );

    // 30. Eternals - Celestial Uni-Mind Glyphs
    case 'eternals':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="28" stroke="#F59E0B" strokeWidth="2" />
          <line x1="8" y1="50" x2="92" y2="50" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="22" cy="50" r="4" fill="#F59E0B" />
          <circle cx="78" cy="50" r="4" fill="#F59E0B" />
          <circle cx="50" cy="50" r="12" fill="#FEF08A" />
        </svg>
      );

    // 31. Hawkeye - Archery Target & Crossed Arrows
    case 'hawkeye':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" fill="#2E1065" stroke="#A855F7" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" stroke="#C084FC" strokeWidth="2" />
          <circle cx="50" cy="50" r="18" stroke="#A855F7" strokeWidth="2" />
          <circle cx="50" cy="50" r="6" fill="#F43F5E" />
          <line x1="15" y1="85" x2="85" y2="15" stroke="#E2E8F0" strokeWidth="2" />
          <polygon points="85,15 76,17 83,24" fill="#E2E8F0" />
        </svg>
      );

    // 32. Spider-Man: No Way Home - Multiverse Web Rift
    case 'spider-man-no-way-home':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#E11D2E" strokeWidth="2" />
          {/* Dimensional crack */}
          <path d="M15 50 Q40 30 50 50 Q60 70 85 50" stroke="#F59E0B" strokeWidth="3" />
          <polygon points="50,28 65,45 50,62 35,45" stroke="#38BDF8" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="6" fill="#EF4444" />
        </svg>
      );

    // 33. Moon Knight - Khonshu Crescent Moons & Scarab
    case 'moon-knight':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Triple Moon Phases */}
          <circle cx="50" cy="50" r="40" stroke="#94A3B8" strokeWidth="1.5" opacity="0.4" />
          {/* Large Crescent */}
          <path d="M50 16 A34 34 0 0 0 50 84 A24 24 0 0 1 50 16 Z" fill="#F8FAFC" />
          {/* Gold Egyptian Scarab Knot */}
          <circle cx="50" cy="50" r="8" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
        </svg>
      );

    // 34. Doctor Strange in the Multiverse of Madness - Darkhold Chaos
    case 'doctor-strange-in-the-multiverse-of-madness':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Chaos Tendrils */}
          <circle cx="50" cy="50" r="40" stroke="#E11D2E" strokeWidth="2.5" />
          <polygon points="50,18 78,72 22,72" stroke="#F43F5E" strokeWidth="2" fill="none" />
          <polygon points="50,82 78,28 22,28" stroke="#F43F5E" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="10" fill="#991B1B" />
        </svg>
      );

    // 35. Ms. Marvel - Hard-Light Noor Crystal & Lightning
    case 'ms-marvel':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#06B6D4" strokeWidth="2" fill="#082F49" />
          {/* Lightning Crest */}
          <polygon points="56,18 36,52 50,52 42,82 68,44 52,44" fill="#F59E0B" stroke="#CA8A04" strokeWidth="1.5" />
        </svg>
      );

    // 36. Thor: Love & Thunder - Stormbreaker & Reforged Mjolnir
    case 'thor-love-and-thunder':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stormbreaker Axe Blade + Hammer */}
          <path d="M25 35 L48 35 L48 55 L25 55 Z" fill="#64748B" stroke="#38BDF8" strokeWidth="2" />
          <path d="M48 35 Q75 25 78 45 Q75 65 48 55 Z" fill="#475569" stroke="#38BDF8" strokeWidth="2" />
          <line x1="48" y1="25" x2="48" y2="85" stroke="#B45309" strokeWidth="3" />
          {/* Blue Cosmic Arc */}
          <path d="M30 45 L42 45 M55 45 L68 45" stroke="#38BDF8" strokeWidth="2" />
        </svg>
      );

    // 37. I Am Groot: Season 1 - Sprouting Dancing Twig
    case 'i-am-groot-season-1':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#10B981" strokeWidth="2" />
          {/* Twig Silhouette */}
          <path d="M50 82 Q42 55 52 38 Q58 24 50 18" stroke="#78350F" strokeWidth="5" strokeLinecap="round" />
          <ellipse cx="60" cy="30" rx="8" ry="4" fill="#22C55E" transform="rotate(-30 60 30)" />
          <ellipse cx="38" cy="46" rx="8" ry="4" fill="#22C55E" transform="rotate(30 38 46)" />
        </svg>
      );

    // 38. She-Hulk - Scales of Justice & Gamma Wave
    case 'she-hulk-attorney-at-law':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#22C55E" strokeWidth="2" />
          {/* Pillar / Scales */}
          <line x1="50" y1="20" x2="50" y2="80" stroke="#E2E8F0" strokeWidth="3" />
          <line x1="25" y1="36" x2="75" y2="36" stroke="#E2E8F0" strokeWidth="3" />
          <polygon points="25,36 15,58 35,58" fill="#15803D" stroke="#22C55E" strokeWidth="1.5" />
          <polygon points="75,36 65,58 85,58" fill="#15803D" stroke="#22C55E" strokeWidth="1.5" />
        </svg>
      );

    // 39. Werewolf by Night - Bloodstone Gem & Gothic Full Moon
    case 'werewolf-by-night':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="#18181B" stroke="#71717A" strokeWidth="2" />
          {/* Bloodstone Octagon */}
          <polygon points="50,22 68,30 76,48 68,66 50,74 32,66 24,48 32,30" fill="#991B1B" stroke="#E11D2E" strokeWidth="2.5" />
          {/* Claw Slashes */}
          <line x1="28" y1="25" x2="65" y2="75" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
        </svg>
      );

    // 40. Black Panther: Wakanda Forever - Talokan Sun & Vibranium Spear
    case 'black-panther-wakanda-forever':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#14B8A6" strokeWidth="2" />
          {/* Talokan Jade Mask & Spear */}
          <path d="M50 18 L58 45 L50 82 L42 45 Z" fill="#0D9488" stroke="#5EEAD4" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="14" fill="#042F2E" stroke="#A855F7" strokeWidth="2" />
        </svg>
      );

    // 41. Guardians Holiday Special - Christmas Tree Star & Ravager Wires
    case 'the-guardians-of-the-galaxy-holiday-special':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Festive Holiday Star Tree */}
          <polygon points="50,16 62,38 54,38 68,58 58,58 74,80 26,80 42,58 32,58 46,38 38,38" fill="#15803D" stroke="#22C55E" strokeWidth="1.5" />
          <circle cx="50" cy="16" r="4" fill="#FBBF24" />
          <circle cx="36" cy="62" r="3" fill="#EF4444" />
          <circle cx="64" cy="66" r="3" fill="#38BDF8" />
        </svg>
      );

    // 42. Ant-Man & The Wasp: Quantumania - Kang Chrono Ring Engine
    case 'ant-man-and-the-wasp-quantumania':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#38BDF8" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" stroke="#A855F7" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="18" stroke="#22D3EE" strokeWidth="2" />
          <ellipse cx="50" cy="50" rx="36" ry="12" stroke="#38BDF8" strokeWidth="1.5" transform="rotate(45 50 50)" />
          <circle cx="50" cy="50" r="6" fill="#F59E0B" />
        </svg>
      );

    // 43. Guardians of the Galaxy Vol. 3 - Rocket's Cyber Key & Zune
    case 'guardians-of-the-galaxy-vol-3':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="24" y="24" width="52" height="52" rx="10" fill="#1E293B" stroke="#06B6D4" strokeWidth="2.5" />
          <circle cx="50" cy="46" r="14" fill="#082F49" stroke="#38BDF8" strokeWidth="2" />
          <circle cx="50" cy="46" r="6" fill="#06B6D4" />
          <line x1="36" y1="68" x2="64" y2="68" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    // 44. Secret Invasion - Skrull DNA Helix & Silhouette
    case 'secret-invasion':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#16A34A" strokeWidth="2" opacity="0.6" />
          {/* Double Helix DNA */}
          <path d="M30 18 Q50 35 70 50 Q50 65 30 82" stroke="#22C55E" strokeWidth="3" />
          <path d="M70 18 Q50 35 30 50 Q50 65 70 82" stroke="#84CC16" strokeWidth="3" />
          <line x1="38" y1="28" x2="62" y2="28" stroke="#4ADE80" strokeWidth="2" />
          <line x1="42" y1="72" x2="58" y2="72" stroke="#4ADE80" strokeWidth="2" />
        </svg>
      );

    // 45. I Am Groot: Season 2 - Space Popsicle
    case 'i-am-groot-season-2':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="36" y="22" width="28" height="42" rx="14" fill="#06B6D4" stroke="#38BDF8" strokeWidth="2" />
          <line x1="50" y1="64" x2="50" y2="84" stroke="#B45309" strokeWidth="4" strokeLinecap="round" />
          <circle cx="44" cy="38" r="3" fill="#FFFFFF" />
        </svg>
      );

    // 46. Loki Season 2 - Yggdrasil Timeline Loom
    case 'loki-season-2':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tree of Timelines */}
          <path d="M50 85 L50 48" stroke="#10B981" strokeWidth="5" strokeLinecap="round" />
          <path d="M50 48 Q30 35 22 18" stroke="#34D399" strokeWidth="3" strokeLinecap="round" />
          <path d="M50 48 Q70 35 78 18" stroke="#34D399" strokeWidth="3" strokeLinecap="round" />
          <path d="M50 48 L50 15" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="50" r="38" stroke="#047857" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>
      );

    // 47. The Marvels - Interlinked Triple Bangles
    case 'the-marvels':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="36" cy="45" r="22" stroke="#F59E0B" strokeWidth="2.5" />
          <circle cx="64" cy="45" r="22" stroke="#38BDF8" strokeWidth="2.5" />
          <circle cx="50" cy="65" r="22" stroke="#A855F7" strokeWidth="2.5" />
          <polygon points="50,38 52,44 58,44 53,48 55,54 50,50 45,54 47,48 42,44 48,44" fill="#FFFFFF" />
        </svg>
      );

    // 48. What If...? Season 2 - Multiverse Kaleidoscope
    case 'what-if-season-2':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#C084FC" strokeWidth="2" />
          <polygon points="50,15 80,67 20,67" stroke="#38BDF8" strokeWidth="2" fill="none" />
          <polygon points="50,85 80,33 20,33" stroke="#F43F5E" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="10" fill="#A855F7" />
        </svg>
      );

    // 49. Echo - Choctaw Sun Handprint
    case 'echo':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#E11D2E" strokeWidth="2" opacity="0.6" />
          {/* Spiraling Sun Handprint */}
          <circle cx="50" cy="50" r="22" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5 3" />
          <path d="M50 30 L50 20 M50 70 L50 80 M30 50 L20 50 M70 50 L80 50" stroke="#F59E0B" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="8" fill="#E11D2E" />
        </svg>
      );

    // 50. Deadpool & Wolverine - Claws & Dual Katanas
    case 'deadpool-and-wolverine':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Crossed Katanas */}
          <line x1="20" y1="20" x2="80" y2="80" stroke="#E11D2E" strokeWidth="2.5" />
          <line x1="80" y1="20" x2="20" y2="80" stroke="#E11D2E" strokeWidth="2.5" />
          {/* Triple Adamantium Claws */}
          <line x1="40" y1="18" x2="40" y2="82" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="15" x2="50" y2="85" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
          <line x1="60" y1="18" x2="60" y2="82" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
          {/* Half Red / Half Yellow Center Ring */}
          <circle cx="50" cy="50" r="16" fill="#0A0A0F" stroke="#FACC15" strokeWidth="2" />
        </svg>
      );

    // 51. Agatha All Along - Witches' Road Moon & Tarot Key
    case 'agatha-all-along':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#A855F7" strokeWidth="2" />
          {/* Triple Moon */}
          <path d="M42 22 A30 30 0 0 0 42 78 A20 20 0 0 1 42 22 Z" fill="#7E22CE" />
          <circle cx="50" cy="50" r="14" fill="#581C87" stroke="#C084FC" strokeWidth="2" />
          <path d="M58 22 A30 30 0 0 1 58 78 A20 20 0 0 0 58 22 Z" fill="#7E22CE" />
        </svg>
      );

    // 52. Your Friendly Neighborhood Spider-Man - Comic Halftone Web
    case 'your-friendly-neighborhood-spider-man-season-1':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#E11D2E" strokeWidth="2.5" />
          {/* Classic Web */}
          <polygon points="50,22 72,36 72,64 50,78 28,64 28,36" stroke="#38BDF8" strokeWidth="1.5" />
          <polygon points="50,32 63,41 63,59 50,68 37,59 37,41" stroke="#38BDF8" strokeWidth="1.5" />
          {/* Expressive Mask Eyes */}
          <polygon points="34,45 46,45 42,54 34,50" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
          <polygon points="66,45 54,45 58,54 66,50" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
        </svg>
      );

    // 53. What If...? Season 3 - Final Multiverse Crown
    case 'what-if-season-3':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#A855F7" strokeWidth="2" />
          <polygon points="20,40 35,20 50,35 65,20 80,40 70,75 30,75" stroke="#F59E0B" strokeWidth="2.5" fill="#2E1065" />
          <circle cx="50" cy="55" r="8" fill="#38BDF8" />
        </svg>
      );

    // 54. Captain America: Brave New World - Flight Wings & Red Fission
    case 'captain-america-brave-new-world':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="10,25 45,45 20,70" fill="#1E3A8A" stroke="#38BDF8" strokeWidth="1.5" />
          <polygon points="90,25 55,45 80,70" fill="#1E3A8A" stroke="#38BDF8" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="24" fill="#991B1B" stroke="#E11D2E" strokeWidth="2" />
          <polygon points="50,38 53,46 61,46 55,51 57,59 50,54 43,59 45,51 39,46 47,46" fill="#FFFFFF" />
        </svg>
      );

    // 55. Daredevil: Born Again S1 - Hell's Kitchen Stained Glass & Clubs
    case 'daredevil-born-again-season-1':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#E11D2E" strokeWidth="2.5" />
          {/* Gothic Cathedral Arch */}
          <path d="M30 75 L30 45 Q50 20 70 45 L70 75 Z" stroke="#E11D2E" strokeWidth="2" fill="#18080C" />
          {/* Crossed Billy Clubs */}
          <line x1="28" y1="28" x2="72" y2="72" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="72" y1="28" x2="28" y2="72" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    // 56. Thunderbolts - Tactical Star Chevron
    case 'thunderbolts':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,15 85,35 75,82 50,90 25,82 15,35" stroke="#64748B" strokeWidth="2.5" fill="#1E293B" />
          {/* Jagged Strike Chevron */}
          <path d="M55 25 L35 52 L52 52 L45 78 L68 45 L50 45 Z" fill="#F59E0B" />
        </svg>
      );

    // 57. Ironheart - DIY Tech Heart Reactor
    case 'ironheart':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#E11D2E" strokeWidth="2" opacity="0.6" />
          {/* Heart Arc Reactor */}
          <path
            d="M50 34 C42 20 22 24 22 42 C22 62 50 78 50 78 C50 78 78 62 78 42 C78 24 58 20 50 34 Z"
            fill="#E11D2E"
            stroke="#F59E0B"
            strokeWidth="2.5"
          />
          <circle cx="50" cy="48" r="7" fill="#38BDF8" />
        </svg>
      );

    // 58. The Fantastic Four: First Steps - Retro 1960s '4' Crest
    case 'the-fantastic-four-first-steps':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" fill="#0C4A6E" stroke="#38BDF8" strokeWidth="3" />
          <circle cx="50" cy="50" r="34" stroke="#FFFFFF" strokeWidth="1.5" />
          {/* Bold '4' */}
          <path d="M54 24 L32 58 L58 58 L58 74 L68 74 L68 58 L74 58 L74 48 L68 48 L68 24 Z M54 36 L54 48 L44 48 Z" fill="#FFFFFF" />
        </svg>
      );

    // 59. Eyes of Wakanda - Ancient Panther Bast Glyphs
    case 'eyes-of-wakanda':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#A855F7" strokeWidth="2" />
          {/* Glowing Cat Eyes */}
          <polygon points="32,46 44,48 40,58" fill="#C084FC" />
          <polygon points="68,46 56,48 60,58" fill="#C084FC" />
          <path d="M50 24 L54 42 L50 76 L46 42 Z" stroke="#F59E0B" strokeWidth="2" fill="#78350F" />
        </svg>
      );

    // 60. Marvel Zombies - Biohazard Broken Visor
    case 'marvel-zombies':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#16A34A" strokeWidth="2.5" />
          {/* Biohazard Symbol */}
          <circle cx="50" cy="50" r="12" fill="#14532D" />
          <path d="M38 32 A16 16 0 0 1 62 32 M68 52 A16 16 0 0 1 54 72 M32 52 A16 16 0 0 0 46 72" stroke="#22C55E" strokeWidth="3" />
          <circle cx="50" cy="50" r="4" fill="#DC2626" />
        </svg>
      );

    // 61. Wonder Man - Hollywood Reel & Ionic Energy
    case 'wonder-man':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#E11D2E" strokeWidth="2" />
          {/* Film Reel */}
          <circle cx="50" cy="50" r="32" stroke="#A855F7" strokeWidth="3" fill="#1E1B4B" />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <circle key={deg} cx="50" cy="30" r="5" fill="#C084FC" transform={`rotate(${deg} 50 50)`} />
          ))}
          <circle cx="50" cy="50" r="8" fill="#E11D2E" />
        </svg>
      );

    // 62. Daredevil: Born Again S2 - Horned Silhouette & City Nocturne
    case 'daredevil-born-again-season-2':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#E11D2E" strokeWidth="2" />
          {/* Horned Mask Brow */}
          <path d="M32 30 L40 45 L50 42 L60 45 L68 30 Q50 38 32 30 Z" fill="#E11D2E" />
          <circle cx="42" cy="54" r="5" fill="#EF4444" />
          <circle cx="58" cy="54" r="5" fill="#EF4444" />
          <line x1="30" y1="75" x2="70" y2="75" stroke="#94A3B8" strokeWidth="2" />
        </svg>
      );

    // 63. The Punisher: One Last Kill - Heavy Tactical Skull
    case 'the-punisher-one-last-kill':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#64748B" strokeWidth="2" />
          {/* Tactical Skull Brow & Teeth */}
          <path d="M32 30 Q50 24 68 30 L68 55 L62 55 L62 76 L56 76 L56 55 L52 55 L52 76 L48 76 L48 55 L44 55 L44 76 L38 76 L38 55 L32 55 Z" fill="#F8FAFC" />
          {/* Deep Eye Cavities */}
          <circle cx="42" cy="42" r="5" fill="#0A0A0F" />
          <circle cx="58" cy="42" r="5" fill="#0A0A0F" />
        </svg>
      );

    // 64. Spider-Man: Brand New Day - Sunrise Webline
    case 'spider-man-brand-new-day':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Dawn Sun */}
          <circle cx="50" cy="70" r="28" fill="#F59E0B" opacity="0.5" />
          <circle cx="50" cy="50" r="42" stroke="#E11D2E" strokeWidth="2" />
          {/* Rising Webline */}
          <line x1="15" y1="85" x2="65" y2="20" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
          <circle cx="65" cy="20" r="4" fill="#FFFFFF" />
        </svg>
      );

    // 65. X-Men - Classic Cerebro 'X' Crest
    case 'x-men':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" fill="#0F172A" stroke="#94A3B8" strokeWidth="3" />
          <circle cx="50" cy="50" r="35" stroke="#38BDF8" strokeWidth="1.5" />
          {/* Classic 'X' */}
          <line x1="28" y1="28" x2="72" y2="72" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" />
          <line x1="72" y1="28" x2="28" y2="72" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );

    // 66. X2: X-Men United - X2 Jet Wing & Dark Cerebro
    case 'x2-x-men-united':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" fill="#1C1014" stroke="#E11D2E" strokeWidth="2" />
          {/* Dual Delta Wings */}
          <polygon points="50,18 78,72 50,60" fill="#E2E8F0" />
          <polygon points="50,18 22,72 50,60" fill="#E2E8F0" />
          <circle cx="50" cy="50" r="8" fill="#E11D2E" />
        </svg>
      );

    // Fallback default
    default:
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#E11D2E" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="16" fill="#E11D2E" opacity="0.6" />
        </svg>
      );
  }
};
