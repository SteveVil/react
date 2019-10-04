import React, { Component } from "react";
import about_2 from "../img/about_2.jpg";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="page-section" id="about">
          <div className="container">
            <div className="row no-gutters justify-content-center">
              <div className="col-12 col-md-6 p-n3">
                <div className="img-div">
                  <img
                    src={about_2}
                    alt=""
                    className="img-fluid img float-right"
                  />
                </div>
              </div>

              <div className="col-12 col-md-4">
                <h2 className="mt-5">Radka Spěšná</h2>

                <p className="about-text">
                  Sta has everything you need to get your new website up and
                  running in no time! Choose one of our open source, free to
                  download, and easy to use themes! No strings attached!
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AboutUs;
