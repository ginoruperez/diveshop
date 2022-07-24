import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import Basket from './Basket';
import Header from './Header';
import dolphinico from './images/dolphin.ico';
import { footer } from './Footer';

export default function Products({ isAdmin }) {


  const productAdmin = isAdmin && "with product admin enabled";

  // use State to monitor the products data
  const [products, setProducts] = useState(null);


  // use effect to get the data from the server api  
  // Make a state for pending loading data 
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })

  }

  )
  // set a state for prgress bar
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);



  const [showDeleteMsg, setShowDeleteMsg] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);

  const handleDelete = async (id) => {

    if (!isAdmin) {
      window.alert('Not allowed! Login Required')
    } else {


      setShowDeleteMsg(true);
      if (deleteItem && !showDeleteMsg) {
        console.log("handleDelete()", "deleteItem " + deleteItem, "showDeleteMsg " + showDeleteMsg);

        await fetch('http://localhost:8000/products/' + id, {
          method: 'DELETE'
        }).then(() => {
          const newProducts = products.filter(product => product.id !== id);
          setProducts(newProducts);
          console.log("New prod" + newProducts);

        })

      }

    }

  }

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };



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
      <div className="container-fluid jumbotron jumbotron-shop py-5">
        <div className="container">
          <h1 className="display-3 fw-bold text-white">Dive Shop</h1>
        </div>
      </div>

      <div className="container">

        <nav className="my-3 ms-3" >
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item">Shop</li>
          </ol>
        </nav>

        <div className="row" >
          <div className="col-6 col-lg-12">
            <h1 className="my-3">Product Page
              <small className="fw-normal fst-italic"> {productAdmin} </small>
            </h1>
          </div>
        </div>

        <div className="progress" style={{ "height": "5px" }}>
          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ "width": String(progress) + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div color="error" align="center" sx={{ mt: 4 }}>
          {isLoading && "Data is Loading ..."}
        </div>


        <Header countCartItems={cartItems.length}></Header>
        <div className="row">

          <div className="col-sm">
            {products &&
              products.map(product => (

                <div className="card-product" >
                  <ProductCard key={product.id} product={product} onAdd={onAdd} handleDelete={handleDelete} isAdmin={isAdmin} ></ProductCard>
                </div>

              ))
            }

          </div>
        </div>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}>
        </Basket>

        <Dialog
          open={showDeleteMsg}>
          <DialogTitle >{"Delete product"}</DialogTitle>
          <DialogContent>
            <DialogContentText>{"Are you sure you want to delete this product"}</DialogContentText>
            <DialogActions>
              <Button onClick={() => { setDeleteItem(false); setShowDeleteMsg(false); console.log("deleteItem " + deleteItem, "showDeleteMsg " + showDeleteMsg); }} autoFocus>Disagree</Button>
              <Button onClick={() => { setDeleteItem(true); setShowDeleteMsg(false); console.log("deleteItem " + deleteItem, "showDeleteMsg " + showDeleteMsg); }} >
                Agree
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
      <br></br>
      {footer}


    </div>
  )
}
