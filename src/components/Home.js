import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-1">
        </div>
        <Jumbotron className="home-jumbo col-xs-10">
          <div className=" decor col-xs-2">
            <h1>~</h1>
          </div>
          <div className="col-xs-8">
            <h3 className="welcome-text">Creating beautiful cakes from my home for your unique occasion</h3>
          </div>
          <div className=" decor col-xs-2">
            <h1>~</h1>
          </div>
        </Jumbotron>
        <div className="col-xs-1">
        </div>
      </div>
    );
  }
}
