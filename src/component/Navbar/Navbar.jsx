import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      
      <img src={logo} alt="" className="logo" />
    {/* Toggle button */}
      <div className="toggle-btn" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>   
      <ul className={open ? "menu open" : "menu"}>

        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Hero
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            <button className="btn">Contact</button>
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
