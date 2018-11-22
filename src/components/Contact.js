import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Contact extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-1">
        </div>
        <Jumbotron className="home-jumbo col-xs-10">
          <div className="col-xs-12">
            <h1>Contact</h1>
          </div>
          <div className="col-xs-12">
            <h2 className="contact-text">Email me at " " to start planning the perfect cake for your occasion!</h2>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
