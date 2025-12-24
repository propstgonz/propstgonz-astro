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
    img: "https://pbs.twimg.com/profile_images/1866395025740869632/bjM0BTeb_400x400.jpg",
    title: "SHITTY RANDOM SITE",
    description: "Random site",
    link: "https://darkweb-websites.com/",
  },
];
