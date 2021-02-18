import React from 'react';
import {Link} from 'react-router-dom';
import GitHubIcon from '../../assets/logos/github.svg'
import LinkedInIcon from '../../assets/logos/LinkedIn.svg'
import CSSHTMLLogo from '../../assets/logos/css-and-html.svg'
import JSLogo from '../../assets/logos/JavaScript-logo.svg'
import SASSLogo from '../../assets/logos/sass.svg'
import ReactLogo from '../../assets/logos/react.svg'
import ReduxLogo from '../../assets/logos/redux.svg'
import NodeLogo from '../../assets/logos/node.svg'
import MySQLLogo from '../../assets/logos/mySql.svg'
import ReactRouterLogo from '../../assets/logos/reactRouter.svg'
import FirebaseLogo from '../../assets/logos/firebase.svg'
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
                    <div className="profile__wrapper-body-resources">
                        <a href="https://www.linkedin.com/in/d-nugent/" className="profile__wrapper-body-resources-link">
                            <img src={LinkedInIcon} alt="LinkedIn Icon" className="profile__wrapper-body-resources-link-icon"/>
                        </a>
                        <a href="https://github.com/d-nugent" className="profile__wrapper-body-resources-link">
                            <img src={GitHubIcon} alt="Github Icon" className="profile__wrapper-body-resources-link-icon"/>
                        </a>
                    </div>
                </article>
                <aside className="profile__wrapper-skills">
                    <img src={CSSHTMLLogo} alt="CSS and HTML Logo" className="profile__wrapper-skills-item"/>
                    <img src={JSLogo} alt="JS Logo" className="profile__wrapper-skills-item"/>
                    <img src={SASSLogo} alt="Sass Logo" className="profile__wrapper-skills-item"/>
                    <img src={ReactLogo} alt="React Logo" className="profile__wrapper-skills-item"/>
                    <img src={ReduxLogo} alt="Redux Logo" className="profile__wrapper-skills-item"/>
                    <img src={NodeLogo} alt="Node logo" className="profile__wrapper-skills-item"/>
                    <img src={MySQLLogo} alt="MySQL Logo" className="profile__wrapper-skills-item"/>
                    <img src={ReactRouterLogo} alt="ReactRouter Logo" className="profile__wrapper-skills-item"/>
                    <img src={FirebaseLogo} alt="Firebase Logo" className="profile__wrapper-skills-item"/>
                </aside>
                <nav className="profile__wrapper-nav">
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
