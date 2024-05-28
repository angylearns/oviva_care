import registerService from "../services/registerService";

export const handleRegister = async (data, setErrorMessage, setShowAlert, setSuccessMessage) => {
    
    
    console.log('handleRegister data '+ JSON.stringify(data));
    
    

    try {
        console.log('handleRegister data '+ JSON.stringify(data));
        
        
        await registerService.addPerson(data.first_name, data.last_name, data.birth_date, data.country, data.diagnosed, data.email);
        
        await registerService.addUser( data.password, data.user_type, data.email);
        setSuccessMessage('Se ha registrado correctamente'); 
        setShowAlert(true); 
        console.log('Detalles de la persona registrados');
        
    } catch (error) {
        console.error('captura error de registerHandler.handleRegister '+ error);
        setErrorMessage('Ocurrió un error al registrar la persona'); 
        setShowAlert(true); 
    }
};