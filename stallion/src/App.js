import "./App.css";
import React from "react";
import { ToastContainer } from 'react-toastify';
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "./components/navbar";
import { Spinner } from "flowbite-react";

const Home = React.lazy(() => import("./components/home"));
const Service = React.lazy(() => import("./components/service"));
const Skills = React.lazy(() => import("./components/skills"));
const About = React.lazy(() => import("./components/about"));
const Contact = React.lazy(() => import("./components/contact"));
const Canada = React.lazy(() => import("./components/canada"));
const Othercount = React.lazy(() => import("./components/othercount"));
const Tnc = React.lazy(() => import("./components/tnc"));
const Privacy = React.lazy(() => import("./components/privacy"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ToastContainer />
      <ScrollToTop />
      <Header />
      <React.Suspense fallback={<div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>}>
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
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
