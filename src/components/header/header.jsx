import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import './header.css';

const HeaderContainer = styled.header`
  display: flex; 
  justify-content: space-between;
  position:sticky;
  top:40px;
  right:0;
  align-items: center;
  padding: 20px 30px;
  background-color:white;
  z-index:2;
  `;

const Headbar = styled.header`
    position:sticky;
    top:0;
    right:0;
    width: 100%;
    display: flex;
    color: #f1efef;
    justify-content: space-between;
    background-image: linear-gradient(to right,#f73936, orange,rgb(211, 211, 22)); 
    padding: 15px;
    z-index: 3 ;
    font-size: 14px;`;

const Header = ()=> {

    const [menu, setmenu] = useState("Home");
    const [isVisible, setVisible] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const togglevisibility = () =>{
        setVisible(!isVisible);
        setmenu("EventList")
    }

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
        // isNavOpen=true;
    };


  return (
    <>
    <Headbar>
        <div className="conpany-info">
            <i class="fa fa-phone"></i>  <span> +91 123-456-7890</span>
           <i class="fa-regular fa-envelope"></i>   <span>eventmanagement@gmail.com</span>
        </div>
        
        <div className="social-icons">
            <i class="fa-brands fa-facebook-f"></i>  
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-google-plus-g"></i>
            <i class="fa-brands fa-linkedin-in"></i>
        </div>
    </Headbar>

    <HeaderContainer>
        <img className="headerlogo"src="./images/logo.png" alt="" />

        <button className="hamburger" onClick={toggleNav}>
            ☰
        </button>
        
        <nav className={`nav-links ${isNavOpen ? 'open' : ''}`}>
            <Link to="/" onClick={()=>setmenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <Link to="/About" onClick={()=>setmenu("About")} className={menu==="About"?"active":""}>About</Link>
            <Link to="/EventList" onClick={togglevisibility} className={menu==="EventList"?"active":""}>Events</Link>
            <Link to="/Contact" onClick={()=>setmenu("Contact")} className={menu==="Contact"?"active":""}>Contact</Link>
            {isVisible &&(
            <div className="serviceList">
                <ul>
                    <li><Link to="/EventDetails">Event list</Link></li>
                    <li><Link to="/AddEvent">Add Event</Link></li>
                </ul>
            </div>
            )}
        </nav>
        
        <div className="button">
            <button className='login-Button'>Login</button>
        </div>
    </HeaderContainer>
    </>
    
  );
}

export default Header;
