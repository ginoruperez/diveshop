import React from 'react';
import dolphinico from './images/dolphin.ico';
import dolphin3 from './images/dolphin3.png';
import aboutdiveteam from './images/products/about-diveteam.jpg';

import divergino from './images/diver-gino1.jpg';
import diverjohn from './images/diver-john.jpg';
import diverfiona from './images/diver-fiona.jpg';



function AboutUs() {

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

                                    <ul className="dropdown-menu" aria-labelledby="nav-dropdown">
                                        <li><a className="dropdown-item active" href="/OpenWater">Open Water</a></li>
                                        <li><a className="dropdown-item" href="/AdvOpenWater">Advanced Open Water</a></li>
                                        <li><a className="dropdown-item" href="/Rescue">Rescue Diving</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="/AllCourses">All Dive Courses</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Shop">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active " href="/AboutUs">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Contact">Contact</a>
                                </li>
                                <li className="nav-item dropdown">

                                    <a className="nav-link dropdown-toggle" href="/" id="nav-dropdown" data-bs-toggle="dropdown"
                                        aria-expanded="false" >
                                        Extras
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="nav-dropdown">
                                        <li><a className="dropdown-item" href="/Testimonial">Testimonial</a></li>
                                        <li><a className="dropdown-item" href="/Faq">FAQ</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
            <main role="main">
                <div className="container-fluid jumbotron jumbotron-team py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">About Us</h1>
                    </div>
                </div>

                <div className="container">

                    <h1 className="fw-bolder"> Our Team
                        <small className="fw-normal fst-italic"> A Brief Story of Us!</small>
                    </h1>

                    <div className="row ">

                        <div className="col-6 col-lg-8">

                            <img src={aboutdiveteam} className="img-fluid rounded-1" alt="test" />


                        </div>



                        <div className="col-6 col-lg-12">
                            <h3 className="my-3">About Us!</h3>
                            { /* <p className="lead text-center">Join the exciting adveture of our Open Water Course!</p> */}
                            <p className="user-select-none">
                                <section>
                                    Gino Ruperez is the owner of Celtic Sea Dive Shop located in Kinsale, Southwest coast of Ireland
                                    near Celtic Sea. It has been in operation since 2015 in Ireland. The idea of forming a Dive Shop
                                    is one of dreams by owner who has greatly influenced and inspired by his spectacular experiences
                                    in doing underwater activities by his PADI professional diving instructors and diving friends
                                    who work from Jeddah Saudi Arabia as an expat for several years. Diving in the Red Sea is a fun
                                    filled recreational activities that helps them to alleviate the boredom and loneliness of being
                                    thousands of miles away from their family.
                                </section>
                                <br />

                                <section>
                                    The owner got an interest in pursuing a goal of learning to dive in an open water of Red Sea in
                                    the south of Jeddah while he was working in Saudi as an expat. Fortunately, he met his
                                    professional PADI Irish instructor David John Walker and few diving buddies.
                                </section>
                                <br />
                                <section>
                                    After immigrating to Ireland and settled in Kinsale, he started to form a team of
                                    professional divers along with David John Walker as the lead instructor. Kinsale has some
                                    amazing dive locations and is the perfect place to learn to dive.
                                </section>
                                <br />
                                <section>
                                    The Celtic Sea Dive shop aims to provide training and education in a fun-filled safe environment
                                    to people from all walks of life.
                                </section>
                                <br />
                                <section>
                                    The team helps people conquer their fear in an open water. They focus mainly in making sure
                                    anybody visiting them has an unforgettable experience and leave with a smile. It also offers a
                                    wide range of diving equipment and accessories with high quality brands

                                </section>
                                <br />
                                <section>
                                    Since 2010, Celtic Sea Dive shop is one of the premier dive shops in the country and it is a
                                    proud <strong><em>5 star PADI facility</em></strong> as well as sales and repairs.
                                </section>
                                <br />
                            </p>
                        </div>
                    </div>
                    <div className="p-4 mb-3 mt-2 bg-light rounded border border-primary">
                        <h4>A quote from Celtic Diving Team</h4>
                        <p className="mb-0 fst-italic"> We dive not to escape life, but for life not to escape us.
                        </p>
                    </div>

                    <h3 className="display-5 my-4">Meet the Team...</h3>

                    <div className="container history">

                        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4">

                            <div className="col">
                                <div className="card rounded mb-4 shadow-sm">
                                    <img className="card-img-top" src={diverjohn} alt="dolphinsmall" />
                                    <div className="card-body">
                                        <h5 className="card-title">David John Walker</h5>
                                        <p className="card-text"><strong> <em>Certified PADI Instructor</em> </strong> He is qualified to teach a wide range of
                                            diving courses:
                                            <ul>
                                                <li>Open Water Dive</li>
                                                <li>Advanced Open Water Dive</li>
                                                <li>Search and Rescue Dive</li>
                                                <li>Drysuit Course</li>
                                                <li>Navigation</li>
                                                <li>Underwater Video and Photography</li>
                                                <li>Deep Technical Diving</li>
                                            </ul></p>
                                    </div>

                                </div>
                            </div>

                            <div className="col">
                                <div className="card rounded mb-4 shadow-sm">
                                    <img className="card-img-top" src={divergino} alt="diver" />
                                    <div className="card-body">
                                        <h5 className="card-title">Gino Ruperez</h5>
                                        <p className="card-text">He enjoys all diving and has a special love
                                            of underwater Photography. He is a certified PADI open water, PADI advanced open water
                                            and Rescue Diver. He is a qualified PADI instructor.</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col">
                                <div className="card rounded mb-4 shadow-sm">
                                    <img className="card-img-top" src={diverfiona} alt="services advanced open water" />
                                    <div className="card-body">
                                        <h5 className="card-title">Fiona Madrigal</h5>
                                        <p className="card-text">joined in 2017 and qualified as Dive Master
                                            since 2008.
                                            Fiona is an integral member of our dive center and is our senior Assistant instructor.</p>
                                    </div>

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

export default AboutUs;