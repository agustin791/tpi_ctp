// Login.js
import React from "react";
import Boton from "./Boton";
import Input from "./Input";
//import "./Login.css"; // Importa los estilos CSS

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      contraseña: "",
    };
  }

  render() {
    return (
    
      <div className="Logins">
       <header>

       </header>
       
        <div>
          <div className="Login">
            <h1>Iniciar sesión</h1>

            <Input className="Usuario"
              titulo="Usuario:"
              valor={this.setState.usuario}
              onChange={(nuevo) => this.setState({ usuario: nuevo })}
            />

            <Input className="Contraseña"
              titulo="Contraseña:"
              valor={this.state.contraseña}
              onChange={(nuevo) => this.setState({ contraseña: nuevo })}
            />

            <Boton titulo="Entrar" onClick={this.props.LoginOk} />
          </div>
        </div>
      </div>
    );
  }
}
