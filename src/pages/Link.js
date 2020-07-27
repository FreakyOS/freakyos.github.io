import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Jumbotron, Container } from 'reactstrap';

function initializeReactGA() {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    ReactGA.pageview('/downloads');
}

export default class Links extends Component{
    render(){
        initializeReactGA();
        return(
            <React.Fragment >
                <div style={{paddingTop:'60px'}}>
                <Jumbotron fluid >
                    <Container fluid className="">
                        <ListGroup flush>
                            <ListGroupItem>
                                <ListGroupItemHeading>
                                    Development
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                    <ListGroup flush>
                                        <ListGroupItem tag='a' href="https://github.com/freakyos" action>
                                            GitHub
                                        </ListGroupItem>
                                        <ListGroupItem tag='a' href="http://freakyos.xyz" action>
                                            Gerrit
                                        </ListGroupItem>
                                        <ListGroupItem tag='a' href="http://jenkins.freakyos.xyz" action>
                                            Jenkins
                                        </ListGroupItem>
                                    </ListGroup>
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading>
                                    Telegram Groups
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                    <ListGroup flush>
                                        <ListGroupItem tag='a' href="https://t.me/freakyos" action>
                                            FreakyOS Townhall
                                        </ListGroupItem>
                                        <ListGroupItem tag='a' href="https://t.me/freakyos_bulletin" action>
                                            FreakyOS Bulletin
                                        </ListGroupItem>
                                        <ListGroupItem tag='a' href="http://t.me/FreakyOSGraphics" action>
                                            FreakyOS Graphics
                                        </ListGroupItem>
                                    </ListGroup>
                                </ListGroupItemText>
                            </ListGroupItem>
                        </ListGroup>
                    </Container>
                </Jumbotron>
                </div>
            </React.Fragment>
        );
    }
}