import React from 'react';
import LearnMore from '../LearnMore/LearnMore';
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
            <a href="" className="projects__link">Deployed Site</a>
            <a href="" className="projects__link">Repository</a>
          </div>
        </article>
        <article className="projects__wrapper">
          <h2 className="projects__heading">Current Projects</h2>
        </article>
        <article className="projects__wrapper">
          <h2 className="projects__heading">Future Projects</h2>
        </article>
        <LearnMore position="right"/>
      </div>
    )
}

export default ProjectsOverview
