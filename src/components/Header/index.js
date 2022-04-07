import React from 'react';
import './style.css'; 

function Header() {

    return (
        <nav id="navbar" className="nav-menu navbar navbar-expand-lg">
            <ul className="">
                <li><a href="#hero" className="nav-link scrollto active"><span>Home</span></a></li>
                <li><a href="#about" className="nav-link scrollto"><span>About</span></a></li>
                <li><a href="#skills" className="nav-link scrollto"><span>Skills</span></a></li>
                <li><a href="#portfolio" className="nav-link scrollto"><span>Portfolio</span></a></li>
                <li><a href="#contact" className="nav-link scrollto"><span>Contact</span></a></li>
            </ul>
        </nav>
    )
}

export default Header;