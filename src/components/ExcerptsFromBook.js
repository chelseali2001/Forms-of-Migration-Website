import React, { useState } from 'react';
import file from "../FormOfMigration.pdf";
import './styling/ExcerptsFromBook.css';
import { Document, Page, pdfjs} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;


const ExcerptsFromBook = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
  }

  const openNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };
  function showpdf(file){
    window.open(file);
  }
  return (
    <div>
      <button role="link" onClick={() => openNewTab('https://drive.google.com/file/d/1uzWdwzS4gRQeSw9jD1qDCHd1Tx0BavYM/view')}>Open Book PDF Version From Google Drive</button>
      <button onClick={() => showpdf(file)}>Open Book PDF Version From Local Server</button>
      <h2 className='excerptsSectionTitle'>Pages From Book</h2>
      <div className='excerptsSection'>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {[1,2,3,4,16,46,77,98,124].map(page => <Page pageNumber={page} />)}
          {/* <Page pageNumber={pageNumber} /> */}
        </Document>
      </div>
    </div>
  );
}

export default ExcerptsFromBook;