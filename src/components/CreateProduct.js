import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Rating, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import dolphinico from './images/dolphin.ico';
import { footer } from './Footer';


export default function CreateProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('snorkel');
    const [rating, setRating] = useState(0);
    const [price, setPrice] = useState(0);
    const [filename, setFilename] = useState('');
    const navigateTo = useNavigate();


    const handleProductCreation = (e) => {
        e.preventDefault();
        if (title && description && type && price) {
            console.log({ title, type, description, rating, price, filename });

            
            const priceTotal = parseFloat(price, 10)

            fetch('http://localhost:8000/products', {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ title, type, description, rating, price: priceTotal, filename })

            }).then(() => navigateTo('/Products'))
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
                    <div className="nav-item dropdown" style={{ "width": "170px", "height": "20px" }} >

                        <div className="profile-pic dropdown-toggle" data-bs-toggle="dropdown" >
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

                <div className="container py-5 h-100">

                    <nav className="my-3 ms-3" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/Products">Shop</a></li>
                            <li className="breadcrumb-item">Create Product</li>
                        </ol>
                    </nav>

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
                            value={price}
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
                                defaultValue='Dive Suit'
                                value={type}
                                onChange={(e) => setType(e.target.value)}
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

            {footer}

        </div>
    )
}
