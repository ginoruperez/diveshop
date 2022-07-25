import React from 'react';
import dolphinico from './images/dolphin.ico';
import mermaid from './images/products/mermaid-small.jpg';
import photography from './images/products/dive-photography.jpg';
import boatdiver from './images/products/boatdiver.jpg';
import { footer } from './Footer';
import fundive  from './images/products/fundive.jpg';
import dolphin1 from './images/products/dolphin1.jpg';
import dolphin2 from './images/products/dolphin2.jpg';
import dolphin3 from './images/products/dolphin3.jpg';
import dolphin4 from './images/products/dolphin4.jpg';
import dolphin5 from './images/products/dolphin5.jpg';
import dolphin6 from './images/products/dolphin6.jpg';


function DolphinEncounter() {

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
                <div className="container-fluid jumbotron jumbotron-detail-dolphin py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">Dive with Dolphin</h1>
                    </div>
                </div>

                <div className="container">
                    <nav className="my-3 ms-3" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/">Courses</a></li>
                            <li className="breadcrumb-item">Dive with Dolphin</li>
                        </ol>
                    </nav>

                    <h1 className="fw-bolder">Dive with Dolphin
                        <small className="fw-normal fst-italic"> An awesome encounter with Dolphin!</small>
                    </h1>

                    <div className="row">

                        <div className="col-2 col-lg-8 dolphin-container">

                            <div id="welcomeCarousel" className="carousel slide carousel-dark" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="0" className="active"
                                        aria-current="true" aria-label="Welcome 1"></button>
                                    <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="1"
                                        aria-label="Welcome 2"></button>
                                    <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="2"
                                        aria-label="Welcome 3"></button>
                                    <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="3"
                                        aria-label="Welcome 4"></button>
                                    <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="4"
                                        aria-label="Welcome 5"></button>
                                    <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="5"
                                        aria-label="Welcome 6"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item  active">
                                        <div className="carousel-caption">
                                            <img className="rounded mx-auto d-block"
                                                src={dolphin1} alt="avatar" />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="carousel-caption">
                                            <img className="rounded mx-auto d-block"
                                                src={dolphin2} alt="avatar" />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="carousel-caption">
                                            <img className="rounded mx-auto d-block"
                                                src={dolphin3} alt="avatar" />

                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="carousel-caption">
                                            <img className="rounded mx-auto d-block"
                                                src={dolphin4} alt="avatar" />

                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="carousel-caption">
                                            <img className="rounded mx-auto d-block"
                                                src={dolphin5} alt="avatar" />

                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="carousel-caption">
                                            <img className="rounded mx-auto d-block"
                                                src={dolphin6} alt="avatar" />

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

                        </div>



                        <div className="col-6 col-lg-4">
                            <h3 className="my-3 text-center">About Diving with Dolphin</h3>
                            <p className="lead text-center">Join the exciting encounter with Dolphin</p>
                            <p className="user-select-none">Enjoy our deep-water programme where you will get a chance to swim and interact 
                            with our resident dolphins. Be a part of their energetic daily physical routine with our specialist team
                            </p>
                            <h4>This requires at least an open water level skills</h4>
                            
                            <p className="user-select-none">All equipment will be provided for
                                the duration of this activity</p>

                            <div className="row">

                                <div className="col-md-4">
                                    <strong>€ 350.00</strong>
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
                        <h4>A quote about Friendship...</h4>
                        <p className="mb-0 fst-italic"> Dolphins are social mammals, capable of enjoying their lives. They form close bonds with other members of their group.
                        Peter Singer
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

export default DolphinEncounter;