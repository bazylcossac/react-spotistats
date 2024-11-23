import axios from "axios";
import { useQueries } from "@tanstack/react-query";
const getUsersTopData = async (genre, limit, term, token) => {
  console.log("fetching");
  try {
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
  term: string,
  token: string
) {
  const results = useQueries({
    queries: genreArr.map((genre) => ({
      queryKey: ["user-top-data", genre, term],
      queryFn: () => getUsersTopData(genre, limit, term, token),
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: true,
      retry: 2,
    })),
  });

  return results;
}
