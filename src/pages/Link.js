import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Jumbotron, Container } from 'reactstrap';
import { Icon } from "@iconify/react";
import jenkinsIcon from '@iconify/icons-logos/jenkins';
import paypalIcon from '@iconify/icons-logos/paypal';
import gerritIcon from '@iconify/icons-simple-icons/gerrit';
import githubOctocat from '@iconify/icons-logos/github-octocat';
import telegramPlane from '@iconify/icons-la/telegram-plane';

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
                                            <h6>
                                                <Icon icon={githubOctocat} width="2.5rem" height="2.5rem" />&nbsp;
                                                GitHub
                                            </h6>                                        
                                        </ListGroupItem>
                                        <ListGroupItem tag='a' href="http://freakyos.xyz" action>
                                            <h6>
                                                <Icon icon={gerritIcon} width="2.5rem" height="2.5rem" />&nbsp;
                                                Gerrit
                                            </h6>                                        
                                        </ListGroupItem>
                                        <ListGroupItem tag='a' href="http://jenkins.freakyos.xyz" action>
                                            <h6>
                                                <Icon icon={jenkinsIcon} width="2.5rem" height="2.5rem" />&nbsp;
                                                Jenkins
                                            </h6>                                        
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
                                            <h6>
                                            <Icon icon={telegramPlane} width="2rem" height="2rem" />&nbsp;
                                            FreakyOS Townhall
                                            </h6>                                        
                                        </ListGroupItem>
                                        <ListGroupItem tag='a' href="https://t.me/freakyos_bulletin" action>
                                            <h6>
                                            <Icon icon={telegramPlane} width="2rem" height="2rem" />&nbsp;
                                            FreakyOS Bulletin
                                            </h6>                                        
                                        </ListGroupItem>
                                        <ListGroupItem tag='a' href="http://t.me/FreakyOSGraphics" action>
                                            <h6>
                                            <Icon icon={telegramPlane} width="2rem" height="2rem" />&nbsp;
                                            FreakyOS Graphics
                                            </h6>                                        
                                        </ListGroupItem>
                                    </ListGroup>
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading>
                                    Donation
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                    <ListGroup flush>
                                        <ListGroupItem tag='a' href="https://paypal.me/bunnyy95" action>
                                            <h5>
                                                <Icon icon={paypalIcon} width="2rem" height="2rem" />&nbsp;
                                                PayPal
                                            </h5>                                        
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