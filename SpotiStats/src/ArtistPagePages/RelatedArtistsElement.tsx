import React from "react";
import { Link } from "react-router-dom";

function RelatedArtistsElement({ relatedArtists }) {
  return relatedArtists.map((artist) => (
    <div
      key={artist.id}
      className="artist text-xs text-center truncate shadow-lg mx-2"
    >
      <Link to={`/${artist.id}`}>
        {" "}
        <img
          src={
            artist.images[0]
              ? artist.images[artist.images.length - 1].url
              : "./src/images/noImage.jpg"
          }
          className="rounded-full"
        />
        <p className="someWhite text-xs font-bold mt-2 overflow-auto break-words w-20">
          {artist.name}
        </p>
      </Link>
    </div>
  ));
}

export default RelatedArtistsElement;
