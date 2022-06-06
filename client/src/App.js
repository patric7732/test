import React from "react";
import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import AddPage from './components/views/AddPage/AddPage'

function App() {
  return (
    
    <Router>

      <div>
        <Routes>
          
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
