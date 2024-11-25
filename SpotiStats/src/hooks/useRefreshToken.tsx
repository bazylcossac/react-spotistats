import { useEffect } from "react";

import { getRefreshToken } from "../api/getRefreshToken";
import { clearCookies } from "../Tools/Tools";

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
