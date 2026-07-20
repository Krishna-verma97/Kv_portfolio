// src/data/ai/index.js

import resume from "../resume";
import mission from "../mission";
import learning from "../learning";
import goals from "../goals";
import toolbox from "../toolbox";
import timeline from "../timeline";
import engineeringWork from "../engineeringWork";
import certifications from "../certifications";
import books from "../books";
import today from "../today";
import systemInfo from "../systemInfo";
import dashboardStats from "../dashboardStats";
import github from "../github";
import roadmap from "../roadmap";
import version from "../version";
import visitorStats from "../visitorStats";
import contact from "../contact";
import { createReadableDocument } from "../../ai/documentFormatter";
// import { Book } from "lucide-react";


export const AI_SEARCH_DOCUMENTS = [
  {
    slug: "about-krishna",
    url: "/about",
    title: "About Krishna Verma",
    source: "Profile",
    category: "About",
    description:
      "Professional profile, background, education, experience and engineering mission.",
    content: createReadableDocument(
  "About Krishna Verma",
  {
    resume,
    mission,
    today,
    goals,
  }
),
  },

  {
    slug: "current-learning",
    url: "/about",
    title: "Current Learning",
    source: "Profile",
    category: "Learning",
    description:
      "Technologies Krishna is currently learning.",
    // content: JSON.stringify(learning),/
    content: createReadableDocument(
  "Current Learnings",
  learning
),
  },

  {
    slug: "engineering-toolbox",
    url: "/about",
    title: "Engineering Toolbox",
    source: "Profile",
    category: "Toolbox",
    description:
      "Development tools, cloud, AI, editors and software.",
    // content: JSON.stringify(toolbox),
    content: createReadableDocument(
  "Engineering Toolbox",
  toolbox
),
  },

  {
    slug: "engineering-timeline",
    url: "/timeline",
    title: "Engineering Timeline",
    source: "Profile",
    category: "Timeline",
    description:
      "Engineering journey and milestones.",
    // content: JSON.stringify(timeline),
    content: createReadableDocument(
  "Engineering Timeline",
  timeline
),
  },

  {
    slug: "engineering-work",
     url: "/experience",
    title: "Engineering Work",
    source: "Profile",
    category: "Experience",
    description:
      "Engineering projects and work history.",
    // content: JSON.stringify(engineeringWork),
    content: createReadableDocument(
  "Engineering Work",
  engineeringWork
),
  },

  {
    slug: "certifications",
    url: "/about",
    title: "Certifications",
    source: "Profile",
    category: "Certifications",
    description:
      "Current certifications and certifications in progress.",
    // content: JSON.stringify(certifications),
    content: createReadableDocument(
  "Present Certifications",
  certifications
),
  },

  {
    slug: "books",
    url: "/about",
    title: "Books",
    source: "Profile",
    category: "Books",
    description:
      "Books Krishna is reading.",
    // content: JSON.stringify(books),
    content: createReadableDocument(
  "Books",
  books
),
  },

  {
    slug: "system-information",
    url: "/about",
    title: "System Information",
    source: "Profile",
    category: "System",
    description:
      "Laptop, OS, editor, cloud and engineering environment.",
    // content: JSON.stringify(systemInfo),
    content: createReadableDocument(
  "System information",
  systemInfo
),
  },

  {
    slug: "github",
    url: "/about",
    title: "GitHub",
    source: "Profile",
    category: "GitHub",
    description:
      "GitHub profile and repositories.",
    // content: JSON.stringify(github),
    content: createReadableDocument(
  "GitHub",
  github
),
  },

  {
    slug: "dashboard",
    url: "/about",
    title: "Dashboard Statistics",
    source: "Profile",
    category: "Dashboard",
    description:
      "Projects, articles and engineering statistics.",
    // content: JSON.stringify(dashboardStats),
    content: createReadableDocument(
  "Dashboard Statistics",
  dashboardStats
),
  },

  {
    slug: "roadmap",
    url: "/about",
    title: "Engineering Roadmap",
    source: "Profile",
    category: "Roadmap",
    description:
      "Future engineering milestones.",
    // content: JSON.stringify(roadmap),
    content: createReadableDocument(
  "Engineering Roadmap",
  roadmap
),
  },

  {
    slug: "version",
    url: "/about",
    title: "Platform Version",
    source: "Profile",
    category: "Platform",
    description:
      "Current version of KV Engineering Platform.",
    // content: JSON.stringify(version),
    content: createReadableDocument(
  "Platform Version",
  version
),
  },

  {
    slug: "visitor-statistics",
    url: "/about",
    title: "Visitor Statistics",
    source: "Profile",
    category: "Visitors",
    description:
      "Portfolio visitor information.",
    // content: JSON.stringify(visitorStats),
    content: createReadableDocument(
  "Visitor Stats",
  visitorStats
),
  },

  {
    slug: "contact",
    url: "/about",
    title: "Contact Information",
    source: "Profile",
    category: "Contact",
    description:
      "Professional contact information.",
    // content: JSON.stringify(contact),
    content: createReadableDocument(
  "Contact Information",
  contact
),
  },
];