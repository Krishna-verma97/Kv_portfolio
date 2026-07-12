// terminalCommands.js
// Why this file exists:
// This is the single source of truth for "what commands exist and what they do".
// Components never hardcode command behavior — they read this registry. Adding a
// new command later (e.g. `ai`, `github`) means adding one entry here, nothing
// else. Each command's execute() returns an array of output blocks built via
// utils/terminalFormatter.js, keeping this file framework-agnostic (no JSX).

import { CATEGORY } from './commandCategories';
import {
  projects,
  knowledgeArticles,
  blogArticles,
  dashboardStats,
  visitorStats,
  toolbox,
  timeline,
  mission,
  learning,
  buildSearchIndex,
} from "./mockData";
import { fuzzySearchList } from '../utils/fuzzySearch';
import { fortunes, motivations, asciiBanner, randomFrom } from './easterEggs';
import {
  formatSuccess,
  formatError,
  formatWarning,
  formatInfo,
  formatPlain,
  formatHeading,
  formatCode,
  formatLink,
  formatTable,
} from '../utils/terminalFormatter';

import resume from "../../data/resume";
import contact from "../../data/contact";
import github from "../../data/github";
import version from "../../data/version";
import systemInfo from "../../data/systemInfo";
import roadmap from "../../data/roadmap";
import today from "../../data/today";
import goals from "../../data/goals";
import books from "../../data/books";

/**
 * Every command receives a `ctx` object:
 * {
 *   args: string[],        // positional args after the command name
 *   flags: Set<string>,    // --flags
 *   raw: string,           // full raw input line
 *   navigate: (slug, type) => void,  // mock navigation callback
 *   setTheme: (theme) => void,
 *   clear: () => void,
 *   getHistory: () => string[],
 * }
 * execute() must return an array of output blocks (see terminalFormatter.js),
 * OR the string 'CLEAR' as a sentinel meaning "clear the output buffer".
 */

const helpCommand = {
  name: "help",
  aliases: ["?", "h"],
  description: "List all available commands",
  category: CATEGORY.GENERAL,
  usage: "help",

  execute: (ctx, registry) => {
    const blocks = [
      formatHeading("KV Engineering Platform CLI"),
      formatPlain(""),
    ];

    const grouped = registry.reduce((acc, cmd) => {
      acc[cmd.category] = acc[cmd.category] || [];
      acc[cmd.category].push(cmd);
      return acc;
    }, {});

    const sectionTitles = {
      general: "GENERAL",
      engineering: "ENGINEERING",
      search: "SEARCH",
      fun: "FUN",
      navigation: "NAVIGATION",
    };

    Object.entries(grouped).forEach(([category, cmds]) => {
      blocks.push(formatHeading(sectionTitles[category] || category.toUpperCase()));

      blocks.push(
        formatTable(
          ["Command", "Description"],
          cmds.map((cmd) => [cmd.name, cmd.description])
        )
      );

      blocks.push(formatPlain(""));
    });

    blocks.push(
      formatSuccess("Tips"),
      formatPlain("TAB        → Autocomplete"),
      formatPlain("↑ ↓        → Command History"),
      formatPlain("Ctrl + L   → Clear Terminal"),
      formatPlain("search x   → Search the platform"),
      formatPlain("open slug  → Open project/article"),
      formatPlain(""),
      formatSuccess("Happy Engineering 🚀")
    );

    return blocks;
  },
};

const clearCommand = {
  name: 'clear',
  aliases: ['cls'],
  description: 'Clear the terminal output',
  category: CATEGORY.GENERAL,
  usage: 'clear',
  execute: () => 'CLEAR',
};

const historyCommand = {
  name: 'history',
  aliases: [],
  description: 'Show previously run commands',
  category: CATEGORY.GENERAL,
  usage: 'history',
  execute: (ctx) => {
    const past = ctx.getHistory();
    if (past.length === 0) return [formatInfo('No commands run yet.')];
    return [
      formatHeading('Command history'),
      formatTable(['#', 'command'], past.map((cmd, i) => [String(i + 1), cmd])),
    ];
  },
};

