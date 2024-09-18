import React from "react";
import "./home.css";
import Aboutcard from "../about/aboutCard";


const Home = () =>{

    return(
        <>
        <div className="home-content" style={{backgroundImage:"URL('./images/home.jpg')"}}>
            <div className="info-content">
                <h1 className="info-content-h1"><i>Lorem ipsum dolor sit amet consectetur.</i></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam voluptate cum, natus ea at unde praesentium voluptatibus harum sint. Fugiat ab nisi rem! In explicabo dolore cumque placeat sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, tempora at? Libero quia ad in suscipit accusantium! Iure enim repudiandae excepturi, molestias, vero, minus deleniti blanditiis ducimus culpa itaque tempore.</p>
                <button className="read-btn">Read More</button>
            </div>
        </div>
        <Aboutcard/>
        <div className="gallery">
            <h1><b><i>Event Gallery</i></b></h1>
            <div className="home-gallery">
                <img src="./images/event1.jpg" alt="event image"/>
                <img src="./images/event2.jpeg" alt="event image"/>
                <img src="./images/event3.jpeg" alt="event image"/>
                <img src="./images/event4.jpeg" alt="event image"/>
                <img src="./images/event5.webp" alt="event image"/>
            </div>
        </div>
        
        </>
    )
}

export default Home;