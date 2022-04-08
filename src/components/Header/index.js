import React from 'react';
import './style.css';

function Header({ currentPage, handlePageChange }) {

    return (
        <nav id="navbar" className="nav-menu navbar navbar-expand-lg">
            <ul className="">
                <li>
                    <a href="#about" onClick={() => handlePageChange('About')} className="nav-link scrollto"><span>About</span></a>
                </li>
                <li>
                    <a href="#resume" onClick={() => handlePageChange('Resume')} className="nav-link scrollto"><span>Resume</span></a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className="nav-link scrollto"><span>Portfolio</span></a>
                </li>
                <li>
                    <a href="#contact" onClick={() => handlePageChange('Contact')} className="nav-link scrollto"><span>Contact</span></a>
                </li>
            </ul>
        </nav>
    )
}

export default Header;