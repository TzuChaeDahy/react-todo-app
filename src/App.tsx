import "./App.css";
import Header from "./components/header/Header";
import TodoForm from "./components/todo-form/TodoForm";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();
  const colorStyles =
    theme === "light"
      ? "bg-stone-50 text-stone-900"
      : "bg-stone-900 text-stone-100";

  return (
    <main className={"h-full flex flex-col transition" + " " + colorStyles}>
      <Header />
      <TodoForm />
    </main>
  );
}

export default App;
