import React from 'react';
import {Link} from 'react-router-dom';
import './Testimonials.scss';

function Testimonials() {
    return (
        <section className="testimonials">
            <div className="testimonials__wrapper">
                <article className="testimonials__wrapper-body">
                    <h2 className="testimonials__wrapper-body-heading">Testimonials</h2>
                    <q className="testimonials__wrapper-body-overview">
                        David and I are recent graduates of the web development program at BrainStation.
                        In our twelve weeks together, I have gotten to know David and see how passionate he is
                        for his love of coding. He is a great mentor as I was able to easily approach him for help
                        when needed. David's enthusiasm, everyday, brought a smile to everyone in the virtual classroom.
                        Especially in times like these, it was very much needed. David, continue to do what you do.
                        You're an amazing person who has a passion for coding. Any company would be lucky to have you on
                        their team.
                    </q>
                    <p className="testimonials__emph"> - Michael Bernardo (Fellow Full-Stack Developer)</p>
                    <p className="testimonials__wrapper-body-overview">
                        There will be more testimonials coming soon!
                    </p>
                </article>
                <nav className="testimonials__wrapper-nav">
                    <Link className="testimonials__wrapper-nav-link" to="/profile">Profile</Link>
                    <Link className="testimonials__wrapper-nav-link" to="/process">Process</Link>
                    <Link className="testimonials__wrapper-nav-link" to="/projects">Projects</Link>
                    <Link className="testimonials__wrapper-nav-link" to="/blog">Blog</Link>
                    <Link className="testimonials__wrapper-nav-link" to="/contact">Contact</Link>
                </nav>
            </div>
        </section>
    )
};

export default Testimonials
