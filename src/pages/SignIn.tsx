import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAppDataStore } from "../store/AppDataStore";
import { useNavigate } from "react-router-dom";
import { useSpotifyAuth } from "../api/SpotifyAuth";

const SignIn = () => {
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
      setToken(data.access_token);
      localStorage.setItem("login", JSON.stringify(true));
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);

      navigate("/");
    }
    if (isError) {
      navigate("/login");
    }
  }, [data, isSuccess, isError, navigate, setToken]);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex flex-row mt-20  items-center justify-center">
        <img
          className="w-20"
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
          alt="spotify logo"
        />
        <h1 className="text-white font-bold text-4xl ml-4">SpotiStats</h1>
      </div>

      <div className="flex flex-col items-center gap-8">
        <Link
          to="https://accounts.spotify.com/authorize?client_id=06d408ab38794edb91b879d117ab204f&response_type=code&redirect_uri=http://localhost:3001/callback&scope=user-read-private user-read-email user-top-read user-library-modify user-library-read
"
        >
          <div className="mt-10 flex flex-row gap-2 bg-neutral-900  text-center py-2 px-10 rounded-2xl text-white/60 font-sans font-medium hover:bg-neutral-800 hover:text-white/70 transition">
            <p> Login with </p>

            <img
              className="w-6"
              src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
              alt="spotify logo"
            />
            <p> account</p>
          </div>
        </Link>

        <p className="text-white/90 font-bold">OR</p>

        <div className="flex flex-col items-centee">
          <button
            className="bg-neutral-900 text-center py-2 rounded-2xl text-white/60 font-sans font-medium hover:bg-neutral-800 hover:text-white/70 transition"
            onClick={() => {
              sessionStorage.setItem("viewMode", "true");
              navigate("/");
            }}
          >
            View mode
          </button>
          <p className="mt-2 text-white/10 text-sm hover:text-white/30 transition">
            Recommended for recruitment process
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
