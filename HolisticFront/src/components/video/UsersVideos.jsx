import React, { useState } from 'react';
import './usersVideos.css';

const UsersVideos = () => {
  const videos = [
    {
      id: 1,
      description: "DAY 1 - PCOS WORKOUT",
      link: "https://www.youtube.com/watch?v=-wR20fVNlKg",
      thumbnail: "https://res-console.cloudinary.com/dxvsn6u72/thumbnails/v1/image/upload/v1716193560/b3ZpdmEvbXRrd3hucXNxb2E0M3hoYWtvb24=/drilldown",
      category: "Pilates"
    },
    {
      id: 2,
      description: "DAY 2 - PCOS WORKOUT",
      link: "https://www.youtube.com/watch?v=NPww7dqI53Y",
      thumbnail: "https://res-console.cloudinary.com/dxvsn6u72/thumbnails/v1/image/upload/v1716193559/b3ZpdmEvYjg3cXJkajRyeG4zdjZxbmpyanE=/drilldown",
      category: "Yoga"
    },
    {
        id: 3,
        description: "DAY 3 - PCOS WORKOUT",
        link: "https://www.youtube.com/watch?v=P7NFZ26NWuA",
        thumbnail: "https://res-console.cloudinary.com/dxvsn6u72/thumbnails/v1/image/upload/v1716193559/b3ZpdmEvdzBxaHZiZW54M3hqYWdhcnZtMGI=/drilldown",
        category: "Pilates"
      },
      {
        id: 4,
        description: "DAY 4 - PCOS WORKOUT",
        link: "https://www.youtube.com/watch?v=nj7CILDBpqc",
        thumbnail: "https://res-console.cloudinary.com/dxvsn6u72/thumbnails/v1/image/upload/v1716193559/b3ZpdmEvbzFybGQ2YzVkYXRpY3Azb29jbmM=/drilldown",
        category: "Pilates"
      },
      {
        id: 5,
        description: "DAY 5 - PCOS WORKOUT",
        link: "https://www.youtube.com/watch?v=4CSs8sZaHzo",
        thumbnail: "https://res-console.cloudinary.com/dxvsn6u72/thumbnails/v1/image/upload/v1716193559/b3ZpdmEvZnlpY2kzd2JtOHFqazd2a3BiaGU=/drilldown",
        category: "Pilates"
      },
      {
        id: 6,
        description: "DAY 6 - PCOS WORKOUT",
        link: "https://www.youtube.com/watch?v=p6cY5Wejx1o",
        thumbnail: "https://res-console.cloudinary.com/dxvsn6u72/thumbnails/v1/image/upload/v1716193559/b3ZpdmEvdTJoYW9maW5iNHdkY3dobDdvNGw=/drilldown",
        category: "Pilates"
      },
      {
        id: 7,
        description: "DAY 7 - PCOS WORKOUT",
        link: "https://www.youtube.com/watch?v=lW6TvSeWfnk&t=391s",
        thumbnail: "https://res-console.cloudinary.com/dxvsn6u72/thumbnails/v1/image/upload/v1716193559/b3ZpdmEvbGFhd2U5dm52Ynhua2pzcXZqYWI=/drilldown",
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
      <h1 className='title-video'>Vídeos</h1>
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
            <h3 className='second-title'>{video.title}</h3>
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <p className='style-text'>{video.description}</p>
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <button className='style-button-see'>Ver Video</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersVideos;