import React from "react";
import './footer.css';


const Footer =()=>{
    return(
        <>
        <footer>
            <div className="footer" id="footer">
                <div className="footer-content">
                    <img className="footerlogo" src="./images/logot.png" alt="logo" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla harum fugit molestias exercitationem consequatur eius dolorem alias quos recusandae.
                    </p>
                </div>
                <div className="footer-content-center">
                    <h3 className="footer-heading" >Links
                        <div className="underline"><span></span></div>
                    </h3>
                    <ul className="footerList">
                        <li><a href="home.html">Home</a></li>
                        <li><a href="service.html">Services</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-content">
                    <h3 className="footer-heading">Get In Touch
                        <div className="underline"><span></span></div>
                    </h3>
                    <p>office No.617,</p>
                    <p>City Avenue Commercial Complex,</p>
                    <p>Wakad,Pune,India-411057.</p>
                    <p className="email">eventmanagement@gmail.com</p>
                    <p><b>+91 123-456-7890</b></p>
                </div>
                <div className="footer-content">
                    <h3 className="footer-heading">Newsletter
                        <div className="underline"><span></span></div>
                    </h3>
                    <form className="footer-email">
                     <i className="far fa-envelope"></i>
                        <input type="email" placeholder="Enter your email id" required/>
                        <button type="submit"><i class="fas fa-arrow-right"></i></button>
                    </form>
                    <div className="social-icons">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-whatsapp"></i>
                        <i class="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <hr/>             
            <div className="copyright">
                  <p>Copyright 2024 © Event Management.com - All Rights Reserved</p>
            </div>
        </footer>
        
        </>
    )
}

export default Footer;