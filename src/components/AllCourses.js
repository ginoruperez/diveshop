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
import fundive  from './images/products/fundive.jpg';
import { footer } from './Footer'


function AllCourses() {

    const discoverScubaInfo = <p className="lead">The PADI Discover Scuba Diving (DSD) is a short try-diving experience for adults and children aged 10+.
        This course introduces you to the basics of scuba diving without certifying you as a diver.
        The DSD program is a single-day activity, so is ideal for those interested in trying scuba, but lacking spare time.</p>
    const mermaidInfo = <p className="lead">The PADI Mermaid™ course includes knowledge development and at least two water skill sessions that develop more
        dynamic mermaid skills beyond Basic Mermaid™, including many skills that make mermaiding an underwater self-expressive art,
        separate from other types of diving. (Note that the PADI Mermaid course includes Basic Mermaid, so you can start with PADI Mermaid –
        there is no need to take Basic Mermaid separately.) To enroll in a PADI Mermaid course, you must be at least ten years old.
        You need to be able to swim at least 50m/160ft without swim aids, able to float comfortably at the surface for at least 5 mins and in good physical health.
        As an entry-level mermaid diving course, no prior experience with diving of any kind is required.</p>
    const funDiveInfo = <p className="lead">Fun dives are intended for those scuba divers who already have their PADI Open Water Diver Certification,
        are at least 12 years old, have adequate swimming skills, and are in good physical health. </p>

    const snorkelInfo = <p className="lead"> Snorkelling is an activity in which a person swims using a mask, snorkel and swimming aids such as fins, but without
        using self-contained underwater breathing apparatus (SCUBA). Snorkelling includes both snorkel swimming and snorkel diving.
        Snorkel swimming is snorkelling on the surface of the water.</p>

    const boatDiveInfo = <p className="lead"> If you’re new to boat diving or want to learn more about diving from different types of boats, enroll in the PADI® Boat Diver course.
        During two dives with an instructor you’ll learn nautical terminology, boat diving etiquette and may practice using lines and/or deploy a surface marker buoy (SMB).</p>

    
    const underwaterPhotoInfo = <p className="lead">During the PADI® Digital Underwater Photographer course, you’ll learn how to take underwater photos you’ll be proud to share with others.
        Avoid beginner mistakes and shorten the learning curve with tips from the pros. Learn how to use underwater photography lights (strobes), avoid backscatter and enhance color.</p>

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
                <div className="container-fluid jumbotron jumbotron-detail-allcourses py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">All Dive Courses</h1>
                    </div>
                </div>

                <div className="container py-2 h-100" >

                    <nav className="my-3 ms-3" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/">Courses</a></li>
                            <li className="breadcrumb-item">All Dive Courses</li>
                        </ol>
                    </nav>

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
                                                <img className="card-img-top" alt="dolphin" src={dolphin} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Diving with Dolphin</h5>
                                                    <p className="card-text">€350.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href="/DolphinEncounter" className="btn btn-primary">View details</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="discover scuba" src={discoverscuba} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Discover Scuba</h5>
                                                    <p className="card-text">€200.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    {/* <a href="/AllCourses" className="btn btn-primary">View details</a> */}
                                                    <a className="btn btn-sm btn-primary mt-2" data-bs-toggle="collapse"
                                                        data-bs-target="#subscriptionInformation" role="button" aria-expanded="false"
                                                        aria-controls="subscriptionInformation" href='/'>More information</a>
                                                    <div className="collapse" id="subscriptionInformation">
                                                        {discoverScubaInfo}
                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="snorkel" src={fundive} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Fun Dive for Kids and Adult</h5>
                                                    <p className="card-text">€80.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a className="btn btn-sm btn-primary mt-2" data-bs-toggle="collapse"
                                                        data-bs-target="#subscriptionInformation2" role="button" aria-expanded="false"
                                                        aria-controls="subscriptionInformation" href='/'>More information</a>
                                                    <div className="collapse" id="subscriptionInformation2">
                                                        {funDiveInfo}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card rounded mb-4 shadow-sm">
                                                <img className="card-img-top" alt="open water" src={openwater} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Open Water Dive</h5>
                                                    <p className="card-text">€200.00</p>
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
                                                    <p className="card-text">€250.00</p>
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
                                                    <p className="card-text">€250.00</p>
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
                                                <img className="card-img-top" alt="snorkeling" src={snorkel} />
                                                <div className="card-body">
                                                    <h5 className="card-title">Snorkelling</h5>
                                                    <p className="card-text">€50.00</p>
                                                </div>
                                                <div className="card-footer">
                                                    <a className="btn btn-sm btn-primary mt-2" data-bs-toggle="collapse"
                                                        data-bs-target="#subscriptionInformationSnorkel" role="button" aria-expanded="false"
                                                        aria-controls="subscriptionInformation" href='/'>More information</a>
                                                    <div className="collapse" id="subscriptionInformationSnorkel">
                                                        {snorkelInfo}
                                                    </div>
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
                                                    <a className="btn btn-sm btn-primary mt-2" data-bs-toggle="collapse"
                                                        data-bs-target="#subscriptionInformationMermaid" role="button" aria-expanded="false"
                                                        aria-controls="subscriptionInformation" href='/'>More information</a>
                                                    <div className="collapse" id="subscriptionInformationMermaid">
                                                        {mermaidInfo}
                                                    </div>
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
                                                    <a className="btn btn-sm btn-primary mt-2" data-bs-toggle="collapse"
                                                        data-bs-target="#subscriptionInformationPhoto" role="button" aria-expanded="false"
                                                        aria-controls="subscriptionInformation" href='/'>More information</a>
                                                    <div className="collapse" id="subscriptionInformationPhoto">
                                                        {underwaterPhotoInfo}
                                                    </div>
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
                                                    <a className="btn btn-sm btn-primary mt-2" data-bs-toggle="collapse"
                                                        data-bs-target="#subscriptionInformationBoatDive" role="button" aria-expanded="false"
                                                        aria-controls="subscriptionInformation" href='/'>More information</a>
                                                    <div className="collapse" id="subscriptionInformationBoatDive">
                                                        {boatDiveInfo}
                                                    </div>
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
            {footer}
        </div >
    );
}

export default AllCourses;