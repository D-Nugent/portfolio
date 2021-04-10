import React from 'react';
import './EducationIndepth.scss';

function EducationIndepth() {

  const mouseEnterHandler = (event) => {
    let activeElement = event.currentTarget;
    if (activeElement.classList.value ==='institution__brainstation-overlay'){
      let offsetElement = document.querySelector('.institution__surrey-overlay');
      activeElement.classList.toggle(`--active`)
      offsetElement.classList.toggle(`--inactive`)
      console.log(activeElement);
      console.log(offsetElement);
    } else {
      let offsetElement = document.querySelector('.institution__brainstation-overlay');
      activeElement.classList.toggle(`--active`)
      offsetElement.classList.toggle(`--inactive`)
      console.log(activeElement);
      console.log(offsetElement);
    }
  }
  
  const mouseLeaveHandler = (event) => {
    let activeElement = event.currentTarget;
    if (activeElement.classList.value ==='institution__brainstation-overlay'){
      let offsetElement = document.querySelector('.institution__surrey-overlay');
      activeElement.classList.toggle(`--active`)
      offsetElement.classList.toggle(`--inactive`)
      console.log(activeElement);
      console.log(offsetElement);
    } else {
      let offsetElement = document.querySelector('.institution__brainstation-overlay');
      activeElement.classList.toggle(`--active`)
      offsetElement.classList.toggle(`--inactive`)
      console.log(activeElement);
      console.log(offsetElement);
    }
  }

  return (
    <section className="education-indepth">
      <div className="education-indepth__institution-container">
        <div className="institution">
          <div className="institution__locations">
              <article className="institution__surrey-info">
                <p className="institution__surrey-course">Bachelor of Science (First Class Honors)</p>
                <p className="institution__surrey-dates">Sep 2010 - Jul 2014</p>
                <p className="institution__surrey-details">
                  A University Degree
                </p>
              </article>
              <article className="institution__brainstation-info">
                <p className="institution__brainstation-course">Web Development Diploma (92.2%)</p>
                <p className="institution__brainstation-dates">Nov 2020 - Feb 2021</p>
                <p className="institution__brainstation-details">
                  An online bootcamp
                </p>
              </article>
              <div className="institution__brainstation-overlay" 
                onMouseEnter={(event)=>{mouseEnterHandler(event)}}
                onMouseLeave={(event)=>{mouseLeaveHandler(event)}}
              >
                <div className="institution__brainstation-mask">
                  <h3 className="institution__brainstation-name">BrainStation</h3>
                </div>
              </div>
              <div className="institution__surrey-overlay"
                onMouseEnter={(event)=>{mouseEnterHandler(event)}}
                onMouseLeave={(event)=>{mouseLeaveHandler(event)}}
              >
                <div className="institution__surrey-mask">
                  <h3 className="institution__surrey-name">University of Surrey</h3>
                </div>
              </div>
          </div>  
        </div>    
      </div>            
    </section>
  )
}

export default EducationIndepth
