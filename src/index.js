import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "./index.css";
console.log("...");

function App(props) {
  return (
    <h1>
      {props.saludo}, {props.nombre}
    </h1>
  );
}

function withSaludo(saludo) {
  return function WrappedComponentWithSaludo(WrappedComponent) {
    return function ComponenteDeVerdad(props) {
      return (
        <>
          <WrappedComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al WrapperComponent</p>
        </>
      );
    };
  };
}

const AppWithSaludo = withSaludo("Buenas")(App);

ReactDOM.render(
  <AppWithSaludo nombre="Luis" />,
  document.getElementById("root")
);
