import React, { useState, useEffect, useRef } from "react";

import { Outlet } from "react-router-dom";

import MainPageNav from "./MainPageNav";
import getUsersTopData from "../api/getUsersTopData";
import getUserPlaylists from "../api/getUserPlaylists";
import {
  TopArtistsType,
  TopTracksType,
  UserPlaylistsType,
} from "../types/AllPageTypes";

type TOutletContext = {
  topArtists: TopArtistsType[] | null;
  topTracks: TopTracksType[] | null;
  loading: boolean;
  userPlaylists: UserPlaylistsType[] | null;
};

const MainPage = () => {
  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState(null);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState({ name: "short_term" });

  useEffect(() => {
    const fetchData = async () => {
      const userArtists = await getUsersTopData("artists", 9, term);
      const userTracks = await getUsersTopData("tracks", 9, term);
      const userPlaylists = await getUserPlaylists();
      setTopArtists(userArtists?.data.items);
      setTopTracks(userTracks?.data.items);
      setUserPlaylists(userPlaylists?.data.items);
      setLoading(false);
    };

    fetchData();
  }, [term]);

  const handleTermChange = (event) => {
    const { name, value } = event.target;
    setTerm({ name: value });
  };

  const contextValues: TOutletContext = {
    topArtists,
    topTracks,
    loading,
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