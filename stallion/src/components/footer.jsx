import React from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container5">
          {/* <Mobilefooter/> */}
          <div className="footer">
            <div className="f1">
              <div className="heading">
                <u>VISIT US</u>
              </div>
              <div className="sub-head">
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "1.3rem", paddingTop: "4px" }}>
                    <FaLocationDot />
                  </div>
                  <a
                    className="loca"
                    href="https://maps.app.goo.gl/GvcE4hAS5dnJDXcHA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ADDRESS: SCO No. 412/FF, South EX-2 <br /> Sector 117, SAS
                    Nagar, Mohali, Punjab
                  </a>
                </div>
              </div>
              <div className="left-footer">
                <div className="left-img">
                  <img
                    className="logo-footer"
                    src="Logo.png"
                    alt="Stallion Immigration"
                  />
                </div>
                <div className="name1">
                  <div className="stallion1">Stallion</div>
                  <div className="immi1">Immigration</div>
                  <div className="aspire1">
                    <span className="asp">ASPIRE</span> TO FLY
                  </div>
                </div>
              </div>
            </div>
            <div className="f2">
              <div className="heading">
                <u>CONTACT US</u>
              </div>
              <div className="sub-head">
                <div style={{ display: "flex" }}>
                  <div className="mailcl">
                    <FaPhoneAlt />
                  </div>
                  <a className="num" href="tel:+917970000976">
                    +917970000976
                  </a>
                </div>
                <div style={{ display: "flex" }}>
                  <div className="mailcl">
                    <IoMdMail />
                  </div>
                  <a className="num" href="mailto:stallionimmi@gmail.com">
                    stallionimmi@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="f3">
              <div className="heading">
                <u>QUICK LINKS</u>
              </div>
              <div className="head-foot">
                <div style={{ display: "flex" }}>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </div>
                <div style={{ display: "flex" }}>
                  <Link to="/about" style={{ textDecoration: "none" }}>
                    About
                  </Link>
                </div>
                <div style={{ display: "flex" }}>
                  <Link to="/service" style={{ textDecoration: "none" }}>
                    Service
                  </Link>
                </div>
                <div style={{ display: "flex" }}>
                  <Link to="/skills" style={{ textDecoration: "none" }}>
                    Our skills
                  </Link>
                </div>
                <div style={{ display: "flex" }}>
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="follow">
              <div className="heading">
                <u>CONNECT WITH US</u>
              </div>
              <div className="icons1">
                <div className="wa">
                  <a
                    className="wa"
                    href="https://wa.me/+917970000976"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex" }}
                  >
                    <div
                      className="social-logo"
                      style={{
                        color: "#83847e",
                        fontSize: "1.2rem",
                        paddingTop: ".4rem",
                        paddingRight: ".2rem",
                      }}
                    >
                      <IoLogoWhatsapp />
                    </div>
                    WhatsApp
                  </a>
                </div>
                <div className="wa">
                  <a
                    className="wa"
                    href="https://www.instagram.com/_stallionimmigration_?igsh=MXBpNGhhbmtmNnM0YQ%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex" }}
                  >
                    <div
                      className="social-logo"
                      style={{
                        color: "#83847e",
                        fontSize: "1.2rem",
                        paddingTop: ".4rem",
                        paddingRight: ".2rem",
                      }}
                    >
                      <AiFillInstagram />
                    </div>
                    Instagram
                  </a>
                </div>
                <div className="wa">
                  <a
                    className="wa"
                    href="https://www.linkedin.com/in/rohit-singh-b30627291/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex" }}
                  >
                    <div
                      className="social-logo"
                      style={{
                        color: "#83847e",
                        fontSize: "1.2rem",
                        paddingTop: ".4rem",
                        paddingRight: ".2rem",
                      }}
                    >
                      <FaLinkedin />
                    </div>
                    LinkedIn
                  </a>
                </div>
                <div className="wa">
                  <a
                    className="wa"
                    href="https://www.facebook.com/profile.php?id=61550918926354&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex" }}
                  >
                    <div
                      className="social-logo"
                      style={{
                        color: "#83847e",
                        fontSize: "1.2rem",
                        paddingTop: ".4rem",
                        paddingRight: ".2rem",
                      }}
                    >
                      <FaSquareFacebook />
                    </div>
                    Facebook
                  </a>
                </div>
                {/* <div className="wa">
                  <a className="wa" href="https://wa.me/+917970000976" target="_blank" rel="noopener noreferrer">
                    <div className="social-logo" style={{ color: "#83847e" }}>
                      <IoLogoWhatsapp />
                    </div>
                    WhatsApp
                  </a>
                </div>
                <div className="wa">
                  <a
                    className="wa"
                    href="https://www.instagram.com/_stallionimmigration_?igsh=MXBpNGhhbmtmNnM0YQ%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="social-logo" style={{ color: "#83847e" }}>
                      <AiFillInstagram />
                    </div>
                    Instagram
                  </a>
                </div>
                <div className="wa">
                  <a className="wa" href="https://www.linkedin.com/in/rohit-singh-b30627291/" target="_blank" rel="noopener noreferrer">
                    <div className="social-logo" style={{ color: "#83847e" }}>
                      <FaLinkedin />
                    </div>
                    LinkedIn
                  </a>
                </div>
                <div className="wa">
                  <a
                    className="wa"
                    href="https://www.facebook.com/profile.php?id=61550918926354&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="social-logo" style={{ color: "#83847e" }}>
                      <FaSquareFacebook />
                    </div>
                    Facebook
                  </a>
                </div> */}
              </div>
            </div>
            <div className="left-footer3">
              <div className="left-img">
                <img
                  className="logo-footer"
                  src="Logo.png"
                  alt="Stallion Immigration"
                />
              </div>
              <div className="name1">
                <div className="stallion1">Stallion</div>
                <div className="immi1">Immigration</div>
                <div className="aspire1">
                  <span className="asp">ASPIRE</span> TO FLY
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer>
        <div className="container6">
          <div className="footer2">
            <div className="left-footer1" style={{ display: "flex" }}>
              <div
                style={{
                  paddingTop: ".1rem",
                  fontSize: ".9rem",
                  paddingRight: ".2rem",
                }}
              >
                <FaCopyright />
              </div>
              Stallion Immigration 2024
            </div>
            <div className="right-footer">
              <div className="p-tnc">
                <div className="privacy">
                  <a
                    style={{ color: "#83847E", textDecoration: "none" }}
                    href="privacy.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link to="/privacy" style={{ textDecoration: "none" }}>
                      Privacy Policy
                    </Link>
                  </a>
                </div>
                <div className="tnc">
                  <a
                    style={{ color: "#83847E", textDecoration: "none" }}
                    href="t&c.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link to="/tnc" style={{ textDecoration: "none" }}>
                      Terms & Conditions
                    </Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer>
        <div className="container51">
          <div className="footer">
            <div className="f1">
              <div className="heading">
                <u>VISIT US</u>
              </div>
              <div className="sub-head">
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "1.3rem", paddingTop: ".7rem" }}>
                    <FaLocationDot />
                  </div>
                  <a
                    className="loca"
                    style={{ paddingTop: ".6rem" }}
                    href="https://maps.app.goo.gl/GvcE4hAS5dnJDXcHA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ADDRESS: SCO No. 412/FF, South EX-2 <br /> Sector 117, SAS
                    Nagar, Mohali, Punjab
                  </a>
                </div>
              </div>
              <div className="left-footer">
                <div className="left-img">
                  <img
                    className="logo-footer"
                    src="Logo.png"
                    alt="Stallion Immigration"
                  />
                </div>
                <div className="name1">
                  <div className="stallion1">Stallion</div>
                  <div className="immi1">Immigration</div>
                  <div className="aspire1">
                    <span className="asp">ASPIRE</span> TO FLY
                  </div>
                </div>
              </div>
            </div>
            <div className="f2">
              <div className="heading">
                <u>CONTACT US</u>
              </div>
              <div className="sub-head" style={{ lineHeight: "3" }}>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      paddingTop: ".7rem",
                      paddingRight: ".2rem",
                    }}
                  >
                    <FaPhoneAlt />
                  </div>
                  <a className="num" href="tel:+917970000976">
                    +917970000976
                  </a>
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      paddingTop: ".8rem",
                      paddingRight: ".2rem",
                    }}
                  >
                    <IoMdMail />
                  </div>
                  <a className="num" href="mailto:stallionimmi@gmail.com">
                    stallionimmi@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="f3">
              <div className="heading">
                <u>QUICK LINKS</u>
              </div>
              <div className="head-foot">
                <ol>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </ol>
                <ol>
                  <Link to="/about" style={{ textDecoration: "none" }}>
                    About
                  </Link>
                </ol>
                <ol>
                  <Link to="/service" style={{ textDecoration: "none" }}>
                    Service
                  </Link>
                </ol>
                <ol>
                  <Link to="/skills" style={{ textDecoration: "none" }}>
                    Our skills
                  </Link>
                </ol>
                <ol>
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    Contact
                  </Link>
                </ol>
              </div>
            </div>
            <div className="follow">
              <div className="heading">
                <u>CONNECT WITH US</u>
              </div>
              <div className="icons1">
                <div className="wa">
                  <a
                    className="wa"
                    href="https://wa.me/+917970000976"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex" }}
                  >
                    <div
                      className="social-logo"
                      style={{
                        color: "#83847e",
                        fontSize: "1.2rem",
                        paddingTop: ".4rem",
                        paddingRight: ".2rem",
                      }}
                    >
                      <IoLogoWhatsapp />
                    </div>
                    WhatsApp
                  </a>
                </div>
                <div className="wa">
                  <a
                    className="wa"
                    href="https://www.instagram.com/_stallionimmigration_?igsh=MXBpNGhhbmtmNnM0YQ%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex" }}
                  >
                    <div
                      className="social-logo"
                      style={{
                        color: "#83847e",
                        fontSize: "1.2rem",
                        paddingTop: ".4rem",
                        paddingRight: ".2rem",
                      }}
                    >
                      <AiFillInstagram />
                    </div>
                    Instagram
                  </a>
                </div>
                <div className="wa">
                  <a
                    className="wa"
                    href="https://www.linkedin.com/in/rohit-singh-b30627291/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex" }}
                  >
                    <div
                      className="social-logo"
                      style={{
                        color: "#83847e",
                        fontSize: "1.2rem",
                        paddingTop: ".4rem",
                        paddingRight: ".2rem",
                      }}
                    >
                      <FaLinkedin />
                    </div>
                    LinkedIn
                  </a>
                </div>
                <div className="wa">
                  <a
                    className="wa"
                    href="https://www.facebook.com/profile.php?id=61550918926354&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex" }}
                  >
                    <div
                      className="social-logo"
                      style={{
                        color: "#83847e",
                        fontSize: "1.2rem",
                        paddingTop: ".4rem",
                        paddingRight: ".2rem",
                      }}
                    >
                      <FaSquareFacebook />
                    </div>
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            <div className="left-footer3">
              <div className="left-img">
                <img
                  className="logo-footer"
                  src="Logo.png"
                  alt="Stallion Immigration"
                />
              </div>
              <div className="name1">
                <div className="stallion1">Stallion</div>
                <div className="immi1">Immigration</div>
                <div className="aspire1">
                  <span className="asp">ASPIRE</span> TO FLY
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer>
        <div className="container61">
          <div className="footer2">
            <div className="left-footer1" style={{ display: "flex" }}>
              <div
                style={{
                  paddingTop: ".1rem",
                  fontSize: ".9rem",
                  paddingRight: ".2rem",
                }}
              >
                <FaCopyright />
              </div>
              Stallion Immigration 2024
            </div>
            <div className="right-footer">
              <div className="p-tnc">
                <div className="privacy">
                  <a
                    style={{ color: "#83847E", textDecoration: "none" }}
                    href="privacy.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link to="/privacy" style={{ textDecoration: "none" }}>
                      Privacy Policy
                    </Link>
                  </a>
                </div>
                <div className="tnc">
                  <a
                    style={{ color: "#83847E", textDecoration: "none" }}
                    href="t&c.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link to="/tnc" style={{ textDecoration: "none" }}>
                      Terms & Conditions
                    </Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
