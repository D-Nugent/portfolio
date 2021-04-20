import React, {useState,useEffect} from 'react';
import './LoadingSeed.scss';

function LoadingSeed() {
const [welcome,setWelcome] = useState(false)

useEffect(() => {
  setTimeout(() => {
    setWelcome(true)
  }, 6000);
  
}, [])

  return (
  <div className="loading-wrapper">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 119 134.80398"
    className="loading"
    >
    <g
      id="layer1">
      <path
        id="path9995-7-3-9"
        fill="#e1b382"
        fillOpacity="1"stroke="none"
        strokeWidth="0.229581"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        paintOrder="markers stroke fill"
        d="m 61.479879,30.935103 c 1.689575,-1.236804 1.561634,-1.711491 1.484704,-3.335267 -1.946154,1.086242 -2.876319,3.221284 -1.484704,3.335267 z"
        className="loading__leaves"
      />
      <path
        id="path9995-7-3"
        fill="#e1b382"
        fillOpacity="1"stroke="none"
        strokeWidth="0.229581"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        paintOrder="markers stroke fill"
        d="m 54.901469,43.208635 c 1.689575,-1.236804 -3.432377,-4.125814 -4.369203,-3.864434 -0.854747,2.508378 2.977588,3.750451 4.369203,3.864434 z"
        className="loading__leaves"
      />
      {/* <path
        fill="none"
        stroke="#FFF"
        strokeWidth="8.71944"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 24.745528,96.782477 70.510517,0.28061"
        id="path10171" 
        className="loading__progress-bar"
      /> */}
      <path
        id="path9995-7-5"
        fill="#e1b382"
        fillOpacity="1"
        stroke="none"
        strokeWidth="0.16171"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"paintOrder="markers stroke fill"
        d="m 52.330951,23.812669 c -0.344189,0.153993 0.860911,1.689438 2.065621,2.34585 1.2572,0.685026 1.90981,0.56584 2.09204,0.250214 0.18223,-0.315625 -0.32097,-1.16864 -1.17399,-1.616862 -1.26727,-0.665872 -2.573011,-1.16294 -2.983671,-0.979202 z"
        className="loading__leaves"
      />
      <path
        id="path9995-7"
        fill="#e1b382"
        fillOpacity="1"
        stroke="none"
        strokeWidth="0.229581"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"paintOrder="markers stroke fill"
        d="m 41.229156,55.947416 c -0.160662,0.5461 2.344587,0.988697 4.026353,0.43403 1.755047,-0.578828 2.221501,-1.418151 2.087351,-1.972965 -0.134149,-0.554823 -1.378649,-0.980102 -2.553949,-0.568552 -1.746023,0.611411 -3.368059,1.455912 -3.559755,2.107487 z"
        className="loading__leaves"
      />
      <path
        id="path9995"
        fill="#e1b382"
        fillOpacity="1"
        stroke="none"
        strokeWidth="0.264583"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"paintOrder="markers stroke fill"
        d="m 70.212658,38.981941 c 0.34301,0.52703 -2.46739,1.7817 -4.59535,1.72324 -2.22068,-0.061 -3.00512,-0.80209 -3.00512,-1.43091 0,-0.62882 1.33788,-1.46931 2.83178,-1.40316 2.21934,0.0983 4.35943,0.48201 4.76869,1.11083 z"
        className="loading__leaves"
      />
      <path
        fill="#c79565"
        strokeWidth="0.711476"
        strokeMiterlimit="4"
        strokeDasharray="none"
        d="m 59.042235,88.93495 c -1.03427,-0.24387 -3.26107,-3.41934 -3.60551,-5.14154 -0.10923,-0.54612 0.0743,-2.5226 0.51374,-5.53149 0.25788,-1.76587 2.1167,-4.07216 3.74395,-4.64521 1.32163,-0.46543 1.48326,-0.20194 0.47892,0.7808 -0.8766,0.85775 -1.4468,1.76781 -1.66725,2.66098 -0.0692,0.28015 -0.22212,0.74606 -0.33995,1.03535 -0.26798,0.65792 -0.34817,1.50516 -0.37939,4.0085 -0.022,1.76395 0.0262,2.07781 0.44836,2.91779 0.26015,0.51767 0.58886,1.28006 0.73047,1.6942 0.14162,0.41414 0.44303,1.113 0.66983,1.55302 0.4407,0.85501 0.3993,0.90161 -0.59317,0.6676 z"
        id="path9795" 
        className="loading__seed"
      />
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#2d545e"
        strokeWidth="1.05833"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        id="path9823"
        d="m 47.491196,56.481813 c -0.0066,-0.459506 0.468595,-0.744916 0.887344,-0.698683 0.639271,0.07058 1.015715,0.733399 0.912372,1.334501 -0.140719,0.818495 -0.999315,1.289238 -1.78166,1.12606 -0.997839,-0.208125 -1.564066,-1.265681 -1.339748,-2.228817 0.267891,-1.150222 1.480219,-1.815689 2.60718,-1.569553" 
        className="loading__curl loading__curl-one"
      />
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#2d545e"
        strokeWidth="0.624681"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        id="path9823-2"
        d="m 53.197739,28.578848 c -0.217752,-0.34112 0.03399,-0.766606 0.368035,-0.909043 0.538934,-0.2298 1.127981,0.142116 1.30652,0.664051 0.250013,0.730881 -0.249976,1.493262 -0.960067,1.703995 -0.921222,0.273391 -1.860233,-0.357597 -2.101472,-1.256082 -0.29828,-1.110936 0.465068,-2.228098 1.552099,-2.498949 0.340291,-0.08479 0.699025,-0.0882 1.04147,-0.0134" 
        className="loading__curl loading__curl-three"
      />
      <path
        fill="none"
        fillRule="nonzero"
        stroke="#e1b382"
        strokeWidth="0.264583px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 23.691827,69.595719 c 3.09508,0.49742 12.983535,0.45367 16.028758,0.0874 0.599274,-0.0721 0.573844,-1.14577 0.573844,-1.14577 0.688146,2.96445 0.91405,-0.26937 1.322917,-1.19063 0.07085,0.18493 -0.122377,2.2611 0.08877,2.50403 0.188153,0.21647 0.784091,-1.40324 0.82318,-1.18501 0.158102,0.88268 -0.24485,1.60898 0.675553,0.79765 l 0.768312,0.19391 0.336105,-1.28823 c 0.141324,1.19055 0.07098,1.43282 0.931166,1.68332 l 0.437834,-0.61904 c 1.619336,1.25718 2.003785,-0.86865 3.307294,-2.24896 -0.053,0.24657 -0.292701,0.62111 -0.508883,1.3512 -0.441155,1.48986 -0.08257,2.71891 1.460373,0.22026 -0.61256,1.04269 0.38406,1.42319 0.871798,1.13345 0.35443,-0.21055 0.21382,-1.90491 0.43611,-1.77682 0.33209,0.19136 -0.19468,1.05984 0.48875,1.73344 0.348,0.34299 0.76561,-0.88793 0.46697,-2.63149 -0.0837,-0.48844 0.74486,2.26106 0.55392,2.51412 -0.49378,0.65442 0.99484,-0.38209 0.99484,-0.38209 0.33416,1.67965 2.08687,-2.56778 1.74844,-2.30101 0,0 -0.25061,1.66887 -0.0859,2.25029 0.17507,0.61793 0.48084,0.39195 0.73092,0.12995 0.21607,-0.22637 1.81234,-2.11497 1.82194,-1.78307 0.0212,0.73104 -0.98815,1.6188 -0.78972,2.03648 0.46986,0.98904 1.69262,0.094 1.95764,0.47194 0.22397,0.31939 -0.57485,-2.81929 -0.31751,-2.14286 1.52222,3.05277 1.4786,-1.10848 2.20059,-1.74248 -0.144,2.01277 0.074,3.40339 0.92604,3.70416 -0.17456,-0.81154 0.89383,-2.05935 2.00409,-2.89437 -1.64244,2.06841 -0.94584,2.06469 -0.89738,2.78478 2.77748,1.04412 2.62903,-0.62372 2.57499,-3.02667 0.82372,3.20498 1.24649,3.56294 2.24231,2.83155 2.33425,0.74787 1.62939,-1.10596 1.79728,-2.58301 0.17439,1.56216 0.12086,4.10618 1.05833,2.38125 0.21763,0.36173 0.34039,-2.26579 0.40841,-1.69427 0.31699,2.6631 1.03332,1.25494 1.35954,-0.68629 0.0908,1.49115 -0.94955,2.8354 0.93475,2.77217 l 0.73689,-2.90515 -0.0968,2.4434 1.29418,-1.3913 c -0.34974,0.63046 -0.85753,1.26093 -0.92458,1.89139 0.82607,0.38528 1.57995,0.4441 1.71352,0.26003 0.15491,-0.2135 -0.39621,-0.62147 -0.36419,-0.95056 l 0.55236,-1.83955 c 0.29623,0.22407 -0.15382,1.07734 0.037,1.686 0.31697,1.0113 1.20931,1.78405 1.46374,1.08185 0.88811,-2.45109 0.73966,-1.18346 0.98805,0.21698 l 1.3749,-0.69854 0.84099,-2.48473 c 0.33259,1.20676 -0.56086,2.30312 0.82682,2.9931 l 1.2485,-2.17454 c -0.0334,0.70646 -0.53657,1.41293 0.22633,2.11939 l 11.97554,0.55125"
        id="path10030"
        className="loading__grass"
      />
      <path
        fill="none"
        stroke="#2d545e"
        strokeWidth="1.32292"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 59.160055,75.40323 c 0,0 2.38238,-3.7172 1.68785,-6.26381 0.26373,-2.08438 -4.98832,-7.92699 -4.93726,-9.60719 -0.0499,-2.06718 3.93718,-6.03487 3.2797,-8.04515 -0.1209,-3.394598 -5.30371,-7.484679 -3.45563,-10.136532 1.41107,-1.744221 4.73484,-6.906308 5.14624,-8.492118 0.5341,-5.350302 -8.53409,-8.990111 -5.1688,-10.928113"
        id="path10116"
        className="loading__stem"
      />
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#2d545e"
        strokeWidth="1.05833"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        id="path9823-9"
        d="m -63.788986,41.798581 c -0.0066,-0.459505 0.468595,-0.744916 0.887344,-0.698683 0.639271,0.07058 1.015715,0.7334 0.912372,1.334502 -0.140718,0.818495 -0.999315,1.289237 -1.78166,1.12606 -0.997839,-0.208125 -1.564066,-1.265681 -1.339748,-2.228817 0.267891,-1.150222 1.480219,-1.81569 2.607181,-1.569553"
        transform="scale(-1,1)" 
        className="loading__curl loading__curl-two"
      />
      <path
        fill="none"
        stroke="#e1b382"
        strokeWidth="4.25108"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        d="M 60.000003,2.4405113 2.12554,34.810511 V 104.7997 L 60.000003,132.44443 116.87446,104.7997 V 34.810511 Z"
        id="path9587"
        className="loading__hexagon"
      />
      <path
        fill="none"
        stroke="#2d545e"
        strokeWidth="2.11667"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 60.727525,74.9268 c 0,0 2.38238,-3.7172 1.68785,-6.26381 0.26373,-2.08438 -4.98832,-7.92699 -4.93726,-9.60719 -0.0499,-2.06718 3.93718,-6.03487 3.2797,-8.04515 -0.1209,-3.3946 -7.89085,-7.265493 -3.89125,-9.262536"
        id="path10116-4"
        className="loading__stem"
      />
      <path
        fill="#dfb281"
        strokeWidth="0.673747"
        strokeMiterlimit="4"
        strokeDasharray="none"
        d="m 59.282825,89.00216 c -1.08801,-1.31959 -1.44119,-2.20825 -1.70915,-3.31757 -0.23768,-1.01179 -0.23558,-1.82737 -0.21556,-3.61875 0.0291,-2.5951 0.17574,-3.77429 0.34852,-4.30313 0.12336,-0.82646 1.00683,-2.43145 1.84457,-3.35063 0.81968,-0.88691 0.96365,-0.96996 1.66107,-0.9582 0.47367,0.008 0.78164,0.10864 1.23835,0.2818 1.04878,0.84749 2.21734,1.78701 2.80982,3.45809 0.16999,0.54251 0.26644,0.64522 0.18528,3.55264 -0.0886,3.17257 -0.15245,3.59567 -0.75338,4.99021 -0.53339,1.2378 -0.74065,1.57075 -1.18614,1.90547 -1.22501,0.9204 -1.7811,1.21096 -2.6589,1.3893 -0.37137,0.0755 -0.80817,0.19998 -0.97065,0.27674 -0.21071,0.0995 -0.59383,-0.0902 -0.59383,-0.30597 z"
        id="seed-right"
        className="loading__seed"
      />
      <path
        fill="none"
        stroke="#2d545e"
        strokeWidth="1.05833"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 56.866565,42.277281 5.63693,-2.51519"
        id="path10133"
        className="loading__branch loading__branch-two"
      />
      <path
        fill="none"
        stroke="#2d545e"
        strokeWidth="1.05833"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 57.759535,41.648896 c -0.98334,-1.143283 0.79135,-4.201326 2.42689,-7.302184"
        id="path10135"
        className="loading__stem-upper"
      />
      <path
        fill="none"
        stroke="#2d545e"
        strokeWidth="0.624681"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 58.565885,27.665982 c -1.27793,-0.647615 -2.62066,-1.187237 -4.16156,-1.396566"
        id="path10137"
        className="loading__branch loading__branch-three"
      />
      <path
        fill="none"
        stroke="#2d545e"
        strokeWidth="1.05833"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 56.019275,60.07744 c -1.65476,-2.75408 -6.048946,-5.72956 -7.242589,-5.63212"
        id="path10139"
        className="loading__branch loading__branch-one"
      />
      {/* <path
        id="rect10169"
        opacity="1"
        fill="none"
        fillOpacity="1"
        stroke="#2d545e"
        strokeWidth="1.07345"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        paintOrder="markers stroke fill"
        d="m 24.736727,92.29801 h 70.579548 v 9.12436 H 24.736727 Z" 
        className="loading__progress"
      /> */}
      {!welcome?
        <text className="loading__header"
        x="25%"
        y="75%"
        >
          Growing Site...
        </text>
      :
      <text className="loading__welcome"
      x="30%"
      y="75%"
      >
          Welcome!
        </text>
      }
    </g>
  </svg>
    </div>
  )
}

export default LoadingSeed