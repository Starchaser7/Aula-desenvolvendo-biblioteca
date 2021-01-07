import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactInputPorExtenso from "../lib";
import style from './styles'


const App = () => {
  const [numero, setNumero] = useState("");
  return (
    <>
      <ReactInputPorExtenso
        tipoExtenso="porcentagem"
        onChange={numeroExtenso => setNumero(numeroExtenso)}
      />
      <p>
        <strong>Número por extenso</strong>: {numero}
      </p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));