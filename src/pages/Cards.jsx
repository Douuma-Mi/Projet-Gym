import React from 'react'
import "../components/Cards.css"
import image from "../assets/crossfit.jpg"
import image2 from "../assets/la-boxe.jpg"
import image3 from "../assets/pexels-photo-1229356.webp"
import image4 from "../assets/csm_uaxrqq8ragtg6j2gwzf58ucvdrazuwku_688006dc3.jpg"
import logo from "../assets/pngtree-physical-fitness-sport-gym-logo-bodybuilder-with-big-muscles-posing-isolated-png-image_1924975.jpg"
import logo2 from "../assets/pngtree-physical-fitness-sport-gym-logo-bodybuilder-with-big-muscles-posing-isolated-png-image_1924975.jpg"
import logo3 from "../assets/pngtree-physical-fitness-sport-gym-logo-bodybuilder-with-big-muscles-posing-isolated-png-image_1924975.jpg"
import logo4 from "../assets/pngtree-physical-fitness-sport-gym-logo-bodybuilder-with-big-muscles-posing-isolated-png-image_1924975.jpg"
const Cards = () => {
    return (
        <div className="cards-container">
            <div className="display">
                {/* Card 1 */}
                <div className="card">
                    <div className="content">
                        <div className="back">
                            <div className="back-content">
                                <img
                                    src={logo}
                                    alt="sport logo"
                                    style={{ width: '50px', height: '50px' }}
                                />                <strong>PHYSIQUE</strong>
                            </div>
                        </div>
                        <div className="front">
                            <div className="img">
                                <div className="circle"></div>
                                <div className="circle" id="right"></div>
                                <div className="circle" id="bottom"></div>
                            </div>
                            <div className="front-content">
                                <img src={image} alt="box" className="back-img" />
                                <small className="badge">PHYSIQUE</small>
                                <div className="description">
                                    <div className="title">
                                        <p className="title"><strong>Monday  Wednesday  Friday</strong></p>
                                        <svg height="15px" width="15px" viewBox="0,0,256,256" xmlns="http://www.w3.org/2000/svg" fill="#20c997">
                                            <g transform="scale(8,8)">                      </g>
                                        </svg>
                                    </div>
                                    <p className="card-footer">17:00 → 18:30 &nbsp; | &nbsp; Monthly price = 40 TND</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card">
                    <div className="content">
                        <div className="back">
                            <div className="back-content">
                                <svg stroke="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">                </svg>
                                <strong>BOX</strong>
                            </div>
                        </div>
                        <div className="front">
                            <div className="img">
                                <div className="circle"></div>
                                <div className="circle" id="right"></div>
                                <div className="circle" id="bottom"></div>
                            </div>
                            <div className="front-content">
                                <img src={image2} alt="box" className="back-img" />
                                <small className="badge">BOX</small>
                                <div className="description">
                                    <div className="title">
                                        <p className="title"><strong>Tuesday  Thursday  Satueday</strong></p>
                                        <svg height="15px" width="15px" viewBox="0,0,256,256" xmlns="http://www.w3.org/2000/svg" fill="#20c997">
                                            <g transform="scale(8,8)">                      </g>
                                        </svg>
                                    </div>
                                    <p className="card-footer">17:00 → 18:30 &nbsp; | &nbsp; Monthly price = 45 TND</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="card">
                    <div className="content">
                        <div className="back">
                            <div className="back-content">
                                <svg stroke="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">                </svg>
                                <strong>MUSCULATION</strong>
                            </div>
                        </div>
                        <div className="front">
                            <div className="img">
                                <div className="circle"></div>
                                <div className="circle" id="right"></div>
                                <div className="circle" id="bottom"></div>
                            </div>
                            <div className="front-content">
                                <img src={image3} alt="box" className="back-img" />
                                <small className="badge">MUSCULATION</small>
                                <div className="description">
                                    <div className="title">
                                        <p className="title"><strong>Every day</strong></p>
                                        <svg height="15px" width="15px" viewBox="0,0,256,256" xmlns="http://www.w3.org/2000/svg" fill="#20c997">
                                            <g transform="scale(8,8)">                      </g>
                                        </svg>
                                    </div>
                                    <p className="card-footer"> 07:00 → 22:00 &nbsp; | &nbsp; Monthly price = 50 TND</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="card">
                    <div className="content">
                        <div className="back">
                            <div className="back-content">
                                <svg stroke="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">                </svg>
                                <strong>KARATÉ</strong>
                            </div>
                        </div>
                        <div className="front">
                            <div className="img">
                                <div className="circle"></div>
                                <div className="circle" id="right"></div>
                                <div className="circle" id="bottom"></div>
                            </div>
                            <div className="front-content">
                                <img src={image4} alt="box" className="back-img" />
                                <small className="badge">KARATÉ</small>
                                <div className="description">
                                    <div className="title">
                                        <p className="title"><strong>Sunday </strong></p>
                                        <svg height="15px" width="15px" viewBox="0,0,256,256" xmlns="http://www.w3.org/2000/svg" fill="#20c997">
                                            <g transform="scale(8,8)">                      </g>
                                        </svg>
                                    </div>
                                    <p className="card-footer">17:00 → 18:30 &nbsp; | &nbsp; Monthly price = 35 TND</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="btn" href="/Login">Login</a>
        </div>
    );
};


export default Cards