import React from "react";
import "./about.css";

const Aboutcard = () =>{

    const card_info_data=[
        {
            info_image:"./images/icon1.png",
            info_heading:"Friendly Team",
            info_details:"Lorem ipsum dolor sit amet, elit. Magnam, veritatis!",
            info_a:"About Us",
        },
        {
            info_image:"./images/icon2.png",
            info_heading:"Perfect Venues",
            info_details:"Lorem ipsum dolor sit amet, elit. Magnam, veritatis!",
            info_a:"Our Venues",
        },
        {
            info_image:"./images/icon3.png",
            info_heading:"Unique Senarios",
            info_details:"Lorem ipsum dolor sit amet, elit. Magnam, veritatis!",
            info_a:"Our Parties",
        },
        {
            info_image:"./images/icon4.png",
            info_heading:"Unforgetable Time",
            info_details:"Lorem ipsum dolor sit amet, elit. Magnam, veritatis!",
            info_a:"Client Review",
        }
    ]


    return(
        <>
        
        <div className="home-cards">
            {
                card_info_data.map((val)=>{
                    return(
                        <>
                            <div className="info-card">
                                <img className="info-card-icon" src={val.info_image} alt="icon 1"/>
                                <h5>{val.info_heading}</h5>
                                <p>{val.info_details}</p>
                                <a style={{color:"#f76636"}}>{val.info_a}</a>
                            </div>
                        </>
                    )
                })
            } 
        </div>
        
        </>
    )
}

export default Aboutcard;