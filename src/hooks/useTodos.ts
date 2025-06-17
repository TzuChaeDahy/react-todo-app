import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api/todos";
import type { Todo } from "../models/Todo";
import { useApi } from "./useApi";

export const useTodos = () => {
  const { url } = useApi();
  return useQuery<Todo[], Error >({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(url),
  });
};
