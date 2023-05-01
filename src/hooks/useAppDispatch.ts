import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { State } from "../redux";
import { FilmsAction } from "../redux/types/filmsTypes";
import { CharactersAction } from "../redux/types/charactersTypes";

export const useAppDispatch = () => {
  const dispatch =
    useDispatch<ThunkDispatch<State, null, Action<FilmsAction | CharactersAction>>>();
  return dispatch;
};
