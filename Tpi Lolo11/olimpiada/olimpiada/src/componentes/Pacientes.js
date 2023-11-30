import React from 'react';
import Boton from "./Boton";
import Input from "./Input";

const pacienteModelo={
  
}
//import "./styles.css";
export default class Pacientes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         paciente:{}
          
        };
    }


    buscar(){
//axios.get
this.setState({paciente:pacienteModelo})
    }

    render() {
      return (
        <div className="Pacientes">
          <h1>Buscar Pacientes </h1>
          <Input
            titulo="Documento:"
            valor={this.state.documento}
            onChange={(nuevo) => this.setState({documento: nuevo })}
          />

          <Boton titulo="Buscar" onClick={() => this.buscar()} />
                   
        </div>
      );
     }

}