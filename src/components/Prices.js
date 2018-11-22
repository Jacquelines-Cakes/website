import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Prices extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-1">
        </div>
        <Jumbotron className="home-jumbo col-xs-10">
          <h1>Prices</h1>
            <div className="col-xs-12">
              <p className="price-disclaimer">** prices are base prices only and may increase with orders requiring extra fondant, allergen free ingredients or complicated cake designs **</p>
            </div>
        </Jumbotron>
      </div>
    );
  }
}
