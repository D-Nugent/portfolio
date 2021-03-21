import React from 'react';
import TreeRoots from '../../assets/images/roots.svg';
import Signature from '../../assets/images/signature-once.gif';
import Arrow from '../../assets/icons/arrow.svg';
import './WelcomeRoot.scss';

function WelcomeRoot() {

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <footer className="welcome">
      <img src={TreeRoots} alt="Tree Roots" className="welcome__roots"/>
      <div className="welcome__banner">
        <p className="welcome__message"><span className="welcome__message--emph">Hi there, </span> my
        name is David Nugent and I am a Full Stack Developer based in BC, Canada. If you're here, it
        means that you have shown an interest in my work - as such I would like to start by saying
        thank you.</p>
        <p className="welcome__message">I have a genuine passion for creating innovative projects and
        love learning new languages, frameworks and methodologies. You will find details of my
        various passion projects here and on GitHub where most of my work is public.</p>
        <p className="welcome__message">Take your time exploring, should you have any questions about
        me or my work please do not hesitate to contact me. Happy Browsing!</p>
        <div className="welcome__signature">
          <img src={Signature} alt="Signature" className="welcome__signature-gif"/>
        </div>
        
        <img onClick={()=>{scrollToTop()}} src={Arrow} alt="Arrow Icon" className="welcome__arrow"/>
        
        <p onClick={()=>{scrollToTop()}} className="welcome__arrow-scroll">SCROLL UP</p>
      </div>
    </footer>
  )
}

export default WelcomeRoot