const themeCommand = {
  name: 'theme',
  aliases: [],
  description: 'Switch terminal theme (dark is default)',
  category: CATEGORY.GENERAL,
  usage: 'theme <dark|light>',
  execute: (ctx) => {
    const choice = ctx.args[0];
    if (!choice) return [formatWarning('Usage: theme <dark|light>')];
    if (choice !== 'dark' && choice !== 'light') {
      return [formatError(`Unknown theme "${choice}". Try "dark" or "light".`)];
    }
    ctx.setTheme(choice);
    return [formatSuccess(`Theme switched to ${choice}.`)];
  },
};

const bannerCommand = {
  name: 'banner',
  aliases: [],
  description: 'Show the platform ASCII banner',
  category: CATEGORY.GENERAL,
  usage: 'banner',
  execute: () => [formatCode(asciiBanner, 'text')],
};

// ---- Navigation commands ----
// Each navigation command is a thin wrapper that calls ctx.navigate with a
// mock intent. Real routing wires into `navigate` later without touching
// this file's shape.
function navCommand(name, label, description) {
  return {
    name,
    aliases: [],
    description,
    category: CATEGORY.NAVIGATION,
    usage: name,
    execute: (ctx) => {
      ctx.navigate(name, 'page');
      return [formatSuccess(`Navigating to ${label}...`), formatLink(label, `/${name}`)];
    },
  };
}

const navigationCommands = [
  navCommand('home', 'Home', 'Go to the home page'),
  // navCommand('dashboard', 'Dashboard', 'Open the dashboard'),
  // navCommand('projects', 'Projects', 'List all projects'),
  // navCommand('knowledge', 'Knowledge Base', 'Open the knowledge base'),
  // navCommand('blog', 'Blog', 'Open the blog'),
  navCommand('articles', 'Articles', 'List articles'),
  // navCommand('toolbox', 'Toolbox', 'Open the toolbox'),
  navCommand('timeline', 'Timeline', 'View the career timeline'),
  navCommand('contact', 'Contact', 'Open contact info'),
  navCommand('resume', 'Resume', 'Open resume'),
];

const projectsCommand = {
  name: "projects",
  aliases: [],
  description: "List all engineering projects",
  category: CATEGORY.ENGINEERING,
  usage: "projects",

  execute: () => [
    formatHeading("Engineering Projects"),

    formatPlain(""),

    formatTable(
      ["Slug", "Project", "Status"],
      projects.map((project) => [
        project.slug,
        project.title,
        project.status || "Active",
      ])
    ),

    formatPlain(""),

    formatInfo("Use: project <slug>"),

    formatSuccess(`${projects.length} projects available.`),
  ],
};

const projectCommand = {
  name: 'project',
  aliases: [],
  description: 'Show details for a specific project',
  category: CATEGORY.NAVIGATION,
  usage: 'project <slug>',
 execute: (ctx) => {
  const slug = ctx.args[0];

  if (!slug) {
    return [
      formatWarning("Usage: project <slug>"),
      formatTable(
        ["slug", "title"],
        projects.map((p) => [p.slug, p.title])
      ),
    ];
  }

  const found = projects.find((p) => p.slug === slug);

  if (!found) {
    return [formatError(`No project found for "${slug}".`)];
  }

  // ctx.navigate(found.slug, "project");

  return [
  formatHeading(found.title),

  formatPlain(""),

  formatInfo(`Type : ${found.type}`),

  formatInfo(`Status : ${found.status}`),

  formatPlain(""),

  formatHeading("Tech Stack"),

  ...found.tags.map((tag) => formatSuccess(tag)),

  formatPlain(""),

  formatSuccess(`Route: ${found.link}`),
];
},
};

