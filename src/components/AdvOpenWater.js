import React from 'react';
import dolphinico from './images/dolphin.ico';
import openwatersmall from './images/products/services-openwater-small.jpg';
import advancedopensmall from './images/products/services-advancedopen-small.jpg';
import mermaid from './images/products/mermaid-small.jpg';
import homedolphin from './images/products/home-dolphin-small.jpg';
import photography from './images/products/dive-photography.jpg';
import boatdiver from './images/products/boatdiver.jpg';
import dolphin3 from './images/dolphin3.png';


function AdvOpenWater() {

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
                                        <li><a className="dropdown-item active" href="/AdvOpenWater">Advanced Open Water</a></li>
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
                                    <a className="nav-link" href="/Contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
            <main role="main">
                <div className="container-fluid jumbotron jumbotron-detail-adv-open-water py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">Advanced Open Water Dive</h1>
                    </div>
                </div>

                <div className="container">

                    <h1 className="fw-bolder">Advanced Open Water Dive
                        <small className="fw-normal fst-italic"> Step up with your Diving Skills!</small>
                    </h1>

                    <div className="row ">
                        <div className="col-6 col-lg-8">
                            {/* <img src={advancedopen} className="img-fluid rounded-1" alt="advanced open water" /> */}

                            <div className="container-openwater">
                                <iframe className="responsive-iframe" src="https://www.youtube.com/embed/tWPGi52nkHg?autoplay=1&mute=1"
                                    title="YouTube video player"></iframe>
                            </div>
                        </div>

                        <div className="col-6 col-lg-4">
                            <h3 className="my-3">About Advanced Open Water Dive Course</h3>
                            <p className="lead text-center">Gain more skills with Advanced Open Water Dive Course!</p>
                            <p className="user-select-none">What every diver should know before they purchase any scuba equipment will be covered in this
                                program. If you ever have experienced equipment problems in the water or have not felt totally
                                comfortable on a dive, then this program is for you. The emphasis of this course is on local diving
                                including proper thermal protection, weighting, and air control. These subjects are all covered in
                                greater depth than your open water scuba class. The diving theory far exceeds other programs used
                                for advanced diver certification. This program is specifically designed to teach divers the proper
                                use of the different styles of scuba equipment — Jacket vs. Back Buoyancy, Integrated vs.
                                Conventional Weight Systems, Steel vs. Aluminum Tanks, Vented vs. Paddle Fins, and Wet vs. Dry
                                Suits.
                            </p>
                            <h3>This course includes the following :</h3>
                            <ul>
                                <li>PADI Advanced Open Water booklet</li>
                                <li>15 Hours Classroom Sessions</li>
                                <li>15 Hours Pool Training</li>
                                <li>5 Ocean Dives</li>
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
                        <h4>Quote from Edmund Hillary...</h4>
                        <p className="mb-0 fst-italic"> It’s not the depths we conquer, but ourselves.

                        </p>
                    </div>

                    <h3 className="display-5 my-4">Other customers also tried...</h3>

                    <div className="row">
                        <div className="col-md-3 col-sm-6 mb-3">
                            <a href="/AllCourses">
                                <img className="img-fluid" src={homedolphin} alt="" />
                            </a>
                            <p>Close encouter with Dolphin</p>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-3">
                            <a href="/AllCourses">
                                <img className="img-fluid" src={mermaid} alt="" />
                            </a>
                            <p>Discover Mermaid</p>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-3">
                            <a href="/AllCourses">
                                <img className="img-fluid" src={photography} alt="" />
                            </a>
                            <p>Underwater Photography</p>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-3">
                            <a href="/AllCourses">
                                <img className="img-fluid" src={boatdiver} alt="" />
                            </a>
                            <p>Boat Diving</p>

                        </div>
                    </div>

                </div>

            </main>
            {/* order page */}

            <div className="offcanvas offcanvas-start shopping-cart-offcanvas" data-bs-scroll="true" tabindex="-1"
                id="shoppingCart" aria-labelledby="shoppingCartLabel">

                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="shoppingCartLabel">Your shopping cart</h5>
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
                                                src={openwatersmall} alt="open water" />
                                            <div className="media-body">
                                                <h5 className="mt-0 media-heading text-primary">Open Water</h5>
                                                <span>Status: </span><span className="text-success"><strong>Available</strong></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="col-sm-1 col-md-1" >
                                        <input type="number" className="form-control" min="1" max="100" />
                                    </td>
                                    <td className="col-sm-1 col-md-1 text-center"><strong>€200.00</strong></td>
                                    <td className="col-sm-1 col-md-1 text-center"><strong>€200.00</strong></td>
                                    <td className="col-sm-1 col-md-1">
                                        <button type="button" className="btn btn-danger">
                                            X
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-sm-8 col-md-6">
                                        <div className="media">
                                            <img className="mr-3 thumbnail" width="75" src={advancedopensmall}
                                                alt="advanced open water" />
                                            <div className="media-body">
                                                <h5 className="mt-0 media-heading text-primary">Advanced Open Water</h5>
                                                <span>Status: </span><span className="text-warning"><strong>Available</strong></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="col-sm-1 col-md-1" >
                                        <input type="number" className="form-control" min="1" max="100" />
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
                                        <h5><strong>€450.00</strong></h5>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan="3" className="text-right">
                                        <h5>Shipping</h5>
                                    </td>
                                    <td className="text-center">
                                        <h5><strong>€10.00</strong></h5>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan="3" className="text-right">
                                        <h3>Total</h3>
                                    </td>
                                    <td className="text-center">
                                        <h3><strong>€460.00</strong></h3>
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
                        Go to order page
                    </a>

                    <a type="button" href="/" className="m-1 btn btn-danger" data-bs-toggle="modal"
                        data-bs-target="#cancelModal">
                        Clear your shopping cart
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

export default AdvOpenWater;