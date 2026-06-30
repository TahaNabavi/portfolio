export type ProjectLink = {
  live?: string;
  github?: string;
  npm?: string;
  docs?: string;
};

export type ProjectItem = {
  img: string;
  title: string;
  body: string;
  slug: string;
  tags: string[];
  status: "stable" | "live" | "lab";
  version?: string;
  install?: string;
  links: ProjectLink;
};

export type ProjectCategory = {
  id: "packages" | "realProjects" | "personalProjects";
  items: ProjectItem[];
};

const typefetchPackage: ProjectItem = {
  img: "https://github.com/TahaNabavi/typefetch/blob/main/docs/assets/typefetch-v1.6.0-banner.png?raw=true",
  title: "@tahanabavi/typefetch",
  slug: "typefetch",
  body: "A strongly typed TypeScript HTTP client powered by Zod contracts, runtime validation, middleware, retries, mock mode, CLI workflows, and contract-driven API testing.",
  tags: ["TypeScript", "JavaScript", "Node", "Zod", "HTTP Client", "CLI", "Git", "npm"],
  status: "stable",
  version: "1.6.4",
  install: "npm install @tahanabavi/typefetch zod",
  links: {
    github: "https://github.com/tahanabavi/typefetch",
    npm: "https://www.npmjs.com/package/@tahanabavi/typefetch",
    docs: "/docs/typefetch",
  },
};

