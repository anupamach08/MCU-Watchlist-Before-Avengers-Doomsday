/**
 * src/data/releaseOrder.ts
 *
 * Release Date order dataset (exactly 66 titles, preserving sequence).
 * Grouped under saga and phase headings per Section 8:
 * - X-Men Collection
 * - The Infinity Saga (Phases 1 to 3)
 * - The Multiverse Saga (Phases 4 to 6)
 *
 * Contains only ID arrays referencing canonical records in titles.ts.
 */

export interface ReleaseGroup {
  id: string;
  saga: string;
  phase?: string;
  titleIds: string[];
}

export const releaseGroups: ReleaseGroup[] = [
  {
    id: 'x-men-collection',
    saga: 'X-Men Collection',
    titleIds: ['x-men', 'x2-x-men-united'],
  },
  {
    id: 'infinity-phase-1',
    saga: 'The Infinity Saga',
    phase: 'Phase 1',
    titleIds: [
      'iron-man',
      'the-incredible-hulk',
      'iron-man-2',
      'thor',
      'captain-america-the-first-avenger',
      'the-avengers',
    ],
  },
  {
    id: 'infinity-phase-2',
    saga: 'The Infinity Saga',
    phase: 'Phase 2',
    titleIds: [
      'iron-man-3',
      'thor-the-dark-world',
      'captain-america-the-winter-soldier',
      'guardians-of-the-galaxy',
      'avengers-age-of-ultron',
      'ant-man',
    ],
  },
  {
    id: 'infinity-phase-3',
    saga: 'The Infinity Saga',
    phase: 'Phase 3',
    titleIds: [
      'captain-america-civil-war',
      'doctor-strange',
      'guardians-of-the-galaxy-vol-2',
      'spider-man-homecoming',
      'thor-ragnarok',
      'black-panther',
      'avengers-infinity-war',
      'ant-man-and-the-wasp',
      'captain-marvel',
      'avengers-endgame',
      'spider-man-far-from-home',
    ],
  },
  {
    id: 'multiverse-phase-4',
    saga: 'The Multiverse Saga',
    phase: 'Phase 4',
    titleIds: [
      'wandavision',
      'the-falcon-and-the-winter-soldier',
      'loki-season-1',
      'black-widow',
      'what-if-season-1',
      'shang-chi-and-the-legend-of-the-ten-rings',
      'eternals',
      'hawkeye',
      'spider-man-no-way-home',
      'moon-knight',
      'doctor-strange-in-the-multiverse-of-madness',
      'ms-marvel',
      'thor-love-and-thunder',
      'i-am-groot-season-1',
      'she-hulk-attorney-at-law',
      'werewolf-by-night',
      'black-panther-wakanda-forever',
      'the-guardians-of-the-galaxy-holiday-special',
    ],
  },
  {
    id: 'multiverse-phase-5',
    saga: 'The Multiverse Saga',
    phase: 'Phase 5',
    titleIds: [
      'ant-man-and-the-wasp-quantumania',
      'guardians-of-the-galaxy-vol-3',
      'secret-invasion',
      'i-am-groot-season-2',
      'loki-season-2',
      'the-marvels',
      'what-if-season-2',
      'echo',
      'deadpool-and-wolverine',
      'agatha-all-along',
      'your-friendly-neighborhood-spider-man-season-1',
      'what-if-season-3',
      'captain-america-brave-new-world',
      'daredevil-born-again-season-1',
      'thunderbolts',
      'ironheart',
    ],
  },
  {
    id: 'multiverse-phase-6',
    saga: 'The Multiverse Saga',
    phase: 'Phase 6',
    titleIds: [
      'the-fantastic-four-first-steps',
      'eyes-of-wakanda',
      'marvel-zombies',
      'wonder-man',
      'daredevil-born-again-season-2',
      'the-punisher-one-last-kill',
      'spider-man-brand-new-day',
    ],
  },
];

/**
 * Flat list of all 66 IDs in exact release order.
 */
export const releaseOrderIds: string[] = releaseGroups.flatMap((group) => group.titleIds);
