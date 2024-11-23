import React from "react";
import { useNavigate } from "react-router-dom";
function TopElements({ artistData }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <div onClick={goBack} className="inline-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-7 text-[#8B8B8B]"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className="mt-2 flex flex-row space-x-2 p-2">
        {artistData.genres.slice(0, 3).map((genre) => (
          <div
            key={genre}
            className="text-xs font-bold text-[#313131] text-center bg-[#8B8B8B] px-2 py-1 rounded-lg shadow-lg"
          >
            {genre}
          </div>
        ))}
      </span>
    </div>
  );
}

export default TopElements;
