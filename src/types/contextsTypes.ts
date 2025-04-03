import { Context, Dispatch, SetStateAction } from "react";

export interface pathNametype<T> {
  pathname: string;
  setPath: Dispatch<SetStateAction<T>>;
}

export type pathNameContext = Context<pathNametype<string>>
