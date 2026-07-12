import projectImage from "../../assets/project2.webp";

export const dockerMonitorProject = {
  slug: "docker-monitor",
  title: "Docker Monitor",
  shortDescription:
    "A container operations case study showcasing monitoring, alerting, and deployment observability.",
  status: "Completed",
  completed: "Jun 2026",
  difficulty: "Intermediate",
  duration: "6 weeks",
  overview:
    "Docker Monitor demonstrates engineering decisions for container lifecycle visibility, metrics collection, and incident response.",
  problemStatement:
    "Operators need a clear way to understand container health, resource spikes, and deployment drift without noise.",
  specs: {
    loc: "7,100",
    duration: "6 weeks",
    gitCommits: "98",
    technologies: ["React", "Tailwind CSS", "Node.js", "Prometheus", "Grafana"],
    modules:
      "Telemetry ingest, alert rules, dashboard, incident timeline, container detail views",
    screens:
      "Monitoring dashboard, alert center, deployment view, container details",
    version: "1.1.0",
  },
  architecture: {
    diagram: null,
    summary:
      "A monitoring dashboard with backend metrics ingestion and frontend charting for container state, image usage, and alert history.",
    support: [
      "Metrics ingestion and alert webhook processing",
      "Dashboard analytics for container health",
    ],
    frontendArchitecture: [
      "React dashboard components",
      "State-driven charts and summary cards",
    ],
    backendArchitecture: [
      "Time-series metrics service",
      "Alert evaluation pipeline",
    ],
    databaseFlow: [
      "Agent telemetry -> ingestion service -> time-series store",
      "Dashboard pulls aggregated metrics for UI rendering",
    ],
    authenticationFlow: [
      "OAuth-based access to monitoring dashboards",
      "Role-based view control for operators",
    ],
    deploymentDiagram: [
      "Kubernetes-managed metrics services",
      "Containerized frontend with CDN delivery",
    ],
    apiCommunication: [
      "Frontend queries metrics and alert APIs",
      "Backend pushes alert notifications through webhooks",
    ],
    folderStructure: [
      "src/pages - container monitoring case study route",
      "src/components - dashboard and visualization components",
      "src/data - monitoring rules and metric definitions",
    ],
    dataFlow: [
      "Container telemetry is collected by agents and surfaced in a unified dashboard.",
      "Alert events are grouped by service and severity for easy triage.",
    ],
    frontend: ["React", "Tailwind CSS", "Charting library"],
    backend: ["Metrics ingestion service", "Alert webhook handler"],
    database: ["Time-series database"],
    deployment: ["Containerized microservices on Kubernetes"],
  },
  implementation: {
    folderStructure: [
      "src/pages - monitoring case study page",
      "src/components - charts, cards, visualizations",
      "src/data - metric definitions and alert rules",
    ],
    importantComponents: [
      "Health cards",
      "Alert table",
      "Deployment timeline",
      "Container charts",
    ],
    reusableHooks: ["useReadingProgress", "useSearch", "useKnowledgeArticle"],
    utilities: [
      "Metric formatting",
      "alert severity mapping",
      "chart data conversion",
    ],
    configuration: [
      "Prometheus query templates",
      "Grafana panel settings",
      "deployment manifest examples",
    ],
  },
  challenges: [
    {
      problem: "Operators needed useful monitoring without noise.",
      rootCause: "Raw container metrics were too dense for quick triage.",
      solution: "Focused on high-value dashboard views and alert summaries.",
      result:
        "Delivered a cleaner engineering case study narrative with actionable monitoring insights.",
    },
    {
      problem:
        "Static case study content risked underrepresenting dynamic metrics.",
      rootCause:
        "Monitoring is inherently real-time but the portfolio is static.",
      solution:
        "Documented the system flow and used example dashboard screens instead of live data.",
      result: "Maintained engineering detail while keeping the build simple.",
    },
  ],
  lessons: {
    technical: [
      "Surface only the most relevant metrics in case study documentation.",
      "Use reusable chart components and data formatting utilities.",
    ],
    engineering: [
      "Describe monitoring flows clearly in architecture sections.",
      "Reuse documentation components across project pages.",
    ],
    performance: [
      "Keep dashboard bundles small by deferring heavy charts.",
      "Use static examples for complex runtime systems in a portfolio.",
    ],
    architecture: [
      "Explain telemetry and alerting flows in dedicated sections.",
      "Document the deployment path for monitoring services.",
    ],
    team: [
      "Write monitoring narratives for operations stakeholders.",
      "Provide a clear incident flow for handoff reviews.",
    ],
  },
  performance: {
    optimization: [
      "Limit visualization libraries to essential chart features.",
      "Use SVG or canvas sparingly for example dashboards.",
    ],
    lazyLoading: [
      "Defer non-critical charts until after initial render.",
      "Load dashboard-specific modules only when needed.",
    ],
    memoization: [
      "Memoize derived chart datasets.",
      "Avoid recomputing metrics on every render.",
    ],
    bundleSize: [
      "Keep monitoring dashboard examples separate from the portfolio shell.",
      "Prefer lightweight visualization helpers.",
    ],
    codeSplitting: [
      "Reserve advanced chart code for future route splits.",
      "Keep the main portfolio bundle small.",
    ],
    responsiveImprovements: [
      "Ensure monitoring cards collapse nicely on small screens.",
      "Keep touch targets large in dashboard views.",
    ],
  },
  testing: {
    manual: [
      "Check dashboard layout on tablet and mobile.",
      "Validate alert flow descriptions and architecture text.",
    ],
    unit: [
      "Test reusable chart card rendering.",
      "Validate configuration helper outputs.",
    ],
    integration: [
      "Confirm project route loads with the new metadata fields.",
      "Test sidebar copy/share flow in supported browsers.",
    ],
  },
  roadmap: [
    {
      title: "Upcoming features",
      description: "Add live container status and incident playback views.",
    },
    {
      title: "Known limitations",
      description:
        "Current build uses static examples instead of real monitoring data.",
    },
    {
      title: "Future refactoring",
      description: "Split dashboard modules for route-based lazy loading.",
    },
    {
      title: "Technical debt",
      description: "Standardize alert rule metadata and charting utilities.",
    },
  ],
  resources: [
    {
      label: "GitHub repository",
      title: "Docker Monitor source",
      url: "https://github.com/Krishna-verma97",
    },
    {
      label: "Live demo",
      title: "Docker Monitor preview",
      url: "https://docker-monitor.example.com",
    },
    {
      label: "Documentation",
      title: "Monitoring architecture docs",
      url: "https://docker-monitor.example.com/docs",
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
      alt: "Docker Monitor dashboard screenshot with charts and alert cards",
    },
  ],
  github: "https://github.com/Krishna-verma97",
  liveDemo: "https://docker-monitor.example.com",
  futureImprovements: [
    "Add live log exploration with filtering.",
    "Integrate synthetic monitoring for availability tracking.",
  ],
  metrics: [
    {
      label: "Views",
      value: "12k+",
    },
    {
      label: "Deployments",
      value: "5 simulated environments",
    },
    {
      label: "Alerts",
      value: "30+ rules",
    },
  ],
  timeline: [
    {
      stage: "Design",
      detail: "Map monitoring workflows and chart requirements.",
    },
    { stage: "Build", detail: "Create reusable visualization sections." },
    {
      stage: "Document",
      detail: "Describe the architecture and incident flow.",
    },
  ],
};
