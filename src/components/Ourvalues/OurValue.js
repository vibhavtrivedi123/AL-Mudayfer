import React, { useState, useTransition } from "react";
import styles from "./Ourvalue.module.css";
import { useTranslation } from "react-i18next";

// import value from ''

const OurValues = ({selectheading ,selectdescription ,otherheading ,otherdescription}) => {
  const [selected, setSelected] = useState(1);
  console.log(selected);

  const { t } = useTranslation();

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
            {selected === 1 ?   t('home.ourValues.selectHeading') : t('home.ourValues.otherHeading')}
          </div>
          <div className={styles.right_sub_heading}>
            {selected === 1
              ? t('home.ourValues.selectDescription')
              : t('home.ourValues.otherDescription') 
              }
          </div>
        </div>
      </div>
    </>
  );
};

export default OurValues;
