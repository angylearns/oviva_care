const API_URL = 'http://127.0.0.1:5001';

const registerService = {
    addUser: async ( password, user_type, email) => {
        console.log('registerService addUser 1');
        try {
          await fetch(`${API_URL}/user/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({  password, user_type, email }),
          });
          console.log('registerService addUser end');
        } catch (error) {
            console.error('captura error de registerService.addUser '+ error);
          throw new Error('Ocurrió un error al guardar el usuario en base de datos. '+error);
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
    },
    addPerson: async (first_name, last_name, birth_date,country, diagnosed, id_user_fk) => {
        console.log('registerService 1');
        try {
          const response = await fetch(`${API_URL}/person/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
    
            body: JSON.stringify({ first_name, last_name, birth_date,country, diagnosed, id_user_fk}),
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