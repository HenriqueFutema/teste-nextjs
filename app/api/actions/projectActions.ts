
export async function getProjects() {
  const response = await fetch(`${process.env.API_URL}/projects`);
  return response.json();
}

export async function getProjectById(id: string) {
  const response = await fetch(`${process.env.API_URL}/projects/${id}`);
  return response.json();
}