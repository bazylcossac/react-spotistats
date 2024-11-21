import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useSpotifySearchData } from "../api/getSpotifyData";
import { useAppDataStore } from "../store/AppDataStore";
import { useDebounce } from "../Tools/Tools";
import SearchPageResult from "./SearchPageResult";
import Loading from "../Loading";
import BlankPage from "../BlankPage";

const SearchPage = () => {
  const navigate = useNavigate();

  const token = useAppDataStore((state) => state.token);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("artist").slice(1);
  

  const { data, isLoading, isError } = useSpotifySearchData(
    useDebounce(params, 250),
    1,
    token
  );
  if (!params) {
    return <BlankPage />;
  }
  if (isLoading) {
    return <Loading />;
  }
  if (data) return <SearchPageResult data={data} searchParams={searchParams} />;
};
export default SearchPage;
