import React, { Component } from "react";
import Menu from "./components/Menu";
import Masthead from "./components/Masthead";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Tips from "./components/Tips";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollBack from "./components/ScrollBack";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />

        <Masthead />
        <AboutUs />
        <Services />
        <Tips />
        <Contact />
        <Footer />
        <ScrollBack />
      </React.Fragment>
    );
  }
}

export default App;
