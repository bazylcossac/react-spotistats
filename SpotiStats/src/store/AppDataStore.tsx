import { create } from "zustand";
import { getCookieValue } from "../Tools/Tools";

type TAppDataStore = {
  token: string | undefined;
  setToken: (token: string) => void;
};

export const useAppDataStore = create<TAppDataStore>((set) => ({
  token: getCookieValue("token"),
  setToken: (token: string) => {
    set(() => ({ token: token }));
  },
}));
