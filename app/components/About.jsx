import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutHeadline}>
        <span className={styles.leftdesigns}>
          <img src="/images/sidedesigns.png" alt="side" />
        </span>
        About Kohinoor CHS.
        <span className={styles.rightdesigns}>
          <img src="/images/sidedesigns.png" alt="side" />
        </span>
      </div>

      <div className={styles.aboutPara}>
        <strong className={styles.impText}>KOHINOOR</strong> Co-operative
        Housing Society (CHS) was established with the completion of its
        building construction in{" "}
        <strong className={styles.impText}>March 2001</strong>. The society
        comprises a total of{" "}
        <strong className={styles.impText}>9 buildings</strong>, each
        thoughtfully designed to accommodate{" "}
        <strong className={styles.impText}>16 residential units</strong>, making
        it a well-planned and efficiently structured community. The management
        and day-to-day affairs of the society are overseen by a dedicated team
        of <strong className={styles.impText}>13 committee members</strong>,
        ensuring smooth operations and the well-being of all residents.
      </div>
      <div className={styles.partitionDes}>
        <img src="/images/partition.png" alt="image"/>
      </div>
    </div>
  );
};

export default About;