// ---- Engineering commands ----
// const missionCommand = {
//   name: 'mission',
//   aliases: [],
//   description: 'Show the platform mission statement',
//   category: CATEGORY.ENGINEERING,
//   usage: 'mission',
//   execute: () => [
//     formatHeading('Mission'),
//     formatPlain('Build durable engineering skill, ship real systems, and compound toward founding a technology business.'),
//   ],
// };
const missionCommand = {
  name: "mission",
  aliases: [],
  description: "Show current engineering mission",
  category: CATEGORY.ENGINEERING,
  usage: "mission",

  execute: () => [
    formatHeading(mission.title),

    formatPlain(""),

    formatPlain(mission.description),

    formatPlain(""),

    formatInfo(`🎯 Target: ${mission.target}`),

    formatPlain(""),

    formatHeading("Current Focus"),

    ...mission.focus.map((item) => formatSuccess(item)),
  ],
};

const resumeCommand = {
  name: "resume",

  aliases: ["cv"],

  description: "Show resume summary",

  category: CATEGORY.ENGINEERING,

  usage: "resume",

  execute: () => [
    formatHeading(resume.name),

    formatPlain(""),

    formatInfo(`Role : ${resume.role}`),

    formatInfo(`Education : ${resume.education}`),

    formatInfo(`Experience : ${resume.experience}`),

    formatPlain(""),

    formatHeading("Skills"),

    ...resume.skills.map((skill) => formatSuccess(skill)),

    formatPlain(""),

    formatHeading("Projects"),

    ...resume.projects.map((project) => formatPlain(project)),

    formatPlain(""),

    formatSuccess(`Resume : ${resume.resumeLink}`),
  ],
};

const contactCommand = {
  name: "contact",

  aliases: ["social"],

  description: "Show contact information",

  category: CATEGORY.ENGINEERING,

  usage: "contact",

  execute: () => [
    formatHeading("Contact"),

    formatPlain(""),

    formatInfo(`📧 Email      : ${contact.email}`),

    formatInfo(`💻 GitHub     : ${contact.github}`),

    formatInfo(`🔗 LinkedIn   : ${contact.linkedin}`),

    formatInfo(`🌐 Portfolio  : ${contact.portfolio}`),

    formatInfo(`📍 Location   : ${contact.location}`),

    formatPlain(""),

    formatSuccess(contact.availability),
  ],
};

const githubCommand = {
  name: "github",

  aliases: ["gh"],

  description: "Show GitHub profile information",

  category: CATEGORY.ENGINEERING,

  usage: "github",

  execute: () => [
    formatHeading("GitHub Profile"),

    formatPlain(""),

    formatInfo(`Username      : ${github.username}`),

    formatInfo(`Repositories  : ${github.repositories}`),

    formatInfo(`Followers     : ${github.followers}`),

    formatInfo(`Following     : ${github.following}`),

    formatPlain(""),

    formatHeading("Current Project"),

    formatSuccess(github.currentProject),

    formatPlain(""),

    formatHeading("Favorite Stack"),

    ...github.favoriteStack.map((item) => formatPlain(`• ${item}`)),

    formatPlain(""),

    formatSuccess(`Profile : ${github.profile}`),
  ],
};

