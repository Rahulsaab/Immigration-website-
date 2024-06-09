import "./App.css";
import { ToastContainer } from 'react-toastify';
import Home from "./components/home";
import Service from "./components/service";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/navbar";
import Canada from "./components/canada";
import Othercount from "./components/othercount";
import Tnc from "./components/tnc";
import Privacy from "./components/privacy";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/service" element={<Service />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/othercount" element={<Othercount />} />
        <Route path="/tnc" element={<Tnc />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
