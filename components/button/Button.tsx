import React from "react";
import ArrowRightIcon  from "../../assets/arrow_right.svg";
import styles from "./Button.module.scss";
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
      className={`${styles.Button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className={styles["button-div"]}>{text}</div>
      <ArrowRightIcon />
    </button>
  );
};

export default Button;
