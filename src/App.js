import React, { useState, useEffect } from "react";
import MovieCard from "./card";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://dummyapi.online/api/movies");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="app">
      <h1>Movie List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie.movie}
              rating={movie.rating}
              image={movie.image}
              imdbUrl={movie.imdb_url} // Access IMDb URL from API
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
