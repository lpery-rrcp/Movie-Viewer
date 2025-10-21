import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "John wick", release_date: "2020" },
    { id: 2, title: "Wicked", release_date: "2025" },
    { id: 3, title: "One Piece", release_date: "1997" },
    { id: 4, title: "Snow White", release_date: "1930" },
  ];

  return (
    <>
      <div className="">
        <div className="Movie grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              url=""
              release_date={movie.release_date}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