export const projectCategories: Record<"en" | "ge", ProjectCategory[]> = {
  en: [
    {
      id: "packages",
      items: [typefetchPackage],
    },
    {
      id: "realProjects",
      items: [
        {
          img: "https://s6.uupload.ir/files/val_jb04.png",
          title: "Vaultify",
          slug: "vaultify",
          body: "Securely store passwords, tasks, and notes with advanced encryption and a practical everyday dashboard.",
          tags: ["TypeScript", "React", "Next", "Tailwind", "Security", "Dashboard", "Encryption"],
          status: "live",
          links: {
            live: "https://vaultify.tahanabavi.ir/",
            github: "https://github.com/TahaNabavi/vaultify-client",
          },
        },
        {
          img: "https://camo.githubusercontent.com/a5d6e93b5aa0c13861e0d2de5b9307c4974980d303b779d8f4a24a712cd7aa5c/68747470733a2f2f73382e7575706c6f61642e69722f66696c65732f70315f7539656f2e706e67",
          title: "IRGAME Shop",
          slug: "irgame-shop",
          body: "A digital shop experience for buying Steam games, gift cards, and gaming products with a focused purchase flow.",
          tags: ["JavaScript", "React", "Next", "Tailwind", "Commerce", "Gaming", "Frontend"],
          status: "live",
          links: {
            github: "https://github.com/TahaNabavi/iran-game",
          },
        },
        {
          img: "https://s8.uupload.ir/files/capture_0tpd.png",
          title: "Game Server Status",
          slug: "game-server-status",
          body: "A real-time game server status dashboard for checking availability, performance, and server health.",
          tags: ["TypeScript", "React", "Next", "Node", "Socket", "Realtime", "Dashboard", "Game Server"],
          status: "live",
          links: {
            live: "https://dark-game-pearl.vercel.app/",
            github: "https://github.com/TahaNabavi/rust-server-status-v2",
          },
        },
      ],
    },
    {
      id: "personalProjects",
      items: [
        {
          img: "https://s6.uupload.ir/files/capture_ib.png",
          title: "Custom CMD",
          slug: "custom-cmd",
          body: "A command-line tool for managing nested route aliases with an intuitive workflow.",
          tags: ["TypeScript", "Node", "CLI", "Routes", "Automation"],
          status: "lab",
          links: {
            live: "https://custom-cmd.tahanabavi.ir",
            github: "https://github.com/TahaNabavi/custom-cmd",
          },
        },
        {
          img: "https://s6.uupload.ir/files/capture_pq74.png",
          title: "Icon Animation Tool",
          slug: "icon-animation-tool",
          body: "A visual tool for creating SVG icon animations and exporting motion-ready assets.",
          tags: ["JavaScript", "React", "Next", "SVG", "Animation", "Tool"],
          status: "lab",
          links: {
            live: "https://ico-animation.tahanabavi.ir/",
          },
        },
        {
          img: "https://s6.uupload.ir/files/capture_a2yy.png",
          title: "Resume Website",
          slug: "resume-website-v1",
          body: "A responsive resume website focused on a fast, clean presentation of skills and experience.",
          tags: ["HTML", "CSS", "JavaScript", "React", "Next", "Tailwind", "Portfolio", "Resume", "Frontend"],
          status: "lab",
          links: {
            live: "https://resume-v1.tahanabavi.ir/",
          },
        },
        {
          img: "https://s8.uupload.ir/files/pr1_7rjx.jpg",
          title: "Portfolio Experiment",
          slug: "portfolio-experiment",
          body: "A modern portfolio iteration built with Next.js and animated project presentation.",
          tags: ["TypeScript", "React", "Next", "Tailwind", "Vercel", "Next.js", "Portfolio", "Animation"],
          status: "lab",
          links: {
            live: "https://portfolio-gamma-flax-82.vercel.app/",
          },
        },
      ],
    },
  ],
  ge: [
    {
      id: "packages",
      items: [typefetchPackage],
    },
    {
      id: "realProjects",
      items: [
        {
          img: "https://s6.uupload.ir/files/val_jb04.png",
          title: "Vaultify",
          slug: "vaultify",
          body: "Sichere Aufbewahrung von Passwortern, Aufgaben und Notizen mit Verschluesselung und praktischem Dashboard.",
          tags: ["TypeScript", "React", "Next", "Tailwind", "Security", "Dashboard", "Encryption"],
          status: "live",
          links: {
            live: "https://vaultify.tahanabavi.ir/",
            github: "https://github.com/TahaNabavi/vaultify-client",
          },
        },
        {
          img: "https://camo.githubusercontent.com/a5d6e93b5aa0c13861e0d2de5b9307c4974980d303b779d8f4a24a712cd7aa5c/68747470733a2f2f73382e7575706c6f61642e69722f66696c65732f70315f7539656f2e706e67",
          title: "IRGAME Shop",
          slug: "irgame-shop",
          body: "Ein digitaler Shop fuer Steam-Spiele, Gift Cards und Gaming-Produkte mit fokussiertem Kaufprozess.",
          tags: ["JavaScript", "React", "Next", "Tailwind", "Commerce", "Gaming", "Frontend"],
          status: "live",
          links: {
            github: "https://github.com/TahaNabavi/iran-game",
          },
        },
        {
          img: "https://s8.uupload.ir/files/capture_0tpd.png",
          title: "Game Server Status",
          slug: "game-server-status",
          body: "Ein Echtzeit-Dashboard fuer Verfuegbarkeit, Performance und Zustand von Spielservern.",
          tags: ["TypeScript", "React", "Next", "Node", "Socket", "Realtime", "Dashboard", "Game Server"],
          status: "live",
          links: {
            live: "https://dark-game-pearl.vercel.app/",
            github: "https://github.com/TahaNabavi/rust-server-status-v2",
          },
        },
      ],
    },
    {
      id: "personalProjects",
      items: [
        {
          img: "https://s6.uupload.ir/files/capture_ib.png",
          title: "Custom CMD",
          slug: "custom-cmd",
          body: "Ein CLI-Tool zum Verwalten verschachtelter Route-Aliasse mit einem intuitiven Workflow.",
          tags: ["TypeScript", "Node", "CLI", "Routes", "Automation"],
          status: "lab",
          links: {
            live: "https://custom-cmd.tahanabavi.ir",
            github: "https://github.com/TahaNabavi/custom-cmd",
          },
        },
        {
          img: "https://s6.uupload.ir/files/capture_pq74.png",
          title: "Icon Animation Tool",
          slug: "icon-animation-tool",
          body: "Ein visuelles Tool zum Erstellen von SVG-Icon-Animationen und motion-ready Assets.",
          tags: ["JavaScript", "React", "Next", "SVG", "Animation", "Tool"],
          status: "lab",
          links: {
            live: "https://ico-animation.tahanabavi.ir/",
          },
        },
        {
          img: "https://s6.uupload.ir/files/capture_a2yy.png",
          title: "Resume Website",
          slug: "resume-website-v1",
          body: "Eine responsive Resume-Website fuer eine schnelle und klare Praesentation von Skills und Erfahrung.",
          tags: ["HTML", "CSS", "JavaScript", "React", "Next", "Tailwind", "Portfolio", "Resume", "Frontend"],
          status: "lab",
          links: {
            live: "https://resume-v1.tahanabavi.ir/",
          },
        },
        {
          img: "https://s8.uupload.ir/files/pr1_7rjx.jpg",
          title: "Portfolio Experiment",
          slug: "portfolio-experiment",
          body: "Eine moderne Portfolio-Iteration mit Next.js und animierter Projektpraesentation.",
          tags: ["TypeScript", "React", "Next", "Tailwind", "Vercel", "Next.js", "Portfolio", "Animation"],
          status: "lab",
          links: {
            live: "https://portfolio-gamma-flax-82.vercel.app/",
          },
        },
      ],
    },
  ],
};
