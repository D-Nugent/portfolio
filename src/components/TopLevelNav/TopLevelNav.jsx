import React from 'react';
import './TopLevelNav.scss';

function TopLevelNav({navName, orientationTop, imageSrc, colorScheme, navDetails}) {
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
            animTime = '3s';
            break;
        default:
            break;
    }
    if (orientationTop ===true) {
        return (
            <div className={`nav-container nav-container--${colorScheme}`}>
                <p className="nav-container-banner-details--top">{navDetails}</p>
                <div className="nav-container-banner--top" style={{transformOrigin: 'top', animationDuration: `${animTime}`}}>
                    <h2 className="nav-container-banner-header">{navName}</h2>
                </div>
                <div className={`nav-container-image`} style={{backgroundImage: `url("${imageSrc}")`, transformOrigin: 'bottom', animationDuration: `${animTime}`}}></div>
            </div>
        )
    } else {
        return (
            <div className={`nav-container nav-container--${colorScheme}`}>
                <div className={`nav-container-image`} style={{backgroundImage: `url("${imageSrc}")`, transformOrigin: 'top', animationDuration: `${animTime}`}}></div>
                <div className="nav-container-banner" style={{transformOrigin: 'bottom', animationDuration: `${animTime}`}}>
                    <h2 className="nav-container-banner-header">{navName}</h2>
                </div>
                <p className="nav-container-banner-details">{navDetails}</p>
            </div>
        )
    }

}

export default TopLevelNav
