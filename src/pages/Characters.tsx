import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { getCharacters } from "../redux/actions/characters";
import { State } from "../redux";
import CharacterCard from "../components/CharacterCard";

const Characters = () => {
  const { filmId } = useParams();
  const dispatch = useAppDispatch();
  const { characters, error, loading } = useSelector(
    (state: State) => state.characters
  );

  useEffect(() => {
    dispatch(getCharacters(filmId));
  }, [dispatch, filmId]);

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading characters...</h1>;

  return (
    <>
      <h1>Characters</h1>
      {characters.length &&
        characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
    </>
  );
};

export default Characters;
