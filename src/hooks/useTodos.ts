import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, deleteTodo, fetchTodos, updateTodo } from "../api/todos";
import type { Todo } from "../models/Todo";
import { useApi } from "./useApi";

export const useTodos = () => {
  const { url } = useApi();
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(url),
  });
};

export const useAddTodo = () => {
  const { url } = useApi();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newTodo: Todo) => addTodo(url, newTodo),
    onSuccess: (_) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return mutation;
};

export const useDeleteTodo = () => {
  const { url } = useApi();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: string) => deleteTodo(url, id),
    onSuccess: (_) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return mutation;
};

export const useUpdateTodo = () => {
  const { url } = useApi();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: string) => updateTodo(url, id),
    onSuccess: (_) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return mutation;
};
