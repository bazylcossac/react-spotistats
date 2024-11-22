import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useAppDataStore } from "../store/AppDataStore";
import { useQueries, useQuery } from "@tanstack/react-query";

const clientId = "06d408ab38794edb91b879d117ab204f";
const clientSecret = "352f8d5b6fe34be7affa5677e1d8f1f6";
// const navigate = useNavigate();
// const setToken = useAppDataStore((state) => state.setToken);
// const [searchParams] = useSearchParams();

// useEffect(() => {
//   const code = searchParams.get("code");
//   if (code) {
//     getToken(code);
//   }
// }, [searchParams]);

const fetchToken = async (
  code: string,
  clientId: string,
  clientSecret: string
) => {
  const params = new URLSearchParams();

  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", "http://localhost:3001/callback");
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
    return response.data.access_token;
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
    refetchInterval: 10000,
  });
  return { data, isSuccess, isError };
}
