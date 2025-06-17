export const fetchTodos = async (url: string) => {
  const response = await fetch(`${url}/todos`);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};
