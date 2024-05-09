import registerService from "../services/registerService";

export const handleRegister = async (data, setErrorMessage) => {
    
    // const password = document.getElementById('password').value;
    // const user_type = document.getElementById('user_type').value;
    // const email = document.getElementById('email').value;
    // const first_name = document.getElementById('first_name').value;
    // const last_name = document.getElementById('last_name').value;
    // const birth_date = document.getElementById('birth_date').value;
    // const country = document.getElementById('country').value;
    // const diagnosed = document.getElementById('diagnosed').value;
    
    // console.log('handleRegister data '+ JSON.stringify(data));
    
    

    try {

        await loginService.addUser( password, user_type, email);

        const id_user_fk = await loginService.getLastUserId();

        await registerService.addPerson(data.first_name, data.last_name, data.birth_date, data.country, data.diagnosed, id_user_fk);

        console.log('Detalles de la persona registrados');
    } catch (error) {

        setErrorMessage('Ocurrió un error al registrar la persona');
    }
};