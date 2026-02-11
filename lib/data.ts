export interface ContactLink {
  label: string;
  url: string;
}

export interface Skill {
  category: string;
  items: string;
}

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  date: string;
  bullets: string[];
}

export interface Project {
  name: string;
  url?: string;
  tech: string;
  inDevelopment?: boolean;
  openSource?: boolean;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  expected: string;
  coursework: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    location: string;
    email: string;
    links: ContactLink[];
  };
  summary: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
}

export const resumeData: ResumeData = {
  name: "AYOWOLE OJOADE",
  title: "Full-Stack Software Engineer",
  contact: {
    location: "Nigeria",
    email: "ayoojoade@gmail.com",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/ayowole-ojoade-aa1050257",
      },
      { label: "GitHub", url: "https://github.com/Cypher012" },
      { label: "X", url: "https://x.com/blaqcipher02" },
    ],
  },
  summary:
    "Computer Science student at Obafemi Awolowo University (OAU) with 1+ years of professional frontend development experience, specializing in TypeScript/React and Go backend systems. Currently leading frontend development for a UK-based EdTech startup while building educational platforms serving Nigerian university students. Proven track record of delivering production-ready web applications with clean architecture and maintainable code.",
  skills: [
    {
      category: "Languages",
      items: "JavaScript, TypeScript, Go (Golang), Python",
    },
    {
      category: "Frontend",
      items: "React, Next.js, Tailwind CSS, shadcn/ui, Responsive Design",
    },
    {
      category: "Backend",
      items: "Golang (Chi Router, Fiber), Node.js (Fastify), RESTful APIs",
    },
    {
      category: "Databases",
      items: "PostgreSQL, SQLite, SQLC (type-safe SQL)",
    },
    {
      category: "DevOps & Tools",
      items: "Git, Linux, Docker, CLI Development, API Design",
    },
  ],
  experience: [
    {
      role: "Lead Frontend Developer",
      company: "Dentispark",
      companyUrl: "",
      date: "Nov 2024 – Present",
      bullets: [
        "Leading frontend development for a UK-based EdTech startup building a comprehensive dental education platform for UK dental students.",
        "Architecting and implementing responsive, accessible user interfaces using Next.js, React, TypeScript, and Tailwind CSS with modern component patterns.",
        "Collaborating with backend teams and dental content specialists to deliver seamless student learning experiences and interactive study tools.",
        "Ensuring cross-browser compatibility, performance optimization, and adherence to web accessibility standards (WCAG).",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Zumbox Technologies",
      companyUrl: "",
      date: "Dec 2023 – Aug 2024",
      bullets: [
        "Developed responsive web interfaces for diverse client projects at a digital agency, consistently meeting project deadlines and client requirements.",
        "Built maintainable, reusable frontend components with React and TypeScript, improving development velocity across multiple projects.",
        "Collaborated with designers and backend developers to translate Figma designs into pixel-perfect, functional applications.",
        "Optimized user experience through performance improvements, cross-browser compatibility testing, and responsive design implementation.",
      ],
    },
  ],
  projects: [
    {
      name: "QuizSpark",
      url: "",
      tech: "Next.js, React, TypeScript, Tailwind CSS",
      inDevelopment: true,
      bullets: [
        "Building a comprehensive Computer-Based Testing (CBT) platform for OAU students with AI-powered question generation.",
        "Designed robust question data architecture supporting multiple question types (MCQ, theory) with anti-cheating features like programmatic answer shuffling.",
        "Implementing progressive mastery systems for definition-type questions with multilingual support (English/Yorùbá).",
        "Frontend-focused application featuring responsive UI, real-time quiz sessions, and seamless integration with Claude AI for intelligent question generation.",
      ],
    },
    {
      name: "Lecturer Connect",
      url: "https://github.com/Cypher012/lecturer-connect",
      tech: "Next.js, React, TypeScript, Tailwind CSS, shadcn/ui",
      openSource: true,
      bullets: [
        "Modern web application for the Faculty of Computing enabling students to discover and connect with lecturers through an intuitive interface.",
        "Features include advanced lecturer search/filtering, personalized recommendations, onboarding flow, and AI-powered chat assistant.",
        "Implemented fully responsive UI with secure authentication and custom toast notification system for enhanced user feedback.",
        "Designed for scalability to serve hundreds of students across multiple departments with role-based access control.",
      ],
    },
    {
      name: "TreeCraft CLI",
      url: "https://github.com/Cypher012/TreeCraft",
      tech: "Golang",
      openSource: true,
      bullets: [
        "Fast, terminal-based CLI tool for creating files and folders without leaving the code editor, improving developer workflow efficiency.",
        "Enables developers to search for target directories and instantly create project structures in deeply nested codebases.",
        "Reduces repetitive navigation steps compared to traditional file creation methods, particularly beneficial in large projects.",
      ],
    },
    {
      name: "Auth & API Keys System",
      url: "https://github.com/Cypher012/userauth",
      tech: "Golang",
      openSource: true,
      bullets: [
        "Full-featured authentication service implementing secure user authentication, session management, and JWT-based authorization.",
        "API keys management application providing secure key generation, storage, rotation, and management with role-based permissions.",
        "Demonstrates backend development expertise with production-ready security practices and scalable architecture patterns.",
      ],
    },
  ],
  education: [
    {
      degree: "B.Sc. Computer Science with Mathematics",
      institution: "Obafemi Awolowo University (OAU)",
      year: "3rd Year",
      expected: "Expected 2028",
      coursework:
        "Automata Theory, Database Systems, Assembly Language, Data Structures & Algorithms, Computer Architecture",
    },
  ],
};
