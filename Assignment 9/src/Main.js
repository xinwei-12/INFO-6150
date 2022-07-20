import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./home";
import AboutUs from "./aboutUs";
import Jobs from "./jobs";
import Contact from "./contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Assignment 9</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/aboutUs">About-Us</NavLink></li>
                    <li><NavLink to="/jobs">Jobs</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>

                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/aboutUs" component={AboutUs}/>
                    <Route path="/jobs" component={Jobs}/>
                    <Route path="/contact" component={Contact}/>
                </div>

                <div className="footer">
                    <small>Copyright &copy; 2022</small><br/>
                    <small>If you have any question, please contact:</small><br/>
                    <small><a href="mailto: chen.peng1@northeastern.edu">cao.xinw@northeastern.edu</a></small><br/>
                    <small>Terms and Conditions</small>
                </div>
            </div>
            </HashRouter>
        )
    }
}

export default Main;