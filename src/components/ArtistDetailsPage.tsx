import React from "react";
import { useParams } from "react-router-dom";
import { useArtistData } from "../api/getArtistData";
import ArtistPage from "../pages/ArtistPage";
import Loading from "../Loading";
import { useAppDataStore } from "../store/AppDataStore";
import { artistsViewMode } from "../viewModeData/ArtistDetailsPage.tsx/artists";

import ErrorPage from "../ErrorPage";
const ArtistDetailsPage = () => {
  const token = useAppDataStore((state) => state.token)!;
  const viewMode = JSON.parse(sessionStorage.getItem("viewMode")!);

  let { id } = useParams();

  const results = viewMode
    ? artistsViewMode
    : useArtistData(id, ["top-tracks", "albums", ""], token);

  const isLoading = results.some((result) => result.isLoading);
  const isError = results.some((result) => result.isError);
  console.log(results);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {isError && <ErrorPage text="Failed to fetch user" />}
      {!isError && !viewMode && <ArtistPage results={results} />}
      {viewMode && <ArtistPage results={results} />}
    </div>
  );
};

export default ArtistDetailsPage;
