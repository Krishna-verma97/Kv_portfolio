import knowledge from "./knowledgeEngine";

export function buildContext(question) {
  const q = question.toLowerCase();

  const context = [];

  if (
    q.includes("project") ||
    q.includes("portfolio") ||
    q.includes("engineering")
  ) {
    context.push({
      section: "projects",
      data: knowledge.projects,
    });
  }

  if (
    q.includes("tool") ||
    q.includes("stack") ||
    q.includes("technology")
  ) {
    context.push({
      section: "toolbox",
      data: knowledge.toolbox,
    });
  }

  if (
    q.includes("learn") ||
    q.includes("study") ||
    q.includes("roadmap")
  ) {
    context.push({
      section: "learning",
      data: knowledge.learning,
    });
  }

  if (
    q.includes("resume") ||
    q.includes("experience")
  ) {
    context.push({
      section: "resume",
      data: knowledge.resume,
    });
  }

  return context;
}