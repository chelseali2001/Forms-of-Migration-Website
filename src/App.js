import './App.css';
import Data from './MOCK_DATA.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import {
    Routes,
    Route,
    Link,
  } from 'react-router-dom'
import { useState } from 'react';

import HomePage from './components/HomePage'
import InstitutionsandAffiliates from './components/InstitutionsandAffiliates'
import Publications from './components/Publications'
import Artworks from './components/Artworks'
import AudiosandVideos from './components/AudiosandVideos'
import RecentNewsandEvents from './components/RecentNewsandEvents'
import Programs from './components/Programs' 
import ExcerptsFromBook from './components/ExcerptsFromBook'
import SearchBar from './components/SearchBar';
import PageNotFound from './components/PageNotFound';

function App(){
  const [query, setQuery] = useState('')
  return (
    <>
      <div className="App">
        <div className="home-page" >
          <Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/91/91819.png" alt="icon" className="icon" /></Link>
            <Link to="/" className='logoLink'>Migration</Link>
      
          <div className="search-container">
            <input type="text" placeholder="Search" onChange={event => setQuery(event.target.value)} />
            <Link to="/search"><button>&#128269;</button></Link>
          </div>
          {
            Data.filter(movie => {
              if (query === '') {
                return '';
              } else if (movie.title.toLowerCase().includes(query.toLowerCase())) {
                return movie;
              }
            }).map((movie, index) => (
              <div key={index}>
                <p>{movie.type}</p>
                <p>{movie.date}</p>
                <p>{movie.title}</p>
              </div>
            ))
          }

          <div className='book-tab'>
            <Link to="/excerpts-from-book" className='excerpts'>Excerpts From Book</Link>
          </div>
        </div>

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
          <Route path="/search" element={<SearchBar />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <footer className="footer">
          <div className="footer-left">
            <p>Copyright</p>
            <p>Contact Info</p>
          </div>
          
          <div className="footer-right">
            <p>Follow Us</p>
            <div className="footer-icons">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
              <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
              <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
export default App;
