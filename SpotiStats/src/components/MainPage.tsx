import React, { useState, useEffect, useRef } from "react";

import { Outlet } from "react-router-dom";

import MainPageNav from "./MainPageNav";
import getUsersTopData from "../api/getUsersTopData";
import getUserPlaylists from "../api/getUserPlaylists";

type TOutletContext = {
  topArtists: Record<string, string | number>[] | null;
  topTracks: Record<string, string | number>[] | null;
  loading: boolean;
  userPlaylists: Record<string, string | number>[] | null;
};

const MainPage = () => {
  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState(null);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState({ term: "short_term" });

  useEffect(() => {
    const fetchData = async () => {
      const userArtists = await getUsersTopData("artists", 9, term);
      const userTracks = await getUsersTopData("tracks", 9, term);
      const userPlaylists = await getUserPlaylists();
      setTopArtists(userArtists.data.items);
      setTopTracks(userTracks.data.items);
      setUserPlaylists(userPlaylists.data.items);
      setLoading(false);
      console.log(userPlaylists);
    };

    fetchData();
  }, [term]);

  const handleTermChange = (event) => {
    const { name, value } = event.target;
    setTerm({ [name]: value });
  };

  const contextValues: TOutletContext = {
    topArtists,
    topTracks,
    loading,
    userPlaylists,
  };

  return (
    <div className="mt-16">
      <MainPageNav handleTermChange={handleTermChange} term={term} />
      <Outlet context={contextValues} />
    </div>
  );
};

export default MainPage;
