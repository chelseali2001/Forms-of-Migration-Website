import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'


function App() {
  return (
    <div className="App">
      <div className="home-page" >
        <img src="https://cdn-icons-png.flaticon.com/512/91/91819.png" alt="icon" className="icon" />
        
        <h1>Migration</h1>
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <button>&#128269;</button>
        </div>


      <div className= "tabs">
        <div className="rectangle-container">
          <div className="rectangle">
          <h2>Institutions & Affiliates</h2>
        </div>
        <div className="rectangle">
          <h2>Publications</h2>
        </div>
        <div className="rectangle">
          <h2>Artworks</h2>
        </div>
        <div className="rectangle">
          <h2>Audios & Videos</h2>
        </div>
        <div className="rectangle">
          <h2>Recent News & Events</h2>
        </div>
        <div className="rectangle">
          <h2>Programs</h2>
        </div>
      </div>
    </div>
      </div>


      <footer className="footer">
      <div className="footer-left">
        <p>Copyright</p>
        <p>Contact Info</p>
      </div>
      <div className="footer-right">
        <p>Follow Us</p>
        <div className="footer-icons">
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
        <FontAwesomeIcon icon={faInstagramSquare} size="2x" />

        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
