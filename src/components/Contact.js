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
                        <h2 className="contact-text">Get in touch to start planning the perfect cake for your occasion!</h2>
                    </div>
                    <div className="col-xs-12">
                        <h2 className="contact-method">- jacquelinescakes614@gmail.com -</h2>
                    </div>
                    <div className="col-xs-12">
                        <h2 className="contact-method">- 425-426-7581 -</h2>
                    </div>
                    <div className="col-xs-12">
                        <h2 className="contact-text">Follow me at</h2>
                    </div>
                    <div className="row">
                        <div className="col-xs-4">
                        </div>
                        <div className="col-xs-2">
                            <a href="https://www.facebook.com/CAKESjacquelines/"><img src={require("./images/facebook.png")} className="icon" alt="facebook icon"/></a>
                        </div>
                        <div className="col-xs-2">
                            <a href="https://www.instagram.com/jacquelines.cakes/"><img src={require("./images/instagram.png")} className="icon" alt="instagram icon"/></a>
                        </div>
                        <div className="col-xs-4">
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
