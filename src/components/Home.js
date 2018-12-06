import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-1">
                    </div>

                    <div className="decor col-xs-1">
                        <h1>~</h1>
                    </div>
                    <div className="col-xs-8">
                        <h3 className="welcome-text">Creating beautiful cakes from my home for your unique occasion</h3>
                    </div>
                    <div className="decor col-xs-1">
                        <h1>~</h1>
                    </div>

                    <div className="col-xs-2">
                    </div>
                </div>

                <div className="row">
                    <p>&nbsp;</p>
                </div>

                <div className="row">
                    <div className="col-xs-3">
                    </div>
                    <img className="landingPhoto col-xs-6" src={require("./images/landingPhotoV2.jpg")} alt="3 tier cake"/>
                </div>
            </div>
        );
    }
}