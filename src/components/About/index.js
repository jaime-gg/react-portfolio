import React from 'react';
import './style.css';

function About() {

    return (
        <section id="about" className="about">
            <div className="container">

                <div>
                    <h2>About</h2>
                </div>

                <div className="row">
                    <div className="content" data-aos="fade-right">
                        <p className="fst-italic">
                            "Art is the most intense mode of individualism that the world has known." ~Oscar Wilde
                        </p>
                        <p>
                            As someone with an eye for detail and the work ethic to achieve any project's vision, it is no surprise that I, from a young age, was drawn to visual communications. This began with a love for graphic design and publishing, that ended up manifesting a passion for web development.
                        </p>
                        <p>
                            Having received my education for Visual Communication at Lonestar College, I found myself studying full-stack web-development at Rice University's Coding Bootcamp. With these incredibly informative experiences under my belt, I have found myself building off of my background and building a range of applications, some public other's private. If you are in the market for someone to join your team, then look no further, for I hope to make your acquaintance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;