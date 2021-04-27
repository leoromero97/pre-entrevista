import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Editar información
      </a>

      <a className="menu-item" href="/burgers">
        Editar foto de perfil
      </a>

      <a className="menu-item" href="/pizzas">
        Cerrar sesión
      </a>
    </Menu>
  );
};
