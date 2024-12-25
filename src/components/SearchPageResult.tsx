import React from "react";
import FirstArtist from "../SearchPageComponents/FirstArtist";
function SearchPageResult({ data, searchParams }) {
  const result = data.data.artists;

  const firstArtist = result?.items[0];
  const SearchedTracks = data.data.tracks;
  const firstArtistName = firstArtist?.name;

  const filteredFirstArtistsTracks = SearchedTracks?.items.filter(
    (track) => track.artists[0].name === firstArtistName
  );

  return (
    <div className="mt-16">
      <span className="flex flex-row text-[#525252] font-bold p-4">
        Results for:
        <p className="text-white ml-2 truncate">
          {searchParams.get("artist")}
        </p>{" "}
      </span>

      <FirstArtist firstArtist={firstArtist} />
    </div>
  );
}

export default SearchPageResult;
