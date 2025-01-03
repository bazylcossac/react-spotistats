import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MainPageNav from "./MainPageNav";
import { useUserTopData } from "../api/getUsersTopData";
import { useUserPlaylist } from "../api/getUserPlaylists";

import { useAppDataStore } from "../store/AppDataStore";
import { userPlaylistViewMode } from "../viewModeData/MainPage/userPlaylists";
import { resultsViewMode } from "../viewModeData/MainPage/results";
import ViewModePopUp from "./ViewModePopUp";

const MainPage = () => {
  const viewMode = JSON.parse(sessionStorage.getItem("viewMode")!);

  const token = useAppDataStore((state) => state.token);
  const term = useAppDataStore((state) => state.term);
  const setTerm = useAppDataStore((state) => state.setTerm);
  const showViewModePopUp = useAppDataStore((state) => state.showViewModePopUp);
  const setShowViewModePopUp = useAppDataStore(
    (state) => state.setShowViewModePopUp
  );

  const results = viewMode
    ? resultsViewMode
    : useUserTopData(["artists", "tracks"], 9, term, token);
  const { userPlaylists, playlistLoading, isError } = useUserPlaylist(token);

  const playlists = viewMode ? userPlaylistViewMode : userPlaylists?.data.items;
  const handleTermChange = (event) => {
    const { value } = event.target;
    setTerm(value);
  };

  const contextValues = {
    results,
    playlists,
    playlistLoading,
  };

  return (
    <div className="mt-16">
      {showViewModePopUp && viewMode && (
        <ViewModePopUp closePopUp={setShowViewModePopUp} />
      )}
      <MainPageNav
        handleTermChange={(event) => handleTermChange(event)}
        term={term}
      />
      <Outlet context={contextValues} />
    </div>
  );
};

export default MainPage;