const versionCommand = {
  name: "version",

  aliases: ["ver"],

  description: "Show platform version",

  category: CATEGORY.GENERAL,

  usage: "version",

  execute: () => [
    formatHeading(version.name),

    formatPlain(""),

    formatInfo(`Version     : ${version.version}`),

    formatInfo(`Codename    : ${version.codename}`),

    formatPlain(""),

    formatHeading("Technology"),

    formatPlain(`React       : ${version.framework}`),

    formatPlain(`Bundler     : ${version.bundler}`),

    formatPlain(`Styling     : ${version.styling}`),

    formatPlain(`Backend     : ${version.backend}`),

    formatPlain(`Email       : ${version.email}`),

    formatPlain(""),

    formatInfo(`Status      : ${version.status}`),

    formatInfo(`Updated     : ${version.updated}`),
  ],
};
const neofetchCommand = {
  name: "neofetch",

  aliases: ["system", "fetch"],

  description: "Display Engineering Console system information",

  category: CATEGORY.GENERAL,

  usage: "neofetch",

  execute: () => [
    formatSuccess(`
██╗  ██╗██╗   ██╗
██║ ██╔╝██║   ██║
█████╔╝ ██║   ██║
██╔═██╗ ╚██╗ ██╔╝
██║  ██╗ ╚████╔╝
╚═╝  ╚═╝  ╚═══╝
`),

    formatHeading(systemInfo.platform),

    formatPlain(""),

    formatInfo(`User        : ${systemInfo.user}`),

    formatInfo(`Role        : ${systemInfo.role}`),

    formatInfo(`Shell       : ${systemInfo.shell}`),

    formatInfo(`Version     : ${systemInfo.version}`),

    formatPlain(""),

    formatHeading("Technology"),

    formatPlain(`OS          : ${systemInfo.os}`),

    formatPlain(`Editor      : ${systemInfo.editor}`),

    formatPlain(`Frontend    : ${systemInfo.frontend}`),

    formatPlain(`Backend     : ${systemInfo.backend}`),

    formatPlain(`Styling     : ${systemInfo.styling}`),

    formatPlain(`Bundler     : ${systemInfo.bundler}`),

    formatPlain(`Cloud       : ${systemInfo.cloud}`),

    formatPlain(`DevOps      : ${systemInfo.devops}`),

    formatPlain(`Deploy      : ${systemInfo.deployment}`),
  ],
};

const roadmapCommand = {
  name: "roadmap",

  aliases: ["plan"],

  description: "Show Engineering Platform roadmap",

  category: CATEGORY.ENGINEERING,

  usage: "roadmap",

  execute: () => [
    formatHeading("Engineering Platform Roadmap"),

    formatPlain(""),

    formatTable(
      ["Milestone", "Title", "Status"],
      roadmap.map((item) => [
        item.milestone,
        item.title,
        item.status,
      ])
    ),

    formatPlain(""),

    formatSuccess(`${roadmap.length} milestones defined.`),
  ],
};

const todayCommand = {
  name: "today",

  aliases: ["now"],

  description: "Show today's engineering status",

  category: CATEGORY.ENGINEERING,

  usage: "today",

  execute: () => [
    formatHeading("Today's Engineering Dashboard"),

    formatPlain(""),

    formatInfo(`Mission       : ${today.mission}`),

    formatInfo(`Project       : ${today.currentProject}`),

    formatInfo(`Next Task     : ${today.nextTask}`),

    formatPlain(""),

    formatHeading("Currently Learning"),

    ...today.currentlyLearning.map((item) =>
      formatSuccess(item)
    ),

    formatPlain(""),

    formatWarning(today.motivation),
  ],
};

const goalsCommand = {
  name: "goals",

  aliases: ["goal"],

  description: "Show engineering goals",

  category: CATEGORY.ENGINEERING,

  usage: "goals",

  execute: () => [
    formatHeading("Engineering Goals"),

    formatPlain(""),

    ...goals.map((goal, index) =>
      formatPlain(`${index + 1}. ${goal}`)
    ),
  ],
};

const booksCommand = {
  name: "books",

  aliases: ["reading"],

  description: "Show current reading list",

  category: CATEGORY.ENGINEERING,

  usage: "books",

  execute: () => [
    formatHeading("Reading List"),

    formatPlain(""),

    formatTable(
      ["Book", "Status"],
      books.map((book) => [
        book.title,
        book.status,
      ])
    ),
  ],
};

// const learningCommand = {
//   name: 'learning',
//   aliases: [],
//   description: 'Show current learning focus',
//   category: CATEGORY.ENGINEERING,
//   usage: 'learning',
//   execute: () => [
//     formatHeading('Current focus'),
//     formatPlain(dashboardStats.currentFocus),
//   ],
// };
const learningCommand = {
  name: "learning",
  aliases: [],
  description: "Show current learning roadmap",
  category: CATEGORY.ENGINEERING,
  usage: "learning",

  execute: () => [
    formatHeading("Current Learning"),
    formatPlain(""),

    formatTable(
      ["Technology", "Progress", "Status"],
      learning.map((item) => [
        item.name,
        `${item.progress}%`,
        item.status,
      ])
    ),

    formatPlain(""),

    formatInfo(
      `${learning.filter((x) => x.status === "Completed").length} technologies completed`
    ),

    formatSuccess(
      `${learning.filter((x) => x.status === "Learning").length} currently in progress`
    ),
  ],
};

