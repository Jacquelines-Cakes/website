import React, { Component } from 'react';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero-wrapper row">
        <div className="col-xs-3">
          <img src={require("./images/icon.png")} height={100}  alt={("cake icon")}  />
        </div>
        <div className="col-xs-9">
          <a href="/"><h1 className="title">Jacqueline's Cakes </h1></a>
        </div>
      </div>
    );
  }
}
