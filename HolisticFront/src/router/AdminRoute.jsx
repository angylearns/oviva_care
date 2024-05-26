// AdminRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAdmin } from '../utils/authUtils';

const AdminRoute = ({ children }) => {
  const isAdminUser = isAdmin();
  if (!isAdminUser) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export default AdminRoute;
