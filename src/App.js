import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Hero from './components/Hero';
import CustomNavbar from './components/CustomNavbar';
import About from './components/About';
import Menu from './components/Menu';
import Prices from './components/Prices';
import Gallery from './components/Gallery';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Hero />
          <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/prices" component={Prices} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
