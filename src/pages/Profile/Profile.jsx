import React from 'react';
import {Link} from 'react-router-dom';
import './Profile.scss';

function Profile() {
    return (
        <section className="profile">
            <div className="profile__wrapper">
                <article className="profile__wrapper-body">
                    <h2 className="profile__wrapper-body-heading">Profile</h2>
                    <p className="profile__wrapper-body-overview">
                        I am a <span className="profile__emph">full-stack developer based in British Columbia, Canada</span>. I spent my early
                        career in the Hotel Industry managing teams in some of the worlds most beautiful hotels and destinations. As a result,
                        I am fortunate to have travelled extensively, <span className="profile__emph">lived in 7 countries</span> and experienced
                        much of what the world has to offer.
                    </p>
                    <p className="profile__wrapper-body-overview">
                        To the right you can see some of the languages, frameworks and interfaces that I am fully conversant in - although I am
                        constantly learning more. <span className="profile__emph">I write clean, effective and intuitive code</span> which is
                        accessible for other developers and have trained as both a <span className="profile__emph">front and back-end
                        developer</span> (of which I truly enjoy working across both disciplines).
                    </p>
                    <p className="profile__wrapper-body-overview">
                        While I am comfortable working independently, I also enjoy collaborating with others in an <span className="profile__emph">agile-structured
                         environment</span>. I'd encourage you to peruse the rest of my portfolio site but if I have piqued your interest <span className="profile__emph">please
                         feel free to contact me</span> directly or learn more about me and my work ethic by reviewing my LinkedIn or GitHub:
                    </p>
                </article>
                <aside className="profile__wrapper-skills">
                    <p className="profile__wrapper-skills-item">CSS and HTML</p>
                    <p className="profile__wrapper-skills-item">JavaScript</p>
                    <p className="profile__wrapper-skills-item">SASS</p>
                    <p className="profile__wrapper-skills-item">React</p>
                    <p className="profile__wrapper-skills-item">Redux</p>
                    <p className="profile__wrapper-skills-item">Node</p>
                    <p className="profile__wrapper-skills-item">MySQL</p>
                    <p className="profile__wrapper-skills-item">ReactRouter</p>
                    <p className="profile__wrapper-skills-item">Firebase</p>
                </aside>
                <nav className="profile__wrapper-nav">
                    <Link className="profile__wrapper-nav-link" to="/">Home</Link>
                    <Link className="profile__wrapper-nav-link" to="/process">Process</Link>
                    <Link className="profile__wrapper-nav-link" to="/projects">Projects</Link>
                    <Link className="profile__wrapper-nav-link" to="/testimonials">Testimonials</Link>
                    <Link className="profile__wrapper-nav-link" to="/blog">Blog</Link>
                    <Link className="profile__wrapper-nav-link" to="/contact">Contact</Link>
                </nav>
            </div>
        </section>
    )
};

export default Profile
