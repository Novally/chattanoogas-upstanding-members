export interface Member {
  id: number;
  name: string;
  nickname: string;
  role: string;
  blurb: string;
  emoji: string;
  joinDate: string;
}

export const members: Member[] = [
  {
    id: 1,
    name: "Member One",
    nickname: "The Founder",
    role: "Head of Operations",
    blurb:
      "The original upstanding member. Known for finishing first in every competition and leaving a lasting impression on everyone they meet.",
    emoji: "👑",
    joinDate: "Jan 2023",
  },
  {
    id: 2,
    name: "Member Two",
    nickname: "The Brainiac",
    role: "Trivia Captain",
    blurb:
      "Our most intellectually stimulating member. Always bursting with knowledge at the most unexpected moments.",
    emoji: "🧠",
    joinDate: "Jan 2023",
  },
  {
    id: 3,
    name: "Member Three",
    nickname: "The Hype Man",
    role: "Morale Officer",
    blurb:
      "Brings the energy every single time. Known for explosive enthusiasm and getting everyone pumped up and ready to go.",
    emoji: "🔥",
    joinDate: "Feb 2023",
  },
  {
    id: 4,
    name: "Member Four",
    nickname: "The Strategist",
    role: "Game Planner",
    blurb:
      "Always has a plan and knows exactly when to pull out the right answer. Edging closer to victory every week.",
    emoji: "♟️",
    joinDate: "Feb 2023",
  },
  {
    id: 5,
    name: "Member Five",
    nickname: "The Wildcard",
    role: "Chaos Agent",
    blurb:
      "You never know what's going to come out of this one. Unpredictable, uncontainable, and always making a splash.",
    emoji: "🃏",
    joinDate: "Mar 2023",
  },
  {
    id: 6,
    name: "Member Six",
    nickname: "The Smooth Operator",
    role: "Public Relations",
    blurb:
      "Slick, polished, and always finishing strong. Leaves every room better than they found it — albeit a bit stickier.",
    emoji: "😎",
    joinDate: "Mar 2023",
  },
  {
    id: 7,
    name: "Member Seven",
    nickname: "The Late Bloomer",
    role: "Snack Coordinator",
    blurb:
      "Takes a while to warm up but once they arrive, the delivery is always satisfying. Brings the best refreshments.",
    emoji: "🌸",
    joinDate: "Apr 2023",
  },
  {
    id: 8,
    name: "Member Eight",
    nickname: "The Closer",
    role: "Clutch Specialist",
    blurb:
      "Always there for the big finish. When things get hard, this member rises to the occasion and never disappoints.",
    emoji: "🎯",
    joinDate: "Apr 2023",
  },
  {
    id: 9,
    name: "Member Nine",
    nickname: "The Quiet Storm",
    role: "Research Lead",
    blurb:
      "Silent but deadly productive. Works behind the scenes and consistently produces impressive output under pressure.",
    emoji: "🌊",
    joinDate: "May 2023",
  },
  {
    id: 10,
    name: "Member Ten",
    nickname: "The Rookie",
    role: "Newest Addition",
    blurb:
      "Fresh-faced and eager to please. Still learning the ropes but already showing signs of a massive release of potential.",
    emoji: "⭐",
    joinDate: "Jun 2023",
  },
  {
    id: 11,
    name: "Member Eleven",
    nickname: "The Glue Guy",
    role: "Team Bonding",
    blurb:
      "Keeps everyone together. Thick-skinned, always sticking around, and the binding force that holds this whole group intact.",
    emoji: "🫠",
    joinDate: "Jun 2023",
  },
];
