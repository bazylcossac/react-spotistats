import React, { useCallback, useRef, useState } from "react";

const AudioPlayer = ({ source }) => {
  const playIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6 text-[#cdcdcd]"
    >
      <path
        fillRule="evenodd"
        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const pauseIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6 text-[#cdcdcd]"
    >
      <path
        fillRule="evenodd"
        d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [icon, setIcon] = useState(playIcon);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayingAudio = useCallback(() => {
    console.log("playing audio handle");
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current?.pause();
      setIcon(playIcon);
    } else {
      setIsPlaying(true);
      audioRef.current?.play();
      setIcon(pauseIcon);
    }
  }, [isPlaying]);

  return (
    <div>
      <button onClick={handlePlayingAudio}>{icon}</button>
      <audio ref={audioRef} onChange={handlePlayingAudio}>
        <source src={source} />
      </audio>
    </div>
  );
};

export default AudioPlayer;
