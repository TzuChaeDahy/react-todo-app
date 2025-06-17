import { ListX, LoaderCircle } from "lucide-react";
import { useTodos } from "../../hooks/useTodos";
import TodoItem from "../todo-item/TodoItem";

const TodoList = () => {
  const { data: todos, isLoading, isError } = useTodos();
  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-4 w-full max-w-3xl p-8 mx-auto bg-stone-50 rounded-xs shadow-md">
        <LoaderCircle className="w-14 h-14 animate-spin" />
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  if (todos === undefined || isError) {
    return (
      <div className="flex flex-col items-center gap-4 w-full max-w-3xl p-8 mx-auto bg-stone-50 rounded-xs shadow-md">
        <ListX className="w-24 h-24" />
        <h2 className="text-4xl font-bold">Something went wrong...</h2>
        <p>Please try again later.</p>
      </div>
    );
  }

  const todoItems = todos.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />;
  });

  return <ul>{todoItems}</ul>;
};

export default TodoList;
