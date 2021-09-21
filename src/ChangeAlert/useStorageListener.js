import { useState, useEffect } from "react";

function useStorageListener(setBlockActions) {
  const [storageChange, setStorageChange] = useState(false);

  useEffect(() => {
    window.addEventListener("storage", (change) => {
      console.log("storageChange");
      if (change.key === "TODOS_V1") {
        setBlockActions(true);
        setStorageChange(true);
      }
    });
  }, []);

  return { show: storageChange, toggleShow: setStorageChange };
}

export { useStorageListener };
