import React, {useState, useRef, useEffect} from 'react';
import {useLocation, useParams, Link} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './TopLevelNav.scss';

function TopLevelNav({navName, orientationTop, imageSrc, colorScheme, navDetails}) {
    const nodeRef = useRef(null);
    let location = useLocation();
    const [active, setActive] = useState(false);
    let animTime = '';
    let shiftVal = '';
    switch (navName) {
        case "profile":
            animTime = '1s';
            shiftVal = '0';
            break;
            case "process":
            animTime = '1.4s';
            shiftVal = '-100%';
            break;
            case "projects":
            animTime = '1.8s';
            shiftVal = '-200%';
            break;
            case "testimonials":
            animTime = '2.2s';
            shiftVal = '-300%';
            break;
            case "blog":
            animTime = '2.6s';
            shiftVal = '-400%';
            break;
            case "contact":
            animTime = '2.8s';
            shiftVal = '-500%';
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

    const activeAdj = (event) => {
        const banner = event.currentTarget
        banner.classList.remove("landing-enter-done");
        banner.classList.add("nav-enter-active");
        banner.style.setProperty('--moveVal', `${shiftVal}`)
    }

    if (orientationTop===true) {
        return (
            <CSSTransition 
                in={active}
                timeout={2100}
                classNames={location.pathname!=="/landing"?'nav--top':'landing'}
                nodeRef={nodeRef}
            >
                <Link className="nav" onClick={(event)=>{activeAdj(event)}} 
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
                <Link className="nav" onClick={(event)=>{activeAdj(event)}}
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
