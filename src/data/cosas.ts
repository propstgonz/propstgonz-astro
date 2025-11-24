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
    description: "My GitHub profile containing all my development projects",
    link: "https://github.com/propstgonz",
  },
  {
    img: "/logbook.png",
    title: "Projects",
    description: "Where I display all my deployed services",
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