const skillsCommand = {
  name: "skills",
  aliases: ["toolbox"],
  description: "Show engineering toolbox",
  category: CATEGORY.ENGINEERING,
  usage: "skills",

  execute: () => [
    formatHeading("Engineering Toolbox"),

    formatPlain(""),

    formatTable(
      ["Tool", "Category"],
      toolbox.map((tool) => [
        tool.name,
        tool.category,
      ])
    ),

    formatPlain(""),

    formatInfo(`Total Tools: ${toolbox.length}`),

    formatSuccess("Keeping the toolbox updated with current workflow."),
  ],
};

const dashboardCommand = {
  name: "dashboard",
aliases: ["stats"],
  description: "Show Engineering Dashboard summary",
  category: CATEGORY.ENGINEERING,
  usage: "dashboard",

  execute: () => [
    formatHeading("Engineering Dashboard"),

    formatPlain(""),

    formatTable(
      ["Metric", "Value"],
      [
        ["Projects", dashboardStats.projects],
        ["Knowledge Notes", dashboardStats.knowledge],
        ["Articles", dashboardStats.articles],
        ["Learning", dashboardStats.learning],
      ]
    ),

    formatPlain(""),

    formatSuccess("Use 'projects' to explore engineering work."),
  ],
};

const visitorsCommand = {
  name: "visitors",
  aliases: ["visitor", "stats-visitor"],
  description: "Show visitor statistics",
  category: CATEGORY.GENERAL,
  usage: "visitors",

  execute: () => [
    formatHeading("Visitor Analytics"),

    formatPlain(""),

    formatTable(
      ["Metric", "Value"],
      [
        ["Views", visitorStats.views],
        ["Countries", visitorStats.countries],
        ["Availability", visitorStats.availability],
      ]
    ),

    formatPlain(""),

    formatHeading("Top Countries"),

    ...visitorStats.topCountries.map((c) => formatPlain(c)),

    formatPlain(""),

    formatSuccess(visitorStats.message),
  ],
};

// const experienceCommand = {
//   name: 'experience',
//   aliases: [],
//   description: 'Show career timeline',
//   category: CATEGORY.ENGINEERING,
//   usage: 'experience',
//   execute: () => [
//     formatHeading('Experience'),
//     formatTable(['year', 'milestone'], timeline.map((t) => [t.year, t.label])),
//   ],
// };

const experienceCommand = {
  name: "experience",
  aliases: ["timeline"],
  description: "Show engineering journey",
  category: CATEGORY.ENGINEERING,
  usage: "experience",

  execute: () => [
    formatHeading("Engineering Timeline"),

    formatPlain(""),

    formatTable(
      ["Year", "Milestone", "Status"],
      timeline.map((item) => [
        item.year,
        item.title,
        item.status,
      ])
    ),

    formatPlain(""),

    formatInfo(
      `${timeline.length} milestones recorded`
    ),
  ],
};

const certificationsCommand = {
  name: "certifications",
  aliases: ["certs"],
  description: "List certifications",
  category: CATEGORY.ENGINEERING,
  usage: "certifications",

  execute: () => [
    formatHeading("Certifications"),
    formatWarning("No certifications added yet."),
    formatInfo("Complete certifications and update src/data/certifications.js"),
  ],
};

// ---- Search / Open ----
const knowledgeCommand = {
  name: "knowledge",
  aliases: [],
  description: "List engineering knowledge notes",
  category: CATEGORY.ENGINEERING,
  usage: "knowledge",

  execute: () => [
    formatHeading("Knowledge Base"),

    formatPlain(""),

    formatTable(
      ["Slug", "Title", "Category"],
      knowledgeArticles.map((article) => [
        article.slug,
        article.title,
        article.category,
      ])
    ),

    formatPlain(""),

    formatInfo("Use: open <slug>"),

    formatSuccess(`${knowledgeArticles.length} knowledge articles available.`),
  ],
};

