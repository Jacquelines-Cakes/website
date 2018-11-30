import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Prices extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-1">
                </div>
                <Jumbotron className="home-jumbo col-xs-10">
                    <div className="col-xs-12">
                        <h1>Prices</h1>
                    </div>
                    <div className="col-xs-4">
                        <h2 className="priceItem-title">Size</h2>
                        <h2 className="priceItem">4 inch</h2>
                        <h2 className="price-item">6 inch</h2>
                        <h2 className="price-item">8 inch</h2>
                        <h2 className="price-item">9 inch</h2>
                        <h2 className="price-item">10 inch</h2>
                        <h2 className="price-item">12 inch</h2>
                        <h2 className="price-item">14 inch</h2>
                    </div>
                    <div className="col-xs-5">
                        <h2 className="priceItem-title">Serves</h2>
                        <h2 className="priceItem">1 - 3</h2>
                        <h2 className="price-item">4 - 6</h2>
                        <h2 className="price-item">8 - 10</h2>
                        <h2 className="price-item">10 - 12</h2>
                        <h2 className="price-item">14 - 16</h2>
                        <h2 className="price-item">18 - 24</h2>
                        <h2 className="price-item">26-32</h2>
                    </div>
                    <div className="col-xs-3">
                        <h2 className="priceItem-title">Starts At</h2>
                        <h2 className="priceItem">$20</h2>
                        <h2 className="price-item">$28</h2>
                        <h2 className="price-item">$36</h2>
                        <h2 className="price-item">$42</h2>
                        <h2 className="price-item">$50</h2>
                        <h2 className="price-item">$66</h2>
                        <h2 className="price-item">$85</h2>
                    </div>
                    <div className="col-xs-12">
                        <p id="price-disclaimer">** prices are base prices only and may increase with orders requiring extra fondant, allergen free ingredients or complicated cake designs **</p>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
