import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John wick", release_date: "2020" },
    { id: 2, title: "Wicked", release_date: "2025" },
    { id: 3, title: "One Piece", release_date: "1997" },
    { id: 4, title: "Snow White", release_date: "1930" },
  ];

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
              movie.title
                .toLowerCase()
                .startsWith(searchQuery.toLowerCase()) && (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  url=""
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
