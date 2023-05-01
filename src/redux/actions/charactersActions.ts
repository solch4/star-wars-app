import axios from "axios";
import { Dispatch } from "redux";
import {
  ApiCharacter,
  Character,
  CharactersAction,
  CharactersActionTypes,
} from "../types/charactersTypes";
import { ApiFilm } from "../types/filmsTypes";

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
