import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="container-fluid page-section" id="contact">
          <div className="container">
            <h2 className="text-center mt-0">Napište nám</h2>
            <hr className="divider my-4" />
            <div className="row">
              <div className="col-md-5 ml-auto mr-auto mt-5">
                <form role="form" id="contact-form" method="post">
                  <label>Vaše Jméno</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="now-ui-icons users_circle-08" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="jméno..."
                      aria-label="Your Name..."
                      autoComplete="name"
                    />
                  </div>
                  <label>Váš Email</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="now-ui-icons ui-1_email-85" />
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="email..."
                      aria-label="Email Here..."
                      autoComplete="email"
                    />
                  </div>
                  <label>Telefón</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="now-ui-icons tech_mobile" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="číslo..."
                      autoComplete="number"
                    />
                  </div>
                  <div className="form-group">
                    <label>Vaše zpráva</label>
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      rows="6"
                    />
                  </div>
                  <div className="submit text-center">
                    <input
                      type="submit"
                      className="btn btn-primary btn-raised"
                      value="Odeslat"
                    />
                  </div>
                </form>
              </div>

              <div className="col-md-5 text-center text-md-left ml-auto mr-auto">
                <div className="info info-horizontal mt-5">
                  <div className="icon icon-primary">
                    <i className="now-ui-icons location_pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Adresa salónu</h4>
                    <address>
                      Francouzská 11, <br />
                      326 00 Plzeň - Slovany,<br />
                      
                    </address>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="now-ui-icons tech_mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Objednávky</h4>
                    <p>
                      Radka Spěšná<br />
                      +420 762 321 762<br />
                      Po - Pá, 8:00-19:00
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="business_briefcase-24 now-ui-icons" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Legal Information</h4>
                    <p>
                     
                      Creative Tim Ltd.<br />
                      VAT · EN2341241<br />
                      IBAN · EN8732ENGB2300099123<br />
                      Bank · Great Britain Bank
                    </p>
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

export default Contact;
