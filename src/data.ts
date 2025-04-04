export interface Plan {
  planName: string;
  price: number;
  features: {
    active: string[];
    unActive?: string[];
  };
  field: string;
  tags?: string[];
  technologies?: string[];
}

export const links: string[] = ["about-me", "testmonials", "portfolio"];
export const plans: Plan[] = [
  {
    field: "Front End (Next Js)",
    tags: ["Business", "Custom Idea", "Education"],
    price: 49.9,
    planName: "Medium",
    features: {
      active: [
        "Optimize Content",
        "Free Domain",
        "3 interactive pages",
        "fast deliver",
        "5 Days deliver",
        "Creative Animations",
        "Reusable Content",
        "Clean Code",
      ],
    },
    technologies: ["tailwndcss", "Next Js", "Framer Motion", "GSAP"],
  },
  {
    field: "Front End (React Js | Next Js)",
    tags: ["Landing Page", "Local Services", "News WebApp"],
    price: 34.9,
    planName: "Basic",
    features: {
      active: [
        "3 interactive pages",
        "fast deliver",
        "Reusable Content",
        "Clean Code",
        "7 Days deliver",
      ],
      unActive: ["Optimize Content", "Free Domain", "Creative Animations"],
    },
    technologies: ["tailwndcss", "Next Js", "Framer Motion", "GSAP"],
  },
  {
    field: "Back End (API)",
    price: 59.99,
    tags: [
      "Build API",
      "Secure Authentecation System",
      "Membership Management System",
      "Data Analysis Service",
    ],
    planName: "Medium",
    features: {
      active: [
        "3 interactive pages",
        "fast deliver",
        "Reusable Content",
        "Clean Code",
        "7 Days deliver",
      ],
    },
    technologies: ["Node", "Express", "MongoDB", "Mongoose"],
  },
];
