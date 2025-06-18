import { Badge, BadgeCheck, CircleX } from "lucide-react";
import type { Todo } from "../../models/Todo";

interface TodoItemProps {
  todo: Todo;
  onCompleteTask: (e: React.FormEvent, id: string) => void;
  onDeleteTask: (e: React.FormEvent, id: string) => void;
}

const TodoItem = ({ onCompleteTask, onDeleteTask, todo }: TodoItemProps) => {
  const checkbox = todo.completed ? <BadgeCheck /> : <Badge />;

  return (
    <li className="flex gap-4">
      <button
        className="cursor-pointer"
        onClick={(e) => onCompleteTask(e, todo.id)}
      >
        {checkbox}
      </button>
      <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
      <button
        className="cursor-pointer ml-auto"
        onClick={(e) => onDeleteTask(e, todo.id)}
      >
        <CircleX />
      </button>
    </li>
  );
};

export default TodoItem;
