type TimelineItem = {
  type: "experience" | "education";
  title: string;
  organization: string;
  period: string;
  description: string;
};

export const timelineData: TimelineItem[] = [
  {
    type: "experience",
    title: "Fullstack Software Developer",
    organization: "RentHub (Beren Tech Limited)",
    period: "2024 - Present",
    description:
      "Building and shipping web/mobile experiences with React, Node.js, and Next.js—covering UI, APIs, and integrations for RentHub.",
  },
  {
    type: "experience",
    title: "Relationship Officer",
    organization: "Equity Bank",
    period: "February 2023 - August 2023",
    description:
      "Worked as a teller at Equity Bank, managing withdrawals and deposits with accuracy and efficiency. Opened accounts and provided exceptional customer care services. Supported elderly clients receiving Inua Jamii funds, ensuring smooth and respectful service.",
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "Moi University",
    period: "2023 - Present",
    description:
      "Developing expertise in software development, UI/UX design, and problem-solving. Actively participating in tech communities, contributing to projects, and honing skills in React, TypeScript, Photoshop, and Figma. Balancing academic pursuits with practical experience in software and design projects.",
  },
  {
    type: "education",
    title: "Software Development",
    organization: "Tech Rise Academy",
    period: "2024 (Completed)",
    description:
      "Completed fullstack fundamentals—React, TypeScript, Node.js, Tailwind, and mobile-first delivery—with a responsive virtual wallet project.",
  },
];
