import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession()

  if (!session) {
    redirect("/")
  }
  const { user } = session

  return (
    <div>
      <h3 className="font-bold text-2xl">Bem vindo, {user?.name}!</h3>
    </div>
  );
}
