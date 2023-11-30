import React from "react";
//import Llamados from "./Llamados";
//import Tarjeta from "./Tarjeta";
import Boton from "./Boton";
//import Input from "./Input";
//import "./styles.css";
export default class Interfaz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="InterfazTodo">
        <div className="Interfaz">
          <header>
            <div className="Botones">
              <Boton
                titulo="Crear/cargar"
                onClick={(pant) => this.props.onClick(2)}
              />
              <Boton titulo="Zonas" onClick={(pant) => this.props.onClick(3)} />
              <Boton
                titulo="Pacientes"
                onClick={(pant) => this.props.onClick(4)}
              />
              <Boton
                titulo="Enfermeros"
                onClick={(pant) => this.props.onClick(5)}
              />

              <hr />
            </div>
          </header>
        </div>
      </div>
    );
  }
}
