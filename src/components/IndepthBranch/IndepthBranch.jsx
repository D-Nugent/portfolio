import React from 'react';
import ExperienceIndepth from '../ExperienceIndepth/ExperienceIndepth';
import EducationIndepth from '../EducationIndepth/EducationIndepth';
import SkillsIndepth from '../SkillsIndepth/SkillsIndepth';
import ProjectsIndepth from '../ProjectsIndepth/ProjectsIndepth';
import './IndepthBranch.scss';

function IndepthBranch({trait,updateActiveBranch,activeBranch}) {

  const conditionalRender = (trait) => {
    switch (trait) {
      case 'Experience':
        return <ExperienceIndepth/>
      case 'Education':
        return <EducationIndepth/>
      case 'Skills':
        return <SkillsIndepth/>
      case 'Projects':
        return <ProjectsIndepth/>
      default:
        break;
    }
  }

  return (
    <aside className={`indepth ${(trait==="Experience"||trait==="Education")?'indepth-left':'indepth-right'}`}>
      <div className="indepth__wrapper">
        {conditionalRender(trait)}
      </div>
      <p className="indepth__return" onClick={()=>{updateActiveBranch(null)}}>
        Return to HOME
      </p>
    </aside>
  )
}

export default IndepthBranch
