import { BrushCleaning, ListX, LoaderCircle } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useTodos } from "../../hooks/useTodos";
import TodoItem from "../todo-item/TodoItem";

interface TodoListProps {
  onCompleteTask: (e: React.FormEvent, id: string) => void;
  onDeleteTask: (e: React.FormEvent, id: string) => void;
}

const TodoList = ({ onCompleteTask, onDeleteTask }: TodoListProps) => {
  const { data: todos, isLoading, isError } = useTodos();

  const { theme } = useTheme();
  const colorStyles =
    theme === "light"
      ? "bg-stone-50 text-stone-900"
      : "bg-stone-900 text-stone-100";

  if (isLoading) {
    return (
      <div
        className={
          "flex flex-col items-center gap-4 w-full p-8 mx-auto rounded-xs shadow-md" +
          " " +
          colorStyles
        }
      >
        <LoaderCircle className="w-14 h-14 animate-spin" />
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  if (todos === undefined || isError) {
    return (
      <div
        className={
          "flex flex-col items-center gap-4 w-full p-8 mx-auto rounded-xs shadow-md" +
          " " +
          colorStyles
        }
      >
        <ListX className="w-24 h-24" />
        <h2 className="text-4xl font-bold">Something went wrong...</h2>
        <p>Please try again later.</p>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div
        className={
          "flex flex-col items-center gap-4 w-full p-8 mx-auto rounded-xs shadow-md" +
          " " +
          colorStyles
        }
      >
        <BrushCleaning className="w-24 h-24" />
        <h2 className="text-4xl font-bold">There are no task yet...</h2>
        <p>Try to create new ones.</p>
      </div>
    );
  }

  const todoItems = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        onCompleteTask={onCompleteTask}
        onDeleteTask={onDeleteTask}
      />
    );
  });

  return (
    <ul
      className={
        "flex flex-col gap-8 w-full p-8 mx-auto rounded-xs shadow-md" +
        " " +
        colorStyles
      }
    >
      {todoItems}
    </ul>
  );
};

export default TodoList;
