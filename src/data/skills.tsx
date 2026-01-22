import FigmaImage from "../images/figmaImage.png";
import ReactNative from "../images/native.png";
import Javascript from "../images/javascriptimage.png";
import Typescript from "../images/typescriptimage.png";
import React from "../images/reactimage.png";
// import PhotoShop from "../images/psimage.png";
// import Html from "../images/htmlcssimage.png";
import tailwind from "../images/tailwindimage.png";

export type SkillCardItem = {
  id: number;
  name: string;
  imageUrl?: string;
};

// Featured skills shown on the home page (keep this short and visual).
export const featuredSkills: SkillCardItem[] = [
  { id: 1, name: "React", imageUrl: React },
  { id: 2, name: "TypeScript", imageUrl: Typescript },
  { id: 3, name: "JavaScript", imageUrl: Javascript },
  { id: 4, name: "Node.js" },
  { id: 5, name: "React Native", imageUrl: ReactNative },
  { id: 6, name: "Tailwind", imageUrl: tailwind },
  { id: 7, name: "Framer Motion" },
  { id: 8, name: "Figma", imageUrl: FigmaImage },
];

// Full skill stack for the dedicated portfolio page.
export const skillCategories: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS", "PHP"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "React Native",
      "GraphQL",
      "REST APIs",
      "Tailwind",
      "Framer Motion",
    ],
  },
  {
    category: "Tools & Databases",
    items: [
      "Git",
      "Jira",
      "Canva",
      "Figma",
      "Photoshop",
      "Prisma",
      "Postgres",
      "MongoDB",
      "SQL",
    ],
  },
];

// Backwards compatibility for existing imports.
export const skills = featuredSkills;
