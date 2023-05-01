import axios from "axios";
import { Dispatch } from "redux";
import {
  ApiFilm,
  Film,
  FilmsAction,
  FilmsActionTypes,
} from "../types/filmsTypes";

export const getFilms = () => async (dispatch: Dispatch<FilmsAction>) => {
  dispatch({ type: FilmsActionTypes.GET_FILMS });
  try {
    const {
      data: { results },
    } = await axios.get<{ results: ApiFilm[] }>("/films");

    const payload: Film[] = results.map((film) => {
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
  } catch (error: any) {
    console.log(error);
    dispatch({
      type: FilmsActionTypes.GET_FILMS_ERROR,
      payload: error.response?.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
