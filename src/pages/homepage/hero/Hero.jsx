import React from "react";
import "./Hero.css";
import am from "./amsterdam.jpg";
import p5 from "p5";

import optiver_logo from "./optiverlogo.png";
import optiver_logo_2 from "./optiver_black.png";
import eco_logo from "media/eco.png";
import TOPOLOGY from "vanta/dist/vanta.topology.min.js";
import DOTS from "vanta/dist/vanta.dots.min.js";
import RINGS from "vanta/dist/vanta.rings.min.js";
import HALO from "vanta/dist/vanta.halo.min.js";

export default class Hero extends React.Component {


    constructor() {
        super()
        this.vantaRef = React.createRef()

          };  

    componentDidMount() {
        this.vantaEffect = TOPOLOGY({
            el: this.vantaRef.current,
            p5: p5,
            color: '#bd6f0c',
            backgroundColor: "#031535",
            showLines:false,
            scaleMobile: 1.5,
            scale:1.00,
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) {
            this.vantaEffect.destroy();
        }
    }

    render() {
        return (
            <>
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <div className="content mb-5 mt-5 pb-5 " align="center"  >
                                <br></br>
                                    {/* <div class="d-flex justify-content-center">
                                    <div><img src={eco_logo} alt="Economics Club IIT Delhi" width={100} /></div>
                                    <div><h1>Economics Club IITD</h1></div>
                                    </div>
                                    <h6>Presents</h6> */}
                                    <h1>WINTER SCHOOL 2023</h1>
                                    <h6>Sponsored by</h6>
                                    <img src={optiver_logo_2} alt="Optiver" width={200} />
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <a href="https://unstop.com/workshop/quantitative-trading-winter-school-indian-institute-of-technology-iit-delhi-585723"><button type="button" class="btn btn-success">Register Here</button></a>
                                    <br></br>
                                    
        </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <div className=" content mb-5 mt-5 pt-4 pb-3" align="center" width="100%" height ='' >
        <br></br>
        <div class="frame"><a href="https://economicsclubiitd.in/winterschool"><button class="custom-btn btn-5">Click me!</button></a>
        <br></br>
        <br></br>
        <h4><div class="text-muted">To know more about the Winter School</div></h4>
        <br></br>
        <br></br>

        </div>
        
    </div></div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>





<div className=" text-center bg-image vanta-canvas" ref={this.vantaRef}>
                <div className="row p-5">
                    <div className="col-lg-8 text-col align-items-start">
                        <h1 className="heading text-start text-uppercase">
                            Economics Club
                        </h1>
                        <h2 className="heading text-start">IIT DELHI</h2>
                        <p className="lead body-text text-start">
                            The primary challenge faced by a technical institute, at a time when
                            there is an increased inclination for people to move towards
                            entrepreneurship, is the lack of access to financial knowledge, which is
                            a prerequisite to implement ideas. Economics club, by the virtue of
                            dealing with subjects like economics and finance, is in the best
                            position to address this issue.
                        </p>
                        <div className="row align-items-start">
                            <a href="#" class="btn_custom btn_custom-1">
                                <svg>
                                    <rect x="1" y="1" fill="none" width="100%" height="100%" rx={0} ry={0} />
                                </svg>
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            </>
        )
    }
}


