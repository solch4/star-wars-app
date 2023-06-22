import { useFilms } from "../hooks/useFilms";
import FilmCard from "../components/FilmCard";

const Films = () => {
  const { films, error, loading } = useFilms();

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading films...</h1>;

  return (
    <>
      <h1>Films</h1>
      <div className="cards">
        {films.length &&
          films.map((film) => <FilmCard key={film.id} {...film} />)}
      </div>
    </>
  );
};

export default Films;
