import React from 'react';
import './style.css'

function Resume() {

    return (
        
        <section id="resume" className="skills fade-in">
            <div className="container">
    
                <div>
                    <h2>Resume</h2>
                    <p>With my extensive training in a combination of technical and creative fields, I have worked in several mediums. </p>
                    <p>Here are some of the tools I have been most recently focusing on.</p>
                </div>
    
                <div className="row skills-content">
        
                    <div className="col-lg-6" data-aos="fade-up">
        
                    <div className="progress">
                        <span className="skill">HTML <i className="percent">100%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar html-prog" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
        
                    <div className="progress">
                        <span className="skill">CSS <i className="percent">95%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar css-prog" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
        
                    <div className="progress">
                        <span className="skill">JavaScript <i className="percent">85%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar js-prog" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
        
                    </div>
        
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        
                    <div className="progress">
                        <span className="skill">Node.Js <i className="percent">80%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar node-prog" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
        
                    <div className="progress">
                        <span className="skill">Illustrator <i className="percent">85%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar illustrator-prog" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
        
                    <div className="progress">
                        <span className="skill">Photoshop <i className="percent">75%</i></span>
                        <div className="progress-bar-wrap">
                        <div className="progress-bar ps-prog" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;