import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <Jumbotron className="Jumbotron-Global-Settings">
                    <div className="row justify-content-center">
                        <h2 className="About-Header">About The Baker</h2>
                    </div>
                    <div>
                        <img className="About-Photo" src={require("../images/aboutPhoto.jpg")} alt="The Baker"/>
                        <p>Growing up here in Snohomish, some of my favorite memories are of baking delicious treats with my mom. We had so much fun trying out new things on a whim and I certainly developed a love for baking, not to mention a sweet tooth!</p>
                        <p>After school I spent some time in Canada studying and working at a Bible School and deepening my relationship with the Lord Jesus. That's where I met my British Husband, and after our wedding, we moved to Scotland for our first 3 years together. There I worked in Scotland's oldest bakery, learning their decorating secrets and all about traditional Scottish sweets.</p>
                        <p>It was a valuable time of learning and growing. It's also where our daughter Emma was born, and once again our lives were changed! Now we're back in WA state and I'm truly living my dream of making beautiful and delicious cakes from my home while I also care for my beautiful, no longer baby girl! Using the tried and tested techniques I learned in the bakery, I love creating the cake that will perfectly suit your occasion!</p>
                        <p>The sky is the limit, whether your need is a birthday, baby shower, wedding or an anniversary! I'd be honoured to help with your cake needs, so get in touch! </p>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
