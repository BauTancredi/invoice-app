import React from "react";

import PlusIcon from "./icons/PlusIcon";

interface ButtonProps {
  text: string;
  hasIcon: boolean;
}

const Button = ({ text, hasIcon }: ButtonProps) => {
  return (
    <button className="bg-primary-400 hover:bg-primary-300 flex items-center gap-3 rounded-3xl py-2 px-4 text-white">
      {hasIcon && <PlusIcon />}
      {text}
    </button>
  );
};

export default Button;
