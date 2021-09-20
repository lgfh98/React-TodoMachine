import React from "react";
import { Modal } from "../Modal";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoForm } from "../TodoForm";
import { TodoHeader } from "../TodoHeader";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmpyTodos } from "../EmptyTodos";
import { useTodos } from "../hooks/useTodos";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    todos,
    searchValue,
    setSearchValue,
    completedTodos,
    totalTodos,
    setOpenModal,
    addTodo,
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        todos={todos}
        error={error}
        loading={loading}
        searchValue={searchValue}
        searchedTodos={searchedTodos}
        onError={() => <TodosError error={error} />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmpyTodos />}
        onEmptySearch={(searchValue) => (
          <p>No hay resultados para: {searchValue}</p>
        )}
        // 😋😋 Forma 1 de enviar el contenido
        // render={(todo) => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {/* 😋😋 Forma 2 de enviar el contenido */}
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />
      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
}

export default App;
