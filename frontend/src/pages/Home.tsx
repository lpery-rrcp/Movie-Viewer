import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api.ts";
import type { Movie } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = (e: any) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="search form">
          <input
            type="text"
            placeholder="Search for movies ..."
            className="search input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search btn">
            Search
          </button>
        </form>

        <div className="Movie grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  url={movie.poster_path}
                  release_date={movie.release_date}
                />
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
