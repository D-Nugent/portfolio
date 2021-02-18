import React from 'react';
import {Link} from 'react-router-dom';
import './Process.scss';

function Process() {
    return (
        <section className="process">
            <div className="process__wrapper">
                <article className="process__wrapper-body">
                    <h2 className="process__wrapper-body-heading">Process</h2>
                    <p className="process__wrapper-body-overview">
                        <span className="process__emph">Modular - </span>To streamline the design process and improve reusability, I use react and other
                        component-driven models for modular design. This also ensures consistency across the platform.
                    </p>
                    <p className="process__wrapper-body-overview">
                        <span className="process__emph">Goal Oriented - </span> By establishing user stories and the intentions of design - all production code
                        is written with the intention of addressing the issues at hand.
                    </p>
                    <p className="process__wrapper-body-overview">
                        <span className="process__emph">Brand Centric - </span> All designs are made inline with any current brand imaging including color schemes
                        and imagery. If you don't have a fully defined brand I will support you in creating a brand identity.
                    </p>
                    <p className="process__wrapper-body-overview">
                        <span className="process__emph">Affordable - </span> Development is priced on project goals rather than hours worked. I offer heavily discounted
                        rates for charity's or special causes upon request.
                    </p>
                    <p className="process__wrapper-body-overview">
                        <span className="process__emph">Responsive - </span> All apps and websites are designed cross-platform and made mobile-first.
                    </p>
                    <p className="process__wrapper-body-overview">
                        <span className="process__emph">Content-Driven - </span> All of my designs work around your chosen content. If a design does not work for the content
                        that you wish to deploy then I will re-design the interface so that it fits your needs. This means you have no restrictions on what you want to roll out.
                    </p>
                    <p className="process__wrapper-body-overview">
                        <span className="process__emph">Collaborative - </span> I greatly value the opportunity to collaborate with stakeholders and believe that communication, feedback
                        and respect is a two-way street.
                    </p>
                </article>
                <nav className="process__wrapper-nav">
                    <Link className="process__wrapper-nav-link" to="/profile">Profile</Link>
                    <Link className="process__wrapper-nav-link" to="/projects">Projects</Link>
                    <Link className="process__wrapper-nav-link" to="/testimonials">Testimonials</Link>
                    <Link className="process__wrapper-nav-link" to="/blog">Blog</Link>
                    <Link className="process__wrapper-nav-link" to="/contact">Contact</Link>
                </nav>
            </div>
        </section>
    )
};

export default Process
