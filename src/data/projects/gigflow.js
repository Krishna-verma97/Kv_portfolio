import projectImage from "../../assets/project.png";

export const gigflowProject = {
  slug: "gigflow",
  title: "GigFlow Platform",
  shortDescription:
    "A modern freelance marketplace case study focused on payment flows, onboarding, and scalable architecture.",
  status: "In Progress",
  completed: "Q4 2026",
  difficulty: "Advanced",
  duration: "8 weeks",
  overview:
    "GigFlow is designed to help independent contractors launch services, manage clients, and process payments through a secure engineering workflow.",
  problemStatement:
    "Freelancers need a reliable platform that combines seamless payments, client management, and performance tracking without overwhelming the interface.",
  specs: {
    loc: "9,400",
    duration: "8 weeks",
    gitCommits: "132",
    technologies: ["React", "Tailwind CSS", "Node.js", "Stripe API", "MongoDB"],
    modules:
      "Authentication, payment flow, onboarding, dashboard, notifications",
    screens:
      "Landing, freelancer dashboard, client booking, payment milestones, settings",
    version: "0.9.0",
  },
  architecture: {
    diagram: null,
    summary:
      "A modular frontend communicates with microservices for billing, messaging, and analytics while using a CDN-backed static shell for fast delivery.",
    support: [
      "API-first design for payments and user data",
      "Client-side routing with serverless hosted assets",
    ],
    frontendArchitecture: [
      "Composable React UI modules",
      "Global state via context and hooks",
    ],
    backendArchitecture: [
      "Payment microservice",
      "Authentication service",
      "Notification webhooks",
    ],
    databaseFlow: [
      "Client actions -> service events -> database updates",
      "User profiles and contracts stored in NoSQL collections",
    ],
    authenticationFlow: [
      "Sign-up and login with JWT",
      "Session validation in the frontend shell",
    ],
    deploymentDiagram: [
      "Static frontend on Vercel",
      "Serverless payments and API routes on AWS Lambda",
    ],
    apiCommunication: [
      "Frontend fetches payment, onboarding, and contract APIs",
      "Webhook events update the platform asynchronously",
    ],
    folderStructure: [
      "src/components - shared UI and engineering documentation modules",
      "src/pages - dynamic case study routes and project pages",
      "src/data - project specifications and structured metadata",
    ],
    dataFlow: [
      "User actions are captured in the UI and routed through a state-managed flow.",
      "Payment events and contract updates are modeled as service events in the app narrative.",
    ],
    frontend: ["React 19", "Vite", "Tailwind CSS", "React Router"],
    backend: ["Stripe-like payments service", "Auth service"],
    database: ["NoSQL document database"],
    deployment: ["Static frontend hosting + API layer on serverless functions"],
  },
  implementation: {
    folderStructure: [
      "src/components - UI and shared documentation modules",
      "src/pages - case study and project routes",
      "src/data - project metadata and content",
    ],
    importantComponents: [
      "Payment flow cards",
      "Onboarding steps",
      "Pricing dashboard",
      "Contract timeline",
    ],
    reusableHooks: ["useSearch", "useReadingProgress", "useKnowledgeArticle"],
    utilities: [
      "API request helpers",
      "data normalization",
      "error handling utilities",
    ],
    configuration: [
      "Stripe API keys",
      "AWS Lambda deploy settings",
      "React Router route definitions",
    ],
  },
  challenges: [
    {
      problem: "Freelancers needed transparent payment flow and onboarding.",
      rootCause:
        "The product model required secure transaction handoff without adding user friction.",
      solution:
        "Adopted a tiered milestone payment flow and clear onboarding steps.",
      result:
        "Improved trust and easier contract execution for the case study narrative.",
    },
    {
      problem:
        "The platform architecture risked being too heavy for a static portfolio demo.",
      rootCause: "Multiple services and dashboards added complexity.",
      solution:
        "Kept the frontend static and documented backend flows instead of fully building them.",
      result: "Retained engineering depth without sacrificing performance.",
    },
  ],
  lessons: {
    technical: [
      "Model payment flows clearly before building UI components.",
      "Keep the frontend layer decoupled from backend narrative details.",
    ],
    engineering: [
      "Document assumptions in data-driven architecture sections.",
      "Use reusable metadata for multiple case studies.",
    ],
    performance: [
      "Avoid loading heavy payments or analytics scripts in the core shell.",
      "Plan lazy loading for optional charting modules.",
    ],
    architecture: [
      "Describe service boundaries in dedicated sections.",
      "Use diagrams when possible, even if schematic.",
    ],
    team: [
      "Treat the case study as a shared handoff artifact.",
      "Keep stakeholder language concise and technical.",
    ],
  },
  performance: {
    optimization: [
      "Minimized runtime dependencies in the shell.",
      "Used static data for project stories rather than live API calls.",
    ],
    lazyLoading: [
      "Plan lazy loading for analytics dashboards.",
      "Keep onboarding content lightweight.",
    ],
    memoization: [
      "Memoize derived component lists.",
      "Limit rerenders in the dashboard flow.",
    ],
    bundleSize: [
      "Avoid extra charting libraries in the portfolio build.",
      "Favor built-in browser APIs for lightweight interactions.",
    ],
    codeSplitting: [
      "Reserve large modules for future split bundles.",
      "Keep the case study shell separate from feature demos.",
    ],
    responsiveImprovements: [
      "Design every section to stack cleanly on mobile.",
      "Ensure action buttons remain accessible in touch layouts.",
    ],
  },
  testing: {
    manual: [
      "Review mobile and desktop navigation flows.",
      "Test share and copy interactions on supported devices.",
    ],
    unit: [
      "Add tests for ProjectSidebar actions.",
      "Validate architecture and implementation section render logic.",
    ],
    integration: [
      "Ensure dynamic project routes work with project metadata.",
      "Verify reading progress updates while scrolling.",
    ],
  },
  roadmap: [
    {
      title: "Upcoming features",
      description:
        "Add interactive markdown-based project documentation and architecture diagrams.",
    },
    {
      title: "Known limitations",
      description:
        "Static case studies do not yet support dynamic user data or live API demos.",
    },
    {
      title: "Future refactoring",
      description:
        "Migrate project metadata to markdown frontmatter and shared content templates.",
    },
    {
      title: "Technical debt",
      description: "Standardize project schema and search indexing contracts.",
    },
  ],
  resources: [
    {
      label: "GitHub repository",
      title: "Portfolio source code",
      url: "https://github.com/Krishna-verma97/Kv_portfolio",
    },
    {
      label: "Live demo",
      title: "Running portfolio site",
      url: "https://kv_portfolio.example.com",
    },
    {
      label: "Documentation",
      title: "Project documentation",
      url: "https://kv_portfolio.example.com/docs",
    },
    {
      label: "Related projects",
      title: "Case study collection",
      url: "/projects",
    },
  ],
  screenshots: [
    {
      src: projectImage,
      alt: "GigFlow dashboard preview with payments and contracts",
    },
  ],
  github: "https://github.com/Krishna-verma97",
  liveDemo: "https://gigflow.example.com",
  futureImprovements: [
    "Add live API flow diagrams and data lineage navigation.",
    "Expand onboarding to support teams and enterprise workflows.",
  ],
  metrics: [
    {
      label: "Use Cases",
      value: "Client matching, payments, contracts",
    },
    {
      label: "Pages",
      value: "7",
    },
    {
      label: "Components",
      value: "32",
    },
  ],
  timeline: [
    {
      stage: "Concept",
      detail: "Define the freelancer platform and product constraints.",
    },
    {
      stage: "Prototype",
      detail: "Build the core user flows and dashboard layout.",
    },
    {
      stage: "Review",
      detail: "Audit the architecture for performance and security.",
    },
  ],
};
