import React, {useLayoutEffect, useState} from 'react';
import InterestCrown from '../../components/InterestCrown/InterestCrown';
import ProfileTrunk from '../../components/ProfileTrunk/ProfileTrunk';
import WelcomeRoot from '../../components/WelcomeRoot/WelcomeRoot';
import TraitBranch from '../../components/TraitBranch/TraitBranch';
import IndepthBranch from '../../components/IndepthBranch/IndepthBranch';
import './DevTree.scss';

function DevTree() {
const [activeSection, setActiveSection] = useState(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      document.querySelector('.wrapper').scrollIntoView({behavior:"smooth",block:'end',inline:'end'})
    }, 300);
  }, [])

  const updateActiveBranch = (trait) => {
    setActiveSection(trait);
    const scrollPath = {
      'Profile': () => console.log("It's profile"),
      'Experience':() => document.querySelector('.branch--left').scrollIntoView({behavior:"smooth",block:'end',inline:'end'}),
      'Education':() => document.querySelector('.branch--left').scrollIntoView({behavior:"smooth",block:'end',inline:'end'}),
      'Skills': () => document.querySelector(`.branch--right`).scrollIntoView({behavior:"smooth",block:'end',inline:'start'}),
      'Projects': () => document.querySelector(`.branch--right`).scrollIntoView({behavior:"smooth",block:'end',inline:'start'}),
      null: () => document.querySelector('.wrapper').scrollIntoView({behavior:"smooth",block:'end',inline:'end'})
    }

    scrollPath[trait]()

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
              {activeSection==='Experience' &&
                <IndepthBranch trait="Experience" updateActiveBranch={updateActiveBranch}
                  activeBranch={activeSection}
                />
              }
              <TraitBranch trait="Education" updateActiveBranch={updateActiveBranch}
                activeBranch={activeSection}
                />
              {activeSection==='Education' &&
                <IndepthBranch trait="Education" updateActiveBranch={updateActiveBranch}
                  activeBranch={activeSection}
                />
              }
            </div>
            <ProfileTrunk trait="Profile" updateActiveBranch={updateActiveBranch}
              activeBranch={activeSection}
            />
            <div className="appraisal__right">
              <TraitBranch trait="Skills" updateActiveBranch={updateActiveBranch}
                activeBranch={activeSection}
              />
              {activeSection==='Skills' &&
                <IndepthBranch trait="Skills" updateActiveBranch={updateActiveBranch}
                  activeBranch={activeSection}
                />
              }
              <TraitBranch trait="Projects" updateActiveBranch={updateActiveBranch}
                activeBranch={activeSection}
              />
              {activeSection==='Projects' &&
                <IndepthBranch trait="Projects" updateActiveBranch={updateActiveBranch}
                  activeBranch={activeSection}
                />
              }
            </div>
          </section>
        </main>
        {activeSection===null &&
          <WelcomeRoot/>
        }
      </div>
      {/* <section className="more-detail more-detail-right">
        <IndepthBranch trait="Skills"/>
        <IndepthBranch trait="Projects"/>
      </section> */}
        <div className="width-control"></div>
    </>
    )
}

export default DevTree
