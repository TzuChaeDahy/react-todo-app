import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const icon =
    theme === "dark" ? (
      <Sun className="w-7 h-7" />
    ) : (
      <Moon className="w-7 h-7" />
    );

  return (
    <header className="bg-linear-to-bl from-violet-500 to-fuchsia-500 pt-20 pb-48 -mb-10">
      <section className="flex items-center justify-between w-full max-w-3xl mx-auto">
        <h1 className="tracking-widest font-bold text-4xl uppercase">Todo</h1>
        <button className="cursor-pointer" onClick={toggleTheme}>
          {icon}
        </button>
      </section>
    </header>
  );
};

export default Header;
