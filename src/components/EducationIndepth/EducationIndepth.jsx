import React from 'react';
import './EducationIndepth.scss';

function EducationIndepth() {
  const clickHandler = (event) => {
    let activeElement = event.currentTarget;
    let offsetElement = activeElement.classList.contains('institution__brainstation-overlay')?
    document.querySelector('.institution__surrey-overlay')
    :
    document.querySelector('.institution__brainstation-overlay');
    activeElement.childNodes[0].classList.toggle(`--active`)
    offsetElement.childNodes[0].classList.toggle(`--inactive`)
  }

  return (
    <section className="education-indepth">
      <div className="education-indepth__institution-container">
        <div className="institution">
          <div className="institution__locations">
            <article className="institution__surrey-info">
              <p className="institution__surrey-course">Bachelor of Science</p>
              <p className="institution__surrey-grade">First Class Honors</p>
              <p className="institution__surrey-dates">Sep 2010 - Jul 2014</p>
              <p className="institution__surrey-details">
                My degree covered the fundamentals of business management with a focus on 
                the study of consumer behaviour. The four year degree included a year in 
                industry and covered accounting acumen and application of tactical 
                business strategy. I am proud to have graduated with a 'First Class
                Honors' and to have been within the top percentile of my class.
              </p>
            </article>
            <article className="institution__brainstation-info">
              <p className="institution__brainstation-course">Web Development Diploma</p>
              <p className="institution__brainstation-grade">92.2%</p>
              <p className="institution__brainstation-dates">Nov 2020 - Feb 2021</p>
              <ul className="institution__brainstation-list">
                <h4 className="institution__brainstation-list-title">
                This course covered the following fundamentals:
                </h4>
                <li className="institution__brainstation-details">
                  HTML/CSS
                </li>
                <li className="institution__brainstation-details">
                  SASS
                </li>
                <li className="institution__brainstation-details">
                  JavaScript
                </li>
                <li className="institution__brainstation-details">
                  ExpressJS / Node
                </li>
                <li className="institution__brainstation-details">
                  React
                </li>
                <li className="institution__brainstation-details">
                  ReactRouter
                </li>
                <li className="institution__brainstation-details">
                  Database Management
                </li>
                <li className="institution__brainstation-details">
                  MySQL
                </li>
                <li className="institution__brainstation-details">
                  Authentication & Security
                </li>
                <li className="institution__brainstation-details">
                  Agile/Scrum Development
                </li>
              </ul>
            </article>
            <div className="institution__surrey-overlay"
              onClick={(event)=>{clickHandler(event)}}
            >
              <div className="institution__surrey-mask">
                <h3 className="institution__surrey-name">University of Surrey</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48.683334 48.683334"
                  version="1.1"
                  className="institution__surrey-logo"
                >
                <path
                  fill="#ffffff"
                  strokeWidth="0.264583"
                  fillOpacity="1"
                  d="m 13.49375,46.412878 c 0,-0.80791 1.089444,-2.494108 2.019955,-3.126406 l 0.960056,-0.652376 -0.917739,-0.383455 c -0.504757,-0.210902 -1.18387,-0.467924 -1.509141,-0.571159 -0.32527,-0.103237 -0.540681,-0.325776 -0.478689,-0.49453 0.06199,-0.168754 0.382036,-1.12273 0.711211,-2.119947 L 14.877902,37.251884 13.795564,34.69938 C 13.200278,33.295503 12.529646,31.699404 12.30527,31.152495 l -0.407954,-0.994381 -1.309654,0.663651 c -0.7203096,0.365009 -1.3707231,0.663652 -1.4453637,0.663652 -0.074641,0 -0.3869145,-0.4924 -0.6939417,-1.094224 -0.4521653,-0.886317 -0.490891,-1.136907 -0.2038149,-1.318866 0.5372846,-0.340548 1.0158751,-0.276558 1.0158751,0.135824 0,0.426667 0.7172362,0.768284 1.1071252,0.52732 0.146093,-0.09029 0.21253,-0.441899 0.14764,-0.781354 -0.06999,-0.366147 0.02749,-0.673013 0.239667,-0.754431 0.467091,-0.179242 0.462044,-1.115512 -0.007,-1.295495 -0.200549,-0.07696 -0.497759,-0.0068 -0.660467,0.155911 C 9.869345,27.278156 9.6970227,27.226636 9.4319615,26.864144 9.2116229,26.562812 8.9038381,26.437021 8.6372204,26.539333 8.1494197,26.726518 8.055141,27.39462 8.4795155,27.656899 c 0.1896546,0.117213 0.1794047,0.289576 -0.032397,0.544782 -0.4999974,0.602459 -0.9108744,0.436023 -1.3866553,-0.5617 -0.6579034,-1.379637 -0.57477,-2.364771 0.2546125,-3.017164 1.2770938,-1.004562 4.0556323,-2.210298 5.3886483,-2.338384 1.122115,-0.107821 1.446928,-0.02481 2.224951,0.568616 1.117388,0.852273 1.263272,0.863327 1.06688,0.08084 -0.08476,-0.337716 0.03203,-1.416666 0.259542,-2.397668 0.647288,-2.791055 0.602026,-3.004164 -0.710826,-3.346784 -3.706515,-0.967304 -3.902604,-1.067128 -3.902604,-1.98672 0,-0.515605 0.270131,-0.696306 1.785937,-1.194684 1.604985,-0.527699 3.770313,-1.47596 3.770313,-1.651131 0,-0.03727 -0.464833,-0.02343 -1.032962,0.03075 -1.76891,0.168693 -2.58508,-1.314775 -1.975275,-3.590254 0.278166,-1.0379716 0.626987,-0.6436869 0.626987,0.7087052 0,0.8326928 0.150277,1.4542958 0.415774,1.7197918 0.582554,0.582554 0.678223,0.518945 0.339059,-0.225437 -0.366913,-0.805287 -0.100134,-2.3036776 0.553756,-3.1102221 0.637114,-0.785853 0.891745,-0.5362885 0.525312,0.5148617 -0.336793,0.9661247 -0.238109,2.2290694 0.185014,2.3677844 0.35437,0.116175 0.709856,-1.4029154 0.738697,-3.1566597 0.02122,-1.2902708 0.630931,-2.2862662 1.188586,-1.9416165 0.205217,0.1268309 0.173237,0.351681 -0.106902,0.7516362 -0.755954,1.0792754 -0.438987,1.3885477 0.495159,0.4831382 C 19.95016,6.1349198 20.016671,5.9643506 19.772186,5.3166365 19.46639,4.5064913 19.626517,3.5728776 20.207502,2.778541 c 0.556837,-0.7613213 0.799166,-0.3272094 0.413189,0.7401928 -0.181484,0.5018846 -0.244558,1.1350995 -0.140165,1.4071446 0.176248,0.4592945 0.225545,0.4475007 0.690117,-0.1651047 0.275171,-0.3628525 0.597507,-1.0672961 0.716303,-1.5654298 0.231726,-0.9716737 0.868188,-1.4404889 0.865745,-0.637705 -0.004,1.3081917 -0.64715,2.5403147 -2.187797,4.1911624 -1.571999,1.6844433 -2.270628,2.7565255 -2.29671,3.5244197 -0.0066,0.193241 0.485747,-0.07465 1.094024,-0.5953121 0.608277,-0.5206624 1.20359,-0.9466588 1.322917,-0.9466588 0.119327,0 0.216959,-0.238125 0.216959,-0.5291667 0,-0.5248193 0.668515,-0.752952 0.837847,-0.2859177 0.05182,0.1429306 0.742896,0.1116153 1.675694,-0.075932 1.317214,-0.2648376 1.601896,-0.4188724 1.672048,-0.9047072 0.09708,-0.6723034 0.449107,-0.7710419 0.672591,-0.1886514 0.297517,0.7753162 0.69807,0.3805888 0.69807,-0.6879167 0,-0.8809069 0.169074,-1.2538668 0.899583,-1.984375 0.965107,-0.9651077 1.481667,-1.1403687 1.481667,-0.5027084 0,0.2182813 -0.120812,0.3968751 -0.268473,0.3968751 -0.36504,0 -1.316813,1.601122 -1.318038,2.2172726 -7.94e-4,0.3758946 0.23553,0.2276549 0.966745,-0.6065351 0.639345,-0.7293784 1.05672,-1.015034 1.229958,-0.8417954 0.54228,0.5422792 -1.529966,3.0257208 -2.902794,3.4787944 -0.548895,0.1811522 -0.882398,0.4646057 -0.882398,0.7499757 0,0.2523165 -0.252842,0.7301513 -0.561871,1.0618547 -0.454409,0.487751 -0.783333,0.585485 -1.719792,0.511005 -0.941595,-0.07489 -1.157921,-0.0096 -1.157921,0.349314 0,0.242774 -0.353064,0.738492 -0.784587,1.101595 -0.59835,0.503478 -0.692556,0.695502 -0.396875,0.808965 0.558354,0.214261 0.4769,0.866662 -0.164277,1.31576 -0.691306,0.48421 -0.581921,0.715582 1.938232,4.09975 2.559393,3.436862 2.641102,3.467917 9.144084,3.475317 5.594483,0.0064 6.03409,0.102592 7.290573,1.595838 1.260091,1.497531 1.505183,3.937719 0.642019,6.392084 -0.307279,0.873734 -0.311615,0.875655 -0.496538,0.219972 -0.176146,-0.624567 -0.188021,-0.615304 -0.212923,0.166127 -0.0145,0.45517 0.156281,1.26474 0.379526,1.799039 0.223247,0.534303 0.636132,1.55556 0.917525,2.269459 l 0.511624,1.298001 -2.6128,3.649831 c -1.437039,2.00741 -2.558664,3.705083 -2.492494,3.77261 0.06617,0.06752 1.156465,0.385191 2.42288,0.705926 2.119947,0.536901 2.208141,0.584433 1.111948,0.599292 -0.654844,0.0089 -2.619375,-0.156247 -4.365625,-0.366942 -1.74625,-0.210699 -4.93813,-0.3868 -7.093069,-0.39134 -5.991197,-0.01262 -9.181333,0.594413 -12.552244,2.388489 -1.42636,0.759142 -1.918229,0.919265 -1.918229,0.624469 z m 22.129396,-6.267773 c 1.711812,-2.294863 2.476855,-3.612113 2.476855,-4.264639 0,-0.561726 -3.168852,-4.694663 -3.461071,-4.514061 -0.429302,0.265324 -0.257844,1.811369 0.302885,2.731119 l 0.544004,0.892315 -1.035021,1.224352 c -0.569264,0.673393 -2.003964,2.088869 -3.188224,3.145504 -1.184261,1.056632 -2.184138,2.007867 -2.221949,2.113857 -0.06608,0.185211 2.929443,0.755899 4.296875,0.818615 0.534734,0.02453 0.972627,-0.386818 2.285646,-2.147062 z M 28.77938,39.674179 c 2.405825,-2.230631 3.76437,-3.891995 3.76437,-4.603435 0,-0.970235 -1.521147,-3.73474 -2.233641,-4.059373 -0.428334,-0.195162 -1.717382,-0.241289 -3.806965,-0.136226 l -3.159343,0.158851 -0.279982,0.953315 c -0.331167,1.127598 -1.897098,8.639024 -1.897272,9.100793 -8.7e-5,0.2324 0.792895,0.307941 2.916359,0.277821 l 2.916479,-0.04137 z m -11.2434,0.479375 c 0.208243,-0.581142 -0.332504,-1.259803 -1.00379,-1.259803 -0.864531,0 -1.235843,1.232654 -0.527364,1.750705 0.510667,0.373409 1.313698,0.115948 1.531154,-0.490902 z m 2.537565,-6.55147 c 0.02019,-4.311857 -0.126822,-4.7625 -1.553594,-4.7625 -0.694658,0 -1.059686,-0.22429 -1.822915,-1.120082 -0.52488,-0.616045 -1.571743,-1.757594 -2.326362,-2.536776 -1.135547,-1.17251 -1.477578,-1.384762 -1.984375,-1.231431 -0.336787,0.101895 -0.716176,0.281671 -0.843086,0.399501 -0.127777,0.118636 0.923164,2.938255 2.355098,6.318596 l 2.585843,6.104361 1.613652,0.908751 c 1.596605,0.899149 1.61547,0.90266 1.785716,0.332393 0.09464,-0.316994 0.180146,-2.302761 0.190023,-4.412813 z"
                  className="institution__surrey-logo-path" />
                </svg>
              </div>
            </div>
            <div className="institution__brainstation-overlay"
              onClick={(event)=>{clickHandler(event)}}
            >
              <div className="institution__brainstation-mask">
                <h3 className="institution__brainstation-name">BrainStation</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1046 884"
                  className="institution__brainstation-logo"
                >
                  <path
                    fill="#FFF"
                    fillOpacity="1"
                    d="m 301,843.40806 c -1.925,-0.83252 -4.94049,-2.90684 -6.70108,-4.60961 C 290.3907,835.01858 115.30151,598.49862 112.52018,593.24188 111.31374,590.96171 110.4051,586.96087 110.19411,583 c -0.39281,-7.37409 24.30121,-321.65452 25.91127,-329.77237 0.66545,-3.35516 2.34391,-6.97311 4.61581,-9.94946 1.96356,-2.57241 47.68311,-55.94443 101.59901,-118.60451 C 331.65245,20.853334 340.79936,10.536589 345.42455,8.3828961 c 2.7915,-1.299847 6.87841,-2.3677543 9.08202,-2.3731272 4.44521,-0.010838 120.92933,30.1300411 125.4232,32.4539151 3.47047,1.794649 7.91266,6.937052 9.72177,11.254197 C 490.77448,52.397601 491,113.9895 491,418 c 0,327.2427 -0.16035,365.448 -1.54773,368.76847 -1.68043,4.02185 -4.45535,7.35428 -8.59334,10.31982 -3.67237,2.63187 -166.4079,47.92301 -172.01084,47.87257 -2.39145,-0.0215 -5.92309,-0.72029 -7.84809,-1.5528 z m 86.75,-58.98681 C 415.9375,776.79094 439,770.28672 439,769.96742 439,769.15329 182.91081,622.75586 182.3928,623.27387 c -0.2326,0.23259 24.62776,34.12863 55.24523,75.32451 30.61747,41.19589 60.7459,81.73587 66.95205,90.08883 l 11.28393,15.18721 10.31299,-2.78994 c 5.67215,-1.53447 33.3755,-9.03293 61.563,-16.66323 z M 453,600 c 0,-106.54875 -0.25608,-133.99408 -1.25,-133.97109 -2.25102,0.0521 -266.83088,112.44542 -267.04318,113.43978 -0.21598,1.0116 2.17866,2.43028 68.79318,40.75571 101.55811,58.42957 168.17126,96.80659 182,104.85342 8.25,4.80061 15.5625,8.77199 16.25,8.82528 C 452.74426,733.98018 453,706.58501 453,600 Z M 292.17821,493.19513 c 102.32089,-43.307 138.36932,-58.98194 137.5,-59.7891 C 429.0302,432.80435 371.575,398.86856 302,357.99317 232.425,317.11777 174.73297,283.2021 173.79548,282.62499 c -0.93749,-0.5771 -1.95088,-0.80292 -2.25198,-0.50182 C 171.00786,282.6588 150,543.97939 150,550.10657 c 0,2.54491 0.31678,2.9876 1.75,2.44554 0.9625,-0.36402 64.1552,-27.07467 140.42821,-59.35698 z M 453,247.94098 C 453,162.72344 452.73084,93 452.40187,93 c -0.32897,0 -17.99147,11.1055 -39.25,24.67889 -90.85903,58.0127 -162.40465,103.67124 -186.65187,119.11633 -14.3,9.10887 -26.36836,16.87217 -26.81859,17.25177 -0.45022,0.3796 6.07478,4.73107 14.5,9.66994 8.42523,4.93886 29.26859,17.21953 46.31859,27.29038 17.05,10.07085 35.725,21.09275 41.5,24.4931 12.29911,7.2418 46.3405,27.3399 74,43.68974 10.725,6.33967 32.1,18.96936 47.5,28.06598 15.4,9.09662 28.3375,16.33378 28.75,16.08257 0.4125,-0.2512 0.75,-70.18018 0.75,-155.39772 z M 338,121.21981 c 48.675,-31.00867 88.82493,-56.690928 89.22208,-57.071683 0.39714,-0.380755 -14.37866,-4.45655 -32.83511,-9.057323 -32.80568,-8.17771 -33.59755,-8.32278 -35.36016,-6.477923 C 354.77693,53.061081 247,178.10312 247,178.5856 c 0,0.67703 -10.62296,7.37367 91,-57.36579 z M 651.5,822.083 c -44.55,-12.49234 -82.35,-23.43133 -84,-24.30889 -4.14772,-2.20597 -8.1023,-6.57602 -9.94695,-10.99199 C 556.15863,783.44398 556,745.84634 556,418.68134 c 0,-269.74147 0.2956,-365.265776 1.1381,-367.782117 1.55859,-4.655096 5.17014,-9.30857 9.11794,-11.748445 C 570.36393,36.611957 687.05159,6 692.62126,6 c 2.40271,0 6.20447,1.1063985 9.44943,2.75 4.95188,2.508177 13.67698,12.334975 99.22152,111.75 116.6531,135.56765 107.34514,124.41488 109.14727,130.77985 1.54576,5.45952 26.56351,315.81045 26.56156,329.50227 -5.8e-4,4.0386 -0.63586,8.80145 -1.42629,10.69322 -1.21647,2.91143 -33.70804,47.13442 -161.78636,220.20106 -19.21148,25.95963 -21.25832,28.37888 -26.01654,30.75 -3.65728,1.8225 -6.63944,2.54388 -10.21819,2.47176 -3.29535,-0.0664 -33.2358,-8.00443 -86.05366,-22.81516 z M 798.30661,713.83028 c 36.74363,-49.52772 66.60179,-90.25521 66.35147,-90.50554 -0.50807,-0.50807 -256.65548,145.88241 -256.65707,146.68176 -8.2e-4,0.40972 121.28373,33.79387 122.99899,33.85606 0.275,0.01 30.56297,-40.50456 67.30661,-90.03228 z M 730.03762,656.82937 C 814.84927,608.02419 863.65611,579.38884 862.82079,578.92445 860.80723,577.80502 598.7524,466.85525 596.75,466.27438 595.08951,465.7927 595,472.62652 595,599.88337 595,673.64752 595.21007,734 595.46683,734 c 0.25676,0 60.81361,-34.72678 134.57079,-77.17063 z M 897.28693,549.75 c -0.17131,-1.7875 -4.79605,-60.4 -10.27721,-130.25 -5.48115,-69.85 -10.23726,-129.39659 -10.56914,-132.32575 -0.47578,-4.19923 -0.9229,-5.20315 -2.1138,-4.74615 C 871.39214,283.55422 617,433.43687 617,434.03977 c 0,0.64342 277.73624,118.7588 279.5492,118.88639 0.59063,0.0416 0.91307,-1.34662 0.73773,-3.17616 z M 724.80851,327.47614 c 67.81967,-40.01752 122.94467,-73.08829 122.5,-73.4906 C 846.86383,253.58323 790.925,217.8003 723,174.46792 655.075,131.13553 598.4875,95.026614 597.25,94.225873 L 595,92.76998 v 155.69657 155.69657 l 3.25,-1.96393 c 1.7875,-1.08016 58.73883,-34.70553 126.55851,-74.72305 z M 745.95304,115.31795 C 716.11862,80.768079 690.46348,51.197929 688.9416,49.606509 l -2.76704,-2.893491 -33.08728,8.26518 c -18.198,4.545849 -33.08114,8.54792 -33.07364,8.893491 0.008,0.345571 21.04501,14.00915 46.75,30.36351 25.705,16.354361 66.08636,42.078041 89.73636,57.163741 23.65,15.08569 43.15692,27.27293 43.34871,27.08275 0.19179,-0.19018 -24.06126,-28.61386 -53.89567,-63.16374 z"
                    className="institution__brainstation-logo-path" />
                </svg>
              </div>
            </div>
          </div>  
        </div>    
      </div>            
    </section>
  )
}

export default EducationIndepth
