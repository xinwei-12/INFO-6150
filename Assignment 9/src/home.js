import React, {Component} from "react";
import Card from "./card";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <p>Welcome</p>
                <Card id="crabNebula" img="crabNebula.png" title="Introduction of the Universe"
                      text="The universe(Latin: universus) is all of space and time and their contents, including planets,
                       stars, galaxies, and all other forms of matter and energy. The Big Bang theory is the prevailing
                       cosmological description of the development of the universe. According to estimation of this theory,
                       space and time emerged together 13.799±0.021 billion years ago, and the universe has been expanding
                       ever since. While the spatial size of the entire universe is unknown, the cosmic inflation equation
                       tells us that it must have a minimum diameter of 23 trillion light years, and it is possible to
                       measure the size of the observable universe, which is approximately 93 billion light-years in diameter
                       at the present day."/>
            </div>
        )
    }
}

export default Home;