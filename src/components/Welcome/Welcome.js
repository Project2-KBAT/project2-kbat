import React, { Component } from 'react';

import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="row " id="Body">
        <div className="medium-12 columns">
          <h2 id="introTxt">
            Trying to find some information on a movie?
          </h2><br></br>
          <h2 id="introTxt">
            Not sure what you want to watch?
          </h2><br></br>
          <h2 id="introTxt">
            Well fear not, because you came to the right place
          </h2><br></br>
          <a class="login" href="/login" className="button">Login</a>
          <a class="signup" href="/signup" className="button success">Signup</a>
        </div>
      </div>
    );
  }
}

export default Welcome;