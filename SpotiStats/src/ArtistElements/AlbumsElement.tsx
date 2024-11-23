import React from "react";

function AlbumsElement({ filteredAlbums }) {
  if (!filteredAlbums) {
    return <p className="someWhite font-bold mt-2">Albums</p>;
  }
  return (
    <>
      <p className="someWhite font-bold mt-2">Albums</p>
      <div className="artist-container my-4 element">
        {filteredAlbums?.map((track) => (
          <div key={track.id} className="artist text-xs text-center shadow-xl">
            <img
              src={
                track.images
                  ? track.images[track?.images.length - 1].url
                  : "./src/images/blackImage.webp"
              }
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default AlbumsElement;
