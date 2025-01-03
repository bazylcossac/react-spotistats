import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useUserData } from "../api/getUserData";
import Loading from "../Loading";
import { useAppDataStore } from "../store/AppDataStore";

const Layout = () => {
  const navigate = useNavigate();
  const token = useAppDataStore((state) => state.token);
  const { data, isLoading, isError } = useUserData(token!);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("login")!)) {
      navigate("/login");
    }
    if (isError) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="w-[450px] h-screen border-4 border-neutral-600 bg-[#1d1d1d] shadow-lg">
      {isLoading && <Loading />}
      {!isLoading && data && <Header data={data?.data} />}
      {!isLoading && data && <Outlet context={data?.data} />}
    </div>
  );
};

export default Layout;
