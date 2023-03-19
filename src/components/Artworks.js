import React, { useState, useEffect } from 'react';
// import { getAllArtworks } from './Frontend/Boundary/DatabaseGateway'; /* uncomment this when merged with backend repo */
import './styling/Artworks.css';

const Artworks = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [allArtworks, setallArtworks] = useState([]);
  const USE_EFFECT_ONLY_ON_MOUNT = Array.from([])

  /*
  useEffect(() => {
    getAllArtworks((artworkList) => {
      if(artworkList === null) {
        return
      }
      setallArtworks(artworkList)
    })
  }, USE_EFFECT_ONLY_ON_MOUNT);
  */

  // uncomment above useEffect when merged with backend repo

  // Test data - TODO: remove this and uncomment above useEffect
  useEffect(() => {
    setallArtworks([
      {id: 1, title: "Artwork 1", author: "Jennifer Reimer Recio, Stefan Maneval", date: "2022-03-16", image: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
      {id: 2, title: "Artwork 2", author: "Jennifer Reimer Recio, Stefan Maneval", date: "2022-03-16", image: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"},
      {id: 3, title: "Artwork 3", author: "Jennifer Reimer Recio, Stefan Maneval", date: "2022-03-16", image: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
    ])
  }, USE_EFFECT_ONLY_ON_MOUNT);

  const handleRowClick = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const closeModal = () => {
    setSelectedArtwork(null);
  };

  return (
  <>
    <h1>Artworks</h1>
    <div className='gallery'>
      {allArtworks.map((anArtwork) => (
        <img className='image' key={anArtwork.id} onClick={() => handleRowClick(anArtwork)} src={anArtwork.image} alt={anArtwork.id} />
      ))}
    </div>
    {selectedArtwork && (
        <div className="modalBackdrop">
          <div className="modal">
            <div className="modalHeader">
              <button onClick={closeModal} className="closeButton">X</button>
            </div>
            <div className="modalContent">
              <p><strong>Title: </strong>{selectedArtwork.title}</p>
              <img className='selected-image' src={selectedArtwork.image} alt={selectedArtwork.id} />
              <p><strong>Author: </strong>{selectedArtwork.author}</p>
              <p><strong>Date: </strong>{selectedArtwork.date}</p>
            </div>
          </div>
        </div>
    )}
  </>
  );
};

export default Artworks;