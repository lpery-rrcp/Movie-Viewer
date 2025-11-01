import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <>
        <h2>Your Favorites</h2>
        <div className="">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              url={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <h2>No Favorite movies yet...</h2>
        <p>Start adding movies</p>
      </div>
    </>
  );
}

export default Favorite;
