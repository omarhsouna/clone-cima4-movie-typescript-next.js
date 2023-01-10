import React from "react";
import CircleIconButton from "./circleIconButton";
interface Props {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
}
const SocialButton: React.FC<Props> = ({
  handleClick,
  children,
  className,
}) => (
  <CircleIconButton
    handleClick={handleClick}
    className={`text-socialColor hover:text-white ${className}`}
  >
    {children}
  </CircleIconButton>
);
export default SocialButton;
