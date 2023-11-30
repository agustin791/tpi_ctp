import React from "react";

// Definición del componente "Boton"
export default class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; // El estado inicial del componente se inicializa vacío.
  }

  render() {
    return (
      // Renderiza un elemento de botón que ejecutará la función "onClick" proporcionada como una propiedad (props).
      // El título del botón se obtiene de la propiedad "titulo".
      <button className="Botton" onClick={() => this.props.onClick()} >
        {this.props.titulo}
      </button>
      /*
      // También puedes usar un elemento de span en lugar de un botón (código comentado).
      <span className="Boton" onClick={() => onClick()}>
        {children}
      </span>
      */
    );
  }
}
