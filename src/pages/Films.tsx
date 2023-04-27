import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { State } from "../redux";
import { getFilms } from "../redux/actions/films";

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
      {films.map((film) => (
        <Fragment key={film.id}>
          <h2>{film.title}</h2>
          <p>Episode #{film.episode}</p>
          <p>Director: {film.director}</p>
        </Fragment>
      ))}
    </>
  );
};

export default Films;
