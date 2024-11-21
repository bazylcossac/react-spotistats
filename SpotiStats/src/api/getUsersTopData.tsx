import axios from "axios";
import { getCookieValue } from "../Tools/Tools";
import { useQuery, useQueries } from "@tanstack/react-query";
const getUsersTopData = async (genre, limit, term) => {
  console.log("fetching");
  try {
    const token = getCookieValue("token");

    const response = await axios.get(
      `https://api.spotify.com/v1/me/top/${genre}?limit=${limit}&time_range=${term}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export function useUserTopData(
  genreArr: string[],
  limit: number,
  term: string
) {
  const results = useQueries({
    queries: genreArr.map((genre) => ({
      queryKey: ["user-top-data", genre, term],
      queryFn: () => getUsersTopData(genre, limit, term),
      staleTime: 1000 * 60 * 60,
      retry: 2,
    })),
  });

  return results;
}
