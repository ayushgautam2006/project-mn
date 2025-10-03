import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Sponsorship from './pages/Sponsorship';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsors" element={<Sponsorship />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
