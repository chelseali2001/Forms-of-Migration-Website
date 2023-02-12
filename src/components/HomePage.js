import React from 'react';
import {
  Link
} from 'react-router-dom'

const HomePage = () => (
  <>
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
  </>
);

export default HomePage;