import { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { getCharacters } from "../redux/actions/characters";
import { State } from "../redux";

const Characters = () => {
  const { filmId } = useParams();
  const dispatch = useAppDispatch();
  const { characters, error, loading } = useSelector((state: State) => state.characters);

  useEffect(() => {
    dispatch(getCharacters(filmId));
  }, [dispatch, filmId]);

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading characters...</h1>;

  return (
    <>
      <h1>Characters</h1>
      {characters.length && characters.map((character) => (
        <Fragment key={character.id}>
          <h2>{character.name}</h2>
          <p>Eye color: {character.eyeColor}</p>
          <p>Gender: {character.gender}</p>
        </Fragment>
      ))}
    </>
  )
};

export default Characters;
