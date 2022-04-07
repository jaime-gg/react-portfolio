import React from 'react';
import './style.css'; 

function Header() {

    return (
        <nav id="navbar" className="nav-menu navbar navbar-expand-lg">
            <ul className="">
                <li><a href="#about" className="nav-link scrollto"><span>About</span></a></li>
                <li><a href="#Resume" className="nav-link scrollto"><span>Resume</span></a></li>
                <li><a href="#portfolio" className="nav-link scrollto"><span>Portfolio</span></a></li>
                <li><a href="#contact" className="nav-link scrollto"><span>Contact</span></a></li>
            </ul>
        </nav>
    )
}

export default Header;