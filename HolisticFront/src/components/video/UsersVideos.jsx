import React, { useState } from 'react';
import './usersVideos.css';

const UsersVideos = () => {
  const videos = [
    {
      id: 1,
      title: "Video 1",
      description: "Descripción del Video 1",
      link: "https://www.youtube.com/watch?v=-wR20fVNlKg",
      thumbnail: "https://img.youtube.com/vi/example1/0.jpg",
      category: "Pilates"
    },
    {
      id: 2,
      title: "Video 2",
      description: "Descripción del Video 2",
      link: "https://www.youtube.com/watch?v=example2",
      thumbnail: "https://img.youtube.com/vi/example2/0.jpg",
      category: "Yoga"
    },
    {
        id: 3,
        title: "Video 1",
        description: "Descripción del Video 1",
        link: "https://www.youtube.com/watch?v=example1",
        thumbnail: "https://img.youtube.com/vi/example1/0.jpg",
        category: "Pilates"
      },
      {
        id: 4,
        title: "Video 1",
        description: "Descripción del Video 1",
        link: "https://www.youtube.com/watch?v=example1",
        thumbnail: "https://img.youtube.com/vi/example1/0.jpg",
        category: "Pilates"
      },
      {
        id: 5,
        title: "Video 1",
        description: "Descripción del Video 1",
        link: "https://www.youtube.com/watch?v=example1",
        thumbnail: "https://img.youtube.com/vi/example1/0.jpg",
        category: "Pilates"
      },
      {
        id: 6,
        title: "Video 1",
        description: "Descripción del Video 1",
        link: "https://www.youtube.com/watch?v=example1",
        thumbnail: "https://img.youtube.com/vi/example1/0.jpg",
        category: "Pilates"
      },
      {
        id: 7,
        title: "Video 1",
        description: "Descripción del Video 1",
        link: "https://www.youtube.com/watch?v=example1",
        thumbnail: "https://img.youtube.com/vi/example1/0.jpg",
        category: "Pilates"
      }

  ];

  const categories = ["Pilates", "Yoga"];
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
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
    <div className="users-videos">
      <h1>Rutinas de Ejercicios</h1>
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
      <div className="videos">
        {filteredVideos.map((video) => (
          <div key={video.id} className="video-card">
            <h3>{video.title}</h3>
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <p>{video.description}</p>
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <button>Ver Video</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersVideos;