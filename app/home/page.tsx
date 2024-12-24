import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { getProjects } from "../api/actions/projectActions";
import { ProjectsProvider } from "../contexts/ProjectsContext/ProjectsContext";
import { InformationProjectsStatus } from "../components/Home/InformationProjectsStatus/InformationProjectsStatus";
import { ProjectsChart } from "../components/Home/ProjectsChart/ProjectsChart";
import { IProject } from "../contexts/ProjectsContext/types";

export default async function Home() {
  const session = await getServerSession()

  if (!session) {
    redirect("/")
  }
  const { user } = session
  const { projects } = await getProjects();

  const counter = {
    activeProjects: 0,
    completedProjects: 0,
    lateProjects: 0,
  }

  const now = new Date();

  projects.forEach((project: IProject) => {
    const initialDate = new Date(project.initialDate);
    const endDate = new Date(project.endDate);

    const hasIncompleteTasks = project.tasks.some((task) => !task.isDone);
    const allTasksCompleted = project.tasks.length > 0 && project.tasks.every((task) => task.isDone);

    if (now >= initialDate && now <= endDate && hasIncompleteTasks) {
      return ++counter.activeProjects
    }

    if (allTasksCompleted) {
      return ++counter.completedProjects
    }

    return ++counter.lateProjects
  });

  return (
    <div>
      <div>
        <h3 className="font-bold text-2xl">Bem vindo, {user?.name}!</h3>
      </div>
      <ProjectsProvider initialData={{
        projects,
        counter
      }}>
        <InformationProjectsStatus />
        <ProjectsChart />
      </ProjectsProvider>
    </div>
  );
}
