import React, { Component } from "react";

import "./header.scss";
import PropTypes from "prop-types";
import logo from "../../../static-content/images/rewards/logo.svg";
//sdsdsd
class Header extends Component {
  signout() {
    const { updateGlobalState } = this.props;
    updateGlobalState("", "logout");
  }

  render() {
    const { signoutText, logoImagePath, logoAltText } = this.props;
    return (
      <header className="enrolment-header-shared">
        <a className="logo" href="https://www.telstra.com.au/">
          <img src={logoImagePath} alt={logoAltText} />
        </a>

        <button className="signout" type="button" onClick={this.signout}>
          {signoutText}
        </button>
      </header>
    );
  }
}

Header.propTypes = {
  updateGlobalState: PropTypes.func,
  signoutText: PropTypes.string,
  logoImagePath: PropTypes.string,
  logoAltText: PropTypes.string
};

Header.defaultProps = {
  updateGlobalState: () => {},
  signoutText: "Sign out",
  logoImagePath: logo,
  logoAltText: "Telstra d"
};

export default Header;
