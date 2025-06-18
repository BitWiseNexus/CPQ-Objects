import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Pricebook from './pages/Pricebook';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Routes>
          <Route path="/" element={<Navigate to="/pricebooks" />} />
          <Route path="/pricebooks" element={<Pricebook />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
