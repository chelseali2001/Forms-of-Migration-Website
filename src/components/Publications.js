import React, { useState, useEffect } from 'react';
// import { getAllPublications } from './Frontend/Boundary/DatabaseGateway'; /* uncomment this when merged with backend repo */
import './styling/Publications.css';

const Publications = () => {
  const [allPublications, setallPublications] = useState([]);

  const USE_EFFECT_ONLY_ON_MOUNT = Array.from([])

  // useEffect(() => {
  //   getAllPublications((publicationList) => {
  //     if(publicationList === null) {
  //       return
  //     }
  //     setallPublications(publicationList)
  //   })
  // }, USE_EFFECT_ONLY_ON_MOUNT);

  // uncomment above useEffect when merged with backend repo

  // Test data - TODO: remove this and uncomment above useEffect
  useEffect(() => {
    setallPublications([
      { id: 1, url: 'https://example.com/publication-1' },
      { id: 2, url: 'https://example.com/publication-2' },
      { id: 3, url: 'https://example.com/publication-3' },
    ])
  }, USE_EFFECT_ONLY_ON_MOUNT);

  return (
    <div className="publications">
      <h2>Publications</h2>
      <div className="publications-table">
        {allPublications.map((aPublication) => (
          <div className="publications-row" key={aPublication.id} onClick={() => {
            console.log("aPublication click with id", aPublication.id)
          }}>
            <div className="publications-number">{aPublication.id}</div>
            <div className="publications-url">{aPublication.url}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
