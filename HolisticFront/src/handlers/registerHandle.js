import registerService from "../services/registerService";

export const handleRegister = async (data, setErrorMessage, setShowAlert, setSuccessMessage) => {
    
    
    console.log('handleRegister data '+ JSON.stringify(data));
    
    

    try {
        console.log('handleRegister data '+ JSON.stringify(data));
        
        // const id_user_fk = await registerService.getLastUserId();
        await registerService.addPerson(data.first_name, data.last_name, data.birth_date, data.country, data.diagnosed, data.email);
        
        await registerService.addUser( data.password, data.user_type, data.email);
        setSuccessMessage('Se ha registrado correctamente'); // Establece el mensaje de éxito
        setShowAlert(true); // Muestra la ventana emergente de alerta
        console.log('Detalles de la persona registrados');
        
    } catch (error) {
        console.error('captura error de registerHandler.handleRegister '+ error);
        setErrorMessage('Ocurrió un error al registrar la persona'); // Actualiza el mensaje de error
        setShowAlert(true); // Muestra la ventana emergente de alerta
    }
};