import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { getProjects } from "../api/actions/projectActions";
import { ProjectsProvider } from "../contexts/ProjectsContext/ProjectsContext";
import { ProjectsList } from "../components/Projects/ProjectsList/ProjectsList";
import { Header } from "../components/Projects/Header/Header";

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
        <Header />
        <ProjectsList />
      </ProjectsProvider>
    </div>
  );
}
