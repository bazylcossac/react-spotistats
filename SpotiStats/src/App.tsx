import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import MainPage from "./components/MainPage";
import Layout from "./pages/Layout";
import SignIn from "./pages/SignIn";
import SpotifyAuth from "./api/SpotifyAuth";
import Authorization from "./pages/Authorization";
import AllPage from "./components/AllPage";
import ArtistPage from "./pages/ArtistPage";
import TracksPage from "./components/TracksPage";
import NewPage from "./components/NewPage";
import SearchPage from "./components/SearchPage";
import ArtistDetailsPage from "./components/ArtistDetailsPage";

const queryClient = new QueryClient();

function App() {
  /// TODO

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="*" element={<SignIn />} />
            <Route element={<Authorization />}>
              <Route path="/" element={<Layout />}>
                <Route element={<MainPage />}>
                  <Route index element={<AllPage />} />
                  <Route path="tracks" element={<TracksPage />} />
                  TracksPage
                  <Route path="artists" element={<ArtistPage />} />
                  <Route path="new" element={<NewPage />} />
                </Route>

                <Route path="/callback" element={<SpotifyAuth />} />
                <Route path=":id" element={<ArtistDetailsPage />} />

                <Route path="/search" element={<SearchPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );

  // return (
  //   <BrowserRouter router={router} />
  // )
}

/// zamiast search uzyc :search
/// w search page uzyc useParams
/// dzieki useParams wykonac zapytanie
/// wyswietlic dane

export default App;
