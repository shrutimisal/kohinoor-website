import React from "react";
import styles from "./heronavbar.module.css";
import Image from "next/image";

const HeroNavBar = ({show}) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`${styles.navbar} ${show ? styles.scrolled : ""}`}>
      <div>
        {" "}
        <Image
          src="/images/evhomeslogo.png"
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
          <li onClick={() => scrollToSection("members")}>Committee Members</li>
          <li onClick={() => scrollToSection("gallery")}>Gallery</li>
          <li onClick={() => scrollToSection("location")}>Location</li>
        </ul>
      </nav>
    </div>
  );
};

export default HeroNavBar;
