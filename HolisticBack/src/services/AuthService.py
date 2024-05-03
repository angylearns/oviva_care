from src.database.db_mysql import get_connection
from src.models.userModel import User
from src.models.personModel import Person
from werkzeug.security import check_password_hash

class AuthService():

    @classmethod
    def auth_login_user(cls, user: User, person:Person):
        try:
            connection = get_connection()

            authenticated_user = None

            with connection.cursor() as cursor:
                
                cursor.execute('CALL sp_login_user(%s)', (user.email))
                row = cursor.fetchone()

                if row is not None and check_password_hash(row[1], user.password):
                    user= User(int(row[0]), row[1], row[2], row[3])
    
                    person=Person(row[4], row[5], None, None, None, None, user)
                    authenticated_user = person

                else:
                   
                    authenticated_user = None 

            connection.close()

            

            return authenticated_user

        except Exception as ex:
            print("Error en auth_login_user:", ex)
            return None

    @classmethod
    def get_info_login_user(cls, email: str):
        try:
            connection = get_connection()

            with connection.cursor() as cursor:
                cursor.execute('CALL sp_login_user(%s)', (email,))
                row = cursor.fetchone()

                if row is not None:
                    user_id = row[0]
                    password = row[1]
                    user_type = row[2]
                    email = row[3]
                    person_id = row[4]
                    first_name = row[5]
                    last_name = row[6]
                    birth_date = row[7]
                    description = row[8]
                    category = row[9]
                    email = row[10]

                    combined_data = {
                        'user_id': user_id,
                        'password': password,
                        'user_type': user_type,
                        'email' : email,
                        'person_id': person_id,
                        'first_name': first_name,
                        'last_name': last_name,
                        'birth_date': birth_date,
                        'description': description,
                        'category': category,
                        'email': email,
                    }
                    
                    return combined_data
                    
                else:
                    return None
                
        except Exception as ex:
            print("Error al obtener los usuarios:", ex)
            return None
        
        finally:
            connection.close()
