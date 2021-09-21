import React from "react";

function TodoHeader({ children, loading }) {
  const elements = React.Children.toArray(children);
  return (
    <header>
      {elements.map((child) => React.cloneElement(child, { loading: loading }))}
    </header>
  );
}

export { TodoHeader };
