import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// Line below is for router-dom version >= 6.0
//import { Navigate } from 'react-router-dom';
import './Home.css';
//import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'; 
import '../../styles/react-confirm-alert.css';

class Home extends Component {


  constructor(props) {
    super(props);

    this.state = {
      data: [],
      userFeed: '',
      redirectToReferrer: false,
      name: '',
    };

    
    );
  }

export default Home;