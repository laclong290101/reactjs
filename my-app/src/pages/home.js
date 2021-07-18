import React from 'react'
import { Link } from 'react-router-dom';
import Products from '../components/Products';
import imagetest from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'

import '../css/style.css'

const HomePage = (props) => {

    return (

        <div className="container">
            <section className="sectionMain sectionSlider">
                <div className="container">
                    <div className="slider">
                        <div className="sliderContent">
                            <h5>Varius</h5>
                            <h2>Your Holiday!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <a className="btn-more" href="#">More</a>
                        </div>
                        <ul className="navSlider">
                            <li className="active"><a href /></li>
                            <li><a href /></li>
                            <li><a href /></li>
                            <li><a href /></li>
                            <li><a href /></li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* END slder */}
            {/* welcome */}
            <section className="sectionMain sectionWelcome">
                <div className="container">
                    <label className="labelSection">Welcome</label>
                    <div className="modWelcome">
                        <article>
                            <div className="thumbArt"><img src={imagetest} /></div>
                            <h3>Welcome.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href className="btn-more">More</a>
                        </article>
                        <article>
                            <div className="thumbArt"><img src={img3} /></div>
                            <h3>Welcome.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href className="btn-more">More</a>
                        </article>
                    </div>
                </div>
            </section>
            {/* END welcome */}
            {/* Services */}
            <section className="sectionMain sectionServices">
                <div className="container">
                    <label className="labelSection">Services</label>
                    <ul className="modServices">
                        <li>
                            <div className="servicesCont">
                                <div><i className="fas fa-anchor fa-2x" /></div>
                                <h5>Services</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </li>
                        <li>
                            <div className="servicesCont">
                                <div><i className="fas fa-comment fa-2x" /></div>
                                <h5>Services</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </li>
                        <li>
                            <div className="servicesCont">
                                <div><i className="fas fa-heartbeat fa-2x" /></div>
                                <h5>Services</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </li>
                        <li>
                            <div className="servicesCont">
                                <div><i className="fas fa-bullseye fa-2x" /></div>
                                <h5>Services</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </li>
                        <li>
                            <div className="servicesCont">
                                <div><i className="fas fa-balance-scale fa-2x" /></div>
                                <h5>Services</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </li>
                        <li>
                            <div className="servicesCont">
                                <div><i className="fab fa-mixcloud fa-2x" /></div>
                                <h5>Services</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            {/* END Services */}
            {/* News */}
            <section className="sectionMain sectionNews">
                <div className="container">
                    <label className="labelSection">News</label>
                    <article className="artNews">
                        <img src={img4} />
                        <ul className="desSort">
                            <li><i className="fas fa-user" /> Admin</li>
                            <li><i className="fas fa-calendar-alt" /> May, 06, 2019</li>
                        </ul>
                        <h2>The most beautiful beach on over the world</h2>
                        <a href="#" className="btn-more">More</a>
                    </article>
                </div>
            </section>
            {/* END News */}
            {/* Subs */}
            <section className="sectionMain sectionSubs">
                <div className="container">
                    <label className="labelSection">Join the Club</label>
                    <div className="subCont">
                        <form>
                            <input type="text" name placeholder="Your email" />
                            <button type="submit"><i className="fab fa-telegram-plane fa-2x" /></button>
                        </form>
                    </div>
                </div>
            </section>
            {/* END Subs */}
            <footer>
                <div className="mainFooter">
                    <div className="container">
                        <div className="col">
                            <h4>History of us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco</p>
                        </div>
                        <div className="col">
                            <h4>Twtter Post</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco</p>
                        </div>
                        <div className="col col-secon">
                            <h4>Events</h4>
                            <ul>
                                <li><a href><span>12 Aug</span> Cuciculum </a></li>
                                <li><a href><span>12 Aug</span> Cuciculum </a></li>
                                <li><a href><span>12 Aug</span> Cuciculum </a></li>
                                <li><a href><span>12 Aug</span> Cuciculum </a></li>
                                <li><a href><span>12 Aug</span> Cuciculum </a></li>
                                <li><a href><span>12 Aug</span> Cuciculum </a></li>
                            </ul>
                        </div>
                        <div className="col col-secon">
                            <h4>Navigation</h4>
                            <ul>
                                <li><a href>Home</a></li>
                                <li><a href>About</a></li>
                                <li><a href>Pages</a></li>
                                <li><a href>code</a></li>
                                <li><a href>Gallery</a></li>
                                <li><a href>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <p>© 2021 TH TRAVElS</p>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default HomePage
