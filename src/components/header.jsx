import React, { useState } from "react";
import image from "../assets/companyLogo.svg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";



export default function header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    console.log("show menu");
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <>
      <nav className=" container flex justify-between py-[19px]">
        <span>
          <Link to="/">
            <img src={image} alt="Company Logo" />
          </Link>
        </span>

        <div
          className={` fixed bottom-0 right-0  top-0 w-[50%] place-items-center bg-primary-dark transition-all ${
            isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          } z-20 flex flex-col p-8 ease-linear md:static md:w-auto md:flex-row md:gap-5 md:bg-transparent  md:p-0`}
        >
          <button className="md:hidden text-white md:text-primary-dark" onClick={toggleMenu}>
            X
          </button>

          <Link to="/" className="text-white font-semibold md:text-primary-dark">Home</Link>
          <Link to="/" className="text-white font-semibold md:text-primary-dark">Our Products</Link>
          <Link to="/" className="text-white font-semibold md:text-primary-dark">Resources</Link>
          <Link to="/" className="text-white font-semibold md:text-primary-dark">Contacts</Link>
        </div>



        <GiHamburgerMenu onClick={toggleMenu} className="text-3xl md:hidden" />



        <div className="hidden lg:flex gap-1">
          <button className="text-primary font-semibold">Sign Up</button>
          <button className="bg-primary text-white rounded-md p-1 font-semibold">Log In</button>
        </div>

      </nav>



      {isMenuOpen &&
       (
        <div className =
          "fixed bottom-0 left-0 right-0 top-0 z-10 bg-[rgb(0,0,0,0.5)]">
          
        </div>
       )}
    </>
  );
}
