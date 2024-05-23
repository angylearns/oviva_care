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

  addVideo: async (newVideo) => {
    try {
      await axios.post(`${API_BASE_URL}/video/`, newVideo);
    } catch (error) {
      console.error('Error al añadir el vídeo:', error);
      throw error;
    }
  },

  updateVideo: async (videoId, newVideo) => {
    try {
      await axios.put(`${API_BASE_URL}/video/${videoId}`, newVideo);
    } catch (error) {
      console.error('Error al actualizar el vídeo:', error);
      throw error;
    }
  },

  deleteVideo: async (videoId) => {
    try {
      await axios.delete(`${API_BASE_URL}/video/${videoId}`);
    } catch (error) {
      console.error('Error al eliminar el vídeo:', error);
      throw error;
    }
  },
};

export default videoService;

