import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <Jumbotron className="Jumbotron-Global-Settings">
                    <div className="row justify-content-center">
                        <h3 className="Home-Text">Creating beautiful cakes from my home for your unique occasion</h3>
                    </div>
                    <div className="row justify-content-center">
                        <img className="Home-Image w-75 h-75" src={require("../images/wedding-main.jpg")} alt="3 tier cake"/>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
