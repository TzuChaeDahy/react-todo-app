import { useState } from "react";
import { useAddTodo, useDeleteTodo, useUpdateTodo } from "../../hooks/useTodos";
import Input from "../input/Input";
import TodoList from "../todo-list/TodoList";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { mutate: addTodo } = useAddTodo();
  const { mutate: updateTodo } = useUpdateTodo();
  const { mutate: deleteTodo } = useDeleteTodo();

  const handleSubmitNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    addTodo({ id: "", title: inputValue, completed: false });

    setInputValue("");
  };

  const handleCompleteTask = (e: React.FormEvent, id: string) => {
    e.preventDefault();

    updateTodo(id);
  };

  const handleDeleteTask = (e: React.FormEvent, id: string) => {
    e.preventDefault();

    deleteTodo(id);
  };

  return (
    <form className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSubmitNewTask={handleSubmitNewTask}
        placeholder="Create a new todo..."
      />
      <TodoList
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
    </form>
  );
};

export default TodoForm;
