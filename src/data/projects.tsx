export interface ProjectInterface {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  liveLink?: string;
}

const rntv1 = "../rnt-v1.png";
const rntv2 = "../rnt-v2.png";
const uiux = "../uiux.png";
const graphic1 = "../graphic1.jpg";
const graphic2 = "../graphic2.jpg";
const graphic3 = "../graphic3.jpg";
const graphic4 = "../graphic4.jpg";
const graphic5 = "../graphic5.png";
const kazilogo = "../kazilogo.png";
const berenlogo = "../berenlogo.png";
const vwt = "../vwt.png";
const port = "../port.png";

export const projects: ProjectInterface[] = [
  {
    id: 1,
    title: "RentHub Website Version 1",
    category: "webs",
    image: rntv1,
    description: "The first version of the RentHub website.",
  },
  {
    id: 2,
    title: "RentHub Website Version 2",
    category: "webs",
    image: rntv2,
    description: "The second version of the RentHub website with improved features.",
    liveLink: "https://renthub.kberen.com/",
  },
  {
    id: 3,
    title: "Task Management UI",
    category: "uiux",
    image: uiux,
    description: "An intuitive user interface design for a task management application.",
  },
  {
    id: 5,
    title: "Graphic Design 1",
    category: "graphics",
    image: graphic1,
    description: "Eye-catching infographic design to visualize complex data.",
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "webs",
    image: port,
    description: "A responsive portfolio website showcasing creative works and projects.",
  },
  {
    id: 7,
    title: "Graphic 2",
    category: "graphics",
    image: graphic2,
    description: "A visually appealing design for social media content.",
  },
  {
    id: 8,
    title: "Graphic 3",
    category: "graphics",
    image: graphic3,
    description: "An innovative design for promotional materials.",
  },
  {
    id: 9,
    title: "Graphic 4",
    category: "graphics",
    image: graphic4,
    description: "A creative design for digital advertising campaigns.",
  },

  {
    id: 10,
    title: "Kazi Hub Logo",
    category: "graphics",
    image: kazilogo,
    description: "A professional logo design for Kazi Hub.",
  },
  {
    id: 11,
    title: "Beren Tech Logo",
    category: "graphics",
    image: berenlogo,
    description: "A sleek and modern logo design for Beren Tech.",
  },
  {
    id: 12,
    title: "Virtual Wallet",
    category: "webs",
    image: vwt,
    description: "A virtual wallet interface for managing transactions.",
    liveLink: "https://wallet.kberen.com/",
  },
  {
    id: 13,
    title: "Graphic 5",
    category: "graphics",
    image: graphic5,
    description: "A creative design for digital advertising campaigns.",
  },
];
