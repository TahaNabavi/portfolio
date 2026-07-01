import type { Locale } from "@/config/i18n";

export type ProjectLink = {
  live?: string;
  github?: string;
  frontend?: string;
  backend?: string;
  npm?: string;
  docs?: string;
};

export type ProjectItem = {
  img: string;
  title: string;
  body: string;
  slug: string;
  tags: string[];
  status: "stable" | "live" | "lab" | "soon";
  version?: string;
  install?: string;
  links: ProjectLink;
};

export type ProjectCategory = {
  id: "packages" | "realProjects" | "personalProjects" | "upcomingProjects";
  items: ProjectItem[];
};

const placeholderBanner = "/iconpattern.png";

const typefetchPackage: ProjectItem = {
  img: "https://github.com/TahaNabavi/typefetch/blob/main/docs/assets/typefetch-v1.6.0-banner.png?raw=true",
  title: "@tahanabavi/typefetch",
  slug: "typefetch",
  body: "A strongly typed TypeScript HTTP client powered by Zod contracts, runtime validation, middleware, retries, mock mode, CLI workflows, and contract-driven API testing.",
  tags: [
    "TypeScript",
    "JavaScript",
    "Node",
    "Zod",
    "HTTP Client",
    "CLI",
    "Git",
    "npm",
  ],
  status: "stable",
  version: "1.6.4",
  install: "npm install @tahanabavi/typefetch zod",
  links: {
    github: "https://github.com/tahanabavi/typefetch",
    npm: "https://www.npmjs.com/package/@tahanabavi/typefetch",
    docs: "/docs/typefetch",
  },
};

const packages: ProjectItem[] = [
  typefetchPackage,
  {
    img: placeholderBanner,
    title: "@tahanabavi/typesocket",
    slug: "typesocket",
    body: "An early-stage typed Socket.IO helper package for shaping realtime events with a cleaner TypeScript developer experience. It is listed here as a work in progress while the API matures.",
    tags: ["TypeScript", "Node", "Socket", "Realtime", "Package", "WIP"],
    status: "lab",
    links: {
      github: "https://github.com/TahaNabavi/typesocket",
    },
  },
  {
    img: placeholderBanner,
    title: "@tahanabavi/typeaction",
    slug: "typeaction",
    body: "A lightweight experimental package for typed action patterns and safer function contracts. It still needs more iteration, but belongs in the package catalog.",
    tags: ["TypeScript", "Actions", "Contracts", "Package", "WIP"],
    status: "lab",
    links: {
      github: "https://github.com/TahaNabavi/typeaction",
    },
  },
];

