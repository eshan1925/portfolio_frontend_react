import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const showResume = () => {
    window.location.href =
      "https://drive.google.com/file/d/1IvdBtQ1uKDmOXX_vY5uVMInpHXqFnRfe/view?usp=sharing";
  };
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "achievements", "work", "skills", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link=${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>

      <button onClick={showResume} className="resume_button">
        <img src={images.eye} alt="eye-icon" />
        <div>View Resume</div>
      </button>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX className="cross-icon" onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "achievements",
                "work",
                "skills",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button onClick={showResume} className="resume_button_small">
              <img src={images.eye} alt="eye-icon" />
              View Resume
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
