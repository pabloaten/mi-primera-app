import React, { Component } from "react";
/* 
Hay dos formas de crear un componente:
-Componene de clase
-componente de funcion
 */
//Componente de clases

/*  class Componente extends Component{
     constructor(props){
         super(props);
         this.nombre = "Pablo";
     }
    render() {
        return (<h1 className="App-header">Mi primer componente🤓 {this.meses}</h1>)
    }
}
export default Componente;  */

//Componente funcionales

function Componente(props) {
  
  return <h1 className="App-header"><ol>{  props.meses.map(function(element,index) {
    return <li key={index}>{ element}</li>;
  })}</ol>Nombre: {props.objeto.nombre}<br></br> Contrataciones: {props.objeto.email}🤑</h1>;
}
export default Componente;
/* const Componente = (props) => (
  <h1 className="App-header">
    {
      >Mi primer componente🤓  {props.nombre}  props.pintado
        ? "verdadero voy a pintar el componente😆"
        : "No voy a pintar nada🤬🤬"
    }
  </h1>
);
export default Componente; */
