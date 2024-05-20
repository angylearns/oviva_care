from src.database.db_mysql import get_connection
from src.models.userModel import User
from werkzeug.security import generate_password_hash

class UserService():

    @classmethod
    def get_user(cls):
        try:
            connection=get_connection()
           
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM user')
                result= cursor.fetchall()
                list_user=[User.convert_from_BD(row) for row in result]
                connection.close()
                return list_user
                
        except Exception as ex: 
            print(ex)

    # @classmethod
    # def get_idUserbyEmail(cls,email):
    #     print("wowowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww")
    #     print(email)
    #     try:
    #         connection=get_connection()
           
    #         with connection.cursor() as cursor:
    #             cursor.execute('SELECT id_user FROM user WHERE email = %s', (email,))

    #             result= cursor.fetchone()
    #             if result:
    #                 numero = result[0]
    #             print("resulttttt")
    #             print(numero)
    #             connection.close()
    #             return numero
                
    #     except Exception as ex: 
    #         print(ex)


    @classmethod
    def post_user(cls, user: User):
        try:
            connection=get_connection()
            with connection.cursor() as cursor:
                id_user = user.id_user
                passwordunic = user.password
                user_type = user.user_type
                email=user.email
                print("por buen camino")
                password = generate_password_hash (passwordunic,  'pbkdf2:sha256', 30)
                cursor.callproc("InsertUser", (id_user, password, user_type, email))
                connection.commit()
                connection.close()
                return 'Usuario agregado correctamente'
               
        except Exception as ex: 
            print(ex)

    @classmethod
    def delete_user(cls, id_user):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                cursor.callproc("DeleteUser", (id_user,))
                connection.commit()
            connection.close()
            return 'Usuario eliminado correctamente'
        except Exception as ex:
            print(ex)

    @classmethod
    def delete_userByEmail(cls, email):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                # cursor.callproc("DeleteUser", (id_user,))
                   
                cursor.execute("DELETE FROM user WHERE email='{0}'".format(email))                           
                connection.commit()
                connection.close()
                return 0
        except Exception as ex:
                print(ex)
                connection.close()
        return 'Usuario eliminado correctamente'
      
    @classmethod
    def put_user(cls, id_user, user: User):
        try:
             connection = get_connection()
             with connection.cursor() as cursor:
              password = user.password
              user_type = user.user_type
              email=user.email
              
              cursor.callproc("UpdateUser", (id_user, password, user_type, email))
              connection.commit()
             connection.close()
             return 'Usuario actualizado correctamente'
        except Exception as ex:
               print(ex)
     
   
    # @classmethod
    # def put_user_Email(cls, new_email, id_user, old_email):
    #     try:
    #         print("datitosssss: ")
    #         print(new_email)
    #         print(id_user)
    #         print(old_email)
    #         connection = get_connection()
    #         with connection.cursor() as cursor:
    #             # Iniciar una transacción
    #             connection.begin()

    #             # Actualizar el email en la tabla `person`
    #             query_person = 'UPDATE person SET email = %s WHERE email = %s'
    #             cursor.execute(query_person, (new_email, old_email))

    #             # Luego actualizar el email en la tabla `user`
    #             query_user = 'UPDATE user SET email = %s WHERE id_user = %s'
    #             cursor.execute(query_user, (new_email, id_user))

    #             # Confirmar la transacción
    #             connection.commit()

    #     except Exception as e:
    #         # Revertir la transacción en caso de error
    #         connection.rollback()
    #         print(f"Error: {e}")
    #         print("errorrrrrrrrrrrrrrrrrrrrrrrrrr..........................................")
    #         raise
    #     finally:
    #         # Cerrar la conexión
    #         connection.close()
