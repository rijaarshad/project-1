import React from "react";
import { FileText } from "lucide-react";

interface PromptProps {
  text: string;
  color?: "blue" | "orange" | "yellow" | "green";
}

const colorClasses = {
  blue: "border-blue-400 text-blue-500",
  orange: "border-orange-300 text-orange-400",
  yellow: "border-yellow-300 text-yellow-500",
  green: "border-green-300 text-green-500",
};

const Prompts: React.FC<PromptProps> = ({ text, color = "blue" }) => {
  return (
    <button
      className={`flex items-center px-4 py-2 rounded-full border bg-white hover:shadow transition text-sm font-medium ${colorClasses[color]}`}
    >
      <FileText className="w-4 h-4 mr-2" />
      {text}
    </button>
  );
};

export default Prompts;
