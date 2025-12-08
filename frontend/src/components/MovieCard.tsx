import { useMovieContext } from "../context/MovieContext";

interface MovieCardProps {
  id: number;
  title: string;
  url: string;
  release_date: string;
}

function MovieCard({ id, title, url, release_date }: MovieCardProps) {
  const { isFavorite, addFavorite, removeFavorite } = useMovieContext();
  const favorite = isFavorite(id);

  function onFavoriteClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (favorite) removeFavorite(id);
    else addFavorite({ id, title, release_date, url });
  }

  return (
    <>
      <div className="card">
        <div className="img-thumbnail">
          <img src={`https://image.tmdb.org/t/p/w200${url}`} alt={title} />
        </div>

        <div className="card-body">
          <h3>{title}</h3>
          <p>{release_date?.split("-")[0]}</p>
        </div>

        <button
          className={`btn ${
            favorite ? "btn-success btn-lg" : "btn-primary btn-sm"
          }`}
          onClick={onFavoriteClick}
          style={
            {
              "--bs-btn-padding-y": ".25rem;",
              "--bs-btn-padding-x": ".5rem;",
              "--bs-btn-font-size": ".75rem;",
            } as any
          }
        >
          🤍
        </button>
      </div>
    </>
  );
}

export default MovieCard;
