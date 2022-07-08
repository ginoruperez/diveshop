import dolphinico from './images/dolphin.ico';
import dolphinsmall from './images/products/dolphin-small.jpg';
import servicesadvancedopen from './images/products/services-advancedopen-small.jpg';
import servicesopensmall from './images/products/services-discoverscuba.jpg';
import dolphin3 from './images/dolphin3.png';


function Main() {

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
                                    <a className="nav-link active" href="/">Home</a>
                                </li>
                                <li className="nav-item dropdown">

                                    <a className="nav-link dropdown-toggle" href="/" id="nav-dropdown" data-bs-toggle="dropdown"
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
                                    <a className="nav-link" href="/Contact">Contact</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>

            </header>

            <main className="container" role="main">
                <div id="welcomeCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Welcome 1"></button>
                        <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="1"
                            aria-label="Welcome 2"></button>
                        <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="2"
                            aria-label="Welcome 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item welcome-carousel-image1 active">
                            <div className="carousel-caption">
                                <h1>Welcome to Celtic Dive Shop</h1>
                                <p>The best place for Underwater adventure.</p>
                            </div>
                        </div>
                        <div className="carousel-item welcome-carousel-image2">
                            <div className="carousel-caption text-start">
                                <h1>High Quality Scuba Diving Products</h1>
                                <p>Shop with our wide range of High Quality Products</p>
                                <p><a className="btn btn-lg btn-primary" href="/Products" role="button">Dive Shop</a></p>
                            </div>
                        </div>
                        <div className="carousel-item welcome-carousel-image3">
                            <div className="carousel-caption text-end">
                                <h1>Browse all Dive Adventure.</h1>
                                <p>Every season has its special activities. Enjoy our summer fun dive activities.</p>
                                <p><a className="btn btn-lg btn-primary" href="/OpenWater" role="button">Open Water</a></p>
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
                <nav aria-label="breadcrumb" className="my-3 ms-3">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                </nav>
                <div className="container history">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="pb-4 mb-4 fst-italic">
                                Our Company
                            </h2>
                            <section>
                                Our Dive Shop is located in Kinsale, Southwest coast of Ireland near Celtic Sea. We stock a wide range of 
                                Scubapro, Mares, Apeks and Aqualung dive equipment.  
                                
                                For convenience, customers may also order from our on line shop.
                                We are PADI accredited servicing and our test centre is also located within our shop

                                With exclusive deals in Malta and Gozo and other fantastic dive locations around Ireland, 
                                we guarantee you the best diving all around.  
                                
                                With over 10 years of experience, we guarantee the highest standards of quality in 
                                terms of teaching, safety, and services.

                                All our equipment is renewed every 2 years, to guarantee your comfort and safety. 
                                So start your PADI Adventure with us today, get diving and change your life. 
                                Our team is here to assist you to step by step.
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
                                Since 2017, Celtic Sea Dive shop is one of the premier dive shops in the country and it is a
                                proud <strong><em>5 star PADI facility</em></strong> as well as sales and repairs.
                            </section>
                            <br />
                        </div>

                        <aside className="col-lg-4">
                            <div className="p-4 mb-3 mt-2 bg-light rounded">
                                <h4>Thank You for Joining Us !</h4>
                                <p className="mb-0 fst-italic">We are a proud 5 star PADI facility incorporating our own Dive Shop
                                    and Servicing
                                    Centre, we thrive on quality service, safety and of course a lot of fun!</p>
                            </div>

                        </aside>
                    </div>
                </div>




                <div className="container history">
                    <h2 className="pb-4 mb-2 mt-5">Exciting Dive Adventure for the Season!</h2>
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
                        <div className="col">
                            <div className="card rounded mb-4 shadow-sm">
                                <img className="card-img-top" src={dolphinsmall} alt="dolphinsmall" />
                                <div className="card-body">
                                    <h5 className="card-title">Diving with Dolphin</h5>
                                    <p className="card-text">Feels Great to swim with our Dolphin!</p>
                                </div>
                                <div className="card-footer">
                                    <a href="/AllCourses" className="btn btn-primary">View details</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card rounded mb-4 shadow-sm">
                                <img className="card-img-top" src={servicesopensmall} alt="services open water" />
                                <div className="card-body">
                                    <h5 className="card-title">Open Water Diving</h5>
                                    <p className="card-text">My God, this is awesome!</p>
                                </div>
                                <div className="card-footer">
                                    <a href="/OpenWater" className="btn btn-primary">View details</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card rounded mb-4 shadow-sm">
                                <img className="card-img-top" src={servicesadvancedopen} alt="services advanced open water" />
                                <div className="card-body">
                                    <h5 className="card-title">Advanced Open Water</h5>
                                    <p className="card-text">It was so fun!</p>
                                </div>
                                <div className="card-footer">
                                    <a href="/AdvOpenWater" className="btn btn-primary">View details</a>
                                </div>
                            </div>
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

        </div>
    );
}

export default Main;