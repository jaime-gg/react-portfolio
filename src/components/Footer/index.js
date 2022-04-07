import React from 'react';
import './style.css'; 

function Footer() {

    return (
        <section id="footer" className="footer">
            <div className="container">
                <div className="container" >
                    <div className=" row d-flex  justify-content-center align-items-stretch info">
                        <div className="address col-lg-4 col-md-4 col-sm-12 c-item">
                            <i className='bx bx-map' ></i>
                            <h4>Based In:</h4>
                            <p> Houston, Tx 77080</p>
                        </div>

                        <div className="email col-lg-4 col-md-4 col-sm-12 c-item">
                            <i className='bx bxs-envelope' ></i>
                            <h4>Email:</h4>
                            <p>jaimegg.ai@gmail.com</p>
                        </div>

                        <div className="github col-lg-4 col-md-4 col-sm-12 c-item">
                            <i className='bx bxl-linkedin' ></i>
                            <h4>Message Me On:</h4>
                            <p> <a className="remove" href="https://www.linkedin.com/in/jaime-gallegos/"> LinkedIn.com </a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;