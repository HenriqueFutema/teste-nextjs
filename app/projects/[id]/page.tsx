
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

import { getProjectById } from "@/app/api/actions/projectActions";
import { TasksList } from "@/app/components/ProjectDetails/TasksList/TasksList";
import { ProjectDetailsProvider } from "@/app/contexts/ProjectDetailsContext/ProjectDetailsContext";
import { CommentsList } from "@/app/components/ProjectDetails/CommentsList/CommentsList";
import { FormComment } from "@/app/components/ProjectDetails/FormComment/FormComment";
import { Header } from "@/app/components/ProjectDetails/Header/Header";

export default async function Projects({ params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession()
  const { id } = await params;

  if (!session) {
    redirect("/")
  }
  const { project } = await getProjectById(id);

  return (
    <div>
      <ProjectDetailsProvider initialData={{
        project
      }}>
        <Header />
        <TasksList />
        <h5 className="mt-20 text-2xl font-bold">Comentários: </h5>
        <CommentsList />
        <FormComment author={session.user?.name || ""} />
      </ProjectDetailsProvider>
    </div>
  );
}
