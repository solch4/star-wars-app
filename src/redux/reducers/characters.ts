import { Character, CharactersAction } from "../actions/characters";
import { CharactersActionTypes } from "../types/characters";

interface initialStateI {
  characters: Character[];
  eyeColors: string[];
  genders: string[];
  filmTitle: string;
  loading: boolean;
  error: string;
}

const initialState: initialStateI = {
  characters: [],
  eyeColors: [],
  genders: [],
  filmTitle: "",
  loading: false,
  error: "",
};

const charactersReducer = (state = initialState, action: CharactersAction) => {
  switch (action.type) {
    case CharactersActionTypes.GET_CHARACTERS:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case CharactersActionTypes.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload,
      };
    case CharactersActionTypes.GET_CHARACTERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CharactersActionTypes.GET_GENDERS_SUCCESS:
      return {
        ...state,
        genders: action.payload,
      };
    case CharactersActionTypes.GET_EYE_COLORS_SUCCESS:
      return {
        ...state,
        eyeColors: action.payload,
      };
    case CharactersActionTypes.GET_FTLM_TITLE_SUCCESS:
      return {
        ...state,
        filmTitle: action.payload,
      };
    default:
      return state;
  }
};

export default charactersReducer;
