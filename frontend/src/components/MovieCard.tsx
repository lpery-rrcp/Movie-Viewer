interface MovieCardProps {
  title: string;
  url: string;
  release_date: string;
}

function MovieCard({ title, url, release_date }: MovieCardProps) {
  function onFavoriteClick() {
    alert("Clicked");
  }

  return (
    <>
      <div className="">
        <div className="">
          <img src={`https://image.tmdb.org/t/p/w500${url}`} alt={title} />
          <div className="">
            <button className="Favorite-BTN" onClick={onFavoriteClick}>
              🤍
            </button>
          </div>
        </div>
      </div>

      <div className="Movie info">
        <h3>{title}</h3>
        <p>{release_date?.split("-")[0]}</p>
      </div>
    </>
  );
}

export default MovieCard;
