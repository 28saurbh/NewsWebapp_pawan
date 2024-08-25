// src/routes/index.js
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../component/Home'; // Adjust the path if needed
import NewsDetails from '../component/NewsDetails';

function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route path="/news/" element={<NewsDetails />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;
