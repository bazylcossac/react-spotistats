import { UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { UserPlaylistsType } from "./AllPageTypes";

export type TOutletContext = {
  results: UseQueryResult<
    AxiosResponse<any, Record<string, Object>> | undefined,
    Error
  >[];
  playlists: UserPlaylistsType[] | undefined;

  playlistLoading: boolean;
};
