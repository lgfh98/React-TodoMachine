import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [sincronizing, setSincronizing] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }, 2000);
  }, [sincronizing]);

  const updateItem = () => {
    setLoading(true);
    setSincronizing(!sincronizing);
  };

  const saveItem = (newItem) => {
    try {
      const stringifyedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, updateItem, error };
}

export { useLocalStorage };
