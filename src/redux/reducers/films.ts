import { FilmsAction, FilmsActionTypes, FilmsState } from "../types/filmsTypes";

const initialState: FilmsState = {
  films: [],
  loading: false,
  error: "",
};

const filmsReducer = (state = initialState, action: FilmsAction) => {
  switch (action.type) {
    case FilmsActionTypes.GET_FILMS:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FilmsActionTypes.GET_FILMS_SUCCESS:
      return {
        ...state,
        loading: false,
        films: action.payload,
      };
    case FilmsActionTypes.GET_FILMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default filmsReducer;
