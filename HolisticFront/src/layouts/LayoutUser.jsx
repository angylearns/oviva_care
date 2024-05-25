import React from 'react';

const LayoutUser = ({ children }) => {
  return (
    <React.Fragment>
      <header>Header Privado</header>
      <main>{children}</main>
      <footer>Footer Privado</footer>
    </React.Fragment>
  );
};

export default LayoutUser;
