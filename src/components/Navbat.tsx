
"use client";

import { Navbar } from "flowbite-react";
import { FaShoppingBag } from "react-icons/fa";

export function NavBar() {
  return (
    <Navbar className="fixed z-50 mx-auto w-[100%] flex items-center bg-white border-b-[1px] border-b-gray-300">
        <div className=" text-xl font-semibold dark:text-white text-dark">
          <span className="text-purple-700 text-[30px]">S</span>
          OY 
          <span className="text-purple-700 text-[30px]"> N</span>
          ature
        </div>
        <Navbar.Toggle />
      <Navbar.Collapse >
        <Navbar.Link className="text-purple-700 font-bold text-lg" href="#">
          Home
        </Navbar.Link>
        <Navbar.Link className="text-dark text-lg" href="#">About</Navbar.Link>
        <Navbar.Link className="text-dark text-lg" href="#">Services</Navbar.Link>
        <Navbar.Link className="text-dark text-lg" href="#">Pricing</Navbar.Link>
        <Navbar.Link className="text-dark text-lg" href="#">Contact</Navbar.Link>
        <FaShoppingBag className="md:mt-0 mt-5 ml-5 cursor-pointer text-purple-700" size={25}/>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;