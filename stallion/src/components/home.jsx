import React, { useEffect, useRef } from "react";
import Footer from "./footer";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import CarouselComponent from "./crousels2";
import Emailjs from "./emailjs";
import Aos from "aos";
import "aos/dist/aos.css";
import { HiOutlineArrowRight } from "react-icons/hi";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const registrationRef = useRef(null);

  const scrollToRegistration = () => {
    if (registrationRef.current) {
      registrationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const registrationRef1 = useRef(null);
  const scrollToRegistration1 = () => {
    if (registrationRef1.current) {
      registrationRef1.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section>
        <div className="main-container-phone">
          <div className="container-sec" loading="lazy">
            <div className="aspire">
              <div className="pc-heading" data-aos="fade-right">SWIFT AND SUITED VISA FACILITY</div>
              <div className="pc-heading2" data-aos="fade-right">We are not just consultants<br></br>We are Dream Architects.</div>
              <div className="px-1 pt-5" data-aos="fade-right">
                <Button color="warning" onClick={scrollToRegistration1}>
                  Book Consultancy <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="word-phone">
              <div className="up" data-aos="fade-right">SWIFT AND SUITED VISA FACILITY</div>
              <div className="down" data-aos="fade-right">
                Immigration &<br></br>Visa Consultation
              </div>
              <div className="px-1 pt-5" data-aos="fade-right">
                <Button color="dark" onClick={scrollToRegistration}>
                  Book Consultancy <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container30">
          <div className="para-left">
            <div className="c1" data-aos="fade-right">
              Why Choose Stallion Immigration?
            </div>
            <div className="content">
              
              <div className="c3" data-aos="fade-right">
                At Stallion Immigration, we don't just facilitate immigration;
                we pave the way for a brighter, more promising future. Contact
                us today, and let Stallion Immigration be the wind beneath your
                wings as you soar to new heights.
              </div>
              <div className="c5" data-aos="fade-right">
                Your dreams are our priority, and Stallion Immigration is here
                to make them a reality. Contact us today and let the journey
                begin!
              </div>
              <div className="click">
                <a href="contact.html">
                  <Button className="b1" data-aos="fade-right">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="form-right"  ref={registrationRef1}>
            <div
              className="registration-container1"
              data-aos="fade-right"
              
            >
              <Emailjs />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container2">
          <div className="visa" data-aos="fade-right">
            <u>Visa Apply</u>
          </div>
          <div className="countries" data-aos="fade-right">
            We provide visa for these countries.
          </div>
          <div className="diff-flags">
            <div className="display1" data-aos="flip-left">
              <div className="img3">
                <img
                  className="flag"
                  src="canada.png"
                  alt="Canada Flag"
                  loading="lazy"
                />
              </div>
              <div className="country">
                <u>CANADA</u>
              </div>
              <div className="info">
                Discover vast landscapes and a friendly atmosphere. Obtain a
                visa or eTA for entry and explore cities and nature.
              </div>
              <div className="button7">
                <button className="b10">
                  <Link to="/canada">Know More</Link>
                </button>
              </div>
            </div>
            <div className="display1" data-aos="flip-left">
              <div className="img3">
                <img
                  className="flag2"
                  src="usa-removebg-preview.png"
                  alt="USA Flag"
                  loading="lazy"
                />
              </div>
              <div className="country">
                <u>USA</u>
              </div>
              <div className="info">
                Explore diverse landscapes and cultures. Get a visa for entry;
                apply online or at the embassy for approval.
              </div>
              <div className="button8">
                <button className="b10">
                  <Link to="/othercount">Know More</Link>
                </button>
              </div>
            </div>
            <div className="display1" data-aos="flip-left">
              <div className="img3">
                <img
                  className="flag3"
                  src="australia-1296727_1280.png"
                  alt="Australia Flag"
                  loading="lazy"
                />
              </div>
              <div className="country">
                <u>AUSTRALIA</u>
              </div>
              <div className="info">
                Experience unique wildlife and breathtaking landscapes. Get a
                visa online or through the embassy to explore cities and nature.
              </div>
              <div className="button6">
                <button className="b10">
                  <Link to="/othercount">Know More</Link>
                </button>
              </div>
            </div>
            <div className="display1" data-aos="flip-left">
              <div className="img3">
                <img
                  className="flag4"
                  src="uk.png"
                  alt="UK Flag"
                  loading="lazy"
                />
              </div>
              <div className="country">
                <u>UNITED KINGDOM</u>
              </div>
              <div className="info">
                Dive into rich history and diverse cultures. Most need a visa;
                apply online or at the embassy.
              </div>
              <div className="button10">
                <button className="b10">
                  <Link to="/othercount">Know More</Link>
                </button>
              </div>
            </div>
            <div className="display1" data-aos="flip-left">
              <div className="img3">
                <img
                  className="flag5"
                  src="New_Zealand.svg"
                  alt="New Zealand Flag"
                  loading="lazy"
                />
              </div>
              <div className="country">
                <u>NEW ZEALAND</u>
              </div>
              <div className="info">
                Enjoy stunning landscapes and Maori culture. Apply online for a
                visa and discover outdoor beauty and friendly locals.
              </div>
              <div className="button6">
                <button className="b10">
                  <Link to="/othercount">Know More</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="review" data-aos="fade-right">
            <u>International Holiday Packages</u>
          </div>
        </div>
      </section>
      <section>
        <div className="containscroll" data-aos="fade-right">
          <CarouselComponent />
        </div>
      </section>
      <section>
        <div className="container2">
          <div className="registration-container" ref={registrationRef} data-aos="fade-right">
            <Emailjs />
          </div>
          <div className="review" data-aos="fade-right">
            <u>What Our Customers Say</u>
          </div>
        </div>
        <div className="container-bottom" data-aos="fade-right">
          <div className="forpc">
            <div className="commonninja_component pid-ed049110-64a0-438e-8d90-d36e97fb929a"></div>
          </div>
          <div className="forphone">
            <div className="commonninja_component pid-ed049110-64a0-438e-8d90-d36e97fb929a"></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
