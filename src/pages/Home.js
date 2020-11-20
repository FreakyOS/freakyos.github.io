import React, { Component } from "react";
import ReactGA from 'react-ga';
import Gallery from 'react-photo-gallery';
import freaky_01 from 'assets/images/freaky_01.png';
import freaky_02 from "assets/images/freaky_02.png";
import freaky_03 from "assets/images/freaky_03.png";
import freaky_04 from 'assets/images/freaky_04.png';
import freaky_05 from "assets/images/freaky_05.png";
import freaky_06 from 'assets/images/freaky_06.png';
import freaky_07 from "assets/images/freaky_07.png";
import freaky_08 from "assets/images/freaky_08.png";
import freaky_09 from "assets/images/freaky_09.png";
import freaky_10 from "assets/images/freaky_10.png";

function initializeReactGA() {
  ReactGA.initialize(process.env.REACT_APP_GA_ID);
  ReactGA.pageview('/');
}

 const images = [
   {
     src: freaky_03,
     width: 2,
     height: 2
   },
   {
     src: freaky_02,
     width: 2,
     height: 2
   },
   {
     src: freaky_01,
     width: 2,
     height: 2
   },
   {
     src: freaky_04,
     width: 2,
     height: 2
   },
   {
     src: freaky_07,
     width: 2,
     height: 2
   },
   {
     src: freaky_06,
     width: 2,
     height: 2
   },
   {
     src: freaky_05,
     width: 2,
     height: 2
   },
   {
     src: freaky_08,
     width: 2,
     height: 2
   },
   {
     src: freaky_09,
     width: 2,
     height: 2
   },
   {
     src: freaky_10,
     width: 2,
     height: 2
   }
 ];

export default class Home extends Component {
  render() {
    initializeReactGA();
    return (
      <React.Fragment>
        <h1 className="m-10 d-flex justify-content-center">FreakyOS</h1>
        <div className="mt-10 d-flex flex-column align-items-center">
          <div class="p-10 w-70 bg-gray-900 rounded">
          <p className="md:text-centre md:text-xl sm:text-sm">
            If you're a Freak! Then you're at the right place. Checkout our
            custom rom and feel The Freakiness!
          </p>
        </div>
        </div>
        <h1 className="m-10 d-flex justify-content-center">About Us</h1>
        <div className="flex justify-center">
          <div className="p-10 md:w-1/2 bg-gray-900 rounded">
          <p className="text-center md:text-xl sm:text-sm">
            Freaky OS is AOSP based Custom ROM, primarily focused to deliver highly optimized operating system with minimal customization to the end user.
          </p>
        </div>
        </div>
        <h1 className="m-10 d-flex justify-content-center text-4xl">Consistent Updates!</h1>
        <div className="flex justify-center">
          <div className="p-10 md:w-1/2 bg-gray-900 rounded">
          <p className="text-center md:text-xl sm:text-sm">
            Freaky OS team makes sure the users get every month security patch and feature updates and we have our dedicated updater app which keeps your device up to date.
          </p>
        </div>
        </div>
        <div className="p-5 d-flex flex-column align-items-center">
          <h1 className="d-flex justify-content-center">
            Screenshots!
          </h1>
        </div>
        <div>
          <Gallery photos={images} />
        </div>
      </React.Fragment>
    );
  }
}