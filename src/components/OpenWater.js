import React from 'react';
import dolphinico from './images/dolphin.ico';
import discoverscuba from './images/products/services-discoverscuba.jpg';
import mermaid from './images/products/mermaid-small.jpg';
import homedolphin from './images/products/home-dolphin-small.jpg';
import photography from './images/products/dive-photography.jpg';
import boatdiver from './images/products/boatdiver.jpg';
import dolphin3 from './images/dolphin3.png';


function OpenWater() {

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
                                        <li><a className="dropdown-item active" href="/OpenWater">Open Water</a></li>
                                        <li><a className="dropdown-item" href="/AdvOpenWater">Advanced Open Water</a></li>
                                        <li><a className="dropdown-item" href="/">Rescue Diving</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="/">All Dive Courses</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="order.html">Dive Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="piesubscription.html">
                                        Celtic subscription
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
            <main role="main">
                <div className="container-fluid jumbotron jumbotron-detail-open-water py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">Open Water Dive</h1>
                    </div>
                </div>

                <div className="container">

                    <h1 className="fw-bolder">Open Water Dive
                        <small className="fw-normal fst-italic"> Most Exciting course for the beginner!</small>
                    </h1>

                    <div className="row ">
                        <div className="col-6 col-lg-8">
                            <img src={discoverscuba} className="img-fluid rounded-1" alt="test" />
                        </div>

                        <div className="col-6 col-lg-4">
                            <h3 className="my-3">About Open Water Dive Course</h3>
                            <p className="lead text-center">Join the exciting adveture of our Open Water Course!</p>
                            <p className="user-select-none">This program is for the individual who is seeking Scuba certification. The course is approximately
                                30 hours of private or semi-private Scuba instruction. Private instruction enables our instructors
                                to provide a safe and comfortable diving experience that meets your individual needs. This is a
                                complete Scuba course that combines instruction in basic watermanship skills, diving theory, and
                                practical diving experience. The emphasis will be on making you a safe, self-sufficient, and
                                self-reliant diver. Certification cards will be issued upon completion.
                            </p>
                            <h3>This course includes the following :</h3>
                            <ul>
                                <li>PADI Open Water booklet</li>
                                <li>5 Classroom Sessions</li>
                                <li>5 Pool Sessions</li>
                                <li>5 Ocean Dives</li>
                            </ul>
                            <p className="user-select-none">All equipment will be provided for
                                the length of the course.</p>

                            <div className="row">

                                <div className="col-md-4">
                                    <strong>$200.00</strong>
                                </div>
                                <div className="col-md-8">
                                    <a type="button" href="shoppingbasket.html" className="btn btn-success float-end"
                                        data-bs-toggle="offcanvas" data-bs-target="a.html" aria-controls="shoppingCart">
                                        Add to cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 mb-3 mt-2 bg-light rounded border border-primary">
                        <h4>A quote from Celtic Diving Team</h4>
                        <p className="mb-0 fst-italic"> We dive not to escape life, but for life not to escape us.
                        </p>
                    </div>

                    <h3 className="display-5 my-4">Other customers also tried...</h3>

                    <div className="row">
                        <div className="col-md-3 col-sm-6 mb-3">
                            <a href="/">
                                <img className="img-fluid" src={homedolphin} alt="" />
                            </a>
                            <p>Close encouter with Dolphin</p>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-3">
                            <a href="/">
                                <img className="img-fluid" src={mermaid} alt="" />
                            </a>
                            <p>Discover Mermaid</p>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-3">
                            <a href="/">
                                <img className="img-fluid" src={photography} alt="" />
                            </a>
                            <p>Underwater Photography</p>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-3">
                            <a href="/">
                                <img className="img-fluid" src={boatdiver} alt="" />
                            </a>
                            <p>Boat Diving</p>

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
                                <a type="button" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-facebook-f"></i></a>
                                <a type="button" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-instagram"></i></a>
                                <a type="button" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-twitter"></i></a>
                                <a type="button" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-google-plus-g"></i></a>
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

export default OpenWater;