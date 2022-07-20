import React, {Component} from "react";
import Card from "./card";

class Contact extends Component {
    render() {
        return(
            <div>
                <h2>Contact</h2>
                <p>Welcome</p>
                <Card id="contact" img="logo.svg" title="Contact" text="If you have any question, please contact:
                cao.xinw@northeastern.edu" textOption="Our Location: Northeastern University"/>
            </div>
        )
    }
}

export default Contact;