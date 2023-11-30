import React from 'react';  // Importa la biblioteca React
import Input from "./Input";  // Importa un componente personalizado llamado "Input"
import Boton from "./Boton";  // Importa un componente personalizado llamado "Boton"


// Exporta la clase "Fzona" como componente predeterminado
export default class Fzona extends React.Component {

    // Constructor del componente
    constructor(props) {
        super(props);  // Llama al constructor de la clase base (React.Component)
        this.state = {
            // Inicializa el estado del componente como un objeto vacío
        };
    };

    // Método de renderizado
    render(){
        return(
            <div className="Formu">
                <h1>Crear zona</h1>  {/* Encabezado con el texto "Crear zona" */}
                
                {/* Componente Input para el campo "Código" */}
                <Input
                    titulo="Codigo:"  // Título del campo
                    valor={this.state.codigo}  // Valor del campo obtenido del estado del componente
                    onChange={(nuevo) => this.setState({codigo: nuevo })}  // Manejador de cambio que actualiza el estado al escribir en el campo
                />
                
                {/* Componente Input para el campo "Tipo" */}
                <Input
                    titulo="Tipo:"  // Título del campo
                    valor={this.state.tipo}  // Valor del campo obtenido del estado del componente
                    onChange={(nuevo) => this.setState({tipo: nuevo })}  // Manejador de cambio que actualiza el estado al escribir en el campo
                />
                
                {/* Componente Input para el campo "Piso" */}
                <Input
                    titulo="Piso:"  // Título del campo
                    valor={this.state.piso}  // Valor del campo obtenido del estado del componente
                    onChange={(nuevo) => this.setState({piso: nuevo })}  // Manejador de cambio que actualiza el estado al escribir en el campo
                />

                {/* Componente Boton con el título "Crear" y un manejador de clic */}
                <Boton titulo="Crear" onClick={() => this.BuscarZona()} />

            </div>
        );
    }
}
