export interface AchievementItem {
  title: string;
  year: string;
  description: string;
  link?: string;
}

export const achievements: AchievementItem[] = [
  {
    title: "TechRise Academy — Software Development",
    year: "2024",
    description:
      "Completed the program focusing on React, Node.js, TypeScript, and fullstack fundamentals.",
    // Add your certificate link when available, e.g., "/certificates/techrise.pdf"
  },
  {
    title: "RentHub — Fullstack Product Delivery",
    year: "2024 - Present",
    description:
      "Building and iterating on RentHub web experiences across React, Node.js, and Next.js.",
    link: "https://renthub.kberen.com/",
  },
  {
    title: "Virtual Wallet MVP",
    year: "2023",
    description:
      "Delivered a responsive virtual wallet interface with secure authentication flows.",
    link: "https://wallet.kberen.com/",
  },
];
