import React from 'react';
import './styling/Publications.css';

const publicationsData = [
  { id: 1, url: 'https://example.com/publication-1' },
  { id: 2, url: 'https://example.com/publication-2' },
  { id: 3, url: 'https://example.com/publication-3' },
];

const Publications = () => {
  return (
    <div className="publications">
      <h2>Publications</h2>
      <div className="publications-table">
        {publicationsData.map((publication) => (
          <div className="publications-row" key={publication.id}>
            <div className="publications-number">{publication.id}</div>
            <div className="publications-url">{publication.url}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
