import { Character, CharactersAction } from "../actions/characters";
import { CharactersActionTypes } from "../types/characters";

interface initialStateI {
  characters: Character[];
  loading: boolean;
  error: string;
}

const initialState: initialStateI = {
  characters: [],
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
    default:
      return state;
  }
};

export default charactersReducer;
