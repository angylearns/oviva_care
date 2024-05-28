import loginService from "../services/loginService";
import { decodeToken } from "../utils/authUtils"; 

export const handleLogin = async ({ password, user_type, email }, setErrorMessage, setShowAlert, setSuccessMessage) => {
    try {
       
        console.log('handleLogin 1');
        const users = await loginService.postUser(password, user_type, email);
        console.log('handleLogin 2');
        const token = users.token; 
        const decodedToken = decodeToken(token);
        console.log('Token:', token);
        console.log('Decoded Token:', decodedToken);
        setSuccessMessage('Ha iniciado sesión correctamente.'); 
        setShowAlert(true); 
        return token; 
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        setErrorMessage('No pudo iniciar sesión, inténtelo de nuevo'); 
        setShowAlert(true); 
        throw error;
    }
};
