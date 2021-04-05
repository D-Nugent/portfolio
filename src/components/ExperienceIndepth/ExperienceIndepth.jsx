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
    expRangeOne: desktopQuery.matches?16:tabletQuery.matches?0:7,
    expRangeTwo: desktopQuery.matches?27:tabletQuery.matches?8:19,
    expRangeThree: desktopQuery.matches?39:tabletQuery.matches?16:32,
    expRangeFour: desktopQuery.matches?49:tabletQuery.matches?28:48,
    expRangeFive: desktopQuery.matches?58:tabletQuery.matches?40:56,
  }
  /* #ToDo - Need to come back and adjust mobile query scroll rates*/

  return (
    <section className="experience-indepth" onScroll={() =>{console.log(document.body.scrollTop);}}>
      <article className="experience-indepth__position-wrapper">
        <h2 className="experience-indepth__date-range">
          Feb 2021 - Present
        </h2>
        <div className="experience-indepth__position-details">
          <h4 className="experience-indepth__position-title">
            BrainStation - Teaching Assistant
          </h4>
          <p className="experience-indepth__position-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid 
            ipsam voluptatibus laboriosam doloremque perferendis maxime. Laudantium illo 
            dicta excepturi maxime alias odio fuga? Doloribus velit perferendis 
            exercitationem vero optio?
          </p>
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
          <p className="experience-indepth__position-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid 
            ipsam voluptatibus laboriosam doloremque perferendis maxime. Laudantium illo 
            dicta excepturi maxime alias odio fuga? Doloribus velit perferendis 
            exercitationem vero optio?
          </p>
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
          <p className="experience-indepth__position-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid 
            ipsam voluptatibus laboriosam doloremque perferendis maxime. Laudantium illo 
            dicta excepturi maxime alias odio fuga? Doloribus velit perferendis 
            exercitationem vero optio?
          </p>
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
          <p className="experience-indepth__position-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid 
            ipsam voluptatibus laboriosam doloremque perferendis maxime. Laudantium illo 
            dicta excepturi maxime alias odio fuga? Doloribus velit perferendis 
            exercitationem vero optio?
          </p>
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
          <p className="experience-indepth__position-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid 
            ipsam voluptatibus laboriosam doloremque perferendis maxime. Laudantium illo 
            dicta excepturi maxime alias odio fuga? Doloribus velit perferendis 
            exercitationem vero optio?
          </p>
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
          <p className="experience-indepth__position-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid 
            ipsam voluptatibus laboriosam doloremque perferendis maxime. Laudantium illo 
            dicta excepturi maxime alias odio fuga? Doloribus velit perferendis 
            exercitationem vero optio?
          </p>
        </div>
      </article>
      }
    </section>
  )
}

export default ExperienceIndepth