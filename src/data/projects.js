import { portfolioProject } from "./projects/portfolio";
import { gigflowProject } from "./projects/gigflow";
import { dockerMonitorProject } from "./projects/docker-monitor";

export const PROJECTS = [
  portfolioProject,
  gigflowProject,
  dockerMonitorProject,
];

export const PROJECT_SEARCH_DOCUMENTS = PROJECTS.map((project) => ({
  id: project.slug,
  slug: project.slug,
  title: project.title,
  description: project.shortDescription,
  category: "Projects",
  tags: [
    ...(project.techStack?.frontend || []),
    ...(project.techStack?.backend || []),
    "Case Study",
  ],
  difficulty: project.difficulty,
//   content: [
//     project.overview,
//     project.problemStatement,
//     ...(project.features || []),
//     ...(project.lessons || []),
//     ...(project.futureImprovements || []),
//   ].join(" "),
    content: [
  project.overview,
  project.problemStatement,
  ...(project.features || []),
  ...Object.values(project.lessons || {}).flat(),
  ...(project.futureImprovements || []),
].join(" "),
  readingTime: project.duration,
  lastUpdated: project.completed,
  url: `/projects/${project.slug}`,
  source: "project",
  commands: ["npm install", "npm run dev", "npm run build"],
  examples: project.features || [],
  resources: [project.github],
}));

export function getProjectBySlug(slug) {
  return PROJECTS.find((project) => project.slug === slug);
}
