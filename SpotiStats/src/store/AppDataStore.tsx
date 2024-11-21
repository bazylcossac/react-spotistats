import { create } from "zustand";
import { getCookieValue } from "../Tools/Tools";

type TAppDataStore = {
  token: string | undefined;
  term: string;
  setToken: (token: string) => void;
  setTerm: (term: string) => void;
};

export const useAppDataStore = create<TAppDataStore>((set) => ({
  token: getCookieValue("token"),
  term: "short_term",
  setToken: (token: string) => {
    set(() => ({ token: token }));
  },
  setTerm: (term: string) => {
    set(() => ({ term: term }));
  },
}));
