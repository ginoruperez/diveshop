import React from 'react';
import dolphinico from './images/dolphin.ico';
import { footer } from './Footer';


function Contact() {

    const handleSubmit = (event) => {
        window.alert(`Message delivered Successfully! Thank you.`)
    }

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

                <div className="container-fluid jumbotron jumbotron-contact py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">Contact Us</h1>
                    </div>
                </div>

                <div className="container">

                    <nav className="my-3 ms-3" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item">Contact</li>
                        </ol>
                    </nav>

                    <h1 className="fw-bolder">Contact Us
                        <small className="fw-normal fst-italic"> Send us an email, we'd love to hear from you.</small>
                    </h1>


                    <form className="needs-validation" action="/" onSubmit={handleSubmit} method="get" >


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
                                    <input type="email" className="form-control" placeholder="Your Email *" aria-label="email" required />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Your Phone Number *"
                                        aria-label="phone" required />
                                </div>
                                <div className="mb-2">
                                    <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
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

                    <div className="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d33251.37800359915!2d-8.52782481229902!3d51.725289697707915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe1763db1d99ded19!2sSouth%20West%20Technical%20Diving!5e0!3m2!1sen!2sie!4v1657224321670!5m2!1sen!2sie" width="600" height="450"
                            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="location"></iframe>
                    </div>
                </div>

            </main>
            {footer}

        </div >
    );
}

export default Contact;