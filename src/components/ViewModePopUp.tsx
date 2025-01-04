import React from "react";

function ViewModePopUp({ closePopUp }) {
  return (
    <div className="w-[380px] max-h-[500px]  bg-neutral-950 shadow-xl text-white fixed top-1/4 right-1/2 translate-x-1/2 i translate-y-1/12 z-50 rounded-lg px-4 ">
      <button
        onClick={() => closePopUp(false)}
        className="text-red-500 flex justify-end w-full mt-2  hover:text-red-700 transition"
      >
        X
      </button>
      <h1 className="font-bold text-xl text-center text-white/90 py-4">
        Welcome to View Mode of <span>SpotiStats</span>
      </h1>
      <p className="font-semibold text-neutral-300">
        In this mode you can explore an app but take a note that you some
        features are disabled.
      </p>
      <p className="my-4 text-zinc-400">Features that are disabled:</p>
      <ul className="space-y-4 my-2 text-sm text-zinc-500">
        <li>Searching for artist</li>
        <li>Adding a song to your favourites in Spotify App</li>
        <li>
          Exploring artists profiles ( every link/artist is taking to Don
          Toliver by default )
        </li>
        <li>Period filtering</li>
      </ul>

      <p className="mt-24 mb-4 text-white/80">
        If you want to explore all of this features please log in with your
        <span className="text-green-500"> Spotify Account</span>
      </p>
    </div>
  );
}

export default ViewModePopUp;
