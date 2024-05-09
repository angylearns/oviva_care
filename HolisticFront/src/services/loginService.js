const API_URL = 'http://127.0.0.1:5001';
const loginService = {
    postUser: async ( password, user_type, email) => {
      try {
        const response = await fetch(`${API_URL}/userL/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({  password, user_type, email }),
        });
        if (!response.ok) {
          throw new Error('Error al iniciar sesión');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
      }
    },
  
    addUser: async ( password, user_type, email) => {
        try {
          await fetch(`${API_URL}/user/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({  password, user_type, email }),
          });
    
        } catch (error) {
          console.error(error);
          throw new Error('Ocurrió un error al registrar el usuario');
        }
      },
      getUsersByEmail: async (email) => {
        try {
          const response = await fetch(`${API_URL}/email?email=${email}`);
          if (!response.ok) {
            throw new Error('Error al obtener el usuario');
          }
          return response.id_user;
        } catch (error) {
          console.error(error);
          throw new Error('Ocurrió un error al obtener el usuario');
        }
      },
    
      getLastUserId: async () => {
        try {
          const response = await fetch(`${API_URL}/email/id_user`);
          if (!response.ok) {
            throw new Error('Error al obtener el último ID de usuario');
          }
          const data = await response.json();
          console.log(data.id_user)
          return data.id_user;
        } catch (error) {
          console.error(error);
          throw new Error('Ocurrió un error al obtener el último ID de usuario');
        }
      }
    }

    export default loginService;
    