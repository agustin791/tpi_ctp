import React from "react";
import Boton from "./Boton";
import Input from "./Input";
import Formulario from "./Formulario";
// import Tarjeta from "./Tarjeta";
//import "./styles.css"; // Import de un archivo de estilos que está comentado

export default class Cargar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      existe: false, // Un estado que indica si un paciente existe
      buscado: false, // Un estado que indica si se ha buscado un paciente
    };
  }

  BuscarPaciente() {
    // Muestra una alerta con el mensaje "Documento no encontrado"
    alert("Documento no encontrado");

    // Actualiza el estado para indicar que se ha buscado, pero no se encontró el documento
    this.setState({
      buscado: true,
      existe: false,
    });
  }

  render() {
    const { buscado, existe } = this.state; // Desestructura el estado en dos variables

    return (
      <div className="Cargar">
        <h1>Cargar Paciente</h1> {/* Título del formulario */}
        <Input
          titulo="Documento:" // Título del campo de entrada
          valor={this.state.documento} // El valor del campo de entrada (que falta en el estado inicial)
          onChange={(nuevo) => this.setState({ documento: nuevo })} // Actualiza el estado con el nuevo valor
        />
        <Boton titulo="Buscar" onClick={() => this.BuscarPaciente()} />
        {/* Botón con el título "Crear-Buscar" que llama al método BuscarPaciente al hacer clic */}
        {/* Renderiza el componente Formulario si se ha buscado y no se encontró el documento */}
        {buscado && !existe && <Formulario />}
      </div>
    );
  }
}
