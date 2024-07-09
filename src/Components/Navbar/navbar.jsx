/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [navState, setNavState] = useState("navBar");
  const [formState, setFormState] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const showNav = () => {
    setNavState("navBar activeNavbar");
  };
  const removeNav = () => {
    setNavState("navBar");
  };

  const toggleForm = () => {
    setFormState(!formState);
    setIsRegister(false); // Reset to login form by default when toggling
  };

  const toggleRegister = () => {
    setIsRegister(!isRegister);
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" /> SEEGEORGIA
            </h1>
          </a>
        </div>

        <div className={navState}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>

            <button onClick={toggleForm} className="btn">
              <a href="#">Login</a>
            </button>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
      {formState && (
        <div className="login-page">
          <div className={formState ? "form activeForm" : "form"}>
            {isRegister ? (
              <form className="register-form">
                <input type="text" placeholder="name" />
                <input type="text" placeholder="email address" />
                <input type="password" placeholder="password" />
                <button className="btn">Register</button>
                <p className="message">
                  Already registered?{" "}
                  <a href="#" onClick={toggleRegister}>
                    Sign In
                  </a>
                </p>
              </form>
            ) : (
              <form className="login-form">
                <button className="login-action btn">
                  <FaGoogle />
                  Login with Google
                </button>
                <button className="login-action btn">
                  <FaFacebookF />
                  Login with Facebook
                </button>
                <button className="login-action btn">
                  <FaTwitter />
                  Login with Twitter
                </button>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button className="btn">Login</button>
                <p className="message">
                  Not registered?{" "}
                  <a href="#" onClick={toggleRegister}>
                    Create an account
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
