import registerService from "../services/registerService";

export const handleRegister = async (e, setErrorMessage) => {
    e.preventDefault();
    const password = document.getElementById('user_name').value;
    const user_type = document.getElementById('password').value;
    const email = document.getElementById('telephone').value;
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const birth_date = document.getElementById('dni').value;
    const country = document.getElementById('birth_date').value;
    const diagnosed = document.getElementById('email').value;
    
    

    try {

        await loginService.addUser( password, user_type, email);

        const id_user_fk = await loginService.getLastUserId();

        await registerService.addPerson(first_name, last_name, birth_date,country, diagnosed, id_user_fk);

        console.log('Detalles de la persona registrados');
    } catch (error) {

        setErrorMessage('Ocurrió un error al registrar la persona');
    }
};