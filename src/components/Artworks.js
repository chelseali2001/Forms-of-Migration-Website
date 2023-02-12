import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

const Artworks = () => (
  <>
    <h1>Artworks</h1>
    <div className='gallery'>
      <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/border-width' target="_blank" rel="noreferrer"><img className='image' src={images[0]} alt="1"/></a>
      <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/border-width' target="_blank" rel="noreferrer"><img className='image' src={images[1]} alt="2"/></a>
      <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/border-width' target="_blank" rel="noreferrer"><img className='image' src={images[2]} alt="3"/></a>
      <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/border-width' target="_blank" rel="noreferrer"><img className='image' src={images[2]} alt="3"/></a>
      <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/border-width' target="_blank" rel="noreferrer"><img className='image' src={images[2]} alt="3"/></a>
      <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/border-width' target="_blank" rel="noreferrer"><img className='image' src={images[2]} alt="3"/></a>
      <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/border-width' target="_blank" rel="noreferrer"><img className='image' src={images[2]} alt="3"/></a>
      <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/border-width' target="_blank" rel="noreferrer"><img className='image' src={images[2]} alt="3"/></a>
      <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/border-width' target="_blank" rel="noreferrer"><img className='image' src={images[2]} alt="3"/></a>
      <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/border-width' target="_blank" rel="noreferrer"><img className='image' src={images[2]} alt="3"/></a>
      <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/border-width' target="_blank" rel="noreferrer"><img className='image' src={images[2]} alt="3"/></a>
      <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/border-width' target="_blank" rel="noreferrer"><img className='image' src={images[2]} alt="3"/></a>
      <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/border-width' target="_blank" rel="noreferrer"><img className='image' src={images[2]} alt="3"/></a>
    </div>
  </>
);

export default Artworks;