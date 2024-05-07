

export const handleRegister = async (data) => {
    console.log('handler' + JSON.stringify(data));


try {

    await loginService.addUser(password, user_type, email);

    const id_user_fk = await loginService.getLastUserId();

    await loginService.addPerson(data, id_user_fk);

    console.log('Detalles de la persona registrados');
} catch (error) {

    setErrorMessage(`Ocurrió un error al registrar la persona: ${error.message}`);
}
};
