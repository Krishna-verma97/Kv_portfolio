// mockData.js
// Why this file exists:
// All placeholder content lives here, isolated from both the command registry
// (which decides HOW a command behaves) and the UI (which decides how output is
// rendered). When real data sources (CMS, GitHub API, a knowledge base) are wired
// in later, only this file's exports need to be replaced/re-implemented — nothing
// in terminal/, hooks/, or utils/ needs to change.
import engineeringWork from "../../data/engineeringWork";
import mission from "../../data/mission";
import learning from "../../data/learning";
import toolboxData from "../../data/toolbox";
// import dashboardStats from "../../data/dashboardStats";
import dashboardStats from "../../data/dashboardStats";
import timelineData from "../../data/timeline";
import visitorStats from "../../data/visitorStats";

// export const projects = [
//   {
//     slug: 'kv-engineering-platform',
//     title: 'KV Engineering Platform',
//     tags: ['react', 'vite', 'terminal', 'platform'],
//     summary: 'A CLI-driven console for navigating a personal engineering platform.',
//   },
//   {
//     slug: 'docker-networking',
//     title: 'Docker Networking Deep Dive',
//     tags: ['docker', 'networking', 'devops'],
//     summary: 'Notes and diagrams on bridge, host, and overlay networking modes.',
//   },
//   {
//     slug: 'server-decom-automation',
//     title: 'Automated Server Decommissioning',
//     tags: ['automation', 'security', 'devops'],
//     summary: 'A 9-step automated flow for decommissioning infrastructure safely.',
//   },
// ];
export const projects = engineeringWork.map((project) => ({
  slug:
    project.title === "Engineering Portfolio v3"
      ? "portfolio"
      : project.title === "Knowledge Base"
      ? "knowledge"
      : project.title === "Developer Blog"
      ? "blog"
      : project.title.toLowerCase().replace(/\s+/g, "-"),

  title: project.title,

  tags: Array.isArray(project.tech)
    ? project.tech.map((tech) => tech.toLowerCase())
    : [],

  summary: `${project.type} • ${project.status} • ${project.version}`,

  link: project.link,
}));
export const knowledgeArticles = [
  {
    slug: 'docker-networking',
    title: 'Docker Networking Modes Explained',
    category: 'devops',
    excerpt: 'Bridge vs host vs overlay — when to use each.',
  },
  {
    slug: 'react-router-v6-wildcards',
    title: 'React Router v6 Wildcard Params',
    category: 'react',
    excerpt: 'Common pitfalls when matching nested wildcard routes.',
  },
  {
    slug: 'readme-driven-development',
    title: 'README-Driven Development',
    category: 'process',
    excerpt: 'Writing the README before the code to clarify scope.',
  },
  {
    slug: "docker",
    title: "Docker",
    category: "DevOps",
    readingTime: "8 min",
  },
  {
    slug: "aws",
    title: "AWS",
    category: "Cloud",
    readingTime: "10 min",
  },
  {
    slug: "linux",
    title: "Linux",
    category: "OS",
    readingTime: "7 min",
  },
];

export const blogArticles = [
  {
    slug: 'four-year-devsecops-roadmap',
    title: 'A Four-Year DevSecOps Roadmap',
    date: '2026-02-10',
    excerpt: 'Linux and networking through backend and AI integration.',
  },
  {
    slug: 'why-i-built-a-terminal-ui',
    title: 'Why I Built My Portfolio as a Terminal',
    date: '2026-05-18',
    excerpt: 'A CLI-first navigation model for a developer portfolio.',
  },
];

// export const dashboardStats = {
//   projectsShipped: 12,
//   articlesWritten: 9,
//   certifications: ['AWS Cloud Practitioner', 'GitHub Actions (GH-300)'],
//   currentFocus: 'DevSecOps engineering track',
// };
export { dashboardStats };

// export const toolbox = [
//   { name: 'Cisco Telemetry', category: 'security' },
//   { name: 'McAfee Endpoint Protection', category: 'security' },
//   { name: 'Cisco ISE', category: 'security' },
//   { name: 'VMware NSX', category: 'networking' },
//   { name: 'DigiCert', category: 'security' },
//   { name: 'NSX-T Distributed Firewall', category: 'networking' },
//   { name: 'Docker', category: 'devops' },
//   { name: 'React + Vite', category: 'frontend' },
// ];
export const toolbox = toolboxData.map((tool) => ({
  name: tool.name,
  category: tool.category,
}));

// export const timeline = [
//   { year: '2023', label: 'Joined Wipro as Scholar Trainee' },
//   { year: '2024', label: 'Started BITS WILP degree' },
//   { year: '2025', label: 'Embedded in Security Tower — National Grid project' },
//   { year: '2026', label: 'Building KV Engineering Platform' },
// ];
export const timeline = timelineData;

// A flat, searchable index used by the `search` command.
// Each entry keeps a `type` so results can be grouped/labeled in output.
export function buildSearchIndex() {
  return [
    ...projects.map((p) => ({ type: 'project', slug: p.slug, title: p.title, text: `${p.title} ${p.tags.join(' ')} ${p.summary}` })),
    ...knowledgeArticles.map((k) => ({ type: 'knowledge', slug: k.slug, title: k.title, text: `${k.title} ${k.category} ${k.excerpt}` })),
    ...blogArticles.map((b) => ({ type: 'blog', slug: b.slug, title: b.title, text: `${b.title} ${b.excerpt}` })),
    ...toolbox.map((t) => ({ type: 'toolbox', slug: t.name.toLowerCase().replace(/\s+/g, '-'), title: t.name, text: `${t.name} ${t.category}` })),
  ];
}
export { mission };
export { learning };
export { visitorStats };