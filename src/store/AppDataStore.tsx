import { create } from "zustand";

type TAppDataStore = {
  token: string | null;
  term: string;
  paramsValue: string;
  showViewModePopUp: boolean;
  setToken: (token: string) => void;
  setTerm: (term: string) => void;
  setParamsValue: (term: string) => void;
  setShowViewModePopUp: (value: boolean) => void;
};

export const useAppDataStore = create<TAppDataStore>((set) => ({
  token: localStorage.getItem("access_token"),
  term: "short_term",
  paramsValue: "",
  showViewModePopUp: true,
  setToken: (token: string) => {
    set(() => ({ token: token }));
  },
  setTerm: (term: string) => {
    set(() => ({ term: term }));
  },
  setParamsValue: (value: string) => {
    set(() => ({ paramsValue: value }));
  },
  setShowViewModePopUp: (value: boolean) => {
    set(() => ({ showViewModePopUp: value }));
  },
}));
