import React from 'react';
import {Link} from 'react-router-dom';
import './Projects.scss';

function Projects() {
    return (
        <section className="projects">
            <div className="projects__wrapper">
                <article className="projects__wrapper-body">
                    <h2 className="projects__wrapper-body-heading">Projects</h2>
                    <p className="projects__wrapper-body-overview">
                        <span className="projects__emph">Acumen - </span> Acumen seeks to modernize the job application process
                        and mark a transition away from the paper resume to an immersive video interview.
                    </p>
                    <p className="projects__wrapper-body-overview --link">
                        Check out this project <a href="https://www.acumen-resume.com" className="projects__emph">here</a>
                    </p>
                    <p className="projects__wrapper-body-overview">
                        <span className="projects__emph">Aegis - </span> My next project, Aegis is a lost and found interface for hotels
                        which serves as a communication platform for guests and organisational platform for hotels.
                    </p>
                    <p className="projects__wrapper-body-overview">
                        <span className="projects__emph">Future Projects - </span> Watch this space for future projects.
                    </p>
                </article>
                <nav className="projects__wrapper-nav">
                    <Link className="projects__wrapper-nav-link" to="/profile">Profile</Link>
                    <Link className="projects__wrapper-nav-link" to="/process">Process</Link>
                    <Link className="projects__wrapper-nav-link" to="/testimonials">Testimonials</Link>
                    <Link className="projects__wrapper-nav-link" to="/blog">Blog</Link>
                    <Link className="projects__wrapper-nav-link" to="/contact">Contact</Link>
                </nav>
            </div>
        </section>
    )
};

export default Projects
