import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import EmployeePage from './pages/EmployeePage'; // Import EmployeePage



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/employee" element={<EmployeePage />} /> {/* Add route for EmployeePage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;