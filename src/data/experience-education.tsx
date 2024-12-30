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
    title: "Software Developer",
    organization: "Beren Tech Limited",
    period: "2024 - Present",
    description:
      "Directed marketing strategies and managed social media campaigns for the RentHub app, boosting brand visibility. Designed targeted content to engage users and attract new audiences. Analyzed metrics to optimize campaign performance and user engagement.",
  },
  {
    type: "experience",
    title: "Relationship Officer",
    organization: "Equity Bank",
    period: "February 2023 – August 2023",
    description:
      "Worked as a teller at Equity Bank, managing withdrawals and deposits with accuracy and efficiency. Opened accounts and provided exceptional customer care services. Supported elderly clients receiving Inua Jamii funds, ensuring smooth and respectful service.",
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "Moi University",
    period: "2023 - Present",
    description:
      'Currently specializing in Artificial Intelligence and Machine Learning. Thesis on "Implementing AI in Web Applications".',
  },
  {
    type: "education",
    title: "Software Developer",
    organization: "Tech Rise Academy",
    period: "2024 - Present",
    description:
      "Foundations in software development, web development, and mobile apps. Developed a responsive web application for a virtual wallet using React, TypeScript, and Tailwind. Created a mobile app for landlords and tenants using React Native.",
  },
];
