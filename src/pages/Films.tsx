import { useEffect } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { getFilms } from "../redux/actions/filmsActions";
import FilmCard from "../components/FilmCard";

const Films = () => {
  const dispatch = useAppDispatch();
  const { films, error, loading } = useAppSelector((state) => state.films);

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

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
