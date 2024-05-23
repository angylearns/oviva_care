<<<<<<< HEAD
const API_URL = 'http://localhost:5001';
const loginService = {
  
=======
const API_URL = 'http://127.0.0.1:5001';
const loginService = {
>>>>>>> feature/Maria2
    //ESTE METODO HA PASADO A registerService
    postUser: async ( password, user_type, email) => {
      try {
        console.log('loginService postUser 1');
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
        console.log('loginService postUser end');
        return data;
<<<<<<< HEAD

=======
>>>>>>> feature/Maria2
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
      }
    },
<<<<<<< HEAD
  
   
=======
>>>>>>> feature/Maria2
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
<<<<<<< HEAD
     
    }

    export default loginService;
    
=======
    }
    export default loginService;







>>>>>>> feature/Maria2
