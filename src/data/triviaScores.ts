export interface TriviaWeek {
  week: number;
  date: string;
  score: number;
  maxScore: number;
  placement: string;
  highlight: string;
}

export const triviaScores: TriviaWeek[] = [
  {
    week: 12,
    date: "Dec 10, 2024",
    score: 78,
    maxScore: 100,
    placement: "2nd Place",
    highlight: "Strong finish in the final round — really shot our load of knowledge.",
  },
  {
    week: 11,
    date: "Dec 3, 2024",
    score: 85,
    maxScore: 100,
    placement: "1st Place 🏆",
    highlight: "Absolutely erupted in Round 3. Couldn't contain ourselves.",
  },
  {
    week: 10,
    date: "Nov 26, 2024",
    score: 62,
    maxScore: 100,
    placement: "4th Place",
    highlight: "A premature answer in Round 2 cost us big. We'll last longer next time.",
  },
  {
    week: 9,
    date: "Nov 19, 2024",
    score: 91,
    maxScore: 100,
    placement: "1st Place 🏆",
    highlight: "Peak performance. Everything came together beautifully.",
  },
  {
    week: 8,
    date: "Nov 12, 2024",
    score: 73,
    maxScore: 100,
    placement: "3rd Place",
    highlight: "Solid effort but we dribbled a few easy ones away.",
  },
];
