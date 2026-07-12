import DashboardHero from "../components/dashboard/DashboardHero";
import MissionCard from "../components/dashboard/MissionCard";
import LearningSection from "../components/dashboard/LearningSection";
// import BooksSection from "../components/dashboard/BooksSection";
import TimelineSection from "../components/dashboard/TimelineSection";
import GithubSection from "../components/dashboard/GithubSection";
import ToolboxSection from "../components/dashboard/ToolboxSection";
import EngineeringWork from "../components/dashboard/EngineeringWork";
import LatestArticles from "../components/dashboard/LatestArticles";
import VisitorsSection from "../components/dashboard/VisitorsSection";


export default function EngineeringDashboard() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 space-y-20">

     <section className="mx-auto max-w-7xl px-6 py-16">

  <DashboardHero />

  <div className="mt-16 grid gap-8 lg:grid-cols-2">

    <MissionCard />

    <GithubSection />

  </div>

  <div className="mt-10 grid gap-8 lg:grid-cols-2">

    <LearningSection />

    <TimelineSection />

  </div>

  <div className="mt-10">

    <ToolboxSection />

  </div>

  <div className="mt-10 grid gap-8 lg:grid-cols-2">

    <EngineeringWork />

    <LatestArticles />

  </div>

  <div className="mt-10">

    <VisitorsSection />

  </div>

</section>



    </section>
  );
}