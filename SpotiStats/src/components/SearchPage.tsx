import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSpotifySearchData } from "../api/getSpotifyData";
import { useAppDataStore } from "../store/AppDataStore";
import { useDebounce } from "../Tools/Tools";
import SearchPageResult from "./SearchPageResult";
import Loading from "../Loading";

import BlankSearchPage from "../ErrorPage";

const SearchPage = () => {
  const token = useAppDataStore((state) => state.token);
  const [searchParams] = useSearchParams();
  const params = searchParams.get("artist")!.slice(1);

  const { data, isLoading, isError } = useSpotifySearchData(
    useDebounce(params, 250),
    9,
    token
  );
  if (!params) {
    return <BlankSearchPage text={""} />;
  }
  if (isError) {
    return <BlankSearchPage text={"error"} />;
  }
  if (isLoading) {
    return <Loading />;
  }
  if (data) return <SearchPageResult data={data} searchParams={searchParams} />;
};
export default SearchPage;
