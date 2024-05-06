import videoService from "../services/videoService";

export const addVideo = async (newVideo, fetchData) => {
  try {
    await videoService.addVideo(newVideo, fetchData);
    alert('Vídeo agregado exitosamente');
  } catch (error) {
    console.error('Error al guardar vídep:', error);
  }
};

export const updateVideo = async (videoId, newVideo, fetchData) => {
    try {
      await videoService.updateVideo(videoId, newVideo, fetchData);
      alert('Vídeo actualizado exitosamente');
    } catch (error) {
      console.error('Error al actualizar vídeo:', error);
    }
  };

  export const handleEdit = (videoId, videos, setNewVideo, setIsEditing) => {
    const videoToEdit = videos.find((video) => video.id_video === videoId);
    setNewVideo({
      ...videoToEdit,
      id_video: videoToEdit.id_video,
    });
    setIsEditing(true);
  };


  export const deleteVideo = async (videoId, fetchData) => {
    try {
      await videoService.deleteVideo(videoId, fetchData);
      alert('Vídeo eliminado exitosamente');
    } catch (error) {
      console.error('Error al eliminar vídeo:', error);
    }
  };
