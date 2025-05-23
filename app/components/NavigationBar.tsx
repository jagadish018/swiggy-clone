import React, { JSX, useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { BiSolidOffer } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { IoSearchSharp, IoHelpCircleSharp, IoCartSharp } from "react-icons/io5";
import Image from "next/image";

type NavLink = {
  icon: JSX.Element;
  name: string;
  sup?: string;
};

const NavBar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const links: NavLink[] = [
    { icon: <IoSearchSharp />, name: "Search" },
    { icon: <BiSolidOffer />, name: "Offer", sup: "New" },
    { icon: <IoHelpCircleSharp />, name: "Help" },
    { icon: <MdAccountCircle />, name: "Sign in" },
    { icon: <IoCartSharp />, name: "Cart", sup: "(2)" },
  ];

  return (
    <>
      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setToggle(false)}
      >
        <div
          className={`w-[80%] max-w-[300px] bg-white h-full absolute left-0 top-0 transition-transform duration-500 ${
            toggle ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="p-6 space-y-4 text-lg font-medium text-gray-700">
            {links.map((link, index) => (
              <li key={index} className="flex items-center gap-2">
                {link.icon} {link.name}
                {link.sup && <sup className="text-[#fc8019]">{link.sup}</sup>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Header */}
      <header className="p-4 shadow-xl bg-white sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Logo and Location */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={80}
              height={40}
              className="object-contain"
            />
            <div className="hidden sm:block">
              <span className="font-bold border-b-2 border-black">
                Jagadish C K
              </span>{" "}
              Tumakur, Karnataka, India
              <RxCaretDown
                fontSize={20}
                className="inline text-[#fc8019] cursor-pointer ml-1"
                onClick={() => setToggle(true)}
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex gap-8 text-[16px] font-semibold text-[#686b78]">
            {links.map((link, index) => (
              <div
                key={index}
                className="flex items-center gap-2 hover:text-[#fc8019] cursor-pointer"
              >
                {link.icon} {link.name}
                {link.sup && <sup className="text-[#fc8019]">{link.sup}</sup>}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setToggle(true)}
            className="sm:hidden text-[#fc8019] text-2xl"
            aria-label="Open menu"
          >
            <RxCaretDown />
          </button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
