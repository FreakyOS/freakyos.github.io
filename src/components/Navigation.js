import React, { Component } from 'react';
import logo from 'assets/images/logo.png';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      setIsOpen: false,
    }
    this.toggle = this.toggle.bind(this);


    // const 
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top d-flex flex-row align-items-center justify-content-center">
          <div className='d-flex align-items-center justify-content-center navbar-collapse collapse show'>
            <div className='freaky-navbar-nav'>
              <a className="d-flex" href="#/" alt='FreakOS'>
                <img src={logo} alt='FreakyOS' style={{ width: "40px", height: "40px" }} />
              </a>
              <div className='freaky-nav-item'>
                <a className='nav-link' href='#/'>Home</a>
              </div>
              <span>&middot;</span>
              <div className='freaky-nav-item'>
                <a className='nav-link' href='#/downloads'>Downloads</a>
              </div>
              <span>&middot;</span>
              <div className='freaky-nav-item'>
                <a className='nav-link' href='#/team'>Team</a>
              </div>
              <span>&middot;</span>
              <div className='freaky-nav-item'>
                <a className='nav-link' href='#/links'>Links</a>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}