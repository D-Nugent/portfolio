import React from 'react';
import './SkillsIndepth.scss';

function SkillsIndepth() {

      let quote = "True Knowledge Exists In Knowing That You Know Nothing"
      let quoteArray = quote.split('');

    return (
        <section className="skills-indepth">
            <figure className="skills-indepth__quote-container">
                <blockquote className="skills-indepth__quote-wrapper">
                <p className="skills-indepth__quote">
                  {quoteArray.map((letter, i)=>{
                    return <span className="skills-indepth__quote-letter" style={{animationDelay: `${i/8}s`}} key={`${letter}${i}`}>
                      {letter}
                      <span className={`skills-indepth__quote-cursor ${i===53?'skills-indepth__quote-cursor--pulse':''}`}
                      style={{animationDelay: `${i/8}s`}}>
                        |
                      </span>
                    </span>
                  })}
                </p>
                </blockquote>
            </figure>
            <p className="skills-indepth__overview">
              While I am very confident in my aptitude as a developer, one of the beautiful and exciting things about this
              field is that there is always more to learn. I am constantly in the pursuit of mastering
              the languages and frameworks that I have accrued so far while seeking out new skills that I can add to
              my toolbelt. With every new project, I research what methods will best help me deliver a high quality
              product both in respect to aesthentics and performance.
            </p>
            <p className="skills-indepth__learning-style">
              I am proud to say that I am a quick learner - and no, not in the way that everyone in an interview says
              that they are a quick learner. I learned how to be a developer in 12 weeks in a rigorous learning environment
              with BrainStation. It is thanks to this experience that I can say that when presented with a new framework
              (with learning curve considered) that I can pick up the fundamentals in days.
            </p>
            <p className="skills-indepth__skills-intro">
              Below you can see some of the skills which I consider myself to be proficient in and those which will
              be my focus next:
            </p>
            <div className="skills-indepth__skills-wrapper">
              <ul className="skills-indepth__skills-list">Skills that I am proficient in:
                <li className="skills-indepth__skills">HTML</li>
                <li className="skills-indepth__skills">CSS/SCSS</li>
                <li className="skills-indepth__skills">JavaScript
                  <p className="skills-indepth__skills-topics">(including ES6)</p>
                </li>
                <li className="skills-indepth__skills">React</li>
                <li className="skills-indepth__skills">React Router</li>
                {/* <li className="skills-indepth__skills">Redux</li> */}
                <li className="skills-indepth__skills">nodeJS</li>
                <li className="skills-indepth__skills">expressJS</li>
                <li className="skills-indepth__skills">MySQL</li>
                <li className="skills-indepth__skills">Firebase</li>
              </ul>
              <ul className="skills-indepth__skills-list">What's on the chopping block next:
                <li className="skills-indepth__skills">3D JS Libraries
                  <p className="skills-indepth__skills-topics">(WebGL, ThreeJS, BabylonJS)</p>
                </li>
                <li className="skills-indepth__skills">Python 
                  <p className="skills-indepth__skills-topics">(Django, Flask, Tensorflow)</p>
                </li>
                <li className="skills-indepth__skills">Ruby
                  <p className="skills-indepth__skills-topics">(Ruby on Rails)</p>
                </li>
                <li className="skills-indepth__skills">GraphyQL</li>
                <li className="skills-indepth__skills">Gatsby</li>
                <li className="skills-indepth__skills">nextJS</li>
                <li className="skills-indepth__skills">JAMstack Methodology</li>
                <li className="skills-indepth__skills">Angular</li>
                <li className="skills-indepth__skills">Vue</li>
                <li className="skills-indepth__skills">Ionic</li>
              </ul>
            </div>
        </section>
    )
}

export default SkillsIndepth
