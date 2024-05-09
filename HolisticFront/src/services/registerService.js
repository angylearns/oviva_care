const API_URL = 'http://127.0.0.1:5001';

const registerService = {

    addPerson: async (first_name, last_name, birth_date,country, diagnosed, id_user_fk) => {
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
    
          return await response.json().result;
    
        } catch (error) {
          console.error('Error al guardar persona:', error);
          throw error;
        }
      },



}

export default registerService;