import { combineReducers } from "redux";
import filmsReducer from "./films";

const rootReducer = combineReducers({
  films: filmsReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
