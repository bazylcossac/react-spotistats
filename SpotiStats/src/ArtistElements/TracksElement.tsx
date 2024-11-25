import React from "react";
import { Link } from "react-router-dom";
import AudioPlayer from "../pages/AudioPlayer";
import addTrackToSpotifyFavourite from "../api/addTrackToFavourite";

function TracksElement({ topTracks }) {
  return topTracks?.map((track, index) => {
    return (
      <div
        key={track?.track.id}
        className="track px-4 py-2 my-2 mx-2 bg-[#252525] rounded-md shadow-lg"
      >
        <div className="flex flex-row justify-between items-center ">
          <div className="flex flex-row items-center">
            <p className="text-white font-bold">{index + 1}</p>
            <div className="relative">
              <div className="absolute inset-0 bg-black opacity-50 z-100 rounded-lg ml-4"></div>
              <img
                src={
                  track.track.album?.images
                    ? track.track.album?.images[
                        track.track.album?.images.length - 1
                      ].url
                    : "./src/images/noImage.jpg"
                }
                alt={track.track.name}
                className="rounded-lg shadow-md ml-4"
              />

              <div className="absolute inset-0 flex items-center justify-center ml-3">
                <AudioPlayer source={track.track.preview_url} />
              </div>
            </div>

            <Link to={`/${track.track.album.artists[0].id}`}>
              {" "}
              <div className="ml-2 w-52 h-full element">
                <p className="someWhite font-bold text-md ml-2">
                  {track.track.name}
                </p>
                <p className="someWhite text-sm ml-2">
                  {track.track.artists.map((artist) => `${artist.name} `)}
                </p>
              </div>
            </Link>
          </div>
          {!track?.isSaved && (
            <div
              onClick={async () => {
                await addTrackToSpotifyFavourite([track.track.id]);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-[#cdcdcd]"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    );
  });
}

export default TracksElement;
