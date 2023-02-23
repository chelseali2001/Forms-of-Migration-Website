import React from 'react';
import {
  Link
} from 'react-router-dom';
import './styling/HomePage.css';

const HomePage = () => (
  <>
    <div className="tabs">
      <div className="rectangle-container">
        <Link to="/institutions-&-affiliates" className='rectangle'>
          <div className="rectangle-text-wrapper">
            <span>Institutions & Affiliates</span>
          </div>
          <img src={require('../images/institution.png')} alt="tabIcon" className='tabIcon' />
        </Link>
        <Link to="/publications" className='rectangle'>
          <div className="rectangle-text-wrapper">
            <span>Publications</span>
          </div>
          <img src={require('../images/publication.png')} alt="tabIcon" className='tabIcon' />
        </Link>
        <Link to="/artworks" className='rectangle'>
          <div className="rectangle-text-wrapper">
            <span>Artworks</span>
          </div>
          <img src={require('../images/artwork.png')} alt="tabIcon" className='tabIcon' />
        </Link>
        <Link to="/audios-&-videos" className='rectangle'>
          <div className="rectangle-text-wrapper">
            <span>Audios & Videos</span>
          </div>
          <img src={require('../images/video.png')} alt="tabIcon" className='tabIcon' />
        </Link>
        <Link to="/recent-news-&-events" className='rectangle'>
          <div className="rectangle-text-wrapper">
            <span>Recent News & Events</span>
          </div>
          <img src={require('../images/news.png')} alt="tabIcon" className='tabIcon' />
        </Link>
        <Link to="/programs" className='rectangle'>
          <div className="rectangle-text-wrapper">
            <span>Programs</span>
          </div>
          <img src={require('../images/program.png')} alt="tabIcon" className='tabIcon' />
        </Link>
      </div>
    </div>
  </>
);

export default HomePage;
