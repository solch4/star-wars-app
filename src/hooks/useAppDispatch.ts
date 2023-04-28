import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { State } from "../redux";
import { FilmsAction } from "../redux/actions/films";
import { CharactersAction } from "../redux/actions/characters";

export const useAppDispatch = () => {
  const dispatch =
    useDispatch<ThunkDispatch<State, null, Action<FilmsAction | CharactersAction>>>();
  return dispatch;
};
