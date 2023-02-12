import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import {
    Routes,
    Route,
    Link,
    useParams,
    Outlet,
    Navigate
  } from 'react-router-dom'

const HomePage = () => (
    <>
        <div className="App">
          <div className="home-page" >
            <img src="https://cdn-icons-png.flaticon.com/512/91/91819.png" alt="icon" className="icon" />
        
            <Link to="/" className='logoLink'>Migration</Link>
            
            <div className="search-container">
              <input type="text" placeholder="Search" />
              <button>&#128269;</button>
            </div>

            <div className='book-tab'>
              <Link to="/excerpts-from-book" className='excerpts'>Excerpts From Book</Link>
            </div>


            <div className= "tabs">
              <div className="rectangle-container">
                <Link to="/institutions-&-affiliates" className='rectangle'>Institutions & Affiliates</Link>
                <img src={require('../images/institution.png')} alt="tabIcon" className='tabIcon' width="70" height="70" />
                <Link to="/publications" className='rectangle'>Publications</Link>
                <img src={require('../images/publication.png')} alt="tabIcon" className='tabIcon' width="70" height="70" />
                <Link to="/artworks" className='rectangle'>Artworks</Link>
                <img src={require('../images/artwork.png')} alt="tabIcon" className='tabIcon' width="70" height="70" />
                <Link to="/audios-&-videos" className='rectangle'>Audios & Videos</Link>
                <img src={require('../images/video.png')} alt="tabIcon" className='tabIcon' width="70" height="70" />
                <Link to="/recent-news-&-events" className='rectangle'>Recent News & Events</Link>
                <img src={require('../images/news.png')} alt="tabIcon" className='tabIcon' width="70" height="70" />
                <Link to="/programs" className='rectangle'>Programs</Link>
                <img src={require('../images/program.png')} alt="tabIcon" className='tabIcon' width="70" height="70" />
              </div>

              </div>
          </div>

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

);

export default HomePage;