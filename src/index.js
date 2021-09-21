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

function withWhatever(WrappedComponent) {
  return function ComponenteDeVerdad(props) {
    return (
      <>
        <WrappedComponent {...props} />
        <p>Estamos acompañando al WrapperComponent</p>
      </>
    );
  };
}

const AppWithWhatever = withWhatever(App);

ReactDOM.render(
  <AppWithWhatever saludo="Hola" nombre="Luis" />,
  document.getElementById("root")
);
