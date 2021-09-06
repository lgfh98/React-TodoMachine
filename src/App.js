import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";

const todos = [
  { text: "Bañar a Arza", completed: false },
  { text: "Conseguir una novia", completed: false },
  { text: "Terminar la escuela de desarrollo web de Platzi", completed: false },
  { text: "Caminar con mi papá", completed: false },
  { text: "Dormir a las 10pm", completed: false },
];

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
