import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="row justify-content-center w-100">
                    <div className="Contact-Footer col-12 col-md-4 col-lg-3">
                        <a href="https://www.facebook.com/CAKESjacquelines/"><img src={require("../images/facebook.png")} className="Contact-Icon" alt="facebook icon"/></a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="https://www.instagram.com/jacquelines.cakes/"><img src={require("../images/instagram.png")} className="Contact-Icon" alt="instagram icon"/></a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="mailto:jacquelinescakes614@gmail.com"><img src={require("../images/email.png")} className="Contact-Icon" alt="email icon"/></a>
                    </div>
                </div>
                <div className="row justify-content-center w-100">
                    <div className="Contact-Footer col-12 col-md-4 col-lg-3">
                        425.426.7581
                    </div>
                </div>
            </div>
        );
    }
}