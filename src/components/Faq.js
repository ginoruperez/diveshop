import React from 'react';
import dolphinico from './images/dolphin.ico';
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

                                    <a className="nav-link dropdown-toggle" href="test.html" id="nav-dropdown" data-bs-toggle="dropdown"
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
                                    <a className="nav-link" href="/Contact">Contact</a>
                                </li>
                                <li className="nav-item dropdown active">

                                    <a className="nav-link active dropdown-toggle" href="/" id="nav-dropdown" data-bs-toggle="dropdown"
                                        aria-expanded="false" >
                                        Extras
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="nav-dropdown">
                                        <li><a className="dropdown-item" href="/Testimonial">Testimonial</a></li>
                                        <li><a className="dropdown-item active" href="/Faq">FAQ</a></li>
                                    </ul>
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
                    <h1 className="fw-bolder">FAQ 
                        <small className="fw-normal fst-italic"> For other query please contact us, we will be glad to answer you.</small>
                    </h1>

                    <div className="accordion" id="beginnerAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What is PADI?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#diveAccordion">
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
                                data-bs-parent="#diveAccordion">
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
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    How well do i have to swim?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree"
                                data-bs-parent="#diveAccordion">
                                <div className="accordion-body">
                                    <p>
                                    Students have to know how to swim, and feel comfortable in the water, but expert swimming skills are not required. Typically students complete a short 200m swim and a 10-minute water tread to demonstrate basic swimming ability.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    Are there any medical problems that will keep me from diving?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour"
                                data-bs-parent="#diveAccordion">
                                <div className="accordion-body">
                                    <p>
                                        Each student must complete a <a href="https://oceandivers.ie/assets/files/Medical%20Statement.pdf">Medical Statement</a> prior to training.
                                        This document informs instructors of a student’s medical condition,
                                        if there is a YES answer to any of the medical questions then a <a href="https://oceandivers.ie/assets/files/Medical%20Statement.pdf">PADI Medical Form</a> must be
                                        signed off by a doctor to pass you fit to dive. There are some conditions such as epilepsy,
                                        chronic ear infections, diabetes, active asthma, emphysema, heart disease, haemophilia
                                        that could prohibit a diver in the activity. Divers Alert Network (DAN) has a very extensive <a href="https://www.diversalertnetwork.org/medical/faq/"> Medical FAQ Page</a> on their
                                        website so worth checking this out for more specific details.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    What scuba gear do i need?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive"
                                data-bs-parent="#diveAccordion">
                                <div className="accordion-body">
                                    <p>
                                        Oceandivers will provide all the equipment that you will need for your course free of charge.
                                        Of course you will want to ultimately buy your own but it’s probably a good idea to wait until
                                        basic certification training is completed before you start to purchase your own equipment.
                                        Although we don’t sell gear ourselves, Oceandivers will be happy to guide and advise you in selecting
                                        the best equipment for you as you begin to dive regularly and gain experience.
                                        However it is nice to own your own mask and snorkel from the beginning, since these are personal items.
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
                                <a type="button" className="btn btn-floating btn-primary btn-lg" href="https://www.facebook.com/Celtic-Sea-Dive-Shop-100920469106278"><i className="fab fa-facebook-f"></i></a>
                                <a type="button" className="btn btn-floating btn-primary btn-lg" href="https://www.instagram.com/celticdive/"><i className="fab fa-instagram"></i></a>
                                <a type="button" className="btn btn-floating btn-primary btn-lg" href="https://twitter.com/CelticDive"><i className="fab fa-twitter"></i></a>
                                <a type="button" className="btn btn-floating btn-primary btn-lg" href="https://www.youtube.com/watch?v=wijB506FJTc"><i className="fab fa-youtube"></i></a>
                            </div>


                            <ul className="fa-ul" >
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-1">Unit 1 Blackrock Road Kinsale Ireland</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-1">
                                        <a href="mailto:info@celticdiveshop.ie">info@celticdiveshop.com </a> </span>
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