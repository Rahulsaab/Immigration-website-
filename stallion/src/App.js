import "./App.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/navbar";
import { Spinner } from "flowbite-react";
import ScrollTop from "./components/scrolltop";
import WhatsAppButton from "./components/whatsapp";

const Home = React.lazy(() => import("./components/home"));
const Service = React.lazy(() => import("./components/service"));
const Skills = React.lazy(() => import("./components/skills"));
const About = React.lazy(() => import("./components/about"));
const Contact = React.lazy(() => import("./components/contact"));
const Canada = React.lazy(() => import("./components/canada"));
const Othercount = React.lazy(() => import("./components/othercount"));
const Tnc = React.lazy(() => import("./components/tnc"));
const Privacy = React.lazy(() => import("./components/privacy"));
const Bali = React.lazy(()=>import("./components/components_crousel/bali"))
const  Thailand= React.lazy(()=>import("./components/components_crousel/thailand"))
const  Japan= React.lazy(()=>import("./components/components_crousel/japan"))
const Europe = React.lazy(()=>import("./components/components_crousel/europe"))
const Singapore = React.lazy(()=>import("./components/components_crousel/singapore"))
const Dubai = React.lazy(()=>import("./components/components_crousel/dubai"))

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
      <React.Suspense
        fallback={
          <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" />
          </div>
        }
      >
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

          <Route path="/bali" element={<Bali />} />
          <Route path="/dubai" element={<Dubai />} />
          <Route path="/japan" element={<Japan />} />
          <Route path="/singapore" element={<Singapore/>} />
          <Route path="/thailand" element={<Thailand/>} />
          <Route path="/europe" element={<Europe/>} />
        </Routes>
        <WhatsAppButton phoneNumber="+917970000976" />
        <ScrollTop />
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
