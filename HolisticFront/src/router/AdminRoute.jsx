import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAdmin } from '../utils/authUtils';

const AdminRoute = ({ children }) => {
  // Verifica si el usuario es un administrador sin usar useEffect
  const isAdminUser = isAdmin();
  if (!isAdminUser) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AdminRoute;
