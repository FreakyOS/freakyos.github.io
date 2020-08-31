import React, { Component } from 'react';
import ReactGA from 'react-ga';
// import banner from 'assets/images/banner.jpg';
import { Jumbotron, Container } from 'reactstrap';

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
      {/* <div className='freaky-banner d-flex flex-column align-items-center justify-content-center'>
        <img src={banner} alt='FreakyOS'>
        </img>
      </div> */}
      <div>
        <Jumbotron fluid>
          <Container fluid className='w-100'>
            <div class='d-flex flex-column align-items-center'>
              <h1 className='display-5'>FreakyOS</h1>
              <p >If you're a Freak! Then you're at the right place. Checkout our custom rom and feel The Freakiness!</p>
            </div>
          </Container>
        </Jumbotron>
      </div>
    </React.Fragment >)
  }
}