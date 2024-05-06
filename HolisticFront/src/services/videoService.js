import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5001';

const videoService = {
  getAllVideos: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/video`);
      return response.data;
    } catch (error) {
      console.error('Error fetching videos:', error);
      throw error;
    }
  },

  addVideo: async (newVideo, fetchData) => {
    try {
      await axios.post(`${API_BASE_URL}/video/`, newVideo);
      alert('Vídeo agregado con éxito');
      fetchData();
    } catch (error) {
      console.error('Error al añadir el vídeo:', error);
    }
  },

  updateVideo: async (videoId, newVideo, fetchData) => {
    try {
      await axios.put(`${API_BASE_URL}/video/${videoId}`, newVideo);
      alert('vídeo actualizado con éxito');
      fetchData();
    } catch (error) {
      console.error('Error al actualizar el vídeo:', error);
    
    }
  },

  deleteVideo: async (videoId, fetchData) => {
    try {
      await axios.delete(`${API_BASE_URL}/video/${videoId}`);
    } catch (error) {
      console.error('Error al eliminar el vídeo:', error);
    
    }
  },
};

export default videoService;