const blogCommand = {
  name: "blog",
  aliases: ["articles"],
  description: "List engineering blog posts",
  category: CATEGORY.ENGINEERING,
  usage: "blog",

  execute: () => [
    formatHeading("Developer Blog"),

    formatPlain(""),

    formatTable(
      ["Slug", "Title", "Date"],
      blogArticles.map((article) => [
        article.slug,
        article.title,
        article.date || article.lastUpdated || "-",
      ])
    ),

    formatPlain(""),

    formatInfo("Use: open <slug>"),

    formatSuccess(`${blogArticles.length} blog posts available.`),
  ],
};

const searchCommand = {
  name: 'search',
  aliases: ['find'],
  description: 'Search projects, knowledge, blog, and toolbox',
  category: CATEGORY.SEARCH,
  usage: 'search <keyword>',
  execute: (ctx) => {
  const query = ctx.args.join(" ").trim();

  if (!query) {
    return [
      formatWarning("Usage: search <keyword>"),
    ];
  }

  const index = buildSearchIndex();

  const results = fuzzySearchList(
    query,
    index,
    (item) => item.text
  );

  if (!results.length) {
    return [
      formatError(`No results found for "${query}".`)
    ];
  }

  const blocks = [
    formatHeading(`Search Results (${results.length})`),
    formatPlain("")
  ];

  results.forEach((item) => {

    let icon = "📄";

    switch (item.type) {
      case "project":
        icon = "📁";
        break;

      case "knowledge":
        icon = "📚";
        break;

      case "blog":
        icon = "📝";
        break;

      case "tool":
        icon = "🛠";
        break;

      case "learning":
        icon = "🎯";
        break;

      default:
        icon = "📄";
    }

    blocks.push(
      formatPlain(`${icon} ${item.title}`),
      formatInfo(`Type : ${item.type}`),
      formatInfo(`Slug : ${item.slug}`),
      formatPlain("")
    );

  });

  blocks.push(
    formatSuccess(`Found ${results.length} result(s).`),
    formatInfo("Use: open <slug>")
  );

  return blocks;
},
};

const openCommand = {
  name: 'open',
  aliases: [],
  description: 'Open a specific slug (project, article, tool)',
  category: CATEGORY.SEARCH,
  usage: 'open <slug>',
  execute: (ctx) => {
  const slug = ctx.args[0];

  if (!slug) {
    return [
      formatWarning("Usage: open <slug>"),
    ];
  }

  const index = buildSearchIndex();

  const found = index.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!found) {
    return [
      formatError(`No content found for "${slug}".`)
    ];
  }

  const iconMap = {
    project: "📁",
    knowledge: "📚",
    blog: "📝",
    toolbox: "🛠",
    learning: "🎯",
  };

  const icon = iconMap[found.type] || "📄";

  return [
    formatHeading(`${icon} ${found.title}`),

    formatPlain(""),

    formatInfo(`Type        : ${found.type}`),

    formatInfo(`Slug        : ${found.slug}`),

    formatPlain(""),

    formatHeading("Content"),

    formatPlain(found.text),

    formatPlain(""),

    formatSuccess("End of document."),
  ];
},
};

// ---- Fun commands ----
const whoamiCommand = {
  name: 'whoami',
  aliases: [],
  description: 'Show a short bio',
  category: CATEGORY.FUN,
  usage: 'whoami',
  execute: () => [
  formatHeading("Krishna Verma"),
  formatPlain(""),
  formatSuccess("Software Engineer | Full Stack Developer | DevOps Learner"),
  formatPlain(""),
  formatHeading("Currently Building"),
  formatPlain("• KV Engineering Platform"),
  formatPlain("• Engineering Knowledge Base"),
  formatPlain("• DevOps Learning Lab"),
  formatPlain(""),
  formatHeading("Current Focus"),
  formatPlain("• React"),
  formatPlain("• Node.js"),
  formatPlain("• Docker"),
  formatPlain("• AWS"),
  formatPlain("• Kubernetes"),
  formatPlain("• AI Engineering"),
  formatPlain(""),
  formatHeading("Mission"),
  formatPlain(
    "Build an engineering platform that helps developers learn through real projects, documentation, and practical experiments."
  ),
  formatPlain(""),
  formatHeading("Quick Links"),
  formatLink("GitHub", "https://github.com/Krishna-verma97"),
  formatLink("Portfolio", "/"),
  formatLink("Dashboard", "/dashboard"),
  formatLink("Knowledge Base", "/knowledge"),
],
};

