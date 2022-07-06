import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import OpenWater from './components/OpenWater';
import AdvOpenWater from './components/AdvOpenWater';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Rescue from './components/Rescue';
import AllCourses from './components/AllCourses';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />} />

      <Route path="OpenWater" element={<OpenWater />} />
      <Route path="AdvOpenWater" element={<AdvOpenWater />} />
      <Route path="Rescue" element={<Rescue />} />
      <Route path="AllCourses" element={<AllCourses />} />
      <Route path="Products" element={<Products />} />
      <Route path="AboutUs" element={<AboutUs />} />
      <Route path="Contact" element={<Contact />} />


    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
