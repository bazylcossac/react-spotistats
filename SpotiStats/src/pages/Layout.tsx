import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useUserData } from "../api/getUserData";
import { getCookieValue } from "../Tools/Tools";
import Loading from "../Loading";
import { useAppDataStore } from "../store/AppDataStore";

const Layout = () => {
  const navigate = useNavigate();
  const token = useAppDataStore((state) => state.token);
  const { data, isLoading, isError } = useUserData(token);

  if (isError) {
    navigate("/login");
  }

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && <Header data={data?.data} />}
      {!isLoading && <Outlet context={data?.data} />}
    </>
  );
};

export default Layout;
