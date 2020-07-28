import React, { Component } from 'react';
import ReactGA from 'react-ga';
import {Container} from 'reactstrap';

function initializeReactGA() {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    ReactGA.pageview('/downloads');
}

export default class Links extends Component{
    render(){
        initializeReactGA();
        return(
            <React.Fragment>
                <Container style={{paddingTop:'60px'}}>
                    <h1>
                        Our Freaky Team!
                    </h1>
                </Container>
            </React.Fragment>
        );
    }
}