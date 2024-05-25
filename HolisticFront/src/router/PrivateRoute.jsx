import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../utils/authUtils';

const PrivateRoute = ({ element,...rest }) => {
  const location = useLocation();
  const isAuthenticated = isAuthenticated(); // Implementa esta función según tu lógica de autenticación

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{element}</>;
};

export default PrivateRoute;