import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Loading from "../Loading";
import { TOutletContext } from "../types/OutletContextType";
import TracksElement from "../ArtistElements/TracksElement";
import RelatedArtistsElement from "../ArtistElements/RelatedArtistsElement";
import PlaylistsElement from "../ArtistElements/PlaylistsElement";
import { useChechSavedTracks } from "../api/getCheckSavedTracks";

const AllPage = () => {
  const { results, playlists, playlistLoading } =
    useOutletContext<TOutletContext>();
  const [savedTracksIds, setSavedTracksIds] = useState([]);

  const { data } = useChechSavedTracks(savedTracksIds);

  const topArtists = results[0]?.data?.data.items;
  const topTracks = results[1]?.data?.data.items;
  const isLoading = results.some((result) => result.isLoading);

  const topTracksWithSavedValuie = topTracks?.map((track, index) => ({
    track,
    isSaved: data?.data[index],
  }));

  const topTracksLoading = topTracksWithSavedValuie?.some(
    (track) => track.isSaved === undefined
  );
  useEffect(() => {
    setSavedTracksIds(topTracks?.map((track) => track.id));
  }, [topTracks]);

  if (isLoading || playlistLoading || topTracksLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center px-4 mt-4 ">
        <p className="someWhite font-bold text-lg">Top artists</p>
        <p className="someGray text-sm font-bold">See more</p>
      </div>

      <div className="artist-container m-4 element">
        <RelatedArtistsElement relatedArtists={topArtists} />
      </div>

      <div className="flex flex-row justify-between items-center px-4 mt-4 ">
        <p className="someWhite font-bold text-lg">Top tracks</p>
        <p className="someGray text-sm font-bold">See more</p>
      </div>

      <div className="tracks-container element">
        <TracksElement topTracks={topTracksWithSavedValuie} />
      </div>

      <div className="flex flex-row justify-between items-center px-4 mt-4 ">
        <p className="someWhite font-bold text-lg">Playlists</p>
        <p className="someGray text-sm font-bold">See more</p>
      </div>

      <div className="grid grid-cols-2 gap-6 px-4 mt-4 h-52 overflow-y-auto whitespace-nowrap element">
        <PlaylistsElement playlists={playlists} />
      </div>
    </div>
  );
};

export default AllPage;