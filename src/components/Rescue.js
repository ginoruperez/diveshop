import React from 'react';
import dolphinico from './images/dolphin.ico';
import rescuesmall from './images/products/services-rescue-small.jpg';
import mermaid from './images/products/mermaid-small.jpg';
import homedolphin from './images/products/home-dolphin-small.jpg';
import photography from './images/products/dive-photography.jpg';
import boatdiver from './images/products/boatdiver.jpg';
import dolphin3 from './images/dolphin3.png';


function Rescue() {

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
                                        <li><a className="dropdown-item active" href="/Rescue">Rescue Diving</a></li>
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
                                    <a className="nav-link " href="/AboutUs">About Us</a>
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
                <div className="container-fluid jumbotron jumbotron-detail-rescue py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">Rescue Dive</h1>
                    </div>
                </div>

                <div className="container">

                    <h1 className="fw-bolder">Rescue Dive
                        <small className="fw-normal fst-italic"> Care and Concern for Safety of Others</small>
                    </h1>

                    <div className="row ">
                        <div className="col-6 col-lg-8">                            

                            <div className="container-openwater">
                                <iframe className="responsive-iframe" src="https://www.youtube.com/embed/YNdo9tcgzpM?autoplay=1&mute=1"
                                    title="YouTube video player"></iframe>
                            </div>


                        </div>

                        <div className="col-6 col-lg-4">
                            <h3 className="my-3">About Rescue Dive Course</h3>
                            <p className="lead text-center">Be caring and have concerned for safety of others, join our Rescue Dive Course!</p>
                            <p className="user-select-none">This course will teach the certified diver how to handle minor emergency situations. The student is
                                taught Cardio-Pulmonary Resuscitation (CPR) as well as how to be a first responder when an accident
                                occurs. The treatment for the majority of water accidents is the delivery of 100% pure oxygen to the
                                victim. This course will teach the student the correct way to handle and deliver 100% pure oxygen to
                                someone in need..
                            </p>
                            <h3>This course includes the following :</h3>
                            <ul>
                                <li>PADI Rescue booklet</li>
                                <li>2 Classroom Sessions</li>
                                <li>2 Simulation of Rescue Dive on Surface</li>
                                <li>3 Simulation of Rescue Dive underwater</li>
                            </ul>
                            <p className="user-select-none">All equipment will be provided for
                                the length of the course.</p>

                            <div className="row">

                                <div className="col-md-4">
                                    <strong>€ 250.00</strong>
                                </div>
                                <div className="col-md-8">
                                    <a type="button" href="/Order" className="btn btn-success float-end"
                                        data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
                                        Order
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 mb-3 mt-2 bg-light rounded border border-primary">
                        <h4>A quote from Rescue Team...</h4>
                        <p className="mb-0 fst-italic">Be nice to divers. We know places where nobody will find you.
                        </p>
                    </div>

                    <h3 className="display-5 my-4">Other customers also tried...</h3>

                    <div className="row">
                        <div className="col-md-3 col-sm-6 mb-3">
                            <a href="/AllCourses">
                                <img className="img-fluid" src={homedolphin} alt="dolphin" />
                            </a>
                            <p>Close encouter with Dolphin</p>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-3">
                            <a href="/AllCourses">
                                <img className="img-fluid" src={mermaid} alt="mermaid" />
                            </a>
                            <p>Discover Mermaid</p>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-3">
                            <a href="/AllCourses">
                                <img className="img-fluid" src={photography} alt="photography" />
                            </a>
                            <p>Underwater Photography</p>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-3">
                            <a href="/AllCourses">
                                <img className="img-fluid" src={boatdiver} alt="boat dive" />
                            </a>
                            <p>Boat Diving</p>

                        </div>
                    </div>

                </div>

            </main>

            {/* static order page */}

            <div className="offcanvas offcanvas-start shopping-cart-offcanvas" data-bs-scroll="true" tabindex="-1"
                id="shoppingCart" aria-labelledby="shoppingCartLabel">

                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="shoppingCartLabel">Your ordered course</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>

                <div className="offcanvas-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Quantity</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">Total</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="col-sm-8 col-md-6">
                                        <div className="media">
                                            <img className="mr-3 thumbnail img-fluid" width="75"
                                                src={rescuesmall} alt="open water" />
                                            <div className="media-body">
                                                <h5 className="mt-0 media-heading text-primary">Rescue Dive</h5>
                                                <span>Status: </span><span className="text-success"><strong>Available</strong></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="col-sm-1 col-md-1" >
                                        <input type="number" className="form-control" min="1" max="100" value="1" />
                                    </td>
                                    <td className="col-sm-1 col-md-1 text-center"><strong>€250.00</strong></td>
                                    <td className="col-sm-1 col-md-1 text-center"><strong>€250.00</strong></td>
                                    <td className="col-sm-1 col-md-1">
                                        <button type="button" className="btn btn-danger">
                                            X
                                        </button>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td colspan="3" className="text-right">
                                        <h5>Subtotal</h5>
                                    </td>
                                    <td className="text-center">
                                        <h5><strong>€250.00</strong></h5>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan="3" className="text-right">
                                        <h5>Tax</h5>
                                    </td>
                                    <td className="text-center">
                                        <h5><strong>€25.00</strong></h5>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan="3" className="text-right">
                                        <h3>Total</h3>
                                    </td>
                                    <td className="text-center">
                                        <h3><strong>€275.00</strong></h3>
                                    </td>
                                    <td></td>

                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <form className="m-1">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code" />
                            <div className="input-group-append">
                                <button type="button" className="btn btn-secondary">Redeem</button>
                            </div>
                        </div>
                    </form>
                    <a type="button" href="/Order" className="m-1 btn btn-success">
                        Go to Order Payment
                    </a>

                </div>
            </div>

            {/*End of static order page*/}

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

export default Rescue;