import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Prices extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <Jumbotron className="Jumbotron-Global-Settings">
                    <div className="row justify-content-center">
                        <div>
                            <h2 className="Prices-Header">Pricing</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="Prices-Wrapper col-12 col-md-8 col-lg-4">
                            <h2 className="Prices-Titles">Custom Cakes</h2>
                            <h2 className="Prices-Items">4” Serves 1-3 $20</h2>
                            <h2 className="Prices-Items">6” Serves 4-6 $28</h2>
                            <h2 className="Prices-Items">8” Serves 8-10 $36</h2>
                            <h2 className="Prices-Items">9” Serves 10-12 $42</h2>
                            <h2 className="Prices-Items">10” Serves 14-16 $50</h2>
                            <h2 className="Prices-Items">12” Serves 18-24 $66</h2>
                            <h2 className="Prices-Items">14” Serves 26-32 $85</h2>
                        </div>
                        <div className="Prices-Wrapper col-12 col-md-8 col-lg-4">
                            <h2 className="Prices-Titles">Specialty Cakes</h2>
                            <h2 className="Prices-Items">4” Serves 1-3 $24</h2>
                            <h2 className="Prices-Items">6” Serves 4-6 $32</h2>
                            <h2 className="Prices-Items">8” Serves 8-10 $40</h2>
                            <h2 className="Prices-Items">9” Serves 10-12 $45</h2>
                            <h2 className="Prices-Items">10” Serves 14-16 $55</h2>
                            <h2 className="Prices-Items">12” Serves 18-24 $72</h2>
                            <h2 className="Prices-Items">14” Serves 26-32 $92</h2>
                        </div>
                        <div className="Prices-Wrapper col-12 col-md-8 col-lg-4">
                            <h2 className="Prices-Titles">Cupcakes</h2>
                            <h2 className="Prices-Items">Starts at $22/Dozen</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="Prices-Tag">Prices are base prices only and may increase with orders requiring extra fondant, allergen free ingredients or complicated cake designs.</p>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
