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
const graphic6 = "../graphic6.png";
const graphic7 = "../graphic7.png";
const graphic8 = "../graphic8.png";
const graphic9 = "../graphic9.png";
const graphic10 = "../graphic10.png";
const graphic11 = "../graphic11.png";
const graphic12 = "../graphic12.png";
const graphic13 = "../graphic13.png";
const graphic14 = "../graphic14.png";
const graphic15 = "../graphic15.png";
const graphic16 = "../graphic16.png";
const graphic17 = "../graphic17.png";
const graphic18 = "../graphic18.png";
const graphic19 = "../graphic19.png";
const agc = "../agc.jpeg";

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
    description:
      "The second version of the RentHub website with improved features.",
    liveLink: "https://renthub.kberen.com/",
  },
  {
    id: 3,
    title: "Task Management UI",
    category: "uiux",
    image: uiux,
    description:
      "An intuitive user interface design for a task management application.",
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
    description:
      "A responsive portfolio website showcasing creative works and projects.",
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
 
 
  {
    id: 14,
    title: "Graphic 6",
    category: "graphics",
    image: graphic6,
    description: "A creative design for digital advertising campaigns.",
  },
  {
    id: 15,
    title: "Graphic 7",
    category: "graphics",
    image: graphic7,
    description: "A creative design for digital advertising campaigns.",
  },
  {
    id: 16,
    title: "Graphic 8",
    category: "graphics",
    image: graphic8,
    description: "A creative design for digital advertising campaigns.",
  },
  {
    id: 17,
    title: "Graphic 9",
    category: "graphics",
    image: graphic9,
    description: "A creative design for digital advertising campaigns.",
  },
  {
    id: 18,
    title: "Graphic 10",
    category: "graphics",
    image: graphic10,
    description: "A creative design for digital advertising campaigns.",
  },
  {
    id: 19,
    title: "Graphic 11",
    category: "graphics",
    image: graphic11,
    description: "A creative design for digital advertising campaigns.",
  },
  {
    id: 20,
    title: "Graphic 12",
    category: "graphics",
    image: graphic12,
    description: "A creative design for digital advertising campaigns.",
  },
  {
    id: 21,
    title: "Graphic 13",
    category: "graphics",
    image: graphic13,
    description: "A creative design for digital advertising campaigns.",
  },
  {
    id: 22,
    title: "Graphic 14",
    category: "graphics",
    image: graphic14,
    description: "A creative design for digital advertising campaigns.",
  },
  {
    id: 23,
    title: "Graphic 15",
    category: "graphics",
    image: graphic15,
    description: "A creative design for digital advertising campaigns.",
  },
  {
    id: 24,
    title: "Graphic 16",
    category: "graphics",
    image: graphic16,
    description: "A creative design for digital advertising campaigns.",
  },
  {
    id: 25,
    title: "Graphic 17",
    category: "graphics",
    image: graphic17,
    description: "A creative design for digital advertising campaigns.",
  },
  {
    id: 26,
    title: "Graphic 18",
    category: "graphics",
    image: graphic18,
    description: "A creative design for digital advertising campaigns.",
  },
  {
    id: 27,
    title: "Graphic 19",
    category: "graphics",
    image: graphic19,
    description: "A creative design for digital advertising campaigns.",
  },
  {
    id: 28,
    title: "Agency Enterprise Application",
    category: "webs",
    image: agc,
    description: "An agency application for managing enterprise resources.",
    liveLink: "https://renthub-enterprise.kberen.com/",
  },
];
