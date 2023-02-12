import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link,
  useParams,
  Outlet,
  Navigate
} from 'react-router-dom'

import HomePage from './components/HomePage'
import InstitutionsandAffiliates from './components/InstitutionsandAffiliates'
import Publications from './components/Publications'
import Artworks from './components/Artworks'
import AudiosandVideos from './components/AudiosandVideos'
import RecentNewsandEvents from './components/RecentNewsandEvents'
import Programs from './components/Programs' 
import ExcerptsFromBook from './components/ExcerptsFromBook'

function NotFound() {
  return <h1>404: Page Not Found</h1>
}

function App() {
  return (
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/institutions-&-affiliates" element={<InstitutionsandAffiliates />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/artworks" element={<Artworks />} />
                <Route path="/audios-&-videos" element={<AudiosandVideos />} />
                <Route path="/recent-news-&-events" element={<RecentNewsandEvents />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/excerpts-from-book" element={<ExcerptsFromBook />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
  )
}
export default App;
