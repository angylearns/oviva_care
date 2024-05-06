import React, { useState, useEffect } from "react";
import "./videoList.css";
import { 
    addVideo,
    updateVideo,
    handleEdit,
    deleteVideo,
} from "../../handlers/videoHandle";
import videoService from "../../services/videoService";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [newVideo, setNewVideo] = useState({
    id_video:"",
    title: "",
    link: "",
    category: ""
  });

  const categories = ["Pilates", "Yoga"];

  const [isEditing, setIsEditing] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [videoToDelete, setVideoToDelete] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const videosData = await videoService.getAllVideos();
      videosData.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setVideos(videosData);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newVideo.id_video) {
        await updateVideo(newVideo.id_video, newVideo, fetchData);
      } else {
        await addVideo(newVideo, fetchData);
      }
      setNewVideo({
        id_video:"",
        title: "",
        link: "",
        category: ""
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving video:", error);
    }
  };

  const handleEditClick = (videoId) => {
    handleEdit(videoId, videos, setNewVideo, setIsEditing);
  };

  const handleDelete = async (videoId) => {
    setVideoToDelete(videoId);
  };

  const confirmDelete = async () => {
    if (videoToDelete) {
      await deleteVideo(videoToDelete, fetchData);
      setVideoToDelete(null); 
    }
  };

  const handleCancelDelete = () => {
    setVideoToDelete(null);
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleAddVideo = async () => {
    try {
      await addVideo(newVideo, fetchData);
      setNewVideo({ id_video: "", title: "", link: "", category: "" });
    } catch (error) {
      console.error("Error adding video:", error);
    }
  };

  const filterVideosByCategory = (videos, selectedCategories) => {
    if (selectedCategories.length === 0) {
      return videos;
    }
    return videos.filter((video) => selectedCategories.includes(video.category));
  };

  const filteredVideos = filterVideosByCategory(videos, selectedCategories);

  return (
    <div className="video-list">
      <h1>Lista de Vídeos</h1>
      <div className="categories">
        {categories.map((category) => (
          <div key={category} className="category">
            <input
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
      <div className="add-video-form">
        <h2>Añadir Nuevo Video</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Título:
            <input
              type="text"
              value={newVideo.title}
              onChange={(e) =>
                setNewVideo({ ...newVideo, title: e.target.value })
              }
              required
            />
          </label>
          <br />
          <label>
            Enlace:
            <input
              type="text"
              value={newVideo.link}
              onChange={(e) => setNewVideo({ ...newVideo, link: e.target.value })}
              required
            />
          </label>
          <br />
          <label>
            Categoría:
            <select
              value={newVideo.category}
              onChange={(e) =>
                setNewVideo({ ...newVideo, category: e.target.value })
              }
              required
            >
              <option value="">Seleccionar categoría</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <br />
          <button type="submit">{isEditing ? 'Actualizar Video' : 'Añadir Video'}</button>
        </form>
      </div>
      <div className="videos">
        {filteredVideos.map((video) => (
          <div key={video.id_video} className="video-card">
            <h3>{video.title}</h3>
            <video controls>
              <source src={video.link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-actions">
              <button onClick={() => handleDelete(video.id_video)}>
                Eliminar
              </button>
              <button onClick={() => handleEditClick(video.id_video)}>
                Editar
              </button>
            </div>
          </div>
        ))}
      </div>
      {videoToDelete && (
        <div className="confirmation-dialog">
          <p>¿Está seguro de que quiere eliminar este vídeo?</p>
          <p>Todos los datos serán borrados y no podrá volver a recuperarlos.</p>
          <div>
            <button onClick={confirmDelete}>Sí, quiero borrarlo</button>
            <button onClick={handleCancelDelete}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoList;

