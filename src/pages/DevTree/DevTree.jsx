import React, {useLayoutEffect, useState} from 'react';
import InterestCrown from '../../components/InterestCrown/InterestCrown';
import ProfileTrunk from '../../components/ProfileTrunk/ProfileTrunk';
import WelcomeRoot from '../../components/WelcomeRoot/WelcomeRoot';
import TraitBranch from '../../components/TraitBranch/TraitBranch';
import './DevTree.scss';

function DevTree() {
const [activeSection, setActiveSection] = useState(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      document.querySelector('.wrapper').scrollIntoView({block:'end',inline:'end'})
    }, 300);
  }, [])

  const updateActiveBranch = (trait) => {
    console.log(`It worked! The current branch is ${trait}`);
    setActiveSection(trait);
    (trait==='Experience'||trait==='Education')?
    document.querySelector('.branch--left').scrollIntoView({block:'end',inline:'end'})
    :
    document.querySelector(`.branch--right`).scrollIntoView({block:'end',inline:'start'})
  }

  const getCurrentScroll = () => {
    console.log(document.body.scrollWidth);
  }

  return (
    <>
      {/* <section className="more-detail more-detail-left">
        <IndepthBranch trait="Experience"/>
        <IndepthBranch trait="Education"/>
      </section> */}
      <div className="wrapper">
        <InterestCrown/>
        <main>
          <section className="appraisal">
            <div className="appraisal__left">
              <TraitBranch trait="Experience" updateActiveBranch={updateActiveBranch}
                activeBranch={activeSection}
              />
              <TraitBranch trait="Education" updateActiveBranch={updateActiveBranch}
                activeBranch={activeSection}
              />
            </div>
            <ProfileTrunk trait="Profile" updateActiveBranch={updateActiveBranch}
              activeBranch={activeSection}
            />
            <div className="appraisal__right">
              <TraitBranch trait="Skills" updateActiveBranch={updateActiveBranch}
                activeBranch={activeSection}
              />
              <TraitBranch trait="Projects" updateActiveBranch={updateActiveBranch}
                activeBranch={activeSection}
              />
            </div>
          </section>
        </main>
        <WelcomeRoot/>
      </div>
      {/* <section className="more-detail more-detail-right">
        <IndepthBranch trait="Skills"/>
        <IndepthBranch trait="Projects"/>
      </section> */}
      {/* {activeSection.widthControl===true &&  */}
        <div className="width-control" onClick={() => {getCurrentScroll()}}></div>
      {/* } */}
    </>
    )
}

export default DevTree
