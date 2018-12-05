import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-1">
                </div>
                <Jumbotron className="home-jumbo col-xs-10">
                    <div className="col-xs-12">
                        <h1 className="about-title">About The Baker</h1>
                    </div>
                    <div className="col-xs-12">
                        <p className="about-text">Growing up here in Snohomish, some of my favorite memories are of baking delicious treats with my mom. We had so much fun trying out new things on a whim and I certainly developed a love for baking, not to mention a sweet tooth!</p>
                    </div>
                    <div className="col-xs-12">
                        <p className="about-text"> After school I spent some time in Canada studying and working at a Bible School and deepening my relationship with the Lord Jesus. That's where I met my British Husband, and after our wedding, we moved to Scotland for our first 3 years together. There I worked in Scotland's oldest bakery, learning their decorating secrets and all about traditional Scottish sweets.</p>
                    </div>
                    <div className="col-xs-12">
                        <p className="about-text"> It was a valuable time of learning and growing. It's also where our daughter Emma was born, and once again our lives were changed! Now we're back in WA state and I'm truly living my dream of making beautiful and delicious cakes from my home while I also care for my beautiful, no longer baby girl! Using the tried and tested techniques I learned in the bakery, I love creating the cake that will perfectly suit your occasion!</p>
                    </div>
                    <div className="col-xs-12">
                        <p className="about-text">The skies the limit, whether your need is a birthday, baby shower, wedding or an anniversary! I'd be honoured to help with your cake needs, so get in touch! </p>
                    </div>
                    <div className="col-xs-3">
                    </div>
                    <div>
                        <img className="landingPhoto col-xs-6" src={require("./images/aboutPhoto.jpg")} alt="The Baker"/>
                    </div>
                    <div className="col-xs-3">
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
