import React, { Component } from 'react';
import Gallery from "react-photo-gallery";
import photolist from './PhotoList';
import {Jumbotron} from "react-bootstrap";

export default class PhotoGallery extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <Jumbotron className="Jumbotron-Global-Settings">
                    <Gallery photos={photolist} />
                </Jumbotron>
            </div>
        );
    }
}


