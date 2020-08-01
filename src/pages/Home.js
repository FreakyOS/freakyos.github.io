import React, { Component } from 'react';
import ReactGA from 'react-ga';
import banner from 'assets/images/banner.jpg';
function initializeReactGA() {
  ReactGA.initialize(process.env.REACT_APP_GA_ID);
  ReactGA.pageview('/');
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    initializeReactGA();
    return (<React.Fragment>
      <div className='freaky-banner d-flex flex-column align-items-center justify-content-center'>
        <img src={banner} alt='FreakyOS'>
        </img>
      </div>
    </React.Fragment >)
  }
}