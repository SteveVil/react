import React, { Component } from "react";
import classnames from "classnames";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <nav
        className={classnames(
          "navbar navbar-expand-lg navbar-light fixed-top",
          {
            "navbar-scrolled": !this.state.visible
          }
        )}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#root">
            Remas
          </a>
          <button
            className="navbar-toggler navbar-toggler-right text-white border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  O nás
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  Ceník
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
