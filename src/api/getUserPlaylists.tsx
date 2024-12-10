import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const getUserPlaylists = async (token: string) => {
  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/me/playlists?limit=10",
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

export function useUserPlaylist(token: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user-playlists"],
    queryFn: () => getUserPlaylists(token),
    staleTime: 1000 * 60 * 60,
    retry: 2,
  });
  return { userPlaylists: data, playlistLoading: isLoading, isError };
}
