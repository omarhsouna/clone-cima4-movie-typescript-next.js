import React from "react";
interface Props {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
}
const CircleIconButton: React.FC<Props> = ({
  handleClick,
  children,
  className = "",
}) => (
  <button
    className={`rounded-full bg-[#6f4d98] text-white flex items-center justify-center text-[30px] h-[40px] w-[40px] ${className}`}
    onClick={handleClick}
  >
    {children}
  </button>
);

export default CircleIconButton;
