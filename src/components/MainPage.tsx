import React from "react";
import { Outlet } from "react-router-dom";
import MainPageNav from "./MainPageNav";
import { useUserTopData } from "../api/getUsersTopData";
import { useUserPlaylist } from "../api/getUserPlaylists";
import { TOutletContext } from "../types/OutletContextType";
import { useAppDataStore } from "../store/AppDataStore";

const MainPage = () => {
  const token = useAppDataStore((state) => state.token);
  const term = useAppDataStore((state) => state.term);
  const setTerm = useAppDataStore((state) => state.setTerm);
  const results = useUserTopData(["artists", "tracks"], 9, term, token);
  const { userPlaylists, playlistLoading, isError } = useUserPlaylist(token);
  const playlists = userPlaylists?.data.items;
  const handleTermChange = (event) => {
    const { value } = event.target;
    setTerm(value);
  };

  const contextValues: TOutletContext = {
    results,
    playlists,
    playlistLoading,
  };

  return (
    <div className="mt-16">
      <MainPageNav
        handleTermChange={(event) => handleTermChange(event)}
        term={term}
      />
      <Outlet context={contextValues} />
    </div>
  );
};

export default MainPage;
