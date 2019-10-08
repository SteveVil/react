import React, { Component } from "react";

class Tips extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="" id="tips">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-6 bg-primary p-4 text-white text-md-right ">
                <h2>Expert Tips</h2>
                <i className="fas fa-clipboard-check"></i>
              </div>
              <div className="col-12 col-md-6 bg-light p-4">
                <div className="bd-example">
                  <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="2"
                      ></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <p>alskjdalksjdlaksjdla</p>
                        <div className="carousel-caption d-none d-md-block"></div>
                      </div>
                      <div className="carousel-item">
                        <p>kkkkkkkkkk</p>
                        <div className="carousel-caption d-none d-md-block"></div>
                      </div>
                      <div className="carousel-item">
                        <p>lsfjlsjfl skfls jlfsldfjs ldkfj</p>
                        <div className="carousel-caption d-none d-md-block"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Tips;
