import React, { useState } from 'react'
import dolphinico from './images/dolphin.ico';
import { useNavigate } from 'react-router-dom';
import { footer } from './Footer';

export default function SignUp() {

    const navigateTo = useNavigate();

    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatpassword] = useState('');

    const handleSubmit = (event) => {
        if (`${password}` !== `${repeatPassword}`) {
            window.alert(`Password mismatched!`)
        } else {
            window.alert(`Form Submitted! Thank you for registration!`)
            navigateTo('/');

        }
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
                                    <a className="nav-link" href="/AboutUs">About Us</a>
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
                    <div className="nav-item dropdown active" style={{ "width": "170px", "height": "20px" }} >

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
                <div className="container-fluid jumbotron jumbotron-team py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">Register here</h1>
                    </div>
                </div>
                <div className="container py-5 h-100">
                    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                    <div className="card" style={{ "borderRadius": "15px" }}>
                                        <div className="card-body p-5">
                                            <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                            <form name="register" onSubmit={handleSubmit}>

                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form3Example1cg" className="form-control form-control-lg" required />
                                                    <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form3Example3cg" className="form-control form-control-lg" required/>
                                                    <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" name="password" className="form-control form-control-lg"
                                                        onChange={(e) => setPassword(e.target.value)} />
                                                    <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="repeatpassword" className="form-control form-control-lg"
                                                        onChange={(e) => setRepeatpassword(e.target.value)} />
                                                    <label className="form-label" htmlFor="form3Example5cdg">Repeat your password</label>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                    <label className="form-check-label" htmlFor="form2Example3g">
                                                        I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center">
                                                    <button type="submit"
                                                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                    >Register</button>
                                                </div>

                                                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/SignInLink"
                                                    className="fw-bold text-body"><u>Login here</u></a></p>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {footer}
        </div>

    )
}
