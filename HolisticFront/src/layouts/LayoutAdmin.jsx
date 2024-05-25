import React from 'react';

const LayoutAdmin = ({ children }) => {
  return (
    <React.Fragment>
      {/* Título y mensaje de bienvenida para administradores */}
      <header>
        <h1>Bienvenido, Administrador</h1>
        <p>Aquí encontrarás las herramientas y opciones para gestionar tu sitio.</p>
      </header>

      {/* Main content area */}
      <main>{children}</main>
    </React.Fragment>
  );
};

export default LayoutAdmin;
