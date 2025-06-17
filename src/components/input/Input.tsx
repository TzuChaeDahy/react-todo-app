import { DiamondPlus } from "lucide-react";
import { useState } from "react";

interface InputProps {
  placeholder?: string;
}

const Input = ({ placeholder }: InputProps) => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="px-4 w-full max-w-3xl mx-auto bg-stone-50 rounded-xs flex items-center gap-4 shadow-md">
      <button className="cursor-pointer">
        <DiamondPlus />
      </button>
      <input
        className="w-full py-4 outline-none"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
