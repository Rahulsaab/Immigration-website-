import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import  Footer from "./footer";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section>
        <div className="container11">
          <div className="contact-page " data-aos="fade-right">
            CONTACT US
          </div>
        </div>
        <div className="container12">
          <div className="heading2" data-aos="fade-right">
            Let's Connect! Your Global Journey Starts Here
          </div>
          <div className="heading4" data-aos="fade-right">
            Ready to embark on your immigration adventure with Stallion
            Immigration?
          </div>
          <div className="heading5" data-aos="fade-right">
            Our Mohali-based team is your dedicated partner in turning dreams
            into reality. Whether you're envisioning a study abroad experience,
            planning a family reunion, or seeking skilled opportunities
            worldwide, Stallion Immigration has the expertise to make it happen.
          </div>
          <div className="all-divs">
            <div className="d4" data-aos="flip-left">
              <div className="contact-page-icon">
              <FaLocationDot />
              </div>
              <div className="heading6">Visit Us</div>
              <div className="writing">
                Explore endless possibilities at our Mohali office. The door to
                your global journey is open – drop by, and let's chat over a cup
                of chai!
              </div>
              <div className="heading20">
                <a href="https://maps.app.goo.gl/GvcE4hAS5dnJDXcHA">
                  <button className="b11">Location</button>
                </a>
              </div>
            </div>
            <div className="d4" data-aos="flip-left">
              <div className="contact-page-icon">
              <MdAddCall />
              </div>
              <div className="heading6">Connect With Us</div>
              <div className="writing">
                Can't make it in person? No worries! Give us a ring, and our
                friendly team is ready to answer your queries and guide you
                through your immigration process.
              </div>
              <div className="heading21">
                <a href="tel:917970000976">
                  <button className="b11">Call Us</button>
                </a>
              </div>
            </div>
            <div className="d4" data-aos="flip-left">
              <div className="contact-page-icon">
              <IoMail />
              </div>
              <div className="heading6">Email Us</div>
              <div className="writing">
              Prefer the digital route? Shoot us an email, and we'll get back
              to you promptly. Your journey starts with a single click.
              </div>
              <div className="heading21" style={{paddingTop:"1.5rem"}}>
                <a href="mailto:stallionimmi@gmail.com">
                  <button className="b11" >Mail Us</button>
                </a>
              </div>
            </div>
          </div>
          <div className="heading7"  data-aos="fade-right">
            Your dreams are our priority, and Stallion Immigration is here to
            make them a reality.
            <br />
            Contact us today and let the journey begin!
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;
