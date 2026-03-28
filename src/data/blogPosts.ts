export interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How We Rose to the Top — Our First Place Finish",
    date: "Dec 5, 2024",
    author: "The Brainiac",
    excerpt:
      "After weeks of buildup and tension, we finally released all that pent-up trivia energy and climaxed at first place.",
    content:
      "It was a long time coming. Week after week of edging closer to that top spot, and finally — sweet, sweet release. The team was throbbing with excitement as we entered the final round...",
    tags: ["Trivia", "Victory", "Teamwork"],
  },
  {
    id: 2,
    title: "Member Spotlight: The Glue Guy",
    date: "Nov 28, 2024",
    author: "The Founder",
    excerpt:
      "Every team needs someone who keeps things sticky. Meet our most binding member.",
    content:
      "Without The Glue Guy, this team would fall apart. They have an incredible ability to keep everyone bonded together, spreading themselves across every aspect of group cohesion...",
    tags: ["Spotlight", "Members", "Bonding"],
  },
  {
    id: 3,
    title: "The Art of the Comeback: From Behind to On Top",
    date: "Nov 20, 2024",
    author: "The Strategist",
    excerpt:
      "We were deep in last place, but through grit and determination we mounted an incredible comeback.",
    content:
      "Being in last isn't where any upstanding member wants to find themselves. But sometimes you have to go deep before you can rise. Here's how we mounted our way back to the podium...",
    tags: ["Trivia", "Strategy", "Perseverance"],
  },
  {
    id: 4,
    title: "Snack Review: What Pairs Best with Trivia Night?",
    date: "Nov 14, 2024",
    author: "The Late Bloomer",
    excerpt:
      "We tested an assortment of creamy, salty, and savory snacks to find the ultimate trivia fuel.",
    content:
      "After extensive taste testing, we've determined that the best trivia snacks have a creamy, satisfying texture. Bonus points if they come in a squeeze tube...",
    tags: ["Snacks", "Reviews", "Culture"],
  },
  {
    id: 5,
    title: "Recruiting New Members: How to Grow Our Ranks",
    date: "Nov 7, 2024",
    author: "The Smooth Operator",
    excerpt:
      "We've been spreading the word and trying to attract new bodies into our tight-knit group.",
    content:
      "Growing from a small group into a full squad of 11 upstanding members wasn't easy. It required outreach, word of mouth, and occasionally just showing up and letting it happen organically...",
    tags: ["Growth", "Recruiting", "Community"],
  },
];
