import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer fixed-bottom freaky-footer">
          <div className='container text-muted d-flex flex-column justify-content-center align-items-center'>
            <p>
              Made with ❤ in India | Powered by &copy; TheFreaks
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}