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


function AllCourses() {

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
                <div className="container-fluid jumbotron jumbotron-detail-allcourses py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">All Dive Courses</h1>
                    </div>
                </div>

                <div className="container">

                    <div className="accordion" id="beginnerAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Beginner Courses
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#diveAccordion">
                                <div className="accordion-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="discover scuba" src={discoverscuba} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Discover Scuba</h5>
                                                    <p className="card-text">€200.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="/AllCourses" className="btn btn-primary">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="mermaid" src={mermaid} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Discover Mermaid</h5>
                                                    <p className="card-text">€150.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="/AllCourses" className="btn btn-primary">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="snorkel" src={snorkel} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Fun Dive for Kids and Adult</h5>
                                                    <p className="card-text">€80.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="/AllCourses" className="btn btn-primary">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="open water" src={openwater} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Open Water Dive</h5>
                                                    <p className="card-text">€250.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="/OpenWater" className="btn btn-primary">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Advanced Level Courses
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#diveAccordion">
                                <div className="accordion-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="advanced open water" src={advopenwater} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Advanced Open Water</h5>
                                                    <p className="card-text">€300.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="/AdvOpenWater" className="btn btn-primary">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="resuce" src={rescue} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Rescue Dive Course</h5>
                                                    <p className="card-text">€300.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="/Rescue" className="btn btn-primary">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    All level Courses
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#diveAccordion">
                                <div className="accordion-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="discover scuba" src={discoverscuba} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Discover Scuba</h5>
                                                    <p className="card-text">€150.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="/AllCourses" className="btn btn-primary">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="mermaid" src={mermaid} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Discover Mermaid</h5>
                                                    <p className="card-text">€200.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="/AllCourses" className="btn btn-primary">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="snorkeling" src={snorkel} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Snorkelling</h5>
                                                    <p className="card-text">€50.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="/AllCourses" className="btn btn-primary">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="open water" src={openwater} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Open Water Dive</h5>
                                                    <p className="card-text">€250.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="/OpenWater" className="btn btn-primary">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="advanced open water" src={advopenwater} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Advanced Open Water</h5>
                                                    <p className="card-text">€350.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="/AdvOpenWater" className="btn btn-primary">View details</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="rescue dive" src={rescue} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Rescue Dive</h5>
                                                    <p className="card-text">€350.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="/Rescue" className="btn btn-primary">View details</a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="dolphin" src={dolphin} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Diving with Dolphin</h5>
                                                    <p className="card-text">€350.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="/AllCourses" className="btn btn-primary">View details</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="underwater photography" src={photography} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Underwater Photography</h5>
                                                    <p className="card-text">€350.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="/AllCourses" className="btn btn-primary">View details</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="boat diver" src={boatdiver} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Boat Diving</h5>
                                                    <p className="card-text">€350.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="/AllCourses" className="btn btn-primary">View details</a>
                                                </div>
                                            </div>
                                        </div>



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

export default AllCourses;