import React, {useEffect} from 'react';
import InterestCrown from '../../components/InterestCrown/InterestCrown';
import ProfileTrunk from '../../components/ProfileTrunk/ProfileTrunk';
import WelcomeRoot from '../../components/WelcomeRoot/WelcomeRoot';
import './DevTree.scss';

function DevTree() {

  useEffect(() => {
    setTimeout(() => {
      document.body.scrollTop = document.body.scrollHeight;
      document.documentElement.scrollTop = document.documentElement.scrollHeight;  
    }, 100);
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
              <article className="appraisal__experience">Experience Overview</article>
              <article className="appraisal__education">Education Overview</article>
            </div>
            <ProfileTrunk/>
            <div className="appraisal__right">
              <article className="appraisal__skills">Skills Overview</article>
              <article className="appraisal__projects">Projects Overview</article>
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
