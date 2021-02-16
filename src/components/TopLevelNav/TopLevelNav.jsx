import React, {useState, useRef, useEffect} from 'react';
import {useLocation, useParams, Link} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './TopLevelNav.scss';

function TopLevelNav({navName, orientationTop, imageSrc, colorScheme, navDetails}) {
    const nodeRef = useRef(null);
    let location = useLocation();
    const [active, setActive] = useState(false);
    let animTime = '';
    switch (navName) {
        case "profile":
            animTime = '1s';
            break;
        case "process":
            animTime = '1.4s';
            break;
        case "projects":
            animTime = '1.8s';
            break;
        case "testimonials":
            animTime = '2.2s';
            break;
        case "blog":
            animTime = '2.6s';
            break;
        case "contact":
            animTime = '2.8s';
            break;
        default:
            break;
    }

    useEffect(() => {
        const path = location.pathname;
        const selectedPage = navName;
        const criteriaMatch = path==="/landing"||path==="/"?true:path.replace('/','')===selectedPage?true:false;
        if (criteriaMatch===true) {
            setActive(true)
        } else {
            setActive(false)
        }
    })

    console.log(location.pathname);
    // console.log(location.pathname.replace('/','')===navName);
    if (orientationTop===true) {
        return (
            <CSSTransition 
                in={active}
                timeout={2100}
                classNames={location.pathname!=="/landing"?'nav--top':'landing'}
                nodeRef={nodeRef}
            >
                {/* #ToDo - Either manually add the -enter-active class or work-out how to force the change*/}
                <Link className="nav"
                to={`/${navName}`} ref={nodeRef}>
                    <div className={`nav__container nav__container--${colorScheme}`}>
                        <p className="nav__container-banner-details--top">{navDetails}</p>
                        <div className="nav__container-banner--top" style={{transformOrigin: 'top', animationDuration: `${animTime}`}}>
                            <h2 className="nav__container-banner-header">{navName}</h2>
                        </div>
                        <div className={`nav__container-image`} style={{backgroundImage: `url("${imageSrc}")`, transformOrigin: 'bottom', animationDuration: `${animTime}`}}></div>
                    </div>
                </Link>
            </CSSTransition>
        )
    } else {
        return (
            <CSSTransition
                in={active}
                timeout={2100}
                classNames={location.pathname!=="/landing"?'nav':'landing'}
                nodeRef={nodeRef}
            >
                <Link className="nav"
                to={`/${navName}`} ref={nodeRef}>
                    <div className={`nav__container nav__container--${colorScheme}`}>
                        <div className={`nav__container-image`} style={{backgroundImage: `url("${imageSrc}")`, transformOrigin: 'top', animationDuration: `${animTime}`}}></div>
                        <div className="nav__container-banner" style={{transformOrigin: 'bottom', animationDuration: `${animTime}`}}>
                            <h2 className="nav__container-banner-header">{navName}</h2>
                        </div>
                        <p className="nav__container-banner-details">{navDetails}</p>
                    </div>
                </Link>
            </CSSTransition>
        )
    }

}

export default TopLevelNav
