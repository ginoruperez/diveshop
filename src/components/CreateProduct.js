import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Rating, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import dolphinico from './images/dolphin.ico';
import dolphin3 from './images/dolphin3.png';


export default function CreateProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('coffee');
    const [rating, setRating] = useState(0);
    const [price, setPrice] = useState(0);
    const [filename, setFilename] = useState('');
    const navigateTo = useNavigate();


    const handleProductCreation = (e) => {
        e.preventDefault();
        if (title && description && category && price) {
            console.log({ title, description, category, rating, price, filename });
            fetch('http://localhost:8000/products', {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ title, description, category, rating, price, filename })

            }).then(() => navigateTo('/Products'))
        }
    }
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
                                <li className="nav-item dropdown">

                                    <a className="nav-link dropdown-toggle" href="/" id="nav-dropdown" data-bs-toggle="dropdown"
                                        aria-expanded="false" >
                                        Extras
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="nav-dropdown">
                                        <li><a className="dropdown-item" href="/Testimonial">Testimonial</a></li>
                                        <li><a className="dropdown-item" href="/Faq">FAQ</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>

            <main role="main">

                <div className="container py-5 h-100">

                    <h1> Add new Product</h1>
                    <form noValidate onSubmit={handleProductCreation}>
                        <TextField
                            label='Product Name'
                            onChange={(e) => setTitle(e.target.value)}
                            fullWidth
                            required
                            autoFocus
                            variant='outlined'
                            color="info" 
                            margin="dense">

                        </TextField>

                        <TextField
                            label='Product Description'
                            onChange={(e) => setDescription(e.target.value)}
                            required

                            fullWidth
                            variant='outlined'
                            color='info'
                            multiline
                            rows={6}
                            margin="dense">

                        </TextField>

                        <TextField
                            label='Price'
                            type='number'
                            onChange={(e) => setPrice(e.target.value)}
                            required

                            fullWidth
                            variant='outlined'
                            color='info'
                            margin="dense"
                        >

                        </TextField>
                        <TextField
                            label='Image URL Address'
                            onChange={(e) => setFilename(e.target.value)}

                            fullWidth
                            variant='outlined'

                            color='info'
                            margin="dense">

                        </TextField>

                        <FormLabel> Select the product category</FormLabel>

                        <FormControl fullWidth>
                            <RadioGroup
                                defaultValue='coffee'
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <FormControlLabel control={<Radio />} label='Dive Suit' value='dive suit' />
                                <FormControlLabel control={<Radio />} label='Regulator and BCD' value='dive equipment' />
                                <FormControlLabel control={<Radio />} label='Scuba Tank' value='scuba tank' />
                                <FormControlLabel control={<Radio />} label='Fins and Goggles' value='fins goggles' />
                                <FormControlLabel control={<Radio />} label='Others' value='others' />


                            </RadioGroup>


                        </FormControl >
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange=
                            {(event, rating) => {
                                setRating(rating);
                            }}
                        />

                        <Button type='submit' fullWidth variant='outlined' >Submit</Button>
                        <Button type='reset' fullWidth variant='outlined'>Reset</Button>
                    </form>

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
                                <a type="button" className="btn btn-floating btn-primary btn-lg" href="https://www.facebook.com/Celtic-Sea-Dive-Shop-100920469106278"><i className="fab fa-facebook-f"></i></a>
                                <a type="button" className="btn btn-floating btn-primary btn-lg" href="https://www.instagram.com/celticdive/"><i className="fab fa-instagram"></i></a>
                                <a type="button" className="btn btn-floating btn-primary btn-lg" href="https://twitter.com/CelticDive"><i className="fab fa-twitter"></i></a>
                                <a type="button" className="btn btn-floating btn-primary btn-lg" href="https://www.youtube.com/watch?v=wijB506FJTc"><i className="fab fa-youtube"></i></a>
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
    )
}
