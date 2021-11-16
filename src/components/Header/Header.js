/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="callout primary" id="Header">
        <div className="row column">
          <h1><a class="home" href="/" >{this.props.name}</a></h1>
          <center>
            <a class="login" href="/login" className="button" >Login</a>
            <a class="signup" href="/signup" className="button">Signup</a>
            <a class="qp" href="/QuickPikr" className="button">QuickPikr</a>
          </center>
        </div>
      </div>
    );
  }
}

export default Header;
