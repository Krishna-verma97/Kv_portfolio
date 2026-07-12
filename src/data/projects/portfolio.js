import projectImage from "../../assets/project.png";

export const portfolioProject = {
  slug: "portfolio-website",
  title: "Portfolio Website",
  shortDescription:
    "A polished, animated personal portfolio built with React, Tailwind CSS, and Firebase for modern developer storytelling.",
  status: "Completed",
  completed: "Jul 2026",
  difficulty: "Intermediate",
  duration: "5 weeks",
  overview:
    "Designed to surface engineering skills, project case studies, and production-ready web architecture while preserving responsive performance and accessibility.",
  problemStatement:
    "The portfolio needed to move beyond a static resume into a full case-study experience that showcases engineering process, architecture decisions, and technical depth.",
  specs: {
    loc: "5,200",
    duration: "5 weeks",
    gitCommits: "85",
    technologies: ["React", "Vite", "Tailwind CSS", "Firebase", "React Router"],
    modules:
      "Page routes, project cards, search provider, case study shell, markdown loader",
    screens:
      "Home, projects, knowledge base, article reader, project case study",
    version: "1.0.0",
  },
  architecture: {
    diagram: null,
    summary:
      "A single-page React application built with Vite, Tailwind CSS, and structured around reusable components for documentation, projects, and global search.",
    support: [
      "Static hosting with client-side routing",
      "Search provider and overlay for fast indexing",
      "Lightweight state management via hooks",
    ],
    frontendArchitecture: [
      "Router-driven page shell",
      "Reusable presentation components",
      "Global search context and palette",
    ],
    backendArchitecture: [
      "No dedicated backend",
      "Firebase services only for auth/hosting/data integration",
    ],
    databaseFlow: [
      "Static metadata files drive project and knowledge content",
      "Markdown is parsed and indexed at build time",
      "Search data is loaded into the client on demand",
    ],
    authenticationFlow: [
      "Firebase auth is initialized in the app shell",
      "Protected routes can reuse auth state if implemented later",
    ],
    deploymentDiagram: [
      "Source code -> Vite build -> static assets -> CDN hosting",
      "Optional Firebase hosting and Vercel deployment",
    ],
    apiCommunication: [
      "Only external APIs are third-party services like Firebase and analytics providers",
      "No custom API layer is required for the static portfolio build",
    ],
    folderStructure: [
      "src/pages - route-based experience and article pages",
      "src/components - reusable UI, documentation, and project modules",
      "src/data - project and content metadata",
      "src/utils - markdown parsing, search indexing, and helper utilities",
    ],
    dataFlow: [
      "Static markdown files are parsed at build time into searchable content.",
      "Project metadata is loaded from structured data modules and rendered into case study pages.",
      "User interactions flow through React state hooks and lightbox / search overlay components.",
    ],
    frontend: [
      "React 19 with functional components",
      "Vite build system",
      "Tailwind CSS for utility-first styling",
      "Framer Motion for subtle entrance animations",
    ],
    backend: [
      "No backend; content is served statically from the Vite application.",
    ],
    database: ["N/A - no external database used for the portfolio."],
    deployment: [
      "Static-hosted on Vercel or similar CDN for low-latency global delivery.",
    ],
  },
  implementation: {
    folderStructure: [
      "src/pages - route pages and case study shell",
      "src/components/projects - reusable project sections",
      "src/data/projects - structured project metadata",
      "src/utils - content and search helpers",
    ],
    importantComponents: [
      "ProjectHero",
      "ProjectSidebar",
      "GlobalSearchPalette",
      "ReadingProgressBar",
      "ProjectArchitectureDetails",
      "ProjectPerformance",
    ],
    reusableHooks: [
      "useReadingProgress",
      "useSearch",
      "useKnowledgeArticle",
      "useKnowledgeArticleSummaries",
    ],
    utilities: [
      "Markdown parsing",
      "search indexing",
      "slug generation",
      "text normalization",
    ],
    configuration: [
      "Vite config for static build",
      "Tailwind config for theme",
      "Firebase config for optional auth/hosting",
    ],
  },
  challenges: [
    {
      problem:
        "The portfolio needed to move beyond a static resume into a full case-study experience.",
      rootCause:
        "The existing project section was only a visual gallery without deep engineering context.",
      solution:
        "Built a reusable case study template with structured project metadata and dedicated documentation sections.",
      result:
        "A scalable engineering portfolio shell that preserves the current brand while supporting premium technical storytelling.",
    },
    {
      problem: "Search needed to be both fast and extensible.",
      rootCause: "Search data was tightly coupled to a single content type.",
      solution:
        "Created a unified search index across projects and knowledge articles with adapter-based architecture.",
      result:
        "Search can now easily scale to future markdown-based content without major refactoring.",
    },
    {
      problem: "Future projects required too much duplicated page code.",
      rootCause:
        "Each project had only a separate UI card, not a reusable page shell.",
      solution:
        "Added dynamic project routing and one metadata file per project.",
      result:
        "New case studies can be added by creating a single data object file.",
    },
  ],
  lessons: {
    technical: [
      "Use reusable data-driven sections for predictable page composition.",
      "Build content components that accept structured metadata instead of hard-coded text.",
    ],
    engineering: [
      "Design project pages with a shared shell and metadata contract.",
      "Keep routing generic so no new JSX page is needed per project.",
    ],
    performance: [
      "Lazy load large assets and use memoization in heavy components.",
      "Keep the static bundle lean by avoiding unnecessary libraries.",
    ],
    architecture: [
      "Document both frontend and backend flows for engineering readers.",
      "A clear architecture section helps the portfolio feel like professional documentation.",
    ],
    team: [
      "Write content as if handing it off to a collaborator.",
      "Organize lessons and challenges with the reader's review process in mind.",
    ],
  },
  performance: {
    optimization: [
      "Reduced bundle weight by keeping page components focused.",
      "Optimized image sizes and asset delivery through Vite.",
    ],
    lazyLoading: [
      "Keep large feature modules optional for future route-based code splitting.",
      "Defer non-critical content until after page render.",
    ],
    memoization: [
      "Memoize derived search state and expensive render lists.",
      "Avoid repeated rendering of project card detail lists.",
    ],
    bundleSize: [
      "Target a small static asset footprint for the main portfolio shell.",
      "Track and reduce third-party package usage.",
    ],
    codeSplitting: [
      "Use route-level splitting for future documentation sections.",
      "Split analytics and charting libraries away from the core shell.",
    ],
    responsiveImprovements: [
      "Ensure all sections collapse gracefully on mobile.",
      "Keep tappable elements large and accessible.",
    ],
  },
  testing: {
    manual: [
      "Validate navigation flows across desktop and mobile.",
      "Confirm case study sections render correctly with project metadata.",
    ],
    unit: [
      "Add tests for reusable components like ProjectSpecs and ProjectChallenges.",
      "Mock search provider state for behavior coverage.",
    ],
    integration: [
      "Verify route-based project rendering with project metadata files.",
      "Test search page and global palette interaction across pages.",
    ],
  },
  roadmap: [
    {
      title: "Upcoming features",
      description:
        "Add interactive markdown-based documentation pages and project diagrams.",
    },
    {
      title: "Known limitations",
      description:
        "Static project pages do not yet support deep nested sections or versioned content.",
    },
    {
      title: "Future refactoring",
      description:
        "Move project metadata to markdown frontmatter and render with a shared template.",
    },
    {
      title: "Technical debt",
      description:
        "Standardize data contracts across all project files and search source mapping.",
    },
  ],
  resources: [
    {
      label: "GitHub repository",
      title: "Kv_portfolio source",
      url: "https://github.com/Krishna-verma97/Kv_portfolio",
    },
    {
      label: "Live demo",
      title: "Portfolio site",
      url: "https://kv_portfolio.example.com",
    },
    {
      label: "Documentation",
      title: "Engineering docs",
      url: "https://kv_portfolio.example.com/docs",
    },
    {
      label: "Related projects",
      title: "Other case studies",
      url: "/projects",
    },
  ],
  screenshots: [
    {
      src: projectImage,
      alt: "Portfolio home section with animated hero and project cards",
    },
  ],
  github: "https://github.com/Krishna-verma97/Kv_portfolio",
  liveDemo: "https://kv_portfolio.example.com",
  futureImprovements: [
    "Add richer analytics and deployment case study details.",
    "Introduce interactive architecture diagrams and sequence flows.",
    "Provide project performance metrics with real-world Lighthouse data.",
  ],
  metrics: [
    {
      label: "Pages",
      value: "8+",
    },
    {
      label: "Components",
      value: "35",
    },
    {
      label: "Bundle Size",
      value: "~290 KB gzipped",
    },
    {
      label: "Accessibility",
      value: "High contrast + keyboard navigable",
    },
  ],
  timeline: [
    {
      stage: "Research",
      detail: "Define engineering platform goals and content architecture.",
    },
    {
      stage: "Design",
      detail: "Preserve brand palette while organizing reusable sections.",
    },
    {
      stage: "Build",
      detail: "Implement routes, components, and markdown-based content.",
    },
    {
      stage: "Validate",
      detail: "Verify production build and responsive interaction.",
    },
  ],
};
