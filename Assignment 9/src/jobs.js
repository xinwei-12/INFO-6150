import React, {Component} from "react";
import Card from "./card";

class Jobs extends Component {
    render() {
        return(
            <div>
                <h2>Jobs</h2>
                <p>Welcome</p>
                <Card id="jobs" img="logo.svg" title="App Store Intern" text="Apple’s App Store is the world's largest and most innovative software store, serving hundreds of millions of iPhone, iPad and Mac customers. App Store & Marketing team are to help customers know the great contents available on App Store and enable them to get the best experience. The team is seeking an intern to join us and support App Store and Marketing projects."/>
                <Card id="jobs" img="logo.svg" title="HPC and AI Project Intern" text="Would you like to be a part of one of the most exciting technology and gaming companies in the world? NVIDIA is the global leader in high-performance computing and AI. We are looking for HPC and AI Project Interns."/>
            </div>
        )
    }
}

export default Jobs;