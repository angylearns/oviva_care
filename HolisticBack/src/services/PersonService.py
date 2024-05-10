from src.database.db_mysql import get_connection
from src.models.personModel import Person
# from werkzeug.security import generate_password_hash

class PersonService():

    @classmethod
    def get_person(cls):
        try:
            connection=get_connection()
           
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM person')
                result= cursor.fetchall()
                list_person=[Person.convert_from_BD(row) for row in result]
                connection.close()
                return list_person
                
               
        except Exception as ex: 
            print(ex)

    @classmethod
    def post_person(cls, person: Person):
        try:
            connection=get_connection()
            with connection.cursor() as cursor:
                
                first_name = person.first_name
                last_name = person.last_name
                birth_date = person.birth_date
                country = person.country
                diagnosed = person.diagnosed
                email = person.email
                
                cursor.callproc("InsertPerson", (first_name, last_name, birth_date, country,diagnosed, email))
                connection.commit()
                connection.close()
                return 'Persona agregada correctamente'
               
        except Exception as ex: 
            print(ex)

    @classmethod
    def delete_person(cls, id_person):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                cursor.callproc("DeletePerson", (id_person,))
                connection.commit()
            connection.close()
            return 'persona eliminado correctamente'
        except Exception as ex:
            print(ex)

    @classmethod
    def put_person(cls, id_person, person: Person):
        try:
             connection = get_connection()
             with connection.cursor() as cursor:
                
                first_name = person.first_name
                last_name = person.last_name
                birth_date = person.birth_date
                country = person.country
                diagnosed = person.diagnosed
                email = person.email
              
                cursor.callproc("UpdatePerson", (id_person, first_name, last_name, birth_date, country,diagnosed,email))
                connection.commit()
             connection.close()
             return 'Persona actualizada correctamente'
        except Exception as ex:
               print(ex)
     
   