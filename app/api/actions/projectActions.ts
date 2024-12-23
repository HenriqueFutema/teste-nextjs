
export async function getProjects() {
  const response = await fetch('http://localhost:3000/api/projects');
  return response.json();
}