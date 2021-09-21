import React, { memo } from "react";
import { WithStorageListener } from "../ChangeAlert/WithStorageListener";
import "./ChangeAlert.css";

const ChangeAlert = memo(function ({
  show,
  toggleShow,
  updateTodos,
  setBlockActions,
}) {
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

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
