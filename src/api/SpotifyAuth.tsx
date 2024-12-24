import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { clientId, clientSecret } from "../apiKeys";

const fetchToken = async (
  code: string,
  clientId: string,
  clientSecret: string
) => {
  const params = new URLSearchParams();

  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", "https://spoti-stats-mu.vercel.app/callback");
  params.append("client_id", clientId);
  params.append("client_secret", clientSecret);

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if (response.status !== 200) {
      throw new Error("Failed to fetch token");
    }
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export function useSpotifyAuth(code: string | null) {
  const { data, isSuccess, isError } = useQuery({
    queryKey: ["spotify-auth", code],
    queryFn: () => {
      if (!code) {
        throw new Error(
          "Code is required to fetch token, please provide it as a first argument"
        );
      }
      return fetchToken(code, clientId, clientSecret);
    },
    enabled: !!code,
    refetchInterval: 1000 * 60 * 30,
  });
  return { data, isSuccess, isError };
}
