import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const TOKEN_COOKIE_NAME = "authToken";

export const saveTokenToCookies = (token, setCookie) => {
  const decodedToken = jwtDecode(token);

  setCookie("id_user", decodedToken.id_user, { path: "/", sameSite: 'strict' });
  setCookie("email", decodedToken.email, { path: "/", sameSite: 'strict' });
  setCookie("first_name", decodedToken.first_name, { path: "/", sameSite: 'strict' });
  setCookie("id_person", decodedToken.id_person, { path: "/", sameSite: 'strict' });
  setCookie("user_type", decodedToken.user_type, { path: "/", sameSite: 'strict' });
  setCookie(TOKEN_COOKIE_NAME, token, { path: "/", sameSite: 'strict' });

};

export const getTokenFromCookies = () => {
  const token = Cookies.get(TOKEN_COOKIE_NAME);
  return token;
};

export const decodeToken = (token) => {
  if (token) {
    return jwtDecode(token);
  }
  return null;
};

export const isAuthenticated = () => {
  const token = getTokenFromCookies();
  if (token) {
    return true;
  }
  return false;
};

export const isAdmin = () => {
  const token = getTokenFromCookies();
  if (token) {
    const decodedToken = decodeToken(token);
    return decodedToken.user_type === "Admin";
  }
  return false;
};

export const logOut = () => {
  Cookies.remove("id_user");
  Cookies.remove("email");
  Cookies.remove("first_name");
  Cookies.remove("id_person");
  Cookies.remove("user_type");
  Cookies.remove(TOKEN_COOKIE_NAME);
  
  window.location.href = "/";
};