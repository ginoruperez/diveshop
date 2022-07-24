import React from 'react';

import dolphinico from './images/dolphin.ico';
import { footer } from './Footer';

function Testimonial() {

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

                                    <a className="nav-link dropdown-toggle" href="test.html" id="nav-dropdown" data-bs-toggle="dropdown"
                                        aria-expanded="false" >
                                        Courses
                                    </a>

                                    <ul className="dropdown-menu " aria-labelledby="nav-dropdown">
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
                                    <a className="nav-link" href="/Contact">Contact</a>
                                </li>
                                <li className="nav-item dropdown active">

                                    <a className="nav-link active dropdown-toggle" href="/" id="nav-dropdown" data-bs-toggle="dropdown"
                                        aria-expanded="false" >
                                        Extras
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="nav-dropdown">
                                        <li><a className="dropdown-item active" href="/Testimonial">Testimonial</a></li>
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
                <div className="container-fluid jumbotron jumbotron-testimonial py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">Testimonials</h1>
                    </div>
                </div>

                <nav className="my-3 ms-3" >
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a href="/">Extras</a></li>
                        <li className="breadcrumb-item">Testimonial</li>
                    </ol>
                </nav>


                <h1 className="fw-bolder">Testimonials
                    <small className="fw-normal fst-italic"> What Other Say About Us</small>
                </h1>

                <div id="welcomeCarousel" className="carousel slide carousel-dark" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Welcome 1"></button>
                        <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="1"
                            aria-label="Welcome 2"></button>
                        <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="2"
                            aria-label="Welcome 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item  active">
                            <div className="carousel-caption">
                                <img className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" />
                                <div className="row d-flex justify-content-center">

                                    <div className="col-lg-8" >
                                        <h5 className="mb-3">Maria Kate</h5>
                                        <p>Photographer</p>
                                        <p className="text-muted">
                                            <i className="fas fa-quote-left pe-2"></i>
                                            Just to say, I had an absolute FANTASTIC evening on Tuesday.
                                            I haven't stopped taking about it since and convincing everyone to take up scuba!
                                            It really was brilliant and I cant wait til next week!
                                        </p>
                                    </div>
                                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="far fa-star fa-sm"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-caption">
                                <img className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" />
                                <div className="row d-flex justify-content-center">

                                    <div className="col-lg-8" >
                                        <h5 className="mb-3">John Doe</h5>
                                        <p>Web Developer</p>
                                        <p className="text-muted">
                                            <i className="fas fa-quote-left pe-2"></i>
                                            My advanced open water course was great, thanks to my instructor and Divemaster, I had a great experience.
                                            I would not have done it with any other instructor. Overall Celtic Diving Team and its crew are amazing when it comes to diving,
                                            huge experience and knowledge between them.
                                        </p>
                                    </div>
                                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="far fa-star fa-sm"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-caption">
                                <img className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" />
                                <div className="row d-flex justify-content-center">

                                    <div className="col-lg-8" >
                                        <h5 className="mb-3">Anna Deynah</h5>
                                        <p>Registered Nurse</p>
                                        <p className="text-muted">
                                            <i className="fas fa-quote-left pe-2"></i>
                                            Thank you for all your help, I think the course was fantastic and I really enjoy it.
                                            All the instructors very professional and the approach to the candidates was very individual,
                                            I felt like it was a course just for me. We will definitely see you soon!
                                        </p>
                                    </div>
                                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="far fa-star fa-sm"></i></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#welcomeCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#welcomeCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </main>
            {footer}

        </div >
    );
}

export default Testimonial;