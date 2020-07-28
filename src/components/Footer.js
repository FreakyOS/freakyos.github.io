import React, { Component } from 'react';
import { Icon } from "@iconify/react";
import flagForIndia from "@iconify/icons-emojione-v1/flag-for-india";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="p-1">
          <p style={{ float: "left" }}>
            Made with ❤ in{" "}
            <span>
              <Icon icon={flagForIndia} width="2rem" height="2rem" />
            </span>
          </p>
          <p style={{ float: "right" }}>Powered by &copy; FreakyOS</p>
        </div>
      </React.Fragment>
    );
  }
}