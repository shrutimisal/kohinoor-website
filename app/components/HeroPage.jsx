"use client";
import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import styles from "./heropage.module.css";
import HeroNavBar from "./HeroNavBar";
import { FaLocationDot } from "react-icons/fa6";
import About from "./About";
import CommitteeMembers from "./CommitteeMembers";
import Gallery from "./Gallery";
import Location from "./Location";

const images = [
  "/images/image3.jpeg",
  "/images/image4.jpeg",
  "/images/image1.jpeg",
  "/images/image2.jpeg",
];

const HeroPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setAtTop(scrollY === 0);
      const heroHeight = window.innerHeight;
      setShowNavbar(scrollY > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div id="home" className={styles.heroBackground}>
        <div
          key={currentImageIndex}
          className={styles.backgroundImage}
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div>

        <div>
          <HeroNavBar show={showNavbar} />
        </div>
        <div className={styles.overlay}></div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            K
            <span className={styles.diamondImage}>
              <img src="/images/diamond2.png" alt="diamond" />
            </span>
            HINOOR
          </div>
          <div className={styles.subContent}> Co-op. Housing Society Ltd.</div>
          <div className={styles.locationName}>
            <FaLocationDot className={styles.locationIcon} /> Sanpada
          </div>
        </div>
      </div>
      <div id="about" className={styles.section}>
        <About />
      </div>
      <div id="members" className={styles.section}>
        <CommitteeMembers />
      </div>
      <div id="gallery" className={styles.section}>
        <Gallery />
      </div>
      <div id="location" className={styles.section}>
        <Location />
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${styles.scrollToTop} ${
          atTop ? styles.scrollToTopHidden : ""
        }`}
      >
        <FaAngleUp />
      </button>
    </div>
  );
};

export default HeroPage;
