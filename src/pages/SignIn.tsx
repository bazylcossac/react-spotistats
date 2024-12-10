import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAppDataStore } from "../store/AppDataStore";
import { useNavigate } from "react-router-dom";
import { useSpotifyAuth } from "../api/SpotifyAuth";

const SignIn = () => {
  console.log("signin mounted");
  const navigate = useNavigate();
  const setToken = useAppDataStore((state) => state.setToken);
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const { data, isSuccess, isError } = useSpotifyAuth(code);

  useEffect(() => {
    if (data && isSuccess) {
      console.log(data);

      setToken(data.access_token);
      localStorage.setItem("login", JSON.stringify(true));
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);

      navigate("/");
    }
    if (isError) {
      navigate("/login");
    }
  }, [code, data, isSuccess, navigate]);

  return (
    <>
      <div className="flex flex-row items-center">
        <img
          className="w-20"
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
          alt="spotify logo"
        />
        <h1 className="text-white font-bold text-4xl ml-4">SpotiStats</h1>
      </div>

      <Link
        className="p-3 bg-[#2c2c2c] rounded-2xl"
        to="https://accounts.spotify.com/authorize?client_id=06d408ab38794edb91b879d117ab204f&response_type=code&redirect_uri=https://spoti-stats-3u3r-dusky.vercel.app/callback&scope=user-read-private user-read-email user-top-read user-library-modify user-library-read
"
      >
        Sign In
      </Link>
    </>
  );
};

export default SignIn;
