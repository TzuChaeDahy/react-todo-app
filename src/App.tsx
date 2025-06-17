import "./App.css";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import TodoList from "./components/todo-list/TodoList";

function App() {
  return (
    <main className="h-full flex flex-col bg-stone-50">
      <Header />
      <section className="flex flex-col gap-4">
        <Input placeholder="Create a new todo..." />
        <TodoList />
      </section>
    </main>
  );
}

export default App;
