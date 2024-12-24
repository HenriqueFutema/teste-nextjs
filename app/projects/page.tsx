import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { getProjects } from "../api/actions/projectActions";
import { ProjectsProvider } from "../contexts/ProjectsContext/ProjectsContext";
import { ProjectsList } from "../components/Projects/ProjectsList/ProjectsList";
import { NewProjectModal } from "../components/Projects/NewProjectModal/NewProjectModal";

export default async function Projects() {
  const session = await getServerSession()

  if (!session) {
    redirect("/")
  }
  const { projects } = await getProjects();

  return (
    <div>
      <ProjectsProvider initialData={{
        projects
      }}>
        <div className="flex justify-between mb-10">
          <h3 className="font-bold text-2xl">Listagem dos Projetos</h3>
          <NewProjectModal />
        </div>
        <ProjectsList />
      </ProjectsProvider>
    </div>
  );
}
