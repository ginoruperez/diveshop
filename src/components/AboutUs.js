import React from 'react';
import dolphinico from './images/dolphin.ico';
import aboutdiveteam from './images/products/about-diveteam.jpg';
import divergino from './images/diver-gino1.jpg';
import diverjohn from './images/diver-john.jpg';
import diverfiona from './images/diver-fiona.jpg';
import { footer } from './Footer';



function AboutUs() {

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
                                    <a className="nav-link" href="/Products">Shop</a>
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
                <div className="container-fluid jumbotron jumbotron-team py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">About Us</h1>
                    </div>
                </div>

                <div className="container">

                    <nav className="my-3 ms-3" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item">About Us</li>
                        </ol>
                    </nav>

                    <h1 className="fw-bolder"> Our Team
                        <small className="fw-normal fst-italic"> A Brief Story of Us!</small>
                    </h1>

                    <div className="row ">

                        <div className="col-6 col-lg-8">

                            <img src={aboutdiveteam} className="img-fluid rounded-1" alt="test" />

                        </div>

                        <div className="col-6 col-lg-12">
                            <h3 className="my-3">About Us!</h3>

                            <div className="user-select-none">
                                <section>
                                    Gino Ruperez is the owner of Celtic Sea Dive Shop located in Kinsale, Southwest coast of Ireland
                                    near Celtic Sea. It has been in operation for over 10 years in Ireland. The idea of forming a Dive Shop
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
                            </div>
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
                                    <img className="card-img-top" src={diverjohn} alt="diver" />
                                    <div className="card-body">
                                        <h5 className="card-title">David John Walker</h5>
                                        <div className="card-text"><strong> <em>Certified PADI Instructor</em> </strong> He is qualified to teach a wide range of
                                            diving courses:
                                            <ul>
                                                <li>Open Water Dive</li>
                                                <li>Advanced Open Water Dive</li>
                                                <li>Search and Rescue Dive</li>
                                                <li>Drysuit Course</li>
                                                <li>Navigation</li>
                                                <li>Underwater Video and Photography</li>
                                                <li>Deep Technical Diving</li>
                                            </ul></div>
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
                                    <img className="card-img-top" src={diverfiona} alt="diver" />
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

            {footer}

        </div >
    );
}

export default AboutUs;