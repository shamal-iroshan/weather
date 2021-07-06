import React from "react";

import '../../assets/css/style.css';
import background_image from '../../assets/img/home/background.gif';

function Home() {
  return (
    <>
      <div className="home-background" style={{backgroundImage: `url(${background_image})`}}>
        <div className="container">
          <div className="align-inputs">
            <div className="row full-width">
              <div className="col col-sm col-md-1 col-lg-2 col-xl-3"/>
              <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-5">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="location"/>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-1">
                <button type="button" className="btn btn-primary btn-block">Search</button>
              </div>
              <div className="col col-sm col-md-1 col-lg-2 col-xl-3"/>
            </div>
            <div className="row full-width mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0">
              <div className="col-12 col-sm col-md-4 col-lg-5 col-xl-5"/>
              <div className="col-12 col-sm-12 col-md-4 col-lg-2 col-xl-2">
                <button type="button" className="btn btn-outline-primary btn-block">Current location</button>
              </div>
              <div className="col-12 col-sm col-md-4 col-lg-5 col-xl-5"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;