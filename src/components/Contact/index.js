import React from 'react';
import './style.css'

function Contact() {

    return (
        <section id="contact" class="container">
            <div class="section-title">
                <h2>Contact Me</h2>
            </div>
            <div class="contact" data-aos="fade-in">
                <form class="php-email-form">
                    <div class="col-md-8 form-row justify-content-center">
                        <div class="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        </div>
                        <div class="form-group ">
                            <label for="name">Your Email</label>
                            <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                        </div>
                        <div class="form-group">
                            <label for="name">Message</label>
                            <textarea class="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                        </div>

                        <div class="text-center"><button type="submit">Send Message</button></div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;