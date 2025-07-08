import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Pricebook from './pages/Pricebook';
import QLI from './pages/QLI';
import ProductRule from './pages/Productrule';
import PriceRule from './pages/PriceRule'
import Product from './pages/product'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Routes>
          <Route path="/" element={<Navigate to="/pricebooks" />} />
          <Route path="/pricebooks" element={<Pricebook />} />
          <Route path="/qlis" element={<QLI />} />
          <Route path="/product-rules" element={<ProductRule />} />
          <Route path="/price-rules" element={<PriceRule />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
