
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

import { getProjectById } from "@/app/api/actions/projectActions";
import { TasksList } from "@/app/components/ProjectDetails/TasksList/TasksList";
import { ProjectDetailsProvider } from "@/app/contexts/ProjectDetailsContext/ProjectDetailsContext";

export default async function Projects({ params }: { params: { id: string } }) {
  const session = await getServerSession()
  const { id } = await params;

  if (!session) {
    redirect("/")
  }
  const { project } = await getProjectById(id);
  console.log(project)


  return (
    <div>
      <ProjectDetailsProvider initialData={{
        project
      }}>
        <div className="mb-10">
          <h3 className="font-bold text-2xl">{project.name}</h3>
          <p>{project.description}</p>
        </div>
        <TasksList />
      </ProjectDetailsProvider>
    </div>
  );
}
