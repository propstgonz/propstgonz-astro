import type { Cosa } from "../types/cosas";

/*
## PLANTILLA DEL MAPEO
  {
    img: "",
    title: "",
    description: "",
    link: "",
  },
*/

/* To the guy reading this; indeed, i'm reusing my own code and its in
  spanish. What do you expect? Rewrite everything? Nah, i'm so fucking lazy */

export const cosas: Cosa[] = [
  {
    img: "/favicon.svg",
    title: "FAQ",
    description: "Questions and answers about me",
    link: "/faq",
  },
  {
    img: "https://baronette.es/_image?href=%2F_astro%2FBaronette-minimalista-cuadrado.Bjgv9ofB.png&w=1024&h=1024&f=webp",
    title: "Baronette web",
    description: "The domain main page (In progress)",
    link: "https://baronette.es",
  },
  {
    img: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    title: "GitHub",
    description: "This page GitHub repository",
    link: "https://github.com/propstgonz/propstgonz-portfolio",
  },
  {
    img: "/logbook.png",
    title: "Projects",
    description: "Where I display all my deployed services (Under dev rn)",
    link: "/projects",
  },
  {
    img: "/trollface.png",
    title: "My first page",
    description: "My first HTML page, simple, but iconic.",
    link: "http://localhost:80",
  },
  {
    img: "https://www.productivepaths.com/wp-content/uploads/2023/09/desktop-computer-1636527182-6071832.jpeg",
    title: "My computers specs",
    description: "About my computer's hardware and SO",
    link: "/computers",
  },
];
