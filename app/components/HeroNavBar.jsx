import React, { useState } from "react";
import styles from "./heronavbar.module.css";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const HeroNavBar = ({ show }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
   const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSidebarOpen(false); 
    }
  };

  return (
    <>
      <div className={`${styles.navbar} ${show ? styles.scrolled : ""}`}>
        <div>
          {" "}
          <Image
            src="/images/evhomeslogowhite.png"
            alt="EV Homes Logo"
            width={250}
            height={50}
            className={styles.logoNav}
          />
        </div>
        <nav>
          <ul className={styles.navList}>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("members")}>
              Committee Members
            </li>
            <li onClick={() => scrollToSection("gallery")}>Gallery</li>
            <li onClick={() => scrollToSection("location")}>Location</li>
          </ul>
        </nav>
        <div className={styles.hamburger} onClick={() => setSidebarOpen(true)}>
          <GiHamburgerMenu size={25} color="white" />
        </div>
        <div className={`${styles.sidebar} ${sidebarOpen ? styles.show : ""}`}>
          <div
            className={styles.closeIcon}
            onClick={() => setSidebarOpen(false)}
          >
            <IoMdClose size={28} />
          </div>
          <ul className={styles.sidebarList}>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("members")}>
              Committee Members
            </li>
            <li onClick={() => scrollToSection("gallery")}>Gallery</li>
            <li onClick={() => scrollToSection("location")}>Location</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroNavBar;
