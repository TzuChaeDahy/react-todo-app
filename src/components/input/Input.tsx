import { DiamondPlus } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitNewTask: (e: React.FormEvent) => void;
  styles?: string;
  placeholder?: string;
}

const Input = ({
  value,
  onChange,
  onSubmitNewTask,
  placeholder,
}: InputProps) => {
  const { theme } = useTheme();
  const colorStyles =
    theme === "light"
      ? "bg-stone-50 text-stone-900"
      : "bg-stone-900 text-stone-100";

  return (
    <div
      className={
        "px-8 w-full mx-auto rounded-xs flex items-center gap-4 shadow-md" +
        " " +
        colorStyles
      }
    >
      <button className="cursor-pointer" onClick={onSubmitNewTask}>
        <DiamondPlus />
      </button>
      <input
        className="w-full py-4 outline-none"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
