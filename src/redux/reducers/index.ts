import { combineReducers } from "redux";
import filmsReducer from "./films";
import charactersReducer from "./characters";

const rootReducer = combineReducers({
  films: filmsReducer,
  characters: charactersReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
