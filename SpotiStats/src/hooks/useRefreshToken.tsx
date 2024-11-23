import { useEffect } from "react";

import { getRefreshToken } from "../api/getRefreshToken";

function useRefreshToken() {
  useEffect(() => {
    const refreshToken = async () => {
      if (localStorage.getItem("access_token")) {
        await getRefreshToken();
      } else {
        return;
      }
    };

    refreshToken();
  }, []);
}

export default useRefreshToken;
