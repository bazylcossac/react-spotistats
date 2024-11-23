import React from "react";
import { Link } from "react-router-dom";
import AudioPlayer from "../pages/AudioPlayer";

function TracksElement({ topTracks }) {
  return topTracks?.map((track, index) => {
    return (
      <div
        key={track?.id}
        className="track px-4 py-2 my-2 mx-2 bg-[#252525] rounded-md shadow-lg"
      >
        <div className="flex flex-row justify-between items-center ">
          <div className="flex flex-row items-center">
            <p className="text-white font-bold">{index + 1}</p>
            <Link to="/">
              <img
                src={
                  track.album?.images
                    ? track.album?.images[track.album?.images.length - 1].url
                    : "./src/images/noImage.jpg"
                }
                alt={track.name}
                className="rounded-lg shadow-md ml-4"
              />
            </Link>
            <Link to={`/${track.album.artists[0].id}`}>
              {" "}
              <div className="ml-2 w-52 h-full element">
                <p className="someWhite font-bold text-md ml-2">{track.name}</p>
                <p className="someWhite text-sm ml-2">
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
}

export default TracksElement;
