import React from 'react';
import './styling/Artworks.css';

const images = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

const Artworks = () => (
  <>
    <h1>Artworks</h1>
    <div className='gallery'>
      <img className='image' src={images[0]} alt="1"/>
      <img className='image' src={images[1]} alt="2"/>
      <img className='image' src={images[2]} alt="3"/>
      <img className='image' src={images[2]} alt="3"/>
      <img className='image' src={images[2]} alt="3"/>
      <img className='image' src={images[2]} alt="3"/>
      <img className='image' src={images[2]} alt="3"/>
      <img className='image' src={images[2]} alt="3"/>
      <img className='image' src={images[2]} alt="3"/>
      <img className='image' src={images[2]} alt="3"/>
      <img className='image' src={images[2]} alt="3"/>
      <img className='image' src={images[2]} alt="3"/>
      <img className='image' src={images[2]} alt="3"/>
    </div>
  </>
);

export default Artworks;