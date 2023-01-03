import React from "react";
import { ReactComponent as ArrowRightIcon } from "../../assets/arrow_right.svg";
import "./Button.scss";
interface IButtonProps {
  text: string;
  onClick: () => void;
}
const Button: React.FC<IButtonProps> = ({ text, onClick }) => {
  return (
    <button className="Button">
      <div className="button-div" onClick={onClick}>
        {text}
      </div>
      <ArrowRightIcon />
    </button>
  );
};

export default Button;
