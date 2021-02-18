import React from 'react';
import {Link} from 'react-router-dom';
import './Blog.scss';

function Blog() {
    return (
        <section className="blog">
            <div className="blog__wrapper">
                <article className="blog__wrapper-body">
                    <h2 className="blog__wrapper-body-heading">Blog</h2>
                    <p className="blog__wrapper-body-overview">
                        This section is still under construction but please visit again soon (1st March onwards) and you'll
                        find postings, tutorials and more.
                    </p>
                </article>
                <nav className="blog__wrapper-nav">
                    <Link className="blog__wrapper-nav-link" to="/profile">Profile</Link>
                    <Link className="blog__wrapper-nav-link" to="/process">Process</Link>
                    <Link className="blog__wrapper-nav-link" to="/projects">Projects</Link>
                    <Link className="blog__wrapper-nav-link" to="/testimonials">Testimonials</Link>
                    <Link className="blog__wrapper-nav-link" to="/contact">Contact</Link>
                </nav>
            </div>
        </section>
    )
};

export default Blog
