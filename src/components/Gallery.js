import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import ControlledCarousel from '../components/Carousel';

export default class Gallery extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Gallery</h1>
        </Jumbotron>
        <ControlledCarousel />
      </Grid>
    );
  }
}
