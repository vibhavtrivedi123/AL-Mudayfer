import React from "react";
import styles from "./Responsibility.module.css";

// import value from ''

const Responsibility = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.heading}>Our Responsibility</div>
        </div>
        <div className={styles.right}>
          <div className={styles.right_line}></div>
          <div className={styles.right_heading}>
            Social, National, Environmental
          </div>
          <div className={styles.right_sub_heading}>
            Our responsibility extends beyond business success to encompass a
            commitment to societal and environmental well-being. We believe in
            contributing positively to the communities in which we operate,
            minimizing our environmental footprint, and promoting ethical and
            sustainable practices. Our responsibility is to serve as a catalyst
            for positive change, fostering social development, and environmental
            stewardship. Through transparent and accountable actions, we aim to
            inspire others and be recognized as a responsible corporate citizen
            dedicated to making a meaningful impact on the world.
          </div>
        </div>
      </div>
    </>
  );
};

export default Responsibility;
