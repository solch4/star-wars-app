import { useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import CharacterCard from "../components/CharacterCard";
import FilterDropdown from "../components/FilterDropdown";

type SelectElement = React.ChangeEvent<HTMLSelectElement>;
type SetStringState = React.Dispatch<React.SetStateAction<string>>;

const Characters = () => {
  const { characters, error, loading, genders, eyeColors, filmTitle } =
    useCharacters();

  const [selectedGender, setSelectedGender] = useState("");
  const [selectedEyeColor, setSelectedEyeColor] = useState("");

  const handleClearFilters = () => {
    setSelectedEyeColor("");
    setSelectedGender("");
  };

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading characters...</h1>;
  if (!characters.length) return null;

  const filteredCharacters = characters.filter((character) => {
    // si no tengo o no coincide con selectedGender (mientras no quiera todos) => no lo agrego
    if (
      selectedGender &&
      selectedGender !== "all" &&
      character.gender !== selectedGender
    ) {
      return false;
    }
    // si no tengo o no coincide con selectedEyeColor (mientras no quiera todos) => no lo agrego
    if (
      selectedEyeColor &&
      selectedEyeColor !== "all" &&
      character.eyeColor !== selectedEyeColor
    ) {
      return false;
    }
    // agrego el resto
    return true;
  });

  const handleChange = (fn: SetStringState) => (e: SelectElement) =>
    fn(e.target.value);

  return (
    <>
      <h1>Characters in {filmTitle}</h1>
      <div className="characters-filters">
        <h3>Filters</h3>
        <div className="characters-filters-content">
          <FilterDropdown
            label="Gender"
            options={genders}
            value={selectedGender}
            onChange={handleChange(setSelectedGender)}
          />
          <FilterDropdown
            label="Eye color"
            options={eyeColors}
            value={selectedEyeColor}
            onChange={handleChange(setSelectedEyeColor)}
          />
          <button
            className="characters-filters-clear-btn"
            onClick={handleClearFilters}
          >
            Clear filters
          </button>
        </div>
      </div>
      <div className="cards">
        {filteredCharacters.length ? (
          filteredCharacters.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))
        ) : (
          <p>No characters found</p>
        )}
      </div>
    </>
  );
};

export default Characters;
