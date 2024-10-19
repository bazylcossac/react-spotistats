import React, {Suspense} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import MainPage from './components/MainPage'
import Layout from './pages/Layout'
import SignIn from './pages/SignIn'
import SpotiDetails from './pages/SpotiDetails'
import SpotifyAuth from './api/SpotifyAuth'
import Authorization from './pages/Authorization'
import AllPage from "./components/AllPage"
import ArtistDetailsPage from './components/ArtistDetailsPage'


const LazyArtistPage = React.lazy(() => import('./components/ArtistsPage') )
const LazyTracksPage = React.lazy(() => import('./components/TracksPage'))
const LazyNewPage = React.lazy(() => import('./components/NewPage'))
const LazySearchPage = React.lazy(() => import('./components/SearchPage'))
const LazyArtistDetailsPage = React.lazy(() => import('./components/ArtistDetailsPage'))

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
              
                <Route path="tracks" element={
                   <Suspense fallback={<div>Loading...</div>}> 
                      <LazyTracksPage />
                      </Suspense>} />
               
                <Route path="artists" element={
                   <Suspense fallback={<div>Loading...</div>}>
                    <LazyArtistPage />
                  </Suspense>} />

                <Route path="new" element={
                   <Suspense fallback={<div>Loading...</div>}>
                <LazyNewPage />
                </Suspense>} />
             
            </Route>
         
            <Route path="/callback" element={<SpotifyAuth />} />
            <Route path=":id" element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyArtistDetailsPage />
            </Suspense> 
            } /> 

            <Route path="/search" element={
            <Suspense fallback={<div>Loading...</div>}>
             <LazySearchPage />
            </Suspense>} />
          
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


/// zamiast search uzyc :search
/// w search page uzyc useParams 
/// dzieki useParams wykonac zapytanie 
/// wyswietlic dane





export default App
