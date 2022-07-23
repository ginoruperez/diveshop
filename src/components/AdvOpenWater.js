import React from 'react';
import dolphinico from './images/dolphin.ico';
import mermaid from './images/products/mermaid-small.jpg';
import homedolphin from './images/products/home-dolphin-small.jpg';
import photography from './images/products/dive-photography.jpg';
import boatdiver from './images/products/boatdiver.jpg';
import { footer } from './Footer';

function AdvOpenWater() {

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

                        <div className="profile-pic dropdown-toggle" data-bs-toggle="dropdown">
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
                <div className="container-fluid jumbotron jumbotron-detail-adv-open-water py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">Advanced Open Water Dive</h1>
                    </div>
                </div>

                <div className="container">

                    <nav className="my-3 ms-3" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/">Courses</a></li>
                            <li className="breadcrumb-item">Advanced Open Water</li>
                        </ol>
                    </nav>

                    <h1 className="fw-bolder">Advanced Open Water Dive
                        <small className="fw-normal fst-italic"> Step up with your Diving Skills!</small>
                    </h1>

                    <div className="row ">
                        <div className="col-6 col-lg-8">

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
                                <li>Access to PADI eLearning course</li>
                                <li>15 Hours Classroom Sessions</li>
                                <li>5 Ocean Dives including night Dives</li>
                                <li>PADI Advanced Open water Exam</li>

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
                        <h4>Quote from Edmund Hillary...</h4>
                        <p className="mb-0 fst-italic"> It’s not the depths we conquer, but ourselves.

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
            {footer}

        </div >
    );
}

export default AdvOpenWater;