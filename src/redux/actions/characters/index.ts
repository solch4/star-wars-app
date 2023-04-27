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

export type CharactersAction =
  | GetCharactersAction
  | GetCharactersSuccessAction
  | GetCharactersErrorAction;

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

export const getCharacters =
  (filmId: string | undefined) =>
  async (dispatch: Dispatch<CharactersAction>) => {
    dispatch({ type: CharactersActionTypes.GET_CHARACTERS });
    try {
      const { data } = await axios.get<ApiFilm>(`/films/${filmId}`);

      const characters: Character[] = [];
      for (const character of data.characters) {
        const { data } = await axios.get<ApiCharacter>(character);
        characters.push({
          id: data.url,
          name: data.name,
          eyeColor: data.eye_color,
          gender: data.gender,
        });
      }

      dispatch({
        type: CharactersActionTypes.GET_CHARACTERS_SUCCESS,
        payload: characters,
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
