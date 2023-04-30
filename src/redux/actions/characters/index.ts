import axios from "axios";
import { Dispatch } from "redux";
import { CharactersActionTypes } from "../../types/characters";
import { ApiFilm } from "../films";

export interface Character {
  id: string;
  name: string;
  eyeColor: string;
  gender: string;
}

interface GetCharactersAction {
  type: CharactersActionTypes.GET_CHARACTERS;
}

interface GetCharactersSuccessAction {
  type: CharactersActionTypes.GET_CHARACTERS_SUCCESS;
  payload: Character[];
}

interface GetCharactersErrorAction {
  type: CharactersActionTypes.GET_CHARACTERS_ERROR;
  payload: string;
}

interface GetEyeColorsSuccessAction {
  type: CharactersActionTypes.GET_EYE_COLORS_SUCCESS;
  payload: string[];
}

interface GetGenderSuccessAction {
  type: CharactersActionTypes.GET_GENDERS_SUCCESS;
  payload: string[];
}

interface GetFilmTitleSuccessAction {
  type: CharactersActionTypes.GET_FTLM_TITLE_SUCCESS;
  payload: string;
}

export type CharactersAction =
  | GetCharactersAction
  | GetCharactersSuccessAction
  | GetCharactersErrorAction
  | GetEyeColorsSuccessAction
  | GetGenderSuccessAction
  | GetFilmTitleSuccessAction;

interface ApiCharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

const getCharacter = async (characterUrl: string): Promise<Character> => {
  const { data } = await axios.get<ApiCharacter>(characterUrl);
  return {
    id: data.url,
    name: data.name,
    eyeColor: data.eye_color,
    gender: data.gender,
  };
};

const getUniqueValues = (list: Character[], key: keyof Character): string[] => {
  const valueSet = new Set(list.map((item) => item[key]));
  return [...valueSet];
};

export const getCharacters =
  (filmId: string | undefined) =>
  async (dispatch: Dispatch<CharactersAction>) => {
    dispatch({ type: CharactersActionTypes.GET_CHARACTERS });
    try {
      const { data } = await axios.get<ApiFilm>(`/films/${filmId}`);
      const { title: filmTitle, characters: characterUrls } = data;
      const characterPromises = characterUrls.map((url) => getCharacter(url));
      const characters = await Promise.all(characterPromises);

      const genders = getUniqueValues(characters, "gender");
      const eyeColors = getUniqueValues(characters, "eyeColor");

      dispatch({
        type: CharactersActionTypes.GET_CHARACTERS_SUCCESS,
        payload: characters,
      });

      dispatch({
        type: CharactersActionTypes.GET_EYE_COLORS_SUCCESS,
        payload: eyeColors,
      });

      dispatch({
        type: CharactersActionTypes.GET_GENDERS_SUCCESS,
        payload: genders,
      });

      dispatch({
        type: CharactersActionTypes.GET_FTLM_TITLE_SUCCESS,
        payload: filmTitle,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: CharactersActionTypes.GET_CHARACTERS_ERROR,
        payload: error.response?.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };
