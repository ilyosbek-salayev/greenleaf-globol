import React, { useState } from "react";
import DialogBox from "./DialogBox";

const Buttons = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const handleClick = (section: string) => {
    setOpenDialog(section);
  };

  return;
  <div className="buttons-container">
    {["Istemolchi", "Sotuvchi", "Marketing"].map((item) => (
      <button
        key={item}
        onClick={() => handleClick(item)}
        className="custom-button"
      >
        {item}
      </button>
    ))}
    {openDialog && (
      <DialogBox section={openDialog} onClose={() => setOpenDialog(null)} />
    )}
  </div>;
};

export default Buttons;
