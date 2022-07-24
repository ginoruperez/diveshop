import React from 'react';
import dolphinico from './images/dolphin.ico';
import { footer } from './Footer';

function Order() {

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
                                    <a className="nav-link active" href="/Products">Shop</a>
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
                    <div className="nav-item dropdown" style={{ "width": "170px", "height" : "20px"}} >
                    
                        <div className="profile-pic dropdown-toggle" data-bs-toggle="dropdown"
                        > 
                        <i className="fa fa-user" aria-hidden="true"></i>
                        </div>
                        

                        <ul className="dropdown-menu"  aria-labelledby="nav-dropdown">
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

                <div className="container">

                    <div className="p-2 text-center">
                        <h1 className="display-4">Your details</h1>
                    </div>
                    <div className="row g-5 my-5">
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <h4 className="mb-3">Redeem coupon</h4>
                            <form className="card p-2">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Promo code" />
                                    <button type="submit" className="btn btn-secondary">Redeem</button>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-7 col-lg-8">
                            <h4 className="mb-3">Your address</h4>
                            <form className="needs-validation" action="/" method="get"  >
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label htmlFor="firstName" className="form-label">First name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="" required/>
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label htmlFor="lastName" className="form-label">Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder=""  required />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="email" className="form-label">Email <span
                                            className="text-muted">(Optional)</span></label>
                                        <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                                        <div className="invalid-feedback">
                                            Please enter a valid email address htmlFor shipping updates.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                                            required />
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="address2" className="form-label">Address 2 <span
                                            className="text-muted">(Optional)</span></label>
                                        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                    </div>

                                    <div className="col-md-5">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="country" className="form-label">Country</label>
                                                <select className="form-select" id="country" required>
                                                    <option value="">Choose...</option>
                                                    <option>Ireland</option>
                                                    <option>Italy</option>
                                                    <option>Spain</option>
                                                    <option>Philippines</option>
                                                    <option>Poland</option>
                                                    <option>Belgium</option>
                                                    <option>France</option>
                                                    <option>Germany</option>
                                                    <option>United Kingdom</option>
                                                    <option>United States</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    Please select a valid country.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="state" className="form-label">City</label>
                                        <select className="form-select" id="state" required>
                                            <option value="">Choose...</option>
                                            <option>Not applicable</option>
                                            <option>Dublin</option>
                                            <option>Cork</option>
                                            <option>London</option>
                                            <option>Manila</option>
                                            <option>Belfast</option>
                                            <option>Rome</option>
                                            <option>Paris</option>
                                            <option>Barcelona</option>
                                            <option>New York</option>
                                            <option>Brussels</option>
                                            <option>Washington</option>
                                            <option>Chicago</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label htmlFor="zip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="zip" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>

                                <hr className="my-4" />

                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="same-address" />
                                    <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my
                                        billing
                                        address</label>
                                </div>

                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="save-info" />
                                    <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                                </div>

                                <hr className="my-4" />

                                <h4 className="mb-3">Payment</h4>

                                <div className="my-3">
                                    <div className="form-check">
                                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked
                                            required />
                                        <label className="form-check-label" htmlFor="credit">Credit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                                        <label className="form-check-label" htmlFor="debit">Debit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                                        <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                    </div>
                                </div>

                                <div className="row gy-3">
                                    <div className="form-floating col-md-6">
                                        <input type="text" className="form-control" id="cc-name" placeholder="Jane Doe" required />
                                        <label htmlFor="cc-name">Name on card</label>
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>

                                    <div className="form-floating col-md-6">
                                        <input type="text" className="form-control" id="cc-number" placeholder="xxx-xxxxx-xx"
                                            required />
                                        <label htmlFor="cc-number">Credit card number</label>
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>

                                    <div className="form-floating col-md-3">
                                        <input type="text" className="form-control" id="cc-expiration" placeholder="12/23" required />
                                        <label htmlFor="cc-expiration">Expiration</label>
                                        <div className="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>

                                    <div className="form-floating col-md-3">
                                        <input type="text" className="form-control" id="cc-cvv" placeholder="123" required />
                                        <label htmlFor="cc-cvv">CVV</label>
                                        <div className="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div>

                                <hr className="my-4" />

                                <button className="w-100 btn btn-secondary btn-lg" type="submit">Place order</button>
                            </form>
                        </div>
                    </div>
                </div>

            </main>
            {footer}
        </div >
    );
}

export default Order;