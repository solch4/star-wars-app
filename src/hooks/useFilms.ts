import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { getFilms } from "../redux/actions/filmsActions";

export const useFilms = () => {
  const dispatch = useAppDispatch();
  const { films, error, loading } = useAppSelector((state) => state.films);

  useEffect(() => {
    if (!films.length) dispatch(getFilms());
  }, [dispatch, films.length]);

  return { films, error, loading };
};
