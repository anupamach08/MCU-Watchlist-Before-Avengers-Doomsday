/**
 * src/data/siteConfig.ts
 *
 * Global site identity, target release date for Avengers: Doomsday,
 * dynamic countdown helpers, and editorial disclaimers.
 */

export interface SiteConfig {
  name: string;
  headline: string;
  supportingText: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  heroDisclaimer: string;
  fullDisclaimer: string;
  author: string;
  /**
   * Target theatrical release date for Avengers: Doomsday.
   * NOTE FOR OWNER / MAINTAINER:
   * Verify this release date against official Marvel Studios announcements.
   * Format: ISO 8601 string (e.g. '2026-12-18T00:00:00Z').
   */
  doomsdayReleaseDate: string;
}

export const siteConfig: SiteConfig = {
  name: 'MCU Doomsday Watchlist',
  headline: 'Your MCU Watchlist Before Avengers: Doomsday',
  supportingText:
    'Not sure what to watch before Doomsday? Explore the MCU in alphabetical order, release date order, or chronological order, and see which titles you can skip.',
  primaryCtaText: 'Explore Watchlist',
  secondaryCtaText: 'See Most Important Picks',
  heroDisclaimer:
    'Independent fan-made watchlist. Not affiliated with or endorsed by Marvel Studios or Disney.',
  fullDisclaimer:
    'This is an independent, fan-made watchlist for informational and entertainment purposes. It is not affiliated with, endorsed by, or sponsored by Marvel Studios, Disney, or any other rights holder. Marvel-related titles, characters, trademarks, posters, and other materials remain the property of their respective owners. Copyright covers only the site\'s original code, design and writing.',
  author: 'Anupam Acharya',
  // Official projected release date: December 18, 2026
  doomsdayReleaseDate: '2026-12-18T00:00:00Z',
};

export interface CountdownState {
  isReleased: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  displayText: string;
}

export function computeCountdown(targetDateIso: string, referenceDate: Date = new Date()): CountdownState {
  const target = new Date(targetDateIso).getTime();
  const current = referenceDate.getTime();
  const diffMs = target - current;

  if (diffMs <= 0) {
    return {
      isReleased: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      displayText: 'Now in theatres',
    };
  }

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  return {
    isReleased: false,
    days,
    hours,
    minutes,
    seconds,
    displayText: `${days}d ${hours}h ${minutes}m ${seconds}s until Doomsday`,
  };
}
