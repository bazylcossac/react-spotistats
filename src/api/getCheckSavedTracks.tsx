import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getCheckSavedTracks(ids: string[]) {
  const token = localStorage.getItem("access_token");
  if (!token) {
    throw new Error("Not token or invalid token");
  }
  if (!ids) {
    throw new Error("No ids provided");
  }
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/me/tracks/contains?ids=${ids.join(",")}`,
      {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      }
    );

    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

export function useChechSavedTracks(ids: string[]) {
  const { data } = useQuery({
    queryKey: ["saved-tracks", ids],
    queryFn: () => getCheckSavedTracks(ids),
    enabled: !!ids,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    retry: 2,
  });

  return { data };
}
