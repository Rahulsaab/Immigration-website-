import { Navbar, MegaMenu } from "flowbite-react";
import { Link } from "react-router-dom";

function Header() {
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
                <span className="text-xl cursor-pointer pl-3 pt-2 pb-2">
                  <Link to="/service">Services</Link>
                </span>
              }
            >
              <ul className="grid grid-cols-3 text-base p-2 list-disc dropdown-scroll">
                <div className="space-y-4 p-5">
                  <u className="font-bold">Visa Services</u>
                  <li>
                    <Link to="/canada" className="hover-blue">
                      Canada Visa
                    </Link>
                  </li>
                  <li>
                    <Link to="/othercount" className="hover-blue">
                      UK Visa
                    </Link>
                  </li>
                  <li>
                    <Link to="/othercount" className="hover-blue">
                      Australia Visa
                    </Link>
                  </li>
                  <li>
                    <Link to="/othercount" className="hover-blue">
                      USA Visa
                    </Link>
                  </li>
                  <li>
                    <Link to="/othercount" className="hover-blue">
                      New Zealand Visa
                    </Link>
                  </li>
                </div>
                <div className="space-y-4 p-5">
                  <u className="font-bold">International Holiday Packages</u>
                  <li>
                    <Link to="/thailand" className="hover-blue">
                      Thailand Package
                    </Link>
                  </li>
                  <li>
                    <Link to="/bali" className="hover-blue">
                      Bali Package
                    </Link>
                  </li>
                  <li>
                    <Link to="/singapore" className="hover-blue">
                      Singapore Package
                    </Link>
                  </li>
                  <li>
                    <Link to="/japan" className="hover-blue">
                      Japan Package
                    </Link>
                  </li>
                  <li>
                    <Link to="/dubai" className="hover-blue">
                      Dubai Package
                    </Link>
                  </li>
                  <li>
                    <Link to="/europe" className="hover-blue">
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
                  <>
                    <Link to="/service" className="text-xl">
                      Services
                    </Link>
                  </>
                }
              >
                <ul className="grid grid-cols-3 text-base list-disc pl-7">
                  <div className="space-y-4 p-5">
                    <u className="font-bold">Visa Services</u>
                    <li>
                      <a className="hover-blue">
                        <Link to="/canada">Canada Visa</Link>
                      </a>
                    </li>
                    <li>
                      <a className="hover-blue">
                        <Link to="/othercount">UK Visa</Link>
                      </a>
                    </li>
                    <li>
                      <a className="hover-blue">
                        <Link to="/othercount">Australia Visa</Link>
                      </a>
                    </li>
                    <li>
                      <a className="hover-blue">
                        <Link to="/othercount">USA Visa</Link>
                      </a>
                    </li>
                    <li>
                      <a className="hover-blue">
                        <Link to="/othercount">New Zealand Visa</Link>
                      </a>
                    </li>
                  </div>
                  <div className="space-y-4 p-5">
                    <u className="font-bold">International Holiday Packages</u>
                    <li>
                      <a className="hover-blue">
                        <Link to="/thailand">Thailand Package</Link>
                      </a>
                    </li>
                    <li>
                      <a className="hover-blue">
                        <Link to="/bali">Bali Package</Link>
                      </a>
                    </li>
                    <li>
                      <a className="hover-blue">
                        <Link to="/singapore">Singapore Package</Link>
                      </a>
                    </li>
                    <li>
                      <a className="hover-blue">
                        <Link to="/japan">Japan Package</Link>
                      </a>
                    </li>
                    <li>
                      <a className="hover-blue">
                        <Link to="/dubai">Dubai Package</Link>
                      </a>
                    </li>
                    <li>
                      <a className="hover-blue">
                        <Link to="/europe">Europe Package</Link>
                      </a>
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
