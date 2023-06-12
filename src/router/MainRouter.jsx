import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from "../components/NavBar";

import Home from "../pages/Home";
import Category from "../pages/Category";
import Item from '../pages/Item';


const MainRouter = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route exact path="*" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/Item/:itemId" element={<Item />} />
        </Routes>
    </Router>
  )
}

export default MainRouter