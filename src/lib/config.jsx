import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export const people = [
  {
    id: 1,
    name: "Rajendra Pandey",
    designation: "AI-ML Researcher",
    image: "/sir.jpeg",
  },
  {
    id: 2,
    name: "Vatsalya Gautam",
    designation: "Frontend Developer",
    image: "/vatsalya.jpg",
  },
  {
    id: 3,
    name: "Divyanshu Goswami",
    designation: "API Dev and Integration Expert",
    image: "/bro.jpg",
  },
  {
    id: 4,
    name: "Jayanshu Nagwani",
    designation: "Backend Developer",
    image: "/jayanshu.svg",
  },
];
