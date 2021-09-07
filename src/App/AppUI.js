import React from "react";
import { Modal } from "../Modal";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>🔥🔥🔥🔥🔥🔥🔥</p>}
        {loading && <p>Cargando...</p>}
        {!loading && searchedTodos.length === 0 && (
          <p>Crea tu primer TODO! 💚</p>
        )}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {openModal && (
        <Modal>
          <p>{searchedTodos[0]?.text}</p>
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
