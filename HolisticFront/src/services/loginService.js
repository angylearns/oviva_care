const API_URL = 'http://localhost:5001';
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
      }
     
    }

    export default loginService;
    
