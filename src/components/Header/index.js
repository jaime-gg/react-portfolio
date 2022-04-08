import React from 'react';
import './style.css';

// PULL IN THE NESSESSARY PROPS
function Header({ currentPage, handlePageChange }) {

    return (
        <nav>
            <nav id="navbar" className="nav-menu navbar1">
                {/* ON EACH CLICK, UPDATE THE 'CURRENT-PAGE' THROUGH THE 'HANDLE-PAGE-CHANGE' */}
                {/* WHEN ACTIVE, ADD AN 'ACTIVE' CLASS FOR HIGHLIGHTING THE NAV SELECTION */}
                <ul className="justify-content-center">
                    <li>
                        <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'active nav-link scrollto' : 'nav-link scrollto'} ><span>About Me</span></a>
                    </li>
                    <li>
                        <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'active nav-link scrollto' : 'nav-link scrollto'}><span>Resume</span></a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'active nav-link scrollto' : 'nav-link scrollto'}><span>Portfolio</span></a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'active nav-link scrollto' : 'nav-link scrollto'}><span>Contact</span></a>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}

export default Header;