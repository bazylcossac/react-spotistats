import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import AudioPlayer from "../pages/AudioPlayer";
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

const AllPage = () => {
  const { topArtists, topTracks, loading, userPlaylists } =
    useOutletContext<TOutletContext>();

  console.log("all page");
  if (loading) {
    return (
      <div className="animate-pulse someWhite font-bold text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Loading...
      </div>
    );
  }

  // ARTISTS
  const artistElements = topArtists?.map((artist) => {
    return (
      <div key={artist.id} className="artist ">
        <Link to={artist.id}>
          <img
            src={artist.images[2].url}
            alt={artist.name}
            className="rounded-full shadow-lg"
            loading="lazy"
          />
        </Link>
      </div>
    );
  });
  /// TRACKS

  const tracksElement = topTracks?.map((track, index) => {
    return (
      <div
        key={track.id}
        className="track px-4 py-2 my-2 mx-2 bg-[#252525] rounded-md shadow-lg"
      >
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center">
            <p className="text-white font-bold">{index + 1}</p>
            <Link to="/">
              <img
                src={track.album.images[2].url}
                alt={track.name}
                className="rounded-lg shadow-md ml-4"
                loading="lazy"
              />
            </Link>
            <Link to={track.album.artists[0].id}>
              {" "}
              <div className="ml-4 h-full break-words overflow-auto w-56">
                <p className="someWhite font-bold text-md">{track.name}</p>
                <p className="someWhite text-sm">
                  {track.artists.map((artist) => `${artist.name} `)}
                </p>
              </div>
            </Link>
          </div>
          <AudioPlayer source={track.preview_url} />
        </div>
      </div>
    );
  });

  /// PLAYLISTS
  const playlistsElement = userPlaylists?.map((playlist) => {
    return (
      <div
        key={playlist.id}
        className=" bg-[#252525] flex flex-col rounded-lg shadow-lg  "
      >
        <div className="flex flex-row items-start">
          <img
            src={playlist.images[0].url}
            className="size-20 shrink-0 rounded-lg p-2 "
            loading="lazy"
          />
          <p className="someWhite text-center ml-2 mt-1 font-bold">
            Total: {playlist.tracks.total}
          </p>
        </div>
        <p className="someWhite font-bold my-2 overflow-x-auto text-center">
          {playlist.name}
        </p>
      </div>
    );
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center px-4 mt-4 ">
        <p className="someWhite font-bold text-lg">Top artists</p>
        <p className="someGray text-sm font-bold">See more</p>
      </div>

      <div className="artist-container m-4 element">{artistElements}</div>

      <div className="flex flex-row justify-between items-center px-4 mt-4 ">
        <p className="someWhite font-bold text-lg">Top tracks</p>
        <p className="someGray text-sm font-bold">See more</p>
      </div>

      <div className="tracks-container element">{tracksElement}</div>

      <div className="flex flex-row justify-between items-center px-4 mt-4 ">
        <p className="someWhite font-bold text-lg">Playlists</p>
        <p className="someGray text-sm font-bold">See more</p>
      </div>

      <div className="grid grid-cols-2 gap-6 px-4 mt-4 h-52 overflow-y-auto whitespace-nowrap element">
        {playlistsElement}
      </div>
    </div>
  );
};

export default AllPage;
