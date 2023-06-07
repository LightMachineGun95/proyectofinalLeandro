import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from '../pages/ProductDetail';
import Nosotros from '../pages/QuienesSomos';

const MainRouter = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route exact path="*" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/nosotros" element={<Nosotros />} />
            <Route exact path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
    </Router>
  )
}

export default MainRouter