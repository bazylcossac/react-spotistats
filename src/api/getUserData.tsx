import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getUserData = async (token: string | undefined) => {
  if (localStorage.getItem("login")) {
    try {
      const response = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      console.error(error);
    }
  } else {
    return;
  }
};

export  function useUserData(token: string | undefined) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user-data", token],
    queryFn: () => getUserData(token!),
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: true,
    enabled: !!token,
    retry: 3,
  });

  return { data, isLoading, isError };
}
