import React, { Component } from 'react';
import { Icon } from "@iconify/react";
import flagForIndia from "@iconify/icons-emojione-v1/flag-for-india";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="freaky-footer p-3 d-flex flex-column align-items-center justify-content-center">
          <p>Powered by &copy; FreakyOS</p>
          <p>
            Made with ❤ from {" "}
            <span>
              <Icon icon={flagForIndia} width="2rem" height="2rem" />
            </span>
          </p>
        </div>
      </React.Fragment>
    );
  }
}