import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

class Main extends Component {
  render() {
    return (
        <HashRouter>
            <h1>Nixon's Solutions</h1>
            <ul className="header">
                <li><NavLink className="navItem" exact to="/">Home</NavLink></li>
                <li><NavLink className="navItem" to="/about">About</NavLink></li>
                <li><NavLink className="navItem" to="/prepaid">Wireless Prepaid</NavLink></li>
                <li><NavLink className="navItem" to="/internet">Internet</NavLink></li>
                <li><NavLink className="navItem" to="/itservices">IT Services</NavLink></li>
                <li><NavLink className="navItem" to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </div>
            <footer className="footer">
                <p className="copyright">© 2019 BY NIXON'S SOLUTIONS</p>
            </footer>
        </HashRouter>
    );
  }
}
 
export default Main;