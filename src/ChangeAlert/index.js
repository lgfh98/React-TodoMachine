import React, { memo } from "react";
import { useStorageListener } from "../ChangeAlert/useStorageListener";
import "./ChangeAlert.css";

const ChangeAlert = memo(function ({ setBlockActions, updateTodos }) {
  const { show, toggleShow } = useStorageListener(setBlockActions);

  if (show) {
    return (
      <div className="ChangeAlert-container">
        <div className="ChangeAlert-content">
          <p>Hubo Cambios!, ¿Quieres actualizad los todos?</p>
          <button
            type="button"
            onClick={() => {
              toggleShow(false);
              setBlockActions(false);
              updateTodos();
            }}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
});

export { ChangeAlert };
