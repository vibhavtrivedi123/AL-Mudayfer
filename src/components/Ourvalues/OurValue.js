import React, { useState } from "react";
import styles from "./Ourvalue.module.css";

// import value from ''

const OurValues = () => {
  const [selected, setSelected] = useState(1);
  console.log(selected);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div
            className={selected === 1 ? styles.heading : styles.sub_heading}
            onClick={() => setSelected(1)}
          >
            our values
          </div>
          <div
            className={selected === 2 ? styles.heading : styles.sub_heading}
            onClick={() => setSelected(2)}
          >
            our vision
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.right_line}></div>
          <div className={styles.right_heading}>
            {selected === 1 ? " Quality, Reliability, Leadership" : "Vision"}
          </div>
          <div className={styles.right_sub_heading}>
            {selected === 1
              ? " We invested in building a nation, and in developing a human being,so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
              : "Striving for excellence in the world of investment and developing a global model for success, with a focus on continuous evolution and the enhancement of innovative values."}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurValues;
