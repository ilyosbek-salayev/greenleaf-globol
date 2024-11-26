import React from "react";

interface ButtonProps {
  text: string;
  onclick: () => void;
}

const Buttons: React.FC<ButtonProps> = ({ text, onclick }) => {
  return (
    <button
      onClick={onclick}
      style={{
        margin: "10px",
        padding: "10px 20px",
      }}
    >
      {text}
    </button>
  );
};

export default Buttons;
