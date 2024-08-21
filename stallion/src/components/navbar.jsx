import React, { useState } from "react";
import { Navbar, MegaMenu } from "flowbite-react";
import { Link } from "react-router-dom";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="nav-phone">
        <Navbar className="text-black py-9 navbar">
          <Navbar.Brand>
            <img
              src="Logo.png"
              className="main-logo"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-bold dark:text-black">
              <Link to="/">Stallion Immigration</Link>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link className="text-black text-xl hover:text-white hover:scale-110 transition-all duration-300">
              <Link to="/">Home</Link>
            </Navbar.Link>
            <Navbar.Link className="text-black text-xl hover:scale-110 transition-all duration-300">
              <Link to="/about">About</Link>
            </Navbar.Link>
            <MegaMenu.Dropdown
              toggle={
                <span
                  className="text-xl cursor-pointer pl-3 pt-2 pb-2"
                  onClick={handleDropdownToggle}
                >
                  <Link to="/service">Services</Link>
                </span>
              }
            >
              <ul className="grid grid-cols-3 text-base p-2 list-disc dropdown-scroll">
                <div className="space-y-4 p-5">
                  <u className="font-bold">Visa Services</u>
                  <li>
                    <Link to="/canada" className="hover-blue" onClick={handleLinkClick}>
                      Canada Visa
                    </Link>
                  </li>
                  <li>
                    <Link to="/othercount" className="hover-blue" onClick={handleLinkClick}>
                      UK Visa
                    </Link>
                  </li>
                  <li>
                    <Link to="/othercount" className="hover-blue" onClick={handleLinkClick}>
                      Australia Visa
                    </Link>
                  </li>
                  <li>
                    <Link to="/othercount" className="hover-blue" onClick={handleLinkClick}>
                      USA Visa
                    </Link>
                  </li>
                  <li>
                    <Link to="/othercount" className="hover-blue" onClick={handleLinkClick}>
                      New Zealand Visa
                    </Link>
                  </li>
                </div>
                <div className="space-y-4 p-5">
                  <u className="font-bold">International Holiday Packages</u>
                  <li>
                    <Link to="/thailand" className="hover-blue" onClick={handleLinkClick}>
                      Thailand Package
                    </Link>
                  </li>
                  <li>
                    <Link to="/bali" className="hover-blue" onClick={handleLinkClick}>
                      Bali Package
                    </Link>
                  </li>
                  <li>
                    <Link to="/singapore" className="hover-blue" onClick={handleLinkClick}>
                      Singapore Package
                    </Link>
                  </li>
                  <li>
                    <Link to="/japan" className="hover-blue" onClick={handleLinkClick}>
                      Japan Package
                    </Link>
                  </li>
                  <li>
                    <Link to="/dubai" className="hover-blue" onClick={handleLinkClick}>
                      Dubai Package
                    </Link>
                  </li>
                  <li>
                    <Link to="/europe" className="hover-blue" onClick={handleLinkClick}>
                      Europe Package
                    </Link>
                  </li>
                </div>
              </ul>
            </MegaMenu.Dropdown>
            <Navbar.Link className="text-black text-xl hover:scale-110 transition-all duration-300">
              <Link to="/skills">Our skills</Link>
            </Navbar.Link>
            <Navbar.Link className="text-black text-xl hover:scale-110 transition-all duration-300">
              <Link to="/contact">Contact</Link>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className="nav-pc">
        <Navbar className="text-black py-8 navbar justify-between">
          <Navbar.Brand>
            <img src="Logo.png" className="main-logo" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-black">
              <Link to="/">Stallion Immigration</Link>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link className="text-black text-xl hover:scale-110 transition-all duration-300">
              <Link to="/">Home</Link>
            </Navbar.Link>
            <Navbar.Link className="text-black text-xl hover:scale-110 transition-all duration-300">
              <Link to="/about">About</Link>
            </Navbar.Link>
            <Navbar.Link className="text-black hover:scale-110 transition-all duration-300">
              <MegaMenu.Dropdown
                toggle={
                  <Link to="/service" className="text-xl" onClick={handleDropdownToggle}>
                    Services
                  </Link>
                }
              >
                <ul className="grid grid-cols-3 text-base list-disc pl-7">
                  <div className="space-y-4 p-5">
                    <u className="font-bold">Visa Services</u>
                    <li>
                      <Link to="/canada" className="hover-blue" onClick={handleLinkClick}>
                        Canada Visa
                      </Link>
                    </li>
                    <li>
                      <Link to="/othercount" className="hover-blue" onClick={handleLinkClick}>
                        UK Visa
                      </Link>
                    </li>
                    <li>
                      <Link to="/othercount" className="hover-blue" onClick={handleLinkClick}>
                        Australia Visa
                      </Link>
                    </li>
                    <li>
                      <Link to="/othercount" className="hover-blue" onClick={handleLinkClick}>
                        USA Visa
                      </Link>
                    </li>
                    <li>
                      <Link to="/othercount" className="hover-blue" onClick={handleLinkClick}>
                        New Zealand Visa
                      </Link>
                    </li>
                  </div>
                  <div className="space-y-4 p-5">
                    <u className="font-bold">International Holiday Packages</u>
                    <li>
                      <Link to="/thailand" className="hover-blue" onClick={handleLinkClick}>
                        Thailand Package
                      </Link>
                    </li>
                    <li>
                      <Link to="/bali" className="hover-blue" onClick={handleLinkClick}>
                        Bali Package
                      </Link>
                    </li>
                    <li>
                      <Link to="/singapore" className="hover-blue" onClick={handleLinkClick}>
                        Singapore Package
                      </Link>
                    </li>
                    <li>
                      <Link to="/japan" className="hover-blue" onClick={handleLinkClick}>
                        Japan Package
                      </Link>
                    </li>
                    <li>
                      <Link to="/dubai" className="hover-blue" onClick={handleLinkClick}>
                        Dubai Package
                      </Link>
                    </li>
                    <li>
                      <Link to="/europe" className="hover-blue" onClick={handleLinkClick}>
                        Europe Package
                      </Link>
                    </li>
                  </div>
                </ul>
              </MegaMenu.Dropdown>
            </Navbar.Link>
            <Navbar.Link className="text-black text-xl hover:scale-110 transition-all duration-300">
              <Link to="/skills">Our skills</Link>
            </Navbar.Link>
            <Navbar.Link className="text-black text-xl hover:scale-110 transition-all duration-300">
              <Link to="/contact">Contact</Link>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
