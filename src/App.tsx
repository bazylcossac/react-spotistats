import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import MainPage from "./components/MainPage";
import Layout from "./pages/Layout";
import SignIn from "./pages/SignIn";

import Authorization from "./pages/Authorization";
import AllPage from "./components/AllPage";

import TracksPage from "./components/TracksPage";
import NewPage from "./components/NewPage";
import SearchPage from "./components/SearchPage";
import ArtistDetailsPage from "./components/ArtistDetailsPage";
import ArtistsPage from "./components/ArtistsPage";
import useRefreshToken from "./hooks/useRefreshToken";
import Callback from "./pages/Callback";

const queryClient = new QueryClient();

function App() {
  useRefreshToken();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/callback" element={<Callback />} />

            <Route element={<Authorization />}>
              <Route path="/" element={<Layout />}>
                <Route element={<MainPage />}>
                  <Route index element={<AllPage />} />
                  <Route path="tracks" element={<TracksPage />} />

                  <Route path="artists" element={<ArtistsPage />} />
                  <Route path="new" element={<NewPage />} />
                </Route>

                <Route path=":id" element={<ArtistDetailsPage />} />

                <Route path="/search" element={<SearchPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster />
      </QueryClientProvider>
    </div>
  );
}

export default App;
