import React, { Component } from "react";

class Masthead extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white display-3">
                  Relaxační masáže
                </h1>
                <hr className="divider my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white mb-5">
                  Uvolnění svalstva, potlačení stresu a napětí.</p>
                <a
                
                  className="js-scroll-trigger vstupte"
                  href="#about"
                >
                  Více <br></br>
                  <i className="fas fa-angle-double-down"></i>
                </a>
                
              </div>
              <div className="container info-bar d-none d-lg-block">
                <div className="row">
                  <div className="col-4 d-flex">
                    <i className="far fa-clock align-self-start" />
                    <div className="align-self-start ml-2">
                    <span className="d-block text-uppercase bold">Otevírací doba</span>
                    <span className="no">8:00 - 19:00<br />
                (Nutno předem objednat)</span>
                    </div>
                  </div>
                  <div className="col-4 d-flex">
                    <i className="fas fa-home align-self-start" />
                    <div className="align-self-start ml-2">
                    <span className="d-block text-uppercase">Kde nás najdete</span>
                    <span className="">Francouzská 11<br /> Plzeň - Slovany</span>
                    </div>
                  </div>
                  <div className="col-4 d-flex">
                    <i className="far fa-calendar align-self-start" />
                    <div className="align-self-start ml-2">
                    <span className="d-block text-uppercase">Objednejte se</span>
                    <span className="">666 666 777</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Masthead;

