import React from "react";
import "../assets/css/style.css";
import "../assets/css/font-awesome.css";
import "../assets/css/bootstrap.min.css";
import Video from "./Video";
const Home = () => {
  return (
    <>
      <div className="main-banner" id="top">
        <Video />
        <div className="video-overlay header-text">
          <div className="caption">
            <h6>Limitless Enjoy with our bikes</h6>
            <h2>
              <em>Rent a Bike</em> at low prices
            </h2>
            <div className="main-button">
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
