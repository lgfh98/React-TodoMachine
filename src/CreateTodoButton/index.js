import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal, blockActions }) {
  const onClickButton = () => {
    if (blockActions) return;
    setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
