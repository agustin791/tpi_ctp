import React from 'react';
import Boton from "./Boton";
import Input from "./Input";
//import axios from "axios";


export default class Enfermeros extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombres:"",
      apellidos:"",
      documento:""
    };
  }

  guardar(){
    const url= "https://71d.ctpoba.ar/api/enfermeros"
    const datos={
      nombres: this.state.nombres,
      apellidos: this.state.apellidos,
      documento: this.state.documento,
    }
    axios.post(url, datos)
    .then((resp)=>{

    })
    .catch((error)=>{

    })
  }

  render() {
    const { } = this.state;

    return (
      <div className="Enfermeros">
        <h1>Ingresar Enfermeros</h1>
        <Input
          titulo="Nombre:"
          valor={this.state.nombres}
          onChange={(nuevo) => this.setState({ nombres: nuevo })}
        />
        <Input
          titulo="Apellido:"
          valor={this.state.apellidos}
          onChange={(nuevo) => this.setState({ apellidos: nuevo })}
        />
        <Input
          titulo="Documento:"
          valor={this.state.documento}
          onChange={(nuevo) => this.setState({ documento: nuevo })}
        />

        <Boton titulo="Ingresar" onClick={() => alert("5")} />

        
      </div>
    );
  }
}
