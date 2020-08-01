import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
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
      <div className='m-auto' style={{ height: "44px" }}>
        <Navbar color="light" light expand="sm" fixed="top" className='justify-content-center' style={{ height: "44px" }}>
          <NavbarBrand href="/" className='p-0'><img src={logo} alt='FreakyOS' style={{ width: "40px", height: "40px" }} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} className='ml-auto' />
          <Collapse isOpen={this.state.isOpen} onClick={this.toggle} navbar className='justify-content-center'>
            <Nav className="p-0 w-75 justify-content-around" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#/downloads">Downloads</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#/team">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#/links">Links</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div >
    );
  }
}