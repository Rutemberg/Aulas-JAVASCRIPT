import React from "react";
import ReactDOM from "react-dom";

// import Multi, { BoaTarde } from "./componentes/Multiplos";
import Saudacao from "./componentes/Saudacao";

// ReactDOM.render(
//   <div>
//     <BoaTarde nome="Ana" />
//     <Multi.BoaNoite nome="Bia" />
//   </div>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <div>
    <Saudacao tipo='Bom dia' nome="Ana" />
  </div>,
  document.getElementById("root")
);
