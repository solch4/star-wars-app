import axios from "axios";
import { Dispatch } from "redux";
import { CharactersActionTypes } from "../../types/characters";

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
  payload: any;
}

export type CharactersAction =
  | GetCharactersAction
  | GetCharactersSuccessAction
  | GetCharactersErrorAction;

export const getCharacters =
  (filmId: string | undefined) =>
  async (dispatch: Dispatch<CharactersAction>) => {
    dispatch({ type: CharactersActionTypes.GET_CHARACTERS });
    try {
      const { data } = await axios.get(`/films/${filmId}`);

      const characters: Character[] = [];
      
      for (const character of data.characters) {
        const { data } = await axios.get(character);
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
    } catch (error) {
      console.log(error);
      dispatch({
        type: CharactersActionTypes.GET_CHARACTERS_ERROR,
        payload: error,
      });
    }
  };
