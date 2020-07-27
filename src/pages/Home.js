import React, { Component } from 'react';
import ReactGA from 'react-ga';
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
      <div class='w-100' style={{paddingTop:'60px'}}>
        <Jumbotron fluid>
          <Container fluid className='w-100'>
            <div class='d-flex flex-column align-items-center'>
              <h1 className='display-5'>FreakyOS</h1>
              <p >If you're freaky then you're at the right place. Checkout our custom roms and feel the freak.</p>
            </div>
          </Container>
        </Jumbotron>
      </div>

    </React.Fragment>)
  }
}