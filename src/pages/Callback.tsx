import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useSpotifyAuth } from "../api/SpotifyAuth";
import { useAppDataStore } from "../store/AppDataStore";

const Callback = () => {
  const navigate = useNavigate();
  const setToken = useAppDataStore((state) => state.setToken);
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const { data, isSuccess, isError } = useSpotifyAuth(code);

  useEffect(() => {
    if (!code) {
      navigate("/login");
      return;
    }

    if (data && isSuccess) {
      console.log("Authorization successful:", data);

      setToken(data.access_token);
      localStorage.setItem("login", JSON.stringify(true));
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);

      navigate("/");
    }

    if (isError) {
      console.error("Authorization failed");
      navigate("/login");
    }
  }, [code, data, isSuccess, isError, navigate, setToken]);

  return <div>Processing authentication...</div>;
};

export default Callback;
