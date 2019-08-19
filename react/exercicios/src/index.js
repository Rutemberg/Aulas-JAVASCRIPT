import React from "react";
import ReactDOM from "react-dom";

// import Multi, { BoaTarde } from "./componentes/Multiplos";
// import Saudacao from "./componentes/Saudacao";
import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";

// ReactDOM.render(
//   <div>
//     <BoaTarde nome="Ana" />
//     <Multi.BoaNoite nome="Bia" />
//   </div>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <div>
//     <Saudacao tipo='Bom dia' nome="Ana" />
//   </div>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <div>
    <Pai nome="Julio" sobrenome="Barboza">
        <Filho nome='Paulo' ></Filho>
        <Filho nome='Pedro' ></Filho>
        <Filho nome='Carla' ></Filho>
    </Pai>
  </div>,
  document.getElementById("root")
);
