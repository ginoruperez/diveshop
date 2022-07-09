import React from 'react';
import dolphinico from './images/dolphin.ico';

import discoverscuba from './images/products/services-discoverscuba.jpg';
import mermaid from './images/products/mermaid-small.jpg';
import snorkel from './images/products/services-snorkeling.jpg';
import openwater from './images/products/services-openwater.jpg';

import advopenwater from './images/products/services-advancedopen.jpg';
import rescue from './images/products/services-rescue.jpg';

import dolphin from './images/products/home-dolphin-small.jpg';
import photography from './images/products/dive-photography.jpg';
import boatdiver from './images/products/boatdiver.jpg';

import dolphin3 from './images/dolphin3.png';


function Faq() {

    return (
        <div>
            <header>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />

                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src={dolphinico} width="30" height="30" className="d-inline-block align-top" alt="Celtic Sea Dive Shop Logo" />
                            Celtic Sea Dive Shop
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="nav navbar-nav mr-auto">
                                <li className="nav-item ">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item dropdown">

                                    <a className="nav-link active dropdown-toggle" href="test.html" id="nav-dropdown" data-bs-toggle="dropdown"
                                        aria-expanded="false" >
                                        Courses
                                    </a>

                                    <ul className="dropdown-menu active" aria-labelledby="nav-dropdown">
                                        <li><a className="dropdown-item" href="/OpenWater">Open Water</a></li>
                                        <li><a className="dropdown-item" href="/AdvOpenWater">Advanced Open Water</a></li>
                                        <li><a className="dropdown-item" href="/Rescue">Rescue Diving</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item active" href="/AllCourses">All Dive Courses</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Products">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="/AboutUs">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
            <main role="main">
                <div className="container-fluid jumbotron jumbotron-detail-allcourses py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">FAQ</h1>
                    </div>
                </div>

                <div className="container">

                    <div className="accordion" id="beginnerAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What is PADI?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#fruitPiesAccordion">
                                <div className="accordion-body">
                                    <p>
                                        PADI is The Professional Association of Diving Instructors. PADI is the world's largest and most widely recognized recreational scuba diver training agency. As a PADI diver you will have earned the finest and most respected diver credentials available.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    What's involve in Learning Scuba Dive?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#fruitPiesAccordion">
                                <div className="accordion-body">
                                    <p>
                                        Learning to scuba dive is an incredible adventure! With PADI as your training organization, your path to being a certified diver is accomplished in three exciting phases:
                                        

                                        <h5>Knowledge Development</h5>
                                        During the first phase of your PADI course with Oceandivers; you develop an understanding of the basic principles of scuba diving. You learn things like how pressure affects your body, how to choose the best scuba gear and what to consider when planning dives. You briefly review what you have studied in the five knowledge sections with your instructor and take a short quiz to be sure you’re getting it. At the end of the course, you’ll take a longer quiz that makes sure you have all the key concepts and ideas down. You and your instructor will review anything that you don’t quite get until it’s clear.
                                        

                                        <h5>Confined Water Dives – Scuba Skills Training</h5>
                                        This is what it’s all about - diving, You develop basic scuba skills by scuba diving in a pool or body of water with pool-like conditions. Here you’ll learn everything from setting up your scuba gear to how to easily get water out of your mask  without surfacing. You’ll also practice some emergency skills, like sharing air or recovering your regulator.  Plus you will learn the joy of being weightless under water by achieving neutral buoyancy.
                                        

                                        <h5>Open Water Dives</h5>
                                        After your confined water dives, you and the new friends you’ve made will continue to learn during four open water dives with your PADI Instructor at a dive site. This is where you fully experience the underwater adventure. You may make these dives locally or on a fun weekend away.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How Deep can I go?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#fruitPiesAccordion">
                                <div className="accordion-body">
                                    <p>
                                    Open Water scuba divers stay above 18 metres and while this is the limit some of the most interesting dives are no deeper than 15 metres where the water is warmer and the colours are brighter due to the light. With further training and experience, the limit for recreational scuba diving is 40 metres.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </main>

            <footer className="main-footer text-white text-center text-lg-start bg-primary">

                <div className="container p-4">

                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">

                            <img src={dolphin3} width="180" height="180" className="d-inline-block align-top"
                                alt="Celtic Sea Dive Shop Logo" />

                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">

                            <h5 className="text-uppercase mb-4">Follow Us</h5>


                            <div className="mt-4">
                                <a type="button" className="btn btn-floating btn-primary btn-lg" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a type="button" className="btn btn-floating btn-primary btn-lg" href="/"><i className="fab fa-instagram"></i></a>
                                <a type="button" className="btn btn-floating btn-primary btn-lg" href="/"><i className="fab fa-twitter"></i></a>
                                <a type="button" className="btn btn-floating btn-primary btn-lg" href="/"><i className="fab fa-google-plus-g"></i></a>
                            </div>


                            <ul className="fa-ul" >
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-1">Unit 1 Blackrock Road Kinsale Ireland</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-1">info@celticdiveshop.com</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-1">+ 353 234 567 88</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-print"></i></span><span className="ms-1">+ 353 234 567 89</span>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Opening hours</h5>

                            <table className="table text-center text-white">
                                <tbody className="font-weight-normal">
                                    <tr>
                                        <td>Mon - Thu:</td>
                                        <td>8am - 9pm</td>
                                    </tr>
                                    <tr>
                                        <td>Fri - Sat:</td>
                                        <td>8am - 5pm</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday:</td>
                                        <td>9am - 7pm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>

                <div className="copyright text-center py-3">Copyright © 2022 Celtic Sea Dive Shop. All Rights Reserved.</div>


            </footer>

        </div >
    );
}

export default Faq;