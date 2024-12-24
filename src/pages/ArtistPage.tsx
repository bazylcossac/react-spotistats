import React, { useEffect, useState } from "react";

import TracksElement from "../ArtistElements/TracksElement";
import TopElements from "../ArtistElements/TopElement";
import ArtistImage from "../ArtistElements/ArtistImage";
import AlbumsElement from "../ArtistElements/AlbumsElement";
import RelatedArtistsElement from "../ArtistElements/RelatedArtistsElement";
import { useChechSavedTracks } from "../api/getCheckSavedTracks";
import Loading from "../Loading";

type TArtistPage = {
  results: any;
};

const ArtistPage = ({ results }: TArtistPage) => {
  const [savedTracksIds, setSavedTracksIds] = useState([]);
  const [savedTracks, setSavedTracks] = useState([]);
  const { data } = useChechSavedTracks(savedTracksIds);
  const artistData = results[2]?.data.data;
  const topTracks = results[0]?.data.data.tracks;
  const topAlbums = results[1]?.data.data.items;

  // const relatedArtists = results[2]?.data.data.artists;

  const filteredAlbums = topAlbums.filter(
    (album) => album.album_type === "album"
  );
  const topTracksWithSavedValuie = topTracks?.map((track, index) => ({
    track,
    isSaved: data?.data[index],
  }));
  const topTracksLoading = topTracksWithSavedValuie?.some(
    (track) => track.isSaved === undefined
  );

  useEffect(() => {
    setSavedTracksIds(topTracks?.map((track) => track.id));
  }, []);

  if (topTracksLoading || !artistData || !topTracks || !topAlbums) {
    return <Loading />;
  }
  return (
    <div className="mx-4 mt-20 flex flex-col">
      <TopElements artistData={artistData} />

      {/* ARTIST */}
      <ArtistImage artistData={artistData} />

      {/* ALBUMS */}
      <AlbumsElement filteredAlbums={filteredAlbums} />

      {/* TRACKS ELEMENS */}
      {topTracks.length ? (
        <p className="someWhite font-bold mt-2">Tracks</p>
      ) : (
        ""
      )}
      <div className="tracks-container -mx-2 my-4 element">
        <TracksElement topTracks={topTracksWithSavedValuie} />
      </div>
    </div>
  );
};

export default ArtistPage;
