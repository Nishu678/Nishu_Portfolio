import type { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Nishu Mittal",
    role: "Frontend React Developer",
    tagline:
      "Building scalable, high-performance React applications with modern frontend architecture",
    bio: `Frontend Developer with 1+ years of experience in building scalable, high-performance web applications using React.js and modern frontend technologies.
          Strong expertise in component-driven development, state management, API integration, responsive UI design, and user-centric interfaces.
          Experienced in building production-ready applications using React.js, Tailwind CSS, Redux Toolkit, TanStack Router, and modern JavaScript ecosystems.`,
    email: "nishumittal8247kr@gmail.com",
    location: "Mohali, Punjab",
    availability: true,
    resumeUrl: "/Nishu_Frontend_Developer.pdf",
  },

  skills: [
    { name: "React.js", category: "frontend", level: "expert", icon: "⚛️" },
    { name: "JavaScript (ES6+)", category: "frontend", level: "expert", icon: "JS" },
    { name: "HTML5", category: "frontend", level: "expert", icon: "📄" },
    { name: "CSS3", category: "frontend", level: "expert", icon: "🎨" },

    { name: "Redux Toolkit", category: "frontend", level: "advanced", icon: "◉" },
    { name: "React Hooks", category: "frontend", level: "advanced", icon: "🔄" },
    { name: "React Context API", category: "frontend", level: "advanced", icon: "🔗" },

    { name: "Tailwind CSS", category: "styling", level: "expert", icon: "🌊" },
    { name: "Bootstrap", category: "styling", level: "advanced", icon: "🔷" },
    { name: "shadcn/ui", category: "styling", level: "advanced", icon: "🎨" },

    { name: "TanStack Query", category: "tools", level: "advanced", icon: "🔷" },
    { name: "TanStack Router", category: "tools", level: "advanced", icon: "🔀" },
    { name: "Axios", category: "tools", level: "advanced", icon: "🔌" },
    { name: "Fetch API", category: "tools", level: "advanced", icon: "🌐" },

    { name: "Git", category: "tools", level: "advanced", icon: "📦" },
    { name: "GitHub", category: "tools", level: "advanced", icon: "🐙" },
    { name: "VS Code", category: "tools", level: "advanced", icon: "💻" },

    { name: "REST APIs", category: "design", level: "advanced", icon: "🔗" },
    { name: "Responsive Design", category: "design", level: "expert", icon: "📱" },
    { name: "Component-Based Architecture", category: "design", level: "advanced", icon: "⚙️" },
    { name: "Wireframing & Prototyping", category: "design", level: "advanced", icon: "🧩" },
  ],

  projects: [
    {
      id: "ecommerce-app",
      title: "E-Commerce Web Application",
      description:
        "Modern e-commerce frontend with product listings, dynamic routing, and responsive layouts.",
      longDescription:
        "Developed a modern e-commerce frontend using React.js with dynamic routing and reusable UI components. Implemented responsive layouts using Tailwind CSS and built reusable UI components using shadcn/ui.",
      image: "/images/projects/ecommerce.jpg",
      tags: ["React.js", "TanStack Router", "Tailwind CSS", "shadcn/ui"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "web",
    },
    {
      id: "metrocare-platform",
      title: "MetroCare Healthcare Platform",
      description:
        "Healthcare platform with patient registration, appointments, and admin dashboard.",
      longDescription:
        "Built the frontend architecture including patient registration, appointment management, and admin dashboard. Implemented role-based authentication workflows and dynamic UI components.",
      image: "/images/projects/healthcare.jpg",
      tags: ["React.js", "Context API", "React Router"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "dashboard",
    },
    {
      id: "hrms-dashboard",
      title: "HRMS Dashboard",
      description:
        "Employee management dashboard with data-driven insights and real-time updates.",
      longDescription:
        "Created a responsive HRMS dashboard with employee management features and real-time data integration using REST APIs and React.js.",
      image: "/images/projects/hrms.jpg",
      tags: ["React.js", "REST APIs", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
      category: "dashboard",
    },
    {
      id: "pokemon-explorer",
      title: "Pokémon Explorer App",
      description:
        "Interactive Pokémon explorer with optimized search and API caching.",
      longDescription:
        "Built a Pokémon explorer application with optimized search using debounce, pagination, and API caching. Designed responsive UI with reusable components and detailed data cards.",
      image: "/images/projects/pokemon.jpg",
      tags: ["React.js", "Axios", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
      category: "web",
    },
  ],

  experience: [
    {
      id: "experience-1",
      company: "Unify Technology",
      position: "Frontend React Developer",
      duration: "Mar 2025 - Present",
      location: "Mohali, Punjab",
      description: [
        "Developing scalable and responsive frontend applications using React.js, Tailwind CSS, Redux Toolkit, and TanStack Router",
        "Building reusable UI components using shadcn/ui to maintain design consistency",
        "Integrating RESTful APIs using Axios and TanStack Query for efficient server-state management",
        "Optimizing application performance through lazy loading, memoization, and efficient rendering",
        "Collaborating with designers and backend developers in an Agile environment",
      ],
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "TanStack Query",
        "REST APIs",
      ],
      current: true,
    },
    {
      id: "experience-2",
      company: "Truxco Technology",
      position: "UI Developer & Designer",
      duration: "Sep 2024 - Mar 2025",
      location: "Mohali, Punjab",
      description: [
        "Converted Figma designs into responsive user interfaces using HTML, CSS, Tailwind CSS, and JavaScript",
        "Improved mobile-first design and enhanced user engagement",
        "Designed UI flows, wireframes, and high-fidelity prototypes for web applications",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Figma"],
    },
  ],

  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin",
      ariaLabel: "View LinkedIn Profile",
    },
    {
      name: "GitHub",
      url: "https://github.com/Nishu2375",
      icon: "github",
      ariaLabel: "View GitHub Profile",
    },
    {
      name: "Email",
      url: "mailto:nishumittal8247kr@gmail.com",
      icon: "email",
      ariaLabel: "Send Email",
    },
    {
      name: "Phone",
      url: "tel:+919812454366",
      icon: "phone",
      ariaLabel: "Call +91 9812454366",
    },
  ],
};

export const { profile, skills, projects, experience, socialLinks } =
  portfolioData;