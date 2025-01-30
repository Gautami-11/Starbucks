import React from 'react';
import './LandingPage.css';

// Import images
import logo from './img/logo.png';
import img1 from './img/img1.png';
import facebookIcon from './img/facebook.png';
import instagramIcon from './img/instagram.png';
import twitterIcon from './img/twitter.png';
import thumb1 from './img/thumb1.png';
import thumb2 from './img/thumb2.png';
import thumb3 from './img/thumb3.png';

function LandingPage() {
  const imgSlider = (anything) => {
    document.querySelector('.starbucks').src = anything;
  };

  return (
    <div>
      <header>
        <div className="left-side">
          <a href="#">
            <img src={logo} alt="Starbucks Logo" />
          </a>
        </div>
        <div className="right-side">
          <div className="nav-link-wrapper">
            <a href="#">Home</a>
          </div>
          <div className="nav-link-wrapper">
            <a href="#">Menu</a>
          </div>
          <div className="nav-link-wrapper">
            <a href="#">What's New</a>
          </div>
          <div className="nav-link-wrapper">
            <a href="#">Contact</a>
          </div>
        </div>
      </header>

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
  );
}

export default LandingPage;
