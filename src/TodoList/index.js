import React from "react";
import "./TodoList.css";

function TodoList({
  children,
  render,
  error,
  onError,
  searchValue,
  loading,
  onLoading,
  onEmptyTodos,
  todos,
  searchedTodos,
  onEmptySearch,
  blockActions,
}) {
  let alternativeRender;
  let contentRender = children || render;

  if (error) {
    alternativeRender = onError();
  } else if (loading) {
    alternativeRender = onLoading();
  } else if (!loading && todos.length === 0) {
    alternativeRender = onEmptyTodos();
  } else if (!loading && searchedTodos.length === 0) {
    alternativeRender = onEmptySearch(searchValue);
  }

  return (
    <section className="TodoList-container">
      {alternativeRender ? (
        alternativeRender
      ) : (
        <>{blockActions ? "" : <ul>{searchedTodos.map(contentRender)}</ul>}</>
      )}
    </section>
  );
}

export { TodoList };
