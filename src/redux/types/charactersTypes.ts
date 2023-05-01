export enum CharactersActionTypes {
  GET_CHARACTERS = "GET_CHARACTERS",
  GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS",
  GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR",
  GET_EYE_COLORS_SUCCESS = "GET_EYE_COLORS_SUCCESS",
  GET_GENDERS_SUCCESS = "GET_GENDERS_SUCCESS",
  GET_FTLM_TITLE_SUCCESS = "GET_FTLM_TITLE_SUCCESS"
}

export interface Character {
  id: string;
  name: string;
  eyeColor: string;
  gender: string;
}

export interface ApiCharacter {
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

export interface CharactersState {
  characters: Character[];
  eyeColors: string[];
  genders: string[];
  filmTitle: string;
  loading: boolean;
  error: string;
}

export interface GetCharactersAction {
  type: CharactersActionTypes.GET_CHARACTERS;
}

export interface GetCharactersSuccessAction {
  type: CharactersActionTypes.GET_CHARACTERS_SUCCESS;
  payload: Character[];
}

export interface GetCharactersErrorAction {
  type: CharactersActionTypes.GET_CHARACTERS_ERROR;
  payload: string;
}

export interface GetEyeColorsSuccessAction {
  type: CharactersActionTypes.GET_EYE_COLORS_SUCCESS;
  payload: string[];
}

export interface GetGenderSuccessAction {
  type: CharactersActionTypes.GET_GENDERS_SUCCESS;
  payload: string[];
}

export interface GetFilmTitleSuccessAction {
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
