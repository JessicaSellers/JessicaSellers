import React, { useState } from 'react';
import '../App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

  function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className="sticky">
        <Navbar light expand="md">
          <NavbarBrand href="/"><img src="logo.png" alt="Jessica Sellers" height="25px"/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#/#Work">Work</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#/#About">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="Jessica-Sellers.pdf" target="_blank" rel="noopener noreferrer">Resume</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  } 

  export default Navigation;