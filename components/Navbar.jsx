"use client";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const flex_between = "flex items-center justify-between";
  const [active, setActive] = useState(false);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      setActive(false);
    };
  }

  return (
    <header className="bg-[#D2F1A7]/80 backdrop-blur-sm fixed p-3 font-lato fixed top-0 right-0 left-0 z-20">
      <div className={`${flex_between} mx-4 sm:mx-10`}>
        <h2 className="text-[#0F080A] py-2 font-bold text-lg sm:text-xl md:text-2xl font-pacifico">
          GreenLeef Landscape
        </h2>
        <HiMenu
          className="flex md:hidden cursor-pointer text-xl"
          onClick={() => setActive(true)}
        />
        {/* desktop navbar */}
        <nav className="hidden md:flex">
          <ul className={`${flex_between} gap-4 text-[#351D23]`}>
            <li className="hover:scale-95">
              <a href="#hero" className="p-2">
                Home
              </a>
            </li>
            <li className="hover:scale-95">
              <a href="#about" className="p-2">
                About
              </a>
            </li>
            <li className="hover:scale-95">
              <a href="#services" className="p-2">
                Services
              </a>
            </li>
            <li className="hover:scale-95">
              <a href="#testimonials" className="p-2">
                Testimonials
              </a>
            </li>
            <li className="hover:scale-95">
              <a href="#gallery" className="p-2">
                Gallery
              </a>
            </li>
            <li className="hover:scale-95">
              <a href="#contact" className="p-2">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button className="hidden md:flex px-6 py-1.5 bg-transparent border-2 border-[#0F080A] rounded-md hover:scale-95">
          Login
        </button>
        {/* mobile navbar  */}
        {active && (
          <nav className="bg-[#D2F1A7]/80 backdrop-blur-sm absolute top-0 left-0 right-0 bg-[#D2F1A7]">
            <AiOutlineClose
              className="text-xl mt-4 ml-4 cursor-pointer"
              onClick={() => setActive(false)}
            />
            <ul
              className={`flex flex-col items-end justify-center gap-6 pb-4 text-[#351D23]`}
            >
              <li className="hover:scale-95">
                <a href="#hero" className="p-2">
                  Home
                </a>
              </li>
              <li className="hover:scale-95">
                <a href="#about" className="p-2">
                  About
                </a>
              </li>
              <li className="hover:scale-95">
                <a href="#services" className="p-2">
                  Services
                </a>
              </li>
              <li className="hover:scale-95">
                <a href="#testimonials" className="p-2">
                  Testimonials
                </a>
              </li>
              <li className="hover:scale-95">
                <a href="#gallery" className="p-2">
                  Gallery
                </a>
              </li>
              <li className="hover:scale-95">
                <a href="#contact" className="p-2">
                  Contact
                </a>
              </li>
              <li className="hover:scale-95">
                <a href="#login" className="p-2">
                  login
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
