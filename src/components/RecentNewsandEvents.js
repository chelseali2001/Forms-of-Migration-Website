import React, { useState, useEffect } from 'react';
// import { getAllNewsAndEvents } from './Frontend/Boundary/DatabaseGateway'; /* uncomment this when merged with backend repo */
import './styling/RecentNewsandEvents.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}

const RecentNewsandEvents = () => {
  const [allNewsAndEvents, setallNewsAndEvents] = useState([]);

  const USE_EFFECT_ONLY_ON_MOUNT = Array.from([])

  // useEffect(() => {
  //   getAllNewsAndEvents((newsAndEventsList) => {
  //     if(newsAndEventsList === null) {
  //       return
  //     }
  //     setallNewsAndEvents(newsAndEventsList)
  //   })
  // }, USE_EFFECT_ONLY_ON_MOUNT);

  // uncomment above useEffect when merged with backend repo

  // Test data - TODO: remove this and uncomment above useEffect
  useEffect(() => {
    setallNewsAndEvents([
      {
        url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 1'
      },
      {
        url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
        caption: 'Slide 2'
      },
      {
        url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 3'
      },
    ])
  }, USE_EFFECT_ONLY_ON_MOUNT);

  return(
  <> 
    <h1>Recent News and Events</h1>
    <div>
      <Slider>
        {allNewsAndEvents.map((aNewsAndEvent, index)=> (
          <div key={index}>
            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/border-width' style={{ ...divStyle, 'backgroundImage': `url(${aNewsAndEvent.url})` }}>
              <span style={spanStyle}>{aNewsAndEvent.caption}</span>
            </a>
          </div>
        ))} 
      </Slider>
    </div>
  </>
  )
};

export default RecentNewsandEvents;