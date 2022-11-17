import React from "react";
import "./App.css";
import Inputbox from "./components/Inputbox";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Steps from "./components/Steps";
import Footer from "./components/Footer";

function App(props) {
  return (
    <Router>
      <>
        <Navbar
          logo="OTT"
          home="home"
          about="about"
          userguide="how to use"
          contact="contact"
        />
        <Switch>
          <div>
            <Route exact path="/">
              <Inputbox heading="ott - online text transformer" />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>
          </div>
        </Switch>
        <Steps />
        <Footer />
      </>
    </Router>
  );
}

export default App;
