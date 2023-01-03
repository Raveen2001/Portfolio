import React from "react";
import { ReactComponent as ArrowRightIcon } from "../../assets/arrow_right.svg";
import "./Button.scss";
interface IButtonProps {
  text: string;
  className?: string;
  onClick: () => void;
}
const Button: React.FC<IButtonProps> = ({ text, className = "", onClick }) => {
  return (
    <button className={`Button ${className}`}>
      <div className="button-div" onClick={onClick}>
        {text}
      </div>
      <ArrowRightIcon />
    </button>
  );
};

export default Button;
