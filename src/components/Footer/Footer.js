/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="row" id="footer">
        <div>
          <center>
            <p>
              {' '}
              (C)
              {' '}
              <a href="https://github.com/csc4350-f21-KBAT/project2">KBAT</a>
              {' '}
            </p>
          </center>
        </div>
      </div>
    );
  }
}

export default Footer;
