import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { getCharacters } from "../redux/actions/charactersActions";

export const useCharacters = () => {
  const { filmId } = useParams();
  const dispatch = useAppDispatch();
  const charactersState = useAppSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters(filmId));
  }, [dispatch, filmId]);

  return charactersState;
};
