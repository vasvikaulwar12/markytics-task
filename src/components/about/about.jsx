import React from "react";
import "./about.css";
import Aboutcard from "./aboutCard";

const About = () =>{
    return(
        <>
        <div className="about" style={{backgroundImage:"URL('./images/about.png')"}}>
            <div className="about-content">
            <h1><b><i>About Us</i></b></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dicta! Mollitia qui repellat, quis at rem quibusdam, dolores natus non dolore praesentium, corrupti nisi maxime.</p>
            </div>
        </div>
        <Aboutcard/>
        </>
    )
}

export default About;