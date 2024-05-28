import React, { createContext, useContext, useState } from "react";
import Cookies from 'js-cookie';
import { saveTokenToCookies, getTokenFromCookies, decodeToken, isAuthenticated, isAdmin, logOut } from './authUtils';
import { Outlet } from "react-router-dom";

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = () => {
    const [state, setState] = useState({
      isAuthenticated: false,
      token: null,
    });

    const login = (token) => {
      saveTokenToCookies(token, {
        id_user: token.id_user,
        email: token.email,
        first_name: token.first_name,
        id_person: token.id_person,
        user_type: token.user_type,
      });
      setState(prevState => ({
      ...prevState,
        isAuthenticated: true,
        token: token,
      }));
      <Navigate to="/" replace />
    };

    const logout = () => {
      logOut();
      setState(prevState => ({
      ...prevState,
        isAuthenticated: false,
        token: null,
      }));
    };

    return (
      <AuthContext.Provider value={{...state, login, logout, isAuthenticated, isAdmin}}>
        <Outlet/>
      </AuthContext.Provider>
    );
};

export { AuthProvider, useAuth, AuthContext };
