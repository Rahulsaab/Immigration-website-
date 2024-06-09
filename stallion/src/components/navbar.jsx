import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="nav-pc">
        <Navbar className=" text-black  py-9 navbar">
          <Navbar.Brand>
            <img
              src="Logo.png"
              className="main-logo"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-black " >
              <Link to="/">Stallion Imigration</Link>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link className="text-black text-xl hover:text-white hover:scale-110 transition-all duration-300">
              <Link to="/">Home</Link>
            </Navbar.Link>
            <Navbar.Link className=" text-black text-xl hover:scale-110 transition-all duration-300 ">
              {" "}
              <Link to="/about">About</Link>
            </Navbar.Link>
            <Navbar.Link className="text-black text-xl hover:scale-110 transition-all duration-300">
              <Link to="/service">Service</Link>
            </Navbar.Link>
            <Navbar.Link className="text-black text-xl hover:scale-110 transition-all duration-300">
              <Link to="/skills">Our skills</Link>
            </Navbar.Link>
            <Navbar.Link className="text-black text-xl hover:scale-110 transition-all duration-300">
              {" "}
              <Link to="/contact">Contact</Link>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className="nav-phone">
        <Navbar className=" text-black  py-9 navbar">
          <Navbar.Brand>
            <img
              src="Logo.png"
              className="main-logo"
              alt="Flowbite React Logo"
            />
            <span className=" self-center whitespace-nowrap text-2xl font-bold dark:text-black ">
              <Link to="/">Stallion Imigration</Link>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link className="text-black text-xl hover:text-white hover:scale-110 transition-all duration-300">
              <Link to="/">Home</Link>
            </Navbar.Link>
            <Navbar.Link className=" text-black text-xl hover:scale-110 transition-all duration-300 ">
              {" "}
              <Link to="/about">About</Link>
            </Navbar.Link>
            <Navbar.Link className="text-black text-xl hover:scale-110 transition-all duration-300">
              <Link to="/service">Service</Link>
            </Navbar.Link>
            <Navbar.Link className="text-black text-xl hover:scale-110 transition-all duration-300">
              <Link to="/skills">Our skills</Link>
            </Navbar.Link>
            <Navbar.Link className="text-black text-xl hover:scale-110 transition-all duration-300">
              {" "}
              <Link to="/contact">Contact</Link>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}
export default Header;
