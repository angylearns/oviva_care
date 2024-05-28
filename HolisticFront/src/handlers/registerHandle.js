import registerService from "../services/registerService";

export const handleRegister = async (data, setErrorMessage, setShowAlert, setSuccessMessage) => {
    
    try {

        await registerService.addPerson(data.first_name, data.last_name, data.birth_date, data.country, data.diagnosed, data.email);

        await registerService.addUser( data.password, data.user_type, data.email);
        setSuccessMessage('Se ha registrado correctamente'); 
        setShowAlert(true); 
        
    } catch (error) {
        console.error('captura error de registerHandler.handleRegister '+ error);
        setErrorMessage('Ocurrió un error al registrar la persona'); 
        setShowAlert(true); 
    }
};