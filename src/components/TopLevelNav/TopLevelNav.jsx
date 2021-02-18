import React, {useState, useRef, useEffect} from 'react';
import {useLocation, Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
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
        const criteriaMatch = path==="/landing"||path==="/"?true:false;
        const samePage = path.replace('/','')===selectedPage?true:false;
        if (criteriaMatch===true) {
            setActive(true)
        } else if (samePage===true) {
            setActive(true);
        } else {
            setActive(false)
        }
    }, [location.pathname, navName])

    useEffect(() => {
        let target = document.querySelector(`[class*=${navName}]`);
        target.style.setProperty('--moveVal', `${shiftVal}`);
    })
    
    useEffect(() => {
        if(location.pathname.replace('/','')!==navName){
            let target = document.querySelector(`[class*=nav-enter-done-init]`);
            if (target!==null && target.classList.contains(`--${navName}`)) {
                target.classList.remove('nav-enter-done-init')
            }
        }
    })

    const updateActive = (event) => {
        // setActive(false);
        // if(active===false){
        //     setActive(true);
        // }
        let target = document.querySelector(`[class*=${navName}]`);
        target.classList.remove('landing-enter-done');
        target.classList.add('nav-enter-done-init');
    }
    


    if (orientationTop===true) {
        return (
            <CSSTransition 
                in={active}
                timeout={2100}
                classNames={location.pathname!=="/landing"?'nav--top':'landing'}
                nodeRef={nodeRef}
            >
                <Link className={`nav --${navName}`} onClick={(event)=>{updateActive(event)}}
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
                <Link className={`nav --${navName}`} onClick={()=>{updateActive()}}
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
