import React from "react";
import './contact.css';

const Contact = ()=>{

    const contact_data =[
        {
            icon:"fa-solid fa-location-dot fa-2xl",
            heading:"OUR MAIN OFFICE",
            details:"City Avenue Commercial Complex,Wakad,Pune,India-411057."
        },
        {
            icon:"fa-solid fa-phone fa-2xl",
            heading:"PHONE NUMBER",
            details:"+91 123-456-7890"
        },
        {
            icon:"fa-regular fa-envelope fa-2xl",
            heading:"EMAIL",
            details:"eventmanaget@gmail.com"
        }
    ]

    return(
        <>
            <div className="contact-heading">
                <h1><b><i>Contact Us</i></b></h1>
            </div>
            <div className="contact-details" style={{backgroundImage:"URL('./images/contact.jpeg')"}}>
            <div className="contact-cards">
            {
                    contact_data.map((val)=>{
                        return(
                            <>
                                <div className="contact-card">
                                    <i class={val.icon}></i>
                                    <h6>{val.heading}</h6>
                                    <p>{val.details}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
                
                <div className="contact-box" >
                    <div className="contact-form">
                        <form className="contact-form">
                            <p>Email</p>
                            <div className="contact-form-inputfild">
                                <i className="far fa-envelope"></i>
                                <input type="email" placeholder="Enter your Email" required/>
                            </div>
                            <p>Name</p>
                            <div className="contact-form-inputfild">
                                <i className="far fa-user"></i>
                                <input type="text" placeholder="Enter your Name" required/>
                            </div>
                            <p>Message</p>
                            <div className="contact-form-inputfild">
                                <i className="far fa-message"></i>
                                <input type="" placeholder="Enter your Message" required/>
                            </div>
                            <div className="contact-button">
                                <button> SUBMIT</button>
                            </div>
                        </form>
                    </div>
                    <div className="details">
                        <h1>Get In Touch</h1>
                        <p><b><i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem mollitia unde consequuntur. Excepturi, cupiditate. Consequatur!</i></b></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi explicabo nobis earum aspernatur nemo aliquid veritatis laudantium quos, fugiat, odio dolore, unde quo! Dolor, aliquid.</p>
                    </div>
                </div>
            </div>
            <div className="demo"></div>
        </>
    )
}

export default Contact;