import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Contact extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <Jumbotron className="Jumbotron-Global-Settings">
                    <div className="row justify-content-center">
                        <h2 className="Contact-Header col-12">Get in touch to start planning the perfect cake for your occasion!</h2>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
