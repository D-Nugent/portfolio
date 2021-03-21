import React, {useLayoutEffect} from 'react';
import InterestCrown from '../../components/InterestCrown/InterestCrown';
import ProfileTrunk from '../../components/ProfileTrunk/ProfileTrunk';
import WelcomeRoot from '../../components/WelcomeRoot/WelcomeRoot';
import TraitBranch from '../../components/TraitBranch/TraitBranch';
import './DevTree.scss';

function DevTree() {

  useLayoutEffect(() => {
    setTimeout(() => {
      document.body.scrollTop = document.body.scrollHeight;
      document.documentElement.scrollTop = document.documentElement.scrollHeight;  
    }, 200);
  }, [])

  return (
      <>
        <InterestCrown/>
        <main>
          {/* <section className="indepth">
            <aside className="indepth__experience">Experience Detail</aside>
            <aside className="indepth__education">Education Detail</aside>
          </section> */}
          <section className="appraisal">
            <div className="appraisal__left">
              <TraitBranch trait="Experience"/>
              <TraitBranch trait="Education"/>
            </div>
            <ProfileTrunk/>
            <div className="appraisal__right">
              <TraitBranch trait="Skills"/>
              <TraitBranch trait="Projects"/>
            </div>
          </section>
          {/* <section className="indepth">
            <aside className="indepth__skills">Skills Detail</aside>
            <aside className="indepth__projects">Projects Detail</aside>
          </section> */}
        </main>
        <WelcomeRoot/>
      </>
    )
}

export default DevTree
