import React from 'react';
import Boton from "./Boton";
import Input from "./Input";
import Fzona from './Fzona';
//import "./styles.css";
export default class Zonas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          existe:false,
          buscado:false
         
          
        };
    }
    BuscarZona() {
      alert("Zona no encontrada")
      this.setState ({buscado:true,
        existe:false});
      }
    render() {
      const {buscado, existe} = this.state
      return (
        <div className="Login">
          <h1>Buscar Zona </h1>
          <Input
            titulo="Zona:"
            valor={this.state.zona}
            onChange={(nuevo) => this.setState({zona: nuevo })}
          />

          <Boton titulo="Buscar" onClick={() => this.BuscarZona()} />
          {(buscado && !existe) &&
              (<Fzona/>)}
        </div>
      );
     }
}