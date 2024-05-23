import loginService from "../services/loginService";
import { decodeToken } from "../utils/authUtils"; // Importamos la función para decodificar el token

export const handleLogin = async ({ password, user_type, email }, setErrorMessage, setShowAlert, setSuccessMessage) => {
    try {
       
        console.log('handleLogin 1');
        const users = await loginService.postUser(password, user_type, email);
        console.log('handleLogin 2');
        const token = users.token; // Suponiendo que el token se devuelve como parte de la respuesta
        const decodedToken = decodeToken(token); // Decodificamos el token
        console.log('Token:', token);
        console.log('Decoded Token:', decodedToken);
        setSuccessMessage('Se ha logueado correctamente'); // Establece el mensaje de éxito
        setShowAlert(true); // Muestra la ventana emergente de alerta
        return token; // Retornamos el token
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        setErrorMessage('No pudo loguearse, inténtelo de nuevo'); // Actualiza el mensaje de error
        setShowAlert(true); // Muestra la ventana emergente de alerta
        throw error;
    }
};
