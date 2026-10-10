/**
 * src/data/chronologicalOrder.ts
 *
 * Chronological viewing order dataset (exactly 60 titles, preserving sequence).
 * Excludes intentionally:
 * - X-Men
 * - X2: X-Men United
 * - Your Friendly Neighborhood Spider-Man Season 1
 * - Daredevil: Born Again Season 2
 * - The Punisher: One Last Kill
 * - Spider-Man: Brand New Day
 *
 * Author editorial note:
 * "This is the author's chosen viewing order, not a claim of exact in-universe placement for every episode."
 */

export const chronologicalNote =
  "This is the author's chosen viewing order, not a claim of exact in-universe placement for every episode.";

export const chronologicalOrderIds: string[] = [
  'eyes-of-wakanda',
  'captain-america-the-first-avenger',
  'captain-marvel',
  'iron-man',
  'iron-man-2',
  'the-incredible-hulk',
  'thor',
  'the-avengers',
  'thor-the-dark-world',
  'iron-man-3',
  'captain-america-the-winter-soldier',
  'guardians-of-the-galaxy',
  'guardians-of-the-galaxy-vol-2',
  'i-am-groot-season-1',
  'i-am-groot-season-2',
  'avengers-age-of-ultron',
  'ant-man',
  'captain-america-civil-war',
  'black-widow',
  'doctor-strange',
  'black-panther',
  'spider-man-homecoming',
  'thor-ragnarok',
  'avengers-infinity-war',
  'ant-man-and-the-wasp',
  'avengers-endgame',
  'loki-season-1',
  'loki-season-2',
  'what-if-season-1',
  'what-if-season-2',
  'what-if-season-3',
  'marvel-zombies',
  'wandavision',
  'deadpool-and-wolverine',
  'shang-chi-and-the-legend-of-the-ten-rings',
  'the-falcon-and-the-winter-soldier',
  'eternals',
  'spider-man-far-from-home',
  'spider-man-no-way-home',
  'doctor-strange-in-the-multiverse-of-madness',
  'hawkeye',
  'moon-knight',
  'black-panther-wakanda-forever',
  'echo',
  'she-hulk-attorney-at-law',
  'ms-marvel',
  'thor-love-and-thunder',
  'ironheart',
  'werewolf-by-night',
  'the-guardians-of-the-galaxy-holiday-special',
  'ant-man-and-the-wasp-quantumania',
  'guardians-of-the-galaxy-vol-3',
  'secret-invasion',
  'the-marvels',
  'agatha-all-along',
  'daredevil-born-again-season-1',
  'captain-america-brave-new-world',
  'thunderbolts',
  'the-fantastic-four-first-steps',
  'wonder-man',
];

export const chronologicalExcludedIds: string[] = [
  'x-men',
  'x2-x-men-united',
  'your-friendly-neighborhood-spider-man-season-1',
  'daredevil-born-again-season-2',
  'the-punisher-one-last-kill',
  'spider-man-brand-new-day',
];
