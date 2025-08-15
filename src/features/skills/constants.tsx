import { motion } from "framer-motion";
import { ReactNode } from "react";

export const skillsData = {
  lang: {
    title: "Languages",
    color: "#3178C6",
    skills: [
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-html5"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M0 0h24v24H0z"
              stroke="none"
              fill="none"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "HTML",
        color: "#E34F26",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-css3"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M0 0h24v24H0z"
              stroke="none"
              fill="none"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "CSS",
        color: "#1572B6",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-javascript"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M0 0h24v24H0z"
              stroke="none"
              fill="none"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M7.5 8h3v8l-2 -1"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "JavaScript",
        color: "#F7DF1E",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-typescript"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M0 0h24v24H0z"
              stroke="none"
              fill="none"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M9 12h4"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M11 12v6"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "TypeScript",
        color: "#3178C6",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-php"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M0 0h24v24H0z"
              stroke="none"
              fill="none"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M12 7.5l-1 5.5"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M11.6 10h2.4l-.5 3"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "PHP",
        color: "#777BB4",
      },
    ],
  },
  frameworks: {
    title: "Frameworks",
    color: "#27548A",
    skills: [
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff0000"
            strokeWidth="1"
            strokeLinecap="inherit"
            strokeLinejoin="inherit"
            variants={{
              hidden: {
                x: 0,
                y: 0,
                opacity: 0,
                pathLength: 1,
                rotate: 0,
                scale: 1,
              },
              visible: {
                x: 0,
                y: 0,
                opacity: 1,
                pathLength: 1,
                rotate: 0,
                scale: 1,
                transition: { duration: 1, ease: "linear", delay: 0 },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M11 18v4"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M7 15.5l7 -4"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M14 7.5v4"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M14 11.5l4 2.5"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M11 13v-7.5l-4 -2.5l-4 2.5"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M7 8l4 -2.5"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M18 10l4 -2.5"
              variants={{}}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "Laravel",
        color: "red",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M0 0h24v24H0z"
              stroke="none"
              fill="none"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "React",
        color: "#61DAFB",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-nextjs"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M0 0h24v24H0z"
              stroke="none"
              fill="none"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M15 12v-3"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "Next",
        color: "#fff",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M0 0h24v24H0z"
              stroke="none"
              fill="none"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "Node",
        color: "#339933",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 0,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "Express",
        color: "#fff",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tailwind"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M0 0h24v24H0z"
              stroke="none"
              fill="none"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "Tailwind",
        color: "#fff",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-socket-io"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M0 0h24v24H0z"
              stroke="none"
              fill="none"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M11 11h1l3 -4z"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M12 13h1l-4 4z"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "Socket",
        color: "#fff",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            version="1.1"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M8.972 10.374v7.262c0 0.874 0.097 1.003 0.965 1.252l-0.208 1.217c-0.463-0.105-0.909-0.152-1.312-0.311-0.769-0.302-0.89-0.999-0.893-1.715-0.010-2.053-0.004-4.106-0.004-6.158v-0.406c-0.353 0.027-0.678 0.024-0.99 0.084-0.359 0.068-0.564 0.363-0.576 0.795-0.017 0.602-0.006 1.204-0.016 1.806-0.005 0.276-0.017 0.553-0.050 0.826-0.062 0.515-0.299 0.934-0.733 1.215 0.004 0.039-0.002 0.068 0.008 0.075 0.651 0.455 0.763 1.137 0.775 1.857 0.009 0.572-0 1.145 0.003 1.717 0.005 0.863 0.229 1.096 1.095 1.151l0.14 0.021v1.126c-0.601-0.015-1.189-0.040-1.727-0.328-0.599-0.321-0.801-0.877-0.83-1.505-0.030-0.65-0.019-1.302-0.025-1.953-0.001-0.118 0.004-0.237-0.003-0.356-0.043-0.754-0.337-1.086-1.079-1.214-0.006-0.034-0.017-0.071-0.017-0.109-0.002-0.316-0.001-0.631-0.001-0.937l0.053-0.048c0.781-0.189 1.037-0.507 1.046-1.323 0.006-0.523-0.009-1.046 0.005-1.569 0.009-0.354 0.024-0.712 0.087-1.059 0.139-0.767 0.697-1.231 1.59-1.351 0.264-0.035 0.53-0.057 0.796-0.061 0.62-0.009 1.241-0.003 1.902-0.003v0zM11.489 17.175c-0.092 0.759 0.493 1.455 1.305 1.606 0.768 0.143 1.509 0.011 2.276-0.229 0.061 0.356 0.128 0.7 0.172 1.047 0.007 0.053-0.084 0.154-0.149 0.174-1.125 0.352-2.26 0.468-3.389 0.035-0.696-0.267-1.199-0.764-1.467-1.46-0.425-1.107-0.43-2.221 0.071-3.305 0.732-1.585 2.556-1.997 3.921-1.362 0.825 0.384 1.223 1.098 1.365 1.954 0.081 0.49 0.074 0.994 0.11 1.539-1.449-0.001-2.834-0.001-4.214-0.001v0zM14.217 16.105c0.017-0.924-0.507-1.502-1.328-1.497-0.785 0.005-1.423 0.677-1.403 1.497h2.731zM24.829 22.2v-1.144l0.328-0.023c0.617-0.050 0.892-0.324 0.908-0.942 0.015-0.592 0-1.184 0.011-1.776 0.005-0.285 0.022-0.573 0.064-0.855 0.073-0.488 0.322-0.88 0.78-1.177-0.81-0.514-0.837-1.299-0.845-2.089-0.006-0.543 0.006-1.086-0.005-1.628-0.015-0.737-0.287-1.006-1.026-1.039l-0.204-0.014v-1.137c0.642 0.014 1.278 0.034 1.841 0.398 0.524 0.339 0.688 0.876 0.713 1.454 0.031 0.7 0.015 1.401 0.028 2.101 0.004 0.206 0.014 0.418 0.067 0.615 0.135 0.507 0.486 0.769 1.019 0.787v1.109c-0.51 0.022-0.875 0.265-1.012 0.773-0.054 0.197-0.068 0.408-0.072 0.613-0.014 0.691 0 1.382-0.025 2.072-0.039 1.095-0.616 1.704-1.706 1.831-0.28 0.033-0.563 0.045-0.863 0.069v0zM25.096 13.701l-0.263 1.146c-0.61-0.202-1.211-0.341-1.841-0.24-0.397 0.064-0.631 0.238-0.68 0.516-0.054 0.301 0.093 0.568 0.457 0.748 0.308 0.152 0.635 0.266 0.952 0.4 0.19 0.081 0.381 0.16 0.566 0.253 0.89 0.444 1.198 1.013 1.096 2.015-0.071 0.702-0.577 1.219-1.467 1.415-1.061 0.233-2.111 0.168-3.168-0.23l0.232-1.154c0.455 0.104 0.888 0.239 1.331 0.292 0.366 0.044 0.747 0.009 1.117-0.028 0.244-0.024 0.449-0.149 0.509-0.423 0.062-0.282-0.018-0.527-0.256-0.672-0.292-0.178-0.612-0.312-0.922-0.461-0.372-0.178-0.76-0.328-1.118-0.531-1.054-0.595-1.044-2.437 0.128-2.997 0.347-0.166 0.741-0.266 1.124-0.32 0.743-0.106 1.466 0.047 2.204 0.271zM20.318 13.649l-0.275 1.2c-0.611-0.208-1.203-0.339-1.825-0.244-0.416 0.064-0.649 0.24-0.699 0.532-0.050 0.296 0.1 0.556 0.475 0.739 0.327 0.159 0.673 0.28 1.008 0.421 0.163 0.069 0.326 0.14 0.485 0.219 0.922 0.459 1.244 1.078 1.097 2.096-0.101 0.702-0.713 1.241-1.615 1.383-0.916 0.144-1.825 0.12-2.719-0.166-0.219-0.070-0.311-0.155-0.244-0.395 0.080-0.282 0.128-0.573 0.191-0.863 0.452 0.102 0.885 0.238 1.328 0.29 0.366 0.043 0.747 0.009 1.117-0.028 0.26-0.025 0.462-0.171 0.517-0.454 0.053-0.273-0.042-0.51-0.267-0.641-0.339-0.197-0.705-0.346-1.059-0.516-0.328-0.157-0.668-0.294-0.982-0.474-1.055-0.605-1.038-2.433 0.151-3.024 0.529-0.263 1.089-0.361 1.664-0.316 0.543 0.043 1.081 0.155 1.653 0.241v0z"
              fill="#444444"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 0,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "Less",
        color: "#1D365D",
      },
    ],
  },
  database: {
    title: "Databases",
    color: "#8AB2A6",
    skills: [
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-mysql"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M0 0h24v24H0z"
              stroke="none"
              fill="none"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M9 7h.01"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 0,
                  pathLength: 1,
                  rotate: 0,
                  scale: 0,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "MySQL",
        color: "#4479A1",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            strokeLinecap="inherit"
            strokeLinejoin="inherit"
            stroke="currentColor"
            fill="#fff"
            strokeWidth="0"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: { duration: 1, ease: "linear", delay: 0 },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"
              fill="#fff"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"
              fill="#0277bd"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"
              fill="#0277bd"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"
              fill="#0277bd"
              variants={{}}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "PostgreSQL",
        color: "#fff",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 -18 256 256"
            preserveAspectRatio="xMinYMin meet"
            strokeLinecap="inherit"
            strokeLinejoin="inherit"
            stroke="currentColor"
            fill="#fff"
            strokeWidth="0"
            variants={{
              hidden: {
                x: 0,
                y: 0,
                opacity: 0,
                pathLength: 1,
                rotate: 0,
                scale: 1,
              },
              visible: {
                x: 0,
                y: 0,
                opacity: 1,
                pathLength: 1,
                rotate: 0,
                scale: 1,
                transition: { duration: 1, ease: "linear", delay: 0 },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M245.97 168.943c-13.662 7.121-84.434 36.22-99.501 44.075-15.067 7.856-23.437 7.78-35.34 2.09-11.902-5.69-87.216-36.112-100.783-42.597C3.566 169.271 0 166.535 0 163.951v-25.876s98.05-21.345 113.879-27.024c15.828-5.679 21.32-5.884 34.79-.95 13.472 4.936 94.018 19.468 107.331 24.344l-.006 25.51c.002 2.558-3.07 5.364-10.024 8.988"
              fill="#912626"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M245.965 143.22c-13.661 7.118-84.431 36.218-99.498 44.072-15.066 7.857-23.436 7.78-35.338 2.09-11.903-5.686-87.214-36.113-100.78-42.594-13.566-6.485-13.85-10.948-.524-16.166 13.326-5.22 88.224-34.605 104.055-40.284 15.828-5.677 21.319-5.884 34.789-.948 13.471 4.934 83.819 32.935 97.13 37.81 13.316 4.881 13.827 8.9.166 16.02"
              fill="#C6302B"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M245.97 127.074c-13.662 7.122-84.434 36.22-99.501 44.078-15.067 7.853-23.437 7.777-35.34 2.087-11.903-5.687-87.216-36.112-100.783-42.597C3.566 127.402 0 124.67 0 122.085V96.206s98.05-21.344 113.879-27.023c15.828-5.679 21.32-5.885 34.79-.95C162.142 73.168 242.688 87.697 256 92.574l-.006 25.513c.002 2.557-3.07 5.363-10.024 8.987"
              fill="#912626"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M245.965 101.351c-13.661 7.12-84.431 36.218-99.498 44.075-15.066 7.854-23.436 7.777-35.338 2.087-11.903-5.686-87.214-36.112-100.78-42.594-13.566-6.483-13.85-10.947-.524-16.167C23.151 83.535 98.05 54.148 113.88 48.47c15.828-5.678 21.319-5.884 34.789-.949 13.471 4.934 83.819 32.933 97.13 37.81 13.316 4.88 13.827 8.9.166 16.02"
              fill="#C6302B"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M245.97 83.653c-13.662 7.12-84.434 36.22-99.501 44.078-15.067 7.854-23.437 7.777-35.34 2.087-11.903-5.687-87.216-36.113-100.783-42.595C3.566 83.98 0 81.247 0 78.665v-25.88s98.05-21.343 113.879-27.021c15.828-5.68 21.32-5.884 34.79-.95C162.142 29.749 242.688 44.278 256 49.155l-.006 25.512c.002 2.555-3.07 5.361-10.024 8.986"
              fill="#912626"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M245.965 57.93c-13.661 7.12-84.431 36.22-99.498 44.074-15.066 7.854-23.436 7.777-35.338 2.09C99.227 98.404 23.915 67.98 10.35 61.497-3.217 55.015-3.5 50.55 9.825 45.331 23.151 40.113 98.05 10.73 113.88 5.05c15.828-5.679 21.319-5.883 34.789-.948 13.471 4.935 83.819 32.934 97.13 37.811 13.316 4.876 13.827 8.897.166 16.017"
              fill="#C6302B"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M159.283 32.757l-22.01 2.285-4.927 11.856-7.958-13.23-25.415-2.284 18.964-6.839-5.69-10.498 17.755 6.944 16.738-5.48-4.524 10.855 17.067 6.391M131.032 90.275L89.955 73.238l58.86-9.035-17.783 26.072M74.082 39.347c17.375 0 31.46 5.46 31.46 12.194 0 6.736-14.085 12.195-31.46 12.195s-31.46-5.46-31.46-12.195c0-6.734 14.085-12.194 31.46-12.194"
              fill="#FFF"
              variants={{
                hidden: {
                  x: 0,
                  y: -20,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M185.295 35.998l34.836 13.766-34.806 13.753-.03-27.52"
              fill="#621B1C"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M146.755 51.243l38.54-15.245.03 27.519-3.779 1.478-34.791-13.752"
              fill="#9A2928"
              variants={{}}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "Redis",
        color: "#DC382D",
      },
    ],
  },
  etc: {
    title: "etc",
    color: "#007074",
    skills: [
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
            version="1.1"
            preserveAspectRatio="xMidYMid"
            strokeLinecap="inherit"
            strokeLinejoin="inherit"
            stroke="currentColor"
            fill="#fff"
            strokeWidth="0"
            variants={{
              hidden: {
                x: 0,
                y: 0,
                opacity: 0,
                pathLength: 1,
                rotate: 0,
                scale: 1,
              },
              visible: {
                x: 0,
                y: 0,
                opacity: 1,
                pathLength: 1,
                rotate: 0,
                scale: 1,
                transition: { duration: 1, ease: "linear", delay: 0 },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M254.953118,144.253071 C263.911504,74.1217108 214.38443,10.0052669 144.381048,1.04688158 C74.3776647,-7.9115038 10.0052669,41.6155696 1.04688158,111.618952 C-7.9115038,181.622335 41.6155696,245.866756 111.618952,254.953118 C181.750312,263.911504 245.866756,214.38443 254.953118,144.253071 Z"
              fill="#FF6C37"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M124.018448,36.9853339 L70.012182,90.9916 L54.7829269,75.7623449 C107.893354,22.6519173 113.140409,27.2590869 124.018448,36.9853339 L124.018448,36.9853339 Z"
              fill="#FFFFFF"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M70.012182,92.2713693 C69.6282512,92.2713693 69.3722974,92.1433924 69.1163435,91.8874385 L53.7591114,76.6581834 C53.2472037,76.1462757 53.2472037,75.3784141 53.7591114,74.8665063 C107.765378,20.8602402 113.396363,25.9793176 124.78631,36.2174723 C125.042264,36.4734262 125.170241,36.72938 125.170241,37.1133108 C125.170241,37.4972416 125.042264,37.7531955 124.78631,38.0091494 L70.7800436,91.8874385 C70.6520667,92.1433924 70.2681359,92.2713693 70.012182,92.2713693 Z M56.574604,75.7623449 L70.012182,89.1999229 L122.098794,37.1133108 C112.628501,28.6668332 106.229654,26.1072945 56.574604,75.7623449 L56.574604,75.7623449 Z"
              fill="#FF6C37"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M85.497391,106.476809 L70.7800436,91.7594616 L124.78631,37.7531955 C139.247703,52.342566 117.619601,76.0182987 85.497391,106.476809 Z"
              fill="#FFFFFF"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M85.497391,107.756578 C85.1134602,107.756578 84.8575064,107.628601 84.6015525,107.372648 L69.8842051,92.6553001 C69.6282512,92.3993463 69.6282512,92.1433924 69.6282512,91.7594616 C69.6282512,91.3755308 69.7562282,91.1195769 70.012182,90.8636231 L124.018448,36.857357 C124.530356,36.3454492 125.298217,36.3454492 125.810125,36.857357 C129.137525,39.9288034 130.929203,44.2800191 130.801226,48.7592118 C130.545272,62.9646515 114.420178,81.0093992 86.5212065,107.372648 C86.1372757,107.628601 85.7533449,107.756578 85.497391,107.756578 L85.497391,107.756578 Z M72.5717207,91.7594616 C80.7622445,100.077962 84.2176217,103.405363 85.497391,104.685132 C106.997516,84.2088225 127.857756,63.2206053 127.985733,48.7592118 C128.11371,45.4318115 126.833941,42.1044113 124.658333,39.5448726 L72.5717207,91.7594616 Z"
              fill="#FF6C37"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M55.0388808,76.1462757 L65.9169201,87.024315 C66.172874,87.2802689 66.172874,87.5362228 65.9169201,87.7921767 C65.7889432,87.9201536 65.7889432,87.9201536 65.6609663,87.9201536 L43.1370259,92.7832771 C41.9852335,92.911254 40.961418,92.1433924 40.7054642,90.9916 C40.5774872,90.3517153 40.8334411,89.7118307 41.2173719,89.3278999 L54.2710192,76.2742526 C54.526973,76.0182987 54.9109038,75.8903218 55.0388808,76.1462757 Z"
              fill="#FFFFFF"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M42.7530951,94.0630464 C40.8334411,94.0630464 39.4256948,92.5273232 39.4256948,90.6076692 C39.4256948,89.7118307 39.8096256,88.8159921 40.4495103,88.1761075 L53.5031576,75.1224602 C54.2710192,74.4825755 55.2948346,74.4825755 56.0626962,75.1224602 L66.9407356,86.0004996 C67.7085972,86.6403842 67.7085972,87.7921767 66.9407356,88.5600383 C66.6847817,88.8159921 66.4288279,88.9439691 66.0448971,89.071946 L43.5209567,93.9350695 C43.2650028,93.9350695 43.009049,94.0630464 42.7530951,94.0630464 L42.7530951,94.0630464 Z M54.65495,77.5540219 L42.1132104,90.0957615 C41.8572566,90.3517153 41.7292796,90.7356461 41.9852335,91.1195769 C42.1132104,91.5035077 42.4971412,91.6314847 42.881072,91.5035077 L63.9972661,86.8963381 L54.65495,77.5540219 Z"
              fill="#FF6C37"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M152.557304,7.03873136 C144.366781,-0.895838537 131.185156,-0.639884669 123.250587,7.67861603 C115.316017,15.9971167 115.57197,29.050764 123.890471,36.9853339 C130.673249,43.5121575 140.911403,44.6639499 148.97395,39.8008264 L134.38458,25.211456 L152.557304,7.03873136 Z"
              fill="#FFFFFF"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M138.223888,44.0240653 C126.066079,44.0240653 116.211855,34.1698413 116.211855,22.0120326 C116.211855,9.85422391 126.066079,-1.81866161e-14 138.223888,-1.81866161e-14 C143.854873,-1.81866161e-14 149.357881,2.17560788 153.453143,6.14289283 C153.709097,6.39884669 153.837074,6.65480056 153.837074,7.03873136 C153.837074,7.42266217 153.709097,7.67861603 153.453143,7.9345699 L136.176257,25.211456 L149.741812,38.777011 C150.25372,39.2889187 150.25372,40.0567803 149.741812,40.568688 C149.613835,40.696665 149.613835,40.696665 149.485858,40.8246419 C146.158458,42.8722729 142.191173,44.0240653 138.223888,44.0240653 Z M138.223888,2.68751561 C127.473825,2.68751561 118.771394,11.3899471 118.899371,22.1400096 C118.899371,32.890072 127.601802,41.5925035 138.351865,41.4645266 C141.295334,41.4645266 144.238804,40.8246419 146.926319,39.4168956 L133.488741,26.1072945 C133.232787,25.8513406 133.10481,25.5953868 133.10481,25.211456 C133.10481,24.8275252 133.232787,24.5715713 133.488741,24.3156174 L150.63765,7.1667083 C147.182273,4.22323882 142.831057,2.68751561 138.223888,2.68751561 L138.223888,2.68751561 Z"
              fill="#FF6C37"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M152.941235,7.42266217 L152.685281,7.1667083 L134.38458,25.211456 L148.845973,39.6728495 C150.25372,38.777011 151.661466,37.7531955 152.813258,36.6014031 C161.003782,28.5388563 161.003782,15.485209 152.941235,7.42266217 L152.941235,7.42266217 Z"
              fill="#FFFFFF"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M148.97395,41.0805958 C148.590019,41.0805958 148.334066,40.9526188 148.078112,40.696665 L133.488741,26.1072945 C133.232787,25.8513406 133.10481,25.5953868 133.10481,25.211456 C133.10481,24.8275252 133.232787,24.5715713 133.488741,24.3156174 L151.661466,6.14289283 C152.173374,5.63098509 152.941235,5.63098509 153.453143,6.14289283 L153.837074,6.39884669 C162.411528,14.9733013 162.411528,28.7948101 153.965051,37.4972416 C152.685281,38.777011 151.277535,39.9288034 149.741812,40.8246419 C149.357881,40.9526188 149.101927,41.0805958 148.97395,41.0805958 L148.97395,41.0805958 Z M136.176257,25.211456 L149.101927,38.1371263 C150.125743,37.4972416 151.149558,36.6014031 151.91742,35.8335415 C159.212105,28.5388563 159.596036,16.6370014 152.557304,8.95838537 L136.176257,25.211456 Z"
              fill="#FF6C37"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M126.194056,39.2889187 C123.12261,36.2174723 118.131509,36.2174723 115.060063,39.2889187 L66.8127587,87.5362228 L74.8753055,95.5987696 L125.938102,50.8068428 C129.265502,47.9913502 129.521456,43.0002498 126.705964,39.6728495 C126.45001,39.5448726 126.322033,39.4168956 126.194056,39.2889187 L126.194056,39.2889187 Z"
              fill="#FFFFFF"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M74.7473286,96.878539 C74.3633978,96.878539 74.1074439,96.750562 73.85149,96.4946082 L65.7889432,88.4320613 C65.2770355,87.9201536 65.2770355,87.152292 65.7889432,86.6403842 L114.036247,38.3930802 C117.619601,34.809726 123.378563,34.809726 126.961918,38.3930802 C130.545272,41.9764343 130.545272,47.7353963 126.961918,51.3187505 C126.833941,51.4467274 126.705964,51.5747044 126.577987,51.7026813 L75.5151902,96.4946082 C75.3872133,96.750562 75.1312594,96.878539 74.7473286,96.878539 L74.7473286,96.878539 Z M68.6044358,87.5362228 L74.8753055,93.8070925 L125.042264,49.7830273 C127.857756,47.4794425 128.11371,43.2562037 125.810125,40.4407111 C123.50654,37.6252186 119.283302,37.3692647 116.467809,39.6728495 C116.339832,39.8008264 116.211855,39.9288034 115.955901,40.0567803 L68.6044358,87.5362228 Z"
              fill="#FF6C37"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M29.8274248,142.438327 C29.3155171,142.694281 29.0595632,143.206189 29.1875401,143.718097 L31.363148,152.932436 C31.8750557,154.212205 31.1071941,155.747929 29.6994479,156.131859 C28.6756324,156.51579 27.52384,156.131859 26.8839553,155.363998 L12.8064926,141.414512 L58.7502118,95.4707927 L74.6193516,95.7267466 L85.3694141,106.476809 C82.8098754,108.652417 67.3246664,123.625718 29.8274248,142.438327 L29.8274248,142.438327 Z"
              fill="#FFFFFF"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M28.8036093,157.411629 C27.7797938,157.411629 26.7559784,157.027698 26.1160937,156.259836 L12.1666079,142.31035 C11.910654,142.054397 11.7826771,141.798443 11.7826771,141.414512 C11.7826771,141.030581 11.910654,140.774627 12.1666079,140.518673 L58.1103272,94.5749541 C58.366281,94.3190003 58.7502118,94.1910233 59.0061657,94.1910233 L74.8753055,94.4469772 C75.2592363,94.4469772 75.5151902,94.5749541 75.7711441,94.830908 L86.5212065,105.58097 C86.7771604,105.836924 86.9051373,106.220855 86.9051373,106.604786 C86.9051373,106.988717 86.7771604,107.244671 86.3932296,107.500624 L85.497391,108.268486 C71.931836,120.170341 53.5031576,132.072196 30.5952864,143.462143 L32.7708943,152.548505 C33.1548251,154.212205 32.3869635,156.003882 30.8512403,156.899721 C30.0833787,157.283652 29.443494,157.411629 28.8036093,157.411629 Z M14.7261466,141.414512 L27.9077708,154.468159 C28.2917016,155.108044 29.0595632,155.363998 29.6994479,154.980067 C30.3393325,154.596136 30.5952864,153.828275 30.2113556,153.18839 L28.0357477,143.974051 C27.7797938,142.822258 28.2917016,141.798443 29.3155171,141.286535 C51.9674343,129.896588 70.2681359,118.12271 83.705714,106.476809 L74.2354208,97.0065159 L59.5180734,96.750562 L14.7261466,141.414512 Z"
              fill="#FF6C37"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M1.9284532,152.420528 L12.9344695,141.414512 L29.3155171,157.795559 L3.20822254,156.003882 C2.05643013,155.875905 1.28856853,154.85209 1.41654546,153.700298 C1.41654546,153.18839 1.5445224,152.676482 1.9284532,152.420528 L1.9284532,152.420528 Z"
              fill="#FFFFFF"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M29.3155171,158.947352 L3.0802456,157.155675 C1.16059159,157.027698 -0.119177745,155.363998 0.00879918845,153.444344 C0.136776122,152.676482 0.39272999,151.908621 1.03261466,151.396713 L12.038631,140.390696 C12.5505387,139.878789 13.3184003,139.878789 13.830308,140.390696 L30.2113556,156.771744 C30.5952864,157.155675 30.7232633,157.667583 30.4673095,158.17949 C30.2113556,158.691398 29.8274248,158.947352 29.3155171,158.947352 L29.3155171,158.947352 Z M12.9344695,143.206189 L2.82429173,153.316367 C2.44036093,153.572321 2.44036093,154.212205 2.82429173,154.468159 C2.95226867,154.596136 3.0802456,154.724113 3.33619947,154.724113 L25.9881168,156.259836 L12.9344695,143.206189 Z"
              fill="#FF6C37"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M54.2710192,101.357732 C53.5031576,101.357732 52.9912498,100.717847 52.9912498,100.077962 C52.9912498,99.6940315 53.1192268,99.4380776 53.3751806,99.1821238 L65.7889432,86.7683612 C66.3008509,86.2564534 67.0687125,86.2564534 67.5806203,86.7683612 L75.6431671,94.830908 C76.0270979,95.2148388 76.1550749,95.5987696 76.0270979,96.1106774 C75.899121,96.4946082 75.5151902,96.878539 75.0032825,97.0065159 L54.526973,101.357732 C54.3989961,101.357732 54.2710192,101.357732 54.2710192,101.357732 L54.2710192,101.357732 Z M66.6847817,89.4558768 L58.2383041,97.9023544 L72.059813,94.9588849 L66.6847817,89.4558768 Z"
              fill="#FF6C37"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M74.6193516,95.7267466 L60.5418889,98.798193 C59.5180734,99.0541468 58.494258,98.4142622 58.2383041,97.3904467 C58.1103272,96.750562 58.2383041,96.1106774 58.7502118,95.5987696 L66.5568048,87.7921767 L74.6193516,95.7267466 Z"
              fill="#FFFFFF"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M60.2859351,100.077962 C58.494258,100.077962 57.0865117,98.670216 57.0865117,96.878539 C57.0865117,95.9827004 57.4704425,95.2148388 57.9823502,94.5749541 L65.7889432,86.7683612 C66.3008509,86.2564534 67.0687125,86.2564534 67.5806203,86.7683612 L75.6431671,94.830908 C76.0270979,95.2148388 76.1550749,95.5987696 76.0270979,96.1106774 C75.899121,96.4946082 75.5151902,96.878539 75.0032825,97.0065159 L60.9258197,100.077962 C60.6698659,100.077962 60.413912,100.077962 60.2859351,100.077962 L60.2859351,100.077962 Z M66.6847817,89.4558768 L59.7740273,96.3666312 C59.5180734,96.6225851 59.5180734,96.878539 59.6460504,97.1344928 C59.7740273,97.3904467 60.0299812,97.5184236 60.413912,97.5184236 L72.1877899,94.9588849 L66.6847817,89.4558768 Z"
              fill="#FF6C37"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M153.069212,19.7084478 C152.813258,18.9405862 151.91742,18.5566554 151.149558,18.8126093 C150.381697,19.0685632 149.997766,19.9644017 150.25372,20.7322633 C150.25372,20.8602402 150.381697,20.9882172 150.381697,21.1161941 C151.149558,22.6519173 150.893604,24.5715713 149.869789,25.9793176 C149.357881,26.6192023 149.485858,27.5150408 149.997766,28.0269485 C150.63765,28.5388563 151.533489,28.4108793 152.045397,27.7709947 C153.965051,25.3394329 154.348981,22.2679865 153.069212,19.7084478 L153.069212,19.7084478 Z"
              fill="#FF6C37"
              variants={{}}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "Postman",
        color: "#FF6C37",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-vercel"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M0 0h24v24H0z"
              stroke="none"
              fill="none"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M3 19h18l-9 -15z"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "Vercel",
        color: "#fff",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-git"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M0 0h24v24H0z"
              stroke="none"
              fill="none"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 0,
                  pathLength: 1,
                  rotate: 0,
                  scale: 0,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 0,
                  pathLength: 1,
                  rotate: 0,
                  scale: 0,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 0,
                  pathLength: 1,
                  rotate: 0,
                  scale: 0,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M12 15v-6"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M15 11l-2 -2"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M11 7l-1.9 -1.9"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "Git",
        color: "#F05032",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-prisma"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M0 0h24v24H0z"
              stroke="none"
              fill="none"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M4.186 16.202l3.615 5.313c.265 .39 .754 .57 1.215 .447l10.166 -2.718a1.086 1.086 0 0 0 .713 -1.511l-7.505 -15.483a.448 .448 0 0 0 -.787 -.033l-7.453 12.838a1.07 1.07 0 0 0 .037 1.147z"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M8.5 22l3.5 -20"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "Prisma",
        color: "#2D3748",
      },
      {
        icon: (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-discord"
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M0 0h24v24H0z"
              stroke="none"
              fill="none"
              variants={{}}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />

            <motion.path
              d="M7 16.5c3.5 1 6.5 1 10 0"
              fill="undefined"
              variants={{
                hidden: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 0,
                  rotate: 0,
                  scale: 1,
                },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  pathLength: 1,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 1, ease: "linear", delay: 0 },
                },
              }}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        ),
        name: "Discord JS",
        color: "#5865F2",
      },
    ],
  },
};
