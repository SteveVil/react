import React, { Component } from "react";
import Cenik from "./Cenik";

class Service extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">Naše služby</h2>
            <p className="text-center mb-0">Ceník</p>
            <hr className="divider my-4" />
            <div className="row">
            <Cenik />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Service;
