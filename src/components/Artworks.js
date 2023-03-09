import React, { useState, useEffect } from 'react';
// import { getAllArtworks } from './Frontend/Boundary/DatabaseGateway'; /* uncomment this when merged with backend repo */
import './styling/Artworks.css';

const Artworks = () => {
  const [allArtworks, setallArtworks] = useState([]);

  const USE_EFFECT_ONLY_ON_MOUNT = Array.from([])

  // useEffect(() => {
  //   getAllArtworks((artworkList) => {
  //     if(artworkList === null) {
  //       return
  //     }
  //     setallArtworks(artworkList)
  //   })
  // }, USE_EFFECT_ONLY_ON_MOUNT);

  // uncomment above useEffect when merged with backend repo

  // Test data - TODO: remove this and uncomment above useEffect
  useEffect(() => {
    setallArtworks([
      "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ])
  }, USE_EFFECT_ONLY_ON_MOUNT);

  return (
  <>
    <h1>Artworks</h1>
    <div className='gallery'>
      <img className='image' src={allArtworks[0]} alt="1"/>
      <img className='image' src={allArtworks[1]} alt="2"/>
      <img className='image' src={allArtworks[2]} alt="3"/>
      <img className='image' src={allArtworks[2]} alt="3"/>
      <img className='image' src={allArtworks[2]} alt="3"/>
      <img className='image' src={allArtworks[2]} alt="3"/>
      <img className='image' src={allArtworks[2]} alt="3"/>
      <img className='image' src={allArtworks[2]} alt="3"/>
      <img className='image' src={allArtworks[2]} alt="3"/>
      <img className='image' src={allArtworks[2]} alt="3"/>
      <img className='image' src={allArtworks[2]} alt="3"/>
      <img className='image' src={allArtworks[2]} alt="3"/>
      <img className='image' src={allArtworks[2]} alt="3"/>
    </div>
  </>
  );
};

export default Artworks;