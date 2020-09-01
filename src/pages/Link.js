import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Row, Col, Container } from 'reactstrap';
import { Icon } from "@iconify/react";
import jenkinsIcon from '@iconify/icons-logos/jenkins';
import paypalIcon from '@iconify/icons-logos/paypal';
import gerritIcon from '@iconify/icons-simple-icons/gerrit';
import githubOctocat from '@iconify/icons-logos/github-octocat';
import telegramIcon from '@iconify/icons-logos/telegram';
import instagramIcon from "@iconify/icons-il/instagram";
import twitterIcon from "@iconify/icons-logos/twitter";
import fileTypeCrowdin from '@iconify/icons-vscode-icons/file-type-crowdin';
import freaky_logo from 'assets/images/logo192.png';

function initializeReactGA() {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    ReactGA.pageview('/links');
}

export default class Links extends Component {
  render() {
    initializeReactGA();
    return (
      <React.Fragment>
        <Container
          fluid
          className="m-1 d-flex flex-column align-items-center justify-content-center"
        >
          <Row className="d-flex align-items-center justify-content-center">
            <Col
              xs="10"
              sm="5"
              md="4"
              xl="4"
              className="m-1 link-group rounded d-flex flex-column align-items-center justify-content-center"
            >
              <span className="m-2">Contribute</span>
              <div className="m-1 d-flex justify-content-center">
                <div className="m-2 link-container d-flex flex-column justify-content-center align-items-center">
                  <a
                    href="https://github.com/freakyos"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon icon={githubOctocat} width="2.5em" height="2.5em" />
                  </a>
                  <span className="link-name">GitHub</span>
                </div>
                <div className="m-2 link-container d-flex flex-column justify-content-center align-items-center">
                  <a
                    href="http://freakyos.xyz"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon icon={gerritIcon} width="2.5rem" height="2.5rem" />
                  </a>
                  <span className="link-name">Gerrit</span>
                </div>
                <div className="m-2 link-container d-flex flex-column justify-content-center align-items-center">
                  <a
                    href="http://jenkins.freakyos.xyz"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon icon={jenkinsIcon} width="2.5rem" height="2.5rem" />
                  </a>
                  <span className="link-name">Jenkins</span>
                </div>
              </div>
            </Col>
            <Col
              xs="10"
              sm="5"
              md="4"
              xl="4"
              className="m-1 link-group rounded d-flex flex-column align-items-center justify-content-center"
            >
              <span className="m-2">Talk to us!</span>
              <div className="m-1 d-flex justify-content-center">
                <div className="m-2 link-container d-flex flex-column justify-content-center align-items-center">
                  <a
                    className=""
                    href="https://t.me/freakyos"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon icon={telegramIcon} width="2.5em" height="2.5em" />
                  </a>
                  <span className="link-name">Townhall</span>
                </div>
                <div className="m-2 link-container d-flex flex-column justify-content-center align-items-center">
                  <a
                    href="https://t.me/freakyos_bulletin"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon icon={telegramIcon} width="2.5rem" height="2.5rem" />
                  </a>
                  <span className="link-name">Bulletin</span>
                </div>
                <div className="m-2 link-container d-flex flex-column justify-content-center align-items-center">
                  <a
                    href="http://t.me/FreakyOSGraphics"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon icon={telegramIcon} width="2.5rem" height="2.5rem" />
                  </a>
                  <span className="link-name">Graphics!</span>
                </div>
              </div>
            </Col>
            <Col
              xs="10"
              sm="5"
              md="4"
              xl="4"
              className="m-1 link-group rounded d-flex flex-column align-items-center justify-content-center"
            >
              <span className="m-2">Our Social!</span>
              <div className="m-1 d-flex justify-content-center">
                <div className="m-2 link-container d-flex flex-column justify-content-center align-items-center">
                  <a
                    href="https://instagram.com/freaky_os?igshid=1bxtruoobuagb"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon icon={instagramIcon} width="2.5rem" height="2.5rem" />
                  </a>
                  <span className="link-name">Instagram</span>
                </div>
                <div className="m-2 link-container d-flex flex-column justify-content-center align-items-center">
                  <a
                    href="https://twitter.com/Freaky_OS?s=09"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon icon={twitterIcon} width="2.5rem" height="2.5rem" />
                  </a>
                  <span className="link-name">Twitter</span>
                </div>
              </div>
            </Col>
            <Col
              xs="10"
              sm="5"
              md="4"
              xl="3"
              className="link-group m-1 rounded d-flex flex-column align-items-center justify-content-center"
            >
              <span className="m-2">Support us :)</span>
              <div className="m-1 d-flex justify-content-center">
                <div className="m-2 link-container d-flex flex-column justify-content-center align-items-center">
                  <a
                    className=""
                    href="https://paypal.me/bunnyy95"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon icon={paypalIcon} width="2.5em" height="2.5em" />
                  </a>
                  <span className="link-name">Paypal</span>
                </div>
              </div>
            </Col>
            <Col
              xs="10"
              sm="5"
              md="4"
              xl="3"
              className="link-group m-1 rounded d-flex flex-column align-items-center justify-content-center"
            >
              <span className="m-2">Help us with localization!</span>
              <div className="m-1 d-flex justify-content-center">
                <div className="m-2 link-container d-flex flex-column justify-content-center align-items-center">
                  <a
                    className=""
                    href="https://crwd.in/freakyos"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon icon={fileTypeCrowdin} width="2.5em" height="2.5em" />
                  </a>
                  <span className="link-name">Crowdin</span>
                </div>
              </div>
            </Col>
            <Col
              xs="10"
              sm="5"
              md="4"
              xl="3"
              className="link-group m-1 rounded d-flex flex-column align-items-center justify-content-center"
            >
              <span className="m-2">Wanna Apply Official?</span>
              <div className="m-1 d-flex justify-content-center">
                <div className="m-2 link-container d-flex flex-column justify-content-center align-items-center">
                  <a
                    className="d-flex justify-content-center"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdpCi2BOfHO4gGa561oU-14FUiuKS2wgfhoVFgLIkE-ltvYSA/viewform"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      src={freaky_logo}
                      alt="logo"
                      width="40%"
                      height="auto"
                    />
                  </a>
                  <span className="link-name">FreakyOS Official</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}