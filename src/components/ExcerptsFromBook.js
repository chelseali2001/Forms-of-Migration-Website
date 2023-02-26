import React from 'react';
import file from "../FormOfMigration.pdf";

const ExcerptsFromBook = () => {
  const openNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };
  function showpdf(file){
    window.open(file);
  }
  return (
    <div style={{backgroundColor: "white", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      {/* <h1>Excerpts From Book</h1> */}
      {/* <a href="https://drive.google.com/file/d/1uzWdwzS4gRQeSw9jD1qDCHd1Tx0BavYM/view" target="_blank" rel="noreferrer">Forms of Migration Book</a> */}
      <button role="link" onClick={() => openNewTab('https://drive.google.com/file/d/1uzWdwzS4gRQeSw9jD1qDCHd1Tx0BavYM/view')}>Forms of Migration Book</button>
      <button onClick={() => showpdf(file)}>book</button>
    </div>
  );
}

export default ExcerptsFromBook;