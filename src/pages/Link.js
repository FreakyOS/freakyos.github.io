import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Row, Col, Container } from 'reactstrap';
import { Icon } from "@iconify/react";
import jenkinsIcon from '@iconify/icons-logos/jenkins';
import paypalIcon from '@iconify/icons-logos/paypal';
import gerritIcon from '@iconify/icons-simple-icons/gerrit';
import githubOctocat from '@iconify/icons-logos/github-octocat';
import telegramPlane from '@iconify/icons-la/telegram-plane';

function initializeReactGA() {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    ReactGA.pageview('/links');
}

export default class Links extends Component {
    render() {
        initializeReactGA();
        return (
            <React.Fragment >
                <Container fluid className='m-1 d-flex flex-row align-items-center justify-content-center'>
                    <Row className='d-flex align-items-center justify-content-center'>
                        <Col xs='10' sm='5' md='4' xl='4' className='m-1 link-group rounded d-flex flex-column align-items-center justify-content-center'>
                            <span className='m-2' >Contribute</span>
                            <div className='m-1 d-flex justify-content-center'>
                                <div className='m-2 link-container d-flex flex-column justify-content-center align-items-center'>
                                    <a href='https://github.com/freakyos' rel="noopener noreferrer" target='_blank'>
                                        <Icon icon={githubOctocat} width="2.5em" height="2.5em" />
                                    </a>
                                    <span className='link-name'>GitHub</span>
                                </div>
                                <div className='m-2 link-container d-flex flex-column justify-content-center align-items-center'>
                                    <a href='http://freakyos.xyz' rel="noopener noreferrer" target='_blank'>
                                        <Icon icon={gerritIcon} width="2.5rem" height="2.5rem" />
                                    </a>
                                    <span className='link-name'>Gerrit</span>
                                </div>
                                <div className='m-2 link-container d-flex flex-column justify-content-center align-items-center'>
                                    <a href='http://jenkins.freakyos.xyz' rel="noopener noreferrer" target='_blank'>
                                        <Icon icon={jenkinsIcon} width="2.5rem" height="2.5rem" />
                                    </a>
                                    <span className='link-name'>Jenkins</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs='10' sm='5' md='4' xl='4' className='m-1 link-group rounded d-flex flex-column align-items-center justify-content-center'>
                            <span className='m-2' >Talk to us!</span>
                            <div className='m-1 d-flex justify-content-center'>
                                <div className='m-2 link-container d-flex flex-column justify-content-center align-items-center'>
                                    <a className='' href='https://t.me/freakyos' rel="noopener noreferrer" target='_blank'>
                                        <Icon icon={telegramPlane} width="2.5em" height="2.5em" />
                                    </a>
                                    <span className='link-name'>Townhall</span>
                                </div>
                                <div className='m-2 link-container d-flex flex-column justify-content-center align-items-center'>
                                    <a href='https://t.me/freakyos_bulletin' rel="noopener noreferrer" target='_blank'>
                                        <Icon icon={telegramPlane} width="2.5rem" height="2.5rem" />
                                    </a>
                                    <span className='link-name'>Bulletin</span>
                                </div>
                                <div className='m-2 link-container d-flex flex-column justify-content-center align-items-center'>
                                    <a href='http://t.me/FreakyOSGraphics' rel="noopener noreferrer" target='_blank'>
                                        <Icon icon={telegramPlane} width="2.5rem" height="2.5rem" />
                                    </a>
                                    <span className='link-name'>Graphics!</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs='10' sm='5' md='4' xl='3' className='link-group m-1 rounded d-flex flex-column align-items-center justify-content-center'>
                            <span className='m-2' >Support us :)</span>
                            <div className='m-1 d-flex justify-content-center'>
                                <div className='m-2 link-container d-flex flex-column justify-content-center align-items-center'>
                                    <a className='' href='https://paypal.me/bunnyy95' rel="noopener noreferrer" target='_blank'>
                                        <Icon icon={paypalIcon} width="2.5em" height="2.5em" />
                                    </a>
                                    <span className='link-name'>Paypal</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment >
        );
    }
}