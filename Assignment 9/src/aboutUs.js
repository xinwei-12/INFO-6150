import React, {Component} from "react";
import Card from "./card";

class AboutUs extends Component {
    render() {
        return(
            <div>
                <h2>About Us</h2>
                <p>Welcome</p>
                <Card id="aboutUs" img="logo.svg" title="About Us" text="I am a student in Northeastern University.
                This is the assignment9 content of INFO6150."/>
            </div>
        )
    }
}

export default AboutUs;