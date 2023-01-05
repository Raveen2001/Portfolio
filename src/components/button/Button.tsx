import React from "react";
import { ReactComponent as ArrowRightIcon } from "../../assets/arrow_right.svg";
import "./Button.scss";
interface IButtonProps {
  text: string;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}
const Button: React.FC<IButtonProps> = ({
  text,
  className = "",
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`Button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="button-div">{text}</div>
      <ArrowRightIcon />
    </button>
  );
};

export default Button;
