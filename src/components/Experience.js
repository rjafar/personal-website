import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";
import '../css/Experience.css';
import Raytheon from './Raytheon';
import NASACaSGC from './NASACaSGC';

function Experience() {
    return(
        <BrowserRouter>
            <section id="exp-section" className="filler">
                <div className="exp-container">
                    <header className="expHeader">
                        <img className="header-img" src="/images/art/experience.svg" alt="Experience"/>
                    </header>
                    <div className="exp-container-body">
                        <div className="exp1">
                            <div className="exp1-img"><img src="/images/art/raytheon.svg" alt="Raytheon logo"/> </div>
                            <div className="exp1-desc">
                                <h3 className="exp1-date">2017 - 2020</h3>
                                <p className="expP">From dipping my toes in networking and vulnerability hacking to creating 
                                    beautiful, responsive graphs containing 100+ nodes, to capturing live wireless traffic and 
                                    range testing to solo developing a tool that ingests tons of metadata as well as co-founding the
                                    Raytheon's Women Network, I've gained a varied range of experience at Raytheon. 
                                    <Link to="/experience/Raytheon"> Read More</Link>
                                    <Route path="/experience/Raytheon" component={Raytheon}/>
                                </p>
                            </div>    
                        </div>
                        <div className="exp2">
                            <div className="exp2-img"><img src="/images/art/nasa.svg" alt="NASA logo"/></div>
                            <div className="exp2-desc">
                                <h3 className="exp2-date">2015</h3>
                                <p className="expP">During my internship, I learned how to solder, build a multitude of circuits controlling
                                    sensors through an Arduino UNO, and collect data on radiactive materials. It was my first 
                                    experience working with hardware and I loved the hands-on aspect in addition to learning so 
                                    much about space and sensors. 
                                    <Link to="/experience/NASACASGC"> Read More</Link>
                                    <Route path="/experience/NASACASGC" component={NASACaSGC}/>
                                </p> 
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    );
}

export default Experience;