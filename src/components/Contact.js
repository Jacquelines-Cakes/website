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
                      <div>
                        <from>
                          <label htmlFor="name" className="Contact-Name">Name:</label>
                          <input name="Name" type="text" required placeholder="Your Name" className="Contact-Name-Input"/>
                          <label htmlFor="email" className="Contact-Email">Email:</label>
                          <input name="Email" type="text" required placeholder="Email" className="Contact-Email-Input"/>
                          <button type="submit" className="Contact-Submit-Button">Get In Touch</button>
                        </from>
                      </div>
                </Jumbotron>
            </div>
        );
    }
}
