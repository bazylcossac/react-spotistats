import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Autorization = () => {
  const navigate = useNavigate();
  const userAuthzation = localStorage.getItem("login");
  useEffect(() => {
    if (!userAuthzation || userAuthzation === null) {
      navigate("/login");
    }
  }, [userAuthzation]);

  return (
    <div className="flex justify-center ">
      <Outlet />
    </div>
  );
};

export default Autorization;
