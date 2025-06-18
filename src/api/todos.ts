export const fetchTodos = async (url: string) => {
  const response = await fetch(`${url}/todos`);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};

export const addTodo = async (url: string, todo: { title: string }) => {
  const response = await fetch(`${url}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  if (!response.ok) {
    throw new Error("Failed to add todo");
  }

  return response.json();
};

export const deleteTodo = async (url: string, id: string) => {
  const response = await fetch(`${url}/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
};

export const updateTodo = async (url: string, id: string) => {
  const response = await fetch(`${url}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to update todo");
  }

  return response.json();
};
