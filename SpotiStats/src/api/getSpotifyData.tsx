import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type SpotifyDataParams = {
  params: string;
  limit: number | undefined;
  token: string;
};

async function getSpotifyData(
  params: string,
  limit: number | undefined = 10,
  token: string
) {
  console.log("fetching");
  if (!params) {
    return null;
  }
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${params}&type=artist&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      }
    );
    return response;
  } catch (err) {
    throw new Error("Coultn't get data");
  }
}

export function useSpotifySearchData(
  params: string,
  limit: number | undefined = 10,
  token: string
) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["search-data", params],
    queryFn: () => getSpotifyData(params, limit, token),
    staleTime: 1000 * 60 * 60,
    retry: 2,
    enabled: !!params,
  });

  return { data, isLoading, isError };
}
