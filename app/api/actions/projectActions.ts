
export async function getProjects() {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/projects`);
  return response.json();
}

export async function getProjectById(id: string) {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/projects/${id}`);
  return response.json();
}