import { jwtDecode } from "jwt-decode";

export const TOKEN_COOKIE_NAME = "authToken";

// Función para guardar el token en las cookies
export const saveTokenToCookies = (token, setCookie) => {
  // Decodificar el token para obtener sus partes
  const decodedToken = jwtDecode(token);

  // Guardar cada parte del token como una cookie separada
  setCookie("id_user", decodedToken.id_user, { path: "/" });
  setCookie("email", decodedToken.email, { path: "/" });
  setCookie("first_name", decodedToken.first_name, { path: "/" });
  setCookie("id_person", decodedToken.id_person, { path: "/" });
  setCookie(TOKEN_COOKIE_NAME, token, { path: "/" });
};

// Función para obtener el token de las cookies
export const getTokenFromCookies = (cookies) => {
  const token = cookies[TOKEN_COOKIE_NAME];
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
export const isAuthenticated = (cookies) => {
  const token = getTokenFromCookies(cookies);
  return !!token;
};

// Función para verificar si el usuario es un administrador
export const isAdmin = (cookies) => {
  const token = getTokenFromCookies(cookies);
  if (token) {
    const decodedToken = decodeToken(token);
    return decodedToken.user_type === "admin";
  }
  return false;
};
