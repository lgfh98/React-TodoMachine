import React, { useState, useEffect } from "react";

function WithStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    useEffect(() => {
      window.addEventListener("storage", (change) => {
        if (change.key === "TODOS_V1") {
          props.setBlockActions(true);
          setStorageChange(true);
        }
      });
    }, []);
    return (
      <>
        <WrappedComponent
          {...props}
          show={storageChange}
          toggleShow={setStorageChange}
        />
      </>
    );
  };
}

export { WithStorageListener };
