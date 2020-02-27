import React, { Component } from 'react';

export default class GlobalHeader extends Component {
  render() {
    return (
        <div className="row justify-content-center w-100">
          <div className="GlobalHeader-Wrapper row col-10 col-md-10 col-lg-10">
            <div className="col-12 col-md-2 col-lg-2">
                <a href="/"><img className="GlobalHeader-Icon" src={require("../images/icon.png")} alt={("cake icon")} /></a>
            </div>
            <div className="col-12 col-md-10 col-lg-8">
              <a href="/"><h1 className="GlobalHeader-Title">Jacqueline's Cakes</h1></a>
            </div>
          </div>
        </div>
    );
  }
}
