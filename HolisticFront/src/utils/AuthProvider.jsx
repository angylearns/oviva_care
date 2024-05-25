import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { saveTokenToCookies, getTokenFromCookies, isAuthenticated, isAdmin, logOut } from './authUtils';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    isAdmin: false,
  });

  useEffect(() => {
    const token = getTokenFromCookies(Cookies.get());
    if (token) {
      const decodedToken = jwtDecode(token);
      setAuthState({
        isAuthenticated: true,
        user: decodedToken,
        isAdmin: isAdmin(decodedToken),
      });
    }
  }, []);

  const login = (userData) => {
    saveTokenToCookies(userData.token, Cookies.set);
    setAuthState({
      isAuthenticated: true,
      user: userData.user,
      isAdmin: userData.isAdmin,
    });
  };

  const logout = () => {
    logOut(Cookies.remove);
    setAuthState({
      isAuthenticated: false,
      user: null,
      isAdmin: false,
    });
  };

  return (
    <AuthContext.Provider value={{...authState, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
