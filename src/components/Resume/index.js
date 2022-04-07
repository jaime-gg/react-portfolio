import React from 'react';
import './style.css'

function Resume() {

    return (

        <section id="resume" className="skills">
            <div className="container">

                <div>
                    <h2>Resume</h2>
                </div>

                <div className="row skills-content">
                    <h4>Skills</h4>
                    <p>With my extensive training in a combination of technical and creative fields, I have worked in several mediums. </p>
                    <p>Here are some of the tools I have been most recently focusing on.</p>

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

                <div>
                    <br />
                    <h4>Education</h4>
                    <p className='school'> Lonestar College — Visual Communications </p>
                    <p className='date'> January 2020 - December 2020 </p>
                    <p className='school-content'> Worked alongside like-minded individuals to better my understanding of digital design, something that later pushed me to shift my attention to web development. </p>
                    <br />
                    <p className='school'> Rice University — Coding Bootcamp  </p>
                    <p className='date'> November 2021 - April 2022 </p>
                    <p className='school-content'> A fast pace yet thorough program that pushed me to go beyond my limits into becoming a capable & proficient full-stack web developer.</p>
                </div>  

                <div>
                    <br />
                    <h4>Resume PDF</h4>
                    <p> View a digital copy of my resume on <a className='school' href="https://docs.google.com/document/d/1C5w6YJzBKuIioUoM90Z4tVT-1jd4DSQfPgFxJZlOb8Q/edit?usp=sharing">Google Docs</a> </p>
            
                </div>
            </div>
        </section>
    )
}

export default Resume;