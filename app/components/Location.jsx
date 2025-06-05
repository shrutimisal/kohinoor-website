import React from "react";
import styles from "./location.module.css";
import stylesAbt from "./about.module.css";

const Location = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={stylesAbt.locationContainer}>
      <div className={stylesAbt.locHeadline}>
        <span className={stylesAbt.leftdesigns}>
          <img src="/images/sidedesigns.png" alt="side" />
        </span>
        Location
        <span className={stylesAbt.rightdesigns}>
          <img src="/images/sidedesigns.png" alt="side" height={30} />
        </span>
      </div>

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
    <div className={styles.footerDiv}>content</div>
    </div>
  );
};

export default Location;
