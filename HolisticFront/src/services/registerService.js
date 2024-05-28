const API_URL = 'http://127.0.0.1:5001';

const registerService = {
    addUser: async ( password, user_type, email) => {
        console.log('registerService addUser');
        try {
          await fetch(`${API_URL}/user/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({  password, "user_type":"2", email }),
          });
          console.log('registerService addUser end');
        } catch (error) {
            console.error('captura error de registerService.addUser '+ error);
          throw new Error('Ocurrió un error al guardar el usuario en base de datos. '+error);
        }
    },
    addPerson: async (first_name, last_name, birth_date,country, diagnosed, email) => {
        console.log('registerService 1');
        console.log (first_name)
        try {
          const response = await fetch(`${API_URL}/person/post`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
    
            body: JSON.stringify({ first_name, last_name, birth_date,country, diagnosed, email}),
          });
          if (!response.ok) {
            throw new Error('Error al registrar el usuario');
          }
          console.log('registerService end');
          return await response.json().result;
    
        } catch (error) {
          console.error('Error al guardar persona:', error);
          throw error;
        }
      },
}

export default registerService;