const coffeeCommand = {
  name: 'coffee',
  aliases: [],
  description: 'Load coffee',
  category: CATEGORY.FUN,
  usage: 'coffee',
  execute: () => [
    formatPlain('☕'),
    formatSuccess('Coffee loaded.'),
    formatInfo('Productivity increased.'),
  ],
};

const motivateCommand = {
  name: 'motivate',
  aliases: [],
  description: 'Get a motivational message',
  category: CATEGORY.FUN,
  usage: 'motivate',
  execute: () => [formatSuccess(randomFrom(motivations))],
};

const fortuneCommand = {
  name: 'fortune',
  aliases: [],
  description: 'Get a random engineering quote',
  category: CATEGORY.FUN,
  usage: 'fortune',
  execute: () => [formatInfo(randomFrom(fortunes))],
};

const helloCommand = {
  name: 'hello',
  aliases: ['hi'],
  description: 'Say hello',
  category: CATEGORY.FUN,
  usage: 'hello',
  execute: () => [formatSuccess('Hello! Type "help" to see what this console can do.')],
};

const pingCommand = {
  name: 'ping',
  aliases: [],
  description: 'Check if the console is responsive',
  category: CATEGORY.FUN,
  usage: 'ping',
  execute: () => [formatSuccess('pong — 0ms (it is all local, relax)')],
};

const sudoCommand = {
  name: 'sudo',
  aliases: [],
  description: 'Try "sudo hire krishna"',
  category: CATEGORY.FUN,
  usage: 'sudo hire krishna',
  execute: (ctx) => {
    const phrase = ctx.args.join(' ').toLowerCase();
    if (phrase === 'hire krishna') {
      return [formatSuccess('Permission granted.'), formatSuccess('Welcome aboard.')];
    }
    return [formatError(`Permission denied for "sudo ${ctx.args.join(' ')}".`)];
  },
};

const exitCommand = {
  name: 'exit',
  aliases: ['quit'],
  description: 'Exit message (does not actually close anything)',
  category: CATEGORY.FUN,
  usage: 'exit',
  execute: () => [formatInfo('There is no spoon. This console lives in your browser tab.')],
};

const answerCommand = {
  name: '42',
  aliases: [],
  description: 'The answer to everything',
  category: CATEGORY.FUN,
  usage: '42',
  execute: () => [formatInfo('The answer to life, the universe, and everything.')],
};

export const terminalCommands = [
  helpCommand,
  clearCommand,
  historyCommand,
  themeCommand,
  bannerCommand,
  ...navigationCommands,
  projectsCommand,
  projectCommand,
  missionCommand,
  resumeCommand,
  contactCommand,
  githubCommand,
  versionCommand,
  neofetchCommand,
  roadmapCommand,
  todayCommand,
  goalsCommand,
  booksCommand,
  learningCommand,
  skillsCommand,
  dashboardCommand,
  visitorsCommand,
  experienceCommand,
  certificationsCommand,
  knowledgeCommand,
  blogCommand,
  searchCommand,
  openCommand,
  whoamiCommand,
  coffeeCommand,
  motivateCommand,
  fortuneCommand,
  helloCommand,
  pingCommand,
  sudoCommand,
  exitCommand,
  answerCommand,
];

export function findCommand(name) {
  const lower = name.toLowerCase();
  return terminalCommands.find(
    (cmd) => cmd.name === lower || cmd.aliases.includes(lower),
  );
}
