import React from "react";
import styles from "./committeemembers.module.css";
import stylesAbt from "./about.module.css";

const mainMembers = [
  {
    id: 1,
    name: "DILIP LAXMAN NAIK",
    designation: "CHAIRMAN",
    image: "/images/chairman.jpeg",
  },
  {
    id: 2,
    name: "SAHEBRAO SAKHARAM MEMANE",
    designation: "TREASURER",
    image: "/images/treasurer.jpeg",
  },
  {
    id: 3,
    name: "MAHAVIR RAJGONDA SANGAVE",
    designation: "SECRETARY",
    image: "/images/secretary.jpeg",
  },
];

const members = [
  {
    id: 1,
    name: "ARUN CHANNAPPA LANDGE",
    image: "/images/ARUN CHANNAPPA LANDGE.jpeg",
  },
  {
    id: 2,
    name: "BHAGWAT HARIBA PAWAR",
    image: "/images/BHAGWAT HARIBA PAWAR.jpeg",
  },
  {
    id: 3,
    name: "DEVIDAS BAJIRAO GAIKWAD",
    image: "/images/DEVIDAS BAJIRAO GAIKWAD.jpeg",
  },
  {
    id: 4,
    name: "GULAB SHIVRAM BHAWAR",
    image: "/images/GULAB SHIVRAM BHAWAR.jpeg",
  },
  {
    id: 5,
    name: "JAYSINGH RAJARAM DANGARNE",
    image: "/images/JAYSINGH RAJARAM DANGARNE.jpeg",
  },
  {
    id: 6,
    name: "RESHMA SHANKAR PATIL",
    image: "/images/RESHMA SHANKAR PATIL.jpeg",
  },
  {
    id: 7,
    name: "MANIK PANDURANG TARU",
    image: "/images/MANIK PANDURANG TARU.jpeg",
  },
  {
    id: 8,
    name: "SANJAY RAGHUNATH SURVE",
    image: "/images/SANJAY RAGHUNATH SURVE.jpg",
  },
  {
    id: 9,
    name: "SHAMRAO RAMCHANDRA PAWAR",
    image: "/images/SHAMRAO RAMCHANDRA PAWAR.jpeg",
  },
  {
    id: 10,
    name: "VAISHALI MAHADEO MISTRY",
    image: "/images/VAISHALI MAHADEO MISTRY.jpg",
  },
];
const CommitteeMembers = () => {
  return (
    <div className={stylesAbt.commContainer}>
      <div className={stylesAbt.commHeadline}>
        <span className={stylesAbt.leftdesigns}>
          <img src="/images/sidedesigns.png" alt="side" />
        </span>
       Committee Members
        <span className={stylesAbt.rightdesigns}>
          <img src="/images/sidedesigns.png" alt="side" />
        </span>
      </div>
      <div className={styles.mainMembersContainer}>
        {mainMembers.map((member) => (
          <div key={member.id}>
            <div className={styles.mainMemberCard}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.memberImage}
              />
            </div>
            <div className={styles.mainMemberName}>{member.name}</div>
            <div className={styles.memberDesignation}>
              ~ {member.designation}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.membersContainer}>
        {members.map((member) => (
          <div key={member.id} className={styles.memberCard2}>
            <div className={styles.memberCard}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.memberImage}
              />
            </div>
            <div className={styles.memberName}>{member.name}</div>
          </div>
        ))}
      </div>
      <div className={stylesAbt.partitionDes}><img src="/images/partition.png" alt="image" width={300} /></div>
    </div>
  );
};

export default CommitteeMembers;
