import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import About from './pages/About';
import SignUp from './pages/SignUp';
import ContactUs from './pages/ContactUs';
import LandingPage from './pages/LandingPage';
import Services from './pages/Services';
import LogIn from './pages/LogIn';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Footer></Footer>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/Home" element={<LandingPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Services />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogIn" element={<LogIn />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
