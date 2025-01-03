import React from "react";
import { useNavigate } from "react-router-dom";

function UserLoginPopUp() {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-950 w-[100px] h-[40px] absolute right-0 rounded-lg flex items-center justify-center mt-2 text-white/70 hover:text-neutral-700 transition">
      <div className="size-4 bg-neutral-950 absolute -top-1 right-3 rotate-45 "></div>
      <button
        onClick={() => {
          sessionStorage.setItem("viewMode", "false");
          navigate("/login");
        }}
      >
        Log In
      </button>
    </div>
  );
}

export default UserLoginPopUp;
