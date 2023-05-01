export enum FilmsActionTypes {
  GET_FILMS = "GET_FILMS",
  GET_FILMS_SUCCESS = "GET_FILMS_SUCCESS",
  GET_FILMS_ERROR = "GET_FILMS_ERROR"
}

export interface Film {
  id: string;
  title: string;
  episode: number;
  director: string;
}

export interface ApiFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface FilmsState {
  films: Film[];
  loading: boolean;
  error: string;
}

export interface GetFilmsAction {
  type: FilmsActionTypes.GET_FILMS;
}

export interface GetFilmsSuccessAction {
  type: FilmsActionTypes.GET_FILMS_SUCCESS;
  payload: Film[];
}

export interface GetFilmsErrorAction {
  type: FilmsActionTypes.GET_FILMS_ERROR;
  payload: string;
}

export type FilmsAction =
  | GetFilmsAction
  | GetFilmsSuccessAction
  | GetFilmsErrorAction;
