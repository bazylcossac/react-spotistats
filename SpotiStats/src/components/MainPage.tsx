import React, { useState, useEffect, useRef } from "react";

import { Outlet } from "react-router-dom";

import MainPageNav from "./MainPageNav";
import { useUserTopData } from "../api/getUsersTopData";
import getUserPlaylists from "../api/getUserPlaylists";
import {
  TopArtistsType,
  TopTracksType,
  UserPlaylistsType,
} from "../types/AllPageTypes";
import { useAppDataStore } from "../store/AppDataStore";
import { AxiosResponse } from "axios";
import { UseQueryResult } from "@tanstack/react-query";

type TOutletContext = {
  results: UseQueryResult<
    AxiosResponse<number, Record<string, Object>> | undefined,
    Error
  >[];
  userPlaylists: UserPlaylistsType[] | null;
};

const MainPage = () => {
  const term = useAppDataStore((state) => state.term);
  const setTerm = useAppDataStore((state) => state.setTerm);

  const results = useUserTopData(["artists", "tracks"], 9, term);
  console.log(results);
  const [userPlaylists, setUserPlaylists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userPlaylists = await getUserPlaylists();
      setUserPlaylists(userPlaylists?.data.items);
    };

    fetchData();
  }, [term]);

  const handleTermChange = (event) => {
    const { name, value } = event.target;
    setTerm(value);
  };

  const contextValues: TOutletContext = {
    results,
    userPlaylists,
  };

  return (
    <div className="mt-16">
      <MainPageNav
        handleTermChange={() => handleTermChange(event)}
        term={term}
      />
      <Outlet context={contextValues} />
    </div>
  );
};

export default MainPage;
