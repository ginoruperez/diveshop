import dolphin3 from './images/dolphin3.png';

export const footer =
    <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
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
                            <a type="button" className="btn btn-floating btn-primary btn-lg" target="_blank" rel='noreferrer' href="https://www.facebook.com/Celtic-Sea-Dive-Shop-100920469106278"><i className="fab fa-facebook-f"></i></a>
                            <a type="button" className="btn btn-floating btn-primary btn-lg" target="_blank" rel='noreferrer' href="https://www.instagram.com/celticdive/"><i className="fab fa-instagram"></i></a>
                            <a type="button" className="btn btn-floating btn-primary btn-lg" target="_blank" rel='noreferrer' href="https://twitter.com/CelticDive"><i className="fab fa-twitter"></i></a>
                            <a type="button" className="btn btn-floating btn-primary btn-lg" target="_blank" rel='noreferrer' href="https://www.youtube.com/watch?v=wijB506FJTc"><i className="fab fa-youtube"></i></a>
                        </div>


                        <ul className="fa-ul" >
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-1">Unit 1 Blackrock Road Kinsale Ireland</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-1">
                                    <a href="mailto:info@celticdiveshop.ie">info@celticdiveshop.com </a> </span>
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

    </div>
