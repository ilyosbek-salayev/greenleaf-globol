import React from "react";
import IstemolchiForm from "~/Login and SignUp/Istemolchi";

interface ModalProps {
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, onClose }) => {

  const getForm = (type: string) => {
    switch (type) {
      case 'Istemolchi':
        return (
          <div>
            <IstemolchiForm />
          </div>
        );
      case 'Sotuvchi' :
        return (
          <p>Sotuvchi uchun Login shakli!</p>
        );
      case 'Marketing':
        return (
          <p>Marketing uchun Login shakli!</p>
        );
      default:
        return (
          <p>Hech qanday ma'lumot topilmadi.</p>
        );
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        <h2>{content}</h2>
        {getForm(content)}
        <button onClick={onClose} style={{ marginTop: "20px" }}>
          Yopish
        </button>
      </div>
    </div>
  );
};

export default Modal;
