import React from "react";

//import "./styles.css"

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { titulo, valor } = this.props;
    return (
      <label>
        {titulo}
        <input
          value={valor}
          placeholder={titulo}
        />
      </label>
    );
  }
}
