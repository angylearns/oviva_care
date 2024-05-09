import loginService from "../services/loginService";

export const handleLogin = async ({ password, user_type, email }, setErrorMessage) => {
    try {
        const users = await loginService.postUser(password, user_type, email);
        console.log(users);
        return users;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        setErrorMessage('Ocurrió un error al iniciar sesión');
        throw error;
    }
};
