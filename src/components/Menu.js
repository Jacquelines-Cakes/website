import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Menu extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <Jumbotron className="Jumbotron-Global-Settings">
                    <div className="rowjustify-content-center">
                        <div className="col-12">
                            <h2 className="Menu-Header">Menu</h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <h2 className="Menu-Category-Header">Custom Cakes (Starting at $20.00)</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-10 col-md-8 col-lg-6">
                        <div className="row justify-content-center">
                            <div className="Menu-Wrapper col-8">
                                <h2 className="Menu-Titles">Cakes</h2>
                                <h2 className="Menu-Items">Yellow Butter Cake</h2>
                                <h2 className="Menu-Items">Devils Fudge Cake</h2>
                                <h2 className="Menu-Items">White Almond Cake</h2>
                                <h2 className="Menu-Items">Salted Caramel Cake</h2>
                                <h2 className="Menu-Items">Lemon Poppyseed Cake</h2>
                            </div>
                        </div>
                            <div className="row justify-content-center">
                            <div className="Menu-Wrapper col-8">
                                <h2 className="Menu-Titles">Fillings</h2>
                                <h2 className="Menu-Items">Raspberry Jam Filling</h2>
                                <h2 className="Menu-Items">Strawberry Jam Filling</h2>
                                <h2 className="Menu-Items">Blackberry Jam Filling</h2>
                                <h2 className="Menu-Items">Dark Chocolate Ganache</h2>
                            </div>
                        </div>
                        </div>
                        <div className="Menu-Wrapper col-10 col-md-6 col-lg-4">
                            <h2 className="Menu-Titles">Icings</h2>
                            <h2 className="Menu-Items">Vanilla Buttercream</h2>
                            <h2 className="Menu-Items">Chocolate Buttercream</h2>
                            <h2 className="Menu-Items">Mocha Buttercream</h2>
                            <h2 className="Menu-Items">Citrus Buttercream</h2>
                            <h2 className="Menu-Items">Strawberry Buttercream</h2>
                            <h2 className="Menu-Items">Mint Chocolate Chip Buttercream</h2>
                            <h2 className="Menu-Items">Maple Buttercream</h2>
                            <h2 className="Menu-Items">Caramel Buttercream</h2>
                            <h2 className="Menu-Items">Red Velvet Buttercream</h2>
                            <h2 className="Menu-Items">Cream Cheese Frosting</h2>
                            <h2 className="Menu-Items">Lemon Cream Cheese Frosting</h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <h2 className="Menu-Category-Header">Specialty Cakes (Starting at $24.00)</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="Menu-Wrapper col-8">
                            <p className="Specialty-Menu-Items">S’mores Cake</p>
                            <p className="Menu-Item-Description">Layers of chocolate cake, graham frosting and marshmallow crème filling, frosted in dark chocolate ganache and graham crumbs</p>
                            <h2 className="Specialty-Menu-Items">Pink Champagne Cake</h2>
                            <p className="Menu-Item-Description">Did someone say champagne? This festive champagne cake layered with smooth vanilla buttercream is the perfect showstopper dessert for a party!</p>
                            <h2 className="Specialty-Menu-Items">Red Velvet Cake</h2>
                            <p className="Menu-Item-Description">Dense and delicious, this tall beauty is layered with your choice of either red velvet buttercream or cream cheese frosting</p>
                            <h2 className="Specialty-Menu-Items">Lemon Poppyseed Cake</h2>
                            <p className="Menu-Item-Description">Layers of lemon poppyseed cake, fresh raspberry jam filling and lemon cream cheese frosting</p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12">
                            <h2 className="Menu-Tag">Decorated to your unique order. Let me help you design your dream cake!</h2>
                        </div>
                    </div>
                    <div className="Cake-Menu">
                      <form name="cake-order" action="/menu" method="post">
                        <label for="cakes" className="Cake-Cake-Order">Choose a Cake:</label>
                        <select name="cakes" id="cakes">
                          <option value="---">---</option>
                          <option value="Yellow Butter Cake">Yellow Butter Cake</option>
                          <option value="Devils Fudge Cake">Devils Fudge Cake</option>
                          <option value="White Almond Cake">White Almond Cake</option>
                          <option value="Salted Caramel Cake">Salted Caramel Cake</option>
                          <option value="Lemon Poppyseed Cake">Lemon Poppyseed Cake</option>
                        </select>
                        <label for="icings" className="Cake-Icing-Order">Choose an Icing:</label>
                        <select name="icings" id="icings">
                        <option value="---">---</option>
                          <option value="Vanilla Buttercream">Vanilla Buttercream</option>
                          <option value="Chocolate Buttercream">Chocolate Buttercream</option>
                          <option value="Mocha Buttercream">Mocha Buttercream</option>
                          <option value="Citrus Buttercream">Citrus Buttercream</option>
                          <option value="Mint Chocolate Chip Buttercream">Mint Chocolate Chip Buttercream</option>
                          <option value="Maple Buttercream">Maple Buttercream</option>
                          <option value="Caramel Buttercream">Caramel Buttercream</option>
                          <option value="Red Velvet Buttercream">Red Velvet Buttercream</option>
                          <option value="Cream Cheese Frosting">Cream Cheese Frosting</option>
                          <option value="Lemon Cream Cheese Frosting">Lemon Cream Cheese Frosting</option>
                        </select>
                        <label for="fillings" className="Cake-Filling-Order">Choose a Filling:</label>
                        <select name="fillings" id="fillings">
                          <option value="---">---</option>
                          <option value="Raspberry Jam Filling">Raspberry Jam Filling</option>
                          <option value="Strawberry Jam Filling">Strawberry Jam Filling</option>
                          <option value="Blackberry Jam Filling">Blackberry Jam Filling</option>
                          <option value="Dark Chocolate Ganache">Dark Chocolate Ganache</option>
                        </select>
                        <label for="Pickup" className="Cake-Pickup">Pickup/Delivery</label>
                        <select name="Pickup" id="Pickup">
                        <option value="---">---</option>
                        <option value="Pickup">Pickup</option>
                        <option value="Delivery">Delivery</option>
                        </select>
                        <label for="Custom" className="Cake-Custom">Customized/Specialty Decorations</label>
                        <input type="checkbox" id="Custom" name="Custom" value="Custom" className="Custom-Checkbox"/>
                        <button type="submit" className="Cake-Order-Submit">Submit Cake</button>
                      </form>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
