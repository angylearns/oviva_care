from src.database.db_mysql import get_connection
from src.models.videoModel import Video


class VideoService():

    @classmethod
    def get_video(cls):
        try:
            connection=get_connection()
           
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM video')
                result= cursor.fetchall()
                list_video=[Video.convert_from_BD(row) for row in result]
                connection.close()
                return list_video
                
               
        except Exception as ex: 
            print(ex)

    @classmethod
    def post_video(cls, video: Video):
        try:
            connection=get_connection()
        
            with connection.cursor() as cursor:
                id_video = video.id_video
                title = video.title
                link = video.link
                category= video.category
                

                cursor.execute("INSERT INTO video (id_video, title, link, category) VALUES ('{0}', '{1}', '{2} ', '{3}');".format(id_video, title, link, category))
                connection.commit()
                connection.close()
                return 'Video agregado correctamente'
               
        except Exception as ex: 
            print(ex)

    @classmethod
    def delete_video(cls, id_video):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                cursor.callproc("DeleteVideo", (id_video,))
                connection.commit()
            connection.close()
            return 'Video eliminado correctamente'
        except Exception as ex:
            print(ex)

    @classmethod
    def put_video(cls, id_video, video: Video):
        try:
             connection = get_connection()
             with connection.cursor() as cursor:
              title = video.title
              link = video.link
              category=video.category
              
              cursor.callproc("UpdateVideo", (id_video, title, link, category))
              connection.commit()
             connection.close()
             return 'Video actualizado correctamente'
        except Exception as ex:
               print(ex)
     
   