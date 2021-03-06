import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Details from "./components/Details";
import SignUp from "./components/SignUp";
import Default from "./components/Default";
import Modal from "./components/Modal";
import About from "./components/About";
import Contact from "./components/Contact";
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {

  render() {
    return (
      <ParallaxProvider scrollAxis="HORIZONTAL">
      <React.Fragment>
      
        <Navbar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/details" component={Details} />
          <Route path="/about" component={About}/>
          <Route path="/signup" component={SignUp} />
          <Route path="/contact" component={Contact} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
</ParallaxProvider>
    );
  }
}

export default App;
