import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Autorization = () => {
  const navigate = useNavigate();
  const userAuthzation = localStorage.getItem("login");
  const viewMode = sessionStorage.getItem("viewMode");
  if (userAuthzation) {
    sessionStorage.setItem("viewMode", "false");
  }
  useEffect(() => {
    if (!userAuthzation || !viewMode || userAuthzation === null) {
      navigate("/login");
    }
    if (!userAuthzation && viewMode) {
      navigate("/");
    }
    if (userAuthzation && !viewMode) {
      navigate("/");
    }
  }, [userAuthzation, viewMode]);

  return (
    <div className="flex justify-center">
      <Outlet />
    </div>
  );
};

export default Autorization;
