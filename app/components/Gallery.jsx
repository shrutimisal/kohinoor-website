import React, { useState } from "react";
import styles from "./gallery.module.css";
import stylesAbt from "./about.module.css";

const photos = [
  "/images/image4.jpeg",
  "/images/image1.jpeg",
  "/images/image2.jpeg",
  "/images/image3.jpeg",
  "/images/Society Reg. Certificate.jpeg",
];

const Gallery = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const prev = () => {
    setCenterIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const next = () => {
    setCenterIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const getIndex = (index) => {
    if (index < 0) return photos.length - 1;
    if (index >= photos.length) return 0;
    return index;
  };

  const leftIndex = getIndex(centerIndex - 1);
  const rightIndex = getIndex(centerIndex + 1);

  return (
    <div className={stylesAbt.commContainer}>
      <div className={stylesAbt.commHeadline}>
        <span className={stylesAbt.leftdesigns}>
          <img src="/images/sidedesigns.png" alt="side" />
        </span>
        Gallery
        <span className={stylesAbt.rightdesigns}>
          <img src="/images/sidedesigns.png" alt="side" height={30} />
        </span>
      </div>

      <div className={styles.galleryContainer}>
        <button onClick={prev} className={styles.navButton}>
          &#8249;
        </button>

        <div className={styles.photosWrapper}>
          {[leftIndex, centerIndex, rightIndex].map((idx) => (
            <img
              key={idx}
              src={photos[idx]}
              alt={`Photo ${idx}`}
              className={
                idx === centerIndex ? styles.centerPhoto : styles.sidePhoto
              }
              onClick={() => setSelectedPhoto(photos[idx])} // NEW
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

        <button onClick={next} className={styles.navButton}>
          &#8250;
        </button>
      </div>
      <div className={stylesAbt.partitionDes}>
        <img src="/images/partition.png" alt="image" width={300} />
      </div>

      <div>
        <div className={stylesAbt.comm2Headline}>
          Society Registration Certificate
        </div>
        <div
          className={`${styles.societyCertificate} ${styles.galleryContainer}`}
        >
          <img
            src="/images/Society Reg. Certificate.jpeg"
            alt="soceityCertificate"
          />
        </div>
      </div>
      <div className={stylesAbt.partitionDes}>
        <img src="/images/partition.png" alt="image" width={300} />
      </div>

      {selectedPhoto && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedPhoto(null)}
        >
          <img
            src={selectedPhoto}
            alt="Full View"
            className={styles.modalImage}
            onClick={(e) => e.stopPropagation()} // Prevent close on image click
          />
          <button
            className={styles.closeButton}
            onClick={() => setSelectedPhoto(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
