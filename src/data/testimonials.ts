export interface TestimonialInterface {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export const testimonials: TestimonialInterface[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    content: "This product has revolutionized our workflow. Highly recommended!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Marketing Director, InnovateCo",
    content: "Incredible customer service and a game-changing platform. Love it!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Carol Davis",
    role: "Freelance Designer",
    content: "As a designer, I appreciate the attention to detail. It's a must-have tool.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CTO, StartupX",
    content: "The features are unparalleled. It has significantly boosted our productivity.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Eva Martinez",
    role: "Project Manager, BigCorp",
    content: "Easy to use and powerful. It has streamlined our entire project management process.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];
