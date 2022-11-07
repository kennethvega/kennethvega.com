import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  type?: "button" | "submit" | "reset" | undefined;
};

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button
      aria-label="button"
      type={type}
      onClick={onClick}
      className="flex gap-3 py-2 items-center justify-center hover:bg-gray-200 rounded-md px-2 transition-all duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
