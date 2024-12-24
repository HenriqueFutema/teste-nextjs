
export async function getProjects() {
  const response = await fetch('http://localhost:3000/api/projects');
  return response.json();
}

export async function getProjectById(id: string) {
  const response = await fetch(`http://localhost:3000/api/projects/${id}`);
  return response.json();
}