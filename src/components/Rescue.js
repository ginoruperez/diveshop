import React from 'react';
import dolphinico from './images/dolphin.ico';
import mermaid from './images/products/mermaid-small.jpg';
import photography from './images/products/dive-photography.jpg';
import boatdiver from './images/products/boatdiver.jpg';
import fundive  from './images/products/fundive.jpg';
import { footer } from './Footer';


function Rescue() {

    return (
        <div>
            <header>

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
                                    <a className="nav-link" href="/Products">Shop</a>
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
                                        <li><a className="dropdown-item" href="/">External Links &raquo; </a>
                                            <ul className="submenu dropdown-menu">
                                                <li><a className="dropdown-item" target="_blank" href="https://www.padi.com/" rel="noreferrer">PADI Website</a></li>
                                                <li><a className="dropdown-item" target="_blank" href="https://www.daneurope.org/en/home" rel="noreferrer">DAN Website</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-item dropdown" style={{ "width": "170px", "height": "20px" }} >

                        <div className="profile-pic dropdown-toggle" data-bs-toggle="dropdown"
                        >
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </div>


                        <ul className="dropdown-menu" aria-labelledby="nav-dropdown">
                            <li><a className="dropdown-item" href="/SignInLink">Sign-In</a></li>
                            <li><a className="dropdown-item" href="/SignUp">Sign-Up</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="/">Logout</a></li>
                        </ul>

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
                    <nav className="my-3 ms-3" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/">Courses</a></li>
                            <li className="breadcrumb-item">Rescue Diving</li>
                        </ol>
                    </nav>

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
                                    <a type="button" href="/Contact" className="btn btn-success float-end">
                                        Get in touch
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
                                <img className="img-fluid" src={fundive} alt="dolphin" />
                            </a>
                            <p>Fun Dive for Kids and Adult</p>
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
            {footer}



        </div >
    );
}

export default Rescue;