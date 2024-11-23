import React from "react";

function PlaylistsElement({ playlists }) {
  return playlists.map((playlist) => {
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
}

export default PlaylistsElement;
