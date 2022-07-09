import React from 'react';
import dolphinico from './images/dolphin.ico';
import dolphin3 from './images/dolphin3.png';


function Order() {

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
                            </ul>
                        </div>
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
                            <form className="needs-validation" action="/" method="get" novalidate >
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label for="firstName" className="form-label">First name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder=""   />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label for="lastName" className="form-label">Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder=""   />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="email" className="form-label">Email <span
                                            className="text-muted">(Optional)</span></label>
                                        <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                        <div className="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="address" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                                            required />
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="address2" className="form-label">Address 2 <span
                                            className="text-muted">(Optional)</span></label>
                                        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                    </div>

                                    <div className="col-md-5">
                                        <div className="row">
                                            <div className="col">
                                                <label for="country" className="form-label">Country</label>
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
                                        <label for="state" className="form-label">City</label>
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
                                        <label for="zip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="zip" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>

                                <hr className="my-4" />

                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="same-address" />
                                    <label className="form-check-label" for="same-address">Shipping address is the same as my
                                        billing
                                        address</label>
                                </div>

                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="save-info" />
                                    <label className="form-check-label" for="save-info">Save this information for next time</label>
                                </div>

                                <hr className="my-4" />

                                <h4 className="mb-3">Payment</h4>

                                <div className="my-3">
                                    <div className="form-check">
                                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked
                                            required />
                                        <label className="form-check-label" for="credit">Credit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                                        <label className="form-check-label" for="debit">Debit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                                        <label className="form-check-label" for="paypal">PayPal</label>
                                    </div>
                                </div>

                                <div className="row gy-3">
                                    <div className="form-floating col-md-6">
                                        <input type="text" className="form-control" id="cc-name" placeholder="Jane Doe" required />
                                        <label for="cc-name">Name on card</label>
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>

                                    <div className="form-floating col-md-6">
                                        <input type="text" className="form-control" id="cc-number" placeholder="xxx-xxxxx-xx"
                                            required />
                                        <label for="cc-number">Credit card number</label>
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>

                                    <div className="form-floating col-md-3">
                                        <input type="text" className="form-control" id="cc-expiration" placeholder="12/23" required />
                                        <label for="cc-expiration">Expiration</label>
                                        <div className="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>

                                    <div className="form-floating col-md-3">
                                        <input type="text" className="form-control" id="cc-cvv" placeholder="123" required />
                                        <label for="cc-cvv">CVV</label>
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

export default Order;