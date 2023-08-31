import { logo, close, menu } from "../assets";
import { navLinks } from "../constants/index.js";
import { useState } from "react";
import { motion } from "framer-motion";
const navVariants = {
  initial: {
    translateY: -50,
  },
  visible: {
    translateY: 0,
    transition: { duratioon: 0.3 },
  },
};

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      whileInView="visible"
      className="sticky w-full flex py-6 justify-between items-center navbar "
    >
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[19px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 fl justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="cursor-pointer w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2   min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-[19px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-10"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
