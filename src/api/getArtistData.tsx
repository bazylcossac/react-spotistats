import axios from "axios";
import { useQueries } from "@tanstack/react-query";

type AllowedEndpoints = "top-tracks" | "albums" | "related-artists" | "";
type AllowedEndpointsArray = AllowedEndpoints[];

const getArtistData = async (
  id: string | undefined,
  endpoint: string,
  token: string
) => {
  if (!token) return;
  if (!id) return;

  /// endpoints: 'top-tracks' 'albums', 'related-artists' or "" to get data about artist like image, name etc.

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${id}/${endpoint}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};

export function useArtistData(
  id: string | undefined,
  endpoints: AllowedEndpointsArray,
  token: string
) {
  const results = useQueries({
    queries: endpoints.map((endpoint) => ({
      queryKey: ["user-top-data", id, endpoint, token],
      queryFn: () => getArtistData(id, endpoint, token),
      staleTime: 1000 * 60 * 60,
      retry: 2,
      enabled: !!id,
    })),
  });
  return results;
}
