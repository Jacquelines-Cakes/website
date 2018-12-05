import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

export default class ControlledCarousel extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-1.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-2.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-3.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-4.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-5.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-6.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-7.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-8.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-9.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-10.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-11.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-12.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-13.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-14.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-15.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-16.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-17.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-18.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-19.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-20.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-21.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-22.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-23.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-24.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-25.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-26.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-27.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-28.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-29.jpg")} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="900x500" src={require("./images/carousel-30.jpg")} />
                </Carousel.Item>
            </Carousel>
        );
    }
}
