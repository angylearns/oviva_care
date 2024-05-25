import React from 'react';
import { Outlet } from 'react-router-dom'; // Importa Outlet desde react-router-dom
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const LayoutPublic = () => {
  return (
    <>
        <Outlet />
    </>
  );
};

export default LayoutPublic;
