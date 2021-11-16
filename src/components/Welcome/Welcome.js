/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';

import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="row " id="Body">
        <div className="medium-12 columns">
          <h2 id="introTxt">
            Trying to find some information on a movie?
          </h2>
          <br />
          <h2 id="introTxt">
            Not sure what you want to watch?
          </h2>
          <br />
          <h2 id="introTxt">
            Well fear not, because you came to the right place
          </h2>
          <br />
        </div>
      </div>
    );
  }
}

export default Welcome;
