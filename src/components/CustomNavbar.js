import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect className="row">
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav
            bsStyle="tabs"
            justified
            >
            <NavItem eventKey={1} componentClass={Link} href="/about" to="/about">
              ABOUT ME
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/menu" to="/menu">
              MENU
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/prices" to="/prices">
              PRICES
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/gallery" to="/gallery">
              GALLERY
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/contact" to="/contact">
              CONTACT ME
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
