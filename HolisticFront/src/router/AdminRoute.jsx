// Asumiendo que esta es la ubicación de tu archivo
// src/components/route/AdminRoute.jsx

import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { isAdmin } from '../utils/authUtils';

const AdminRoute = ({ children }) => {
  useEffect(() => {
    // Verifica si el usuario es un administrador
    const isAdminUser = isAdmin();

    // Si el usuario no es un administrador, redirige
    if (!isAdminUser) {
      window.location.href = '/';
    }
  }, []);

  // Si el usuario es un administrador, muestra los hijos
  return <>{children}</>;
};

export default AdminRoute;
