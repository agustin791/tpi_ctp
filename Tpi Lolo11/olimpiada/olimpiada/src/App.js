import React from "react";
import Login from "./componentes/Login";
import Interfaz from "./componentes/Interfaz";
import Cargar from "./componentes/Cargar";
import "./styles.css";
import Zonas from "./componentes/Zonas";
import Pacientes from "./componentes/Pacientes";
import Enfermeros from "./componentes/Enfermeros";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // Inicializamos el estado del componente
    this.state = {
      logged: false, // Indica si el usuario está autenticado o no
      pantalla: 1,   // Número de pantalla actual
    };
  }

  // Función para cambiar la pantalla actual
  CambiarPantalla(pant) {
    this.setState({
      pantalla: pant,
    });
  }

  // Función para marcar al usuario como autenticado
  LoginSuccess() {
    this.setState({
      logged: true,
    });
  }

  render() {
    const { logged, pantalla } = this.state; // Extraemos el estado para usarlo en el render

    return (
      <div className="App">
        {/* Condición para mostrar el componente de Login o la Interfaz */}
        {!logged ? (
          <Login LoginOk={() => this.LoginSuccess()} />
        ) : (
          <div>
            <Interfaz onClick={(pant) => this.CambiarPantalla(pant)} />

            {/* Condiciones para mostrar diferentes componentes según la pantalla */}
            {pantalla === 2 && <Cargar />}
            {pantalla === 3 && <Zonas />}
            {pantalla === 4 && <Pacientes />}
            {pantalla === 5 && <Enfermeros />}
          </div>
        )}
      </div>
    );
  }
}