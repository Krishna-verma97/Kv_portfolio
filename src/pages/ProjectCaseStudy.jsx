import { Link, useParams } from "react-router-dom";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug, PROJECTS } from "../data/projects";
import ProjectHero from "../components/projects/ProjectHero";
import ProjectOverview from "../components/projects/ProjectOverview";
import ProjectSpecs from "../components/projects/ProjectSpecs";
import ProjectArchitectureDetails from "../components/projects/ProjectArchitectureDetails";
import ProjectImplementationDetails from "../components/projects/ProjectImplementationDetails";
import ProjectChallenges from "../components/projects/ProjectChallenges";
import ProjectLessons from "../components/projects/ProjectLessons";
import ProjectPerformance from "../components/projects/ProjectPerformance";
import ProjectTesting from "../components/projects/ProjectTesting";
import ProjectRoadmap from "../components/projects/ProjectRoadmap";
import ProjectResources from "../components/projects/ProjectResources";
import ProjectScreenshotGallery from "../components/projects/ProjectScreenshotGallery";
import ProjectLinks from "../components/projects/ProjectLinks";
import ProjectSidebar from "../components/projects/ProjectSidebar";
import ProjectStickyNav from "../components/projects/ProjectStickyNav";
import ReadingProgressBar from "../components/knowledge/ReadingProgressBar";
import { useReadingProgress } from "../hooks/useReadingProgress";
import ProjectTimeline from "../components/projects/ProjectTimeline";
import SEO from "../components/seo/SEO";

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="w-full px-4 py-16 text-center text-slate-900 dark:text-white">
        <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-slate-200 bg-white p-10 shadow-sm dark:border-slate-700 dark:bg-slate-950/80">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            Project not found
          </p>
          <h1 className="mt-4 text-3xl font-semibold">
            Case study unavailable
          </h1>
          <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/projects"
            className="mt-8 inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Browse project case studies
          </Link>
        </div>
      </section>
    );
  }

  const relatedProjects = PROJECTS.filter(
    (item) => item.slug !== project.slug,
  ).slice(0, 3);
  const articleRef = useRef(null);
  const progress = useReadingProgress(articleRef, Boolean(project));

  return (
    <>
    <SEO
  title={`${project.title} | Krishna Verma`}
  description={project.description}
  image={project.thumbnail}
  type="article"
/>
    <article
      ref={articleRef}
      className="w-full bg-white px-4 pb-16 pt-8 text-black transition-colors duration-300 dark:bg-gray-900 dark:text-white"
    >
      <ReadingProgressBar progress={progress} />
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4 rounded-3xl border border-gray-200 bg-slate-50 p-5 dark:border-gray-700 dark:bg-slate-950/80">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              Engineering case study
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">
              {project.title}
            </h1>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </div>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <ProjectHero
              title={project.title}
              shortDescription={project.shortDescription}
              status={project.status}
              completed={project.completed}
              difficulty={project.difficulty}
              duration={project.duration}
            />

            <ProjectOverview
              problemStatement={project.problemStatement}
              overview={project.overview}
            />

            <ProjectSpecs specs={project.specs} />

            <ProjectArchitectureDetails architecture={project.architecture} />

            <ProjectImplementationDetails details={project.implementation} />

            <ProjectChallenges challenges={project.challenges} />

            <ProjectLessons lessons={project.lessons} />

            <ProjectPerformance performance={project.performance} />

            <ProjectTesting testing={project.testing} />

            <ProjectRoadmap roadmap={project.roadmap} />

            <ProjectResources resources={project.resources} />

            <ProjectScreenshotGallery screenshots={project.screenshots} />

            <div className="grid gap-6 lg:grid-cols-2">
              <ProjectLinks
                github={project.github}
                liveDemo={project.liveDemo}
              />
            </div>

            <ProjectTimeline timeline={project.timeline} />
          </div>

          <div className="space-y-6">
            <ProjectStickyNav />
            <ProjectSidebar
              project={project}
              relatedProjects={relatedProjects}
            />
          </div>
        </div>
      </div>
    </article>
    </>
  );
}
