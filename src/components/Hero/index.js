import React from 'react';
import './style.css';

function Hero() {

    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Jaime Gallegos Garcia</h1>
                <p>Full Stack Web Developer</p>
            </div>
        </section>
    )
}

export default Hero;