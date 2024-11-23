import React from "react";
import { useParams } from "react-router-dom";
import { useArtistData } from "../api/getArtistData";
import ArtistPage from "../pages/ArtistPage";
import Loading from "../Loading";
import { useAppDataStore } from "../store/AppDataStore";

import ErrorPage from "../ErrorPage";
const ArtistDetailsPage = () => {
  const token = useAppDataStore((state) => state.token)!;

  let { id } = useParams();
  const results = useArtistData(
    id,
    ["top-tracks", "albums", "related-artists", ""],
    token
  );
  const isLoading = results.some((result) => result.isLoading);
  const isError = results.some((result) => result.isError);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {isError && <ErrorPage text="Failed to fetch user" />}
      {!isError && <ArtistPage results={results} />}
    </div>
  );
};

export default ArtistDetailsPage;
