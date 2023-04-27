import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { State } from "../redux";
import { getFilms } from "../redux/actions/films";
import FilmCard from "../components/FilmCard";

const Films = () => {
  const dispatch = useAppDispatch();
  const { films, error, loading } = useSelector((state: State) => state.films);

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading films...</h1>;

  return (
    <>
      <h1>Films</h1>
      {films.length &&
        films.map((film) => <FilmCard key={film.id} {...film} />)}
    </>
  );
};

export default Films;
