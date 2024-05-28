from flask import Blueprint, request, jsonify
from src.services.VideoService import VideoService
from src.models.videoModel import Video

mainVideo = Blueprint('video_blueprint', __name__)


@mainVideo.route('/',methods=['GET'])

def get_video():
    list_video=VideoService.get_video()
    print("Consola: Usuarios obtenidos.")

    return jsonify([video.__dict__ for video in list_video])
    

@mainVideo.route('/',methods=['POST'])

def post_video():

    
    title = request.json ['title']
    link= request.json ['link']
    category=request.json ['category']
    
    video= Video(0,title,link, category)


    if VideoService.post_video(video):
        print('Consola:Video insertado: ', video)
        return 'Video creado.'
    
    return 'Página: Ok'

@mainVideo.route('/<int:id_video>', methods=['PUT'])

def put_video(id_video):
    
    
    title = request.json ['title']
    link= request.json ['link']
    category=request.json ['category']
    

    updatevideo= Video(id_video,title,link, category)
    
   
    VideoService.put_video(id_video, updatevideo)
    print('Consola: Video actualizado: ')
    return 'Página: Video actualizado.'
   
       
@mainVideo.route('/<int:id_video>', methods=['DELETE'])
def delete_video(id_video):       
    VideoService.delete_video(id_video)
    print('Consola: Video eliminado.')
    return 'Página: Video eliminado.'

