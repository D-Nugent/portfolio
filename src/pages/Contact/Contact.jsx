import React from 'react';
import {Link} from 'react-router-dom';
import phoneIcon from '../../assets/icons/phoneIcon.svg';
import emailIcon from '../../assets/icons/emailIcon.svg';
import LinkedInIcon from '../../assets/icons/LinkedInIcon.svg';
import './Contact.scss';

function Contact() {
    return (
        <section className="contact">
            <div className="contact__wrapper">
                <article className="contact__wrapper-body">
                    <h2 className="contact__wrapper-body-heading">Contact</h2>
                    <p className="contact__wrapper-body-overview">
                        If you've come this far, maybe you're willing to go a little further.
                    </p>
                    <p className="contact__wrapper-body-overview">
                        I always enjoy speaking to others about opportunities to collaborate on exciting
                        projects. I am also readily available for freelance to help create great websites and
                        business solutions. Contact me on any of the below options, let's make something amazing.
                    </p>
                    <address className="contact__wrapper-body-communication">
                        <img src={phoneIcon} alt="Phone icon" className="contact__wrapper-body-communication-icon"/>
                        <a href="tel:+15878346559" className="contact__wrapper-body-communication-details">
                            +1 587-834-6559
                        </a>
                    </address>
                    <address className="contact__wrapper-body-communication">
                        <img src={emailIcon} alt="Email icon" className="contact__wrapper-body-communication-icon"/>
                        <a href="mailto:davienugent@hotmail.com" className="contact__wrapper-body-communication-details">
                            davienugent@hotmail.com
                        </a>
                    </address>
                    <address className="contact__wrapper-body-communication">
                        <img src={LinkedInIcon} alt="LinkedIn icon" className="contact__wrapper-body-communication-icon"/>
                        <a href="https://www.linkedin.com/in/d-nugent" className="contact__wrapper-body-communication-details">
                            d-nugent
                        </a>
                    </address>

                </article>
                <nav className="contact__wrapper-nav">
                    <Link className="contact__wrapper-nav-link" to="/profile">Profile</Link>
                    <Link className="contact__wrapper-nav-link" to="/process">Process</Link>
                    <Link className="contact__wrapper-nav-link" to="/projects">Projects</Link>
                    <Link className="contact__wrapper-nav-link" to="/testimonials">Testimonials</Link>
                    <Link className="contact__wrapper-nav-link" to="/blog">Blog</Link>
                </nav>
            </div>
        </section>
    )
};

export default Contact
