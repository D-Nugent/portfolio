import React,{useEffect, useState} from 'react';
import './ExperienceIndepth.scss';

function ExperienceIndepth() {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    let currentScroll = Math.floor((document.body.scrollTop/document.body.scrollHeight)*100)
    setScrollPos(currentScroll);
  }

  useEffect(() => {
    document.body.addEventListener('scroll',handleScroll)
    return () => {
      document.body.removeEventListener('scroll',handleScroll)
    }
  }, [])

  const desktopQuery = window.matchMedia('(min-width: 1280px)');
  const tabletQuery = window.matchMedia('(min-width: 768px)');
  const scrollMediaQueries = {
    expRangeOne: desktopQuery.matches?16:tabletQuery.matches?0:0,
    expRangeTwo: desktopQuery.matches?27:tabletQuery.matches?8:15,
    expRangeThree: desktopQuery.matches?41:tabletQuery.matches?16:28,
    expRangeFour: desktopQuery.matches?49:tabletQuery.matches?28:42,
    expRangeFive: desktopQuery.matches?59:tabletQuery.matches?40:48,
  }

  return (
    <section className="experience-indepth">
      <article className="experience-indepth__position-wrapper">
        <h2 className="experience-indepth__date-range">
          Feb 2021 - Present
        </h2>
        <div className="experience-indepth__position-details">
          <h4 className="experience-indepth__position-title">
            BrainStation - Teaching Assistant
          </h4>
          <ul className="experience-indepth__position-description-list">
          Responsibilities include:
            <li className="experience-indepth__position-description">
              The education of 25+ students
            </li>
            <li className="experience-indepth__position-description">
              Leading whiteboarding sessions
            </li>
            <li className="experience-indepth__position-description">
              Grading project assignments with a focus on code improvement and effective design
            </li>
            <li className="experience-indepth__position-description">
              Running Q&A Sessions
            </li>
            <li className="experience-indepth__position-description">
              Mentoring Junior Developers
            </li>
            <li className="experience-indepth__position-description">
              Project Manager for Multi-Discipline Hackathon event
            </li>
            <li className="experience-indepth__position-description">
              Teaching the fundamentals of web development
            </li>
          </ul>
        </div>
      </article>
      {scrollPos>=scrollMediaQueries.expRangeOne &&
      <article className="experience-indepth__position-wrapper">
        <h2 className="experience-indepth__date-range">
          Jul 2018 - Aug 2020
        </h2>
        <div className="experience-indepth__position-details">
          <h4 className="experience-indepth__position-title">
            Fairmont Chateau Lake Louise - Front Office Manager
          </h4>
          <ul className="experience-indepth__position-description-list">
            Noteworthy Achievements:
            <li className="experience-indepth__position-description">
              Created an app that analyzed the performance of team members across multiple competencies allowing for targeted training and greater reporting.
            </li>
            <li className="experience-indepth__position-description">
              Contributed to the hotel winning Hotel of the Year for the NCA Region.
            </li>
            <li className="experience-indepth__position-description">
              Innovated and executed a streamlined arrival process for ‘Rocky Mountaineer 
              Vacations’, the largest business partner for Chateau Lake Louise (35,000 
              arrivals in 2019), leading to the highest overall guest experience score 
              ever received at 94% as well as the highest in region.
            </li>
            <li className="experience-indepth__position-description">
              Implemented a new incremental revenue program that aligned enhanced 
              training with a performance-based incentive plan. This led to an increase 
              in incremental revenue from $456,091 in 2017 to $729,288 in 2019.
            </li>
          </ul>
        </div>
      </article>
      }
      {scrollPos>=scrollMediaQueries.expRangeTwo &&
      <article className="experience-indepth__position-wrapper">
        <h2 className="experience-indepth__date-range">
          Feb 2017 - Jul 2018
        </h2>
        <div className="experience-indepth__position-details">
          <h4 className="experience-indepth__position-title">
            Fairmont St Andrews - Front Office Manager
          </h4>
          <ul className="experience-indepth__position-description-list">
            Noteworthy Achievements:
            <li className="experience-indepth__position-description">
              Revamped the hotels Incremental Revenue programme which for 
              Front Office Upselling led to an increase from £17,000 Gross Revenue in 
              2016 to £113,000 Gross Revenue in 2017.
            </li>
            <li className="experience-indepth__position-description">
              Achieved the highest LQA Audit scores for Front Office in the Hotel’s 
              history (An increase from 82.10% in 2016 to 97.9% in 2017)
            </li>
            <li className="experience-indepth__position-description">
              Achieved the highest guest satisfaction scores for Front Office in the 
              Hotel’s history (Average of 91 and Top Score percentage of 78% in 2017)
            </li>
            <li className="experience-indepth__position-description">
              Achieved a 95% colleague satisfaction rating in CES surveys.
            </li>
            <li className="experience-indepth__position-description">
              In response to the training and development plans put in place for 
              colleagues I was recognised for having the lowest staff turnover for Front 
              Office since the hotel’s opening
            </li>
            <li className="experience-indepth__position-description">
              Was able to reduce collateral purchasing cost in 2017 by 12% by utilising 
              smart purchasing.
            </li>
          </ul>
        </div>
      </article>
      }
      {scrollPos>=scrollMediaQueries.expRangeThree &&
      <article className="experience-indepth__position-wrapper">
        <h2 className="experience-indepth__date-range">
          Jul 2016 - Feb 2017
        </h2>
        <div className="experience-indepth__position-details">
          <h4 className="experience-indepth__position-title">
            Fairmont St Andrews - Assistant Front Office Manager
          </h4>
          <ul className="experience-indepth__position-description-list">
            Noteworthy Achievements:
            <li className="experience-indepth__position-description">
              Took a key role in the set-up and continued management of the hotels’ 
              Quality Committee.
            </li>
            <li className="experience-indepth__position-description">
              Was selected to be the Guest Satisfaction Champion for the Rooms Division
            </li>
            <li className="experience-indepth__position-description">
              Implemented performance-based scheduling
            </li>
            <li className="experience-indepth__position-description">
              While in this role I successfully managed the department through a complete 
              hotel refurbishment without any loss to guest satisfaction scores
            </li>
          </ul>
        </div>
      </article>
      }
      {scrollPos>=scrollMediaQueries.expRangeFour &&
      <article className="experience-indepth__position-wrapper">
        <h2 className="experience-indepth__date-range">
          Jun 2014 - Jul 2016
        </h2>
        <div className="experience-indepth__position-details">
          <h4 className="experience-indepth__position-title">
            Fairmont St Andrews - Front Office Supervisor
          </h4>
          <ul className="experience-indepth__position-description-list">
            Noteworthy Achievements:
            <li className="experience-indepth__position-description">
              Developed a excel program for tracking and analysing guest satisfaction 
              scores in relation to individual staff members to allow for targeted training.
            </li>
            <li className="experience-indepth__position-description">
              Developed an effective 90-day forecast tool which allowed for all hotel 
              departments to plan and manage potential operational barriers to success 
              while recognising opportunities for profitability.
            </li>
            <li className="experience-indepth__position-description">
              Oversaw the planning and management across departments for the PGA Open 
              Championship 2015
            </li>
            <li className="experience-indepth__position-description">
              Developed an effective Handover application to improve communication and 
              guest issue resolution throughout the Hotel
            </li>
          </ul>
        </div>
      </article>
      }
      {scrollPos>=scrollMediaQueries.expRangeFive &&
      <article className="experience-indepth__position-wrapper">
        <h2 className="experience-indepth__date-range">
          2009 - 2014
        </h2>
        <div className="experience-indepth__position-details">
          <h4 className="experience-indepth__position-title">
            Prior Professional Experience
          </h4>
          <ul className="experience-indepth__position-description-list">
            In the early stages of my career alongside my academic studies I took advantage of leadership development programs with Starbucks, Marriott and Intercontinental Hotels Group. This experience shaped my career in it's early stages and gave me firm footing for establishing my professional competencies.
          </ul>
        </div>
      </article>
      }
    </section>
  )
}

export default ExperienceIndepth