import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Menu extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-1">
                </div>
                <Jumbotron className="home-jumbo col-xs-10">
                    <div className="col-xs-12">
                        <h1>Menu</h1>
                    </div>
                    <div className="col-xs-6">
                        <h1 className="menuItem-title">The Cakes</h1>
                        <h2 className="menu-item">Yellow Butter Cake</h2>
                        <h2 className="menu-item">Devil's Fudge Cake</h2>
                        <h2 className="menu-item">Vanilla Sponge Cake</h2>
                        <h2 className="menu-item">Almond Sponge Cake</h2>
                        <h2 className="menu-item">Chocolate Sponge Cake</h2>
                        <h2 className="menu-item">Angel Food Cake</h2>
                        <h2 className="menu-item">Lemon Poppy Seed Cake</h2>
                    </div>
                    <div className="col-xs-6">
                        <h1 className="menuItem-title">On The Inside</h1>
                        <h2 className="menu-item">Vanilla Buttercream</h2>
                        <h2 className="menu-item">Chocolate Buttercream</h2>
                        <h2 className="menu-item">Mocha Buttercream</h2>
                        <h2 className="menu-item">Citrus Buttercream</h2>
                        <h2 className="menu-item">Raspberry Jam</h2>
                        <h2 className="menu-item">Strawberry Jam</h2>
                        <h2 className="menu-item">Blackberry Jam</h2>
                        <h2 className="menu-item">Dark Chocolate Ganche</h2>
                        <h2 className="menu-item">White Chocolate Ganche</h2>
                        <h2 className="menu-item">Lemon Cream Cheese Frosting</h2>
                    </div>
                    <div className="col-xs-12">
                        <h1 className="menuItem-title">Covered With</h1>
                        <h2 className="menu-item">Buttercream Frosting</h2>
                        <h2 className="menu-item">Lemon Cream Cheese Frosting</h2>
                        <h2 className="menu-item">Fondant</h2>
                        <h2 className="menu-item">Mirror Glaze</h2>
                    </div>
                    <div className="col-xs-12">
                        <h2 className="menu-tag">Decorated to your unique order. Let me help you design your dream cake!</h2>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
