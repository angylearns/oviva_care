import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../utils/AuthProvider';
import { isAuthenticated } from '../utils/authUtils';

const PrivateRoute = ({children}) => {
  const isAuthenticatedUser = isAuthenticated();
  console.log(isAuthenticated);
  if (!isAuthenticatedUser) {
    return <Navigate to="/error" replace />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
