import React from "react";
import SeccionTutorial from "./components/SeccionTutorial";
import About from "./components/SeccionAbout";
import MyFooter from "./components/MyFooter";
import MyNavBar from "./components/MyNavBar";
import "./App.css";
import "./css/responsive.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App (){
   return (
      <Router>
        <div className="main-container">
          <MyNavBar />
          <Switch>
            <Route path="/" exact>
              <SeccionTutorial />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
        <MyFooter />
      </Router>
    );
  
}
