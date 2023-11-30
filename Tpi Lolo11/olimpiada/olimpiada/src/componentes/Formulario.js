import React from "react";
import Input from "./Input";
import Boton from "./Boton";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documento: "", // Estado para el documento
      nombre: "", // Estado para el nombre
      apellido: "", // Estado para el apellido
    };
  }

  render() {
    return (
      <div className="Formu">
        <h1>Crear Paciente</h1>

        <Input
          titulo="Nombre:"
          valor={this.state.nombre}
          onChange={(nuevo) => this.setState({ nombre: nuevo })}
        />
        <Input
          titulo="Apellido:"
          valor={this.state.apellido}
          onChange={(nuevo) => this.setState({ apellido: nuevo })}
        />
        <Input
          titulo="Documento:"
          valor={this.state.documento}
          onChange={(nuevo) => this.setState({ documento: nuevo })}
        />
        <Boton titulo="Crear" onClick={() => this.props.LoginOk()} />
      </div>
    );
  }
}
