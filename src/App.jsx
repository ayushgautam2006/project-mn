import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Sponsorship from './pages/Sponsorship';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import Footer from './components/Footer'
import Register from './pages/Register'

const AppContent = () => {
  const location = useLocation();
  
  const shouldShowHeader = location.pathname !== '/register';

  return (
    <div>

      {shouldShowHeader && <Header/>}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsors" element={<Sponsorship />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      

      {shouldShowHeader && <Footer/>}
    </div>
  )
}

const App = () => <AppContent />;

export default App;
