import { motion } from "framer-motion";

export const funText = ["fun.text1", "fun.text2", "fun.text3", "fun.text4"];
export const yearsExp = 5;
export const socialData = [
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
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
          d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
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
    link: "https://github.com/TahaNabavi/",
    name: "Github",
    id: "TahaNabavi",
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
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
          d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
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
          d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
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
          d="M16.5 7.5v.01"
          fill="undefined"
          variants={{
            hidden: {
              x: 0,
              y: 0,
              opacity: 1,
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
    link: "https://www.instagram.com/taha.nabavi1?igsh=dGxtdzFtemE5eWpp",
    name: "Instagram",
    id: "taha.nabavi1",
    color: "#E4405F",
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
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
          d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"
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
    link: "https://t.me/TahaNab",
    name: "Telegram",
    id: "@TahaNab",
    color: "#0088CC",
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
          d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
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
              y: 5,
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
              transition: { duration: 0.5, ease: "linear", delay: 0 },
            },
          }}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>
    ),
    link: "https://discord.com/users/687043261340057610",
    name: "Discord",
    id: "WanHeda6985",
    color: "#5865F2",
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
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
          d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
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
          d="M3 7l9 6l9 -6"
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
    link: "mailto:sayyedtahanabavi@gmail.com",
    name: "Gmail",
    id: "sayyedtahanabavi@gmail.com",
    color: "#EA4335",
  },
];
export const email = "mailto:sayyedtahanabavi@gmail.com"