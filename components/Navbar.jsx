"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import {AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
  const flex_between = "flex items-center justify-between";
  const [active, setActive] = useState(false);
  return (
    <header className="bg-[#D2F1A7] relative p-3 font-lato fixed top-0 right-0 left-0">
      <div className={`${flex_between} mx-4 sm:mx-10 md:mx-18 `}>
        <h2 className="text-[#0F080A] font-bold text-md sm:text-lg md:text-xl font-pacifico">
          GreenLeef Landscape
        </h2>
        <HiMenu className="flex md:hidden cursor-pointer" onClick={() => setActive(true)} />
        {/* desktop navbar */}
        <nav className="hidden md:flex">
          <ul className={`${flex_between} gap-8 text-[#351D23]`}>
            <li className="hover:scale-95">
              <Link href="/howitworks" className="p-2">
                How It Works
              </Link>
            </li>
            <li className="hover:scale-95">
              <Link href="/services" className="p-2">
                Services
              </Link>
            </li>
            <li className="hover:scale-95">
              <Link href="/contractors" className="p-2">
                Contractors
              </Link>
            </li>
            <li className="hover:scale-95">
              <Link href="/gallery" className="p-2">
                Gallery
              </Link>
            </li>
          </ul>
        </nav>

        <button className="hidden md:flex px-6 py-1.5 bg-transparent border-2 border-[#0F080A] rounded-md hover:scale-95">
          Login
        </button>
        {/* mobile navbar  */}
        {active && (
          <nav className="absolute top-0 left-0 right-0 bg-[#D2F1A7]">
            <AiOutlineClose className="text-lg m-2 cursor-pointer" onClick={() => setActive(false)} />
            <ul className={`flex flex-col items-end justify-center gap-6 pb-4 text-[#351D23]`}>
              <li className="hover:scale-95">
                <Link href="/howitworks" className="p-2">
                  How It Works
                </Link>
              </li>
              <li className="hover:scale-95">
                <Link href="/services" className="p-2">
                  Services
                </Link>
              </li>
              <li className="hover:scale-95">
                <Link href="/contractors" className="p-2">
                  Contractors
                </Link>
              </li>
              <li className="hover:scale-95">
                <Link href="/gallery" className="p-2">
                  Gallery
                </Link>
              </li>
              <li className="hover:scale-95">
                <Link href="/login" className="p-2">
                  login
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
