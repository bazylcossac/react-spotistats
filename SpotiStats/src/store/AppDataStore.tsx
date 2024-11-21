import { create } from "zustand";
import { getCookieValue } from "../Tools/Tools";

type TAppDataStore = {
  token: string | undefined;
  term: string;
  paramsValue: string;
  setToken: (token: string) => void;
  setTerm: (term: string) => void;
  setParamsValue: (term: string) => void;
};

export const useAppDataStore = create<TAppDataStore>((set) => ({
  token: getCookieValue("token"),
  term: "short_term",
  paramsValue: "",
  setToken: (token: string) => {
    set(() => ({ token: token }));
  },
  setTerm: (term: string) => {
    set(() => ({ term: term }));
  },
  setParamsValue: (value: string) => {
    set(() => ({ paramsValue: value }));
  },
}));
