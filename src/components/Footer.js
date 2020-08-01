import React, { Component } from 'react';
import { Icon } from "@iconify/react";
import flagForIndia from "@iconify/icons-emojione-v1/flag-for-india";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer fixed-bottom freaky-footer">
          <div className='container text-muted d-flex flex-column justify-content-center align-items-center'>
            <p>Made with ❤ in {" "}
              <span>
                <Icon icon={flagForIndia} width="2rem" height="2rem" />
              </span>
              <span>{" "} | Powered by &copy; TheFreaks</span>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}