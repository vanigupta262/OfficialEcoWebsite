import React from "react";
import "./Hero.css";
import am from "./amsterdam.jpg";
import p5 from "p5";

import optiver_logo from "./optiverlogo.png";
import optiver_logo_2 from "./optiver_black.png";
import eco_logo from "media/eco.png";
import TOPOLOGY from "vanta/dist/vanta.topology.min.js";


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
            showLines: false,
            scaleMobile: 1.5,
            scale: 1.00,
            forceAnimate: true,
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) {
            // this.vantaEffect.destroy();
        }
    }

    render() {
        return (
            <>
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        {/* <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <div className="content mb-5 mt-5 pb-5 " align="center"  >
                                <div className="slide">
                                    <br></br>
                                    {/* <div class="d-flex justify-content-center">
                                    <div><img src={eco_logo} alt="Economics Club IIT Delhi" width={100} /></div>
                                    <div><h1>Economics Club IITD</h1></div>
                                    </div>
                                    <h6>Presents</h6> */}
                                    <h1 className="display-4">WINTER SCHOOL 2023</h1>
                                    <h6>Sponsored by</h6>
                                    <img src={optiver_logo_2} alt="Optiver" width={200} />
                                    <br></br>
                                    <br></br>
                                    <a href="https://unstop.com/workshop/quantitative-trading-winter-school-indian-institute-of-technology-iit-delhi-585723"><button type="button" class="btn-5-custom">Register</button></a>
                                    <a href="winterschool"><button type="button" class="btn-5-custom">Know More</button></a>
                                    <br></br>
                                </div>


                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="4000">
                            <div className="content mb-5 mt-5 pt-4 pb-3" align="center" width="100%" height='' >
                                <br></br>
                                <p className="display-5">An immersive 2 week online program <br></br><small className="text-muted">Open across IITs</small> </p>
                                <div class="frame"><a href="https://drive.google.com/file/d/1553qOGOO3Tlhrlaiuefi5ukkjiyXvJcx/view"><button class="btn-5-custom">Brochure</button></a>
                                    
                                </div>
                            </div>
                        </div>
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


                {/* Economics Club  */}
                <div className="text-center bg-image vanta-canvas" ref={this.vantaRef}>
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



let sketch = function(p) {
    let number_of_trees = 20;
    let trees = [];
    let radius = 400;
    let initial_boundary_size = 15;
    let number_of_tries = 10;
    let terminated = false;
    let colors;
  
    p.setup = function() {
      p.createCanvas(950, 950);
      p.noStroke();
      p.fill(255, 100, 90);
      p.background('#252525');
  
      p.stroke(0);
      p.strokeWeight(2);
      colors = [p.color('#ce3830'), p.color('#1c8b94'), p.color('#de980f'), p.color('#d8d8be'), p.color('#454545')];
  
      for (var i = 0; i < number_of_trees; i++) {
        let tree = [
          {
            pos: p.createVector(p.width / 2 + p.random(-250, 250), p.height / 2 + p.random(-250, 250)),
            parent: 0,
            boundary: initial_boundary_size,
            exhausted: false
          }
        ];
        trees.push(tree);
      }
    };
  
    p.draw = function() {
      if (!terminated) {
        terminated = grow_all();
        trees.forEach(display);
      }
    };
  
    function grow_all() {
      return trees.map(grow).every(x => x);
    }
  
    function grow(tree) {
      //Breadth first
      //for (var index = 0; index < tree.length; index++) {
      //Depth first
      for (var index = tree.length - 1; index >= 0; index--) {
        let current = tree[index];
        if (!current.exhausted) {
          let u = create_neighbour(current.pos, current.boundary);
  
          for (var t = 0; t < number_of_tries; t++) {
            let new_node = { pos: u, parent: index, boundary: current.boundary * 0.94, exhausted: current.boundary <= 3 };
            if (ok_position(new_node)) {
              if (p.random() < 0.3) current.exhausted = true;
              tree.push(new_node);
              return false;
            }
            u = create_neighbour(current.pos, current.boundary);
          }
          current.exhausted = true;
        }
      }
      return true;
    }
  
    function display(tree, col) {
      let last_index = tree.length - 1;
      let v = tree[last_index];
      let u = tree[v.parent];
  
      p.stroke(colors[col % colors.length]);
      p.strokeWeight(0.5 + v.boundary / 4);
      p.line(v.pos.x, v.pos.y, u.pos.x, u.pos.y);
    }
  
    function too_close_to_vertex(v, u) {
      return p5.Vector.dist(v.pos, u.pos) < p.max(v.boundary, u.boundary);
    }
  
    function too_close_to_trees(new_node) {
      return trees.some(function(tree) {
        return tree.some(function(t) {
          return too_close_to_vertex(new_node, t);
        });
      });
    }
  
    function outside_canvas(v) {
      return p.dist(v.x, v.y, p.width / 2, p.height / 2) > radius;
    }
  
    function ok_position(node) {
      return !too_close_to_trees(node) && !outside_canvas(node.pos);
    }
  
    function create_neighbour(v, dist) {
      let r = p.random(p.TWO_PI);
      let x = v.x + p.cos(r) * (dist + 1);
      let y = v.y + p.sin(r) * (dist + 1);
      return p.createVector(x, y);
    }
  
    p.keyPressed = function() {
      if (p.keyCode === 80) {
        p.saveCanvas('roses', 'jpeg');
      }
    };
  };
  
