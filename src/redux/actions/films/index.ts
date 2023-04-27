import axios from "axios";
import { Dispatch } from "redux";
import { FilmsActionTypes } from "../../types/films";

export interface Film {
  id: string;
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
    const {
      data: { results },
    } = await axios.get("/films");

    const payload: Film[] = results.map((film: any) => {
      // el episode_id es el n° de episodio, no el id del film, por lo que lo extraigo de la url
      const urlParts = film.url.split("/");
      const id = urlParts[urlParts.length - 2];
      return {
        id,
        title: film.title,
        episode: film.episode_id,
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
