import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalNavbar from './components/GlobalNavbar';
import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';
import GlobalHeader from './components/GlobalHeader';
import Prices from "./components/Prices";
import PhotoGallery from "./components/Gallery";
import Contact from "./components/Contact";
import ContactFooter from "./components/ContactFooter";


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <GlobalHeader />
            <GlobalNavbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/menu" component={Menu} />
            <Route path="/prices" component={Prices} />
            <Route path="/gallery" component={PhotoGallery} />
            <Route path="/contact" component={Contact} />
            <ContactFooter />
          </div>
        </Router>
    );
  }
}

export default App;
