import React from "react";
import styles from "@/styles/DialogBox.module.css";
import RegistrationForm from "./RegistrationForm";

interface DialogBoxProps {
  section: string;
  onClose: () => void;
}

const DialogBox: React.FC<DialogBoxProps> = ({ section, onClose }) => {
  return (
    <div className={styles.dialogOverlay}>
      <div className={styles.dialogContent}>
        <h2>{section} bo‘limiga ro‘yxatdan o‘tish</h2>
        <RegistrationForm section={section} />
        <button onClick={onClose} className={styles.closeButton}>
          Yopish
        </button>
      </div>
    </div>
  );
};

export default DialogBox;
