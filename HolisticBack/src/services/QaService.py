from src.database.db_mysql import get_connection
from src.models.qaModel import Qa


class QaService():

    @classmethod
    def get_qa(cls):
        try:
            connection=get_connection()
           
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM qa')
                result= cursor.fetchall()
                list_qa=[Qa.convert_from_BD(row) for row in result]
                connection.close()
                return list_qa
                
               
        except Exception as ex: 
            print(ex)

    @classmethod
    def post_qa(cls, qa: Qa):
        try:
            connection=get_connection()
        
            with connection.cursor() as cursor:
                id_qa = qa.id_qa
                question = qa.question
                answer = qa.answer
                

                cursor.execute("INSERT INTO qa (id_qa, question, answer) VALUES ('{0}', '{1}', '{2} ');".format(id_qa, question, answer))
                connection.commit()
                connection.close()
                return 'Pregunta agregada correctamente'
               
        except Exception as ex: 
            print(ex)

    @classmethod
    def delete_qa(cls, id_qa):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                cursor.callproc("DeleteQa", (id_qa,))
                connection.commit()
            connection.close()
            return 'Pregunta eliminada correctamente'
        except Exception as ex:
            print(ex)

    @classmethod
    def put_qa(cls, id_qa, qa: Qa):
        try:
             connection = get_connection()
             with connection.cursor() as cursor:
              id_qa = qa.id_qa
              question = qa.question
              answer=qa.answer
              
              cursor.callproc("UpdateQa", (id_qa, question, answer))
              connection.commit()
             connection.close()
             return 'Pregunta actualizada correctamente'
        except Exception as ex:
               print(ex)
     
   