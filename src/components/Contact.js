import React from 'react';
import dolphinico from './images/dolphin.ico';
import discoverscuba from './images/products/services-discoverscuba.jpg';
import mermaid from './images/products/mermaid-small.jpg';
import homedolphin from './images/products/home-dolphin-small.jpg';
import photography from './images/products/dive-photography.jpg';
import boatdiver from './images/products/boatdiver.jpg';
import dolphin3 from './images/dolphin3.png';
import './js/form-validation'


function Contact() {

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
                                        <li><a className="dropdown-item" href="/OpenWater">Open Water</a></li>
                                        <li><a className="dropdown-item" href="/AdvOpenWater">Advanced Open Water</a></li>
                                        <li><a className="dropdown-item" href="/Rescue">Rescue Diving</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="/AllCourses">All Dive Courses</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Products">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="/AboutUs">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/Contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>

            <main role="main">

                <div className="container-fluid jumbotron jumbotron-detail-open-water py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">Contact Us</h1>
                    </div>
                </div>


                <div className="container">

                    <h1 className="fw-bolder">Contact Us
                        <small className="fw-normal fst-italic"> Send us an email, we'd love to hear from you.</small>
                    </h1>


                    <form class="needs-validation" action="/" method="get" novalidate>


                        <div className="row mt-3">
                            <div className="col-md-6">
                                <div className="mb-2">
                                    
                                    <input type="text" className="form-control" placeholder="Your Name *" required />
                                    <div className="invalid-feedback">
                                        Valid Name is required.
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <h5>Select Services required</h5>
                                    <select className="form-control" id="services">
                                        <option value="dicoverscuba">Discover Scuba Diving</option>
                                        <option value="snorkeling">Snorkeling</option>
                                        <option value="openwater">PADI Open Water</option>
                                        <option value="advancedopenwater">PADI Advanced Open Water</option>
                                        <option value="rescuediver">PADI Rescue Diver</option>
                                        <option value="rescuediver">Scuba Diving Skills Update</option>
                                        <option value="divingequipment">Scuba Diving Equipment and Accessories</option>
                                        <option value="divingequipment">Air Tank Refill</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>

                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Your Email *" aria-label="email" required/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Your Phone Number *"
                                        aria-label="phone" required />
                                </div>
                                <div className="mb-2">
                                    <button type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                                        Send Message
                                    </button>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <textarea className="form-control" placeholder="Your Message *" rows="5" required></textarea>
                                </div>
                            </div>
                        </div>
                    </form>

                  
                   {/* 

                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div classNme="modal-header">
                                    <h4 className="modal-title">Thank you</h4>

                                </div>

                                <div className="modal-body">
                                    We successfully received your message. We will get in touch soon!
                                </div>

                                <div className="modal-footer">
                                    
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>

                            </div>
                        </div>
                    </div>

                */}

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

export default Contact;