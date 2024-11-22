import React, { memo } from "react";

import { useNavigate } from "react-router-dom";

import TracksElement from "../ArtistPagePages/TracksElement";
import TopElements from "../ArtistPagePages/TopElement";
import ArtistImage from "../ArtistPagePages/ArtistImage";
import AlbumsElement from "../ArtistPagePages/AlbumsElement";
import RelatedArtistsElement from "../ArtistPagePages/RelatedArtistsElement";

type TArtistPage = {
  results: any;
};

const ArtistPage = ({ results }: TArtistPage) => {
  if (!results) return;

  const navigate = useNavigate();
  const artistData = results[3]?.data.data;
  const topTracks = results[0]?.data.data.tracks;
  const topAlbums = results[1]?.data.data.items;
  console.log(topAlbums);

  const relatedArtists = results[2]?.data.data.artists;

  const filteredAlbums = topAlbums.filter(
    (album) => album.album_type === "album"
  );

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
      <div className="tracks-container -mx-2 mt-4 element">
        <TracksElement topTracks={topTracks} />
      </div>

      {relatedArtists.length ? (
        <p className="someWhite font-bold mt-4">Check also</p>
      ) : (
        ""
      )}
      <div className="artist-container my-4 element">
        <RelatedArtistsElement relatedArtists={relatedArtists} />
      </div>
    </div>
  );
};

export default memo(ArtistPage);
