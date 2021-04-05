import React from 'react';
import AcumenLogo from '../../assets/icons/acumen-logo.svg';
import './ProjectsOverview.scss';

function ProjectsOverview() {
    return (
      <div className="projects trait--right">
        <article className="projects__wrapper">
          <h2 className="projects__heading">Project In Focus</h2>
          <h4 className="projects__name">
            <img src={AcumenLogo} alt="Acumen Logo" className="projects__name-logo"/>
            cumen
          </h4>
          <p className="projects__description">
            A web app created in 14 days as part of my BrainStation course. Acumen seeks
            to modernize the job application process and mark a transition away from the
            paper resume to an immersive video interview.
          </p>
          <div className="projects__links">
            <a href="https://www.acumen-resume.com" className="projects__link">Deployed Site</a>
            <a href="https://github.com/D-Nugent/capstone-acumen" className="projects__link">Repository</a>
          </div>
        </article>
        <article className="projects__wrapper">
          <h2 className="projects__heading">Current &amp; Future Projects</h2>
          <p className="projects__description">
            To see more of the projects I am working on, click below.
          </p>
        </article>
      </div>
    )
}

export default ProjectsOverview
