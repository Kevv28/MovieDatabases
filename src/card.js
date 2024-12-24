import React, { useState } from "react";

const MovieCard = ({ movie, rating, image, imdbUrl }) => {
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="movie-card">
      <img
        src={imageError ? "https://via.placeholder.com/150" : image}
        alt={movie}
        onError={handleImageError}
        className="movie-image"
      />
      <h2>{movie}</h2>
      <p>Rating: {rating}</p>
      <a href={imdbUrl} target="_blank" rel="noopener noreferrer">
        View on IMDb
      </a>
    </div>
  );
};

export default MovieCard;
