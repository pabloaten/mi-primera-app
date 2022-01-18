import React, { Component} from "react";


/* 
Un componente se reprinta su se cambia el estado.
Luego en estado se debe almacenar lo que quiero cambiar dinamicamente
El estado en una clase se hace con this.state y es un objeto inmutable.
Solo se puede modificar con un metodo especial setState()
*/

export default class Estado extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            contador:0,
        }
    }
    
    render() {
        {   
            setInterval(() => {
            
               this.setState({contador :this.state.contador+=1})
              
               
            }, 1000)}
       return  (<><h1>Componente Estado</h1>
      
       <h2>
       {this.state.contador}
       </h2>
       </>);
    }
  
}
