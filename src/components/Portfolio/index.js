import React from 'react';
import ('./style.css')

function Portfolio() {

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">

                <div>
                    <h2>Portfolio</h2>
                    <p>Please take the time to view the following projects I have proudly worked on. Some have been built solely by myself, while others have been group efforts, please visit the Github repositories in order to view any collaborators. </p>
                    <p>Additionally, these are all public projects, any I have done for private clients or applications that are yet to be made public are excluded from this gallery. Both hard work and discretion are tools in my arsenal as a professional.</p>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-wrap">
                        <img src={require('../../Assets/portfolio/portfolio-1.png')} className="img-fluid" alt="" />
                        <div className="portfolio-links">
                            <a href="https://github.com/jaime-gg/project1" title="View Github"><i className="bx bxl-github"></i></a>
                            <a href="https://jaime-gg.github.io/project1/" title="View Page"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-wrap">
                        <img src={require('../../Assets/portfolio/portfolio-2.png')} className="img-fluid" alt="" />
                        <div className="portfolio-links">
                            <a href="https://github.com/jaime-gg/tech-blog" title="View Github"><i className="bx bxl-github"></i></a>
                            <a href="https://um-technically-blog.herokuapp.com/" title="View Page"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-wrap">
                        <img src={require('../../Assets/portfolio/portfolio-3.png')} className="img-fluid" alt="" />
                        <div className="portfolio-links">
                            <a href="https://github.com/jaime-gg/storeEZ" title="View Github"><i className="bx bxl-github"></i></a>
                            <a href="https://store-ez.herokuapp.com/" title="View Page"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-wrap">
                        <img src={require('../../Assets/portfolio/portfolio-4.png')} className="img-fluid" alt="" />
                        <div className="portfolio-links">
                            <a href="https://github.com/jaime-gg/note-taker" title="View Github"><i className="bx bxl-github"></i></a>
                            <a href="https://the-grand-note-taker.herokuapp.com/" title="View Page"><i className="bx bx-link"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-wrap">
                        <img src={require('../../Assets/portfolio/portfolio-5.png')} className="img-fluid" alt="" />
                        <div className="portfolio-links">
                            <a href="https://github.com/jaime-gg/team-profile-generator" title="View Github"><i className="bx bxl-github"></i></a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-wrap">
                        <img src={require('../../Assets/portfolio/portfolio-6.png')} className="img-fluid" alt="" />
                        <div className="portfolio-links">
                            <a href="https://github.com/jaime-gg/readme-generator" title="View Github"><i className="bx bxl-github"></i></a>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Portfolio;