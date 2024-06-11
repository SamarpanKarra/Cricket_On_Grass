
import React, { useState } from 'react';
import '../css/Navbar.css';
import Image from "../images/CricOnGrass-Nav.png"
import { Container,Button } from 'react-bootstrap';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }
    return (
       
        <nav className={`navbar py-0 ${isOpen ? 'open ' : ''}`}>
            <Container>
            <div className='nav-container py-0'>
                <a className='ml-5 px-4 py-1' href="/"><img src={Image} style={{width:"50px"}}></img></a>
                {isOpen ? (
                    <div className='close-icon fs-4'  style={{paddingLeft:"40%",fontWeight:"600"}} onClick={toggleNavbar}>X</div>
                ) : ( <>
                    <div className='menu-icon ' style={{paddingLeft:"40%"}} onClick={toggleNavbar}>
                        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    </div>
                    </>
                )}
               
                <ul className={`nav-links  ${isOpen ? 'open  ' : ' '}`}>
                    <a href='/services/1/' style={{ color: "black", textDecoration: "none" }}><li > BOX CRICKET</li></a>
                    <a href='/services/2/' style={{ color: "black", textDecoration: "none" }}><li >ARTIFICIAL GRASS</li></a>
                    <a href='/services/3/' style={{ color: "black", textDecoration: "none" }}><li>ASTRO TURF</li></a>
                    <a href='/services/4/' style={{ color: "black", textDecoration: "none" }}><li>CRICKET NET</li></a>
                    <a href='/about' style={{ color: "black", textDecoration: "none" }}><li>ABOUT</li></a>
                   <div className='mb-2  ' style={{paddingRight:"20px"}}> <Button className="d-block d-sm-none px-3" href="https://wa.me/9492438138" variant="success">CONTACT </Button></div>
                </ul>
               
                <div className='mb-3'>
            <Button className="d-none d-sm-block px-3"  href="https://wa.me/9492438138" variant="success">CONTACT</Button>
            </div>
            </div>
          
            </Container>
        </nav>
        
    );

}
export default Navbar;