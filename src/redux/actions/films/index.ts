import axios from "axios";
import { Dispatch } from "redux";
import { FilmsActionTypes } from "../../types/films";

export interface Film {
  id: number;
  title: string;
  episode: number;
  director: string;
  characters: string[];
}

interface GetFilmsAction {
  type: FilmsActionTypes.GET_FILMS;
}

interface GetFilmsSuccessAction {
  type: FilmsActionTypes.GET_FILMS_SUCCESS;
  payload: Film[];
}

interface GetFilmsErrorAction {
  type: FilmsActionTypes.GET_FILMS_ERROR;
  payload: any;
}

export type FilmsAction =
  | GetFilmsAction
  | GetFilmsSuccessAction
  | GetFilmsErrorAction;

export const getFilms = () => async (dispatch: Dispatch<FilmsAction>) => {
  dispatch({ type: FilmsActionTypes.GET_FILMS });
  try {
    const { data } = await axios.get("/films");

    const payload: Film[] = data.results.map((film: any) => {
      return {
        id: film.episode_id,
        title: film.title,
        episode: film.episode_id, //OJO! cambiar esto más tarde ya que episode_id es solo el id del ep, no el n° de ep
        director: film.director,
        characters: film.characters,
      };
    });

    dispatch({
      type: FilmsActionTypes.GET_FILMS_SUCCESS,
      payload,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: FilmsActionTypes.GET_FILMS_ERROR, payload: error });
  }
};