export const projectCategories: Record<Locale, ProjectCategory[]> = {
  en: [
    {
      id: "packages",
      items: packages,
    },
    {
      id: "realProjects",
      items: [
        {
          img: "/etmita-pass.png",
          title: "ETMITA Passport",
          slug: "etmita-passport",
          body: "A production dashboard for digital product passports, designed to help teams publish traceability data, surface sustainability insights, and manage product identity across the supply chain.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Mantine",
            "Dashboard",
            "Traceability",
            "Sustainability",
          ],
          status: "live",
          links: {},
        },
        {
          img: "/mitabase.png",
          title: "MitaBase",
          slug: "mitabase",
          body: "A MitaMed operations dashboard for secure medical prescription delivery, combining fleet management, realtime driver tracking, order monitoring, and dispatch-focused workflows.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Mantine",
            "Dashboard",
            "Healthcare",
            "Realtime",
            "Fleet",
          ],
          status: "live",
          links: {},
        },
      ],
    },
    {
      id: "upcomingProjects",
      items: [
        {
          img: "/whisper.png",
          title: "Whisper",
          slug: "whisper",
          body: "A chat application currently being shaped as a polished realtime messaging product. The public repositories are available, while the latest design and product pass is still coming soon.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Node",
            "Realtime",
            "Chat",
            "Soon",
          ],
          status: "soon",
          links: {},
        },
      ],
    },
    {
      id: "personalProjects",
      items: [
        {
          img: "https://s6.uupload.ir/files/val_jb04.png",
          title: "Vaultify",
          slug: "vaultify",
          body: "A personal security dashboard for storing passwords, tasks, and notes with encryption-focused workflows and an everyday productivity surface.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Tailwind",
            "Security",
            "Dashboard",
            "Encryption",
          ],
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
          body: "A personal commerce build for browsing and buying Steam games, gift cards, and gaming products with a focused, game-shop style purchase flow.",
          tags: [
            "JavaScript",
            "React",
            "Next",
            "Tailwind",
            "Commerce",
            "Gaming",
            "Frontend",
          ],
          status: "live",
          links: {
            github: "https://github.com/TahaNabavi/iran-game",
          },
        },
        {
          img: "/taskodo.png",
          title: "Taskodo",
          slug: "taskodo",
          body: "A personal task management app focused on simple planning, clean daily organization, and a practical workflow for keeping small tasks under control.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Todo",
            "Productivity",
            "Personal",
          ],
          status: "lab",
          links: {
            github: "https://github.com/TahaNabavi/taskodo",
            live: "https://taskodo.tahanabavi.ir/",
          },
        },
        {
          img: "https://s8.uupload.ir/files/capture_0tpd.png",
          title: "Game Server Status",
          slug: "game-server-status",
          body: "A real-time game server status dashboard for checking availability, performance, and server health.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Node",
            "Socket",
            "Realtime",
            "Dashboard",
            "Game Server",
          ],
          status: "live",
          links: {
            live: "https://dark-game-pearl.vercel.app/",
            github: "https://github.com/TahaNabavi/rust-server-status-v2",
          },
        },
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
          tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next",
            "Tailwind",
            "Portfolio",
            "Resume",
            "Frontend",
          ],
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
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Tailwind",
            "Vercel",
            "Next.js",
            "Portfolio",
            "Animation",
          ],
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
      items: packages,
    },
    {
      id: "realProjects",
      items: [
        {
          img: "/etmita-pass.png",
          title: "ETMITA Passport",
          slug: "etmita-passport",
          body: "Ein produktionsnahes Dashboard fuer digitale Produktpaesse, Traceability-Daten, Nachhaltigkeits-Insights und Produktidentitaet entlang der Supply Chain.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Mantine",
            "Dashboard",
            "Traceability",
            "Sustainability",
          ],
          status: "live",
          links: {},
        },
        {
          img: "/mitabase.png",
          title: "MitaBase",
          slug: "mitabase",
          body: "Ein MitaMed Operations-Dashboard fuer sichere Rezeptlieferungen mit Flottenverwaltung, Echtzeit-Fahrertracking, Order Monitoring und Dispatch-Workflows.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Mantine",
            "Dashboard",
            "Healthcare",
            "Realtime",
            "Fleet",
          ],
          status: "live",
          links: {},
        },
      ],
    },
    {
      id: "upcomingProjects",
      items: [
        {
          img: "/whisper.png",
          title: "Whisper",
          slug: "whisper",
          body: "Eine Chat-Applikation, die gerade zu einem polierten Realtime-Messaging-Produkt ausgebaut wird. Die Repositories sind sichtbar, der aktuelle Produkt- und Designstand kommt bald.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Node",
            "Realtime",
            "Chat",
            "Soon",
          ],
          status: "soon",
          links: {},
        },
      ],
    },
    {
      id: "personalProjects",
      items: [
        {
          img: "https://s6.uupload.ir/files/val_jb04.png",
          title: "Vaultify",
          slug: "vaultify",
          body: "Ein persoenliches Security-Dashboard fuer Passwoerter, Aufgaben und Notizen mit verschluesselungsorientierten Workflows.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Tailwind",
            "Security",
            "Dashboard",
            "Encryption",
          ],
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
          body: "Ein persoenlicher Commerce-Build fuer Steam-Spiele, Gift Cards und Gaming-Produkte mit fokussiertem Kaufprozess.",
          tags: [
            "JavaScript",
            "React",
            "Next",
            "Tailwind",
            "Commerce",
            "Gaming",
            "Frontend",
          ],
          status: "live",
          links: {
            github: "https://github.com/TahaNabavi/iran-game",
          },
        },
        {
          img: placeholderBanner,
          title: "Taskodo",
          slug: "taskodo",
          body: "Eine persoenliche Task-Management-App fuer einfache Planung, klare Tagesorganisation und praktische kleine Workflows.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Todo",
            "Productivity",
            "Personal",
          ],
          status: "lab",
          links: {
            github: "https://github.com/TahaNabavi/taskodo",
            live: "https://taskodo.tahanabavi.ir/",
          },
        },
        {
          img: "https://s8.uupload.ir/files/capture_0tpd.png",
          title: "Game Server Status",
          slug: "game-server-status",
          body: "Ein Echtzeit-Dashboard fuer Verfuegbarkeit, Performance und Zustand von Spielservern.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Node",
            "Socket",
            "Realtime",
            "Dashboard",
            "Game Server",
          ],
          status: "live",
          links: {
            live: "https://dark-game-pearl.vercel.app/",
            github: "https://github.com/TahaNabavi/rust-server-status-v2",
          },
        },
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
          tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next",
            "Tailwind",
            "Portfolio",
            "Resume",
            "Frontend",
          ],
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
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Tailwind",
            "Vercel",
            "Next.js",
            "Portfolio",
            "Animation",
          ],
          status: "lab",
          links: {
            live: "https://portfolio-gamma-flax-82.vercel.app/",
          },
        },
      ],
    },
  ],
  fa: [
    {
      id: "packages",
      items: [
        {
          ...typefetchPackage,
          body: "یک HTTP client قدرتمند و type-safe برای TypeScript که با قراردادهای Zod، اعتبارسنجی runtime، middleware، retry، mock mode، جریان‌های CLI و تست API قراردادمحور ساخته شده است.",
        },
        {
          img: placeholderBanner,
          title: "@tahanabavi/typesocket",
          slug: "typesocket",
          body: "یک پکیج typed در مرحله اولیه برای Socket.IO که رویدادهای realtime را با تجربه توسعه‌دهنده تمیزتر در TypeScript شکل می‌دهد.",
          tags: ["TypeScript", "Node", "Socket", "Realtime", "Package", "WIP"],
          status: "lab",
          links: {
            github: "https://github.com/TahaNabavi/typesocket",
          },
        },
        {
          img: placeholderBanner,
          title: "@tahanabavi/typeaction",
          slug: "typeaction",
          body: "یک پکیج آزمایشی سبک برای الگوهای typed action و قراردادهای امن‌تر تابعی که هنوز به تکرار و پختگی بیشتری نیاز دارد.",
          tags: ["TypeScript", "Actions", "Contracts", "Package", "WIP"],
          status: "lab",
          links: {
            github: "https://github.com/TahaNabavi/typeaction",
          },
        },
      ],
    },
    {
      id: "realProjects",
      items: [
        {
          img: "/etmita-pass.png",
          title: "ETMITA Passport",
          slug: "etmita-passport",
          body: "یک داشبورد محصولی برای پاسپورت دیجیتال محصول که به تیم‌ها کمک می‌کند داده‌های traceability را منتشر کنند، insightهای پایداری را نمایش دهند و هویت محصول را در زنجیره تامین مدیریت کنند.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Mantine",
            "Dashboard",
            "Traceability",
            "Sustainability",
          ],
          status: "live",
          links: {},
        },
        {
          img: "/mitabase.png",
          title: "MitaBase",
          slug: "mitabase",
          body: "داشبورد عملیاتی MitaMed برای تحویل امن نسخه‌های پزشکی، همراه با مدیریت ناوگان، رهگیری لحظه‌ای راننده، پایش سفارش‌ها و جریان‌های کاری dispatch.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Mantine",
            "Dashboard",
            "Healthcare",
            "Realtime",
            "Fleet",
          ],
          status: "live",
          links: {},
        },
      ],
    },
    {
      id: "upcomingProjects",
      items: [
        {
          img: "/whisper.png",
          title: "Whisper",
          slug: "whisper",
          body: "یک اپلیکیشن چت که در حال تبدیل شدن به یک محصول realtime messaging تمیز و کامل است. مخزن‌های عمومی آماده‌اند و نسخه طراحی و محصولی تازه به‌زودی می‌آید.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Node",
            "Realtime",
            "Chat",
            "Soon",
          ],
          status: "soon",
          links: {},
        },
      ],
    },
    {
      id: "personalProjects",
      items: [
        {
          img: "https://s6.uupload.ir/files/val_jb04.png",
          title: "Vaultify",
          slug: "vaultify",
          body: "یک داشبورد امنیتی شخصی برای نگهداری رمزها، تسک‌ها و یادداشت‌ها با جریان‌های رمزنگاری‌محور و سطحی کاربردی برای استفاده روزمره.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Tailwind",
            "Security",
            "Dashboard",
            "Encryption",
          ],
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
          body: "یک فروشگاه شخصی برای مرور و خرید بازی‌های Steam، گیفت‌کارت و محصولات گیمینگ با جریان خرید متمرکز و مناسب فضای گیم.",
          tags: [
            "JavaScript",
            "React",
            "Next",
            "Tailwind",
            "Commerce",
            "Gaming",
            "Frontend",
          ],
          status: "live",
          links: {
            github: "https://github.com/TahaNabavi/iran-game",
          },
        },
        {
          img: "/taskodo.png",
          title: "Taskodo",
          slug: "taskodo",
          body: "یک اپ مدیریت تسک شخصی با تمرکز روی برنامه‌ریزی ساده، نظم روزانه تمیز و جریان کاری عملی برای کنترل کارهای کوچک.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Todo",
            "Productivity",
            "Personal",
          ],
          status: "lab",
          links: {
            github: "https://github.com/TahaNabavi/taskodo",
            live: "https://taskodo.tahanabavi.ir/",
          },
        },
        {
          img: "https://s8.uupload.ir/files/capture_0tpd.png",
          title: "Game Server Status",
          slug: "game-server-status",
          body: "یک داشبورد realtime برای بررسی دسترس‌پذیری، عملکرد و سلامت گیم‌سرورها.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Node",
            "Socket",
            "Realtime",
            "Dashboard",
            "Game Server",
          ],
          status: "live",
          links: {
            live: "https://dark-game-pearl.vercel.app/",
            github: "https://github.com/TahaNabavi/rust-server-status-v2",
          },
        },
        {
          img: "https://s6.uupload.ir/files/capture_ib.png",
          title: "Custom CMD",
          slug: "custom-cmd",
          body: "یک ابزار command-line برای مدیریت aliasهای مسیرهای تودرتو با جریان کاری ساده و قابل فهم.",
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
          body: "یک ابزار بصری برای ساخت انیمیشن آیکن‌های SVG و خروجی گرفتن assetهای آماده motion.",
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
          body: "یک وب‌سایت رزومه واکنش‌گرا برای نمایش سریع و تمیز مهارت‌ها و تجربه‌ها.",
          tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next",
            "Tailwind",
            "Portfolio",
            "Resume",
            "Frontend",
          ],
          status: "lab",
          links: {
            live: "https://resume-v1.tahanabavi.ir/",
          },
        },
        {
          img: "https://s8.uupload.ir/files/pr1_7rjx.jpg",
          title: "Portfolio Experiment",
          slug: "portfolio-experiment",
          body: "یک نسخه مدرن از پورتفولیو با Next.js و ارائه انیمیشنی پروژه‌ها.",
          tags: [
            "TypeScript",
            "React",
            "Next",
            "Tailwind",
            "Vercel",
            "Next.js",
            "Portfolio",
            "Animation",
          ],
          status: "lab",
          links: {
            live: "https://portfolio-gamma-flax-82.vercel.app/",
          },
        },
      ],
    },
  ],
};
