import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const TOKEN_COOKIE_NAME = "authToken";

// Función para guardar el token en las cookies
export const saveTokenToCookies = (token, setCookie) => {
  // Decodificar el token para obtener sus partes
  const decodedToken = jwtDecode(token);

  // Guardar cada parte del token como una cookie separada
  setCookie("id_user", decodedToken.id_user, { path: "/", sameSite: 'strict' });
  setCookie("email", decodedToken.email, { path: "/", sameSite: 'strict' });
  setCookie("first_name", decodedToken.first_name, { path: "/", sameSite: 'strict' });
  setCookie("id_person", decodedToken.id_person, { path: "/", sameSite: 'strict' });
  setCookie("user_type", decodedToken.user_type, { path: "/", sameSite: 'strict' });
  setCookie(TOKEN_COOKIE_NAME, token, { path: "/", sameSite: 'strict' });

};

// Función para obtener el token de las cookies
export const getTokenFromCookies = () => {
  const token = Cookies.get(TOKEN_COOKIE_NAME);
  return token;
};

// Función para decodificar el token y obtener los datos del usuario
export const decodeToken = (token) => {
  if (token) {
    return jwtDecode(token);
  }
  return null;
};

// Función para verificar si el usuario está autenticado
export const isAuthenticated = () => {
  const token = getTokenFromCookies();
  // return!!token;
  if (token) {
    return true;
  }
  return false;
};

// Función para verificar si el usuario es un administrador
export const isAdmin = () => {
  const token = getTokenFromCookies();
  if (token) {
    const decodedToken = decodeToken(token);
    return decodedToken.user_type === "Admin";
  }
  return false;
};


export const logOut = () => {
  // Eliminar todas las cookies relacionadas con la sesión del usuario
  Cookies.remove("id_user");
  Cookies.remove("email");
  Cookies.remove("first_name");
  Cookies.remove("id_person");
  Cookies.remove("user_type");
  Cookies.remove(TOKEN_COOKIE_NAME);
  
  window.location.href = "/";
};