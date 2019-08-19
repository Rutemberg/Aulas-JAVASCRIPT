import React from "react";

export default props => 
  <div>
    <h1>
      Bom dia {props.nome} vc tem {props.idade} anos!!!
    </h1>
    <h2>Até breve!</h2>
  </div>

  // Sera envolto em uma array usando []
  // ou em fragmento usando o React.Fragment

//   <React.Fragment>
//     <h1>
//       Bom dia {props.nome} vc tem {props.idade} anos!!!
//     </h1>
//     <h2>Até breve!</h2>
//   </React.Fragment>

// Usando um array  
// [
//     <h1 key="H1">Bom dia {props.nome} vc tem {props.idade} anos!!</h1>,
//     <h2 key="H2">Até breve!</h2>
// ]