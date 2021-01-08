import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactInputPorExtenso from "../lib";
import { Desc, Ext, Container } from "./style"



const App = () => {
  const [numero, setNumero] = useState("");
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  return (
    <>
    <Container>
      <ReactInputPorExtenso
        tipoExtenso="normal"
        onChange={numeroExtenso => setNumero(numeroExtenso)} 
        style={{backgroundColor: "cyan"}}
      />
      <Desc>
        Número por extenso: 
      </Desc>
      <Ext>{numero}</Ext>
      <ReactInputPorExtenso
        tipoExtenso="monetario"
        onChange={numeroExtenso => setNumero1(numeroExtenso)} 
        style={{backgroundColor: "lightgreen"}}
      />
      <Desc>
        Reais por extenso: 
      </Desc>
      <Ext>{numero1}</Ext>
      <ReactInputPorExtenso
        tipoExtenso="porcentagem"
        onChange={numeroExtenso => setNumero2(numeroExtenso)} 
        style={{backgroundColor: "orange"}}
      />
      <Desc>
        Porcentagem por extenso: 
      </Desc>
      <Ext>{numero2}</Ext>
      </Container>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));