import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class GlobalNavbar extends Component {
  render() {
    return (
      <Navbar className="container GlobalNavbar flex-column" expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="accordion" className="justify-content-center GlobalNavbar-Collapse">
          <Nav variant="tabs" fill="true" justify="true" className="GlobalNavbar-Nav py-2 px-5">
            <Nav.Link eventKey={1} as={NavLink} href="/about" to="/about" className="GlobalNavbar-Link">
              ABOUT&nbsp;ME
            </Nav.Link>
            <Nav.Link eventKey={2} as={NavLink} href="/menu" to="/menu" className="GlobalNavbar-Link">
              MENU
            </Nav.Link>
            <Nav.Link eventKey={3} as={NavLink} href="/prices" to="/prices" className="GlobalNavbar-Link">
              PRICES
            </Nav.Link>
            <Nav.Link eventKey={4} as={NavLink} href="/gallery" to="/gallery" className="GlobalNavbar-Link">
              GALLERY
            </Nav.Link>
            <Nav.Link eventKey={5} as={NavLink} href="/contact" to="/contact" className="GlobalNavbar-Link">
              CONTACT&nbsp;ME
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
