import React, { Component } from "react";
import ReactGA from 'react-ga';
// import banner from 'assets/images/banner.jpg';
// import {
//   Jumbotron,
//   Container,
//   UncontrolledCarousel
// } from "reactstrap";
// import freaky_01 from 'assets/images/freaky_01.png';
// import freaky_02 from "assets/images/freaky_02.png";
// import freaky_03 from "assets/images/freaky_03.png";
// import freaky_04 from 'assets/images/freaky_04.png';
// import freaky_05 from "assets/images/freaky_05.png";
// import freaky_06 from 'assets/images/freaky_06.png';
// import freaky_07 from "assets/images/freaky_07.png";
// import freaky_08 from "assets/images/freaky_08.png";
// import freaky_09 from "assets/images/freaky_09.png";
// import freaky_10 from "assets/images/freaky_10.png";
function initializeReactGA() {
  ReactGA.initialize(process.env.REACT_APP_GA_ID);
  ReactGA.pageview('/');
}

// const item = [
//   {
//     src: freaky_03,
//     altText: "",
//     caption: "",
//   },
//   {
//     src: freaky_02,
//     altText: "",
//     caption: "",
//   },
//   {
//     src: freaky_01,
//     altText: "",
//     caption: "",
//   },
//   {
//     src: freaky_04,
//     altText: "",
//     caption: "",
//   },
//   {
//     src: freaky_07,
//     altText: "",
//     caption: "",
//   },
//   {
//     src: freaky_06,
//     altText: "",
//     caption: "",
//   },
//   {
//     src: freaky_05,
//     altText: "",
//     caption: "",
//   },
//   {
//     src: freaky_08,
//     altText: "",
//     caption: "",
//   },
//   {
//     src: freaky_09,
//     altText: "",
//     caption: "",
//   },
//   {
//     src: freaky_10,
//     altText: "",
//     caption: "",
//   }
// ];

export default class Home extends Component {
  render() {
    initializeReactGA();
    return (
      <React.Fragment>
        <div>
          {/* <Jumbotron fluid>
            <Container className="w-100"> */}
          <div class="p-5 d-flex flex-column align-items-center">
            <h1 className="display-5">FreakyOS</h1>
            <p>
              If you're a Freak! Then you're at the right place. Checkout our
              custom rom and feel The Freakiness!
            </p>
          </div>
          <h3 class="p-5 d-flex flex-column align-items-center">
            {/* Checkout some of our screenshots! */}
          </h3>
          {/* <div className="d-flex justify-content-center" style={{height:"auto", width:"300px"}}>
            <UncontrolledCarousel items={item} />
          </div> */}
          {/* </Container>
          </Jumbotron> */}
        </div>
      </React.Fragment>
    );
  }
}