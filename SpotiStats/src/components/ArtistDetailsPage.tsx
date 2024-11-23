import React from "react";
import { useParams } from "react-router-dom";
import { useArtistData } from "../api/getArtistData";
import ArtistPage from "../pages/ArtistPage";
import Loading from "../Loading";
import { useAppDataStore } from "../store/AppDataStore";
const ArtistDetailsPage = () => {
  const token = useAppDataStore((state) => state.token)!;

  // const token = localStorage.getItem("access_token");
  let { id } = useParams();
  const results = useArtistData(
    id,
    ["top-tracks", "albums", "related-artists", ""],
    token
  );
  const isLoading = results.some((result) => result.isLoading);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <ArtistPage results={results} />
    </div>
  );
};

export default ArtistDetailsPage;
