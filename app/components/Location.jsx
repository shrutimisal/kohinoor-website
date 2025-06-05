import React from "react";
import styles from "./location.module.css";
import stylesAbt from "./about.module.css";
import stylesNav from "./heronavbar.module.css";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";

const Location = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={stylesAbt.locationContainer}>
        <div className={stylesAbt.locHeadline}>Location</div>

        <div className={styles.locationContainer}>
          <iframe
            title="Kohinoor Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7542.056784568965!2d73.00678907418376!3d19.06248925239857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c15b36f015c9%3A0xd344b047bb9aed37!2sKohinoor%20Cooperative%20Housing%20Society%2C%20Sector%208%2C%20Sanpada%2C%20Navi%20Mumbai%2C%20Maharashtra%20400705!5e0!3m2!1sen!2sin!4v1749110812974!5m2!1sen!2sin"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={styles.footerDiv}>
        <div>
          {" "}
          <Image
            src="/images/evhomeslogowhite.png"
            alt="EV Homes Logo"
            width={250}
            height={50}
            className={stylesNav.logoNav}
          />
        </div>
        {/* 
        <div className={styles.partitionDesFooter}>
          <img src="/images/partition.png" alt="image" />
        </div> */}

        <div className={styles.addSection}>
          <div className={styles.addHead}>Address</div>
          <div>
            2 ND Floor, Office No A-212, Vardhaman Chembers, Plot No 84, Sector
            17, Vashi, Navi Mumbai, Mumbai City, Maharashtra, 400703
          </div>
          {/* <div className={styles.phone}>Phone: +919820909893</div>
          <div>E-Mail: sales@evhomes.net</div> */}
        </div>
        <div className={styles.goBack} onClick={() => scrollToSection("home")}>
          <IoMdArrowBack />
          Go Back to Top
        </div>
      </div>
    </div>
  );
};

export default Location;
