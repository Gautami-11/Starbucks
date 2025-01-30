import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import img1 from '../src/assets/images/img1.png';
import facebookIcon from '../src/assets/images/facebook.png';
import instagramIcon from '../src/assets/images/instagram.png';
import twitterIcon from '../src/assets/images/twitter.png';
import thumb1 from '../src/assets/images/thumb1.png';
import thumb2 from '../src/assets/images/thumb2.png';
import thumb3 from '../src/assets/images/thumb3.png';

function App() {
  
    const imgSlider = (anything) => {
      document.querySelector('.starbucks').src = anything;
    };

  return (
  
    <Router>
      <Header />
       
       
      <div>
      <div className="container">
        <div className="left-side">
          <h1>
            It's not just Coffee <br /> It's <span className="green"> Starbucks </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sunt cumque pariatur sint dignissimos odio sit facilis porro veritatis earum itaque similique voluptatem dolores est ipsum, sequi non temporibus, quae.
          </p>
          <a href="#">Learn More</a>
        </div>

        <div className="right-side">
          <img src={img1} alt="Starbucks Image" className="starbucks" />
          <div className="box">
            <a href="#">
              <img className="facebook" src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>

      <div className="thumb">
        <a href="#bottom">
          <img id="bottom" src={thumb1} alt="Thumbnail 1" onClick={() => imgSlider(img1)} />
        </a>
        <a href="#bottom">
          <img src={thumb2} alt="Thumbnail 2" onClick={() => imgSlider(img2)} />
        </a>
        <a href="#bottom">
          <img src={thumb3} alt="Thumbnail 3" onClick={() => imgSlider(img3)} />
        </a>
      </div>
    </div>
    </Router>
   );
 }
 
 export default App;
 
