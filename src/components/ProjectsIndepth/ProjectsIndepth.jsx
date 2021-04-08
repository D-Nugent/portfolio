import React from 'react';
import './ProjectsIndepth.scss';
import projects from '../../data/projects.json';

function ProjectsIndepth() {
    return (
      <section className="projects-indepth">
        <div className="projects-indepth__overview">
          <p className="projects-indepth__text">
            I have always had a passion for innovating and creating projects/initiatives. From
            the legacy Excel apps I used to make, to the immersive web apps I now make, there is nothing
            more rewarding that having that lightbulb moment and seeing it through to completion.
          </p>
          <p className="projects-indepth__text">
            I have found that in most industries and day-to-day life that there are a multitude of
            problems or pain points that can be remedied by a well-thought out tech-based solution. I
            seek to use my skills as a developer to address these.
          </p>
        </div>
        <div className="projects-indepth__projects">
          <p className="projects-indepth__text">
            Whether designed for fun, learning, teaching or professional application you can find the current
            projects that I am working on below:
          </p>
          <section className="projects-indepth__projects-wrapper">
          {projects.map(project => {
            return(
              <article className="project" key={project.projectID}>
                <h4 className="project__name">
                  {project.projectName}
                </h4>
                <p className="project__description">
                  {project.description}
                </p>
                {/* <p className="project__status">
                  Status: <span className={`${{
                      'Planning':'project__status-planning',
                      'Designing':'project__status-designing',
                      'Developing':'project__status-developing',
                      'Complete':'project__status-complete',
                    }[project.status]}`}>
                  {project.status}
                  </span> 
                </p>
                <p className="project__methods">
                  <span className="project__methods-key">Methods: </span>
                  {project.methods.join(', ')}
                </p> */}
                <div className="project__links">
                  {
                    project.gitHubLink!=='TBC'?
                    <a href={project.gitHubLink} className="project__link">Repository</a>
                    :
                    <p className="project__link project__link--inactive">Repository</p>
                  }
                  {
                    project.deployLink!=='TBC'?
                    <a href={project.deployLink} className="project__link">Deployed Site</a>
                    :
                    <p className="project__link project__link--inactive">Deployed Site</p>
                  }
                </div>
              </article>
            )
          })}
          </section>
        </div>
      </section>
    )
}

export default ProjectsIndepth
