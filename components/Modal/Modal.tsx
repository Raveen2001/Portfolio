import React from "react";
import styles from "./Modal.module.scss";
import { closeModalFor } from "../../utils/gsap";

interface IModalProps {
  id: string;
  children: React.ReactNode;
}

const Modal = ({ id, children }: IModalProps) => {
  return (
    <div className={styles.Modal} id={id}>
      <div className={styles.container}>
        {children}

        <div className={styles.close} onClick={() => closeModalFor(id)}>
          <span className={`${styles.line} ${styles.l1}`}></span>
          <span className={`${styles.line} ${styles.l2}`}></span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
