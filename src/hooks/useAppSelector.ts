import { TypedUseSelectorHook, useSelector } from "react-redux";
import { State } from "../redux";

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
