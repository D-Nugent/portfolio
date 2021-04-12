import React from 'react';
import ExperienceIndepth from '../ExperienceIndepth/ExperienceIndepth';
import EducationIndepth from '../EducationIndepth/EducationIndepth';
import SkillsIndepth from '../SkillsIndepth/SkillsIndepth';
import ProjectsIndepth from '../ProjectsIndepth/ProjectsIndepth';
import ReturnToHome from '../ReturnToHome/ReturnToHome';
import './IndepthBranch.scss';

function IndepthBranch({trait,updateActiveBranch}) {

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
      <ReturnToHome 
        updateActiveBranch={updateActiveBranch}
        position={
        {
          'Experience':'left',
          'Education':'left',
          'Skills':'right',
          'Projects':'right'
        }[trait]
      }
      />
    </aside>
  )
}

export default IndepthBranch
