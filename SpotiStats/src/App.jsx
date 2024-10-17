import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import MainPage from './components/MainPage'
import Layout from './pages/Layout'
import SignIn from './pages/SignIn'
import SpotiDetails from './pages/SpotiDetails'
import SpotifyAuth from './api/SpotifyAuth'
import Authorization from './pages/Authorization'

import AllPage from "./components/AllPage"
import ArtistsPage from './components/ArtistsPage'
import TracksPage from './components/TracksPage'
import NewPage from './components/NewPage'
import MainPageNav from './components/MainPageNav'
import ArtistDetailsPage from './components/ArtistDetailsPage'

function App() {

    /// TODO 
    /// WYPELNIC MIEJSCE NA DOLE PLAYLISTAMI
    /// PRZYCISKI PLAY ZMIENIAJA SIE PO ZAKONCZENIU PIOSENKI ???
    /// WYSZUKIWANIE: MOZNA ODTWORZYC PIOSENKE W SPOTIFY
    /// NAPRAWIC BLAD Z LOGOWANIEM SPOTIFY 
   
return (
  <div>
  <BrowserRouter>
     <Routes>
     <Route path="/login" element={<SignIn />} />
     <Route path="*" element={<SignIn />} />
      <Route element={<Authorization />} >
        <Route path="/" element={<Layout />} >
            <Route element={<MainPage />}>
              <Route index element={ <AllPage />} />
              <Route path="/tracks" element={<TracksPage />} />
              <Route path="/artists" element={<ArtistsPage />} />
              <Route path="/new" element={<NewPage />} />
            </Route>
         
            <Route path="/callback" element={<SpotifyAuth />} />
            <Route path=":id" element={<ArtistDetailsPage />} /> 
        </Route>
    </Route>
     </Routes>
  </BrowserRouter>
  </div>
)

// return (
//   <BrowserRouter router={router} />
// )
 
}






export default App
